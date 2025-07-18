'use client';

import { motion } from 'framer-motion';
import { pricingSectionCopy } from '../copy';

export default function Pricing() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Bio Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Bio Energy Field */}
        <div className="absolute inset-0">
          <svg className="w-full h-full opacity-15" viewBox="0 0 1400 900">
            {/* Energy Waves */}
            {[...Array(8)].map((_, i) => (
              <motion.circle
                key={i}
                cx="700"
                cy="450"
                r={100 + i * 80}
                stroke="#10B981"
                strokeWidth="2"
                fill="none"
                opacity={0.6 - i * 0.05}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{
                  duration: 4 + i * 0.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.3
                }}
              />
            ))}
            
            {/* Bio Connections */}
            {[...Array(12)].map((_, i) => {
              const angle = (i * 30) * Math.PI / 180;
              const x1 = 700 + Math.cos(angle) * 200;
              const y1 = 450 + Math.sin(angle) * 200;
              const x2 = 700 + Math.cos(angle) * 400;
              const y2 = 450 + Math.sin(angle) * 400;
              return (
                <motion.line
                  key={i}
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                  stroke="#14B8A6"
                  strokeWidth="1"
                  opacity="0.4"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: [0, 1, 0] }}
                  transition={{
                    duration: 3 + Math.random() * 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: Math.random() * 2
                  }}
                />
              );
            })}
          </svg>
        </div>
        
        {/* Floating Bio Organisms */}
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-gradient-to-br from-emerald-400/25 via-green-300/20 to-teal-400/30 rounded-full"
            style={{
              width: `${100 + Math.random() * 200}px`,
              height: `${80 + Math.random() * 160}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              borderRadius: `${30 + Math.random() * 70}% ${40 + Math.random() * 60}% ${50 + Math.random() * 50}% ${60 + Math.random() * 40}%`
            }}
            animate={{
              x: [0, 60, -40, 0],
              y: [0, -50, 40, 0],
              scale: [1, 1.3, 0.8, 1],
              opacity: [0.2, 0.5, 0.3, 0.2],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: 20 + Math.random() * 15,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 10
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
              {pricingSectionCopy.heading}
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed"
          >
            {pricingSectionCopy.description}
          </motion.p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {pricingSectionCopy.plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -15, scale: 1.02 }}
              className={`group relative ${plan.popular ? 'lg:scale-110 lg:-mt-8' : ''}`}
            >
              {/* Bio Glow Effect */}
              <div className={`absolute inset-0 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                plan.popular 
                  ? 'bg-gradient-to-br from-emerald-400/40 to-green-400/40' 
                  : 'bg-gradient-to-br from-emerald-400/20 to-green-400/20'
              }`} />
              
              {/* Popular Badge */}
              {plan.popular && (
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                  viewport={{ once: true }}
                  className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20"
                >
                  <div className="relative">
                    {/* Bio Glow for Badge */}
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/50 to-green-400/50 rounded-full blur-md" />
                    
                    <div className="relative bg-gradient-to-r from-emerald-500 to-green-500 text-white px-6 py-2 rounded-full text-sm font-semibold border border-emerald-400/50">
                      Paling Populer
                    </div>
                  </div>
                </motion.div>
              )}
              
              <div className={`relative h-full rounded-3xl p-8 overflow-hidden transition-all duration-500 ${
                plan.popular 
                  ? 'bg-gradient-to-br from-emerald-900/50 to-green-900/50 border-2 border-emerald-400/60 group-hover:border-emerald-400/80' 
                  : 'bg-gradient-to-br from-emerald-900/30 to-green-900/30 border border-emerald-400/30 group-hover:border-emerald-400/60'
              } backdrop-blur-sm`}>
                {/* Neural Network Background */}
                <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-20 transition-opacity duration-500">
                  <svg className="w-full h-full" viewBox="0 0 400 600">
                    {[...Array(15)].map((_, i) => {
                      const x1 = Math.random() * 400;
                      const y1 = Math.random() * 600;
                      const x2 = Math.random() * 400;
                      const y2 = Math.random() * 600;
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
                
                {/* Plan Header */}
                <div className="relative z-10 text-center mb-8">
                  <motion.div
                    animate={{
                      scale: [1, 1.05, 1],
                      rotate: [0, 2, -2, 0]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.5
                    }}
                    className={`w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center border-2 ${
                      plan.popular 
                        ? 'bg-gradient-to-br from-emerald-400/40 to-green-400/40 border-emerald-400/60' 
                        : 'bg-gradient-to-br from-emerald-400/20 to-green-400/20 border-emerald-400/40'
                    }`}
                  >
                    <svg className="w-10 h-10 text-emerald-300" fill="currentColor" viewBox="0 0 24 24">
                      {index === 0 && (
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                      )}
                      {index === 1 && (
                        <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                      )}
                      {index === 2 && (
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      )}
                    </svg>
                  </motion.div>
                  
                  <h3 className={`text-2xl font-bold mb-2 transition-colors duration-300 ${
                    plan.popular 
                      ? 'text-emerald-300 group-hover:text-emerald-200' 
                      : 'text-white group-hover:text-emerald-300'
                  }`}>
                    {plan.name}
                  </h3>
                  
                  <p className="text-gray-400 text-sm mb-6">
                    {plan.description}
                  </p>
                  
                  {/* Price */}
                  <div className="mb-6">
                    <motion.div
                      className={`text-5xl font-bold mb-2 ${
                        plan.popular 
                          ? 'bg-gradient-to-r from-emerald-200 to-green-200 bg-clip-text text-transparent' 
                          : 'bg-gradient-to-r from-emerald-300 to-green-300 bg-clip-text text-transparent'
                      }`}
                      animate={{
                        scale: [1, 1.02, 1]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.3
                      }}
                    >
                      {plan.price}
                    </motion.div>
                    <p className="text-gray-400 text-sm">
                      {plan.period}
                    </p>
                  </div>
                </div>
                
                {/* Features */}
                <div className="relative z-10 mb-8">
                  <ul className="space-y-4">
                    {plan.features.map((feature, featureIndex) => (
                      <motion.li
                        key={featureIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.2 + featureIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-3 text-gray-300 group-hover:text-gray-200 transition-colors duration-300"
                      >
                        <motion.div
                          animate={{
                            scale: [1, 1.2, 1],
                            rotate: [0, 180, 360]
                          }}
                          transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: featureIndex * 0.2
                          }}
                          className="flex-shrink-0 w-5 h-5 bg-gradient-to-br from-emerald-400 to-green-400 rounded-full flex items-center justify-center"
                        >
                          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z" />
                          </svg>
                        </motion.div>
                        <span>{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
                
                {/* CTA Button */}
                <div className="relative z-10">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full py-4 px-6 rounded-2xl font-semibold transition-all duration-300 relative overflow-hidden ${
                      plan.popular 
                        ? 'bg-gradient-to-r from-emerald-500 to-green-500 text-white hover:from-emerald-400 hover:to-green-400' 
                        : 'bg-gradient-to-r from-emerald-900/50 to-green-900/50 text-emerald-300 border border-emerald-400/50 hover:bg-gradient-to-r hover:from-emerald-500 hover:to-green-500 hover:text-white'
                    }`}
                  >
                    {/* Button Bio Glow */}
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 to-green-400/20 opacity-0 hover:opacity-100 transition-opacity duration-300" />
                    
                    <span className="relative z-10">
                      {plan.buttonText}
                    </span>
                    
                    {/* Button Particles */}
                    <div className="absolute inset-0">
                      {[...Array(8)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute w-1 h-1 bg-white rounded-full opacity-0 hover:opacity-60"
                          style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                          }}
                          animate={{
                            y: [-5, 5, -5],
                            opacity: [0.2, 0.6, 0.2],
                            scale: [0.5, 1, 0.5]
                          }}
                          transition={{
                            duration: 2 + Math.random(),
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: Math.random()
                          }}
                        />
                      ))}
                    </div>
                  </motion.button>
                </div>
                
                {/* Bio Particles */}
                <div className="absolute inset-0">
                  {[...Array(20)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-emerald-400 rounded-full opacity-0 group-hover:opacity-60"
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                      }}
                      animate={{
                        y: [-20, 20, -20],
                        x: [-10, 10, -10],
                        opacity: [0.2, 0.6, 0.2],
                        scale: [0.5, 1.5, 0.5]
                      }}
                      transition={{
                        duration: 5 + Math.random() * 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: Math.random() * 4
                      }}
                    />
                  ))}
                </div>
                
                {/* Bio Border Animation */}
                <div className={`absolute inset-0 border-2 rounded-3xl transition-all duration-500 ${
                  plan.popular 
                    ? 'border-emerald-400/0 group-hover:border-emerald-400/40' 
                    : 'border-emerald-400/0 group-hover:border-emerald-400/30'
                }`} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bio Guarantee */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="relative inline-block">
            {/* Bio Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/30 to-green-400/30 rounded-2xl blur-xl" />
            
            <div className="relative bg-gradient-to-br from-emerald-900/40 to-green-900/40 backdrop-blur-sm border border-emerald-400/40 rounded-2xl px-8 py-6">
              <div className="flex items-center gap-4">
                <motion.div
                  animate={{
                    rotate: [0, 360],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="w-12 h-12 bg-gradient-to-br from-emerald-400/30 to-green-400/30 rounded-full flex items-center justify-center border border-emerald-400/50"
                >
                  <svg className="w-6 h-6 text-emerald-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
                  </svg>
                </motion.div>
                
                <div className="text-left">
                  <p className="text-emerald-300 font-semibold text-lg">
                    Jaminan Kepuasan 100%
                  </p>
                  <p className="text-gray-300 text-sm">
                    Garansi uang kembali dalam 30 hari jika tidak puas
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}