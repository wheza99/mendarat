'use client';

import { motion } from 'framer-motion';
import { pricingSectionCopy } from '../copy';
import { useState } from 'react';

export default function Pricing() {
  const [hoveredPackage, setHoveredPackage] = useState<number | null>(null);

  return (
    <section className="relative py-24 bg-gradient-to-b from-slate-900 to-black overflow-hidden">
      {/* Art Deco Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-gradient-to-t from-yellow-400/20 to-transparent"
              style={{
                width: '2px',
                height: '100%',
                left: `${8.33 * i}%`,
                transform: `rotate(${-15 + i * 2.5}deg)`,
                transformOrigin: 'center bottom',
              }}
            />
          ))}
        </div>
        
        {/* Floating geometric patterns */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute border border-yellow-400/10"
              style={{
                width: `${30 + Math.random() * 40}px`,
                height: `${30 + Math.random() * 40}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                transform: `rotate(${Math.random() * 360}deg)`,
                animation: `deco-float ${12 + Math.random() * 8}s linear infinite`,
                animationDelay: `${Math.random() * 4}s`
              }}
            >
              <div className="w-full h-full border border-yellow-400/5 transform rotate-45" />
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-5xl lg:text-6xl font-bold text-white mb-6 luxury-glow"
          >
            {pricingSectionCopy.heading}
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed"
          >
            {pricingSectionCopy.description}
          </motion.p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingSectionCopy.packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredPackage(index)}
              onMouseLeave={() => setHoveredPackage(null)}
              className={`group relative bg-gradient-to-b from-slate-800/30 to-slate-900/30 backdrop-blur-sm border transition-all duration-500 overflow-hidden ${
                pkg.popular
                  ? 'border-yellow-400/50 shadow-2xl shadow-yellow-400/20 scale-105'
                  : 'border-yellow-400/20 hover:border-yellow-400/50 hover:shadow-2xl hover:shadow-yellow-400/10'
              }`}
            >
              {/* Popular Badge */}
              {pkg.popular && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  viewport={{ once: true }}
                  className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20"
                >
                  <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-6 py-2 font-bold text-sm uppercase tracking-wider relative">
                    <span className="relative z-10">TERPOPULER</span>
                    {/* Art Deco corners */}
                    <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-black/20" />
                    <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-black/20" />
                    <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-black/20" />
                    <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-black/20" />
                  </div>
                </motion.div>
              )}
              
              {/* Art Deco frame */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-yellow-400/50" />
                <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-yellow-400/50" />
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-yellow-400/50" />
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-yellow-400/50" />
              </div>
              
              <div className="p-8 space-y-8 relative z-10">
                {/* Package Header */}
                <div className="text-center space-y-4">
                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                    viewport={{ once: true }}
                    className={`text-2xl font-bold uppercase tracking-wider ${
                      pkg.popular ? 'text-yellow-400' : 'text-white group-hover:text-yellow-400'
                    } transition-colors duration-300`}
                  >
                    {pkg.name}
                  </motion.h3>
                  
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="space-y-2"
                  >
                    <div className="flex items-baseline justify-center space-x-2">
                      <span className="text-4xl lg:text-5xl font-bold text-yellow-400 deco-pulse">
                        {pkg.price}
                      </span>
                      <span className="text-gray-400 text-lg">
                        {pkg.period}
                      </span>
                    </div>
                    
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {pkg.description}
                    </p>
                  </motion.div>
                </div>
                
                {/* Features List */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="space-y-4"
                >
                  {pkg.features.map((feature, featureIndex) => (
                    <motion.div
                      key={featureIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 1.2 + index * 0.1 + featureIndex * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center space-x-3"
                    >
                      <div className="w-5 h-5 bg-yellow-400/20 backdrop-blur-sm border border-yellow-400/30 flex items-center justify-center flex-shrink-0">
                        <svg
                          className="w-3 h-3 text-yellow-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-300">
                        {feature}
                      </span>
                    </motion.div>
                  ))}
                </motion.div>
                
                {/* CTA Button */}
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`group/btn relative w-full py-4 font-bold tracking-wider uppercase overflow-hidden transition-all duration-300 ${
                    pkg.popular
                      ? 'bg-gradient-to-r from-yellow-400 to-yellow-500 text-black hover:shadow-2xl hover:shadow-yellow-400/25'
                      : 'bg-transparent border-2 border-yellow-400 text-yellow-400 hover:text-black hover:shadow-2xl hover:shadow-yellow-400/25'
                  }`}
                >
                  {!pkg.popular && (
                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-500 transform scale-x-0 group-hover/btn:scale-x-100 transition-transform duration-300 origin-left" />
                  )}
                  <span className="relative z-10">
                    PILIH PAKET
                  </span>
                  
                  {/* Art Deco corner decorations */}
                  <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-current opacity-50" />
                  <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-current opacity-50" />
                  <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-current opacity-50" />
                  <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-current opacity-50" />
                </motion.button>
              </div>
              
              {/* Hover effect overlay */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: hoveredPackage === index ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-yellow-400 to-yellow-500 origin-left"
              />
              
              {/* Golden shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-400/5 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </motion.div>
          ))}
        </div>

        {/* Bottom decorative element */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="inline-flex items-center space-x-6">
            <div className="w-20 h-px bg-gradient-to-r from-transparent to-yellow-400/50" />
            <div className="w-4 h-4 border-2 border-yellow-400/50 transform rotate-45 deco-pulse" />
            <div className="w-20 h-px bg-gradient-to-l from-transparent to-yellow-400/50" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}