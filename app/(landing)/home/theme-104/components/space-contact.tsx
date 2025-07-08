import React from 'react';

export default function SpaceContact() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-purple-400 mb-12 font-mono tracking-wider">
          CONTACT US
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="relative">
            <div className="relative p-6 border-2 border-purple-400 bg-gradient-to-br from-purple-900/20 to-transparent font-mono">
              {/* Cosmic Glow Effect */}
              <div className="absolute inset-0 bg-purple-400/10 blur-xl"></div>
              
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-purple-300 mb-4">SEND MESSAGE</h3>
                
                <form className="space-y-4">
                  <div>
                    <input 
                      type="text" 
                      placeholder="Your Name" 
                      className="w-full px-4 py-2 bg-blue-900/30 border border-blue-400 text-blue-200 placeholder-blue-300 focus:outline-none focus:border-purple-400 transition-colors font-mono"
                    />
                  </div>
                  <div>
                    <input 
                      type="email" 
                      placeholder="Your Email" 
                      className="w-full px-4 py-2 bg-blue-900/30 border border-blue-400 text-blue-200 placeholder-blue-300 focus:outline-none focus:border-purple-400 transition-colors font-mono"
                    />
                  </div>
                  <div>
                    <textarea 
                      placeholder="Your Message" 
                      rows={4}
                      className="w-full px-4 py-2 bg-blue-900/30 border border-blue-400 text-blue-200 placeholder-blue-300 focus:outline-none focus:border-purple-400 transition-colors font-mono resize-none"
                    ></textarea>
                  </div>
                  <button className="w-full px-6 py-3 bg-gradient-to-r from-purple-600 via-blue-500 to-pink-500 text-white font-bold border border-green-400 hover:scale-105 transition-transform">
                    SEND MESSAGE
                  </button>
                </form>
              </div>
              
              {/* Cosmic Border Animation */}
              <div className="absolute inset-0 border-2 border-purple-400 opacity-50"></div>
            </div>
          </div>
          
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="relative p-6 border-2 border-blue-400 bg-gradient-to-br from-blue-900/20 to-transparent font-mono">
              {/* Cosmic Glow Effect */}
              <div className="absolute inset-0 bg-blue-400/10 blur-xl"></div>
              
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-blue-300 mb-4">GET IN TOUCH</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center">
                    <span className="text-purple-400 mr-3">📍</span>
                    <div>
                      <p className="text-blue-200 font-bold">Address</p>
                      <p className="text-pink-200 text-sm">Space Station Alpha, Orbit</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <span className="text-purple-400 mr-3">📧</span>
                    <div>
                      <p className="text-blue-200 font-bold">Email</p>
                      <p className="text-pink-200 text-sm">contact@spaceexplorer.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <span className="text-purple-400 mr-3">📞</span>
                    <div>
                      <p className="text-blue-200 font-bold">Phone</p>
                      <p className="text-pink-200 text-sm">+1 (555) SPACE-EXP</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Cosmic Border Animation */}
              <div className="absolute inset-0 border-2 border-blue-400 opacity-50"></div>
            </div>
            
            {/* Social Links */}
            <div className="relative p-6 border-2 border-pink-400 bg-gradient-to-br from-pink-900/20 to-transparent font-mono">
              {/* Cosmic Glow Effect */}
              <div className="absolute inset-0 bg-pink-400/10 blur-xl"></div>
              
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-pink-300 mb-4">FOLLOW US</h3>
                
                <div className="flex space-x-4">
                  <button className="w-10 h-10 bg-gradient-to-r from-purple-600 to-blue-600 border border-pink-400 flex items-center justify-center hover:scale-110 transition-transform">
                    <span className="text-white">📱</span>
                  </button>
                  <button className="w-10 h-10 bg-gradient-to-r from-blue-600 to-pink-600 border border-purple-400 flex items-center justify-center hover:scale-110 transition-transform">
                    <span className="text-white">💻</span>
                  </button>
                  <button className="w-10 h-10 bg-gradient-to-r from-pink-600 to-green-600 border border-blue-400 flex items-center justify-center hover:scale-110 transition-transform">
                    <span className="text-white">🚀</span>
                  </button>
                </div>
              </div>
              
              {/* Cosmic Border Animation */}
              <div className="absolute inset-0 border-2 border-pink-400 opacity-50"></div>
            </div>
          </div>
        </div>
        
        {/* Space Decorative Element */}
        <div className="mt-16 text-center">
          <svg className="w-64 h-16 mx-auto opacity-60" viewBox="0 0 256 64" fill="none">
            <path d="M0 32 L64 16 L128 48 L192 8 L256 32" stroke="#a855f7" strokeWidth="4" fill="none" className="animate-pulse" />
            <path d="M0 40 L64 24 L128 56 L192 16 L256 40" stroke="#3b82f6" strokeWidth="3" fill="none" className="animate-pulse" style={{animationDelay: '0.2s'}} />
            <path d="M0 48 L64 32 L128 64 L192 24 L256 48" stroke="#ec4899" strokeWidth="2" fill="none" className="animate-pulse" style={{animationDelay: '0.4s'}} />
          </svg>
        </div>
      </div>
    </section>
  );
} 