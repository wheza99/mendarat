"use client";

import { pricingSectionCopy } from "../copy";
import { motion } from "framer-motion";
import Link from "next/link";

// Using a custom CheckIcon since we're having issues with heroicons
const CheckIcon = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    fill="none" 
    viewBox="0 0 24 24" 
    strokeWidth={1.5} 
    stroke="currentColor" 
    className={className}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
  </svg>
);

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-24 bg-black overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/10 to-black"></div>
      
      {/* Grid overlay */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{ 
          backgroundImage: "linear-gradient(0deg, transparent 24%, rgba(255, 255, 255, .05) 25%, rgba(255, 255, 255, .05) 26%, transparent 27%, transparent 74%, rgba(255, 255, 255, .05) 75%, rgba(255, 255, 255, .05) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(255, 255, 255, .05) 25%, rgba(255, 255, 255, .05) 26%, transparent 27%, transparent 74%, rgba(255, 255, 255, .05) 75%, rgba(255, 255, 255, .05) 76%, transparent 77%, transparent)",
          backgroundSize: "50px 50px"
        }}
      />
      
      {/* Horizontal neon line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-70"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500">
            {pricingSectionCopy.heading}
          </h2>
          <p className="text-blue-100 opacity-90 max-w-2xl mx-auto">
            {pricingSectionCopy.description}
          </p>
        </motion.div>

        {/* Pricing plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
          {pricingSectionCopy.plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative ${plan.recommended ? "md:-mt-4 md:mb-4" : ""}`}
            >
              {/* Glow effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${
                plan.recommended 
                  ? "from-pink-600/30 to-blue-600/30" 
                  : "from-pink-600/20 to-blue-600/20"
              } rounded-lg -m-1 blur-md`}></div>
              
              <div className={`relative rounded-lg overflow-hidden border ${
                plan.recommended 
                  ? "border-pink-500/60" 
                  : "border-pink-500/30"
              } bg-black/50 backdrop-blur-sm h-full flex flex-col transition-transform duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(219,39,119,0.3)]`}>
                {/* Recommended badge */}
                {plan.recommended && (
                  <div className="absolute top-0 right-0 bg-gradient-to-r from-pink-600 to-blue-600 text-white text-xs font-bold px-4 py-1 rounded-bl-lg">
                    RECOMMENDED
                  </div>
                )}
                
                {/* VHS tracking lines effect */}
                <div className="absolute inset-0 bg-scanlines opacity-10"></div>
                
                {/* Corner accents */}
                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-pink-500 opacity-80"></div>
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-blue-500 opacity-80"></div>
                
                {/* Plan content */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-blue-400 mb-4">
                    {plan.price}
                  </p>
                  <p className="text-blue-100 opacity-80 mb-6">{plan.description}</p>
                  
                  {/* Horizontal line */}
                  <div className="h-px w-full bg-gradient-to-r from-pink-500/50 to-blue-500/50 mb-6"></div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-r from-pink-500 to-blue-500 flex items-center justify-center mr-3 mt-0.5">
                          <CheckIcon className="w-3 h-3 text-white" />
                        </span>
                        <span className="text-blue-100">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* CTA button */}
                <div className="mt-auto p-8 pt-0">
                  <button className={`w-full py-3 rounded-md font-bold transition-all duration-300 ${
                    plan.recommended
                      ? "bg-gradient-to-r from-pink-600 to-blue-600 text-white hover:shadow-[0_0_20px_rgba(219,39,119,0.5)]"
                      : "bg-transparent border-2 border-blue-500 text-blue-400 hover:bg-blue-900/30 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)]"
                  }`}>
                    {pricingSectionCopy.selectPlanButtonText}
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Custom plan CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center"
        >
          <p className="text-blue-100 mb-4">{pricingSectionCopy.customPlanText}</p>
          <Link href="#contact">
            <button className="px-8 py-3 bg-transparent border-2 border-pink-500 text-pink-400 rounded-md hover:bg-pink-900/30 transition-all duration-300 font-bold tracking-wide shadow-[0_0_10px_rgba(236,72,153,0.3)] hover:shadow-[0_0_20px_rgba(236,72,153,0.5)]">
              {pricingSectionCopy.contactLink}
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
