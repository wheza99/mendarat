"use client";

import { motion } from "framer-motion";
import { testimonialsSectionCopy } from "../copy";

export default function Testimonials() {
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
            {testimonialsSectionCopy.heading}
          </h2>
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent mx-auto mb-8"></div>
          <p className="text-slate-300 text-xl font-light max-w-2xl mx-auto">
            {testimonialsSectionCopy.subheading}
          </p>
        </motion.div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonialsSectionCopy.testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative h-full p-8 bg-gradient-to-b from-slate-800 to-slate-900 border border-yellow-400/20 group-hover:border-yellow-400/40 transition-all duration-500">
                
                {/* Art Deco corner decorations */}
                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-yellow-400 opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-yellow-400 opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-yellow-400 opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-yellow-400 opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Quote icon */}
                <motion.div
                  initial={{ scale: 0, rotate: 45 }}
                  whileInView={{ scale: 1, rotate: 45 }}
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                  viewport={{ once: true }}
                  className="w-16 h-16 mx-auto mb-8 relative"
                >
                  <div className="w-full h-full bg-gradient-to-br from-yellow-400 to-yellow-600 rotate-45 flex items-center justify-center group-hover:from-yellow-300 group-hover:to-yellow-500 transition-all duration-300">
                    <div className="w-10 h-10 bg-slate-900 rotate-45 flex items-center justify-center">
                      <span className="text-yellow-400 text-2xl font-serif transform -rotate-90">"</span>
                    </div>
                  </div>
                </motion.div>

                {/* Testimonial quote */}
                <motion.blockquote
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.2 + 0.4 }}
                  viewport={{ once: true }}
                  className="text-slate-300 font-light leading-relaxed text-lg italic mb-8 text-center"
                >
                  "{testimonial.quote}"
                </motion.blockquote>

                {/* Elegant divider */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.2 + 0.5 }}
                  viewport={{ once: true }}
                  className="w-20 h-px bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto mb-8"
                />

                {/* Author info */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 + 0.6 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  {/* Author photo placeholder */}
                  <div className="w-20 h-20 mx-auto mb-4 relative">
                    <div className="w-full h-full bg-gradient-to-br from-slate-700 to-slate-800 border-2 border-yellow-400/30 group-hover:border-yellow-400/60 transition-all duration-500 flex items-center justify-center">
                      <span className="text-2xl font-thin text-yellow-400 opacity-80">
                        {testimonial.author.charAt(0)}
                      </span>
                    </div>
                    
                    {/* Art Deco corner accents on photo */}
                    <div className="absolute -top-1 -left-1 w-4 h-4">
                      <svg viewBox="0 0 16 16" className="w-full h-full text-yellow-400 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                        <path d="M8 0 L16 8 L8 16 L0 8 Z" fill="currentColor" />
                      </svg>
                    </div>
                    <div className="absolute -top-1 -right-1 w-4 h-4">
                      <svg viewBox="0 0 16 16" className="w-full h-full text-yellow-400 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                        <path d="M8 0 L16 8 L8 16 L0 8 Z" fill="currentColor" />
                      </svg>
                    </div>
                  </div>

                  {/* Author name */}
                  <h4 className="text-xl font-light text-white mb-2 tracking-wide">
                    {testimonial.author}
                  </h4>

                  {/* Author position */}
                  <p className="text-yellow-400 font-light text-sm tracking-[0.1em] uppercase mb-1">
                    {testimonial.position}
                  </p>

                  {/* Company */}
                  <p className="text-slate-400 font-light text-sm">
                    {testimonial.company}
                  </p>
                </motion.div>

                {/* Art Deco bottom ornament */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.8 }}
                  viewport={{ once: true }}
                  className="flex justify-center mt-8"
                >
                  <svg width="80" height="24" viewBox="0 0 80 24" className="text-yellow-400 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                    <path d="M40 6 L50 12 L40 18 L30 12 Z" fill="currentColor" />
                    <circle cx="40" cy="12" r="2" fill="currentColor" />
                    <path d="M15 12 L25 12" stroke="currentColor" strokeWidth="1" />
                    <path d="M55 12 L65 12" stroke="currentColor" strokeWidth="1" />
                    <circle cx="15" cy="12" r="1" fill="currentColor" />
                    <circle cx="65" cy="12" r="1" fill="currentColor" />
                  </svg>
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
          <svg width="200" height="60" viewBox="0 0 200 60" className="text-yellow-400">
            <path d="M100 15 L120 30 L100 45 L80 30 Z" fill="currentColor" opacity="0.4" />
            <path d="M100 20 L110 30 L100 40 L90 30 Z" fill="currentColor" opacity="0.6" />
            <circle cx="100" cy="30" r="4" fill="currentColor" opacity="0.8" />
            <path d="M50 30 L75 30" stroke="currentColor" strokeWidth="2" opacity="0.4" />
            <path d="M125 30 L150 30" stroke="currentColor" strokeWidth="2" opacity="0.4" />
            <circle cx="50" cy="30" r="3" fill="currentColor" opacity="0.6" />
            <circle cx="150" cy="30" r="3" fill="currentColor" opacity="0.6" />
            <path d="M25 30 L40 30" stroke="currentColor" strokeWidth="3" opacity="0.8" />
            <path d="M160 30 L175 30" stroke="currentColor" strokeWidth="3" opacity="0.8" />
          </svg>
        </motion.div>

      </div>
    </section>
  );
} 