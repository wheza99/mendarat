'use client';

import { motion } from 'framer-motion';
import { servicesSectionCopy } from '../copy';

export default function Services() {
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
                radial-gradient(ellipse at top left, rgba(139, 92, 246, 0.4), transparent 50%),
                radial-gradient(ellipse at bottom right, rgba(34, 197, 94, 0.3), transparent 60%),
                radial-gradient(ellipse at center, rgba(236, 72, 153, 0.2), transparent 70%)
              `
            }}
          />
        </div>
        
        {/* Cosmic Grid */}
        <div className="absolute inset-0 opacity-15">
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: `
                linear-gradient(rgba(139, 92, 246, 0.4) 1px, transparent 1px),
                linear-gradient(90deg, rgba(34, 197, 94, 0.3) 1px, transparent 1px)
              `,
              backgroundSize: '80px 80px',
              animation: 'aurora-grid 30s linear infinite'
            }}
          />
        </div>
        
        {/* Floating Quantum Elements */}
        <div className="absolute top-32 left-20 w-4 h-4 bg-violet-400 rounded-full opacity-60 animate-aurora-float"></div>
        <div className="absolute top-20 right-32 w-3 h-3 bg-emerald-400 rounded-full opacity-70 animate-aurora-drift"></div>
        <div className="absolute bottom-40 left-16 w-5 h-5 bg-pink-400 rounded-full opacity-50 animate-aurora-spiral"></div>
        <div className="absolute bottom-20 right-20 w-2 h-2 bg-cyan-400 rounded-full opacity-80 animate-aurora-float"></div>
        
        {/* Energy Waves */}
        <svg className="absolute inset-0 w-full h-full opacity-25" style={{ pointerEvents: 'none' }}>
          <defs>
            <linearGradient id="serviceGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.6" />
              <stop offset="50%" stopColor="#22C55E" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#EC4899" stopOpacity="0.5" />
            </linearGradient>
            <linearGradient id="serviceGradient2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.5" />
              <stop offset="50%" stopColor="#A855F7" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#10B981" stopOpacity="0.3" />
            </linearGradient>
          </defs>
          <path 
            d="M 0 150 Q 200 100 400 130 T 800 140 Q 1000 110 1200 130 L 1200 300 L 0 300 Z"
            fill="url(#serviceGradient1)" 
            className="animate-aurora-wave"
          />
          <path 
            d="M 0 250 Q 300 200 600 230 T 1200 250 L 1200 400 L 0 400 Z"
            fill="url(#serviceGradient2)" 
            className="animate-aurora-wave"
            style={{ animationDelay: '3s' }}
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
            {servicesSectionCopy.heading}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
            {servicesSectionCopy.description}
          </p>
          
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 0 30px rgba(139, 92, 246, 0.5)"
            }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-violet-600 via-emerald-600 to-pink-600 text-white font-semibold rounded-full hover:from-violet-500 hover:via-emerald-500 hover:to-pink-500 transition-all duration-300 shadow-lg hover:shadow-violet-500/25"
          >
            {servicesSectionCopy.primaryButton}
          </motion.button>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesSectionCopy.services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, rotateX: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.15,
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
              {/* Service Card */}
              <div className="relative p-8 rounded-2xl bg-gradient-to-br from-indigo-900/40 via-purple-900/30 to-slate-900/50 backdrop-blur-sm border border-violet-500/20 hover:border-emerald-400/40 transition-all duration-500 overflow-hidden h-full">
                {/* Aurora Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-violet-600/10 via-emerald-500/5 to-pink-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Quantum Particles */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-violet-400 rounded-full opacity-60 animate-pulse"></div>
                <div className="absolute bottom-4 left-4 w-1 h-1 bg-emerald-400 rounded-full opacity-80 animate-ping"></div>
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Service Icon */}
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    transition={{ 
                      duration: 0.6, 
                      delay: index * 0.15 + 0.3,
                      type: "spring",
                      stiffness: 200
                    }}
                    viewport={{ once: true }}
                    className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300"
                  >
                    {service.icon}
                  </motion.div>
                  
                  {/* Service Title */}
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-emerald-300 transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  {/* Service Description */}
                  <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                    {service.description}
                  </p>
                </div>
                
                {/* Quantum Energy Ring */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-violet-500/20 via-emerald-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
                
                {/* Cosmic Connection Lines */}
                <div className="absolute top-0 left-1/2 w-px h-4 bg-gradient-to-b from-violet-400/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-0 left-1/2 w-px h-4 bg-gradient-to-t from-emerald-400/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
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
          transition={{ duration: 1, delay: 1.2 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center space-x-6 px-8 py-4 rounded-full bg-gradient-to-r from-violet-900/30 via-emerald-900/20 to-pink-900/30 backdrop-blur-sm border border-violet-500/20">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-violet-400 rounded-full animate-pulse"></div>
              <span className="text-gray-300 text-sm font-medium">Quantum-Enhanced</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
              <span className="text-gray-300 text-sm font-medium">Aurora-Powered</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse"></div>
              <span className="text-gray-300 text-sm font-medium">Cosmic-Scale</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}