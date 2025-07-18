'use client';

import { motion } from 'framer-motion';
import { servicesSectionCopy } from '../copy';

export default function Services() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Cyber Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Digital Matrix */}
        <div className="absolute inset-0 opacity-10">
          {[...Array(100)].map((_, i) => (
            <div
              key={i}
              className="absolute text-cyan-400 font-mono text-xs"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `matrix-fall ${5 + Math.random() * 10}s linear infinite`,
                animationDelay: `${Math.random() * 5}s`
              }}
            >
              {Math.random() > 0.5 ? '1' : '0'}
            </div>
          ))}
        </div>
        
        {/* Cyber Circuits */}
        <div className="absolute inset-0">
          <svg className="w-full h-full opacity-20" viewBox="0 0 1000 1000">
            {[...Array(15)].map((_, i) => {
              const x1 = Math.random() * 1000;
              const y1 = Math.random() * 1000;
              const x2 = Math.random() * 1000;
              const y2 = Math.random() * 1000;
              return (
                <g key={i}>
                  <line
                    x1={x1}
                    y1={y1}
                    x2={x2}
                    y2={y2}
                    stroke="url(#cyberGradient)"
                    strokeWidth="2"
                    className="animate-pulse"
                    style={{
                      animationDelay: `${Math.random() * 2}s`,
                      animationDuration: `${3 + Math.random() * 2}s`
                    }}
                  />
                  <circle
                    cx={x1}
                    cy={y1}
                    r="3"
                    fill="#22D3EE"
                    className="animate-pulse"
                    style={{
                      animationDelay: `${Math.random() * 2}s`
                    }}
                  />
                  <rect
                    x={x2 - 2}
                    y={y2 - 2}
                    width="4"
                    height="4"
                    fill="#A855F7"
                    className="animate-pulse"
                    style={{
                      animationDelay: `${Math.random() * 2}s`
                    }}
                  />
                </g>
              );
            })}
            <defs>
              <linearGradient id="cyberGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#22D3EE" stopOpacity="0.6" />
                <stop offset="50%" stopColor="#A855F7" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.6" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        
        {/* Holographic Panels */}
        <div className="absolute inset-0">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-gradient-to-br from-cyan-400/5 via-purple-400/10 to-blue-400/5 backdrop-blur-sm"
              style={{
                width: `${150 + Math.random() * 200}px`,
                height: `${100 + Math.random() * 150}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `holo-float ${8 + Math.random() * 4}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 3}s`,
                transform: `rotate(${Math.random() * 45}deg)`,
                borderRadius: '8px',
                border: '1px solid rgba(34, 211, 238, 0.2)'
              }}
            />
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
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-6xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
              {servicesSectionCopy.heading}
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed"
          >
            {servicesSectionCopy.description}
          </motion.p>
        </motion.div>
        
        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {servicesSectionCopy.services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative"
            >
              {/* Cyber Card */}
              <div className="relative bg-gray-900/50 backdrop-blur-sm border border-cyan-400/30 rounded-xl p-8 h-full overflow-hidden group-hover:border-purple-400/50 transition-all duration-300">
                {/* Holographic Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 via-transparent to-purple-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Scan Lines */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-300">
                  {[...Array(10)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-full h-px bg-cyan-400/50"
                      style={{
                        top: `${i * 10}%`,
                        animation: `scan-line ${1 + Math.random()}s ease-in-out infinite`,
                        animationDelay: `${Math.random()}s`
                      }}
                    />
                  ))}
                </div>
                
                {/* Service Icon */}
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className="relative mb-6"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-400 rounded-lg flex items-center justify-center group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d={service.iconPath} />
                    </svg>
                  </div>
                  <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
                
                {/* Service Content */}
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-400 leading-relaxed mb-6">
                    {service.description}
                  </p>
                  
                  {/* Cyber Button */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative px-6 py-2 bg-transparent border border-cyan-400/50 text-cyan-400 rounded-lg font-mono text-sm uppercase tracking-wider hover:bg-cyan-400/10 hover:border-cyan-400 transition-all duration-300 overflow-hidden group/btn"
                  >
                    <span className="relative z-10">EXPLORE</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
                  </motion.button>
                </div>
                
                {/* Cyber Corner Elements */}
                <div className="absolute top-4 right-4 w-3 h-3 border-t-2 border-r-2 border-cyan-400/50 group-hover:border-purple-400/70 transition-colors duration-300" />
                <div className="absolute bottom-4 left-4 w-3 h-3 border-b-2 border-l-2 border-cyan-400/50 group-hover:border-purple-400/70 transition-colors duration-300" />
              </div>
              
              {/* Floating Cyber Elements */}
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-300" />
              <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 animate-bounce transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
        
        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-12 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-purple-600 hover:to-pink-600 text-white font-bold rounded-lg transition-all duration-300 overflow-hidden"
          >
            <span className="relative z-10 font-mono uppercase tracking-wider">
              {servicesSectionCopy.buttonText}
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 animate-pulse" />
            
            {/* Cyber Glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400/30 to-blue-400/30 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.button>
        </motion.div>
      </div>
      
      {/* Custom Styles */}
      <style jsx>{`
        @keyframes matrix-fall {
          0% {
            transform: translateY(-100vh);
            opacity: 0;
          }
          25% {
            opacity: 1;
          }
          75% {
            opacity: 1;
          }
          100% {
            transform: translateY(100vh);
            opacity: 0;
          }
        }
        
        @keyframes holo-float {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
            opacity: 0.3;
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
            opacity: 0.6;
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