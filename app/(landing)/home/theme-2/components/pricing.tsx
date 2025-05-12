"use client";

import { pricingSectionCopy } from "../copy";
import { motion } from "framer-motion";
import { CheckIcon } from "@heroicons/react/outline";

export default function Pricing() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            {pricingSectionCopy.heading}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-gray-600"
          >
            {pricingSectionCopy.description}
          </motion.p>
        </div>

        {/* Pricing Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingSectionCopy.plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`bg-white rounded-lg shadow-sm overflow-hidden transition-transform duration-300 hover:shadow-md ${
                plan.recommended ? "border-2 border-amber-500 relative transform hover:-translate-y-1" : ""
              }`}
            >
              {/* Recommended Badge */}
              {plan.recommended && (
                <div className="absolute top-0 right-0">
                  <div className="bg-amber-500 text-white text-xs font-semibold px-4 py-1 uppercase tracking-wider">
                    Rekomendasi
                  </div>
                </div>
              )}
              
              {/* Plan Header */}
              <div className="p-8 border-b border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-4">{plan.description}</p>
                <div className="flex items-baseline">
                  <span className="text-3xl font-bold text-gray-900">{plan.price}</span>
                </div>
              </div>
              
              {/* Plan Features */}
              <div className="p-8">
                <ul className="space-y-4">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className="flex-shrink-0">
                        <CheckIcon className="h-5 w-5 text-amber-500" />
                      </div>
                      <p className="ml-3 text-gray-600">{feature}</p>
                    </li>
                  ))}
                </ul>
                
                {/* CTA Button */}
                <div className="mt-8">
                  <button
                    className={`w-full py-3 px-4 text-sm font-medium tracking-wider transition-colors duration-300 ${
                      plan.recommended
                        ? "bg-amber-500 text-white hover:bg-amber-600"
                        : "bg-gray-900 text-white hover:bg-gray-800"
                    }`}
                  >
                    {pricingSectionCopy.selectPlanButtonText}
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Custom Plan */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 mb-2">{pricingSectionCopy.customPlanText}</p>
          <a href="#contact" className="text-amber-500 font-medium hover:text-amber-600 transition-colors duration-300">
            {pricingSectionCopy.contactLink}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
