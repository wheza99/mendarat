"use client";

import { motion } from "framer-motion";
import { contactSectionCopy } from "../copy";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <section className="py-24 bg-gradient-to-b from-white to-stone-50">
      <div className="container mx-auto px-6">
        
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-extralight text-stone-800 mb-4 tracking-tight">
            {contactSectionCopy.heading}
          </h2>
          <div className="w-24 h-px bg-stone-300 mx-auto mb-6"></div>
          <p className="text-stone-600 text-lg font-light max-w-2xl mx-auto mb-8">
            {contactSectionCopy.subheading}
          </p>
          <p className="text-stone-600 font-light max-w-xl mx-auto">
            {contactSectionCopy.description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          
          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Name field */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <label className="block text-stone-700 font-light text-sm mb-3 tracking-wide">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={contactSectionCopy.form.namePlaceholder}
                  className="w-full px-0 py-4 bg-transparent border-0 border-b border-stone-300 text-stone-800 placeholder-stone-400 focus:outline-none focus:border-stone-600 transition-colors duration-300 font-light"
                />
              </motion.div>

              {/* Email field */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <label className="block text-stone-700 font-light text-sm mb-3 tracking-wide">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder={contactSectionCopy.form.emailPlaceholder}
                  className="w-full px-0 py-4 bg-transparent border-0 border-b border-stone-300 text-stone-800 placeholder-stone-400 focus:outline-none focus:border-stone-600 transition-colors duration-300 font-light"
                />
              </motion.div>

              {/* Message field */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <label className="block text-stone-700 font-light text-sm mb-3 tracking-wide">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={contactSectionCopy.form.messagePlaceholder}
                  rows={6}
                  className="w-full px-0 py-4 bg-transparent border-0 border-b border-stone-300 text-stone-800 placeholder-stone-400 focus:outline-none focus:border-stone-600 transition-colors duration-300 font-light resize-none"
                />
              </motion.div>

              {/* Submit button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="pt-8"
              >
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-12 py-4 bg-stone-800 text-white font-light text-sm tracking-wide transition-all duration-300 hover:bg-stone-700"
                >
                  {contactSectionCopy.form.submitText}
                </motion.button>
              </motion.div>
            </form>
          </motion.div>

          {/* Contact information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="lg:pl-12"
          >
            {/* Decorative zen element */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="w-32 h-32 mx-auto lg:mx-0 mb-12 bg-gradient-to-br from-stone-100 to-stone-200 rounded-full flex items-center justify-center"
            >
              <div className="w-16 h-16 border-2 border-stone-400 rounded-full flex items-center justify-center">
                <div className="w-6 h-6 bg-stone-500 rounded-full"></div>
              </div>
            </motion.div>

            {/* Contact details */}
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                viewport={{ once: true }}
              >
                <h3 className="text-stone-800 font-light text-lg mb-2 tracking-wide">
                  Email
                </h3>
                <p className="text-stone-600 font-light">
                  {contactSectionCopy.contactInfo.email}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
              >
                <h3 className="text-stone-800 font-light text-lg mb-2 tracking-wide">
                  Phone
                </h3>
                <p className="text-stone-600 font-light">
                  {contactSectionCopy.contactInfo.phone}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                viewport={{ once: true }}
              >
                <h3 className="text-stone-800 font-light text-lg mb-2 tracking-wide">
                  Location
                </h3>
                <p className="text-stone-600 font-light leading-relaxed">
                  {contactSectionCopy.contactInfo.address}
                </p>
              </motion.div>
            </div>

            {/* Zen divider */}
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
              viewport={{ once: true }}
              className="w-20 h-px bg-stone-300 mt-12 origin-left"
            />
          </motion.div>
        </div>

        {/* Bottom meditation circle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          viewport={{ once: true }}
          className="flex justify-center mt-20"
        >
          <div className="relative">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              className="w-20 h-20 border border-stone-300 rounded-full flex items-center justify-center"
            >
              <div className="w-12 h-12 border border-stone-400 rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-stone-500 rounded-full"></div>
              </div>
            </motion.div>
            
            {/* Orbiting dots */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0"
            >
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1 w-2 h-2 bg-stone-400 rounded-full"></div>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1 w-2 h-2 bg-stone-400 rounded-full"></div>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
} 