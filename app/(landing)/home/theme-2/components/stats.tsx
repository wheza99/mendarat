"use client";

import { statsSectionCopy } from "../copy";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Stats() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative h-[500px] rounded-lg overflow-hidden"
          >
            <Image
              src={statsSectionCopy.image}
              alt={statsSectionCopy.imageAlt}
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Right Column - Content */}
          <div className="space-y-8">
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="space-y-6"
            >
              {/* Subtitle */}
              <motion.p variants={item} className="text-amber-500 font-medium tracking-widest">
                {statsSectionCopy.subtitle}
              </motion.p>

              {/* Heading */}
              <motion.h2 variants={item} className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                <span className="block">{statsSectionCopy.heading1}</span>
                <span className="block">{statsSectionCopy.heading2}</span>
              </motion.h2>

              {/* Description */}
              <motion.p variants={item} className="text-lg text-gray-600 max-w-2xl">
                {statsSectionCopy.description}
              </motion.p>

              {/* Button */}
              <motion.div variants={item}>
                <button className="inline-block bg-gray-900 text-white px-6 py-3 text-sm font-medium tracking-wider hover:bg-gray-800 transition-colors duration-300">
                  {statsSectionCopy.buttonText}
                </button>
              </motion.div>

              {/* Stats */}
              <motion.div 
                variants={item}
                className="grid grid-cols-2 gap-8 pt-8 border-t border-gray-200"
              >
                {statsSectionCopy.stats.map((stat, index) => (
                  <div key={index} className="space-y-2">
                    <p className="text-4xl font-bold text-amber-500">
                      {stat.value}
                      <span className="text-amber-500">{stat.suffix}</span>
                    </p>
                    <p className="text-gray-600">{stat.label}</p>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
