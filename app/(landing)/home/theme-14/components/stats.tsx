"use client";

import { motion, useInView } from "framer-motion";
import { statsSectionCopy } from "../copy";
import { useRef, useEffect, useState } from "react";

export default function Stats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [counters, setCounters] = useState({ projects: 0, uptime: 0 });

  // Animated counter effect
  useEffect(() => {
    if (isInView) {
      const projectsTarget = parseInt(statsSectionCopy.stats[0].value);
      const uptimeTarget = parseFloat(statsSectionCopy.stats[1].value);
      
      const duration = 2000;
      const steps = 60;
      const projectsStep = projectsTarget / steps;
      const uptimeStep = uptimeTarget / steps;
      
      let currentStep = 0;
      const interval = setInterval(() => {
        currentStep++;
        setCounters({
          projects: Math.min(Math.floor(projectsStep * currentStep), projectsTarget),
          uptime: Math.min((uptimeStep * currentStep), uptimeTarget),
        });
        
        if (currentStep >= steps) {
          clearInterval(interval);
        }
      }, duration / steps);
      
      return () => clearInterval(interval);
    }
  }, [isInView]);

  return (
    <section className="relative py-20 bg-black text-cyan-400">
      {/* Background grid */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDAsIDI1NSwgMjU1LCAwLjEpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-10"></div>
      
      {/* Scan lines */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-30" style={{ top: '25%' }}></div>
        <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-30" style={{ top: '75%' }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-2 lg:order-1"
          >
            {/* Subtitle */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="font-mono text-sm text-green-400 mb-4 flex items-center"
            >
              <span className="mr-2">{statsSectionCopy.subtitle}</span>
              <div className="w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
            </motion.div>
            
            {/* Main heading */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
            >
              <span className="block text-white font-mono">
                {statsSectionCopy.heading1}
              </span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 font-mono">
                {statsSectionCopy.heading2}
              </span>
            </motion.h2>
            
            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-gray-300 text-lg mb-8 leading-relaxed"
            >
              {statsSectionCopy.description}
            </motion.p>
            
            {/* CTA Button */}
            <motion.button
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="relative px-8 py-4 border border-cyan-400 text-cyan-400 font-mono text-lg rounded-sm overflow-hidden group transition-all duration-300 hover:text-black"
            >
              <span className="relative z-10">{statsSectionCopy.buttonText}</span>
              <div className="absolute inset-0 bg-cyan-400 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
            </motion.button>
          </motion.div>
          
          {/* Right side - Image and stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="order-1 lg:order-2 relative"
          >
            {/* Image container with holographic frame */}
            <div className="relative">
              {/* Holographic frame */}
              <div className="absolute -inset-4 border border-cyan-400 opacity-60 rounded-lg">
                <div className="absolute -top-1 -left-1 w-8 h-8 border-l-2 border-t-2 border-cyan-400"></div>
                <div className="absolute -top-1 -right-1 w-8 h-8 border-r-2 border-t-2 border-cyan-400"></div>
                <div className="absolute -bottom-1 -left-1 w-8 h-8 border-l-2 border-b-2 border-cyan-400"></div>
                <div className="absolute -bottom-1 -right-1 w-8 h-8 border-r-2 border-b-2 border-cyan-400"></div>
              </div>
              
              {/* Image with neon overlay */}
              <div className="relative rounded-lg overflow-hidden">
                <img
                  src={statsSectionCopy.image}
                  alt={statsSectionCopy.imageAlt}
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 mix-blend-overlay"></div>
                <div className="absolute inset-0 bg-black/30"></div>
              </div>
              
              {/* Scan line animation */}
              <motion.div
                animate={{
                  y: ['-100%', '100%'],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-60"
              />
            </div>
            
            {/* Stats overlay */}
            <div className="absolute -bottom-8 -right-8 grid grid-cols-2 gap-4">
              {/* Projects stat */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="bg-black/80 backdrop-blur-sm border border-cyan-400 rounded-lg p-4 text-center"
              >
                <div className="text-2xl font-mono font-bold text-cyan-400">
                  {counters.projects}
                  <span className="text-cyan-300">{statsSectionCopy.stats[0].suffix}</span>
                </div>
                <div className="text-sm text-gray-400 font-mono">
                  {statsSectionCopy.stats[0].label}
                </div>
              </motion.div>
              
              {/* Uptime stat */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="bg-black/80 backdrop-blur-sm border border-cyan-400 rounded-lg p-4 text-center"
              >
                <div className="text-2xl font-mono font-bold text-cyan-400">
                  {counters.uptime.toFixed(1)}
                  <span className="text-cyan-300">{statsSectionCopy.stats[1].suffix}</span>
                </div>
                <div className="text-sm text-gray-400 font-mono">
                  {statsSectionCopy.stats[1].label}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Digital particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: ['-10%', '110%'],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: i * 0.3,
              ease: "linear"
            }}
            className="absolute w-1 h-8 bg-gradient-to-b from-transparent via-cyan-400 to-transparent"
            style={{
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>
    </section>
  );
}