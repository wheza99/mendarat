"use client";

import { statsSectionCopy } from "../copy";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Stats() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="lg:col-span-6 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {/* Subtitle */}
              <p className="text-blue-600 font-medium tracking-widest">
                {statsSectionCopy.subtitle}
              </p>

              {/* Heading */}
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                <span className="block">{statsSectionCopy.heading1}</span>
                <span className="block">{statsSectionCopy.heading2}</span>
              </h2>

              {/* Description */}
              <p className="text-lg text-gray-600 max-w-2xl">
                {statsSectionCopy.description}
              </p>

              {/* Button */}
              <div>
                <button className="inline-flex items-center px-6 py-3 bg-gray-900 text-white font-medium rounded-sm hover:bg-gray-800 transition-colors duration-300">
                  <span>{statsSectionCopy.buttonText}</span>
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200"
            >
              {statsSectionCopy.stats.map((stat, index) => (
                <div key={index} className="space-y-2">
                  <p className="text-4xl font-bold text-blue-600">
                    {stat.value}
                    <span className="text-blue-600">{stat.suffix}</span>
                  </p>
                  <p className="text-gray-600">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-6 relative"
          >
            <div className="relative h-[500px] rounded-lg overflow-hidden">
              {/* Main Image */}
              <Image
                src={statsSectionCopy.image}
                alt={statsSectionCopy.imageAlt}
                fill
                className="object-cover"
              />
              
              {/* Decorative Elements */}
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-500/10 rounded-full"></div>
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500/10 rounded-full"></div>
              
              {/* Floating Card */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                viewport={{ once: true }}
                className="absolute bottom-8 right-8 bg-white p-6 rounded-lg shadow-xl max-w-xs"
              >
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <h4 className="font-semibold text-gray-900">Desain Berkualitas</h4>
                </div>
                <p className="text-gray-600 text-sm">
                  Kami berkomitmen untuk menghadirkan desain berkualitas tinggi yang memadukan estetika dan fungsionalitas.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
