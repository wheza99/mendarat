'use client';

import { motion } from 'framer-motion';
import { clientsSectionCopy } from '../copy';

export default function Clients() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Cyber Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Digital Grid */}
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-16 grid-rows-16 h-full w-full">
            {[...Array(256)].map((_, i) => (
              <div
                key={i}
                className="border border-cyan-400/20"
                style={{
                  animation: `grid-pulse ${3 + Math.random() * 2}s ease-in-out infinite`,
                  animationDelay: `${Math.random() * 3}s`
                }}
              />
            ))}
          </div>
        </div>
        
        {/* Cyber Orbs */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-gradient-to-br from-cyan-400/20 via-purple-400/10 to-blue-400/20 backdrop-blur-sm"
              style={{
                width: `${100 + Math.random() * 200}px`,
                height: `${100 + Math.random() * 200}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `cyber-drift ${12 + Math.random() * 8}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 4}s`
              }}
            />
          ))}
        </div>
        
        {/* Data Streams */}
        <div className="absolute inset-0">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="absolute h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent"
              style={{
                width: `${300 + Math.random() * 400}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `data-stream ${6 + Math.random() * 4}s linear infinite`,
                animationDelay: `${Math.random() * 3}s`
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Clients Logos */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center">
            {clientsSectionCopy.clients.map((client, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="group relative"
              >
                {/* Cyber Client Card */}
                <div className="relative bg-gray-900/30 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-8 h-24 flex items-center justify-center overflow-hidden group-hover:border-purple-400/40 transition-all duration-300">
                  {/* Holographic Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 via-transparent to-purple-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Scan Lines */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-40 transition-opacity duration-300">
                    {[...Array(6)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-full h-px bg-cyan-400/30"
                        style={{
                          top: `${i * 16.67}%`,
                          animation: `scan-line ${1 + Math.random() * 0.5}s ease-in-out infinite`,
                          animationDelay: `${Math.random() * 0.5}s`
                        }}
                      />
                    ))}
                  </div>
                  
                  {/* Client Logo */}
                  <div className="relative z-10">
                    <svg
                      className="w-16 h-16 text-gray-400 group-hover:text-cyan-400 transition-colors duration-300"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      {client.svgPaths.map((path, pathIndex) => (
                        <path
                          key={pathIndex}
                          d={path}
                          fillRule={(client.fillRule as "nonzero" | "evenodd" | "inherit" | undefined) || "nonzero"}
                          clipRule={(client.clipRule as "nonzero" | "evenodd" | "inherit" | undefined) || "nonzero"}
                        />
                      ))}
                    </svg>
                  </div>
                  
                  {/* Cyber Corner Elements */}
                  <div className="absolute top-2 right-2 w-2 h-2 border-t border-r border-cyan-400/50 group-hover:border-purple-400/70 transition-colors duration-300" />
                  <div className="absolute bottom-2 left-2 w-2 h-2 border-b border-l border-cyan-400/50 group-hover:border-purple-400/70 transition-colors duration-300" />
                </div>
                
                {/* Floating Cyber Elements */}
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-300" />
                <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 animate-bounce transition-opacity duration-300" />
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* Cyber Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Stats Container */}
          <div className="relative bg-gray-900/40 backdrop-blur-sm border border-cyan-400/30 rounded-2xl p-12 overflow-hidden">
            {/* Holographic Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 via-transparent to-purple-400/10" />
            
            {/* Digital Noise */}
            <div className="absolute inset-0 opacity-20">
              {[...Array(50)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-1 bg-cyan-400 rounded-full"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animation: `digital-noise ${2 + Math.random() * 3}s ease-in-out infinite`,
                    animationDelay: `${Math.random() * 2}s`
                  }}
                />
              ))}
            </div>
            
            {/* Stats Grid */}
            <div className="relative z-10 grid md:grid-cols-3 gap-12 text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300 mb-2">
                  500+
                </div>
                <div className="text-gray-400 font-mono text-sm uppercase tracking-wider">
                  Cyber Projects
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300 mb-2">
                  99.9%
                </div>
                <div className="text-gray-400 font-mono text-sm uppercase tracking-wider">
                  System Uptime
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300 mb-2">
                  24/7
                </div>
                <div className="text-gray-400 font-mono text-sm uppercase tracking-wider">
                  Neural Support
                </div>
              </motion.div>
            </div>
            
            {/* Cyber Frame */}
            <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-cyan-400/50" />
            <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-cyan-400/50" />
            <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-cyan-400/50" />
            <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-cyan-400/50" />
          </div>
          
          {/* Floating Cyber Elements */}
          <div className="absolute -top-4 -left-4 w-6 h-6 bg-cyan-400 rounded-full animate-pulse" />
          <div className="absolute -top-4 -right-4 w-4 h-4 bg-purple-400 rounded-full animate-bounce" />
          <div className="absolute -bottom-4 -left-4 w-5 h-5 bg-blue-400 rounded-full animate-ping" />
          <div className="absolute -bottom-4 -right-4 w-3 h-3 bg-pink-400 rounded-full animate-pulse" />
        </motion.div>
      </div>
      
      {/* Custom Styles */}
      <style jsx>{`
        @keyframes grid-pulse {
          0%, 100% {
            border-color: rgba(34, 211, 238, 0.2);
            box-shadow: inset 0 0 5px rgba(34, 211, 238, 0.1);
          }
          50% {
            border-color: rgba(168, 85, 247, 0.4);
            box-shadow: inset 0 0 10px rgba(168, 85, 247, 0.2);
          }
        }
        
        @keyframes cyber-drift {
          0%, 100% {
            transform: translate(0, 0) rotate(0deg);
            opacity: 0.3;
          }
          50% {
            transform: translate(50px, -30px) rotate(180deg);
            opacity: 0.6;
          }
        }
        
        @keyframes data-stream {
          0% {
            transform: translateX(-100%);
            opacity: 0;
          }
          25% {
            opacity: 1;
          }
          75% {
            opacity: 1;
          }
          100% {
            transform: translateX(100vw);
            opacity: 0;
          }
        }
        
        @keyframes digital-noise {
          0%, 100% {
            opacity: 0.2;
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.5);
          }
        }
        
        @keyframes scan-line {
          0% {
            opacity: 0;
            transform: translateX(-100%);
          }
          50% {
            opacity: 1;
            transform: translateX(0);
          }
          100% {
            opacity: 0;
            transform: translateX(100%);
          }
        }
      `}</style>
    </section>
  );
}