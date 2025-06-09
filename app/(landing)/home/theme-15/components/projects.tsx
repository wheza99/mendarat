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
    <section className="py-24 bg-white">
      <div className="container mx-auto px-8">
        
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-extralight text-slate-800 mb-6 tracking-tight">
            {projectsSectionCopy.heading}
          </h2>
          <div className="w-16 h-px bg-blue-300 mx-auto mb-8"></div>
          <p className="text-slate-600 text-lg font-light max-w-2xl mx-auto">
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
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 font-light text-sm tracking-wide transition-all duration-300 border ${
                activeCategory === category
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-white text-slate-600 border-slate-200 hover:border-blue-300 hover:text-blue-600"
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
              <div className="bg-white border border-slate-200 overflow-hidden transition-all duration-500 group-hover:border-blue-300 group-hover:shadow-lg">
                
                {/* Project image placeholder */}
                <div className="relative overflow-hidden h-64 bg-gradient-to-br from-blue-50 to-slate-100">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6 }}
                    className="w-full h-full flex items-center justify-center relative"
                  >
                    <div className="text-6xl font-extralight text-blue-400 opacity-60">
                      {project.title.charAt(0)}
                    </div>
                  </motion.div>
                  
                  {/* Category badge */}
                  <div className="absolute top-4 left-4 px-3 py-1 bg-white border border-slate-200 text-slate-600 text-xs font-light tracking-wide">
                    {project.category}
                  </div>
                </div>

                {/* Project content */}
                <div className="p-8">
                  <h3 className="text-2xl font-light text-slate-800 mb-4 tracking-wide">
                    {project.title}
                  </h3>
                  
                  <p className="text-slate-600 font-light text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-slate-50 border border-slate-200 text-slate-600 text-xs font-light tracking-wide"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* View project link */}
                  <motion.div
                    className="flex items-center text-blue-600 font-light text-sm group-hover:text-blue-700 transition-colors duration-300"
                  >
                    <span className="mr-3">View Project</span>
                    <motion.div
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="w-4 h-px bg-blue-400"
                    />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
} 