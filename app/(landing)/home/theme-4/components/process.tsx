"use client";

import { processSectionCopy } from "../copy";
import { motion } from "framer-motion";

export default function Process() {
  return (
    <section className="py-24 bg-emerald-900 text-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-800 rounded-full -mt-48 -mr-48" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-800 rounded-full -mb-32 -ml-32" />
      
      {/* Diagonal Pattern */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(10)].map((_, i) => (
          <div 
            key={i} 
            className="absolute bg-white transform rotate-45"
            style={{
              width: '120px',
              height: '120px',
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.05 + 0.025
            }}
          />
        ))}
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
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
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            {processSectionCopy.heading}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-lg text-emerald-100"
          >
            {processSectionCopy.description}
          </motion.p>
        </div>

        {/* Process Steps - Zigzag Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-emerald-700 hidden md:block" />
          
          {/* Steps */}
          <div className="space-y-24">
            {processSectionCopy.steps.map((step, index) => {
              const isEven = index % 2 === 0;
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className={`md:grid md:grid-cols-2 md:gap-8 items-center ${isEven ? '' : 'md:grid-flow-dense'}`}>
                    {/* Step Content */}
                    <div className={`text-center md:text-left ${!isEven && 'md:col-start-2'}`}>
                      <div className="bg-emerald-800/50 backdrop-blur-sm p-8 rounded-lg relative">
                        {/* Step Number */}
                        <div className="absolute -top-10 left-1/2 md:-left-10 transform -translate-x-1/2 md:translate-x-0 w-20 h-20 bg-emerald-500 rounded-full flex items-center justify-center text-2xl font-bold">
                          {step.number}
                        </div>
                        
                        <h3 className="text-2xl font-bold mb-4 mt-4">{step.title}</h3>
                        <p className="text-emerald-100">{step.description}</p>
                      </div>
                    </div>
                    
                    {/* Step Illustration */}
                    <div className={`hidden md:block ${isEven ? 'md:col-start-2' : 'md:col-start-1'}`}>
                      <div className="flex justify-center">
                        <div className="relative w-64 h-64">
                          {/* Decorative Shapes */}
                          <div className="absolute inset-0 border-2 border-emerald-600/30 rounded-full" />
                          <div className="absolute inset-8 border-2 border-emerald-500/40 rounded-full" />
                          <div className="absolute inset-16 border-2 border-emerald-400/50 rounded-full" />
                          <div className="absolute inset-24 border-2 border-emerald-300/60 rounded-full" />
                          <div className="absolute inset-32 bg-emerald-500/20 rounded-full backdrop-blur-sm flex items-center justify-center">
                            <span className="text-white font-bold text-xl">{step.number}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Timeline Node - Only visible on desktop */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden md:block">
                    <div className="w-6 h-6 bg-emerald-500 rounded-full border-4 border-emerald-900" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
