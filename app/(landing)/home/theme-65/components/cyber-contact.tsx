import React from 'react';

export default function CyberContact() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Contact Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/30 to-black">
        {/* Digital Rain Effect */}
        <div className="absolute inset-0 opacity-20">
          {Array.from({ length: 30 }, (_, i) => (
            <div
              key={i}
              className="absolute w-px bg-gradient-to-b from-cyan-400 to-transparent animate-retro-digital-rain"
              style={{
                left: `${Math.random() * 100}%`,
                height: `${Math.random() * 200 + 100}px`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="relative">
            <h2 className="text-5xl sm:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-pink-500 to-yellow-400 bg-clip-text text-transparent mb-6">
              CYBER CONTACT
            </h2>
            <div className="absolute inset-0 text-5xl sm:text-6xl font-bold text-pink-500/20 blur-lg animate-retro-glitch">
              CYBER CONTACT
            </div>
          </div>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Establish a secure connection to our cyberpunk network and initiate communication protocols
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="relative">
            <div className="bg-gradient-to-b from-purple-900/20 to-black/40 border border-cyan-400/30 rounded-lg p-8 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-cyan-400 mb-8 text-center">TRANSMISSION FORM</h3>
              
              <form className="space-y-6">
                {/* Name Field */}
                <div className="relative">
                  <label className="block text-sm font-mono text-gray-400 mb-2">USER_ID:</label>
                  <input
                    type="text"
                    className="w-full bg-black/50 border border-cyan-400/30 rounded text-cyan-300 px-4 py-3 focus:border-pink-500 focus:outline-none transition-colors duration-300"
                    placeholder="Enter your designation..."
                  />
                </div>

                {/* Email Field */}
                <div className="relative">
                  <label className="block text-sm font-mono text-gray-400 mb-2">COMM_CHANNEL:</label>
                  <input
                    type="email"
                    className="w-full bg-black/50 border border-cyan-400/30 rounded text-cyan-300 px-4 py-3 focus:border-pink-500 focus:outline-none transition-colors duration-300"
                    placeholder="neural.link@cyberspace.net"
                  />
                </div>

                {/* Subject Field */}
                <div className="relative">
                  <label className="block text-sm font-mono text-gray-400 mb-2">PROTOCOL_TYPE:</label>
                  <select className="w-full bg-black/50 border border-cyan-400/30 rounded text-cyan-300 px-4 py-3 focus:border-pink-500 focus:outline-none transition-colors duration-300">
                    <option>General Inquiry</option>
                    <option>Technical Support</option>
                    <option>Partnership</option>
                    <option>Cybersecurity</option>
                    <option>Neural Interface</option>
                  </select>
                </div>

                {/* Message Field */}
                <div className="relative">
                  <label className="block text-sm font-mono text-gray-400 mb-2">DATA_PAYLOAD:</label>
                  <textarea
                    rows={6}
                    className="w-full bg-black/50 border border-cyan-400/30 rounded text-cyan-300 px-4 py-3 focus:border-pink-500 focus:outline-none transition-colors duration-300 resize-none"
                    placeholder="Transmit your message through the cyberpunk network..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full group relative py-4 bg-gradient-to-r from-cyan-500 to-pink-500 text-black font-bold text-lg rounded-lg overflow-hidden transition-all duration-300 hover:scale-105"
                >
                  <span className="relative z-10">INITIATE TRANSMISSION</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-yellow-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                </button>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Direct Communication */}
            <div className="bg-gradient-to-b from-purple-900/20 to-black/40 border border-cyan-400/30 rounded-lg p-6">
              <h3 className="text-xl font-bold text-cyan-400 mb-6">DIRECT COMM CHANNELS</h3>
              
              <div className="space-y-4">
                {[
                  { 
                    label: "NEURAL_LINK", 
                    value: "+1-2084-CYBER-01", 
                    icon: "📞",
                    color: "text-cyan-400"
                  },
                  { 
                    label: "DATA_STREAM", 
                    value: "contact@cyberpunk.net", 
                    icon: "📧",
                    color: "text-pink-400"
                  },
                  { 
                    label: "COORDINATES", 
                    value: "Neo Tokyo, Sector 7", 
                    icon: "📍",
                    color: "text-yellow-400"
                  },
                  { 
                    label: "QUANTUM_TIME", 
                    value: "24/7 Cyber Operations", 
                    icon: "⏰",
                    color: "text-green-400"
                  }
                ].map((contact, index) => (
                  <div key={index} className="flex items-center space-x-4 group">
                    <div className="text-2xl group-hover:animate-retro-bounce">
                      {contact.icon}
                    </div>
                    <div>
                      <div className="text-sm font-mono text-gray-400">{contact.label}:</div>
                      <div className={`${contact.color} font-mono hover:text-pink-500 transition-colors duration-300`}>
                        {contact.value}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Response Time */}
            <div className="bg-gradient-to-b from-purple-900/20 to-black/40 border border-cyan-400/30 rounded-lg p-6">
              <h3 className="text-xl font-bold text-cyan-400 mb-6">RESPONSE PROTOCOLS</h3>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 font-mono">STANDARD_QUERY:</span>
                  <span className="text-cyan-400 font-bold">&lt; 2 HOURS</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 font-mono">TECH_SUPPORT:</span>
                  <span className="text-pink-400 font-bold">&lt; 30 MINS</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 font-mono">EMERGENCY:</span>
                  <span className="text-yellow-400 font-bold">INSTANT</span>
                </div>
              </div>
            </div>

            {/* Security Notice */}
            <div className="bg-gradient-to-b from-purple-900/20 to-black/40 border border-pink-500/30 rounded-lg p-6">
              <h3 className="text-xl font-bold text-pink-400 mb-4">SECURITY PROTOCOL</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                All transmissions are encrypted with quantum-level security protocols. 
                Your data is protected by advanced cyberpunk encryption algorithms 
                ensuring complete privacy and security.
              </p>
              
              <div className="flex items-center mt-4 space-x-2">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-retro-pulse"></div>
                <span className="text-green-400 font-mono text-sm">SECURE CONNECTION ACTIVE</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Communication Network Visualization */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <svg className="w-full h-full opacity-10" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <linearGradient id="networkGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00ffff" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#ff00ff" stopOpacity="1" />
              <stop offset="100%" stopColor="#ffff00" stopOpacity="0.8" />
            </linearGradient>
          </defs>
          
          {/* Network Nodes */}
          {Array.from({ length: 12 }, (_, i) => (
            <g key={i}>
              <circle
                cx={10 + (i % 4) * 25}
                cy={20 + Math.floor(i / 4) * 30}
                r="1"
                fill="url(#networkGradient)"
                className="animate-retro-network-pulse"
                style={{animationDelay: `${i * 0.3}s`}}
              />
              
              {/* Connection Lines */}
              {i < 11 && (
                <line
                  x1={10 + (i % 4) * 25}
                  y1={20 + Math.floor(i / 4) * 30}
                  x2={10 + ((i + 1) % 4) * 25}
                  y2={20 + Math.floor((i + 1) / 4) * 30}
                  stroke="url(#networkGradient)"
                  strokeWidth="0.2"
                  className="animate-retro-network-flow"
                  style={{animationDelay: `${i * 0.2}s`}}
                />
              )}
            </g>
          ))}
        </svg>
      </div>
    </section>
  );
} 