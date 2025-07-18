'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { projectsSectionCopy } from '../copy';

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');
  
  const filteredProjects = activeCategory === 'All' 
    ? projectsSectionCopy.projects 
    : projectsSectionCopy.projects.filter(project => project.category === activeCategory);

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
                radial-gradient(ellipse at top right, rgba(139, 92, 246, 0.4), transparent 60%),
                radial-gradient(ellipse at bottom left, rgba(34, 197, 94, 0.3), transparent 50%),
                radial-gradient(ellipse at center, rgba(236, 72, 153, 0.2), transparent 70%)
              `
            }}
          />
        </div>
        
        {/* Cosmic Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: `
                linear-gradient(rgba(139, 92, 246, 0.5) 1px, transparent 1px),
                linear-gradient(90deg, rgba(34, 197, 94, 0.3) 1px, transparent 1px)
              `,
              backgroundSize: '100px 100px',
              animation: 'aurora-grid 35s linear infinite'
            }}
          />
        </div>
        
        {/* Floating Quantum Particles */}
        <div className="absolute top-20 left-32 w-3 h-3 bg-violet-400 rounded-full opacity-70 animate-aurora-float"></div>
        <div className="absolute top-40 right-24 w-4 h-4 bg-emerald-400 rounded-full opacity-60 animate-aurora-drift"></div>
        <div className="absolute bottom-32 left-20 w-2 h-2 bg-pink-400 rounded-full opacity-80 animate-aurora-spiral"></div>
        <div className="absolute bottom-40 right-32 w-5 h-5 bg-cyan-400 rounded-full opacity-50 animate-aurora-float"></div>
        
        {/* Quantum Energy Streams */}
        <svg className="absolute inset-0 w-full h-full opacity-20" style={{ pointerEvents: 'none' }}>
          <defs>
            <linearGradient id="projectGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.7" />
              <stop offset="50%" stopColor="#22C55E" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#EC4899" stopOpacity="0.6" />
            </linearGradient>
            <linearGradient id="projectGradient2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.6" />
              <stop offset="50%" stopColor="#A855F7" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#10B981" stopOpacity="0.4" />
            </linearGradient>
          </defs>
          <path 
            d="M 0 180 Q 250 130 500 160 T 1000 170 Q 1100 140 1200 160 L 1200 350 L 0 350 Z"
            fill="url(#projectGradient1)" 
            className="animate-aurora-wave"
          />
          <path 
            d="M 0 280 Q 350 230 700 260 T 1200 280 L 1200 450 L 0 450 Z"
            fill="url(#projectGradient2)" 
            className="animate-aurora-wave"
            style={{ animationDelay: '4s' }}
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
            {projectsSectionCopy.heading}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {projectsSectionCopy.description}
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {projectsSectionCopy.categories.map((category, index) => (
            <motion.button
              key={category}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: activeCategory === category 
                  ? "0 0 25px rgba(139, 92, 246, 0.6)" 
                  : "0 0 15px rgba(139, 92, 246, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-violet-600 via-emerald-600 to-pink-600 text-white shadow-lg shadow-violet-500/25'
                  : 'bg-gradient-to-r from-indigo-900/40 via-purple-900/30 to-slate-900/50 text-gray-300 border border-violet-500/20 hover:border-emerald-400/40 backdrop-blur-sm'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              layout
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -50, scale: 0.9 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                scale: 1.05,
                rotateY: 5,
                transition: { duration: 0.3 }
              }}
              className="relative group cursor-pointer"
            >
              {/* Project Card */}
              <div className="relative p-8 rounded-2xl bg-gradient-to-br from-indigo-900/40 via-purple-900/30 to-slate-900/50 backdrop-blur-sm border border-violet-500/20 hover:border-emerald-400/40 transition-all duration-500 overflow-hidden h-64">
                {/* Aurora Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-violet-600/10 via-emerald-500/5 to-pink-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Quantum Particles */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-violet-400 rounded-full opacity-60 animate-pulse"></div>
                <div className="absolute bottom-4 left-4 w-1 h-1 bg-emerald-400 rounded-full opacity-80 animate-ping"></div>
                
                {/* Project Icon/Visual */}
                <motion.div
                  initial={{ scale: 0, rotate: -90 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.1 + 0.3,
                    type: "spring",
                    stiffness: 200
                  }}
                  viewport={{ once: true }}
                  className="relative z-10 mb-6"
                >
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-violet-600/20 via-emerald-600/20 to-pink-600/20 backdrop-blur-sm border border-violet-400/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <div className="text-2xl">
                      {project.category === 'Computing' && '⚛️'}
                      {project.category === 'Analytics' && '🌌'}
                      {project.category === 'Energy' && '⚡'}
                      {project.category === 'Research' && '🔮'}
                    </div>
                  </div>
                </motion.div>
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Project Title */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-300 transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  {/* Project Category */}
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-violet-600/20 via-emerald-600/20 to-pink-600/20 backdrop-blur-sm border border-violet-400/30 mb-4">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full mr-2 animate-pulse"></div>
                    <span className="text-sm text-gray-300 font-medium">{project.category}</span>
                  </div>
                  
                  {/* Quantum Status Indicator */}
                  <div className="flex items-center space-x-2 text-sm text-gray-400">
                    <div className="w-1 h-1 bg-violet-400 rounded-full animate-ping"></div>
                    <span>Quantum Active</span>
                  </div>
                </div>
                
                {/* Quantum Energy Ring */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-violet-500/20 via-emerald-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
                
                {/* Cosmic Connection Lines */}
                <div className="absolute top-0 left-1/2 w-px h-6 bg-gradient-to-b from-violet-400/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-0 left-1/2 w-px h-6 bg-gradient-to-t from-emerald-400/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              
              {/* Cosmic Reflection */}
              <div className="absolute -bottom-2 left-4 right-4 h-8 bg-gradient-to-r from-violet-500/10 via-emerald-500/10 to-pink-500/10 rounded-full blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-500"></div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Bottom Quantum Elements */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center space-x-6 px-8 py-4 rounded-full bg-gradient-to-r from-violet-900/30 via-emerald-900/20 to-pink-900/30 backdrop-blur-sm border border-violet-500/20">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-violet-400 rounded-full animate-pulse"></div>
              <span className="text-gray-300 text-sm font-medium">Quantum Projects</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
              <span className="text-gray-300 text-sm font-medium">Aurora Innovation</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse"></div>
              <span className="text-gray-300 text-sm font-medium">Cosmic Scale</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}