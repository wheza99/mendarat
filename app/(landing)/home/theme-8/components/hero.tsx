"use client";

import { heroSectionCopy } from "../copy";
import { motion } from "framer-motion";
import Link from "next/link";

// Using a custom ChevronDownIcon since we're having issues with heroicons
const ChevronDownIcon = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    fill="none" 
    viewBox="0 0 24 24" 
    strokeWidth={1.5} 
    stroke="currentColor" 
    className={className}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
  </svg>
);

// Add custom CSS for scanlines effect
const scanlineStyles = {
  backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px)`,
  backgroundSize: `100% 2px`,
  pointerEvents: `none` as const
};

export default function Hero() {
  return (
    <section className="relative h-screen overflow-hidden bg-black">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroSectionCopy.backgroundImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/70 via-pink-600/50 to-blue-900/80" />
        
        {/* Grid overlay */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{ 
            backgroundImage: "linear-gradient(0deg, transparent 24%, rgba(255, 255, 255, .05) 25%, rgba(255, 255, 255, .05) 26%, transparent 27%, transparent 74%, rgba(255, 255, 255, .05) 75%, rgba(255, 255, 255, .05) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(255, 255, 255, .05) 25%, rgba(255, 255, 255, .05) 26%, transparent 27%, transparent 74%, rgba(255, 255, 255, .05) 75%, rgba(255, 255, 255, .05) 76%, transparent 77%, transparent)",
            backgroundSize: "50px 50px"
          }}
        />
        
        {/* Scanlines effect */}
        <div className="absolute inset-0 bg-scanlines opacity-10"></div>
      </div>

      {/* Horizontal lines */}
      <motion.div 
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-pink-500 to-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ duration: 1, delay: 0.5 }}
      />
      <motion.div 
        className="absolute top-1/3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 1, delay: 0.7 }}
      />

      {/* Sun/circle element */}
      <motion.div 
        className="absolute bottom-0 left-1/2 w-[800px] h-[400px] rounded-t-full bg-gradient-to-t from-pink-600 to-orange-500"
        style={{ translateX: "-50%" }}
        initial={{ y: 400 }}
        animate={{ y: 200 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-wider mb-2 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500">
            {heroSectionCopy.heading1} <span className="text-white">{heroSectionCopy.heading2}</span>
          </h1>
          <p className="text-xl md:text-2xl font-light tracking-wide text-pink-200 mt-2">
            {heroSectionCopy.tagline}
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.9 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-2xl mx-auto text-base md:text-lg text-blue-100 mb-8"
        >
          {heroSectionCopy.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 mt-4"
        >
          <Link href="#projects">
            <button className="px-8 py-3 text-lg font-bold text-white bg-gradient-to-r from-pink-600 to-purple-600 rounded-md hover:from-pink-500 hover:to-purple-500 transform hover:scale-105 transition-all duration-300 shadow-[0_0_15px_rgba(236,72,153,0.5)] hover:shadow-[0_0_25px_rgba(236,72,153,0.7)]">
              {heroSectionCopy.cta}
            </button>
          </Link>
          <Link href="#process">
            <button className="px-8 py-3 text-lg font-bold text-white bg-transparent border-2 border-blue-400 rounded-md hover:bg-blue-900/30 transform hover:scale-105 transition-all duration-300 shadow-[0_0_10px_rgba(96,165,250,0.3)] hover:shadow-[0_0_20px_rgba(96,165,250,0.5)]">
              {heroSectionCopy.exploreCta}
            </button>
          </Link>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 0.8, y: 0 }}
          transition={{ 
            duration: 0.8, 
            delay: 1,
            repeat: Infinity,
            repeatType: "reverse",
            repeatDelay: 0.5
          }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        >
          <span className="text-sm font-light tracking-widest text-blue-200 mb-2">
            {heroSectionCopy.scrollText}
          </span>
          <ChevronDownIcon className="w-6 h-6 text-blue-300" />
        </motion.div>
      </div>
    </section>
  );
}
