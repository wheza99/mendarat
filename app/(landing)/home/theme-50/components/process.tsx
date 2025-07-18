'use client';

import { motion } from 'framer-motion';
import { processSectionCopy } from '../copy';

export default function Process() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Neural Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* AI Processing Timeline */}
        <div className="absolute inset-0">
          <svg className="w-full h-full opacity-10" viewBox="0 0 1000 800">
            {/* Main Processing Path */}
            <motion.path
              d="M100,400 Q300,200 500,400 T900,400"
              stroke="#3B82F6"
              strokeWidth="4"
              fill="none"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 4, ease: "easeInOut" }}
              viewport={{ once: true }}
            />
            
            {/* Processing Nodes */}
            {[150, 350, 550, 750].map((x, i) => (
              <motion.circle
                key={i}
                cx={x}
                cy={400}
                r="12"
                fill="#8B5CF6"
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 0.8 }}
                transition={{ duration: 0.8, delay: i * 0.6 }}
                viewport={{ once: true }}
              />
            ))}
            
            {/* Data Flow Branches */}
            {[150, 350, 550, 750].map((x, i) => (
              <motion.line
                key={`branch-${i}`}
                x1={x}
                y1={400}
                x2={x}
                y2={300}
                stroke="#06B6D4"
                strokeWidth="2"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 0.6, delay: i * 0.6 + 0.5 }}
                viewport={{ once: true }}
              />
            ))}
          </svg>
        </div>
        
        {/* Neural Processing Units */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-gradient-to-br from-blue-400/20 via-purple-300/15 to-cyan-400/25 rounded-full"
            style={{
              width: `${20 + Math.random() * 40}px`,
              height: `${20 + Math.random() * 40}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              rotate: [0, 180, 360],
              opacity: [0.2, 0.6, 0.2]
            }}
            transition={{
              duration: 15 + Math.random() * 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 8
            }}
          />
        ))}
        
        {/* AI Learning Patterns */}
        <div className="absolute inset-0">
          <svg className="w-full h-full opacity-15" viewBox="0 0 1200 800">
            {/* Learning Cycles */}
            {[...Array(5)].map((_, i) => (
              <motion.circle
                key={i}
                cx="600"
                cy="400"
                r={80 + i * 60}
                stroke="#8B5CF6"
                strokeWidth="2"
                fill="none"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.7, 0.3]
                }}
                transition={{
                  duration: 6 + i * 0.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.8
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
              {processSectionCopy.heading}
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed"
          >
            {processSectionCopy.description}
          </motion.p>
        </motion.div>

        {/* Process Steps */}
        <div className="relative">
          {/* Central Processing Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-400/50 via-purple-400/50 to-cyan-400/50 hidden lg:block" />
          
          <div className="space-y-16">
            {processSectionCopy.steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex-col lg:space-x-8 space-y-8 lg:space-y-0`}
              >
                {/* Step Content */}
                <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'} text-center lg:text-left`}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                    viewport={{ once: true }}
                    className="relative inline-block p-8 bg-gradient-to-br from-blue-900/40 via-purple-800/30 to-cyan-900/40 rounded-2xl backdrop-blur-sm border border-blue-400/30 hover:border-purple-400/50 transition-all duration-300 group"
                  >
                    {/* Neural Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 via-transparent to-purple-400/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Processing Indicator */}
                    <motion.div
                      className="absolute top-4 right-4 w-3 h-3 bg-green-400 rounded-full"
                      animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.5, 1, 0.5]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.4
                      }}
                    />
                    
                    <div className="relative">
                      <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors duration-300">
                        {step.title}
                      </h3>
                      <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                        {step.description}
                      </p>
                    </div>
                    
                    {/* Data Flow Line */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400/0 via-purple-400/50 to-cyan-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </motion.div>
                </div>
                
                {/* Step Number Node */}
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 + 0.5, type: "spring", stiffness: 200 }}
                  viewport={{ once: true }}
                  className="relative flex-shrink-0"
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-2xl font-bold text-white shadow-lg shadow-blue-500/25 relative overflow-hidden">
                    {/* Neural Pulse Background */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-blue-400/30 to-purple-400/30 rounded-full"
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.5, 0.8, 0.5]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: index * 0.5
                      }}
                    />
                    <span className="relative z-10">{step.number}</span>
                  </div>
                  
                  {/* Radiating Connections */}
                  {[...Array(6)].map((_, i) => {
                    const angle = (i * 60) * Math.PI / 180;
                    return (
                      <motion.div
                        key={i}
                        className="absolute w-0.5 bg-gradient-to-r from-blue-400/40 to-transparent"
                        style={{
                          height: '30px',
                          left: '50%',
                          top: '50%',
                          transformOrigin: '0 0',
                          transform: `translate(-50%, -50%) rotate(${i * 60}deg)`
                        }}
                        initial={{ scaleY: 0 }}
                        animate={{ scaleY: [0, 1, 0] }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: index * 0.3 + i * 0.1
                        }}
                      />
                    );
                  })}
                </motion.div>
                
                {/* Spacer for alternating layout */}
                <div className="flex-1 hidden lg:block" />
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Bottom Neural Processing Status */}
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
              <span className="text-gray-300 text-sm font-medium">AI Process Pipeline</span>
            </div>
            
            <div className="w-px h-6 bg-gray-600" />
            
            <div className="flex items-center space-x-2">
              <span className="text-gray-400 text-sm">{processSectionCopy.steps.length} Stages Active</span>
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