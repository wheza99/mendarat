'use client';

import { motion } from 'framer-motion';
import { teamSectionCopy } from '../copy';

export default function Team() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Neural Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Neural Network Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/15 via-transparent to-purple-900/15" />
        
        {/* Synaptic Connections */}
        {[...Array(18)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-gradient-to-br from-blue-400/25 via-purple-300/20 to-cyan-400/30 rounded-full"
            style={{
              width: `${25 + Math.random() * 50}px`,
              height: `${25 + Math.random() * 50}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 1.6, 1],
              opacity: [0.2, 0.6, 0.2],
              rotate: [0, 360]
            }}
            transition={{
              duration: 15 + Math.random() * 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 5
            }}
          />
        ))}
        
        {/* Brain Wave Patterns */}
        <div className="absolute inset-0">
          <svg className="w-full h-full opacity-10" viewBox="0 0 1200 800">
            {/* Neural Pathways */}
            {[...Array(6)].map((_, i) => (
              <motion.path
                key={i}
                d={`M0,${150 + i * 100} Q300,${100 + i * 100} 600,${150 + i * 100} T1200,${150 + i * 100}`}
                stroke="#3B82F6"
                strokeWidth="3"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: [0, 1, 0] }}
                transition={{
                  duration: 8 + i * 0.5,
                  repeat: Infinity,
                  delay: i * 0.8
                }}
              />
            ))}
            
            {/* Neural Nodes */}
            {[200, 400, 600, 800, 1000].map((x, i) => (
              <motion.circle
                key={i}
                cx={x}
                cy={400}
                r="6"
                fill="#8B5CF6"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.4
                }}
              />
            ))}
          </svg>
        </div>
        
        {/* Cognitive Data Streams */}
        <div className="absolute inset-0">
          <svg className="w-full h-full opacity-15" viewBox="0 0 1000 600">
            {[...Array(12)].map((_, i) => {
              const x1 = Math.random() * 1000;
              const y1 = Math.random() * 600;
              const x2 = Math.random() * 1000;
              const y2 = Math.random() * 600;
              return (
                <motion.line
                  key={i}
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                  stroke="#06B6D4"
                  strokeWidth="1"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.7 }}
                  transition={{
                    duration: 4 + Math.random() * 3,
                    repeat: Infinity,
                    repeatType: "reverse",
                    delay: Math.random() * 4
                  }}
                />
              );
            })}
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-5xl lg:text-6xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-blue-300 via-purple-200 to-cyan-300 bg-clip-text text-transparent">
              {teamSectionCopy.heading}
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed"
          >
            {teamSectionCopy.description}
          </motion.p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamSectionCopy.team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="relative group"
            >
              {/* Neural Card Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-900/50 via-purple-800/40 to-cyan-900/50 rounded-2xl backdrop-blur-sm border border-blue-400/30 group-hover:border-purple-400/60 transition-all duration-300" />
              
              {/* Neural Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 via-transparent to-purple-400/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Brain Activity Indicator */}
              <motion.div
                className="absolute top-4 right-4 w-4 h-4 bg-green-400 rounded-full"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.3
                }}
              />
              
              <div className="relative p-8 text-center">
                {/* Avatar */}
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.3, type: "spring", stiffness: 200 }}
                  viewport={{ once: true }}
                  className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-4xl group-hover:scale-110 transition-transform duration-300"
                >
                  {member.avatar}
                </motion.div>
                
                {/* Name */}
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.5 }}
                  viewport={{ once: true }}
                  className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300"
                >
                  {member.name}
                </motion.h3>
                
                {/* Role */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.7 }}
                  viewport={{ once: true }}
                  className="text-blue-300 font-medium mb-2"
                >
                  {member.role}
                </motion.p>
                
                {/* Specialization */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.9 }}
                  viewport={{ once: true }}
                  className="text-gray-400 text-sm mb-6"
                >
                  {member.specialization}
                </motion.p>
                
                {/* Social Links */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 1.1 }}
                  viewport={{ once: true }}
                  className="flex justify-center space-x-4"
                >
                  {Object.entries(member.social).map(([platform, url], socialIndex) => (
                    <motion.a
                      key={platform}
                      href={url}
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-8 h-8 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full flex items-center justify-center text-blue-300 hover:text-white border border-blue-400/30 hover:border-purple-400/50 transition-all duration-300"
                    >
                      {platform === 'linkedin' && '💼'}
                      {platform === 'twitter' && '🐦'}
                      {platform === 'github' && '💻'}
                    </motion.a>
                  ))}
                </motion.div>
                
                {/* Neural Connection Line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400/0 via-purple-400/60 to-cyan-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Bottom Neural Network Status */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="relative inline-block">
            {/* Neural Hub */}
            <div className="px-8 py-4 bg-gradient-to-r from-blue-900/40 to-purple-900/40 rounded-full border border-blue-400/30 backdrop-blur-sm">
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-2">
                  <motion.div
                    className="w-3 h-3 bg-green-400 rounded-full"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 1, 0.5]
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity
                    }}
                  />
                  <span className="text-gray-300 text-sm font-medium">Team Neural Network</span>
                </div>
                
                <div className="w-px h-6 bg-gray-600" />
                
                <div className="flex items-center space-x-2">
                  <span className="text-gray-400 text-sm">{teamSectionCopy.team.length} AI Experts</span>
                  <motion.div
                    className="w-2 h-2 bg-blue-400 rounded-full"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 1, 0.5]
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      delay: 0.5
                    }}
                  />
                </div>
              </div>
            </div>
            
            {/* Radiating Neural Connections */}
            {[...Array(8)].map((_, i) => {
              const angle = (i * 45) * Math.PI / 180;
              return (
                <motion.div
                  key={i}
                  className="absolute w-1 bg-gradient-to-r from-blue-400/40 to-transparent"
                  style={{
                    height: '80px',
                    left: '50%',
                    top: '50%',
                    transformOrigin: '0 0',
                    transform: `translate(-50%, -50%) rotate(${i * 45}deg)`
                  }}
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: [0, 1, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    delay: i * 0.2
                  }}
                />
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}