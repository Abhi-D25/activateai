'use client';

import { useState } from 'react';
import QuizModal from './QuizModal';
import ButtonAnimation from './ButtonAnimation';

export default function QuizButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <ButtonAnimation 
        onClick={() => setIsOpen(true)} 
        className="px-8 py-3 border-2 border-blue-600 text-blue-400 rounded-lg hover:bg-blue-900/20 transition-colors bg-black"
        variant="secondary"
      >
        See this for my business
      </ButtonAnimation>
      <QuizModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </>
  );
} 