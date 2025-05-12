"use client";

import { testimonialsSectionCopy } from "../copy";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.6, 1, 1, 0.6]);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => 
        prev === testimonialsSectionCopy.testimonials.length - 1 ? 0 : prev + 1
      );
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section ref={containerRef} className="py-24 relative overflow-hidden">
      {/* Background with Gradient and Organic Shapes */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-purple-50 to-white"></div>
        
        {/* Organic Blob Shapes */}
        <div className="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 opacity-20">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-purple-300">
            <path fill="currentColor" d="M42.8,-73.2C56.9,-66.7,70.8,-57.8,79.6,-44.7C88.4,-31.7,92.2,-14.3,89.6,1.5C87,17.3,78,31.1,68.2,44.1C58.4,57.1,47.8,69.4,34.5,75.3C21.2,81.3,5.2,81,-9.7,77.5C-24.7,73.9,-38.6,67.1,-50.2,57.4C-61.8,47.7,-71,35.1,-77.1,20.7C-83.1,6.3,-85.9,-10,-81.8,-24.4C-77.7,-38.8,-66.7,-51.3,-53.4,-58.4C-40.1,-65.5,-24.5,-67.2,-9.2,-73.1C6.1,-79,29.6,-89.1,42.8,-73.2Z" transform="translate(100 100)" />
          </svg>
        </div>
        
        <div className="absolute -bottom-1/4 -left-1/4 w-1/2 h-1/2 opacity-20">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-pink-300">
            <path fill="currentColor" d="M45.4,-77.5C59.2,-69.2,71.3,-57.7,79.4,-43.6C87.5,-29.5,91.6,-12.9,88.9,2.2C86.2,17.2,76.6,30.7,66.6,43.9C56.5,57.1,45.9,70,32.4,77.5C18.9,85,2.5,87.1,-13.9,85.1C-30.2,83.1,-46.6,77,-59.8,66.1C-73,55.2,-83,39.5,-88.3,22.1C-93.6,4.8,-94.2,-14.2,-88.1,-30.5C-82,-46.8,-69.2,-60.3,-54.1,-68.1C-39,-75.9,-21.5,-77.9,-3.5,-72.4C14.5,-66.9,31.7,-53.9,45.4,-77.5Z" transform="translate(100 100)" />
          </svg>
        </div>
      </div>

      <motion.div 
        style={{ opacity }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="inline-block mb-4"
          >
            <div className="h-0.5 w-12 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto"></div>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">
              {testimonialsSectionCopy.heading}
            </span>
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

        {/* Testimonials Display - Split Layout with Floating Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column - Floating Main Image with Parallax */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-5 relative"
            style={{ y }}
          >
            {/* Main Image with Glassmorphism Frame */}
            <div className="relative">
              {/* Image Container */}
              <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src={testimonialsSectionCopy.mainImage}
                  alt={testimonialsSectionCopy.mainImageAlt}
                  fill
                  className="object-cover"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/30 via-purple-800/20 to-transparent"></div>
              </div>
              
              {/* Glassmorphism Frame */}
              <div className="absolute inset-0 border border-white/20 rounded-3xl"></div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-6 -right-6 w-32 h-32 rounded-full bg-gradient-to-br from-purple-400/20 to-pink-400/20 backdrop-blur-sm"></div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 rounded-full bg-gradient-to-tr from-purple-400/20 to-pink-400/20 backdrop-blur-sm"></div>
            </div>
            
            {/* Floating Testimonial Preview */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="absolute -bottom-10 -right-10 max-w-xs bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-xl"
            >
              <div className="flex items-center mb-4">
                <div className="flex -space-x-2">
                  {testimonialsSectionCopy.testimonials.slice(0, 3).map((testimonial, index) => (
                    <div key={index} className="relative w-8 h-8 rounded-full overflow-hidden border-2 border-white">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900">
                    {testimonialsSectionCopy.testimonials.length}+ Satisfied Clients
                  </p>
                </div>
              </div>
              
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </motion.div>
          </motion.div>
          
          {/* Right Column - Testimonial Carousel */}
          <div className="lg:col-span-7 relative">
            {/* Testimonial Cards with Staggered Animation */}
            <div className="relative h-[400px]">
              {testimonialsSectionCopy.testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ 
                    opacity: activeIndex === index ? 1 : 0,
                    zIndex: activeIndex === index ? 10 : 0
                  }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                >
                  {/* Testimonial Card with Glassmorphism */}
                  <div className="bg-white/70 backdrop-blur-md rounded-3xl p-8 shadow-xl h-full flex flex-col">
                    {/* Quote Icon */}
                    <svg
                      className="h-12 w-12 text-purple-200 mb-6"
                      fill="currentColor"
                      viewBox="0 0 32 32"
                      aria-hidden="true"
                    >
                      <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                    </svg>
                    
                    {/* Testimonial Text */}
                    <p className="text-xl text-gray-700 italic mb-8 flex-grow">
                      "{testimonial.quote}"
                    </p>
                    
                    {/* Testimonial Author */}
                    <div className="flex items-center">
                      <div className="mr-4 relative">
                        <div className="w-14 h-14 rounded-full overflow-hidden">
                          <Image
                            src={testimonial.image}
                            alt={testimonial.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        {/* Decorative Circle */}
                        <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-gradient-to-r from-purple-400 to-pink-400"></div>
                      </div>
                      
                      <div>
                        <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                        <p className="text-sm text-purple-600">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Navigation Dots */}
            <div className="flex justify-center space-x-2 mt-8">
              {testimonialsSectionCopy.testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    activeIndex === index
                      ? "bg-gradient-to-r from-purple-400 to-pink-400 w-6"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            {/* Navigation Arrows */}
            <div className="flex justify-between mt-6">
              <button
                onClick={() => setActiveIndex(prev => 
                  prev === 0 ? testimonialsSectionCopy.testimonials.length - 1 : prev - 1
                )}
                className="w-12 h-12 rounded-full bg-white/70 backdrop-blur-sm shadow-md flex items-center justify-center text-gray-700 hover:text-purple-600 transition-colors duration-300"
                aria-label="Previous testimonial"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <button
                onClick={() => setActiveIndex(prev => 
                  prev === testimonialsSectionCopy.testimonials.length - 1 ? 0 : prev + 1
                )}
                className="w-12 h-12 rounded-full bg-white/70 backdrop-blur-sm shadow-md flex items-center justify-center text-gray-700 hover:text-purple-600 transition-colors duration-300"
                aria-label="Next testimonial"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        
        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <button className="group relative inline-flex items-center px-8 py-4 overflow-hidden rounded-full">
            {/* Gradient Border */}
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-purple-600 to-pink-500 opacity-70"></span>
            
            {/* Button Background */}
            <span className="absolute inset-[2px] bg-white rounded-full"></span>
            
            {/* Button Text */}
            <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500 font-medium flex items-center">
              <span>READ ALL TESTIMONIALS</span>
              <svg className="ml-2 w-5 h-5 text-pink-500 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
            
            {/* Hover Effect - Gradient Fill */}
            <span className="absolute inset-0 scale-0 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 transition-all duration-300 group-hover:scale-100"></span>
            
            {/* Hover Text Color Change */}
            <span className="absolute inset-0 flex items-center justify-center opacity-0 text-white font-medium transition-opacity duration-300 group-hover:opacity-100">
              <span>READ ALL TESTIMONIALS</span>
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}
