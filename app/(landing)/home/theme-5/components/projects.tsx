"use client";

import { projectsSectionCopy } from "../copy";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useRef } from "react";

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const containerRef = useRef(null);
  
  const filteredProjects = activeCategory === "ALL"
    ? projectsSectionCopy.projects
    : projectsSectionCopy.projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background with Gradient */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-purple-50 to-white"></div>
        
        {/* Curved Shape at Top */}
        <div className="absolute top-0 left-0 right-0 text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            className="w-full h-auto transform rotate-180"
            preserveAspectRatio="none"
          >
            <path
              fill="currentColor"
              fillOpacity="1"
              d="M0,224L80,213.3C160,203,320,181,480,186.7C640,192,800,224,960,224C1120,224,1280,192,1360,176L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
            ></path>
          </svg>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="inline-block mb-4"
          >
            <div className="h-0.5 w-12 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto"></div>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">
              {projectsSectionCopy.heading}
            </span>
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

        {/* Category Filters - Pill Buttons with Gradient Borders */}
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
              className={`relative px-6 py-2 rounded-full transition-all duration-300 ${
                activeCategory === category
                  ? "text-white"
                  : "text-gray-700 hover:text-purple-600"
              }`}
            >
              {/* Background for Active State */}
              {activeCategory === category && (
                <motion.span
                  layoutId="activeCategory"
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 to-pink-500"
                  initial={false}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              
              {/* Button Text */}
              <span className="relative z-10">{category}</span>
            </button>
          ))}
        </motion.div>

        {/* Projects Grid - Masonry Layout with Curved Cards */}
        <div ref={containerRef} className="relative">
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={index}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className="group relative"
                onMouseEnter={() => setHoveredProject(index)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                {/* Project Card with Glassmorphism */}
                <div className="relative rounded-3xl overflow-hidden shadow-xl h-[400px]">
                  {/* Project Image */}
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/90 via-purple-800/50 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300"></div>
                  
                  {/* Content Container */}
                  <div className="absolute inset-0 p-8 flex flex-col justify-end">
                    {/* Category Tag */}
                    <div className="mb-3">
                      <span className="inline-block px-3 py-1 text-xs bg-white/20 backdrop-blur-sm rounded-full text-white">
                        {project.category}
                      </span>
                    </div>
                    
                    {/* Project Title */}
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {project.title}
                    </h3>
                    
                    {/* Location */}
                    <div className="flex items-center text-white/80 text-sm mb-4">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span>{project.location}</span>
                    </div>
                    
                    {/* View Details Button - Appears on Hover */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ 
                        opacity: hoveredProject === index ? 1 : 0,
                        y: hoveredProject === index ? 0 : 20
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <button className="px-5 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-medium hover:bg-white/30 transition-colors duration-300 flex items-center">
                        <span>{projectsSectionCopy.viewDetailsText}</span>
                        <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </button>
                    </motion.div>
                  </div>
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-2/3 h-6 bg-white rounded-full shadow-lg"></div>
                
                {/* Floating Dot Decoration - Only Visible on Hover */}
                {hoveredProject === index && (
                  <>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-gradient-to-r from-purple-400 to-pink-400"
                    />
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                      className="absolute -bottom-2 -left-2 w-4 h-4 rounded-full bg-gradient-to-r from-purple-400 to-pink-400"
                    />
                  </>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
        
        {/* View All Projects Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <button className="group relative inline-flex items-center px-8 py-4 overflow-hidden rounded-full">
            {/* Gradient Border */}
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-purple-600 to-pink-500 opacity-70"></span>
            
            {/* Button Background */}
            <span className="absolute inset-[2px] bg-white rounded-full"></span>
            
            {/* Button Text */}
            <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500 font-medium flex items-center">
              <span>{projectsSectionCopy.viewMoreText}</span>
              <svg className="ml-2 w-5 h-5 text-pink-500 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
            
            {/* Hover Effect - Gradient Fill */}
            <span className="absolute inset-0 scale-0 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 transition-all duration-300 group-hover:scale-100"></span>
            
            {/* Hover Text Color Change */}
            <span className="absolute inset-0 flex items-center justify-center opacity-0 text-white font-medium transition-opacity duration-300 group-hover:opacity-100">
              <span>{projectsSectionCopy.viewMoreText}</span>
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
