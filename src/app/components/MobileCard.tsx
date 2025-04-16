"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useMobile } from '../hooks/useMobile';

interface MobileCardProps {
  title: string;
  content: string;
  image?: string;
  onClick?: () => void;
  className?: string;
}

const MobileCard = ({ title, content, image, onClick, className = '' }: MobileCardProps) => {
  const [isPressed, setIsPressed] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const { isMobile } = useMobile();

  const handlePress = () => {
    setIsPressed(true);
    if (window.navigator.vibrate) {
      window.navigator.vibrate(25);
    }
    setTimeout(() => setIsPressed(false), 200);
  };

  const handleLongPress = () => {
    setShowContent(true);
    if (window.navigator.vibrate) {
      window.navigator.vibrate(50);
    }
  };

  if (!isMobile) return null;

  return (
    <motion.div
      className={`bg-white rounded-2xl shadow-lg overflow-hidden ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      whileTap={{ scale: 0.98 }}
      onTouchStart={handlePress}
      onTouchEnd={handleLongPress}
      onClick={onClick}
    >
      <div className="relative">
        {image && (
          <motion.img
            src={image}
            alt={title}
            className="w-full h-48 object-cover"
            initial={{ scale: 1 }}
            animate={{ scale: isPressed ? 0.95 : 1 }}
            transition={{ duration: 0.2 }}
          />
        )}
        <motion.div
          className="absolute inset-0 bg-black/20"
          initial={{ opacity: 0 }}
          animate={{ opacity: isPressed ? 1 : 0 }}
          transition={{ duration: 0.2 }}
        />
      </div>

      <div className="p-4">
        <motion.h3
          className="text-xl font-semibold mb-2"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          {title}
        </motion.h3>

        <AnimatePresence>
          {showContent && (
            <motion.p
              className="text-gray-600"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              {content}
            </motion.p>
          )}
        </AnimatePresence>

        {!showContent && (
          <motion.div
            className="h-1 w-12 bg-blue-600 rounded-full mt-2"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.5, repeat: Infinity, repeatType: 'reverse' }}
          />
        )}
      </div>
    </motion.div>
  );
};

export default MobileCard; 