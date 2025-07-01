"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { BusinessData } from "../../page";
import Image from "next/image";

interface ProjectsProps {
  data: BusinessData;
}

// Project card component
const ProjectCard = ({ project, index }: { project: any; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative group cursor-pointer"
    >
      {/* Glowing background on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative bg-gray-900/80 backdrop-blur-sm border border-cyan-500/30 rounded-xl overflow-hidden group-hover:border-cyan-400/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(6,182,212,0.2)]">
        {/* Project Image */}
        <div className="relative h-48 overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
          
          {/* Category Badge */}
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 bg-cyan-500/20 border border-cyan-500/30 text-cyan-400 text-xs font-mono rounded-full backdrop-blur-sm">
              {project.category}
            </span>
          </div>

          {/* View Project Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileHover={{ opacity: 1, y: 0 }}
            className="absolute bottom-4 right-4"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 bg-cyan-600/80 backdrop-blur-sm text-white font-mono text-xs rounded-md border border-cyan-400/30"
            >
              VIEW PROJECT
            </motion.button>
          </motion.div>
        </div>

        {/* Project Info */}
        <div className="p-6">
          <h3 className="text-xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
            {project.title}
          </h3>
          <p className="text-gray-400 text-sm mb-4">
            {project.description}
          </p>
          
          {/* Project Details */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
              <span className="text-gray-500 text-xs font-mono">{project.location}</span>
            </div>
            <div className="text-cyan-400 text-xs font-mono">
              {project.year || "2024"}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// Isometric grid background
const IsometricGrid = () => {
  return (
    <div className="absolute inset-0 opacity-5">
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern
            id="isometric"
            width="60"
            height="60"
            patternUnits="userSpaceOnUse"
            patternTransform="rotate(30)"
          >
            <path
              d="M0 30L30 0L60 30L30 60z"
              fill="none"
              stroke="#06b6d4"
              strokeWidth="0.5"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#isometric)" />
      </svg>
    </div>
  );
};

export default function Projects({ data }: ProjectsProps) {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState("ALL");

  // Default tech projects
  const defaultProjects = [
    {
      title: "NeoCity Dashboard",
      category: "INTERFACES",
      image: "https://images.unsplash.com/photo-1535223289827-42f1e9919769?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      location: "Global Deployment",
      description: "Advanced city management interface with real-time data visualization and predictive analytics.",
      year: "2024"
    },
    {
      title: "Quantum Finance Visualizer",
      category: "VISUALIZATION",
      image: "https://images.unsplash.com/photo-1543286386-713bdd548da4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      location: "New York, USA",
      description: "Revolutionary financial data visualization platform using quantum computing principles.",
      year: "2024"
    },
    {
      title: "Nexus VR Experience",
      category: "IMMERSIVE",
      image: "https://images.unsplash.com/photo-1626379953822-baec19c3accd?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      location: "Tokyo, Japan",
      description: "Immersive virtual reality platform for next-generation digital experiences.",
      year: "2024"
    },
    {
      title: "Urban Digital Twin",
      category: "DIGITAL TWINS",
      image: "https://images.unsplash.com/photo-1511447333015-45b65e60f6d5?q=80&w=2055&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      location: "Singapore",
      description: "Complete digital replica of urban infrastructure with IoT integration.",
      year: "2024"
    },
    {
      title: "Neural Network Visualizer",
      category: "VISUALIZATION",
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      location: "San Francisco, USA",
      description: "Advanced AI network visualization tool for machine learning optimization.",
      year: "2024"
    },
    {
      title: "Holographic Interface",
      category: "INTERFACES",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      location: "Seoul, South Korea",
      description: "Revolutionary holographic user interface for spatial computing applications.",
      year: "2024"
    }
  ];

  const categories = ["ALL", "INTERFACES", "VISUALIZATION", "IMMERSIVE", "DIGITAL TWINS"];

  // Filter projects based on active category
  const filteredProjects = activeCategory === "ALL" 
    ? defaultProjects 
    : defaultProjects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="relative py-24 bg-gray-900 overflow-hidden">
      {/* Isometric grid background */}
      <IsometricGrid />
      
      {/* Animated background elements */}
      <motion.div
        className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-600/10 rounded-full filter blur-[100px]"
        animate={{
          opacity: [0.1, 0.2, 0.1],
          scale: [1, 1.3, 1],
          y: [0, -50, 0],
        }}
        transition={{ duration: 15, repeat: Infinity }}
      />

      <div className="container mx-auto px-4" ref={containerRef}>
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-4"
          >
            <span className="text-cyan-400 font-mono tracking-widest text-sm">
              FEATURED PROJECTS
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold mb-6 tracking-tight"
          >
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
              DIGITAL
            </span>
            <span className="block text-white mt-1">
              PORTFOLIO
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-300 max-w-2xl mx-auto text-lg"
          >
            Explore our portfolio of cutting-edge digital experiences that showcase our commitment to innovation and futuristic design.
          </motion.p>
        </div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 font-mono text-sm rounded-md border transition-all duration-300 ${
                activeCategory === category
                  ? "bg-cyan-500/20 border-cyan-400 text-cyan-400 shadow-[0_0_10px_rgba(6,182,212,0.3)]"
                  : "bg-gray-900/50 border-cyan-500/30 text-gray-400 hover:border-cyan-400/50 hover:text-cyan-300"
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <ProjectCard project={project} index={index} />
            </motion.div>
          ))}
        </motion.div>

        {/* Business Announcement */}
        {data.metadata?.announcement && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center mb-12"
          >
            <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/30 rounded-xl p-8 backdrop-blur-sm">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse" />
                <span className="text-cyan-400 font-mono text-sm">SYSTEM ANNOUNCEMENT</span>
                <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse" />
              </div>
              <p className="text-gray-300 text-lg font-mono">
                {data.metadata.announcement}
              </p>
            </div>
          </motion.div>
        )}

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 20px rgba(139, 92, 246, 0.4)",
            }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-4 bg-transparent border-2 border-purple-500 text-purple-400 font-bold font-mono rounded-lg relative overflow-hidden group"
          >
            <span className="relative z-10">EXPLORE ALL PROJECTS</span>
            <motion.div
              className="absolute inset-0 bg-purple-500/10"
              initial={{ scale: 0, opacity: 0 }}
              whileHover={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4 }}
              style={{ transformOrigin: "center" }}
            />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
} 