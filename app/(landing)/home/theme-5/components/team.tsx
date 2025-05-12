"use client";

import { teamSectionCopy } from "../copy";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export default function Team() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background with Gradient and Organic Shapes */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-purple-50 to-white"></div>
        
        {/* Organic Shapes */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <svg viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg" className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 text-purple-200 opacity-20">
            <path fill="currentColor" d="M172.5,-208.5C224.2,-162.4,267.8,-108.2,282.9,-47.3C298,13.6,284.6,81.3,249.7,131.5C214.8,181.8,158.4,214.7,96.6,236.4C34.8,258.1,-32.4,268.7,-92.7,250.2C-153,231.7,-206.5,184.2,-233.6,126.5C-260.7,68.8,-261.4,0.8,-243.9,-58.8C-226.4,-118.5,-190.7,-169.9,-143.4,-216.3C-96.1,-262.7,-37.3,-304.1,17.4,-323.8C72.1,-343.5,120.8,-254.6,172.5,-208.5Z" transform="translate(300 300)" />
          </svg>
          
          <svg viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg" className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 text-pink-200 opacity-20">
            <path fill="currentColor" d="M171.2,-136.8C217.2,-80,246.4,-10,232.9,48.5C219.5,107,163.3,154,100.3,180.8C37.3,207.5,-32.5,214,-93.4,190.2C-154.3,166.5,-206.3,112.5,-223.1,47.8C-239.9,-16.9,-221.5,-92.3,-177.6,-148.9C-133.7,-205.5,-64.3,-243.3,1.2,-244.2C66.7,-245.2,125.2,-193.5,171.2,-136.8Z" transform="translate(300 300)" />
          </svg>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
              {teamSectionCopy.heading}
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-lg text-gray-600"
          >
            {teamSectionCopy.description}
          </motion.p>
        </div>

        {/* Team Showcase - Interactive Carousel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column - Featured Team Member */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-5 relative"
          >
            {/* Featured Team Member Image with Glassmorphism */}
            <div className="relative">
              {/* Image Container */}
              <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl">
                {teamSectionCopy.teamMembers.map((member, index) => (
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
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 via-purple-800/40 to-transparent"></div>
                  </motion.div>
                ))}
                
                {/* Glassmorphism Frame */}
                <div className="absolute inset-0 border border-white/20 rounded-3xl"></div>
                
                {/* Quote Bubble */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  viewport={{ once: true }}
                  className="absolute bottom-8 left-1/2 transform -translate-x-1/2 max-w-xs bg-white/20 backdrop-blur-md p-6 rounded-2xl shadow-xl"
                >
                  <div className="relative">
                    {/* Quote Icon */}
                    <svg
                      className="absolute -top-6 -left-6 h-12 w-12 text-white/30 transform -rotate-180"
                      fill="currentColor"
                      viewBox="0 0 32 32"
                      aria-hidden="true"
                    >
                      <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                    </svg>
                    
                    {/* Quote Text */}
                    <div className="relative">
                      {teamSectionCopy.teamMembers.map((member, index) => (
                        <motion.p
                          key={index}
                          initial={{ opacity: 0 }}
                          animate={{ 
                            opacity: activeIndex === index ? 1 : 0,
                            position: activeIndex === index ? 'relative' : 'absolute'
                          }}
                          transition={{ duration: 0.5 }}
                          className="text-white text-lg italic"
                        >
                          "{member.quote}"
                        </motion.p>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-6 -right-6 w-32 h-32 rounded-full bg-gradient-to-br from-purple-400/20 to-pink-400/20 backdrop-blur-sm"></div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 rounded-full bg-gradient-to-tr from-purple-400/20 to-pink-400/20 backdrop-blur-sm"></div>
            </div>
          </motion.div>
          
          {/* Right Column - Team Member Details and Selection */}
          <div className="lg:col-span-7 space-y-12">
            {/* Team Member Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl"
            >
              {teamSectionCopy.teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ 
                    opacity: activeIndex === index ? 1 : 0,
                    position: activeIndex === index ? 'relative' : 'absolute'
                  }}
                  transition={{ duration: 0.5 }}
                  className="w-full"
                >
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500 font-medium text-lg mb-6">{member.role}</p>
                  <p className="text-gray-600 mb-8">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor.
                  </p>
                  
                  {/* Social Links */}
                  <div className="flex space-x-4">
                    {teamSectionCopy.socialLinks.map((social, idx) => (
                      <a
                        key={idx}
                        href="#"
                        className="w-10 h-10 rounded-full flex items-center justify-center text-white transition-colors duration-300 bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600"
                      >
                        {social === "instagram" && (
                          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                          </svg>
                        )}
                        {social === "linkedin" && (
                          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                          </svg>
                        )}
                        {social === "pinterest" && (
                          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.627 0-12 5.372-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
                          </svg>
                        )}
                      </a>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
            
            {/* Team Member Selection - Thumbnails */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex justify-center space-x-4"
            >
              {teamSectionCopy.teamMembers.map((member, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`relative overflow-hidden w-16 h-16 rounded-full transition-all duration-300 ${
                    activeIndex === index
                      ? "ring-2 ring-offset-2 ring-purple-500"
                      : "opacity-70 hover:opacity-100"
                  }`}
                  aria-label={`Select ${member.name}`}
                >
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </motion.div>
            
            {/* Meet the Team Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <button className="group relative inline-flex items-center px-8 py-4 overflow-hidden rounded-full">
                {/* Gradient Border */}
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-purple-600 to-pink-500 opacity-70"></span>
                
                {/* Button Background */}
                <span className="absolute inset-[2px] bg-white rounded-full"></span>
                
                {/* Button Text */}
                <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500 font-medium flex items-center">
                  <span>{teamSectionCopy.buttonText}</span>
                  <svg className="ml-2 w-5 h-5 text-pink-500 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
                
                {/* Hover Effect - Gradient Fill */}
                <span className="absolute inset-0 scale-0 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 transition-all duration-300 group-hover:scale-100"></span>
                
                {/* Hover Text Color Change */}
                <span className="absolute inset-0 flex items-center justify-center opacity-0 text-white font-medium transition-opacity duration-300 group-hover:opacity-100">
                  <span>{teamSectionCopy.buttonText}</span>
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
