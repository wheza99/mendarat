import React from 'react';

export default function StellarInstruments() {
  const instruments = [
    {
      name: "Quantum Synthesizer",
      type: "Electronic Cosmos",
      rarity: "Legendary",
      power: "97%",
      description: "Manipulates quantum fields to create otherworldly sounds",
      features: ["Multi-dimensional harmonics", "Parallel universe sampling", "Reality distortion effects"],
      price: "∞ Stardust",
      image: "🎛️"
    },
    {
      name: "Nebula Percussion Matrix",
      type: "Cosmic Rhythm",
      rarity: "Epic",
      power: "89%",
      description: "Harnesses the explosive energy of dying stars",
      features: ["Supernova bass drops", "Meteor shower patterns", "Stellar wind textures"],
      price: "500M Credits",
      image: "🥁"
    },
    {
      name: "Gravitational Wave Harp",
      type: "String Theory",
      rarity: "Mythic",
      power: "94%",
      description: "Strings vibrate across spacetime itself",
      features: ["Dimensional resonance", "Time dilation effects", "Gravity manipulation"],
      price: "750M Credits",
      image: "🎵"
    },
    {
      name: "Solar Wind Orchestra",
      type: "Atmospheric",
      rarity: "Rare",
      power: "83%",
      description: "Channels the breath of stars into melodic streams",
      features: ["Stellar atmosphere samples", "Plasma wave synthesis", "Coronal mass harmonics"],
      price: "250M Credits",
      image: "🌟"
    },
    {
      name: "Black Hole Resonator",
      type: "Deep Space",
      rarity: "Legendary",
      power: "99%",
      description: "Extracts musical frequencies from event horizons",
      features: ["Infinite reverb", "Singularity compression", "Hawking radiation beats"],
      price: "1B Credits",
      image: "🕳️"
    },
    {
      name: "Comet Tail Violin",
      type: "Classical Cosmic",
      rarity: "Epic",
      power: "91%",
      description: "Bow crafted from crystallized comet trails",
      features: ["Ice crystal harmonics", "Orbital velocity vibrato", "Interstellar dust texture"],
      price: "400M Credits",
      image: "🎻"
    }
  ];

  const rarityColors: Record<string, string> = {
    "Common": "from-gray-400 to-gray-600",
    "Rare": "from-blue-400 to-blue-600",
    "Epic": "from-purple-400 to-purple-600",
    "Legendary": "from-yellow-400 to-orange-500",
    "Mythic": "from-pink-400 to-red-500"
  };

  return (
    <section className="relative py-32 px-4 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Instrument Energy Waves */}
        <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 100 100" preserveAspectRatio="none">
          {[...Array(8)].map((_, i) => (
            <g key={i}>
              <circle
                cx="50"
                cy="50"
                r={10 + i * 10}
                stroke="#8b5cf6"
                strokeWidth="0.5"
                fill="none"
                className="animate-cosmic-pulse"
                style={{animationDelay: `${i * 0.5}s`}}
              />
            </g>
          ))}
        </svg>
        
        {/* Floating Tech Elements */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute text-cyan-400/20 animate-cosmic-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: `${Math.random() * 25 + 15}px`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${Math.random() * 25 + 20}s`
            }}
          >
            {['⚡', '🔬', '🛸', '💫', '⭐'][Math.floor(Math.random() * 5)]}
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-6 py-3 mb-6 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 backdrop-blur-sm border border-white/10 rounded-full">
            <span className="text-cyan-400 text-sm font-medium">🎸 Stellar Instruments</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
            Cosmic Arsenal
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Discover legendary instruments forged in the hearts of stars, 
            each capable of channeling the raw power of the cosmos into pure music.
          </p>
        </div>

        {/* Instruments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {instruments.map((instrument, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-gray-900/40 to-purple-900/40 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-cyan-400/30 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20"
            >
              {/* Rarity Glow */}
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${rarityColors[instrument.rarity]} rounded-2xl opacity-0 group-hover:opacity-50 transition-opacity duration-500 blur-sm`} />
              
              <div className="relative p-8">
                {/* Instrument Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="text-6xl animate-cosmic-pulse">
                    {instrument.image}
                  </div>
                  <div className="text-right">
                    <div className={`inline-block px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r ${rarityColors[instrument.rarity]} text-white mb-2`}>
                      {instrument.rarity}
                    </div>
                    <div className="text-gray-400 text-sm">
                      {instrument.type}
                    </div>
                  </div>
                </div>

                {/* Instrument Info */}
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {instrument.name}
                </h3>
                
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {instrument.description}
                </p>

                {/* Power Level */}
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-400 text-sm">Power Level</span>
                    <span className="text-cyan-400 font-bold">{instrument.power}</span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-purple-500 to-cyan-500 h-2 rounded-full animate-cosmic-progress"
                      style={{width: instrument.power}}
                    />
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Cosmic Features</h4>
                  <div className="space-y-2">
                    {instrument.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-cosmic-twinkle" />
                        <span className="text-gray-400 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Price and Action */}
                <div className="flex items-center justify-between pt-6 border-t border-white/10">
                  <div>
                    <div className="text-xl font-bold text-gradient-cosmic">
                      {instrument.price}
                    </div>
                    <div className="text-gray-500 text-xs">Market Price</div>
                  </div>
                  
                  <button className="px-6 py-2 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold rounded-full hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 text-sm">
                    Acquire
                  </button>
                </div>

                {/* Energy Visualization */}
                <div className="mt-6 flex justify-center space-x-1">
                  {[...Array(12)].map((_, i) => (
                    <div
                      key={i}
                      className="bg-gradient-to-t from-purple-600 to-cyan-400 rounded-full opacity-60 animate-cosmic-wave"
                      style={{
                        width: '2px',
                        height: `${Math.random() * 25 + 8}px`,
                        animationDelay: `${i * 0.1 + index * 0.3}s`,
                        animationDuration: `${Math.random() * 1.5 + 1}s`
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20">
          <div className="bg-gradient-to-br from-purple-900/30 to-cyan-900/30 backdrop-blur-sm border border-white/10 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Master the Cosmos?
            </h3>
            <p className="text-gray-400 mb-6">
              Join the Galactic Conservatory and learn to wield instruments 
              that can bend reality itself through the power of cosmic music.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold rounded-full hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105">
                🎼 Begin Training
              </button>
              <button className="px-8 py-3 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300">
                📚 View Catalog
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 