import React from 'react';

export default function VirtualRealms() {
  const realms = [
    {
      name: 'Neon Metropolis',
      description: 'Cyberpunk cityscape where digital rain never stops',
      type: 'Urban Dreams',
      users: '47.2K',
      status: 'Active'
    },
    {
      name: 'Crystal Gardens',
      description: 'Crystalline forests with impossible geometry',
      type: 'Nature Dreams',
      users: '31.8K',
      status: 'Active'
    },
    {
      name: 'Quantum Void',
      description: 'Space between dimensions where thoughts materialize',
      type: 'Abstract Dreams',
      users: '89.5K',
      status: 'Active'
    },
    {
      name: 'Memory Palace',
      description: 'Infinite library containing all forgotten dreams',
      type: 'Memory Dreams',
      users: '62.1K',
      status: 'Expanding'
    },
    {
      name: 'Neural Maze',
      description: 'Ever-changing labyrinth of consciousness paths',
      type: 'Mind Dreams',
      users: '38.9K',
      status: 'Active'
    },
    {
      name: 'Echo Chamber',
      description: 'Where digital whispers become reality',
      type: 'Sound Dreams',
      users: '52.7K',
      status: 'Resonating'
    }
  ];

  return (
    <section className="relative py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-indigo-900/40 to-purple-900/40 backdrop-blur-sm border border-cyan-400/30 rounded-full px-6 py-2 mb-6">
            <span className="text-cyan-200 text-sm font-medium uppercase tracking-wider">Virtual Realms</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Infinite Worlds
            </span>
          </h2>
          <p className="text-xl text-purple-200 max-w-3xl mx-auto">
            Explore boundless digital realms where imagination becomes reality and 
            consciousness shapes the very fabric of existence.
          </p>
        </div>

        {/* Realms Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {realms.map((realm, index) => (
            <div 
              key={index} 
              className="group relative bg-gradient-to-br from-indigo-900/30 to-purple-900/30 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-6 hover:border-purple-400/40 transition-all duration-500 animate-dream-slide-in overflow-hidden"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              {/* Status Indicator */}
              <div className="flex items-center justify-between mb-4">
                <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-cyan-500 to-purple-600 text-white">
                  <div className="w-2 h-2 bg-white rounded-full mr-2 animate-dream-pulse" />
                  {realm.status}
                </div>
                <div className="text-purple-300 text-sm">{realm.users} Users</div>
              </div>

              {/* Realm Info */}
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors duration-300">
                  {realm.name}
                </h3>
                <p className="text-purple-200 text-sm mb-4 leading-relaxed">
                  {realm.description}
                </p>
                <div className="text-cyan-400 text-xs uppercase tracking-wider font-medium">
                  {realm.type}
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity duration-500">
                <div className="w-8 h-8 border border-cyan-400 rounded-full animate-dream-spin" />
                <div className="absolute inset-2 bg-gradient-to-br from-cyan-400 to-purple-400 rounded-full animate-dream-pulse" />
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />
            </div>
          ))}
        </div>

        {/* Realm Explorer */}
        <div className="bg-gradient-to-br from-indigo-900/20 to-purple-900/20 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-8">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-4">
                Realm Explorer
              </h3>
              <p className="text-purple-200 mb-6 leading-relaxed">
                Navigate through infinite virtual realms with our advanced consciousness transfer protocol. 
                Each realm adapts to your digital essence, creating unique experiences tailored to your neural patterns.
              </p>
              
              <div className="space-y-4">
                {[
                  'Instant consciousness transfer',
                  'Adaptive reality rendering',
                  'Multi-dimensional navigation',
                  'Persistent dream states'
                ].map((feature, index) => (
                  <div key={index} className="flex items-center animate-dream-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                    <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full mr-3 animate-dream-pulse" />
                    <span className="text-purple-200">{feature}</span>
                  </div>
                ))}
              </div>

              <button className="mt-6 px-6 py-3 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-lg font-semibold text-white hover:from-cyan-500 hover:to-purple-500 transition-all duration-300 animate-dream-glow">
                Launch Explorer
              </button>
            </div>

            <div className="relative">
              <div className="aspect-square max-w-md mx-auto relative">
                {/* Portal Visualization */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-purple-600/20 rounded-full animate-dream-spin backdrop-blur-sm" />
                
                {/* Portal Rings */}
                {[...Array(5)].map((_, i) => (
                  <div
                    key={`portal-ring-${i}`}
                    className="absolute inset-0 border-2 border-cyan-400/30 rounded-full animate-dream-spin"
                    style={{
                      transform: `scale(${0.3 + i * 0.15})`,
                      animationDelay: `${i * 0.3}s`,
                      animationDuration: `${6 + i}s`,
                      animationDirection: i % 2 === 0 ? 'normal' : 'reverse'
                    }}
                  />
                ))}

                {/* Portal Center */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-full animate-dream-pulse shadow-2xl shadow-purple-500/50">
                    <div className="w-full h-full flex items-center justify-center">
                      <svg className="w-12 h-12 text-white animate-dream-flicker" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2L2 7L12 12L22 7L12 2Z" />
                        <path d="M2 17L12 22L22 17" />
                        <path d="M2 12L12 17L22 12" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Realm Indicators */}
                {[...Array(6)].map((_, i) => (
                  <div
                    key={`realm-indicator-${i}`}
                    className="absolute w-4 h-4 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full animate-dream-orbit"
                    style={{
                      top: '50%',
                      left: '50%',
                      transformOrigin: `0 ${60 + i * 15}px`,
                      animationDelay: `${i * 0.5}s`,
                      animationDuration: `${10 + i * 2}s`
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Floating Realm Fragments */}
        {[...Array(15)].map((_, i) => (
          <div
            key={`fragment-${i}`}
            className="absolute opacity-20 animate-dream-drift"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${15 + Math.random() * 10}s`
            }}
          >
            <div className="w-6 h-6 bg-gradient-to-br from-cyan-400 to-purple-400 rounded transform rotate-45 animate-dream-flicker" />
          </div>
        ))}
      </div>
    </section>
  );
} 