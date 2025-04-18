// src/app/components/QuizModal.tsx
'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { XMarkIcon } from '@heroicons/react/24/outline';
import AnimatedProgress from './AnimatedProgress';
import ButtonAnimation from './ButtonAnimation';
import { supabase } from '@/lib/supabase';

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
  const [formData, setFormData] = useState({
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
      setTimeout(() => setShowLeadForm(true), 2000);
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
      // Format quiz results for saving
      const quizResults = {
        questions: questions.map((q, index) => ({
          question: q.question,
          answer: answers[index] || 'Not answered'
        })),
        completed_at: new Date().toISOString()
      };
      
      // Save to Supabase
      const { data, error } = await supabase
        .from('clients')
        .upsert({
          name: formData.name,
          email: formData.email,
          phone: formData.phone || null,
          company: formData.company || null,
          quiz_results: quizResults,
          quiz_date: new Date().toISOString(),
          lead_source: 'quiz',
          status: 'potential',
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString()
        }, {
          onConflict: 'email',
          ignoreDuplicates: false
        })
        .select();
        
      if (error) {
        console.error('Error saving quiz results:', error);
        setFormError('Failed to submit. Please try again.');
      } else {
        console.log('Quiz results saved successfully:', data);
        
        // Close the modal after successful submission
        onClose();
      }
    } catch (err) {
      console.error('Error submitting quiz:', err);
      setFormError('An unexpected error occurred. Please try again.');
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
              isComplete && !showLeadForm 
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
              ) : showLeadForm ? (
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
                        className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-white mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-white mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                      />
                    </div>
                    <ButtonAnimation
                      type="submit"
                      className="w-full"
                      variant="primary"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Processing...' : 'Get Your AI Solution'}
                    </ButtonAnimation>
                  </motion.form>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center"
                >
                  <div className="flex justify-end mb-4">
                    <button
                      onClick={onClose}
                      className="text-slate-400 hover:text-white transition-colors"
                    >
                      <XMarkIcon className="h-6 w-6" />
                    </button>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">Thank You!</h3>
                  <p className="text-slate-300">
                    We're analyzing your responses to provide personalized recommendations.
                  </p>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}