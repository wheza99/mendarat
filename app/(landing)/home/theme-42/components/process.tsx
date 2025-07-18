"use client";

import { motion } from "framer-motion";
import { processSectionCopy } from "../copy";

const Process = () => {
  return (
    <section className="relative py-20 bg-gradient-to-br from-gray-900 via-black to-purple-900 overflow-hidden">
      {/* Gaming Network Background */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(147,51,234,0.3)" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#grid)" />
        </svg>
      </div>

      {/* Digital Starfield */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Gaming Trajectory Lines */}
      <div className="absolute inset-0">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent"
            style={{
              left: 0,
              right: 0,
              top: `${30 + i * 20}%`,
              transform: `rotate(${-10 + i * 10}deg)`,
            }}
            animate={{
              opacity: [0, 0.8, 0],
              scaleX: [0, 1, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 1,
            }}
          />
        ))}
      </div>

      {/* Floating Gaming Objects */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 border border-cyan-400 rotate-45"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              rotate: [45, 405],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Digital Corner Accents */}
      <div className="absolute top-0 left-0 w-32 h-32">
        <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-purple-400" />
        <div className="absolute top-8 left-8 w-4 h-4 border-t border-l border-cyan-400" />
      </div>
      <div className="absolute top-0 right-0 w-32 h-32">
        <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-purple-400" />
        <div className="absolute top-8 right-8 w-4 h-4 border-t border-r border-cyan-400" />
      </div>
      <div className="absolute bottom-0 left-0 w-32 h-32">
        <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-purple-400" />
        <div className="absolute bottom-8 left-8 w-4 h-4 border-b border-l border-cyan-400" />
      </div>
      <div className="absolute bottom-0 right-0 w-32 h-32">
        <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-purple-400" />
        <div className="absolute bottom-8 right-8 w-4 h-4 border-b border-r border-cyan-400" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
              {processSectionCopy.heading}
            </span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            {processSectionCopy.description}
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Lines */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-400 transform -translate-y-1/2" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-16">
            {processSectionCopy.steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative group"
              >
                {/* Step Number Circle */}
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="relative mx-auto w-24 h-24 mb-8 bg-gradient-to-br from-purple-600 to-cyan-600 rounded-full flex items-center justify-center group-hover:from-purple-500 group-hover:to-cyan-500 transition-all duration-300"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/50 to-cyan-600/50 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="relative text-2xl font-bold text-white">
                    {step.number}
                  </span>
                  
                  {/* Pulse Effect */}
                  <motion.div
                    className="absolute inset-0 border-2 border-purple-400 rounded-full"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.5, 0, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.5,
                    }}
                  />
                </motion.div>

                {/* Step Content */}
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-white/70 leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                    {step.description}
                  </p>
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-cyan-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Gaming Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="text-center group">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-2"
            >
              99%
            </motion.div>
            <div className="text-white/70 group-hover:text-white transition-colors duration-300">
              Success Rate
            </div>
          </div>
          <div className="text-center group">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-2"
            >
              30 Days
            </motion.div>
            <div className="text-white/70 group-hover:text-white transition-colors duration-300">
              Average Timeline
            </div>
          </div>
          <div className="text-center group">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-2"
            >
              24/7
            </motion.div>
            <div className="text-white/70 group-hover:text-white transition-colors duration-300">
              Support Available
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Process;