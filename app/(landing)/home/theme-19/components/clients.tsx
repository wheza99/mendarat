'use client'

import { motion } from 'framer-motion'
import { copy } from '../copy'

export default function Clients() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-black to-gray-900 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent" style={{ fontFamily: 'serif' }}>
              {copy.clients.title}
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto" style={{ fontFamily: 'serif' }}>
              {copy.clients.subtitle}
            </p>
          </motion.div>

          {/* Client Logos Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {copy.clients.logos.map((client, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="relative bg-gray-900/50 backdrop-blur-xl border border-yellow-400/20 rounded-xl p-6 text-center hover:border-yellow-400/40 transition-all duration-300 group-hover:bg-gray-900/70">
                  <div className="text-yellow-400 font-bold text-lg" style={{ fontFamily: 'serif' }}>
                    {client.name}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 