/**
 * Tests for audio capture manager
 * 
 * Uses mocked MediaDevices and AudioContext to test capture setup,
 * cleanup, and error handling.
 */

import { AudioCaptureManager, AudioCaptureOptions, AudioChunk, SpeakerSource } from '../src/lib/audio-capture';

class MockMediaStreamTrack {
  kind: string;
  enabled = true;
  
  constructor(kind: string) {
    this.kind = kind;
  }
  
  stop() {
    this.enabled = false;
  }
}

class MockMediaStream {
  private tracks: MockMediaStreamTrack[] = [];
  
  constructor(tracks?: MockMediaStreamTrack[]) {
    this.tracks = tracks || [new MockMediaStreamTrack('audio')];
  }
  
  getTracks() {
    return this.tracks;
  }
  
  getAudioTracks() {
    return this.tracks.filter(t => t.kind === 'audio');
  }
  
  getVideoTracks() {
    return this.tracks.filter(t => t.kind === 'video');
  }
  
  removeTrack(track: MockMediaStreamTrack) {
    this.tracks = this.tracks.filter(t => t !== track);
  }
}

class MockAudioWorkletNode {
  port = {
    onmessage: null as ((event: MessageEvent) => void) | null,
    postMessage: jest.fn()
  };
  
  connect = jest.fn();
  disconnect = jest.fn();
}

class MockMediaStreamAudioSourceNode {
  connect = jest.fn();
  disconnect = jest.fn();
}

class MockAudioContext {
  sampleRate = 48000;
  destination = {};
  state = 'running';
  
  audioWorklet = {
    addModule: jest.fn().mockResolvedValue(undefined)
  };
  
  createMediaStreamSource = jest.fn().mockReturnValue(new MockMediaStreamAudioSourceNode());
  close = jest.fn().mockResolvedValue(undefined);
}

const createMockOptions = (): AudioCaptureOptions => ({
  onAudioData: jest.fn(),
  onError: jest.fn(),
  onStreamStarted: jest.fn(),
  onStreamStopped: jest.fn()
});

describe('AudioCaptureManager', () => {
  let originalNavigator: Navigator;
  let originalAudioContext: typeof globalThis.AudioContext;
  let originalAudioWorkletNode: typeof globalThis.AudioWorkletNode;
  let originalURL: typeof globalThis.URL;
  
  beforeAll(() => {
    originalNavigator = globalThis.navigator;
    originalAudioContext = globalThis.AudioContext;
    originalAudioWorkletNode = globalThis.AudioWorkletNode;
    originalURL = globalThis.URL;
    
    Object.defineProperty(globalThis, 'navigator', {
      value: {
        mediaDevices: {
          getUserMedia: jest.fn(),
          getDisplayMedia: jest.fn()
        }
      },
      writable: true
    });
    
    // @ts-expect-error Mock AudioContext for testing
    globalThis.AudioContext = MockAudioContext;
    // @ts-expect-error Mock AudioWorkletNode for testing
    globalThis.AudioWorkletNode = MockAudioWorkletNode;
    
    globalThis.URL.createObjectURL = jest.fn().mockReturnValue('blob:test');
    globalThis.URL.revokeObjectURL = jest.fn();
  });
  
  afterAll(() => {
    Object.defineProperty(globalThis, 'navigator', { value: originalNavigator });
    globalThis.AudioContext = originalAudioContext;
    globalThis.AudioWorkletNode = originalAudioWorkletNode;
    globalThis.URL = originalURL;
  });
  
  beforeEach(() => {
    jest.clearAllMocks();
    (navigator.mediaDevices.getUserMedia as jest.Mock).mockResolvedValue(new MockMediaStream());
    (navigator.mediaDevices.getDisplayMedia as jest.Mock).mockResolvedValue(
      new MockMediaStream([
        new MockMediaStreamTrack('video'),
        new MockMediaStreamTrack('audio')
      ])
    );
  });
  
  test('starts microphone capture', async () => {
    const options = createMockOptions();
    const manager = new AudioCaptureManager(options);
    
    await manager.startMicrophone();
    
    expect(navigator.mediaDevices.getUserMedia).toHaveBeenCalledWith({
      audio: expect.objectContaining({
        channelCount: 1,
        sampleRate: 48000,
        echoCancellation: true,
        noiseSuppression: true
      })
    });
    
    expect(options.onStreamStarted).toHaveBeenCalledWith('abhi');
    expect(manager.isMicrophoneActive()).toBe(true);
  });
  
  test('starts tab audio capture', async () => {
    const options = createMockOptions();
    const manager = new AudioCaptureManager(options);
    
    await manager.startTabAudio();
    
    expect(navigator.mediaDevices.getDisplayMedia).toHaveBeenCalledWith({
      video: true,
      audio: expect.objectContaining({
        channelCount: 1,
        echoCancellation: false
      })
    });
    
    expect(options.onStreamStarted).toHaveBeenCalledWith('prospect');
    expect(manager.isTabAudioActive()).toBe(true);
  });
  
  test('stops video track when capturing tab audio', async () => {
    const videoTrack = new MockMediaStreamTrack('video');
    const audioTrack = new MockMediaStreamTrack('audio');
    const stream = new MockMediaStream([videoTrack, audioTrack]);
    
    (navigator.mediaDevices.getDisplayMedia as jest.Mock).mockResolvedValue(stream);
    
    const options = createMockOptions();
    const manager = new AudioCaptureManager(options);
    
    await manager.startTabAudio();
    
    expect(videoTrack.enabled).toBe(false);
  });
  
  test('throws error when tab audio has no audio track', async () => {
    const stream = new MockMediaStream([new MockMediaStreamTrack('video')]);
    (navigator.mediaDevices.getDisplayMedia as jest.Mock).mockResolvedValue(stream);
    
    const options = createMockOptions();
    const manager = new AudioCaptureManager(options);
    
    await expect(manager.startTabAudio()).rejects.toThrow('No audio track available');
    expect(options.onError).toHaveBeenCalledWith(
      expect.any(Error),
      'prospect'
    );
  });
  
  test('stops microphone capture', async () => {
    const options = createMockOptions();
    const manager = new AudioCaptureManager(options);
    
    await manager.startMicrophone();
    manager.stopMicrophone();
    
    expect(options.onStreamStopped).toHaveBeenCalledWith('abhi');
    expect(manager.isMicrophoneActive()).toBe(false);
  });
  
  test('stops tab audio capture', async () => {
    const options = createMockOptions();
    const manager = new AudioCaptureManager(options);
    
    await manager.startTabAudio();
    manager.stopTabAudio();
    
    expect(options.onStreamStopped).toHaveBeenCalledWith('prospect');
    expect(manager.isTabAudioActive()).toBe(false);
  });
  
  test('stopAll cleans up everything', async () => {
    const options = createMockOptions();
    const manager = new AudioCaptureManager(options);
    
    await manager.startMicrophone();
    await manager.startTabAudio();
    
    manager.stopAll();
    
    expect(manager.isMicrophoneActive()).toBe(false);
    expect(manager.isTabAudioActive()).toBe(false);
    expect(URL.revokeObjectURL).toHaveBeenCalled();
  });
  
  test('handles getUserMedia error', async () => {
    (navigator.mediaDevices.getUserMedia as jest.Mock).mockRejectedValue(
      new Error('Permission denied')
    );
    
    const options = createMockOptions();
    const manager = new AudioCaptureManager(options);
    
    await expect(manager.startMicrophone()).rejects.toThrow('Permission denied');
    expect(options.onError).toHaveBeenCalledWith(
      expect.any(Error),
      'abhi'
    );
    expect(manager.isMicrophoneActive()).toBe(false);
  });
  
  test('does not start microphone twice', async () => {
    const options = createMockOptions();
    const manager = new AudioCaptureManager(options);
    
    await manager.startMicrophone();
    await manager.startMicrophone();
    
    expect(navigator.mediaDevices.getUserMedia).toHaveBeenCalledTimes(1);
  });
  
  test('does not start tab audio twice', async () => {
    const options = createMockOptions();
    const manager = new AudioCaptureManager(options);
    
    await manager.startTabAudio();
    await manager.startTabAudio();
    
    expect(navigator.mediaDevices.getDisplayMedia).toHaveBeenCalledTimes(1);
  });
});
