"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { servicesSectionCopy } from "../copy";
import Image from "next/image";

export default function Services() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const [activeService, setActiveService] = useState(0);

  // Isometric grid background
  const IsometricGrid = () => {
    return (
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="isometric-grid"
              width="56"
              height="100"
              patternUnits="userSpaceOnUse"
              patternTransform="scale(2)"
            >
              <path
                d="M28 66L0 50L0 16L28 0L56 16L56 50L28 66L28 100"
                fill="none"
                stroke="#06b6d4"
                strokeWidth="0.5"
              />
              <path
                d="M28 0L28 34L0 50L0 16L28 0Z"
                fill="none"
                stroke="#06b6d4"
                strokeWidth="0.5"
              />
              <path
                d="M28 34L28 0L56 16L56 50L28 34Z"
                fill="none"
                stroke="#06b6d4"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#isometric-grid)" />
        </svg>
      </div>
    );
  };

  return (
    <section id="services" className="relative py-24 bg-gray-900 overflow-hidden">
      {/* Background elements */}
      <IsometricGrid />
      
      {/* Glowing accent elements */}
      <motion.div
        className="absolute top-1/4 right-0 w-96 h-96 bg-blue-600/20 rounded-full filter blur-[100px]"
        animate={{
          opacity: [0.2, 0.3, 0.2],
          x: [0, 50, 0],
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-1/4 left-0 w-96 h-96 bg-purple-600/20 rounded-full filter blur-[100px]"
        animate={{
          opacity: [0.2, 0.3, 0.2],
          x: [0, -50, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, delay: 5 }}
      />

      <div className="container mx-auto px-4" ref={containerRef}>
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-6 tracking-tight"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
              {servicesSectionCopy.heading}
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-gray-300 text-lg"
          >
            {servicesSectionCopy.description}
          </motion.p>
        </div>

        {/* Services display with 3D isometric effect */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Service navigation - Left side on desktop */}
          <div className="lg:col-span-4 space-y-4">
            {servicesSectionCopy.services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
                className={`cursor-pointer relative group`}
                onClick={() => setActiveService(index)}
              >
                <div
                  className={`relative p-6 rounded-lg transition-all duration-300 ${
                    activeService === index
                      ? "bg-gradient-to-r from-gray-800/80 to-gray-900/80 border-l-4 border-cyan-500 shadow-[0_0_15px_rgba(6,182,212,0.2)]"
                      : "bg-gray-800/30 hover:bg-gray-800/50 border-l-4 border-transparent"
                  }`}
                >
                  <div className="flex items-start">
                    {/* Icon */}
                    <div className={`mr-4 ${
                      activeService === index
                        ? "text-cyan-400"
                        : "text-gray-400 group-hover:text-cyan-400"
                    }`}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={1.5}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d={service.iconPath}
                        />
                      </svg>
                    </div>
                    
                    {/* Text content */}
                    <div>
                      <h3 className={`font-bold text-lg mb-1 ${
                        activeService === index
                          ? "text-white"
                          : "text-gray-200 group-hover:text-white"
                      }`}>
                        {service.title}
                      </h3>
                      <p className={`text-sm transition-colors ${
                        activeService === index
                          ? "text-gray-300"
                          : "text-gray-400 group-hover:text-gray-300"
                      }`}>
                        {service.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Active indicator */}
                  {activeService === index && (
                    <motion.div
                      layoutId="activeServiceIndicator"
                      className="absolute -right-1 top-1/2 transform -translate-y-1/2 w-2 h-8 bg-cyan-500 rounded-l"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </div>
              </motion.div>
            ))}
            
            {/* View all services button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-8 text-center lg:text-left"
            >
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 15px rgba(6, 182, 212, 0.3)",
                }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-3 bg-transparent border border-cyan-500 text-cyan-400 font-medium rounded-md relative overflow-hidden group"
              >
                <span className="relative z-10">{servicesSectionCopy.buttonText}</span>
                <motion.span
                  className="absolute inset-0 bg-cyan-500/10"
                  initial={{ scale: 0, opacity: 0 }}
                  whileHover={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.4 }}
                  style={{ transformOrigin: "center" }}
                />
              </motion.button>
            </motion.div>
          </div>
          
          {/* Service visualization - Right side on desktop */}
          <div className="lg:col-span-8 relative min-h-[400px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService}
                initial={{ opacity: 0, scale: 0.9, rotateY: -10 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                exit={{ opacity: 0, scale: 0.9, rotateY: 10 }}
                transition={{ duration: 0.5 }}
                className="relative aspect-video rounded-lg overflow-hidden transform perspective-1000"
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Service image */}
                <div className="absolute inset-0">
                  <Image
                    src={servicesSectionCopy.services[activeService].image}
                    alt={servicesSectionCopy.services[activeService].title}
                    fill
                    className="object-cover"
                  />
                </div>
                
                {/* Digital overlay effects */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900/70 via-gray-900/50 to-gray-900/70 backdrop-blur-[1px]" />
                
                {/* Scanning line effect */}
                <motion.div
                  className="absolute inset-x-0 bg-gradient-to-b from-cyan-500/40 to-transparent"
                  animate={{
                    top: ["0%", "100%", "0%"],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  style={{ height: "5%" }}
                />
                
                {/* Grid overlay */}
                <div className="absolute inset-0 grid grid-cols-8 grid-rows-4 opacity-20">
                  {[...Array(32)].map((_, i) => (
                    <div key={i} className="border border-cyan-500/30" />
                  ))}
                </div>
                
                {/* Data points */}
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-3 h-3 rounded-full bg-cyan-400/80"
                    style={{
                      left: `${20 + i * 15}%`,
                      top: `${30 + (i % 3) * 20}%`,
                    }}
                    animate={{
                      opacity: [0.4, 1, 0.4],
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.3,
                    }}
                  >
                    <motion.div
                      className="absolute inset-0 rounded-full bg-cyan-400"
                      animate={{
                        opacity: [0.2, 0.5, 0.2],
                        scale: [1, 2, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.3,
                      }}
                    />
                  </motion.div>
                ))}
                
                {/* Content overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center max-w-md px-6">
                    <h3 className="text-3xl font-bold text-white mb-4 drop-shadow-lg">
                      {servicesSectionCopy.services[activeService].title}
                    </h3>
                    <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-4" />
                    <p className="text-gray-200 text-lg drop-shadow-lg">
                      {servicesSectionCopy.services[activeService].description}
                    </p>
                  </div>
                </div>
                
                {/* Corner accents */}
                <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-cyan-400" />
                <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-cyan-400" />
                <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-cyan-400" />
                <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-cyan-400" />
              </motion.div>
            </AnimatePresence>
            
            {/* 3D platform effect */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 0.7 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 w-[90%] h-10 bg-gradient-to-b from-cyan-500/30 to-transparent blur-md"
              style={{ 
                perspective: "1000px",
                transform: "rotateX(60deg) translateZ(-50px)",
                transformStyle: "preserve-3d"
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
