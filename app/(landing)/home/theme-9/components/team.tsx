import React from 'react';
import { teamSectionCopy } from '../copy';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Team() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  // Define the type for social media platforms
  type SocialPlatform = 'github' | 'linkedin' | 'twitter';
  
  // Social media icons
  const socialIcons: Record<SocialPlatform, React.ReactNode> = {
    github: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
      </svg>
    ),
    linkedin: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    ),
    twitter: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085a4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
      </svg>
    )
  };

  return (
    <section id="team" className="relative py-20 bg-[#0F3A22] text-white">
      {/* Biomechanical pattern background */}
      <div className="absolute inset-0 z-0 opacity-5">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <pattern id="vine-circuit" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
            <path d="M0,100 Q50,50 100,100 T200,100" fill="none" stroke="#B87333" strokeWidth="1" />
            <path d="M0,50 Q50,0 100,50 T200,50" fill="none" stroke="#B87333" strokeWidth="1" />
            <path d="M0,150 Q50,100 100,150 T200,150" fill="none" stroke="#B87333" strokeWidth="1" />
            <path d="M100,0 Q150,50 100,100 T100,200" fill="none" stroke="#B87333" strokeWidth="1" />
            <path d="M50,0 Q100,50 50,100 T50,200" fill="none" stroke="#B87333" strokeWidth="1" />
            <path d="M150,0 Q200,50 150,100 T150,200" fill="none" stroke="#B87333" strokeWidth="1" />
            <circle cx="0" cy="50" r="3" fill="#DAA520" opacity="0.5" />
            <circle cx="0" cy="100" r="3" fill="#DAA520" opacity="0.5" />
            <circle cx="0" cy="150" r="3" fill="#DAA520" opacity="0.5" />
            <circle cx="50" cy="0" r="3" fill="#DAA520" opacity="0.5" />
            <circle cx="100" cy="0" r="3" fill="#DAA520" opacity="0.5" />
            <circle cx="150" cy="0" r="3" fill="#DAA520" opacity="0.5" />
            <circle cx="50" cy="200" r="3" fill="#DAA520" opacity="0.5" />
            <circle cx="100" cy="200" r="3" fill="#DAA520" opacity="0.5" />
            <circle cx="150" cy="200" r="3" fill="#DAA520" opacity="0.5" />
            <circle cx="200" cy="50" r="3" fill="#DAA520" opacity="0.5" />
            <circle cx="200" cy="100" r="3" fill="#DAA520" opacity="0.5" />
            <circle cx="200" cy="150" r="3" fill="#DAA520" opacity="0.5" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#vine-circuit)" />
        </svg>
      </div>

      <div className="relative z-10 px-4 mx-auto max-w-7xl">
        {/* Section header */}
        <motion.div 
          className="max-w-3xl mx-auto mb-16 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.div className="flex items-center justify-center mb-4" variants={itemVariants}>
            <div className="w-12 h-px bg-[#B87333]"></div>
            <div className="w-3 h-3 mx-2 border-2 border-[#B87333] rounded-full"></div>
            <div className="w-12 h-px bg-[#B87333]"></div>
          </motion.div>
          
          <motion.h2 
            className="mb-6 text-4xl font-bold text-[#B87333]"
            variants={itemVariants}
          >
            {teamSectionCopy.heading}
          </motion.h2>
          
          <motion.p 
            className="text-gray-300"
            variants={itemVariants}
          >
            {teamSectionCopy.description}
          </motion.p>
        </motion.div>
        
        {/* Team members grid */}
        <motion.div 
          className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
        >
          {teamSectionCopy.teamMembers.map((member, index) => (
            <motion.div 
              key={index}
              className="relative group"
              variants={itemVariants}
            >
              {/* Member image with mechanical frame */}
              <div className="relative overflow-hidden rounded-lg aspect-w-3 aspect-h-4">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="object-cover w-full h-full transition-transform duration-700 transform group-hover:scale-110"
                />
                
                {/* Overlay with mechanical pattern */}
                <div className="absolute inset-0 transition-opacity duration-500 bg-gradient-to-t from-[#0A2E1A] via-[#0A2E1A]/70 to-transparent opacity-60 group-hover:opacity-80"></div>
                
                {/* Mechanical scan line effect */}
                <div className="absolute inset-0 z-10 overflow-hidden opacity-0 group-hover:opacity-20">
                  <div className="absolute top-0 left-0 w-full h-full">
                    {[...Array(30)].map((_, i) => (
                      <div 
                        key={i} 
                        className="w-full h-px bg-[#DAA520]" 
                        style={{ marginTop: `${i * 10}px` }}
                      ></div>
                    ))}
                  </div>
                </div>
                
                {/* Mechanical frame corners */}
                <div className="absolute top-0 left-0 w-6 h-6">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0,0 L24,0 L24,6 L6,6 L6,24 L0,24 Z" fill="#B87333" opacity="0.8" />
                  </svg>
                </div>
                <div className="absolute top-0 right-0 w-6 h-6">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24,0 L0,0 L0,6 L18,6 L18,24 L24,24 Z" fill="#B87333" opacity="0.8" />
                  </svg>
                </div>
                <div className="absolute bottom-0 left-0 w-6 h-6">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0,24 L24,24 L24,18 L6,18 L6,0 L0,0 Z" fill="#B87333" opacity="0.8" />
                  </svg>
                </div>
                <div className="absolute bottom-0 right-0 w-6 h-6">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24,24 L0,24 L0,18 L18,18 L18,0 L24,0 Z" fill="#B87333" opacity="0.8" />
                  </svg>
                </div>
                
                {/* Social links */}
                <div className="absolute inset-x-0 bottom-0 z-20 flex justify-center p-4 transition-all duration-300 transform translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                  <div className="flex space-x-3">
                    {teamSectionCopy.socialLinks.map((platform, i) => (
                      <Link href="#" key={i}>
                        <button className="flex items-center justify-center w-8 h-8 transition-colors duration-300 border rounded-full border-[#B87333] text-[#B87333] hover:bg-[#B87333] hover:text-white">
                          {platform in socialIcons 
                            ? socialIcons[platform as SocialPlatform] 
                            : <span className="text-xs">{platform}</span>}
                        </button>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Member info */}
              <div className="relative z-20 p-4 -mt-10 ml-4 bg-[#0A2E1A] border border-[#B87333]/30 rounded-lg">
                {/* Gear decoration */}
                <div className="absolute -top-6 -right-6 w-12 h-12 opacity-10">
                  <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24,10 L26,10 L28,16 L32,17 L36,12 L38,14 L34,19 L36,22 L42,20 L43,23 L37,25 L37,29 L43,31 L42,34 L36,32 L34,35 L38,40 L36,42 L32,37 L28,38 L26,44 L24,44 L22,38 L18,37 L14,42 L12,40 L16,35 L14,32 L8,34 L7,31 L13,29 L13,25 L7,23 L8,20 L14,22 L16,19 L12,14 L14,12 L18,17 L22,16 L24,10 Z" fill="#B87333"/>
                    <circle cx="24" cy="27" r="5" fill="#0A2E1A" stroke="#B87333" strokeWidth="1"/>
                  </svg>
                </div>
                
                <h3 className="text-lg font-bold text-[#DAA520]">{member.name}</h3>
                <p className="mb-3 text-sm text-gray-400">{member.role}</p>
                <p className="text-sm italic text-gray-300">"{member.quote}"</p>
                
                {/* Corner brackets */}
                <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-[#B87333]"></div>
                <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-[#B87333]"></div>
                <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-[#B87333]"></div>
                <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-[#B87333]"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Button */}
        <motion.div 
          className="flex justify-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Link href="#contact">
            <button className="relative px-8 py-3 overflow-hidden text-[#B87333] transition-all duration-300 border-2 rounded-md group border-[#B87333] hover:text-white">
              <span className="relative z-10">{teamSectionCopy.buttonText}</span>
              <span className="absolute inset-0 z-0 w-0 h-full transition-all duration-300 bg-[#B87333] group-hover:w-full"></span>
              
              {/* Mechanical corner accents */}
              <div className="absolute top-0 left-0 w-2 h-2">
                <svg viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0,0 L8,0 L8,2 L2,2 L2,8 L0,8 Z" fill="#DAA520" />
                </svg>
              </div>
              <div className="absolute top-0 right-0 w-2 h-2">
                <svg viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8,0 L0,0 L0,2 L6,2 L6,8 L8,8 Z" fill="#DAA520" />
                </svg>
              </div>
              <div className="absolute bottom-0 left-0 w-2 h-2">
                <svg viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0,8 L8,8 L8,6 L2,6 L2,0 L0,0 Z" fill="#DAA520" />
                </svg>
              </div>
              <div className="absolute bottom-0 right-0 w-2 h-2">
                <svg viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8,8 L0,8 L0,6 L6,6 L6,0 L8,0 Z" fill="#DAA520" />
                </svg>
              </div>
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
