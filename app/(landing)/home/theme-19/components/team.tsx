'use client'

import { motion } from 'framer-motion'
import { copy } from '../copy'

export default function Team() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-gray-900 to-black overflow-hidden">
      {/* Art Deco Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            repeating-radial-gradient(
              circle at 25% 25%,
              rgba(255, 215, 0, 0.1) 0px,
              transparent 50px,
              rgba(205, 127, 50, 0.1) 100px,
              transparent 150px
            )
          `
        }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent" style={{ fontFamily: 'serif' }}>
              {copy.team.title}
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto" style={{ fontFamily: 'serif' }}>
              {copy.team.subtitle}
            </p>
          </motion.div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {copy.team.members.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
              >
                {/* Art Deco Frame */}
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-yellow-600/10 rounded-2xl transform rotate-2 group-hover:rotate-4 transition-transform duration-500"></div>
                
                <div className="relative bg-gray-900/80 backdrop-blur-xl border border-yellow-400/30 rounded-2xl p-6 text-center hover:border-yellow-400/50 transition-all duration-300">
                  {/* Photo */}
                  <div className="mb-6">
                    <div className="w-24 h-24 mx-auto bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full p-1">
                      <div className="w-full h-full bg-gray-800 rounded-full flex items-center justify-center text-2xl text-yellow-400">
                        {member.name.charAt(0)}
                      </div>
                    </div>
                  </div>

                  {/* Info */}
                  <h3 className="text-xl font-bold text-white mb-1" style={{ fontFamily: 'serif' }}>
                    {member.name}
                  </h3>
                  <p className="text-yellow-400 font-medium mb-4">
                    {member.role}
                  </p>
                  <p className="text-gray-300 text-sm leading-relaxed" style={{ fontFamily: 'serif' }}>
                    {member.description}
                  </p>

                  {/* Art Deco Accent */}
                  <div className="mt-6 w-12 h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent mx-auto relative">
                    <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-yellow-400 rotate-45"></div>
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