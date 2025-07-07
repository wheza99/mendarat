import React, { useState } from 'react';

export default function RetroFeatures() {
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);

  const features = [
    {
      id: 1,
      icon: '🎮',
      title: 'ARCADE_POWER',
      description: 'High-performance computing with the nostalgic charm of classic arcade machines and retro gaming aesthetics.',
      specs: {
        power: '9000W',
        speed: '1.21GW',
        level: 'MAX'
      },
      color: 'pink'
    },
    {
      id: 2,
      icon: '📺',
      title: 'CRT_DISPLAY',
      description: 'Crystal-clear visuals with the warm glow of vintage CRT monitors, bringing retro vibes to modern interfaces.',
      specs: {
        resolution: '4K+',
        refresh: '120Hz',
        glow: 'NEON'
      },
      color: 'cyan'
    },
    {
      id: 3,
      icon: '🎵',
      title: 'SYNTH_AUDIO',
      description: 'Immersive audio experience powered by analog synthesizers and digital sound processing technology.',
      specs: {
        frequency: '20-20kHz',
        channels: '7.1',
        bass: 'DEEP'
      },
      color: 'purple'
    },
    {
      id: 4,
      icon: '💾',
      title: 'RETRO_STORAGE',
      description: 'Massive storage capacity with the reliability of vintage computing and modern SSD performance.',
      specs: {
        capacity: '∞TB',
        speed: 'INSTANT',
        backup: 'AUTO'
      },
      color: 'orange'
    },
    {
      id: 5,
      icon: '🌐',
      title: 'NEON_NETWORK',
      description: 'Lightning-fast connectivity through neon-powered fiber optic networks spanning the digital landscape.',
      specs: {
        bandwidth: '∞Gbps',
        latency: '0ms',
        uptime: '99.9%'
      },
      color: 'green'
    },
    {
      id: 6,
      icon: '🚗',
      title: 'TURBO_MODE',
      description: 'Supercharged performance modes inspired by 80s sports cars and the need for digital speed.',
      specs: {
        boost: '500%',
        turbo: 'ACTIVE',
        nos: 'READY'
      },
      color: 'red'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      pink: 'border-pink-500 bg-pink-500/10 text-pink-500',
      cyan: 'border-cyan-400 bg-cyan-400/10 text-cyan-400',
      purple: 'border-purple-500 bg-purple-500/10 text-purple-500',
      orange: 'border-orange-500 bg-orange-500/10 text-orange-500',
      green: 'border-green-500 bg-green-500/10 text-green-500',
      red: 'border-red-500 bg-red-500/10 text-red-500'
    };
    return colors[color as keyof typeof colors] || colors.pink;
  };

  return (
    <section className="py-20 px-4 relative">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/30 via-transparent to-pink-900/30"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="bg-black/80 border-2 border-pink-500 rounded-lg p-8 max-w-2xl mx-auto backdrop-blur-sm">
            <div className="text-pink-500 text-sm font-mono mb-2 animate-synthwave-glow">
              {'> LOADING FEATURE_SET.EXE'}
            </div>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent mb-4 animate-synthwave-chrome-text">
              RETRO FEATURES
            </h2>
            <p className="text-white/80 leading-relaxed font-mono">
              Discover the power of tomorrow wrapped in yesterday's aesthetic. Each feature is crafted with vintage charm and modern performance.
            </p>
            <div className="text-cyan-400 text-sm mt-4 font-mono">
              {'[STATUS: LOADED]'}
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className={`group relative border-2 rounded-lg p-6 bg-black/60 backdrop-blur-sm transition-all duration-300 hover:scale-105 animate-synthwave-fade-in ${getColorClasses(feature.color)}`}
              style={{ animationDelay: `${index * 0.2}s` }}
              onMouseEnter={() => setHoveredFeature(feature.id)}
              onMouseLeave={() => setHoveredFeature(null)}
            >
              {/* Retro Header */}
              <div className="flex items-center justify-between mb-4 font-mono text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-synthwave-pulse"></div>
                  <span className="text-white/60">ONLINE</span>
                </div>
                <div className={`text-xs px-2 py-1 rounded bg-black/50 ${
                  feature.color === 'pink' ? 'text-pink-500' :
                  feature.color === 'cyan' ? 'text-cyan-400' :
                  feature.color === 'purple' ? 'text-purple-500' :
                  feature.color === 'orange' ? 'text-orange-500' :
                  feature.color === 'green' ? 'text-green-500' :
                  'text-red-500'
                }`}>
                  v2.0
                </div>
              </div>

              {/* Feature Content */}
              <div className="text-center">
                <div className="text-5xl mb-4 animate-synthwave-glow">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold font-mono mb-3 text-white">
                  {feature.title}
                </h3>
                <p className="text-white/70 text-sm mb-6 leading-relaxed">
                  {feature.description}
                </p>

                {/* Retro Specs */}
                <div className="bg-black/40 rounded-lg p-4 mb-4">
                  <div className="text-xs font-mono text-white/60 mb-2">SPECIFICATIONS:</div>
                  <div className="space-y-2 font-mono text-xs">
                    {Object.entries(feature.specs).map(([key, value]) => (
                      <div key={key} className="flex justify-between items-center">
                        <span className="text-white/60 uppercase">{key}:</span>
                        <span className={`font-bold ${
                          feature.color === 'pink' ? 'text-pink-500' :
                          feature.color === 'cyan' ? 'text-cyan-400' :
                          feature.color === 'purple' ? 'text-purple-500' :
                          feature.color === 'orange' ? 'text-orange-500' :
                          feature.color === 'green' ? 'text-green-500' :
                          'text-red-500'
                        }`}>
                          {value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Button */}
                <button className={`w-full py-3 border-2 font-mono font-bold rounded-lg transition-all duration-300 hover:scale-105 ${
                  feature.color === 'pink' ? 'border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-black' :
                  feature.color === 'cyan' ? 'border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black' :
                  feature.color === 'purple' ? 'border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-black' :
                  feature.color === 'orange' ? 'border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-black' :
                  feature.color === 'green' ? 'border-green-500 text-green-500 hover:bg-green-500 hover:text-black' :
                  'border-red-500 text-red-500 hover:bg-red-500 hover:text-black'
                }`}>
                  ACTIVATE
                </button>
              </div>

              {/* Hover Neon Effect */}
              {hoveredFeature === feature.id && (
                <div className={`absolute inset-0 border-2 rounded-lg animate-synthwave-neon-pulse pointer-events-none ${
                  feature.color === 'pink' ? 'border-pink-500' :
                  feature.color === 'cyan' ? 'border-cyan-400' :
                  feature.color === 'purple' ? 'border-purple-500' :
                  feature.color === 'orange' ? 'border-orange-500' :
                  feature.color === 'green' ? 'border-green-500' :
                  'border-red-500'
                }`}></div>
              )}

              {/* Retro Scan Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </div>
          ))}
        </div>

        {/* System Status */}
        <div className="mt-16 text-center">
          <div className="bg-black/80 border-2 border-cyan-400 rounded-lg p-6 max-w-4xl mx-auto backdrop-blur-sm">
            <div className="text-cyan-400 text-sm mb-4 font-mono">
              {'> SYSTEM_STATUS --all'}
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm font-mono">
              <div className="text-center">
                <div className="text-pink-500 font-bold text-lg animate-synthwave-glow">ALL SYSTEMS</div>
                <div className="text-white/70">OPERATIONAL</div>
                <div className="w-full bg-black/40 rounded-full h-2 mt-2">
                  <div className="bg-gradient-to-r from-pink-500 to-purple-500 h-2 rounded-full animate-synthwave-progress" style={{width: '100%'}}></div>
                </div>
              </div>
              <div className="text-center">
                <div className="text-cyan-400 font-bold text-lg animate-synthwave-glow">NEON LEVELS</div>
                <div className="text-white/70">MAXIMUM</div>
                <div className="w-full bg-black/40 rounded-full h-2 mt-2">
                  <div className="bg-gradient-to-r from-cyan-400 to-blue-500 h-2 rounded-full animate-synthwave-progress" style={{width: '100%', animationDelay: '0.5s'}}></div>
                </div>
              </div>
              <div className="text-center">
                <div className="text-purple-500 font-bold text-lg animate-synthwave-glow">RETRO VIBES</div>
                <div className="text-white/70">INFINITE</div>
                <div className="w-full bg-black/40 rounded-full h-2 mt-2">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full animate-synthwave-progress" style={{width: '100%', animationDelay: '1s'}}></div>
                </div>
              </div>
              <div className="text-center">
                <div className="text-orange-500 font-bold text-lg animate-synthwave-glow">PERFORMANCE</div>
                <div className="text-white/70">TURBO</div>
                <div className="w-full bg-black/40 rounded-full h-2 mt-2">
                  <div className="bg-gradient-to-r from-orange-500 to-red-500 h-2 rounded-full animate-synthwave-progress" style={{width: '100%', animationDelay: '1.5s'}}></div>
                </div>
              </div>
            </div>
            <div className="text-cyan-400 text-sm mt-4 font-mono">
              {'[ALL_FEATURES: LOADED]'}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 