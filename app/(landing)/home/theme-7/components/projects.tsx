"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { projectsSectionCopy } from "../copy";
import Image from "next/image";

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("ALL");
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  // Filter projects based on active category
  const filteredProjects = activeCategory === "ALL"
    ? projectsSectionCopy.projects
    : projectsSectionCopy.projects.filter(
        (project) => project.category === activeCategory
      );

  // Circuit board background pattern
  const CircuitPattern = () => {
    return (
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="circuit"
              width="100"
              height="100"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M100 0 L100 100 L0 100"
                fill="none"
                stroke="#06b6d4"
                strokeWidth="0.5"
              />
              <circle cx="100" cy="0" r="2" fill="#06b6d4" />
              <circle cx="100" cy="100" r="2" fill="#06b6d4" />
              <circle cx="0" cy="100" r="2" fill="#06b6d4" />
              <path
                d="M50 0 L50 50 L100 50"
                fill="none"
                stroke="#06b6d4"
                strokeWidth="0.5"
              />
              <circle cx="50" cy="0" r="2" fill="#06b6d4" />
              <circle cx="50" cy="50" r="2" fill="#06b6d4" />
              <circle cx="100" cy="50" r="2" fill="#06b6d4" />
              <path
                d="M0 50 L50 50"
                fill="none"
                stroke="#06b6d4"
                strokeWidth="0.5"
              />
              <circle cx="0" cy="50" r="2" fill="#06b6d4" />
              <path
                d="M50 50 L50 100"
                fill="none"
                stroke="#06b6d4"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit)" />
        </svg>
      </div>
    );
  };

  return (
    <section id="projects" className="relative py-24 bg-gray-900 overflow-hidden">
      {/* Background elements */}
      <CircuitPattern />
      
      {/* Glowing accent elements */}
      <motion.div
        className="absolute top-1/3 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full filter blur-[100px]"
        animate={{
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full filter blur-[100px]"
        animate={{
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{ duration: 8, repeat: Infinity, delay: 4 }}
      />

      <div className="container mx-auto px-4" ref={containerRef}>
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-6 tracking-tight"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
              {projectsSectionCopy.heading}
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-gray-300 text-lg"
          >
            {projectsSectionCopy.description}
          </motion.p>
        </div>

        {/* Category filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {projectsSectionCopy.categories.map((category, index) => (
            <motion.button
              key={index}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-md font-medium text-sm relative overflow-hidden ${
                activeCategory === category
                  ? "text-white"
                  : "text-gray-400 hover:text-white"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Button background */}
              {activeCategory === category ? (
                <motion.div
                  layoutId="categoryBackground"
                  className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-md"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              ) : (
                <div className="absolute inset-0 bg-gray-800/50 rounded-md" />
              )}
              
              {/* Button text */}
              <span className="relative z-10">{category}</span>
              
              {/* Active category indicator */}
              {activeCategory === category && (
                <>
                  <motion.span
                    className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 h-0.5 bg-white"
                    layoutId="categoryIndicator"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                  <motion.span
                    className="absolute inset-0 bg-cyan-500/20"
                    animate={{
                      opacity: [0.2, 0.4, 0.2],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </>
              )}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects grid with isometric hover effect */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="group relative"
              >
                {/* Project card with 3D transform effect */}
                <motion.div
                  whileHover={{
                    rotateY: -10,
                    rotateX: 5,
                    z: 20,
                    scale: 1.02,
                  }}
                  transition={{ duration: 0.3 }}
                  className="relative overflow-hidden rounded-lg aspect-[4/3] transform perspective-1000"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  {/* Project image */}
                  <div className="absolute inset-0">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
                  
                  {/* Digital overlay effects */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {/* Scan line effect */}
                    <motion.div
                      className="absolute inset-x-0 h-[2px] bg-cyan-500/50"
                      animate={{
                        top: ["0%", "100%"],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    />
                    
                    {/* Grid overlay */}
                    <div className="absolute inset-0 grid grid-cols-6 grid-rows-6 opacity-30">
                      {[...Array(36)].map((_, i) => (
                        <div key={i} className="border border-cyan-500/20" />
                      ))}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-end transform transition-transform duration-300 group-hover:translate-y-0">
                    {/* Category badge */}
                    <div className="mb-2">
                      <span className="inline-block py-1 px-3 text-xs font-mono tracking-wide bg-cyan-500/20 text-cyan-300 rounded-full border border-cyan-500/30">
                        {project.category}
                      </span>
                    </div>
                    
                    {/* Project title */}
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                      {project.title}
                    </h3>
                    
                    {/* Location */}
                    <p className="text-gray-300 text-sm mb-4 flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 mr-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      {project.location}
                    </p>
                    
                    {/* View details button */}
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="py-2 px-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-medium rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                      {projectsSectionCopy.viewDetailsText}
                    </motion.button>
                  </div>
                  
                  {/* Corner accents that appear on hover */}
                  <div className="absolute top-0 left-0 w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute top-0 left-0 w-full h-[2px] bg-cyan-400" />
                    <div className="absolute top-0 left-0 w-[2px] h-full bg-cyan-400" />
                  </div>
                  <div className="absolute top-0 right-0 w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute top-0 right-0 w-full h-[2px] bg-cyan-400" />
                    <div className="absolute top-0 right-0 w-[2px] h-full bg-cyan-400" />
                  </div>
                  <div className="absolute bottom-0 left-0 w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 w-full h-[2px] bg-cyan-400" />
                    <div className="absolute bottom-0 left-0 w-[2px] h-full bg-cyan-400" />
                  </div>
                  <div className="absolute bottom-0 right-0 w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 right-0 w-full h-[2px] bg-cyan-400" />
                    <div className="absolute bottom-0 right-0 w-[2px] h-full bg-cyan-400" />
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* View all projects button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 15px rgba(6, 182, 212, 0.3)",
            }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-md relative overflow-hidden group"
          >
            <span className="relative z-10">{projectsSectionCopy.viewMoreText}</span>
            <motion.span
              className="absolute inset-0 opacity-0 group-hover:opacity-30"
              animate={{
                background: [
                  "radial-gradient(circle at 20% 50%, rgba(6, 182, 212, 0.5) 0%, transparent 50%)",
                  "radial-gradient(circle at 80% 50%, rgba(6, 182, 212, 0.5) 0%, transparent 50%)",
                  "radial-gradient(circle at 20% 50%, rgba(6, 182, 212, 0.5) 0%, transparent 50%)",
                ],
              }}
              transition={{ duration: 4, repeat: Infinity }}
            />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
