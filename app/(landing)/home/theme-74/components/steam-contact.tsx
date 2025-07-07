import React from 'react';

export default function SteamContact() {
  return (
    <section className="relative py-24 bg-gradient-to-br from-amber-900 via-orange-900 to-amber-900 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-900 via-orange-900 to-amber-900"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#f59e0b_0%,transparent_50%)] bg-[length:100px_100px] animate-steam-gear"></div>
        </div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 mb-6 bg-gradient-to-br from-amber-800/80 to-orange-800/80 backdrop-blur-xl border border-amber-400 rounded-lg">
            <div className="w-2 h-2 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full mr-2 animate-steam-pulse"></div>
            <span className="text-sm font-bold text-amber-400 tracking-wider">
              STEAM CONTACT
            </span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            <span className="block">Start Your</span>
            <span className="block bg-gradient-to-r from-amber-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
              Steam Journey
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Ready to revolutionize your industrial processes with steam-powered innovation? 
            Contact our steam engineers today for a consultation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="relative">
            <div className="bg-gradient-to-br from-amber-800/60 to-orange-800/60 backdrop-blur-xl border-2 border-gray-600 rounded-xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-white mb-6">Send Steam Message</h3>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">First Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-gradient-to-br from-amber-800/40 to-orange-800/40 backdrop-blur-xl border-2 border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-amber-400 focus:outline-none transition-colors duration-300"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Last Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-gradient-to-br from-amber-800/40 to-orange-800/40 backdrop-blur-xl border-2 border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-amber-400 focus:outline-none transition-colors duration-300"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-gradient-to-br from-amber-800/40 to-orange-800/40 backdrop-blur-xl border-2 border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-amber-400 focus:outline-none transition-colors duration-300"
                    placeholder="Enter your email address"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Steam Project Type</label>
                  <select className="w-full px-4 py-3 bg-gradient-to-br from-amber-800/40 to-orange-800/40 backdrop-blur-xl border-2 border-gray-600 rounded-lg text-white focus:border-amber-400 focus:outline-none transition-colors duration-300">
                    <option value="">Select project type</option>
                    <option value="steam-engine">Steam Engine Manufacturing</option>
                    <option value="brass-gears">Brass Gear Production</option>
                    <option value="copper-piping">Copper Piping Systems</option>
                    <option value="victorian-design">Victorian Design Consultation</option>
                    <option value="industrial-automation">Industrial Automation</option>
                    <option value="pressure-control">Pressure Control Systems</option>
                    <option value="custom">Custom Steam Solution</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 bg-gradient-to-br from-amber-800/40 to-orange-800/40 backdrop-blur-xl border-2 border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-amber-400 focus:outline-none transition-colors duration-300 resize-none"
                    placeholder="Describe your steam-powered project requirements..."
                  ></textarea>
                </div>
                
                <button className="group relative w-full px-8 py-4 bg-gradient-to-r from-amber-400 to-orange-400 text-white font-bold rounded-lg shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 border-2 border-amber-400">
                  <span className="relative z-10">Send Steam Message</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-red-400 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Steam Engineers */}
            <div className="bg-gradient-to-br from-amber-800/60 to-orange-800/60 backdrop-blur-xl border-2 border-gray-600 rounded-xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-white mb-6">Steam Engineers</h3>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full mr-3 animate-steam-pulse"></div>
                  <span className="text-gray-300">Chief Steam Engineer</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-gradient-to-r from-orange-400 to-red-400 rounded-full mr-3 animate-steam-pulse"></div>
                  <span className="text-gray-300">Brass Gear Specialist</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-gradient-to-r from-red-400 to-amber-400 rounded-full mr-3 animate-steam-pulse"></div>
                  <span className="text-gray-300">Copper Piping Expert</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full mr-3 animate-steam-pulse"></div>
                  <span className="text-gray-300">Victorian Design Consultant</span>
                </div>
              </div>
            </div>

            {/* Contact Details */}
            <div className="bg-gradient-to-br from-amber-800/60 to-orange-800/60 backdrop-blur-xl border-2 border-gray-600 rounded-xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Details</h3>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-gradient-to-br from-amber-400 to-orange-400 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-white text-sm">📍</span>
                  </div>
                  <div>
                    <div className="text-white font-medium">Steam Factory</div>
                    <div className="text-gray-300 text-sm">123 Industrial Avenue, Steam District</div>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-red-400 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-white text-sm">📧</span>
                  </div>
                  <div>
                    <div className="text-white font-medium">steam@industrial.com</div>
                    <div className="text-gray-300 text-sm">24/7 Steam Support</div>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-gradient-to-br from-red-400 to-amber-400 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-white text-sm">📞</span>
                  </div>
                  <div>
                    <div className="text-white font-medium">+1 (555) STEAM-01</div>
                    <div className="text-gray-300 text-sm">Steam Hotline</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Steam Stats */}
            <div className="bg-gradient-to-br from-amber-800/60 to-orange-800/60 backdrop-blur-xl border-2 border-gray-600 rounded-xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-white mb-6">Steam Statistics</h3>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent mb-1">
                    500+
                  </div>
                  <div className="text-sm text-gray-300">Steam Engines Built</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent mb-1">
                    50K+
                  </div>
                  <div className="text-sm text-gray-300">Gears Manufactured</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold bg-gradient-to-r from-red-400 to-amber-400 bg-clip-text text-transparent mb-1">
                    99.9%
                  </div>
                  <div className="text-sm text-gray-300">Efficiency Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent mb-1">
                    24/7
                  </div>
                  <div className="text-sm text-gray-300">Steam Operation</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-8 w-12 h-12 border-2 border-amber-400 rounded-lg animate-steam-pulse"></div>
      <div className="absolute top-1/3 right-8 w-12 h-12 border-2 border-orange-400 rounded-lg animate-steam-pulse" style={{ animationDelay: '0.5s' }}></div>
      <div className="absolute bottom-1/4 left-8 w-12 h-12 border-2 border-red-400 rounded-lg animate-steam-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-1/3 right-8 w-12 h-12 border-2 border-amber-400 rounded-lg animate-steam-pulse" style={{ animationDelay: '1.5s' }}></div>

      {/* Steam Light Rays */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/3 w-px h-full bg-gradient-to-b from-transparent via-amber-400/10 to-transparent animate-steam-scan"></div>
        <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-orange-400/10 to-transparent animate-steam-scan" style={{ animationDelay: '1s' }}></div>
      </div>
    </section>
  );
} 