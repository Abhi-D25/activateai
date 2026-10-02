/**
 * Deepgram Streaming Client
 * 
 * Handles WebSocket connection to Deepgram's live transcription API.
 * Uses temporary tokens (JWT) for authentication via WebSocket subprotocol.
 */

export interface TranscriptResult {
  text: string;
  isFinal: boolean;
  confidence: number;
  words?: Array<{
    word: string;
    start: number;
    end: number;
    confidence: number;
  }>;
}

export interface DeepgramClientOptions {
  token: string;
  endpoint: string;
  params: Record<string, string | number | boolean>;
  onTranscript: (result: TranscriptResult) => void;
  onError: (error: Error) => void;
  onOpen: () => void;
  onClose: () => void;
}

export class DeepgramClient {
  private ws: WebSocket | null = null;
  private options: DeepgramClientOptions;
  private keepAliveInterval: ReturnType<typeof setInterval> | null = null;
  private reconnectAttempts = 0;
  private maxReconnectAttempts = 3;
  private isClosing = false;

  constructor(options: DeepgramClientOptions) {
    this.options = options;
  }

  connect(): void {
    if (this.ws?.readyState === WebSocket.OPEN) {
      return;
    }

    this.isClosing = false;

    const params = new URLSearchParams();
    for (const [key, value] of Object.entries(this.options.params)) {
      params.set(key, String(value));
    }
    
    const url = `${this.options.endpoint}?${params.toString()}`;
    
    this.ws = new WebSocket(url, ['token', this.options.token]);
    this.ws.binaryType = 'arraybuffer';

    this.ws.onopen = () => {
      this.reconnectAttempts = 0;
      this.startKeepAlive();
      this.options.onOpen();
    };

    this.ws.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);
        
        if (data.type === 'Results' && data.channel?.alternatives?.[0]) {
          const alt = data.channel.alternatives[0];
          this.options.onTranscript({
            text: alt.transcript || '',
            isFinal: data.is_final === true,
            confidence: alt.confidence || 0,
            words: alt.words
          });
        }
      } catch {
        // Ignore malformed messages
      }
    };

    this.ws.onerror = () => {
      this.options.onError(new Error('WebSocket connection error'));
    };

    this.ws.onclose = (event) => {
      this.stopKeepAlive();
      
      if (!this.isClosing && this.reconnectAttempts < this.maxReconnectAttempts) {
        this.reconnectAttempts++;
        const delay = Math.pow(2, this.reconnectAttempts) * 1000;
        setTimeout(() => this.connect(), delay);
      } else {
        this.options.onClose();
      }
    };
  }

  sendAudio(data: ArrayBuffer): void {
    if (this.ws?.readyState === WebSocket.OPEN) {
      this.ws.send(data);
    }
  }

  close(): void {
    this.isClosing = true;
    this.stopKeepAlive();
    
    if (this.ws) {
      if (this.ws.readyState === WebSocket.OPEN) {
        const closeMessage = JSON.stringify({ type: 'CloseStream' });
        this.ws.send(closeMessage);
      }
      this.ws.close();
      this.ws = null;
    }
  }

  isConnected(): boolean {
    return this.ws?.readyState === WebSocket.OPEN;
  }

  private startKeepAlive(): void {
    this.keepAliveInterval = setInterval(() => {
      if (this.ws?.readyState === WebSocket.OPEN) {
        this.ws.send(JSON.stringify({ type: 'KeepAlive' }));
      }
    }, 10000);
  }

  private stopKeepAlive(): void {
    if (this.keepAliveInterval) {
      clearInterval(this.keepAliveInterval);
      this.keepAliveInterval = null;
    }
  }
}
