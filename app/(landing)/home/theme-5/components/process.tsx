"use client";

import { processSectionCopy } from "../copy";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Process() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.4, 1, 1, 0.4]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);

  return (
    <section ref={containerRef} className="py-24 relative overflow-hidden">
      {/* Background with Gradient and Organic Shapes */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-purple-50 to-white"></div>
        
        {/* Curved Wave Shapes */}
        <div className="absolute top-0 left-0 right-0 text-purple-100 opacity-40">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            className="w-full h-auto"
            preserveAspectRatio="none"
          >
            <path
              fill="currentColor"
              fillOpacity="1"
              d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,250.7C960,235,1056,181,1152,165.3C1248,149,1344,171,1392,181.3L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
            ></path>
          </svg>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 text-pink-100 opacity-40">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            className="w-full h-auto"
            preserveAspectRatio="none"
          >
            <path
              fill="currentColor"
              fillOpacity="1"
              d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,90.7C672,85,768,107,864,144C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
      </div>

      <motion.div 
        style={{ opacity, scale }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="inline-block mb-4"
          >
            <div className="h-0.5 w-12 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto"></div>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">
              {processSectionCopy.heading}
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-lg text-gray-600"
          >
            {processSectionCopy.description}
          </motion.p>
        </div>

        {/* Process Steps - Organic Flowing Layout */}
        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-300 via-pink-300 to-purple-300 hidden md:block"></div>
          
          {processSectionCopy.steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`relative mb-20 md:mb-32 ${
                index % 2 === 0 ? "md:text-right" : "md:text-left"
              }`}
            >
              <div className={`flex flex-col md:flex-row items-center ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}>
                {/* Step Number and Icon Container */}
                <div className="relative mb-8 md:mb-0 md:mx-8">
                  {/* Curved Glassmorphism Container */}
                  <div className="relative w-24 h-24 rounded-full bg-white/30 backdrop-blur-sm shadow-xl flex items-center justify-center z-10">
                    {/* Gradient Border */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 opacity-30"></div>
                    
                    {/* Step Number */}
                    <span className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">
                      {step.number}
                    </span>
                  </div>
                  
                  {/* Connecting Dot for Timeline */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 hidden md:block"></div>
                  
                  {/* Decorative Elements */}
                  <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-purple-200/50 hidden md:block"></div>
                  <div className="absolute -bottom-2 -left-2 w-6 h-6 rounded-full bg-pink-200/50 hidden md:block"></div>
                </div>
                
                {/* Step Content */}
                <div className={`md:w-1/2 ${
                  index % 2 === 0 ? "md:pr-32" : "md:pl-32"
                }`}>
                  {/* Curved Glassmorphism Card */}
                  <div className="relative p-8 rounded-3xl bg-white/40 backdrop-blur-sm shadow-xl overflow-hidden group hover:bg-white/60 transition-all duration-500">
                    {/* Gradient Border Bottom */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-400 to-pink-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                    
                    {/* Step Title */}
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
                    
                    {/* Step Description */}
                    <p className="text-gray-600">{step.description}</p>
                    
                    {/* Decorative Corner */}
                    <div className="absolute top-0 right-0 w-16 h-16 rounded-bl-3xl bg-gradient-to-bl from-purple-100/30 to-pink-100/30 transform translate-x-8 -translate-y-8 group-hover:translate-x-4 group-hover:-translate-y-4 transition-transform duration-500"></div>
                  </div>
                </div>
              </div>
              
              {/* Decorative Floating Elements - Only on Alternating Steps */}
              {index % 2 === 0 && (
                <div className="absolute -top-8 left-1/4 w-12 h-12 rounded-full bg-gradient-to-br from-purple-400/10 to-pink-400/10 blur-xl hidden md:block"></div>
              )}
              
              {index % 2 !== 0 && (
                <div className="absolute -bottom-8 right-1/4 w-12 h-12 rounded-full bg-gradient-to-tl from-purple-400/10 to-pink-400/10 blur-xl hidden md:block"></div>
              )}
            </motion.div>
          ))}
        </div>
        
        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="inline-block relative">
            <button className="group relative inline-flex items-center px-8 py-4 overflow-hidden rounded-full">
              {/* Gradient Border */}
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-purple-600 to-pink-500 opacity-70"></span>
              
              {/* Button Background */}
              <span className="absolute inset-[2px] bg-white rounded-full"></span>
              
              {/* Button Text */}
              <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500 font-medium flex items-center">
                <span>LEARN MORE ABOUT OUR PROCESS</span>
                <svg className="ml-2 w-5 h-5 text-pink-500 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
              
              {/* Hover Effect - Gradient Fill */}
              <span className="absolute inset-0 scale-0 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 transition-all duration-300 group-hover:scale-100"></span>
              
              {/* Hover Text Color Change */}
              <span className="absolute inset-0 flex items-center justify-center opacity-0 text-white font-medium transition-opacity duration-300 group-hover:opacity-100">
                <span>LEARN MORE ABOUT OUR PROCESS</span>
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </button>
            
            {/* Decorative Elements */}
            <div className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-gradient-to-r from-purple-400 to-pink-400"></div>
            <div className="absolute -bottom-2 -left-2 w-4 h-4 rounded-full bg-gradient-to-r from-purple-400 to-pink-400"></div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
