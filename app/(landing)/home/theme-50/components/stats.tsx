'use client';

import { motion } from 'framer-motion';
import { statsSectionCopy } from '../copy';

export default function Stats() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Neural Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Neural Grid */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-purple-900/20" />
        
        {/* Floating Neural Nodes */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-gradient-to-br from-blue-400/30 via-purple-300/20 to-cyan-400/25 rounded-full"
            style={{
              width: `${20 + Math.random() * 40}px`,
              height: `${20 + Math.random() * 40}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.8, 0.3],
              rotate: [0, 360]
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 3
            }}
          />
        ))}
        
        {/* Neural Connections */}
        <div className="absolute inset-0">
          <svg className="w-full h-full opacity-20" viewBox="0 0 1000 600">
            {[...Array(12)].map((_, i) => {
              const x1 = Math.random() * 1000;
              const y1 = Math.random() * 600;
              const x2 = Math.random() * 1000;
              const y2 = Math.random() * 600;
              return (
                <motion.line
                  key={i}
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                  stroke="#3B82F6"
                  strokeWidth="1"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.6 }}
                  transition={{
                    duration: 3 + Math.random() * 2,
                    repeat: Infinity,
                    repeatType: "reverse",
                    delay: Math.random() * 3
                  }}
                />
              );
            })}
          </svg>
        </div>
        
        {/* Brain Wave Pattern */}
        <div className="absolute inset-0">
          <svg className="w-full h-full opacity-10" viewBox="0 0 1400 800">
            {[...Array(6)].map((_, i) => (
              <motion.path
                key={i}
                d={`M0,${200 + i * 100} Q350,${150 + i * 100} 700,${200 + i * 100} T1400,${200 + i * 100}`}
                stroke="#8B5CF6"
                strokeWidth="2"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: [0, 1, 0] }}
                transition={{
                  duration: 6 + i * 0.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.8
                }}
              />
            ))}
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-5xl lg:text-6xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-blue-300 via-purple-200 to-cyan-300 bg-clip-text text-transparent">
              {statsSectionCopy.heading}
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed"
          >
            {statsSectionCopy.description}
          </motion.p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {statsSectionCopy.stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="relative group"
            >
              {/* Neural Card Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-purple-800/20 to-cyan-900/30 rounded-2xl backdrop-blur-sm border border-blue-400/20 group-hover:border-purple-400/40 transition-all duration-300" />
              
              {/* Neural Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 via-transparent to-purple-400/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative p-8 text-center">
                {/* Stat Number */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.3, type: "spring", stiffness: 200 }}
                  viewport={{ once: true }}
                  className="text-4xl lg:text-5xl font-bold mb-2"
                >
                  <span className="bg-gradient-to-r from-blue-300 via-purple-300 to-cyan-300 bg-clip-text text-transparent">
                    {stat.number}
                  </span>
                </motion.div>
                
                {/* Stat Label */}
                <motion.h3
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.5 }}
                  viewport={{ once: true }}
                  className="text-xl font-semibold text-white mb-2"
                >
                  {stat.label}
                </motion.h3>
                
                {/* Stat Description */}
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.7 }}
                  viewport={{ once: true }}
                  className="text-gray-400 text-sm"
                >
                  {stat.description}
                </motion.p>
                
                {/* Neural Pulse Effect */}
                <motion.div
                  className="absolute top-4 right-4 w-3 h-3 bg-blue-400 rounded-full"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.3
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Bottom Neural Elements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center space-x-4 px-6 py-3 bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-full border border-blue-400/20 backdrop-blur-sm">
            <motion.div
              className="w-2 h-2 bg-blue-400 rounded-full"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity
              }}
            />
            <span className="text-gray-300 text-sm font-medium">Neural Network Active</span>
            <motion.div
              className="w-2 h-2 bg-purple-400 rounded-full"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: 0.5
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}