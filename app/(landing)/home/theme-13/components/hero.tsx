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
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      {/* Art Deco geometric background */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="art-deco-pattern" width="120" height="120" patternUnits="userSpaceOnUse">
              <rect width="120" height="120" fill="none" />
              <path d="M60 0L120 60L60 120L0 60Z" fill="#d4af37" opacity="0.3" />
              <path d="M60 20L100 60L60 100L20 60Z" fill="none" stroke="#d4af37" strokeWidth="1" opacity="0.4" />
              <circle cx="60" cy="60" r="5" fill="#d4af37" opacity="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#art-deco-pattern)" />
        </svg>
      </div>

      {/* Golden sunburst rays */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute top-1/2 left-1/2 w-px h-96 bg-gradient-to-t from-transparent via-yellow-400/20 to-transparent origin-bottom"
            style={{
              transform: `translate(-50%, -50%) rotate(${i * 30}deg)`,
            }}
            initial={{ opacity: 0, scaleY: 0 }}
            animate={{ opacity: 1, scaleY: 1 }}
            transition={{ duration: 2, delay: i * 0.1 }}
          />
        ))}
      </div>

      {/* Floating Art Deco elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ 
            y: [0, -30, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 left-10 w-16 h-16 opacity-30"
        >
          <svg viewBox="0 0 64 64" className="w-full h-full">
            <polygon points="32,8 48,24 32,40 16,24" fill="#d4af37" opacity="0.6" />
            <polygon points="32,16 40,24 32,32 24,24" fill="#f7e98e" opacity="0.8" />
          </svg>
        </motion.div>

        <motion.div
          animate={{ 
            y: [0, 20, 0],
            rotate: [0, -3, 0]
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute top-1/3 right-20 w-20 h-20 opacity-25"
        >
          <svg viewBox="0 0 80 80" className="w-full h-full">
            <circle cx="40" cy="40" r="30" fill="none" stroke="#d4af37" strokeWidth="2" />
            <circle cx="40" cy="40" r="20" fill="none" stroke="#f7e98e" strokeWidth="1" />
            <circle cx="40" cy="40" r="10" fill="#d4af37" opacity="0.7" />
          </svg>
        </motion.div>

        <motion.div
          animate={{ 
            y: [0, -15, 0],
            rotate: [0, 2, 0]
          }}
          transition={{ 
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4
          }}
          className="absolute bottom-1/3 left-1/4 w-12 h-24 opacity-20"
        >
          <svg viewBox="0 0 48 96" className="w-full h-full">
            <rect x="18" y="0" width="12" height="96" fill="#d4af37" />
            <polygon points="24,0 36,12 24,24 12,12" fill="#f7e98e" />
            <polygon points="24,72 36,84 24,96 12,84" fill="#f7e98e" />
          </svg>
        </motion.div>
      </div>

      {/* Golden border frames */}
      <div className="absolute inset-8 pointer-events-none">
        <div className="w-full h-full border border-yellow-400/30 relative">
          {/* Corner decorations */}
          <div className="absolute -top-2 -left-2 w-8 h-8">
            <svg viewBox="0 0 32 32" className="w-full h-full">
              <path d="M0,16 L16,0 L32,16 L16,32 Z" fill="#d4af37" opacity="0.6" />
            </svg>
          </div>
          <div className="absolute -top-2 -right-2 w-8 h-8">
            <svg viewBox="0 0 32 32" className="w-full h-full">
              <path d="M0,16 L16,0 L32,16 L16,32 Z" fill="#d4af37" opacity="0.6" />
            </svg>
          </div>
          <div className="absolute -bottom-2 -left-2 w-8 h-8">
            <svg viewBox="0 0 32 32" className="w-full h-full">
              <path d="M0,16 L16,0 L32,16 L16,32 Z" fill="#d4af37" opacity="0.6" />
            </svg>
          </div>
          <div className="absolute -bottom-2 -right-2 w-8 h-8">
            <svg viewBox="0 0 32 32" className="w-full h-full">
              <path d="M0,16 L16,0 L32,16 L16,32 Z" fill="#d4af37" opacity="0.6" />
            </svg>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-8 min-h-screen flex items-center">
        <div className="w-full max-w-5xl mx-auto text-center">
          
          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mb-8"
          >
            <span className="text-yellow-400 font-light tracking-[0.3em] text-sm uppercase">
              {heroSectionCopy.tagline}
            </span>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent mx-auto mt-4"></div>
          </motion.div>

          {/* Main heading */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.4 }}
            className="mb-12"
          >
            <h1 className="text-8xl md:text-9xl lg:text-[12rem] font-thin text-white leading-none tracking-tighter relative">
              <motion.span 
                className="block relative"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 1 }}
              >
                {heroSectionCopy.heading1}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400 bg-clip-text text-transparent opacity-0"
                  animate={{ opacity: [0, 0.3, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  {heroSectionCopy.heading1}
                </motion.div>
              </motion.span>
              <motion.span 
                className="block text-gradient bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 bg-clip-text text-transparent"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 1 }}
              >
                {heroSectionCopy.heading2}
              </motion.span>
            </h1>
            
            {/* Decorative underline */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.5, delay: 1.5 }}
              className="w-32 h-0.5 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto mt-8 origin-center"
            />
          </motion.div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.6 }}
            className="mb-16"
          >
            <p className="text-slate-300 text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed font-light">
              {heroSectionCopy.description}
            </p>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.8 }}
            className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-20"
          >
            {/* Primary CTA */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative px-12 py-5 bg-gradient-to-r from-yellow-400 to-yellow-600 text-slate-900 font-medium text-lg tracking-wide overflow-hidden group"
            >
              <span className="relative z-10">{heroSectionCopy.cta}</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-yellow-500"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
              {/* Golden border */}
              <div className="absolute inset-0 border-2 border-yellow-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.button>

            {/* Secondary CTA */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative px-12 py-5 border-2 border-yellow-400 text-yellow-400 font-medium text-lg tracking-wide overflow-hidden group transition-all duration-500 hover:text-slate-900"
            >
              <span className="relative z-10">{heroSectionCopy.exploreCta}</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-600"
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
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
      >
        <span className="text-yellow-400 text-sm font-light tracking-widest mb-6">
          {heroSectionCopy.scrollText}
        </span>
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="relative"
        >
          <div className="w-6 h-12 border-2 border-yellow-400 rounded-full flex justify-center pt-2">
            <motion.div 
              className="w-1 h-3 bg-gradient-to-b from-yellow-400 to-yellow-600 rounded-full"
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </motion.div>

      {/* Parallax luxury texture */}
      <motion.div
        className="absolute top-0 right-0 w-full h-full opacity-5"
        style={{ 
          transform: `translateY(${scrollY * 0.3}px)`,
          background: "radial-gradient(ellipse at center, rgba(212,175,55,0.1) 0%, transparent 70%)"
        }}
      />
    </section>
  );
} 