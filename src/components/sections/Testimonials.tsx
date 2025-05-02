'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CEO, Tech Innovators',
    image: '/testimonials/sarah.jpg',
    content: 'Working with Aqeel was an absolute pleasure. Their technical expertise and attention to detail resulted in a website that exceeded our expectations.',
  },
  {
    name: 'Michael Chen',
    role: 'Product Manager, StartUp Co',
    image: '/testimonials/michael.jpg',
    content: 'Aqeel brought our vision to life with their creative approach and technical skills. The end result was exactly what we needed.',
  },
  {
    name: 'Emily Rodriguez',
    role: 'Founder, Design Studio',
    image: '/testimonials/emily.jpg',
    content: 'The level of professionalism and creativity that Aqeel brings to their work is outstanding. They delivered our project on time and within budget.',
  },
  {
    name: 'David Kim',
    role: 'CTO, Digital Solutions',
    image: '/testimonials/david.jpg',
    content: `Aqeel's expertise in both design and development made them the perfect choice for our project. They were able to tackle complex challenges effectively.`,
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section id="testimonials" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
            Client Testimonials
          </h2>

          <div className="relative">
            {/* Testimonials Carousel */}
            <div className="overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col md:flex-row items-center gap-8 md:gap-12"
                >
                  <div className="w-full md:w-1/3">
                    <div className="relative w-48 h-48 mx-auto">
                      <Image
                        src={testimonials[currentIndex].image}
                        alt={testimonials[currentIndex].name}
                        fill
                        className="object-cover rounded-full"
                      />
                      {/* Decorative elements */}
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-500 rounded-full blur opacity-30" />
                      <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-500 rounded-full blur-lg opacity-30" />
                    </div>
                  </div>

                  <div className="w-full md:w-2/3 text-center md:text-left">
                    <blockquote className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 italic mb-6">
                      "{testimonials[currentIndex].content}"
                    </blockquote>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                        {testimonials[currentIndex].name}
                      </h4>
                      <p className="text-purple-600 dark:text-purple-400">
                        {testimonials[currentIndex].role}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center gap-3 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentIndex === index
                      ? 'bg-purple-600 w-6'
                      : 'bg-gray-300 dark:bg-gray-600 hover:bg-purple-400 dark:hover:bg-purple-500'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            {/* Navigation Arrows */}
            <div className="hidden md:block">
              <button
                onClick={() => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 p-2 rounded-full bg-white dark:bg-gray-900 shadow-lg hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-colors"
                aria-label="Previous testimonial"
              >
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={() => setCurrentIndex((prev) => (prev + 1) % testimonials.length)}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 p-2 rounded-full bg-white dark:bg-gray-900 shadow-lg hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-colors"
                aria-label="Next testimonial"
              >
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials; 