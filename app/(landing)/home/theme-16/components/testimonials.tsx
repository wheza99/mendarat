"use client";

import { motion } from "framer-motion";
import { testimonialsSectionCopy } from "../copy";

export default function Testimonials() {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-900 to-slate-800">
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
            {testimonialsSectionCopy.heading}
          </h2>
          <p className="text-slate-300 text-xl max-w-2xl mx-auto">
            {testimonialsSectionCopy.subheading}
          </p>
        </motion.div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonialsSectionCopy.testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="h-full bg-gradient-to-br from-slate-800/50 to-purple-900/50 backdrop-blur-sm border border-slate-600/50 rounded-xl p-8 group-hover:border-purple-400/50 group-hover:shadow-2xl group-hover:shadow-purple-500/20 transition-all duration-500">
                
                {/* Quote icon */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                  viewport={{ once: true }}
                  className="w-12 h-12 mx-auto mb-8 relative"
                >
                  <div className="w-full h-full bg-gradient-to-br from-purple-600 to-cyan-600 rounded-lg flex items-center justify-center">
                    <span className="text-white text-xl font-bold">"</span>
                  </div>
                </motion.div>

                {/* Testimonial quote */}
                <blockquote className="text-slate-300 leading-relaxed text-center mb-8">
                  "{testimonial.quote}"
                </blockquote>

                {/* Author info */}
                <div className="text-center">
                  {/* Author photo placeholder */}
                  <div className="w-12 h-12 mx-auto mb-4">
                    <div className="w-full h-full bg-gradient-to-br from-purple-600 to-cyan-600 rounded-full border-2 border-slate-600 flex items-center justify-center">
                      <span className="text-sm font-bold text-white">
                        {testimonial.author.charAt(0)}
                      </span>
                    </div>
                  </div>

                  {/* Author name */}
                  <h4 className="text-lg font-bold text-white mb-1">
                    {testimonial.author}
                  </h4>

                  {/* Author position */}
                  <p className="text-purple-400 font-semibold text-sm mb-1">
                    {testimonial.position}
                  </p>

                  {/* Company */}
                  <p className="text-slate-400 text-sm">
                    {testimonial.company}
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