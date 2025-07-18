"use client";

import { motion } from "framer-motion";
import { clientsSectionCopy } from "../copy";

const Clients = () => {
  return (
    <section className="relative py-20 bg-gradient-to-b from-slate-900 to-blue-900 overflow-hidden">
      {/* Ocean Wave Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-cyan-600/10" />
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-cyan-400/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            TRUSTED BY LEADING
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
              MARINE INSTITUTIONS
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Collaborating with world-renowned organizations in ocean research and marine conservation
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
          {clientsSectionCopy.clients.map((client, index) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="group relative"
            >
              <div className="relative p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300">
                {/* Ocean ripple effect on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/10 group-hover:to-blue-500/10 transition-all duration-300" />
                
                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-16 h-16 mb-4 flex items-center justify-center">
                    <svg
                      className="w-full h-full text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      fillRule={client.fillRule as "evenodd" | "inherit" | "nonzero" | undefined}
                      clipRule={client.clipRule as "evenodd" | "inherit" | "nonzero" | undefined}
                    >
                      {client.svgPaths.map((path, pathIndex) => (
                        <path key={pathIndex} d={path} />
                      ))}
                    </svg>
                  </div>
                  <h3 className="text-white font-semibold text-center group-hover:text-cyan-300 transition-colors duration-300">
                    {client.name}
                  </h3>
                </div>

                {/* Floating particles */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-cyan-400 rounded-full"
                      style={{
                        left: `${20 + Math.random() * 60}%`,
                        top: `${20 + Math.random() * 60}%`,
                      }}
                      animate={{
                        y: [0, -10, 0],
                        opacity: [0, 1, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.2,
                      }}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Ocean current lines */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent"
              style={{
                top: `${30 + i * 20}%`,
                left: 0,
                right: 0,
              }}
              animate={{
                opacity: [0, 0.5, 0],
                scaleX: [0, 1, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: i * 1.5,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;