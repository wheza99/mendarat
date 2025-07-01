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

  // Create project showcases based on business data
  const projects: Project[] = [
    {
      id: 1,
      title: `${businessData.name} - Main Business`,
      category: "business",
      image: businessData.img || businessData.metadata.background,
      description: businessData.metadata.description,
      details: {
        template: businessData.selected_template,
        currency: businessData.currency,
        status: businessData.status
      }
    },
    {
      id: 2,
      title: "Privacy Policy Implementation",
      category: "policy",
      image: businessData.metadata.background,
      description: "Comprehensive privacy policy implementation for customer data protection",
      details: {
        feature: "Privacy Protection",
        compliance: "Data Security",
        coverage: "Full Coverage"
      }
    },
    {
      id: 3,
      title: "Terms & Conditions Framework",
      category: "policy",
      image: businessData.metadata.background,
      description: "Clear and transparent terms and conditions for business operations",
      details: {
        feature: "Legal Framework",
        transparency: "Full Disclosure",
        protection: "Customer Rights"
      }
    }
  ];

  // Add shipping project if available
  if (businessData.metadata.shipping) {
    projects.push({
      id: 4,
      title: "Shipping & Delivery Services",
      category: "service",
      image: businessData.metadata.background,
      description: "Comprehensive shipping and delivery solutions for customers",
      details: {
        feature: "Delivery Service",
        coverage: "Wide Area",
        tracking: "Real-time"
      }
    });
  }

  const filters = [
    { id: "all", label: "All Projects" },
    { id: "business", label: "Business" },
    { id: "policy", label: "Policies" },
    { id: "service", label: "Services" }
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
          <p className="text-amber-500 font-medium tracking-widest uppercase mb-4">
            Our Portfolio
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Showcase Business
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Lihat berbagai aspek dan layanan yang telah kami implementasikan untuk {businessData.name}
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
              className={`px-6 py-2 text-sm font-medium tracking-wider transition-all duration-300 ${
                activeFilter === filter.id
                  ? "bg-amber-500 text-white"
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
              transition={{ duration: 0.3 }}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${project.image})` }}
                />
                <div className="absolute inset-0 bg-black/40" />
                
                {/* Overlay Content */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="bg-amber-500 text-white px-6 py-2 text-sm font-medium tracking-wider hover:bg-amber-600 transition-colors duration-300"
                  >
                    VIEW DETAILS
                  </motion.button>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-amber-500 text-white px-3 py-1 text-xs font-medium tracking-wider uppercase">
                    {project.category}
                  </span>
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
                <div className="space-y-2">
                  {Object.entries(project.details).map(([key, value], index) => (
                    <div key={index} className="flex justify-between text-sm">
                      <span className="text-gray-500 capitalize">{key}:</span>
                      <span className="text-gray-700 font-medium">{value}</span>
                    </div>
                  ))}
                </div>

                {/* Action Button */}
                <div className="mt-6 pt-4 border-t border-gray-100">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full text-amber-500 font-medium text-sm tracking-wider hover:text-amber-600 transition-colors duration-200"
                  >
                    LEARN MORE
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gray-50 rounded-lg p-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ingin Melihat Lebih Detail?
            </h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Hubungi kami untuk mendapatkan informasi lebih lengkap tentang layanan dan fitur yang tersedia
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-gray-900 text-white px-8 py-3 text-sm font-medium tracking-wider hover:bg-gray-800 transition-colors duration-300"
            >
              CONTACT US
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 