'use client';

import { pricingSectionCopy } from '../copy';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Pricing() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-indigo-900/20 to-black"></div>
      
      {/* Animated Pricing Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="w-full h-full animate-pulse"
          style={{
            backgroundImage: `
              linear-gradient(45deg, rgba(0, 255, 255, 0.3) 1px, transparent 1px),
              linear-gradient(-45deg, rgba(255, 0, 255, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '20px 20px'
          }}
        />
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
              {pricingSectionCopy.heading}
            </span>
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            {pricingSectionCopy.description}
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {pricingSectionCopy.plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: 0.1 * index }}
              whileHover={{ y: -10, scale: 1.02 }}
              className={`group relative ${
                plan.recommended ? 'md:-mt-4 md:mb-4' : ''
              }`}
            >
              {/* Recommended Badge */}
              {plan.recommended && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                  <div className="bg-gradient-to-r from-pink-500 to-cyan-400 text-black font-bold py-2 px-6 rounded-full text-sm shadow-lg shadow-pink-500/30">
                    MOST POPULAR
                  </div>
                </div>
              )}
              
              {/* Card */}
              <div className={`relative bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm rounded-3xl p-8 border transition-all duration-300 shadow-xl ${
                plan.recommended 
                  ? 'border-cyan-400/50 shadow-cyan-400/20 hover:shadow-cyan-400/30' 
                  : 'border-gray-700/50 hover:border-pink-500/50 hover:shadow-pink-500/20'
              }`}>
                {/* Plan Header */}
                <div className="text-center mb-8">
                  <h3 className={`text-2xl font-bold mb-2 ${
                    plan.recommended 
                      ? 'bg-gradient-to-r from-pink-500 to-cyan-400 bg-clip-text text-transparent'
                      : 'text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-pink-500 group-hover:to-cyan-400 group-hover:bg-clip-text'
                  } transition-all duration-300`}>
                    {plan.name}
                  </h3>
                  
                  {/* Price */}
                  <div className="mb-4">
                    <span className={`text-4xl font-bold ${
                      plan.recommended 
                        ? 'text-cyan-400'
                        : 'text-white group-hover:text-pink-500'
                    } transition-colors duration-300`}>
                      {plan.price}
                    </span>
                  </div>
                  
                  <p className="text-gray-400 text-sm">
                    {plan.description}
                  </p>
                </div>
                
                {/* Features List */}
                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <motion.div
                      key={featureIndex}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ duration: 0.5, delay: 0.1 * index + 0.05 * featureIndex }}
                      className="flex items-center gap-3"
                    >
                      {/* Check Icon */}
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                        plan.recommended 
                          ? 'bg-gradient-to-r from-pink-500 to-cyan-400'
                          : 'bg-gradient-to-r from-gray-600 to-gray-700 group-hover:from-pink-500 group-hover:to-cyan-400'
                      } transition-all duration-300 shadow-lg`}>
                        <svg className="w-3 h-3 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      
                      <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                        {feature}
                      </span>
                    </motion.div>
                  ))}
                </div>
                
                {/* CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full py-4 rounded-xl font-bold transition-all duration-300 ${
                    plan.recommended
                      ? 'bg-gradient-to-r from-pink-500 to-cyan-400 text-black shadow-lg shadow-pink-500/30 hover:shadow-cyan-400/40'
                      : 'border-2 border-gray-600 text-gray-300 hover:border-pink-500 hover:bg-pink-500 hover:text-black hover:shadow-lg hover:shadow-pink-500/30'
                  }`}
                >
                  {pricingSectionCopy.selectPlanButtonText}
                </motion.button>
                
                {/* Glowing Border Effect */}
                <div className={`absolute inset-0 rounded-3xl border border-transparent transition-all duration-300 ${
                  plan.recommended 
                    ? 'group-hover:border-cyan-400/30 group-hover:shadow-[0_0_40px_rgba(0,255,255,0.3)]'
                    : 'group-hover:border-pink-500/30 group-hover:shadow-[0_0_40px_rgba(255,20,147,0.3)]'
                }`}></div>
                
                {/* Corner Accents */}
                <div className={`absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                  plan.recommended ? 'border-cyan-400' : 'border-pink-500'
                }`}></div>
                <div className={`absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                  plan.recommended ? 'border-pink-500' : 'border-cyan-400'
                }`}></div>
                
                {/* Floating Particles */}
                <div className={`absolute -top-2 -right-2 w-3 h-3 rounded-full animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                  plan.recommended 
                    ? 'bg-cyan-400 shadow-[0_0_15px_rgba(0,255,255,0.8)]'
                    : 'bg-pink-500 shadow-[0_0_15px_rgba(255,20,147,0.8)]'
                }`}></div>
                <div className={`absolute -bottom-2 -left-2 w-2 h-2 rounded-full animate-bounce opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 ${
                  plan.recommended 
                    ? 'bg-pink-500 shadow-[0_0_15px_rgba(255,20,147,0.8)]'
                    : 'bg-cyan-400 shadow-[0_0_15px_rgba(0,255,255,0.8)]'
                }`}></div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Custom Plan Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <div className="bg-gradient-to-br from-gray-900/60 to-black/60 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-white mb-4">
              {pricingSectionCopy.customPlanText}
            </h3>
            
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0, 255, 255, 0.5)' }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-cyan-400 text-cyan-400 font-bold py-3 px-8 rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 shadow-lg shadow-cyan-400/25"
            >
              {pricingSectionCopy.contactLink}
            </motion.button>
            
            {/* Decorative Elements */}
            <div className="absolute top-4 left-4 w-2 h-2 bg-pink-500 rounded-full animate-pulse"></div>
            <div className="absolute bottom-4 right-4 w-2 h-2 bg-cyan-400 rounded-full animate-bounce"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}