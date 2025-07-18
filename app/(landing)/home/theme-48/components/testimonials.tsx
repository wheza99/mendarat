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
    <section className="py-20 bg-gradient-to-br from-emerald-900/10 via-teal-900/5 to-green-900/10 relative overflow-hidden">
      {/* Organic Background Elements */}
      <div className="absolute inset-0 opacity-10">
        {/* Floating Bio Cells */}
        <div className="absolute top-20 left-20 w-40 h-40 bg-emerald-200 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-teal-200 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-green-200 rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        {/* DNA Helix Pattern */}
        <svg className="absolute inset-0 w-full h-full" style={{ pointerEvents: 'none' }}>
          <defs>
            <linearGradient id="testimonialGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#10B981" stopOpacity="0.2" />
              <stop offset="50%" stopColor="#06B6D4" stopOpacity="0.1" />
              <stop offset="100%" stopColor="#22C55E" stopOpacity="0.15" />
            </linearGradient>
          </defs>
          <path 
            d="M 0 200 Q 200 100 400 200 T 800 200 Q 1000 100 1200 200"
            stroke="url(#testimonialGradient)" 
            strokeWidth="2" 
            fill="none"
            className="animate-pulse"
          />
          <path 
            d="M 0 400 Q 200 300 400 400 T 800 400 Q 1000 300 1200 400"
            stroke="url(#testimonialGradient)" 
            strokeWidth="1.5" 
            fill="none"
            className="animate-pulse"
            style={{ animationDelay: '1s' }}
          />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Main Image Container */}
            <div className="relative bg-gradient-to-br from-emerald-100 to-teal-100 rounded-3xl p-8 border border-emerald-200">
              {/* Placeholder Image */}
              <div className="aspect-square bg-gradient-to-br from-emerald-200 to-green-300 rounded-2xl flex items-center justify-center relative overflow-hidden">
                <div className="text-8xl opacity-60">🧬</div>
                
                {/* Animated Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-500/20 to-transparent"></div>
                
                {/* Floating Elements */}
                {Array.from({ length: 8 }).map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-3 h-3 bg-white rounded-full"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                    }}
                    animate={{
                      y: [0, -20, 0],
                      opacity: [0.3, 1, 0.3],
                      scale: [0.8, 1.2, 0.8]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: i * 0.3
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Floating Bio Icons */}
            <motion.div
              className="absolute -top-6 -right-6 w-20 h-20 bg-emerald-500 rounded-full flex items-center justify-center text-white text-3xl"
              animate={{ 
                rotate: [0, 360],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              ⚗️
            </motion.div>
            <motion.div
              className="absolute -bottom-6 -left-6 w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center text-white text-2xl"
              animate={{ 
                y: [0, -10, 0],
                rotate: [0, -180, 0]
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            >
              🔬
            </motion.div>
          </motion.div>

          {/* Right Side - Testimonials */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
              {testimonialsSectionCopy.heading}
            </h2>
            <p className="text-xl text-slate-600 mb-12">
              {testimonialsSectionCopy.description}
            </p>

            {/* Testimonial Content */}
            <div className="relative">
              <motion.div
                key={activeTestimonial}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5 }}
                className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-emerald-200/50 relative overflow-hidden"
              >
                {/* Background Pattern */}
                <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                  <div className="w-full h-full bg-gradient-to-br from-emerald-300 to-teal-300 rounded-full blur-2xl"></div>
                </div>
                
                {/* Quote Icon */}
                <div className="text-6xl text-emerald-200 mb-4 leading-none">"</div>
                
                {/* Testimonial Text */}
                <div className="relative z-10">
                  <blockquote className="text-xl text-slate-700 mb-6 leading-relaxed italic">
                    "{testimonialsSectionCopy.testimonials[activeTestimonial].quote}"
                  </blockquote>
                  
                  {/* Author Info */}
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-full flex items-center justify-center mr-4">
                      <span className="text-2xl">
                        {activeTestimonial === 0 && '👩‍🔬'}
                        {activeTestimonial === 1 && '👨‍💼'}
                        {activeTestimonial === 2 && '👩‍💻'}
                      </span>
                    </div>
                    <div>
                      <div className="font-bold text-slate-800">
                        {testimonialsSectionCopy.testimonials[activeTestimonial].author}
                      </div>
                      <div className="text-emerald-600 font-medium">
                        {testimonialsSectionCopy.testimonials[activeTestimonial].role}
                      </div>
                      <div className="text-slate-500 text-sm">
                        {testimonialsSectionCopy.testimonials[activeTestimonial].company}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8">
              {/* Dots Indicator */}
              <div className="flex space-x-2">
                {testimonialsSectionCopy.testimonials.map((_, index) => (
                  <motion.button
                    key={index}
                    onClick={() => setActiveTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === activeTestimonial 
                        ? 'bg-emerald-500 scale-125' 
                        : 'bg-emerald-200 hover:bg-emerald-300'
                    }`}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  />
                ))}
              </div>

              {/* Navigation Buttons */}
              <div className="flex space-x-4">
                <motion.button
                  onClick={prevTestimonial}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-12 h-12 bg-white border border-emerald-200 rounded-full flex items-center justify-center text-emerald-600 hover:bg-emerald-50 hover:border-emerald-300 transition-all duration-300"
                >
                  ←
                </motion.button>
                <motion.button
                  onClick={nextTestimonial}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-12 h-12 bg-emerald-500 border border-emerald-500 rounded-full flex items-center justify-center text-white hover:bg-emerald-600 hover:border-emerald-600 transition-all duration-300"
                >
                  →
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 mt-20"
        >
          {[
            { number: '98%', label: 'Client Satisfaction', icon: '😊' },
            { number: '500+', label: 'Success Stories', icon: '🎉' },
            { number: '50+', label: 'Industry Awards', icon: '🏆' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center p-6 bg-white/70 backdrop-blur-sm rounded-2xl border border-emerald-200/50"
            >
              <div className="text-4xl mb-3">{stat.icon}</div>
              <div className="text-3xl font-bold text-emerald-600 mb-2">{stat.number}</div>
              <div className="text-slate-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}