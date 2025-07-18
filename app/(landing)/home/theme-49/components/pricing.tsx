'use client';

import { motion } from 'framer-motion';
import { pricingSectionCopy } from '../copy';

export default function Pricing() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Quantum Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Aurora Energy Field */}
        <div className="absolute inset-0 opacity-30">
          <div 
            className="w-full h-full"
            style={{
              background: `
                radial-gradient(ellipse at bottom center, rgba(139, 92, 246, 0.4), transparent 60%),
                radial-gradient(ellipse at top left, rgba(34, 197, 94, 0.3), transparent 50%),
                radial-gradient(ellipse at top right, rgba(236, 72, 153, 0.2), transparent 70%)
              `
            }}
          />
        </div>
        
        {/* Cosmic Pricing Grid */}
        <div className="absolute inset-0 opacity-10">
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: `
                linear-gradient(rgba(139, 92, 246, 0.4) 1px, transparent 1px),
                linear-gradient(90deg, rgba(34, 197, 94, 0.3) 1px, transparent 1px)
              `,
              backgroundSize: '200px 200px',
              animation: 'aurora-grid 50s linear infinite'
            }}
          />
        </div>
        
        {/* Floating Quantum Particles */}
        <div className="absolute top-24 left-20 w-5 h-5 bg-violet-400 rounded-full opacity-60 animate-aurora-float"></div>
        <div className="absolute top-40 right-28 w-3 h-3 bg-emerald-400 rounded-full opacity-70 animate-aurora-drift"></div>
        <div className="absolute bottom-28 left-32 w-4 h-4 bg-pink-400 rounded-full opacity-50 animate-aurora-spiral"></div>
        <div className="absolute bottom-40 right-24 w-6 h-6 bg-cyan-400 rounded-full opacity-80 animate-aurora-float"></div>
        
        {/* Quantum Energy Streams */}
        <svg className="absolute inset-0 w-full h-full opacity-20" style={{ pointerEvents: 'none' }}>
          <defs>
            <linearGradient id="pricingGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.6" />
              <stop offset="50%" stopColor="#22C55E" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#EC4899" stopOpacity="0.5" />
            </linearGradient>
            <linearGradient id="pricingGradient2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.5" />
              <stop offset="50%" stopColor="#A855F7" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#10B981" stopOpacity="0.3" />
            </linearGradient>
          </defs>
          <path 
            d="M 0 200 Q 400 150 800 180 T 1600 200 L 1600 400 L 0 400 Z"
            fill="url(#pricingGradient1)" 
            className="animate-aurora-wave"
          />
          <path 
            d="M 0 300 Q 500 250 1000 280 T 1600 300 L 1600 500 L 0 500 Z"
            fill="url(#pricingGradient2)" 
            className="animate-aurora-wave"
            style={{ animationDelay: '7s' }}
          />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-violet-400 via-emerald-400 to-pink-400 bg-clip-text text-transparent">
            {pricingSectionCopy.heading}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {pricingSectionCopy.description}
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {pricingSectionCopy.plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.2,
                type: "spring",
                stiffness: 100
              }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: plan.popular ? 1.02 : 1.05,
                rotateY: 5,
                transition: { duration: 0.3 }
              }}
              className={`relative group ${
                plan.popular ? 'md:-mt-4 md:mb-4' : ''
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <motion.div
                  initial={{ opacity: 0, scale: 0, rotate: -45 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                  viewport={{ once: true }}
                  className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20"
                >
                  <div className="px-6 py-2 bg-gradient-to-r from-violet-600 via-emerald-600 to-pink-600 text-white text-sm font-bold rounded-full shadow-lg">
                    Most Popular
                  </div>
                </motion.div>
              )}
              
              {/* Pricing Card */}
              <div className={`relative p-8 rounded-2xl backdrop-blur-sm border transition-all duration-500 overflow-hidden h-full ${
                plan.popular 
                  ? 'bg-gradient-to-br from-indigo-900/60 via-purple-900/50 to-slate-900/70 border-violet-400/40 shadow-2xl shadow-violet-500/20'
                  : 'bg-gradient-to-br from-indigo-900/40 via-purple-900/30 to-slate-900/50 border-violet-500/20 hover:border-emerald-400/40'
              }`}>
                {/* Aurora Glow Effect */}
                <div className={`absolute inset-0 transition-opacity duration-500 ${
                  plan.popular 
                    ? 'bg-gradient-to-br from-violet-600/15 via-emerald-500/10 to-pink-600/15 opacity-100'
                    : 'bg-gradient-to-br from-violet-600/10 via-emerald-500/5 to-pink-600/10 opacity-0 group-hover:opacity-100'
                }`}></div>
                
                {/* Quantum Particles */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-violet-400 rounded-full opacity-60 animate-pulse"></div>
                <div className="absolute bottom-4 left-4 w-1 h-1 bg-emerald-400 rounded-full opacity-80 animate-ping"></div>
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Plan Name */}
                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 + 0.4 }}
                    viewport={{ once: true }}
                    className={`text-2xl font-bold mb-4 ${
                      plan.popular ? 'text-emerald-300' : 'text-white group-hover:text-emerald-300'
                    } transition-colors duration-300`}
                  >
                    {plan.name}
                  </motion.h3>
                  
                  {/* Price */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.2 + 0.5 }}
                    viewport={{ once: true }}
                    className="mb-6"
                  >
                    <div className="flex items-baseline">
                      <span className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-violet-400 via-emerald-400 to-pink-400 bg-clip-text text-transparent">
                        {plan.price}
                      </span>
                      <span className="text-gray-400 ml-2">{plan.period}</span>
                    </div>
                  </motion.div>
                  
                  {/* Description */}
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 + 0.6 }}
                    viewport={{ once: true }}
                    className="text-gray-400 mb-8 group-hover:text-gray-300 transition-colors duration-300"
                  >
                    {plan.description}
                  </motion.p>
                  
                  {/* Features */}
                  <motion.ul
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: index * 0.2 + 0.7 }}
                    viewport={{ once: true }}
                    className="space-y-4 mb-8"
                  >
                    {plan.features.map((feature, featureIndex) => (
                      <motion.li
                        key={featureIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.2 + 0.8 + featureIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-center space-x-3"
                      >
                        <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                        <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                          {feature}
                        </span>
                      </motion.li>
                    ))}
                  </motion.ul>
                  
                  {/* CTA Button */}
                  <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 + 1 }}
                    viewport={{ once: true }}
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: plan.popular 
                        ? "0 0 30px rgba(139, 92, 246, 0.6)" 
                        : "0 0 20px rgba(139, 92, 246, 0.4)"
                    }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full py-4 font-semibold rounded-full transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-violet-600 via-emerald-600 to-pink-600 text-white shadow-lg shadow-violet-500/25 hover:from-violet-500 hover:via-emerald-500 hover:to-pink-500'
                        : 'bg-gradient-to-r from-indigo-900/60 via-purple-900/50 to-slate-900/70 text-white border border-violet-500/30 hover:border-emerald-400/50 hover:bg-gradient-to-r hover:from-violet-600/20 hover:via-emerald-600/20 hover:to-pink-600/20'
                    }`}
                  >
                    {plan.buttonText}
                  </motion.button>
                </div>
                
                {/* Quantum Energy Ring */}
                <div className={`absolute inset-0 rounded-2xl border-2 border-transparent transition-opacity duration-500 animate-pulse ${
                  plan.popular 
                    ? 'bg-gradient-to-r from-violet-500/30 via-emerald-500/30 to-pink-500/30 opacity-100'
                    : 'bg-gradient-to-r from-violet-500/20 via-emerald-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100'
                }`}></div>
              </div>
              
              {/* Cosmic Reflection */}
              <div className="absolute -bottom-2 left-4 right-4 h-8 bg-gradient-to-r from-violet-500/10 via-emerald-500/10 to-pink-500/10 rounded-full blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-500"></div>
            </motion.div>
          ))}
        </div>
        
        {/* Custom Plan Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center space-x-6 px-8 py-4 rounded-full bg-gradient-to-r from-violet-900/30 via-emerald-900/20 to-pink-900/30 backdrop-blur-sm border border-violet-500/20">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-violet-400 rounded-full animate-pulse"></div>
              <span className="text-gray-300 text-sm font-medium">Need a Custom Quantum Solution?</span>
            </div>
            <motion.button
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 20px rgba(139, 92, 246, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 bg-gradient-to-r from-violet-600 via-emerald-600 to-pink-600 text-white text-sm font-semibold rounded-full hover:from-violet-500 hover:via-emerald-500 hover:to-pink-500 transition-all duration-300"
            >
              Contact Us
            </motion.button>
          </div>
        </motion.div>
        
        {/* Bottom Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center"
        >
          {[
            { icon: '🔒', title: 'Quantum Security', description: 'Enterprise-grade protection' },
            { icon: '⚡', title: 'Aurora Speed', description: 'Lightning-fast performance' },
            { icon: '🌌', title: 'Cosmic Scale', description: 'Unlimited scalability' },
            { icon: '🛡️', title: 'Stellar Support', description: '24/7 expert assistance' }
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1 + 1.2,
                type: "spring",
                stiffness: 100
              }}
              viewport={{ once: true }}
              className="p-4 rounded-xl bg-gradient-to-br from-indigo-900/20 via-purple-900/15 to-slate-900/25 backdrop-blur-sm border border-violet-500/10"
            >
              <div className="text-3xl mb-3">{feature.icon}</div>
              <h4 className="text-lg font-semibold text-white mb-2">{feature.title}</h4>
              <p className="text-sm text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}