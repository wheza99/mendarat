"use client";

import { motion } from "framer-motion";
import { servicesSectionCopy } from "../copy";

export default function Services() {
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
            {servicesSectionCopy.heading}
          </h2>
          <div className="w-16 h-px bg-blue-300 mx-auto mb-8"></div>
          <p className="text-slate-600 text-lg font-light max-w-2xl mx-auto">
            {servicesSectionCopy.subheading}
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
          {servicesSectionCopy.services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="h-full bg-white border border-slate-200 p-12 transition-all duration-500 group-hover:border-blue-300 group-hover:shadow-lg">
                
                {/* Clean icon */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="w-20 h-20 mx-auto mb-12 relative"
                >
                  <div className="w-full h-full bg-blue-600 flex items-center justify-center group-hover:bg-blue-700 transition-colors duration-300">
                    <div className="w-10 h-10 bg-white"></div>
                  </div>
                </motion.div>

                {/* Service title */}
                <h3 className="text-2xl font-light text-slate-800 mb-8 text-center tracking-wide">
                  {service.title}
                </h3>

                {/* Service description */}
                <p className="text-slate-600 font-light leading-relaxed mb-12 text-center">
                  {service.description}
                </p>

                {/* Features list */}
                <div className="space-y-4">
                  {service.features.map((feature, featureIndex) => (
                    <motion.div
                      key={featureIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.2 + featureIndex * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center"
                    >
                      <div className="w-1 h-1 bg-blue-400 mr-4 flex-shrink-0"></div>
                      <span className="text-slate-600 font-light text-sm">
                        {feature}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* Minimal bottom accent */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.2 + 0.5 }}
                  viewport={{ once: true }}
                  className="w-8 h-px bg-blue-400 mx-auto mt-12 origin-center"
                />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
} 