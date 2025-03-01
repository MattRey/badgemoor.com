'use client';

import { useState, useEffect } from 'react';
import { testimonials } from '../data/testimonials';

const TestimonialsWidget = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 10000);

    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <div className="flex flex-col gap-4 max-w-md">
      <h3 className="text-white">What our clients say:</h3>
      <div className="min-h-[150px] text-gray-300">
        <p className="transition-opacity duration-500 truncate">
          &quot;{testimonials[currentIndex].text}&quot;
        </p>
      </div>
      <div className="flex gap-2 justify-start">
        <button
          onClick={handlePrev}
          className="w-8 h-8 rounded-full bg-gray-700 hover:bg-gray-600 flex items-center justify-center text-white"
          aria-label="Previous testimonial"
        >
          ←
        </button>
        <button
          onClick={handleNext}
          className="w-8 h-8 rounded-full bg-gray-700 hover:bg-gray-600 flex items-center justify-center text-white"
          aria-label="Next testimonial"
        >
          →
        </button>
      </div>
    </div>
  );
};

export default TestimonialsWidget; 