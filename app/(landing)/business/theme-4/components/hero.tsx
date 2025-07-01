"use client";

import React from "react";
import { motion } from "framer-motion";
import { BusinessData } from "../../page";

interface HeroProps {
  businessData: BusinessData;
}

export default function Hero({ businessData }: HeroProps) {
  return (
    <section className="relative min-h-screen bg-white overflow-hidden">
      {/* Diagonal Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-600 to-emerald-800 transform skew-y-3 origin-top-left scale-110"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-white transform skew-y-3 origin-top-right"></div>
      </div>

      {/* Geometric Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="absolute top-20 left-20 w-32 h-32 bg-emerald-300 rounded-full"
        />
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 0.2, x: 0 }}
          transition={{ duration: 1.5, delay: 1 }}
          className="absolute top-1/3 right-1/4 w-16 h-16 bg-emerald-400 transform rotate-45"
        />
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 0.15, y: 0 }}
          transition={{ duration: 2, delay: 1.5 }}
          className="absolute bottom-20 left-1/3 w-24 h-24 border-4 border-emerald-300 rounded-full"
        />
      </div>

      {/* Announcement Banner */}
      {businessData.metadata?.announcement && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-20 bg-emerald-50 backdrop-blur-sm border-b border-emerald-200"
        >
          <div className="container mx-auto px-6 py-3">
            <p className="text-center text-emerald-800 text-sm font-medium">
              📢 {businessData.metadata.announcement}
            </p>
          </div>
        </motion.div>
      )}

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-white lg:pr-8"
          >
            {/* Business Logo */}
            {businessData.img && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="mb-6"
              >
                <img
                  src={businessData.img}
                  alt={businessData.name}
                  className="w-20 h-20 rounded-xl object-cover border-4 border-white shadow-2xl"
                />
              </motion.div>
            )}

            {/* Business Name */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.7 }}
              className="text-5xl lg:text-7xl font-bold mb-6 leading-tight"
            >
              {businessData.name}
            </motion.h1>

            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="inline-flex items-center px-4 py-2 bg-emerald-500 rounded-full text-white font-semibold text-sm mb-6"
            >
              <div className="w-2 h-2 bg-green-300 rounded-full mr-2 animate-pulse"></div>
              {businessData.status}
            </motion.div>

            {/* Business ID Display */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="mb-8"
            >
              <p className="text-emerald-100 text-lg">
                Business ID: <span className="font-mono font-bold text-white">{businessData.id}</span>
              </p>
            </motion.div>

            {/* Description */}
            {businessData.metadata?.description && (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1.3 }}
                className="text-xl text-emerald-50 leading-relaxed mb-8"
              >
                {businessData.metadata.description}
              </motion.p>
            )}

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button className="px-8 py-4 bg-white text-emerald-700 font-bold rounded-lg hover:bg-emerald-50 transition-all duration-300 transform hover:scale-105 shadow-xl">
                Explore Services
              </button>
              <button className="px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-emerald-700 transition-all duration-300">
                Contact Us
              </button>
            </motion.div>
          </motion.div>

          {/* Right Content - Floating Business Logo */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="relative flex items-center justify-center"
          >
            {businessData.img && (
              <motion.div
                animate={{ 
                  y: [0, -20, 0],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{ 
                  duration: 6, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                className="relative"
              >
                <div className="w-80 h-80 rounded-3xl bg-white shadow-2xl p-8 flex items-center justify-center">
                  <img
                    src={businessData.img}
                    alt={businessData.name}
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
                
                {/* Floating Achievement Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 2 }}
                  className="absolute -top-4 -right-4 bg-emerald-500 text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg"
                >
                  ✨ Premium
                </motion.div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>

      {/* Bottom Decorative Line */}
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        transition={{ duration: 2, delay: 2 }}
        className="absolute bottom-0 left-0 h-1 bg-emerald-400"
      />
    </section>
  );
} 