"use client";

import { motion } from "framer-motion";
import { processSectionCopy } from "../copy";

const Process = () => {
  return (
    <section className="relative py-20 bg-gradient-to-b from-slate-900 to-blue-900 overflow-hidden">
      {/* Ocean current background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-cyan-600/10" />
        <div className="absolute inset-0">
          {[...Array(25)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -25, 0],
                opacity: [0.3, 0.7, 0.3],
              }}
              transition={{
                duration: 4 + Math.random() * 2,
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
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            {processSectionCopy.heading}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {processSectionCopy.description}
          </p>
        </motion.div>

        <div className="relative">
          {/* Ocean flow connection lines */}
          <div className="absolute inset-0 pointer-events-none">
            {processSectionCopy.steps.map((_, index) => {
              if (index === processSectionCopy.steps.length - 1) return null;
              return (
                <motion.div
                  key={index}
                  className="absolute hidden lg:block"
                  style={{
                    left: `${20 + (index * 80) / (processSectionCopy.steps.length - 1)}%`,
                    top: "50%",
                    width: `${80 / (processSectionCopy.steps.length - 1)}%`,
                    height: "2px",
                  }}
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="w-full h-full bg-gradient-to-r from-cyan-400/50 to-blue-400/50 relative overflow-hidden">
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-300 to-transparent"
                      animate={{
                        x: ["-100%", "100%"],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.5,
                      }}
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className="grid lg:grid-cols-5 gap-8">
            {processSectionCopy.steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="relative group"
              >
                <div className="relative p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300">
                  {/* Ocean wave effect */}
                  <div className="absolute inset-0 rounded-2xl overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/10 group-hover:to-blue-500/10 transition-all duration-300" />
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-full h-px bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent"
                        style={{
                          top: `${30 + i * 20}%`,
                        }}
                        animate={{
                          x: ["-100%", "100%"],
                          opacity: [0, 0.5, 0],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          delay: i * 0.5 + index * 0.2,
                        }}
                      />
                    ))}
                  </div>

                  <div className="relative z-10 text-center">
                    {/* Step number with ocean bubble effect */}
                    <motion.div
                      className="relative w-16 h-16 mx-auto mb-6 flex items-center justify-center"
                      whileHover={{ scale: 1.1 }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full opacity-20 group-hover:opacity-30 transition-opacity duration-300" />
                      <div className="absolute inset-2 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full opacity-40 group-hover:opacity-60 transition-opacity duration-300" />
                      <span className="relative text-2xl font-bold text-white z-10">
                        {step.number}
                      </span>
                      
                      {/* Floating bubbles */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {[...Array(4)].map((_, i) => (
                          <motion.div
                            key={i}
                            className="absolute w-1 h-1 bg-cyan-400 rounded-full"
                            style={{
                              left: `${20 + Math.random() * 60}%`,
                              top: `${20 + Math.random() * 60}%`,
                            }}
                            animate={{
                              y: [0, -15, 0],
                              opacity: [0, 1, 0],
                              scale: [0, 1, 0],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              delay: i * 0.3,
                            }}
                          />
                        ))}
                      </div>
                    </motion.div>

                    <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Ocean depth indicator */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-b-2xl">
                    <motion.div
                      className="h-full bg-gradient-to-r from-cyan-400 to-blue-400 rounded-b-2xl"
                      initial={{ width: "0%" }}
                      whileInView={{ width: "100%" }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Ocean current animation */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-px bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent"
              style={{
                top: `${20 + i * 15}%`,
                left: 0,
                right: 0,
              }}
              animate={{
                opacity: [0, 0.4, 0],
                scaleX: [0, 1, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                delay: i * 1,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;