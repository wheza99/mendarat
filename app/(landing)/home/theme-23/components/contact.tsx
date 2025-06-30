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
    console.log('Form submitted:', formData);
    // Handle form submission logic here
  };

  return (
    <section className="py-20 bg-gradient-to-br from-green-50 via-emerald-50 to-green-100 relative overflow-hidden">
      {/* Organic Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="organic-gradient" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#0F5132" stopOpacity="0.3" />
              <stop offset="50%" stopColor="#52734D" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#87A96B" stopOpacity="0.1" />
            </radialGradient>
          </defs>
          <circle cx="20%" cy="30%" r="200" fill="url(#organic-gradient)" />
          <circle cx="80%" cy="70%" r="150" fill="url(#organic-gradient)" />
          <ellipse cx="60%" cy="20%" rx="100" ry="180" fill="url(#organic-gradient)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-green-900 mb-6">
              {copy.contact.title}
            </h2>
            <p className="text-lg text-green-700 max-w-3xl mx-auto">
              {copy.contact.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Form */}
            <div className="bg-white rounded-3xl p-8 shadow-xl border-2 border-green-100 relative group hover:shadow-2xl transition-all duration-300">
              {/* Organic Corner Decorations */}
              <div className="absolute -top-2 -left-2 w-8 h-8 bg-green-400 rounded-full opacity-60 animate-pulse"></div>
              <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-emerald-400 rounded-full opacity-50 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
              
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-green-800 mb-3 flex items-center">
                  <span className="mr-3">🌱</span>
                  Mulai Pertumbuhan Anda
                </h3>
                <p className="text-green-600">
                  Biarkan ide Anda berkembang bersama ekosistem digital kami
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-green-700 font-medium">
                    Nama Lengkap
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="border-green-200 focus:border-green-400 focus:ring-green-400 rounded-xl h-12"
                    placeholder="Masukkan nama lengkap Anda"
                    required
                  />
                </div>

                {/* Email Field */}
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-green-700 font-medium">
                    Email
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="border-green-200 focus:border-green-400 focus:ring-green-400 rounded-xl h-12"
                    placeholder="nama@email.com"
                    required
                  />
                </div>

                {/* Service Selection */}
                <div className="space-y-2">
                  <Label htmlFor="service" className="text-green-700 font-medium">
                    Layanan yang Diminati
                  </Label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full border border-green-200 focus:border-green-400 focus:ring-2 focus:ring-green-400 rounded-xl h-12 px-4 bg-white text-green-700"
                  >
                    <option value="">Pilih layanan</option>
                    <option value="digital-sprouting">Digital Sprouting</option>
                    <option value="organic-branding">Organic Branding</option>
                    <option value="growth-ecosystem">Growth Ecosystem</option>
                    <option value="sustainable-web">Sustainable Web Development</option>
                    <option value="green-marketing">Green Marketing Strategy</option>
                  </select>
                </div>

                {/* Message Field */}
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-green-700 font-medium">
                    Pesan
                  </Label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    className="w-full border border-green-200 focus:border-green-400 focus:ring-2 focus:ring-green-400 rounded-xl px-4 py-3 resize-none"
                    placeholder="Ceritakan tentang proyek atau kebutuhan Anda..."
                    required
                  />
                </div>

                {/* Submit Button */}
                <Button 
                  type="submit"
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-xl font-medium text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  <span className="mr-2">🚀</span>
                  Tumbuhkan Bisnis Sekarang
                </Button>
              </form>
            </div>

            {/* Contact Information & CTA */}
            <div className="space-y-8">
              
              {/* Contact Info Cards */}
              <div className="space-y-6">
                {copy.contact.info.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-2xl p-6 shadow-lg border-2 border-green-100 hover:border-green-200 transition-all duration-300 group hover:scale-105"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-2xl group-hover:bg-green-200 transition-colors">
                          {item.icon}
                        </div>
                      </div>
                                             <div className="flex-1">
                         <h4 className="font-bold text-green-800 mb-1">{item.title}</h4>
                         <p className="text-green-600">{item.content}</p>
                       </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Growth Visualization */}
              <div className="bg-gradient-to-br from-green-100 to-emerald-100 rounded-3xl p-8 border-2 border-green-200">
                <h4 className="text-xl font-bold text-green-800 mb-6 text-center">
                  Jalur Pertumbuhan Anda
                </h4>
                
                <div className="space-y-4">
                  {[
                    { step: 1, title: "Konsultasi", emoji: "🌱", desc: "Diskusi kebutuhan" },
                    { step: 2, title: "Strategi", emoji: "🌿", desc: "Rencana pertumbuhan" },
                    { step: 3, title: "Eksekusi", emoji: "🌳", desc: "Implementasi solusi" },
                    { step: 4, title: "Berkembang", emoji: "🌸", desc: "Hasil yang berkelanjutan" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-4 group">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center font-bold text-green-700 shadow-md group-hover:scale-110 transition-transform">
                          {item.step}
                        </div>
                      </div>
                      <div className="flex-1 flex items-center space-x-3">
                        <span className="text-2xl">{item.emoji}</span>
                        <div>
                          <h5 className="font-semibold text-green-800">{item.title}</h5>
                          <p className="text-sm text-green-600">{item.desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Call to Action */}
              <div className="text-center bg-white rounded-2xl p-8 shadow-lg border-2 border-green-100">
                <div className="mb-4 text-4xl animate-bounce">🌱</div>
                <h4 className="text-xl font-bold text-green-800 mb-3">
                  Siap Menumbuhkan Bisnis Anda?
                </h4>
                <p className="text-green-600 mb-6">
                  Mari bersama-sama menciptakan ekosistem digital yang berkelanjutan
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl">
                    📞 Hubungi Kami
                  </Button>
                  <Button variant="outline" className="border-green-400 text-green-600 hover:bg-green-50 px-6 py-3 rounded-xl">
                    📧 Email Kami
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
