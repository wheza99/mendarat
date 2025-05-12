"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";

export default function Projects() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  
  const [activeCategory, setActiveCategory] = useState("all");
  
  // Categories
  const categories = [
    { id: "all", name: "All Projects" },
    { id: "web", name: "Web Design" },
    { id: "app", name: "Applications" },
    { id: "branding", name: "Branding" },
  ];
  
  // Projects data
  const projects = [
    {
      title: "Nebula Dashboard",
      category: "web",
      image: "/images/projects/project1.jpg",
      description: "Interactive admin dashboard with cosmic visualization elements"
    },
    {
      title: "Stellar Mobile App",
      category: "app",
      image: "/images/projects/project2.jpg",
      description: "Cross-platform application with celestial navigation patterns"
    },
    {
      title: "Cosmic Brand Identity",
      category: "branding",
      image: "/images/projects/project3.jpg",
      description: "Complete brand system with astronomical visual language"
    },
    {
      title: "Orbital Analytics Platform",
      category: "web",
      image: "/images/projects/project4.jpg",
      description: "Data visualization system with interactive planetary charts"
    },
    {
      title: "Astral E-commerce",
      category: "web",
      image: "/images/projects/project5.jpg",
      description: "Space-themed shopping experience with constellation navigation"
    },
    {
      title: "Pulsar Messaging App",
      category: "app",
      image: "/images/projects/project6.jpg",
      description: "Real-time communication platform with cosmic animations"
    },
  ];
  
  // Filter projects based on active category
  const filteredProjects = activeCategory === "all" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section 
      ref={sectionRef}
      className="relative py-20 bg-gradient-to-b from-[#1F1147] to-[#1A0B2E]"
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] opacity-5">
          <div className="absolute inset-0 rounded-full border border-[#E5E4E2]"></div>
          <div className="absolute inset-[40px] rounded-full border border-[#E5E4E2]"></div>
          <div className="absolute inset-[80px] rounded-full border border-[#E5E4E2]"></div>
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
          <h2 className="text-3xl md:text-4xl font-bold text-[#E5E4E2] mb-4">Stellar Portfolio</h2>
          <p className="text-[#E5E4E2]/70 max-w-2xl mx-auto">
            Explore our universe of work spanning digital galaxies and creative dimensions.
          </p>
        </motion.div>
        
        {/* Filter categories */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-5 py-2 rounded-full text-sm transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-gradient-to-r from-[#9370DB] to-[#7B68EE] text-white"
                  : "bg-[#2A1B3D]/50 text-[#E5E4E2]/70 hover:text-[#E5E4E2] border border-[#E5E4E2]/10 hover:border-[#E5E4E2]/30"
              }`}
            >
              {category.name}
            </button>
          ))}
        </motion.div>
        
        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="group"
            >
              <div className="bg-[#2A1B3D]/50 backdrop-blur-sm border border-[#E5E4E2]/10 rounded-lg overflow-hidden h-full transition-all duration-500 hover:border-[#E5E4E2]/30">
                <div className="relative h-64 overflow-hidden">
                  {/* Placeholder for project image */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#9370DB]/20 to-[#1A0B2E] flex items-center justify-center">
                    <div className="w-16 h-16 relative">
                      <div className="absolute inset-0 rounded-full border border-[#E5E4E2]/30"></div>
                      <div className="absolute inset-[4px] rounded-full border border-[#E5E4E2]/20"></div>
                      <div className="absolute inset-[8px] rounded-full bg-[#9370DB]/20"></div>
                    </div>
                  </div>
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-[#1A0B2E]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 text-[#E5E4E2]">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mx-auto mb-3">
                        <circle cx="12" cy="12" r="10" />
                        <line x1="12" y1="8" x2="12" y2="16" />
                        <line x1="8" y1="12" x2="16" y2="12" />
                      </svg>
                      <span className="text-sm">View Project</span>
                    </div>
                  </div>
                  
                  {/* Scan line effect */}
                  <div className="absolute inset-0 overflow-hidden opacity-20">
                    <div className="h-[1px] w-full bg-[#E5E4E2] animate-scan"></div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-[#E5E4E2] mb-2 group-hover:text-[#9370DB] transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <div className="h-[1px] w-12 bg-gradient-to-r from-[#9370DB] to-transparent mb-3"></div>
                  
                  <p className="text-[#E5E4E2]/70 text-sm">
                    {project.description}
                  </p>
                  
                  <div className="mt-4">
                    <span className="inline-block px-3 py-1 text-xs rounded-full bg-[#1A0B2E]/50 text-[#E5E4E2]/70 border border-[#E5E4E2]/10">
                      {project.category === "web" ? "Web Design" : 
                       project.category === "app" ? "Application" : 
                       "Branding"}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* View all projects button */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <button className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-transparent border border-[#E5E4E2]/30 text-[#E5E4E2] hover:bg-[#E5E4E2]/10 transition-all duration-300">
            <span>Explore All Projects</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
