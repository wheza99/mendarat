'use client';

import { motion } from 'framer-motion';
import { statsSectionCopy } from '../copy';

export default function Stats() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Cyber Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Digital Grid */}
        <div className="absolute inset-0 opacity-20">
          <div className="grid grid-cols-12 grid-rows-12 h-full w-full">
            {[...Array(144)].map((_, i) => (
              <div
                key={i}
                className="border border-cyan-400/30"
                style={{
                  animation: `cyber-pulse ${2 + Math.random() * 3}s ease-in-out infinite`,
                  animationDelay: `${Math.random() * 2}s`
                }}
              />
            ))}
          </div>
        </div>
        
        {/* Cyber Particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `cyber-float ${10 + Math.random() * 5}s linear infinite`,
                animationDelay: `${Math.random() * 3}s`
              }}
            />
          ))}
        </div>
        
        {/* Neon Lines */}
        <div className="absolute inset-0">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
              style={{
                width: `${300 + Math.random() * 400}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `neon-glow ${3 + Math.random() * 2}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-cyan-400 font-mono text-sm tracking-wider uppercase"
            >
              {statsSectionCopy.subtitle}
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h2 className="text-4xl lg:text-6xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                  {statsSectionCopy.heading1}
                </span>
                <br />
                <span className="text-white">
                  {statsSectionCopy.heading2}
                </span>
              </h2>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="text-gray-300 text-lg leading-relaxed"
            >
              {statsSectionCopy.description}
            </motion.p>
            
            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="flex gap-12"
            >
              {statsSectionCopy.stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center group"
                >
                  <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300">
                    {stat.value}{stat.suffix}
                  </div>
                  <div className="text-gray-400 text-sm font-mono uppercase tracking-wider mt-2">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <button className="group relative px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-semibold rounded-lg transition-all duration-300 overflow-hidden">
                <span className="relative z-10">{statsSectionCopy.buttonText}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 animate-pulse" />
              </button>
            </motion.div>
          </motion.div>
          
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="relative overflow-hidden rounded-2xl">
              {/* Cyber Frame */}
              <div className="absolute inset-0 border-2 border-cyan-400/50 rounded-2xl z-10 group-hover:border-purple-400/70 transition-colors duration-300" />
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-2xl blur group-hover:from-purple-400/30 group-hover:to-pink-400/30 transition-all duration-300" />
              
              {/* Holographic Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 via-transparent to-blue-400/10 z-20 group-hover:from-purple-400/15 group-hover:to-pink-400/15 transition-all duration-300" />
              
              {/* Scan Lines */}
              <div className="absolute inset-0 z-30 opacity-30">
                {[...Array(20)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-full h-px bg-cyan-400/50"
                    style={{
                      top: `${i * 5}%`,
                      animation: `scan-line ${2 + Math.random()}s ease-in-out infinite`,
                      animationDelay: `${Math.random() * 2}s`
                    }}
                  />
                ))}
              </div>
              
              <img
                src={statsSectionCopy.image}
                alt={statsSectionCopy.imageAlt}
                className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              
              {/* Digital Noise */}
              <div className="absolute inset-0 bg-black/20 mix-blend-multiply z-40" />
            </div>
            
            {/* Floating Cyber Elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 border-2 border-cyan-400 rounded-full animate-pulse" />
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-400 rounded-full animate-bounce" />
            <div className="absolute top-1/2 -right-8 w-4 h-4 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full animate-ping" />
          </motion.div>
        </div>
      </div>
      
      {/* Custom Styles */}
      <style jsx>{`
        @keyframes cyber-pulse {
          0%, 100% {
            border-color: rgba(34, 211, 238, 0.3);
            box-shadow: 0 0 5px rgba(34, 211, 238, 0.2);
          }
          50% {
            border-color: rgba(168, 85, 247, 0.5);
            box-shadow: 0 0 15px rgba(168, 85, 247, 0.4);
          }
        }
        
        @keyframes cyber-float {
          0% {
            transform: translateY(100vh) translateX(0);
            opacity: 0;
          }
          25% {
            opacity: 1;
          }
          75% {
            opacity: 1;
          }
          100% {
            transform: translateY(-100vh) translateX(50px);
            opacity: 0;
          }
        }
        
        @keyframes neon-glow {
          0%, 100% {
            opacity: 0.3;
            box-shadow: 0 0 10px rgba(34, 211, 238, 0.5);
          }
          50% {
            opacity: 0.8;
            box-shadow: 0 0 20px rgba(168, 85, 247, 0.8);
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