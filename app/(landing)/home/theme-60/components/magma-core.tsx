import React from 'react';

export default function MagmaCore() {
  return (
    <section className="relative py-20 px-6 overflow-hidden">
      {/* Background Lava Flow */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 via-orange-900/30 to-yellow-900/20 animate-volcanic-flow" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-red-900/40 to-orange-900/40 backdrop-blur-sm border border-orange-500/30 rounded-full px-6 py-2 mb-6">
            <span className="text-orange-200 text-sm font-medium uppercase tracking-wider">Magma Core Engine</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-orange-400 via-red-400 to-yellow-400 bg-clip-text text-transparent">
              Power of Creation
            </span>
          </h2>
          <p className="text-xl text-orange-100 max-w-3xl mx-auto leading-relaxed">
            At the heart of volcanic cosmos lies the magma core - a fusion reactor that transforms raw planetary energy into cosmic possibilities.
          </p>
        </div>

        {/* Central Magma Core Visualization */}
        <div className="relative flex justify-center mb-20">
          <div className="relative w-96 h-96">
            {/* Core Rings */}
            {[...Array(5)].map((_, i) => (
              <div
                key={`ring-${i}`}
                className="absolute inset-0 border-2 rounded-full animate-volcanic-spin"
                style={{
                  borderColor: `rgba(${255 - i * 40}, ${100 + i * 30}, 0, ${0.3 + i * 0.1})`,
                  transform: `scale(${1 - i * 0.15})`,
                  animationDelay: `${i * 0.5}s`,
                  animationDuration: `${20 + i * 5}s`
                }}
              />
            ))}
            
            {/* Central Core */}
            <div className="absolute inset-8 bg-gradient-radial from-orange-400 via-red-500 to-yellow-600 rounded-full animate-volcanic-pulse shadow-lg shadow-orange-500/50" />
            
            {/* Energy Sparks */}
            {[...Array(12)].map((_, i) => (
              <div
                key={`spark-${i}`}
                className="absolute w-3 h-3 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full animate-volcanic-spark"
                style={{
                  left: '50%',
                  top: '50%',
                  transformOrigin: '6px 6px',
                  transform: `rotate(${i * 30}deg) translateY(-120px)`,
                  animationDelay: `${i * 0.3}s`
                }}
              />
            ))}
          </div>
        </div>

        {/* Core Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            { 
              title: 'Core Temperature', 
              value: '6,000°C', 
              description: 'Hotter than the surface of the Sun',
              icon: '🔥'
            },
            { 
              title: 'Energy Output', 
              value: '847 TW', 
              description: 'Powering galactic civilizations',
              icon: '⚡'
            },
            { 
              title: 'Cosmic Reach', 
              value: '15.8 LY', 
              description: 'Light-years of influence radius',
              icon: '🌌'
            }
          ].map((stat, index) => (
            <div key={index} className="text-center animate-volcanic-fade-in" style={{animationDelay: `${index * 0.3}s`}}>
              <div className="bg-gradient-to-br from-red-900/30 to-orange-900/30 backdrop-blur-sm border border-orange-500/20 rounded-xl p-8 hover:border-orange-400/40 transition-all duration-300 group">
                <div className="text-4xl mb-4 animate-volcanic-float">{stat.icon}</div>
                <div className="text-3xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent mb-2 animate-volcanic-count">
                  {stat.value}
                </div>
                <div className="text-lg font-semibold text-orange-200 mb-2">{stat.title}</div>
                <div className="text-orange-300/70 text-sm">{stat.description}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Volcanic Processes */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h3 className="text-3xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
              Cosmic Forging Process
            </h3>
            
            {[
              { step: '01', title: 'Planetary Ignition', description: 'Raw planetary matter reaches critical fusion temperature' },
              { step: '02', title: 'Magma Transformation', description: 'Molten elements combine with cosmic radiation' },
              { step: '03', title: 'Energy Crystallization', description: 'Pure energy forms into cosmic crystal structures' },
              { step: '04', title: 'Universal Projection', description: 'Energy streams reach across star systems' }
            ].map((process, index) => (
              <div key={index} className="flex items-start space-x-4 animate-volcanic-slide-in" style={{animationDelay: `${index * 0.2}s`}}>
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm animate-volcanic-glow">
                  {process.step}
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-orange-200 mb-2">{process.title}</h4>
                  <p className="text-orange-300/80">{process.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Volcanic Energy Visualization */}
          <div className="relative">
            <div className="bg-gradient-to-br from-red-900/30 to-orange-900/30 backdrop-blur-sm border border-orange-500/20 rounded-2xl p-8 animate-volcanic-glow">
              <h4 className="text-2xl font-bold text-orange-200 mb-6">Energy Flow Matrix</h4>
              
              {/* Energy Bars */}
              <div className="space-y-4">
                {[
                  { label: 'Thermal Energy', percentage: 95, color: 'from-red-500 to-orange-500' },
                  { label: 'Cosmic Radiation', percentage: 87, color: 'from-orange-500 to-yellow-500' },
                  { label: 'Magnetic Field', percentage: 92, color: 'from-yellow-500 to-red-500' },
                  { label: 'Quantum Flux', percentage: 78, color: 'from-red-400 to-orange-400' }
                ].map((energy, index) => (
                  <div key={index} className="animate-volcanic-slide-in" style={{animationDelay: `${index * 0.1}s`}}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-orange-200 text-sm font-medium">{energy.label}</span>
                      <span className="text-orange-300 text-sm">{energy.percentage}%</span>
                    </div>
                    <div className="w-full bg-gray-800/50 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full bg-gradient-to-r ${energy.color} animate-volcanic-progress`}
                        style={{width: `${energy.percentage}%`}}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Lava Drops */}
      {[...Array(8)].map((_, i) => (
        <div
          key={`lava-drop-${i}`}
          className="absolute bg-gradient-to-b from-orange-400 to-red-500 opacity-30 animate-volcanic-drop"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: '8px',
            height: '12px',
            borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%',
            animationDelay: `${i * 1.5}s`,
            animationDuration: `${6 + Math.random() * 4}s`
          }}
        />
      ))}
    </section>
  );
} 