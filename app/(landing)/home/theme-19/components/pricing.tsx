'use client'

import { motion } from 'framer-motion'
import { copy } from '../copy'

export default function Pricing() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-gray-900 to-black overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent" style={{ fontFamily: 'serif' }}>
              {copy.pricing.title}
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto" style={{ fontFamily: 'serif' }}>
              {copy.pricing.subtitle}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {copy.pricing.plans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`group relative ${plan.popular ? 'transform scale-105' : ''}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-6 py-2 rounded-full text-sm font-bold">
                    MOST POPULAR
                  </div>
                )}

                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-yellow-600/10 rounded-3xl transform rotate-1 group-hover:rotate-2 transition-transform duration-500"></div>
                
                <div className={`relative bg-gray-900/80 backdrop-blur-xl border rounded-3xl p-8 transition-all duration-300 ${
                  plan.popular 
                    ? 'border-yellow-400/50 hover:border-yellow-400/70' 
                    : 'border-yellow-400/30 hover:border-yellow-400/50'
                }`}>
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2" style={{ fontFamily: 'serif' }}>
                      {plan.name}
                    </h3>
                    <div className="mb-4">
                      <span className="text-4xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                        ${plan.price}K
                      </span>
                      <span className="text-gray-400 ml-2">{plan.period}</span>
                    </div>
                    <p className="text-gray-300" style={{ fontFamily: 'serif' }}>
                      {plan.description}
                    </p>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button className={`w-full py-4 px-6 rounded-xl font-bold text-lg transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-yellow-400 to-yellow-600 text-black hover:from-yellow-500 hover:to-yellow-700'
                      : 'border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black'
                  }`}>
                    Choose {plan.name}
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 