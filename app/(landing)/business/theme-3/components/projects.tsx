"use client";

import { BusinessData } from "../../page";
import { motion } from "framer-motion";
import { useState } from "react";

interface ProjectsProps {
  businessData: BusinessData;
}

interface ProjectDetails {
  [key: string]: string;
}

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  details: ProjectDetails;
}

export default function Projects({ businessData }: ProjectsProps) {
  const [activeFilter, setActiveFilter] = useState("all");

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  // Create projects based on business data
  const projects: Project[] = [
    {
      id: 1,
      title: `${businessData.name} - Main Platform`,
      category: "business",
      image: businessData.img || businessData.metadata.background,
      description: businessData.metadata.description,
      details: {
        template: businessData.selected_template,
        currency: businessData.currency,
        status: businessData.status,
        language: businessData.language
      }
    },
    {
      id: 2,
      title: "Privacy Policy Framework",
      category: "security",
      image: businessData.metadata.background,
      description: "Implementasi komprehensif kebijakan privasi untuk perlindungan data pelanggan",
      details: {
        feature: "Data Protection",
        compliance: "GDPR Ready",
        security: "High Level",
        implementation: "Complete"
      }
    },
    {
      id: 3,
      title: "Terms & Conditions System",
      category: "legal",
      image: businessData.metadata.background,
      description: "Framework legal yang jelas dan transparan untuk operasional business",
      details: {
        framework: "Legal Structure",
        transparency: "Full Disclosure",
        protection: "User Rights",
        compliance: "Business Law"
      }
    }
  ];

  // Add shipping project if available
  if (businessData.metadata.shipping) {
    projects.push({
      id: 4,
      title: "Shipping & Delivery System",
      category: "logistics",
      image: businessData.metadata.background,
      description: "Sistem pengiriman dan delivery yang terintegrasi untuk kepuasan pelanggan",
      details: {
        service: "Delivery Management",
        tracking: "Real-time",
        coverage: "Wide Area",
        integration: "Full System"
      }
    });
  }

  const filters = [
    { id: "all", label: "Semua Project" },
    { id: "business", label: "Business" },
    { id: "security", label: "Security" },
    { id: "legal", label: "Legal" },
    { id: "logistics", label: "Logistics" }
  ];

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-6"></div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Portfolio Project
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Showcase berbagai implementasi dan fitur yang telah dikembangkan untuk {businessData.name}
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {filters.map((filter) => (
            <motion.button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-2 font-medium transition-all duration-300 ${
                activeFilter === filter.id
                  ? "bg-blue-500 text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {filter.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={item}
              layout
              whileHover={{ y: -10 }}
              className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${project.image})` }}
                />
                <div className="absolute inset-0 bg-black/40" />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-500 text-white px-3 py-1 text-xs font-medium uppercase tracking-wider">
                    {project.category}
                  </span>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-blue-500/90 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="bg-white text-blue-500 px-6 py-2 font-medium hover:bg-gray-100 transition-colors duration-300"
                  >
                    VIEW DETAILS
                  </motion.button>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Project Details */}
                <div className="space-y-2 mb-6">
                  {Object.entries(project.details).slice(0, 3).map(([key, value], index) => (
                    <div key={index} className="flex justify-between text-sm">
                      <span className="text-gray-500 capitalize">{key}:</span>
                      <span className="text-gray-700 font-medium">{value}</span>
                    </div>
                  ))}
                </div>

                {/* Action Button */}
                <div className="pt-4 border-t border-gray-100">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full py-2 px-4 bg-gray-900 text-white font-medium hover:bg-gray-800 transition-colors duration-300"
                  >
                    PELAJARI LEBIH LANJUT
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gray-50 p-12 rounded-lg border border-gray-200">
            <div className="w-20 h-1 bg-blue-500 mx-auto mb-6"></div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Tertarik dengan Project Kami?
            </h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Diskusikan kebutuhan project Anda dengan tim ahli kami untuk mendapatkan solusi terbaik
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-8 py-3 bg-blue-500 text-white font-medium hover:bg-blue-600 transition-colors duration-300"
            >
              Mulai Project Baru
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 