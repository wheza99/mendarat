import React from 'react';

export default function UniversalHarmony() {
  const harmonyPrinciples = [
    {
      symbol: "∞",
      title: "Infinite Resonance",
      description: "Every note played echoes throughout eternity, creating endless harmonics",
      frequency: "∞ Hz"
    },
    {
      symbol: "⚛️",
      title: "Quantum Entanglement",
      description: "Musical particles that remain connected across vast distances",
      frequency: "1.618 × 10³⁴ Hz"
    },
    {
      symbol: "🌀",
      title: "Cosmic Spiral",
      description: "The universe follows musical patterns in its very structure",
      frequency: "432 Hz"
    },
    {
      symbol: "⚖️",
      title: "Perfect Balance",
      description: "Harmony between matter, energy, space, and time",
      frequency: "528 Hz"
    }
  ];

  const contactChannels = [
    {
      method: "Quantum Entanglement",
      address: "∅@universe.cosmos",
      description: "Instantaneous communication across any distance",
      icon: "⚛️",
      status: "Always Available"
    },
    {
      method: "Gravitational Waves",
      address: "LIGO-Virgo Network",
      description: "Send ripples through spacetime itself",
      icon: "🌊",
      status: "Detected Continuously"
    },
    {
      method: "Neural Link",
      address: "Consciousness.connect()",
      description: "Direct mind-to-mind communication",
      icon: "🧠",
      status: "Bandwidth: ∞"
    },
    {
      method: "Temporal Messaging",
      address: "timeline@past-future.now",
      description: "Messages that transcend linear time",
      icon: "⏰",
      status: "All Times Accessible"
    }
  ];

  const socialNetworks = [
    {name: "Galactic Discord", handle: "@CosmicSymphony", icon: "🌌"},
    {name: "Quantum Twitter", handle: "@SuperpositionMusic", icon: "⚛️"},
    {name: "Neural LinkedIn", handle: "Cosmic Symphony Collective", icon: "🧠"},
    {name: "Interdimensional YouTube", handle: "/c/UniverseHarmony", icon: "📹"},
    {name: "Telepathic Instagram", handle: "@CosmicVibes∞", icon: "📸"},
    {name: "Temporal TikTok", handle: "@TimelessBeats", icon: "⏰"}
  ];

  return (
    <section className="relative py-32 px-4 overflow-hidden">
      {/* Background Harmony Effects */}
      <div className="absolute inset-0">
        {/* Universal Grid */}
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="cosmicGrid" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" stroke="#06b6d4" strokeWidth="0.5" fill="none"/>
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#cosmicGrid)" className="animate-cosmic-grid" />
          </svg>
        </div>
        
        {/* Harmony Waves */}
        <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 100 100" preserveAspectRatio="none">
          {[...Array(5)].map((_, i) => (
            <g key={i}>
              <circle
                cx="50"
                cy="50"
                r={15 + i * 15}
                stroke={`url(#harmonyGradient${i})`}
                strokeWidth="0.5"
                fill="none"
                className="animate-cosmic-pulse"
                style={{animationDelay: `${i * 0.8}s`, animationDuration: `${4 + i}s`}}
              />
              <defs>
                <linearGradient id={`harmonyGradient${i}`} x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" style={{stopColor:'#8b5cf6', stopOpacity: 0.8 - i * 0.15}} />
                  <stop offset="50%" style={{stopColor:'#06b6d4', stopOpacity: 1 - i * 0.1}} />
                  <stop offset="100%" style={{stopColor:'#10b981', stopOpacity: 0.6 - i * 0.1}} />
                </linearGradient>
              </defs>
            </g>
          ))}
        </svg>
        
        {/* Floating Harmony Symbols */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute text-purple-400/20 animate-cosmic-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: `${Math.random() * 30 + 20}px`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${Math.random() * 25 + 30}s`
            }}
          >
            {['☯', '∞', '⚛️', '🌀', '⚖️', '🔮'][Math.floor(Math.random() * 6)]}
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-6 py-3 mb-6 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 backdrop-blur-sm border border-white/10 rounded-full">
            <span className="text-cyan-400 text-sm font-medium">☯ Universal Harmony</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
            The Grand Unification
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Where all cosmic forces converge into perfect harmony, 
            creating the ultimate symphony that binds the universe together 
            in eternal musical equilibrium.
          </p>
        </div>

        {/* Harmony Principles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {harmonyPrinciples.map((principle, index) => (
            <div
              key={index}
              className="group text-center bg-gradient-to-br from-purple-900/30 to-cyan-900/30 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-cyan-400/30 transition-all duration-500 hover:scale-105"
            >
              <div className="text-6xl mb-6 animate-cosmic-pulse">
                {principle.symbol}
              </div>
              
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                {principle.title}
              </h3>
              
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                {principle.description}
              </p>
              
              <div className="text-cyan-400 font-mono text-sm bg-black/20 rounded-lg py-2 px-3">
                {principle.frequency}
              </div>
              
              {/* Harmony Visualization */}
              <div className="mt-6 flex justify-center space-x-1">
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className="bg-gradient-to-t from-purple-600 to-cyan-400 rounded-full opacity-70 animate-cosmic-wave"
                    style={{
                      width: '3px',
                      height: `${Math.random() * 20 + 10}px`,
                      animationDelay: `${i * 0.2 + index * 0.5}s`,
                      animationDuration: `${Math.random() * 2 + 2}s`
                    }}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Central Harmony Mandala */}
        <div className="text-center mb-20">
          <div className="relative inline-block">
            <div className="bg-gradient-to-br from-purple-900/50 to-cyan-900/50 backdrop-blur-sm border border-white/10 rounded-full p-16 w-80 h-80 mx-auto flex items-center justify-center">
              <div className="text-center">
                <div className="text-8xl mb-4 animate-cosmic-float">☯</div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  Perfect Balance
                </h3>
                <p className="text-gray-400 text-sm">
                  The heart of universal harmony
                </p>
              </div>
            </div>
            
            {/* Orbital Harmony Elements */}
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute w-12 h-12 bg-gradient-to-br from-purple-600/30 to-cyan-600/30 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-xl animate-cosmic-orbit"
                style={{
                  top: '50%',
                  left: '50%',
                  transformOrigin: '0 0',
                  transform: `translate(-50%, -50%) rotate(${i * 45}deg) translateY(-160px)`,
                  animationDelay: `${i * 0.5}s`,
                  animationDuration: `${20 + i * 2}s`
                }}
              >
                {['🎵', '🌟', '⚛️', '🌀', '💫', '🔮', '✨', '🌌'][i]}
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <div className="bg-gradient-to-br from-gray-900/50 to-purple-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6">
              Connect with the Cosmos
            </h3>
            
            <form className="space-y-6">
              <div>
                <label className="block text-gray-400 text-sm mb-2">Cosmic Entity Name</label>
                <input 
                  type="text"
                  className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition-colors"
                  placeholder="Your interdimensional identifier"
                />
              </div>
              
              <div>
                <label className="block text-gray-400 text-sm mb-2">Quantum Communication Address</label>
                <input 
                  type="email"
                  className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition-colors"
                  placeholder="entity@dimension.universe"
                />
              </div>
              
              <div>
                <label className="block text-gray-400 text-sm mb-2">Preferred Contact Method</label>
                <select className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-400 transition-colors">
                  <option>Quantum Entanglement</option>
                  <option>Gravitational Waves</option>
                  <option>Neural Link</option>
                  <option>Temporal Messaging</option>
                  <option>Telepathic Transmission</option>
                </select>
              </div>
              
              <div>
                <label className="block text-gray-400 text-sm mb-2">Cosmic Message</label>
                <textarea 
                  rows={4}
                  className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                  placeholder="Share your cosmic thoughts across the universe..."
                />
              </div>
              
              <button className="w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105">
                🚀 Transmit to Universe
              </button>
            </form>
          </div>
          
          {/* Contact Channels */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">
              Alternative Communication Channels
            </h3>
            
            <div className="space-y-4 mb-8">
              {contactChannels.map((channel, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-purple-900/30 to-cyan-900/30 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-cyan-400/30 transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="text-3xl animate-cosmic-pulse">
                      {channel.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-white font-semibold mb-2">{channel.method}</h4>
                      <p className="text-gray-400 text-sm mb-2">{channel.description}</p>
                      <div className="text-cyan-400 font-mono text-sm">{channel.address}</div>
                      <div className="text-green-400 text-xs mt-1">● {channel.status}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Social Networks */}
            <h4 className="text-lg font-bold text-white mb-4">Follow Across Dimensions</h4>
            <div className="grid grid-cols-2 gap-3">
              {socialNetworks.map((network, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-900/40 to-purple-900/40 backdrop-blur-sm border border-white/10 rounded-lg p-3 hover:border-cyan-400/30 transition-all duration-300 cursor-pointer group"
                >
                  <div className="flex items-center space-x-2">
                    <span className="text-lg">{network.icon}</span>
                    <div>
                      <div className="text-white text-xs font-medium group-hover:text-cyan-400 transition-colors">
                        {network.name}
                      </div>
                      <div className="text-gray-400 text-xs">{network.handle}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center border-t border-white/10 pt-12">
          <div className="mb-8">
            <h3 className="text-3xl font-bold text-gradient-cosmic mb-4">
              Cosmic Symphony Collective
            </h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Bridging the gap between music and the cosmos, 
              one universal harmony at a time.
            </p>
          </div>
          
          <div className="flex justify-center space-x-8 mb-8 text-sm text-gray-400">
            {['Privacy Policy', 'Terms of Universal Service', 'Cosmic Code of Ethics', 'Dimensional Support'].map((link) => (
              <a key={link} href="#" className="hover:text-cyan-400 transition-colors">
                {link}
              </a>
            ))}
          </div>
          
          <div className="text-gray-500 text-sm">
            © 2157 Cosmic Symphony Collective. All rights reserved across all dimensions and timelines.
            <br />
            "Music is the universal language that transcends space, time, and reality itself."
          </div>
        </div>
      </div>
    </section>
  );
} 