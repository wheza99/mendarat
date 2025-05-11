"use client";

import { useState } from "react";
import { testimonialsSectionCopy } from "../copy";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Testimonials() {
  const [activeTestimonial, setActiveTestimonial] = useState(testimonialsSectionCopy.testimonials[0]);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
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
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            {testimonialsSectionCopy.heading}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-gray-600"
          >
            {testimonialsSectionCopy.description}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column - Main Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-5 relative"
          >
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src={testimonialsSectionCopy.mainImage}
                alt={testimonialsSectionCopy.mainImageAlt}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-transparent"></div>
              
              {/* Decorative Elements */}
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-500/10 rounded-full"></div>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-blue-500/10 rounded-full"></div>
            </div>
          </motion.div>

          {/* Right Column - Testimonials */}
          <div className="lg:col-span-7 space-y-10">
            {/* Testimonial Content */}
            <div className="relative min-h-[280px] bg-gray-50 p-8 rounded-lg shadow-sm">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTestimonial.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="relative"
                >
                  {/* Quote Icon */}
                  <svg
                    className="absolute -top-10 -left-10 h-20 w-20 text-blue-100 transform -rotate-180"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                    aria-hidden="true"
                  >
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                  
                  {/* Testimonial Quote */}
                  <blockquote className="relative">
                    <p className="text-xl text-gray-800 leading-relaxed mb-8">
                      {activeTestimonial.quote}
                    </p>
                    
                    {/* Testimonial Author */}
                    <div className="flex items-center">
                      <div className="flex-shrink-0 mr-4">
                        <Image
                          src={activeTestimonial.image}
                          alt={activeTestimonial.name}
                          width={56}
                          height={56}
                          className="rounded-full object-cover border-2 border-blue-500"
                        />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">{activeTestimonial.name}</p>
                        <p className="text-blue-500">{activeTestimonial.role}</p>
                      </div>
                    </div>
                  </blockquote>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Testimonial Navigation */}
            <div className="flex space-x-4">
              {testimonialsSectionCopy.testimonials.map((testimonial) => (
                <button
                  key={testimonial.id}
                  onClick={() => setActiveTestimonial(testimonial)}
                  className={`relative overflow-hidden w-16 h-16 rounded-full transition-all duration-300 ${
                    activeTestimonial.id === testimonial.id
                      ? "ring-2 ring-blue-500 ring-offset-2"
                      : "opacity-70 hover:opacity-100"
                  }`}
                  aria-label={`View testimonial from ${testimonial.name}`}
                >
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
