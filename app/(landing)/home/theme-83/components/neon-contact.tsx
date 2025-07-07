import React from 'react';

export default function NeonContact() {
  return (
    <section className="py-20 px-4 relative">
      {/* Section Header */}
      <div className="text-center mb-16">
        <div className="inline-block px-4 py-2 border border-pink-400 rounded-sm bg-black/50 backdrop-blur-sm mb-6">
          <span className="text-pink-400 font-mono text-sm tracking-wider">CONTACT</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          <span className="text-pink-400">GET IN</span>
          <span className="text-cyan-400"> TOUCH</span>
        </h2>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
          Ready to start your cyber journey? Let's connect
        </p>
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="relative p-8 border border-gray-800 rounded-sm bg-black/30 backdrop-blur-sm">
            {/* Cyber Corner Elements */}
            <div className="absolute top-0 left-0 w-4 h-4 border-l border-t border-pink-400"></div>
            <div className="absolute top-0 right-0 w-4 h-4 border-r border-t border-cyan-400"></div>
            <div className="absolute bottom-0 left-0 w-4 h-4 border-l border-b border-purple-400"></div>
            <div className="absolute bottom-0 right-0 w-4 h-4 border-r border-b border-pink-400"></div>

            <h3 className="text-2xl font-bold text-pink-400 mb-6">SEND MESSAGE</h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-cyan-400 font-mono text-sm mb-2">FIRST NAME</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-sm text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none transition-colors"
                    placeholder="Enter your first name"
                  />
                </div>
                <div>
                  <label className="block text-cyan-400 font-mono text-sm mb-2">LAST NAME</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-sm text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none transition-colors"
                    placeholder="Enter your last name"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-cyan-400 font-mono text-sm mb-2">EMAIL</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-sm text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none transition-colors"
                  placeholder="Enter your email"
                />
              </div>
              
              <div>
                <label className="block text-cyan-400 font-mono text-sm mb-2">MESSAGE</label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-sm text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none transition-colors resize-none"
                  placeholder="Enter your message"
                ></textarea>
              </div>
              
              <button className="w-full px-8 py-4 bg-gradient-to-r from-cyan-400 to-pink-400 text-black font-bold rounded-sm hover:shadow-lg hover:shadow-cyan-400/50 transition-all duration-300 transform hover:scale-105">
                SEND MESSAGE
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="relative p-8 border border-gray-800 rounded-sm bg-black/30 backdrop-blur-sm">
              {/* Cyber Corner Elements */}
              <div className="absolute top-0 left-0 w-4 h-4 border-l border-t border-cyan-400"></div>
              <div className="absolute top-0 right-0 w-4 h-4 border-r border-t border-pink-400"></div>
              <div className="absolute bottom-0 left-0 w-4 h-4 border-l border-b border-purple-400"></div>
              <div className="absolute bottom-0 right-0 w-4 h-4 border-r border-b border-cyan-400"></div>

              <h3 className="text-2xl font-bold text-cyan-400 mb-6">CONTACT INFO</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="text-2xl">📍</div>
                  <div>
                    <h4 className="text-pink-400 font-bold mb-2">ADDRESS</h4>
                    <p className="text-gray-300">123 Cyber Street<br />Neon City, NC 12345</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="text-2xl">📧</div>
                  <div>
                    <h4 className="text-pink-400 font-bold mb-2">EMAIL</h4>
                    <p className="text-gray-300">hello@cybertech.com</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="text-2xl">📞</div>
                  <div>
                    <h4 className="text-pink-400 font-bold mb-2">PHONE</h4>
                    <p className="text-gray-300">+1 (555) 123-4567</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="relative p-8 border border-gray-800 rounded-sm bg-black/30 backdrop-blur-sm">
              {/* Cyber Corner Elements */}
              <div className="absolute top-0 left-0 w-4 h-4 border-l border-t border-purple-400"></div>
              <div className="absolute top-0 right-0 w-4 h-4 border-r border-t border-cyan-400"></div>
              <div className="absolute bottom-0 left-0 w-4 h-4 border-l border-b border-pink-400"></div>
              <div className="absolute bottom-0 right-0 w-4 h-4 border-r border-b border-purple-400"></div>

              <h3 className="text-2xl font-bold text-purple-400 mb-6">FOLLOW US</h3>
              
              <div className="flex space-x-4">
                {[
                  { icon: "🐦", label: "Twitter", color: "cyan" },
                  { icon: "💼", label: "LinkedIn", color: "pink" },
                  { icon: "📘", label: "Facebook", color: "purple" },
                  { icon: "📷", label: "Instagram", color: "cyan" }
                ].map((social, index) => (
                  <a
                    key={index}
                    href="#"
                    className={`flex flex-col items-center p-4 border border-${social.color}-400 rounded-sm hover:bg-${social.color}-400 hover:text-black transition-all duration-300`}
                  >
                    <span className="text-2xl mb-2">{social.icon}</span>
                    <span className="text-xs font-mono">{social.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Cyber Decorative Elements */}
      <div className="absolute top-20 left-10 w-8 h-8 border border-pink-400 rounded-sm animate-cyber-pulse"></div>
      <div className="absolute top-40 right-10 w-8 h-8 border border-cyan-400 rounded-sm animate-cyber-pulse" style={{ animationDelay: '0.5s' }}></div>
      <div className="absolute bottom-20 left-20 w-8 h-8 border border-purple-400 rounded-sm animate-cyber-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-40 right-20 w-8 h-8 border border-pink-400 rounded-sm animate-cyber-pulse" style={{ animationDelay: '1.5s' }}></div>
    </section>
  );
} 