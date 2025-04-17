'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { StarIcon } from '@heroicons/react/24/solid';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CEO, TechStart Inc.",
    content: "ActivateAI transformed our customer service operations. Their AI integration reduced our response times by 60% and significantly improved customer satisfaction.",
    rating: 5
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Operations Director, RetailPro",
    content: "The AI solutions provided by ActivateAI helped us streamline our inventory management. We've seen a 30% reduction in stockouts and improved efficiency across the board.",
    rating: 5
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Customer Success Manager, ServiceCo",
    content: "Implementing ActivateAI's chatbot solution was a game-changer for our support team. We now handle 45% more customer inquiries with the same team size.",
    rating: 5
  }
];

// Define types for the pagination components
interface PaginationDotsProps {
  currentIndex: number;
  setCurrentIndex: (index: number) => void;
}

// Mobile-specific pagination dots component
const MobilePaginationDots: React.FC<PaginationDotsProps> = ({ currentIndex, setCurrentIndex }) => {
  return (
    <div className="flex space-x-1 sm:hidden"> 
      {testimonials.map((_, index) => (
        <button
          key={index}
          onClick={() => setCurrentIndex(index)}
          className={`rounded-full transition-all duration-300 ${  
            index === currentIndex 
              ? 'bg-blue-400 w-1 h-1' 
              : 'bg-slate-600 w-0.5 h-0.5'
          }`}
          aria-label={`Go to testimonial ${index + 1}`}
        />
      ))}
    </div>
  );
};

// Desktop pagination dots component
const DesktopPaginationDots: React.FC<PaginationDotsProps> = ({ currentIndex, setCurrentIndex }) => {
  return (
    <div className="hidden sm:flex space-x-2"> 
      {testimonials.map((_, index) => (
        <button
          key={index}
          onClick={() => setCurrentIndex(index)}
          className={`rounded-full transition-all duration-300 ${  
            index === currentIndex 
              ? 'bg-blue-400 w-3 h-3.5' 
              : 'bg-slate-600 w-3.5 h-3.5'
          }`}
          aria-label={`Go to testimonial ${index + 1}`}
        />
      ))}
    </div>
  );
};

export default function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  return (
    <section className="py-16 bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">What Our Clients Say</h2>
          <p className="text-slate-400">Trusted by businesses across industries</p>
        </div>
        
        <div className="relative max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-slate-800 p-8 rounded-xl shadow-lg"
            >
              <div className="flex mb-4">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <StarIcon key={i} className="h-5 w-5 text-yellow-400" />
                ))}
              </div>
              <p className="text-slate-300 text-lg mb-6">
                &ldquo;{testimonials[currentIndex].content}&rdquo;
              </p>
              <div>
                <p className="text-white font-semibold">{testimonials[currentIndex].name}</p>
                <p className="text-slate-400">{testimonials[currentIndex].role}</p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center mt-8 space-x-4">
            {/* Previous Button */}
            <button
              onClick={goToPrevious}
              className="p-1.5 sm:p-2 rounded-full bg-slate-700 hover:bg-slate-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
              aria-label="Previous testimonial"
            >
              <ChevronLeftIcon className="h-4 w-4 sm:h-5 sm:w-5 text-slate-300" />
            </button>
            
            {/* Pagination Dots - Mobile and Desktop versions */}
            <MobilePaginationDots currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} />
            <DesktopPaginationDots currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} />
            
            {/* Next Button */}
            <button
              onClick={goToNext}
              className="p-1.5 sm:p-2 rounded-full bg-slate-700 hover:bg-slate-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
              aria-label="Next testimonial"
            >
              <ChevronRightIcon className="h-4 w-4 sm:h-5 sm:w-5 text-slate-300" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
} 