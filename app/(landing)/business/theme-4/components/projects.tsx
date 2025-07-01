"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BusinessData } from "../../page";

interface ProjectsProps {
  businessData: BusinessData;
}

export default function Projects({ businessData }: ProjectsProps) {
  const [activeCategory, setActiveCategory] = useState("ALL");

  // Generate projects based on business data
  const projects = [
    {
      id: 1,
      title: `${businessData.name} Brand Identity`,
      category: "BUSINESS",
      image: businessData.img || "/api/placeholder/400/300",
      description: "Complete brand identity and visual system design",
      tags: ["Branding", "Identity", "Visual Design"],
      status: "Completed"
    },
    {
      id: 2,
      title: "Digital Platform",
      category: "DIGITAL",
      image: businessData.metadata?.banner || "/api/placeholder/400/300",
      description: "Modern digital platform with seamless user experience",
      tags: ["Web Design", "Digital", "Platform"],
      status: "In Progress"
    },
    {
      id: 3,
      title: "Business Consulting",
      category: "CONSULTING",
      image: businessData.img || "/api/placeholder/400/300",
      description: "Strategic business consulting and growth planning",
      tags: ["Strategy", "Consulting", "Growth"],
      status: "Completed"
    },
    {
      id: 4,
      title: "Custom Solutions",
      category: "SOLUTIONS",
      image: businessData.metadata?.background || "/api/placeholder/400/300",
      description: "Tailored solutions for unique business requirements",
      tags: ["Custom", "Solutions", "Innovation"],
      status: "Planning"
    },
    {
      id: 5,
      title: `${businessData.selected_template} Implementation`,
      category: "DIGITAL",
      image: businessData.img || "/api/placeholder/400/300",
      description: "Professional template implementation and customization",
      tags: ["Template", "Implementation", "Customization"],
      status: "Completed"
    },
    {
      id: 6,
      title: "Business Analytics",
      category: "BUSINESS",
      image: businessData.metadata?.banner || "/api/placeholder/400/300",
      description: "Data-driven insights and business intelligence solutions",
      tags: ["Analytics", "Data", "Intelligence"],
      status: "Ongoing"
    }
  ];

  const categories = ["ALL", "BUSINESS", "DIGITAL", "CONSULTING", "SOLUTIONS"];

  const filteredProjects = activeCategory === "ALL" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed": return "bg-green-100 text-green-800";
      case "In Progress": return "bg-blue-100 text-blue-800";
      case "Planning": return "bg-amber-100 text-amber-800";
      case "Ongoing": return "bg-purple-100 text-purple-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Background Geometric Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 0.1, x: 0 }}
          transition={{ duration: 2 }}
          className="absolute top-1/4 left-0 w-96 h-96 bg-emerald-200 rounded-full transform -translate-x-1/2"
        />
        <motion.div
          initial={{ opacity: 0, rotate: 0 }}
          whileInView={{ opacity: 0.05, rotate: 45 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="absolute bottom-1/4 right-10 w-64 h-64 bg-emerald-300"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Our <span className="text-emerald-600">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our portfolio of successful projects and innovative solutions for {businessData.name}.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === category
                  ? "bg-emerald-600 text-white shadow-lg transform scale-105"
                  : "bg-white text-gray-600 hover:bg-emerald-50 hover:text-emerald-600 shadow-sm"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -50, scale: 0.9 }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                className="group"
              >
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  {/* Project Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Status Badge */}
                    <div className="absolute top-4 right-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(project.status)}`}>
                        {project.status}
                      </span>
                    </div>

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-emerald-600 text-white rounded-full text-xs font-semibold">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-emerald-600 transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-2 py-1 bg-gray-100 text-gray-600 rounded-lg text-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* View Project Button */}
                    <button className="w-full px-4 py-2 bg-emerald-50 text-emerald-600 font-semibold rounded-lg hover:bg-emerald-100 transition-colors">
                      View Details
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* No Projects Message */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">No Projects Found</h3>
            <p className="text-gray-600">No projects match the selected category. Try selecting a different category.</p>
          </motion.div>
        )}

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center mt-16"
        >
          <div className="bg-emerald-600 text-white rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-emerald-100 mb-6">
              Let's collaborate on your next innovative project. We're here to bring your vision to life.
            </p>
            <button className="px-8 py-3 bg-white text-emerald-600 font-bold rounded-lg hover:bg-emerald-50 transition-colors shadow-lg">
              Start a Project
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 