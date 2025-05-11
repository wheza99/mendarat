"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { testimonialsSectionCopy } from '../copy';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Use testimonials directly from the copy file
  const testimonials = testimonialsSectionCopy.testimonials;

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
            src={testimonialsSectionCopy.mainImage}
            alt={testimonialsSectionCopy.mainImageAlt}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Column - Testimonial */}
        <div className="pl-8 pr-16 flex flex-col justify-center">
          {/* Section Header - Now in the right column */}
          <div className="mb-12">
            <h2 className="text-4xl font-bold mb-6 uppercase">{testimonialsSectionCopy.heading}</h2>
            <p className="text-gray-600 dark:text-gray-400">
              {testimonialsSectionCopy.description}
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
