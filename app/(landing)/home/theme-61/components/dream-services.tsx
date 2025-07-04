import React from 'react';

export default function DreamServices() {
  const services = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: 'Dream Architecture',
      description: 'Custom virtual reality environments tailored to your subconscious patterns and neural pathways.',
      features: ['Neural Pattern Analysis', 'Custom Environment Design', 'Reality Physics Engine', 'Consciousness Mapping'],
      price: 'from $299',
      gradient: 'from-cyan-500 to-blue-600'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'Consciousness Transfer',
      description: 'Seamless transfer of consciousness between virtual realms with quantum-encrypted neural data.',
      features: ['Quantum Encryption', 'Neural Data Backup', 'Multi-Realm Support', 'Identity Preservation'],
      price: 'from $499',
      gradient: 'from-purple-500 to-pink-600'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      title: 'Memory Synthesis',
      description: 'Advanced memory processing and dream sequence optimization for enhanced virtual experiences.',
      features: ['Memory Enhancement', 'Dream Sequence Optimization', 'Emotional Calibration', 'Experience Archives'],
      price: 'from $399',
      gradient: 'from-indigo-500 to-purple-600'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 011-1h1a2 2 0 100-4H7a1 1 0 01-1-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
        </svg>
      ),
      title: 'Neural Networking',
      description: 'Connect with other consciousness in shared virtual spaces for collaborative dreaming experiences.',
      features: ['Shared Consciousness', 'Collaborative Dreams', 'Neural Synchronization', 'Group Experiences'],
      price: 'from $199',
      gradient: 'from-pink-500 to-rose-600'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: 'Reality Validation',
      description: 'Ensure integrity and authenticity of virtual experiences with quantum reality verification protocols.',
      features: ['Quantum Verification', 'Reality Integrity Checks', 'Authenticity Protocols', 'Security Monitoring'],
      price: 'from $599',
      gradient: 'from-cyan-500 to-purple-600'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
        </svg>
      ),
      title: 'Dream Analytics',
      description: 'Comprehensive analysis of dream patterns, consciousness behavior, and virtual experience optimization.',
      features: ['Pattern Analysis', 'Behavior Tracking', 'Performance Optimization', 'Predictive Insights'],
      price: 'from $349',
      gradient: 'from-blue-500 to-indigo-600'
    }
  ];

  return (
    <section className="relative py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-indigo-900/40 to-purple-900/40 backdrop-blur-sm border border-cyan-400/30 rounded-full px-6 py-2 mb-6">
            <span className="text-cyan-200 text-sm font-medium uppercase tracking-wider">Dream Services</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Digital Technologies
            </span>
          </h2>
          <p className="text-xl text-purple-200 max-w-3xl mx-auto">
            Advanced digital dream technologies that push the boundaries of virtual consciousness 
            and reality manipulation.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group relative bg-gradient-to-br from-indigo-900/30 to-purple-900/30 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-8 hover:border-purple-400/40 transition-all duration-500 animate-dream-slide-in overflow-hidden"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              {/* Background Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
              
              {/* Service Icon */}
              <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-xl mb-6 text-white animate-dream-glow`}>
                {service.icon}
              </div>

              {/* Service Content */}
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-purple-200 text-sm mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-purple-300 text-sm">
                      <div className="w-1.5 h-1.5 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full mr-3 animate-dream-pulse" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Price */}
                <div className="flex items-center justify-between">
                  <div className={`text-lg font-bold bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}>
                    {service.price}
                  </div>
                  <button className={`px-4 py-2 bg-gradient-to-r ${service.gradient} rounded-lg text-white text-sm font-medium hover:shadow-lg transition-all duration-300 animate-dream-glow`}>
                    Learn More
                  </button>
                </div>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />
              
              {/* Floating Elements */}
              <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity duration-500">
                <div className="w-6 h-6 border border-cyan-400 rounded-full animate-dream-spin" />
                <div className="absolute inset-1 bg-gradient-to-br from-cyan-400 to-purple-400 rounded-full animate-dream-pulse" />
              </div>
            </div>
          ))}
        </div>

        {/* Service Integration */}
        <div className="mt-20 bg-gradient-to-br from-indigo-900/20 to-purple-900/20 backdrop-blur-sm border border-cyan-400/20 rounded-2xl p-8">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-4">
                Integrated Solutions
              </h3>
              <p className="text-purple-200 mb-6 leading-relaxed">
                Combine multiple dream technologies for enhanced virtual experiences. 
                Our integrated platform provides seamless connectivity between all services.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                {[
                  { metric: '99.9%', label: 'Service Uptime' },
                  { metric: '24/7', label: 'Neural Support' },
                  { metric: '<50ms', label: 'Transfer Latency' },
                  { metric: '∞', label: 'Storage Capacity' }
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold text-cyan-400 animate-dream-count">{stat.metric}</div>
                    <div className="text-purple-300 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>

              <button className="px-6 py-3 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-lg font-semibold text-white hover:from-cyan-500 hover:to-purple-500 transition-all duration-300 animate-dream-glow">
                Get Full Platform
              </button>
            </div>

            <div className="relative">
              <div className="aspect-square max-w-md mx-auto relative">
                {/* Integration Hub */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 to-purple-600/10 rounded-full animate-dream-spin backdrop-blur-sm" />
                
                {/* Hub Center */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-full animate-dream-pulse shadow-2xl shadow-purple-500/30">
                    <div className="w-full h-full flex items-center justify-center">
                      <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2L2 7L12 12L22 7L12 2Z" />
                        <path d="M2 17L12 22L22 17" />
                        <path d="M2 12L12 17L22 12" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Service Nodes */}
                {services.slice(0, 6).map((_, i) => (
                  <div
                    key={`service-node-${i}`}
                    className="absolute w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full animate-dream-orbit border-2 border-white/20"
                    style={{
                      top: '50%',
                      left: '50%',
                      transformOrigin: `0 ${80 + i * 10}px`,
                      animationDelay: `${i * 0.4}s`,
                      animationDuration: `${12 + i}s`
                    }}
                  />
                ))}

                {/* Connection Lines */}
                <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" style={{stopColor:'#06b6d4', stopOpacity:0.8}} />
                      <stop offset="100%" style={{stopColor:'#8b5cf6', stopOpacity:0.8}} />
                    </linearGradient>
                  </defs>
                  {[...Array(6)].map((_, i) => (
                    <line
                      key={`connection-${i}`}
                      x1="50"
                      y1="50"
                      x2={50 + 30 * Math.cos(i * Math.PI / 3)}
                      y2={50 + 30 * Math.sin(i * Math.PI / 3)}
                      stroke="url(#connectionGradient)"
                      strokeWidth="0.5"
                      className="animate-dream-neural"
                      style={{animationDelay: `${i * 0.3}s`}}
                    />
                  ))}
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Service Particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={`service-particle-${i}`}
            className="absolute opacity-20 animate-dream-drift"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${20 + Math.random() * 10}s`
            }}
          >
            <div className="w-4 h-4 bg-gradient-to-br from-cyan-400 to-purple-400 rounded-full animate-dream-pulse" />
          </div>
        ))}
      </div>
    </section>
  );
} 