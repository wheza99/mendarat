"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { pricingSectionCopy } from "../copy";

export default function Pricing() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section 
      ref={sectionRef}
      className="relative py-20 bg-[#1F1147]"
    >
      {/* Quantum field background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <svg width="100%" height="100%" viewBox="0 0 1000 1000" preserveAspectRatio="none">
            <defs>
              <pattern id="quantumGrid" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
                <circle cx="25" cy="25" r="1" fill="#E5E4E2" opacity="0.3"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#quantumGrid)"/>
          </svg>
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-3">
            <div className="h-[1px] w-10 bg-gradient-to-r from-transparent via-[#E5E4E2] to-transparent"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#E5E4E2] mb-4">{pricingSectionCopy.heading}</h2>
          <p className="text-[#E5E4E2]/70 max-w-2xl mx-auto">
            {pricingSectionCopy.description}
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingSectionCopy.plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.1 * index }}
              className={`relative p-8 rounded-2xl backdrop-blur-sm border transition-all duration-300 hover:scale-105 ${
                plan.popular 
                  ? 'bg-gradient-to-b from-blue-500/20 to-purple-600/20 border-blue-400/50 shadow-lg shadow-blue-500/25' 
                  : 'bg-white/5 border-white/10 hover:bg-white/10'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-xl font-bold text-[#E5E4E2] mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-[#E5E4E2]">{plan.price}</span>
                  <span className="text-[#E5E4E2]/60 ml-2">{plan.period}</span>
                </div>
                <p className="text-[#E5E4E2]/70 text-sm">{plan.description}</p>
              </div>
              
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-[#E5E4E2]/80">
                    <svg className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                className={`w-full py-3 rounded-lg font-medium transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white'
                    : 'bg-white/10 hover:bg-white/20 text-[#E5E4E2] border border-white/20'
                }`}
              >
                Get Started
              </Button>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-[#E5E4E2]/60 text-sm">
            All partnerships include access to our quantum computing facilities and AI research infrastructure.
          </p>
        </motion.div>
      </div>
    </section>
  );
}