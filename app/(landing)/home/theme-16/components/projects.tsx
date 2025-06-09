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
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            {projectsSectionCopy.heading}
          </h2>
          <p className="text-slate-300 text-xl max-w-2xl mx-auto">
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
          {projectsSectionCopy.filterCategories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 font-semibold text-sm tracking-wide transition-all duration-300 rounded-lg ${
                activeCategory === category
                  ? "bg-gradient-to-r from-purple-600 to-cyan-600 text-white"
                  : "bg-slate-800 text-slate-300 border border-slate-600 hover:border-purple-400"
              }`}
            >
              {category}
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
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="bg-gradient-to-br from-slate-800/50 to-purple-900/50 backdrop-blur-sm border border-slate-600/50 rounded-xl overflow-hidden transition-all duration-500 group-hover:border-purple-400/50 group-hover:shadow-2xl group-hover:shadow-purple-500/20">
                
                {/* Project image placeholder */}
                <div className="relative overflow-hidden h-48 bg-gradient-to-br from-purple-900/30 to-cyan-900/30">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className="w-full h-full flex items-center justify-center relative"
                  >
                    <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                      {project.title.charAt(0)}
                    </div>
                  </motion.div>
                  
                  {/* Category badge */}
                  <div className="absolute top-4 left-4 px-3 py-1 bg-slate-800/80 backdrop-blur-sm border border-slate-600 text-slate-300 text-xs font-semibold tracking-wide rounded">
                    {project.category}
                  </div>
                </div>

                {/* Project content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3">
                    {project.title}
                  </h3>
                  
                  <p className="text-slate-300 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-slate-700/50 border border-slate-600 text-slate-300 text-xs rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
} 