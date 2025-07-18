"use client";

import { motion } from "framer-motion";
import { clientsSectionCopy } from "../copy";

const Clients = () => {
  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-b from-gray-900 via-purple-900 to-black">
      {/* Space Background Effects */}
      <div className="absolute inset-0">
        {/* Starfield */}
        <div className="absolute inset-0">
          {[...Array(100)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0.3, 1, 0.3],
                scale: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        {/* Floating Space Particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-purple-400 rounded-full opacity-20"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [-20, 20, -20],
                x: [-10, 10, -10],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: 4 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        {/* Cosmic Rays */}
        <div className="absolute inset-0">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent"
              style={{
                width: `${200 + Math.random() * 300}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                transform: `rotate(${Math.random() * 360}deg)`,
              }}
              animate={{
                opacity: [0, 0.6, 0],
                scaleX: [0, 1, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 3,
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            TRUSTED BY
            <span className="block text-purple-400">SPACE LEADERS</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Leading space agencies and aerospace companies trust our Mars colonization technologies
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
          {clientsSectionCopy.clients.map((client, index) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.1,
                rotateY: 10,
              }}
              className="group relative"
            >
              {/* Space Glow Effect */}
              <motion.div
                className="absolute inset-0 bg-purple-500 rounded-lg opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300"
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              />
              
              <div className="relative bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-8 h-32 flex items-center justify-center group-hover:border-purple-500 transition-colors duration-300">
                <svg
                  className="w-16 h-16 text-gray-400 group-hover:text-purple-400 transition-colors duration-300"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  fillRule={client.fillRule as "evenodd" | "inherit" | "nonzero" | undefined}
                  clipRule={client.clipRule as "evenodd" | "inherit" | "nonzero" | undefined}
                >
                  {client.svgPaths.map((path, pathIndex) => (
                    <motion.path
                      key={pathIndex}
                      d={path}
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      transition={{ duration: 1.5, delay: index * 0.2 }}
                      viewport={{ once: true }}
                    />
                  ))}
                </svg>
              </div>
              
              {/* Client Name */}
              <motion.div
                className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ y: 10 }}
                whileHover={{ y: 0 }}
              >
                <span className="text-sm text-purple-400 font-medium whitespace-nowrap">
                  {client.name}
                </span>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Space Mission Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-2">
              <motion.div
                className="text-4xl font-bold text-purple-400"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                50+
              </motion.div>
              <p className="text-gray-300">Space Partnerships</p>
            </div>
            <div className="space-y-2">
              <motion.div
                className="text-4xl font-bold text-purple-400"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
              >
                25+
              </motion.div>
              <p className="text-gray-300">Countries Involved</p>
            </div>
            <div className="space-y-2">
              <motion.div
                className="text-4xl font-bold text-purple-400"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                viewport={{ once: true }}
              >
                100%
              </motion.div>
              <p className="text-gray-300">Mission Success Rate</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Clients;