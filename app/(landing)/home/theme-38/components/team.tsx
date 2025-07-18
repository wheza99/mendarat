"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { teamSectionCopy } from "../copy";

export default function Team() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section 
      ref={sectionRef}
      className="relative py-20 bg-[#1A0B2E]"
    >
      {/* Quantum constellation background */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <svg width="100%" height="100%" viewBox="0 0 1000 1000" preserveAspectRatio="none">
          {/* Constellation lines */}
          <line x1="200" y1="100" x2="400" y2="200" stroke="#E5E4E2" strokeWidth="1" />
          <line x1="400" y1="200" x2="600" y2="150" stroke="#E5E4E2" strokeWidth="1" />
          <line x1="600" y1="150" x2="800" y2="300" stroke="#E5E4E2" strokeWidth="1" />
          <line x1="200" y1="100" x2="300" y2="400" stroke="#E5E4E2" strokeWidth="1" />
          <line x1="300" y1="400" x2="600" y2="150" stroke="#E5E4E2" strokeWidth="1" />
          <line x1="800" y1="300" x2="700" y2="500" stroke="#E5E4E2" strokeWidth="1" />
          
          {/* Constellation stars */}
          <circle cx="200" cy="100" r="3" fill="#E5E4E2" />
          <circle cx="400" cy="200" r="3" fill="#E5E4E2" />
          <circle cx="600" cy="150" r="3" fill="#E5E4E2" />
          <circle cx="800" cy="300" r="3" fill="#E5E4E2" />
          <circle cx="300" cy="400" r="3" fill="#E5E4E2" />
          <circle cx="700" cy="500" r="3" fill="#E5E4E2" />
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
          <h2 className="text-3xl md:text-4xl font-bold text-[#E5E4E2] mb-4 whitespace-pre-line">
            {teamSectionCopy.heading}
          </h2>
          <p className="text-[#E5E4E2]/70 max-w-3xl mx-auto leading-relaxed">
            {teamSectionCopy.description}
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamSectionCopy.teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.1 * index }}
              className="group relative"
            >
              {/* Member card */}
              <div className="relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105">
                {/* Member image */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  
                  {/* Quantum overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 to-purple-600/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Social links overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex space-x-3">
                      {teamSectionCopy.socialLinks.map((social, socialIndex) => (
                        <button
                          key={socialIndex}
                          className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-all duration-300 hover:scale-110"
                        >
                          {social === 'f' && (
                            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                            </svg>
                          )}
                          {social === 'in' && (
                            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                            </svg>
                          )}
                          {social === 'ig' && (
                            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                            </svg>
                          )}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Member info */}
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-[#E5E4E2] mb-2 group-hover:text-blue-400 transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-[#E5E4E2]/60 text-sm font-medium">
                    {member.role}
                  </p>
                </div>
                
                {/* Quantum particles effect */}
                <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute top-4 right-4 w-1 h-1 bg-blue-400 rounded-full animate-ping"></div>
                  <div className="absolute bottom-4 left-4 w-1 h-1 bg-purple-400 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
                  <div className="absolute top-1/2 left-1/2 w-0.5 h-0.5 bg-cyan-400 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
                </div>
              </div>
              
              {/* Quantum glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none -z-10 blur-xl"></div>
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
            {teamSectionCopy.buttonText}
          </Button>
        </motion.div>
      </div>
    </section>
  );
}