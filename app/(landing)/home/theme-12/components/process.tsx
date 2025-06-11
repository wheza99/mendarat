"use client";

import { motion } from "framer-motion";
import { processSectionCopy } from "../copy";

export default function Process() {
  return (
    <section className="py-24 bg-gradient-to-b from-stone-50 to-white">
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
            {processSectionCopy.heading}
          </h2>
          <div className="w-24 h-px bg-stone-300 mx-auto mb-6"></div>
          <p className="text-stone-600 text-lg font-light max-w-2xl mx-auto">
            {processSectionCopy.subheading}
          </p>
        </motion.div>

        {/* Process steps */}
        <div className="max-w-4xl mx-auto">
          {processSectionCopy.steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative mb-16 last:mb-0"
            >
              <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
                
                {/* Step number circle */}
                <div className="flex-shrink-0 relative">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                    viewport={{ once: true }}
                    className="w-24 h-24 border-2 border-stone-300 rounded-full flex items-center justify-center bg-white"
                  >
                    <span className="text-2xl font-extralight text-stone-700">
                      {step.number}
                    </span>
                  </motion.div>
                  
                  {/* Connecting line (except for last item) */}
                  {index !== processSectionCopy.steps.length - 1 && (
                    <motion.div
                      initial={{ scaleY: 0 }}
                      whileInView={{ scaleY: 1 }}
                      transition={{ duration: 0.8, delay: index * 0.2 + 0.5 }}
                      viewport={{ once: true }}
                      className="absolute left-1/2 top-24 w-px h-16 bg-gradient-to-b from-stone-300 to-stone-200 origin-top transform -translate-x-px hidden md:block"
                    />
                  )}
                </div>

                {/* Step content */}
                <div className="flex-1">
                  <motion.h3
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.2 + 0.4 }}
                    viewport={{ once: true }}
                    className="text-3xl font-light text-stone-800 mb-4 tracking-wide"
                  >
                    {step.title}
                  </motion.h3>
                  
                  <motion.p
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.2 + 0.5 }}
                    viewport={{ once: true }}
                    className="text-stone-600 font-light leading-relaxed text-lg"
                  >
                    {step.description}
                  </motion.p>

                  {/* Decorative element */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: index * 0.2 + 0.6 }}
                    viewport={{ once: true }}
                    className="w-20 h-px bg-stone-300 mt-6 origin-left"
                  />
                </div>

                {/* Floating element */}
                <motion.div
                  animate={{ 
                    y: [0, -10, 0],
                    opacity: [0.3, 0.6, 0.3]
                  }}
                  transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    delay: index * 0.5
                  }}
                  className="hidden lg:block absolute -right-8 top-4 w-4 h-4 bg-stone-200 rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom flowing line decoration */}
        <motion.div
          initial={{ opacity: 0, pathLength: 0 }}
          whileInView={{ opacity: 1, pathLength: 1 }}
          transition={{ duration: 2, delay: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center mt-20"
        >
          <svg width="200" height="40" viewBox="0 0 200 40" fill="none">
            <motion.path
              d="M10 20 Q50 10 100 20 T190 20"
              stroke="#a8a29e"
              strokeWidth="1"
              fill="none"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 2, delay: 0.8 }}
            />
            <circle cx="100" cy="20" r="2" fill="#78716c" />
          </svg>
        </motion.div>

      </div>
    </section>
  );
} 