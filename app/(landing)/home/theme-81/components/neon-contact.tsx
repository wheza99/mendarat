import React from 'react';

export default function NeonContact() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Deco Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-pink-900/50 via-transparent to-orange-900/50"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,#ec4899_0%,transparent_50%)] opacity-30"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-4 bg-gradient-to-r from-pink-800/90 to-orange-800/90 backdrop-blur-xl border border-pink-400 rounded-lg px-6 py-3 shadow-2xl mb-8">
            <div className="w-3 h-3 bg-gradient-to-r from-pink-400 to-orange-400 rounded-full animate-deco-pulse"></div>
            <span className="text-pink-300 font-light text-sm tracking-wider">CONTACT</span>
            <div className="w-3 h-3 bg-gradient-to-r from-orange-400 to-purple-400 rounded-full animate-deco-pulse" style={{ animationDelay: '0.5s' }}></div>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-pink-400 via-orange-400 to-purple-400 bg-clip-text text-transparent">
              NEON CONTACT
            </span>
          </h2>
          
          <p className="text-xl text-pink-300 max-w-3xl mx-auto font-light">
            Get in touch to discuss your Art Deco neon gradient project requirements
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="relative group">
            <div className="bg-gradient-to-br from-purple-800/90 to-pink-800/90 backdrop-blur-xl border border-purple-400 rounded-lg p-8 shadow-2xl hover:shadow-purple-500/25 transition-all duration-500">
              <h3 className="text-2xl font-bold text-purple-200 mb-6">SEND MESSAGE</h3>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-purple-300 text-sm font-medium mb-2">First Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-purple-900/50 border border-purple-400 rounded-lg text-purple-200 placeholder-purple-400 focus:outline-none focus:border-pink-400 focus:ring-2 focus:ring-pink-400/20 transition-all duration-300"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div>
                    <label className="block text-purple-300 text-sm font-medium mb-2">Last Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-purple-900/50 border border-purple-400 rounded-lg text-purple-200 placeholder-purple-400 focus:outline-none focus:border-pink-400 focus:ring-2 focus:ring-pink-400/20 transition-all duration-300"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-purple-300 text-sm font-medium mb-2">Email Address</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-purple-900/50 border border-purple-400 rounded-lg text-purple-200 placeholder-purple-400 focus:outline-none focus:border-pink-400 focus:ring-2 focus:ring-pink-400/20 transition-all duration-300"
                    placeholder="Enter your email address"
                  />
                </div>
                
                <div>
                  <label className="block text-purple-300 text-sm font-medium mb-2">Project Type</label>
                  <select className="w-full px-4 py-3 bg-purple-900/50 border border-purple-400 rounded-lg text-purple-200 focus:outline-none focus:border-pink-400 focus:ring-2 focus:ring-pink-400/20 transition-all duration-300">
                    <option value="">Select project type</option>
                    <option value="web-design">Web Design</option>
                    <option value="branding">Branding</option>
                    <option value="development">Development</option>
                    <option value="consultation">Consultation</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-purple-300 text-sm font-medium mb-2">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 bg-purple-900/50 border border-purple-400 rounded-lg text-purple-200 placeholder-purple-400 focus:outline-none focus:border-pink-400 focus:ring-2 focus:ring-pink-400/20 transition-all duration-300 resize-none"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>
                
                <button className="w-full py-3 px-6 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25">
                  SEND MESSAGE
                </button>
              </form>
              
              {/* Deco Corner Elements */}
              <div className="absolute -top-2 -left-2 w-4 h-4 border-2 border-purple-400 rounded-lg animate-deco-pulse"></div>
              <div className="absolute -top-2 -right-2 w-4 h-4 border-2 border-purple-400 rounded-lg animate-deco-pulse" style={{ animationDelay: '0.5s' }}></div>
              <div className="absolute -bottom-2 -left-2 w-4 h-4 border-2 border-purple-400 rounded-lg animate-deco-pulse" style={{ animationDelay: '1s' }}></div>
              <div className="absolute -bottom-2 -right-2 w-4 h-4 border-2 border-purple-400 rounded-lg animate-deco-pulse" style={{ animationDelay: '1.5s' }}></div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Info Cards */}
            <div className="space-y-6">
              <div className="relative group">
                <div className="bg-gradient-to-br from-pink-800/90 to-orange-800/90 backdrop-blur-xl border border-pink-400 rounded-lg p-6 shadow-2xl hover:shadow-pink-500/25 transition-all duration-500 transform hover:scale-105">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-pink-600 to-orange-600 rounded-lg flex items-center justify-center animate-deco-pulse">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-pink-200 mb-1">Email Address</h4>
                      <p className="text-pink-300 font-light">hello@deconeon.com</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative group">
                <div className="bg-gradient-to-br from-orange-800/90 to-purple-800/90 backdrop-blur-xl border border-orange-400 rounded-lg p-6 shadow-2xl hover:shadow-orange-500/25 transition-all duration-500 transform hover:scale-105">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-600 to-purple-600 rounded-lg flex items-center justify-center animate-deco-pulse" style={{ animationDelay: '0.3s' }}>
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-orange-200 mb-1">Phone Number</h4>
                      <p className="text-orange-300 font-light">+1 (555) 123-4567</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative group">
                <div className="bg-gradient-to-br from-purple-800/90 to-pink-800/90 backdrop-blur-xl border border-purple-400 rounded-lg p-6 shadow-2xl hover:shadow-purple-500/25 transition-all duration-500 transform hover:scale-105">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center animate-deco-pulse" style={{ animationDelay: '0.6s' }}>
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-purple-200 mb-1">Office Address</h4>
                      <p className="text-purple-300 font-light">123 Deco Street, Neon City, NC 12345</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="relative group">
              <div className="bg-gradient-to-br from-pink-800/90 to-orange-800/90 backdrop-blur-xl border border-pink-400 rounded-lg p-6 shadow-2xl hover:shadow-pink-500/25 transition-all duration-500">
                <h4 className="text-lg font-semibold text-pink-200 mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  {[
                    { name: 'Twitter', color: 'pink', icon: '𝕏' },
                    { name: 'Instagram', color: 'orange', icon: '📷' },
                    { name: 'LinkedIn', color: 'purple', icon: '💼' },
                    { name: 'Dribbble', color: 'pink', icon: '🏀' }
                  ].map((social, index) => (
                    <a
                      key={index}
                      href="#"
                      className={`w-12 h-12 bg-gradient-to-r from-${social.color}-600 to-${social.color}-700 hover:from-${social.color}-500 hover:to-${social.color}-600 rounded-lg flex items-center justify-center text-white font-bold transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-${social.color}-500/25`}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Deco Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 8 }, (_, i) => (
          <div
            key={`floating-${i}`}
            className="absolute animate-deco-float"
            style={{
              left: `${10 + (i % 4) * 20}%`,
              top: `${20 + Math.floor(i / 4) * 30}%`,
              animationDelay: `${i * 0.2}s`,
              animationDuration: `${6 + Math.random() * 3}s`
            }}
          >
            <div className={`w-6 h-6 border-2 border-${['purple', 'pink', 'orange'][i % 3]}-400 rounded-lg animate-deco-spin`}></div>
          </div>
        ))}
      </div>

      {/* Deco Rays */}
      <div className="absolute top-1/3 right-1/4 w-32 h-32">
        {Array.from({ length: 6 }, (_, i) => (
          <div
            key={`ray-${i}`}
            className="absolute w-1 h-16 bg-gradient-to-t from-pink-400 to-transparent animate-deco-ray"
            style={{
              left: '50%',
              top: '50%',
              transform: `translate(-50%, -50%) rotate(${i * 60}deg)`,
              animationDelay: `${i * 0.1}s`
            }}
          />
        ))}
      </div>

      {/* Deco Particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 25 }, (_, i) => (
          <div
            key={`particle-${i}`}
            className="absolute w-1 h-1 rounded-full animate-deco-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `radial-gradient(circle, ${['#a855f7', '#ec4899', '#f97316'][Math.floor(Math.random() * 3)]}, transparent)`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${8 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>
    </section>
  );
} 