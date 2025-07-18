"use client";

import { motion } from "framer-motion";
import { processSectionCopy } from "../copy";

const Process = () => {
  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-b from-gray-900 via-black to-purple-900">
      {/* Space Background Effects */}
      <div className="absolute inset-0">
        {/* Starfield */}
        <div className="absolute inset-0">
          {[...Array(200)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0.1, 1, 0.1],
                scale: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        {/* Space Trajectory Lines */}
        <div className="absolute inset-0">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent"
              style={{
                width: `${400 + Math.random() * 600}px`,
                left: `${Math.random() * 100}%`,
                top: `${20 + i * 10}%`,
                transform: `rotate(${-10 + Math.random() * 20}deg)`,
              }}
              animate={{
                opacity: [0, 0.4, 0],
                scaleX: [0, 1, 0],
              }}
              transition={{
                duration: 4 + Math.random() * 2,
                repeat: Infinity,
                delay: i * 0.5,
              }}
            />
          ))}
        </div>

        {/* Floating Space Objects */}
        <div className="absolute inset-0">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-4 h-4 bg-gradient-to-br from-purple-400 to-blue-500 rounded-full opacity-20"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [-40, 40, -40],
                x: [-20, 20, -20],
                rotate: [0, 360],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: 8 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 4,
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
            {processSectionCopy.heading}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {processSectionCopy.description}
          </p>
        </motion.div>

        <div className="relative">
          {/* Mission Timeline */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-purple-500 via-blue-500 to-purple-500 opacity-30" />
          
          <div className="space-y-16">
            {processSectionCopy.steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`flex items-center ${
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                }`}
              >
                {/* Content */}
                <div className={`w-5/12 ${
                  index % 2 === 0 ? "text-right pr-8" : "text-left pl-8"
                }`}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="group"
                  >
                    <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 group-hover:border-purple-500 transition-colors duration-300">
                      {/* Space Glow Effect */}
                      <motion.div
                        className="absolute inset-0 bg-purple-500 rounded-2xl opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-300"
                        animate={{
                          scale: [1, 1.05, 1],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                        }}
                      />
                      
                      <div className="relative">
                        <h3 className="text-2xl font-bold text-white mb-4">
                          {step.title}
                        </h3>
                        <p className="text-gray-300 leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Center Node */}
                <div className="w-2/12 flex justify-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.2 }}
                    className="relative"
                  >
                    {/* Orbital Ring */}
                    <motion.div
                      className="absolute inset-0 w-20 h-20 border-2 border-purple-400 rounded-full"
                      animate={{
                        rotate: [0, 360],
                      }}
                      transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    />
                    
                    {/* Step Number */}
                    <div className="relative w-20 h-20 bg-gradient-to-br from-purple-500 to-blue-600 rounded-full flex items-center justify-center border-4 border-gray-900">
                      <span className="text-2xl font-bold text-white">
                        {step.number}
                      </span>
                      
                      {/* Pulsing Effect */}
                      <motion.div
                        className="absolute inset-0 bg-purple-400 rounded-full opacity-30"
                        animate={{
                          scale: [1, 1.5, 1],
                          opacity: [0.3, 0, 0.3],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: index * 0.4,
                        }}
                      />
                    </div>
                  </motion.div>
                </div>

                {/* Spacer */}
                <div className="w-5/12" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mission Success Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-8">
              Mission Success Metrics
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { value: "98%", label: "Mission Success Rate" },
                { value: "15+", label: "Years Experience" },
                { value: "500+", label: "Simulations Completed" },
                { value: "24/7", label: "Mission Support" },
              ].map((metric, index) => (
                <motion.div
                  key={metric.label}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="space-y-2"
                >
                  <div className="text-3xl font-bold text-purple-400">
                    {metric.value}
                  </div>
                  <p className="text-gray-300 text-sm">
                    {metric.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Process;