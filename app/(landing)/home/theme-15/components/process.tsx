"use client";

import { motion } from "framer-motion";
import { processSectionCopy } from "../copy";

export default function Process() {
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
            {processSectionCopy.heading}
          </h2>
          <div className="w-16 h-px bg-blue-300 mx-auto mb-8"></div>
          <p className="text-slate-600 text-lg font-light max-w-2xl mx-auto">
            {processSectionCopy.subheading}
          </p>
        </motion.div>

        {/* Process steps */}
        <div className="max-w-5xl mx-auto space-y-20">
          {processSectionCopy.steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`flex flex-col lg:flex-row items-center gap-16 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Step number */}
              <div className="flex-shrink-0">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="w-32 h-32 relative"
                >
                  <div className="w-full h-full bg-blue-600 flex items-center justify-center">
                    <span className="text-3xl font-extralight text-white">
                      {step.number}
                    </span>
                  </div>
                </motion.div>
              </div>

              {/* Step content */}
              <div className="flex-1 text-center lg:text-left">
                <div className="bg-white border border-slate-200 p-12">
                  
                  {/* Step title */}
                  <h3 className="text-3xl font-light text-slate-800 mb-6 tracking-wide">
                    {step.title}
                  </h3>

                  {/* Minimal divider */}
                  <div className="w-12 h-px bg-blue-400 mb-8 mx-auto lg:mx-0"></div>

                  {/* Step description */}
                  <p className="text-slate-600 font-light leading-relaxed text-lg">
                    {step.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
} 