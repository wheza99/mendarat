"use client";

import { motion } from "framer-motion";
import { clientsSectionCopy } from "../copy";

export default function Clients() {
  return (
    <section className="py-24 bg-white">
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
            {clientsSectionCopy.heading}
          </h2>
          <div className="w-16 h-px bg-blue-300 mx-auto mb-8"></div>
          <p className="text-slate-600 text-lg font-light max-w-2xl mx-auto">
            {clientsSectionCopy.subheading}
          </p>
        </motion.div>

        {/* Clients grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 max-w-6xl mx-auto">
          {clientsSectionCopy.clients.map((client, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="p-8 bg-slate-50 border border-slate-200 group-hover:border-blue-300 group-hover:bg-white transition-all duration-500">
                
                {/* Client logo placeholder */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="aspect-square flex items-center justify-center"
                >
                  <div className="text-center">
                    <div className="text-2xl font-extralight text-blue-600 mb-2">
                      {client.name.charAt(0)}
                    </div>
                    <div className="text-xs font-light text-slate-500 tracking-wide">
                      {client.name.split(' ').map(word => word.charAt(0)).join('')}
                    </div>
                  </div>
                </motion.div>

                {/* Client name */}
                <div className="mt-4 text-center">
                  <p className="text-slate-600 font-light text-xs tracking-wide">
                    {client.name}
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