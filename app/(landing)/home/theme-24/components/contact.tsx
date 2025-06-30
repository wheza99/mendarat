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
    service: '',
    budget: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Zen Form submitted:', formData);
    // Handle form submission logic here
  };

  return (
    <section className="py-20 bg-gradient-to-br from-pink-50 via-stone-50 to-rose-50 relative overflow-hidden">
      {/* Zen Garden Background */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="zen-gradient" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#FFB7C5" stopOpacity="0.3" />
              <stop offset="50%" stopColor="#9CAF88" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#2C2C2C" stopOpacity="0.1" />
            </radialGradient>
          </defs>
          
          {/* Zen stones */}
          <ellipse cx="15%" cy="25%" rx="120" ry="80" fill="url(#zen-gradient)" />
          <ellipse cx="85%" cy="70%" rx="100" ry="60" fill="url(#zen-gradient)" />
          <ellipse cx="60%" cy="40%" rx="80" ry="50" fill="url(#zen-gradient)" />
          
          {/* Ripples */}
          <circle cx="30%" cy="60%" r="150" fill="none" stroke="#FFB7C5" strokeWidth="1" opacity="0.2" />
          <circle cx="30%" cy="60%" r="200" fill="none" stroke="#FFB7C5" strokeWidth="1" opacity="0.1" />
          <circle cx="70%" cy="30%" r="100" fill="none" stroke="#9CAF88" strokeWidth="1" opacity="0.2" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16 space-y-6">
            <h2 className="text-4xl md:text-6xl font-light text-stone-800 tracking-wide">
              {copy.contact.title}
            </h2>
            <p className="text-lg text-stone-600 max-w-4xl mx-auto leading-relaxed">
              {copy.contact.subtitle}
            </p>
            
            {/* Traditional Japanese Decoration */}
            <div className="flex items-center justify-center space-x-6 pt-4">
              <div className="text-2xl opacity-60">🏮</div>
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-stone-300 to-transparent"></div>
              <div className="text-2xl opacity-60">🌸</div>
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-stone-300 to-transparent"></div>
              <div className="text-2xl opacity-60">⛩️</div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Form - Zen Style */}
            <div className="relative">
              {/* Form Container */}
              <div className="bg-white/90 backdrop-blur-sm p-8 border-2 border-stone-200 relative">
                {/* Corner Zen Decorations */}
                <div className="absolute -top-2 -left-2 w-4 h-4 bg-pink-300 opacity-60"></div>
                <div className="absolute -bottom-2 -right-2 w-3 h-3 bg-stone-400 opacity-60"></div>
                
                <div className="mb-8 space-y-3">
                  <h3 className="text-2xl font-medium text-stone-800 tracking-wide flex items-center">
                    <span className="mr-3">🌸</span>
                    {copy.contact.form.title}
                  </h3>
                  <p className="text-stone-600 leading-relaxed">
                    {copy.contact.form.subtitle}
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Field */}
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-stone-700 font-light tracking-wide">
                      {copy.contact.form.fields.name}
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="border-stone-200 focus:border-pink-300 focus:ring-pink-300 bg-white/80 h-12 font-light"
                      placeholder="Your full name"
                      required
                    />
                  </div>

                  {/* Email Field */}
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-stone-700 font-light tracking-wide">
                      {copy.contact.form.fields.email}
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="border-stone-200 focus:border-pink-300 focus:ring-pink-300 bg-white/80 h-12 font-light"
                      placeholder="your@email.com"
                      required
                    />
                  </div>

                  {/* Service Selection */}
                  <div className="space-y-2">
                    <Label htmlFor="service" className="text-stone-700 font-light tracking-wide">
                      {copy.contact.form.fields.service}
                    </Label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full border border-stone-200 focus:border-pink-300 focus:ring-2 focus:ring-pink-300 h-12 px-4 bg-white/80 text-stone-700 font-light"
                    >
                      <option value="">Select a service</option>
                      {copy.contact.form.services.map((service, index) => (
                        <option key={index} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>

                  {/* Budget Range */}
                  <div className="space-y-2">
                    <Label htmlFor="budget" className="text-stone-700 font-light tracking-wide">
                      {copy.contact.form.fields.budget}
                    </Label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full border border-stone-200 focus:border-pink-300 focus:ring-2 focus:ring-pink-300 h-12 px-4 bg-white/80 text-stone-700 font-light"
                    >
                      <option value="">Select budget range</option>
                      {copy.contact.form.budgets.map((budget, index) => (
                        <option key={index} value={budget}>{budget}</option>
                      ))}
                    </select>
                  </div>

                  {/* Message Field */}
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-stone-700 font-light tracking-wide">
                      {copy.contact.form.fields.message}
                    </Label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={5}
                      className="w-full border border-stone-200 focus:border-pink-300 focus:ring-2 focus:ring-pink-300 px-4 py-3 bg-white/80 resize-none font-light"
                      placeholder="Share your vision and goals..."
                      required
                    />
                  </div>

                  {/* Submit Button */}
                  <Button 
                    type="submit"
                    className="w-full bg-stone-800 hover:bg-stone-900 text-white py-4 font-light text-lg tracking-wide transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    {copy.contact.form.cta}
                  </Button>
                </form>
              </div>
            </div>

            {/* Contact Information & Philosophy */}
            <div className="space-y-8">
              
              {/* Contact Info Cards */}
              <div className="space-y-6">
                {copy.contact.info.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white/80 backdrop-blur-sm p-6 border border-stone-200 hover:border-pink-200 transition-all duration-300 group"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-stone-100 flex items-center justify-center text-2xl group-hover:bg-pink-50 transition-colors">
                          {item.icon}
                        </div>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-stone-800 mb-2 tracking-wide">{item.title}</h4>
                        <p className="text-stone-600 leading-relaxed text-sm whitespace-pre-line">
                          {item.content}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Zen Philosophy Card */}
              <div className="bg-gradient-to-br from-stone-100 to-pink-100 p-8 border border-stone-200">
                <h4 className="text-xl font-medium text-stone-800 mb-6 text-center tracking-wide">
                  Our Zen Philosophy
                </h4>
                
                <div className="space-y-6">
                  {[
                    { principle: "Mindfulness", emoji: "🧘", desc: "Every decision made with intention" },
                    { principle: "Simplicity", emoji: "🌸", desc: "Beauty found in minimalism" },
                    { principle: "Balance", emoji: "⚖️", desc: "Harmony between form and function" },
                    { principle: "Growth", emoji: "🎋", desc: "Continuous learning and improvement" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-4 group">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 bg-white flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                          <span className="text-lg">{item.emoji}</span>
                        </div>
                      </div>
                      <div className="flex-1">
                        <h5 className="font-medium text-stone-800 tracking-wide">{item.principle}</h5>
                        <p className="text-sm text-stone-600">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Call to Action */}
              <div className="text-center bg-white/80 backdrop-blur-sm p-8 border border-stone-200">
                <div className="mb-4 text-4xl">🏮</div>
                <h4 className="text-xl font-medium text-stone-800 mb-4 tracking-wide">
                  Ready to Begin Your Journey?
                </h4>
                <p className="text-stone-600 mb-6 leading-relaxed">
                  Let's create something beautiful together, one mindful step at a time
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="bg-stone-800 hover:bg-stone-900 text-white px-6 py-3 font-light tracking-wide">
                    🌸 Start Conversation
                  </Button>
                  <Button variant="outline" className="border-stone-300 text-stone-700 hover:bg-stone-50 px-6 py-3 font-light tracking-wide">
                    📧 Send Email
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