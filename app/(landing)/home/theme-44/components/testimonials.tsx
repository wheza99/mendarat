'use client';

import { motion } from 'framer-motion';
import { testimonialsSectionCopy } from '../copy';
import Image from 'next/image';
import { useState } from 'react';

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
    <section className="relative py-24 bg-gradient-to-b from-black to-slate-900 overflow-hidden">
      {/* Art Deco Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-gradient-to-r from-transparent via-yellow-400/20 to-transparent"
              style={{
                width: '100%',
                height: '1px',
                top: `${10 * i}%`,
                transform: `skew(${-20 + i * 4}deg)`,
              }}
            />
          ))}
        </div>
        
        {/* Floating Art Deco elements */}
        <div className="absolute inset-0">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `deco-float ${20 + Math.random() * 10}s linear infinite`,
                animationDelay: `${Math.random() * 5}s`
              }}
            >
              <div className="w-8 h-8 border border-yellow-400/10 transform rotate-45">
                <div className="w-full h-full border border-yellow-400/5 transform rotate-45" />
              </div>
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
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-5xl lg:text-6xl font-bold text-white mb-6 luxury-glow"
          >
            {testimonialsSectionCopy.heading}
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

        {/* Testimonials Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="relative max-w-4xl mx-auto"
        >
          {/* Main Testimonial */}
          <div className="relative bg-gradient-to-b from-slate-800/30 to-slate-900/30 backdrop-blur-sm border border-yellow-400/20 p-12 overflow-hidden">
            {/* Art Deco frame */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-0 left-0 w-12 h-12 border-t-4 border-l-4 border-yellow-400/50" />
              <div className="absolute top-0 right-0 w-12 h-12 border-t-4 border-r-4 border-yellow-400/50" />
              <div className="absolute bottom-0 left-0 w-12 h-12 border-b-4 border-l-4 border-yellow-400/50" />
              <div className="absolute bottom-0 right-0 w-12 h-12 border-b-4 border-r-4 border-yellow-400/50" />
            </div>
            
            {/* Quote Icon */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="absolute top-8 left-8 w-16 h-16 bg-yellow-400/20 backdrop-blur-sm border border-yellow-400/30 flex items-center justify-center"
            >
              <svg
                className="w-8 h-8 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
              </svg>
            </motion.div>
            
            <div className="grid lg:grid-cols-3 gap-8 items-center">
              {/* Testimonial Content */}
              <div className="lg:col-span-2 space-y-6">
                <motion.p
                  key={activeTestimonial}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-xl lg:text-2xl text-gray-200 leading-relaxed italic"
                >
                  "{testimonialsSectionCopy.testimonials[activeTestimonial].content}"
                </motion.p>
                
                {/* Rating Stars */}
                <motion.div
                  key={`rating-${activeTestimonial}`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  className="flex space-x-1"
                >
                  {[...Array(testimonialsSectionCopy.testimonials[activeTestimonial].rating)].map((_, i) => (
                    <motion.svg
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.3 + i * 0.1 }}
                      className="w-6 h-6 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </motion.svg>
                  ))}
                </motion.div>
                
                {/* Client Info */}
                <motion.div
                  key={`info-${activeTestimonial}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="space-y-2"
                >
                  <h3 className="text-xl font-bold text-white">
                    {testimonialsSectionCopy.testimonials[activeTestimonial].name}
                  </h3>
                  <p className="text-yellow-400 font-medium">
                    {testimonialsSectionCopy.testimonials[activeTestimonial].role}
                  </p>
                </motion.div>
              </div>
              
              {/* Client Image */}
              <motion.div
                key={`image-${activeTestimonial}`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="relative"
              >
                <div className="relative aspect-square overflow-hidden">
                  {/* Art Deco frame */}
                  <div className="absolute inset-0 border-4 border-yellow-400/30 z-10">
                    <div className="absolute top-0 left-0 w-6 h-6 border-t-4 border-l-4 border-yellow-400" />
                    <div className="absolute top-0 right-0 w-6 h-6 border-t-4 border-r-4 border-yellow-400" />
                    <div className="absolute bottom-0 left-0 w-6 h-6 border-b-4 border-l-4 border-yellow-400" />
                    <div className="absolute bottom-0 right-0 w-6 h-6 border-b-4 border-r-4 border-yellow-400" />
                  </div>
                  
                  <Image
                    src={testimonialsSectionCopy.testimonials[activeTestimonial].image}
                    alt={testimonialsSectionCopy.testimonials[activeTestimonial].name}
                    fill
                    className="object-cover"
                  />
                  
                  {/* Golden overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-yellow-400/20 via-transparent to-transparent" />
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 border-2 border-yellow-400/50 transform rotate-45 deco-scale" />
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-yellow-400/30 transform rotate-45 vintage-swing" />
              </motion.div>
            </div>
            
            {/* Golden shimmer effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-400/5 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-2000" />
          </div>
          
          {/* Navigation Buttons */}
          <div className="flex justify-center items-center space-x-4 mt-8">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevTestimonial}
              className="w-12 h-12 bg-yellow-400/20 backdrop-blur-sm border border-yellow-400/30 flex items-center justify-center hover:bg-yellow-400/30 transition-all duration-300"
            >
              <svg
                className="w-6 h-6 text-yellow-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </motion.button>
            
            {/* Dots Indicator */}
            <div className="flex space-x-2">
              {testimonialsSectionCopy.testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.8 }}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 border-2 border-yellow-400 transition-all duration-300 ${
                    index === activeTestimonial
                      ? 'bg-yellow-400 transform rotate-45'
                      : 'bg-transparent hover:bg-yellow-400/30'
                  }`}
                />
              ))}
            </div>
            
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextTestimonial}
              className="w-12 h-12 bg-yellow-400/20 backdrop-blur-sm border border-yellow-400/30 flex items-center justify-center hover:bg-yellow-400/30 transition-all duration-300"
            >
              <svg
                className="w-6 h-6 text-yellow-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}