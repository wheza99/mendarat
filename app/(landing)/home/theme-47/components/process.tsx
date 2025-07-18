'use client';

import { processSectionCopy } from '../copy';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Process() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/20 to-black"></div>
      
      {/* Animated Circuit Board Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 200 200">
          <defs>
            <pattern id="circuit-board" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              {/* Horizontal Lines */}
              <line x1="0" y1="20" x2="40" y2="20" stroke="#00ffff" strokeWidth="1" opacity="0.5">
                <animate attributeName="opacity" values="0.5;1;0.5" dur="4s" repeatCount="indefinite" />
              </line>
              {/* Vertical Lines */}
              <line x1="20" y1="0" x2="20" y2="40" stroke="#ff0080" strokeWidth="1" opacity="0.3">
                <animate attributeName="opacity" values="0.3;0.8;0.3" dur="3s" repeatCount="indefinite" />
              </line>
              {/* Connection Points */}
              <circle cx="20" cy="20" r="2" fill="#00ffff" opacity="0.7">
                <animate attributeName="r" values="2;3;2" dur="2s" repeatCount="indefinite" />
              </circle>
              <circle cx="0" cy="0" r="1" fill="#ff0080" opacity="0.5" />
              <circle cx="40" cy="40" r="1" fill="#ff0080" opacity="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit-board)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              {processSectionCopy.heading}
            </span>
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            {processSectionCopy.description}
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Lines */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 transform -translate-y-1/2 z-0"></div>
          
          {/* Steps Grid */}
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 relative z-10">
            {processSectionCopy.steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8, delay: 0.2 * index }}
                className="group relative"
              >
                {/* Step Card */}
                <div className="relative bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-300 shadow-xl hover:shadow-cyan-400/20">
                  {/* Step Number */}
                  <div className="relative mb-6">
                    {/* Number Background */}
                    <div className="w-20 h-20 mx-auto bg-gradient-to-r from-pink-500 to-cyan-400 rounded-2xl flex items-center justify-center shadow-lg shadow-pink-500/30 group-hover:shadow-cyan-400/40 transition-all duration-300">
                      <span className="text-2xl font-bold text-black font-mono">
                        {step.number}
                      </span>
                    </div>
                    
                    {/* Glowing Ring */}
                    <div className="absolute inset-0 w-20 h-20 mx-auto rounded-2xl border-2 border-transparent group-hover:border-cyan-400/50 group-hover:shadow-[0_0_30px_rgba(0,255,255,0.3)] transition-all duration-300"></div>
                    
                    {/* Floating Particles */}
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-cyan-400 rounded-full animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_0_15px_rgba(0,255,255,0.8)]"></div>
                    <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-pink-500 rounded-full animate-bounce opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 shadow-[0_0_15px_rgba(255,20,147,0.8)]"></div>
                  </div>
                  
                  {/* Content */}
                  <div className="text-center space-y-4">
                    <h3 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-pink-500 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all duration-300 font-mono">
                      {step.title}
                    </h3>
                    
                    <p className="text-gray-400 leading-relaxed">
                      {step.description}
                    </p>
                    
                    {/* Animated Progress Bar */}
                    <div className="mt-6 h-1 bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: '100%' } : { width: 0 }}
                        transition={{ duration: 1.5, delay: 0.5 + index * 0.2 }}
                        className="h-full bg-gradient-to-r from-pink-500 to-cyan-400 rounded-full"
                      ></motion.div>
                    </div>
                  </div>
                  
                  {/* Corner Accents */}
                  <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Glowing Border */}
                  <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-cyan-400/30 group-hover:shadow-[0_0_30px_rgba(0,255,255,0.2)] transition-all duration-300"></div>
                </div>
                
                {/* Connection Arrow (Desktop) */}
                {index < processSectionCopy.steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-6 transform -translate-y-1/2 z-20">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ duration: 0.8, delay: 0.5 + index * 0.2 }}
                      className="w-12 h-12 bg-gradient-to-r from-pink-500 to-cyan-400 rounded-full flex items-center justify-center shadow-lg shadow-pink-500/30"
                    >
                      <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </motion.div>
                  </div>
                )}
                
                {/* Connection Arrow (Mobile) */}
                {index < processSectionCopy.steps.length - 1 && (
                  <div className="lg:hidden flex justify-center mt-6">
                    <motion.div
                      initial={{ opacity: 0, y: -20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
                      transition={{ duration: 0.8, delay: 0.5 + index * 0.2 }}
                      className="w-8 h-8 bg-gradient-to-r from-pink-500 to-cyan-400 rounded-full flex items-center justify-center shadow-lg shadow-pink-500/30"
                    >
                      <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                      </svg>
                    </motion.div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}