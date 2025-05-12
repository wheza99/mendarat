"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function Services() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  
  // Services data
  const services = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="4" />
          <line x1="21.17" y1="8" x2="12" y2="8" />
          <line x1="3.95" y1="6.06" x2="8.54" y2="14" />
          <line x1="10.88" y1="21.94" x2="15.46" y2="14" />
        </svg>
      ),
      title: "Orbital Design",
      description: "Create harmonious digital experiences that revolve perfectly around your brand's core values and user needs."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ),
      title: "Stellar Development",
      description: "Build powerful, scalable applications with clean code that shines bright in the digital cosmos."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
          <path d="M12 3a9 9 0 0 0 0 18c4.97 0 9-3.58 9-8 0-1.8-1-3.46-2.67-4.5" />
          <path d="M12 3C7.03 3 3 6.58 3 11c0 1.8 1 3.46 2.67 4.5" />
          <circle cx="12" cy="11" r="3" />
        </svg>
      ),
      title: "Cosmic Branding",
      description: "Establish a unique presence in the digital universe with brand identities that capture attention and inspire awe."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
          <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
          <line x1="12" y1="22.08" x2="12" y2="12" />
        </svg>
      ),
      title: "Nebula Marketing",
      description: "Expand your reach across the digital galaxy with strategic marketing that attracts and engages your ideal audience."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
          <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
          <polyline points="14 2 14 8 20 8" />
          <circle cx="10" cy="13" r="2" />
          <path d="M10 15v3" />
          <path d="M14 13h.01" />
          <path d="M14 17h.01" />
          <path d="M6 13h.01" />
          <path d="M6 17h.01" />
        </svg>
      ),
      title: "Constellation Analysis",
      description: "Gain cosmic insights from your data with advanced analytics that illuminate patterns and guide strategic decisions."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      ),
      title: "Galactic Interfaces",
      description: "Create immersive user interfaces that transport users through seamless digital journeys across your platform."
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="relative py-20 bg-[#1F1147]"
    >
      {/* Decorative constellation */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <svg width="100%" height="100%" viewBox="0 0 1000 1000" preserveAspectRatio="none">
          <line x1="100" y1="200" x2="300" y2="400" stroke="#E5E4E2" strokeWidth="1" />
          <line x1="300" y1="400" x2="500" y2="200" stroke="#E5E4E2" strokeWidth="1" />
          <line x1="500" y1="200" x2="700" y2="500" stroke="#E5E4E2" strokeWidth="1" />
          <line x1="700" y1="500" x2="900" y2="300" stroke="#E5E4E2" strokeWidth="1" />
          <circle cx="100" cy="200" r="3" fill="#E5E4E2" />
          <circle cx="300" cy="400" r="3" fill="#E5E4E2" />
          <circle cx="500" cy="200" r="3" fill="#E5E4E2" />
          <circle cx="700" cy="500" r="3" fill="#E5E4E2" />
          <circle cx="900" cy="300" r="3" fill="#E5E4E2" />
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
          <h2 className="text-3xl md:text-4xl font-bold text-[#E5E4E2] mb-4">Celestial Services</h2>
          <p className="text-[#E5E4E2]/70 max-w-2xl mx-auto">
            Our specialized offerings span the digital universe, providing stellar solutions for every aspect of your online presence.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="group"
            >
              <div className="bg-[#2A1B3D]/50 backdrop-blur-sm border border-[#E5E4E2]/10 rounded-lg p-8 h-full relative overflow-hidden transition-all duration-500 hover:border-[#E5E4E2]/30">
                {/* Corner decorations */}
                <div className="absolute top-0 left-0 w-10 h-10 overflow-hidden">
                  <div className="absolute top-0 left-0 w-[1px] h-6 bg-gradient-to-b from-[#E5E4E2]/50 to-transparent"></div>
                  <div className="absolute top-0 left-0 h-[1px] w-6 bg-gradient-to-r from-[#E5E4E2]/50 to-transparent"></div>
                </div>
                <div className="absolute bottom-0 right-0 w-10 h-10 overflow-hidden">
                  <div className="absolute bottom-0 right-0 w-[1px] h-6 bg-gradient-to-t from-[#E5E4E2]/50 to-transparent"></div>
                  <div className="absolute bottom-0 right-0 h-[1px] w-6 bg-gradient-to-l from-[#E5E4E2]/50 to-transparent"></div>
                </div>
                
                {/* Orbital circle decoration */}
                <div className="absolute -right-20 -top-20 w-40 h-40 opacity-0 group-hover:opacity-10 transition-opacity duration-700">
                  <div className="absolute inset-0 rounded-full border border-[#E5E4E2]"></div>
                  <div className="absolute inset-[10px] rounded-full border border-[#E5E4E2]"></div>
                  <div className="absolute inset-[20px] rounded-full border border-[#E5E4E2]"></div>
                </div>
                
                <div className="text-[#9370DB] mb-5 relative">
                  {service.icon}
                </div>
                
                <h3 className="text-xl font-semibold text-[#E5E4E2] mb-3 relative">
                  {service.title}
                </h3>
                
                <div className="h-[1px] w-12 bg-gradient-to-r from-[#9370DB] to-transparent mb-4"></div>
                
                <p className="text-[#E5E4E2]/70 relative">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
