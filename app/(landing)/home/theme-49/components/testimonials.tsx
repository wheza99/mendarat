'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { testimonialsSectionCopy } from '../copy';

export default function Testimonials() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  
  const nextTestimonial = () => {
    setActiveTestimonial((prev) => 
      prev === testimonialsSectionCopy.testimonials.length - 1 ? 0 : prev + 1
    );
  };
  
  const prevTestimonial = () => {
    setActiveTestimonial((prev) => 
      prev === 0 ? testimonialsSectionCopy.testimonials.length - 1 : prev - 1
    );
  };

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Quantum Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Aurora Energy Field */}
        <div className="absolute inset-0 opacity-25">
          <div 
            className="w-full h-full"
            style={{
              background: `
                radial-gradient(ellipse at center, rgba(139, 92, 246, 0.4), transparent 60%),
                radial-gradient(ellipse at top left, rgba(34, 197, 94, 0.3), transparent 50%),
                radial-gradient(ellipse at bottom right, rgba(236, 72, 153, 0.2), transparent 70%)
              `
            }}
          />
        </div>
        
        {/* Floating Quantum Bio Cells */}
        <div className="absolute top-16 left-16 w-6 h-6 rounded-full bg-violet-400/20 border border-violet-400/40 animate-aurora-float">
          <div className="absolute inset-2 rounded-full bg-violet-400/30 animate-pulse"></div>
        </div>
        <div className="absolute top-32 right-20 w-8 h-8 rounded-full bg-emerald-400/20 border border-emerald-400/40 animate-aurora-drift">
          <div className="absolute inset-2 rounded-full bg-emerald-400/30 animate-pulse"></div>
        </div>
        <div className="absolute bottom-20 left-24 w-4 h-4 rounded-full bg-pink-400/20 border border-pink-400/40 animate-aurora-spiral">
          <div className="absolute inset-1 rounded-full bg-pink-400/30 animate-pulse"></div>
        </div>
        <div className="absolute bottom-32 right-16 w-10 h-10 rounded-full bg-cyan-400/20 border border-cyan-400/40 animate-aurora-float">
          <div className="absolute inset-2 rounded-full bg-cyan-400/30 animate-pulse"></div>
        </div>
        
        {/* Quantum Helix Pattern */}
        <svg className="absolute inset-0 w-full h-full opacity-15" style={{ pointerEvents: 'none' }}>
          <defs>
            <linearGradient id="helixGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.6" />
              <stop offset="50%" stopColor="#22C55E" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#EC4899" stopOpacity="0.5" />
            </linearGradient>
            <linearGradient id="helixGradient2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.5" />
              <stop offset="50%" stopColor="#A855F7" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#10B981" stopOpacity="0.3" />
            </linearGradient>
          </defs>
          
          {/* DNA Helix Strands */}
          <path 
            d="M 100 100 Q 300 50 500 100 T 900 100 Q 1100 50 1300 100"
            stroke="url(#helixGradient1)" 
            strokeWidth="2"
            fill="none"
            className="animate-aurora-wave"
          />
          <path 
            d="M 100 200 Q 300 250 500 200 T 900 200 Q 1100 250 1300 200"
            stroke="url(#helixGradient2)" 
            strokeWidth="2"
            fill="none"
            className="animate-aurora-wave"
            style={{ animationDelay: '3s' }}
          />
          
          {/* Connecting Base Pairs */}
          {Array.from({ length: 8 }).map((_, i) => (
            <line
              key={i}
              x1={150 + i * 150}
              y1={100 + Math.sin(i * 0.5) * 50}
              x2={150 + i * 150}
              y2={200 - Math.sin(i * 0.5) * 50}
              stroke="url(#helixGradient1)"
              strokeWidth="1"
              opacity="0.4"
              className="animate-pulse"
              style={{ animationDelay: `${i * 0.2}s` }}
            />
          ))}
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-violet-400 via-emerald-400 to-pink-400 bg-clip-text text-transparent">
            {testimonialsSectionCopy.heading}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {testimonialsSectionCopy.description}
          </p>
        </motion.div>

        {/* Main Testimonial Display */}
        <motion.div
          key={activeTestimonial}
          initial={{ opacity: 0, x: 50, rotateY: -15 }}
          animate={{ opacity: 1, x: 0, rotateY: 0 }}
          exit={{ opacity: 0, x: -50, rotateY: 15 }}
          transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
          className="relative max-w-4xl mx-auto mb-12"
        >
          {/* Testimonial Card */}
          <div className="relative p-12 rounded-3xl bg-gradient-to-br from-indigo-900/40 via-purple-900/30 to-slate-900/50 backdrop-blur-sm border border-violet-500/20 overflow-hidden">
            {/* Aurora Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-violet-600/10 via-emerald-500/5 to-pink-600/10 opacity-80"></div>
            
            {/* Quantum Particles */}
            <div className="absolute top-6 right-6 w-3 h-3 bg-violet-400 rounded-full opacity-60 animate-pulse"></div>
            <div className="absolute bottom-6 left-6 w-2 h-2 bg-emerald-400 rounded-full opacity-80 animate-ping"></div>
            <div className="absolute top-1/2 right-12 w-1 h-1 bg-pink-400 rounded-full opacity-70 animate-pulse"></div>
            
            {/* Content */}
            <div className="relative z-10 text-center">
              {/* Quote Icon */}
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-6xl text-violet-400/30 mb-6"
              >
                "
              </motion.div>
              
              {/* Testimonial Quote */}
              <motion.blockquote
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-2xl md:text-3xl font-light text-white mb-8 leading-relaxed italic"
              >
                {testimonialsSectionCopy.testimonials[activeTestimonial].quote}
              </motion.blockquote>
              
              {/* Rating Stars */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex justify-center space-x-1 mb-6"
              >
                {Array.from({ length: testimonialsSectionCopy.testimonials[activeTestimonial].rating }).map((_, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, rotate: -180 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    transition={{ duration: 0.4, delay: 0.8 + i * 0.1 }}
                    className="text-2xl text-yellow-400"
                  >
                    ⭐
                  </motion.span>
                ))}
              </motion.div>
              
              {/* Author Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="space-y-2"
              >
                <h4 className="text-xl font-bold text-emerald-300">
                  {testimonialsSectionCopy.testimonials[activeTestimonial].author}
                </h4>
                <p className="text-gray-400">
                  {testimonialsSectionCopy.testimonials[activeTestimonial].role}
                </p>
              </motion.div>
            </div>
            
            {/* Quantum Energy Ring */}
            <div className="absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-r from-violet-500/20 via-emerald-500/20 to-pink-500/20 opacity-100 animate-pulse"></div>
          </div>
        </motion.div>

        {/* Navigation Controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex justify-center items-center space-x-8 mb-12"
        >
          {/* Previous Button */}
          <motion.button
            onClick={prevTestimonial}
            whileHover={{ scale: 1.1, boxShadow: "0 0 20px rgba(139, 92, 246, 0.5)" }}
            whileTap={{ scale: 0.9 }}
            className="w-12 h-12 rounded-full bg-gradient-to-br from-violet-600/30 via-emerald-600/30 to-pink-600/30 backdrop-blur-sm border border-violet-400/40 flex items-center justify-center text-white hover:text-emerald-300 transition-all duration-300"
          >
            ←
          </motion.button>
          
          {/* Testimonial Indicators */}
          <div className="flex space-x-3">
            {testimonialsSectionCopy.testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setActiveTestimonial(index)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeTestimonial
                    ? 'bg-gradient-to-r from-violet-400 via-emerald-400 to-pink-400 shadow-lg shadow-violet-500/25'
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
          
          {/* Next Button */}
          <motion.button
            onClick={nextTestimonial}
            whileHover={{ scale: 1.1, boxShadow: "0 0 20px rgba(139, 92, 246, 0.5)" }}
            whileTap={{ scale: 0.9 }}
            className="w-12 h-12 rounded-full bg-gradient-to-br from-violet-600/30 via-emerald-600/30 to-pink-600/30 backdrop-blur-sm border border-violet-400/40 flex items-center justify-center text-white hover:text-emerald-300 transition-all duration-300"
          >
            →
          </motion.button>
        </motion.div>
        
        {/* Bottom Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {[
            { number: "98%", label: "Satisfaction Rate", description: "Quantum excellence" },
            { number: "500+", label: "Happy Clients", description: "Across the cosmos" },
            { number: "5.0", label: "Average Rating", description: "Stellar reviews" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.2 + 0.8,
                type: "spring",
                stiffness: 100
              }}
              viewport={{ once: true }}
              className="text-center p-6 rounded-xl bg-gradient-to-br from-indigo-900/20 via-purple-900/15 to-slate-900/25 backdrop-blur-sm border border-violet-500/10"
            >
              <div className="text-3xl font-bold mb-2 bg-gradient-to-r from-violet-400 via-emerald-400 to-pink-400 bg-clip-text text-transparent">
                {stat.number}
              </div>
              <h3 className="text-lg font-semibold text-white mb-1">{stat.label}</h3>
              <p className="text-sm text-gray-400">{stat.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}