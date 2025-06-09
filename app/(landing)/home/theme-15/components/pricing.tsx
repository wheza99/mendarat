"use client";

import { motion } from "framer-motion";
import { pricingSectionCopy } from "../copy";

export default function Pricing() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-8">
        
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-extralight text-slate-800 mb-6 tracking-tight">
            {pricingSectionCopy.heading}
          </h2>
          <div className="w-16 h-px bg-blue-300 mx-auto mb-8"></div>
          <p className="text-slate-600 text-lg font-light max-w-2xl mx-auto">
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
              <div className={`h-full bg-white border transition-all duration-500 group-hover:shadow-lg ${
                plan.popular 
                  ? 'border-blue-600 shadow-lg' 
                  : 'border-slate-200 group-hover:border-blue-300'
              }`}>
                
                {/* Popular badge */}
                {plan.popular && (
                  <div className="bg-blue-600 text-white text-center py-3">
                    <span className="text-sm font-light tracking-wide uppercase">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="p-12">
                  {/* Plan name */}
                  <h3 className="text-2xl font-light text-slate-800 mb-4 text-center tracking-wide">
                    {plan.name}
                  </h3>

                  {/* Price */}
                  <div className="text-center mb-8">
                    <span className="text-5xl font-extralight text-blue-600">
                      {pricingSectionCopy.currency}{plan.price}
                    </span>
                    <span className="text-slate-500 font-light ml-2">
                      /{plan.period}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-slate-600 font-light text-center mb-12 leading-relaxed">
                    {plan.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-4 mb-12">
                    {plan.features.map((feature, featureIndex) => (
                      <motion.div
                        key={featureIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.2 + featureIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-center"
                      >
                        <div className="w-1 h-1 bg-blue-400 mr-4 flex-shrink-0"></div>
                        <span className="text-slate-600 font-light text-sm">
                          {feature}
                        </span>
                      </motion.div>
                    ))}
                  </div>

                  {/* CTA button */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full py-4 font-light text-lg tracking-wide transition-all duration-300 ${
                      plan.popular
                        ? 'bg-blue-600 text-white hover:bg-blue-700'
                        : 'bg-white border border-slate-300 text-slate-700 hover:border-blue-400 hover:text-blue-600'
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