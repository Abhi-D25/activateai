// src/app/components/AIChat.tsx
'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, X, MessageCircle, Loader, Volume2, VolumeX, RefreshCw } from 'lucide-react';
import { chatConfig, formatTimestamp, isValidMessage } from '@/lib/chatConfig';
import ChatIndicator from './ChatIndicator';

// Message type definition
interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

export default function AIChat() {
  // State for chat messages and UI control
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: chatConfig.welcomeMessage,
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(chatConfig.features.soundEffects);
  const [charCount, setCharCount] = useState(0);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  
  // References
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const messageContainerRef = useRef<HTMLDivElement>(null);
  
  // Constants from config
  const WEBHOOK_URL = chatConfig.endpoint;
  const MAX_LENGTH = chatConfig.rateLimit.messageMaxLength;
  
  // Load saved conversation from localStorage if enabled
  useEffect(() => {
    if (chatConfig.advanced.persistConversation) {
      const savedMessages = localStorage.getItem('activateai-chat-messages');
      if (savedMessages) {
        try {
          const parsedMessages = JSON.parse(savedMessages);
          // Convert string timestamps back to Date objects
          const processedMessages = parsedMessages.map((msg: any) => ({
            ...msg,
            timestamp: new Date(msg.timestamp)
          }));
          setMessages(processedMessages);
        } catch (error) {
          console.error('Error loading saved chat messages:', error);
        }
      }
    }
  }, []);
  
  // Save conversation to localStorage when messages change
  useEffect(() => {
    if (chatConfig.advanced.persistConversation && messages.length > 1) {
      localStorage.setItem('activateai-chat-messages', JSON.stringify(messages));
    }
  }, [messages]);
  
  // Auto-scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);
  
  // Update character count when input changes
  useEffect(() => {
    setCharCount(inputMessage.length);
  }, [inputMessage]);
  
  // Play sound effect if enabled
  const playMessageSound = (type: 'sent' | 'received') => {
    if (!soundEnabled) return;
    
    const sound = new Audio(type === 'sent' 
      ? '/sounds/message-sent.mp3' 
      : '/sounds/message-received.mp3');
    
    sound.volume = 0.5;
    sound.play().catch(err => {
      console.log('Error playing sound:', err);
    });
  };
  
  // Focus input when chat opens
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 300);
    }
  }, [isOpen]);

  // Handle sending a message
  const handleSendMessage = async () => {
    // Validate message
    if (!inputMessage.trim()) return;
    if (!isValidMessage(inputMessage)) {
      setErrorMessage(`Message must be between ${chatConfig.rateLimit.messageMinLength} and ${MAX_LENGTH} characters`);
      setTimeout(() => setErrorMessage(null), 3000);
      return;
    }
    
    setErrorMessage(null);
    
    // Add user message to chat
    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputMessage,
      sender: 'user',
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);
    
    // Play sound if enabled
    playMessageSound('sent');
    
    try {
      // Send to webhook and get response
      const response = await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          message: inputMessage,
          // Include conversation history for context if needed
          history: messages.map(msg => ({ 
            text: msg.text, 
            sender: msg.sender,
            timestamp: msg.timestamp.toISOString()
          })),
          timestamp: new Date().toISOString(),
          userId: 'website-visitor'
        }),
      });
      
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      
      const data = await response.json();
      
      // Add bot response to chat
      const botMessage: Message = {
        id: Date.now().toString(),
        text: data.response || "I'm having trouble processing that request right now. Please try again later.",
        sender: 'bot',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botMessage]);
      playMessageSound('received');
    } catch (error) {
      console.error('Error sending message:', error);
      
      // Add error message to chat
      const errorMessage: Message = {
        id: Date.now().toString(),
        text: "Sorry, I couldn't connect to my knowledge base right now. Please try again later.",
        sender: 'bot',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  // Handle pressing Enter to send
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };
  
  // Clear chat history
  const handleClearChat = () => {
    // Keep only the welcome message
    setMessages([{
      id: '1',
      text: chatConfig.welcomeMessage,
      sender: 'bot',
      timestamp: new Date()
    }]);
    
    // Clear localStorage if persistence is enabled
    if (chatConfig.advanced.persistConversation) {
      localStorage.removeItem('activateai-chat-messages');
    }
  };
  
  // Auto-resize textarea based on content
  const autoResizeTextarea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const textarea = e.target;
    
    // Reset height to measure the scrollHeight correctly
    textarea.style.height = 'auto';
    
    // Set to scroll height, but limit to reasonable size
    const newHeight = Math.min(textarea.scrollHeight, 100);
    textarea.style.height = `${newHeight}px`;
    
    setInputMessage(e.target.value);
  };
  
  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Chat Indicator - shown when chat is closed */}
      <ChatIndicator 
        onChatOpen={() => setIsOpen(true)} 
        isVisible={!isOpen}
      />
      
      {/* Chat Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-full shadow-lg transition-colors"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </motion.button>
      
      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-16 right-0 w-80 sm:w-[400px] h-[500px] bg-slate-800 rounded-lg shadow-xl flex flex-col overflow-hidden border border-slate-700"
          >
            {/* Header */}
            <div className="p-2 bg-blue-500 text-white flex justify-between items-center">
              <h3 className="font-medium text-sm">Axel from ActivateAI</h3>
              <div className="flex items-center space-x-1">
                {/* Sound toggle button */}
                {chatConfig.features.soundEffects && (
                  <button 
                    onClick={() => setSoundEnabled(prev => !prev)}
                    className="text-white hover:text-slate-200 p-1"
                    aria-label={soundEnabled ? "Mute sound" : "Enable sound"}
                  >
                    {soundEnabled ? <Volume2 size={14} /> : <VolumeX size={14} />}
                  </button>
                )}
                
                {/* Clear chat button */}
                <button 
                  onClick={handleClearChat}
                  className="text-white hover:text-slate-200 p-1"
                  aria-label="Clear chat history"
                >
                  <RefreshCw size={14} />
                </button>
                
                {/* Close button */}
                <button 
                  onClick={() => setIsOpen(false)}
                  className="text-white hover:text-slate-200 p-1"
                  aria-label="Close chat"
                >
                  <X size={14} />
                </button>
              </div>
            </div>
            
            {/* Messages */}
            <div 
              ref={messageContainerRef}
              className="flex-1 p-4 overflow-y-auto bg-slate-900 scroll-smooth"
            >
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`mb-3 flex ${
                    message.sender === 'user' ? 'justify-end' : 'justify-start'
                  }`}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                    className={`max-w-[90%] p-2 rounded-lg text-sm ${
                      message.sender === 'user'
                        ? 'bg-blue-500 text-white rounded-br-none'
                        : 'bg-slate-700 text-white rounded-bl-none'
                    }`}
                  >
                    {message.text}
                    {chatConfig.features.timestampDisplay && (
                      <div className="text-xs text-slate-300 mt-1 opacity-75">
                        {formatTimestamp(message.timestamp)}
                      </div>
                    )}
                  </motion.div>
                </div>
              ))}
              
              {/* Loading indicator */}
              {isLoading && (
                <div className="flex justify-start mb-3">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="p-2 rounded-lg bg-slate-700 text-white rounded-bl-none"
                  >
                    <div className="flex space-x-2 items-center">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '200ms' }}></div>
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '400ms' }}></div>
                    </div>
                  </motion.div>
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>
            
            {/* Input */}
            <div className="p-3 border-t border-slate-700 bg-slate-800">
              {errorMessage && (
                <div className="mb-2 px-2 py-1 text-xs text-red-400 bg-red-500/20 rounded">
                  {errorMessage}
                </div>
              )}
              
              <div className="flex items-start">
                <textarea
                  ref={inputRef}
                  value={inputMessage}
                  onChange={autoResizeTextarea}
                  onKeyDown={handleKeyPress}
                  placeholder="Type your message..."
                  maxLength={MAX_LENGTH}
                  className="flex-1 bg-slate-700 text-white text-sm border border-slate-600 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none min-h-[36px] max-h-[100px] overflow-auto"
                  style={{ height: '36px' }} // Initial height
                />
                
                <button
                  onClick={handleSendMessage}
                  disabled={isLoading || !inputMessage.trim()}
                  className="ml-2 p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:bg-slate-600 disabled:text-slate-400 transition-colors flex-shrink-0"
                  aria-label="Send message"
                >
                  {isLoading ? <Loader size={18} className="animate-spin" /> : <Send size={18} />}
                </button>
              </div>
              
              {/* Character counter */}
              <div className={`mt-1 text-xs text-right ${
                charCount > MAX_LENGTH * 0.8 ? 'text-yellow-400' : 'text-slate-400'
              }`}>
                {charCount}/{MAX_LENGTH}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}