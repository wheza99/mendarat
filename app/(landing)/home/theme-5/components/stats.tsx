"use client";

import { statsSectionCopy } from "../copy";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function Stats() {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
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
      className="py-24 bg-white relative overflow-hidden"
    >
      {/* Curved Background with Gradient */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-purple-50 to-white" />
        
        {/* Organic Shapes */}
        <div className="absolute top-0 right-0 w-1/3 h-1/3">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full opacity-10">
            <path fill="#C084FC" d="M42.8,-62.2C54.9,-54.3,63.6,-41.4,69.8,-27.2C76,-13,79.8,2.5,76.8,16.6C73.9,30.8,64.2,43.5,51.9,52.4C39.5,61.3,24.5,66.3,8.9,69.8C-6.7,73.3,-22.9,75.3,-35.6,69.5C-48.3,63.8,-57.5,50.3,-64.3,35.8C-71.1,21.3,-75.5,5.7,-73.2,-8.8C-70.9,-23.3,-61.9,-36.8,-50.1,-45.2C-38.3,-53.7,-23.7,-57.1,-8.9,-58.5C5.9,-59.9,30.7,-70.2,42.8,-62.2Z" transform="translate(100 100)" />
          </svg>
        </div>
        
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full opacity-10">
            <path fill="#C084FC" d="M47.7,-57.2C59.5,-47.3,65.8,-30.9,67.1,-15.1C68.3,0.7,64.5,15.8,56.8,28.3C49.2,40.9,37.6,50.8,24.4,56.2C11.2,61.5,-3.6,62.3,-18.8,59C-34,55.7,-49.5,48.3,-58.4,36C-67.3,23.7,-69.5,6.5,-66.2,-9.2C-62.9,-24.8,-54.1,-39,-42.1,-49C-30.1,-59,-15,-64.8,1,-66C17.1,-67.2,34.1,-62.8,47.7,-57.2Z" transform="translate(100 100)" />
          </svg>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div className="order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Subtitle with Line */}
              <div className="flex items-center space-x-4">
                <div className="w-12 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400"></div>
                <motion.p 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="text-purple-600 font-medium tracking-widest text-sm"
                >
                  {statsSectionCopy.subtitle}
                </motion.p>
              </div>

              {/* Heading with Gradient Text */}
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight"
              >
                <span className="block">{statsSectionCopy.heading1}</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">
                  {statsSectionCopy.heading2}
                </span>
              </motion.h2>

              {/* Description */}
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-lg text-gray-600 max-w-xl"
              >
                {statsSectionCopy.description}
              </motion.p>

              {/* Button with Gradient Border */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <button className="group relative px-8 py-4 overflow-hidden rounded-full">
                  {/* Gradient Border */}
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-purple-600 to-pink-500 opacity-70"></span>
                  
                  {/* Button Background */}
                  <span className="absolute inset-[2px] bg-white rounded-full"></span>
                  
                  {/* Button Text */}
                  <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500 font-medium">
                    {statsSectionCopy.buttonText}
                  </span>
                  
                  {/* Hover Effect - Gradient Fill */}
                  <span className="absolute inset-0 scale-0 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 transition-all duration-300 group-hover:scale-100"></span>
                  
                  {/* Hover Text Color Change */}
                  <span className="absolute inset-0 flex items-center justify-center opacity-0 text-white font-medium transition-opacity duration-300 group-hover:opacity-100">
                    {statsSectionCopy.buttonText}
                  </span>
                </button>
              </motion.div>
            </motion.div>

            {/* Stats in Horizontal Scrolling Container */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
              className="mt-16 relative"
            >
              {/* Horizontal Scrolling Container */}
              <div className="flex space-x-6 py-6 overflow-x-auto scrollbar-hide">
                {statsSectionCopy.stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
                    viewport={{ once: true }}
                    className="flex-shrink-0 w-48 h-48 rounded-2xl bg-white shadow-xl p-6 flex flex-col items-center justify-center transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl"
                    style={{
                      boxShadow: "0 0 20px rgba(192, 132, 252, 0.15)"
                    }}
                  >
                    {/* Stat Value with Animated Counter */}
                    <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500 flex items-baseline">
                      <motion.span
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                      >
                        {isInView ? (
                          <CountUp
                            start={0}
                            end={parseInt(stat.value.replace(/[^0-9]/g, ''))}
                            duration={2}
                          />
                        ) : (
                          "0"
                        )}
                      </motion.span>
                      <span className="ml-1">{stat.suffix}</span>
                    </div>
                    
                    {/* Stat Label */}
                    <p className="mt-2 text-gray-600 text-center">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
              
              {/* Fade Gradient on Edges */}
              <div className="absolute top-0 bottom-0 left-0 w-12 bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
              <div className="absolute top-0 bottom-0 right-0 w-12 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
            </motion.div>
          </div>

          {/* Right Column - Image with Layered Effect */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2 relative"
          >
            <div className="relative">
              {/* Main Image with Glassmorphism Frame */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                {/* Image */}
                <div className="relative h-[600px] w-full">
                  <Image
                    src={statsSectionCopy.image}
                    alt={statsSectionCopy.imageAlt}
                    fill
                    className="object-cover"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/30 to-transparent"></div>
                </div>
                
                {/* Glassmorphism Frame */}
                <div className="absolute inset-0 border border-white/20 rounded-2xl"></div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-6 -right-6 w-32 h-32 rounded-full bg-gradient-to-br from-purple-400/20 to-pink-400/20 backdrop-blur-sm"></div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 rounded-full bg-gradient-to-tr from-purple-400/20 to-pink-400/20 backdrop-blur-sm"></div>
              
              {/* Floating Info Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
                className="absolute bottom-8 -right-8 max-w-xs bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-xl"
              >
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-500"></div>
                  <h4 className="font-semibold text-gray-900">Design Philosophy</h4>
                </div>
                <p className="text-gray-700 text-sm">
                  We believe in creating spaces that not only captivate visually but also enhance the human experience through thoughtful design.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Simple CountUp Component
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
