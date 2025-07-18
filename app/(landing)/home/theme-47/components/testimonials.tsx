'use client';

import { testimonialsSectionCopy } from '../copy';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-black to-cyan-900/20"></div>
      
      {/* Animated Matrix Rain Effect */}
      <div className="absolute inset-0 opacity-5">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute text-cyan-400 text-xs font-mono animate-pulse"
            style={{
              left: `${(i * 3.33) % 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.1}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          >
            {String.fromCharCode(0x30A0 + Math.random() * 96)}
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Section */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-3xl shadow-2xl shadow-pink-500/20">
              <img
                src={testimonialsSectionCopy.mainImage}
                alt={testimonialsSectionCopy.mainImageAlt}
                className="w-full h-[600px] object-cover"
              />
              
              {/* Cyberpunk Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 via-transparent to-cyan-900/40"></div>
              
              {/* Glowing Grid Overlay */}
              <div className="absolute inset-0 opacity-30">
                <div 
                  className="w-full h-full"
                  style={{
                    backgroundImage: `
                      linear-gradient(rgba(0, 255, 255, 0.3) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(255, 0, 255, 0.3) 1px, transparent 1px)
                    `,
                    backgroundSize: '30px 30px'
                  }}
                />
              </div>
              
              {/* Floating Elements */}
              <div className="absolute top-8 right-8 w-4 h-4 bg-cyan-400 rounded-full animate-pulse shadow-[0_0_20px_rgba(0,255,255,0.8)]"></div>
              <div className="absolute bottom-12 left-12 w-3 h-3 bg-pink-500 rounded-full animate-bounce shadow-[0_0_20px_rgba(255,20,147,0.8)]"></div>
              <div className="absolute top-1/3 left-8 w-2 h-8 bg-gradient-to-b from-cyan-400 to-transparent animate-pulse"></div>
              
              {/* Glowing Border */}
              <div className="absolute inset-0 rounded-3xl border-2 border-cyan-400/30 shadow-[0_0_40px_rgba(0,255,255,0.3)]"></div>
            </div>
          </motion.div>
          
          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Header */}
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-bold">
                <span className="bg-gradient-to-r from-pink-500 to-cyan-400 bg-clip-text text-transparent">
                  {testimonialsSectionCopy.heading}
                </span>
              </h2>
              <p className="text-gray-300 text-lg">
                {testimonialsSectionCopy.description}
              </p>
            </div>
            
            {/* Active Testimonial */}
            <motion.div
              key={activeTestimonial}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              {/* Quote Card */}
              <div className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 shadow-xl relative">
                {/* Quote Icon */}
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-r from-pink-500 to-cyan-400 rounded-2xl flex items-center justify-center shadow-lg shadow-pink-500/30">
                  <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                  </svg>
                </div>
                
                {/* Quote Text */}
                <blockquote className="text-gray-300 text-lg leading-relaxed mb-6 italic">
                  "{testimonialsSectionCopy.testimonials[activeTestimonial].quote}"
                </blockquote>
                
                {/* Author Info */}
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <img
                      src={testimonialsSectionCopy.testimonials[activeTestimonial].image}
                      alt={testimonialsSectionCopy.testimonials[activeTestimonial].name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-cyan-400/50"
                    />
                    <div className="absolute inset-0 rounded-full border-2 border-transparent bg-gradient-to-r from-pink-500/30 to-cyan-400/30 animate-pulse"></div>
                  </div>
                  <div>
                    <div className="font-bold text-white">
                      {testimonialsSectionCopy.testimonials[activeTestimonial].name}
                    </div>
                    <div className="text-gray-400 text-sm font-mono">
                      {testimonialsSectionCopy.testimonials[activeTestimonial].role}
                    </div>
                  </div>
                </div>
                
                {/* Glowing Border */}
                <div className="absolute inset-0 rounded-2xl border border-transparent bg-gradient-to-r from-pink-500/10 to-cyan-400/10 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </motion.div>
            
            {/* Testimonial Navigation */}
            <div className="flex gap-4">
              {testimonialsSectionCopy.testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-4 h-4 rounded-full transition-all duration-300 ${
                    activeTestimonial === index
                      ? 'bg-gradient-to-r from-pink-500 to-cyan-400 shadow-lg shadow-pink-500/30'
                      : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                />
              ))}
            </div>
            
            {/* Navigation Arrows */}
            <div className="flex gap-4">
              <motion.button
                whileHover={{ scale: 1.05, x: -5 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveTestimonial((prev) => 
                  prev === 0 ? testimonialsSectionCopy.testimonials.length - 1 : prev - 1
                )}
                className="w-12 h-12 bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl border border-gray-600 hover:border-pink-500 flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-pink-500/20"
              >
                <svg className="w-5 h-5 text-gray-400 hover:text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05, x: 5 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveTestimonial((prev) => 
                  prev === testimonialsSectionCopy.testimonials.length - 1 ? 0 : prev + 1
                )}
                className="w-12 h-12 bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl border border-gray-600 hover:border-cyan-400 flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-cyan-400/20"
              >
                <svg className="w-5 h-5 text-gray-400 hover:text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}