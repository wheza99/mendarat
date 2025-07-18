'use client';

import { motion } from 'framer-motion';
import { processSectionCopy } from '../copy';

export default function Process() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-emerald-50/30 to-teal-50/40 relative overflow-hidden">
      {/* Organic Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="absolute inset-0 w-full h-full" style={{ pointerEvents: 'none' }}>
          <defs>
            <pattern id="organicGrid" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="50" cy="50" r="2" fill="#10B981" opacity="0.3" />
              <circle cx="25" cy="25" r="1" fill="#06B6D4" opacity="0.2" />
              <circle cx="75" cy="75" r="1.5" fill="#22C55E" opacity="0.25" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#organicGrid)" />
        </svg>
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
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
            {processSectionCopy.heading}
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            {processSectionCopy.description}
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Lines */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-emerald-300 via-teal-300 to-green-300 transform -translate-y-1/2 z-0"></div>
          
          {/* Animated Flow */}
          <motion.div
            className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 transform -translate-y-1/2 z-10"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            viewport={{ once: true }}
          >
            <div className="w-full h-full bg-gradient-to-r from-emerald-500 via-teal-500 to-green-500 origin-left"></div>
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-8 relative z-20">
            {processSectionCopy.steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative group"
              >
                {/* Step Card */}
                <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 border border-emerald-200/50 hover:border-emerald-300 transition-all duration-300 hover:shadow-xl hover:bg-white/90 text-center relative overflow-hidden">
                  {/* Hover Background Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Step Number */}
                  <div className="relative z-10 mb-6">
                    <motion.div
                      className="w-16 h-16 mx-auto bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full flex items-center justify-center text-white font-bold text-xl mb-4 group-hover:scale-110 transition-transform duration-300"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      {step.number}
                    </motion.div>
                    
                    {/* Animated Ring */}
                    <motion.div
                      className="absolute top-0 left-1/2 transform -translate-x-1/2 w-16 h-16 border-2 border-emerald-300 rounded-full opacity-0 group-hover:opacity-100"
                      animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0, 0.5, 0]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                  </div>

                  {/* Step Content */}
                  <div className="relative z-10">
                    <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-emerald-600 transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Bio-Tech Icons */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <motion.div
                      animate={{
                        rotate: [0, 360],
                        scale: [1, 1.1, 1]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      className="text-emerald-400 text-lg"
                    >
                      {index === 0 && '🔬'}
                      {index === 1 && '🧬'}
                      {index === 2 && '⚗️'}
                      {index === 3 && '🏭'}
                      {index === 4 && '🚀'}
                    </motion.div>
                  </div>

                  {/* Floating Particles */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-emerald-400 rounded-full"
                        style={{
                          left: `${Math.random() * 100}%`,
                          top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                          y: [0, -20, 0],
                          opacity: [0, 1, 0],
                          scale: [0, 1, 0]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.3
                        }}
                      />
                    ))}
                  </div>
                </div>

                {/* Arrow (Desktop only) */}
                {index < processSectionCopy.steps.length - 1 && (
                  <motion.div
                    className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-30"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                    viewport={{ once: true }}
                  >
                    <motion.div
                      animate={{
                        x: [0, 5, 0]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      className="w-8 h-8 bg-white rounded-full border-2 border-emerald-300 flex items-center justify-center text-emerald-600 font-bold shadow-lg"
                    >
                      →
                    </motion.div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-3xl p-8 border border-emerald-200/50 relative overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 opacity-20">
              <motion.div
                className="absolute w-full h-full"
                animate={{
                  background: [
                    'radial-gradient(circle at 20% 20%, rgba(16, 185, 129, 0.1) 0%, transparent 50%)',
                    'radial-gradient(circle at 80% 80%, rgba(6, 182, 212, 0.1) 0%, transparent 50%)',
                    'radial-gradient(circle at 50% 50%, rgba(34, 197, 94, 0.1) 0%, transparent 50%)',
                    'radial-gradient(circle at 20% 20%, rgba(16, 185, 129, 0.1) 0%, transparent 50%)'
                  ]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </div>
            
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-slate-800 mb-4">
                Ready to Start Your Bio-Innovation Journey?
              </h3>
              <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
                Our proven research process ensures successful biotechnology development from concept to market implementation.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-8 py-4 rounded-full font-semibold hover:from-emerald-600 hover:to-teal-600 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Begin Your Project
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}