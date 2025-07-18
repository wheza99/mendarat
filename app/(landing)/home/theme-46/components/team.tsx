'use client';

import { motion } from 'framer-motion';
import { teamSectionCopy } from '../copy';

export default function Team() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Cyber Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Neural Network */}
        <div className="absolute inset-0 opacity-15">
          <svg className="w-full h-full" viewBox="0 0 1000 1000">
            {[...Array(30)].map((_, i) => {
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
                    stroke="url(#neuralGradient)"
                    strokeWidth="1"
                    className="animate-pulse"
                    style={{
                      animationDelay: `${Math.random() * 3}s`,
                      animationDuration: `${4 + Math.random() * 2}s`
                    }}
                  />
                  <circle
                    cx={x1}
                    cy={y1}
                    r="2"
                    fill="#22D3EE"
                    className="animate-pulse"
                    style={{
                      animationDelay: `${Math.random() * 2}s`
                    }}
                  />
                  <circle
                    cx={x2}
                    cy={y2}
                    r="2"
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
              <linearGradient id="neuralGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#22D3EE" stopOpacity="0.6" />
                <stop offset="50%" stopColor="#A855F7" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.6" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        
        {/* Cyber Hexagons */}
        <div className="absolute inset-0">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute border border-cyan-400/20"
              style={{
                width: `${50 + Math.random() * 100}px`,
                height: `${50 + Math.random() * 100}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `cyber-rotate ${10 + Math.random() * 5}s linear infinite`,
                animationDelay: `${Math.random() * 3}s`,
                clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'
              }}
            />
          ))}
        </div>
        
        {/* Data Particles */}
        <div className="absolute inset-0">
          {[...Array(40)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `data-drift ${15 + Math.random() * 10}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 5}s`
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
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-4xl lg:text-6xl font-bold leading-tight"
            >
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
                {teamSectionCopy.heading.split('\n')[0]}
              </span>
              <br />
              <span className="text-white">
                {teamSectionCopy.heading.split('\n')[1]}
              </span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-gray-300 text-lg leading-relaxed"
            >
              {teamSectionCopy.description}
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <button className="group relative px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-purple-600 hover:to-pink-600 text-white font-bold rounded-lg transition-all duration-300 overflow-hidden">
                <span className="relative z-10 font-mono uppercase tracking-wider">
                  {teamSectionCopy.buttonText}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 animate-pulse" />
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400/30 to-blue-400/30 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
            </motion.div>
          </motion.div>
          
          {/* Team Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {teamSectionCopy.teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative"
              >
                {/* Cyber Member Card */}
                <div className="relative bg-gray-900/50 backdrop-blur-sm border border-cyan-400/30 rounded-xl p-6 overflow-hidden group-hover:border-purple-400/50 transition-all duration-300">
                  {/* Holographic Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 via-transparent to-purple-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Scan Lines */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-300">
                    {[...Array(8)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-full h-px bg-cyan-400/50"
                        style={{
                          top: `${i * 12.5}%`,
                          animation: `scan-line ${1 + Math.random() * 0.5}s ease-in-out infinite`,
                          animationDelay: `${Math.random() * 0.5}s`
                        }}
                      />
                    ))}
                  </div>
                  
                  {/* Member Image */}
                  <div className="relative mb-4">
                    <div className="relative overflow-hidden rounded-lg">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      
                      {/* Digital Filter */}
                      <div className="absolute inset-0 bg-gradient-to-t from-cyan-400/20 via-transparent to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      {/* Cyber Frame */}
                      <div className="absolute inset-0 border border-cyan-400/50 rounded-lg group-hover:border-purple-400/70 transition-colors duration-300" />
                    </div>
                    
                    {/* Status Indicator */}
                    <div className="absolute -top-2 -right-2 w-4 h-4 bg-green-400 rounded-full border-2 border-gray-900 animate-pulse" />
                  </div>
                  
                  {/* Member Info */}
                  <div className="relative z-10">
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                      {member.name}
                    </h3>
                    
                    <p className="text-gray-400 text-sm font-mono mb-4">
                      {member.role}
                    </p>
                    
                    {/* Social Links */}
                    <div className="flex gap-3">
                      {teamSectionCopy.socialLinks.map((social, socialIndex) => (
                        <motion.button
                          key={socialIndex}
                          whileHover={{ scale: 1.2, rotate: 360 }}
                          whileTap={{ scale: 0.9 }}
                          className="w-8 h-8 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-purple-600 hover:to-pink-600 rounded-lg flex items-center justify-center text-white text-xs font-bold transition-all duration-300"
                        >
                          {social.toUpperCase()}
                        </motion.button>
                      ))}
                    </div>
                  </div>
                  
                  {/* Cyber Corner Elements */}
                  <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-cyan-400/50 group-hover:border-purple-400/70 transition-colors duration-300" />
                  <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-cyan-400/50 group-hover:border-purple-400/70 transition-colors duration-300" />
                </div>
                
                {/* Floating Cyber Elements */}
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-300" />
                <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 animate-bounce transition-opacity duration-300" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
      
      {/* Custom Styles */}
      <style jsx>{`
        @keyframes cyber-rotate {
          0% {
            transform: rotate(0deg) scale(1);
            opacity: 0.3;
          }
          50% {
            transform: rotate(180deg) scale(1.1);
            opacity: 0.6;
          }
          100% {
            transform: rotate(360deg) scale(1);
            opacity: 0.3;
          }
        }
        
        @keyframes data-drift {
          0% {
            transform: translate(0, 0) rotate(0deg);
            opacity: 0;
          }
          25% {
            opacity: 1;
          }
          75% {
            opacity: 1;
          }
          100% {
            transform: translate(100px, -100px) rotate(360deg);
            opacity: 0;
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