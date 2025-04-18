// src/app/components/QuizModal.tsx
'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { XMarkIcon } from '@heroicons/react/24/outline';
import AnimatedProgress from './AnimatedProgress';
import ButtonAnimation from './ButtonAnimation';
import type { QuizFormData, ApiResponse } from '@/types/forms';

interface QuizModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const questions = [
  {
    id: 1,
    question: "What is the size of your business?",
    options: [
      "Small (1-10 employees)",
      "Medium (11-50 employees)",
      "Large (50+ employees)"
    ]
  },
  {
    id: 2,
    question: "Which area would you like to improve with AI?",
    options: [
      "Customer Service",
      "Operations & Efficiency",
      "Data Analysis",
      "Marketing & Sales"
    ]
  },
  {
    id: 3,
    question: "What is your current level of AI adoption?",
    options: [
      "No AI implementation",
      "Basic AI tools",
      "Advanced AI systems"
    ]
  },
  {
    id: 4,
    question: "What is your primary goal for AI implementation?",
    options: [
      "Cost reduction",
      "Improved efficiency",
      "Better customer experience",
      "Competitive advantage"
    ]
  },
  {
    id: 5,
    question: "What is your timeline for implementation?",
    options: [
      "Immediate (within 1 month)",
      "Short-term (1-3 months)",
      "Long-term (3+ months)"
    ]
  }
];

export default function QuizModal({ isOpen, onClose }: QuizModalProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [isComplete, setIsComplete] = useState(false);
  const [showLeadForm, setShowLeadForm] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  const [formData, setFormData] = useState<Omit<QuizFormData, 'answers'>>({
    name: '',
    email: '',
    phone: '',
    company: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState('');

  const handleAnswer = (answer: string) => {
    const newAnswers = [...answers, answer];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setIsComplete(true);
      setShowLeadForm(true);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email) {
      setFormError('Name and email are required');
      return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setFormError('Please enter a valid email address');
      return;
    }
    
    setIsSubmitting(true);
    setFormError('');
    
    try {
      // Format quiz data for API
      const quizData: QuizFormData = {
        ...formData,
        answers: questions.map((q, index) => ({
          question: q.question,
          answer: answers[index] || 'Not answered'
        }))
      };

      const response = await fetch('/api/quiz', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(quizData),
      });

      const data: ApiResponse = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to submit quiz');
      }

      if (data.success) {
        // Show thank you message after successful submission
        setShowLeadForm(false);
        setShowThankYou(true);
        
        // Close the modal after a delay
        setTimeout(() => {
          onClose();
        }, 3000);
      } else {
        setFormError(data.message || 'Failed to submit quiz');
      }
    } catch (err) {
      console.error('Error submitting quiz:', err);
      setFormError(err instanceof Error ? err.message : 'An unexpected error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 overflow-y-auto backdrop-blur-sm bg-black/30"
      >
        <div className="flex min-h-screen items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className={`relative bg-slate-800 rounded-xl shadow-xl ${
              showThankYou
                ? "w-full max-w-2xl min-h-[150px]" 
                : "w-full max-w-3xl min-h-[450px]"
            }`}
          >
            <div className="p-8">
              {!isComplete ? (
                <>
                  <div className="flex justify-end mb-4">
                    <button
                      onClick={onClose}
                      className="text-slate-400 hover:text-white transition-colors"
                    >
                      <XMarkIcon className="h-6 w-6" />
                    </button>
                  </div>
                  <div className="mb-8">
                    <AnimatedProgress 
                      percentage={progress}
                      height={6}
                      color="#60a5fa"
                      backgroundColor="#334155"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-6 min-h-[32px]">
                    {questions[currentQuestion].question}
                  </h3>
                  <div className="space-y-4 flex-grow flex flex-col justify-center">
                    {questions[currentQuestion].options.map((option, index) => (
                      <ButtonAnimation
                        key={index}
                        onClick={() => handleAnswer(option)}
                        className="w-full p-4 text-left"
                        variant="secondary"
                      >
                        {option}
                      </ButtonAnimation>
                    ))}
                  </div>
                </>
              ) : showThankYou ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-8"
                >
                  <h3 className="text-2xl font-bold text-white mb-4">Thank you for completing the quiz!</h3>
                  <p className="text-slate-300">We&apos;ll analyze your responses and prepare a personalized solution for your business.</p>
                </motion.div>
              ) : (
                <motion.div>
                  <div className="flex justify-end mb-4">
                    <button
                      onClick={onClose}
                      className="text-slate-400 hover:text-white transition-colors"
                    >
                      <XMarkIcon className="h-6 w-6" />
                    </button>
                  </div>
                  
                  <motion.form
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-6 flex-grow flex flex-col justify-center"
                  >
                    <h3 className="text-2xl font-bold text-white mb-6">Get Your Personalized AI Solution</h3>
                    
                    {formError && (
                      <div className="p-3 bg-red-500/20 border border-red-500/30 rounded-lg text-red-400 text-sm">
                        {formError}
                      </div>
                    )}
                    
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-white mb-2">
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-white mb-2">
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    
                    <ButtonAnimation
                      type="submit"
                      className="w-full"
                      variant="secondary"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Submitting...' : 'Get Your Results'}
                    </ButtonAnimation>
                  </motion.form>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}