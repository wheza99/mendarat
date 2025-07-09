import React from 'react';

export default function TokyoContact() {
  return (
    <section className="py-20 px-4 relative">
      {/* Background with neon effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/60 via-pink-900/60 to-purple-900/60"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-xl text-cyan-200 font-mono">
            🗾 Ready to experience Japanese street culture? 🎌
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact form */}
          <div className="relative">
            <div className="p-8 rounded-2xl bg-gradient-to-br from-pink-900/90 via-purple-900/90 to-cyan-900/90 border border-cyan-400/40">
              
              {/* Neon glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-cyan-500/10"></div>
              
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-cyan-100 mb-6">
                  🏮 Contact Form
                </h3>
                
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-cyan-200 text-sm font-bold mb-2">
                        First Name
                      </label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-3 bg-pink-900/50 border border-cyan-400/30 rounded-lg text-cyan-100 placeholder-cyan-300 focus:border-cyan-400 focus:outline-none transition-all duration-300"
                        placeholder="Enter your first name"
                      />
                    </div>
                    <div>
                      <label className="block text-cyan-200 text-sm font-bold mb-2">
                        Last Name
                      </label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-3 bg-pink-900/50 border border-cyan-400/30 rounded-lg text-cyan-100 placeholder-cyan-300 focus:border-cyan-400 focus:outline-none transition-all duration-300"
                        placeholder="Enter your last name"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-cyan-200 text-sm font-bold mb-2">
                      Email Address
                    </label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-3 bg-pink-900/50 border border-cyan-400/30 rounded-lg text-cyan-100 placeholder-cyan-300 focus:border-cyan-400 focus:outline-none transition-all duration-300"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-cyan-200 text-sm font-bold mb-2">
                      Interest
                    </label>
                    <select className="w-full px-4 py-3 bg-pink-900/50 border border-cyan-400/30 rounded-lg text-cyan-100 focus:border-cyan-400 focus:outline-none transition-all duration-300">
                      <option value="">Select your interest</option>
                      <option value="fashion">Street Fashion</option>
                      <option value="photography">Neon Photography</option>
                      <option value="food">Street Food</option>
                      <option value="art">Street Art</option>
                      <option value="culture">Cultural Tours</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-cyan-200 text-sm font-bold mb-2">
                      Message
                    </label>
                    <textarea 
                      rows={4}
                      className="w-full px-4 py-3 bg-pink-900/50 border border-cyan-400/30 rounded-lg text-cyan-100 placeholder-cyan-300 focus:border-cyan-400 focus:outline-none transition-all duration-300"
                      placeholder="Tell us about your Japanese street culture interests..."
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit"
                    className="w-full px-6 py-4 bg-gradient-to-r from-cyan-500 to-pink-600 text-white font-bold rounded-lg hover:from-cyan-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/50"
                  >
                    🗾 Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Contact info */}
          <div className="space-y-8">
            <div className="p-8 rounded-2xl bg-gradient-to-br from-purple-900/90 via-pink-900/90 to-cyan-900/90 border border-purple-400/40">
              <h3 className="text-2xl font-bold text-purple-100 mb-6">
                🎌 Contact Information
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="text-2xl mr-4 animate-pulse">
                    📧
                  </div>
                  <div>
                    <h4 className="text-purple-200 font-bold">Email</h4>
                    <p className="text-purple-300">info@neontokyo.com</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="text-2xl mr-4 animate-bounce">
                    📱
                  </div>
                  <div>
                    <h4 className="text-purple-200 font-bold">Phone</h4>
                    <p className="text-purple-300">+81 3-1234-5678</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="text-2xl mr-4 animate-spin">
                    📍
                  </div>
                  <div>
                    <h4 className="text-purple-200 font-bold">Address</h4>
                    <p className="text-purple-300">Shibuya, Tokyo, Japan</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="text-2xl mr-4 animate-pulse">
                    ⏰
                  </div>
                  <div>
                    <h4 className="text-purple-200 font-bold">Hours</h4>
                    <p className="text-purple-300">Mon-Sun: 9:00 AM - 10:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social media */}
            <div className="p-6 rounded-xl bg-gradient-to-br from-pink-900/80 via-purple-900/80 to-cyan-900/80 border border-pink-400/40">
              <h3 className="text-xl font-bold text-pink-100 mb-4">
                🏮 Follow Us
              </h3>
              <div className="flex space-x-4">
                <button className="p-3 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                  📘
                </button>
                <button className="p-3 bg-gradient-to-r from-purple-500 to-cyan-600 rounded-lg hover:from-purple-600 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105">
                  📷
                </button>
                <button className="p-3 bg-gradient-to-r from-cyan-500 to-pink-600 rounded-lg hover:from-cyan-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105">
                  🐦
                </button>
                <button className="p-3 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                  📺
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 left-20 text-pink-400 text-2xl animate-bounce">
        🎌
      </div>
      <div className="absolute bottom-20 right-20 text-purple-400 text-2xl animate-pulse">
        🏮
      </div>
      <div className="absolute top-1/2 left-10 text-cyan-400 text-xl animate-spin">
        ⛩️
      </div>
      <div className="absolute top-1/3 right-10 text-pink-300 text-xl animate-bounce">
        🎎
      </div>
    </section>
  );
} 