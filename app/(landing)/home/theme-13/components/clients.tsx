"use client";

import { motion } from "framer-motion";
import { clientsSectionCopy } from "../copy";

export default function Clients() {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-900 to-slate-800">
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
            {clientsSectionCopy.heading}
          </h2>
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent mx-auto mb-8"></div>
          <p className="text-slate-300 text-xl font-light max-w-2xl mx-auto">
            {clientsSectionCopy.subheading}
          </p>
        </motion.div>

        {/* Clients grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 max-w-6xl mx-auto">
          {clientsSectionCopy.clients.map((client, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative p-6 bg-gradient-to-b from-slate-800 to-slate-900 border border-yellow-400/20 group-hover:border-yellow-400/40 transition-all duration-500 group-hover:-translate-y-1">
                
                {/* Art Deco corner accents */}
                <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-yellow-400 opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-yellow-400 opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-yellow-400 opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-yellow-400 opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Client logo placeholder */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="aspect-square flex items-center justify-center relative"
                >
                  {/* Art Deco background pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                      <pattern id={`client-pattern-${index}`} width="20" height="20" patternUnits="userSpaceOnUse">
                        <path d="M10 0L20 10L10 20L0 10Z" fill="#d4af37" opacity="0.3" />
                      </pattern>
                      <rect width="100%" height="100%" fill={`url(#client-pattern-${index})`} />
                    </svg>
                  </div>
                  
                  {/* Client initial/logo */}
                  <div className="relative z-10 text-center">
                    <div className="text-3xl font-thin text-yellow-400 opacity-80 mb-2">
                      {client.name.charAt(0)}
                    </div>
                    <div className="text-xs font-light text-slate-400 tracking-wider">
                      {client.name.split(' ').map(word => word.charAt(0)).join('')}
                    </div>
                  </div>
                </motion.div>

                {/* Client name */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                  viewport={{ once: true }}
                  className="mt-4 text-center"
                >
                  <p className="text-slate-300 font-light text-xs tracking-wide">
                    {client.name}
                  </p>
                </motion.div>

                {/* Decorative bottom line */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.4 }}
                  viewport={{ once: true }}
                  className="w-8 h-px bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto mt-3 origin-center"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Elegant testimonial quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-20 max-w-4xl mx-auto"
        >
          <div className="relative">
            {/* Quote marks */}
            <div className="absolute -top-8 -left-8 text-6xl text-yellow-400 opacity-30 font-serif">"</div>
            <div className="absolute -bottom-8 -right-8 text-6xl text-yellow-400 opacity-30 font-serif">"</div>
            
            <p className="text-2xl md:text-3xl font-light text-slate-300 leading-relaxed italic">
              "A partnership that transcends the ordinary, elevating our brand to heights we never imagined possible."
            </p>
            
            <div className="mt-8">
              <div className="w-24 h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent mx-auto mb-4"></div>
              <p className="text-yellow-400 font-light tracking-wide text-sm">
                — Collective Sentiment of Our Distinguished Clientele
              </p>
            </div>
          </div>
        </motion.div>

        {/* Bottom Art Deco ornament */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center mt-20"
        >
          <svg width="240" height="80" viewBox="0 0 240 80" className="text-yellow-400">
            <path d="M120 20 L150 40 L120 60 L90 40 Z" fill="currentColor" opacity="0.3" />
            <path d="M120 25 L135 40 L120 55 L105 40 Z" fill="currentColor" opacity="0.5" />
            <circle cx="120" cy="40" r="5" fill="currentColor" opacity="0.7" />
            <path d="M60 40 L85 40" stroke="currentColor" strokeWidth="2" opacity="0.4" />
            <path d="M155 40 L180 40" stroke="currentColor" strokeWidth="2" opacity="0.4" />
            <circle cx="60" cy="40" r="4" fill="currentColor" opacity="0.5" />
            <circle cx="180" cy="40" r="4" fill="currentColor" opacity="0.5" />
            <path d="M30 40 L45 40" stroke="currentColor" strokeWidth="3" opacity="0.6" />
            <path d="M195 40 L210 40" stroke="currentColor" strokeWidth="3" opacity="0.6" />
            <path d="M10 40 L20 40" stroke="currentColor" strokeWidth="4" opacity="0.8" />
            <path d="M220 40 L230 40" stroke="currentColor" strokeWidth="4" opacity="0.8" />
          </svg>
        </motion.div>

      </div>
    </section>
  );
} 