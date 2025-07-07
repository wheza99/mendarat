import React from 'react';

export default function NeonServices() {
  const services = [
    {
      id: 1,
      title: 'RETRO_DESIGN',
      description: 'Vintage-inspired design services that blend 80s aesthetics with modern functionality and user experience.',
      features: ['Neon UI Elements', 'Synthwave Themes', 'Retro Typography', 'Chrome Effects'],
      price: '808',
      period: '/month',
      color: 'pink'
    },
    {
      id: 2,
      title: 'ARCADE_DEV',
      description: 'Game development services focusing on retro arcade-style games with modern performance and graphics.',
      features: ['Pixel Art Graphics', '8-bit Sound Design', 'Arcade Physics', 'Leaderboards'],
      price: '1980',
      period: '/month',
      color: 'cyan'
    },
    {
      id: 3,
      title: 'SYNTH_AUDIO',
      description: 'Professional audio production using analog synthesizers and digital processing for that perfect retro sound.',
      features: ['Analog Synthesis', 'Digital Mastering', 'Retro Samples', 'Custom Soundtracks'],
      price: '1337',
      period: '/month',
      color: 'purple'
    },
    {
      id: 4,
      title: 'NEON_HOSTING',
      description: 'High-performance hosting services with retro-themed dashboards and lightning-fast SSD storage.',
      features: ['SSD Storage', 'CDN Network', 'SSL Certificates', '24/7 Monitoring'],
      price: '2049',
      period: '/month',
      color: 'orange'
    }
  ];

  return (
    <section className="py-20 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-pink-900/20 via-transparent to-purple-900/20"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="bg-black/80 border-2 border-purple-500 rounded-lg p-8 max-w-2xl mx-auto backdrop-blur-sm">
            <div className="text-purple-500 text-sm font-mono mb-2 animate-synthwave-glow">
              {'> INITIALIZING SERVICE_MODULES.EXE'}
            </div>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-400 bg-clip-text text-transparent mb-4 animate-synthwave-chrome-text">
              NEON SERVICES
            </h2>
            <p className="text-white/80 leading-relaxed font-mono">
              Premium digital services powered by retro technology and futuristic innovation. Choose your path to the neon future.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`group relative border-2 rounded-lg p-8 bg-black/60 backdrop-blur-sm transition-all duration-300 hover:scale-105 animate-synthwave-fade-in ${
                service.color === 'pink' ? 'border-pink-500 bg-pink-500/10' :
                service.color === 'cyan' ? 'border-cyan-400 bg-cyan-400/10' :
                service.color === 'purple' ? 'border-purple-500 bg-purple-500/10' :
                'border-orange-500 bg-orange-500/10'
              }`}
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              {/* Service Header */}
              <div className="flex items-center justify-between mb-6 font-mono text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-synthwave-pulse"></div>
                  <span className="text-white/60">ACTIVE</span>
                </div>
                <div className={`text-xs px-3 py-1 rounded bg-black/50 ${
                  service.color === 'pink' ? 'text-pink-500' :
                  service.color === 'cyan' ? 'text-cyan-400' :
                  service.color === 'purple' ? 'text-purple-500' :
                  'text-orange-500'
                }`}>
                  PREMIUM
                </div>
              </div>

              {/* Service Content */}
              <h3 className={`text-2xl font-bold font-mono mb-4 ${
                service.color === 'pink' ? 'text-pink-500' :
                service.color === 'cyan' ? 'text-cyan-400' :
                service.color === 'purple' ? 'text-purple-500' :
                'text-orange-500'
              } animate-synthwave-glow`}>
                {service.title}
              </h3>

              <p className="text-white/70 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <div className="space-y-3 mb-8">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center font-mono text-sm">
                    <div className={`w-2 h-2 rounded-full mr-3 animate-synthwave-pulse ${
                      service.color === 'pink' ? 'bg-pink-500' :
                      service.color === 'cyan' ? 'bg-cyan-400' :
                      service.color === 'purple' ? 'bg-purple-500' :
                      'bg-orange-500'
                    }`}></div>
                    <span className="text-white/80">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Pricing */}
              <div className="flex items-center justify-between mb-6">
                <div className="font-mono">
                  <div className="text-white/60 text-sm">PRICE:</div>
                  <div className={`text-3xl font-bold ${
                    service.color === 'pink' ? 'text-pink-500' :
                    service.color === 'cyan' ? 'text-cyan-400' :
                    service.color === 'purple' ? 'text-purple-500' :
                    'text-orange-500'
                  } animate-synthwave-glow`}>
                    ${service.price}
                  </div>
                  <div className="text-white/60 text-sm">{service.period}</div>
                </div>
                
                {/* Retro Price Display */}
                <div className="bg-black/60 border border-white/20 rounded-lg p-3">
                  <div className="text-xs text-white/60 font-mono mb-1">HEX:</div>
                  <div className={`text-lg font-mono font-bold ${
                    service.color === 'pink' ? 'text-pink-500' :
                    service.color === 'cyan' ? 'text-cyan-400' :
                    service.color === 'purple' ? 'text-purple-500' :
                    'text-orange-500'
                  }`}>
                    0x{parseInt(service.price).toString(16).toUpperCase()}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <button className={`w-full py-4 border-2 font-mono font-bold rounded-lg transition-all duration-300 hover:scale-105 ${
                service.color === 'pink' ? 'border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-black' :
                service.color === 'cyan' ? 'border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black' :
                service.color === 'purple' ? 'border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-black' :
                'border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-black'
              }`}>
                INSTALL NOW
              </button>

              {/* Retro Scan Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-black/80 border-2 border-pink-500 rounded-lg p-8 max-w-2xl mx-auto backdrop-blur-sm">
            <div className="text-pink-500 text-sm font-mono mb-4">
              {'> CUSTOM_PACKAGE_BUILDER.EXE'}
            </div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-cyan-400 bg-clip-text text-transparent mb-4 animate-synthwave-chrome-text">
              CUSTOM RETRO SOLUTIONS
            </h3>
            <p className="text-white/80 mb-6 leading-relaxed font-mono">
              Need something unique? Our retro engineers can craft custom solutions tailored to your specific needs with that perfect 80s touch.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-mono font-bold rounded-lg hover:from-pink-400 hover:to-purple-400 transition-all duration-300 transform hover:scale-105">
                BUILD CUSTOM
              </button>
              <button className="px-8 py-3 border-2 border-cyan-400 text-cyan-400 font-mono font-bold rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300">
                REQUEST DEMO
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 