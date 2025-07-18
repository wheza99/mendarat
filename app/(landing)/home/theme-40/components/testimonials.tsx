"use client";

import { motion } from "framer-motion";
import { testimonialsSectionCopy } from "../copy";
import { useState } from "react";

const Testimonials = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-b from-purple-900 via-black to-gray-900">
      {/* Space Background Effects */}
      <div className="absolute inset-0">
        {/* Starfield */}
        <div className="absolute inset-0">
          {[...Array(200)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0.1, 1, 0.1],
                scale: [0.5, 1.2, 0.5],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 3,
              }}
            />
          ))}
        </div>

        {/* Space Ripple Effects */}
        <div className="absolute inset-0">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute border border-purple-500/20 rounded-full"
              style={{
                width: `${200 + i * 150}px`,
                height: `${200 + i * 150}px`,
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%)",
              }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: 6 + i * 2,
                repeat: Infinity,
                delay: i * 1,
              }}
            />
          ))}
        </div>

        {/* Floating Space Particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-purple-400 rounded-full opacity-30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [-25, 25, -25],
                x: [-12, 12, -12],
                opacity: [0.1, 0.4, 0.1],
              }}
              transition={{
                duration: 5 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            {testimonialsSectionCopy.heading}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {testimonialsSectionCopy.description}
          </p>
        </motion.div>

        {/* Main Testimonial Display */}
        <motion.div
          key={activeTestimonial}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative max-w-4xl mx-auto mb-12"
        >
          {/* Space Glow Effect */}
          <motion.div
            className="absolute inset-0 bg-purple-500 rounded-3xl opacity-10 blur-2xl"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
          />
          
          <div className="relative bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-3xl p-12">
            {/* Quote Icon */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex justify-center mb-8"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                </svg>
              </div>
            </motion.div>
            
            {/* Testimonial Content */}
            <motion.blockquote
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl text-white text-center leading-relaxed mb-8 font-light"
            >
              "{testimonialsSectionCopy.testimonials[activeTestimonial].quote}"
            </motion.blockquote>
            
            {/* Author Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex items-center justify-center space-x-4"
            >
              <motion.img
                src={testimonialsSectionCopy.testimonials[activeTestimonial].image}
                alt={testimonialsSectionCopy.testimonials[activeTestimonial].author}
                className="w-16 h-16 rounded-full object-cover border-2 border-purple-500"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              />
              <div className="text-center">
                <h4 className="text-xl font-bold text-white">
                  {testimonialsSectionCopy.testimonials[activeTestimonial].author}
                </h4>
                <p className="text-purple-400">
                  {testimonialsSectionCopy.testimonials[activeTestimonial].role}
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Testimonial Navigation */}
        <div className="flex justify-center space-x-4 mb-12">
          {testimonialsSectionCopy.testimonials.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => setActiveTestimonial(index)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className={`w-4 h-4 rounded-full transition-all duration-300 ${
                activeTestimonial === index
                  ? "bg-purple-500 shadow-lg shadow-purple-500/50"
                  : "bg-gray-600 hover:bg-gray-500"
              }`}
            />
          ))}
        </div>

        {/* All Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonialsSectionCopy.testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05,
                rotateY: 5,
              }}
              onClick={() => setActiveTestimonial(index)}
              className={`group relative cursor-pointer ${
                activeTestimonial === index ? "opacity-100" : "opacity-60 hover:opacity-80"
              } transition-opacity duration-300`}
            >
              {/* Space Glow Effect */}
              <motion.div
                className="absolute inset-0 bg-purple-500 rounded-2xl opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-300"
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
              />
              
              <div className={`relative bg-gray-800/50 backdrop-blur-sm border rounded-2xl p-6 transition-colors duration-300 ${
                activeTestimonial === index
                  ? "border-purple-500"
                  : "border-gray-700 group-hover:border-purple-400"
              }`}>
                {/* Author Image */}
                <div className="flex items-center space-x-4 mb-4">
                  <motion.img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full object-cover border-2 border-purple-500"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <div>
                    <h4 className="text-lg font-bold text-white">
                      {testimonial.author}
                    </h4>
                    <p className="text-purple-400 text-sm">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
                
                {/* Quote Preview */}
                <blockquote className="text-gray-300 text-sm leading-relaxed">
                  "{testimonial.quote.substring(0, 120)}..."
                </blockquote>
                
                {/* Floating Particles on Hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-purple-400 rounded-full"
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                      }}
                      animate={{
                        y: [-8, 8, -8],
                        opacity: [0, 1, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.2,
                      }}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;