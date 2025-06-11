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
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-b from-stone-50 to-white">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <pattern id="zen-pattern" width="60" height="60" patternUnits="userSpaceOnUse">
            <circle cx="30" cy="30" r="1" fill="#374151" />
            <circle cx="0" cy="0" r="0.5" fill="#374151" />
            <circle cx="60" cy="60" r="0.5" fill="#374151" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#zen-pattern)" />
        </svg>
      </div>

      {/* Floating zen stones */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 left-10 w-4 h-6 bg-stone-300 rounded-full opacity-30"
          style={{ borderRadius: "50% 50% 50% 50% / 60% 60% 40% 40%" }}
        />
        <motion.div
          animate={{ 
            y: [0, 15, 0],
            rotate: [0, -3, 0]
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute top-1/3 right-20 w-6 h-4 bg-stone-400 rounded-full opacity-20"
          style={{ borderRadius: "50% 50% 50% 50% / 40% 40% 60% 60%" }}
        />
        <motion.div
          animate={{ 
            y: [0, -10, 0],
            rotate: [0, 2, 0]
          }}
          transition={{ 
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4
          }}
          className="absolute bottom-1/3 left-1/4 w-3 h-5 bg-stone-200 rounded-full opacity-25"
          style={{ borderRadius: "50% 50% 50% 50% / 70% 70% 30% 30%" }}
        />
      </div>

      {/* Gentle ripples */}
      <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: [0, 0.1, 0],
            scale: [0, 2, 3]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeOut"
          }}
          className="absolute bottom-10 left-1/2 w-32 h-32 border border-stone-300 rounded-full"
          style={{ transform: "translateX(-50%)" }}
        />
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: [0, 0.08, 0],
            scale: [0, 1.5, 2.5]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeOut",
            delay: 1
          }}
          className="absolute bottom-10 left-1/2 w-32 h-32 border border-stone-400 rounded-full"
          style={{ transform: "translateX(-50%)" }}
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-6 min-h-screen flex items-center">
        <div className="w-full max-w-4xl mx-auto text-center">
          
          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <span className="text-stone-600 font-light tracking-[0.2em] text-sm uppercase">
              {heroSectionCopy.tagline}
            </span>
            <div className="w-16 h-px bg-stone-300 mx-auto mt-3"></div>
          </motion.div>

          {/* Main heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="mb-12"
          >
            <h1 className="text-7xl md:text-8xl lg:text-9xl font-extralight text-stone-800 leading-none tracking-tight">
              <span className="block">{heroSectionCopy.heading1}</span>
              <motion.span 
                className="block text-stone-600"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.8 }}
              >
                {heroSectionCopy.heading2}
              </motion.span>
            </h1>
          </motion.div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mb-16"
          >
            <p className="text-stone-600 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-light">
              {heroSectionCopy.description}
            </p>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20"
          >
            {/* Primary CTA */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="relative px-10 py-4 bg-stone-800 text-white font-light text-lg tracking-wide overflow-hidden group transition-all duration-500"
            >
              <span className="relative z-10">{heroSectionCopy.cta}</span>
              <motion.div
                className="absolute inset-0 bg-stone-700"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>

            {/* Secondary CTA */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="relative px-10 py-4 border border-stone-300 text-stone-700 font-light text-lg tracking-wide overflow-hidden group transition-all duration-500 hover:border-stone-400"
            >
              <span className="relative z-10">{heroSectionCopy.exploreCta}</span>
              <motion.div
                className="absolute inset-0 bg-stone-50"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          </motion.div>

        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
      >
        <span className="text-stone-500 text-sm font-light tracking-wider mb-4">
          {heroSectionCopy.scrollText}
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="w-px h-12 bg-gradient-to-b from-stone-400 to-transparent"
        />
      </motion.div>

      {/* Parallax background element */}
      <motion.div
        className="absolute top-1/2 right-0 w-96 h-96 bg-gradient-radial from-stone-100 to-transparent rounded-full opacity-30"
        style={{ 
          transform: `translateY(${scrollY * 0.5}px)`,
          background: "radial-gradient(circle, rgba(120,113,108,0.1) 0%, transparent 70%)"
        }}
      />
    </section>
  );
} 