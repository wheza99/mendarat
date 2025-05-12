"use client";

import { clientsSectionCopy } from "../copy";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Clients() {
  return (
    <section id="clients" className="relative py-20 bg-black overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/10 to-black"></div>
      
      {/* Grid overlay */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{ 
          backgroundImage: "linear-gradient(0deg, transparent 24%, rgba(255, 255, 255, .05) 25%, rgba(255, 255, 255, .05) 26%, transparent 27%, transparent 74%, rgba(255, 255, 255, .05) 75%, rgba(255, 255, 255, .05) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(255, 255, 255, .05) 25%, rgba(255, 255, 255, .05) 26%, transparent 27%, transparent 74%, rgba(255, 255, 255, .05) 75%, rgba(255, 255, 255, .05) 76%, transparent 77%, transparent)",
          backgroundSize: "50px 50px"
        }}
      />
      
      {/* Horizontal neon line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-pink-500 to-transparent opacity-70"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-pink-500">
            {clientsSectionCopy.heading}
          </h2>
          <p className="text-blue-100 opacity-90 max-w-2xl mx-auto">
            {clientsSectionCopy.description}
          </p>
        </motion.div>

        {/* Clients grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {clientsSectionCopy.clients.map((client, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-pink-600/20 to-blue-600/20 rounded-lg transform group-hover:scale-[1.05] transition-all duration-300 -m-1 blur-sm"></div>
              
              <div className="relative h-32 flex items-center justify-center p-6 rounded-lg border border-pink-500/30 bg-black/50 backdrop-blur-sm group-hover:border-pink-500/60 transition-all duration-300">
                {/* Client logo */}
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={120}
                  height={60}
                  className="max-w-[120px] max-h-[60px] object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500 opacity-70 group-hover:opacity-100"
                />
                
                {/* VHS tracking lines effect */}
                <div className="absolute inset-0 bg-scanlines opacity-10"></div>
                
                {/* Corner accents */}
                <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-pink-500 opacity-60"></div>
                <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-blue-500 opacity-60"></div>
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-blue-500 opacity-60"></div>
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-pink-500 opacity-60"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
