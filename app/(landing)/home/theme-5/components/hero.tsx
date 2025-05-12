"use client";

import { heroSectionCopy } from "../copy";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToNextSection = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-black">
      {/* Background with Parallax Effect */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url(${heroSectionCopy.backgroundImage})`,
            transform: `translateY(${scrollY * 0.2}px)` 
          }}
        />
        {/* Gradient Overlay with Purple Tones */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/80 via-violet-800/70 to-fuchsia-900/80" />
        
        {/* Animated Particles/Dots */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-white/20 backdrop-blur-sm"
              style={{
                width: Math.random() * 10 + 5,
                height: Math.random() * 10 + 5,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, Math.random() * 100 - 50],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: Math.random() * 5 + 5,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          ))}
        </div>
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
      <div className="relative z-10 h-full flex flex-col">
        {/* Navigation */}
        <header className="w-full py-6 px-8">
          <nav className="max-w-7xl mx-auto flex justify-between items-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="text-white font-bold text-2xl"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-300">STUDIO</span>
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
                    className="text-sm tracking-wider hover:text-purple-300 transition-colors duration-300 relative group"
                  >
                    {item.toUpperCase()}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-300 transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>
              ))}
            </motion.ul>
            
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="md:hidden text-white"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </motion.button>
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
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="inline-block text-purple-300 text-sm tracking-widest mb-3"
                >
                  {heroSectionCopy.tagline}
                </motion.span>
                
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-none mb-6"
                >
                  <span className="block">{heroSectionCopy.heading1}</span>
                  <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-300">
                    {heroSectionCopy.heading2}
                  </span>
                </motion.h1>
                
                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="text-gray-300 text-lg max-w-lg mx-auto lg:mx-0 mb-10"
                >
                  {heroSectionCopy.description}
                </motion.p>
                
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-6"
                >
                  {/* Primary CTA - Glassmorphism Button */}
                  <button className="px-8 py-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white font-medium hover:bg-white/20 transition-all duration-300 group">
                    <span className="relative z-10 flex items-center justify-center">
                      <span>{heroSectionCopy.cta}</span>
                      <svg className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </span>
                  </button>
                  
                  {/* Secondary CTA */}
                  <a 
                    href="#projects" 
                    className="px-8 py-4 text-white flex items-center justify-center hover:text-purple-300 transition-colors duration-300"
                  >
                    <span>{heroSectionCopy.exploreCta}</span>
                    <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </a>
                </motion.div>
              </motion.div>
              
              {/* Right Column - Floating 3D Elements */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.2, delay: 0.3 }}
                className="hidden lg:flex justify-center items-center relative"
                style={{ perspective: "1000px" }}
              >
                {/* Floating Elements */}
                <div className="relative h-[500px] w-[500px]">
                  {/* Floating Circles */}
                  <motion.div
                    animate={{ 
                      rotateY: [0, 360],
                      rotateX: [0, 15, 0, -15, 0],
                    }}
                    transition={{ 
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                    className="absolute inset-0"
                  >
                    {/* Floating Elements */}
                    <motion.div
                      animate={{ y: [-20, 20] }}
                      transition={{ duration: 5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                      className="absolute top-0 left-1/4 w-32 h-32 rounded-full bg-gradient-to-br from-purple-500/30 to-pink-500/30 backdrop-blur-md border border-white/20"
                    />
                    <motion.div
                      animate={{ y: [20, -20] }}
                      transition={{ duration: 7, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                      className="absolute bottom-10 right-10 w-48 h-48 rounded-full bg-gradient-to-tr from-indigo-500/20 to-purple-500/20 backdrop-blur-md border border-white/20"
                    />
                    <motion.div
                      animate={{ y: [-10, 30] }}
                      transition={{ duration: 6, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                      className="absolute top-1/4 right-0 w-24 h-24 rounded-full bg-gradient-to-bl from-fuchsia-500/30 to-pink-500/30 backdrop-blur-md border border-white/20"
                    />
                    
                    {/* Floating Rectangle */}
                    <motion.div
                      animate={{ 
                        rotateZ: [0, 10, 0, -10, 0],
                        y: [0, -15, 0, 15, 0]
                      }}
                      transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-2xl bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-md border border-white/20 flex items-center justify-center"
                    >
                      <span className="text-6xl font-bold text-white/30">05</span>
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="relative z-20 pb-20 flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="flex flex-col items-center cursor-pointer"
            onClick={scrollToNextSection}
          >
            <span className="text-white/80 text-sm mb-2">
              {heroSectionCopy.scrollText}
            </span>
            <div className="w-8 h-12 rounded-full border-2 border-white/30 flex justify-center pt-2">
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="w-1 h-2 bg-white/80 rounded-full"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
