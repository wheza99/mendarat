"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BusinessData } from "../../page";

interface ServicesProps {
  businessData: BusinessData;
}

export default function Services({ businessData }: ServicesProps) {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  // Generate services based on business metadata
  const services = [
    {
      id: 1,
      title: "Privacy Policy",
      icon: "🔒",
      description: "Comprehensive privacy protection for your business",
      details: businessData.metadata?.privacy || "We prioritize your privacy and data security with industry-leading practices.",
      available: !!businessData.metadata?.privacy,
      color: "emerald"
    },
    {
      id: 2,
      title: "Terms of Service",
      icon: "📋",
      description: "Clear terms and conditions for your business operations",
      details: businessData.metadata?.terms || "Professional terms of service tailored to your business needs.",
      available: !!businessData.metadata?.terms,
      color: "blue"
    },
    {
      id: 3,
      title: "Shipping Services",
      icon: "🚚",
      description: "Reliable shipping and delivery solutions",
      details: businessData.metadata?.shipping || "Shipping services are currently being configured for your business.",
      available: !!businessData.metadata?.shipping,
      color: "amber"
    },
    {
      id: 4,
      title: "Business Description",
      icon: "📝",
      description: "Detailed business information and services",
      details: businessData.metadata?.description || "Professional business description highlighting your unique value proposition.",
      available: !!businessData.metadata?.description,
      color: "purple"
    }
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Geometric Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 0.05, scale: 1 }}
          transition={{ duration: 2 }}
          className="absolute top-20 left-10 w-64 h-64 bg-emerald-200 rounded-full"
        />
        <motion.div
          initial={{ opacity: 0, rotate: 0 }}
          whileInView={{ opacity: 0.1, rotate: 45 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="absolute bottom-20 right-20 w-32 h-32 bg-emerald-300 transform"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Our <span className="text-emerald-600">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the comprehensive services and policies that make {businessData.name} your trusted business partner.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="relative"
            >
              <div 
                className={`relative bg-white rounded-2xl shadow-lg border-2 transition-all duration-300 cursor-pointer overflow-hidden ${
                  expandedCard === service.id 
                    ? 'border-emerald-400 shadow-2xl' 
                    : 'border-gray-200 hover:border-emerald-300 hover:shadow-xl'
                } ${
                  service.available ? '' : 'opacity-75'
                }`}
                onClick={() => setExpandedCard(expandedCard === service.id ? null : service.id)}
              >
                {/* Availability Indicator */}
                <div className={`absolute top-4 right-4 w-3 h-3 rounded-full ${
                  service.available ? 'bg-green-400' : 'bg-gray-400'
                }`} />

                {/* Service Header */}
                <div className="p-8">
                  <div className="flex items-center mb-4">
                    <div className={`w-16 h-16 rounded-xl flex items-center justify-center text-2xl mr-4 ${
                      service.color === 'emerald' ? 'bg-emerald-100' :
                      service.color === 'blue' ? 'bg-blue-100' :
                      service.color === 'amber' ? 'bg-amber-100' :
                      'bg-purple-100'
                    }`}>
                      {service.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-800 mb-1">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  {/* Expand/Collapse Button */}
                  <button className="flex items-center text-emerald-600 font-semibold hover:text-emerald-700 transition-colors">
                    <span className="mr-2">
                      {expandedCard === service.id ? 'Less Details' : 'More Details'}
                    </span>
                    <motion.span
                      animate={{ rotate: expandedCard === service.id ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      ▼
                    </motion.span>
                  </button>
                </div>

                {/* Expandable Content */}
                <AnimatePresence>
                  {expandedCard === service.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-8 pb-8 border-t border-gray-100">
                        <div className="pt-6">
                          <h4 className="font-semibold text-gray-800 mb-3">Service Details</h4>
                          <p className="text-gray-600 leading-relaxed">
                            {service.details}
                          </p>
                          
                          {/* Status Badge */}
                          <div className="mt-4">
                            <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                              service.available 
                                ? 'bg-green-100 text-green-800' 
                                : 'bg-gray-100 text-gray-600'
                            }`}>
                              {service.available ? '✓ Available' : '⏳ Coming Soon'}
                            </span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Decorative Background Element */}
                <div className={`absolute -bottom-4 -right-4 w-20 h-20 rounded-full opacity-10 ${
                  service.color === 'emerald' ? 'bg-emerald-400' :
                  service.color === 'blue' ? 'bg-blue-400' :
                  service.color === 'amber' ? 'bg-amber-400' :
                  'bg-purple-400'
                }`} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16"
        >
          <div className="bg-emerald-50 rounded-2xl p-8 max-w-2xl mx-auto border border-emerald-200">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Need Custom Services?
            </h3>
            <p className="text-gray-600 mb-6">
              Contact us to discuss your specific business needs and custom service requirements.
            </p>
            <button className="px-8 py-3 bg-emerald-600 text-white font-bold rounded-lg hover:bg-emerald-700 transition-colors shadow-lg">
              Get in Touch
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 