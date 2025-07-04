import React from 'react';

export default function NebulaComposer() {
  const compositionTools = [
    {
      name: "Stellar Sequencer",
      description: "Arrange cosmic events in perfect temporal harmony",
      icon: "⭐",
      status: "Active",
      progress: 87
    },
    {
      name: "Quantum Mixer",
      description: "Blend parallel universe soundscapes",
      icon: "🌀",
      status: "Processing",
      progress: 65
    },
    {
      name: "Galaxy Synthesizer",
      description: "Generate new worlds through sound waves",
      icon: "🌌",
      status: "Idle",
      progress: 23
    },
    {
      name: "Nebula Reverb",
      description: "Add cosmic depth spanning light-years",
      icon: "☁️",
      status: "Active",
      progress: 94
    }
  ];

  const activeCompositions = [
    {
      title: "Symphony of the Void",
      genre: "Dark Space",
      duration: "∞:∞:∞",
      complexity: "Transcendent",
      collaboration: "Black Hole Collective",
      waveform: Array.from({length: 20}, () => Math.random() * 80 + 10)
    },
    {
      title: "Birth of a Galaxy",
      genre: "Cosmic Creation",
      duration: "13.8B Years",
      complexity: "Universal",
      collaboration: "Big Bang Orchestra",
      waveform: Array.from({length: 20}, () => Math.random() * 60 + 20)
    },
    {
      title: "Pulsar Rhythms",
      genre: "Neutron Jazz",
      duration: "1.337ms Loop",
      complexity: "Quantum",
      collaboration: "Solo Performance",
      waveform: Array.from({length: 20}, () => Math.random() * 40 + 30)
    }
  ];

  return (
    <section className="relative py-32 px-4 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Composer Interface Grid */}
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-12 grid-rows-8 h-full w-full">
            {Array.from({length: 96}).map((_, i) => (
              <div 
                key={i}
                className="border border-cyan-400/20 animate-cosmic-grid"
                style={{animationDelay: `${(i % 12) * 0.1}s`}}
              />
            ))}
          </div>
        </div>
        
        {/* Floating Composition Elements */}
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute text-purple-400/20 animate-cosmic-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: `${Math.random() * 20 + 10}px`,
              animationDelay: `${Math.random() * 15}s`,
              animationDuration: `${Math.random() * 30 + 25}s`
            }}
          >
            {['♪', '♫', '♬', '♩', '♮', '♯', '♭'][Math.floor(Math.random() * 7)]}
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-6 py-3 mb-6 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 backdrop-blur-sm border border-white/10 rounded-full">
            <span className="text-cyan-400 text-sm font-medium">🎼 Nebula Composer</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
            Cosmic Creation Studio
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Harness the creative power of stellar phenomena to compose 
            symphonies that resonate across dimensions and transcend time itself.
          </p>
        </div>

        {/* Composition Tools */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {compositionTools.map((tool, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-gray-900/40 to-purple-900/40 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-cyan-400/30 transition-all duration-300 hover:scale-105"
            >
              <div className="text-center">
                <div className="text-4xl mb-4 animate-cosmic-pulse">
                  {tool.icon}
                </div>
                
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {tool.name}
                </h3>
                
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  {tool.description}
                </p>

                {/* Status Indicator */}
                <div className="flex items-center justify-center space-x-2 mb-4">
                  <div className={`w-2 h-2 rounded-full ${
                    tool.status === 'Active' ? 'bg-green-400' :
                    tool.status === 'Processing' ? 'bg-yellow-400' :
                    'bg-gray-400'
                  } animate-cosmic-pulse`} />
                  <span className="text-xs text-gray-400">{tool.status}</span>
                </div>

                {/* Progress Bar */}
                <div className="w-full bg-gray-800 rounded-full h-2 mb-4">
                  <div 
                    className="bg-gradient-to-r from-purple-500 to-cyan-500 h-2 rounded-full animate-cosmic-progress"
                    style={{width: `${tool.progress}%`}}
                  />
                </div>
                
                <div className="text-cyan-400 font-mono text-sm">{tool.progress}%</div>
              </div>
            </div>
          ))}
        </div>

        {/* Active Compositions */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">
            Active Compositions
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {activeCompositions.map((composition, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-purple-900/30 to-cyan-900/30 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-cyan-400/30 transition-all duration-500 hover:scale-105"
              >
                {/* Waveform Visualization */}
                <div className="mb-6">
                  <div className="flex justify-center items-end space-x-1 h-20 bg-black/20 rounded-lg p-2">
                    {composition.waveform.map((height, i) => (
                      <div
                        key={i}
                        className="bg-gradient-to-t from-purple-600 to-cyan-400 rounded-sm opacity-80 animate-cosmic-wave"
                        style={{
                          width: '4px',
                          height: `${height}px`,
                          animationDelay: `${i * 0.1 + index * 0.5}s`,
                          animationDuration: `${Math.random() * 2 + 1}s`
                        }}
                      />
                    ))}
                  </div>
                </div>

                <h4 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {composition.title}
                </h4>
                
                <div className="space-y-2 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-400 text-sm">Genre</span>
                    <span className="text-purple-400 text-sm">{composition.genre}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400 text-sm">Duration</span>
                    <span className="text-cyan-400 text-sm font-mono">{composition.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400 text-sm">Complexity</span>
                    <span className="text-emerald-400 text-sm">{composition.complexity}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400 text-sm">Collaboration</span>
                    <span className="text-gray-300 text-sm">{composition.collaboration}</span>
                  </div>
                </div>

                <div className="flex space-x-2">
                  <button className="flex-1 px-4 py-2 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 text-sm">
                    ▶ Play
                  </button>
                  <button className="px-4 py-2 bg-white/10 backdrop-blur-sm text-white rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300 text-sm">
                    ✏️
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Composition Interface */}
        <div className="bg-gradient-to-br from-gray-900/50 to-purple-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            Cosmic Composition Interface
          </h3>
          
          {/* Virtual Keyboard */}
          <div className="mb-8">
            <div className="flex justify-center space-x-1 mb-4">
              {/* White Keys */}
              {Array.from({length: 14}).map((_, i) => (
                <div
                  key={`white-${i}`}
                  className="w-12 h-24 bg-white/90 border border-gray-300 rounded-b-lg cursor-pointer hover:bg-cyan-200 transition-colors duration-150 animate-cosmic-glow"
                  style={{animationDelay: `${i * 0.1}s`}}
                />
              ))}
            </div>
            
            {/* Black Keys */}
            <div className="flex justify-center space-x-1 relative -mt-16 ml-6">
              {Array.from({length: 10}).map((_, i) => (
                <div
                  key={`black-${i}`}
                  className={`w-8 h-16 bg-gray-900 border border-gray-700 rounded-b-lg cursor-pointer hover:bg-purple-800 transition-colors duration-150 ${
                    i === 2 || i === 6 ? 'ml-12' : ''
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Control Panel */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-4">
              <h4 className="text-white font-semibold">Cosmic Parameters</h4>
              <div className="space-y-3">
                <div>
                  <label className="text-gray-400 text-sm">Stellar Density</label>
                  <div className="w-full bg-gray-800 rounded-full h-2 mt-1">
                    <div className="bg-gradient-to-r from-purple-500 to-cyan-500 h-2 rounded-full w-3/4" />
                  </div>
                </div>
                <div>
                  <label className="text-gray-400 text-sm">Gravity Influence</label>
                  <div className="w-full bg-gray-800 rounded-full h-2 mt-1">
                    <div className="bg-gradient-to-r from-purple-500 to-cyan-500 h-2 rounded-full w-1/2" />
                  </div>
                </div>
                <div>
                  <label className="text-gray-400 text-sm">Time Dilation</label>
                  <div className="w-full bg-gray-800 rounded-full h-2 mt-1">
                    <div className="bg-gradient-to-r from-purple-500 to-cyan-500 h-2 rounded-full w-5/6" />
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-white font-semibold">Dimensional Controls</h4>
              <div className="grid grid-cols-2 gap-2">
                {['3D', '4D', '5D', '∞D'].map((dimension) => (
                  <button
                    key={dimension}
                    className="px-4 py-2 bg-white/10 backdrop-blur-sm text-white rounded-lg border border-white/20 hover:bg-purple-600/30 transition-all duration-300 text-sm"
                  >
                    {dimension}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-white font-semibold">Export Options</h4>
              <div className="space-y-2">
                <button className="w-full px-4 py-2 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300">
                  🌌 Broadcast to Galaxy
                </button>
                <button className="w-full px-4 py-2 bg-white/10 backdrop-blur-sm text-white rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300">
                  💾 Save to Nebula Cloud
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 