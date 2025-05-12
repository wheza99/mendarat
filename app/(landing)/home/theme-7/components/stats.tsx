"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { statsSectionCopy } from "../copy";
import Image from "next/image";

// Animated counter component
const Counter = ({ value, suffix, label }: { value: string; suffix: string; label: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const numericValue = parseInt(value);
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="relative"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-500/10 rounded-lg blur-xl opacity-70" />
      <div className="relative bg-gray-900/80 backdrop-blur-sm border border-cyan-500/30 p-6 rounded-lg transform transition-transform hover:scale-105 hover:shadow-[0_0_15px_rgba(6,182,212,0.3)]">
        <div className="flex flex-col items-center text-center">
          <div className="flex items-baseline">
            <motion.span
              className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8 }}
            >
              {isInView ? (
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  {Array.from({ length: numericValue + 1 }).map((_, i) => (
                    <motion.span
                      key={i}
                      initial={{ display: "none" }}
                      animate={{ display: i === numericValue ? "inline" : "none" }}
                      transition={{ 
                        delay: (i / numericValue) * 1.5,
                        duration: 0.1
                      }}
                    >
                      {i}
                    </motion.span>
                  ))}
                </motion.span>
              ) : (
                "0"
              )}
            </motion.span>
            <span className="text-2xl md:text-3xl font-bold text-cyan-400 ml-1">
              {suffix}
            </span>
          </div>
          <div className="mt-2 text-gray-300 font-medium">{label}</div>
        </div>
      </div>
    </motion.div>
  );
};

// Hexagonal grid background element
const HexGrid = () => {
  return (
    <div className="absolute inset-0 opacity-10">
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern
            id="hexagons"
            width="50"
            height="43.4"
            patternUnits="userSpaceOnUse"
            patternTransform="scale(2) rotate(0)"
          >
            <path
              d="M25 0L50 14.4v28.9L25 43.4L0 28.9V14.4z"
              fill="none"
              stroke="#06b6d4"
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hexagons)" />
      </svg>
    </div>
  );
};

export default function Stats() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section id="stats" className="relative py-24 bg-gray-900 overflow-hidden">
      {/* Hexagonal grid background */}
      <HexGrid />
      
      {/* Glowing accent elements */}
      <motion.div
        className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-600/20 rounded-full filter blur-[100px]"
        animate={{
          opacity: [0.2, 0.3, 0.2],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full filter blur-[100px]"
        animate={{
          opacity: [0.2, 0.3, 0.2],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 8, repeat: Infinity, delay: 4 }}
      />
      
      <div className="container mx-auto px-4" ref={containerRef}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left column: Text content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="mb-4"
            >
              <span className="text-cyan-400 font-mono tracking-widest text-sm">
                {statsSectionCopy.subtitle}
              </span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold mb-6 tracking-tight"
            >
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
                {statsSectionCopy.heading1}
              </span>
              <span className="block text-white mt-1">
                {statsSectionCopy.heading2}
              </span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-300 mb-8 max-w-lg"
            >
              {statsSectionCopy.description}
            </motion.p>
            
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 15px rgba(6, 182, 212, 0.3)",
              }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-3 bg-transparent border border-cyan-500 text-cyan-400 font-medium rounded-md relative overflow-hidden group"
            >
              <span className="relative z-10">{statsSectionCopy.buttonText}</span>
              <motion.span
                className="absolute inset-0 bg-cyan-500/10"
                initial={{ scale: 0, opacity: 0 }}
                whileHover={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.4 }}
                style={{ transformOrigin: "center" }}
              />
            </motion.button>
            
            {/* Stats grid for mobile */}
            <div className="grid grid-cols-2 gap-4 mt-12 lg:hidden">
              {statsSectionCopy.stats.map((stat, index) => (
                <Counter
                  key={index}
                  value={stat.value}
                  suffix={stat.suffix}
                  label={stat.label}
                />
              ))}
            </div>
          </div>
          
          {/* Right column: Image and stats */}
          <div className="relative">
            {/* Image with digital overlay effect */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative rounded-lg overflow-hidden mb-12"
            >
              <div className="relative aspect-video">
                <Image
                  src={statsSectionCopy.image}
                  alt={statsSectionCopy.imageAlt}
                  fill
                  className="object-cover"
                />
              </div>
              
              {/* Digital scan effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-b from-cyan-500/20 to-transparent"
                animate={{
                  top: ["0%", "100%", "0%"],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear",
                }}
                style={{ height: "10%" }}
              />
              
              {/* Digital noise overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-900/50 to-gray-900/20 backdrop-blur-[1px]" />
              
              {/* Grid overlay */}
              <div className="absolute inset-0 grid grid-cols-8 grid-rows-4 opacity-30">
                {[...Array(32)].map((_, i) => (
                  <div key={i} className="border border-cyan-500/20" />
                ))}
              </div>
              
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-cyan-400" />
              <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-cyan-400" />
              <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-cyan-400" />
              <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-cyan-400" />
            </motion.div>
            
            {/* Stats grid for desktop */}
            <div className="hidden lg:grid grid-cols-2 gap-4">
              {statsSectionCopy.stats.map((stat, index) => (
                <Counter
                  key={index}
                  value={stat.value}
                  suffix={stat.suffix}
                  label={stat.label}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
