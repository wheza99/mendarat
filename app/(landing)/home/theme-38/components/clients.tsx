"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { clientsSectionCopy } from "../copy";

export default function Clients() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section 
      ref={sectionRef}
      className="relative py-20 bg-gradient-to-b from-[#1A0B2E] to-[#1F1147]"
    >
      {/* Quantum particles background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full opacity-60 animate-pulse"></div>
        <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-purple-400 rounded-full opacity-80 animate-ping"></div>
        <div className="absolute bottom-1/4 left-1/2 w-1.5 h-1.5 bg-cyan-400 rounded-full opacity-70 animate-pulse"></div>
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
          <h2 className="text-3xl md:text-4xl font-bold text-[#E5E4E2] mb-4">Research Partners</h2>
          <p className="text-[#E5E4E2]/70 max-w-2xl mx-auto">
            Collaborating with leading institutions and organizations in advancing AI and quantum computing research
          </p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center"
        >
          {clientsSectionCopy.clients.map((client, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="flex items-center justify-center p-6 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 group"
            >
              <svg 
                className="w-16 h-16 text-[#E5E4E2]/60 group-hover:text-[#E5E4E2] transition-colors duration-300" 
                fill="currentColor" 
                viewBox="0 0 24 24"
              >
                {client.svgPaths.map((path, pathIndex) => (
                  <path 
                    key={pathIndex} 
                    d={path} 
                    fillRule={client.fillRule as any}
                    clipRule={client.clipRule as any}
                  />
                ))}
              </svg>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}