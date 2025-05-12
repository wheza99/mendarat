"use client";

import { heroSectionCopy } from "../copy";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";

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
    <section className="relative min-h-screen overflow-hidden">
      {/* Background with Parallax Effect */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url(${heroSectionCopy.backgroundImage})`,
            transform: `translateY(${scrollY * 0.15}px)` 
          }}
        />
        {/* Gradient Overlay with Teal/Turquoise Tones */}
        <div className="absolute inset-0 bg-gradient-to-r from-teal-900/80 via-teal-700/70 to-emerald-900/80" />
        
        {/* Flowing Organic Shapes */}
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
              className="text-white font-bold text-2xl"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-300">NATURAL</span>
              <span className="text-white">DESIGN</span>
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
                  <div className="h-1 w-20 bg-coral-400 rounded mb-6"></div>
                  <h2 className="text-sm md:text-base tracking-[0.3em] text-teal-200 mb-4">
                    {heroSectionCopy.tagline}
                  </h2>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2">
                    {heroSectionCopy.heading1}
                  </h1>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-teal-300">
                    {heroSectionCopy.heading2}
                  </h1>
                  <p className="text-lg md:text-xl text-white/80 max-w-xl mb-8">
                    {heroSectionCopy.description}
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-4">
                  <Link 
                    href="#projects"
                    className="px-8 py-3 bg-gradient-to-r from-teal-500 to-emerald-600 text-white rounded-full text-sm font-medium tracking-wider hover:from-teal-600 hover:to-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    {heroSectionCopy.cta}
                  </Link>
                  <Link 
                    href="#process"
                    className="px-8 py-3 bg-transparent border border-white/30 text-white rounded-full text-sm font-medium tracking-wider hover:bg-white/10 transition-all duration-300"
                  >
                    {heroSectionCopy.exploreCta}
                  </Link>
                </div>
              </motion.div>
              
              {/* Right Column - Floating Nature Elements */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.2, delay: 0.5 }}
                className="hidden lg:flex justify-center items-center relative"
                style={{ perspective: "1000px" }}
              >
                {/* Floating Elements */}
                <div className="relative h-[500px] w-[500px]">
                  <motion.div
                    animate={{ 
                      rotateY: [0, 360],
                      rotateX: [0, 15, 0, -15, 0],
                    }}
                    transition={{ 
                      duration: 25,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                    className="absolute inset-0"
                  >
                    {/* Floating Leaf Elements */}
                    <motion.div
                      animate={{ y: [-20, 20] }}
                      transition={{ duration: 6, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                      className="absolute top-20 left-20 w-32 h-32"
                    >
                      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-teal-400/30">
                        <path fill="currentColor" d="M45.7,-77.2C59.5,-69.2,71.3,-57.5,79.1,-43.3C86.9,-29.1,90.8,-12.4,89.8,4.1C88.7,20.6,82.8,36.9,72.3,49.3C61.9,61.7,47,70.2,31.5,75.5C16,80.9,-0.2,83.2,-15.6,79.9C-31.1,76.6,-45.9,67.7,-58.9,56C-71.9,44.3,-83.1,29.8,-87.3,13.3C-91.4,-3.2,-88.5,-21.7,-80.3,-37.2C-72.1,-52.8,-58.6,-65.3,-43.5,-72.6C-28.4,-79.9,-11.7,-81.9,2.5,-86C16.7,-90.1,31.9,-85.3,45.7,-77.2Z" transform="translate(100 100)" />
                      </svg>
                    </motion.div>
                    
                    <motion.div
                      animate={{ y: [20, -20] }}
                      transition={{ duration: 7, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                      className="absolute bottom-20 right-20 w-40 h-40"
                    >
                      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-emerald-500/30">
                        <path fill="currentColor" d="M44.2,-76.3C56.4,-69.1,65.2,-55.4,72.6,-41C80,-26.6,85.9,-11.5,84.6,2.9C83.3,17.3,74.8,31,65.5,43.9C56.2,56.8,46.1,68.8,33.3,75.6C20.5,82.3,5,83.8,-10.3,81.5C-25.6,79.2,-40.7,73.1,-53.6,63.5C-66.6,53.9,-77.3,40.8,-82.9,25.6C-88.5,10.4,-88.9,-6.9,-83.7,-21.9C-78.5,-36.9,-67.7,-49.6,-54.8,-57.1C-41.9,-64.6,-26.9,-66.9,-12.6,-69.9C1.7,-72.9,15.3,-76.7,28.9,-77.8C42.5,-78.9,56.1,-77.3,44.2,-76.3Z" transform="translate(100 100)" />
                      </svg>
                    </motion.div>
                    
                    <motion.div
                      animate={{ y: [-15, 25] }}
                      transition={{ duration: 8, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                      className="absolute top-40 right-10 w-24 h-24"
                    >
                      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-coral-400/30">
                        <path fill="currentColor" d="M48.2,-73.5C63.9,-66.9,79.1,-57.3,87.3,-43.4C95.4,-29.5,96.5,-11.3,93.2,5.7C89.9,22.8,82.3,38.6,71.5,51.6C60.7,64.6,46.8,74.7,31.7,79.2C16.6,83.7,0.4,82.7,-16.2,79.6C-32.8,76.6,-49.9,71.5,-62.3,60.8C-74.8,50.1,-82.6,33.7,-85.9,16.2C-89.2,-1.3,-87.9,-20,-81.2,-36.2C-74.5,-52.4,-62.2,-66.1,-47.4,-73.1C-32.5,-80.1,-15.1,-80.5,0.6,-81.5C16.4,-82.5,32.5,-84.1,48.2,-73.5Z" transform="translate(100 100)" />
                      </svg>
                    </motion.div>
                    
                    {/* Central Leaf Element */}
                    <motion.div
                      animate={{ 
                        rotateZ: [0, 5, 0, -5, 0],
                        y: [0, -10, 0, 10, 0]
                      }}
                      transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64"
                    >
                      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-teal-400/40">
                        <path fill="currentColor" d="M39.9,-65.7C54.3,-60.5,70.2,-54.3,79.7,-42.6C89.2,-31,92.3,-13.9,88.9,1.4C85.5,16.8,75.6,30.4,65.3,42.6C55,54.8,44.3,65.6,31.2,72.1C18.1,78.6,2.7,80.8,-12.8,78.8C-28.3,76.9,-43.9,70.8,-56.5,60.3C-69.1,49.9,-78.7,35.1,-83.4,18.6C-88.1,2.1,-87.9,-16.2,-80.9,-30.7C-73.9,-45.2,-60.1,-55.9,-45.6,-61.2C-31.1,-66.5,-15.5,-66.4,-1.4,-64.3C12.8,-62.3,25.5,-58.3,39.9,-65.7Z" transform="translate(100 100)" />
                      </svg>
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
