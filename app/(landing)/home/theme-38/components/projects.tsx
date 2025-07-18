"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { projectsSectionCopy } from "../copy";

export default function Projects() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  
  const [activeCategory, setActiveCategory] = useState("ALL");
  
  // Filter projects based on active category
  const filteredProjects = activeCategory === "ALL" 
    ? projectsSectionCopy.projects 
    : projectsSectionCopy.projects.filter(project => project.category === activeCategory);

  return (
    <section 
      ref={sectionRef}
      className="relative py-20 bg-gradient-to-b from-[#1F1147] to-[#1A0B2E]"
    >
      {/* Quantum field background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] opacity-5">
          <div className="absolute inset-0 rounded-full border border-[#E5E4E2]"></div>
          <div className="absolute inset-[40px] rounded-full border border-[#E5E4E2]"></div>
          <div className="absolute inset-[80px] rounded-full border border-[#E5E4E2]"></div>
          <div className="absolute inset-[120px] rounded-full border border-[#E5E4E2]"></div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-3">
            <div className="h-[1px] w-10 bg-gradient-to-r from-transparent via-[#E5E4E2] to-transparent"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#E5E4E2] mb-4">{projectsSectionCopy.heading}</h2>
          <p className="text-[#E5E4E2]/70 max-w-2xl mx-auto">
            {projectsSectionCopy.description}
          </p>
        </motion.div>
        
        {/* Category filters */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {projectsSectionCopy.categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                  : 'bg-white/10 text-[#E5E4E2]/70 hover:bg-white/20 hover:text-[#E5E4E2]'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>
        
        {/* Projects grid */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={`${project.title}-${activeCategory}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300"
            >
              {/* Project image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                
                {/* Quantum overlay effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              {/* Project content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-medium text-blue-400 bg-blue-400/20 px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-[#E5E4E2] mb-3 group-hover:text-blue-400 transition-colors duration-300">
                  {project.title}
                </h3>
                
                <Button 
                  variant="ghost" 
                  className="text-[#E5E4E2]/70 hover:text-[#E5E4E2] p-0 h-auto font-medium group-hover:text-blue-400 transition-colors duration-300"
                >
                  {projectsSectionCopy.viewDetailsText}
                  <svg className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Button>
              </div>
              
              {/* Quantum particles on hover */}
              <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute top-4 right-4 w-1 h-1 bg-blue-400 rounded-full animate-ping"></div>
                <div className="absolute bottom-4 left-4 w-1 h-1 bg-purple-400 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
                <div className="absolute top-1/2 left-1/2 w-0.5 h-0.5 bg-cyan-400 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* View more button */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <Button 
            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105"
          >
            {projectsSectionCopy.viewMoreText}
          </Button>
        </motion.div>
      </div>
    </section>
  );
}