// src/app/components/ChatIndicator.tsx
'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X } from 'lucide-react';

interface ChatIndicatorProps {
  onChatOpen: () => void;
  isVisible: boolean;
}

export default function ChatIndicator({ onChatOpen, isVisible }: ChatIndicatorProps) {
  const [isDismissed, setIsDismissed] = useState(false);
  
  // Handle dismissing the indicator
  const handleDismiss = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent triggering the chat open
    setIsDismissed(true);
  };
  
  // Reset dismissed state when visibility changes
  if (!isVisible && isDismissed) {
    setIsDismissed(false);
  }
  
  // Don't render if chat is open or indicator is dismissed
  if (!isVisible || isDismissed) return null;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 10, scale: 0.9 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="fixed bottom-20 right-4 z-40 bg-white dark:bg-slate-800 rounded-lg shadow-lg p-3 max-w-xs"
      onClick={onChatOpen}
    >
      <button 
        onClick={handleDismiss}
        className="absolute top-2 right-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 z-10"
      >
        <X size={14} />
      </button>
      
      <div className="flex items-center space-x-3 cursor-pointer">
        <div className="bg-blue-500 p-2 rounded-full">
          <MessageCircle size={18} className="text-white" />
        </div>
        <p className="text-slate-800 dark:text-white text-sm">
          Chat with Axel our AI assistant
        </p>
      </div>
      
      {/* Pulsing animation */}
      <motion.div
        className="absolute -bottom-1 -right-1 h-3 w-3 bg-blue-500 rounded-full"
        animate={{ 
          scale: [1, 1.5, 1],
          opacity: [0.7, 0.2, 0.7]
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      />
    </motion.div>
  );
}