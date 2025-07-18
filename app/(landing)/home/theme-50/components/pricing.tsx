'use client';

import { motion } from 'framer-motion';
import { pricingSectionCopy } from '../copy';

export default function Pricing() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Neural Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Neural Pricing Grid */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-purple-900/20" />
        
        {/* Floating Neural Pricing Nodes */}
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-gradient-to-br from-blue-400/30 via-purple-300/25 to-cyan-400/35 rounded-full"
            style={{
              width: `${12 + Math.random() * 28}px`,
              height: `${12 + Math.random() * 28}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.2, 0.6, 0.2],
              rotate: [0, 360]
            }}
            transition={{
              duration: 15 + Math.random() * 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 8
            }}
          />
        ))}
        
        {/* Neural Pricing Streams */}
        <div className="absolute inset-0">
          <svg className="w-full h-full opacity-15" viewBox="0 0 1000 800">
            {/* Vertical Data Streams */}
            {[200, 400, 600, 800].map((x, i) => (
              <motion.line
                key={i}
                x1={x}
                y1={0}
                x2={x}
                y2={800}
                stroke={`url(#gradient${i})`}
                strokeWidth="2"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: [0, 1, 0] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  delay: i * 1.5
                }}
              />
            ))}
            
            {/* Horizontal Connection Lines */}
            {[150, 350, 550, 750].map((y, i) => (
              <motion.line
                key={i}
                x1={0}
                y1={y}
                x2={1000}
                y2={y}
                stroke="#06B6D4"
                strokeWidth="1"
                strokeDasharray="5,5"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: [0, 1, 0] }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  delay: i * 0.8
                }}
              />
            ))}
            
            {/* Gradient Definitions */}
            <defs>
              {[0, 1, 2, 3].map((i) => (
                <linearGradient key={i} id={`gradient${i}`} x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor={i % 2 === 0 ? "#3B82F6" : "#8B5CF6"} stopOpacity="0" />
                  <stop offset="50%" stopColor={i % 2 === 0 ? "#3B82F6" : "#8B5CF6"} stopOpacity="0.8" />
                  <stop offset="100%" stopColor={i % 2 === 0 ? "#3B82F6" : "#8B5CF6"} stopOpacity="0" />
                </linearGradient>
              ))}
            </defs>
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
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {pricingSectionCopy.plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className={`relative p-8 rounded-3xl backdrop-blur-sm border transition-all duration-300 ${
                plan.popular
                  ? 'bg-gradient-to-br from-blue-900/60 via-purple-800/50 to-cyan-900/60 border-blue-400/50 shadow-2xl shadow-blue-500/25'
                  : 'bg-gradient-to-br from-blue-900/40 via-purple-800/30 to-cyan-900/40 border-blue-400/30'
              }`}
            >
              {/* Neural Card Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/5 via-transparent to-purple-400/5 rounded-3xl" />
              
              {/* Popular Badge */}
              {plan.popular && (
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.2 }}
                  viewport={{ once: true }}
                  className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-2 rounded-full text-sm font-semibold"
                >
                  Most Popular
                </motion.div>
              )}
              
              <div className="relative z-10">
                {/* Plan Name */}
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.2 }}
                  viewport={{ once: true }}
                  className="text-2xl font-bold text-white mb-4"
                >
                  {plan.name}
                </motion.h3>
                
                {/* Price */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.2 }}
                  viewport={{ once: true }}
                  className="mb-6"
                >
                  <span className="text-5xl font-bold bg-gradient-to-r from-blue-300 via-purple-200 to-cyan-300 bg-clip-text text-transparent">
                    {plan.price}
                  </span>
                  <span className="text-gray-400 text-lg ml-2">{plan.period}</span>
                </motion.div>
                
                {/* Description */}
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.2 }}
                  viewport={{ once: true }}
                  className="text-gray-300 mb-8"
                >
                  {plan.description}
                </motion.p>
                
                {/* Features */}
                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <motion.div
                      key={featureIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.7 + index * 0.2 + featureIndex * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center"
                    >
                      <div className="w-5 h-5 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 flex items-center justify-center mr-3 flex-shrink-0">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-gray-300">{feature}</span>
                    </motion.div>
                  ))}
                </div>
                
                {/* CTA Button */}
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full py-4 px-6 rounded-xl font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600 shadow-lg shadow-blue-500/25'
                      : 'bg-gradient-to-r from-blue-900/80 to-purple-900/80 text-white border border-blue-400/30 hover:border-blue-400/60'
                  }`}
                >
                  {plan.buttonText}
                </motion.button>
              </div>
              
              {/* Neural Glow Effects */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-3xl">
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute bg-gradient-to-r from-blue-400/0 via-blue-400/20 to-blue-400/0 h-[1px]"
                    style={{
                      width: '100%',
                      top: `${15 + i * 15}%`,
                      left: 0,
                      transform: 'translateX(-100%)'
                    }}
                    animate={{
                      transform: ['translateX(-100%)', 'translateX(100%)'],
                    }}
                    transition={{
                      duration: 4 + i,
                      repeat: Infinity,
                      delay: i * 0.8 + index * 2,
                      ease: "linear"
                    }}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Custom Plan Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="relative p-8 bg-gradient-to-br from-blue-900/40 via-purple-800/30 to-cyan-900/40 rounded-3xl backdrop-blur-sm border border-blue-400/30 max-w-2xl mx-auto">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-2xl font-bold text-white mb-4"
            >
              {pricingSectionCopy.customPlan.heading}
            </motion.h3>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-gray-300 mb-6"
            >
              {pricingSectionCopy.customPlan.description}
            </motion.p>
            
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-3 rounded-xl font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 shadow-lg shadow-blue-500/25"
            >
              {pricingSectionCopy.customPlan.buttonText}
            </motion.button>
          </div>
        </motion.div>
        
        {/* Bottom Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto"
        >
          {pricingSectionCopy.bottomFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, delay: 0.4 + index * 0.1 }}
                viewport={{ once: true }}
                className="w-16 h-16 bg-gradient-to-br from-blue-500/80 via-purple-500/80 to-cyan-500/80 rounded-full flex items-center justify-center mx-auto mb-4"
              >
                <span className="text-2xl">{feature.icon}</span>
              </motion.div>
              
              <motion.h4
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                viewport={{ once: true }}
                className="text-xl font-semibold text-white mb-2"
              >
                {feature.title}
              </motion.h4>
              
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                viewport={{ once: true }}
                className="text-gray-400"
              >
                {feature.description}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}