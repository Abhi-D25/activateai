/**
 * AudioWorklet processor code (runs in audio thread)
 * 
 * Converts Float32 48kHz audio to Int16 16kHz PCM for Deepgram streaming.
 * This string is registered as a Blob URL at runtime.
 */

export const AUDIO_WORKLET_CODE = `
class PCMProcessor extends AudioWorkletProcessor {
  constructor() {
    super();
    this.buffer = [];
    this.targetSampleRate = 16000;
    this.sourceSampleRate = 48000;
    this.ratio = this.sourceSampleRate / this.targetSampleRate;
    this.lastSample = 0;
  }

  downsample(inputData) {
    const outputLength = Math.floor(inputData.length / this.ratio);
    const output = new Int16Array(outputLength);
    
    for (let i = 0; i < outputLength; i++) {
      const srcIndex = Math.floor(i * this.ratio);
      const sample = inputData[srcIndex];
      const int16 = Math.max(-32768, Math.min(32767, Math.round(sample * 32767)));
      output[i] = int16;
    }
    
    return output;
  }

  process(inputs) {
    const input = inputs[0];
    if (!input || input.length === 0 || !input[0] || input[0].length === 0) {
      return true;
    }

    const channelData = input[0];
    const pcmData = this.downsample(channelData);
    
    if (pcmData.length > 0) {
      this.port.postMessage({
        type: 'audio',
        data: pcmData.buffer
      }, [pcmData.buffer]);
    }

    return true;
  }
}

registerProcessor('pcm-processor', PCMProcessor);
`;

export function createAudioWorkletBlobUrl(): string {
  const blob = new Blob([AUDIO_WORKLET_CODE], { type: 'application/javascript' });
  return URL.createObjectURL(blob);
}
