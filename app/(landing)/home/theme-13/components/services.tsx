"use client";

import { motion } from "framer-motion";
import { servicesSectionCopy } from "../copy";

export default function Services() {
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
            {servicesSectionCopy.heading}
          </h2>
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent mx-auto mb-8"></div>
          <p className="text-slate-300 text-xl font-light max-w-2xl mx-auto">
            {servicesSectionCopy.subheading}
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {servicesSectionCopy.services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="relative h-full bg-gradient-to-b from-slate-800 to-slate-900 border border-yellow-400/20 p-8 transition-all duration-500 group-hover:border-yellow-400/40 group-hover:-translate-y-2 group-hover:shadow-2xl group-hover:shadow-yellow-400/10">
                
                {/* Corner decorative elements */}
                <div className="absolute top-0 left-0 w-6 h-6">
                  <svg viewBox="0 0 24 24" className="w-full h-full text-yellow-400 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                    <path d="M12 0 L24 12 L12 24 L0 12 Z" fill="currentColor" />
                  </svg>
                </div>
                <div className="absolute top-0 right-0 w-6 h-6">
                  <svg viewBox="0 0 24 24" className="w-full h-full text-yellow-400 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                    <path d="M12 0 L24 12 L12 24 L0 12 Z" fill="currentColor" />
                  </svg>
                </div>

                {/* Service icon */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-20 h-20 mx-auto mb-8 relative"
                >
                  <div className="w-full h-full bg-gradient-to-br from-yellow-400 to-yellow-600 transform rotate-45 flex items-center justify-center group-hover:from-yellow-300 group-hover:to-yellow-500 transition-all duration-300">
                    <div className="w-12 h-12 bg-slate-900 transform -rotate-45 flex items-center justify-center">
                      <span className="text-yellow-400 text-2xl font-thin">
                        {index === 0 ? "I" : index === 1 ? "II" : "III"}
                      </span>
                    </div>
                  </div>
                </motion.div>

                {/* Service title */}
                <h3 className="text-2xl font-light text-white mb-6 text-center tracking-wide">
                  {service.title}
                </h3>

                {/* Service description */}
                <p className="text-slate-300 font-light leading-relaxed mb-8 text-center">
                  {service.description}
                </p>

                {/* Features list */}
                <div className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <motion.div
                      key={featureIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.2 + featureIndex * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center"
                    >
                      <div className="w-2 h-2 bg-gradient-to-r from-yellow-400 to-yellow-600 transform rotate-45 mr-4 flex-shrink-0"></div>
                      <span className="text-slate-400 font-light text-sm">
                        {feature}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* Elegant bottom border */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 1, delay: index * 0.2 + 0.5 }}
                  viewport={{ once: true }}
                  className="w-full h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent mt-8 origin-center"
                />

                {/* Art Deco bottom ornament */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.7 }}
                  viewport={{ once: true }}
                  className="flex justify-center mt-6"
                >
                  <svg width="40" height="12" viewBox="0 0 40 12" className="text-yellow-400 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                    <path d="M20 2 L28 6 L20 10 L12 6 Z" fill="currentColor" />
                    <circle cx="20" cy="6" r="1" fill="currentColor" />
                    <path d="M5 6 L10 6" stroke="currentColor" strokeWidth="1" />
                    <path d="M30 6 L35 6" stroke="currentColor" strokeWidth="1" />
                  </svg>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom elegant ornament */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center mt-20"
        >
          <svg width="200" height="60" viewBox="0 0 200 60" className="text-yellow-400">
            <path d="M100 10 L120 30 L100 50 L80 30 Z" fill="currentColor" opacity="0.4" />
            <path d="M100 20 L110 30 L100 40 L90 30 Z" fill="currentColor" opacity="0.6" />
            <circle cx="100" cy="30" r="3" fill="currentColor" opacity="0.8" />
            <path d="M40 30 L75 30" stroke="currentColor" strokeWidth="1" opacity="0.4" />
            <path d="M125 30 L160 30" stroke="currentColor" strokeWidth="1" opacity="0.4" />
            <circle cx="40" cy="30" r="2" fill="currentColor" opacity="0.6" />
            <circle cx="160" cy="30" r="2" fill="currentColor" opacity="0.6" />
          </svg>
        </motion.div>

      </div>
    </section>
  );
} 