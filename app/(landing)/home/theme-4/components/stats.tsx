"use client";

import { statsSectionCopy } from "../copy";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Stats() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-1/3 h-full bg-emerald-50 transform -skew-x-12" />
      <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-100 rounded-full -mr-32 -mt-32 opacity-70" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-emerald-100 rounded-full -ml-24 -mb-24 opacity-70" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left Column - Content */}
          <div className="lg:col-span-5 space-y-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {/* Subtitle */}
              <p className="text-emerald-600 font-medium tracking-widest">
                {statsSectionCopy.subtitle}
              </p>

              {/* Heading */}
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                <span className="block">{statsSectionCopy.heading1}</span>
                <span className="block text-emerald-600">{statsSectionCopy.heading2}</span>
              </h2>

              {/* Description */}
              <p className="text-lg text-gray-600 max-w-2xl">
                {statsSectionCopy.description}
              </p>

              {/* Button */}
              <div>
                <button className="group relative inline-flex items-center px-8 py-4 bg-emerald-900 text-white font-medium overflow-hidden">
                  <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-emerald-700 rounded-full group-hover:w-80 group-hover:h-80"></span>
                  <span className="relative flex items-center">
                    {statsSectionCopy.buttonText}
                    <svg className="ml-3 w-5 h-5 transition-transform duration-300 group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                </button>
              </div>
            </motion.div>

            {/* Stats with Horizontal Layout */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              viewport={{ once: true }}
              className="grid grid-cols-3 gap-8"
            >
              {statsSectionCopy.stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-emerald-600 to-emerald-400 rounded-lg blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>
                  <div className="relative bg-white p-6 rounded-lg shadow-sm">
                    <div className="text-5xl font-bold text-emerald-600 flex items-baseline">
                      {stat.value}
                      <span className="text-emerald-500 ml-1">{stat.suffix}</span>
                    </div>
                    <p className="text-gray-600 mt-2 text-sm">{stat.label}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Column - Image with Geometric Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-7 relative"
          >
            <div className="relative">
              {/* Geometric Frame */}
              <div className="absolute -inset-6 border-2 border-emerald-200 rounded-tr-3xl rounded-bl-3xl" />
              
              {/* Main Image */}
              <div className="relative h-[600px] rounded-tr-3xl rounded-bl-3xl overflow-hidden shadow-2xl">
                <Image
                  src={statsSectionCopy.image}
                  alt={statsSectionCopy.imageAlt}
                  fill
                  className="object-cover"
                />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/20 to-transparent" />
                
                {/* Floating Info Card */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="absolute bottom-8 -left-8 bg-white p-6 rounded-lg shadow-xl max-w-xs"
                >
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
                    <h4 className="font-semibold text-gray-900">Eco-Friendly Design</h4>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Our designs incorporate sustainable materials and energy-efficient solutions to minimize environmental impact.
                  </p>
                </motion.div>
                
                {/* Achievement Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="absolute top-8 -right-8 bg-emerald-900 text-white p-4 rounded-full shadow-xl h-24 w-24 flex flex-col items-center justify-center text-center"
                >
                  <span className="text-xs uppercase tracking-wider">Award</span>
                  <span className="font-bold text-sm">2024</span>
                  <span className="text-xs">Excellence</span>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
