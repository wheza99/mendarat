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
      <div className="container mx-auto px-6">
        
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-extralight text-stone-800 mb-4 tracking-tight">
            {projectsSectionCopy.heading}
          </h2>
          <div className="w-24 h-px bg-stone-300 mx-auto mb-6"></div>
          <p className="text-stone-600 text-lg font-light max-w-2xl mx-auto">
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
              className={`px-6 py-3 font-light text-sm tracking-wide transition-all duration-300 ${
                activeCategory === category
                  ? "bg-stone-800 text-white"
                  : "bg-stone-100 text-stone-600 hover:bg-stone-200"
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
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="bg-white border border-stone-100 overflow-hidden transition-all duration-500 group-hover:border-stone-200 group-hover:shadow-lg group-hover:-translate-y-1">
                
                {/* Project image */}
                <div className="relative overflow-hidden h-64 bg-stone-100">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6 }}
                    className="w-full h-full bg-gradient-to-br from-stone-200 to-stone-300 flex items-center justify-center"
                  >
                    <div className="text-stone-500 font-light text-lg">
                      {project.title.charAt(0)}
                    </div>
                  </motion.div>
                  
                  {/* Category badge */}
                  <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm text-stone-600 text-xs font-light tracking-wide">
                    {project.category}
                  </div>
                </div>

                {/* Project content */}
                <div className="p-6">
                  <h3 className="text-xl font-light text-stone-800 mb-3 tracking-wide">
                    {project.title}
                  </h3>
                  
                  <p className="text-stone-600 font-light text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-stone-50 text-stone-600 text-xs font-light tracking-wide"
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
                    className="flex items-center text-stone-700 font-light text-sm group-hover:text-stone-900 transition-colors duration-300"
                  >
                    <span className="mr-2">View Project</span>
                    <motion.div
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                      className="w-4 h-px bg-stone-400 group-hover:bg-stone-600 transition-colors duration-300"
                    />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom zen decoration */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="flex justify-center mt-20"
        >
          <div className="flex items-center space-x-4">
            <div className="w-8 h-px bg-stone-300"></div>
            <div className="w-2 h-2 bg-stone-400 rounded-full"></div>
            <div className="w-8 h-px bg-stone-300"></div>
          </div>
        </motion.div>

      </div>
    </section>
  );
} 