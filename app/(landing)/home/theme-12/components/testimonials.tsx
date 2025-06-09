"use client";

import { motion } from "framer-motion";
import { testimonialsSectionCopy } from "../copy";
import { useState } from "react";

export default function Testimonials() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

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
            {testimonialsSectionCopy.heading}
          </h2>
          <div className="w-24 h-px bg-stone-300 mx-auto mb-6"></div>
          <p className="text-stone-600 text-lg font-light max-w-2xl mx-auto">
            {testimonialsSectionCopy.subheading}
          </p>
        </motion.div>

        {/* Testimonial content */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            key={activeTestimonial}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            {/* Quote */}
            <div className="mb-12">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="w-16 h-16 mx-auto mb-8 bg-stone-100 rounded-full flex items-center justify-center"
              >
                <span className="text-2xl text-stone-500 font-light">"</span>
              </motion.div>
              
              <motion.blockquote
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-2xl md:text-3xl font-light text-stone-700 leading-relaxed mb-8 italic"
              >
                {testimonialsSectionCopy.testimonials[activeTestimonial].quote}
              </motion.blockquote>
            </div>

            {/* Author */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col items-center"
            >
              {/* Author avatar */}
              <div className="w-16 h-16 bg-gradient-to-br from-stone-100 to-stone-200 rounded-full flex items-center justify-center mb-4">
                <span className="text-stone-500 font-light text-lg">
                  {testimonialsSectionCopy.testimonials[activeTestimonial].author.charAt(0)}
                </span>
              </div>
              
              <h4 className="text-lg font-medium text-stone-800 mb-1">
                {testimonialsSectionCopy.testimonials[activeTestimonial].author}
              </h4>
              
              <p className="text-stone-600 font-light text-sm">
                {testimonialsSectionCopy.testimonials[activeTestimonial].position}
              </p>
              
              <p className="text-stone-500 font-light text-sm">
                {testimonialsSectionCopy.testimonials[activeTestimonial].company}
              </p>
            </motion.div>
          </motion.div>

          {/* Navigation dots */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center space-x-4 mt-12"
          >
            {testimonialsSectionCopy.testimonials.map((_, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
                onClick={() => setActiveTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeTestimonial
                    ? "bg-stone-600 scale-125"
                    : "bg-stone-300 hover:bg-stone-400"
                }`}
              />
            ))}
          </motion.div>

          {/* Zen divider */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 1, delay: 1 }}
            viewport={{ once: true }}
            className="flex justify-center mt-16"
          >
            <div className="flex items-center space-x-3">
              <div className="w-12 h-px bg-stone-300"></div>
              <div className="w-2 h-2 bg-stone-400 rounded-full"></div>
              <div className="w-12 h-px bg-stone-300"></div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
} 