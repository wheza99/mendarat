'use client';

import { motion } from 'framer-motion';
import { processSectionCopy } from '../copy';

export default function Process() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Bio Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Evolutionary Timeline */}
        <div className="absolute inset-0">
          <svg className="w-full h-full opacity-10" viewBox="0 0 1000 800">
            {/* Evolution Path */}
            <motion.path
              d="M100,400 Q300,200 500,400 T900,400"
              stroke="#10B981"
              strokeWidth="3"
              fill="none"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 3, ease: "easeInOut" }}
              viewport={{ once: true }}
            />
            
            {/* Evolution Nodes */}
            {[200, 500, 800].map((x, i) => (
              <motion.circle
                key={i}
                cx={x}
                cy={400}
                r="8"
                fill="#14B8A6"
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 0.8 }}
                transition={{ duration: 0.6, delay: i * 0.5 }}
                viewport={{ once: true }}
              />
            ))}
          </svg>
        </div>
        
        {/* Bio Organisms */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-gradient-to-br from-emerald-400/15 via-green-300/10 to-teal-400/20 rounded-full"
            style={{
              width: `${60 + Math.random() * 120}px`,
              height: `${40 + Math.random() * 80}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              borderRadius: `${50 + Math.random() * 50}% ${60 + Math.random() * 40}% ${40 + Math.random() * 60}% ${30 + Math.random() * 70}%`
            }}
            animate={{
              scale: [1, 1.3, 1],
              rotate: [0, 180, 360],
              opacity: [0.2, 0.5, 0.2]
            }}
            transition={{
              duration: 12 + Math.random() * 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 6
            }}
          />
        ))}
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
            <span className="bg-gradient-to-r from-emerald-300 via-green-200 to-teal-300 bg-clip-text text-transparent">
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
          {/* Evolution Timeline */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-emerald-400/30 via-green-400/50 to-emerald-400/30 hidden lg:block" />
          
          <div className="space-y-24">
            {processSectionCopy.steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`flex items-center gap-12 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
              >
                {/* Step Content */}
                <div className="flex-1">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="group relative"
                  >
                    {/* Bio Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/20 to-green-400/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="relative bg-gradient-to-br from-emerald-900/30 to-green-900/30 backdrop-blur-sm border border-emerald-400/30 rounded-2xl p-8 overflow-hidden transition-all duration-500 group-hover:border-emerald-400/60">
                      {/* Neural Network Background */}
                      <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-20 transition-opacity duration-500">
                        <svg className="w-full h-full" viewBox="0 0 400 300">
                          {[...Array(10)].map((_, i) => {
                            const x1 = Math.random() * 400;
                            const y1 = Math.random() * 300;
                            const x2 = Math.random() * 400;
                            const y2 = Math.random() * 300;
                            return (
                              <g key={i}>
                                <line
                                  x1={x1}
                                  y1={y1}
                                  x2={x2}
                                  y2={y2}
                                  stroke="#10B981"
                                  strokeWidth="1"
                                  opacity="0.6"
                                />
                                <circle
                                  cx={x1}
                                  cy={y1}
                                  r="2"
                                  fill="#14B8A6"
                                  opacity="0.8"
                                />
                              </g>
                            );
                          })}
                        </svg>
                      </div>
                      
                      {/* Step Number */}
                      <div className="relative z-10 mb-6">
                        <span className="text-6xl font-bold bg-gradient-to-r from-emerald-300 to-green-300 bg-clip-text text-transparent opacity-30">
                          {step.number}
                        </span>
                      </div>
                      
                      {/* Content */}
                      <div className="relative z-10">
                        <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-emerald-300 transition-colors duration-300">
                          {step.title}
                        </h3>
                        
                        <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                          {step.description}
                        </p>
                      </div>
                      
                      {/* Bio Particles */}
                      <div className="absolute inset-0">
                        {[...Array(12)].map((_, i) => (
                          <motion.div
                            key={i}
                            className="absolute w-1 h-1 bg-emerald-400 rounded-full opacity-0 group-hover:opacity-60"
                            style={{
                              left: `${Math.random() * 100}%`,
                              top: `${Math.random() * 100}%`,
                            }}
                            animate={{
                              y: [-10, 10, -10],
                              opacity: [0.2, 0.6, 0.2],
                              scale: [0.5, 1.2, 0.5]
                            }}
                            transition={{
                              duration: 3 + Math.random(),
                              repeat: Infinity,
                              ease: "easeInOut",
                              delay: Math.random() * 2
                            }}
                          />
                        ))}
                      </div>
                      
                      {/* Bio Border Animation */}
                      <div className="absolute inset-0 border-2 border-emerald-400/0 group-hover:border-emerald-400/30 rounded-2xl transition-all duration-500" />
                    </div>
                  </motion.div>
                </div>

                {/* Step Visualization */}
                <div className="flex-shrink-0">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    className="relative w-32 h-32 lg:w-40 lg:h-40"
                  >
                    {/* Bio Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/30 to-green-400/30 rounded-full blur-xl" />
                    
                    <div className="relative w-full h-full bg-gradient-to-br from-emerald-900/50 to-green-900/50 backdrop-blur-sm border-4 border-emerald-400/50 rounded-full flex items-center justify-center overflow-hidden">
                      {/* Bio Membrane Animation */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-emerald-400/20 to-green-400/20 rounded-full"
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [0.3, 0.6, 0.3]
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: index * 0.5
                        }}
                      />
                      
                      {/* Step Icon */}
                      <div className="relative z-10 text-4xl lg:text-5xl font-bold text-emerald-300">
                        {index === 0 && (
                          <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                        )}
                        {index === 1 && (
                          <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-16.5 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z" />
                          </svg>
                        )}
                        {index === 2 && (
                          <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
                          </svg>
                        )}
                      </div>
                      
                      {/* Bio Particles */}
                      <div className="absolute inset-0">
                        {[...Array(8)].map((_, i) => (
                          <motion.div
                            key={i}
                            className="absolute w-1 h-1 bg-emerald-400 rounded-full"
                            style={{
                              left: `${Math.random() * 100}%`,
                              top: `${Math.random() * 100}%`,
                            }}
                            animate={{
                              rotate: [0, 360],
                              scale: [0.5, 1, 0.5],
                              opacity: [0.3, 0.8, 0.3]
                            }}
                            transition={{
                              duration: 4 + Math.random() * 2,
                              repeat: Infinity,
                              ease: "easeInOut",
                              delay: Math.random() * 2
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Evolution Complete */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="relative inline-block">
            {/* Bio Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/30 to-green-400/30 rounded-2xl blur-xl" />
            
            <div className="relative bg-gradient-to-br from-emerald-900/40 to-green-900/40 backdrop-blur-sm border border-emerald-400/40 rounded-2xl px-8 py-6">
              <p className="text-emerald-300 font-semibold text-lg">
                Evolusi Teknologi Berkelanjutan
              </p>
              <p className="text-gray-300 mt-2">
                Dari observasi alam hingga implementasi teknologi masa depan
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}