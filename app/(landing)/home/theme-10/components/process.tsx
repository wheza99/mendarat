"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function Process() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  
  // Process steps data
  const steps = [
    {
      number: "01",
      title: "Cosmic Discovery",
      description: "We explore your universe, understanding your brand's unique gravitational pull and the celestial bodies in your market."
    },
    {
      number: "02",
      title: "Stellar Planning",
      description: "Our team charts the optimal course through the digital cosmos, mapping out strategies and timelines."
    },
    {
      number: "03",
      title: "Nebula Creation",
      description: "We bring your vision to life, crafting digital experiences that shine with cosmic brilliance and purpose."
    },
    {
      number: "04",
      title: "Orbital Launch",
      description: "Your project enters the digital atmosphere with precision and impact, ready to attract your target audience."
    },
    {
      number: "05",
      title: "Celestial Growth",
      description: "We continue to nurture and expand your digital presence, ensuring sustainable growth across the universe."
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="relative py-20 bg-[#1F1147]"
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute right-0 top-0 w-[300px] h-[300px] opacity-5">
          <div className="absolute inset-0 rounded-full border border-[#E5E4E2]"></div>
          <div className="absolute inset-[30px] rounded-full border border-[#E5E4E2]"></div>
          <div className="absolute inset-[60px] rounded-full border border-[#E5E4E2]"></div>
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
          <h2 className="text-3xl md:text-4xl font-bold text-[#E5E4E2] mb-4">Our Cosmic Process</h2>
          <p className="text-[#E5E4E2]/70 max-w-2xl mx-auto">
            A journey through our stellar workflow that transforms ideas into digital realities.
          </p>
        </motion.div>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Connecting line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-[#9370DB]/50 via-[#E5E4E2]/30 to-transparent transform -translate-x-1/2 hidden md:block"></div>
          
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className={`relative mb-16 last:mb-0 md:flex ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Step number - centered on mobile, alternating sides on desktop */}
              <div className="absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0 md:flex md:items-center md:justify-center md:w-1/6">
                <div className="relative w-16 h-16 flex items-center justify-center bg-[#2A1B3D] rounded-full border border-[#E5E4E2]/20 z-10">
                  {/* Orbital ring decoration */}
                  <div className="absolute inset-[-8px] rounded-full border border-[#E5E4E2]/10 animate-spin-slow"></div>
                  <div className="absolute inset-[-16px] rounded-full border border-[#E5E4E2]/5 animate-spin-slow-reverse"></div>
                  
                  <span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#E5E4E2] to-[#9370DB]">
                    {step.number}
                  </span>
                </div>
              </div>
              
              {/* Content - full width on mobile, alternating sides on desktop */}
              <div className={`pt-20 md:pt-0 md:w-5/6 ${
                index % 2 === 0 ? "md:pl-8 md:pr-16" : "md:pr-8 md:pl-16"
              }`}>
                <div className="bg-[#2A1B3D]/50 backdrop-blur-sm border border-[#E5E4E2]/10 rounded-lg p-8 relative overflow-hidden">
                  {/* Corner decorations */}
                  <div className="absolute top-0 left-0 w-8 h-8 overflow-hidden">
                    <div className="absolute top-0 left-0 w-[1px] h-4 bg-gradient-to-b from-[#E5E4E2]/50 to-transparent"></div>
                    <div className="absolute top-0 left-0 h-[1px] w-4 bg-gradient-to-r from-[#E5E4E2]/50 to-transparent"></div>
                  </div>
                  <div className="absolute bottom-0 right-0 w-8 h-8 overflow-hidden">
                    <div className="absolute bottom-0 right-0 w-[1px] h-4 bg-gradient-to-t from-[#E5E4E2]/50 to-transparent"></div>
                    <div className="absolute bottom-0 right-0 h-[1px] w-4 bg-gradient-to-l from-[#E5E4E2]/50 to-transparent"></div>
                  </div>
                  
                  {/* Constellation background */}
                  <div className="absolute inset-0 opacity-5">
                    <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                      <line x1="20" y1="20" x2="80" y2="30" stroke="#E5E4E2" strokeWidth="0.5" />
                      <line x1="80" y1="30" x2="30" y2="70" stroke="#E5E4E2" strokeWidth="0.5" />
                      <line x1="30" y1="70" x2="70" y2="80" stroke="#E5E4E2" strokeWidth="0.5" />
                      <circle cx="20" cy="20" r="1" fill="#E5E4E2" />
                      <circle cx="80" cy="30" r="1" fill="#E5E4E2" />
                      <circle cx="30" cy="70" r="1" fill="#E5E4E2" />
                      <circle cx="70" cy="80" r="1" fill="#E5E4E2" />
                    </svg>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-[#E5E4E2] mb-3 relative">
                    {step.title}
                  </h3>
                  
                  <div className="h-[1px] w-12 bg-gradient-to-r from-[#9370DB] to-transparent mb-4"></div>
                  
                  <p className="text-[#E5E4E2]/70 relative">
                    {step.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* CTA */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <button className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#9370DB] to-[#7B68EE] hover:opacity-90 text-white transition-all duration-300">
            <span>Start Your Cosmic Journey</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
