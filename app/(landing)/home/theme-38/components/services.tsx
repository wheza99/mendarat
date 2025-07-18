"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { servicesSectionCopy } from "../copy";

export default function Services() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section 
      ref={sectionRef}
      className="relative py-20 bg-[#1F1147]"
    >
      {/* Quantum network background */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <svg width="100%" height="100%" viewBox="0 0 1000 1000" preserveAspectRatio="none">
          <defs>
            <radialGradient id="quantumGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.3"/>
              <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.1"/>
            </radialGradient>
          </defs>
          
          {/* Network nodes */}
          <circle cx="200" cy="200" r="50" fill="url(#quantumGlow)"/>
          <circle cx="500" cy="150" r="40" fill="url(#quantumGlow)"/>
          <circle cx="800" cy="250" r="45" fill="url(#quantumGlow)"/>
          <circle cx="300" cy="400" r="35" fill="url(#quantumGlow)"/>
          <circle cx="700" cy="450" r="55" fill="url(#quantumGlow)"/>
          
          {/* Connection lines */}
          <line x1="200" y1="200" x2="500" y2="150" stroke="#E5E4E2" strokeWidth="1" opacity="0.3"/>
          <line x1="500" y1="150" x2="800" y2="250" stroke="#E5E4E2" strokeWidth="1" opacity="0.3"/>
          <line x1="200" y1="200" x2="300" y2="400" stroke="#E5E4E2" strokeWidth="1" opacity="0.3"/>
          <line x1="300" y1="400" x2="700" y2="450" stroke="#E5E4E2" strokeWidth="1" opacity="0.3"/>
          <line x1="800" y1="250" x2="700" y2="450" stroke="#E5E4E2" strokeWidth="1" opacity="0.3"/>
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
          <h2 className="text-3xl md:text-4xl font-bold text-[#E5E4E2] mb-4">{servicesSectionCopy.heading}</h2>
          <p className="text-[#E5E4E2]/70 max-w-2xl mx-auto">
            {servicesSectionCopy.description}
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesSectionCopy.services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.1 * index }}
              className="group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105"
            >
              {/* Service image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                
                {/* Quantum overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 to-purple-600/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Service icon */}
                <div className="absolute top-4 left-4 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/30 transition-all duration-300">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={service.iconPath} />
                  </svg>
                </div>
              </div>
              
              {/* Service content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#E5E4E2] mb-3 group-hover:text-blue-400 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-[#E5E4E2]/70 leading-relaxed mb-4">
                  {service.description}
                </p>
                
                <Button 
                  variant="ghost" 
                  className="text-[#E5E4E2]/70 hover:text-[#E5E4E2] p-0 h-auto font-medium group-hover:text-blue-400 transition-colors duration-300"
                >
                  Learn More
                  <svg className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Button>
              </div>
              
              {/* Quantum particles effect */}
              <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute top-1/4 right-1/4 w-1 h-1 bg-blue-400 rounded-full animate-ping"></div>
                <div className="absolute bottom-1/4 left-1/4 w-1 h-1 bg-purple-400 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
                <div className="absolute top-3/4 right-1/2 w-0.5 h-0.5 bg-cyan-400 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
              </div>
              
              {/* Quantum glow border effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </motion.div>
          ))}
        </div>
        
        {/* View all button */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <Button 
            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105"
          >
            {servicesSectionCopy.buttonText}
          </Button>
        </motion.div>
      </div>
    </section>
  );
}