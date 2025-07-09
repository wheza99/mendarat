import React from 'react';

export default function IslandContact() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-blue-700 to-teal-600">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            <span className="text-cyan-200">Book</span> Your Paradise
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Ready to experience the ultimate tropical getaway? Contact us to start planning your dream island vacation
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-3xl font-bold text-white mb-6">🌊 Contact Info</h3>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="text-2xl">📞</div>
                  <div>
                    <div className="text-white font-semibold">Phone</div>
                    <div className="text-blue-100">+1 (555) 123-4567</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="text-2xl">📧</div>
                  <div>
                    <div className="text-white font-semibold">Email</div>
                    <div className="text-blue-100">hello@tropicalparadise.com</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="text-2xl">📍</div>
                  <div>
                    <div className="text-white font-semibold">Address</div>
                    <div className="text-blue-100">123 Paradise Beach Road<br />Tropical Island, TI 12345</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="text-2xl">🕒</div>
                  <div>
                    <div className="text-white font-semibold">Hours</div>
                    <div className="text-blue-100">24/7 Support Available</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
                <div className="text-3xl font-bold text-teal-200 mb-2">500+</div>
                <div className="text-blue-100 text-sm">Happy Travelers</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
                <div className="text-3xl font-bold text-cyan-200 mb-2">50+</div>
                <div className="text-blue-100 text-sm">Destinations</div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h3 className="text-3xl font-bold text-white mb-6">🏝️ Get Started</h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white font-semibold mb-2">First Name</label>
                  <input 
                    type="text" 
                    className="w-full bg-white/20 border border-white/30 rounded-lg px-4 py-3 text-white placeholder-blue-200 focus:outline-none focus:border-cyan-300"
                    placeholder="Your first name"
                  />
                </div>
                <div>
                  <label className="block text-white font-semibold mb-2">Last Name</label>
                  <input 
                    type="text" 
                    className="w-full bg-white/20 border border-white/30 rounded-lg px-4 py-3 text-white placeholder-blue-200 focus:outline-none focus:border-cyan-300"
                    placeholder="Your last name"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-white font-semibold mb-2">Email</label>
                <input 
                  type="email" 
                  className="w-full bg-white/20 border border-white/30 rounded-lg px-4 py-3 text-white placeholder-blue-200 focus:outline-none focus:border-cyan-300"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label className="block text-white font-semibold mb-2">Destination Interest</label>
                <select className="w-full bg-white/20 border border-white/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-300">
                  <option className="bg-blue-700">Select a destination</option>
                  <option className="bg-blue-700">Bali Paradise</option>
                  <option className="bg-blue-700">Maldives Escape</option>
                  <option className="bg-blue-700">Hawaiian Dreams</option>
                  <option className="bg-blue-700">Caribbean Bliss</option>
                  <option className="bg-blue-700">Fiji Adventure</option>
                  <option className="bg-blue-700">Seychelles Luxury</option>
                </select>
              </div>
              
              <div>
                <label className="block text-white font-semibold mb-2">Message</label>
                <textarea 
                  rows={4}
                  className="w-full bg-white/20 border border-white/30 rounded-lg px-4 py-3 text-white placeholder-blue-200 focus:outline-none focus:border-cyan-300"
                  placeholder="Tell us about your dream vacation..."
                ></textarea>
              </div>
              
              <button 
                type="submit"
                className="w-full bg-white text-teal-600 hover:bg-teal-50 font-semibold py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                🌊 Send Message
              </button>
            </form>
          </div>
        </div>
        
        {/* Tropical decoration */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-4 text-white/60">
            <span className="text-2xl animate-pulse">🏝️</span>
            <span className="text-lg font-light">YOUR TROPICAL ADVENTURE STARTS HERE</span>
            <span className="text-2xl animate-bounce">🌊</span>
          </div>
        </div>
      </div>
    </section>
  );
} 