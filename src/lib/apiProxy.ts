// src/lib/apiProxy.ts

/**
 * This module provides a production-ready API proxy for the chatbot
 * to communicate with the n8n workflow.
 */

// Import types
import { chatConfig } from './chatConfig';

// Define the response type from the n8n workflow
export interface N8nResponse {
  response?: string;
  message?: string;
  metadata?: Record<string, any>;
  [key: string]: any;
}

// Define the request type to send to the n8n workflow
export interface ChatRequest {
  message: string;
  history?: Array<{
    text: string;
    sender: 'user' | 'bot';
    timestamp: string;
  }>;
  userId?: string;
  sessionId?: string;
  [key: string]: any;
}

/**
 * Send a message to the n8n workflow and get the response
 */
export async function sendMessageToN8n(
  message: string,
  options: {
    history?: Array<{ text: string; sender: 'user' | 'bot'; timestamp: Date | string }>;
    userId?: string;
    sessionId?: string;
    timeout?: number;
    additionalData?: Record<string, any>;
  } = {}
): Promise<{ success: boolean; response: string; metadata?: Record<string, any> }> {
  // Get the webhook URL from environment variables or config
  const webhookUrl = process.env.N8N_WEBHOOK_URL || chatConfig.endpoint;
  
  // Set up request timeout
  const timeoutMs = options.timeout || 10000; // Default 10 seconds
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeoutMs);
  
  try {
    // Format the history to ensure consistent format
    const formattedHistory = options.history?.map(msg => ({
      text: msg.text,
      sender: msg.sender as 'user' | 'bot',
      timestamp: msg.timestamp instanceof Date ? msg.timestamp.toISOString() : msg.timestamp
    }));
    
    // For GET webhooks, we need to encode parameters in the URL
    const params = new URLSearchParams({
      message: message,
      userId: options.userId || 'anonymous',
      sessionId: options.sessionId || `session_${Date.now()}`,
      source: 'website',
      timestamp: new Date().toISOString(),
    });
    
    // Add history as a JSON string if provided
    if (formattedHistory && formattedHistory.length > 0) {
      params.append('history', JSON.stringify(formattedHistory));
    }
    
    // Add any additional data
    if (options.additionalData) {
      for (const [key, value] of Object.entries(options.additionalData)) {
        if (typeof value === 'object') {
          params.append(key, JSON.stringify(value));
        } else {
          params.append(key, String(value));
        }
      }
    }
    
    // Build the full URL with parameters
    const fullUrl = `${webhookUrl}?${params.toString()}`;
    
    // Make the request to the n8n webhook
    const response = await fetch(fullUrl, {
      method: 'GET', // Using GET method
      signal: controller.signal
    });
    
    // Clear the timeout since we received a response
    clearTimeout(timeoutId);
    
    // Check if the request was successful
    if (!response.ok) {
      throw new Error(`Failed to get response from n8n: ${response.status} ${response.statusText}`);
    }
    
    // Parse the response
    const data: N8nResponse = await response.json();
    
    // Return the response
    return {
      success: true,
      response: data.response || data.message || "I processed your request, but didn't receive a specific response.",
      metadata: data.metadata
    };
  } catch (error) {
    // Clear the timeout
    clearTimeout(timeoutId);
    
    // Handle timeout errors
    if (error instanceof Error && error.name === 'AbortError') {
      return {
        success: false,
        response: "I'm taking longer than expected to respond. Please try again in a moment."
      };
    }
    
    // Handle other errors
    console.error('Error sending message to n8n:', error);
    return {
      success: false,
      response: "Sorry, I couldn't connect to my knowledge source. Please try again later."
    };
  }
}

/**
 * Helper function to process and clean user input
 */
export function preprocessUserMessage(message: string): string {
  // Trim whitespace
  let processed = message.trim();
  
  // Remove any HTML/script tags for safety
  processed = processed.replace(/<[^>]*>/g, '');
  
  // Limit length if needed
  const maxLength = chatConfig.rateLimit.messageMaxLength;
  if (processed.length > maxLength) {
    processed = processed.substring(0, maxLength);
  }
  
  return processed;
}

/**
 * Helper function to log chat analytics
 */
export function logChatAnalytics(
  event: 'message_sent' | 'message_received' | 'chat_opened' | 'chat_closed',
  data: Record<string, any> = {}
): void {
  // Only log if analytics is enabled
  if (!chatConfig.advanced.analyticsEnabled) return;
  
  try {
    // Example implementation - replace with your analytics service
    const analyticsData = {
      event,
      timestamp: new Date().toISOString(),
      ...data
    };
    
    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.log('Chat analytics:', analyticsData);
    }
    
    // Send to your analytics service here
    // e.g., fetch('/api/analytics', { method: 'POST', body: JSON.stringify(analyticsData) });
  } catch (error) {
    console.error('Error logging chat analytics:', error);
  }
}