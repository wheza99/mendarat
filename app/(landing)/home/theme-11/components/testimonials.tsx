"use client";

import { motion, useInView } from "framer-motion";
import { testimonialsSectionCopy } from "../copy";
import { useRef, useState } from "react";

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  return (
    <section className="relative py-20 bg-black text-cyan-400">
      {/* Background grid */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDAsIDI1NSwgMjU1LCAwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20"></div>
      
      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-mono mb-6 text-white">
            {testimonialsSectionCopy.heading}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {testimonialsSectionCopy.description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            {/* Holographic frame */}
            <div className="absolute -inset-4 border border-cyan-400/50 rounded-lg">
              <div className="absolute -top-1 -left-1 w-8 h-8 border-l-2 border-t-2 border-cyan-400"></div>
              <div className="absolute -top-1 -right-1 w-8 h-8 border-r-2 border-t-2 border-cyan-400"></div>
              <div className="absolute -bottom-1 -left-1 w-8 h-8 border-l-2 border-b-2 border-cyan-400"></div>
              <div className="absolute -bottom-1 -right-1 w-8 h-8 border-r-2 border-b-2 border-cyan-400"></div>
            </div>

            {/* Image */}
            <div className="relative rounded-lg overflow-hidden">
              <img
                src={testimonialsSectionCopy.mainImage}
                alt={testimonialsSectionCopy.mainImageAlt}
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 mix-blend-overlay"></div>
              <div className="absolute inset-0 bg-black/30"></div>
            </div>

            {/* Scan line animation */}
            <motion.div
              animate={{
                y: ['-100%', '100%'],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-60"
            />
          </motion.div>

          {/* Right side - Testimonials */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Active testimonial */}
            <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-lg p-8">
              <div className="mb-6">
                <svg className="w-8 h-8 text-cyan-400 mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                </svg>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  "{testimonialsSectionCopy.testimonials[activeTestimonial].quote}"
                </p>
              </div>
              
              <div className="flex items-center space-x-4">
                <img
                  src={testimonialsSectionCopy.testimonials[activeTestimonial].image}
                  alt={testimonialsSectionCopy.testimonials[activeTestimonial].name}
                  className="w-12 h-12 rounded-full border-2 border-cyan-400/50"
                />
                <div>
                  <h4 className="text-white font-mono font-bold">
                    {testimonialsSectionCopy.testimonials[activeTestimonial].name}
                  </h4>
                  <p className="text-cyan-400 text-sm font-mono">
                    {testimonialsSectionCopy.testimonials[activeTestimonial].role}
                  </p>
                </div>
              </div>

              {/* Scan line animation */}
              <motion.div
                animate={{
                  x: ['-100%', '100%'],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-40"
              />
            </div>

            {/* Testimonial navigation */}
            <div className="flex space-x-4">
              {testimonialsSectionCopy.testimonials.map((testimonial, index) => (
                <button
                  key={testimonial.id}
                  onClick={() => setActiveTestimonial(index)}
                  className={`relative px-4 py-2 font-mono text-sm rounded transition-all duration-300 ${
                    activeTestimonial === index
                      ? 'bg-cyan-400 text-black'
                      : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black'
                  }`}
                >
                  <span className="relative z-10">{testimonial.id.toString().padStart(2, '0')}</span>
                  {activeTestimonial === index && (
                    <motion.div
                      layoutId="activeTestimonial"
                      className="absolute inset-0 bg-cyan-400 rounded"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}