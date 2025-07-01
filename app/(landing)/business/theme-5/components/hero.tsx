"use client";

import { BusinessData } from "../../page";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

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
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-purple-900 via-violet-800 to-fuchsia-900">
      {/* Animated Particles/Dots */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white/20 backdrop-blur-sm"
            style={{
              width: Math.random() * 12 + 4,
              height: Math.random() * 12 + 4,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, Math.random() * 100 - 50],
              x: [0, Math.random() * 50 - 25],
              opacity: [0.2, 0.6, 0.2],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: Math.random() * 6 + 4,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      {/* Organic Blob Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-pink-500/30 to-purple-600/30 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-br from-violet-500/30 to-fuchsia-600/30 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      {/* Curved Shape Divider at Bottom */}
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
            d="M0,224L80,213.3C160,203,320,181,480,186.7C640,192,800,224,960,224C1120,224,1280,192,1360,176L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>
      </div>

      {/* Content Container */}
      <div className="relative z-20 h-full flex flex-col">
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
                <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white/30">
                  <Image
                    src={data.logo}
                    alt={data.name}
                    width={40}
                    height={40}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              <span className="text-white font-bold text-2xl">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-200">
                  {data.name}
                </span>
              </span>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="hidden md:flex items-center space-x-6"
            >
              <span className="text-purple-200 text-sm">ID: {data.businessId}</span>
              <div className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
                <span className="text-white text-sm font-medium">
                  {data.status === 'active' ? 'AKTIF' : 'TIDAK AKTIF'}
                </span>
              </div>
            </motion.div>
          </nav>
        </header>

        {/* Main Content */}
        <div className="flex-grow flex items-center">
          <div className="max-w-7xl mx-auto px-8 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Left Column - Text Content */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.2 }}
                className="text-center lg:text-left"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6"
                >
                  <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-300 rounded-full animate-pulse"></div>
                  <span className="text-purple-200 text-sm tracking-wider">
                    BISNIS KREATIF TERDEPAN
                  </span>
                </motion.div>
                
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-none mb-6"
                >
                  <span className="block">{data.name}</span>
                  <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-200">
                    STUDIO
                  </span>
                </motion.h1>
                
                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="text-purple-100 text-lg max-w-lg mx-auto lg:mx-0 mb-10"
                >
                  {data.description || "Menciptakan pengalaman bisnis yang luar biasa dengan sentuhan artistik dan inovasi kreatif yang memukau."}
                </motion.p>
                
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-6"
                >
                  {/* Primary CTA - Glassmorphism Button */}
                  <motion.button 
                    className="px-8 py-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white font-medium hover:bg-white/20 transition-all duration-300 group"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="relative z-10 flex items-center justify-center">
                      <span>MULAI EKSPLORASI</span>
                      <svg className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </span>
                  </motion.button>
                  
                  {/* Secondary CTA */}
                  <a 
                    href="#services" 
                    className="px-8 py-4 text-white flex items-center justify-center hover:text-purple-300 transition-colors duration-300"
                  >
                    <span>LIHAT LAYANAN</span>
                    <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </a>
                </motion.div>
              </motion.div>
              
              {/* Right Column - Business Info Card */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
                className="relative"
              >
                <div className="relative p-8 rounded-3xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-2xl">
                  {/* Floating Logo */}
                  <motion.div
                    className="absolute -top-6 -right-6 w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 p-1 shadow-lg"
                    animate={{
                      rotate: [0, 5, -5, 0],
                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <div className="w-full h-full rounded-xl bg-white flex items-center justify-center">
                      {data.logo ? (
                        <Image
                          src={data.logo}
                          alt={data.name}
                          width={48}
                          height={48}
                          className="w-12 h-12 object-cover rounded-lg"
                        />
                      ) : (
                        <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                          <span className="text-white font-bold text-lg">
                            {data.name.charAt(0)}
                          </span>
                        </div>
                      )}
                    </div>
                  </motion.div>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-white font-bold text-xl mb-2">Informasi Bisnis</h3>
                      <div className="w-16 h-1 bg-gradient-to-r from-purple-400 to-pink-300 rounded-full"></div>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-purple-200">ID Bisnis</span>
                        <span className="text-white font-mono">{data.businessId}</span>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <span className="text-purple-200">Status</span>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                          data.status === 'active' 
                            ? 'bg-green-500/20 text-green-300 border border-green-500/30' 
                            : 'bg-red-500/20 text-red-300 border border-red-500/30'
                        }`}>
                          {data.status === 'active' ? 'AKTIF' : 'TIDAK AKTIF'}
                        </span>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <span className="text-purple-200">Kategori</span>
                        <span className="text-white">{data.category || 'Kreatif'}</span>
                      </div>
                      
                      {data.location && (
                        <div className="flex justify-between items-center">
                          <span className="text-purple-200">Lokasi</span>
                          <span className="text-white">{data.location}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 