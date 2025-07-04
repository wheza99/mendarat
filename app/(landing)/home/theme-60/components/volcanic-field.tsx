import React from 'react';

export default function VolcanicField() {
  return (
    <section className="relative py-20 px-6 overflow-hidden">
      {/* Background Cosmic Field */}
      <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-red-900/20 to-orange-900/30 animate-volcanic-drift" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-red-900/40 to-orange-900/40 backdrop-blur-sm border border-orange-500/30 rounded-full px-6 py-2 mb-6">
            <span className="text-orange-200 text-sm font-medium uppercase tracking-wider">Volcanic Fields</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-orange-400 via-red-400 to-yellow-400 bg-clip-text text-transparent">
              Cosmic Formations
            </span>
          </h2>
          <p className="text-xl text-orange-100 max-w-3xl mx-auto leading-relaxed">
            Witness the birth of new worlds through volcanic forces that shape galaxies and forge the building blocks of civilizations.
          </p>
        </div>

        {/* Volcanic Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {[
            {
              title: 'Stellar Forges',
              description: 'Volcanic chambers where new stars are born from compressed cosmic matter',
              icon: '⭐',
              temperature: '15M°C',
              activity: 'Extreme'
            },
            {
              title: 'Magma Nebulae',
              description: 'Vast clouds of superheated gas and molten particles spanning light-years',
              icon: '🌌',
              temperature: '2.8M°C',
              activity: 'High'
            },
            {
              title: 'Crystal Geysers',
              description: 'Eruptions of crystallized energy that form the basis of cosmic technology',
              icon: '💎',
              temperature: '950°C',
              activity: 'Moderate'
            }
          ].map((feature, index) => (
            <div key={index} className="group animate-volcanic-fade-in" style={{animationDelay: `${index * 0.2}s`}}>
              <div className="bg-gradient-to-br from-red-900/30 to-orange-900/30 backdrop-blur-sm border border-orange-500/20 rounded-xl p-6 hover:border-orange-400/40 transition-all duration-300 hover:scale-105">
                <div className="text-5xl mb-4 animate-volcanic-float">{feature.icon}</div>
                <h3 className="text-xl font-bold text-orange-200 mb-3">{feature.title}</h3>
                <p className="text-orange-300/80 text-sm mb-4 leading-relaxed">{feature.description}</p>
                
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-orange-400 text-xs font-medium">Temperature</span>
                    <span className="text-orange-200 text-xs font-bold">{feature.temperature}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-orange-400 text-xs font-medium">Activity</span>
                    <span className="text-red-400 text-xs font-bold">{feature.activity}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Volcanic Formation Process */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
              Formation Timeline
            </h3>
            
            <div className="space-y-4">
              {[
                { time: '0-100 Years', phase: 'Ignition Phase', description: 'Initial cosmic matter compression and heating' },
                { time: '100-1K Years', phase: 'Eruption Phase', description: 'Massive energy release and matter ejection' },
                { time: '1K-10K Years', phase: 'Formation Phase', description: 'Cooling and crystallization of new structures' },
                { time: '10K+ Years', phase: 'Maturation Phase', description: 'Stable energy output and cosmic integration' }
              ].map((phase, index) => (
                <div key={index} className="flex items-start space-x-4 animate-volcanic-slide-in" style={{animationDelay: `${index * 0.15}s`}}>
                  <div className="flex-shrink-0 w-3 h-3 bg-gradient-to-r from-orange-400 to-red-400 rounded-full mt-2 animate-volcanic-pulse" />
                  <div>
                    <div className="text-orange-300 text-sm font-medium">{phase.time}</div>
                    <h4 className="text-lg font-semibold text-orange-200 mb-1">{phase.phase}</h4>
                    <p className="text-orange-300/80 text-sm">{phase.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Volcanic Activity Monitor */}
          <div className="bg-gradient-to-br from-red-900/30 to-orange-900/30 backdrop-blur-sm border border-orange-500/20 rounded-2xl p-8 animate-volcanic-glow">
            <h4 className="text-2xl font-bold text-orange-200 mb-6">Real-time Activity Monitor</h4>
            
            {/* Live Readings */}
            <div className="space-y-6">
              {[
                { label: 'Seismic Activity', reading: '8.7', unit: 'Richter', trend: 'up' },
                { label: 'Thermal Output', reading: '347', unit: 'TW', trend: 'stable' },
                { label: 'Magnetic Flux', reading: '92.4', unit: 'nT', trend: 'down' },
                { label: 'Cosmic Radiation', reading: '156', unit: 'Sv/h', trend: 'up' }
              ].map((reading, index) => (
                <div key={index} className="animate-volcanic-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-orange-200 text-sm font-medium">{reading.label}</span>
                    <div className="flex items-center space-x-2">
                      <span className="text-orange-100 font-bold">{reading.reading}</span>
                      <span className="text-orange-300 text-xs">{reading.unit}</span>
                      <div className={`w-2 h-2 rounded-full animate-pulse ${
                        reading.trend === 'up' ? 'bg-red-400' : 
                        reading.trend === 'down' ? 'bg-blue-400' : 'bg-yellow-400'
                      }`} />
                    </div>
                  </div>
                  <div className="w-full bg-gray-800/50 rounded-full h-1">
                    <div className="h-1 rounded-full bg-gradient-to-r from-orange-500 to-red-500 animate-volcanic-progress" style={{width: `${Math.min(parseFloat(reading.reading) * 2, 100)}%`}} />
                  </div>
                </div>
              ))}
            </div>

            {/* Status Indicator */}
            <div className="mt-6 p-4 bg-red-900/30 border border-red-500/30 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-red-400 rounded-full animate-volcanic-pulse" />
                <span className="text-red-200 font-medium">HIGH VOLCANIC ACTIVITY DETECTED</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Volcanic Ash */}
      {[...Array(20)].map((_, i) => (
        <div
          key={`ash-${i}`}
          className="absolute bg-gradient-to-r from-gray-600 to-orange-800 opacity-20 animate-volcanic-drift"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${Math.random() * 4 + 2}px`,
            height: `${Math.random() * 4 + 2}px`,
            borderRadius: '50%',
            animationDelay: `${i * 0.8}s`,
            animationDuration: `${10 + Math.random() * 8}s`
          }}
        />
      ))}
    </section>
  );
} 