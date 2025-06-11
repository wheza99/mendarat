"use client";

import { motion } from "framer-motion";
import { processSectionCopy } from "../copy";

export default function Process() {
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
            {processSectionCopy.heading}
          </h2>
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent mx-auto mb-8"></div>
          <p className="text-slate-300 text-xl font-light max-w-2xl mx-auto">
            {processSectionCopy.subheading}
          </p>
        </motion.div>

        {/* Process steps */}
        <div className="max-w-6xl mx-auto">
          {processSectionCopy.steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`flex flex-col lg:flex-row items-center gap-12 mb-20 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Step number and icon */}
              <div className="flex-shrink-0 relative">
                <motion.div
                  whileHover={{ scale: 1.05, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                  className="w-32 h-32 relative"
                >
                  {/* Art Deco frame */}
                  <div className="w-full h-full bg-gradient-to-br from-yellow-400 to-yellow-600 transform rotate-45 flex items-center justify-center group-hover:from-yellow-300 group-hover:to-yellow-500 transition-all duration-300">
                    <div className="w-24 h-24 bg-slate-900 transform -rotate-45 flex items-center justify-center border-2 border-yellow-400/30">
                      <span className="text-4xl font-thin text-yellow-400">
                        {step.number}
                      </span>
                    </div>
                  </div>
                  
                  {/* Corner decorations */}
                  <div className="absolute -top-2 -left-2 w-8 h-8">
                    <svg viewBox="0 0 32 32" className="w-full h-full text-yellow-400 opacity-60">
                      <path d="M16 0 L32 16 L16 32 L0 16 Z" fill="currentColor" />
                    </svg>
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8">
                    <svg viewBox="0 0 32 32" className="w-full h-full text-yellow-400 opacity-60">
                      <path d="M16 0 L32 16 L16 32 L0 16 Z" fill="currentColor" />
                    </svg>
                  </div>
                  <div className="absolute -bottom-2 -left-2 w-8 h-8">
                    <svg viewBox="0 0 32 32" className="w-full h-full text-yellow-400 opacity-60">
                      <path d="M16 0 L32 16 L16 32 L0 16 Z" fill="currentColor" />
                    </svg>
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-8 h-8">
                    <svg viewBox="0 0 32 32" className="w-full h-full text-yellow-400 opacity-60">
                      <path d="M16 0 L32 16 L16 32 L0 16 Z" fill="currentColor" />
                    </svg>
                  </div>
                </motion.div>

                {/* Connecting line (except for last step) */}
                {index < processSectionCopy.steps.length - 1 && (
                  <motion.div
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    transition={{ duration: 1, delay: index * 0.2 + 0.5 }}
                    viewport={{ once: true }}
                    className="absolute top-32 left-1/2 transform -translate-x-1/2 w-px h-20 bg-gradient-to-b from-yellow-400 to-transparent origin-top lg:hidden"
                  />
                )}
              </div>

              {/* Step content */}
              <div className="flex-1 text-center lg:text-left">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 + 0.3 }}
                  viewport={{ once: true }}
                  className="relative p-8 bg-gradient-to-b from-slate-800 to-slate-900 border border-yellow-400/20"
                >
                  {/* Art Deco corner accents */}
                  <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-yellow-400 opacity-60"></div>
                  <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-yellow-400 opacity-60"></div>
                  <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-yellow-400 opacity-60"></div>
                  <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-yellow-400 opacity-60"></div>

                  {/* Step title */}
                  <h3 className="text-3xl font-thin text-white mb-4 tracking-wide">
                    {step.title}
                  </h3>

                  {/* Elegant divider */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: index * 0.2 + 0.5 }}
                    viewport={{ once: true }}
                    className="w-20 h-px bg-gradient-to-r from-yellow-400 to-yellow-600 mb-6 mx-auto lg:mx-0"
                  />

                  {/* Step description */}
                  <p className="text-slate-300 font-light leading-relaxed text-lg">
                    {step.description}
                  </p>

                  {/* Art Deco bottom ornament */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.2 + 0.7 }}
                    viewport={{ once: true }}
                    className="flex justify-center lg:justify-start mt-6"
                  >
                    <svg width="60" height="20" viewBox="0 0 60 20" className="text-yellow-400 opacity-60">
                      <path d="M30 5 L40 10 L30 15 L20 10 Z" fill="currentColor" />
                      <circle cx="30" cy="10" r="2" fill="currentColor" />
                      <path d="M10 10 L18 10" stroke="currentColor" strokeWidth="1" />
                      <path d="M42 10 L50 10" stroke="currentColor" strokeWidth="1" />
                    </svg>
                  </motion.div>
                </motion.div>
              </div>

              {/* Horizontal connecting line for desktop */}
              {index < processSectionCopy.steps.length - 1 && (
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 1, delay: index * 0.2 + 0.8 }}
                  viewport={{ once: true }}
                  className="hidden lg:block absolute left-1/2 top-16 w-32 h-px bg-gradient-to-r from-yellow-400 to-transparent origin-left"
                  style={{
                    transform: index % 2 === 0 
                      ? 'translateX(8rem)' 
                      : 'translateX(-12rem) scaleX(-1)'
                  }}
                />
              )}
            </motion.div>
          ))}
        </div>

        {/* Bottom Art Deco ornament */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center mt-20"
        >
          <svg width="300" height="100" viewBox="0 0 300 100" className="text-yellow-400">
            <path d="M150 25 L180 50 L150 75 L120 50 Z" fill="currentColor" opacity="0.3" />
            <path d="M150 35 L165 50 L150 65 L135 50 Z" fill="currentColor" opacity="0.5" />
            <circle cx="150" cy="50" r="6" fill="currentColor" opacity="0.7" />
            <path d="M80 50 L115 50" stroke="currentColor" strokeWidth="3" opacity="0.4" />
            <path d="M185 50 L220 50" stroke="currentColor" strokeWidth="3" opacity="0.4" />
            <circle cx="80" cy="50" r="5" fill="currentColor" opacity="0.5" />
            <circle cx="220" cy="50" r="5" fill="currentColor" opacity="0.5" />
            <path d="M40 50 L65 50" stroke="currentColor" strokeWidth="4" opacity="0.6" />
            <path d="M235 50 L260 50" stroke="currentColor" strokeWidth="4" opacity="0.6" />
            <path d="M15 50 L30 50" stroke="currentColor" strokeWidth="5" opacity="0.8" />
            <path d="M270 50 L285 50" stroke="currentColor" strokeWidth="5" opacity="0.8" />
          </svg>
        </motion.div>

      </div>
    </section>
  );
} 