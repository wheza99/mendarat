"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";
import { testimonialsSectionCopy } from "../copy";

export default function Testimonials() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  return (
    <section 
      ref={sectionRef}
      className="relative py-20 bg-gradient-to-b from-[#1F1147] to-[#1A0B2E]"
    >
      {/* Quantum wave background */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <svg width="100%" height="100%" viewBox="0 0 1000 1000" preserveAspectRatio="none">
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.3"/>
              <stop offset="50%" stopColor="#8B5CF6" stopOpacity="0.5"/>
              <stop offset="100%" stopColor="#06B6D4" stopOpacity="0.3"/>
            </linearGradient>
          </defs>
          
          <path d="M0,300 Q250,200 500,300 T1000,300 L1000,1000 L0,1000 Z" fill="url(#waveGradient)" opacity="0.3">
            <animateTransform
              attributeName="transform"
              type="translate"
              values="-100,0;100,0;-100,0"
              dur="10s"
              repeatCount="indefinite"/>
          </path>
          
          <path d="M0,400 Q250,350 500,400 T1000,400 L1000,1000 L0,1000 Z" fill="url(#waveGradient)" opacity="0.2">
            <animateTransform
              attributeName="transform"
              type="translate"
              values="100,0;-100,0;100,0"
              dur="8s"
              repeatCount="indefinite"/>
          </path>
        </svg>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-3">
            <div className="h-[1px] w-10 bg-gradient-to-r from-transparent via-[#E5E4E2] to-transparent"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#E5E4E2] mb-4">{testimonialsSectionCopy.heading}</h2>
          <p className="text-[#E5E4E2]/70 max-w-2xl mx-auto">
            {testimonialsSectionCopy.description}
          </p>
        </motion.div>
        
        <div className="max-w-4xl mx-auto">
          {/* Main testimonial display */}
          <motion.div
            key={activeTestimonial}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="relative p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
              {/* Quote icon */}
              <div className="absolute top-4 left-4 w-8 h-8 text-blue-400/30">
                <svg fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                </svg>
              </div>
              
              {/* Testimonial content */}
              <blockquote className="text-xl md:text-2xl text-[#E5E4E2] font-medium leading-relaxed mb-8 italic">
                "{testimonialsSectionCopy.testimonials[activeTestimonial].quote}"
              </blockquote>
              
              {/* Author info */}
              <div className="flex items-center justify-center space-x-4">
                <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-blue-400/30">
                  <Image
                    src={testimonialsSectionCopy.testimonials[activeTestimonial].image}
                    alt={testimonialsSectionCopy.testimonials[activeTestimonial].author}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="text-left">
                  <h4 className="text-[#E5E4E2] font-bold text-lg">
                    {testimonialsSectionCopy.testimonials[activeTestimonial].author}
                  </h4>
                  <p className="text-[#E5E4E2]/60 text-sm">
                    {testimonialsSectionCopy.testimonials[activeTestimonial].role}
                  </p>
                </div>
              </div>
              
              {/* Quantum glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/10 to-purple-600/10 pointer-events-none"></div>
            </div>
          </motion.div>
          
          {/* Testimonial navigation */}
          <div className="flex justify-center space-x-4">
            {testimonialsSectionCopy.testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setActiveTestimonial(index)}
                className={`relative w-16 h-16 rounded-full overflow-hidden border-2 transition-all duration-300 ${
                  activeTestimonial === index 
                    ? 'border-blue-400 scale-110' 
                    : 'border-white/20 hover:border-white/40 hover:scale-105'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Image
                  src={testimonialsSectionCopy.testimonials[index].image}
                  alt={testimonialsSectionCopy.testimonials[index].author}
                  fill
                  className="object-cover"
                />
                
                {/* Active indicator */}
                {activeTestimonial === index && (
                  <div className="absolute inset-0 bg-blue-400/20 flex items-center justify-center">
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                  </div>
                )}
              </motion.button>
            ))}
          </div>
          
          {/* Navigation dots */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonialsSectionCopy.testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeTestimonial === index 
                    ? 'bg-blue-400 scale-125' 
                    : 'bg-white/20 hover:bg-white/40'
                }`}
              />
            ))}
          </div>
        </div>
        
        {/* Floating quantum particles */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full opacity-60 animate-float"></div>
          <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-purple-400 rounded-full opacity-80 animate-float" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-1/4 left-1/2 w-1.5 h-1.5 bg-cyan-400 rounded-full opacity-70 animate-float" style={{ animationDelay: '2s' }}></div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}