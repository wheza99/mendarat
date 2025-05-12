"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function Clients() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  
  // Clients data
  const clients = [
    { name: "Astral Inc.", logo: "/images/clients/client1.svg" },
    { name: "Nebula Systems", logo: "/images/clients/client2.svg" },
    { name: "Cosmic Enterprises", logo: "/images/clients/client3.svg" },
    { name: "Stellar Group", logo: "/images/clients/client4.svg" },
    { name: "Orbit Media", logo: "/images/clients/client5.svg" },
    { name: "Pulsar Tech", logo: "/images/clients/client6.svg" },
    { name: "Galaxy Innovations", logo: "/images/clients/client7.svg" },
    { name: "Nova Solutions", logo: "/images/clients/client8.svg" },
  ];

  return (
    <section 
      ref={sectionRef}
      className="relative py-20 bg-gradient-to-b from-[#1A0B2E] to-[#1F1147]"
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-0 bottom-0 w-[200px] h-[200px] opacity-5">
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
          <h2 className="text-3xl md:text-4xl font-bold text-[#E5E4E2] mb-4">Cosmic Collaborations</h2>
          <p className="text-[#E5E4E2]/70 max-w-2xl mx-auto">
            Trusted by stellar organizations across the digital universe.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {clients.map((client, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="group"
            >
              <div className="bg-[#2A1B3D]/30 backdrop-blur-sm border border-[#E5E4E2]/10 rounded-lg p-6 h-full flex items-center justify-center transition-all duration-500 hover:border-[#E5E4E2]/30 relative overflow-hidden">
                {/* Corner decorations */}
                <div className="absolute top-0 left-0 w-6 h-6 overflow-hidden">
                  <div className="absolute top-0 left-0 w-[1px] h-3 bg-gradient-to-b from-[#E5E4E2]/50 to-transparent"></div>
                  <div className="absolute top-0 left-0 h-[1px] w-3 bg-gradient-to-r from-[#E5E4E2]/50 to-transparent"></div>
                </div>
                <div className="absolute bottom-0 right-0 w-6 h-6 overflow-hidden">
                  <div className="absolute bottom-0 right-0 w-[1px] h-3 bg-gradient-to-t from-[#E5E4E2]/50 to-transparent"></div>
                  <div className="absolute bottom-0 right-0 h-[1px] w-3 bg-gradient-to-l from-[#E5E4E2]/50 to-transparent"></div>
                </div>
                
                {/* Constellation background */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500">
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
                
                {/* Placeholder for client logo */}
                <div className="relative h-12 w-full flex items-center justify-center">
                  <div className="text-[#E5E4E2] font-medium opacity-60 group-hover:opacity-100 transition-opacity duration-300 text-center">
                    {client.name}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Testimonial teaser */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-[#E5E4E2]/70 mb-4">
            Discover what our clients say about their cosmic journey with us
          </p>
          <button className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-transparent border border-[#E5E4E2]/30 text-[#E5E4E2] hover:bg-[#E5E4E2]/10 transition-all duration-300">
            <span>Read Testimonials</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
