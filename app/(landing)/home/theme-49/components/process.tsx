'use client';

import { motion } from 'framer-motion';
import { processSectionCopy } from '../copy';

export default function Process() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Quantum Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Aurora Energy Field */}
        <div className="absolute inset-0 opacity-30">
          <div 
            className="w-full h-full"
            style={{
              background: `
                radial-gradient(ellipse at top center, rgba(139, 92, 246, 0.4), transparent 60%),
                radial-gradient(ellipse at bottom left, rgba(34, 197, 94, 0.3), transparent 50%),
                radial-gradient(ellipse at bottom right, rgba(236, 72, 153, 0.2), transparent 70%)
              `
            }}
          />
        </div>
        
        {/* Cosmic Process Flow */}
        <div className="absolute inset-0 opacity-15">
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: `
                linear-gradient(rgba(139, 92, 246, 0.4) 1px, transparent 1px),
                linear-gradient(90deg, rgba(34, 197, 94, 0.3) 1px, transparent 1px)
              `,
              backgroundSize: '150px 150px',
              animation: 'aurora-grid 45s linear infinite'
            }}
          />
        </div>
        
        {/* Floating Quantum Particles */}
        <div className="absolute top-20 left-20 w-4 h-4 bg-violet-400 rounded-full opacity-60 animate-aurora-float"></div>
        <div className="absolute top-40 right-24 w-3 h-3 bg-emerald-400 rounded-full opacity-70 animate-aurora-drift"></div>
        <div className="absolute bottom-24 left-28 w-5 h-5 bg-pink-400 rounded-full opacity-50 animate-aurora-spiral"></div>
        <div className="absolute bottom-40 right-20 w-2 h-2 bg-cyan-400 rounded-full opacity-80 animate-aurora-float"></div>
        
        {/* Quantum Process Streams */}
        <svg className="absolute inset-0 w-full h-full opacity-25" style={{ pointerEvents: 'none' }}>
          <defs>
            <linearGradient id="processGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.6" />
              <stop offset="50%" stopColor="#22C55E" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#EC4899" stopOpacity="0.5" />
            </linearGradient>
            <linearGradient id="processGradient2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.5" />
              <stop offset="50%" stopColor="#A855F7" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#10B981" stopOpacity="0.3" />
            </linearGradient>
          </defs>
          <path 
            d="M 0 180 Q 300 130 600 160 T 1200 180 L 1200 380 L 0 380 Z"
            fill="url(#processGradient1)" 
            className="animate-aurora-wave"
          />
          <path 
            d="M 0 280 Q 400 230 800 260 T 1200 280 L 1200 480 L 0 480 Z"
            fill="url(#processGradient2)" 
            className="animate-aurora-wave"
            style={{ animationDelay: '6s' }}
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
            {processSectionCopy.heading}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {processSectionCopy.description}
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Lines */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-violet-500/30 via-emerald-500/30 to-pink-500/30 transform -translate-y-1/2">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-violet-400/50 via-emerald-400/50 to-pink-400/50 animate-pulse"></div>
          </div>
          
          {/* Animated Connection Particles */}
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: '100%' }}
            transition={{ 
              duration: 8, 
              repeat: Infinity, 
              ease: "linear" 
            }}
            className="hidden lg:block absolute top-1/2 w-4 h-4 bg-violet-400 rounded-full transform -translate-y-1/2 opacity-60"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSectionCopy.steps.map((step, index) => (
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
                {/* Process Step Card */}
                <div className="relative p-8 rounded-2xl bg-gradient-to-br from-indigo-900/40 via-purple-900/30 to-slate-900/50 backdrop-blur-sm border border-violet-500/20 hover:border-emerald-400/40 transition-all duration-500 overflow-hidden">
                  {/* Aurora Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-violet-600/10 via-emerald-500/5 to-pink-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Quantum Particles */}
                  <div className="absolute top-4 right-4 w-2 h-2 bg-violet-400 rounded-full opacity-60 animate-pulse"></div>
                  <div className="absolute bottom-4 left-4 w-1 h-1 bg-emerald-400 rounded-full opacity-80 animate-ping"></div>
                  
                  {/* Content */}
                  <div className="relative z-10 text-center">
                    {/* Step Number */}
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      transition={{ 
                        duration: 0.6, 
                        delay: index * 0.2 + 0.3,
                        type: "spring",
                        stiffness: 200
                      }}
                      viewport={{ once: true }}
                      className="relative mb-6 mx-auto"
                    >
                      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-violet-600/30 via-emerald-600/30 to-pink-600/30 backdrop-blur-sm border-2 border-violet-400/40 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 mx-auto">
                        <span className="text-2xl font-bold bg-gradient-to-r from-violet-400 via-emerald-400 to-pink-400 bg-clip-text text-transparent">
                          {step.number}
                        </span>
                      </div>
                      
                      {/* Quantum Rings */}
                      <div className="absolute inset-0 rounded-full border-2 border-violet-400/20 animate-pulse"></div>
                      <div className="absolute inset-2 rounded-full border border-emerald-400/20 animate-pulse" style={{ animationDelay: '1s' }}></div>
                      
                      {/* Process Icon */}
                      <div className="absolute -top-2 -right-2 text-lg">
                        {index === 0 && '🔍'} {/* Discovery */}
                        {index === 1 && '🎨'} {/* Design */}
                        {index === 2 && '⚙️'} {/* Development */}
                        {index === 3 && '🚀'} {/* Launch */}
                      </div>
                    </motion.div>
                    
                    {/* Step Title */}
                    <h3 className="text-xl font-bold text-white mb-4 group-hover:text-emerald-300 transition-colors duration-300">
                      {step.title}
                    </h3>
                    
                    {/* Step Description */}
                    <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                      {step.description}
                    </p>
                    
                    {/* Quantum Status */}
                    <div className="mt-6 inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-violet-600/20 via-emerald-600/20 to-pink-600/20 backdrop-blur-sm border border-violet-400/30">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full mr-2 animate-pulse"></div>
                      <span className="text-xs text-gray-300 font-medium">Quantum Process</span>
                    </div>
                  </div>
                  
                  {/* Quantum Energy Ring */}
                  <div className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-violet-500/20 via-emerald-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
                  
                  {/* Cosmic Connection Lines */}
                  <div className="absolute top-0 left-1/2 w-px h-6 bg-gradient-to-b from-violet-400/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-0 left-1/2 w-px h-6 bg-gradient-to-t from-emerald-400/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Step Connection Arrow (Desktop) */}
                  {index < processSectionCopy.steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-8 transform -translate-y-1/2">
                      <motion.div
                        initial={{ scale: 0, rotate: -90 }}
                        whileInView={{ scale: 1, rotate: 0 }}
                        transition={{ 
                          duration: 0.5, 
                          delay: index * 0.2 + 0.8
                        }}
                        viewport={{ once: true }}
                        className="w-full h-full rounded-full bg-gradient-to-r from-violet-600/30 via-emerald-600/30 to-pink-600/30 backdrop-blur-sm border border-violet-400/30 flex items-center justify-center"
                      >
                        <span className="text-violet-400 text-sm">→</span>
                      </motion.div>
                    </div>
                  )}
                </div>
                
                {/* Cosmic Reflection */}
                <div className="absolute -bottom-2 left-4 right-4 h-8 bg-gradient-to-r from-violet-500/10 via-emerald-500/10 to-pink-500/10 rounded-full blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-500"></div>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Bottom Quantum Elements */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center space-x-6 px-8 py-4 rounded-full bg-gradient-to-r from-violet-900/30 via-emerald-900/20 to-pink-900/30 backdrop-blur-sm border border-violet-500/20">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-violet-400 rounded-full animate-pulse"></div>
              <span className="text-gray-300 text-sm font-medium">Quantum Methodology</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
              <span className="text-gray-300 text-sm font-medium">Aurora Innovation</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse"></div>
              <span className="text-gray-300 text-sm font-medium">Cosmic Results</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}