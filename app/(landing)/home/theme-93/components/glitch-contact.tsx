import React from 'react';

export default function GlitchContact() {
  return (
    <section className="py-20 relative">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-conic from-purple-500/5 via-pink-500/5 to-cyan-400/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            <span className="text-purple-500 drop-shadow-[0_0_20px_rgba(168,85,247,0.8)]">GLITCH</span>
            <span className="text-pink-500 drop-shadow-[0_0_20px_rgba(236,72,153,0.8)]"> CONTACT</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to join the cyberpunk revolution? Get in touch with us
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="relative">
            <div className="p-8 border-2 border-pink-500 rounded-lg bg-black/50 backdrop-blur-sm">
              <h3 className="text-3xl font-bold text-pink-500 mb-6">Send Message</h3>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-300 mb-2">First Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 bg-black/50 border-2 border-pink-500/50 rounded-lg text-white placeholder-gray-400 focus:border-pink-500 focus:outline-none transition-colors"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 mb-2">Last Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 bg-black/50 border-2 border-pink-500/50 rounded-lg text-white placeholder-gray-400 focus:border-pink-500 focus:outline-none transition-colors"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-gray-300 mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 bg-black/50 border-2 border-pink-500/50 rounded-lg text-white placeholder-gray-400 focus:border-pink-500 focus:outline-none transition-colors"
                    placeholder="Enter your email"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-300 mb-2">Subject</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 bg-black/50 border-2 border-pink-500/50 rounded-lg text-white placeholder-gray-400 focus:border-pink-500 focus:outline-none transition-colors"
                    placeholder="Enter subject"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-300 mb-2">Message</label>
                  <textarea 
                    rows={5}
                    className="w-full px-4 py-3 bg-black/50 border-2 border-pink-500/50 rounded-lg text-white placeholder-gray-400 focus:border-pink-500 focus:outline-none transition-colors resize-none"
                    placeholder="Enter your message"
                  ></textarea>
                </div>
                
                <button className="group relative w-full py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(236,72,153,0.6)]">
                  <span className="relative z-10">Send Message</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-purple-600/20 animate-pulse"></div>
                </button>
              </form>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="p-8 border-2 border-purple-500 rounded-lg bg-black/50 backdrop-blur-sm">
              <h3 className="text-3xl font-bold text-purple-500 mb-6">Contact Info</h3>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-2xl">📍</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Address</h4>
                    <p className="text-gray-300">123 Cyber Street, Neo City, NC 12345</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-pink-500/20 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-2xl">📧</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Email</h4>
                    <p className="text-gray-300">contact@cyberfuture.com</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-cyan-400/20 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-2xl">📞</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Phone</h4>
                    <p className="text-gray-300">+1 (555) 123-4567</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="p-8 border-2 border-cyan-400 rounded-lg bg-black/50 backdrop-blur-sm">
              <h3 className="text-3xl font-bold text-cyan-400 mb-6">Follow Us</h3>
              
              <div className="grid grid-cols-2 gap-4">
                <button className="group p-4 border-2 border-pink-500 rounded-lg text-pink-500 hover:bg-pink-500 hover:text-white transition-all duration-300">
                  <span className="font-semibold">Twitter</span>
                </button>
                <button className="group p-4 border-2 border-purple-500 rounded-lg text-purple-500 hover:bg-purple-500 hover:text-white transition-all duration-300">
                  <span className="font-semibold">LinkedIn</span>
                </button>
                <button className="group p-4 border-2 border-cyan-400 rounded-lg text-cyan-400 hover:bg-cyan-400 hover:text-black transition-all duration-300">
                  <span className="font-semibold">GitHub</span>
                </button>
                <button className="group p-4 border-2 border-yellow-400 rounded-lg text-yellow-400 hover:bg-yellow-400 hover:text-black transition-all duration-300">
                  <span className="font-semibold">Discord</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Neon Elements */}
        <div className="absolute top-20 left-10 w-4 h-4 bg-pink-500 rounded-full animate-pulse shadow-lg shadow-pink-500/50"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-purple-500 rounded-full animate-pulse shadow-lg shadow-purple-500/50" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-40 left-20 w-5 h-5 bg-cyan-400 rounded-full animate-pulse shadow-lg shadow-cyan-400/50" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 right-10 w-2 h-2 bg-yellow-400 rounded-full animate-pulse shadow-lg shadow-yellow-400/50" style={{animationDelay: '0.5s'}}></div>
      </div>
    </section>
  );
} 