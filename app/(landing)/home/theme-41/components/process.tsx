"use client";

import { motion } from "framer-motion";
import { processSectionCopy } from "../copy";

const Process = () => {
  return (
    <section className="relative min-h-screen bg-black overflow-hidden">
      {/* Cyber Network Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-black to-purple-900/20" />
        
        {/* Digital Starfield */}
        <div className="absolute inset-0">
          {[...Array(100)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-px h-px bg-cyan-400 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0.3, 1, 0.3],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 2 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
        
        {/* Security Trajectory Lines */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`trajectory-${i}`}
            className="absolute h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent"
            style={{
              left: '10%',
              top: `${20 + i * 12}%`,
              width: '80%',
              transformOrigin: 'left center',
            }}
            animate={{
              scaleX: [0, 1, 0],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          />
        ))}
        
        {/* Floating Cyber Objects */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={`object-${i}`}
            className="absolute w-3 h-3 border border-cyan-400/30 rounded-sm"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              rotate: [0, 360],
              x: [0, 30, 0],
              y: [0, -20, 0],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 5 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
            {processSectionCopy.heading.split(' ').map((word, index) => (
              <span key={index} className={index >= 2 ? "text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400" : ""}>
                {word}{' '}
              </span>
            ))}
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            {processSectionCopy.description}
          </p>
        </motion.div>

        {/* Process Timeline */}
        <div className="max-w-6xl mx-auto">
          <div className="relative">
            {/* Central Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gradient-to-b from-cyan-400 via-purple-400 to-cyan-400 opacity-30" />
            
            {processSectionCopy.steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex items-center mb-16 ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div className={`w-5/12 ${
                  index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'
                }`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="p-6 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-cyan-500/20 backdrop-blur-sm hover:border-cyan-400/40 transition-all duration-300"
                  >
                    {/* Cyber Corner Accents */}
                    <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-cyan-400/50" />
                    <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-cyan-400/50" />
                    
                    <div className={`mb-4 ${
                      index % 2 === 0 ? 'text-right' : 'text-left'
                    }`}>
                      <span className="text-cyan-400 text-sm font-mono">{step.number}</span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{step.description}</p>
                    
                    {/* Security Status Indicator */}
                    <div className={`mt-4 flex items-center space-x-2 ${
                      index % 2 === 0 ? 'justify-end' : 'justify-start'
                    }`}>
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                      <span className="text-green-400 text-sm font-mono">SECURE</span>
                    </div>
                  </motion.div>
                </div>
                
                {/* Central Node */}
                <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                    viewport={{ once: true }}
                    className="relative"
                  >
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-400 to-purple-400 flex items-center justify-center shadow-lg shadow-cyan-500/25">
                      <span className="text-black font-bold text-lg">{step.number}</span>
                    </div>
                    
                    {/* Pulse Effect */}
                    <motion.div
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.5, 0, 0.5],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.4,
                      }}
                      className="absolute inset-0 rounded-full border-2 border-cyan-400"
                    />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Security Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { label: "Threat Detection", value: "<1s", color: "cyan" },
              { label: "Response Time", value: "<5min", color: "purple" },
              { label: "Success Rate", value: "99.9%", color: "green" },
              { label: "Uptime", value: "24/7", color: "cyan" },
            ].map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="p-6 rounded-xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-700/50 hover:border-cyan-500/30 transition-all duration-300 text-center"
              >
                <div className={`text-3xl font-bold mb-2 text-${metric.color}-400`}>
                  {metric.value}
                </div>
                <div className="text-gray-300 text-sm">{metric.label}</div>
                
                {/* Status Indicator */}
                <div className="mt-3 flex items-center justify-center space-x-2">
                  <div className={`w-2 h-2 bg-${metric.color}-400 rounded-full animate-pulse`} />
                  <span className="text-xs text-gray-400 font-mono">ACTIVE</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Process;