"use client";

import { motion } from "framer-motion";
import { servicesSectionCopy } from "../copy";

export default function Services() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-stone-50">
      <div className="container mx-auto px-6">
        
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-extralight text-stone-800 mb-4 tracking-tight">
            {servicesSectionCopy.heading}
          </h2>
          <div className="w-24 h-px bg-stone-300 mx-auto mb-6"></div>
          <p className="text-stone-600 text-lg font-light max-w-2xl mx-auto">
            {servicesSectionCopy.subheading}
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {servicesSectionCopy.services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="bg-white p-8 h-full shadow-sm border border-stone-100 transition-all duration-500 group-hover:shadow-lg group-hover:border-stone-200 group-hover:-translate-y-1">
                
                {/* Service icon/symbol */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="w-16 h-16 mx-auto mb-8 bg-gradient-to-br from-stone-100 to-stone-200 rounded-full flex items-center justify-center group-hover:from-stone-200 group-hover:to-stone-300 transition-all duration-300"
                >
                  <div className="w-8 h-8 border border-stone-400 rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-stone-500 rounded-full"></div>
                  </div>
                </motion.div>

                {/* Service title */}
                <h3 className="text-2xl font-light text-stone-800 mb-6 text-center tracking-wide">
                  {service.title}
                </h3>

                {/* Service description */}
                <p className="text-stone-600 font-light leading-relaxed mb-8 text-center">
                  {service.description}
                </p>

                {/* Features list */}
                <div className="space-y-4">
                  {service.features.map((feature, featureIndex) => (
                    <motion.div
                      key={featureIndex}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.2 + featureIndex * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center"
                    >
                      <div className="w-2 h-2 bg-stone-400 rounded-full mr-4 flex-shrink-0"></div>
                      <span className="text-stone-600 font-light text-sm">
                        {feature}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* Subtle accent line */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.2 + 0.5 }}
                  viewport={{ once: true }}
                  className="w-16 h-px bg-stone-300 mx-auto mt-8 origin-left group-hover:bg-stone-400 transition-colors duration-300"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom decoration */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center mt-20"
        >
          <div className="flex space-x-2">
            <div className="w-3 h-3 bg-stone-300 rounded-full"></div>
            <div className="w-3 h-3 bg-stone-400 rounded-full"></div>
            <div className="w-3 h-3 bg-stone-300 rounded-full"></div>
          </div>
        </motion.div>

      </div>
    </section>
  );
} 