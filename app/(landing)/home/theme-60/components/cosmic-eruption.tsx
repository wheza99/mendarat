import React from 'react';

export default function CosmicEruption() {
  return (
    <section className="relative py-20 px-6 overflow-hidden">
      {/* Background Eruption Effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-red-950/60 via-orange-900/40 to-yellow-900/20 animate-volcanic-eruption" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-red-900/40 to-orange-900/40 backdrop-blur-sm border border-orange-500/30 rounded-full px-6 py-2 mb-6">
            <span className="text-orange-200 text-sm font-medium uppercase tracking-wider">Cosmic Eruption</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-orange-400 via-red-400 to-yellow-400 bg-clip-text text-transparent">
              Universe Shaping Events
            </span>
          </h2>
          <p className="text-xl text-orange-100 max-w-3xl mx-auto leading-relaxed">
            Experience the most powerful volcanic eruptions in cosmic history - events so massive they reshape entire galaxies and birth new realities.
          </p>
        </div>

        {/* Main Eruption Visualization */}
        <div className="relative mb-20">
          <div className="bg-gradient-to-br from-red-900/30 to-orange-900/30 backdrop-blur-sm border border-orange-500/20 rounded-3xl p-12 text-center animate-volcanic-glow">
            {/* Eruption Core */}
            <div className="relative mb-8">
              <div className="w-32 h-32 mx-auto bg-gradient-radial from-yellow-400 via-orange-500 to-red-600 rounded-full animate-volcanic-eruption-core shadow-lg shadow-orange-500/50" />
              
              {/* Eruption Waves */}
              {[...Array(4)].map((_, i) => (
                <div
                  key={`wave-${i}`}
                  className="absolute inset-0 border-2 border-orange-500/30 rounded-full animate-volcanic-wave"
                  style={{
                    transform: `scale(${1.5 + i * 0.8})`,
                    animationDelay: `${i * 0.5}s`,
                    animationDuration: `${3 + i}s`
                  }}
                />
              ))}
            </div>

            <h3 className="text-3xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent mb-4">
              SUPERNOVA ERUPTION DETECTED
            </h3>
            <p className="text-orange-200 mb-6">
              Magnitude 12.7 cosmic eruption occurring in Sector Gamma-9. 
              Energy output exceeds 10^44 joules per second.
            </p>

            {/* Real-time Data */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { label: 'Energy Output', value: '2.4×10⁴⁴', unit: 'J/s' },
                { label: 'Affected Radius', value: '847', unit: 'LY' },
                { label: 'New Stars Formed', value: '23,456', unit: 'Count' },
                { label: 'Time Remaining', value: '147', unit: 'Years' }
              ].map((data, index) => (
                <div key={index} className="animate-volcanic-slide-in" style={{animationDelay: `${index * 0.2}s`}}>
                  <div className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent animate-volcanic-count">
                    {data.value}
                  </div>
                  <div className="text-orange-300 text-sm font-medium">{data.unit}</div>
                  <div className="text-orange-200/70 text-xs uppercase tracking-wide">{data.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Eruption Timeline */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h3 className="text-3xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
              Eruption Phases
            </h3>
            
            {[
              { 
                phase: 'Pre-Eruption', 
                duration: '1-10 Years',
                description: 'Massive energy buildup and gravitational distortions',
                status: 'Complete'
              },
              { 
                phase: 'Initial Burst', 
                duration: '1-24 Hours',
                description: 'Primary energy release and matter ejection begins',
                status: 'Complete'
              },
              { 
                phase: 'Main Eruption', 
                duration: '100-500 Years',
                description: 'Continuous high-energy output and cosmic restructuring',
                status: 'Active'
              },
              { 
                phase: 'Cooling Phase', 
                duration: '1000+ Years',
                description: 'Energy stabilization and new cosmic structure formation',
                status: 'Pending'
              }
            ].map((phase, index) => (
              <div key={index} className="flex items-start space-x-4 animate-volcanic-slide-in" style={{animationDelay: `${index * 0.2}s`}}>
                <div className={`flex-shrink-0 w-4 h-4 rounded-full mt-1 ${
                  phase.status === 'Complete' ? 'bg-green-400' :
                  phase.status === 'Active' ? 'bg-red-400 animate-volcanic-pulse' :
                  'bg-gray-400'
                }`} />
                <div>
                  <div className="flex items-center space-x-3 mb-2">
                    <h4 className="text-xl font-semibold text-orange-200">{phase.phase}</h4>
                    <span className="text-orange-400 text-sm">({phase.duration})</span>
                  </div>
                  <p className="text-orange-300/80">{phase.description}</p>
                  <div className={`inline-block px-2 py-1 rounded text-xs font-medium mt-2 ${
                    phase.status === 'Complete' ? 'bg-green-900/30 text-green-400' :
                    phase.status === 'Active' ? 'bg-red-900/30 text-red-400' :
                    'bg-gray-900/30 text-gray-400'
                  }`}>
                    {phase.status}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Impact Analysis */}
          <div className="bg-gradient-to-br from-red-900/30 to-orange-900/30 backdrop-blur-sm border border-orange-500/20 rounded-2xl p-8 animate-volcanic-glow">
            <h4 className="text-2xl font-bold text-orange-200 mb-6">Galactic Impact Analysis</h4>
            
            <div className="space-y-6">
              {[
                { metric: 'Star Systems Affected', value: 85, maxValue: 100, color: 'red' },
                { metric: 'New Planet Formation', value: 67, maxValue: 100, color: 'orange' },
                { metric: 'Cosmic Radiation Levels', value: 92, maxValue: 100, color: 'yellow' },
                { metric: 'Gravitational Distortion', value: 78, maxValue: 100, color: 'red' }
              ].map((metric, index) => (
                <div key={index} className="animate-volcanic-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-orange-200 text-sm font-medium">{metric.metric}</span>
                    <span className="text-orange-100 font-bold">{metric.value}%</span>
                  </div>
                  <div className="w-full bg-gray-800/50 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full bg-gradient-to-r ${
                        metric.color === 'red' ? 'from-red-500 to-red-400' :
                        metric.color === 'orange' ? 'from-orange-500 to-orange-400' :
                        'from-yellow-500 to-yellow-400'
                      } animate-volcanic-progress`}
                      style={{width: `${metric.value}%`}}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Warning Alert */}
            <div className="mt-6 p-4 bg-red-900/40 border border-red-500/40 rounded-lg">
              <div className="flex items-center space-x-3 mb-2">
                <div className="w-4 h-4 bg-red-400 rounded-full animate-volcanic-pulse" />
                <span className="text-red-200 font-bold text-sm">CRITICAL ALERT</span>
              </div>
              <p className="text-red-300/90 text-xs">
                Eruption intensity increasing. Recommend evacuation of all systems within 200 light-year radius.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Eruption Particles */}
      {[...Array(50)].map((_, i) => (
        <div
          key={`eruption-${i}`}
          className="absolute bg-gradient-to-t from-red-500 to-orange-400 opacity-60 animate-volcanic-eruption-particle"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${100 + Math.random() * 20}%`,
            width: `${Math.random() * 6 + 2}px`,
            height: `${Math.random() * 10 + 4}px`,
            borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%',
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${Math.random() * 4 + 3}s`
          }}
        />
      ))}
    </section>
  );
} 