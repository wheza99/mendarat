import React from 'react';

export default function GalacticOrchestra() {
  const orchestraMembers = [
    {
      name: "Nebula Harpist",
      constellation: "Andromeda",
      instrument: "Cosmic Harp",
      frequency: "528Hz",
      icon: "🎵",
      description: "Plucks stardust strings to create ethereal melodies"
    },
    {
      name: "Pulsar Drummer",
      constellation: "Centaurus",
      instrument: "Neutron Drums",
      frequency: "1.337Hz",
      icon: "🥁",
      description: "Rhythmic pulse that synchronizes with cosmic heartbeat"
    },
    {
      name: "Solar Wind Flutist",
      constellation: "Orion",
      instrument: "Plasma Flute",
      frequency: "741Hz",
      icon: "🎶",
      description: "Breathes solar winds into celestial harmonies"
    },
    {
      name: "Galaxy Pianist",
      constellation: "Milky Way",
      instrument: "Quantum Keys",
      frequency: "852Hz",
      icon: "🎹",
      description: "Each key represents a different stellar system"
    },
    {
      name: "Cosmic Violinist",
      constellation: "Cassiopeia",
      instrument: "String Theory",
      frequency: "396Hz",
      icon: "🎻",
      description: "Vibrates the fabric of space-time itself"
    },
    {
      name: "Black Hole Bassist",
      constellation: "Sagittarius",
      instrument: "Gravity Bass",
      frequency: "40Hz",
      icon: "🎸",
      description: "Deep resonance that bends reality around sound"
    }
  ];

  return (
    <section className="relative py-32 px-4 overflow-hidden">
      {/* Background Cosmic Effects */}
      <div className="absolute inset-0">
        {/* Musical Staff Lines */}
        <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 100 100" preserveAspectRatio="none">
          {[...Array(5)].map((_, i) => (
            <line
              key={i}
              x1="0"
              y1={20 + i * 15}
              x2="100"
              y2={20 + i * 15}
              stroke="#06b6d4"
              strokeWidth="0.5"
              className="animate-cosmic-wave"
              style={{animationDelay: `${i * 0.3}s`}}
            />
          ))}
        </svg>
        
        {/* Floating Musical Notes */}
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute text-purple-400/30 animate-cosmic-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: `${Math.random() * 20 + 15}px`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${Math.random() * 20 + 15}s`
            }}
          >
            {['♪', '♫', '♬', '♩', '♮'][Math.floor(Math.random() * 5)]}
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-6 py-3 mb-6 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 backdrop-blur-sm border border-white/10 rounded-full">
            <span className="text-cyan-400 text-sm font-medium">🎼 Galactic Orchestra</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
            Celestial Musicians
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Meet the cosmic artists who compose the universe's greatest symphonies, 
            each playing instruments forged from stellar matter and cosmic energy.
          </p>
        </div>

        {/* Orchestra Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {orchestraMembers.map((member, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-purple-900/20 to-cyan-900/20 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-cyan-400/30 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10"
              style={{animationDelay: `${index * 0.2}s`}}
            >
              {/* Cosmic Energy Ring */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 blur-sm" />
              
              <div className="relative">
                {/* Instrument Icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className="text-4xl animate-cosmic-pulse">
                    {member.icon}
                  </div>
                  <div className="text-right">
                    <div className="text-cyan-400 text-sm font-mono">
                      {member.frequency}
                    </div>
                    <div className="text-gray-500 text-xs">
                      {member.constellation}
                    </div>
                  </div>
                </div>

                {/* Member Info */}
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {member.name}
                </h3>
                
                <div className="text-purple-400 font-medium mb-4">
                  {member.instrument}
                </div>
                
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {member.description}
                </p>

                {/* Performance Indicator */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-cosmic-pulse" />
                    <span className="text-green-400 text-xs font-medium">
                      Currently Performing
                    </span>
                  </div>
                  
                  <button className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm">
                    Listen →
                  </button>
                </div>

                {/* Sound Wave Visualization */}
                <div className="mt-4 flex justify-center space-x-1">
                  {[...Array(8)].map((_, i) => (
                    <div
                      key={i}
                      className="bg-gradient-to-t from-purple-600 to-cyan-400 rounded-full opacity-60 animate-cosmic-wave"
                      style={{
                        width: '2px',
                        height: `${Math.random() * 20 + 5}px`,
                        animationDelay: `${i * 0.1 + index * 0.5}s`,
                        animationDuration: `${Math.random() * 1 + 0.5}s`
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Cosmic Conductor */}
        <div className="text-center">
          <div className="inline-block relative">
            <div className="bg-gradient-to-br from-purple-800/30 to-cyan-800/30 backdrop-blur-sm border border-white/10 rounded-2xl p-8 max-w-md">
              <div className="text-6xl mb-4 animate-cosmic-float">🌌</div>
              <h3 className="text-2xl font-bold text-white mb-2">
                Cosmic Conductor
              </h3>
              <p className="text-gray-400 text-sm mb-4">
                The universe itself orchestrates this eternal symphony
              </p>
              <div className="flex justify-center space-x-2">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="w-1 h-8 bg-gradient-to-t from-purple-600 to-cyan-400 rounded-full animate-cosmic-wave"
                    style={{
                      animationDelay: `${i * 0.2}s`,
                      animationDuration: '2s'
                    }}
                  />
                ))}
              </div>
            </div>
            
            {/* Orbital Elements */}
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="absolute border border-cyan-400/20 rounded-full animate-cosmic-orbit"
                style={{
                  width: `${120 + i * 60}px`,
                  height: `${120 + i * 60}px`,
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  animationDelay: `${i * 1}s`,
                  animationDuration: `${10 + i * 5}s`
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 