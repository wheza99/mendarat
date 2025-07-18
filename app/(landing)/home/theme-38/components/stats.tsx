"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { statsSectionCopy } from "../copy";

export default function Stats() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [counters, setCounters] = useState(statsSectionCopy.stats.map(() => 0));

  // Animated counter effect
  useEffect(() => {
    if (isInView) {
      statsSectionCopy.stats.forEach((stat, index) => {
        const target = parseInt(stat.value);
        const duration = 2000; // 2 seconds
        const steps = 60;
        const increment = target / steps;
        let current = 0;
        
        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            current = target;
            clearInterval(timer);
          }
          
          setCounters(prev => {
            const newCounters = [...prev];
            newCounters[index] = Math.floor(current);
            return newCounters;
          });
        }, duration / steps);
      });
    }
  }, [isInView]);

  return (
    <section 
      ref={sectionRef}
      className="relative py-20 bg-gradient-to-b from-[#1A0B2E] to-[#1F1147]"
    >
      {/* Quantum field background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5">
          <svg width="100%" height="100%" viewBox="0 0 1000 1000" preserveAspectRatio="none">
            <defs>
              <pattern id="quantumDots" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <circle cx="50" cy="50" r="2" fill="#E5E4E2" opacity="0.3">
                  <animate attributeName="opacity" values="0.3;0.8;0.3" dur="3s" repeatCount="indefinite"/>
                </circle>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#quantumDots)"/>
          </svg>
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-6">
              <span className="text-blue-400 text-sm font-medium tracking-wider uppercase">
                {statsSectionCopy.subtitle}
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-[#E5E4E2] mb-6 leading-tight">
              {statsSectionCopy.heading1}
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                {statsSectionCopy.heading2}
              </span>
            </h2>
            
            <p className="text-[#E5E4E2]/70 text-lg leading-relaxed mb-8">
              {statsSectionCopy.description}
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 gap-8 mb-8">
              {statsSectionCopy.stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.3 + (index * 0.1) }}
                  className="text-center lg:text-left"
                >
                  <div className="text-3xl md:text-4xl font-bold text-[#E5E4E2] mb-2">
                    <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                      {counters[index]}
                    </span>
                    <span className="text-blue-400">{stat.suffix}</span>
                  </div>
                  <p className="text-[#E5E4E2]/60 text-sm font-medium">{stat.label}</p>
                </motion.div>
              ))}
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Button 
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105"
              >
                {statsSectionCopy.buttonText}
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Button>
            </motion.div>
          </motion.div>
          
          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden">
              <Image
                src={statsSectionCopy.image}
                alt={statsSectionCopy.imageAlt}
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
              
              {/* Quantum overlay effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-600/20"></div>
              
              {/* Floating quantum particles */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full opacity-80 animate-pulse"></div>
                <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-purple-400 rounded-full opacity-60 animate-ping"></div>
                <div className="absolute bottom-1/4 left-1/2 w-1.5 h-1.5 bg-cyan-400 rounded-full opacity-70 animate-bounce"></div>
                <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-pink-400 rounded-full opacity-50 animate-pulse" style={{ animationDelay: '1s' }}></div>
              </div>
            </div>
            
            {/* Decorative quantum rings */}
            <div className="absolute -top-4 -right-4 w-24 h-24 opacity-20">
              <div className="absolute inset-0 rounded-full border border-[#E5E4E2] animate-spin" style={{ animationDuration: '10s' }}></div>
              <div className="absolute inset-2 rounded-full border border-[#E5E4E2] animate-spin" style={{ animationDuration: '8s', animationDirection: 'reverse' }}></div>
              <div className="absolute inset-4 rounded-full border border-[#E5E4E2] animate-spin" style={{ animationDuration: '6s' }}></div>
            </div>
            
            <div className="absolute -bottom-4 -left-4 w-16 h-16 opacity-20">
              <div className="absolute inset-0 rounded-full border border-[#E5E4E2] animate-spin" style={{ animationDuration: '12s' }}></div>
              <div className="absolute inset-2 rounded-full border border-[#E5E4E2] animate-spin" style={{ animationDuration: '9s', animationDirection: 'reverse' }}></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}