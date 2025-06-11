"use client";

import { motion } from "framer-motion";
import { statsSectionCopy } from "../copy";

export default function Stats() {
  return (
    <section className="py-20 bg-gradient-to-b from-[#004080] to-[#003366] text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#40E0D0] to-[#87CEEB]">
            {statsSectionCopy.title}
          </h2>
          <p className="text-xl text-[#48D1CC]">{statsSectionCopy.subtitle}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {statsSectionCopy.stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-[#40E0D0]/20 to-[#48D1CC]/20 backdrop-blur-sm border border-[#40E0D0]/30 rounded-2xl p-8 hover:border-[#40E0D0]/50 transition-all duration-300"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
                  viewport={{ once: true }}
                  className="text-5xl md:text-6xl font-bold text-[#40E0D0] mb-4"
                >
                  {stat.number}
                </motion.div>
                <h3 className="text-xl font-semibold mb-2 text-white">
                  {stat.label}
                </h3>
                <p className="text-[#87CEEB]/80 text-sm leading-relaxed">
                  {stat.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}