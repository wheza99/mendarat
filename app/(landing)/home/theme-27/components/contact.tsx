"use client";

import { useState } from "react";
import { brutalistCopy } from "../copy";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <section className="py-32 bg-black text-white relative overflow-hidden">
      {/* Background Geometric Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-0 w-64 h-4 bg-orange-600 opacity-20"></div>
        <div className="absolute top-40 right-0 w-32 h-64 bg-red-600 opacity-20 transform rotate-12"></div>
        <div className="absolute bottom-40 left-1/4 w-48 h-48 bg-white opacity-5 transform rotate-45"></div>
        <div className="absolute bottom-0 right-1/3 w-80 h-8 bg-gray-600 opacity-20"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Left Column - Contact Info */}
          <div>
            {/* Section Header */}
            <div className="mb-12">
              <h2 className="text-5xl md:text-7xl font-black uppercase text-white mb-6 leading-none">
                {brutalistCopy.contact.title}
              </h2>
              <div className="w-32 h-2 bg-orange-600 mb-8"></div>
              
              <h3 className="text-2xl md:text-3xl font-black uppercase text-orange-600 mb-6">
                {brutalistCopy.contact.subtitle}
              </h3>
              
              <p className="text-xl font-bold text-gray-300 leading-tight">
                {brutalistCopy.contact.description}
              </p>
            </div>

            {/* Contact Information Cards */}
            <div className="space-y-6">
              {/* Address */}
              <div className="group relative">
                <div className="bg-gray-900 border-2 border-white p-6 relative">
                  <div className="absolute top-0 left-0 w-12 h-12 bg-orange-600 transform rotate-45 -translate-x-3 -translate-y-3"></div>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-orange-600 mb-2">
                    LOCATION
                  </h4>
                  <p className="text-lg font-bold text-white">
                    {brutalistCopy.contact.address}
                  </p>
                </div>
                <div className="absolute inset-0 bg-orange-600 transform translate-x-2 translate-y-2 -z-10 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform duration-300"></div>
              </div>

              {/* Phone */}
              <div className="group relative">
                <div className="bg-gray-900 border-2 border-white p-6 relative">
                  <div className="absolute top-0 right-0 w-8 h-8 bg-red-600"></div>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-red-600 mb-2">
                    PHONE
                  </h4>
                  <p className="text-lg font-bold text-white">
                    {brutalistCopy.contact.phone}
                  </p>
                </div>
                <div className="absolute inset-0 bg-red-600 transform translate-x-2 translate-y-2 -z-10 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform duration-300"></div>
              </div>

              {/* Email */}
              <div className="group relative">
                <div className="bg-gray-900 border-2 border-white p-6 relative">
                  <div className="absolute bottom-0 left-0 w-16 h-4 bg-white"></div>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-2">
                    EMAIL
                  </h4>
                  <p className="text-lg font-bold text-white">
                    {brutalistCopy.contact.email}
                  </p>
                </div>
                <div className="absolute inset-0 bg-white transform translate-x-2 translate-y-2 -z-10 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform duration-300"></div>
              </div>

              {/* Hours */}
              <div className="group relative">
                <div className="bg-gray-900 border-2 border-white p-6 relative">
                  <div className="absolute top-2 left-2 w-4 h-4 bg-orange-600"></div>
                  <div className="absolute bottom-2 right-2 w-4 h-4 bg-red-600"></div>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-2">
                    HOURS
                  </h4>
                  <p className="text-lg font-bold text-white">
                    {brutalistCopy.contact.hours}
                  </p>
                </div>
                <div className="absolute inset-0 bg-gray-700 transform translate-x-2 translate-y-2 -z-10 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform duration-300"></div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div>
            <div className="bg-white p-8 border-4 border-orange-600 relative">
              {/* Form Header */}
              <div className="mb-8">
                <h3 className="text-3xl font-black uppercase text-black mb-4">
                  SEND MESSAGE
                </h3>
                <div className="w-full h-2 bg-black"></div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Input */}
                <div className="group relative">
                  <label className="block text-sm font-bold uppercase tracking-wider text-black mb-2">
                    NAME *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full p-4 border-2 border-black bg-gray-100 text-black font-bold focus:bg-white focus:border-orange-600 focus:outline-none transition-all duration-300"
                    placeholder="YOUR NAME"
                  />
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-orange-600 transform scale-x-0 group-focus-within:scale-x-100 transition-transform duration-300"></div>
                </div>

                {/* Email Input */}
                <div className="group relative">
                  <label className="block text-sm font-bold uppercase tracking-wider text-black mb-2">
                    EMAIL *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full p-4 border-2 border-black bg-gray-100 text-black font-bold focus:bg-white focus:border-red-600 focus:outline-none transition-all duration-300"
                    placeholder="YOUR@EMAIL.COM"
                  />
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-red-600 transform scale-x-0 group-focus-within:scale-x-100 transition-transform duration-300"></div>
                </div>

                {/* Company Input */}
                <div className="group relative">
                  <label className="block text-sm font-bold uppercase tracking-wider text-black mb-2">
                    COMPANY
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full p-4 border-2 border-black bg-gray-100 text-black font-bold focus:bg-white focus:border-black focus:outline-none transition-all duration-300"
                    placeholder="COMPANY NAME"
                  />
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-black transform scale-x-0 group-focus-within:scale-x-100 transition-transform duration-300"></div>
                </div>

                {/* Message Textarea */}
                <div className="group relative">
                  <label className="block text-sm font-bold uppercase tracking-wider text-black mb-2">
                    MESSAGE *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full p-4 border-2 border-black bg-gray-100 text-black font-bold focus:bg-white focus:border-orange-600 focus:outline-none transition-all duration-300 resize-none"
                    placeholder="TELL US ABOUT YOUR PROJECT..."
                  />
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-orange-600 transform scale-x-0 group-focus-within:scale-x-100 transition-transform duration-300"></div>
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    className="group relative bg-black text-white px-12 py-6 text-lg font-bold uppercase tracking-wider hover:bg-orange-600 transition-all duration-300 w-full"
                  >
                    <span className="relative z-10">{brutalistCopy.contact.cta}</span>
                    <div className="absolute inset-0 bg-orange-600 transform translate-x-2 translate-y-2 -z-10 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-300"></div>
                  </button>
                </div>
              </form>

              {/* Corner Decorations */}
              <div className="absolute top-2 right-2 w-6 h-6 bg-orange-600"></div>
              <div className="absolute bottom-2 left-2 w-6 h-6 bg-red-600"></div>
            </div>
          </div>
        </div>

        {/* Bottom Divider */}
        <div className="mt-20 flex items-center gap-8">
          <div className="w-16 h-16 bg-orange-600 transform rotate-45"></div>
          <div className="flex-1 h-2 bg-white"></div>
          <div className="w-12 h-12 bg-red-600"></div>
          <div className="flex-1 h-2 bg-white"></div>
          <div className="w-20 h-8 bg-white"></div>
        </div>
      </div>
    </section>
  );
} 