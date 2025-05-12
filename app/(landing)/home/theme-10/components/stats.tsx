"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

export default function Stats() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  
  // Stats data
  const stats = [
    { value: 98, label: "Satisfaction Rate", suffix: "%" },
    { value: 250, label: "Projects Completed", suffix: "+" },
    { value: 15, label: "Years Experience", suffix: "" },
    { value: 30, label: "Team Members", suffix: "+" },
  ];

  return (
    <section 
      ref={sectionRef}
      className="relative py-20 bg-gradient-to-b from-[#1A0B2E] to-[#1F1147]"
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-0 top-0 w-[300px] h-[300px] opacity-5">
          <div className="absolute inset-0 rounded-full border border-[#E5E4E2]"></div>
          <div className="absolute inset-[30px] rounded-full border border-[#E5E4E2]"></div>
          <div className="absolute inset-[60px] rounded-full border border-[#E5E4E2]"></div>
        </div>
        <div className="absolute right-0 bottom-0 w-[200px] h-[200px] opacity-5">
          <div className="absolute inset-0 rounded-full border border-[#E5E4E2]"></div>
          <div className="absolute inset-[20px] rounded-full border border-[#E5E4E2]"></div>
        </div>
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
          <h2 className="text-3xl md:text-4xl font-bold text-[#E5E4E2] mb-4">Cosmic Achievements</h2>
          <p className="text-[#E5E4E2]/70 max-w-2xl mx-auto">
            Our stellar performance across the digital universe speaks volumes about our commitment to excellence.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="relative"
            >
              <div className="bg-[#2A1B3D]/50 backdrop-blur-sm border border-[#E5E4E2]/10 rounded-lg p-8 h-full">
                <div className="absolute -top-3 -left-3 w-6 h-6">
                  <div className="absolute inset-0 border-t border-l border-[#E5E4E2]/30 rounded-tl-lg"></div>
                </div>
                <div className="absolute -bottom-3 -right-3 w-6 h-6">
                  <div className="absolute inset-0 border-b border-r border-[#E5E4E2]/30 rounded-br-lg"></div>
                </div>
                
                <StatCounter 
                  value={stat.value} 
                  suffix={stat.suffix} 
                  isInView={isInView} 
                  delay={0.4 + index * 0.1} 
                />
                
                <div className="h-[1px] w-12 bg-gradient-to-r from-[#9370DB] to-[#E5E4E2]/30 my-3"></div>
                
                <h3 className="text-[#E5E4E2]/80 font-medium">
                  {stat.label}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

interface StatCounterProps {
  value: number;
  suffix: string;
  isInView: boolean;
  delay: number;
}

function StatCounter({ value, suffix, isInView, delay }: StatCounterProps) {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    if (!isInView) return;
    
    let start = 0;
    const end = value;
    const duration = 2000;
    const increment = end / (duration / 16);
    
    // Add a delay before starting the counter
    const timer = setTimeout(() => {
      const counter = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(counter);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      
      return () => clearInterval(counter);
    }, delay * 1000);
    
    return () => clearTimeout(timer);
  }, [isInView, value, delay]);
  
  return (
    <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#E5E4E2] to-[#9370DB]">
      {count}{suffix}
    </div>
  );
}
