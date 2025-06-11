"use client";

import { motion } from "framer-motion";
import { servicesSectionCopy } from "../copy";

export default function Services() {
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
            {servicesSectionCopy.heading}
          </h2>
          <p className="text-slate-300 text-xl max-w-2xl mx-auto">
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
              className="group"
            >
              <div className="h-full bg-gradient-to-br from-slate-800/50 to-purple-900/50 backdrop-blur-sm border border-slate-600/50 rounded-xl p-8 transition-all duration-500 group-hover:border-purple-400/50 group-hover:shadow-2xl group-hover:shadow-purple-500/20">
                
                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-20 h-20 mx-auto mb-8 relative"
                >
                  <div className="w-full h-full bg-gradient-to-br from-purple-600 to-cyan-600 rounded-xl flex items-center justify-center">
                    <div className="w-10 h-10 bg-white/20 rounded"></div>
                  </div>
                </motion.div>

                {/* Service title */}
                <h3 className="text-2xl font-bold text-white mb-6 text-center">
                  {service.title}
                </h3>

                {/* Service description */}
                <p className="text-slate-300 leading-relaxed mb-8 text-center">
                  {service.description}
                </p>

                {/* Features list */}
                <div className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <motion.div
                      key={featureIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.2 + featureIndex * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center"
                    >
                      <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full mr-3 flex-shrink-0"></div>
                      <span className="text-slate-300 text-sm">
                        {feature}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* CTA */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full mt-8 py-3 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300"
                >
                  Learn More
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
} 