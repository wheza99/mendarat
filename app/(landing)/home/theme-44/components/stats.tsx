'use client';

import { motion } from 'framer-motion';
import { statsSectionCopy } from '../copy';
import Image from 'next/image';

export default function Stats() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-slate-900 to-slate-800 overflow-hidden">
      {/* Art Deco Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 via-transparent to-yellow-400/20" />
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-yellow-400/10"
            style={{
              width: '1px',
              height: '100%',
              left: `${12.5 * i}%`,
              transform: `skew(${-15 + i * 2}deg)`,
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
            <div className="space-y-6">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-yellow-400 font-light tracking-[0.2em] text-sm uppercase"
              >
                {statsSectionCopy.subtitle}
              </motion.p>
              
              <div className="space-y-4">
                <motion.h2
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="text-5xl lg:text-6xl font-bold text-white leading-tight"
                >
                  <span className="block luxury-glow">{statsSectionCopy.heading1}</span>
                  <span className="block text-yellow-400">{statsSectionCopy.heading2}</span>
                </motion.h2>
              </div>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                className="text-gray-300 text-lg leading-relaxed max-w-xl"
              >
                {statsSectionCopy.description}
              </motion.p>
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-8"
            >
              {statsSectionCopy.stats.map((stat, index) => (
                <div key={index} className="text-center lg:text-left">
                  <div className="flex items-baseline justify-center lg:justify-start space-x-1">
                    <motion.span
                      initial={{ opacity: 0, scale: 0.5 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.8, delay: 0.7 + index * 0.1 }}
                      viewport={{ once: true }}
                      className="text-5xl lg:text-6xl font-bold text-yellow-400 deco-pulse"
                    >
                      {stat.value}
                    </motion.span>
                    <span className="text-3xl lg:text-4xl font-bold text-yellow-400">
                      {stat.suffix}
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm uppercase tracking-wider mt-2">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-bold tracking-wider uppercase overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-yellow-400/25"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-yellow-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              <span className="relative z-10">{statsSectionCopy.buttonText}</span>
              
              {/* Art Deco corner decorations */}
              <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-black/20" />
              <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-black/20" />
              <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-black/20" />
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-black/20" />
            </motion.button>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative aspect-[4/5] overflow-hidden">
              {/* Art Deco frame */}
              <div className="absolute inset-0 border-4 border-yellow-400/30 z-10">
                <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-yellow-400" />
                <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-yellow-400" />
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-yellow-400" />
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-yellow-400" />
              </div>
              
              <Image
                src={statsSectionCopy.image}
                alt={statsSectionCopy.imageAlt}
                fill
                className="object-cover transition-transform duration-700 hover:scale-110"
              />
              
              {/* Golden overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-yellow-400/20 via-transparent to-transparent" />
            </div>
            
            {/* Floating geometric elements */}
            <div className="absolute -top-6 -right-6 w-12 h-12 border-2 border-yellow-400/50 transform rotate-45 deco-scale" />
            <div className="absolute -bottom-6 -left-6 w-8 h-8 bg-yellow-400/30 transform rotate-45 vintage-swing" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}