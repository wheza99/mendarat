'use client';

import { motion } from 'framer-motion';
import { projectsSectionCopy } from '../copy';
import Image from 'next/image';
import { useState } from 'react';

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('SEMUA');
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const filteredProjects = activeCategory === 'SEMUA' 
    ? projectsSectionCopy.projects 
    : projectsSectionCopy.projects.filter(project => project.category === activeCategory);

  return (
    <section className="relative py-24 bg-gradient-to-b from-slate-900 to-black overflow-hidden">
      {/* Art Deco Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute border border-yellow-400/30"
              style={{
                width: `${20 + Math.random() * 30}px`,
                height: `${20 + Math.random() * 30}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                transform: `rotate(${Math.random() * 360}deg)`,
              }}
            >
              <div className="w-full h-full border border-yellow-400/20 transform rotate-45" />
            </div>
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
            className="text-5xl lg:text-6xl font-bold text-white mb-6 luxury-glow"
          >
            {projectsSectionCopy.heading}
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
              className={`relative px-6 py-3 font-bold tracking-wider uppercase transition-all duration-300 overflow-hidden ${
                activeCategory === category
                  ? 'text-black bg-gradient-to-r from-yellow-400 to-yellow-500 shadow-lg shadow-yellow-400/25'
                  : 'text-yellow-400 border border-yellow-400/50 hover:border-yellow-400 hover:bg-yellow-400/10'
              }`}
            >
              <span className="relative z-10">{category}</span>
              
              {/* Art Deco corner decorations */}
              <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-current opacity-50" />
              <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-current opacity-50" />
              <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-current opacity-50" />
              <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-current opacity-50" />
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
              key={`${project.title}-${activeCategory}`}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
              className="group relative bg-gradient-to-b from-slate-800/30 to-slate-900/30 backdrop-blur-sm border border-yellow-400/20 overflow-hidden transition-all duration-500 hover:border-yellow-400/50 hover:shadow-2xl hover:shadow-yellow-400/10"
            >
              {/* Art Deco frame */}
              <div className="absolute inset-0 z-10 pointer-events-none">
                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-yellow-400/50" />
                <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-yellow-400/50" />
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-yellow-400/50" />
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-yellow-400/50" />
              </div>
              
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4 px-3 py-1 bg-yellow-400/20 backdrop-blur-sm border border-yellow-400/30 text-yellow-400 text-xs font-bold tracking-wider uppercase">
                  {project.category}
                </div>
                
                {/* Hover overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredProject === index ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-yellow-400/20 flex items-center justify-center"
                >
                  <motion.button
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ 
                      scale: hoveredProject === index ? 1 : 0.8,
                      opacity: hoveredProject === index ? 1 : 0
                    }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                    className="px-6 py-3 bg-yellow-400 text-black font-bold tracking-wider uppercase hover:bg-yellow-300 transition-colors duration-300"
                  >
                    {projectsSectionCopy.viewDetailsText}
                  </motion.button>
                </motion.div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white group-hover:text-yellow-400 transition-colors duration-300">
                  {project.title}
                </h3>
              </div>
              
              {/* Golden shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-400/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
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
            className="group relative px-12 py-4 bg-transparent border-2 border-yellow-400 text-yellow-400 font-bold tracking-wider uppercase overflow-hidden transition-all duration-300 hover:text-black hover:shadow-2xl hover:shadow-yellow-400/25"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            <span className="relative z-10">{projectsSectionCopy.viewMoreText}</span>
            
            {/* Art Deco corner decorations */}
            <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-yellow-400" />
            <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-yellow-400" />
            <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-yellow-400" />
            <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-yellow-400" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}