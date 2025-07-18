'use client';

import { servicesSectionCopy } from '../copy';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/20 to-black"></div>
      
      {/* Animated Circuit Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 100 100">
          <defs>
            <pattern id="circuit" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M10,0 L10,10 L20,10" stroke="#00ffff" strokeWidth="0.5" fill="none" />
              <circle cx="10" cy="10" r="1" fill="#ff0080" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
              {servicesSectionCopy.heading}
            </span>
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto mb-8">
            {servicesSectionCopy.description}
          </p>
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(255, 0, 128, 0.5)' }}
            whileTap={{ scale: 0.95 }}
            className="border-2 border-pink-500 text-pink-500 font-bold py-3 px-8 rounded-lg hover:bg-pink-500 hover:text-black transition-all duration-300 shadow-lg shadow-pink-500/25"
          >
            {servicesSectionCopy.buttonText}
          </motion.button>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesSectionCopy.services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: 0.1 * index }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative"
            >
              {/* Card */}
              <div className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 hover:border-pink-500/50 transition-all duration-300 shadow-xl hover:shadow-pink-500/20">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  
                  {/* Icon */}
                  <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-r from-pink-500 to-cyan-400 rounded-lg flex items-center justify-center shadow-lg shadow-pink-500/30">
                    <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={service.iconPath} />
                    </svg>
                  </div>
                  
                  {/* Glowing Effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute inset-0 bg-gradient-to-t from-pink-500/20 to-cyan-400/20"></div>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-pink-500 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {service.description}
                  </p>
                  
                  {/* Hover Effect Line */}
                  <div className="mt-4 h-0.5 bg-gradient-to-r from-pink-500 to-cyan-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                </div>
                
                {/* Glowing Border */}
                <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-pink-500/30 group-hover:shadow-[0_0_30px_rgba(255,20,147,0.3)] transition-all duration-300"></div>
              </div>
              
              {/* Floating Particles */}
              <div className="absolute -top-2 -right-2 w-2 h-2 bg-cyan-400 rounded-full animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_0_10px_rgba(0,255,255,0.8)]"></div>
              <div className="absolute -bottom-2 -left-2 w-1.5 h-1.5 bg-pink-500 rounded-full animate-bounce opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 shadow-[0_0_10px_rgba(255,20,147,0.8)]"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}