"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { clientsSectionCopy } from "../copy";
import Image from "next/image";

export default function Clients() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  // Binary code background
  const BinaryBackground = () => {
    return (
      <div className="absolute inset-0 opacity-5 overflow-hidden">
        <div className="absolute inset-0 font-mono text-[8px] text-cyan-500 leading-none select-none">
          {Array.from({ length: 100 }).map((_, rowIndex) => (
            <div key={rowIndex} className="whitespace-nowrap">
              {Array.from({ length: 200 }).map((_, colIndex) => (
                <span key={`${rowIndex}-${colIndex}`}>
                  {Math.random() > 0.5 ? "1" : "0"}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <section id="clients" className="relative py-20 bg-gray-900 overflow-hidden">
      {/* Background elements */}
      <BinaryBackground />
      
      {/* Glowing accent elements */}
      <motion.div
        className="absolute top-1/3 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full filter blur-[100px]"
        animate={{
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full filter blur-[100px]"
        animate={{
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{ duration: 8, repeat: Infinity, delay: 4 }}
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
              {clientsSectionCopy.heading}
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-gray-300 text-lg"
          >
            {clientsSectionCopy.description}
          </motion.p>
        </div>

        {/* Clients grid with futuristic holographic cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {clientsSectionCopy.clients.map((client, index) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              whileHover={{
                scale: 1.05,
                rotateY: 10,
                z: 10,
              }}
              className="group"
            >
              {/* Holographic client card */}
              <div className="relative h-32 flex items-center justify-center p-6 rounded-lg bg-gradient-to-br from-gray-800/60 to-gray-900/80 backdrop-blur-sm border border-cyan-500/20 transition-all duration-300 group-hover:border-cyan-400/50 group-hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] transform perspective-1000">
                {/* Logo */}
                <div className="relative w-full h-full flex items-center justify-center">
                  <div className="relative w-24 h-24">
                    <Image
                      src={client.logo}
                      alt={client.name}
                      fill
                      className="object-contain filter grayscale opacity-70 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100"
                    />
                  </div>
                </div>
                
                {/* Digital effects on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 overflow-hidden">
                  {/* Scan line */}
                  <motion.div
                    className="absolute inset-x-0 h-[1px] bg-cyan-400/50"
                    animate={{
                      top: ["0%", "100%"],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                  
                  {/* Corner accents */}
                  <div className="absolute top-0 left-0 w-6 h-6">
                    <div className="absolute top-0 left-0 w-full h-[1px] bg-cyan-400" />
                    <div className="absolute top-0 left-0 w-[1px] h-full bg-cyan-400" />
                  </div>
                  <div className="absolute top-0 right-0 w-6 h-6">
                    <div className="absolute top-0 right-0 w-full h-[1px] bg-cyan-400" />
                    <div className="absolute top-0 right-0 w-[1px] h-full bg-cyan-400" />
                  </div>
                  <div className="absolute bottom-0 left-0 w-6 h-6">
                    <div className="absolute bottom-0 left-0 w-full h-[1px] bg-cyan-400" />
                    <div className="absolute bottom-0 left-0 w-[1px] h-full bg-cyan-400" />
                  </div>
                  <div className="absolute bottom-0 right-0 w-6 h-6">
                    <div className="absolute bottom-0 right-0 w-full h-[1px] bg-cyan-400" />
                    <div className="absolute bottom-0 right-0 w-[1px] h-full bg-cyan-400" />
                  </div>
                </div>
                
                {/* Tooltip with client name */}
                <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 px-4 py-1 bg-gray-800/90 backdrop-blur-sm border border-cyan-500/30 rounded text-cyan-400 text-xs font-mono whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {client.name}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
