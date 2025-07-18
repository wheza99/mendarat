'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { projectsSectionCopy } from '../copy';

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('ALL');
  
  const filteredProjects = activeCategory === 'ALL' 
    ? projectsSectionCopy.projects 
    : projectsSectionCopy.projects.filter(project => project.category === activeCategory);

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Cyber Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Digital Mesh */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 1000 1000">
            {[...Array(20)].map((_, i) => {
              const points = Array.from({ length: 6 }, () => `${Math.random() * 1000},${Math.random() * 1000}`).join(' ');
              return (
                <polygon
                  key={i}
                  points={points}
                  fill="none"
                  stroke="#22D3EE"
                  strokeWidth="1"
                  className="animate-pulse"
                  style={{
                    animationDelay: `${Math.random() * 3}s`,
                    animationDuration: `${4 + Math.random() * 2}s`
                  }}
                />
              );
            })}
          </svg>
        </div>
        
        {/* Cyber Nodes */}
        <div className="absolute inset-0">
          {[...Array(25)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `cyber-pulse ${3 + Math.random() * 2}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 2}s`
              }}
            />
          ))}
        </div>
        
        {/* Data Streams */}
        <div className="absolute inset-0">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent"
              style={{
                width: `${200 + Math.random() * 300}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `data-flow ${5 + Math.random() * 3}s linear infinite`,
                animationDelay: `${Math.random() * 3}s`
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
              {projectsSectionCopy.heading}
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed"
          >
            {projectsSectionCopy.description}
          </motion.p>
        </motion.div>
        
        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {projectsSectionCopy.categories.map((category, index) => (
            <motion.button
              key={category}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category)}
              className={`relative px-6 py-3 font-mono text-sm uppercase tracking-wider rounded-lg border transition-all duration-300 overflow-hidden group ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-cyan-600 to-blue-600 border-cyan-400 text-white'
                  : 'bg-transparent border-gray-600 text-gray-400 hover:border-cyan-400 hover:text-cyan-400'
              }`}
            >
              <span className="relative z-10">{category}</span>
              {activeCategory === category && (
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 animate-pulse" />
              )}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.button>
          ))}
        </motion.div>
        
        {/* Projects Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative"
            >
              {/* Cyber Project Card */}
              <div className="relative bg-gray-900/50 backdrop-blur-sm border border-cyan-400/30 rounded-xl overflow-hidden group-hover:border-purple-400/50 transition-all duration-300">
                {/* Holographic Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 via-transparent to-purple-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  {/* Digital Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
                  
                  {/* Scan Lines */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-50 transition-opacity duration-300">
                    {[...Array(15)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-full h-px bg-cyan-400/30"
                        style={{
                          top: `${i * 6.67}%`,
                          animation: `scan-line ${1.5 + Math.random() * 0.5}s ease-in-out infinite`,
                          animationDelay: `${Math.random() * 1}s`
                        }}
                      />
                    ))}
                  </div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 z-20">
                    <span className="px-3 py-1 bg-gradient-to-r from-cyan-600/80 to-blue-600/80 backdrop-blur-sm text-white text-xs font-mono uppercase tracking-wider rounded-full border border-cyan-400/50">
                      {project.category}
                    </span>
                  </div>
                  
                  {/* Cyber Corner Elements */}
                  <div className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-cyan-400/70 z-20" />
                  <div className="absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 border-cyan-400/70 z-20" />
                </div>
                
                {/* Project Content */}
                <div className="relative p-6 z-20">
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  {/* Cyber Action Button */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative px-6 py-2 bg-transparent border border-cyan-400/50 text-cyan-400 rounded-lg font-mono text-sm uppercase tracking-wider hover:bg-cyan-400/10 hover:border-cyan-400 transition-all duration-300 overflow-hidden group/btn"
                  >
                    <span className="relative z-10">{projectsSectionCopy.viewDetailsText}</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
                  </motion.button>
                </div>
                
                {/* Floating Cyber Elements */}
                <div className="absolute -top-2 -right-2 w-3 h-3 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-300" />
                <div className="absolute -bottom-2 -left-2 w-2 h-2 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 animate-bounce transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-12 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-purple-600 hover:to-pink-600 text-white font-bold rounded-lg transition-all duration-300 overflow-hidden"
          >
            <span className="relative z-10 font-mono uppercase tracking-wider">
              {projectsSectionCopy.viewMoreText}
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 animate-pulse" />
            
            {/* Cyber Glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400/30 to-blue-400/30 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.button>
        </motion.div>
      </div>
      
      {/* Custom Styles */}
      <style jsx>{`
        @keyframes cyber-pulse {
          0%, 100% {
            opacity: 0.5;
            transform: scale(1);
            box-shadow: 0 0 10px rgba(34, 211, 238, 0.5);
          }
          50% {
            opacity: 1;
            transform: scale(1.2);
            box-shadow: 0 0 20px rgba(168, 85, 247, 0.8);
          }
        }
        
        @keyframes data-flow {
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