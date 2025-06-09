"use client";

import { motion } from "framer-motion";
import { heroSectionCopy } from "../copy";
import { useState, useEffect } from "react";

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-b from-slate-50 via-blue-50 to-slate-100">
      
      {/* Nordic geometric background */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="nordic-grid" width="100" height="100" patternUnits="userSpaceOnUse">
              <rect width="100" height="100" fill="none" />
              <path d="M50 0v100M0 50h100" stroke="#1e40af" strokeWidth="0.5" />
              <circle cx="50" cy="50" r="2" fill="#1e40af" opacity="0.3" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#nordic-grid)" />
        </svg>
      </div>

      {/* Floating minimal shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 2, 0]
          }}
          transition={{ 
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 left-16 w-32 h-1 bg-blue-200 opacity-60"
        />

        <motion.div
          animate={{ 
            y: [0, 15, 0],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute top-1/3 right-20 w-24 h-24 border border-blue-300 opacity-40"
        />

        <motion.div
          animate={{ 
            y: [0, -10, 0],
            x: [0, 5, 0]
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4
          }}
          className="absolute bottom-1/3 left-1/4 w-1 h-40 bg-gradient-to-t from-blue-300 to-transparent opacity-50"
        />

        <motion.div
          animate={{ 
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/2 right-1/3 w-16 h-16 border-2 border-blue-200 opacity-30"
        />
      </div>

      {/* Clean border frame */}
      <div className="absolute inset-12 pointer-events-none">
        <div className="w-full h-full border border-blue-200/30"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-8 min-h-screen flex items-center">
        <div className="w-full max-w-6xl mx-auto">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            
            {/* Left column - Content */}
            <div className="space-y-12">
              
              {/* Tagline */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <span className="text-blue-600 font-light tracking-widest text-sm uppercase">
                  {heroSectionCopy.tagline}
                </span>
                <div className="w-16 h-px bg-blue-300 mt-4"></div>
              </motion.div>

              {/* Main heading */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="space-y-4"
              >
                <h1 className="text-7xl md:text-8xl lg:text-9xl font-extralight text-slate-800 leading-none tracking-tight">
                  {heroSectionCopy.heading1}
                </h1>
                <h1 className="text-7xl md:text-8xl lg:text-9xl font-light text-blue-600 leading-none tracking-tight">
                  {heroSectionCopy.heading2}
                </h1>
              </motion.div>

              {/* Description */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="max-w-lg"
              >
                <p className="text-slate-600 text-lg leading-relaxed font-light">
                  {heroSectionCopy.description}
                </p>
              </motion.div>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="flex flex-col sm:flex-row gap-6"
              >
                {/* Primary CTA */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-4 bg-blue-600 text-white font-light text-lg tracking-wide transition-all duration-300 hover:bg-blue-700 hover:shadow-lg"
                >
                  {heroSectionCopy.cta}
                </motion.button>

                {/* Secondary CTA */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-4 border border-slate-300 text-slate-700 font-light text-lg tracking-wide transition-all duration-300 hover:border-blue-400 hover:text-blue-600"
                >
                  {heroSectionCopy.exploreCta}
                </motion.button>
              </motion.div>
            </div>

            {/* Right column - Visual elements */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.6 }}
              className="relative"
            >
              {/* Main visual element */}
              <div className="relative">
                {/* Large minimal shape */}
                <motion.div
                  animate={{ 
                    y: [0, -10, 0]
                  }}
                  transition={{ 
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="w-80 h-96 bg-gradient-to-br from-blue-100 to-blue-200 opacity-80"
                />
                
                {/* Overlapping shapes */}
                <motion.div
                  animate={{ 
                    y: [0, 8, 0]
                  }}
                  transition={{ 
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                  className="absolute top-12 -right-8 w-32 h-32 bg-white shadow-lg"
                />
                
                <motion.div
                  animate={{ 
                    y: [0, -5, 0]
                  }}
                  transition={{ 
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2
                  }}
                  className="absolute -bottom-8 -left-8 w-24 h-24 border-2 border-blue-300"
                />

                {/* Minimal lines */}
                <div className="absolute top-0 left-0 w-full h-full">
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 1.5, delay: 1.2 }}
                    className="absolute top-1/3 left-0 w-20 h-px bg-blue-400 origin-left"
                  />
                  <motion.div
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: 1 }}
                    transition={{ duration: 1.5, delay: 1.5 }}
                    className="absolute bottom-1/4 right-0 w-px h-16 bg-blue-400 origin-bottom"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
      >
        <span className="text-slate-500 text-sm font-light tracking-wide mb-6">
          {heroSectionCopy.scrollText}
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="w-px h-16 bg-gradient-to-b from-blue-400 to-transparent"
        />
      </motion.div>

      {/* Subtle parallax background */}
      <motion.div
        className="absolute top-0 right-0 w-full h-full opacity-30"
        style={{ 
          transform: `translateY(${scrollY * 0.1}px)`,
          background: "radial-gradient(ellipse at top right, rgba(59,130,246,0.1) 0%, transparent 50%)"
        }}
      />
    </section>
  );
} 