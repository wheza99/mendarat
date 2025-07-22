"use client";

import { motion } from "framer-motion";
import { copy } from "../copy";

const Pricing = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Cosmic Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900">
        {/* Pricing Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-8 gap-2 h-full">
            {[...Array(64)].map((_, i) => (
              <motion.div
                key={i}
                className="border border-purple-500/20 rounded"
                animate={{
                  opacity: [0.1, 0.4, 0.1],
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 3,
                }}
              />
            ))}
          </div>
        </div>
        
        {/* Cosmic Price Waves */}
        <div className="absolute inset-0">
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-purple-400 to-transparent"
              style={{
                top: `${25 + i * 20}%`,
              }}
              animate={{
                x: ['-100%', '100%'],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 6 + i * 1.5,
                repeat: Infinity,
                delay: i * 2,
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {copy.pricing.title}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {copy.pricing.subtitle}
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {copy.pricing.plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ scale: 1.05, rotateY: 5 }}
              className={`relative group ${
                plan.popular ? 'lg:scale-110 lg:-mt-4' : ''
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.2 + 0.3 }}
                    className="px-4 py-1 bg-gradient-to-r from-purple-500 to-blue-500 text-white text-sm font-semibold rounded-full"
                  >
                    Most Popular
                  </motion.div>
                </div>
              )}

              {/* Pricing Card */}
              <div className={`relative p-8 rounded-2xl backdrop-blur-sm border transition-all duration-300 h-full ${
                plan.popular
                  ? 'bg-gradient-to-br from-purple-800/30 to-blue-800/30 border-purple-400/50'
                  : 'bg-gradient-to-br from-purple-800/20 to-blue-800/20 border-purple-500/30 hover:border-purple-400/50'
              }`}>
                {/* Cosmic Glow Effect */}
                <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-br from-purple-500/20 to-blue-500/20'
                    : 'bg-gradient-to-br from-purple-500/10 to-blue-500/10'
                }`} />
                
                {/* Orbital Rings */}
                <div className="absolute -top-3 -right-3 w-6 h-6 border border-purple-400/50 rounded-full animate-spin" />
                <div className="absolute -bottom-3 -left-3 w-4 h-4 border border-blue-400/50 rounded-full animate-pulse" />
                
                <div className="relative z-10">
                  {/* Plan Header */}
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {plan.name}
                    </h3>
                    <p className="text-gray-300 text-sm mb-4">
                      {plan.description}
                    </p>
                    
                    {/* Price */}
                    <div className="mb-4">
                      <span className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                        {plan.price}
                      </span>
                      <span className="text-gray-400 ml-2">
                        {plan.period}
                      </span>
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="mb-8">
                    <ul className="space-y-3">
                      {plan.features.map((feature, featureIndex) => (
                        <motion.li
                          key={featureIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.2 + featureIndex * 0.1 }}
                          className="flex items-center text-gray-300"
                        >
                          <div className="w-4 h-4 rounded-full bg-gradient-to-br from-purple-400 to-blue-400 mr-3 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Button */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full py-3 px-6 rounded-full font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-500 hover:to-blue-500 shadow-lg hover:shadow-purple-500/25'
                        : 'bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-500/30 text-purple-300 hover:from-purple-600/30 hover:to-blue-600/30 hover:border-purple-400/50'
                    }`}
                  >
                    {plan.popular ? 'Start Mission' : 'Choose Plan'}
                  </motion.button>
                </div>

                {/* Cosmic Particles */}
                <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none">
                  {[...Array(plan.popular ? 12 : 8)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-purple-400 rounded-full"
                      style={{
                        left: `${10 + i * 10}%`,
                        top: `${15 + i * 8}%`,
                      }}
                      animate={{
                        x: [0, 8, 0],
                        y: [0, -8, 0],
                        opacity: [0.3, 1, 0.3],
                      }}
                      transition={{
                        duration: 2.5 + i * 0.2,
                        repeat: Infinity,
                        delay: i * 0.3,
                      }}
                    />
                  ))}
                </div>

                {/* Hover Effect Lines */}
                <div className="absolute inset-0 rounded-2xl overflow-hidden">
                  <motion.div
                    className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-purple-400 to-transparent"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.8 }}
                  />
                  <motion.div
                    className="absolute right-0 top-0 w-0.5 h-full bg-gradient-to-b from-transparent via-blue-400 to-transparent"
                    initial={{ y: '-100%' }}
                    whileHover={{ y: '100%' }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  />
                  <motion.div
                    className="absolute bottom-0 right-0 w-full h-0.5 bg-gradient-to-l from-transparent via-purple-400 to-transparent"
                    initial={{ x: '100%' }}
                    whileHover={{ x: '-100%' }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                  />
                  <motion.div
                    className="absolute left-0 bottom-0 w-0.5 h-full bg-gradient-to-t from-transparent via-blue-400 to-transparent"
                    initial={{ y: '100%' }}
                    whileHover={{ y: '-100%' }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pricing FAQ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-col items-center">
            <p className="text-gray-300 mb-4">Need a custom cosmic solution?</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-full bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-500/30 text-purple-300 font-semibold hover:from-purple-600/30 hover:to-blue-600/30 hover:border-purple-400/50 transition-all duration-300"
            >
              Contact Mission Control
            </motion.button>
          </div>
        </motion.div>

        {/* Money Back Guarantee */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-green-600/20 to-emerald-600/20 backdrop-blur-sm border border-green-500/30">
            <div className="w-3 h-3 bg-green-400 rounded-full mr-3 animate-pulse" />
            <span className="text-green-300 font-medium">30-Day Cosmic Guarantee</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;