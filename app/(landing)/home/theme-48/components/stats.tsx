'use client';

import { motion } from 'framer-motion';
import { statsSectionCopy } from '../copy';

export default function Stats() {
  return (
    <section className="py-20 bg-gradient-to-br from-emerald-900/10 via-teal-900/5 to-green-900/10 relative overflow-hidden">
      {/* Organic Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-32 h-32 bg-emerald-200 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-teal-200 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-green-200 rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
              {statsSectionCopy.heading}
            </h2>
            <p className="text-xl text-slate-600 mb-12">
              {statsSectionCopy.description}
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-8">
              {statsSectionCopy.stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-emerald-200/50 hover:bg-white/80 transition-all duration-300"
                >
                  <div className="text-3xl lg:text-4xl font-bold text-emerald-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-lg font-semibold text-slate-800 mb-1">
                    {stat.label}
                  </div>
                  <div className="text-sm text-slate-600">
                    {stat.description}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Animated Grid Background */}
            <div className="absolute inset-0 opacity-30">
              <div className="grid grid-cols-8 grid-rows-8 gap-2 h-full">
                {Array.from({ length: 64 }).map((_, i) => (
                  <motion.div
                    key={i}
                    className="bg-emerald-300 rounded-sm"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ 
                      duration: 0.3, 
                      delay: (i % 8) * 0.1 + Math.floor(i / 8) * 0.05 
                    }}
                    viewport={{ once: true }}
                  />
                ))}
              </div>
            </div>

            {/* Main Image */}
            <div className="relative z-10 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-3xl p-8 border border-emerald-200">
              <div className="aspect-square bg-gradient-to-br from-emerald-200 to-green-300 rounded-2xl flex items-center justify-center">
                <div className="text-6xl">🧬</div>
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div
              className="absolute -top-4 -right-4 w-16 h-16 bg-emerald-400 rounded-full flex items-center justify-center text-white text-2xl"
              animate={{ 
                y: [0, -10, 0],
                rotate: [0, 180, 360]
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              ⚗️
            </motion.div>
            <motion.div
              className="absolute -bottom-4 -left-4 w-12 h-12 bg-teal-400 rounded-full flex items-center justify-center text-white text-xl"
              animate={{ 
                y: [0, 10, 0],
                x: [0, 5, 0]
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            >
              🔬
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}