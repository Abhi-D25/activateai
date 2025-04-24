// src/lib/chatConfig.ts

// Chat configuration
export const chatConfig = {
    // API endpoint for the chat
    endpoint: '/api/chat',
    
    // Initial welcome message
    welcomeMessage: 'Hello! I\'m Axel, your ActivateAI assistant. How can I help you with AI solutions for your business today?',
    
    // Visual settings
    ui: {
      mainColor: 'blue',
      chatButtonPosition: 'bottom-right',
      darkMode: true,
    },
    
    // Feature flags
    features: {
      typingIndicator: true,
      timestampDisplay: true,
      soundEffects: false,
      fileAttachments: false,
    },
    
    // Rate limiting
    rateLimit: {
      maxRequestsPerMinute: 10,
      messageMinLength: 2,
      messageMaxLength: 500,
    },
    
    // Advanced features
    advanced: {
      persistConversation: true, // Store conversation in localStorage
      analyticsEnabled: false,
      debugMode: false,
    }
  };
  
  // Helper functions
  export function formatTimestamp(date: Date): string {
    return date.toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit'
    });
  }
  
  export function truncateMessage(message: string, maxLength: number = 100): string {
    if (message.length <= maxLength) return message;
    return message.substring(0, maxLength) + '...';
  }
  
  export function isValidMessage(message: string): boolean {
    const { messageMinLength, messageMaxLength } = chatConfig.rateLimit;
    return message.trim().length >= messageMinLength && message.trim().length <= messageMaxLength;
  }