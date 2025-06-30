"use client";

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import copy from '../copy';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    service: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Imperial Form submitted:', formData);
    // Handle form submission logic here
  };

  return (
    <section className="py-20 bg-gradient-to-br from-yellow-50 via-amber-50 to-orange-50 relative overflow-hidden">
      {/* Ancient Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="imperial-gradient" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#FFD700" stopOpacity="0.3" />
              <stop offset="50%" stopColor="#CD7F32" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#8B4513" stopOpacity="0.1" />
            </radialGradient>
          </defs>
          {/* Pyramid structures */}
          <polygon points="20,80 40,20 60,80" fill="url(#imperial-gradient)" />
          <polygon points="70,90 90,30 110,90" fill="url(#imperial-gradient)" />
          <polygon points="30,120 50,60 70,120" fill="url(#imperial-gradient)" />
          {/* Roman columns */}
          <rect x="15%" y="20%" width="8" height="60" fill="url(#imperial-gradient)" />
          <rect x="85%" y="30%" width="8" height="50" fill="url(#imperial-gradient)" />
          {/* Hieroglyphs */}
          <text x="60%" y="25%" fontSize="24" fill="url(#imperial-gradient)">𓂀</text>
          <text x="80%" y="75%" fontSize="20" fill="url(#imperial-gradient)">𓊃</text>
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-amber-900 mb-6">
              {copy.contact.title}
            </h2>
            <p className="text-xl text-amber-700 max-w-4xl mx-auto mb-6">
              {copy.contact.subtitle}
            </p>
            <p className="text-lg text-amber-600 max-w-5xl mx-auto">
              {copy.contact.description}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Form - Imperial Style */}
            <div className="bg-gradient-to-br from-amber-50 to-yellow-50 p-8 rounded-xl border-2 border-yellow-200 relative group hover:shadow-2xl transition-all duration-300">
              {/* Imperial Corner Decorations */}
              <div className="absolute -top-2 -left-2 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full opacity-80"></div>
              <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-gradient-to-r from-orange-400 to-yellow-500 rounded-full opacity-70"></div>
              
              <div className="mb-8">
                <h3 className="text-3xl font-bold text-amber-900 mb-4 flex items-center">
                  <span className="mr-3 text-4xl">👑</span>
                  Start Your Imperial Consultation
                </h3>
                <p className="text-amber-700 text-lg">
                  Mulai journey untuk membangun digital empire Anda dengan wisdom ancient civilizations
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-amber-800 font-bold text-lg">
                    Imperial Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="border-2 border-yellow-300 focus:border-yellow-500 focus:ring-yellow-500 bg-white h-12 text-lg"
                    placeholder="Enter your name, future emperor"
                    required
                  />
                </div>

                {/* Email Field */}
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-amber-800 font-bold text-lg">
                    Oracle Email
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="border-2 border-yellow-300 focus:border-yellow-500 focus:ring-yellow-500 bg-white h-12 text-lg"
                    placeholder="emperor@yourempire.com"
                    required
                  />
                </div>

                {/* Service Selection */}
                <div className="space-y-2">
                  <Label htmlFor="service" className="text-amber-800 font-bold text-lg">
                    Divine Service Required
                  </Label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full border-2 border-yellow-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500 h-12 px-4 bg-white text-amber-800 text-lg rounded-lg"
                  >
                    <option value="">Select your divine service</option>
                    <option value="pharaoh-web">🏛️ Pharaoh Web Architecture</option>
                    <option value="caesar-mobile">📱 Caesar Mobile Empire</option>
                    <option value="athena-wisdom">🦉 Athena Digital Wisdom</option>
                    <option value="hermes-cloud">☁️ Hermes Cloud Messenger</option>
                    <option value="apollo-brand">☀️ Apollo Brand Illumination</option>
                    <option value="minerva-commerce">🛒 Minerva E-Commerce</option>
                  </select>
                </div>

                {/* Message Field */}
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-amber-800 font-bold text-lg">
                    Divine Vision & Imperial Goals
                  </Label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    className="w-full border-2 border-yellow-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500 px-4 py-3 bg-white resize-none text-lg rounded-lg"
                    placeholder="Share your vision for digital empire dominance..."
                    required
                  />
                </div>

                {/* Submit Button */}
                <Button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-700 hover:to-orange-700 text-white py-4 rounded-lg font-bold text-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  <span className="mr-3 text-2xl">⚡</span>
                  {copy.contact.form.submit}
                </Button>
              </form>
            </div>

            {/* Contact Information & Imperial Benefits */}
            <div className="space-y-8">
              
              {/* Contact Info Cards */}
              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-amber-900 mb-6 text-center">
                  Imperial Contact Information
                </h3>
                {copy.contact.info.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white p-6 rounded-xl shadow-lg border-2 border-yellow-200 hover:border-yellow-300 transition-all duration-300 group hover:scale-105"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-14 h-14 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center text-2xl shadow-md">
                          {item.icon}
                        </div>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-amber-800 text-lg mb-2">{item.title}</h4>
                        <p className="text-amber-600 leading-relaxed whitespace-pre-line">{item.content}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Imperial Benefits */}
              <div className="bg-gradient-to-br from-amber-100 to-yellow-100 rounded-xl p-8 border-2 border-yellow-200">
                <h4 className="text-2xl font-bold text-amber-900 mb-6 text-center">
                  Imperial Benefits
                </h4>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {copy.contact.benefits.map((benefit, index) => (
                    <div key={index} className="bg-white p-6 rounded-lg border-2 border-yellow-200 hover:shadow-lg transition-all duration-300">
                      <h5 className="font-bold text-amber-800 text-lg mb-2">
                        {benefit.title}
                      </h5>
                      <p className="text-amber-600">
                        {benefit.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Call to Action */}
              <div className="text-center bg-gradient-to-br from-yellow-100 to-amber-100 rounded-xl p-8 border-2 border-yellow-200">
                <div className="mb-4 text-5xl">👑</div>
                <h4 className="text-2xl font-bold text-amber-900 mb-4">
                  Ready to Build Your Digital Empire?
                </h4>
                <p className="text-amber-700 mb-6 text-lg">
                  Join the ranks of legendary digital emperors. Your conquest begins now.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-700 hover:to-orange-700 text-white px-8 py-3 rounded-lg font-bold text-lg">
                    🏛️ Start Imperial Consultation
                  </Button>
                  <Button variant="outline" className="border-2 border-amber-400 text-amber-700 hover:bg-amber-50 px-8 py-3 rounded-lg font-bold text-lg">
                    📜 View Our Conquests
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
