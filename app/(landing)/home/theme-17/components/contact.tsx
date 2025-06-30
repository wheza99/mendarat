"use client";

import { useState, useEffect } from "react";
import { contactSectionCopy } from "../copy";

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    const element = document.getElementById('contact-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

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
    <section 
      id="contact-section"
      className="relative py-20 lg:py-32 overflow-hidden bg-gradient-to-br from-emerald-50/40 via-sky-50/30 to-white"
    >
      
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-48 h-48 bg-gradient-to-r from-emerald-200/40 to-sky-200/40 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-36 h-36 bg-gradient-to-r from-sky-200/40 to-amber-200/40 rounded-full blur-2xl animate-bounce" style={{ animationDuration: '5s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div 
            className={`transform transition-all duration-1000 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
              {contactSectionCopy.title}
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              {contactSectionCopy.subtitle}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
          
          {/* Contact Info */}
          <div 
            className={`transform transition-all duration-1000 ${
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-16 opacity-0'
            }`}
            style={{ transitionDelay: '0.2s' }}
          >
            <div className="bg-white/40 backdrop-blur-xl border border-white/50 rounded-3xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-slate-800 mb-6">Informasi Kontak</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-emerald-100/80 to-sky-100/80 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/50">
                    <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-1">Alamat</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">{contactSectionCopy.office.address}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-emerald-100/80 to-sky-100/80 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/50">
                    <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-1">Email</h4>
                    <p className="text-slate-600 text-sm">{contactSectionCopy.office.email}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div 
            className={`transform transition-all duration-1000 ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-16 opacity-0'
            }`}
            style={{ transitionDelay: '0.4s' }}
          >
            <div className="bg-white/40 backdrop-blur-xl border border-white/50 rounded-3xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-slate-800 mb-6">Kirim Pesan</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder={contactSectionCopy.form.namePlaceholder}
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/50 backdrop-blur-sm border border-white/60 rounded-2xl text-slate-700 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-400 transition-all duration-300"
                    required
                  />
                </div>
                
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder={contactSectionCopy.form.emailPlaceholder}
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/50 backdrop-blur-sm border border-white/60 rounded-2xl text-slate-700 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-400 transition-all duration-300"
                    required
                  />
                </div>

                <div>
                  <textarea
                    name="message"
                    rows={5}
                    placeholder={contactSectionCopy.form.messagePlaceholder}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/50 backdrop-blur-sm border border-white/60 rounded-2xl text-slate-700 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-400 transition-all duration-300 resize-none"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-emerald-500 to-sky-500 text-white font-semibold text-lg rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
                >
                  {contactSectionCopy.form.submitText}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 