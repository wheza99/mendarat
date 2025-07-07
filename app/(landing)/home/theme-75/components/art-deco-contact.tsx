import React from 'react';

export default function ArtDecoContact() {
  return (
    <section className="relative py-24 bg-gradient-to-br from-purple-900 via-pink-900 to-cyan-900 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-pink-900 to-cyan-900"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#a855f7_0%,transparent_50%)] bg-[length:100px_100px] animate-art-deco-gear"></div>
        </div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 mb-6 bg-gradient-to-br from-purple-800/80 to-pink-800/80 backdrop-blur-xl border border-purple-400 rounded-lg">
            <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mr-2 animate-neon-pulse"></div>
            <span className="text-sm font-bold text-purple-400 tracking-wider">
              ART DECO CONTACT
            </span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            <span className="block">Start Your</span>
            <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              Neon Journey
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Ready to revolutionize your design with neon gradient innovation? 
            Contact our neon designers today for a consultation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="relative">
            <div className="bg-gradient-to-br from-purple-800/60 to-pink-800/60 backdrop-blur-xl border-2 border-gray-600 rounded-xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-white mb-6">Send Neon Message</h3>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">First Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-gradient-to-br from-purple-800/40 to-pink-800/40 backdrop-blur-xl border-2 border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none transition-colors duration-300"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Last Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-gradient-to-br from-purple-800/40 to-pink-800/40 backdrop-blur-xl border-2 border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none transition-colors duration-300"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-gradient-to-br from-purple-800/40 to-pink-800/40 backdrop-blur-xl border-2 border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none transition-colors duration-300"
                    placeholder="Enter your email address"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Neon Project Type</label>
                  <select className="w-full px-4 py-3 bg-gradient-to-br from-purple-800/40 to-pink-800/40 backdrop-blur-xl border-2 border-gray-600 rounded-lg text-white focus:border-purple-400 focus:outline-none transition-colors duration-300">
                    <option value="">Select project type</option>
                    <option value="neon-gradients">Neon Gradient Design</option>
                    <option value="art-deco">Art Deco Consultation</option>
                    <option value="geometric-animation">Geometric Animation</option>
                    <option value="neon-branding">Neon Branding</option>
                    <option value="gradient-technology">Gradient Technology</option>
                    <option value="elegance-solutions">Elegance Solutions</option>
                    <option value="custom">Custom Neon Solution</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 bg-gradient-to-br from-purple-800/40 to-pink-800/40 backdrop-blur-xl border-2 border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none transition-colors duration-300 resize-none"
                    placeholder="Describe your neon gradient project requirements..."
                  ></textarea>
                </div>
                
                <button className="group relative w-full px-8 py-4 bg-gradient-to-r from-purple-400 to-pink-400 text-white font-bold rounded-lg shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 border-2 border-purple-400">
                  <span className="relative z-10">Send Neon Message</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-cyan-400 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Neon Designers */}
            <div className="bg-gradient-to-br from-purple-800/60 to-pink-800/60 backdrop-blur-xl border-2 border-gray-600 rounded-xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-white mb-6">Neon Designers</h3>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mr-3 animate-neon-pulse"></div>
                  <span className="text-gray-300">Chief Neon Designer</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-gradient-to-r from-pink-400 to-cyan-400 rounded-full mr-3 animate-neon-pulse"></div>
                  <span className="text-gray-300">Art Deco Specialist</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full mr-3 animate-neon-pulse"></div>
                  <span className="text-gray-300">Gradient Expert</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mr-3 animate-neon-pulse"></div>
                  <span className="text-gray-300">Geometric Consultant</span>
                </div>
              </div>
            </div>

            {/* Contact Details */}
            <div className="bg-gradient-to-br from-purple-800/60 to-pink-800/60 backdrop-blur-xl border-2 border-gray-600 rounded-xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Details</h3>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-pink-400 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-white text-sm">📍</span>
                  </div>
                  <div>
                    <div className="text-white font-medium">Neon Studio</div>
                    <div className="text-gray-300 text-sm">123 Art Deco Avenue, Neon District</div>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-gradient-to-br from-pink-400 to-cyan-400 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-white text-sm">📧</span>
                  </div>
                  <div>
                    <div className="text-white font-medium">neon@artdeco.com</div>
                    <div className="text-gray-300 text-sm">24/7 Neon Support</div>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-purple-400 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-white text-sm">📞</span>
                  </div>
                  <div>
                    <div className="text-white font-medium">+1 (555) NEON-01</div>
                    <div className="text-gray-300 text-sm">Neon Hotline</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Neon Stats */}
            <div className="bg-gradient-to-br from-purple-800/60 to-pink-800/60 backdrop-blur-xl border-2 border-gray-600 rounded-xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-white mb-6">Neon Statistics</h3>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-1">
                    500+
                  </div>
                  <div className="text-sm text-gray-300">Neon Designs Created</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent mb-1">
                    50K+
                  </div>
                  <div className="text-sm text-gray-300">Gradients Generated</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-1">
                    99.9%
                  </div>
                  <div className="text-sm text-gray-300">Precision Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-1">
                    24/7
                  </div>
                  <div className="text-sm text-gray-300">Neon Operation</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-8 w-12 h-12 border-2 border-purple-400 rounded-lg animate-neon-pulse"></div>
      <div className="absolute top-1/3 right-8 w-12 h-12 border-2 border-pink-400 rounded-lg animate-neon-pulse" style={{ animationDelay: '0.5s' }}></div>
      <div className="absolute bottom-1/4 left-8 w-12 h-12 border-2 border-cyan-400 rounded-lg animate-neon-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-1/3 right-8 w-12 h-12 border-2 border-purple-400 rounded-lg animate-neon-pulse" style={{ animationDelay: '1.5s' }}></div>

      {/* Neon Light Rays */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/3 w-px h-full bg-gradient-to-b from-transparent via-purple-400/10 to-transparent animate-art-deco-scan"></div>
        <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-pink-400/10 to-transparent animate-art-deco-scan" style={{ animationDelay: '1s' }}></div>
      </div>
    </section>
  );
} 