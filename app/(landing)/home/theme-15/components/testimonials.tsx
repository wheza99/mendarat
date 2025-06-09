"use client";

import { motion } from "framer-motion";
import { testimonialsSectionCopy } from "../copy";

export default function Testimonials() {
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
            {testimonialsSectionCopy.heading}
          </h2>
          <div className="w-16 h-px bg-blue-300 mx-auto mb-8"></div>
          <p className="text-slate-600 text-lg font-light max-w-2xl mx-auto">
            {testimonialsSectionCopy.subheading}
          </p>
        </motion.div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
          {testimonialsSectionCopy.testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="h-full bg-slate-50 border border-slate-200 p-12 group-hover:border-blue-300 group-hover:bg-white group-hover:shadow-lg transition-all duration-500">
                
                {/* Quote icon */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                  viewport={{ once: true }}
                  className="w-16 h-16 mx-auto mb-12 relative"
                >
                  <div className="w-full h-full bg-blue-600 flex items-center justify-center">
                    <span className="text-white text-2xl font-light">"</span>
                  </div>
                </motion.div>

                {/* Testimonial quote */}
                <blockquote className="text-slate-600 font-light leading-relaxed text-lg mb-12 text-center">
                  "{testimonial.quote}"
                </blockquote>

                {/* Minimal divider */}
                <div className="w-8 h-px bg-blue-400 mx-auto mb-8"></div>

                {/* Author info */}
                <div className="text-center">
                  {/* Author photo placeholder */}
                  <div className="w-16 h-16 mx-auto mb-6">
                    <div className="w-full h-full bg-blue-100 border border-slate-200 flex items-center justify-center">
                      <span className="text-xl font-extralight text-blue-600">
                        {testimonial.author.charAt(0)}
                      </span>
                    </div>
                  </div>

                  {/* Author name */}
                  <h4 className="text-xl font-light text-slate-800 mb-2 tracking-wide">
                    {testimonial.author}
                  </h4>

                  {/* Author position */}
                  <p className="text-blue-600 font-light text-sm tracking-wide uppercase mb-1">
                    {testimonial.position}
                  </p>

                  {/* Company */}
                  <p className="text-slate-500 font-light text-sm">
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