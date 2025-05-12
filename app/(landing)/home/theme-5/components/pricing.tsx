"use client";

import { pricingSectionCopy } from "../copy";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(true);
  const [hoveredPlan, setHoveredPlan] = useState<number | null>(null);

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background with Gradient and Organic Shapes */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-purple-50 to-white"></div>
        
        {/* Organic Blob Shapes */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 text-purple-300">
            <path fill="currentColor" d="M44.6,-76.2C58.9,-69.2,72.3,-59.5,79.9,-46.1C87.5,-32.7,89.4,-15.4,88.9,1.8C88.4,19,85.6,37.9,76.4,52.7C67.2,67.4,51.6,77.9,35.1,82.8C18.5,87.7,0.9,87,-15.4,83.1C-31.7,79.2,-46.7,72.1,-59.3,61.3C-71.9,50.5,-82.1,36,-87.4,19.8C-92.8,3.6,-93.3,-14.4,-87.7,-30.2C-82.1,-46,-70.4,-59.6,-56,-68.5C-41.6,-77.4,-24.5,-81.6,-6.9,-81.5C10.7,-81.3,30.3,-83.1,44.6,-76.2Z" transform="translate(100 100)" />
          </svg>
          
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 text-pink-300">
            <path fill="currentColor" d="M48.2,-64.8C62.7,-53.3,74.9,-39.2,79.2,-23.1C83.5,-7,79.9,11.1,72.1,26.7C64.3,42.3,52.2,55.3,37.6,63.8C23,72.3,5.9,76.2,-11.7,75.1C-29.3,74,-47.5,67.9,-60.9,55.5C-74.3,43.1,-83,24.4,-84.3,5.1C-85.7,-14.2,-79.7,-34.1,-67.5,-47.9C-55.3,-61.7,-36.8,-69.5,-19.4,-73.9C-2,-78.3,14.4,-79.4,29.9,-76.1C45.5,-72.8,60.1,-65.1,48.2,-64.8Z" transform="translate(100 100)" />
          </svg>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="inline-block mb-4"
          >
            <div className="h-0.5 w-12 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto"></div>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">
              {pricingSectionCopy.heading}
            </span>
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

        {/* Billing Toggle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center mb-12"
        >
          <div className="relative p-1 rounded-full bg-gray-100 inline-flex">
            <button
              onClick={() => setIsAnnual(false)}
              className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                !isAnnual 
                  ? "text-white" 
                  : "text-gray-700 hover:text-purple-600"
              }`}
            >
              {!isAnnual && (
                <motion.span
                  layoutId="billingPeriod"
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 to-pink-500"
                  initial={false}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <span className="relative z-10">Monthly</span>
            </button>
            
            <button
              onClick={() => setIsAnnual(true)}
              className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                isAnnual 
                  ? "text-white" 
                  : "text-gray-700 hover:text-purple-600"
              }`}
            >
              {isAnnual && (
                <motion.span
                  layoutId="billingPeriod"
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 to-pink-500"
                  initial={false}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <span className="relative z-10">Annual</span>
              <span className="absolute -top-2 -right-2 bg-gradient-to-r from-purple-600 to-pink-500 text-white text-xs px-2 py-0.5 rounded-full">
                Save 20%
              </span>
            </button>
          </div>
        </motion.div>

        {/* Pricing Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingSectionCopy.plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
              onMouseEnter={() => setHoveredPlan(index)}
              onMouseLeave={() => setHoveredPlan(null)}
            >
              {/* Featured Badge */}
              {plan.recommended && (
                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-gradient-to-r from-purple-600 to-pink-500 text-white text-xs font-bold px-4 py-1 rounded-full">
                    Most Popular
                  </div>
                </div>
              )}
              
              {/* Pricing Card with Glassmorphism */}
              <div 
                className={`relative h-full rounded-3xl overflow-hidden transition-all duration-500 ${
                  plan.recommended 
                    ? "bg-gradient-to-br from-purple-50 to-pink-50 shadow-xl" 
                    : "bg-white/70 backdrop-blur-sm shadow-lg"
                }`}
              >
                {/* Card Border */}
                <div 
                  className={`absolute inset-0 rounded-3xl ${
                    plan.recommended
                      ? "border-2 border-gradient-to-r from-purple-400 to-pink-400 opacity-30"
                      : "border border-gray-100"
                  }`}
                ></div>
                
                {/* Card Content */}
                <div className="relative p-8 flex flex-col h-full">
                  {/* Plan Name */}
                  <h3 className={`text-2xl font-bold mb-2 ${
                    plan.recommended
                      ? "text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500"
                      : "text-gray-900"
                  }`}>
                    {plan.name}
                  </h3>
                  
                  {/* Plan Description */}
                  <p className="text-gray-600 mb-6">{plan.description}</p>
                  
                  {/* Plan Price */}
                  <div className="mb-6">
                    <div className="flex items-end">
                      <span className="text-4xl font-bold text-gray-900">
                        {plan.price}
                      </span>
                      <span className="text-gray-500 ml-2 mb-1">
                        {isAnnual ? "/year" : "/month"}
                      </span>
                    </div>
                  </div>
                  
                  {/* Features List */}
                  <ul className="space-y-4 mb-8 flex-grow">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <svg className="h-5 w-5 text-purple-500 mt-0.5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {/* CTA Button */}
                  <div>
                    <button 
                      className={`w-full py-3 px-6 rounded-full transition-all duration-300 ${
                        plan.recommended
                          ? "bg-gradient-to-r from-purple-600 to-pink-500 text-white hover:shadow-lg hover:shadow-purple-200"
                          : "bg-white border border-purple-200 text-purple-600 hover:bg-purple-50"
                      }`}
                    >
                      {pricingSectionCopy.selectPlanButtonText}
                    </button>
                  </div>
                </div>
                
                {/* Hover Glow Effect */}
                <div 
                  className={`absolute inset-0 opacity-0 transition-opacity duration-500 ${
                    hoveredPlan === index ? "opacity-100" : ""
                  }`}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5"></div>
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-400 to-pink-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                </div>
              </div>
              
              {/* Decorative Elements */}
              {plan.recommended && (
                <>
                  <div className="absolute -top-3 -right-3 w-6 h-6 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 opacity-70"></div>
                  <div className="absolute -bottom-3 -left-3 w-6 h-6 rounded-full bg-gradient-to-tr from-purple-400 to-pink-400 opacity-70"></div>
                </>
              )}
            </motion.div>
          ))}
        </div>
        
        {/* Money-Back Guarantee */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 flex items-center justify-center">
            <svg className="h-5 w-5 text-purple-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <span>30-Day Satisfaction Guarantee on All Plans</span>
          </p>
        </motion.div>
        
        {/* FAQ Preview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-20 max-w-4xl mx-auto bg-white/60 backdrop-blur-md rounded-3xl p-8 shadow-xl"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h3>
          
          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-medium text-gray-900 mb-2">What payment methods do you accept?</h4>
              <p className="text-gray-600">We accept all major credit cards, PayPal, and bank transfers for our design services. For larger projects, we offer flexible payment schedules.</p>
            </div>
            
            <div>
              <h4 className="text-lg font-medium text-gray-900 mb-2">Can I upgrade my plan later?</h4>
              <p className="text-gray-600">Absolutely! You can upgrade your plan at any time. The price difference will be prorated for the remainder of your billing period.</p>
            </div>
            
            <div className="text-center mt-8">
              <button className="text-purple-600 font-medium hover:text-purple-700 transition-colors duration-300 flex items-center justify-center mx-auto">
                <span>View all FAQs</span>
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </div>
          
          {/* Decorative Corner */}
          <div className="absolute bottom-0 right-0 w-32 h-32 rounded-tl-full bg-gradient-to-tl from-purple-100/30 to-pink-100/30"></div>
        </motion.div>
      </div>
    </section>
  );
}
