'use client'

import { motion } from 'framer-motion'
import { copy } from '../copy'

export default function Team() {
  return (
    <section className="relative py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#36454F', fontFamily: 'serif' }}>
              {copy.team.title}
            </h2>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: '#8B8680' }}>
              {copy.team.subtitle}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {copy.team.members.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="relative p-6 rounded-3xl border-2 border-dashed transition-all duration-500 group-hover:rotate-2 group-hover:bg-cream/30" style={{ 
                  borderColor: '#8B8680',
                  backgroundColor: '#F5F5DC'
                }}>
                  {/* Avatar with sketchy frame */}
                  <div className="relative mb-6">
                    <div className="w-32 h-32 mx-auto bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center border-2 border-dashed" style={{ borderColor: '#87CEEB' }}>
                      <svg width="60" height="60" viewBox="0 0 60 60">
                        <circle cx="30" cy="25" r="12" stroke="#8B8680" strokeWidth="2" fill="none" />
                        <path d="M10,50 Q30,40 50,50" stroke="#8B8680" strokeWidth="2" fill="none" strokeLinecap="round" />
                      </svg>
                    </div>
                    
                    {/* Hand-drawn decoration around avatar */}
                    <svg className="absolute -top-2 -left-2 w-36 h-36" viewBox="0 0 144 144">
                      <path d="M20,20 Q72,10 124,20 Q134,72 124,124 Q72,134 20,124 Q10,72 20,20" 
                            stroke="#87CEEB" strokeWidth="1" fill="none" strokeDasharray="3,2" opacity="0.5" />
                    </svg>
                  </div>

                  <div className="text-center">
                    <h3 className="text-xl font-bold mb-2" style={{ color: '#36454F', fontFamily: 'serif' }}>
                      {member.name}
                    </h3>
                    
                    <p className="text-sm font-semibold mb-4" style={{ color: '#87CEEB' }}>
                      {member.role}
                    </p>
                    
                    <p className="text-sm leading-relaxed" style={{ color: '#8B8680' }}>
                      {member.description}
                    </p>

                    {/* Hand-drawn underline */}
                    <svg width="60" height="8" viewBox="0 0 60 8" className="mx-auto mt-4">
                      <path d="M5,4 Q30,2 55,4" stroke="#87CEEB" strokeWidth="2" fill="none" strokeLinecap="round" />
                    </svg>
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