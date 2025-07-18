'use client';

import { motion } from 'framer-motion';
import { servicesSectionCopy } from '../copy';

export default function Services() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Neural Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Neural Energy Field */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-purple-900/20" />
        
        {/* Synaptic Connections */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-gradient-to-br from-blue-400/20 via-purple-300/15 to-cyan-400/25 rounded-full"
            style={{
              width: `${15 + Math.random() * 30}px`,
              height: `${15 + Math.random() * 30}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 1.8, 1],
              opacity: [0.2, 0.7, 0.2],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: 10 + Math.random() * 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 4
            }}
          />
        ))}
        
        {/* Neural Network Grid */}
        <div className="absolute inset-0">
          <svg className="w-full h-full opacity-15" viewBox="0 0 1200 800">
            {/* Neural Pathways */}
            {[...Array(8)].map((_, i) => (
              <motion.path
                key={i}
                d={`M${i * 150},0 Q${i * 150 + 75},400 ${i * 150},800`}
                stroke="#3B82F6"
                strokeWidth="2"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.6 }}
                transition={{
                  duration: 4 + Math.random() * 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: i * 0.3
                }}
              />
            ))}
            
            {/* Horizontal Connections */}
            {[...Array(6)].map((_, i) => (
              <motion.line
                key={`h-${i}`}
                x1="0"
                y1={i * 130 + 100}
                x2="1200"
                y2={i * 130 + 100}
                stroke="#8B5CF6"
                strokeWidth="1"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: [0, 1, 0] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  delay: i * 0.5
                }}
              />
            ))}
          </svg>
        </div>
        
        {/* Brain Wave Patterns */}
        <div className="absolute inset-0">
          <svg className="w-full h-full opacity-10" viewBox="0 0 1400 900">
            {[...Array(5)].map((_, i) => (
              <motion.circle
                key={i}
                cx="700"
                cy="450"
                r={80 + i * 60}
                stroke="#06B6D4"
                strokeWidth="2"
                fill="none"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ 
                  scale: [1, 1.3, 1],
                  opacity: [0.3, 0.7, 0.3]
                }}
                transition={{
                  duration: 5 + i * 0.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.4
                }}
              />
            ))}
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
              {servicesSectionCopy.heading}
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed"
          >
            {servicesSectionCopy.description}
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesSectionCopy.services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="relative group cursor-pointer"
            >
              {/* Neural Card Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-purple-800/30 to-cyan-900/40 rounded-2xl backdrop-blur-sm border border-blue-400/30 group-hover:border-purple-400/50 transition-all duration-300" />
              
              {/* Neural Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 via-transparent to-purple-400/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Synaptic Pulse */}
              <motion.div
                className="absolute top-4 right-4 w-4 h-4 bg-blue-400 rounded-full"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.2
                }}
              />
              
              <div className="relative p-8">
                {/* Service Icon */}
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.3, type: "spring", stiffness: 200 }}
                  viewport={{ once: true }}
                  className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300"
                >
                  {service.icon}
                </motion.div>
                
                {/* Service Title */}
                <motion.h3
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.5 }}
                  viewport={{ once: true }}
                  className="text-2xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors duration-300"
                >
                  {service.title}
                </motion.h3>
                
                {/* Service Description */}
                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.7 }}
                  viewport={{ once: true }}
                  className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300"
                >
                  {service.description}
                </motion.p>
                
                {/* Neural Connection Lines */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400/0 via-purple-400/50 to-cyan-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Bottom Neural Network */}
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
              <div className="flex items-center space-x-4">
                <motion.div
                  className="w-3 h-3 bg-blue-400 rounded-full"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity
                  }}
                />
                <span className="text-gray-300 font-medium">AI Services Network Active</span>
                <motion.div
                  className="w-3 h-3 bg-purple-400 rounded-full"
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
            
            {/* Radiating Connections */}
            {[...Array(6)].map((_, i) => {
              const angle = (i * 60) * Math.PI / 180;
              const x = Math.cos(angle) * 100;
              const y = Math.sin(angle) * 100;
              return (
                <motion.div
                  key={i}
                  className="absolute w-1 bg-gradient-to-r from-blue-400/50 to-transparent"
                  style={{
                    height: '100px',
                    left: '50%',
                    top: '50%',
                    transformOrigin: '0 0',
                    transform: `translate(-50%, -50%) rotate(${i * 60}deg)`
                  }}
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: [0, 1, 0] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.3
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