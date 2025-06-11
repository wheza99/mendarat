"use client";

import { motion } from "framer-motion";
import { pricingSectionCopy } from "../copy";

export default function Pricing() {
  return (
    <section className="py-24 bg-gradient-to-b from-stone-50 to-white">
      <div className="container mx-auto px-6">
        
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-extralight text-stone-800 mb-4 tracking-tight">
            {pricingSectionCopy.heading}
          </h2>
          <div className="w-24 h-px bg-stone-300 mx-auto mb-6"></div>
          <p className="text-stone-600 text-lg font-light max-w-2xl mx-auto">
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
              className={`relative group ${
                plan.popular
                  ? "transform md:-translate-y-4"
                  : ""
              }`}
            >
              <div className={`bg-white border border-stone-100 p-8 h-full transition-all duration-500 group-hover:border-stone-200 group-hover:shadow-lg ${
                plan.popular
                  ? "border-stone-300 shadow-md"
                  : ""
              }`}>
                
                {/* Popular badge */}
                {plan.popular && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                    viewport={{ once: true }}
                    className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-6 py-2 bg-stone-800 text-white text-sm font-light tracking-wide"
                  >
                    Most Popular
                  </motion.div>
                )}

                {/* Plan icon */}
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-stone-100 to-stone-200 rounded-full flex items-center justify-center group-hover:from-stone-200 group-hover:to-stone-300 transition-all duration-300"
                >
                  <div className={`w-8 h-8 rounded-full ${
                    index === 0 ? "bg-stone-300" :
                    index === 1 ? "bg-stone-400" :
                    "bg-stone-500"
                  }`} />
                </motion.div>

                {/* Plan name */}
                <h3 className="text-2xl font-light text-stone-800 text-center mb-4 tracking-wide">
                  {plan.name}
                </h3>

                {/* Price */}
                <div className="text-center mb-6">
                  <div className="flex items-baseline justify-center">
                    <span className="text-sm text-stone-600 font-light">
                      {pricingSectionCopy.currency}
                    </span>
                    <span className="text-4xl font-extralight text-stone-800 mx-1">
                      {plan.price}
                    </span>
                    <span className="text-sm text-stone-600 font-light">
                      /{plan.period}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-stone-600 font-light text-sm text-center mb-8 leading-relaxed">
                  {plan.description}
                </p>

                {/* Features */}
                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <motion.div
                      key={featureIndex}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.2 + featureIndex * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start"
                    >
                      <div className="w-2 h-2 bg-stone-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-stone-600 font-light text-sm leading-relaxed">
                        {feature}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-4 font-light text-sm tracking-wide transition-all duration-300 ${
                    plan.popular
                      ? "bg-stone-800 text-white hover:bg-stone-700"
                      : "border border-stone-300 text-stone-700 hover:border-stone-400 hover:bg-stone-50"
                  }`}
                >
                  Begin This Path
                </motion.button>

                {/* Subtle accent line */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.2 + 0.8 }}
                  viewport={{ once: true }}
                  className="w-16 h-px bg-stone-300 mx-auto mt-6 origin-center"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom zen garden decoration */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center mt-20"
        >
          <div className="flex items-center space-x-6">
            {/* Zen circles representing growth */}
            <div className="w-4 h-4 border border-stone-300 rounded-full"></div>
            <div className="w-6 h-6 border border-stone-400 rounded-full"></div>
            <div className="w-8 h-8 border border-stone-500 rounded-full flex items-center justify-center">
              <div className="w-3 h-3 bg-stone-500 rounded-full"></div>
            </div>
            <div className="w-6 h-6 border border-stone-400 rounded-full"></div>
            <div className="w-4 h-4 border border-stone-300 rounded-full"></div>
          </div>
        </motion.div>

      </div>
    </section>
  );
} 