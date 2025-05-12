"use client";

import { heroSectionCopy } from "../copy";
import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronDownIcon } from "@heroicons/react/outline";

export default function Hero() {
  const scrollToNextSection = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative h-screen overflow-hidden bg-gray-100">
      {/* Diagonal Split Layout */}
      <div className="absolute inset-0 z-0">
        {/* Left side - solid color with pattern */}
        <div className="absolute inset-0 w-full h-full bg-emerald-900">
          {/* Decorative pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full">
              {[...Array(10)].map((_, i) => (
                <div 
                  key={i} 
                  className="absolute rounded-full bg-white"
                  style={{
                    width: `${Math.random() * 10 + 5}px`,
                    height: `${Math.random() * 10 + 5}px`,
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    opacity: Math.random() * 0.5 + 0.2
                  }}
                />
              ))}
            </div>
          </div>
        </div>
        
        {/* Right side - image */}
        <div className="absolute top-0 right-0 h-full w-1/2 overflow-hidden">
          <div className="absolute inset-0 bg-emerald-900 transform -skew-x-12 -translate-x-1/3 origin-top-right" />
          <div className="absolute inset-0 overflow-hidden">
            <Image
              src={heroSectionCopy.backgroundImage}
              alt="Modern Architecture"
              fill
              className="object-cover object-center"
              priority
            />
            <div className="absolute inset-0 bg-emerald-900/30 backdrop-blur-[2px]" />
          </div>
        </div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 h-full flex flex-col">
        {/* Navigation */}
        <header className="py-6 px-8">
          <nav className="max-w-7xl mx-auto flex justify-between items-center">
            <div className="text-white font-bold text-2xl">STUDIO</div>
            <ul className="hidden md:flex space-x-8 text-white">
              {["Home", "About", "Services", "Projects", "Contact"].map((item, index) => (
                <li key={index}>
                  <a 
                    href={`#${item.toLowerCase()}`} 
                    className="text-sm tracking-wider hover:text-emerald-300 transition-colors duration-300"
                  >
                    {item.toUpperCase()}
                  </a>
                </li>
              ))}
            </ul>
            <button className="md:hidden text-white">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </nav>
        </header>

        {/* Main Content */}
        <div className="flex-grow flex items-center">
          <div className="max-w-7xl mx-auto px-8 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Left Column - Text Content */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex flex-col justify-center"
              >
                <div className="mb-6">
                  <span className="inline-block text-emerald-300 text-sm tracking-widest mb-2">
                    {heroSectionCopy.subheading}
                  </span>
                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-none">
                    <span className="block">{heroSectionCopy.heading1}</span>
                    <span className="block mt-2 text-emerald-300">{heroSectionCopy.heading2}</span>
                  </h1>
                </div>
                
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="text-white/80 text-lg max-w-md mb-8"
                >
                  {heroSectionCopy.description}
                </motion.p>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="flex flex-wrap gap-4"
                >
                  <button className="px-8 py-4 bg-emerald-500 text-white font-medium tracking-wider hover:bg-emerald-600 transition-colors duration-300 transform hover:-translate-y-1 hover:shadow-lg">
                    {heroSectionCopy.cta}
                  </button>
                  <a 
                    href="#projects" 
                    className="px-8 py-4 border border-white/30 text-white flex items-center hover:bg-white/10 transition-all duration-300"
                  >
                    <span>{heroSectionCopy.secondaryCta}</span>
                    <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </motion.div>
              </motion.div>
              
              {/* Right Column - Decorative Element */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="hidden lg:flex items-center justify-center"
              >
                <div className="relative">
                  {/* Geometric decorative elements */}
                  <div className="absolute -top-32 -left-32 w-64 h-64 border border-emerald-500/30 rotate-45" />
                  <div className="absolute -bottom-32 -right-32 w-64 h-64 border border-emerald-500/30 rotate-45" />
                  <div className="relative z-10 w-96 h-96 flex items-center justify-center">
                    <div className="w-full h-full border border-emerald-400/40 rotate-45 absolute" />
                    <div className="w-3/4 h-3/4 border border-emerald-300/50 rotate-45 absolute" />
                    <div className="w-1/2 h-1/2 bg-emerald-500/20 rotate-45 absolute backdrop-blur-sm" />
                    <div className="text-white text-8xl font-bold opacity-20">25+</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="relative z-10 pb-10 flex justify-center"
        >
          <div 
            className="flex flex-col items-center cursor-pointer"
            onClick={scrollToNextSection}
          >
            <span className="text-white text-sm mb-2">
              {heroSectionCopy.scrollText}
            </span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="bg-emerald-500/30 backdrop-blur-sm rounded-full p-2"
            >
              <ChevronDownIcon className="h-5 w-5 text-white" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
