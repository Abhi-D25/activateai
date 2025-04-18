"use client";

import { useState, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform, useAnimation } from 'framer-motion';
import { useMobile } from '../hooks/useMobile';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  image?: string;
}

interface MobileTestimonialsProps {
  testimonials: Testimonial[];
}

const MobileTestimonials = ({ testimonials }: MobileTestimonialsProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { isMobile } = useMobile();
  const controls = useAnimation();
  const x = useMotionValue(0);
  const opacity = useTransform(x, [-200, 0, 200], [0.5, 1, 0.5]);
  const scale = useTransform(x, [-200, 0, 200], [0.8, 1, 0.8]);

  const handleDragEnd = (event: any, info: any) => {
    const threshold = 100;
    if (Math.abs(info.offset.x) > threshold) {
      const direction = info.offset.x > 0 ? -1 : 1;
      const newIndex = (currentIndex + direction + testimonials.length) % testimonials.length;
      setCurrentIndex(newIndex);
    }
    controls.start({ x: 0, opacity: 1, scale: 1 });
  };

  if (!isMobile) return null;

  return (
    <div className="relative w-full overflow-hidden py-8">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          className="absolute w-full px-4"
          initial={{ x: 300, opacity: 0 }}
          animate={controls}
          exit={{ x: -300, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onDragEnd={handleDragEnd}
          style={{ x, opacity, scale }}
        >
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-center mb-4">
              {testimonials[currentIndex].image && (
                <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-blue-500 mr-4">
                  <Image
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              <div>
                <h3 className="font-semibold text-lg">
                  {testimonials[currentIndex].name}
                </h3>
                <p className="text-gray-600">
                  {testimonials[currentIndex].role} at {testimonials[currentIndex].company}
                </p>
              </div>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed">
              {testimonials[currentIndex].content}
            </p>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Pagination Dots */}
      <div className="flex justify-center mt-6 space-x-1">
        {testimonials.map((_, index) => (
          <motion.button
            key={index}
            className={`w-1.5 h-1.5 rounded-full ${
              index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
            }`}
            onClick={() => {
              setCurrentIndex(index);
              if (window.navigator.vibrate) {
                window.navigator.vibrate(25);
              }
            }}
            whileTap={{ scale: 0.8 }}
          />
        ))}
      </div>

      {/* Swipe Indicator */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-1 bg-blue-600"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.5, repeat: Infinity, repeatType: 'reverse' }}
      />
    </div>
  );
};

export default MobileTestimonials; 