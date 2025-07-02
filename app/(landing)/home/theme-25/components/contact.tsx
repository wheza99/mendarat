"use client";

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import copy from '../copy';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: '',
    budget: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [matrixRain, setMatrixRain] = useState<Array<{id: number, char: string, x: number, y: number}>>([]);

  // Matrix Rain Effect
  useEffect(() => {
    const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
    const newRain: Array<{id: number, char: string, x: number, y: number}> = [];
    
    for (let i = 0; i < 50; i++) {
      newRain.push({
        id: i,
        char: chars[Math.floor(Math.random() * chars.length)],
        x: Math.random() * 100,
        y: Math.random() * 100
      });
    }
    
    setMatrixRain(newRain);

    const interval = setInterval(() => {
      setMatrixRain(prev => prev.map(item => ({
        ...item,
        char: chars[Math.floor(Math.random() * chars.length)],
        y: (item.y + 1) % 100
      })));
    }, 200);

    return () => clearInterval(interval);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        service: '',
        message: '',
        budget: ''
      });
    }, 3000);
  };

  return (
    <section className="py-20 bg-black relative overflow-hidden">
      {/* Matrix Rain Background */}
      <div className="absolute inset-0 opacity-5">
        {matrixRain.map((item) => (
          <div
            key={item.id}
            className="absolute text-green-400 font-mono text-sm animate-pulse"
            style={{
              left: `${item.x}%`,
              top: `${item.y}%`,
              textShadow: '0 0 10px #00ff00'
            }}
          >
            {item.char}
          </div>
        ))}
      </div>

      {/* Animated Borders */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent animate-pulse" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-pink-500 to-transparent animate-pulse" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 mb-6 font-mono tracking-wider">
              {copy.contact.title}
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
              {copy.contact.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Info */}
            <div className="space-y-8">
              {copy.contact.info.map((info, index) => (
                <div
                  key={index}
                  className="relative group p-6 border-2 border-cyan-500/30 bg-black/50 backdrop-blur-sm hover:border-cyan-500/60 hover:bg-cyan-500/5 transition-all duration-300 hover:scale-105"
                  style={{
                    background: 'linear-gradient(135deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.6) 100%)',
                    backdropFilter: 'blur(10px)'
                  }}
                >
                  {/* Corner Brackets */}
                  <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-cyan-500 opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-cyan-500 opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-cyan-500 opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-cyan-500 opacity-60 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="flex items-start space-x-4">
                    <div 
                      className="text-3xl transform group-hover:scale-110 transition-transform duration-300"
                      style={{
                        filter: 'drop-shadow(0 0 10px #00ffff)'
                      }}
                    >
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-cyan-400 font-mono mb-2 group-hover:text-cyan-300 transition-colors duration-300">
                        {info.title}
                      </h3>
                      <p className="text-gray-300 font-mono text-sm leading-relaxed whitespace-pre-line group-hover:text-gray-200 transition-colors duration-300">
                        {info.content}
                      </p>
                    </div>
                  </div>

                  {/* Scanning Line */}
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div 
                      className="absolute w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{
                        animation: 'scan-contact 2s linear infinite',
                        boxShadow: '0 0 10px #00ffff'
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Contact Form */}
            <div className="relative">
              <div 
                className="p-8 border-2 border-purple-500/30 bg-black/50 backdrop-blur-sm"
                style={{
                  background: 'linear-gradient(135deg, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.7) 100%)',
                  backdropFilter: 'blur(10px)'
                }}
              >
                {/* Corner Brackets */}
                <div className="absolute top-2 left-2 w-6 h-6 border-l-2 border-t-2 border-purple-500 opacity-60" />
                <div className="absolute top-2 right-2 w-6 h-6 border-r-2 border-t-2 border-purple-500 opacity-60" />
                <div className="absolute bottom-2 left-2 w-6 h-6 border-l-2 border-b-2 border-purple-500 opacity-60" />
                <div className="absolute bottom-2 right-2 w-6 h-6 border-r-2 border-b-2 border-purple-500 opacity-60" />

                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-purple-400 font-mono mb-2">
                    {copy.contact.form.title}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    {copy.contact.form.subtitle}
                  </p>
                </div>

                {submitted ? (
                  <div className="text-center py-12">
                    <div className="text-6xl mb-4 animate-pulse">✓</div>
                    <h3 className="text-2xl font-bold text-green-400 font-mono mb-2">
                      Connection Established!
                    </h3>
                    <p className="text-gray-300">
                      {copy.contact.form.successMessage}
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name */}
                    <div className="relative">
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder={copy.contact.form.fields.name}
                        required
                        className="w-full p-4 bg-black/50 border-2 border-cyan-500/30 text-cyan-300 placeholder-gray-500 font-mono focus:border-cyan-500 focus:outline-none transition-all duration-300"
                        style={{
                          background: 'linear-gradient(135deg, rgba(0,0,0,0.8) 0%, rgba(0,255,255,0.05) 100%)',
                          boxShadow: 'inset 0 0 20px rgba(0,0,0,0.5)'
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-transparent to-cyan-500/10 opacity-0 focus-within:opacity-100 transition-opacity duration-300 pointer-events-none" />
                    </div>

                    {/* Email */}
                    <div className="relative">
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder={copy.contact.form.fields.email}
                        required
                        className="w-full p-4 bg-black/50 border-2 border-pink-500/30 text-pink-300 placeholder-gray-500 font-mono focus:border-pink-500 focus:outline-none transition-all duration-300"
                        style={{
                          background: 'linear-gradient(135deg, rgba(0,0,0,0.8) 0%, rgba(255,0,255,0.05) 100%)',
                          boxShadow: 'inset 0 0 20px rgba(0,0,0,0.5)'
                        }}
                      />
                    </div>

                    {/* Service */}
                    <div className="relative">
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        required
                        className="w-full p-4 bg-black/50 border-2 border-green-500/30 text-green-300 font-mono focus:border-green-500 focus:outline-none transition-all duration-300"
                        style={{
                          background: 'linear-gradient(135deg, rgba(0,0,0,0.8) 0%, rgba(0,255,0,0.05) 100%)',
                          boxShadow: 'inset 0 0 20px rgba(0,0,0,0.5)'
                        }}
                      >
                        <option value="">{copy.contact.form.fields.service}</option>
                        {copy.contact.form.services.map((service, index) => (
                          <option key={index} value={service} className="bg-black">
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Budget */}
                    <div className="relative">
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        required
                        className="w-full p-4 bg-black/50 border-2 border-purple-500/30 text-purple-300 font-mono focus:border-purple-500 focus:outline-none transition-all duration-300"
                        style={{
                          background: 'linear-gradient(135deg, rgba(0,0,0,0.8) 0%, rgba(128,0,128,0.05) 100%)',
                          boxShadow: 'inset 0 0 20px rgba(0,0,0,0.5)'
                        }}
                      >
                        <option value="">{copy.contact.form.fields.budget}</option>
                        {copy.contact.form.budgets.map((budget, index) => (
                          <option key={index} value={budget} className="bg-black">
                            {budget}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Message */}
                    <div className="relative">
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder={copy.contact.form.fields.message}
                        rows={4}
                        required
                        className="w-full p-4 bg-black/50 border-2 border-cyan-500/30 text-cyan-300 placeholder-gray-500 font-mono focus:border-cyan-500 focus:outline-none transition-all duration-300 resize-none"
                        style={{
                          background: 'linear-gradient(135deg, rgba(0,0,0,0.8) 0%, rgba(0,255,255,0.05) 100%)',
                          boxShadow: 'inset 0 0 20px rgba(0,0,0,0.5)'
                        }}
                      />
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-4 px-8 font-mono border-2 border-purple-400 shadow-lg shadow-purple-500/25 hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                      style={{
                        textShadow: '0 0 10px rgba(0,0,0,0.5)',
                        boxShadow: '0 0 20px rgba(128,0,128,0.3), inset 0 0 20px rgba(255,255,255,0.1)'
                      }}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center">
                          <span className="animate-spin mr-2">⚡</span>
                          Processing...
                        </span>
                      ) : (
                        copy.contact.form.submitText
                      )}
                    </Button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scan-contact {
          0% { top: 0; }
          100% { top: 100%; }
        }
      `}</style>
    </section>
  );
} 