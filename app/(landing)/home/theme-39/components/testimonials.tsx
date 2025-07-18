"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { testimonialsSectionCopy } from "../copy";

const Testimonials = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  return (
    <section className="relative py-20 bg-gradient-to-b from-blue-900 to-slate-900 overflow-hidden">
      {/* Ocean wave background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-600/10 to-slate-900/20" />
        <div className="absolute inset-0">
          {[...Array(25)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-cyan-400/20 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.2, 0.6, 0.2],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 4 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 3,
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            {testimonialsSectionCopy.heading}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {testimonialsSectionCopy.description}
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Main Testimonial Display */}
          <motion.div
            key={activeTestimonial}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative p-8 md:p-12 bg-white/5 backdrop-blur-sm rounded-3xl border border-cyan-500/20">
              {/* Ocean wave background */}
              <div className="absolute inset-0 rounded-3xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 to-blue-500/5" />
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-full h-px bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent"
                    style={{
                      top: `${20 + i * 15}%`,
                    }}
                    animate={{
                      x: ["-100%", "100%"],
                      opacity: [0, 0.5, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      delay: i * 0.8,
                    }}
                  />
                ))}
              </div>

              <div className="relative z-10 text-center">
                {/* Quote Icon */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="w-16 h-16 mx-auto mb-8 flex items-center justify-center"
                >
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full opacity-20" />
                    <svg
                      className="w-8 h-8 text-cyan-400 relative z-10"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
                    </svg>
                  </div>
                </motion.div>

                {/* Testimonial Quote */}
                <motion.blockquote
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-2xl md:text-3xl font-light text-white mb-8 leading-relaxed italic"
                >
                  "{testimonialsSectionCopy.testimonials[activeTestimonial].quote}"
                </motion.blockquote>

                {/* Author Info */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="flex items-center justify-center space-x-4"
                >
                  <div className="relative">
                    <img
                      src={testimonialsSectionCopy.testimonials[activeTestimonial].image}
                      alt={testimonialsSectionCopy.testimonials[activeTestimonial].author}
                      className="w-16 h-16 rounded-full object-cover border-2 border-cyan-400/30"
                    />
                    {/* Ocean ripple effect */}
                    <div className="absolute inset-0 rounded-full border-2 border-cyan-400/20 animate-ping" />
                  </div>
                  <div className="text-left">
                    <div className="text-lg font-semibold text-white">
                      {testimonialsSectionCopy.testimonials[activeTestimonial].author}
                    </div>
                    <div className="text-cyan-400">
                      {testimonialsSectionCopy.testimonials[activeTestimonial].role}
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Floating ocean particles */}
              <div className="absolute inset-0 pointer-events-none">
                {[...Array(10)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-cyan-400/40 rounded-full"
                    style={{
                      left: `${10 + Math.random() * 80}%`,
                      top: `${10 + Math.random() * 80}%`,
                    }}
                    animate={{
                      y: [0, -25, 0],
                      opacity: [0, 1, 0],
                      scale: [0, 1, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: i * 0.3,
                    }}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Testimonial Navigation */}
          <div className="flex justify-center space-x-4 mt-8">
            {testimonialsSectionCopy.testimonials.map((_, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setActiveTestimonial(index)}
                className={`relative w-4 h-4 rounded-full transition-all duration-300 ${
                  activeTestimonial === index
                    ? "bg-cyan-400 shadow-lg shadow-cyan-400/50"
                    : "bg-white/20 hover:bg-white/30"
                }`}
              >
                {activeTestimonial === index && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 to-blue-400"
                  />
                )}
                {/* Ocean ripple effect for active indicator */}
                {activeTestimonial === index && (
                  <div className="absolute inset-0 rounded-full border border-cyan-400/50 animate-ping" />
                )}
              </motion.button>
            ))}
          </div>

          {/* Navigation Arrows */}
          <div className="absolute top-1/2 -translate-y-1/2 left-4 right-4 flex justify-between pointer-events-none">
            <motion.button
              whileHover={{ scale: 1.1, x: -5 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setActiveTestimonial((prev) => 
                prev === 0 ? testimonialsSectionCopy.testimonials.length - 1 : prev - 1
              )}
              className="pointer-events-auto w-12 h-12 bg-white/10 hover:bg-cyan-500/20 rounded-full flex items-center justify-center transition-all duration-300 border border-cyan-500/30 hover:border-cyan-400/50"
            >
              <svg
                className="w-6 h-6 text-cyan-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1, x: 5 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setActiveTestimonial((prev) => 
                prev === testimonialsSectionCopy.testimonials.length - 1 ? 0 : prev + 1
              )}
              className="pointer-events-auto w-12 h-12 bg-white/10 hover:bg-cyan-500/20 rounded-full flex items-center justify-center transition-all duration-300 border border-cyan-500/30 hover:border-cyan-400/50"
            >
              <svg
                className="w-6 h-6 text-cyan-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </motion.button>
          </div>
        </div>

        {/* Ocean current background */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-full h-px bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent"
              style={{
                top: `${25 + i * 20}%`,
              }}
              animate={{
                opacity: [0, 0.3, 0],
                scaleX: [0, 1, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                delay: i * 2,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;