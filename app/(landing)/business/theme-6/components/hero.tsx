"use client";

import { BusinessData } from "../../page";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface HeroProps {
  data: BusinessData;
}

export default function Hero({ data }: HeroProps) {
  const [scrollY, setScrollY] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-teal-900 via-emerald-800 to-teal-900">
      {/* Background with Parallax Effect */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ 
            backgroundImage: `url(${data.metadata?.banner || 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&h=800&fit=crop'})`,
            transform: `translateY(${scrollY * 0.15}px)` 
          }}
        />
        
        {/* Organic Shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <svg 
            className="absolute top-0 right-0 h-full w-1/2 text-teal-500/10" 
            viewBox="0 0 200 800" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              d="M42.9,-73.2C55.3,-66.7,65.1,-54.3,72.3,-40.3C79.4,-26.2,84,-10.5,83.1,5.2C82.2,20.9,75.9,36.6,65.5,48.5C55.1,60.4,40.7,68.4,25.8,73.7C10.9,79,-4.5,81.5,-19.6,78.5C-34.8,75.5,-49.8,67,-60.3,54.8C-70.8,42.6,-76.8,26.8,-79.2,10.1C-81.6,-6.5,-80.3,-24,-72.6,-37.8C-64.9,-51.6,-50.7,-61.6,-36.3,-67.2C-21.9,-72.8,-7.3,-74,7.4,-74.9C22.1,-75.8,30.5,-79.6,42.9,-73.2Z" 
              transform="translate(100 400) scale(1.5)"
              fill="currentColor"
            />
          </svg>
          
          <svg 
            className="absolute bottom-0 left-0 h-full w-1/2 text-emerald-500/10" 
            viewBox="0 0 200 800" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              d="M54.2,-78.2C71.9,-71.5,89,-60.2,97.7,-44.3C106.3,-28.5,106.5,-8.2,100.5,9.2C94.5,26.6,82.4,41.1,69.2,54.2C56,67.3,41.7,79,25.4,84.9C9.1,90.7,-9.1,90.7,-24.4,84.3C-39.7,77.9,-52.1,65.2,-63.5,51.4C-75,37.7,-85.5,22.9,-88.1,6.7C-90.7,-9.5,-85.5,-27.1,-75.2,-40.8C-64.9,-54.5,-49.5,-64.3,-34.5,-72.2C-19.5,-80.1,-4.9,-86.1,9.8,-85.8C24.5,-85.5,36.5,-84.9,54.2,-78.2Z" 
              transform="translate(100 400) scale(1.5)"
              fill="currentColor"
            />
          </svg>
        </div>
      </div>

      {/* Organic Wave Divider at Bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-10 text-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path
            fill="currentColor"
            fillOpacity="1"
            d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,224C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>

      {/* Content Container */}
      <div className="relative z-10 h-full flex flex-col">
        {/* Navigation */}
        <header className="w-full py-6 px-8">
          <nav className="max-w-7xl mx-auto flex justify-between items-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="flex items-center space-x-3"
            >
              {data.logo && (
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-teal-300/50">
                  <img
                    src={data.logo}
                    alt={data.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              <div>
                <span className="text-white font-bold text-xl">{data.name}</span>
                <div className="text-teal-200 text-xs">Natural Elegance</div>
              </div>
            </motion.div>
            
            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="hidden md:flex space-x-8 text-white"
            >
              {["Home", "About", "Services", "Projects", "Contact"].map((item, index) => (
                <li key={index}>
                  <a 
                    href={`#${item.toLowerCase()}`} 
                    className="text-sm tracking-wider hover:text-teal-300 transition-colors duration-300 relative group"
                  >
                    {item.toUpperCase()}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal-300 transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>
              ))}
            </motion.ul>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="md:hidden text-white"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </motion.div>
          </nav>
        </header>

        {/* Hero Content */}
        <div className="flex-grow flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Column - Text Content */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="text-white"
              >
                <div className="mb-6">
                  <div className="h-1 w-20 bg-teal-400 rounded mb-6"></div>
                  <h2 className="text-sm md:text-base tracking-[0.3em] text-teal-200 mb-4">
                    {data.category || "NATURAL ELEGANCE"}
                  </h2>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                    <span className="block text-white">{data.name}</span>
                    <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-emerald-200">
                      BUSINESS
                    </span>
                  </h1>
                  <p className="text-lg md:text-xl text-white/80 max-w-xl mb-8">
                    {data.description || "Menciptakan harmoni antara keindahan alami dan desain kontemporer untuk pengalaman bisnis yang berkelanjutan dan elegan."}
                  </p>
                </div>
                
                {/* Business Info */}
                <div className="flex flex-wrap gap-4 mb-8">
                  <div className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
                    <span className="text-teal-200 text-sm">ID: {data.businessId}</span>
                  </div>
                  <div className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
                    <span className={`text-sm font-medium ${
                      data.status === 'active' ? 'text-emerald-300' : 'text-red-300'
                    }`}>
                      {data.status === 'active' ? '🌿 AKTIF' : '❌ TIDAK AKTIF'}
                    </span>
                  </div>
                  {data.location && (
                    <div className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
                      <span className="text-teal-200 text-sm">📍 {data.location}</span>
                    </div>
                  )}
                </div>
                
                <div className="flex flex-wrap gap-4">
                  <button className="px-8 py-3 bg-gradient-to-r from-teal-500 to-emerald-600 text-white rounded-full text-sm font-medium tracking-wider hover:from-teal-600 hover:to-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl">
                    JELAJAHI LAYANAN
                  </button>
                  <button className="px-8 py-3 bg-transparent border border-white/30 text-white rounded-full text-sm font-medium tracking-wider hover:bg-white/10 transition-all duration-300">
                    HUBUNGI KAMI
                  </button>
                </div>
              </motion.div>
              
              {/* Right Column - Floating Nature Elements */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.2, delay: 0.5 }}
                className="hidden lg:flex justify-center items-center relative"
              >
                {/* Floating Organic Elements */}
                <div className="relative h-[500px] w-[500px]">
                  <motion.div
                    animate={{ 
                      y: [-20, 20],
                      rotate: [0, 5, 0],
                    }}
                    transition={{ 
                      duration: 8,
                      repeat: Infinity,
                      repeatType: "reverse",
                      ease: "easeInOut"
                    }}
                    className="absolute top-0 right-0 w-32 h-32 bg-teal-400/20 rounded-full blur-xl"
                  />
                  
                  <motion.div
                    animate={{ 
                      y: [20, -20],
                      rotate: [0, -5, 0],
                    }}
                    transition={{ 
                      duration: 10,
                      repeat: Infinity,
                      repeatType: "reverse",
                      ease: "easeInOut"
                    }}
                    className="absolute bottom-0 left-0 w-40 h-40 bg-emerald-400/20 rounded-full blur-xl"
                  />
                  
                  <motion.div
                    animate={{ 
                      y: [0, -15, 0],
                      x: [0, 10, 0],
                    }}
                    transition={{ 
                      duration: 12,
                      repeat: Infinity,
                      repeatType: "reverse",
                      ease: "easeInOut"
                    }}
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-white/10 rounded-full backdrop-blur-sm border border-white/20"
                  />
                  
                  {/* Floating Business Logo */}
                  {data.logo && (
                    <motion.div
                      animate={{ 
                        y: [0, -10, 0],
                        rotate: [0, 2, 0],
                      }}
                      transition={{ 
                        duration: 6,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut"
                      }}
                      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full overflow-hidden border-4 border-white/30 shadow-2xl"
                    >
                      <img
                        src={data.logo}
                        alt={data.name}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                  )}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 