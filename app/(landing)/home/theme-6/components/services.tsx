"use client";

import { servicesSectionCopy } from "../copy";
import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";

export default function Services() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
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
    >
      {/* Organic Shape Decorations */}
      <div className="absolute top-0 left-0 w-1/3 h-1/3 -translate-x-1/4 -translate-y-1/4">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-teal-200/50">
          <path fill="currentColor" d="M48.2,-73.5C63.9,-66.9,79.1,-57.3,87.3,-43.4C95.4,-29.5,96.5,-11.3,93.2,5.7C89.9,22.8,82.3,38.6,71.5,51.6C60.7,64.6,46.8,74.7,31.7,79.2C16.6,83.7,0.4,82.7,-16.2,79.6C-32.8,76.6,-49.9,71.5,-62.3,60.8C-74.8,50.1,-82.6,33.7,-85.9,16.2C-89.2,-1.3,-87.9,-20,-81.2,-36.2C-74.5,-52.4,-62.2,-66.1,-47.4,-73.1C-32.5,-80.1,-15.1,-80.5,0.6,-81.5C16.4,-82.5,32.5,-84.1,48.2,-73.5Z" transform="translate(100 100)" />
        </svg>
      </div>
      
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 translate-x-1/4 translate-y-1/4">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-emerald-200/50">
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
            {servicesSectionCopy.heading}
          </h2>
          <p className="text-gray-600 mb-8">
            {servicesSectionCopy.description}
          </p>
          <button className="px-8 py-3 bg-transparent border-2 border-teal-600 text-teal-600 rounded-full text-sm font-medium tracking-wider hover:bg-teal-50 transition-all duration-300">
            {servicesSectionCopy.buttonText}
          </button>
        </motion.div>
        
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesSectionCopy.services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              className="relative group"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-teal-200 to-emerald-200 rounded-2xl opacity-70 group-hover:opacity-100 blur transition duration-500 group-hover:duration-200"></div>
              <div className="relative h-full flex flex-col bg-white rounded-2xl overflow-hidden shadow-md transition-all duration-300 group-hover:shadow-xl">
                {/* Service Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-teal-900/60 to-transparent"></div>
                  
                  {/* Icon Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={hoveredIndex === index ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0.7 }}
                      transition={{ duration: 0.3 }}
                      className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center"
                    >
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="h-8 w-8 text-white" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={1.5} 
                          d={service.iconPath} 
                        />
                      </svg>
                    </motion.div>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm flex-grow">
                    {service.description}
                  </p>
                  
                  {/* Learn More Link */}
                  <div className="mt-4 pt-4 border-t border-teal-100">
                    <a 
                      href="#" 
                      className="inline-flex items-center text-teal-600 text-sm font-medium group-hover:text-teal-700 transition-colors"
                    >
                      Learn more
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="h-4 w-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
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
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-teal-300/40">
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
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-emerald-300/30">
            <path fill="currentColor" d="M48.2,-73.5C63.9,-66.9,79.1,-57.3,87.3,-43.4C95.4,-29.5,96.5,-11.3,93.2,5.7C89.9,22.8,82.3,38.6,71.5,51.6C60.7,64.6,46.8,74.7,31.7,79.2C16.6,83.7,0.4,82.7,-16.2,79.6C-32.8,76.6,-49.9,71.5,-62.3,60.8C-74.8,50.1,-82.6,33.7,-85.9,16.2C-89.2,-1.3,-87.9,-20,-81.2,-36.2C-74.5,-52.4,-62.2,-66.1,-47.4,-73.1C-32.5,-80.1,-15.1,-80.5,0.6,-81.5C16.4,-82.5,32.5,-84.1,48.2,-73.5Z" transform="translate(100 100)" />
          </svg>
        </motion.div>
      </div>
    </section>
  );
}
