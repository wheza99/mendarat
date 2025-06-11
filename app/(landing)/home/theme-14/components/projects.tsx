"use client";

import { motion, useInView } from "framer-motion";
import { projectsSectionCopy } from "../copy";
import { useRef, useState } from "react";

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [activeCategory, setActiveCategory] = useState("ALL.EXE");

  const filteredProjects = activeCategory === "ALL.EXE" 
    ? projectsSectionCopy.projects 
    : projectsSectionCopy.projects.filter(project => project.category === activeCategory);

  return (
    <section className="relative py-20 bg-black text-cyan-400">
      {/* Background grid */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDAsIDI1NSwgMjU1LCAwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20"></div>
      
      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-mono mb-6 text-white">
            {projectsSectionCopy.heading}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            {projectsSectionCopy.description}
          </p>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {projectsSectionCopy.categories.map((category, index) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`relative px-6 py-3 font-mono text-sm rounded-sm transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-cyan-400 text-black'
                  : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black'
              }`}
            >
              <span className="relative z-10">{category}</span>
              {activeCategory === category && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-cyan-400 rounded-sm"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </button>
          ))}
        </motion.div>

        {/* Projects grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              {/* Holographic frame */}
              <div className="absolute -inset-2 border border-cyan-400/30 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute -top-1 -left-1 w-6 h-6 border-l-2 border-t-2 border-cyan-400"></div>
                <div className="absolute -top-1 -right-1 w-6 h-6 border-r-2 border-t-2 border-cyan-400"></div>
                <div className="absolute -bottom-1 -left-1 w-6 h-6 border-l-2 border-b-2 border-cyan-400"></div>
                <div className="absolute -bottom-1 -right-1 w-6 h-6 border-r-2 border-b-2 border-cyan-400"></div>
              </div>

              {/* Project card */}
              <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-lg overflow-hidden group-hover:border-cyan-400/50 transition-all duration-300">
                {/* Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                  
                  {/* Category tag */}
                  <div className="absolute top-4 left-4 px-3 py-1 bg-cyan-400/20 backdrop-blur-sm border border-cyan-400/50 rounded text-cyan-400 text-xs font-mono">
                    {project.category}
                  </div>

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-cyan-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white font-mono mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <button className="text-cyan-400 font-mono text-sm hover:text-white transition-colors duration-300">
                    {projectsSectionCopy.viewDetailsText} →
                  </button>
                </div>

                {/* Scan line animation */}
                <motion.div
                  animate={{
                    x: ['-100%', '100%'],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.3,
                    ease: "linear"
                  }}
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 group-hover:opacity-60"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View more button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <button className="relative px-8 py-4 border border-cyan-400 text-cyan-400 font-mono text-lg rounded-sm overflow-hidden group transition-all duration-300 hover:text-black">
            <span className="relative z-10">{projectsSectionCopy.viewMoreText}</span>
            <div className="absolute inset-0 bg-cyan-400 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
          </button>
        </motion.div>
      </div>
    </section>
  );
}