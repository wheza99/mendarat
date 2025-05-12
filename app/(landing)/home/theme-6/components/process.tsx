"use client";

import { processSectionCopy } from "../copy";
import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";

export default function Process() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
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
        threshold: 0.2,
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
      className="relative py-20 bg-teal-50 overflow-hidden"
      id="process"
    >
      {/* Organic Shape Decorations */}
      <div className="absolute top-0 left-0 w-1/3 h-1/3 -translate-x-1/4 -translate-y-1/4">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-teal-100">
          <path fill="currentColor" d="M48.2,-73.5C63.9,-66.9,79.1,-57.3,87.3,-43.4C95.4,-29.5,96.5,-11.3,93.2,5.7C89.9,22.8,82.3,38.6,71.5,51.6C60.7,64.6,46.8,74.7,31.7,79.2C16.6,83.7,0.4,82.7,-16.2,79.6C-32.8,76.6,-49.9,71.5,-62.3,60.8C-74.8,50.1,-82.6,33.7,-85.9,16.2C-89.2,-1.3,-87.9,-20,-81.2,-36.2C-74.5,-52.4,-62.2,-66.1,-47.4,-73.1C-32.5,-80.1,-15.1,-80.5,0.6,-81.5C16.4,-82.5,32.5,-84.1,48.2,-73.5Z" transform="translate(100 100)" />
        </svg>
      </div>
      
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 translate-x-1/4 translate-y-1/4">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-emerald-100">
          <path fill="currentColor" d="M39.9,-65.7C54.3,-60.5,70.2,-54.3,79.7,-42.6C89.2,-31,92.3,-13.9,88.9,1.4C85.5,16.8,75.6,30.4,65.3,42.6C55,54.8,44.3,65.6,31.2,72.1C18.1,78.6,2.7,80.8,-12.8,78.8C-28.3,76.9,-43.9,70.8,-56.5,60.3C-69.1,49.9,-78.7,35.1,-83.4,18.6C-88.1,2.1,-87.9,-16.2,-80.9,-30.7C-73.9,-45.2,-60.1,-55.9,-45.6,-61.2C-31.1,-66.5,-15.5,-66.4,-1.4,-64.3C12.8,-62.3,25.5,-58.3,39.9,-65.7Z" transform="translate(100 100)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="h-1 w-20 bg-coral-400 rounded mx-auto mb-6"></div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            {processSectionCopy.heading}
          </h2>
          <p className="text-gray-600 mb-12">
            {processSectionCopy.description}
          </p>
        </motion.div>
        
        {/* Process Steps - Flowing Path Design */}
        <div className="relative">
          {/* Flowing Path Line */}
          <div className="absolute hidden lg:block top-1/2 left-0 w-full h-1 -translate-y-1/2">
            <svg 
              viewBox="0 0 1200 50" 
              className="w-full h-full text-teal-400/40"
              preserveAspectRatio="none"
            >
              <path 
                d="M0,25 C300,5 500,45 700,25 C900,5 1100,45 1200,25" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeDasharray="8 4"
              />
            </svg>
          </div>
          
          {/* Process Steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {processSectionCopy.steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="relative"
                onMouseEnter={() => setActiveStep(index)}
              >
                <div 
                  className={`relative p-6 rounded-2xl bg-white border transition-all duration-300 h-full flex flex-col ${
                    activeStep === index 
                      ? "border-teal-300 shadow-lg" 
                      : "border-teal-100 shadow-sm"
                  }`}
                >
                  {/* Step Number with Organic Shape Background */}
                  <div className="mb-6 relative">
                    <div className={`absolute inset-0 rounded-full ${
                      activeStep === index 
                        ? "bg-gradient-to-r from-teal-400 to-emerald-500" 
                        : "bg-gradient-to-r from-teal-200 to-emerald-300"
                    } transition-colors duration-300`}></div>
                    
                    <div className="relative w-16 h-16 flex items-center justify-center">
                      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 w-full h-full text-teal-500/20">
                        <path fill="currentColor" d="M45.7,-77.2C59.5,-69.2,71.3,-57.5,79.1,-43.3C86.9,-29.1,90.8,-12.4,89.8,4.1C88.7,20.6,82.8,36.9,72.3,49.3C61.9,61.7,47,70.2,31.5,75.5C16,80.9,-0.2,83.2,-15.6,79.9C-31.1,76.6,-45.9,67.7,-58.9,56C-71.9,44.3,-83.1,29.8,-87.3,13.3C-91.4,-3.2,-88.5,-21.7,-80.3,-37.2C-72.1,-52.8,-58.6,-65.3,-43.5,-72.6C-28.4,-79.9,-11.7,-81.9,2.5,-86C16.7,-90.1,31.9,-85.3,45.7,-77.2Z" transform="translate(100 100)" />
                      </svg>
                      <span className="text-white text-xl font-bold">{step.number}</span>
                    </div>
                  </div>
                  
                  {/* Step Title and Description */}
                  <div>
                    <h3 className="text-lg font-semibold mb-3 text-gray-900">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {step.description}
                    </p>
                  </div>
                  
                  {/* Decorative Element */}
                  <div className={`mt-auto pt-4 w-12 h-1 rounded ${
                    activeStep === index 
                      ? "bg-gradient-to-r from-teal-400 to-emerald-500" 
                      : "bg-gradient-to-r from-teal-200 to-emerald-300"
                  } transition-colors duration-300`}></div>
                </div>
                
                {/* Connector Dot for Desktop */}
                <div className="absolute hidden lg:block top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                  <div className={`w-4 h-4 rounded-full ${
                    activeStep === index 
                      ? "bg-teal-500" 
                      : "bg-teal-300"
                  } transition-colors duration-300`}></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Floating Leaf Elements */}
        <motion.div
          animate={{ 
            y: [0, -15, 0],
            rotate: [0, 5, 0],
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            repeatType: "reverse",
            ease: "easeInOut"
          }}
          className="absolute top-1/4 right-0 w-24 h-24 z-0 hidden lg:block"
        >
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-teal-300/30">
            <path fill="currentColor" d="M45.7,-77.2C59.5,-69.2,71.3,-57.5,79.1,-43.3C86.9,-29.1,90.8,-12.4,89.8,4.1C88.7,20.6,82.8,36.9,72.3,49.3C61.9,61.7,47,70.2,31.5,75.5C16,80.9,-0.2,83.2,-15.6,79.9C-31.1,76.6,-45.9,67.7,-58.9,56C-71.9,44.3,-83.1,29.8,-87.3,13.3C-91.4,-3.2,-88.5,-21.7,-80.3,-37.2C-72.1,-52.8,-58.6,-65.3,-43.5,-72.6C-28.4,-79.9,-11.7,-81.9,2.5,-86C16.7,-90.1,31.9,-85.3,45.7,-77.2Z" transform="translate(100 100)" />
          </svg>
        </motion.div>
        
        <motion.div
          animate={{ 
            y: [0, 15, 0],
            rotate: [0, -5, 0],
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity, 
            repeatType: "reverse",
            ease: "easeInOut"
          }}
          className="absolute bottom-1/4 left-0 w-32 h-32 z-0 hidden lg:block"
        >
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-emerald-300/20">
            <path fill="currentColor" d="M48.2,-73.5C63.9,-66.9,79.1,-57.3,87.3,-43.4C95.4,-29.5,96.5,-11.3,93.2,5.7C89.9,22.8,82.3,38.6,71.5,51.6C60.7,64.6,46.8,74.7,31.7,79.2C16.6,83.7,0.4,82.7,-16.2,79.6C-32.8,76.6,-49.9,71.5,-62.3,60.8C-74.8,50.1,-82.6,33.7,-85.9,16.2C-89.2,-1.3,-87.9,-20,-81.2,-36.2C-74.5,-52.4,-62.2,-66.1,-47.4,-73.1C-32.5,-80.1,-15.1,-80.5,0.6,-81.5C16.4,-82.5,32.5,-84.1,48.2,-73.5Z" transform="translate(100 100)" />
          </svg>
        </motion.div>
      </div>
    </section>
  );
}
