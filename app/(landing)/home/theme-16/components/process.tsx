"use client";

import { motion } from "framer-motion";
import { processSectionCopy } from "../copy";

export default function Process() {
  return (
    <section className="py-24 bg-slate-900">
      <div className="container mx-auto px-8">
        
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            {processSectionCopy.heading}
          </h2>
          <p className="text-slate-300 text-xl max-w-2xl mx-auto">
            {processSectionCopy.subheading}
          </p>
        </motion.div>

        {/* Process steps */}
        <div className="max-w-5xl mx-auto space-y-16">
          {processSectionCopy.steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`flex flex-col lg:flex-row items-center gap-12 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Step number */}
              <div className="flex-shrink-0">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                  className="w-24 h-24 relative"
                >
                  <div className="w-full h-full bg-gradient-to-br from-purple-600 to-cyan-600 rounded-xl flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">
                      {step.number}
                    </span>
                  </div>
                </motion.div>
              </div>

              {/* Step content */}
              <div className="flex-1 text-center lg:text-left">
                <div className="bg-gradient-to-br from-slate-800/50 to-purple-900/50 backdrop-blur-sm border border-slate-600/50 rounded-xl p-8">
                  
                  {/* Step title */}
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {step.title}
                  </h3>

                  {/* Step description */}
                  <p className="text-slate-300 leading-relaxed">
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