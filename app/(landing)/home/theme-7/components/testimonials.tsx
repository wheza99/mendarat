"use client";

import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { testimonialsSectionCopy } from "../copy";
import Image from "next/image";

export default function Testimonials() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const [activeIndex, setActiveIndex] = useState(0);
  const testimonials = testimonialsSectionCopy.testimonials;

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 8000);
    
    return () => clearInterval(interval);
  }, [testimonials.length]);

  // Digital data stream background
  const DataStream = () => {
    return (
      <div className="absolute inset-0 opacity-10 overflow-hidden">
        <div className="absolute inset-0 font-mono text-[6px] text-cyan-500 leading-none select-none">
          {Array.from({ length: 100 }).map((_, rowIndex) => (
            <motion.div 
              key={rowIndex} 
              className="whitespace-nowrap"
              animate={{
                x: [0, -500],
              }}
              transition={{
                duration: 60,
                repeat: Infinity,
                ease: "linear",
                delay: rowIndex * 0.1,
              }}
            >
              {Array.from({ length: 200 }).map((_, colIndex) => {
                const char = Math.random() > 0.5 
                  ? (Math.random() > 0.5 ? "0" : "1") 
                  : (Math.random() > 0.5 ? "/" : "\\");
                return (
                  <span key={`${rowIndex}-${colIndex}`}>
                    {char}
                  </span>
                );
              })}
            </motion.div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <section id="testimonials" className="relative py-24 bg-gray-900 overflow-hidden">
      {/* Background elements */}
      <DataStream />
      
      {/* Glowing accent elements */}
      <motion.div
        className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full filter blur-[100px]"
        animate={{
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full filter blur-[100px]"
        animate={{
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{ duration: 8, repeat: Infinity, delay: 4 }}
      />

      <div className="container mx-auto px-4" ref={containerRef}>
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-6 tracking-tight"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
              {testimonialsSectionCopy.heading}
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-gray-300 text-lg"
          >
            {testimonialsSectionCopy.description}
          </motion.p>
        </div>

        {/* Testimonial display with holographic 3D effect */}
        <div className="relative max-w-5xl mx-auto">
          {/* 3D platform effect */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 0.7 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 w-[90%] h-10 bg-gradient-to-b from-cyan-500/30 to-transparent blur-md"
            style={{ 
              perspective: "1000px",
              transform: "rotateX(60deg) translateZ(-30px)",
              transformStyle: "preserve-3d"
            }}
          />
          
          {/* Testimonial carousel */}
          <div className="relative">
            <AnimatePresence mode="wait">
              {testimonials.map((testimonial, index) => (
                index === activeIndex && (
                  <motion.div
                    key={testimonial.id}
                    initial={{ opacity: 0, rotateY: -20, scale: 0.9 }}
                    animate={{ opacity: 1, rotateY: 0, scale: 1 }}
                    exit={{ opacity: 0, rotateY: 20, scale: 0.9 }}
                    transition={{ duration: 0.6 }}
                    className="relative p-8 md:p-12 rounded-lg bg-gradient-to-br from-gray-800/80 to-gray-900/90 border border-cyan-500/30 transform perspective-1000 shadow-[0_10px_30px_rgba(0,0,0,0.3)]"
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    {/* Quote icon */}
                    <div className="absolute top-6 left-6 text-cyan-500/20">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-16 w-16"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                      </svg>
                    </div>
                    
                    {/* Digital circuit overlay */}
                    <div className="absolute inset-0 opacity-5 pointer-events-none overflow-hidden">
                      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M0 50 H100 M50 0 V100 M0 0 L100 100 M100 0 L0 100"
                          stroke="#06b6d4"
                          strokeWidth="0.5"
                          fill="none"
                          vectorEffect="non-scaling-stroke"
                        />
                        <circle cx="50" cy="50" r="3" fill="#06b6d4" />
                      </svg>
                    </div>
                    
                    {/* Testimonial content */}
                    <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center">
                      {/* Author image */}
                      <div className="relative w-24 h-24 md:w-32 md:h-32 flex-shrink-0">
                        <div className="absolute inset-0 rounded-full overflow-hidden">
                          <Image
                            src={testimonial.image}
                            alt={testimonial.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        
                        {/* Image border effect */}
                        <div className="absolute -inset-1 rounded-full border border-cyan-500/50 opacity-70" />
                        <motion.div
                          className="absolute -inset-1 rounded-full border border-cyan-400"
                          animate={{
                            scale: [1, 1.1, 1],
                            opacity: [0.5, 0.2, 0.5],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                          }}
                        />
                        
                        {/* Digital scan effect */}
                        <motion.div
                          className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
                          animate={{
                            top: ["0%", "100%", "0%"],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                        />
                      </div>
                      
                      {/* Quote and author info */}
                      <div className="flex-1">
                        <blockquote className="text-gray-300 text-lg md:text-xl italic mb-6">
                          "{testimonial.quote}"
                        </blockquote>
                        
                        <div className="flex items-center">
                          <div className="w-12 h-px bg-gradient-to-r from-cyan-400 to-blue-500 mr-4" />
                          <div>
                            <div className="text-white font-bold">
                              {testimonial.name}
                            </div>
                            <div className="text-cyan-400 text-sm font-mono tracking-wide">
                              {testimonial.role}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Corner accents */}
                    <div className="absolute top-0 left-0 w-12 h-12">
                      <div className="absolute top-0 left-0 w-full h-[2px] bg-cyan-400" />
                      <div className="absolute top-0 left-0 w-[2px] h-full bg-cyan-400" />
                    </div>
                    <div className="absolute top-0 right-0 w-12 h-12">
                      <div className="absolute top-0 right-0 w-full h-[2px] bg-cyan-400" />
                      <div className="absolute top-0 right-0 w-[2px] h-full bg-cyan-400" />
                    </div>
                    <div className="absolute bottom-0 left-0 w-12 h-12">
                      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-cyan-400" />
                      <div className="absolute bottom-0 left-0 w-[2px] h-full bg-cyan-400" />
                    </div>
                    <div className="absolute bottom-0 right-0 w-12 h-12">
                      <div className="absolute bottom-0 right-0 w-full h-[2px] bg-cyan-400" />
                      <div className="absolute bottom-0 right-0 w-[2px] h-full bg-cyan-400" />
                    </div>
                  </motion.div>
                )
              ))}
            </AnimatePresence>
          </div>
          
          {/* Testimonial navigation */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`relative w-12 h-3 rounded-full transition-colors ${
                  index === activeIndex
                    ? "bg-gradient-to-r from-cyan-400 to-blue-500"
                    : "bg-gray-700 hover:bg-gray-600"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              >
                {index === activeIndex && (
                  <motion.div
                    layoutId="testimonialIndicator"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
