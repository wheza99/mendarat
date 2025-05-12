"use client";

import { useState } from "react";
import { projectsSectionCopy } from "../copy";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("ALL");
  
  const filteredProjects = activeCategory === "ALL" 
    ? projectsSectionCopy.projects 
    : projectsSectionCopy.projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="relative py-24 bg-black overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/10 to-black"></div>
      
      {/* Grid overlay */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{ 
          backgroundImage: "linear-gradient(0deg, transparent 24%, rgba(255, 255, 255, .05) 25%, rgba(255, 255, 255, .05) 26%, transparent 27%, transparent 74%, rgba(255, 255, 255, .05) 75%, rgba(255, 255, 255, .05) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(255, 255, 255, .05) 25%, rgba(255, 255, 255, .05) 26%, transparent 27%, transparent 74%, rgba(255, 255, 255, .05) 75%, rgba(255, 255, 255, .05) 76%, transparent 77%, transparent)",
          backgroundSize: "50px 50px"
        }}
      />
      
      {/* Horizontal neon line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-pink-500 to-transparent opacity-70"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-pink-500">
            {projectsSectionCopy.heading}
          </h2>
          <p className="text-blue-100 opacity-90 max-w-2xl mx-auto">
            {projectsSectionCopy.description}
          </p>
        </motion.div>

        {/* Category filters */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {projectsSectionCopy.categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full font-medium text-sm transition-all duration-300 ${
                activeCategory === category
                  ? "bg-gradient-to-r from-pink-600 to-blue-600 text-white shadow-[0_0_15px_rgba(219,39,119,0.5)]"
                  : "bg-gray-900 text-gray-400 hover:text-white border border-gray-800 hover:border-pink-500/50"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
              >
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-pink-600/20 to-blue-600/20 rounded-lg transform group-hover:scale-[1.03] transition-all duration-300 -m-1 blur-sm"></div>
                
                <div className="relative overflow-hidden rounded-lg border border-pink-500/30 bg-black/50 backdrop-blur-sm group-hover:border-pink-500/60 transition-all duration-300">
                  {/* Project image */}
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={600}
                      height={400}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                    />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-70 group-hover:opacity-80 transition-opacity duration-300"></div>
                    
                    {/* VHS tracking lines effect */}
                    <div className="absolute inset-0 bg-scanlines opacity-20"></div>
                    
                    {/* Category badge */}
                    <div className="absolute top-4 right-4 px-3 py-1 bg-black/70 backdrop-blur-sm border border-pink-500/50 rounded-full text-xs font-medium text-pink-400">
                      {project.category}
                    </div>
                    
                    {/* Corner accents */}
                    <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-pink-500 opacity-80"></div>
                    <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-blue-500 opacity-80"></div>
                  </div>
                  
                  {/* Project info */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-blue-200 text-sm mb-4">{project.location}</p>
                    
                    {/* Horizontal line */}
                    <div className="h-px w-full bg-gradient-to-r from-pink-500/50 to-blue-500/50 mb-6"></div>
                    
                    <button className="inline-flex items-center text-pink-400 hover:text-pink-300 font-medium transition-colors duration-300">
                      {projectsSectionCopy.viewDetailsText}
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="h-4 w-4 ml-2" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* View more button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-16"
        >
          <button className="px-8 py-3 bg-transparent border-2 border-blue-500 text-blue-400 rounded-md hover:bg-blue-900/30 transition-all duration-300 font-bold tracking-wide shadow-[0_0_10px_rgba(59,130,246,0.3)] hover:shadow-[0_0_20px_rgba(59,130,246,0.5)]">
            {projectsSectionCopy.viewMoreText}
          </button>
        </motion.div>
      </div>
    </section>
  );
}
