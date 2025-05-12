"use client";

import { contactSectionCopy } from "../copy";
import { motion } from "framer-motion";
import { MailIcon, PhoneIcon, LocationMarkerIcon } from "@heroicons/react/outline";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-emerald-50" />
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-emerald-50 rounded-full opacity-70" />
      <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-emerald-100 rounded-full opacity-70" />
      
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
            {contactSectionCopy.heading}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-lg text-gray-600"
          >
            {contactSectionCopy.description}
          </motion.p>
        </div>

        {/* Contact Content - Asymmetrical Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="lg:col-span-7 bg-white p-8 shadow-lg rounded-tr-3xl rounded-bl-3xl relative"
          >
            {/* Decorative Corner Elements */}
            <div className="absolute top-0 right-0 w-20 h-20 bg-emerald-50 rounded-tr-3xl" />
            <div className="absolute bottom-0 left-0 w-20 h-20 bg-emerald-50 rounded-bl-3xl" />
            
            <form className="relative space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a message</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder={contactSectionCopy.formPlaceholders.name}
                    className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  />
                </div>
                
                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder={contactSectionCopy.formPlaceholders.email}
                    className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  />
                </div>
              </div>
              
              {/* Phone Field */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder={contactSectionCopy.formPlaceholders.phone}
                  className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                />
              </div>
              
              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder={contactSectionCopy.formPlaceholders.message}
                  className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                ></textarea>
              </div>
              
              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  className="group relative inline-flex items-center px-8 py-4 bg-emerald-900 text-white font-medium overflow-hidden"
                >
                  <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-emerald-700 rounded-full group-hover:w-80 group-hover:h-80"></span>
                  <span className="relative">
                    {contactSectionCopy.formPlaceholders.submitButton}
                  </span>
                </button>
              </div>
            </form>
          </motion.div>
          
          {/* Right Column - Contact Information */}
          <div className="lg:col-span-5 space-y-8">
            {contactSectionCopy.locations.map((location, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-emerald-50 p-8 rounded-tl-3xl rounded-br-3xl shadow-sm hover:shadow-md transition-shadow duration-300 relative overflow-hidden"
              >
                {/* Location Header */}
                <h3 className="text-xl font-bold text-gray-900 mb-6 relative z-10">{location.city}</h3>
                
                {/* Contact Details */}
                <div className="space-y-4 relative z-10">
                  {/* Address */}
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <LocationMarkerIcon className="h-5 w-5 text-emerald-600" />
                    </div>
                    <p className="ml-3 text-gray-700">{location.address}</p>
                  </div>
                  
                  {/* Phone */}
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <PhoneIcon className="h-5 w-5 text-emerald-600" />
                    </div>
                    <p className="ml-3 text-gray-700">{location.phone}</p>
                  </div>
                  
                  {/* Email */}
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <MailIcon className="h-5 w-5 text-emerald-600" />
                    </div>
                    <p className="ml-3 text-gray-700">{location.email}</p>
                  </div>
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-emerald-100 rounded-full opacity-50" />
                <div className="absolute top-6 right-6 w-12 h-12 border-2 border-emerald-200 rounded-full" />
              </motion.div>
            ))}
            
            {/* Map Placeholder */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="h-64 bg-emerald-100 rounded-tl-3xl rounded-br-3xl overflow-hidden relative"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-emerald-900 font-medium">Interactive Map</span>
              </div>
              
              {/* Map Placeholder Pattern */}
              <div className="absolute inset-0 opacity-20">
                {[...Array(5)].map((_, i) => (
                  <div 
                    key={i} 
                    className="absolute bg-emerald-900"
                    style={{
                      height: '1px',
                      left: 0,
                      right: 0,
                      top: `${(i + 1) * 20}%`,
                    }}
                  />
                ))}
                {[...Array(5)].map((_, i) => (
                  <div 
                    key={i} 
                    className="absolute bg-emerald-900"
                    style={{
                      width: '1px',
                      top: 0,
                      bottom: 0,
                      left: `${(i + 1) * 20}%`,
                    }}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
