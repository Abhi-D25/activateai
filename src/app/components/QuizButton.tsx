'use client';

import { useState } from 'react';
import QuizModal from './QuizModal';

export default function QuizButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)} 
        className="btn-primary text-lg px-8 py-4"
      >
        Get Started
      </button>
      <QuizModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </>
  );
} 