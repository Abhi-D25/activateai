/**
 * Live Transcription Hook
 * 
 * Combines audio capture and Deepgram streaming for live transcription.
 * Handles token fetching, reconnection, and error states.
 */

'use client';

import { useState, useCallback, useRef, useEffect } from 'react';
import { AudioCaptureManager, SpeakerSource, AudioChunk } from '@/lib/audio-capture';
import { DeepgramClient, TranscriptResult } from '@/lib/deepgram-client';

export interface TranscriptionSegment {
  id: string;
  speaker: SpeakerSource;
  text: string;
  timestamp: number;
  confidence: number;
  isFinal: boolean;
}

export interface LiveTranscriptionState {
  isConnecting: boolean;
  isConnected: boolean;
  micActive: boolean;
  tabAudioActive: boolean;
  error: string | null;
}

export interface LiveTranscriptionOptions {
  accessKey: string;
  onTranscript: (segment: TranscriptionSegment) => void;
  onError: (error: string) => void;
}

interface TokenResponse {
  token: string;
  expiresIn: number;
  endpoint: string;
  params: Record<string, string | number | boolean>;
}

export function useLiveTranscription(options: LiveTranscriptionOptions) {
  const [state, setState] = useState<LiveTranscriptionState>({
    isConnecting: false,
    isConnected: false,
    micActive: false,
    tabAudioActive: false,
    error: null
  });

  const audioCaptureRef = useRef<AudioCaptureManager | null>(null);
  const abhiClientRef = useRef<DeepgramClient | null>(null);
  const prospectClientRef = useRef<DeepgramClient | null>(null);
  const tokenRef = useRef<TokenResponse | null>(null);
  const segmentIdRef = useRef(0);
  const tokenExpiryRef = useRef<number>(0);

  const fetchToken = useCallback(async (): Promise<TokenResponse> => {
    const now = Date.now();
    if (tokenRef.current && tokenExpiryRef.current > now + 60000) {
      return tokenRef.current;
    }

    const response = await fetch('/api/token', {
      method: 'POST',
      headers: {
        'x-access-key': options.accessKey,
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) {
      const error = await response.json().catch(() => ({ error: 'Unknown error' }));
      throw new Error(error.error || 'Failed to get token');
    }

    const data = await response.json();
    tokenRef.current = data;
    tokenExpiryRef.current = now + (data.expiresIn * 1000);
    return data;
  }, [options.accessKey]);

  const createDeepgramClient = useCallback((
    token: TokenResponse,
    source: SpeakerSource
  ): DeepgramClient => {
    return new DeepgramClient({
      token: token.token,
      endpoint: token.endpoint,
      params: token.params,
      onTranscript: (result: TranscriptResult) => {
        if (result.text.trim()) {
          options.onTranscript({
            id: `live-${source}-${++segmentIdRef.current}`,
            speaker: source,
            text: result.text,
            timestamp: Date.now(),
            confidence: result.confidence,
            isFinal: result.isFinal
          });
        }
      },
      onError: (error: Error) => {
        const message = source === 'abhi' 
          ? 'Microphone transcription error' 
          : 'Tab audio transcription error';
        options.onError(`${message}: ${error.message}`);
      },
      onOpen: () => {
        setState(prev => ({ ...prev, isConnected: true, isConnecting: false }));
      },
      onClose: () => {
        if (source === 'abhi') {
          setState(prev => ({ ...prev, micActive: false }));
        } else {
          setState(prev => ({ ...prev, tabAudioActive: false }));
        }
      }
    });
  }, [options]);

  const handleAudioData = useCallback((chunk: AudioChunk) => {
    if (chunk.source === 'abhi' && abhiClientRef.current?.isConnected()) {
      abhiClientRef.current.sendAudio(chunk.data);
    } else if (chunk.source === 'prospect' && prospectClientRef.current?.isConnected()) {
      prospectClientRef.current.sendAudio(chunk.data);
    }
  }, []);

  const startMicrophone = useCallback(async () => {
    if (state.micActive) return;

    setState(prev => ({ ...prev, isConnecting: true, error: null }));

    try {
      const token = await fetchToken();

      if (!audioCaptureRef.current) {
        audioCaptureRef.current = new AudioCaptureManager({
          onAudioData: handleAudioData,
          onError: (error, source) => {
            options.onError(`${source === 'abhi' ? 'Microphone' : 'Tab audio'} error: ${error.message}`);
          },
          onStreamStarted: (source) => {
            if (source === 'abhi') {
              setState(prev => ({ ...prev, micActive: true }));
            }
          },
          onStreamStopped: (source) => {
            if (source === 'abhi') {
              setState(prev => ({ ...prev, micActive: false }));
            }
          }
        });
      }

      abhiClientRef.current = createDeepgramClient(token, 'abhi');
      abhiClientRef.current.connect();
      await audioCaptureRef.current.startMicrophone();
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Failed to start microphone';
      setState(prev => ({ ...prev, isConnecting: false, error: message }));
      options.onError(message);
    }
  }, [state.micActive, fetchToken, handleAudioData, createDeepgramClient, options]);

  const startTabAudio = useCallback(async () => {
    if (state.tabAudioActive) return;

    setState(prev => ({ ...prev, isConnecting: true, error: null }));

    try {
      const token = await fetchToken();

      if (!audioCaptureRef.current) {
        audioCaptureRef.current = new AudioCaptureManager({
          onAudioData: handleAudioData,
          onError: (error, source) => {
            options.onError(`${source === 'abhi' ? 'Microphone' : 'Tab audio'} error: ${error.message}`);
          },
          onStreamStarted: (source) => {
            if (source === 'prospect') {
              setState(prev => ({ ...prev, tabAudioActive: true }));
            }
          },
          onStreamStopped: (source) => {
            if (source === 'prospect') {
              setState(prev => ({ ...prev, tabAudioActive: false }));
            }
          }
        });
      }

      prospectClientRef.current = createDeepgramClient(token, 'prospect');
      prospectClientRef.current.connect();
      await audioCaptureRef.current.startTabAudio();
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Failed to start tab audio';
      setState(prev => ({ ...prev, isConnecting: false, error: message }));
      options.onError(message);
    }
  }, [state.tabAudioActive, fetchToken, handleAudioData, createDeepgramClient, options]);

  const stopMicrophone = useCallback(() => {
    abhiClientRef.current?.close();
    abhiClientRef.current = null;
    audioCaptureRef.current?.stopMicrophone();
    setState(prev => ({ ...prev, micActive: false }));
  }, []);

  const stopTabAudio = useCallback(() => {
    prospectClientRef.current?.close();
    prospectClientRef.current = null;
    audioCaptureRef.current?.stopTabAudio();
    setState(prev => ({ ...prev, tabAudioActive: false }));
  }, []);

  const stopAll = useCallback(() => {
    stopMicrophone();
    stopTabAudio();
    audioCaptureRef.current?.stopAll();
    audioCaptureRef.current = null;
    setState(prev => ({ ...prev, isConnected: false, isConnecting: false }));
  }, [stopMicrophone, stopTabAudio]);

  useEffect(() => {
    return () => {
      abhiClientRef.current?.close();
      prospectClientRef.current?.close();
      audioCaptureRef.current?.stopAll();
    };
  }, []);

  return {
    state,
    startMicrophone,
    startTabAudio,
    stopMicrophone,
    stopTabAudio,
    stopAll
  };
}
