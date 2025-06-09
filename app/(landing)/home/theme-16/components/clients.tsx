"use client";

import { motion } from "framer-motion";
import { clientsSectionCopy } from "../copy";

export default function Clients() {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-800 to-slate-900">
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
            {clientsSectionCopy.heading}
          </h2>
          <p className="text-slate-300 text-xl max-w-2xl mx-auto">
            {clientsSectionCopy.subheading}
          </p>
        </motion.div>

        {/* Clients grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
          {clientsSectionCopy.clients.map((client, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="p-6 bg-gradient-to-br from-slate-800/50 to-purple-900/50 backdrop-blur-sm border border-slate-600/50 rounded-xl group-hover:border-purple-400/50 group-hover:shadow-xl group-hover:shadow-purple-500/20 transition-all duration-500">
                
                {/* Client logo placeholder */}
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  className="aspect-square flex items-center justify-center"
                >
                  <div className="text-center">
                    <div className="text-xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                      {client.name.charAt(0)}
                    </div>
                    <div className="text-xs text-slate-400 font-mono">
                      {client.name.split(' ').map(word => word.charAt(0)).join('')}
                    </div>
                  </div>
                </motion.div>

                {/* Client name */}
                <div className="mt-4 text-center">
                  <p className="text-slate-300 text-xs font-semibold">
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