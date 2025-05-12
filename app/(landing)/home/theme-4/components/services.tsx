"use client";

import { servicesSectionCopy } from "../copy";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export default function Services() {
  const [activeService, setActiveService] = useState(0);

  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-emerald-900/5 transform skew-y-6" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-100 rounded-full -ml-32 -mb-32 opacity-50" />
      
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
            {servicesSectionCopy.heading}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-lg text-gray-600"
          >
            {servicesSectionCopy.description}
          </motion.p>
        </div>

        {/* Interactive Services Display */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Service Tabs */}
          <div className="space-y-6">
            {servicesSectionCopy.services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`cursor-pointer transition-all duration-300 ${
                  activeService === index 
                    ? "bg-white shadow-lg border-l-4 border-emerald-500" 
                    : "bg-white/50 hover:bg-white hover:shadow-md"
                }`}
                onClick={() => setActiveService(index)}
              >
                <div className="p-6">
                  <div className="flex items-start">
                    <div className={`p-2 rounded-md ${
                      activeService === index ? "bg-emerald-100 text-emerald-600" : "bg-gray-100 text-gray-500"
                    }`}>
                      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={service.iconPath} />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className={`text-xl font-semibold ${
                        activeService === index ? "text-emerald-900" : "text-gray-900"
                      }`}>
                        {service.title}
                      </h3>
                      {activeService === index && (
                        <motion.p
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          className="mt-2 text-gray-600"
                        >
                          {service.description}
                        </motion.p>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              className="mt-8"
            >
              <button className="group relative inline-flex items-center px-8 py-4 bg-emerald-900 text-white font-medium overflow-hidden">
                <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-emerald-700 rounded-full group-hover:w-80 group-hover:h-80"></span>
                <span className="relative flex items-center">
                  {servicesSectionCopy.buttonText}
                  <svg className="ml-3 w-5 h-5 transition-transform duration-300 group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </button>
            </motion.div>
          </div>
          
          {/* Right Column - Service Image */}
          <div className="relative">
            {servicesSectionCopy.services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: activeService === index ? 1 : 0,
                  scale: activeService === index ? 1 : 0.9,
                }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
                style={{ display: activeService === index ? "block" : "none" }}
              >
                <div className="relative h-[500px] rounded-tr-3xl rounded-bl-3xl overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/70 via-transparent to-transparent" />
                  
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                    <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                    <p className="text-white/80">{service.description}</p>
                  </div>
                  
                  {/* Decorative Elements */}
                  <div className="absolute top-4 right-4 w-16 h-16 border-2 border-white/30 rounded-full flex items-center justify-center">
                    <div className="w-10 h-10 bg-emerald-500/50 backdrop-blur-sm rounded-full" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
