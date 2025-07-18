'use client';

import { statsSectionCopy } from '../copy';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Stats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-pink-900/20 to-cyan-900/20"></div>
      
      {/* Animated Grid */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="w-full h-full animate-pulse"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 255, 255, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 0, 255, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="text-cyan-400 text-sm font-mono tracking-wider">
              {statsSectionCopy.subtitle}
            </div>
            
            <div className="space-y-2">
              <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                {statsSectionCopy.heading1}
              </h2>
              <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-pink-500 to-cyan-400 bg-clip-text text-transparent leading-tight">
                {statsSectionCopy.heading2}
              </h2>
            </div>
            
            <p className="text-gray-300 text-lg leading-relaxed">
              {statsSectionCopy.description}
            </p>
            
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0, 255, 255, 0.5)' }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-pink-500 to-cyan-400 text-black font-bold py-3 px-8 rounded-lg hover:from-pink-400 hover:to-cyan-300 transition-all duration-300 shadow-lg shadow-pink-500/25"
            >
              {statsSectionCopy.buttonText}
            </motion.button>
            
            {/* Stats */}
            <div className="flex gap-8 pt-8">
              {statsSectionCopy.stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-pink-500 to-cyan-400 bg-clip-text text-transparent">
                    {stat.value}{stat.suffix}
                  </div>
                  <div className="text-gray-400 text-sm mt-1 font-mono">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl shadow-2xl shadow-pink-500/20">
              <img
                src={statsSectionCopy.image}
                alt={statsSectionCopy.imageAlt}
                className="w-full h-[500px] object-cover"
              />
              
              {/* Neon Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 via-transparent to-cyan-900/40"></div>
              
              {/* Glowing Border */}
              <div className="absolute inset-0 rounded-2xl border-2 border-cyan-400/30 shadow-[0_0_30px_rgba(0,255,255,0.3)]"></div>
              
              {/* Floating Elements */}
              <div className="absolute top-4 right-4 w-3 h-3 bg-pink-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(255,20,147,0.8)]"></div>
              <div className="absolute bottom-6 left-6 w-2 h-2 bg-cyan-400 rounded-full animate-bounce shadow-[0_0_10px_rgba(0,255,255,0.8)]"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}