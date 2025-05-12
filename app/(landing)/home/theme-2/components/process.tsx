"use client";

import { processSectionCopy } from "../copy";
import { motion } from "framer-motion";

export default function Process() {
  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            {processSectionCopy.heading}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-gray-300"
          >
            {processSectionCopy.description}
          </motion.p>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSectionCopy.steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Step Number */}
              <div className="flex items-center mb-6">
                <div className="flex items-center justify-center w-12 h-12 bg-amber-500 text-white font-bold text-xl rounded-full">
                  {step.number}
                </div>
                {/* Connector Line (except for the last item) */}
                {index < processSectionCopy.steps.length - 1 && (
                  <div className="hidden lg:block h-0.5 flex-grow bg-amber-500/30 ml-4"></div>
                )}
              </div>
              
              {/* Step Content */}
              <div>
                <h3 className="text-xl font-semibold mb-3 text-amber-400">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
