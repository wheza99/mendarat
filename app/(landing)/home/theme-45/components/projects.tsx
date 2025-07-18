'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { projectsSectionCopy } from '../copy';

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('SEMUA');

  const filteredProjects = activeCategory === 'SEMUA' 
    ? projectsSectionCopy.projects 
    : projectsSectionCopy.projects.filter(project => project.category === activeCategory);

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Bio Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* DNA Helix Background */}
        <div className="absolute inset-0">
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                left: `${25 * i}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                rotateY: [0, 360],
                rotateX: [0, 180]
              }}
              transition={{
                duration: 15 + Math.random() * 5,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              <div className="w-1 h-64 bg-gradient-to-b from-emerald-400/30 via-transparent to-green-400/30" />
              <div className="w-1 h-64 bg-gradient-to-t from-teal-400/30 via-transparent to-emerald-400/30 absolute top-0 left-4 transform rotate-45" />
            </motion.div>
          ))}
        </div>
        
        {/* Bio Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-br from-emerald-300/60 to-green-400/60"
            style={{
              width: `${2 + Math.random() * 4}px`,
              height: `${2 + Math.random() * 4}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-100, window.innerHeight + 100],
              x: [0, Math.random() * 100 - 50],
              opacity: [0, 0.8, 0]
            }}
            transition={{
              duration: 10 + Math.random() * 5,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 5
            }}
          />
        ))}
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
            className="text-5xl lg:text-6xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-emerald-300 via-green-200 to-teal-300 bg-clip-text text-transparent">
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
          className="flex flex-wrap justify-center gap-4 mb-12"
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
              className={`group relative px-6 py-3 rounded-lg font-semibold transition-all duration-300 overflow-hidden ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-emerald-600 to-green-600 text-white shadow-lg shadow-emerald-500/25'
                  : 'bg-gradient-to-r from-emerald-900/30 to-green-900/30 text-gray-300 hover:text-white border border-emerald-400/30 hover:border-emerald-400/60'
              }`}
            >
              {/* Bio Pulse Effect */}
              <div className={`absolute inset-0 bg-gradient-to-r from-emerald-400 to-green-400 transition-opacity duration-300 ${
                activeCategory === category ? 'opacity-20' : 'opacity-0 group-hover:opacity-10'
              }`} />
              
              {/* Neural Network Effect */}
              <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-20 transition-opacity duration-300">
                <svg className="w-full h-full" viewBox="0 0 120 40">
                  {[...Array(3)].map((_, i) => {
                    const x1 = Math.random() * 120;
                    const y1 = Math.random() * 40;
                    const x2 = Math.random() * 120;
                    const y2 = Math.random() * 40;
                    return (
                      <line
                        key={i}
                        x1={x1}
                        y1={y1}
                        x2={x2}
                        y2={y2}
                        stroke={activeCategory === category ? "#ffffff" : "#10B981"}
                        strokeWidth="1"
                        opacity="0.6"
                      />
                    );
                  })}
                </svg>
              </div>
              
              <span className="relative z-10">{category}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              {/* Bio Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/20 to-green-400/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative bg-gradient-to-br from-emerald-900/30 to-green-900/30 backdrop-blur-sm border border-emerald-400/30 rounded-2xl overflow-hidden transition-all duration-500 group-hover:border-emerald-400/60">
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* Bio Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/80 via-emerald-900/20 to-transparent" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 px-3 py-1 bg-gradient-to-r from-emerald-600/80 to-green-600/80 backdrop-blur-sm rounded-full text-xs font-semibold text-white">
                    {project.category}
                  </div>
                  
                  {/* Bio Particles */}
                  <div className="absolute inset-0">
                    {[...Array(10)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-emerald-400 rounded-full opacity-0 group-hover:opacity-80"
                        style={{
                          left: `${Math.random() * 100}%`,
                          top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                          y: [-15, 15, -15],
                          opacity: [0.3, 0.8, 0.3],
                          scale: [0.5, 1.2, 0.5]
                        }}
                        transition={{
                          duration: 3 + Math.random(),
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: Math.random() * 2
                        }}
                      />
                    ))}
                  </div>
                  
                  {/* Neural Network Overlay */}
                  <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-30 transition-opacity duration-500">
                    <svg className="w-full h-full" viewBox="0 0 300 250">
                      {[...Array(8)].map((_, i) => {
                        const x1 = Math.random() * 300;
                        const y1 = Math.random() * 250;
                        const x2 = Math.random() * 300;
                        const y2 = Math.random() * 250;
                        return (
                          <g key={i}>
                            <line
                              x1={x1}
                              y1={y1}
                              x2={x2}
                              y2={y2}
                              stroke="#10B981"
                              strokeWidth="1"
                              opacity="0.6"
                            />
                            <circle
                              cx={x1}
                              cy={y1}
                              r="2"
                              fill="#14B8A6"
                            />
                          </g>
                        );
                      })}
                    </svg>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-300 transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-emerald-400 hover:text-emerald-300 font-semibold transition-colors duration-300"
                  >
                    {projectsSectionCopy.viewDetailsText} →
                  </motion.button>
                </div>
                
                {/* Bio Border Animation */}
                <div className="absolute inset-0 border-2 border-emerald-400/0 group-hover:border-emerald-400/30 rounded-2xl transition-all duration-500" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-8 py-4 bg-gradient-to-r from-emerald-600 to-green-600 text-white font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/25"
          >
            {/* Bio Pulse Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-green-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
            
            {/* DNA Helix Effect */}
            <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-30 transition-opacity duration-300">
              <svg className="w-full h-full" viewBox="0 0 200 60">
                <path
                  d="M0,30 Q50,10 100,30 T200,30"
                  stroke="#ffffff"
                  strokeWidth="2"
                  fill="none"
                  opacity="0.5"
                />
                <path
                  d="M0,30 Q50,50 100,30 T200,30"
                  stroke="#ffffff"
                  strokeWidth="2"
                  fill="none"
                  opacity="0.5"
                />
              </svg>
            </div>
            
            <span className="relative z-10">{projectsSectionCopy.viewMoreText}</span>
            
            {/* Organic Border Animation */}
            <div className="absolute inset-0 border-2 border-emerald-400/0 group-hover:border-emerald-400/50 rounded-lg transition-all duration-300" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}