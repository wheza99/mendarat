'use client';

import { motion } from 'framer-motion';
import { clientsSectionCopy } from '../copy';

export default function Clients() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Quantum Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Aurora Energy Field */}
        <div className="absolute inset-0 opacity-25">
          <div 
            className="w-full h-full"
            style={{
              background: `
                radial-gradient(ellipse at center top, rgba(139, 92, 246, 0.4), transparent 60%),
                radial-gradient(ellipse at bottom left, rgba(34, 197, 94, 0.3), transparent 50%),
                radial-gradient(ellipse at bottom right, rgba(236, 72, 153, 0.2), transparent 70%)
              `
            }}
          />
        </div>
        
        {/* Cosmic Data Stream */}
        <div className="absolute inset-0 opacity-10">
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: `
                linear-gradient(45deg, rgba(139, 92, 246, 0.3) 1px, transparent 1px),
                linear-gradient(-45deg, rgba(34, 197, 94, 0.2) 1px, transparent 1px)
              `,
              backgroundSize: '40px 40px',
              animation: 'aurora-grid 20s linear infinite'
            }}
          />
        </div>
        
        {/* Floating Quantum Particles */}
        <div className="absolute top-16 left-16 w-3 h-3 bg-violet-400 rounded-full opacity-70 animate-aurora-float"></div>
        <div className="absolute top-32 right-20 w-4 h-4 bg-emerald-400 rounded-full opacity-60 animate-aurora-drift"></div>
        <div className="absolute bottom-20 left-24 w-2 h-2 bg-pink-400 rounded-full opacity-80 animate-aurora-spiral"></div>
        <div className="absolute bottom-32 right-16 w-5 h-5 bg-cyan-400 rounded-full opacity-50 animate-aurora-float"></div>
        
        {/* Quantum Data Streams */}
        <svg className="absolute inset-0 w-full h-full opacity-20" style={{ pointerEvents: 'none' }}>
          <defs>
            <linearGradient id="clientGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.7" />
              <stop offset="50%" stopColor="#22C55E" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#EC4899" stopOpacity="0.6" />
            </linearGradient>
            <linearGradient id="clientGradient2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.6" />
              <stop offset="50%" stopColor="#A855F7" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#10B981" stopOpacity="0.4" />
            </linearGradient>
          </defs>
          <path 
            d="M 0 150 Q 200 100 400 130 T 800 140 Q 1000 110 1200 130 L 1200 300 L 0 300 Z"
            fill="url(#clientGradient1)" 
            className="animate-aurora-wave"
          />
          <path 
            d="M 0 250 Q 300 200 600 230 T 1200 250 L 1200 400 L 0 400 Z"
            fill="url(#clientGradient2)" 
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
            {clientsSectionCopy.heading}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {clientsSectionCopy.description}
          </p>
        </motion.div>

        {/* Animated Data Stream */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="h-px bg-gradient-to-r from-transparent via-violet-500 to-transparent relative">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-emerald-400 to-transparent animate-pulse"></div>
            <div className="absolute -top-1 left-1/2 w-2 h-2 bg-violet-400 rounded-full animate-ping"></div>
          </div>
        </motion.div>

        {/* Clients Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-16">
          {clientsSectionCopy.clients.map((client, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.1,
                rotateY: 10,
                transition: { duration: 0.3 }
              }}
              className="relative group cursor-pointer"
            >
              {/* Client Card */}
              <div className="relative p-6 rounded-xl bg-gradient-to-br from-indigo-900/40 via-purple-900/30 to-slate-900/50 backdrop-blur-sm border border-violet-500/20 hover:border-emerald-400/40 transition-all duration-500 overflow-hidden">
                {/* Aurora Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-violet-600/10 via-emerald-500/5 to-pink-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Quantum Particles */}
                <div className="absolute top-2 right-2 w-1 h-1 bg-violet-400 rounded-full opacity-60 animate-pulse"></div>
                <div className="absolute bottom-2 left-2 w-1 h-1 bg-emerald-400 rounded-full opacity-80 animate-ping"></div>
                
                {/* Content */}
                <div className="relative z-10 text-center">
                  {/* Client Logo */}
                  <motion.div
                    initial={{ scale: 0, rotate: -90 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    transition={{ 
                      duration: 0.5, 
                      delay: index * 0.1 + 0.3,
                      type: "spring",
                      stiffness: 200
                    }}
                    viewport={{ once: true }}
                    className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300"
                  >
                    {client.logo}
                  </motion.div>
                  
                  {/* Client Name */}
                  <h3 className="text-sm font-semibold text-white group-hover:text-emerald-300 transition-colors duration-300">
                    {client.name}
                  </h3>
                  
                  {/* Quantum Connection Status */}
                  <div className="mt-2 flex items-center justify-center space-x-1">
                    <div className="w-1 h-1 bg-emerald-400 rounded-full animate-pulse"></div>
                    <span className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors duration-300">Connected</span>
                  </div>
                </div>
                
                {/* Quantum Energy Ring */}
                <div className="absolute inset-0 rounded-xl border border-transparent bg-gradient-to-r from-violet-500/20 via-emerald-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
              </div>
              
              {/* Hover Tooltip */}
              <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-gradient-to-r from-violet-900 via-emerald-900 to-pink-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
                Quantum Partner
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-violet-900"></div>
              </div>
              
              {/* Cosmic Reflection */}
              <div className="absolute -bottom-1 left-2 right-2 h-4 bg-gradient-to-r from-violet-500/10 via-emerald-500/10 to-pink-500/10 rounded-full blur-lg opacity-0 group-hover:opacity-60 transition-opacity duration-500"></div>
            </motion.div>
          ))}
        </div>
        
        {/* Partnership Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
        >
          {[
            { number: "500+", label: "Cosmic Partners", description: "Across the galaxy" },
            { number: "99.9%", label: "Quantum Uptime", description: "Stellar reliability" },
            { number: "24/7", label: "Aurora Support", description: "Continuous monitoring" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.2 + 1,
                type: "spring",
                stiffness: 100
              }}
              viewport={{ once: true }}
              className="text-center p-6 rounded-xl bg-gradient-to-br from-indigo-900/20 via-purple-900/15 to-slate-900/25 backdrop-blur-sm border border-violet-500/10"
            >
              <div className="text-3xl font-bold mb-2 bg-gradient-to-r from-violet-400 via-emerald-400 to-pink-400 bg-clip-text text-transparent">
                {stat.number}
              </div>
              <h3 className="text-lg font-semibold text-white mb-1">{stat.label}</h3>
              <p className="text-sm text-gray-400">{stat.description}</p>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Partnership CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="inline-flex items-center space-x-6 px-8 py-4 rounded-full bg-gradient-to-r from-violet-900/30 via-emerald-900/20 to-pink-900/30 backdrop-blur-sm border border-violet-500/20">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-violet-400 rounded-full animate-pulse"></div>
              <span className="text-gray-300 text-sm font-medium">Quantum Partnerships</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
              <span className="text-gray-300 text-sm font-medium">Aurora Collaboration</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse"></div>
              <span className="text-gray-300 text-sm font-medium">Cosmic Success</span>
            </div>
          </div>
          
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            viewport={{ once: true }}
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 0 30px rgba(139, 92, 246, 0.5)"
            }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 px-8 py-4 bg-gradient-to-r from-violet-600 via-emerald-600 to-pink-600 text-white font-semibold rounded-full hover:from-violet-500 hover:via-emerald-500 hover:to-pink-500 transition-all duration-300 shadow-lg hover:shadow-violet-500/25"
          >
            Join Our Cosmic Network
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}