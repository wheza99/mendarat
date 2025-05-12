"use client";

import { contactSectionCopy } from "../copy";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    service: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Here you would typically send the data to your backend
    alert("Form submitted successfully!");
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
      service: ""
    });
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background with Gradient and Organic Shapes */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-purple-50 to-white"></div>
        
        {/* Organic Blob Shapes */}
        <div className="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 opacity-10">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-purple-400">
            <path fill="currentColor" d="M45.4,-77.5C59.2,-69.2,71.3,-57.7,79.4,-43.6C87.5,-29.5,91.6,-12.9,88.9,2.2C86.2,17.2,76.6,30.7,66.6,43.9C56.5,57.1,45.9,70,32.4,77.5C18.9,85,2.5,87.1,-13.9,85.1C-30.2,83.1,-46.6,77,-59.8,66.1C-73,55.2,-83,39.5,-88.3,22.1C-93.6,4.8,-94.2,-14.2,-88.1,-30.5C-82,-46.8,-69.2,-60.3,-54.1,-68.1C-39,-75.9,-21.5,-77.9,-3.5,-72.4C14.5,-66.9,31.7,-53.9,45.4,-77.5Z" transform="translate(100 100)" />
          </svg>
        </div>
        
        <div className="absolute -bottom-1/4 -left-1/4 w-1/2 h-1/2 opacity-10">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-pink-400">
            <path fill="currentColor" d="M48.2,-64.8C62.7,-53.3,74.9,-39.2,79.2,-23.1C83.5,-7,79.9,11.1,72.1,26.7C64.3,42.3,52.2,55.3,37.6,63.8C23,72.3,5.9,76.2,-11.7,75.1C-29.3,74,-47.5,67.9,-60.9,55.5C-74.3,43.1,-83,24.4,-84.3,5.1C-85.7,-14.2,-79.7,-34.1,-67.5,-47.9C-55.3,-61.7,-36.8,-69.5,-19.4,-73.9C-2,-78.3,14.4,-79.4,29.9,-76.1C45.5,-72.8,60.1,-65.1,48.2,-64.8Z" transform="translate(100 100)" />
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
              {contactSectionCopy.heading}
            </span>
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

        {/* Contact Content - Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Glassmorphism Form Container */}
            <div className="relative p-8 rounded-3xl bg-white/70 backdrop-blur-md shadow-xl overflow-hidden">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Form Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name Field */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-white/50 border border-gray-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-colors duration-300"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  {/* Email Field */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-white/50 border border-gray-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-colors duration-300"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                
                {/* Phone Field */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number (Optional)
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-white/50 border border-gray-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-colors duration-300"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
                
                {/* Service Selection */}
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                    Service of Interest
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service || ""}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/50 border border-gray-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-colors duration-300"
                  >
                    <option value="" disabled>Select a service</option>
                    {[
                      "Residential Design",
                      "Commercial Design",
                      "Hospitality Design",
                      "Retail Design",
                      "Cultural Space Design"
                    ].map((service, index) => (
                      <option key={index} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>
                
                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-white/50 border border-gray-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-colors duration-300"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>
                
                {/* Submit Button */}
                <div>
                  <button
                    type="submit"
                    className="w-full py-3 px-6 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 text-white font-medium transition-all duration-300 hover:shadow-lg hover:shadow-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                  >
                    {contactSectionCopy.formPlaceholders.submitButton}
                  </button>
                </div>
              </form>
              
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-32 h-32 rounded-bl-full bg-gradient-to-bl from-purple-100/30 to-pink-100/30"></div>
              <div className="absolute -bottom-4 -right-4 w-8 h-8 rounded-full bg-gradient-to-r from-purple-400/30 to-pink-400/30 blur-sm"></div>
              <div className="absolute -bottom-4 -left-4 w-8 h-8 rounded-full bg-gradient-to-r from-purple-400/30 to-pink-400/30 blur-sm"></div>
            </div>
          </motion.div>
          
          {/* Right Column - Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Contact Info Cards */}
            <div className="grid grid-cols-1 gap-6">
              {/* Address Card */}
              <div className="p-6 rounded-2xl bg-white/60 backdrop-blur-sm shadow-lg border border-gray-100 flex items-start">
                <div className="mr-4 p-3 rounded-full bg-gradient-to-r from-purple-100 to-pink-100">
                  <svg className="h-6 w-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-900 mb-1">Visit Our Studio</h4>
                  <p className="text-gray-600">{contactSectionCopy.locations[0].address}</p>
                </div>
              </div>
              
              {/* Email Card */}
              <div className="p-6 rounded-2xl bg-white/60 backdrop-blur-sm shadow-lg border border-gray-100 flex items-start">
                <div className="mr-4 p-3 rounded-full bg-gradient-to-r from-purple-100 to-pink-100">
                  <svg className="h-6 w-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-900 mb-1">Email Us</h4>
                  <p className="text-gray-600">{contactSectionCopy.locations[0].email}</p>
                </div>
              </div>
              
              {/* Phone Card */}
              <div className="p-6 rounded-2xl bg-white/60 backdrop-blur-sm shadow-lg border border-gray-100 flex items-start">
                <div className="mr-4 p-3 rounded-full bg-gradient-to-r from-purple-100 to-pink-100">
                  <svg className="h-6 w-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-900 mb-1">Call Us</h4>
                  <p className="text-gray-600">{contactSectionCopy.locations[0].phone}</p>
                </div>
              </div>
            </div>
            
            {/* Hours of Operation */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-500 text-white shadow-xl">
              <h4 className="text-xl font-bold mb-4">Hours of Operation</h4>
              <ul className="space-y-2">
                <li className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span className="font-medium">9:00 AM - 6:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Saturday</span>
                  <span className="font-medium">10:00 AM - 4:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Sunday</span>
                  <span className="font-medium">Closed</span>
                </li>
              </ul>
            </div>
            
            {/* Social Media Links */}
            <div>
              <h4 className="text-lg font-medium text-gray-900 mb-4">Connect With Us</h4>
              <div className="flex space-x-4">
                {["instagram", "twitter", "linkedin", "pinterest"].map((social, index) => (
                  <a
                    key={index}
                    href="#"
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white transition-transform duration-300 hover:scale-110 bg-gradient-to-r from-purple-600 to-pink-500"
                  >
                    {social === "instagram" && (
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                    )}
                    {social === "twitter" && (
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                      </svg>
                    )}
                    {social === "linkedin" && (
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    )}
                    {social === "pinterest" && (
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z" />
                      </svg>
                    )}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Map Preview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 relative rounded-3xl overflow-hidden h-[400px] shadow-xl"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0508511272897!2d-122.42699368441547!3d37.77492977975882!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c6c8f4459%3A0xb10ed6d9b5cbe952!2sTwitter!5e0!3m2!1sen!2sus!4v1663195244041!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Our Location"
          ></iframe>
          
          {/* Glassmorphism Overlay */}
          <div className="absolute top-4 left-4 p-4 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg max-w-xs">
            <h4 className="font-bold text-gray-900 mb-1">Our Design Studio</h4>
            <p className="text-sm text-gray-600">{contactSectionCopy.locations[0].address}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
