import React from 'react';

export default function RetroContact() {
  return (
    <section className="py-20 px-4 relative">
      {/* Section Header */}
      <div className="text-center mb-16">
        <div className="inline-block px-4 py-2 border-4 border-blue-400 rounded-sm bg-black/50 backdrop-blur-sm mb-6">
          <span className="text-blue-400 font-mono text-sm tracking-wider">CONTACT</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-mono">
          <span className="text-blue-400">GET IN</span>
          <span className="text-green-400"> TOUCH</span>
        </h2>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
          Ready to start your retro gaming journey? Let's connect
        </p>
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="relative p-8 border-4 border-gray-800 rounded-sm bg-black/30 backdrop-blur-sm">
            {/* Retro Corner Elements */}
            <div className="absolute top-0 left-0 w-4 h-4 border-l-4 border-t-4 border-blue-400"></div>
            <div className="absolute top-0 right-0 w-4 h-4 border-r-4 border-t-4 border-green-400"></div>
            <div className="absolute bottom-0 left-0 w-4 h-4 border-l-4 border-b-4 border-purple-400"></div>
            <div className="absolute bottom-0 right-0 w-4 h-4 border-r-4 border-b-4 border-blue-400"></div>

            <h3 className="text-2xl font-bold text-blue-400 mb-6 font-mono">SEND MESSAGE</h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-green-400 font-mono text-sm mb-2">FIRST NAME</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-black/50 border-4 border-gray-700 rounded-sm text-white placeholder-gray-400 focus:border-green-400 focus:outline-none transition-colors font-mono"
                    placeholder="Enter your first name"
                  />
                </div>
                <div>
                  <label className="block text-green-400 font-mono text-sm mb-2">LAST NAME</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-black/50 border-4 border-gray-700 rounded-sm text-white placeholder-gray-400 focus:border-green-400 focus:outline-none transition-colors font-mono"
                    placeholder="Enter your last name"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-green-400 font-mono text-sm mb-2">EMAIL</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-black/50 border-4 border-gray-700 rounded-sm text-white placeholder-gray-400 focus:border-green-400 focus:outline-none transition-colors font-mono"
                  placeholder="Enter your email"
                />
              </div>
              
              <div>
                <label className="block text-green-400 font-mono text-sm mb-2">MESSAGE</label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 bg-black/50 border-4 border-gray-700 rounded-sm text-white placeholder-gray-400 focus:border-green-400 focus:outline-none transition-colors resize-none font-mono"
                  placeholder="Enter your message"
                ></textarea>
              </div>
              
              <button className="w-full px-8 py-4 bg-gradient-to-r from-green-400 to-blue-400 text-black font-bold rounded-sm hover:shadow-lg hover:shadow-green-400/50 transition-all duration-300 transform hover:scale-105 border-4 border-green-400 font-mono">
                SEND MESSAGE
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="relative p-8 border-4 border-gray-800 rounded-sm bg-black/30 backdrop-blur-sm">
              {/* Retro Corner Elements */}
              <div className="absolute top-0 left-0 w-4 h-4 border-l-4 border-t-4 border-green-400"></div>
              <div className="absolute top-0 right-0 w-4 h-4 border-r-4 border-t-4 border-blue-400"></div>
              <div className="absolute bottom-0 left-0 w-4 h-4 border-l-4 border-b-4 border-purple-400"></div>
              <div className="absolute bottom-0 right-0 w-4 h-4 border-r-4 border-b-4 border-green-400"></div>

              <h3 className="text-2xl font-bold text-green-400 mb-6 font-mono">CONTACT INFO</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="text-2xl">📍</div>
                  <div>
                    <h4 className="text-blue-400 font-bold mb-2 font-mono">ADDRESS</h4>
                    <p className="text-gray-300">123 Retro Street<br />Gaming City, GC 12345</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="text-2xl">📧</div>
                  <div>
                    <h4 className="text-blue-400 font-bold mb-2 font-mono">EMAIL</h4>
                    <p className="text-gray-300">hello@retrogaming.com</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="text-2xl">📞</div>
                  <div>
                    <h4 className="text-blue-400 font-bold mb-2 font-mono">PHONE</h4>
                    <p className="text-gray-300">+1 (555) 123-4567</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="relative p-8 border-4 border-gray-800 rounded-sm bg-black/30 backdrop-blur-sm">
              {/* Retro Corner Elements */}
              <div className="absolute top-0 left-0 w-4 h-4 border-l-4 border-t-4 border-purple-400"></div>
              <div className="absolute top-0 right-0 w-4 h-4 border-r-4 border-t-4 border-green-400"></div>
              <div className="absolute bottom-0 left-0 w-4 h-4 border-l-4 border-b-4 border-blue-400"></div>
              <div className="absolute bottom-0 right-0 w-4 h-4 border-r-4 border-b-4 border-purple-400"></div>

              <h3 className="text-2xl font-bold text-purple-400 mb-6 font-mono">FOLLOW US</h3>
              
              <div className="flex space-x-4">
                {[
                  { icon: "🎮", label: "Discord", color: "green" },
                  { icon: "📺", label: "Twitch", color: "blue" },
                  { icon: "🐦", label: "Twitter", color: "purple" },
                  { icon: "📷", label: "Instagram", color: "green" }
                ].map((social, index) => (
                  <a
                    key={index}
                    href="#"
                    className={`flex flex-col items-center p-4 border-4 border-${social.color}-400 rounded-sm hover:bg-${social.color}-400 hover:text-black transition-all duration-300`}
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

      {/* Retro Decorative Elements */}
      <div className="absolute top-20 left-10 w-8 h-8 border-4 border-blue-400 rounded-sm animate-retro-pulse"></div>
      <div className="absolute top-40 right-10 w-8 h-8 border-4 border-green-400 rounded-sm animate-retro-pulse" style={{ animationDelay: '0.5s' }}></div>
      <div className="absolute bottom-20 left-20 w-8 h-8 border-4 border-purple-400 rounded-sm animate-retro-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-40 right-20 w-8 h-8 border-4 border-blue-400 rounded-sm animate-retro-pulse" style={{ animationDelay: '1.5s' }}></div>
    </section>
  );
} 