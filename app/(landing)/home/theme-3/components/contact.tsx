"use client";

import { contactSectionCopy } from "../copy";
import { motion } from "framer-motion";
import { MailIcon, PhoneIcon, MapIcon } from "@heroicons/react/outline";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
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
            {contactSectionCopy.heading}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-gray-600"
          >
            {contactSectionCopy.description}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Locations Information */}
          <div className="lg:col-span-1 space-y-8">
            {contactSectionCopy.locations.map((location, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{location.city}</h3>
                
                <div className="space-y-4">
                  {/* Address */}
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <MapIcon className="h-5 w-5 text-blue-500" />
                    </div>
                    <p className="ml-3 text-gray-600">{location.address}</p>
                  </div>
                  
                  {/* Phone */}
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <PhoneIcon className="h-5 w-5 text-blue-500" />
                    </div>
                    <p className="ml-3 text-gray-600">{location.phone}</p>
                  </div>
                  
                  {/* Email */}
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <MailIcon className="h-5 w-5 text-blue-500" />
                    </div>
                    <p className="ml-3 text-gray-600">{location.email}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="lg:col-span-2 bg-gray-50 p-8 rounded-lg shadow-sm"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Nama
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder={contactSectionCopy.formPlaceholders.name}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
              
              {/* Phone Field */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Telepon
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder={contactSectionCopy.formPlaceholders.phone}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              
              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Pesan
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder={contactSectionCopy.formPlaceholders.message}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                ></textarea>
              </div>
              
              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white px-6 py-3 rounded-md text-sm font-medium tracking-wider hover:bg-blue-600 transition-colors duration-300"
                >
                  {contactSectionCopy.formPlaceholders.submitButton}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
