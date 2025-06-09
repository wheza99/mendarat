"use client";

import { motion, useInView } from "framer-motion";
import { servicesSectionCopy } from "../copy";
import { useRef } from "react";

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="relative py-20 bg-gray-900 text-cyan-400">
      {/* Background grid */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDAsIDI1NSwgMjU1LCAwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20"></div>
      
      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-mono mb-6 text-white">
            {servicesSectionCopy.heading}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            {servicesSectionCopy.description}
          </p>
          <button className="relative px-8 py-4 border border-cyan-400 text-cyan-400 font-mono text-lg rounded-sm overflow-hidden group transition-all duration-300 hover:text-black">
            <span className="relative z-10">{servicesSectionCopy.buttonText}</span>
            <div className="absolute inset-0 bg-cyan-400 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
          </button>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesSectionCopy.services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
              transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
              className="relative group"
            >
              {/* Holographic frame */}
              <div className="absolute -inset-2 border border-cyan-400/50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute -top-1 -left-1 w-6 h-6 border-l-2 border-t-2 border-cyan-400"></div>
                <div className="absolute -top-1 -right-1 w-6 h-6 border-r-2 border-t-2 border-cyan-400"></div>
                <div className="absolute -bottom-1 -left-1 w-6 h-6 border-l-2 border-b-2 border-cyan-400"></div>
                <div className="absolute -bottom-1 -right-1 w-6 h-6 border-r-2 border-b-2 border-cyan-400"></div>
              </div>

              {/* Service card */}
              <div className="relative bg-black/50 backdrop-blur-sm border border-gray-700 rounded-lg p-6 h-full transition-all duration-300 group-hover:border-cyan-400/50 group-hover:bg-black/70">
                {/* Image */}
                <div className="relative mb-6 overflow-hidden rounded-lg">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  
                  {/* Icon overlay */}
                  <div className="absolute top-4 right-4 w-12 h-12 bg-cyan-400/20 backdrop-blur-sm rounded-lg flex items-center justify-center border border-cyan-400/50">
                    <svg
                      className="w-6 h-6 text-cyan-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={service.iconPath} />
                    </svg>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white font-mono mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {service.description}
                </p>

                {/* Scan line animation */}
                <motion.div
                  animate={{
                    x: ['-100%', '100%'],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.2,
                    ease: "linear"
                  }}
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 group-hover:opacity-60"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Digital particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: ['-10%', '110%'],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: Math.random() * 4 + 3,
              repeat: Infinity,
              delay: i * 0.4,
              ease: "linear"
            }}
            className="absolute w-0.5 h-12 bg-gradient-to-b from-transparent via-cyan-400 to-transparent"
            style={{
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>
    </section>
  );
}