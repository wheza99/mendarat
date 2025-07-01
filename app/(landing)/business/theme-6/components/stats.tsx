"use client";

import { BusinessData } from "../../page";
import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";

interface StatsProps {
  data: BusinessData;
}

export default function Stats({ data }: StatsProps) {
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

  return (
    <section 
      ref={sectionRef}
      className="relative py-20 bg-teal-50 overflow-hidden"
    >
      {/* Organic Background Shapes */}
      <div className="absolute top-0 left-0 w-1/3 h-1/3 -translate-x-1/4 -translate-y-1/4">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-teal-200/50">
          <path fill="currentColor" d="M48.2,-73.5C63.9,-66.9,79.1,-57.3,87.3,-43.4C95.4,-29.5,96.5,-11.3,93.2,5.7C89.9,22.8,82.3,38.6,71.5,51.6C60.7,64.6,46.8,74.7,31.7,79.2C16.6,83.7,0.4,82.7,-16.2,79.6C-32.8,76.6,-49.9,71.5,-62.3,60.8C-74.8,50.1,-82.6,33.7,-85.9,16.2C-89.2,-1.3,-87.9,-20,-81.2,-36.2C-74.5,-52.4,-62.2,-66.1,-47.4,-73.1C-32.5,-80.1,-15.1,-80.5,0.6,-81.5C16.4,-82.5,32.5,-84.1,48.2,-73.5Z" transform="translate(100 100)" />
        </svg>
      </div>
      
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 translate-x-1/4 translate-y-1/4">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-emerald-200/50">
          <path fill="currentColor" d="M39.9,-65.7C54.3,-60.5,70.2,-54.3,79.7,-42.6C89.2,-31,92.3,-13.9,88.9,1.4C85.5,16.8,75.6,30.4,65.3,42.6C55,54.8,44.3,65.6,31.2,72.1C18.1,78.6,2.7,80.8,-12.8,78.8C-28.3,76.9,-43.9,70.8,-56.5,60.3C-69.1,49.9,-78.7,35.1,-83.4,18.6C-88.1,2.1,-87.9,-16.2,-80.9,-30.7C-73.9,-45.2,-60.1,-55.9,-45.6,-61.2C-31.1,-66.5,-15.5,-66.4,-1.4,-64.3C12.8,-62.3,25.5,-58.3,39.9,-65.7Z" transform="translate(100 100)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Business Identity Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <div className="bg-white rounded-3xl shadow-xl p-8 border border-teal-100">
            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Business Logo */}
              {data.logo && (
                <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-teal-200 shadow-lg">
                  <img
                    src={data.logo}
                    alt={data.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              
              {/* Business Info */}
              <div className="flex-grow text-center md:text-left">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">{data.name}</h2>
                <p className="text-teal-600 font-medium mb-2">ID Bisnis: {data.businessId}</p>
                <p className="text-gray-600 mb-4">{data.description}</p>
                
                {/* Brand Colors */}
                <div className="flex justify-center md:justify-start items-center gap-4">
                  <span className="text-sm text-gray-500">Brand Colors:</span>
                  <div className="flex gap-2">
                    <div 
                      className="w-8 h-8 rounded-full border-2 border-white shadow-md"
                      style={{ backgroundColor: data.primary_color }}
                      title={`Primary: ${data.primary_color}`}
                    />
                    <div 
                      className="w-8 h-8 rounded-full border-2 border-white shadow-md"
                      style={{ backgroundColor: data.secondary_color }}
                      title={`Secondary: ${data.secondary_color}`}
                    />
                  </div>
                </div>
              </div>
              
              {/* Status Badge */}
              <div className="flex flex-col items-center gap-2">
                <div className={`px-4 py-2 rounded-full text-sm font-medium ${
                  data.status === 'active' 
                    ? 'bg-emerald-100 text-emerald-700 border border-emerald-200' 
                    : 'bg-red-100 text-red-700 border border-red-200'
                }`}>
                  {data.status === 'active' ? '🌿 Aktif' : '❌ Tidak Aktif'}
                </div>
                {data.location && (
                  <div className="text-sm text-gray-500">📍 {data.location}</div>
                )}
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* Business Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Services Count */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-teal-100"
          >
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-teal-100 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {data.metadata?.services?.length || 4}
              </h3>
              <p className="text-gray-600">Layanan Tersedia</p>
            </div>
          </motion.div>

          {/* Business Type */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-emerald-100"
          >
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-emerald-100 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 00-2 2H10a2 2 0 00-2-2V6m8 0h2a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2h2" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {data.category || "Business"}
              </h3>
              <p className="text-gray-600">Kategori Bisnis</p>
            </div>
          </motion.div>

          {/* Currency */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-teal-100"
          >
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-teal-100 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {data.currency}
              </h3>
              <p className="text-gray-600">Mata Uang</p>
            </div>
          </motion.div>

          {/* Language */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-emerald-100"
          >
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-emerald-100 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {data.language}
              </h3>
              <p className="text-gray-600">Bahasa</p>
            </div>
          </motion.div>
        </div>

        {/* Floating Leaf Elements */}
        <motion.div
          animate={{ 
            y: [0, -15, 0],
            rotate: [0, 5, 0],
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            repeatType: "reverse",
            ease: "easeInOut"
          }}
          className="absolute top-1/4 right-0 w-24 h-24 z-0 hidden lg:block"
        >
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-teal-300/40">
            <path fill="currentColor" d="M45.7,-77.2C59.5,-69.2,71.3,-57.5,79.1,-43.3C86.9,-29.1,90.8,-12.4,89.8,4.1C88.7,20.6,82.8,36.9,72.3,49.3C61.9,61.7,47,70.2,31.5,75.5C16,80.9,-0.2,83.2,-15.6,79.9C-31.1,76.6,-45.9,67.7,-58.9,56C-71.9,44.3,-83.1,29.8,-87.3,13.3C-91.4,-3.2,-88.5,-21.7,-80.3,-37.2C-72.1,-52.8,-58.6,-65.3,-43.5,-72.6C-28.4,-79.9,-11.7,-81.9,2.5,-86C16.7,-90.1,31.9,-85.3,45.7,-77.2Z" transform="translate(100 100)" />
          </svg>
        </motion.div>
        
        <motion.div
          animate={{ 
            y: [0, 15, 0],
            rotate: [0, -5, 0],
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity, 
            repeatType: "reverse",
            ease: "easeInOut"
          }}
          className="absolute bottom-1/4 left-0 w-32 h-32 z-0 hidden lg:block"
        >
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-emerald-300/30">
            <path fill="currentColor" d="M48.2,-73.5C63.9,-66.9,79.1,-57.3,87.3,-43.4C95.4,-29.5,96.5,-11.3,93.2,5.7C89.9,22.8,82.3,38.6,71.5,51.6C60.7,64.6,46.8,74.7,31.7,79.2C16.6,83.7,0.4,82.7,-16.2,79.6C-32.8,76.6,-49.9,71.5,-62.3,60.8C-74.8,50.1,-82.6,33.7,-85.9,16.2C-89.2,-1.3,-87.9,-20,-81.2,-36.2C-74.5,-52.4,-62.2,-66.1,-47.4,-73.1C-32.5,-80.1,-15.1,-80.5,0.6,-81.5C16.4,-82.5,32.5,-84.1,48.2,-73.5Z" transform="translate(100 100)" />
          </svg>
        </motion.div>
      </div>
    </section>
  );
} 