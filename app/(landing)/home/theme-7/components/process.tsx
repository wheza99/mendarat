"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { processSectionCopy } from "../copy";

export default function Process() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  // Digital flow background
  const DigitalFlow = () => {
    return (
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="digital-flow"
              width="100"
              height="100"
              patternUnits="userSpaceOnUse"
              patternTransform="scale(2)"
            >
              <path
                d="M0 50 L100 50"
                fill="none"
                stroke="#06b6d4"
                strokeWidth="0.5"
                strokeDasharray="5,5"
              />
              <path
                d="M50 0 L50 100"
                fill="none"
                stroke="#06b6d4"
                strokeWidth="0.5"
                strokeDasharray="5,5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#digital-flow)" />
        </svg>
      </div>
    );
  };

  return (
    <section id="process" className="relative py-24 bg-gray-900 overflow-hidden">
      {/* Background elements */}
      <DigitalFlow />
      
      {/* Glowing accent elements */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full filter blur-[100px]"
        animate={{
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full filter blur-[100px]"
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
              {processSectionCopy.heading}
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-gray-300 text-lg"
          >
            {processSectionCopy.description}
          </motion.p>
        </div>

        {/* Process timeline with futuristic data flow visualization */}
        <div className="relative max-w-4xl mx-auto">
          {/* Central connecting line */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
            className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-400 via-blue-500 to-purple-600"
            style={{ transformOrigin: "top" }}
          />
          
          {/* Data flow animation along the line */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 1 }}
            className="absolute left-1/2 top-0 bottom-0 w-px overflow-hidden"
          >
            <motion.div
              className="absolute left-0 w-full bg-cyan-400"
              style={{ height: "30%" }}
              animate={{
                top: ["-30%", "100%"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
                delay: 1,
              }}
            />
          </motion.div>

          {/* Process steps */}
          {processSectionCopy.steps.map((step, index) => {
            const isEven = index % 2 === 0;
            
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.2 }}
                className={`relative flex items-center mb-16 last:mb-0 ${
                  isEven ? "flex-row" : "flex-row-reverse"
                }`}
              >
                {/* Step content */}
                <div className={`w-1/2 ${isEven ? "pr-12 text-right" : "pl-12"}`}>
                  <div className="relative">
                    {/* Futuristic step card */}
                    <div className={`relative p-6 rounded-lg bg-gradient-to-br from-gray-800/80 to-gray-900/90 border border-cyan-500/30 transform perspective-1000 group hover:border-cyan-400/60 hover:shadow-[0_0_15px_rgba(6,182,212,0.2)] transition-all duration-300 ${
                      isEven ? "rounded-tr-none" : "rounded-tl-none"
                    }`}>
                      {/* Step number */}
                      <div className="mb-2">
                        <span className="inline-block text-xs font-mono tracking-widest text-cyan-400 bg-cyan-900/30 px-3 py-1 rounded-full border border-cyan-500/30">
                          {step.number}
                        </span>
                      </div>
                      
                      {/* Step title */}
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                        {step.title}
                      </h3>
                      
                      {/* Step description */}
                      <p className="text-gray-300 text-sm md:text-base">
                        {step.description}
                      </p>
                      
                      {/* Digital circuit accent in the background */}
                      <div className="absolute inset-0 opacity-10 pointer-events-none">
                        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d={isEven 
                              ? "M0 50 H100 M30 0 V100" 
                              : "M0 50 H100 M70 0 V100"
                            }
                            stroke="#06b6d4"
                            strokeWidth="0.5"
                            fill="none"
                            strokeDasharray="5,5"
                          />
                          <circle 
                            cx={isEven ? "30" : "70"} 
                            cy="50" 
                            r="3" 
                            fill="#06b6d4" 
                          />
                        </svg>
                      </div>
                      
                      {/* Corner accents */}
                      <div className={`absolute top-0 ${isEven ? "right-0" : "left-0"} w-8 h-8`}>
                        <div className={`absolute top-0 ${isEven ? "right-0" : "left-0"} w-full h-[2px] bg-cyan-400`} />
                        <div className={`absolute top-0 ${isEven ? "right-0" : "left-0"} w-[2px] h-full bg-cyan-400`} />
                      </div>
                      <div className={`absolute bottom-0 ${isEven ? "left-0" : "right-0"} w-8 h-8`}>
                        <div className={`absolute bottom-0 ${isEven ? "left-0" : "right-0"} w-full h-[2px] bg-cyan-400`} />
                        <div className={`absolute bottom-0 ${isEven ? "left-0" : "right-0"} w-[2px] h-full bg-cyan-400`} />
                      </div>
                    </div>
                    
                    {/* Connector to the timeline */}
                    <div className={`absolute top-1/2 ${
                      isEven ? "-right-12" : "-left-12"
                    } w-12 h-px bg-gradient-to-${isEven ? "r" : "l"} from-transparent to-cyan-400`} />
                  </div>
                </div>
                
                {/* Center node */}
                <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ 
                      duration: 0.5, 
                      delay: 0.3 + index * 0.2,
                      type: "spring",
                      stiffness: 300,
                    }}
                    className="relative flex items-center justify-center w-12 h-12 rounded-full bg-gray-800 border-2 border-cyan-400 group"
                  >
                    {/* Inner circle */}
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600" />
                    
                    {/* Pulse effect */}
                    <motion.div
                      className="absolute inset-0 rounded-full border-2 border-cyan-400"
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [1, 0, 1],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: index * 0.2,
                      }}
                    />
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
