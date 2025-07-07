import React from 'react';

export default function HolographicContact() {
  return (
    <section className="py-20 px-4 relative">
      {/* Section Header */}
      <div className="text-center mb-16">
        <div className="inline-block px-4 py-2 border border-purple-400/50 rounded-2xl bg-purple-800/20 backdrop-blur-sm mb-6">
          <span className="text-purple-300 font-mono text-sm tracking-wider">CONTACT</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-mono">
          <span className="text-purple-400">HOLOGRAPHIC</span>
          <span className="text-indigo-400"> CONTACT</span>
        </h2>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
          Get in touch with our holographic technology experts
        </p>
      </div>

      {/* Contact Content */}
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="relative p-8 border border-purple-400/30 rounded-2xl bg-purple-800/20 backdrop-blur-sm">
            {/* Glass Corner Elements */}
            <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-purple-400/50 rounded-tl-2xl"></div>
            <div className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 border-indigo-400/50 rounded-tr-2xl"></div>
            <div className="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 border-pink-400/50 rounded-bl-2xl"></div>
            <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-purple-400/50 rounded-br-2xl"></div>

            <h3 className="text-2xl font-bold text-purple-400 mb-6 font-mono">SEND MESSAGE</h3>
            
            <form className="space-y-6">
              <div>
                <label className="block text-gray-300 mb-2 font-mono">NAME</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-indigo-800/20 border border-indigo-400/50 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-indigo-400 backdrop-blur-sm"
                  placeholder="Enter your name"
                />
              </div>
              
              <div>
                <label className="block text-gray-300 mb-2 font-mono">EMAIL</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-indigo-800/20 border border-indigo-400/50 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-indigo-400 backdrop-blur-sm"
                  placeholder="Enter your email"
                />
              </div>
              
              <div>
                <label className="block text-gray-300 mb-2 font-mono">MESSAGE</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 bg-indigo-800/20 border border-indigo-400/50 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-indigo-400 backdrop-blur-sm resize-none"
                  placeholder="Enter your message"
                ></textarea>
              </div>
              
              <button className="w-full px-6 py-3 bg-gradient-to-r from-purple-400/20 to-indigo-400/20 text-white font-bold rounded-2xl hover:shadow-lg hover:shadow-purple-400/30 transition-all duration-300 border border-purple-400/50 backdrop-blur-sm font-mono">
                SEND MESSAGE
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            {/* Contact Methods */}
            <div className="space-y-6">
              <div className="p-6 border border-indigo-400/30 rounded-2xl bg-indigo-800/20 backdrop-blur-sm">
                <div className="flex items-center mb-4">
                  <div className="text-2xl mr-4">📧</div>
                  <h4 className="text-xl font-bold text-indigo-400 font-mono">EMAIL</h4>
                </div>
                <p className="text-gray-300">contact@holographic.com</p>
              </div>
              
              <div className="p-6 border border-purple-400/30 rounded-2xl bg-purple-800/20 backdrop-blur-sm">
                <div className="flex items-center mb-4">
                  <div className="text-2xl mr-4">📞</div>
                  <h4 className="text-xl font-bold text-purple-400 font-mono">PHONE</h4>
                </div>
                <p className="text-gray-300">+1 (555) 123-4567</p>
              </div>
              
              <div className="p-6 border border-pink-400/30 rounded-2xl bg-pink-800/20 backdrop-blur-sm">
                <div className="flex items-center mb-4">
                  <div className="text-2xl mr-4">📍</div>
                  <h4 className="text-xl font-bold text-pink-400 font-mono">ADDRESS</h4>
                </div>
                <p className="text-gray-300">123 Holographic Street<br />Future City, FC 12345</p>
              </div>
            </div>

            {/* Social Links */}
            <div className="p-6 border border-indigo-400/30 rounded-2xl bg-indigo-800/20 backdrop-blur-sm">
              <h4 className="text-xl font-bold text-indigo-400 mb-4 font-mono">FOLLOW US</h4>
              <div className="flex space-x-4">
                {[
                  { icon: "🔮", label: "Holographic", color: "indigo" },
                  { icon: "⚛️", label: "Quantum", color: "purple" },
                  { icon: "🧠", label: "Neural", color: "pink" }
                ].map((social, index) => (
                  <button
                    key={index}
                    className={`p-3 border border-${social.color}-400/50 rounded-2xl hover:bg-${social.color}-400/20 transition-all duration-300 backdrop-blur-sm`}
                  >
                    <div className="text-xl">{social.icon}</div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Holographic Decorative Elements */}
      <div className="absolute top-20 left-10 w-8 h-8 border-2 border-purple-400/50 rounded-full animate-holographic-pulse backdrop-blur-sm"></div>
      <div className="absolute top-40 right-10 w-8 h-8 border-2 border-indigo-400/50 rounded-full animate-holographic-pulse backdrop-blur-sm" style={{ animationDelay: '0.5s' }}></div>
      <div className="absolute bottom-20 left-20 w-8 h-8 border-2 border-pink-400/50 rounded-full animate-holographic-pulse backdrop-blur-sm" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-40 right-20 w-8 h-8 border-2 border-purple-400/50 rounded-full animate-holographic-pulse backdrop-blur-sm" style={{ animationDelay: '1.5s' }}></div>
    </section>
  );
} 