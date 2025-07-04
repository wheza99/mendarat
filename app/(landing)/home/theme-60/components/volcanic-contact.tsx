import React from 'react';

export default function VolcanicContact() {
  return (
    <section className="relative py-20 px-6 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-red-950/80 via-orange-900/40 to-black/60 animate-volcanic-glow" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-red-900/40 to-orange-900/40 backdrop-blur-sm border border-orange-500/30 rounded-full px-6 py-2 mb-6">
            <span className="text-orange-200 text-sm font-medium uppercase tracking-wider">Cosmic Communication</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-orange-400 via-red-400 to-yellow-400 bg-clip-text text-transparent">
              Connect Across Cosmos
            </span>
          </h2>
          <p className="text-xl text-orange-100 max-w-3xl mx-auto leading-relaxed">
            Reach out through volcanic energy channels that span galaxies.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <div className="bg-gradient-to-br from-red-900/30 to-orange-900/30 backdrop-blur-sm border border-orange-500/20 rounded-2xl p-8 animate-volcanic-glow">
            <h3 className="text-2xl font-bold text-orange-200 mb-6">Send Cosmic Message</h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-orange-200 text-sm font-medium mb-2">Your Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-black/30 border border-orange-500/30 rounded-lg text-orange-100 placeholder-orange-300/50 focus:border-orange-400 focus:outline-none transition-colors duration-300"
                    placeholder="Enter your cosmic identifier"
                  />
                </div>
                
                <div>
                  <label className="block text-orange-200 text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-black/30 border border-orange-500/30 rounded-lg text-orange-100 placeholder-orange-300/50 focus:border-orange-400 focus:outline-none transition-colors duration-300"
                    placeholder="your@galaxy.universe"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-orange-200 text-sm font-medium mb-2">Mission Type</label>
                <select className="w-full px-4 py-3 bg-black/30 border border-orange-500/30 rounded-lg text-orange-100 focus:border-orange-400 focus:outline-none transition-colors duration-300">
                  <option value="">Select your mission</option>
                  <option value="energy">Energy Harvesting</option>
                  <option value="star-formation">Star Formation</option>
                  <option value="planetary-defense">Planetary Defense</option>
                </select>
              </div>
              
              <div>
                <label className="block text-orange-200 text-sm font-medium mb-2">Message</label>
                <textarea
                  rows={6}
                  className="w-full px-4 py-3 bg-black/30 border border-orange-500/30 rounded-lg text-orange-100 placeholder-orange-300/50 focus:border-orange-400 focus:outline-none transition-colors duration-300 resize-none"
                  placeholder="Encode your message..."
                />
              </div>
              
              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-500 hover:to-orange-500 text-white font-semibold rounded-lg transition-all duration-300 animate-volcanic-glow"
              >
                Transmit Message
              </button>
            </form>
          </div>

          {/* Contact Information & Status */}
          <div className="space-y-8">
            {/* Communication Status */}
            <div className="bg-gradient-to-br from-red-900/30 to-orange-900/30 backdrop-blur-sm border border-orange-500/20 rounded-xl p-6 animate-volcanic-glow">
              <h4 className="text-xl font-bold text-orange-200 mb-4">Network Status</h4>
              
              <div className="space-y-4">
                {[
                  { channel: 'Volcanic Energy Network', status: 'Online', strength: 98 },
                  { channel: 'Quantum Communication', status: 'Active', strength: 95 }
                ].map((channel, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-orange-200 text-sm font-medium">{channel.channel}</span>
                      <span className="text-green-400 text-sm font-bold">{channel.status}</span>
                    </div>
                    <div className="w-full bg-gray-800/50 rounded-full h-2">
                      <div 
                        className="h-2 rounded-full bg-gradient-to-r from-green-500 to-orange-500"
                        style={{width: `${channel.strength}%`}}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Methods */}
            <div className="bg-gradient-to-br from-red-900/30 to-orange-900/30 backdrop-blur-sm border border-orange-500/20 rounded-xl p-6 animate-volcanic-glow">
              <h4 className="text-xl font-bold text-orange-200 mb-4">Alternative Channels</h4>
              
              <div className="space-y-4">
                {[
                  { method: 'Quantum Entanglement', address: 'QE-7749-COSMIC', icon: '🌌' },
                  { method: 'Volcanic Signal Burst', address: 'VSB-OMEGA-PRIME', icon: '🔥' },
                  { method: 'Stellar Message Beam', address: 'SMB-ALPHA-CENTURI', icon: '⭐' },
                  { method: 'Emergency Beacon', address: 'EB-GALACTIC-001', icon: '🚨' }
                ].map((contact, index) => (
                  <div key={index} className="flex items-center space-x-4 animate-volcanic-fade-in" style={{animationDelay: `${index * 0.15}s`}}>
                    <div className="text-2xl animate-volcanic-float">{contact.icon}</div>
                    <div>
                      <div className="text-orange-200 font-medium">{contact.method}</div>
                      <div className="text-orange-300/80 text-sm font-mono">{contact.address}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Response Time */}
            <div className="bg-gradient-to-br from-red-900/30 to-orange-900/30 backdrop-blur-sm border border-orange-500/20 rounded-xl p-6 animate-volcanic-glow">
              <h4 className="text-xl font-bold text-orange-200 mb-4">Expected Response Time</h4>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-orange-300">Same Galaxy</span>
                  <span className="text-orange-100 font-bold">24 Earth Hours</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-orange-300">Neighboring Galaxies</span>
                  <span className="text-orange-100 font-bold">3-7 Standard Days</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-orange-300">Distant Universe</span>
                  <span className="text-orange-100 font-bold">2-4 Cosmic Cycles</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-orange-300">Emergency Priority</span>
                  <span className="text-red-400 font-bold">Instant</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Communication Signals */}
      {[...Array(15)].map((_, i) => (
        <div
          key={`signal-${i}`}
          className="absolute opacity-30 animate-volcanic-signal"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${i * 0.8}s`,
            animationDuration: `${6 + Math.random() * 4}s`
          }}
        >
          <div className="w-1 h-1 bg-orange-400 rounded-full animate-volcanic-pulse" />
        </div>
      ))}
    </section>
  );
} 