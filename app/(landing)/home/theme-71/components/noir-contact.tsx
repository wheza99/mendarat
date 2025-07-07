import React from 'react';

export default function NoirContact() {
  return (
    <section className="py-20 bg-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Noir Vignette */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/50"></div>
        
        {/* Neon Street Scene */}
        <div className="absolute bottom-0 left-0 right-0 h-32">
          {/* Neon Signs */}
          {Array.from({ length: 6 }, (_, i) => (
            <div
              key={i}
              className="absolute bottom-0 text-xs font-mono animate-noir-flicker"
              style={{
                left: `${10 + i * 15}%`,
                color: i % 2 === 0 ? '#ef4444' : '#3b82f6',
                animationDelay: `${i * 0.2}s`
              }}
            >
              {['HOTEL', 'BAR', 'CASINO', 'CLUB', 'DINER', 'MOTEL'][i]}
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 animate-noir-fade-in">
            <span className="text-white">NOIR</span>
            <span className="text-red-500 animate-noir-flicker"> CONTACT</span>
          </h2>
          <p className="text-xl text-gray-400 font-mono max-w-3xl mx-auto animate-noir-fade-in-delayed">
            Ready to step into the shadows? Send us a message and we'll respond from the depths of the digital underworld.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="animate-noir-fade-in">
            <div className="bg-black/50 border border-gray-800 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-white mb-6 animate-noir-flicker">
                SEND A MESSAGE
              </h3>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-300 font-mono text-sm mb-2">NAME</label>
                    <input
                      type="text"
                      className="w-full bg-black/50 border border-gray-700 text-white px-4 py-3 rounded-lg focus:border-red-500 focus:outline-none transition-colors duration-300"
                      placeholder="Your name..."
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 font-mono text-sm mb-2">EMAIL</label>
                    <input
                      type="email"
                      className="w-full bg-black/50 border border-gray-700 text-white px-4 py-3 rounded-lg focus:border-blue-500 focus:outline-none transition-colors duration-300"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-gray-300 font-mono text-sm mb-2">SUBJECT</label>
                  <input
                    type="text"
                    className="w-full bg-black/50 border border-gray-700 text-white px-4 py-3 rounded-lg focus:border-red-500 focus:outline-none transition-colors duration-300"
                    placeholder="What's on your mind?"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-300 font-mono text-sm mb-2">MESSAGE</label>
                  <textarea
                    rows={6}
                    className="w-full bg-black/50 border border-gray-700 text-white px-4 py-3 rounded-lg focus:border-blue-500 focus:outline-none transition-colors duration-300 resize-none"
                    placeholder="Tell us your story..."
                  ></textarea>
                </div>
                
                <button className="w-full px-8 py-4 bg-red-500 hover:bg-red-600 text-white font-bold rounded-lg transition-all duration-300 animate-noir-pulse border border-red-400">
                  SEND MESSAGE
                </button>
              </form>
            </div>
          </div>

          {/* Contact Info */}
          <div className="animate-noir-fade-in-delayed">
            <div className="bg-black/50 border border-gray-800 rounded-lg p-8 h-full">
              <h3 className="text-2xl font-bold text-white mb-8 animate-noir-flicker">
                GET IN TOUCH
              </h3>
              
              <div className="space-y-8">
                {/* Email */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-500/20 border border-red-500/50 rounded-lg flex items-center justify-center">
                    <span className="text-red-500 text-xl">📧</span>
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-2">EMAIL</h4>
                    <p className="text-gray-400 font-mono">contact@neonnoir.com</p>
                    <p className="text-gray-500 text-sm">We'll respond within 24 hours</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-500/20 border border-blue-500/50 rounded-lg flex items-center justify-center">
                    <span className="text-blue-500 text-xl">📞</span>
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-2">PHONE</h4>
                    <p className="text-gray-400 font-mono">+1 (555) NOIR-71</p>
                    <p className="text-gray-500 text-sm">Available 24/7 for emergencies</p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-500/20 border border-red-500/50 rounded-lg flex items-center justify-center">
                    <span className="text-red-500 text-xl">📍</span>
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-2">ADDRESS</h4>
                    <p className="text-gray-400 font-mono">123 Neon Street</p>
                    <p className="text-gray-400 font-mono">Cyberpunk City, NC 12345</p>
                    <p className="text-gray-500 text-sm">Deep in the digital shadows</p>
                  </div>
                </div>

                {/* Social Links */}
                <div className="pt-8 border-t border-gray-800">
                  <h4 className="text-white font-bold mb-4">FOLLOW US</h4>
                  <div className="flex space-x-4">
                    <button className="w-10 h-10 bg-red-500/20 border border-red-500/50 rounded-lg flex items-center justify-center hover:bg-red-500/40 transition-colors duration-300 animate-noir-pulse">
                      <span className="text-red-500">𝕏</span>
                    </button>
                    <button className="w-10 h-10 bg-blue-500/20 border border-blue-500/50 rounded-lg flex items-center justify-center hover:bg-blue-500/40 transition-colors duration-300 animate-noir-pulse">
                      <span className="text-blue-500">💬</span>
                    </button>
                    <button className="w-10 h-10 bg-red-500/20 border border-red-500/50 rounded-lg flex items-center justify-center hover:bg-red-500/40 transition-colors duration-300 animate-noir-pulse">
                      <span className="text-red-500">📷</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Decoration */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-4 text-gray-500 font-mono text-sm animate-noir-flicker">
            <span>SYSTEM STATUS: ONLINE</span>
            <span className="w-2 h-2 bg-red-500 rounded-full animate-noir-pulse"></span>
            <span>NEON LEVEL: OPTIMAL</span>
            <span className="w-2 h-2 bg-blue-500 rounded-full animate-noir-pulse"></span>
            <span>SHADOW DEPTH: MAXIMUM</span>
          </div>
        </div>
      </div>

      {/* Floating Neon Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 25 }, (_, i) => (
          <div
            key={i}
            className={`absolute w-1 h-1 rounded-full animate-noir-float ${
              i % 4 === 0 ? 'bg-red-500' : i % 4 === 1 ? 'bg-blue-500' : i % 4 === 2 ? 'bg-white' : 'bg-gray-500'
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${4 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>
    </section>
  );
} 