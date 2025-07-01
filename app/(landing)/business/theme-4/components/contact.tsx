"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { BusinessData } from "../../page";

interface ContactProps {
  businessData: BusinessData;
}

export default function Contact({ businessData }: ContactProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission logic here
  };

  // Social media links from business data
  const socialMediaLinks = [
    { platform: "WhatsApp", url: businessData.messenger?.whatsapp, icon: "💬" },
    { platform: "Instagram", url: businessData.socials?.instagram, icon: "📷" },
    { platform: "Facebook", url: businessData.socials?.facebook, icon: "👥" },
    { platform: "Twitter", url: businessData.socials?.twitter, icon: "🐦" },
    { platform: "TikTok", url: businessData.socials?.tiktok, icon: "🎵" }
  ].filter(social => social.url);

  return (
    <section className="py-20 bg-emerald-800 relative overflow-hidden">
      {/* Background Geometric Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 2 }}
          className="absolute top-20 right-20 w-80 h-80 bg-emerald-600 rounded-full"
        />
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 0.15, x: 0 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="absolute bottom-20 left-10 w-64 h-64 border-4 border-emerald-600 rounded-full"
        />
        <motion.div
          initial={{ opacity: 0, rotate: 0 }}
          whileInView={{ opacity: 0.1, rotate: 45 }}
          transition={{ duration: 2, delay: 1 }}
          className="absolute top-1/2 left-1/4 w-32 h-32 bg-emerald-700 transform"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Side - Business Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            {/* Section Header */}
            <div className="mb-12">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Get in <span className="text-emerald-300">Touch</span>
              </h2>
              <p className="text-xl text-emerald-100 leading-relaxed">
                Ready to work with {businessData.name}? Let's discuss your project and bring your vision to life.
              </p>
            </div>

            {/* Business Info Card */}
            <div className="bg-emerald-700 rounded-2xl p-8 mb-8 border border-emerald-600">
              <div className="flex items-center mb-6">
                {businessData.img && (
                  <img
                    src={businessData.img}
                    alt={businessData.name}
                    className="w-16 h-16 rounded-xl object-cover mr-4 border-2 border-emerald-400"
                  />
                )}
                <div>
                  <h3 className="text-2xl font-bold text-white">{businessData.name}</h3>
                  <p className="text-emerald-300 font-semibold">Business ID: {businessData.id}</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white text-sm">🌐</span>
                  </div>
                  <div>
                    <p className="text-emerald-100 text-sm">Language</p>
                    <p className="text-white font-semibold">{businessData.language}</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white text-sm">💰</span>
                  </div>
                  <div>
                    <p className="text-emerald-100 text-sm">Currency</p>
                    <p className="text-white font-semibold">{businessData.currency}</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white text-sm">🎨</span>
                  </div>
                  <div>
                    <p className="text-emerald-100 text-sm">Template</p>
                    <p className="text-white font-semibold">{businessData.selected_template}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media Links */}
            {socialMediaLinks.length > 0 && (
              <div className="mb-8">
                <h4 className="text-xl font-bold text-white mb-4">Connect With Us</h4>
                <div className="flex flex-wrap gap-4">
                  {socialMediaLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.url || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      whileHover={{ scale: 1.1 }}
                      className="flex items-center px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-500 transition-colors"
                    >
                      <span className="mr-2">{social.icon}</span>
                      <span className="font-semibold">{social.platform}</span>
                    </motion.a>
                  ))}
                </div>
              </div>
            )}

            {/* Contact Information */}
            <div className="space-y-4">
              {businessData.address && (
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="text-white text-sm">📍</span>
                  </div>
                  <div>
                    <p className="text-emerald-100 text-sm">Address</p>
                    <p className="text-white">{businessData.address}</p>
                  </div>
                </div>
              )}

              <div className="flex items-start">
                <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center mr-3 mt-1">
                  <span className="text-white text-sm">⏰</span>
                </div>
                <div>
                  <p className="text-emerald-100 text-sm">Business Hours</p>
                  <p className="text-white">Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p className="text-white">Saturday: 10:00 AM - 4:00 PM</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-white rounded-2xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Send us a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                    placeholder="What's this about?"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors resize-none"
                    placeholder="Tell us about your project or inquiry..."
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-emerald-600 text-white font-bold rounded-lg hover:bg-emerald-700 transition-colors shadow-lg transform hover:scale-105 duration-200"
                >
                  Send Message
                </button>
              </form>

              {/* Additional Info */}
              <div className="mt-6 p-4 bg-emerald-50 rounded-lg border border-emerald-200">
                <p className="text-sm text-emerald-800">
                  <span className="font-semibold">💡 Quick Response:</span> We typically respond to all inquiries within 24 hours during business days.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 