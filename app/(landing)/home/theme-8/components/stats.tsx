"use client";

import { statsSectionCopy } from "../copy";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Stats() {
  return (
    <section id="stats" className="relative py-24 bg-black overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 via-purple-900/20 to-black"></div>
      
      {/* Grid overlay */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{ 
          backgroundImage: "linear-gradient(0deg, transparent 24%, rgba(255, 255, 255, .05) 25%, rgba(255, 255, 255, .05) 26%, transparent 27%, transparent 74%, rgba(255, 255, 255, .05) 75%, rgba(255, 255, 255, .05) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(255, 255, 255, .05) 25%, rgba(255, 255, 255, .05) 26%, transparent 27%, transparent 74%, rgba(255, 255, 255, .05) 75%, rgba(255, 255, 255, .05) 76%, transparent 77%, transparent)",
          backgroundSize: "50px 50px"
        }}
      />
      
      {/* Horizontal neon lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-pink-500 to-transparent opacity-70"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-70"></div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Content */}
          <div className="text-white">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-pink-500 font-bold tracking-widest mb-2">{statsSectionCopy.subtitle}</p>
              <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
                  {statsSectionCopy.heading1}
                </span>{" "}
                <span className="text-blue-400">{statsSectionCopy.heading2}</span>
              </h2>
              <p className="text-blue-100 opacity-90 mb-8 max-w-lg">
                {statsSectionCopy.description}
              </p>
              
              <Link href="#process">
                <button className="px-6 py-3 bg-transparent border-2 border-pink-500 text-pink-500 rounded-md hover:bg-pink-900/30 transition-all duration-300 font-bold tracking-wide shadow-[0_0_10px_rgba(236,72,153,0.3)] hover:shadow-[0_0_20px_rgba(236,72,153,0.5)]">
                  {statsSectionCopy.buttonText}
                </button>
              </Link>
            </motion.div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-8 mt-16">
              {statsSectionCopy.stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-600/20 to-blue-600/20 rounded-lg -m-1 blur-sm"></div>
                  <div className="relative border border-pink-500/30 rounded-lg p-6 bg-black/50 backdrop-blur-sm">
                    <div className="text-3xl md:text-4xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-blue-400">
                      {stat.value}{stat.suffix}
                    </div>
                    <div className="text-blue-200 font-medium">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right side - Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-pink-600 to-blue-600 rounded-lg transform rotate-3 opacity-20 blur-xl"></div>
            <div className="relative rounded-lg overflow-hidden border-2 border-pink-500/30 shadow-[0_0_30px_rgba(219,39,119,0.3)]">
              <div className="absolute inset-0 bg-gradient-to-t from-pink-600/40 to-transparent z-10"></div>
              <Image
                src={statsSectionCopy.image}
                alt={statsSectionCopy.imageAlt}
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
              
              {/* VHS tracking lines effect */}
              <div className="absolute inset-0 bg-scanlines opacity-20 z-20"></div>
              
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-pink-500 opacity-80"></div>
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-blue-500 opacity-80"></div>
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-blue-500 opacity-80"></div>
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-pink-500 opacity-80"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
