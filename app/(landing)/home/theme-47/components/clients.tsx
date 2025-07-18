'use client';

import { clientsSectionCopy } from '../copy';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Clients() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="py-16 px-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/10 via-black to-cyan-900/10"></div>
      
      {/* Animated Data Stream */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-px bg-gradient-to-b from-transparent via-cyan-400 to-transparent animate-pulse"
              style={{
                left: `${(i * 5) % 100}%`,
                height: '100%',
                animationDelay: `${i * 0.2}s`,
                animationDuration: '3s'
              }}
            />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl lg:text-3xl font-bold mb-4">
            <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent font-mono">
              TRUSTED BY CYBER CORPORATIONS
            </span>
          </h2>
          <div className="w-24 h-0.5 bg-gradient-to-r from-pink-500 to-cyan-400 mx-auto"></div>
        </motion.div>

        {/* Clients Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center"
        >
          {clientsSectionCopy.clients.map((client, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              whileHover={{ 
                scale: 1.1, 
                rotate: [0, -5, 5, 0],
                transition: { duration: 0.3 }
              }}
              className="group relative flex items-center justify-center"
            >
              {/* Client Logo Container */}
              <div className="relative w-24 h-24 flex items-center justify-center">
                {/* Glowing Background */}
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-cyan-400/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Logo Background */}
                <div className="relative w-20 h-20 bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm rounded-xl border border-gray-700/50 group-hover:border-cyan-400/50 transition-all duration-300 flex items-center justify-center shadow-lg group-hover:shadow-cyan-400/20">
                  {/* SVG Logo */}
                  <svg 
                    className="w-10 h-10 text-gray-400 group-hover:text-cyan-400 transition-colors duration-300" 
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    {client.svgPaths.map((path, pathIndex) => (
                      <path 
                        key={pathIndex} 
                        d={path} 
                        fillRule={client.fillRule as any}
                        clipRule={client.clipRule as any}
                      />
                    ))}
                  </svg>
                  
                  {/* Glowing Border */}
                  <div className="absolute inset-0 rounded-xl border border-transparent group-hover:border-pink-500/30 group-hover:shadow-[0_0_20px_rgba(255,20,147,0.3)] transition-all duration-300"></div>
                </div>
                
                {/* Floating Particles */}
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-cyan-400 rounded-full animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_0_10px_rgba(0,255,255,0.8)]"></div>
                <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-pink-500 rounded-full animate-bounce opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 shadow-[0_0_10px_rgba(255,20,147,0.8)]"></div>
                
                {/* Corner Accents */}
                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              {/* Client Name Tooltip */}
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-gradient-to-r from-pink-500 to-cyan-400 text-black text-xs font-bold py-1 px-3 rounded-lg whitespace-nowrap shadow-lg">
                  {client.name}
                </div>
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1 w-0 h-0 border-l-4 border-r-4 border-b-4 border-transparent border-b-pink-500"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Animated Separator */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-16 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent origin-center"
        ></motion.div>
        
        {/* Stats or Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-8"
        >
          <p className="text-gray-400 text-sm font-mono">
            <span className="text-cyan-400 font-bold">500+</span> SUCCESSFUL COLLABORATIONS IN THE DIGITAL REALM
          </p>
        </motion.div>
      </div>
    </section>
  );
}