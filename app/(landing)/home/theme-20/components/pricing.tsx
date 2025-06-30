'use client'

import { motion } from 'framer-motion'
import { copy } from '../copy'

export default function Pricing() {
  return (
    <section className="relative py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#36454F', fontFamily: 'serif' }}>
              {copy.pricing.title}
            </h2>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: '#8B8680' }}>
              {copy.pricing.subtitle}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {copy.pricing.plans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="group relative"
              >
                <div 
                  className={`relative p-8 rounded-3xl border-2 border-dashed transition-all duration-500 ${
                    plan.popular ? 'scale-105 group-hover:scale-110' : 'group-hover:rotate-1'
                  }`}
                  style={{ 
                    backgroundColor: plan.popular ? '#87CEEB' : '#F5F5DC',
                    borderColor: '#8B8680'
                  }}
                >
                  {/* Popular badge */}
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="px-4 py-2 bg-white rounded-full border-2 border-dashed" style={{ borderColor: '#36454F' }}>
                        <span className="text-sm font-bold" style={{ color: '#36454F' }}>
                          TERPOPULER ⭐
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Corner doodles */}
                  <div className="absolute top-3 right-3">
                    <svg width="20" height="20" viewBox="0 0 20 20">
                      <path d="M5,5 Q10,2 15,5 Q18,10 15,15 Q10,18 5,15 Q2,10 5,5" 
                            stroke={plan.popular ? '#36454F' : '#87CEEB'} 
                            strokeWidth="2" fill="none" strokeDasharray="2,1" />
                    </svg>
                  </div>

                  {/* Plan name */}
                  <h3 className="text-2xl font-bold mb-4" style={{ 
                    color: plan.popular ? '#36454F' : '#36454F', 
                    fontFamily: 'serif' 
                  }}>
                    {plan.name}
                  </h3>

                  {/* Price */}
                  <div className="mb-6">
                    <div className="flex items-baseline">
                      <span className="text-sm font-semibold" style={{ color: plan.popular ? '#36454F' : '#8B8680' }}>
                        Rp
                      </span>
                      <span className="text-4xl font-bold mx-1" style={{ color: plan.popular ? '#36454F' : '#36454F' }}>
                        {plan.price}
                      </span>
                      <span className="text-sm" style={{ color: plan.popular ? '#36454F' : '#8B8680' }}>
                        /{plan.period}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm mb-8 leading-relaxed" style={{ color: plan.popular ? '#36454F' : '#8B8680' }}>
                    {plan.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <svg width="20" height="20" viewBox="0 0 20 20" className="mt-0.5 mr-3 flex-shrink-0">
                          <path d="M5,10 Q8,13 15,6" stroke="#87CEEB" strokeWidth="2" fill="none" strokeLinecap="round" />
                        </svg>
                        <span className="text-sm" style={{ color: plan.popular ? '#36454F' : '#8B8680' }}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <motion.button
                    whileHover={{ scale: 1.05, rotate: plan.popular ? 0 : 1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full py-4 rounded-2xl border-2 border-dashed font-bold text-lg transition-all duration-300"
                    style={{
                      backgroundColor: plan.popular ? '#36454F' : 'white',
                      color: plan.popular ? '#F5F5DC' : '#36454F',
                      borderColor: '#36454F'
                    }}
                  >
                    Pilih {plan.name}
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 