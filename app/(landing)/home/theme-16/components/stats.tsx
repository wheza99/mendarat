"use client";

import { motion } from "framer-motion";
import { statsSectionCopy } from "../copy";

export default function Stats() {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-800 to-slate-900">
      <div className="container mx-auto px-8">
        
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            {statsSectionCopy.heading}
          </h2>
          <p className="text-slate-300 text-xl max-w-2xl mx-auto">
            {statsSectionCopy.subheading}
          </p>
        </motion.div>

        {/* Stats grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {statsSectionCopy.stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative p-8 bg-gradient-to-br from-slate-800/50 to-purple-900/50 backdrop-blur-sm border border-slate-600/50 rounded-xl group-hover:border-purple-400/50 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-purple-500/20">
                
                {/* Icon */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                  viewport={{ once: true }}
                  className="w-16 h-16 mx-auto mb-8 relative"
                >
                  <div className="w-full h-full bg-gradient-to-br from-purple-600 to-cyan-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <div className="w-8 h-8 bg-white/20 rounded"></div>
                  </div>
                </motion.div>

                {/* Number */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.1 + 0.5 }}
                  viewport={{ once: true }}
                  className="mb-4 text-center"
                >
                  <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                    {stat.number}
                  </div>
                </motion.div>

                {/* Label */}
                <motion.h3
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.1 + 0.6 }}
                  viewport={{ once: true }}
                  className="text-xl font-semibold text-white mb-4 text-center"
                >
                  {stat.label}
                </motion.h3>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.1 + 0.7 }}
                  viewport={{ once: true }}
                  className="text-slate-300 text-sm leading-relaxed text-center"
                >
                  {stat.description}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
} 