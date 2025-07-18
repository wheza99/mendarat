"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { processSectionCopy } from "../copy";

export default function Process() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section 
      ref={sectionRef}
      className="relative py-20 bg-[#1A0B2E]"
    >
      {/* Quantum connection lines */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <svg width="100%" height="100%" viewBox="0 0 1000 1000" preserveAspectRatio="none">
          <path d="M100,200 Q300,100 500,200 T900,200" 
                stroke="#E5E4E2" 
                strokeWidth="1" 
                fill="none" 
                strokeDasharray="5,5" />
          <path d="M100,400 Q300,300 500,400 T900,400" 
                stroke="#E5E4E2" 
                strokeWidth="1" 
                fill="none" 
                strokeDasharray="3,7" />
          <path d="M100,600 Q300,500 500,600 T900,600" 
                stroke="#E5E4E2" 
                strokeWidth="1" 
                fill="none" 
                strokeDasharray="7,3" />
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
          <h2 className="text-3xl md:text-4xl font-bold text-[#E5E4E2] mb-4">{processSectionCopy.heading}</h2>
          <p className="text-[#E5E4E2]/70 max-w-2xl mx-auto">
            {processSectionCopy.description}
          </p>
        </motion.div>
        
        <div className="max-w-4xl mx-auto">
          {processSectionCopy.steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              transition={{ duration: 0.8, delay: 0.1 * index }}
              className={`flex items-center mb-12 last:mb-0 ${
                index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
              }`}
            >
              {/* Step content */}
              <div className={`flex-1 ${
                index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'
              }`}>
                <h3 className="text-xl font-bold text-[#E5E4E2] mb-3">{step.title}</h3>
                <p className="text-[#E5E4E2]/70 leading-relaxed">{step.description}</p>
              </div>
              
              {/* Step number circle */}
              <div className="relative flex-shrink-0">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center relative z-10">
                  <span className="text-white font-bold text-lg">{step.number}</span>
                </div>
                
                {/* Quantum glow effect */}
                <div className="absolute inset-0 w-16 h-16 rounded-full bg-gradient-to-br from-blue-500/30 to-purple-600/30 animate-pulse"></div>
                
                {/* Connection line to next step */}
                {index < processSectionCopy.steps.length - 1 && (
                  <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-[2px] h-12 bg-gradient-to-b from-blue-500/50 to-transparent"></div>
                )}
              </div>
              
              {/* Empty space for alignment */}
              <div className="flex-1"></div>
            </motion.div>
          ))}
        </div>
        
        {/* Quantum particles animation */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full opacity-60 animate-bounce" style={{ animationDelay: '0s' }}></div>
          <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-purple-400 rounded-full opacity-80 animate-bounce" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-1/4 left-1/2 w-1.5 h-1.5 bg-cyan-400 rounded-full opacity-70 animate-bounce" style={{ animationDelay: '2s' }}></div>
        </div>
      </div>
    </section>
  );
}