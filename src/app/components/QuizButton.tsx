'use client';

import { useState } from 'react';
import QuizModal from './QuizModal';
import ButtonAnimation from './ButtonAnimation';

interface QuizButtonProps {
  text?: string;
}

export default function QuizButton({ text = "Activate my business" }: QuizButtonProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <ButtonAnimation 
        onClick={() => setIsOpen(true)} 
        className="px-8 py-3 border-2 border-blue-600 text-blue-400 rounded-lg hover:bg-blue-900/20 transition-colors bg-black text-center font-medium whitespace-nowrap"
        variant="secondary"
      >
        {text}
      </ButtonAnimation>
      <QuizModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </>
  );
} 