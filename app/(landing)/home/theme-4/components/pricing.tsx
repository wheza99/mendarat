"use client";

import { pricingSectionCopy } from "../copy";
import { motion } from "framer-motion";
import { CheckIcon } from "@heroicons/react/outline";

export default function Pricing() {
  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-emerald-50 transform skew-x-12" />
      <div className="absolute -bottom-24 -left-24 w-64 h-64 rounded-full border-2 border-emerald-100" />
      <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full border-2 border-emerald-100" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "4rem" }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="h-1 bg-emerald-500 mx-auto mb-6"
          />
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            {pricingSectionCopy.heading}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-lg text-gray-600"
          >
            {pricingSectionCopy.description}
          </motion.p>
        </div>

        {/* Pricing Plans - Staggered Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6">
          {pricingSectionCopy.plans.map((plan, index) => {
            // Middle plan is raised and highlighted
            const isRecommended = plan.recommended;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative ${
                  isRecommended ? 'lg:-mt-8 lg:mb-8 z-10' : ''
                }`}
              >
                {/* Card with hover effects */}
                <div 
                  className={`h-full group transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl ${
                    isRecommended 
                      ? 'bg-emerald-900 text-white shadow-lg' 
                      : 'bg-white text-gray-900 shadow-md'
                  }`}
                >
                  {/* Recommended Badge */}
                  {isRecommended && (
                    <div className="absolute top-0 inset-x-0 transform -translate-y-1/2">
                      <div className="inline-block bg-emerald-500 text-white text-xs font-semibold py-2 px-4 rounded-full uppercase tracking-wider">
                        Recommended
                      </div>
                    </div>
                  )}
                  
                  {/* Plan Header */}
                  <div className={`p-8 ${isRecommended ? 'pt-12' : ''}`}>
                    <h3 className={`text-2xl font-bold mb-2 ${isRecommended ? 'text-white' : 'text-gray-900'}`}>
                      {plan.name}
                    </h3>
                    <p className={`mb-6 h-12 ${isRecommended ? 'text-emerald-100' : 'text-gray-600'}`}>
                      {plan.description}
                    </p>
                    <div className="flex items-baseline mb-8">
                      <span className={`text-4xl font-bold ${isRecommended ? 'text-white' : 'text-gray-900'}`}>
                        {plan.price}
                      </span>
                    </div>
                    
                    {/* CTA Button */}
                    <button
                      className={`w-full py-3 px-4 rounded-sm text-sm font-medium tracking-wider transition-colors duration-300 ${
                        isRecommended
                          ? 'bg-white text-emerald-900 hover:bg-emerald-50'
                          : 'bg-emerald-900 text-white hover:bg-emerald-800'
                      }`}
                    >
                      {pricingSectionCopy.selectPlanButtonText}
                    </button>
                  </div>
                  
                  {/* Plan Features */}
                  <div className={`p-8 border-t ${
                    isRecommended ? 'border-emerald-800 bg-emerald-800/50' : 'border-gray-100 bg-gray-50'
                  }`}>
                    <ul className="space-y-4">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <div className="flex-shrink-0 mt-1">
                            <CheckIcon className={`h-5 w-5 ${
                              isRecommended ? 'text-emerald-300' : 'text-emerald-500'
                            }`} />
                          </div>
                          <p className={`ml-3 ${
                            isRecommended ? 'text-emerald-100' : 'text-gray-600'
                          }`}>
                            {feature}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Custom Plan */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16 p-8 bg-white rounded-lg shadow-md border border-emerald-100"
        >
          <p className="text-gray-900 font-medium mb-3">{pricingSectionCopy.customPlanText}</p>
          <a 
            href="#contact" 
            className="text-emerald-600 font-medium hover:text-emerald-700 transition-colors duration-300 inline-flex items-center"
          >
            {pricingSectionCopy.contactLink}
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
