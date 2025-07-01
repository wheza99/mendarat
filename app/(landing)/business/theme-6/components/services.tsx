"use client";

import { BusinessData } from "../../page";
import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";

interface ServicesProps {
  data: BusinessData;
}

export default function Services({ data }: ServicesProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
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

  // Default services based on business metadata
  const services = data.metadata?.services || [
    "Konsultasi Bisnis",
    "Layanan Premium", 
    "Dukungan Pelanggan",
    "Solusi Inovatif"
  ];

  const serviceDetails = [
    {
      title: services[0] || "Konsultasi Bisnis",
      description: "Panduan profesional untuk mengembangkan strategi bisnis yang berkelanjutan dengan pendekatan natural dan elegan.",
      icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop",
      features: ["Analisis mendalam", "Strategi berkelanjutan", "Konsultasi personal"]
    },
    {
      title: services[1] || "Layanan Premium",
      description: "Solusi berkualitas tinggi yang menggabungkan keunggulan teknologi dengan sentuhan alami dan ramah lingkungan.",
      icon: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z",
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop",
      features: ["Kualitas premium", "Eco-friendly", "Teknologi terdepan"]
    },
    {
      title: services[2] || "Dukungan Pelanggan",
      description: "Layanan dukungan 24/7 dengan pendekatan yang personal dan holistik untuk kepuasan pelanggan yang optimal.",
      icon: "M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 11-9.75 9.75A9.75 9.75 0 0112 2.25z",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop",
      features: ["Support 24/7", "Respon cepat", "Solusi personal"]
    },
    {
      title: services[3] || "Solusi Inovatif",
      description: "Inovasi berkelanjutan yang mengintegrasikan teknologi modern dengan prinsip-prinsip desain yang ramah lingkungan.",
      icon: "M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop",
      features: ["Teknologi terbaru", "Ramah lingkungan", "Inovasi berkelanjutan"]
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="relative py-20 bg-white overflow-hidden"
    >
      {/* Organic Shape Decorations */}
      <div className="absolute top-0 right-0 w-1/4 h-1/4 translate-x-1/4 -translate-y-1/4">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-teal-100/60">
          <path fill="currentColor" d="M48.2,-73.5C63.9,-66.9,79.1,-57.3,87.3,-43.4C95.4,-29.5,96.5,-11.3,93.2,5.7C89.9,22.8,82.3,38.6,71.5,51.6C60.7,64.6,46.8,74.7,31.7,79.2C16.6,83.7,0.4,82.7,-16.2,79.6C-32.8,76.6,-49.9,71.5,-62.3,60.8C-74.8,50.1,-82.6,33.7,-85.9,16.2C-89.2,-1.3,-87.9,-20,-81.2,-36.2C-74.5,-52.4,-62.2,-66.1,-47.4,-73.1C-32.5,-80.1,-15.1,-80.5,0.6,-81.5C16.4,-82.5,32.5,-84.1,48.2,-73.5Z" transform="translate(100 100)" />
        </svg>
      </div>
      
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 -translate-x-1/4 translate-y-1/4">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-emerald-100/60">
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
            Layanan <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-emerald-600">Natural Elegance</span>
          </h2>
          <p className="text-gray-600 mb-8">
            Kami menyediakan solusi bisnis yang berkelanjutan dengan menggabungkan keindahan alami, teknologi modern, dan prinsip-prinsip desain yang ramah lingkungan.
          </p>
          <div className="flex justify-center">
            <button className="px-8 py-3 bg-transparent border-2 border-teal-600 text-teal-600 rounded-full text-sm font-medium tracking-wider hover:bg-teal-50 transition-all duration-300">
              JELAJAHI SEMUA LAYANAN
            </button>
          </div>
        </motion.div>
        
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {serviceDetails.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="relative group"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-teal-200 to-emerald-200 rounded-3xl opacity-70 group-hover:opacity-100 blur transition duration-500 group-hover:duration-200"></div>
              <div className="relative h-full flex flex-col bg-white rounded-3xl overflow-hidden shadow-md transition-all duration-300 group-hover:shadow-xl">
                {/* Service Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-teal-900/60 to-transparent"></div>
                  
                  {/* Icon Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={hoveredIndex === index ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0.7 }}
                      transition={{ duration: 0.3 }}
                      className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30"
                    >
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="h-10 w-10 text-white" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={1.5} 
                          d={service.icon} 
                        />
                      </svg>
                    </motion.div>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-8 flex-grow flex flex-col">
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 flex-grow">
                    {service.description}
                  </p>
                  
                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-teal-600 mb-3">FITUR UNGGULAN:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <div className="w-2 h-2 bg-teal-400 rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Learn More Link */}
                  <div className="pt-4 border-t border-teal-100">
                    <a 
                      href="#" 
                      className="inline-flex items-center text-teal-600 font-medium group-hover:text-teal-700 transition-colors"
                    >
                      Pelajari lebih lanjut
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="h-5 w-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Business Metadata Section */}
        {data.metadata && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-16 bg-teal-50 rounded-3xl p-8"
          >
            <h3 className="text-2xl font-bold text-center mb-8 text-gray-900">
              Komitmen <span className="text-teal-600">Natural Elegance</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-teal-100 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Privasi Terjamin</h4>
                <p className="text-sm text-gray-600">{data.metadata.privacy}</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-emerald-100 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Pengiriman Cepat</h4>
                <p className="text-sm text-gray-600">{data.metadata.shipping || "Layanan pengiriman tersedia"}</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-teal-100 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Syarat & Ketentuan</h4>
                <p className="text-sm text-gray-600">{data.metadata.terms}</p>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
} 