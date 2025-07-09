import React from 'react';

export default function EcoContact() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600 mb-6">
            GET IN TOUCH
          </h2>
          <p className="text-xl text-green-700 max-w-2xl mx-auto">
            Have questions about sustainable living? We're here to help you on your eco journey
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-green-800 mb-6">
                CONNECT WITH US
              </h3>
              <p className="text-green-600 leading-relaxed mb-8">
                Whether you're looking for sustainable products, want to learn about zero-waste living, or need guidance on reducing your environmental impact, our eco-experts are here to support you.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center text-white text-xl">
                  📍
                </div>
                <div>
                  <h4 className="font-bold text-green-800">Eco Headquarters</h4>
                  <p className="text-green-600">123 Green Street, Eco City</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center text-white text-xl">
                  📞
                </div>
                <div>
                  <h4 className="font-bold text-green-800">Call Us</h4>
                  <p className="text-green-600">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-green-600 rounded-lg flex items-center justify-center text-white text-xl">
                  ✉️
                </div>
                <div>
                  <h4 className="font-bold text-green-800">Email Us</h4>
                  <p className="text-green-600">hello@ecoliving.com</p>
                </div>
              </div>
            </div>
            
            {/* Eco certifications */}
            <div className="pt-6">
              <h4 className="font-bold text-green-800 mb-4">OUR CERTIFICATIONS</h4>
              <div className="space-y-2 text-sm">
                <div className="flex items-center">
                  <span className="text-green-600 mr-2">🌱</span>
                  <span className="text-green-700">Certified B Corporation</span>
                </div>
                <div className="flex items-center">
                  <span className="text-green-600 mr-2">♻️</span>
                  <span className="text-green-700">Carbon Neutral Certified</span>
                </div>
                <div className="flex items-center">
                  <span className="text-green-600 mr-2">🌍</span>
                  <span className="text-green-700">Fair Trade Certified</span>
                </div>
                <div className="flex items-center">
                  <span className="text-green-600 mr-2">🌿</span>
                  <span className="text-green-700">Organic Certified</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="relative">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border border-green-200 p-8 backdrop-blur-sm">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-green-800 font-bold mb-2">FIRST NAME</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 bg-white border border-green-200 rounded-lg text-green-800 placeholder-green-400 focus:border-green-400 focus:outline-none transition-colors"
                      placeholder="Your first name"
                    />
                  </div>
                  <div>
                    <label className="block text-green-800 font-bold mb-2">LAST NAME</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 bg-white border border-green-200 rounded-lg text-green-800 placeholder-green-400 focus:border-green-400 focus:outline-none transition-colors"
                      placeholder="Your last name"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-green-800 font-bold mb-2">EMAIL</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 bg-white border border-green-200 rounded-lg text-green-800 placeholder-green-400 focus:border-green-400 focus:outline-none transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label className="block text-green-800 font-bold mb-2">INTEREST AREA</label>
                  <select className="w-full px-4 py-3 bg-white border border-green-200 rounded-lg text-green-800 focus:border-green-400 focus:outline-none transition-colors">
                    <option>Select your interest</option>
                    <option>Zero Waste Living</option>
                    <option>Sustainable Products</option>
                    <option>Eco Workshops</option>
                    <option>Corporate Sustainability</option>
                    <option>Product Reviews</option>
                    <option>General Inquiry</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-green-800 font-bold mb-2">SUSTAINABILITY GOAL</label>
                  <select className="w-full px-4 py-3 bg-white border border-green-200 rounded-lg text-green-800 focus:border-green-400 focus:outline-none transition-colors">
                    <option>Select your goal</option>
                    <option>Reduce Plastic Usage</option>
                    <option>Start Composting</option>
                    <option>Switch to Reusables</option>
                    <option>Learn DIY Products</option>
                    <option>Support Eco Brands</option>
                    <option>Other</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-green-800 font-bold mb-2">EXPERIENCE LEVEL</label>
                  <select className="w-full px-4 py-3 bg-white border border-green-200 rounded-lg text-green-800 focus:border-green-400 focus:outline-none transition-colors">
                    <option>Select your experience</option>
                    <option>Beginner - Just starting</option>
                    <option>Intermediate - Some experience</option>
                    <option>Advanced - Already sustainable</option>
                    <option>Expert - Teaching others</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-green-800 font-bold mb-2">MESSAGE</label>
                  <textarea 
                    rows={4}
                    className="w-full px-4 py-3 bg-white border border-green-200 rounded-lg text-green-800 placeholder-green-400 focus:border-green-400 focus:outline-none transition-colors resize-none"
                    placeholder="Tell us about your sustainability journey..."
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold rounded-lg shadow-lg hover:shadow-green-500/25 transition-all duration-300 transform hover:scale-105"
                >
                  SEND MESSAGE
                </button>
              </form>
            </div>
            
            {/* Nature decoration */}
            <div className="absolute inset-0 bg-gradient-to-r from-green-400/5 to-emerald-400/5 rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
          </div>
        </div>
      </div>
    </section>
  );
} 