"use client";

import { processSectionCopy } from "../copy";
import { motion } from "framer-motion";

export default function Process() {
  return (
    <section id="process" className="relative py-24 bg-black overflow-hidden">
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
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-70"></div>

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
            {processSectionCopy.heading}
          </h2>
          <p className="text-blue-100 opacity-90 max-w-2xl mx-auto">
            {processSectionCopy.description}
          </p>
        </motion.div>

        {/* Process steps */}
        <div className="relative max-w-4xl mx-auto">
          {/* Connecting line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-pink-500 via-purple-500 to-blue-500 opacity-50 hidden md:block"></div>
          
          {processSectionCopy.steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative flex flex-col md:flex-row ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } items-center mb-16 last:mb-0`}
            >
              {/* Step number */}
              <div className="relative z-10 flex-shrink-0 w-20 h-20 flex items-center justify-center mb-6 md:mb-0">
                <div className="absolute inset-0 bg-gradient-to-br from-pink-600 to-blue-600 rounded-full opacity-20 blur-md"></div>
                <div className="relative flex items-center justify-center w-16 h-16 rounded-full bg-black border-2 border-pink-500 shadow-[0_0_15px_rgba(219,39,119,0.5)]">
                  <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-blue-400">
                    {step.number}
                  </span>
                </div>
              </div>
              
              {/* Step content */}
              <div className={`md:w-[calc(50%-2.5rem)] ${
                index % 2 === 0 ? "md:ml-10" : "md:mr-10"
              }`}>
                <div className="relative p-6 rounded-lg overflow-hidden">
                  {/* Background glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-600/10 to-blue-600/10 rounded-lg -m-1 blur-sm"></div>
                  
                  {/* Content background */}
                  <div className="absolute inset-0 rounded-lg border border-pink-500/30 bg-black/50 backdrop-blur-sm"></div>
                  
                  {/* VHS tracking lines effect */}
                  <div className="absolute inset-0 bg-scanlines opacity-10"></div>
                  
                  {/* Corner accents */}
                  <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-pink-500 opacity-80"></div>
                  <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-blue-500 opacity-80"></div>
                  
                  {/* Content */}
                  <div className="relative">
                    <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                    <p className="text-blue-100 opacity-80">{step.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
