"use client";

import { motion } from "framer-motion";
import { projectsSectionCopy } from "../copy";
import { useState } from "react";

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All" 
    ? projectsSectionCopy.projects 
    : projectsSectionCopy.projects.filter(project => project.category === activeCategory);

  return (
    <section className="py-24 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="container mx-auto px-8">
        
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-thin text-white mb-6 tracking-tight">
            {projectsSectionCopy.heading}
          </h2>
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent mx-auto mb-8"></div>
          <p className="text-slate-300 text-xl font-light max-w-2xl mx-auto">
            {projectsSectionCopy.subheading}
          </p>
        </motion.div>

        {/* Filter buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {projectsSectionCopy.filterCategories.map((category, index) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category)}
              className={`relative px-8 py-3 font-light text-sm tracking-wide transition-all duration-500 border ${
                activeCategory === category
                  ? "bg-gradient-to-r from-yellow-400 to-yellow-600 text-slate-900 border-yellow-400"
                  : "bg-transparent text-slate-300 border-yellow-400/30 hover:border-yellow-400/60 hover:text-white"
              }`}
            >
              <span className="relative z-10">{category}</span>
              {/* Art Deco corner accents */}
              <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-yellow-400 opacity-60"></div>
              <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-yellow-400 opacity-60"></div>
              <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-yellow-400 opacity-60"></div>
              <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-yellow-400 opacity-60"></div>
            </motion.button>
          ))}
        </motion.div>

        {/* Projects grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative bg-gradient-to-b from-slate-800 to-slate-900 border border-yellow-400/20 overflow-hidden transition-all duration-500 group-hover:border-yellow-400/40 group-hover:-translate-y-2 group-hover:shadow-2xl group-hover:shadow-yellow-400/10">
                
                {/* Art Deco frame corners */}
                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-yellow-400 opacity-60 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-yellow-400 opacity-60 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                
                {/* Project image placeholder */}
                <div className="relative overflow-hidden h-64 bg-gradient-to-br from-slate-700 to-slate-800">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className="w-full h-full flex items-center justify-center relative"
                  >
                    {/* Art Deco pattern overlay */}
                    <div className="absolute inset-0 opacity-20">
                      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                        <pattern id={`deco-${index}`} width="40" height="40" patternUnits="userSpaceOnUse">
                          <path d="M20 0L40 20L20 40L0 20Z" fill="#d4af37" opacity="0.3" />
                        </pattern>
                        <rect width="100%" height="100%" fill={`url(#deco-${index})`} />
                      </svg>
                    </div>
                    
                    <div className="relative z-10 text-6xl font-thin text-yellow-400 opacity-80">
                      {project.title.charAt(0)}
                    </div>
                  </motion.div>
                  
                  {/* Category badge */}
                  <div className="absolute top-4 right-4 px-4 py-2 bg-slate-900/90 backdrop-blur-sm border border-yellow-400/30 text-yellow-400 text-xs font-light tracking-wide">
                    {project.category}
                  </div>
                </div>

                {/* Project content */}
                <div className="p-6">
                  <h3 className="text-2xl font-light text-white mb-3 tracking-wide">
                    {project.title}
                  </h3>
                  
                  <p className="text-slate-300 font-light text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-slate-800 border border-yellow-400/20 text-yellow-400 text-xs font-light tracking-wide"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* View project link */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="flex items-center text-yellow-400 font-light text-sm group-hover:text-yellow-300 transition-colors duration-300"
                  >
                    <span className="mr-3">View Masterpiece</span>
                    <motion.div
                      animate={{ x: [0, 6, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="w-6 h-px bg-gradient-to-r from-yellow-400 to-yellow-600"
                    />
                  </motion.div>
                </div>

                {/* Bottom decorative border */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Art Deco ornament */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="flex justify-center mt-20"
        >
          <svg width="160" height="50" viewBox="0 0 160 50" className="text-yellow-400">
            <path d="M80 10 L100 25 L80 40 L60 25 Z" fill="currentColor" opacity="0.4" />
            <path d="M80 15 L90 25 L80 35 L70 25 Z" fill="currentColor" opacity="0.6" />
            <circle cx="80" cy="25" r="3" fill="currentColor" opacity="0.8" />
            <path d="M30 25 L55 25" stroke="currentColor" strokeWidth="1" opacity="0.4" />
            <path d="M105 25 L130 25" stroke="currentColor" strokeWidth="1" opacity="0.4" />
            <path d="M20 25 L25 25" stroke="currentColor" strokeWidth="2" opacity="0.6" />
            <path d="M135 25 L140 25" stroke="currentColor" strokeWidth="2" opacity="0.6" />
          </svg>
        </motion.div>

      </div>
    </section>
  );
} 