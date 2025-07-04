import React from 'react';

export default function LavaServices() {
  return (
    <section className="relative py-20 px-6 overflow-hidden">
      {/* Background Lava Flow */}
      <div className="absolute inset-0 bg-gradient-to-bl from-orange-900/20 via-red-900/30 to-yellow-900/10 animate-volcanic-flow" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-red-900/40 to-orange-900/40 backdrop-blur-sm border border-orange-500/30 rounded-full px-6 py-2 mb-6">
            <span className="text-orange-200 text-sm font-medium uppercase tracking-wider">Volcanic Services</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-orange-400 via-red-400 to-yellow-400 bg-clip-text text-transparent">
              Cosmic Technologies
            </span>
          </h2>
          <p className="text-xl text-orange-100 max-w-3xl mx-auto leading-relaxed">
            Harness the infinite power of volcanic cosmic forces through our advanced technologies.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: '🔥',
              title: 'Magma Forge Analytics',
              description: 'Real-time monitoring of volcanic core temperatures and energy output.',
              features: ['Real-time monitoring', 'Predictive analytics', 'Energy optimization']
            },
            {
              icon: '⚡',
              title: 'Cosmic Energy Harvesting',
              description: 'Advanced systems to capture volcanic cosmic energy.',
              features: ['Energy capture', 'Power distribution', 'Grid management']
            },
            {
              icon: '🌌',
              title: 'Stellar Formation Control',
              description: 'Precision control of volcanic processes for star formation.',
              features: ['Star creation', 'Planet formation', 'System design']
            }
          ].map((service, index) => (
            <div key={index} className="group animate-volcanic-fade-in" style={{animationDelay: `${index * 0.2}s`}}>
              <div className="bg-gradient-to-br from-red-900/30 to-orange-900/30 backdrop-blur-sm border border-orange-500/20 rounded-xl p-8 hover:border-orange-400/40 transition-all duration-300 hover:scale-105 h-full">
                {/* Service Icon */}
                <div className="text-6xl mb-6 animate-volcanic-float">{service.icon}</div>
                
                {/* Service Title */}
                <h3 className="text-2xl font-bold text-orange-200 mb-4">{service.title}</h3>
                
                {/* Service Description */}
                <p className="text-orange-300/80 text-sm mb-6 leading-relaxed">{service.description}</p>
                
                {/* Features List */}
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <div className="w-2 h-2 rounded-full bg-orange-400" />
                      <span className="text-orange-200 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                
                {/* Action Button */}
                <button className="w-full py-3 px-6 rounded-lg font-semibold text-white bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-500 hover:to-orange-500 transition-all duration-300 animate-volcanic-glow">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Service Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: 'Active Clients', value: '12,847', icon: '👥' },
            { label: 'Power Generated', value: '999 TW', icon: '⚡' },
            { label: 'Stars Created', value: '2,394', icon: '⭐' },
            { label: 'Uptime', value: '99.9%', icon: '🔄' }
          ].map((stat, index) => (
            <div key={index} className="text-center animate-volcanic-slide-in" style={{animationDelay: `${index * 0.3}s`}}>
              <div className="bg-gradient-to-br from-red-900/30 to-orange-900/30 backdrop-blur-sm border border-orange-500/20 rounded-lg p-6 hover:border-orange-400/40 transition-all duration-300">
                <div className="text-3xl mb-3 animate-volcanic-float">{stat.icon}</div>
                <div className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent mb-2 animate-volcanic-count">
                  {stat.value}
                </div>
                <div className="text-orange-200/70 text-sm uppercase tracking-wide">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-br from-red-900/30 to-orange-900/30 backdrop-blur-sm border border-orange-500/20 rounded-2xl p-12 animate-volcanic-glow">
            <h3 className="text-3xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent mb-6">
              Ready to Harness Volcanic Power?
            </h3>
            <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
              Join thousands of civilizations already using our volcanic cosmic technologies to power their worlds and expand their reach across the universe.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group relative px-8 py-4 bg-gradient-to-r from-red-600 to-orange-600 rounded-lg font-semibold text-white overflow-hidden transition-all duration-300 hover:from-red-500 hover:to-orange-500 animate-volcanic-glow">
                <div className="relative z-10 flex items-center justify-center">
                  <span>Start Your Project</span>
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-red-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
              </button>
              
              <button className="group px-8 py-4 border-2 border-orange-500/50 rounded-lg font-semibold text-orange-200 hover:border-orange-400 hover:bg-orange-500/10 transition-all duration-300 animate-volcanic-fade-in">
                <div className="flex items-center justify-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  <span>Contact Experts</span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Service Icons */}
      {[...Array(12)].map((_, i) => (
        <div
          key={`service-icon-${i}`}
          className="absolute text-2xl opacity-20 animate-volcanic-drift"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${i * 1.5}s`,
            animationDuration: `${12 + Math.random() * 6}s`
          }}
        >
          {['🔥', '⚡', '🌌', '💎', '🚀', '🛡️'][i % 6]}
        </div>
      ))}
    </section>
  );
} 