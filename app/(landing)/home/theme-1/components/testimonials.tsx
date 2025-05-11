"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      quote:
        "Far far away behind the word mountains far from the countries Vokalia and Consonantia there live the blind texts.",
      name: "John Smith",
      role: "CEO, Company Inc.",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      id: 2,
      quote:
        "An overwhelming sense of peace has enveloped my being, akin to the blissful mornings of spring where every moment is cherished with utmost sincerity and joy.",
      name: "Harper Russo",
      role: "Manager",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      id: 3,
      quote:
        "The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog.",
      name: "Sarah Johnson",
      role: "Interior Designer",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className="py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 items-stretch">
        {/* Left Column - Interior Design Image (Full Width) */}
        <div className="block h-[600px] pb-16 md:pb-0">
          <img
            src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=3400&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Interior Design"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Column - Testimonial */}
        <div className="pl-8 pr-16 flex flex-col justify-center">
          {/* Section Header - Now in the right column */}
          <div className="mb-12">
            <h2 className="text-4xl font-bold mb-6 uppercase">TESTIMONIALS</h2>
            <p className="text-gray-600 dark:text-gray-400">
              Far far away behind the word mountains far from the countries
              Vokalia and Consonantia there live the blind texts.
            </p>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Testimonial Quote */}
              <blockquote className="text-lg italic mb-4">
                {testimonials[currentIndex].quote}
              </blockquote>

              {/* Testimonial Author with Image */}
              <div className="flex justify-between">
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <img
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-semibold">
                      {testimonials[currentIndex].name}
                    </div>
                    <div className="text-gray-500 dark:text-gray-400 text-sm">
                      {testimonials[currentIndex].role}
                    </div>
                  </div>
                </div>
                {/* Decorative Quote Mark */}

                <div className="text-amber-400 text-5xl font-serif mb-4 text-right">
                  ❝
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex mt-4 space-x-8">
            <button
              onClick={prevTestimonial}
              className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors"
              aria-label="Previous testimonial"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={nextTestimonial}
              className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors"
              aria-label="Next testimonial"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
