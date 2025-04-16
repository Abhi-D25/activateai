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
        className="text-lg px-8 py-4"
        variant="secondary"
      >
        Get Started
      </ButtonAnimation>
      <QuizModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </>
  );
} 