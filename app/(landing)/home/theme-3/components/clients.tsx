"use client";

import { clientsSectionCopy } from "../copy";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Clients() {
  return (
    <section className="py-16 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-block mb-4"
          >
            <div className="w-16 h-1 bg-blue-500 mx-auto"></div>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-gray-900 mb-4"
          >
            {clientsSectionCopy.heading}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-gray-600"
          >
            {clientsSectionCopy.description}
          </motion.p>
        </div>

        {/* Clients Logo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {clientsSectionCopy.clients.map((client, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex justify-center grayscale hover:grayscale-0 transition-all duration-300"
            >
              {/* Using a div with background for placeholder since we don't have actual logos */}
              <div className="h-16 w-32 bg-gray-100 rounded-md flex items-center justify-center shadow-sm hover:shadow-md transition-shadow duration-300">
                <span className="text-gray-500 text-sm font-medium">{client.name}</span>
              </div>
              
              {/* Uncomment this when you have actual logo images */}
              {/* <Image
                src={client.logo}
                alt={client.name}
                width={120}
                height={60}
                className="object-contain"
              /> */}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
