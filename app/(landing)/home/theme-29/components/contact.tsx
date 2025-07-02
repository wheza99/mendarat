"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setFormData({ name: "", email: "", company: "", message: "" });
  };

  const contactInfo = [
    {
      icon: "🌱",
      title: "Plant a Seed",
      description: "Start your digital growth journey",
      detail: "hello@ecosystem.digital",
      color: "from-green-400 to-emerald-600",
      bgColor: "from-green-50 to-emerald-100"
    },
    {
      icon: "🌿",
      title: "Nurture Partnership",
      description: "Grow together sustainably",
      detail: "+1 (555) GROW-ECO",
      color: "from-emerald-400 to-teal-600",
      bgColor: "from-emerald-50 to-teal-100"
    },
    {
      icon: "🌳",
      title: "Visit Our Garden",
      description: "Experience our ecosystem firsthand",
      detail: "123 Green Valley, EcoCity",
      color: "from-teal-400 to-cyan-600",
      bgColor: "from-teal-50 to-cyan-100"
    },
    {
      icon: "🌸",
      title: "Flourish Together",
      description: "Join our growing community",
      detail: "@EcoDigitalGarden",
      color: "from-cyan-400 to-blue-600",
      bgColor: "from-cyan-50 to-blue-100"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-green-50 to-white relative overflow-hidden">
      {/* Organic Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-green-200 to-emerald-300 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-gradient-to-br from-teal-200 to-cyan-300 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-br from-emerald-200 to-teal-300 rounded-full blur-2xl animate-pulse"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-100 to-emerald-200 rounded-full mb-6">
            <span className="text-3xl">💬</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
              Let's Cultivate Together
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to plant the seeds of your digital transformation? Let's nurture your ideas 
            and grow them into a thriving ecosystem.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gradient-to-br from-white to-green-50 rounded-3xl p-8 shadow-xl border border-green-100 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <svg className="w-full h-full" viewBox="0 0 100 100">
                <path d="M20,80 Q50,20 80,80 Q50,60 20,80" fill="currentColor" className="text-green-600" />
                <path d="M30,70 Q50,40 70,70" stroke="currentColor" strokeWidth="2" fill="none" className="text-emerald-600" />
              </svg>
            </div>

            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <span className="text-3xl mr-3">🌱</span>
                Start Your Growth Journey
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div className="relative">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name *
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField(null)}
                      required
                      className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 focus:outline-none ${
                        focusedField === 'name' 
                          ? 'border-green-400 bg-green-50' 
                          : 'border-gray-200 bg-white hover:border-green-300'
                      }`}
                      placeholder="Enter your name"
                    />
                    {focusedField === 'name' && (
                      <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-green-500 animate-pulse">
                        🌿
                      </div>
                    )}
                  </div>
                </div>

                {/* Email Field */}
                <div className="relative">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField(null)}
                      required
                      className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 focus:outline-none ${
                        focusedField === 'email' 
                          ? 'border-emerald-400 bg-emerald-50' 
                          : 'border-gray-200 bg-white hover:border-emerald-300'
                      }`}
                      placeholder="your@email.com"
                    />
                    {focusedField === 'email' && (
                      <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-emerald-500 animate-pulse">
                        🌱
                      </div>
                    )}
                  </div>
                </div>

                {/* Company Field */}
                <div className="relative">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Company/Organization
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField('company')}
                      onBlur={() => setFocusedField(null)}
                      className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 focus:outline-none ${
                        focusedField === 'company' 
                          ? 'border-teal-400 bg-teal-50' 
                          : 'border-gray-200 bg-white hover:border-teal-300'
                      }`}
                      placeholder="Your company name"
                    />
                    {focusedField === 'company' && (
                      <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-teal-500 animate-pulse">
                        🌳
                      </div>
                    )}
                  </div>
                </div>

                {/* Message Field */}
                <div className="relative">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Message *
                  </label>
                  <div className="relative">
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField(null)}
                      required
                      rows={4}
                      className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 focus:outline-none resize-none ${
                        focusedField === 'message' 
                          ? 'border-cyan-400 bg-cyan-50' 
                          : 'border-gray-200 bg-white hover:border-cyan-300'
                      }`}
                      placeholder="Tell us about your project and how we can help your digital ecosystem grow..."
                    />
                    {focusedField === 'message' && (
                      <div className="absolute right-3 top-3 text-cyan-500 animate-pulse">
                        🌸
                      </div>
                    )}
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 rounded-xl font-semibold text-lg transition-all duration-300 relative overflow-hidden ${
                    isSubmitting
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-gradient-to-r from-green-500 to-emerald-600 hover:from-emerald-500 hover:to-teal-600 text-white hover:scale-105 hover:shadow-xl'
                  }`}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <div className="animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2"></div>
                      Planting Seeds...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center">
                      Plant Your Message
                      <span className="ml-2 text-xl">🌱</span>
                    </span>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-8 flex items-center">
              <span className="text-3xl mr-3">🌿</span>
              Connect With Our Ecosystem
            </h3>

            {contactInfo.map((info, index) => (
              <div
                key={index}
                className={`group bg-gradient-to-br ${info.bgColor} rounded-2xl p-6 transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer relative overflow-hidden`}
              >
                {/* Background Elements */}
                <div className="absolute -top-2 -right-2 w-12 h-12 bg-white/20 rounded-full blur-sm"></div>
                <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-white/30 rounded-full blur-sm"></div>

                <div className="relative z-10 flex items-start space-x-4">
                  <div className="text-3xl transform group-hover:scale-110 transition-transform duration-300">
                    {info.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className={`text-lg font-bold mb-1 bg-gradient-to-r ${info.color} bg-clip-text text-transparent`}>
                      {info.title}
                    </h4>
                    <p className="text-gray-600 text-sm mb-2">
                      {info.description}
                    </p>
                    <p className="text-gray-800 font-medium">
                      {info.detail}
                    </p>
                  </div>
                  <div className="text-gray-400 group-hover:text-gray-600 transition-colors duration-300">
                    →
                  </div>
                </div>
              </div>
            ))}

            {/* Growing Together Section */}
            <div className="bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl p-6 border border-green-200">
              <h4 className="text-lg font-bold text-gray-800 mb-3 flex items-center">
                <span className="text-2xl mr-2">🤝</span>
                Growing Together
              </h4>
              <p className="text-gray-700 text-sm leading-relaxed">
                We believe in sustainable partnerships that flourish over time. 
                When you succeed, our ecosystem thrives. Let's cultivate something 
                beautiful together that makes a lasting positive impact.
              </p>
              <div className="mt-4 flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm text-gray-600">Currently growing with 180+ partners</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 border border-green-100">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Ready to Transform Your Digital Landscape? 🌍
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Join the growing movement of businesses creating sustainable digital ecosystems. 
              Let's plant the seeds of innovation together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
                <span>Schedule a Growth Session</span>
                <div className="ml-2 text-xl group-hover:animate-bounce">📅</div>
              </button>
              <button className="group inline-flex items-center px-8 py-4 border-2 border-green-500 text-green-600 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-green-50 hover:scale-105">
                <span>Download Ecosystem Guide</span>
                <div className="ml-2 text-lg group-hover:animate-pulse">📖</div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 