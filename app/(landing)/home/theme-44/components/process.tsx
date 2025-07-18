'use client';

import { motion } from 'framer-motion';
import { processSectionCopy } from '../copy';
import { useState } from 'react';

export default function Process() {
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  return (
    <section className="relative py-24 bg-gradient-to-b from-slate-800 to-black overflow-hidden">
      {/* Art Deco Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0">
          {[...Array(16)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-gradient-to-b from-yellow-400/20 to-transparent"
              style={{
                width: '1px',
                height: '100%',
                left: `${6.25 * i}%`,
                transform: `rotate(${-15 + i * 2}deg)`,
                transformOrigin: 'center bottom',
              }}
            />
          ))}
        </div>
        
        {/* Floating geometric patterns */}
        <div className="absolute inset-0">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute border border-yellow-400/10"
              style={{
                width: `${40 + Math.random() * 60}px`,
                height: `${40 + Math.random() * 60}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                transform: `rotate(${Math.random() * 360}deg)`,
                animation: `deco-float ${15 + Math.random() * 10}s linear infinite`,
                animationDelay: `${Math.random() * 5}s`
              }}
            >
              <div className="w-full h-full border border-yellow-400/5 transform rotate-45" />
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-5xl lg:text-6xl font-bold text-white mb-6 luxury-glow"
          >
            {processSectionCopy.heading}
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed"
          >
            {processSectionCopy.description}
          </motion.p>
        </motion.div>

        {/* Process Steps */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-8">
          {processSectionCopy.steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredStep(index)}
              onMouseLeave={() => setHoveredStep(null)}
              className="group relative"
            >
              {/* Connection Line (except for last item) */}
              {index < processSectionCopy.steps.length - 1 && (
                <div className="hidden xl:block absolute top-16 left-full w-8 h-px bg-gradient-to-r from-yellow-400/50 to-transparent z-0" />
              )}
              
              <div className="relative bg-gradient-to-b from-slate-800/30 to-slate-900/30 backdrop-blur-sm border border-yellow-400/20 p-8 transition-all duration-500 hover:border-yellow-400/50 hover:shadow-2xl hover:shadow-yellow-400/10 h-full">
                {/* Art Deco corner decorations */}
                <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-yellow-400/50" />
                <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-yellow-400/50" />
                <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-yellow-400/50" />
                <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-yellow-400/50" />
                
                {/* Step Number */}
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative mb-6"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-500 flex items-center justify-center relative overflow-hidden group-hover:scale-110 transition-transform duration-300">
                    {/* Art Deco pattern inside number */}
                    <div className="absolute inset-2 border border-black/20" />
                    <span className="text-2xl font-bold text-black relative z-10">
                      {step.number}
                    </span>
                    
                    {/* Shimmer effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  </div>
                  
                  {/* Decorative elements around number */}
                  <div className="absolute -top-2 -left-2 w-4 h-4 border-2 border-yellow-400/30 transform rotate-45" />
                  <div className="absolute -bottom-2 -right-2 w-3 h-3 bg-yellow-400/30 transform rotate-45" />
                </motion.div>
                
                {/* Content */}
                <div className="space-y-4">
                  <motion.h3
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-xl font-bold text-white group-hover:text-yellow-400 transition-colors duration-300"
                  >
                    {step.title}
                  </motion.h3>
                  
                  <motion.p
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-gray-300 leading-relaxed"
                  >
                    {step.description}
                  </motion.p>
                </div>
                
                {/* Hover effect overlay */}
                <motion.div
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: hoveredStep === index ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-yellow-400 to-yellow-500 origin-top"
                />
                
                {/* Golden shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-400/5 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom decorative element */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="inline-flex items-center space-x-4">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-yellow-400/50" />
            <div className="w-3 h-3 border-2 border-yellow-400/50 transform rotate-45" />
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-yellow-400/50" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}