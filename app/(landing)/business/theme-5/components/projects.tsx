"use client";

import { BusinessData } from "../../page";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

interface ProjectsProps {
  data: BusinessData;
}

export default function Projects({ data }: ProjectsProps) {
  const [activeCategory, setActiveCategory] = useState("ALL");

  const categories = [
    { id: "ALL", name: "Semua", count: 12 },
    { id: "CREATIVE", name: "Kreatif", count: 5 },
    { id: "DIGITAL", name: "Digital", count: 4 },
    { id: "BRANDING", name: "Branding", count: 3 }
  ];

  // Generate projects based on business data
  const projects = [
    {
      id: 1,
      title: `${data.name} - Brand Identity`,
      category: "BRANDING",
      description: "Pengembangan identitas visual yang kuat dan memorable untuk meningkatkan brand recognition.",
      image: "/api/placeholder/400/300",
      tags: ["Logo Design", "Brand Guidelines", "Visual Identity"],
      gradient: "from-purple-500 to-violet-600",
      featured: true
    },
    {
      id: 2,
      title: "Digital Experience Platform",
      category: "DIGITAL",
      description: "Platform digital interaktif dengan user experience yang optimal dan design yang modern.",
      image: "/api/placeholder/400/300",
      tags: ["UI/UX Design", "Web Development", "Mobile App"],
      gradient: "from-pink-500 to-rose-600",
      featured: false
    },
    {
      id: 3,
      title: "Creative Campaign 2024",
      category: "CREATIVE",
      description: "Kampanye kreatif terintegrasi dengan pendekatan multi-channel untuk maksimal impact.",
      image: "/api/placeholder/400/300",
      tags: ["Creative Direction", "Art Direction", "Campaign"],
      gradient: "from-violet-500 to-purple-600",
      featured: true
    },
    {
      id: 4,
      title: "Artistic Interior Concept",
      category: "CREATIVE",
      description: "Konsep interior dengan sentuhan artistik yang memadukan fungsi dan estetika modern.",
      image: "/api/placeholder/400/300",
      tags: ["Interior Design", "Space Planning", "Art Direction"],
      gradient: "from-fuchsia-500 to-pink-600",
      featured: false
    },
    {
      id: 5,
      title: "E-Commerce Solution",
      category: "DIGITAL",
      description: "Solusi e-commerce komprehensif dengan fitur advanced dan user experience yang superior.",
      image: "/api/placeholder/400/300",
      tags: ["E-Commerce", "Payment Integration", "Analytics"],
      gradient: "from-purple-600 to-indigo-600",
      featured: false
    },
    {
      id: 6,
      title: "Luxury Brand Portfolio",
      category: "BRANDING",
      description: "Portfolio branding untuk luxury brand dengan approach yang sophisticated dan elegant.",
      image: "/api/placeholder/400/300",
      tags: ["Luxury Branding", "Premium Design", "Portfolio"],
      gradient: "from-rose-500 to-pink-600",
      featured: true
    }
  ];

  const filteredProjects = activeCategory === "ALL" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="relative py-20 bg-gradient-to-br from-white via-purple-50/20 to-pink-50/20 overflow-hidden">
      {/* Organic Background Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-0 right-1/4 w-96 h-96 bg-gradient-to-br from-purple-200/15 to-pink-200/15 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 120, 240, 360],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-gradient-to-br from-violet-200/15 to-fuchsia-200/15 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 240, 120, 0],
          }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      {/* Artistic Wave Pattern */}
      <div className="absolute top-0 left-0 right-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="projectWaveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#8B5CF6" />
              <stop offset="50%" stopColor="#EC4899" />
              <stop offset="100%" stopColor="#8B5CF6" />
            </linearGradient>
          </defs>
          <path
            fill="url(#projectWaveGradient)"
            fillOpacity="0.05"
            d="M0,160L48,144C96,128,192,96,288,106.7C384,117,480,171,576,186.7C672,203,768,181,864,154.7C960,128,1056,96,1152,90.7C1248,85,1344,107,1392,117.3L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 text-sm font-semibold tracking-wider mb-2">
            PORTFOLIO KREATIF
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Karya & <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Prestasi</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
          <p className="text-gray-600 text-lg mt-6 max-w-3xl mx-auto">
            Koleksi karya terbaik kami yang menggabungkan kreativitas, inovasi, dan keahlian teknis untuk menciptakan solusi yang luar biasa.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg scale-105'
                  : 'bg-white text-gray-700 border border-gray-200 hover:border-purple-300 hover:text-purple-600 hover:scale-105'
              }`}
            >
              <span className="flex items-center space-x-2">
                <span>{category.name}</span>
                <span className={`text-xs px-2 py-1 rounded-full ${
                  activeCategory === category.id
                    ? 'bg-white/20 text-white'
                    : 'bg-gray-100 text-gray-500'
                }`}>
                  {category.count}
                </span>
              </span>
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className={`relative group cursor-pointer ${
                  project.featured ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div className="relative overflow-hidden rounded-2xl bg-white shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 group-hover:scale-[1.02]">
                  {/* Project Image */}
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    
                    {/* Gradient Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-80 transition-opacity duration-300`}></div>
                    
                    {/* Hover Content */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="text-center text-white p-6">
                        <motion.div
                          initial={{ scale: 0.8 }}
                          whileInView={{ scale: 1 }}
                          transition={{ duration: 0.3 }}
                          className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center"
                        >
                          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                        </motion.div>
                        <p className="text-sm font-medium">Lihat Detail</p>
                      </div>
                    </div>

                    {/* Featured Badge */}
                    {project.featured && (
                      <div className="absolute top-4 left-4">
                        <div className="px-3 py-1 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-semibold shadow-lg">
                          Featured
                        </div>
                      </div>
                    )}

                    {/* Category Badge */}
                    <div className="absolute top-4 right-4">
                      <div className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-gray-700 text-xs font-medium">
                        {categories.find(cat => cat.id === project.category)?.name}
                      </div>
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 transition-all duration-300">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 rounded-full bg-gray-100 text-gray-600 text-sm hover:bg-gradient-to-r hover:from-purple-100 hover:to-pink-100 hover:text-purple-700 transition-all duration-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Action Button */}
                    <button className={`w-full py-3 rounded-xl bg-gradient-to-r ${project.gradient} text-white font-semibold opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300`}>
                      Lihat Project
                    </button>
                  </div>

                  {/* Decorative Corner Element */}
                  <div className={`absolute bottom-4 right-4 w-4 h-4 bg-gradient-to-br ${project.gradient} rounded-full opacity-20 group-hover:opacity-50 transition-opacity duration-300`}></div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="inline-block p-8 rounded-3xl bg-gradient-to-br from-purple-500 to-pink-500 text-white shadow-2xl">
            <h3 className="text-2xl font-bold mb-4">
              Tertarik dengan Karya Kami?
            </h3>
            <p className="text-purple-100 mb-6 max-w-md mx-auto">
              Mari berkolaborasi untuk menciptakan sesuatu yang luar biasa bersama-sama.
            </p>
            <button className="px-8 py-4 rounded-full bg-white text-purple-600 font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300">
              Mulai Project Baru
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 