"use client";

import { motion } from "framer-motion";
import { copy } from "../copy";

const Projects = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Cosmic Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900">
        {/* Galaxy Spiral */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/2 left-1/2 w-96 h-96 -translate-x-1/2 -translate-y-1/2">
            <div className="w-full h-full border border-purple-500/20 rounded-full animate-spin" style={{ animationDuration: '30s' }} />
            <div className="absolute top-1/2 left-1/2 w-80 h-80 -translate-x-1/2 -translate-y-1/2 border border-blue-500/20 rounded-full animate-spin" style={{ animationDuration: '25s', animationDirection: 'reverse' }} />
            <div className="absolute top-1/2 left-1/2 w-64 h-64 -translate-x-1/2 -translate-y-1/2 border border-purple-500/20 rounded-full animate-spin" style={{ animationDuration: '20s' }} />
          </div>
        </div>
        
        {/* Cosmic Dust */}
        <div className="absolute inset-0">
          {[...Array(40)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-0.5 h-0.5 bg-purple-300 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0.1, 0.8, 0.1],
                scale: [0.5, 1.5, 0.5],
              }}
              transition={{
                duration: 4 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 4,
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {copy.projects.title}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {copy.projects.subtitle}
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {copy.projects.items.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ scale: 1.03, rotateX: 5 }}
              className="relative group"
            >
              {/* Project Card */}
              <div className="relative rounded-2xl bg-gradient-to-br from-purple-800/20 to-blue-800/20 backdrop-blur-sm border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300 overflow-hidden">
                {/* Cosmic Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Project Image Placeholder */}
                <div className="relative h-48 bg-gradient-to-br from-purple-600/30 to-blue-600/30 overflow-hidden">
                  {/* Cosmic Energy Pattern */}
                  <div className="absolute inset-0">
                    {[...Array(20)].map((_, i) => (
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
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 text-xs font-semibold bg-purple-600/80 text-white rounded-full backdrop-blur-sm">
                      {project.category}
                    </span>
                  </div>
                  
                  {/* Orbital Ring */}
                  <div className="absolute top-4 right-4 w-8 h-8 border-2 border-purple-400/50 rounded-full animate-spin" />
                </div>

                {/* Project Content */}
                <div className="relative p-6">
                  <h3 className="text-xl font-bold text-white mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    {project.description}
                  </p>
                  
                  {/* Action Button */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full py-2 px-4 rounded-lg bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-500/30 text-purple-300 font-medium hover:from-purple-600/30 hover:to-blue-600/30 hover:border-purple-400/50 transition-all duration-300"
                  >
                    Explore Project
                  </motion.button>
                </div>

                {/* Cosmic Particles */}
                <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none">
                  {[...Array(6)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-purple-400 rounded-full"
                      style={{
                        left: `${15 + i * 15}%`,
                        top: `${20 + i * 10}%`,
                      }}
                      animate={{
                        x: [0, 15, 0],
                        y: [0, -15, 0],
                        opacity: [0.3, 1, 0.3],
                      }}
                      transition={{
                        duration: 3 + i * 0.3,
                        repeat: Infinity,
                        delay: i * 0.5,
                      }}
                    />
                  ))}
                </div>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-2xl overflow-hidden">
                  <motion.div
                    className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-purple-400 to-transparent"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 1 }}
                  />
                  <motion.div
                    className="absolute right-0 top-0 w-0.5 h-full bg-gradient-to-b from-transparent via-blue-400 to-transparent"
                    initial={{ y: '-100%' }}
                    whileHover={{ y: '100%' }}
                    transition={{ duration: 1, delay: 0.2 }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Projects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold hover:from-purple-500 hover:to-blue-500 transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
          >
            View All Cosmic Projects
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;