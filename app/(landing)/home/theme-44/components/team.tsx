'use client';

import { motion } from 'framer-motion';
import { teamSectionCopy } from '../copy';
import Image from 'next/image';
import { useState } from 'react';

export default function Team() {
  const [hoveredMember, setHoveredMember] = useState<number | null>(null);

  const socialIcons = {
    f: (
      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
    ),
    in: (
      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M4 2a2 2 0 11-4 0 2 2 0 014 0z" />
    ),
    ig: (
      <>
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </>
    ),
  };

  return (
    <section className="relative py-24 bg-gradient-to-b from-black to-slate-900 overflow-hidden">
      {/* Art Deco Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-gradient-to-t from-yellow-400/20 to-transparent"
              style={{
                width: '1px',
                height: '100%',
                left: `${8.33 * i}%`,
                transform: `rotate(${-20 + i * 3}deg)`,
                transformOrigin: 'center bottom',
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-5xl lg:text-6xl font-bold text-white leading-tight luxury-glow"
              >
                {teamSectionCopy.heading.split('\n').map((line, index) => (
                  <span key={index} className={`block ${index === 1 ? 'text-yellow-400' : ''}`}>
                    {line}
                  </span>
                ))}
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-gray-300 text-lg leading-relaxed max-w-xl"
              >
                {teamSectionCopy.description}
              </motion.p>
            </div>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-8 py-4 bg-transparent border-2 border-yellow-400 text-yellow-400 font-bold tracking-wider uppercase overflow-hidden transition-all duration-300 hover:text-black hover:shadow-2xl hover:shadow-yellow-400/25"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              <span className="relative z-10">{teamSectionCopy.buttonText}</span>
              
              {/* Art Deco corner decorations */}
              <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-yellow-400" />
              <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-yellow-400" />
              <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-yellow-400" />
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-yellow-400" />
            </motion.button>
          </motion.div>

          {/* Team Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {teamSectionCopy.teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                viewport={{ once: true }}
                onMouseEnter={() => setHoveredMember(index)}
                onMouseLeave={() => setHoveredMember(null)}
                className="group relative bg-gradient-to-b from-slate-800/30 to-slate-900/30 backdrop-blur-sm border border-yellow-400/20 overflow-hidden transition-all duration-500 hover:border-yellow-400/50 hover:shadow-2xl hover:shadow-yellow-400/10"
              >
                {/* Art Deco frame */}
                <div className="absolute inset-0 z-10 pointer-events-none">
                  <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-yellow-400/50" />
                  <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-yellow-400/50" />
                  <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-yellow-400/50" />
                  <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-yellow-400/50" />
                </div>
                
                {/* Image */}
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  
                  {/* Social Links Overlay */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ 
                      opacity: hoveredMember === index ? 1 : 0,
                      y: hoveredMember === index ? 0 : 20
                    }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 bg-black/60 flex items-center justify-center"
                  >
                    <div className="flex space-x-4">
                      {teamSectionCopy.socialLinks.map((social, socialIndex) => (
                        <motion.button
                          key={social}
                          initial={{ scale: 0, rotate: -180 }}
                          animate={{ 
                            scale: hoveredMember === index ? 1 : 0,
                            rotate: hoveredMember === index ? 0 : -180
                          }}
                          transition={{ 
                            duration: 0.3, 
                            delay: socialIndex * 0.1,
                            type: "spring",
                            stiffness: 200
                          }}
                          className="w-10 h-10 bg-yellow-400/20 backdrop-blur-sm border border-yellow-400/30 flex items-center justify-center hover:bg-yellow-400/30 hover:scale-110 transition-all duration-300"
                        >
                          <svg
                            className="w-5 h-5 text-yellow-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            {socialIcons[social as keyof typeof socialIcons]}
                          </svg>
                        </motion.button>
                      ))}
                    </div>
                  </motion.div>
                </div>
                
                {/* Content */}
                <div className="p-4 space-y-2">
                  <h3 className="text-lg font-bold text-white group-hover:text-yellow-400 transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-gray-400 text-sm uppercase tracking-wider">
                    {member.role}
                  </p>
                </div>
                
                {/* Golden shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-400/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}