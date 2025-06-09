"use client";

import { motion } from "framer-motion";
import { servicesSectionCopy } from "../copy";

export default function Services() {
  return (
    <section className="py-20 bg-gradient-to-b from-[#003366] to-[#001a2e] text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#40E0D0] to-[#87CEEB]">
            {servicesSectionCopy.title}
          </h2>
          <p className="text-xl text-[#48D1CC] max-w-3xl mx-auto">{servicesSectionCopy.subtitle}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {servicesSectionCopy.services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-[#40E0D0]/10 to-[#48D1CC]/10 backdrop-blur-sm border border-[#40E0D0]/20 rounded-3xl p-8 h-full hover:border-[#40E0D0]/40 transition-all duration-300"
              >
                <h3 className="text-2xl font-bold text-[#40E0D0] mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-[#87CEEB]">
                      <span className="w-2 h-2 bg-[#40E0D0] rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}