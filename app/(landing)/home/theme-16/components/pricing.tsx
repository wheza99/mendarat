"use client";

import { motion } from "framer-motion";
import { pricingSectionCopy } from "../copy";

export default function Pricing() {
  return (
    <section className="py-24 bg-slate-800">
      <div className="container mx-auto px-8">
        
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            {pricingSectionCopy.heading}
          </h2>
          <p className="text-slate-300 text-xl max-w-2xl mx-auto">
            {pricingSectionCopy.subheading}
          </p>
        </motion.div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingSectionCopy.plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`group ${plan.popular ? 'md:-mt-8' : ''}`}
            >
              <div className={`h-full backdrop-blur-sm border transition-all duration-500 group-hover:shadow-2xl rounded-xl ${
                plan.popular 
                  ? 'bg-gradient-to-br from-purple-900/50 to-cyan-900/50 border-purple-400/50 shadow-2xl shadow-purple-500/20' 
                  : 'bg-gradient-to-br from-slate-800/50 to-purple-900/50 border-slate-600/50 group-hover:border-purple-400/50 group-hover:shadow-purple-500/20'
              }`}>
                
                {/* Popular badge */}
                {plan.popular && (
                  <div className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white text-center py-3 rounded-t-xl">
                    <span className="text-sm font-bold tracking-wide uppercase">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="p-8">
                  {/* Plan name */}
                  <h3 className="text-2xl font-bold text-white mb-4 text-center">
                    {plan.name}
                  </h3>

                  {/* Price */}
                  <div className="text-center mb-8">
                    <span className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                      {pricingSectionCopy.currency}{plan.price}
                    </span>
                    <span className="text-slate-400 ml-2">
                      /{plan.period}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-slate-300 text-center mb-8 leading-relaxed">
                    {plan.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <motion.div
                        key={featureIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.2 + featureIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-center"
                      >
                        <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full mr-3 flex-shrink-0"></div>
                        <span className="text-slate-300 text-sm">
                          {feature}
                        </span>
                      </motion.div>
                    ))}
                  </div>

                  {/* CTA button */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full py-4 font-bold text-lg tracking-wide transition-all duration-300 rounded-lg ${
                      plan.popular
                        ? 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white shadow-lg'
                        : 'bg-slate-700 border border-slate-600 text-slate-300 hover:border-purple-400 hover:text-white'
                    }`}
                  >
                    Get Started
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
} 