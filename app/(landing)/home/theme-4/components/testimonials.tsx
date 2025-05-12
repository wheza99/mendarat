"use client";

import { testimonialsSectionCopy } from "../copy";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const nextTestimonial = () => {
    setActiveIndex((prev) => 
      prev === testimonialsSectionCopy.testimonials.length - 1 ? 0 : prev + 1
    );
  };
  
  const prevTestimonial = () => {
    setActiveIndex((prev) => 
      prev === 0 ? testimonialsSectionCopy.testimonials.length - 1 : prev - 1
    );
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-32 bg-emerald-50 transform -skew-y-3" />
      <div className="absolute -top-64 -right-64 w-[40rem] h-[40rem] rounded-full border border-emerald-100" />
      <div className="absolute -bottom-64 -left-64 w-[30rem] h-[30rem] rounded-full border border-emerald-100" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "4rem" }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="h-1 bg-emerald-500 mx-auto mb-6"
          />
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            {testimonialsSectionCopy.heading}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-lg text-gray-600"
          >
            {testimonialsSectionCopy.description}
          </motion.p>
        </div>

        {/* Testimonials Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column - Featured Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-5 relative"
          >
            <div className="relative">
              {/* Geometric Frame */}
              <div className="absolute -inset-6 border-2 border-emerald-200 transform -rotate-3" />
              
              {/* Main Image */}
              <div className="relative h-[500px] overflow-hidden transform rotate-3 shadow-xl">
                <Image
                  src={testimonialsSectionCopy.mainImage}
                  alt={testimonialsSectionCopy.mainImageAlt}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/30 to-transparent" />
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -bottom-10 -left-10 w-20 h-20 bg-emerald-500/20 rounded-full backdrop-blur-sm" />
              <div className="absolute -top-10 -right-10 w-20 h-20 bg-emerald-500/20 rounded-full backdrop-blur-sm" />
            </div>
          </motion.div>

          {/* Right Column - Testimonial Carousel */}
          <div className="lg:col-span-7 relative">
            {/* Testimonial Card */}
            <div className="bg-emerald-50 p-10 rounded-lg relative">
              {/* Quote Icon */}
              <svg
                className="absolute -top-6 left-10 h-12 w-12 text-emerald-500 transform -rotate-180"
                fill="currentColor"
                viewBox="0 0 32 32"
                aria-hidden="true"
              >
                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
              </svg>
              
              {/* Testimonial Content */}
              <div className="min-h-[200px] relative">
                {testimonialsSectionCopy.testimonials.map((testimonial, index) => (
                  <motion.div
                    key={testimonial.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ 
                      opacity: activeIndex === index ? 1 : 0,
                      x: activeIndex === index ? 0 : 20,
                      position: activeIndex === index ? 'relative' : 'absolute',
                      zIndex: activeIndex === index ? 10 : 0,
                    }}
                    transition={{ duration: 0.5 }}
                    className="w-full"
                  >
                    <blockquote>
                      <p className="text-xl text-gray-800 leading-relaxed mb-8">
                        {testimonial.quote}
                      </p>
                      
                      {/* Author Info */}
                      <div className="flex items-center">
                        <div className="flex-shrink-0 mr-4">
                          <Image
                            src={testimonial.image}
                            alt={testimonial.name}
                            width={56}
                            height={56}
                            className="rounded-full object-cover border-2 border-emerald-300"
                          />
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900">{testimonial.name}</p>
                          <p className="text-emerald-600">{testimonial.role}</p>
                        </div>
                      </div>
                    </blockquote>
                  </motion.div>
                ))}
              </div>
              
              {/* Navigation Controls */}
              <div className="flex justify-between mt-8">
                <button 
                  onClick={prevTestimonial}
                  className="p-2 rounded-full bg-white shadow-md text-emerald-900 hover:bg-emerald-900 hover:text-white transition-colors duration-300"
                  aria-label="Previous testimonial"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                
                <div className="flex space-x-2">
                  {testimonialsSectionCopy.testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveIndex(index)}
                      className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                        activeIndex === index ? 'bg-emerald-600' : 'bg-emerald-200'
                      }`}
                      aria-label={`Go to testimonial ${index + 1}`}
                    />
                  ))}
                </div>
                
                <button 
                  onClick={nextTestimonial}
                  className="p-2 rounded-full bg-white shadow-md text-emerald-900 hover:bg-emerald-900 hover:text-white transition-colors duration-300"
                  aria-label="Next testimonial"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
