"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { pricingSectionCopy } from "../copy";

export default function Pricing() {
  const plans = pricingSectionCopy.plans;

  return (
    <section className="py-24 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="container mx-auto px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-thin text-white mb-6 tracking-tight">
            {pricingSectionCopy.heading}
          </h2>
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent mx-auto mb-8"></div>
          <p className="text-slate-300 text-xl font-light max-w-2xl mx-auto">
            {pricingSectionCopy.subheading}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="relative h-full bg-gradient-to-b from-slate-800 to-slate-900 border border-yellow-400/20 p-8 transition-all duration-500 group-hover:border-yellow-400/40 group-hover:-translate-y-2 group-hover:shadow-2xl group-hover:shadow-yellow-400/10">
                
                {/* Corner decorations */}
                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-yellow-400 opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-yellow-400 opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-yellow-400 opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-yellow-400 opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Plan name */}
                <h3 className="text-2xl font-light text-white mb-6 text-center tracking-wide">
                  {plan.name}
                </h3>

                {/* Price */}
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                  viewport={{ once: true }}
                  className="mb-6 text-center"
                >
                  <div className="inline-flex items-end">
                    <span className="text-4xl md:text-5xl font-thin text-white">{plan.price}</span>
                    <span className="text-slate-400 ml-1">{plan.period}</span>
                  </div>
                </motion.div>

                {/* Art Deco diamond divider */}
                <motion.div
                  initial={{ scale: 0, rotate: 45 }}
                  whileInView={{ scale: 1, rotate: 45 }}
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.4 }}
                  viewport={{ once: true }}
                  className="w-8 h-8 mx-auto mb-6 relative"
                >
                  <div className="w-full h-full bg-gradient-to-br from-yellow-400 to-yellow-600 rotate-45 flex items-center justify-center group-hover:from-yellow-300 group-hover:to-yellow-500 transition-all duration-300">
                    <div className="w-4 h-4 bg-slate-900 rotate-45"></div>
                  </div>
                </motion.div>

                {/* Description */}
                <p className="text-slate-300 font-light text-center mb-8">
                  {plan.description}
                </p>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <motion.li
                      key={featureIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 + featureIndex * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center"
                    >
                      <div className="w-2 h-2 bg-gradient-to-r from-yellow-400 to-yellow-600 transform rotate-45 mr-4 flex-shrink-0"></div>
                      <span className="text-slate-400 font-light text-sm">
                        {feature}
                      </span>
                    </motion.li>
                  ))}
                </ul>

                {/* CTA Button */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-auto"
                >
                  <Button className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-slate-900 hover:from-yellow-300 hover:to-yellow-500 transition-all duration-300">
                    {pricingSectionCopy.ctaText}
                  </Button>
                </motion.div>

                {/* Elegant bottom border */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 1, delay: index * 0.2 + 0.5 }}
                  viewport={{ once: true }}
                  className="w-full h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent mt-8 origin-center"
                />

                {/* Art Deco bottom ornament */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.7 }}
                  viewport={{ once: true }}
                  className="flex justify-center mt-6"
                >
                  <svg width="40" height="12" viewBox="0 0 40 12" className="text-yellow-400 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                    <path d="M20 2 L28 6 L20 10 L12 6 Z" fill="currentColor" />
                    <circle cx="20" cy="6" r="1" fill="currentColor" />
                    <path d="M5 6 L10 6" stroke="currentColor" strokeWidth="1" />
                    <path d="M30 6 L35 6" stroke="currentColor" strokeWidth="1" />
                  </svg>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Art Deco ornament */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center mt-20"
        >
          <svg width="120" height="40" viewBox="0 0 120 40" className="text-yellow-400">
            <path d="M60 5 L80 20 L60 35 L40 20 Z" fill="currentColor" opacity="0.6" />
            <path d="M60 10 L70 20 L60 30 L50 20 Z" fill="currentColor" opacity="0.8" />
            <circle cx="60" cy="20" r="3" fill="currentColor" />
            <path d="M20 20 L35 20" stroke="currentColor" strokeWidth="1" opacity="0.6" />
            <path d="M85 20 L100 20" stroke="currentColor" strokeWidth="1" opacity="0.6" />
          </svg>
        </motion.div>
      </div>
    </section>
  );
}