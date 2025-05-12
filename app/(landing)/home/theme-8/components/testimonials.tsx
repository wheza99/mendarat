"use client";

import { useState, useEffect } from "react";
import { testimonialsSectionCopy } from "../copy";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const testimonials = testimonialsSectionCopy.testimonials;

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section id="testimonials" className="relative py-24 bg-black overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/10 to-black"></div>
      
      {/* Grid overlay */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{ 
          backgroundImage: "linear-gradient(0deg, transparent 24%, rgba(255, 255, 255, .05) 25%, rgba(255, 255, 255, .05) 26%, transparent 27%, transparent 74%, rgba(255, 255, 255, .05) 75%, rgba(255, 255, 255, .05) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(255, 255, 255, .05) 25%, rgba(255, 255, 255, .05) 26%, transparent 27%, transparent 74%, rgba(255, 255, 255, .05) 75%, rgba(255, 255, 255, .05) 76%, transparent 77%, transparent)",
          backgroundSize: "50px 50px"
        }}
      />
      
      {/* Horizontal neon line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-pink-500 to-transparent opacity-70"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-pink-500">
            {testimonialsSectionCopy.heading}
          </h2>
          <p className="text-blue-100 opacity-90 max-w-2xl mx-auto">
            {testimonialsSectionCopy.description}
          </p>
        </motion.div>

        {/* Testimonials carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-pink-600/20 to-blue-600/20 rounded-lg -m-1 blur-lg"></div>
            
            <div className="relative rounded-lg overflow-hidden border border-pink-500/30 bg-black/50 backdrop-blur-sm p-8 md:p-12">
              {/* VHS tracking lines effect */}
              <div className="absolute inset-0 bg-scanlines opacity-10"></div>
              
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-pink-500 opacity-80"></div>
              <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-blue-500 opacity-80"></div>
              <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-blue-500 opacity-80"></div>
              <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-pink-500 opacity-80"></div>
              
              {/* Quote icon */}
              <div className="absolute top-8 left-8 text-pink-500/20">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              
              {/* Testimonial content */}
              <div className="relative">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="text-center"
                  >
                    <p className="text-blue-100 text-lg md:text-xl italic mb-8 max-w-3xl mx-auto">
                      "{testimonials[activeIndex].quote}"
                    </p>
                    
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-pink-500 mb-4 shadow-[0_0_15px_rgba(219,39,119,0.5)]">
                        <Image
                          src={testimonials[activeIndex].image}
                          alt={testimonials[activeIndex].name}
                          width={64}
                          height={64}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h4 className="text-white font-bold text-lg">{testimonials[activeIndex].name}</h4>
                      <p className="text-pink-400 text-sm">{testimonials[activeIndex].role}</p>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
          
          {/* Navigation dots */}
          <div className="flex justify-center mt-8 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeIndex === index 
                    ? "bg-gradient-to-r from-pink-500 to-blue-500 shadow-[0_0_10px_rgba(219,39,119,0.7)] scale-125" 
                    : "bg-gray-700 hover:bg-gray-600"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
