'use client';

import { motion } from 'framer-motion';
import { pricingSectionCopy } from '../copy';

export default function Pricing() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Cyber Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Digital Matrix */}
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" viewBox="0 0 1000 1000">
            <defs>
              <pattern id="matrix" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <rect width="40" height="40" fill="none" stroke="#22D3EE" strokeWidth="0.5" opacity="0.3" />
                <circle cx="20" cy="20" r="2" fill="#A855F7" opacity="0.6" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#matrix)" />
          </svg>
        </div>
        
        {/* Cyber Orbs */}
        <div className="absolute inset-0">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-gradient-to-r from-cyan-400/20 to-purple-400/20 blur-xl"
              style={{
                width: `${100 + Math.random() * 200}px`,
                height: `${100 + Math.random() * 200}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `cyber-orb ${10 + Math.random() * 10}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 5}s`
              }}
            />
          ))}
        </div>
        
        {/* Data Particles */}
        <div className="absolute inset-0">
          {[...Array(25)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `data-particle ${8 + Math.random() * 6}s linear infinite`,
                animationDelay: `${Math.random() * 4}s`
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-6xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {pricingSectionCopy.plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative group ${
                plan.popular ? 'lg:scale-110 lg:-mt-8' : ''
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                  viewport={{ once: true }}
                  className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20"
                >
                  <div className="bg-gradient-to-r from-cyan-400 to-purple-400 text-white px-6 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                </motion.div>
              )}
              
              {/* Pricing Card */}
              <div className={`relative bg-gray-900/60 backdrop-blur-sm border rounded-3xl p-8 h-full overflow-hidden transition-all duration-300 ${
                plan.popular 
                  ? 'border-purple-400/50 group-hover:border-purple-400/80' 
                  : 'border-cyan-400/30 group-hover:border-cyan-400/60'
              }`}>
                {/* Holographic Background */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-br from-purple-400/10 via-transparent to-pink-400/10'
                    : 'bg-gradient-to-br from-cyan-400/10 via-transparent to-blue-400/10'
                }`} />
                
                {/* Scan Lines */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300">
                  {[...Array(8)].map((_, i) => (
                    <div
                      key={i}
                      className={`absolute w-full h-px ${
                        plan.popular ? 'bg-purple-400/50' : 'bg-cyan-400/50'
                      }`}
                      style={{
                        top: `${i * 12.5}%`,
                        animation: `scan-line ${1.5 + Math.random() * 0.5}s ease-in-out infinite`,
                        animationDelay: `${Math.random() * 1}s`
                      }}
                    />
                  ))}
                </div>
                
                {/* Cyber Pattern */}
                <div className="absolute top-4 right-4 w-16 h-16 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <circle cx="50" cy="50" r="40" fill="none" stroke={plan.popular ? "#A855F7" : "#22D3EE"} strokeWidth="2" />
                    <circle cx="50" cy="50" r="25" fill="none" stroke={plan.popular ? "#EC4899" : "#3B82F6"} strokeWidth="1" />
                    <circle cx="50" cy="50" r="10" fill={plan.popular ? "#A855F7" : "#22D3EE"} />
                  </svg>
                </div>
                
                <div className="relative z-10 space-y-6">
                  {/* Plan Name */}
                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
                    viewport={{ once: true }}
                    className={`text-2xl font-bold ${
                      plan.popular 
                        ? 'text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text'
                        : 'text-white'
                    }`}
                  >
                    {plan.name}
                  </motion.h3>
                  
                  {/* Price */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                    viewport={{ once: true }}
                    className="space-y-2"
                  >
                    <div className="flex items-baseline space-x-2">
                      <span className={`text-4xl lg:text-5xl font-bold ${
                        plan.popular 
                          ? 'text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text'
                          : 'text-white'
                      }`}>
                        {plan.price}
                      </span>
                      <span className="text-gray-400 text-lg">/{plan.period}</span>
                    </div>
                  </motion.div>
                  
                  {/* Description */}
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.4 }}
                    viewport={{ once: true }}
                    className="text-gray-300 leading-relaxed"
                  >
                    {plan.description}
                  </motion.p>
                  
                  {/* Features */}
                  <motion.ul
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.5 }}
                    viewport={{ once: true }}
                    className="space-y-4"
                  >
                    {plan.features.map((feature, featureIndex) => (
                      <motion.li
                        key={featureIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 + 0.6 + featureIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-center space-x-3"
                      >
                        {/* Check Icon */}
                        <div className={`w-5 h-5 rounded-full flex items-center justify-center ${
                          plan.popular 
                            ? 'bg-gradient-to-r from-purple-400 to-pink-400'
                            : 'bg-gradient-to-r from-cyan-400 to-blue-400'
                        }`}>
                          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        
                        <span className="text-gray-300">{feature}</span>
                      </motion.li>
                    ))}
                  </motion.ul>
                  
                  {/* CTA Button */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.7 }}
                    viewport={{ once: true }}
                    className="pt-6"
                  >
                    <button className={`w-full py-4 px-6 rounded-xl font-semibold transition-all duration-300 relative overflow-hidden group/btn ${
                      plan.popular
                        ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600 shadow-lg shadow-purple-500/25'
                        : 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:from-cyan-600 hover:to-blue-600 shadow-lg shadow-cyan-500/25'
                    }`}>
                      {/* Button Glow Effect */}
                      <div className={`absolute inset-0 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300 ${
                        plan.popular
                          ? 'bg-gradient-to-r from-purple-400/20 to-pink-400/20'
                          : 'bg-gradient-to-r from-cyan-400/20 to-blue-400/20'
                      }`} />
                      
                      {/* Button Text */}
                      <span className="relative z-10">{plan.buttonText}</span>
                      
                      {/* Cyber Lines */}
                      <div className="absolute top-0 left-0 w-full h-px bg-white/20 group-hover/btn:bg-white/40 transition-colors duration-300" />
                      <div className="absolute bottom-0 left-0 w-full h-px bg-white/20 group-hover/btn:bg-white/40 transition-colors duration-300" />
                    </button>
                  </motion.div>
                </div>
                
                {/* Cyber Frame */}
                <div className={`absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 transition-colors duration-300 ${
                  plan.popular
                    ? 'border-purple-400/50 group-hover:border-purple-400/80'
                    : 'border-cyan-400/50 group-hover:border-cyan-400/80'
                }`} />
                <div className={`absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 transition-colors duration-300 ${
                  plan.popular
                    ? 'border-purple-400/50 group-hover:border-purple-400/80'
                    : 'border-cyan-400/50 group-hover:border-cyan-400/80'
                }`} />
              </div>
              
              {/* Floating Elements */}
              {plan.popular && (
                <>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-300" />
                  <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-pink-400 rounded-full opacity-0 group-hover:opacity-100 animate-bounce transition-opacity duration-300" />
                </>
              )}
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Custom Styles */}
      <style jsx>{`
        @keyframes cyber-orb {
          0%, 100% {
            transform: translate(0, 0) scale(1);
            opacity: 0.3;
          }
          50% {
            transform: translate(50px, -30px) scale(1.2);
            opacity: 0.6;
          }
        }
        
        @keyframes data-particle {
          0% {
            transform: translate(0, 0) rotate(0deg);
            opacity: 0;
          }
          25% {
            opacity: 1;
          }
          75% {
            opacity: 1;
          }
          100% {
            transform: translate(300px, -200px) rotate(360deg);
            opacity: 0;
          }
        }
        
        @keyframes scan-line {
          0% {
            opacity: 0;
            transform: translateX(-100%);
          }
          50% {
            opacity: 1;
            transform: translateX(0);
          }
          100% {
            opacity: 0;
            transform: translateX(100%);
          }
        }
      `}</style>
    </section>
  );
}