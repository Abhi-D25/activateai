/**
 * Audio Capture Manager
 * 
 * Handles capturing audio from:
 * - Microphone (for Abhi's voice)
 * - Tab audio via getDisplayMedia (for prospect's voice from Meet/Zoom)
 * 
 * Each stream is processed through an AudioWorklet and labeled by source.
 */

import { createAudioWorkletBlobUrl } from './audio-processor';

export type SpeakerSource = 'abhi' | 'prospect';

export interface AudioChunk {
  source: SpeakerSource;
  data: ArrayBuffer;
  timestamp: number;
}

export interface AudioCaptureOptions {
  onAudioData: (chunk: AudioChunk) => void;
  onError: (error: Error, source: SpeakerSource) => void;
  onStreamStarted: (source: SpeakerSource) => void;
  onStreamStopped: (source: SpeakerSource) => void;
}

interface StreamState {
  stream: MediaStream;
  audioContext: AudioContext;
  sourceNode: MediaStreamAudioSourceNode;
  workletNode: AudioWorkletNode;
}

export class AudioCaptureManager {
  private options: AudioCaptureOptions;
  private micStream: StreamState | null = null;
  private tabStream: StreamState | null = null;
  private workletUrl: string | null = null;

  constructor(options: AudioCaptureOptions) {
    this.options = options;
  }

  async startMicrophone(): Promise<void> {
    if (this.micStream) {
      return;
    }

    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: {
          channelCount: 1,
          sampleRate: 48000,
          echoCancellation: true,
          noiseSuppression: true,
          autoGainControl: true
        }
      });

      this.micStream = await this.setupAudioPipeline(stream, 'abhi');
      this.options.onStreamStarted('abhi');
    } catch (error) {
      const err = error instanceof Error ? error : new Error('Failed to access microphone');
      this.options.onError(err, 'abhi');
      throw err;
    }
  }

  async startTabAudio(): Promise<void> {
    if (this.tabStream) {
      return;
    }

    try {
      const stream = await navigator.mediaDevices.getDisplayMedia({
        video: true,
        audio: {
          channelCount: 1,
          sampleRate: 48000,
          echoCancellation: false,
          noiseSuppression: false,
          autoGainControl: false
        }
      });

      const videoTrack = stream.getVideoTracks()[0];
      if (videoTrack) {
        videoTrack.stop();
        stream.removeTrack(videoTrack);
      }

      const audioTracks = stream.getAudioTracks();
      if (audioTracks.length === 0) {
        throw new Error('No audio track available. Make sure to share a tab with audio enabled.');
      }

      this.tabStream = await this.setupAudioPipeline(stream, 'prospect');
      this.options.onStreamStarted('prospect');
    } catch (error) {
      const err = error instanceof Error ? error : new Error('Failed to capture tab audio');
      this.options.onError(err, 'prospect');
      throw err;
    }
  }

  private async setupAudioPipeline(stream: MediaStream, source: SpeakerSource): Promise<StreamState> {
    const audioContext = new AudioContext({ sampleRate: 48000 });

    if (!this.workletUrl) {
      this.workletUrl = createAudioWorkletBlobUrl();
    }

    await audioContext.audioWorklet.addModule(this.workletUrl);

    const sourceNode = audioContext.createMediaStreamSource(stream);
    const workletNode = new AudioWorkletNode(audioContext, 'pcm-processor');

    workletNode.port.onmessage = (event) => {
      if (event.data.type === 'audio') {
        this.options.onAudioData({
          source,
          data: event.data.data,
          timestamp: Date.now()
        });
      }
    };

    sourceNode.connect(workletNode);
    workletNode.connect(audioContext.destination);

    return { stream, audioContext, sourceNode, workletNode };
  }

  stopMicrophone(): void {
    if (this.micStream) {
      this.cleanupStream(this.micStream);
      this.micStream = null;
      this.options.onStreamStopped('abhi');
    }
  }

  stopTabAudio(): void {
    if (this.tabStream) {
      this.cleanupStream(this.tabStream);
      this.tabStream = null;
      this.options.onStreamStopped('prospect');
    }
  }

  stopAll(): void {
    this.stopMicrophone();
    this.stopTabAudio();
    
    if (this.workletUrl) {
      URL.revokeObjectURL(this.workletUrl);
      this.workletUrl = null;
    }
  }

  private cleanupStream(state: StreamState): void {
    try {
      state.workletNode.disconnect();
      state.sourceNode.disconnect();
      state.audioContext.close();
      state.stream.getTracks().forEach(track => track.stop());
    } catch {
      // Ignore cleanup errors
    }
  }

  isMicrophoneActive(): boolean {
    return this.micStream !== null;
  }

  isTabAudioActive(): boolean {
    return this.tabStream !== null;
  }
}
