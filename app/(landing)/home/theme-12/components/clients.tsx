"use client";

import { motion } from "framer-motion";
import { clientsSectionCopy } from "../copy";

export default function Clients() {
  return (
    <section className="py-24 bg-white">
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
            {clientsSectionCopy.heading}
          </h2>
          <div className="w-24 h-px bg-stone-300 mx-auto mb-6"></div>
          <p className="text-stone-600 text-lg font-light max-w-2xl mx-auto">
            {clientsSectionCopy.subheading}
          </p>
        </motion.div>

        {/* Clients grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 max-w-6xl mx-auto">
          {clientsSectionCopy.clients.map((client, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="h-24 bg-stone-50 border border-stone-100 flex items-center justify-center transition-all duration-300 group-hover:bg-stone-100 group-hover:border-stone-200">
                <span className="text-stone-600 font-light text-sm tracking-wide text-center px-4">
                  {client.name}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom zen stones */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="flex justify-center mt-20"
        >
          <div className="flex items-end space-x-2">
            <div className="w-3 h-8 bg-stone-200 rounded-full"></div>
            <div className="w-3 h-12 bg-stone-300 rounded-full"></div>
            <div className="w-3 h-6 bg-stone-400 rounded-full"></div>
            <div className="w-3 h-10 bg-stone-300 rounded-full"></div>
            <div className="w-3 h-4 bg-stone-200 rounded-full"></div>
          </div>
        </motion.div>

      </div>
    </section>
  );
} 