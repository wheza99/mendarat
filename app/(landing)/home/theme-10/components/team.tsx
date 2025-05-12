"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function Team() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  
  // Team members data
  const teamMembers = [
    {
      name: "Stella Nova",
      role: "Creative Director",
      image: "/images/team/team1.jpg",
      bio: "Guiding our creative constellation with visionary leadership and cosmic inspiration.",
      social: {
        twitter: "#",
        linkedin: "#",
        dribbble: "#"
      }
    },
    {
      name: "Orion Parker",
      role: "Lead Developer",
      image: "/images/team/team2.jpg",
      bio: "Architecting stellar digital experiences with precision and technical brilliance.",
      social: {
        twitter: "#",
        linkedin: "#",
        github: "#"
      }
    },
    {
      name: "Luna Celestia",
      role: "UX Strategist",
      image: "/images/team/team3.jpg",
      bio: "Crafting intuitive user journeys that navigate seamlessly through digital space.",
      social: {
        twitter: "#",
        linkedin: "#",
        dribbble: "#"
      }
    },
    {
      name: "Cosmo Blackwell",
      role: "Project Manager",
      image: "/images/team/team4.jpg",
      bio: "Orchestrating project orbits with meticulous planning and flawless execution.",
      social: {
        twitter: "#",
        linkedin: "#"
      }
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="relative py-20 bg-[#1A0B2E]"
    >
      {/* Decorative constellation */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <svg width="100%" height="100%" viewBox="0 0 1000 1000" preserveAspectRatio="none">
          <line x1="200" y1="100" x2="400" y2="200" stroke="#E5E4E2" strokeWidth="1" />
          <line x1="400" y1="200" x2="600" y2="150" stroke="#E5E4E2" strokeWidth="1" />
          <line x1="600" y1="150" x2="800" y2="300" stroke="#E5E4E2" strokeWidth="1" />
          <circle cx="200" cy="100" r="3" fill="#E5E4E2" />
          <circle cx="400" cy="200" r="3" fill="#E5E4E2" />
          <circle cx="600" cy="150" r="3" fill="#E5E4E2" />
          <circle cx="800" cy="300" r="3" fill="#E5E4E2" />
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
          <h2 className="text-3xl md:text-4xl font-bold text-[#E5E4E2] mb-4">Stellar Team</h2>
          <p className="text-[#E5E4E2]/70 max-w-2xl mx-auto">
            Meet the cosmic minds behind our interstellar success, each bringing unique talents to our universe.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="group"
            >
              <div className="bg-[#2A1B3D]/50 backdrop-blur-sm border border-[#E5E4E2]/10 rounded-lg overflow-hidden h-full transition-all duration-500 hover:border-[#E5E4E2]/30">
                <div className="relative h-72 overflow-hidden">
                  {/* Placeholder for team member image */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#9370DB]/20 to-[#1A0B2E] flex items-center justify-center">
                    <div className="w-20 h-20 relative">
                      <div className="absolute inset-0 rounded-full border border-[#E5E4E2]/30"></div>
                      <div className="absolute inset-[5px] rounded-full border border-[#E5E4E2]/20"></div>
                      <div className="absolute inset-[10px] rounded-full bg-[#9370DB]/20"></div>
                    </div>
                  </div>
                  
                  {/* Orbital ring decoration */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-700">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px]">
                      <div className="absolute inset-0 rounded-full border border-[#E5E4E2] animate-spin-slow"></div>
                    </div>
                  </div>
                  
                  {/* Scan line effect */}
                  <div className="absolute inset-0 overflow-hidden opacity-20">
                    <div className="h-[1px] w-full bg-[#E5E4E2] animate-scan"></div>
                  </div>
                </div>
                
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-[#E5E4E2] mb-1 group-hover:text-[#9370DB] transition-colors duration-300">
                    {member.name}
                  </h3>
                  
                  <div className="text-[#E5E4E2]/50 text-sm mb-3">
                    {member.role}
                  </div>
                  
                  <div className="h-[1px] w-12 mx-auto bg-gradient-to-r from-[#9370DB] to-transparent mb-3"></div>
                  
                  <p className="text-[#E5E4E2]/70 text-sm mb-4">
                    {member.bio}
                  </p>
                  
                  <div className="flex justify-center gap-3">
                    {Object.entries(member.social).map(([platform, url], idx) => (
                      <a 
                        key={idx} 
                        href={url} 
                        className="w-8 h-8 flex items-center justify-center rounded-full border border-[#E5E4E2]/20 text-[#E5E4E2]/70 hover:text-[#9370DB] hover:border-[#9370DB] transition-colors duration-300"
                      >
                        {platform === "twitter" && (
                          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                          </svg>
                        )}
                        {platform === "linkedin" && (
                          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                            <rect x="2" y="9" width="4" height="12" />
                            <circle cx="4" cy="4" r="2" />
                          </svg>
                        )}
                        {platform === "dribbble" && (
                          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="10" />
                            <path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32" />
                          </svg>
                        )}
                        {platform === "github" && (
                          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                          </svg>
                        )}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Join team CTA */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16 max-w-2xl mx-auto"
        >
          <div className="bg-[#2A1B3D]/30 backdrop-blur-sm border border-[#E5E4E2]/10 rounded-lg p-8 relative overflow-hidden">
            {/* Corner decorations */}
            <div className="absolute top-0 left-0 w-10 h-10 overflow-hidden">
              <div className="absolute top-0 left-0 w-[1px] h-6 bg-gradient-to-b from-[#E5E4E2]/50 to-transparent"></div>
              <div className="absolute top-0 left-0 h-[1px] w-6 bg-gradient-to-r from-[#E5E4E2]/50 to-transparent"></div>
            </div>
            <div className="absolute bottom-0 right-0 w-10 h-10 overflow-hidden">
              <div className="absolute bottom-0 right-0 w-[1px] h-6 bg-gradient-to-t from-[#E5E4E2]/50 to-transparent"></div>
              <div className="absolute bottom-0 right-0 h-[1px] w-6 bg-gradient-to-l from-[#E5E4E2]/50 to-transparent"></div>
            </div>
            
            <h3 className="text-xl font-semibold text-[#E5E4E2] mb-3">Join Our Cosmic Team</h3>
            <p className="text-[#E5E4E2]/70 mb-6">
              We're always looking for bright stars to join our constellation. Explore our open positions and become part of our cosmic journey.
            </p>
            <button className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-transparent border border-[#E5E4E2]/30 text-[#E5E4E2] hover:bg-[#E5E4E2]/10 transition-all duration-300">
              <span>View Open Positions</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
