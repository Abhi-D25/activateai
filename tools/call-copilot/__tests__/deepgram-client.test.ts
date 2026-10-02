/**
 * Tests for Deepgram streaming client
 * 
 * Uses mocked WebSocket to test connection handling, message parsing,
 * and reconnection logic.
 */

import { DeepgramClient, DeepgramClientOptions, TranscriptResult } from '../src/lib/deepgram-client';

class MockWebSocket {
  static instances: MockWebSocket[] = [];
  static CONNECTING = 0;
  static OPEN = 1;
  static CLOSING = 2;
  static CLOSED = 3;
  
  readyState = MockWebSocket.CONNECTING;
  binaryType = 'arraybuffer';
  url: string;
  protocols: string | string[];
  
  onopen: (() => void) | null = null;
  onmessage: ((event: { data: string }) => void) | null = null;
  onerror: (() => void) | null = null;
  onclose: ((event: { code: number }) => void) | null = null;
  
  sentMessages: (string | ArrayBuffer)[] = [];
  
  constructor(url: string, protocols?: string | string[]) {
    this.url = url;
    this.protocols = protocols || [];
    MockWebSocket.instances.push(this);
  }
  
  send(data: string | ArrayBuffer) {
    this.sentMessages.push(data);
  }
  
  close() {
    this.readyState = MockWebSocket.CLOSED;
    if (this.onclose) this.onclose({ code: 1000 });
  }
  
  simulateOpen() {
    this.readyState = MockWebSocket.OPEN;
    if (this.onopen) this.onopen();
  }
  
  simulateMessage(data: object) {
    if (this.onmessage) {
      this.onmessage({ data: JSON.stringify(data) });
    }
  }
  
  simulateError() {
    if (this.onerror) this.onerror();
  }
  
  simulateClose(code = 1000) {
    this.readyState = MockWebSocket.CLOSED;
    if (this.onclose) this.onclose({ code });
  }
}

describe('DeepgramClient', () => {
  let originalWebSocket: typeof globalThis.WebSocket;
  
  beforeAll(() => {
    originalWebSocket = globalThis.WebSocket;
    // @ts-expect-error Mock WebSocket for testing
    globalThis.WebSocket = MockWebSocket;
  });
  
  afterAll(() => {
    globalThis.WebSocket = originalWebSocket;
  });
  
  beforeEach(() => {
    MockWebSocket.instances = [];
  });
  
  const createClient = (overrides: Partial<DeepgramClientOptions> = {}) => {
    const defaultOptions: DeepgramClientOptions = {
      token: 'test-token',
      endpoint: 'wss://api.deepgram.com/v1/listen',
      params: { model: 'nova-3', mip_opt_out: true },
      onTranscript: jest.fn(),
      onError: jest.fn(),
      onOpen: jest.fn(),
      onClose: jest.fn()
    };
    return new DeepgramClient({ ...defaultOptions, ...overrides });
  };
  
  test('connects with token in subprotocol', () => {
    const client = createClient({ token: 'my-jwt-token' });
    client.connect();
    
    expect(MockWebSocket.instances.length).toBe(1);
    const ws = MockWebSocket.instances[0];
    expect(ws.protocols).toEqual(['token', 'my-jwt-token']);
  });
  
  test('builds URL with params', () => {
    const client = createClient({
      endpoint: 'wss://api.deepgram.com/v1/listen',
      params: { model: 'nova-3', language: 'en', mip_opt_out: true }
    });
    client.connect();
    
    const ws = MockWebSocket.instances[0];
    expect(ws.url).toContain('model=nova-3');
    expect(ws.url).toContain('language=en');
    expect(ws.url).toContain('mip_opt_out=true');
  });
  
  test('calls onOpen when connection opens', () => {
    const onOpen = jest.fn();
    const client = createClient({ onOpen });
    client.connect();
    
    MockWebSocket.instances[0].simulateOpen();
    expect(onOpen).toHaveBeenCalledTimes(1);
  });
  
  test('parses transcript results', () => {
    const onTranscript = jest.fn();
    const client = createClient({ onTranscript });
    client.connect();
    
    const ws = MockWebSocket.instances[0];
    ws.simulateOpen();
    
    ws.simulateMessage({
      type: 'Results',
      is_final: true,
      channel: {
        alternatives: [{
          transcript: 'Hello world',
          confidence: 0.95,
          words: [{ word: 'Hello', start: 0, end: 0.5, confidence: 0.95 }]
        }]
      }
    });
    
    expect(onTranscript).toHaveBeenCalledWith({
      text: 'Hello world',
      isFinal: true,
      confidence: 0.95,
      words: [{ word: 'Hello', start: 0, end: 0.5, confidence: 0.95 }]
    });
  });
  
  test('sends audio data when connected', () => {
    const client = createClient();
    client.connect();
    
    const ws = MockWebSocket.instances[0];
    ws.simulateOpen();
    
    const audioData = new ArrayBuffer(1024);
    client.sendAudio(audioData);
    
    expect(ws.sentMessages).toContain(audioData);
  });
  
  test('does not send audio when not connected', () => {
    const client = createClient();
    client.connect();
    
    const audioData = new ArrayBuffer(1024);
    client.sendAudio(audioData);
    
    const ws = MockWebSocket.instances[0];
    expect(ws.sentMessages.length).toBe(0);
  });
  
  test('sends CloseStream message on close', () => {
    const client = createClient();
    client.connect();
    
    const ws = MockWebSocket.instances[0];
    ws.simulateOpen();
    
    client.close();
    
    const closeMessage = ws.sentMessages.find(m => 
      typeof m === 'string' && m.includes('CloseStream')
    );
    expect(closeMessage).toBeDefined();
  });
  
  test('calls onError on WebSocket error', () => {
    const onError = jest.fn();
    const client = createClient({ onError });
    client.connect();
    
    MockWebSocket.instances[0].simulateError();
    expect(onError).toHaveBeenCalled();
  });
  
  test('isConnected returns correct state', () => {
    const client = createClient();
    expect(client.isConnected()).toBe(false);
    
    client.connect();
    expect(client.isConnected()).toBe(false);
    
    MockWebSocket.instances[0].simulateOpen();
    expect(client.isConnected()).toBe(true);
    
    client.close();
    expect(client.isConnected()).toBe(false);
  });
  
  test('ignores malformed messages', () => {
    const onTranscript = jest.fn();
    const client = createClient({ onTranscript });
    client.connect();
    
    const ws = MockWebSocket.instances[0];
    ws.simulateOpen();
    
    ws.simulateMessage({ type: 'Metadata' });
    ws.simulateMessage({ type: 'Results' });
    ws.simulateMessage({ type: 'Results', channel: {} });
    
    expect(onTranscript).not.toHaveBeenCalled();
  });
  
  test('handles interim (non-final) results', () => {
    const onTranscript = jest.fn();
    const client = createClient({ onTranscript });
    client.connect();
    
    const ws = MockWebSocket.instances[0];
    ws.simulateOpen();
    
    ws.simulateMessage({
      type: 'Results',
      is_final: false,
      channel: {
        alternatives: [{
          transcript: 'Hell',
          confidence: 0.8
        }]
      }
    });
    
    expect(onTranscript).toHaveBeenCalledWith(
      expect.objectContaining({
        text: 'Hell',
        isFinal: false
      })
    );
  });
});
