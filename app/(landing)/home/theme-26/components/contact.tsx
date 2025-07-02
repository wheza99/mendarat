"use client";

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import copy from '../copy';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    budget: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setSubmitted(true);
    setIsSubmitting(false);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-black to-purple-900/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-400 mb-6">
            {copy.contact.title}
          </h2>
          <p className="text-lg text-gray-300">{copy.contact.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6">
            {copy.contact.info.map((info, index) => (
              <div key={index} className="p-6 border border-cyan-400 bg-cyan-500/10">
                <div className="flex items-start space-x-4">
                  <div className="text-3xl">{info.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold text-cyan-400 mb-2">{info.title}</h3>
                    <p className="text-gray-300 whitespace-pre-line">{info.content}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="p-8 border border-purple-400 bg-purple-500/10">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-purple-400 mb-2">
                {copy.contact.form.title}
              </h3>
              <p className="text-gray-400 text-sm">
                {copy.contact.form.subtitle}
              </p>
            </div>

            {submitted ? (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">✓</div>
                <h3 className="text-2xl font-bold text-green-400 mb-2">
                  Connection Established!
                </h3>
                <p className="text-gray-300">
                  {copy.contact.form.successMessage}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder={copy.contact.form.fields.name}
                    required
                    className="w-full p-4 bg-black border border-cyan-400 text-cyan-300 placeholder-gray-500 focus:border-cyan-300 focus:outline-none"
                  />
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder={copy.contact.form.fields.email}
                    required
                    className="w-full p-4 bg-black border border-pink-400 text-pink-300 placeholder-gray-500 focus:border-pink-300 focus:outline-none"
                  />
                </div>

                <div>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    required
                    className="w-full p-4 bg-black border border-yellow-400 text-yellow-300 focus:border-yellow-300 focus:outline-none"
                  >
                    <option value="">{copy.contact.form.fields.service}</option>
                    {copy.contact.form.services.map((service, index) => (
                      <option key={index} value={service} className="bg-black">
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    required
                    className="w-full p-4 bg-black border border-purple-400 text-purple-300 focus:border-purple-300 focus:outline-none"
                  >
                    <option value="">{copy.contact.form.fields.budget}</option>
                    {copy.contact.form.budgets.map((budget, index) => (
                      <option key={index} value={budget} className="bg-black">
                        {budget}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder={copy.contact.form.fields.message}
                    rows={4}
                    required
                    className="w-full p-4 bg-black border border-cyan-400 text-cyan-300 placeholder-gray-500 focus:border-cyan-300 focus:outline-none resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-4 px-8 border-2 border-purple-400 transition-all duration-300 transform hover:scale-105 disabled:opacity-50"
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
    </section>
  );
} 