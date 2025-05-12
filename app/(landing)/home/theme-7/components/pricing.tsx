"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { pricingSectionCopy } from "../copy";
import Link from "next/link";

export default function Pricing() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const [hoveredPlan, setHoveredPlan] = useState<number | null>(null);

  // Digital grid background
  const DigitalGrid = () => {
    return (
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="digital-grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M0 0 L40 0 L40 40 L0 40 Z"
                fill="none"
                stroke="#06b6d4"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#digital-grid)" />
        </svg>
      </div>
    );
  };

  return (
    <section id="pricing" className="relative py-24 bg-gray-900 overflow-hidden">
      {/* Background elements */}
      <DigitalGrid />
      
      {/* Glowing accent elements */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full filter blur-[100px]"
        animate={{
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full filter blur-[100px]"
        animate={{
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{ duration: 8, repeat: Infinity, delay: 4 }}
      />

      <div className="container mx-auto px-4" ref={containerRef}>
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-6 tracking-tight"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
              {pricingSectionCopy.heading}
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-gray-300 text-lg"
          >
            {pricingSectionCopy.description}
          </motion.p>
        </div>

        {/* Pricing plans with holographic 3D effect */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pricingSectionCopy.plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="relative"
              onMouseEnter={() => setHoveredPlan(index)}
              onMouseLeave={() => setHoveredPlan(null)}
            >
              {/* 3D platform effect */}
              <AnimatePresence>
                {hoveredPlan === index && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.7 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-[90%] h-6 bg-gradient-to-b from-cyan-500/30 to-transparent blur-md"
                    style={{ 
                      perspective: "1000px",
                      transform: "rotateX(60deg) translateZ(-10px)",
                      transformStyle: "preserve-3d"
                    }}
                  />
                )}
              </AnimatePresence>
              
              {/* Pricing card */}
              <motion.div
                whileHover={{
                  y: -10,
                  z: 10,
                  scale: 1.02,
                }}
                transition={{ duration: 0.3 }}
                className={`relative h-full p-8 rounded-lg overflow-hidden transform perspective-1000 ${
                  plan.recommended
                    ? "bg-gradient-to-br from-gray-800/90 to-gray-900/95 border-2 border-cyan-500"
                    : "bg-gradient-to-br from-gray-800/80 to-gray-900/90 border border-cyan-500/30"
                }`}
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Recommended badge */}
                {plan.recommended && (
                  <div className="absolute -right-12 top-8 transform rotate-45 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs font-bold py-1 px-12 shadow-lg">
                    RECOMMENDED
                  </div>
                )}
                
                {/* Digital circuit overlay */}
                <div className="absolute inset-0 opacity-5 pointer-events-none overflow-hidden">
                  <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d={`M0 ${plan.recommended ? "30" : "50"} H100 M${plan.recommended ? "70" : "50"} 0 V100`}
                      stroke="#06b6d4"
                      strokeWidth="0.5"
                      fill="none"
                      vectorEffect="non-scaling-stroke"
                    />
                    <circle 
                      cx={plan.recommended ? "70" : "50"} 
                      cy={plan.recommended ? "30" : "50"} 
                      r="3" 
                      fill="#06b6d4" 
                    />
                  </svg>
                </div>
                
                {/* Digital scan effect */}
                <motion.div
                  className="absolute inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 group-hover:opacity-100"
                  animate={{
                    top: ["0%", "100%", "0%"],
                    opacity: [0, 0.5, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
                
                {/* Plan content */}
                <div className="relative z-10">
                  {/* Plan name */}
                  <h3 className={`text-2xl font-bold mb-2 ${
                    plan.recommended ? "text-cyan-400" : "text-white"
                  }`}>
                    {plan.name}
                  </h3>
                  
                  {/* Price */}
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-white">
                      {plan.price}
                    </span>
                  </div>
                  
                  {/* Description */}
                  <p className="text-gray-300 mb-6 text-sm">
                    {plan.description}
                  </p>
                  
                  {/* Divider */}
                  <div className="w-full h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent mb-6" />
                  
                  {/* Features */}
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <motion.li
                        key={featureIndex}
                        initial={{ opacity: 0, x: -10 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.3, delay: 0.4 + featureIndex * 0.1 }}
                        className="flex items-start text-gray-300"
                      >
                        <svg
                          className={`h-5 w-5 mr-2 flex-shrink-0 ${
                            plan.recommended ? "text-cyan-400" : "text-cyan-500/70"
                          }`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="text-sm">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                  
                  {/* CTA button */}
                  <motion.button
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 0 15px rgba(6, 182, 212, 0.3)",
                    }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full py-3 px-6 rounded-md font-medium text-white relative overflow-hidden ${
                      plan.recommended
                        ? "bg-gradient-to-r from-cyan-500 to-blue-600"
                        : "bg-gray-800 border border-cyan-500/50 hover:bg-gray-700"
                    }`}
                  >
                    <span className="relative z-10">
                      {pricingSectionCopy.selectPlanButtonText}
                    </span>
                    
                    {plan.recommended && (
                      <motion.span
                        className="absolute inset-0 opacity-0 group-hover:opacity-30"
                        animate={{
                          background: [
                            "radial-gradient(circle at 20% 50%, rgba(6, 182, 212, 0.5) 0%, transparent 50%)",
                            "radial-gradient(circle at 80% 50%, rgba(6, 182, 212, 0.5) 0%, transparent 50%)",
                            "radial-gradient(circle at 20% 50%, rgba(6, 182, 212, 0.5) 0%, transparent 50%)",
                          ],
                        }}
                        transition={{ duration: 4, repeat: Infinity }}
                      />
                    )}
                  </motion.button>
                </div>
                
                {/* Corner accents */}
                <div className="absolute top-0 left-0 w-8 h-8">
                  <div className="absolute top-0 left-0 w-full h-[2px] bg-cyan-400" />
                  <div className="absolute top-0 left-0 w-[2px] h-full bg-cyan-400" />
                </div>
                <div className="absolute top-0 right-0 w-8 h-8">
                  <div className="absolute top-0 right-0 w-full h-[2px] bg-cyan-400" />
                  <div className="absolute top-0 right-0 w-[2px] h-full bg-cyan-400" />
                </div>
                <div className="absolute bottom-0 left-0 w-8 h-8">
                  <div className="absolute bottom-0 left-0 w-full h-[2px] bg-cyan-400" />
                  <div className="absolute bottom-0 left-0 w-[2px] h-full bg-cyan-400" />
                </div>
                <div className="absolute bottom-0 right-0 w-8 h-8">
                  <div className="absolute bottom-0 right-0 w-full h-[2px] bg-cyan-400" />
                  <div className="absolute bottom-0 right-0 w-[2px] h-full bg-cyan-400" />
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Custom plan CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-300 mb-4">
            {pricingSectionCopy.customPlanText}
          </p>
          <Link href="#contact">
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 15px rgba(6, 182, 212, 0.3)",
              }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center px-6 py-3 bg-transparent border border-cyan-500 text-cyan-400 font-medium rounded-md relative overflow-hidden group"
            >
              <span className="relative z-10">{pricingSectionCopy.contactLink}</span>
              <motion.span
                className="absolute inset-0 bg-cyan-500/10"
                initial={{ scale: 0, opacity: 0 }}
                whileHover={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.4 }}
                style={{ transformOrigin: "center" }}
              />
              <svg
                className="ml-2 h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
