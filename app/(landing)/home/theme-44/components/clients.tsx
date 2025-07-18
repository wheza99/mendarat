'use client';

import { motion } from 'framer-motion';
import { clientsSectionCopy } from '../copy';

export default function Clients() {
  return (
    <section className="relative py-16 bg-gradient-to-b from-slate-900 to-slate-800 overflow-hidden">
      {/* Art Deco Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-gradient-to-r from-transparent via-yellow-400/20 to-transparent"
              style={{
                width: '100%',
                height: '2px',
                top: `${12.5 * i}%`,
                transform: `skew(${-10 + i * 2}deg)`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-3xl lg:text-4xl font-bold text-white mb-4 luxury-glow"
          >
            KLIEN TERPERCAYA
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed"
          >
            Dipercaya oleh brand-brand premium dan perusahaan terkemuka untuk menghadirkan kemewahan Art Deco yang tak terlupakan.
          </motion.p>
        </motion.div>

        {/* Clients Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center"
        >
          {clientsSectionCopy.clients.map((client, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.1, y: -5 }}
              className="group relative flex flex-col items-center justify-center p-6 bg-gradient-to-b from-slate-800/30 to-slate-900/30 backdrop-blur-sm border border-yellow-400/20 transition-all duration-500 hover:border-yellow-400/50 hover:shadow-2xl hover:shadow-yellow-400/10"
            >
              {/* Art Deco corner decorations */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-yellow-400/50" />
              <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-yellow-400/50" />
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-yellow-400/50" />
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-yellow-400/50" />
              
              {/* Client Logo/Icon */}
              <div className="relative mb-4">
                <svg
                  className="w-12 h-12 text-yellow-400/70 group-hover:text-yellow-400 transition-colors duration-300"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  {...(client.fillRule && { fillRule: client.fillRule as any })}
                  {...(client.clipRule && { clipRule: client.clipRule as any })}
                >
                  {client.svgPaths.map((path, pathIndex) => (
                    <path key={pathIndex} d={path} />
                  ))}
                </svg>
              </div>
              
              {/* Client Name */}
              <h3 className="text-white group-hover:text-yellow-400 font-bold text-sm text-center uppercase tracking-wider transition-colors duration-300">
                {client.name}
              </h3>
              
              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-yellow-400/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Golden shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-400/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom decorative line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          viewport={{ once: true }}
          className="mt-16 h-px bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent origin-center"
        />
      </div>
    </section>
  );
}