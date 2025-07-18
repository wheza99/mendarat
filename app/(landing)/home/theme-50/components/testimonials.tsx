'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { testimonialsSectionCopy } from '../copy';

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonialsSectionCopy.testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonialsSectionCopy.testimonials.length) % testimonialsSectionCopy.testimonials.length);
  };

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Neural Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Neural Feedback Network */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/15 via-transparent to-purple-900/15" />
        
        {/* Floating Neural Feedback Nodes */}
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-gradient-to-br from-blue-400/25 via-purple-300/20 to-cyan-400/30 rounded-full"
            style={{
              width: `${15 + Math.random() * 35}px`,
              height: `${15 + Math.random() * 35}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 1.4, 1],
              opacity: [0.3, 0.7, 0.3],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: 12 + Math.random() * 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 6
            }}
          />
        ))}
        
        {/* Neural Helix Pattern */}
        <div className="absolute inset-0">
          <svg className="w-full h-full opacity-10" viewBox="0 0 1000 800">
            {/* Double Helix Structure */}
            {[...Array(2)].map((_, helixIndex) => (
              <motion.path
                key={helixIndex}
                d={`M100,${200 + helixIndex * 400} Q300,${100 + helixIndex * 400} 500,${200 + helixIndex * 400} T900,${200 + helixIndex * 400}`}
                stroke={helixIndex === 0 ? "#3B82F6" : "#8B5CF6"}
                strokeWidth="3"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: [0, 1, 0] }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  delay: helixIndex * 2
                }}
              />
            ))}
            
            {/* Connecting Bridges */}
            {[200, 400, 600, 800].map((x, i) => (
              <motion.line
                key={i}
                x1={x}
                y1={200}
                x2={x}
                y2={600}
                stroke="#06B6D4"
                strokeWidth="2"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: [0, 1, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: i * 0.5
                }}
              />
            ))}
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-5xl lg:text-6xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-blue-300 via-purple-200 to-cyan-300 bg-clip-text text-transparent">
              {testimonialsSectionCopy.heading}
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed"
          >
            {testimonialsSectionCopy.description}
          </motion.p>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto mb-16">
          <motion.div
            key={currentTestimonial}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Neural Testimonial Card */}
            <div className="relative p-12 bg-gradient-to-br from-blue-900/50 via-purple-800/40 to-cyan-900/50 rounded-3xl backdrop-blur-sm border border-blue-400/30">
              {/* Neural Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 via-transparent to-purple-400/10 rounded-3xl" />
              
              {/* Quote Icon */}
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.6, type: "spring", stiffness: 200 }}
                className="text-6xl text-blue-300 mb-8 opacity-50"
              >
                &ldquo;
              </motion.div>
              
              {/* Testimonial Quote */}
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed italic"
              >
                {testimonialsSectionCopy.testimonials[currentTestimonial].quote}
              </motion.p>
              
              {/* Rating Stars */}
              <div className="flex mb-6">
                {[...Array(5)].map((_, i) => (
                  <motion.svg
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.5 + i * 0.1 }}
                    className="w-6 h-6 text-blue-400 mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </motion.svg>
                ))}
              </div>
              
              {/* Author Info */}
              <div className="flex items-center">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  className="w-16 h-16 rounded-full overflow-hidden border-2 border-blue-400/50 mr-4"
                >
                  <div className="w-full h-full bg-gradient-to-br from-blue-500/80 via-purple-500/80 to-cyan-500/80 flex items-center justify-center text-2xl font-bold text-white">
                    {testimonialsSectionCopy.testimonials[currentTestimonial].author.charAt(0)}
                  </div>
                </motion.div>
                
                <div>
                  <motion.h4 
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    className="text-xl font-semibold text-white"
                  >
                    {testimonialsSectionCopy.testimonials[currentTestimonial].author}
                  </motion.h4>
                  
                  <motion.p 
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.9 }}
                    className="text-blue-300"
                  >
                    {testimonialsSectionCopy.testimonials[currentTestimonial].company}
                  </motion.p>
                </div>
              </div>
              
              {/* Neural Connection Lines */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-3xl">
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute bg-gradient-to-r from-blue-400/0 via-blue-400/30 to-blue-400/0 h-[1px]"
                    style={{
                      width: '100%',
                      top: `${10 + i * 12}%`,
                      left: 0,
                      transform: 'translateX(-100%)'
                    }}
                    animate={{
                      transform: ['translateX(-100%)', 'translateX(100%)'],
                    }}
                    transition={{
                      duration: 3 + i,
                      repeat: Infinity,
                      delay: i * 0.5,
                      ease: "linear"
                    }}
                  />
                ))}
              </div>
            </div>
          </motion.div>
          
          {/* Navigation Controls */}
          <div className="flex justify-between items-center mt-8">
            <div className="flex space-x-2">
              {/* Previous Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={prevTestimonial}
                className="p-3 rounded-full bg-gradient-to-r from-blue-900/80 to-purple-900/80 text-white border border-blue-400/30 hover:border-blue-400/60 transition-all"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </motion.button>
              
              {/* Next Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={nextTestimonial}
                className="p-3 rounded-full bg-gradient-to-r from-blue-900/80 to-purple-900/80 text-white border border-blue-400/30 hover:border-blue-400/60 transition-all"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </motion.button>
            </div>
            
            {/* Indicators */}
            <div className="flex space-x-2">
              {testimonialsSectionCopy.testimonials.map((_, i) => (
                <motion.button
                  key={i}
                  onClick={() => setCurrentTestimonial(i)}
                  className={`w-3 h-3 rounded-full ${i === currentTestimonial ? 'bg-blue-400' : 'bg-gray-600'}`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1 * i }}
                />
              ))}
            </div>
          </div>
        </div>
        
        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
        >
          {testimonialsSectionCopy.stats.map((stat, index) => (
            <div key={index} className="text-center">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, delay: 0.1 * index }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-blue-300 via-purple-200 to-cyan-300 bg-clip-text text-transparent"
              >
                {stat.value}
              </motion.div>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 + 0.1 * index }}
                viewport={{ once: true }}
                className="text-gray-400"
              >
                {stat.label}
              </motion.p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}