"use client";

import { projectsSectionCopy } from "../copy";
import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const filteredProjects = activeCategory === "ALL"
    ? projectsSectionCopy.projects
    : projectsSectionCopy.projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-32 bg-emerald-50 transform -skew-y-3" />
      <div className="absolute bottom-0 right-0 w-full h-32 bg-emerald-50 transform skew-y-3" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "4rem" }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="h-1 bg-emerald-500 mx-auto mb-6"
          />
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            {projectsSectionCopy.heading}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-lg text-gray-600"
          >
            {projectsSectionCopy.description}
          </motion.p>
        </div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {projectsSectionCopy.categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-emerald-900 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid - Asymmetrical Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`group relative ${
                index % 5 === 0 ? "md:col-span-2 md:row-span-2" : ""
              }`}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className={`relative overflow-hidden ${
                index % 5 === 0 ? "h-[600px]" : "h-[350px]"
              }`}>
                {/* Project Image */}
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/90 via-emerald-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Project Info */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 text-white transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="mb-3">
                    <span className="inline-block px-3 py-1 text-xs bg-white/20 backdrop-blur-sm rounded-full mb-2">
                      {project.category}
                    </span>
                    <h3 className="text-xl md:text-2xl font-bold">{project.title}</h3>
                  </div>
                  
                  <div className="flex items-center">
                    <a 
                      href="#" 
                      className="inline-flex items-center text-sm font-medium text-white hover:text-emerald-300 transition-colors duration-300"
                    >
                      <span>{projectsSectionCopy.viewDetailsText}</span>
                      <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </a>
                  </div>
                </div>
                
                {/* Decorative Elements */}
                <motion.div 
                  className="absolute top-4 left-4 w-12 h-12 border border-white/30"
                  animate={{
                    rotate: hoveredProject === index ? 45 : 0,
                    opacity: hoveredProject === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.5 }}
                />
                <motion.div 
                  className="absolute bottom-4 right-4 w-12 h-12 border border-white/30"
                  animate={{
                    rotate: hoveredProject === index ? 45 : 0,
                    opacity: hoveredProject === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a 
            href="#" 
            className="group relative inline-flex items-center px-8 py-4 bg-emerald-900 text-white font-medium overflow-hidden"
          >
            <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-emerald-700 rounded-full group-hover:w-80 group-hover:h-80"></span>
            <span className="relative flex items-center">
              {projectsSectionCopy.viewMoreText}
              <svg className="ml-3 w-5 h-5 transition-transform duration-300 group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
