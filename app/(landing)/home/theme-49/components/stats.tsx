'use client';

import { motion } from 'framer-motion';
import { statsSectionCopy } from '../copy';

export default function Stats() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Quantum Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Aurora Grid Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: `
                linear-gradient(rgba(139, 92, 246, 0.3) 1px, transparent 1px),
                linear-gradient(90deg, rgba(34, 197, 94, 0.2) 1px, transparent 1px)
              `,
              backgroundSize: '60px 60px',
              animation: 'aurora-grid 25s linear infinite'
            }}
          />
        </div>
        
        {/* Floating Quantum Particles */}
        <div className="absolute top-20 left-10 w-3 h-3 bg-violet-400 rounded-full opacity-60 animate-aurora-float"></div>
        <div className="absolute top-40 right-20 w-4 h-4 bg-emerald-400 rounded-full opacity-70 animate-aurora-drift"></div>
        <div className="absolute bottom-32 left-32 w-2 h-2 bg-pink-400 rounded-full opacity-80 animate-aurora-spiral"></div>
        <div className="absolute bottom-20 right-16 w-5 h-5 bg-cyan-400 rounded-full opacity-50 animate-aurora-float"></div>
        
        {/* Cosmic Energy Waves */}
        <svg className="absolute inset-0 w-full h-full opacity-20" style={{ pointerEvents: 'none' }}>
          <defs>
            <linearGradient id="quantumGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.6" />
              <stop offset="50%" stopColor="#22C55E" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#EC4899" stopOpacity="0.7" />
            </linearGradient>
          </defs>
          <path 
            d="M 0 200 Q 300 150 600 180 T 1200 200 L 1200 400 L 0 400 Z"
            fill="url(#quantumGradient)" 
            className="animate-aurora-wave"
          />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-violet-400 via-emerald-400 to-pink-400 bg-clip-text text-transparent">
            {statsSectionCopy.heading}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {statsSectionCopy.description}
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {statsSectionCopy.stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.2,
                type: "spring",
                stiffness: 100
              }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05,
                rotateY: 5,
                transition: { duration: 0.3 }
              }}
              className="relative group"
            >
              {/* Quantum Card Background */}
              <div className="relative p-8 rounded-2xl bg-gradient-to-br from-indigo-900/40 via-purple-900/30 to-slate-900/50 backdrop-blur-sm border border-violet-500/20 hover:border-emerald-400/40 transition-all duration-500 overflow-hidden">
                {/* Aurora Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-violet-600/10 via-emerald-500/5 to-pink-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Quantum Particles */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-violet-400 rounded-full opacity-60 animate-pulse"></div>
                <div className="absolute bottom-4 left-4 w-1 h-1 bg-emerald-400 rounded-full opacity-80 animate-ping"></div>
                
                {/* Content */}
                <div className="relative z-10 text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ 
                      duration: 0.6, 
                      delay: index * 0.2 + 0.3,
                      type: "spring",
                      stiffness: 200
                    }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-bold mb-3 bg-gradient-to-r from-violet-400 via-emerald-400 to-pink-400 bg-clip-text text-transparent"
                  >
                    {stat.number}
                  </motion.div>
                  
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-emerald-300 transition-colors duration-300">
                    {stat.label}
                  </h3>
                  
                  <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                    {stat.description}
                  </p>
                </div>
                
                {/* Quantum Energy Ring */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-violet-500/20 via-emerald-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
              </div>
              
              {/* Cosmic Reflection */}
              <div className="absolute -bottom-2 left-4 right-4 h-8 bg-gradient-to-r from-violet-500/10 via-emerald-500/10 to-pink-500/10 rounded-full blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-500"></div>
            </motion.div>
          ))}
        </div>
        
        {/* Bottom Quantum Elements */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center space-x-4 px-6 py-3 rounded-full bg-gradient-to-r from-violet-900/30 via-emerald-900/20 to-pink-900/30 backdrop-blur-sm border border-violet-500/20">
            <div className="w-2 h-2 bg-violet-400 rounded-full animate-pulse"></div>
            <span className="text-gray-300 text-sm font-medium">Quantum-Powered Analytics</span>
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
            <span className="text-gray-300 text-sm font-medium">Real-Time Aurora Monitoring</span>
            <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}