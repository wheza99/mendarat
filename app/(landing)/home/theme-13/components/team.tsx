"use client";

import { motion } from "framer-motion";
import { teamSectionCopy } from "../copy";

export default function Team() {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-800 to-slate-900">
      <div className="container mx-auto px-8">
        
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-thin text-white mb-6 tracking-tight">
            {teamSectionCopy.heading}
          </h2>
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent mx-auto mb-8"></div>
          <p className="text-slate-300 text-xl font-light max-w-2xl mx-auto">
            {teamSectionCopy.subheading}
          </p>
        </motion.div>

        {/* Team members */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {teamSectionCopy.teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              {/* Art Deco frame */}
              <div className="relative p-8 bg-gradient-to-b from-slate-800 to-slate-900 border border-yellow-400/20 group-hover:border-yellow-400/40 transition-all duration-500">
                
                {/* Corner decorations */}
                <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-yellow-400 opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-yellow-400 opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-yellow-400 opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-yellow-400 opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Member photo placeholder */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="w-48 h-48 mx-auto mb-8 relative"
                >
                  <div className="w-full h-full bg-gradient-to-br from-slate-700 to-slate-800 border-4 border-yellow-400/30 group-hover:border-yellow-400/60 transition-all duration-500 flex items-center justify-center">
                    <span className="text-6xl font-thin text-yellow-400 opacity-80">
                      {member.name.charAt(0)}
                    </span>
                  </div>
                  
                  {/* Art Deco corner accents on photo */}
                  <div className="absolute -top-2 -left-2 w-8 h-8">
                    <svg viewBox="0 0 32 32" className="w-full h-full text-yellow-400 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                      <path d="M16 0 L32 16 L16 32 L0 16 Z" fill="currentColor" />
                    </svg>
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8">
                    <svg viewBox="0 0 32 32" className="w-full h-full text-yellow-400 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                      <path d="M16 0 L32 16 L16 32 L0 16 Z" fill="currentColor" />
                    </svg>
                  </div>
                </motion.div>

                {/* Member name */}
                <motion.h3
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.2 + 0.3 }}
                  viewport={{ once: true }}
                  className="text-3xl font-thin text-white mb-2 tracking-wide"
                >
                  {member.name}
                </motion.h3>

                {/* Member role */}
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.2 + 0.4 }}
                  viewport={{ once: true }}
                  className="text-yellow-400 font-light text-sm tracking-[0.2em] uppercase mb-6"
                >
                  {member.role}
                </motion.p>

                {/* Elegant divider */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.2 + 0.5 }}
                  viewport={{ once: true }}
                  className="w-20 h-px bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto mb-6"
                />

                {/* Member description */}
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.2 + 0.6 }}
                  viewport={{ once: true }}
                  className="text-slate-300 font-light leading-relaxed text-sm mb-8"
                >
                  {member.description}
                </motion.p>

                {/* Social links */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 + 0.7 }}
                  viewport={{ once: true }}
                  className="flex justify-center space-x-4"
                >
                  {Object.entries(member.social).map(([platform, url]) => (
                    <motion.a
                      key={platform}
                      href={url}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 transform rotate-45 flex items-center justify-center text-slate-900 hover:from-yellow-300 hover:to-yellow-500 transition-all duration-300"
                    >
                      <span className="transform -rotate-45 text-xs font-medium uppercase">
                        {platform.charAt(0)}
                      </span>
                    </motion.a>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Art Deco ornament */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center mt-20"
        >
          <svg width="180" height="60" viewBox="0 0 180 60" className="text-yellow-400">
            <path d="M90 15 L110 30 L90 45 L70 30 Z" fill="currentColor" opacity="0.4" />
            <path d="M90 20 L100 30 L90 40 L80 30 Z" fill="currentColor" opacity="0.6" />
            <circle cx="90" cy="30" r="4" fill="currentColor" opacity="0.8" />
            <path d="M40 30 L65 30" stroke="currentColor" strokeWidth="2" opacity="0.4" />
            <path d="M115 30 L140 30" stroke="currentColor" strokeWidth="2" opacity="0.4" />
            <circle cx="40" cy="30" r="3" fill="currentColor" opacity="0.6" />
            <circle cx="140" cy="30" r="3" fill="currentColor" opacity="0.6" />
            <path d="M20 30 L30 30" stroke="currentColor" strokeWidth="3" opacity="0.8" />
            <path d="M150 30 L160 30" stroke="currentColor" strokeWidth="3" opacity="0.8" />
          </svg>
        </motion.div>

      </div>
    </section>
  );
} 