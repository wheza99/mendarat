'use client';

import { motion } from 'framer-motion';
import { clientsSectionCopy } from '../copy';

export default function Clients() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Neural Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Neural Network Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-transparent to-purple-900/10" />
        
        {/* Data Nodes */}
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-br from-blue-400/20 to-purple-400/20"
            style={{
              width: `${6 + Math.random() * 12}px`,
              height: `${6 + Math.random() * 12}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 30 - 15, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.5, 1]
            }}
            transition={{
              duration: 10 + Math.random() * 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 6
            }}
          />
        ))}
        
        {/* Client Connection Network */}
        <div className="absolute inset-0">
          <svg className="w-full h-full opacity-15" viewBox="0 0 1000 600">
            {[...Array(25)].map((_, i) => {
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
                  stroke="#3B82F6"
                  strokeWidth="1"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.6 }}
                  transition={{
                    duration: 5 + Math.random() * 3,
                    repeat: Infinity,
                    repeatType: "reverse",
                    delay: Math.random() * 5
                  }}
                />
              );
            })}
          </svg>
        </div>
        
        {/* Data Stream Patterns */}
        <div className="absolute inset-0">
          <svg className="w-full h-full opacity-10" viewBox="0 0 1400 800">
            {[...Array(6)].map((_, i) => (
              <motion.circle
                key={i}
                cx="700"
                cy="400"
                r={60 + i * 50}
                stroke="#8B5CF6"
                strokeWidth="2"
                fill="none"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ 
                  scale: [1, 1.4, 1],
                  opacity: [0.3, 0.7, 0.3]
                }}
                transition={{
                  duration: 6 + i * 0.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.5
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
              {clientsSectionCopy.heading}
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed"
          >
            {clientsSectionCopy.description}
          </motion.p>
        </motion.div>

        {/* Clients Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {clientsSectionCopy.clients.map((client, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="relative group"
            >
              {/* Neural Client Card */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-purple-800/30 to-cyan-900/40 rounded-2xl backdrop-blur-sm border border-blue-400/30 group-hover:border-purple-400/50 transition-all duration-300" />
              
              {/* Neural Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/15 via-transparent to-purple-400/15 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Connection Status Indicator */}
              <motion.div
                className="absolute top-4 right-4 w-3 h-3 bg-green-400 rounded-full"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.2
                }}
              />
              
              <div className="relative p-8 text-center">
                {/* Client Logo */}
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.3, type: "spring", stiffness: 200 }}
                  viewport={{ once: true }}
                  className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300"
                >
                  {client.logo}
                </motion.div>
                
                {/* Client Name */}
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.5 }}
                  viewport={{ once: true }}
                  className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors duration-300"
                >
                  {client.name}
                </motion.h3>
                
                {/* Connection Status */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.7 }}
                  viewport={{ once: true }}
                  className="inline-block px-3 py-1 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-full text-sm text-green-300 border border-green-400/30"
                >
                  {client.connection}
                </motion.div>
                
                {/* Data Flow Line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400/0 via-green-400/50 to-blue-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Partnership Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {clientsSectionCopy.stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="relative inline-block p-6 bg-gradient-to-br from-blue-900/30 to-purple-900/30 rounded-2xl border border-blue-400/20 backdrop-blur-sm">
                {/* Neural Pulse */}
                <motion.div
                  className="absolute top-2 right-2 w-2 h-2 bg-blue-400 rounded-full"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: index * 0.3
                  }}
                />
                
                <div className="text-3xl font-bold text-blue-300 mb-2">{stat.number}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="relative px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full font-semibold text-white shadow-lg shadow-blue-500/25 hover:shadow-purple-500/25 transition-all duration-300 overflow-hidden"
          >
            {/* Neural Button Background */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.5, 0.8, 0.5]
              }}
              transition={{
                duration: 2,
                repeat: Infinity
              }}
            />
            <span className="relative z-10">{clientsSectionCopy.cta}</span>
          </motion.button>
        </motion.div>
        
        {/* Bottom Neural Network Status */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="inline-flex items-center space-x-6 px-8 py-4 bg-gradient-to-r from-blue-900/40 to-purple-900/40 rounded-full border border-blue-400/30 backdrop-blur-sm">
            <div className="flex items-center space-x-2">
              <motion.div
                className="w-3 h-3 bg-green-400 rounded-full"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity
                }}
              />
              <span className="text-gray-300 text-sm font-medium">Client Network Active</span>
            </div>
            
            <div className="w-px h-6 bg-gray-600" />
            
            <div className="flex items-center space-x-2">
              <span className="text-gray-400 text-sm">{clientsSectionCopy.clients.length} Partners Connected</span>
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
        </motion.div>
      </div>
    </section>
  );
}