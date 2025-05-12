"use client";

import { statsSectionCopy } from "../copy";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";

// CountUp Component with TypeScript
interface CountUpProps {
  start: number;
  end: number;
  duration: number;
}

function CountUp({ start, end, duration }: CountUpProps) {
  const [count, setCount] = useState(start);
  
  useEffect(() => {
    let startTime: number | undefined;
    let animationFrame: number | undefined;
    
    const updateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      setCount(Math.floor(progress * (end - start) + start));
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(updateCount);
      }
    };
    
    animationFrame = requestAnimationFrame(updateCount);
    
    return () => {
      if (animationFrame) cancelAnimationFrame(animationFrame);
    };
  }, [start, end, duration]);
  
  return count;
}

export default function Stats() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.3,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative py-20 bg-white overflow-hidden"
    >
      {/* Organic Shape Decorations */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-teal-100">
          <path fill="currentColor" d="M39.9,-65.7C54.3,-60.5,70.2,-54.3,79.7,-42.6C89.2,-31,92.3,-13.9,88.9,1.4C85.5,16.8,75.6,30.4,65.3,42.6C55,54.8,44.3,65.6,31.2,72.1C18.1,78.6,2.7,80.8,-12.8,78.8C-28.3,76.9,-43.9,70.8,-56.5,60.3C-69.1,49.9,-78.7,35.1,-83.4,18.6C-88.1,2.1,-87.9,-16.2,-80.9,-30.7C-73.9,-45.2,-60.1,-55.9,-45.6,-61.2C-31.1,-66.5,-15.5,-66.4,-1.4,-64.3C12.8,-62.3,25.5,-58.3,39.9,-65.7Z" transform="translate(100 100)" />
        </svg>
      </div>
      
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-emerald-50">
          <path fill="currentColor" d="M48.2,-73.5C63.9,-66.9,79.1,-57.3,87.3,-43.4C95.4,-29.5,96.5,-11.3,93.2,5.7C89.9,22.8,82.3,38.6,71.5,51.6C60.7,64.6,46.8,74.7,31.7,79.2C16.6,83.7,0.4,82.7,-16.2,79.6C-32.8,76.6,-49.9,71.5,-62.3,60.8C-74.8,50.1,-82.6,33.7,-85.9,16.2C-89.2,-1.3,-87.9,-20,-81.2,-36.2C-74.5,-52.4,-62.2,-66.1,-47.4,-73.1C-32.5,-80.1,-15.1,-80.5,0.6,-81.5C16.4,-82.5,32.5,-84.1,48.2,-73.5Z" transform="translate(100 100)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Image with Organic Frame */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden">
              {/* Organic Frame */}
              <div className="absolute inset-0 z-10 pointer-events-none">
                <svg viewBox="0 0 1000 1000" preserveAspectRatio="none" className="absolute inset-0 h-full w-full text-teal-500/20">
                  <path 
                    d="M0,0 L1000,0 L1000,1000 L0,1000 Z" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="20"
                    strokeDasharray="40 20"
                  />
                </svg>
              </div>
              
              {/* Image */}
              <div className="aspect-w-4 aspect-h-3 relative">
                <Image
                  src={statsSectionCopy.image}
                  alt={statsSectionCopy.imageAlt}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-teal-900/40 to-transparent"></div>
              </div>
            </div>
            
            {/* Floating Leaf Element */}
            <motion.div
              animate={{ 
                y: [0, -15, 0],
                rotate: [0, 5, 0],
              }}
              transition={{ 
                duration: 6, 
                repeat: Infinity, 
                repeatType: "reverse",
                ease: "easeInOut"
              }}
              className="absolute -bottom-10 -right-10 w-32 h-32 z-20"
            >
              <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-teal-500/90">
                <path fill="currentColor" d="M45.7,-77.2C59.5,-69.2,71.3,-57.5,79.1,-43.3C86.9,-29.1,90.8,-12.4,89.8,4.1C88.7,20.6,82.8,36.9,72.3,49.3C61.9,61.7,47,70.2,31.5,75.5C16,80.9,-0.2,83.2,-15.6,79.9C-31.1,76.6,-45.9,67.7,-58.9,56C-71.9,44.3,-83.1,29.8,-87.3,13.3C-91.4,-3.2,-88.5,-21.7,-80.3,-37.2C-72.1,-52.8,-58.6,-65.3,-43.5,-72.6C-28.4,-79.9,-11.7,-81.9,2.5,-86C16.7,-90.1,31.9,-85.3,45.7,-77.2Z" transform="translate(100 100)" />
              </svg>
            </motion.div>
          </motion.div>
          
          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="mb-8">
              <div className="h-1 w-20 bg-coral-400 rounded mb-6"></div>
              <h3 className="text-sm tracking-[0.3em] text-teal-600 mb-4">
                {statsSectionCopy.subtitle}
              </h3>
              <h2 className="text-3xl md:text-4xl font-bold mb-2 text-gray-900">
                {statsSectionCopy.heading1}
              </h2>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-teal-600">
                {statsSectionCopy.heading2}
              </h2>
              <p className="text-gray-600 mb-8 max-w-lg">
                {statsSectionCopy.description}
              </p>
              
              <button className="px-6 py-3 bg-transparent border-2 border-teal-600 text-teal-600 rounded-full text-sm font-medium tracking-wider hover:bg-teal-50 transition-all duration-300">
                {statsSectionCopy.buttonText}
              </button>
            </div>
            
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-8 mt-12">
              {statsSectionCopy.stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="relative"
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-teal-100 to-emerald-100 rounded-lg blur-sm"></div>
                  <div className="relative bg-white p-6 rounded-lg border border-teal-100 shadow-sm">
                    <div className="flex items-end mb-2">
                      <span className="text-4xl font-bold text-teal-700">
                        {isVisible ? <CountUp start={0} end={parseInt(stat.value)} duration={2} /> : 0}
                      </span>
                      <span className="text-2xl font-bold text-teal-700 ml-1">{stat.suffix}</span>
                    </div>
                    <p className="text-gray-600 text-sm">{stat.label}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
