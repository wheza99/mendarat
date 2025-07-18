"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { statsSectionCopy } from "../copy";

const Stats = () => {
  const [counters, setCounters] = useState({
    years: 0,
    threats: 0,
  });

  useEffect(() => {
    const targetYears = parseInt(statsSectionCopy.stats[0].value);
    const targetThreats = parseInt(statsSectionCopy.stats[1].value.replace('M', ''));
    
    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;
    
    let currentStep = 0;
    
    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      
      setCounters({
        years: Math.floor(targetYears * progress),
        threats: Math.floor(targetThreats * progress),
      });
      
      if (currentStep >= steps) {
        clearInterval(timer);
        setCounters({
          years: targetYears,
          threats: targetThreats,
        });
      }
    }, stepDuration);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen bg-black overflow-hidden">
      {/* Cyber Current Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-black to-purple-900/20" />
        
        {/* Digital Starfield */}
        <div className="absolute inset-0">
          {[...Array(120)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-px h-px bg-cyan-400 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0.3, 1, 0.3],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 3,
              }}
            />
          ))}
        </div>
        
        {/* Cyber Current Lines */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`current-${i}`}
            className="absolute h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent"
            style={{
              left: '0%',
              top: `${10 + i * 10}%`,
              width: '100%',
            }}
            animate={{
              scaleX: [0, 1, 0],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          />
        ))}
        
        {/* Floating Cyber Particles */}
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-2 h-2 bg-cyan-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, 60, 0],
              y: [0, -40, 0],
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 5 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="mb-6">
              <span className="text-cyan-400 font-mono text-sm tracking-wider">
                {statsSectionCopy.subtitle}
              </span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              {statsSectionCopy.heading1}
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                {statsSectionCopy.heading2}
              </span>
            </h2>
            
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              {statsSectionCopy.description}
            </p>
            
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-purple-400 text-black font-bold rounded-lg shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300"
            >
              {statsSectionCopy.buttonText}
            </motion.button>
            
            {/* Stats */}
            <div className="grid grid-cols-2 gap-8 mt-12">
              {statsSectionCopy.stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="p-6 rounded-xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-cyan-500/20 backdrop-blur-sm">
                    {/* Cyber Corner Accents */}
                    <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-cyan-400/50" />
                    <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-cyan-400/50" />
                    
                    <div className="relative z-10">
                      <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">
                        {index === 0 ? counters.years : counters.threats}
                        <span className="text-purple-400">{stat.suffix}</span>
                        {index === 1 && <span className="text-purple-400">M</span>}
                      </div>
                      <div className="text-gray-300 text-sm">{stat.label}</div>
                      
                      {/* Status Indicator */}
                      <div className="mt-3 flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                        <span className="text-green-400 text-xs font-mono">ACTIVE</span>
                      </div>
                    </div>
                    
                    {/* Scanning Effect */}
                    <motion.div
                      className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
                      animate={{
                        y: [0, 80, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.5,
                        ease: "linear",
                      }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl">
              {/* Cyber Frame */}
              <div className="absolute inset-0 border-2 border-cyan-400/30 rounded-2xl z-10" />
              <div className="absolute top-4 left-4 w-8 h-8 border-l-4 border-t-4 border-cyan-400 z-10" />
              <div className="absolute top-4 right-4 w-8 h-8 border-r-4 border-t-4 border-cyan-400 z-10" />
              <div className="absolute bottom-4 left-4 w-8 h-8 border-l-4 border-b-4 border-cyan-400 z-10" />
              <div className="absolute bottom-4 right-4 w-8 h-8 border-r-4 border-b-4 border-cyan-400 z-10" />
              
              <img
                src={statsSectionCopy.image}
                alt={statsSectionCopy.imageAlt}
                className="w-full h-full object-cover rounded-2xl"
              />
              
              {/* Cyber Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-2xl" />
              
              {/* Scanning Lines */}
              <motion.div
                className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
                animate={{
                  y: [0, 400, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
              
              {/* Security Status Overlay */}
              <div className="absolute top-6 right-6 z-20">
                <div className="px-4 py-2 bg-gradient-to-r from-green-400/20 to-cyan-400/20 backdrop-blur-sm border border-green-400/30 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                    <span className="text-green-400 text-sm font-mono">SECURE</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Security Indicators */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={`indicator-${i}`}
                className="absolute w-4 h-4 bg-cyan-400/50 rounded-full"
                style={{
                  left: `${20 + Math.random() * 60}%`,
                  top: `${20 + Math.random() * 60}%`,
                }}
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </motion.div>
        </div>
        
        {/* Security Metrics Dashboard */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 max-w-6xl mx-auto"
        >
          <div className="p-8 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-cyan-500/20">
            <h3 className="text-2xl font-bold text-white text-center mb-8">Real-Time Security Dashboard</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { label: "System Status", value: "ONLINE", color: "green", icon: "🟢" },
                { label: "Threat Level", value: "LOW", color: "cyan", icon: "🛡️" },
                { label: "Active Scans", value: "247", color: "purple", icon: "🔍" },
                { label: "Last Update", value: "NOW", color: "yellow", icon: "⚡" },
              ].map((metric, index) => (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className="p-4 rounded-xl bg-gray-800/50 border border-gray-700/50 hover:border-cyan-500/30 transition-all duration-300 text-center"
                >
                  <div className="text-2xl mb-2">{metric.icon}</div>
                  <div className={`text-xl font-bold mb-1 text-${metric.color}-400`}>
                    {metric.value}
                  </div>
                  <div className="text-gray-300 text-sm">{metric.label}</div>
                  
                  {/* Activity Indicator */}
                  <div className="mt-3 flex items-center justify-center space-x-2">
                    <div className={`w-2 h-2 bg-${metric.color}-400 rounded-full animate-pulse`} />
                    <span className="text-xs text-gray-400 font-mono">LIVE</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Stats;