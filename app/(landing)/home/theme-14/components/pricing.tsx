"use client";

import { motion, useInView } from "framer-motion";
import { pricingSectionCopy } from "../copy";
import { useRef } from "react";

export default function Pricing() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="relative py-20 bg-gray-900 text-cyan-400">
      {/* Background grid */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDAsIDI1NSwgMjU1LCAwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20"></div>
      
      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-mono mb-6 text-white">
            {pricingSectionCopy.heading}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {pricingSectionCopy.description}
          </p>
        </motion.div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {pricingSectionCopy.plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
              transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
              className={`relative group ${plan.recommended ? 'md:-mt-8' : ''}`}
            >
              {/* Recommended badge */}
              {plan.recommended && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                  <div className="bg-gradient-to-r from-cyan-400 to-blue-500 text-black px-4 py-1 rounded-full text-sm font-mono font-bold">
                    RECOMMENDED
                  </div>
                </div>
              )}

              {/* Holographic frame */}
              <div className={`absolute -inset-2 border rounded-lg transition-opacity duration-300 ${
                plan.recommended 
                  ? 'border-cyan-400 opacity-100' 
                  : 'border-cyan-400/30 opacity-0 group-hover:opacity-100'
              }`}>
                <div className="absolute -top-1 -left-1 w-6 h-6 border-l-2 border-t-2 border-cyan-400"></div>
                <div className="absolute -top-1 -right-1 w-6 h-6 border-r-2 border-t-2 border-cyan-400"></div>
                <div className="absolute -bottom-1 -left-1 w-6 h-6 border-l-2 border-b-2 border-cyan-400"></div>
                <div className="absolute -bottom-1 -right-1 w-6 h-6 border-r-2 border-b-2 border-cyan-400"></div>
              </div>

              {/* Card content */}
              <div className={`relative bg-black/50 backdrop-blur-sm border rounded-lg p-8 h-full transition-all duration-300 ${
                plan.recommended 
                  ? 'border-cyan-400/50 bg-black/70' 
                  : 'border-gray-700 group-hover:border-cyan-400/50 group-hover:bg-black/70'
              }`}>
                {/* Plan name */}
                <h3 className={`text-2xl font-bold font-mono mb-2 ${
                  plan.recommended ? 'text-cyan-400' : 'text-white group-hover:text-cyan-400'
                } transition-colors duration-300`}>
                  {plan.name}
                </h3>
                
                {/* Price */}
                <div className="mb-4">
                  <span className={`text-4xl font-bold font-mono ${
                    plan.recommended ? 'text-cyan-400' : 'text-white'
                  }`}>
                    {plan.price}
                  </span>
                  <span className="text-gray-400 text-sm font-mono ml-2">/project</span>
                </div>
                
                {/* Description */}
                <p className="text-gray-300 mb-8 leading-relaxed">
                  {plan.description}
                </p>
                
                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                      <span className="font-mono text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                {/* CTA Button */}
                <button className={`w-full py-4 font-mono text-lg rounded-sm transition-all duration-300 ${
                  plan.recommended
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-black font-bold hover:scale-105'
                    : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black'
                }`}>
                  {pricingSectionCopy.selectPlanButtonText}
                </button>

                {/* Scan line animation */}
                <motion.div
                  animate={{
                    x: ['-100%', '100%'],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.3,
                    ease: "linear"
                  }}
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 group-hover:opacity-60"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Custom plan section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <div className="bg-black/50 backdrop-blur-sm border border-gray-700 rounded-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold font-mono text-white mb-4">
              {pricingSectionCopy.customPlanText}
            </h3>
            <button className="relative px-8 py-4 border border-cyan-400 text-cyan-400 font-mono text-lg rounded-sm overflow-hidden group transition-all duration-300 hover:text-black">
              <span className="relative z-10">{pricingSectionCopy.contactLink}</span>
              <div className="absolute inset-0 bg-cyan-400 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}