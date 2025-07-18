'use client';

import { motion } from 'framer-motion';
import { statsSectionCopy } from '../copy';

export default function Stats() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Bio Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Organic Cells */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-gradient-to-br from-emerald-400/20 via-green-300/10 to-teal-400/25 rounded-full"
            style={{
              width: `${100 + Math.random() * 200}px`,
              height: `${80 + Math.random() * 150}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              borderRadius: `${50 + Math.random() * 50}% ${60 + Math.random() * 40}% ${40 + Math.random() * 60}% ${30 + Math.random() * 70}%`
            }}
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 3
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-emerald-300 font-mono text-sm tracking-wider uppercase"
            >
              {statsSectionCopy.subtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h2 className="text-5xl lg:text-6xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-emerald-300 via-green-200 to-teal-300 bg-clip-text text-transparent">
                  {statsSectionCopy.heading1}
                </span>
                <br />
                <span className="text-white">
                  {statsSectionCopy.heading2}
                </span>
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="text-gray-300 text-lg leading-relaxed max-w-2xl"
            >
              {statsSectionCopy.description}
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="flex gap-12"
            >
              {statsSectionCopy.stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  {/* Bio Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/30 to-green-400/30 rounded-lg blur-xl" />
                  <div className="relative bg-gradient-to-br from-emerald-900/50 to-green-900/50 backdrop-blur-sm border border-emerald-400/30 rounded-lg p-6">
                    <div className="text-4xl font-bold text-emerald-300 mb-2">
                      {stat.value}{stat.suffix}
                    </div>
                    <div className="text-gray-300 text-sm uppercase tracking-wider">
                      {stat.label}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-8 py-4 bg-gradient-to-r from-emerald-600 to-green-600 text-white font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/25"
              >
                {/* Bio Pulse Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-green-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                <span className="relative z-10">{statsSectionCopy.buttonText}</span>
                
                {/* Organic Border Animation */}
                <div className="absolute inset-0 border-2 border-emerald-400/0 group-hover:border-emerald-400/50 rounded-lg transition-all duration-300" />
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Bio Frame Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/20 to-green-400/20 rounded-3xl blur-2xl" />
            
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="relative bg-gradient-to-br from-emerald-900/30 to-green-900/30 backdrop-blur-sm border border-emerald-400/30 rounded-3xl p-4 overflow-hidden"
            >
              {/* Neural Network Overlay */}
              <div className="absolute inset-0 pointer-events-none">
                <svg className="w-full h-full opacity-20" viewBox="0 0 400 400">
                  {[...Array(8)].map((_, i) => {
                    const x1 = Math.random() * 400;
                    const y1 = Math.random() * 400;
                    const x2 = Math.random() * 400;
                    const y2 = Math.random() * 400;
                    return (
                      <g key={i}>
                        <line
                          x1={x1}
                          y1={y1}
                          x2={x2}
                          y2={y2}
                          stroke="#10B981"
                          strokeWidth="1"
                          opacity="0.6"
                        />
                        <circle
                          cx={x1}
                          cy={y1}
                          r="3"
                          fill="#14B8A6"
                          opacity="0.8"
                        />
                      </g>
                    );
                  })}
                </svg>
              </div>
              
              <img
                src={statsSectionCopy.image}
                alt={statsSectionCopy.imageAlt}
                className="w-full h-96 object-cover rounded-2xl"
              />
              
              {/* Bio Particles */}
              <div className="absolute inset-0">
                {[...Array(12)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-emerald-400 rounded-full"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                    }}
                    animate={{
                      y: [-20, 20, -20],
                      opacity: [0.3, 0.8, 0.3],
                      scale: [0.8, 1.2, 0.8]
                    }}
                    transition={{
                      duration: 3 + Math.random() * 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: Math.random() * 2
                    }}
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}