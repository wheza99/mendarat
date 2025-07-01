"use client";

import { BusinessData } from "../../page";
import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";

interface ProjectsProps {
  data: BusinessData;
}

export default function Projects({ data }: ProjectsProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState("all");
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.2,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.disconnect();
      }
    };
  }, []);

  const categories = ["all", "design", "development", "consulting", "sustainability"];
  
  const projects = [
    {
      id: 1,
      title: "Eco-Friendly Office Design",
      category: "design",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop",
      description: "Desain kantor ramah lingkungan dengan integrasi elemen natural dan teknologi berkelanjutan.",
      client: data.name,
      year: "2024",
      tags: ["Sustainable", "Modern", "Biophilic"]
    },
    {
      id: 2,
      title: "Digital Transformation Platform",
      category: "development",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      description: "Platform digital yang mengintegrasikan prinsip natural elegance dalam pengalaman pengguna.",
      client: data.name,
      year: "2024",
      tags: ["Digital", "Innovation", "UX/UI"]
    },
    {
      id: 3,
      title: "Business Strategy Consulting",
      category: "consulting",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop",
      description: "Konsultasi strategi bisnis dengan pendekatan holistik dan berkelanjutan.",
      client: data.name,
      year: "2024",
      tags: ["Strategy", "Growth", "Sustainability"]
    },
    {
      id: 4,
      title: "Green Technology Implementation",
      category: "sustainability",
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&h=400&fit=crop",
      description: "Implementasi teknologi hijau untuk operasional bisnis yang lebih berkelanjutan.",
      client: data.name,
      year: "2024",
      tags: ["Green Tech", "Sustainability", "Innovation"]
    },
    {
      id: 5,
      title: "Natural Branding Identity",
      category: "design",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop",
      description: "Pengembangan identitas brand yang menggabungkan elemen natural dengan desain modern.",
      client: data.name,
      year: "2024",
      tags: ["Branding", "Identity", "Natural"]
    },
    {
      id: 6,
      title: "Sustainable Web Application",
      category: "development",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=400&fit=crop",
      description: "Aplikasi web dengan fokus pada efisiensi energi dan pengalaman pengguna yang natural.",
      client: data.name,
      year: "2024",
      tags: ["Web App", "Sustainable", "Performance"]
    }
  ];

  const filteredProjects = activeCategory === "all" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section 
      ref={sectionRef}
      className="relative py-20 bg-teal-50 overflow-hidden"
    >
      {/* Organic Background Shapes */}
      <div className="absolute top-1/4 right-0 w-1/3 h-1/3 translate-x-1/4">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-teal-200/40">
          <path fill="currentColor" d="M48.2,-73.5C63.9,-66.9,79.1,-57.3,87.3,-43.4C95.4,-29.5,96.5,-11.3,93.2,5.7C89.9,22.8,82.3,38.6,71.5,51.6C60.7,64.6,46.8,74.7,31.7,79.2C16.6,83.7,0.4,82.7,-16.2,79.6C-32.8,76.6,-49.9,71.5,-62.3,60.8C-74.8,50.1,-82.6,33.7,-85.9,16.2C-89.2,-1.3,-87.9,-20,-81.2,-36.2C-74.5,-52.4,-62.2,-66.1,-47.4,-73.1C-32.5,-80.1,-15.1,-80.5,0.6,-81.5C16.4,-82.5,32.5,-84.1,48.2,-73.5Z" transform="translate(100 100)" />
        </svg>
      </div>
      
      <div className="absolute bottom-1/4 left-0 w-1/3 h-1/3 -translate-x-1/4">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-emerald-200/40">
          <path fill="currentColor" d="M39.9,-65.7C54.3,-60.5,70.2,-54.3,79.7,-42.6C89.2,-31,92.3,-13.9,88.9,1.4C85.5,16.8,75.6,30.4,65.3,42.6C55,54.8,44.3,65.6,31.2,72.1C18.1,78.6,2.7,80.8,-12.8,78.8C-28.3,76.9,-43.9,70.8,-56.5,60.3C-69.1,49.9,-78.7,35.1,-83.4,18.6C-88.1,2.1,-87.9,-16.2,-80.9,-30.7C-73.9,-45.2,-60.1,-55.9,-45.6,-61.2C-31.1,-66.5,-15.5,-66.4,-1.4,-64.3C12.8,-62.3,25.5,-58.3,39.9,-65.7Z" transform="translate(100 100)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="h-1 w-20 bg-teal-400 rounded mx-auto mb-6"></div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            Portfolio <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-emerald-600">Natural Elegance</span>
          </h2>
          <p className="text-gray-600 mb-8">
            Jelajahi koleksi proyek kami yang menggabungkan keindahan alami dengan inovasi teknologi untuk menciptakan solusi bisnis yang berkelanjutan dan elegan.
          </p>
        </motion.div>
        
        {/* Category Filter */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full text-sm font-medium tracking-wider transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-teal-500 to-emerald-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 border border-teal-200 hover:bg-teal-50 hover:border-teal-300'
              }`}
            >
              {category === "all" ? "SEMUA" : 
               category === "design" ? "DESIGN" :
               category === "development" ? "DEVELOPMENT" :
               category === "consulting" ? "CONSULTING" :
               category === "sustainability" ? "SUSTAINABILITY" : category.toUpperCase()}
            </button>
          ))}
        </motion.div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="group relative"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-teal-200 to-emerald-200 rounded-2xl opacity-70 group-hover:opacity-100 blur transition duration-500 group-hover:duration-200"></div>
              <div className="relative bg-white rounded-2xl overflow-hidden shadow-md transition-all duration-300 group-hover:shadow-xl">
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Overlay Content */}
                  <div className="absolute inset-0 flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="text-white">
                      <p className="text-sm font-medium mb-1">{project.client}</p>
                      <p className="text-xs opacity-90">{project.year}</p>
                    </div>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      project.category === 'design' ? 'bg-teal-100 text-teal-700' :
                      project.category === 'development' ? 'bg-emerald-100 text-emerald-700' :
                      project.category === 'consulting' ? 'bg-blue-100 text-blue-700' :
                      'bg-green-100 text-green-700'
                    }`}>
                      {project.category.toUpperCase()}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-teal-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {project.description}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, idx) => (
                      <span key={idx} className="px-2 py-1 bg-teal-50 text-teal-600 text-xs rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  {/* View Project Link */}
                  <a 
                    href="#" 
                    className="inline-flex items-center text-teal-600 font-medium text-sm group-hover:text-teal-700 transition-colors"
                  >
                    Lihat Detail
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-4 w-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Business Announcement */}
        {data.metadata?.announcement && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-16 text-center"
          >
            <div className="bg-gradient-to-r from-teal-500 to-emerald-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Pengumuman Terbaru</h3>
              <p className="text-lg opacity-90 mb-6">{data.metadata.announcement}</p>
              <button className="px-8 py-3 bg-white/20 backdrop-blur-sm border border-white/30 text-white rounded-full font-medium hover:bg-white/30 transition-all duration-300">
                Pelajari Lebih Lanjut
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
} 