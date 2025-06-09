"use client";

import { motion } from "framer-motion";
import { heroSectionCopy } from "../copy";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800">
      
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-cyan-500/20"></div>
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="tech-grid" width="50" height="50" patternUnits="userSpaceOnUse">
              <rect width="50" height="50" fill="none" />
              <path d="M25 0v50M0 25h50" stroke="url(#grid-gradient)" strokeWidth="0.5" />
            </pattern>
            <linearGradient id="grid-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.3" />
            </linearGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#tech-grid)" />
        </svg>
      </div>

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-8 min-h-screen flex items-center">
        <div className="w-full max-w-7xl mx-auto">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left column - Content */}
            <div className="space-y-8">
              
              {/* Tagline */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <span className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 backdrop-blur-sm border border-purple-400/30 text-purple-300 font-medium text-sm tracking-wide">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse"></div>
                  {heroSectionCopy.tagline}
                </span>
              </motion.div>

              {/* Main heading */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="space-y-4"
              >
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-none">
                  {heroSectionCopy.heading1}
                </h1>
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent leading-none">
                  {heroSectionCopy.heading2}
                </h1>
              </motion.div>

              {/* Description */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="max-w-2xl"
              >
                <p className="text-slate-300 text-xl leading-relaxed">
                  {heroSectionCopy.description}
                </p>
              </motion.div>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="flex flex-col sm:flex-row gap-6"
              >
                {/* Primary CTA */}
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(139, 92, 246, 0.3)" }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold text-lg rounded-lg shadow-lg transition-all duration-300"
                >
                  {heroSectionCopy.cta}
                </motion.button>

                {/* Secondary CTA */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border border-slate-600 text-slate-300 font-semibold text-lg rounded-lg backdrop-blur-sm transition-all duration-300 hover:border-purple-400 hover:text-white"
                >
                  {heroSectionCopy.exploreCta}
                </motion.button>
              </motion.div>

              {/* Tech stack indicators */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="flex items-center space-x-8 pt-8"
              >
                <span className="text-slate-400 text-sm">Supported:</span>
                <div className="flex space-x-6">
                  {["React", "Node.js", "Python", "Go"].map((tech, index) => (
                    <motion.div
                      key={tech}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 1.4 + index * 0.1 }}
                      className="px-3 py-1 bg-slate-800/50 border border-slate-700 text-slate-300 text-sm rounded"
                    >
                      {tech}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right column - Tech visualization */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.6 }}
              className="relative"
            >
              {/* Main dashboard mockup */}
              <div className="relative bg-gradient-to-br from-slate-800/50 to-purple-900/50 backdrop-blur-sm border border-slate-600/50 rounded-2xl p-8 shadow-2xl">
                
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="text-slate-400 text-sm font-mono">API Dashboard</div>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  {/* Metrics */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gradient-to-r from-purple-600/20 to-cyan-600/20 p-4 rounded-lg border border-purple-400/20">
                      <div className="text-cyan-400 text-2xl font-bold">99.9%</div>
                      <div className="text-slate-400 text-sm">Uptime</div>
                    </div>
                    <div className="bg-gradient-to-r from-cyan-600/20 to-purple-600/20 p-4 rounded-lg border border-cyan-400/20">
                      <div className="text-purple-400 text-2xl font-bold">45ms</div>
                      <div className="text-slate-400 text-sm">Response</div>
                    </div>
                  </div>

                  {/* API calls chart */}
                  <div className="bg-slate-800/30 p-4 rounded-lg border border-slate-600/30">
                    <div className="text-slate-300 text-sm mb-3">API Calls (24h)</div>
                    <div className="flex items-end space-x-2 h-20">
                      {[40, 65, 35, 80, 55, 90, 70, 85].map((height, index) => (
                        <motion.div
                          key={index}
                          initial={{ height: 0 }}
                          animate={{ height: `${height}%` }}
                          transition={{ duration: 1, delay: 1.5 + index * 0.1 }}
                          className="flex-1 bg-gradient-to-t from-purple-600 to-cyan-600 rounded-sm"
                        />
                      ))}
                    </div>
                  </div>

                  {/* Code snippet */}
                  <div className="bg-slate-900/50 p-4 rounded-lg border border-slate-700/50 font-mono text-sm">
                    <div className="text-green-400">$ curl -X GET</div>
                    <div className="text-cyan-400">  https://api.platform.dev/v1/data</div>
                    <div className="text-slate-400">// Response: 200 OK</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
} 