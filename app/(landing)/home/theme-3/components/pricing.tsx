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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-block mb-4"
          >
            <div className="w-16 h-1 bg-blue-500 mx-auto"></div>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
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
              className={`bg-white rounded-lg shadow-sm overflow-hidden transition-transform duration-300 hover:shadow-lg ${
                plan.recommended ? "relative transform hover:-translate-y-2" : "transform hover:-translate-y-1"
              }`}
            >
              {/* Recommended Badge */}
              {plan.recommended && (
                <div className="absolute top-0 inset-x-0">
                  <div className="bg-blue-500 text-white text-xs font-semibold py-1 uppercase tracking-wider text-center">
                    Rekomendasi
                  </div>
                </div>
              )}
              
              {/* Plan Header */}
              <div className={`p-8 ${plan.recommended ? "pt-10" : ""}`}>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-4 h-12">{plan.description}</p>
                <div className="flex items-baseline mb-6">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                </div>
                
                {/* CTA Button */}
                <button
                  className={`w-full py-3 px-4 rounded-md text-sm font-medium tracking-wider transition-colors duration-300 ${
                    plan.recommended
                      ? "bg-blue-500 text-white hover:bg-blue-600"
                      : "bg-gray-900 text-white hover:bg-gray-800"
                  }`}
                >
                  {pricingSectionCopy.selectPlanButtonText}
                </button>
              </div>
              
              {/* Plan Features */}
              <div className="p-8 bg-gray-50 border-t border-gray-100">
                <ul className="space-y-4">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <CheckIcon className={`h-5 w-5 ${plan.recommended ? "text-blue-500" : "text-gray-500"}`} />
                      </div>
                      <p className="ml-3 text-gray-600">{feature}</p>
                    </li>
                  ))}
                </ul>
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
          className="text-center mt-12 p-8 bg-white rounded-lg shadow-sm"
        >
          <p className="text-gray-900 font-medium mb-2">{pricingSectionCopy.customPlanText}</p>
          <a href="#contact" className="text-blue-500 font-medium hover:text-blue-600 transition-colors duration-300">
            {pricingSectionCopy.contactLink}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
