"use client";

import { heroSectionCopy } from "../copy";
import { motion } from "framer-motion";
import { ArrowDownIcon } from "@heroicons/react/outline";
import Image from "next/image";

export default function Hero() {
  const scrollToNextSection = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative h-screen overflow-hidden bg-gray-900">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={heroSectionCopy.backgroundImage}
          alt="Modern Interior"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/50" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-left"
            >
              {/* Decorative Line */}
              <div className="w-20 h-1 bg-blue-500 mb-8"></div>
              
              {/* Headings */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                <span className="block">{heroSectionCopy.heading1}</span>
                <span className="block mt-2 text-blue-400">{heroSectionCopy.heading2}</span>
              </h1>

              {/* Description */}
              <p className="mt-6 text-lg text-gray-300 max-w-lg">
                {heroSectionCopy.description}
              </p>

              {/* CTA Button */}
              <div className="mt-10 flex items-center space-x-5">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-blue-500 text-white font-medium rounded-sm hover:bg-blue-600 transition-colors duration-300"
                >
                  {heroSectionCopy.cta}
                </motion.button>
                
                {/* Secondary Action */}
                <a 
                  href="#projects" 
                  className="text-gray-300 flex items-center hover:text-blue-400 transition-colors duration-300"
                >
                  <span className="mr-2">Lihat Portofolio</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </motion.div>
            
            {/* Right Column - Decorative Element */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden lg:block"
            >
              <div className="relative h-80 w-80 mx-auto">
                <div className="absolute inset-0 border-2 border-blue-500/30 rounded-full"></div>
                <div className="absolute inset-8 border-2 border-blue-400/40 rounded-full"></div>
                <div className="absolute inset-16 border-2 border-blue-300/50 rounded-full"></div>
                <div className="absolute inset-24 border-2 border-blue-200/60 rounded-full"></div>
                <div className="absolute inset-32 bg-blue-500/20 rounded-full backdrop-blur-sm"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="flex flex-col items-center cursor-pointer"
          onClick={scrollToNextSection}
        >
          <span className="text-gray-300 text-sm mb-2">
            {heroSectionCopy.scrollText}
          </span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ArrowDownIcon className="h-6 w-6 text-blue-400" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
