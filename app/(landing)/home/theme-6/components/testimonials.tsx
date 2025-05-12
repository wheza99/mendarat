"use client";

import { testimonialsSectionCopy } from "../copy";
import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";

export default function Testimonials() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
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

  // Auto-rotate testimonials
  useEffect(() => {
    if (!isVisible) return;
    
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => 
        prev === testimonialsSectionCopy.testimonials.length - 1 ? 0 : prev + 1
      );
    }, 5000);
    
    return () => clearInterval(interval);
  }, [isVisible]);

  return (
    <section 
      ref={sectionRef}
      className="relative py-20 bg-white overflow-hidden"
    >
      {/* Organic Shape Decorations */}
      <div className="absolute top-0 right-0 w-1/4 h-1/4 translate-x-1/3 -translate-y-1/3">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-teal-50">
          <path fill="currentColor" d="M45.7,-77.2C59.5,-69.2,71.3,-57.5,79.1,-43.3C86.9,-29.1,90.8,-12.4,89.8,4.1C88.7,20.6,82.8,36.9,72.3,49.3C61.9,61.7,47,70.2,31.5,75.5C16,80.9,-0.2,83.2,-15.6,79.9C-31.1,76.6,-45.9,67.7,-58.9,56C-71.9,44.3,-83.1,29.8,-87.3,13.3C-91.4,-3.2,-88.5,-21.7,-80.3,-37.2C-72.1,-52.8,-58.6,-65.3,-43.5,-72.6C-28.4,-79.9,-11.7,-81.9,2.5,-86C16.7,-90.1,31.9,-85.3,45.7,-77.2Z" transform="translate(100 100)" />
        </svg>
      </div>
      
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 -translate-x-1/3 translate-y-1/3">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-emerald-50">
          <path fill="currentColor" d="M48.2,-73.5C63.9,-66.9,79.1,-57.3,87.3,-43.4C95.4,-29.5,96.5,-11.3,93.2,5.7C89.9,22.8,82.3,38.6,71.5,51.6C60.7,64.6,46.8,74.7,31.7,79.2C16.6,83.7,0.4,82.7,-16.2,79.6C-32.8,76.6,-49.9,71.5,-62.3,60.8C-74.8,50.1,-82.6,33.7,-85.9,16.2C-89.2,-1.3,-87.9,-20,-81.2,-36.2C-74.5,-52.4,-62.2,-66.1,-47.4,-73.1C-32.5,-80.1,-15.1,-80.5,0.6,-81.5C16.4,-82.5,32.5,-84.1,48.2,-73.5Z" transform="translate(100 100)" />
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
            {testimonialsSectionCopy.heading}
          </h2>
          <p className="text-gray-600 mb-8">
            {testimonialsSectionCopy.description}
          </p>
        </motion.div>
        
        {/* Testimonials with Main Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Main Image with Organic Frame */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative order-2 lg:order-1"
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
                  src={testimonialsSectionCopy.mainImage}
                  alt={testimonialsSectionCopy.mainImageAlt}
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
              <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-teal-500/70">
                <path fill="currentColor" d="M45.7,-77.2C59.5,-69.2,71.3,-57.5,79.1,-43.3C86.9,-29.1,90.8,-12.4,89.8,4.1C88.7,20.6,82.8,36.9,72.3,49.3C61.9,61.7,47,70.2,31.5,75.5C16,80.9,-0.2,83.2,-15.6,79.9C-31.1,76.6,-45.9,67.7,-58.9,56C-71.9,44.3,-83.1,29.8,-87.3,13.3C-91.4,-3.2,-88.5,-21.7,-80.3,-37.2C-72.1,-52.8,-58.6,-65.3,-43.5,-72.6C-28.4,-79.9,-11.7,-81.9,2.5,-86C16.7,-90.1,31.9,-85.3,45.7,-77.2Z" transform="translate(100 100)" />
              </svg>
            </motion.div>
          </motion.div>
          
          {/* Right Column - Testimonials Carousel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="order-1 lg:order-2"
          >
            <div className="relative">
              {/* Large Quote Icon */}
              <div className="absolute -top-10 -left-10 text-teal-200">
                <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              
              {/* Testimonials */}
              <div className="relative bg-white rounded-2xl p-8 shadow-lg border border-teal-100">
                {testimonialsSectionCopy.testimonials.map((testimonial, index) => (
                  <motion.div
                    key={testimonial.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ 
                      opacity: activeTestimonial === index ? 1 : 0,
                      x: activeTestimonial === index ? 0 : 20,
                      position: activeTestimonial === index ? "relative" : "absolute",
                      zIndex: activeTestimonial === index ? 10 : -10,
                    }}
                    transition={{ duration: 0.5 }}
                    className="w-full"
                  >
                    <p className="text-gray-600 text-lg italic mb-6">
                      "{testimonial.quote}"
                    </p>
                    
                    <div className="flex items-center">
                      <div className="w-12 h-12 rounded-full overflow-hidden mr-4 relative">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="text-gray-900 font-semibold">{testimonial.name}</h4>
                        <p className="text-teal-600 text-sm">{testimonial.role}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              {/* Navigation Dots */}
              <div className="flex justify-center mt-8 space-x-2">
                {testimonialsSectionCopy.testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTestimonial(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      activeTestimonial === index 
                        ? "bg-teal-600 w-8" 
                        : "bg-teal-200"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Floating Leaf Element */}
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
          className="absolute bottom-1/4 right-0 w-24 h-24 z-0 hidden lg:block"
        >
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-emerald-200/40">
            <path fill="currentColor" d="M48.2,-73.5C63.9,-66.9,79.1,-57.3,87.3,-43.4C95.4,-29.5,96.5,-11.3,93.2,5.7C89.9,22.8,82.3,38.6,71.5,51.6C60.7,64.6,46.8,74.7,31.7,79.2C16.6,83.7,0.4,82.7,-16.2,79.6C-32.8,76.6,-49.9,71.5,-62.3,60.8C-74.8,50.1,-82.6,33.7,-85.9,16.2C-89.2,-1.3,-87.9,-20,-81.2,-36.2C-74.5,-52.4,-62.2,-66.1,-47.4,-73.1C-32.5,-80.1,-15.1,-80.5,0.6,-81.5C16.4,-82.5,32.5,-84.1,48.2,-73.5Z" transform="translate(100 100)" />
          </svg>
        </motion.div>
      </div>
    </section>
  );
}
