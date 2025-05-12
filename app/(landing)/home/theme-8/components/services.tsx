"use client";

import { servicesSectionCopy } from "../copy";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Services() {
  return (
    <section id="services" className="relative py-24 bg-black overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/20 to-black"></div>
      
      {/* Horizontal neon line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-70"></div>
      
      {/* Retro sun element */}
      <div className="absolute bottom-0 left-0 w-full h-[30vh] bg-gradient-to-t from-transparent to-transparent">
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[140%] h-[50vh] rounded-t-full bg-gradient-to-t from-pink-600/10 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500">
            {servicesSectionCopy.heading}
          </h2>
          <p className="text-blue-100 opacity-90 max-w-2xl mx-auto">
            {servicesSectionCopy.description}
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {servicesSectionCopy.services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              {/* Card background with glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-pink-600/20 to-blue-600/20 rounded-lg transform group-hover:scale-[1.02] transition-all duration-300 -m-1 blur-sm"></div>
              
              <div className="relative overflow-hidden rounded-lg border border-pink-500/30 bg-black/50 backdrop-blur-sm group-hover:border-pink-500/60 transition-all duration-300">
                {/* Service image */}
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10"></div>
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={600}
                    height={300}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                  />
                  
                  {/* VHS tracking lines effect */}
                  <div className="absolute inset-0 bg-scanlines opacity-20 z-20"></div>
                  
                  {/* Corner accents */}
                  <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-pink-500 opacity-80"></div>
                  <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-blue-500 opacity-80"></div>
                </div>
                
                {/* Service content */}
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-br from-pink-500 to-blue-500 mr-4 shadow-[0_0_10px_rgba(219,39,119,0.5)]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5 text-white"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d={service.iconPath} />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-white">{service.title}</h3>
                  </div>
                  <p className="text-blue-100 opacity-80 mb-6">{service.description}</p>
                  
                  {/* Horizontal line */}
                  <div className="h-px w-full bg-gradient-to-r from-pink-500/50 to-blue-500/50 mb-6"></div>
                  
                  <Link href="#contact" className="inline-flex items-center text-pink-400 hover:text-pink-300 font-medium transition-colors duration-300">
                    Learn more
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-4 w-4 ml-2" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center"
        >
          <Link href="#contact">
            <button className="px-8 py-3 bg-transparent border-2 border-blue-500 text-blue-400 rounded-md hover:bg-blue-900/30 transition-all duration-300 font-bold tracking-wide shadow-[0_0_10px_rgba(59,130,246,0.3)] hover:shadow-[0_0_20px_rgba(59,130,246,0.5)]">
              {servicesSectionCopy.buttonText}
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
