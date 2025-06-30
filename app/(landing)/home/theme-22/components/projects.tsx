'use client'

import { motion } from 'framer-motion'
import { copy } from '../copy'

export default function Projects() {
  return (
    <section className="relative py-24 overflow-hidden" style={{ backgroundColor: '#000033' }}>
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-6xl font-black font-mono tracking-wider mb-6"
                style={{ color: '#FF1493', textShadow: '0 0 20px #FF1493' }}>
              {copy.projects.title}
            </h2>
            <p className="text-xl max-w-4xl mx-auto font-mono font-medium"
               style={{ color: '#32CD32' }}>
              {copy.projects.subtitle}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {copy.projects.items.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="group relative"
              >
                <div className="relative border-4 hover:scale-105 transition-all duration-300 font-mono"
                     style={{ 
                       backgroundColor: '#1a0033', 
                       borderColor: index % 4 === 0 ? '#32CD32' : index % 4 === 1 ? '#FF1493' : index % 4 === 2 ? '#00BFFF' : '#FFD700'
                     }}>
                  
                  <div className="p-8">
                    <div className="mb-4">
                      <span className="px-4 py-2 text-sm font-bold tracking-wide border-2" 
                            style={{ 
                              backgroundColor: index % 4 === 0 ? '#32CD32' : index % 4 === 1 ? '#FF1493' : index % 4 === 2 ? '#00BFFF' : '#FFD700',
                              color: '#1a0033',
                              borderColor: '#FFFFFF'
                            }}>
                        {project.category}
                      </span>
                    </div>
                    
                    <h3 className="text-2xl font-black mb-4 tracking-wide text-white">
                      {project.title}
                    </h3>
                    
                    <p className="leading-relaxed font-medium mb-6"
                       style={{ color: '#00BFFF' }}>
                      {project.description}
                    </p>
                    
                    <div className="w-full h-2 flex">
                      {[...Array(10)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="flex-1 h-full"
                          style={{ 
                            backgroundColor: index % 4 === 0 ? '#32CD32' : index % 4 === 1 ? '#FF1493' : index % 4 === 2 ? '#00BFFF' : '#FFD700'
                          }}
                          animate={{ opacity: [1, 0.3, 1] }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: i * 0.1
                          }}
                        />
                      ))}
                    </div>
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