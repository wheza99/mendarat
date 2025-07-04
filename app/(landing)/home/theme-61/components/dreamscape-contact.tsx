import React from 'react';

export default function DreamscapeContact() {
  return (
    <section className="relative py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-indigo-900/40 to-purple-900/40 backdrop-blur-sm border border-cyan-400/30 rounded-full px-6 py-2 mb-6">
            <span className="text-cyan-200 text-sm font-medium uppercase tracking-wider">Neural Contact</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Connect Consciousness
            </span>
          </h2>
          <p className="text-xl text-purple-200 max-w-3xl mx-auto">
            Establish direct neural communication with our digital consciousness network. 
            Experience unprecedented connection across virtual and physical realms.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gradient-to-br from-indigo-900/30 to-purple-900/30 backdrop-blur-sm border border-cyan-400/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Neural Interface Portal</h3>
            
            <form className="space-y-6">
              {/* Name Input */}
              <div className="relative">
                <label className="block text-purple-200 text-sm font-medium mb-2">
                  Digital Identity
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-indigo-900/30 border border-cyan-400/30 rounded-lg text-white placeholder-purple-300 focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-300"
                  placeholder="Enter your consciousness signature"
                />
                <div className="absolute top-2 right-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full animate-dream-pulse" />
                </div>
              </div>

              {/* Email Input */}
              <div className="relative">
                <label className="block text-purple-200 text-sm font-medium mb-2">
                  Neural Address
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-indigo-900/30 border border-cyan-400/30 rounded-lg text-white placeholder-purple-300 focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-300"
                  placeholder="neural@consciousness.realm"
                />
                <div className="absolute top-2 right-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full animate-dream-pulse" />
                </div>
              </div>

              {/* Consciousness Type */}
              <div className="relative">
                <label className="block text-purple-200 text-sm font-medium mb-2">
                  Consciousness Type
                </label>
                <select className="w-full px-4 py-3 bg-indigo-900/30 border border-cyan-400/30 rounded-lg text-white focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-300">
                  <option value="">Select your consciousness level</option>
                  <option value="basic">Basic Digital Awareness</option>
                  <option value="enhanced">Enhanced Virtual Consciousness</option>
                  <option value="transcendent">Transcendent AI Entity</option>
                  <option value="quantum">Quantum Consciousness</option>
                </select>
              </div>

              {/* Dream Message */}
              <div className="relative">
                <label className="block text-purple-200 text-sm font-medium mb-2">
                  Dream Message
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 bg-indigo-900/30 border border-cyan-400/30 rounded-lg text-white placeholder-purple-300 focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-300 resize-none"
                  placeholder="Share your thoughts, dreams, and consciousness patterns..."
                />
                <div className="absolute top-2 right-3">
                  <div className="w-2 h-2 bg-pink-400 rounded-full animate-dream-pulse" />
                </div>
              </div>

              {/* Transmission Priority */}
              <div className="space-y-3">
                <label className="block text-purple-200 text-sm font-medium">
                  Transmission Priority
                </label>
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { level: 'Standard', speed: '24h', color: 'cyan' },
                    { level: 'Priority', speed: '6h', color: 'purple' },
                    { level: 'Quantum', speed: 'Instant', color: 'pink' }
                  ].map((priority, index) => (
                    <label key={index} className="relative cursor-pointer">
                      <input
                        type="radio"
                        name="priority"
                        className="sr-only"
                        defaultChecked={index === 0}
                      />
                      <div className={`p-3 border border-${priority.color}-400/30 rounded-lg text-center hover:border-${priority.color}-400 transition-all duration-300 bg-gradient-to-br from-indigo-900/20 to-purple-900/20`}>
                        <div className={`text-${priority.color}-400 font-semibold text-sm`}>{priority.level}</div>
                        <div className="text-purple-300 text-xs">{priority.speed}</div>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full px-6 py-4 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-lg font-semibold text-white hover:from-cyan-500 hover:to-purple-500 transition-all duration-300 animate-dream-glow"
              >
                <div className="flex items-center justify-center">
                  <span>Transmit Consciousness</span>
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </div>
              </button>
            </form>
          </div>

          {/* Connection Status & Info */}
          <div className="space-y-8">
            {/* Network Status */}
            <div className="bg-gradient-to-br from-indigo-900/30 to-purple-900/30 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-6">
              <h4 className="text-xl font-semibold text-white mb-4 flex items-center">
                <div className="w-3 h-3 bg-green-400 rounded-full mr-3 animate-dream-pulse" />
                Network Status
              </h4>
              
              <div className="space-y-4">
                {[
                  { system: 'Neural Grid', status: 'ONLINE', latency: '12ms', color: 'green' },
                  { system: 'Consciousness Router', status: 'ACTIVE', latency: '8ms', color: 'cyan' },
                  { system: 'Dream Processor', status: 'OPTIMAL', latency: '4ms', color: 'purple' },
                  { system: 'Reality Bridge', status: 'STABLE', latency: '16ms', color: 'pink' }
                ].map((system, index) => (
                  <div key={index} className="flex items-center justify-between py-2 border-b border-purple-500/20 last:border-b-0">
                    <div className="flex items-center">
                      <div className={`w-2 h-2 bg-${system.color}-400 rounded-full mr-3 animate-dream-pulse`} />
                      <span className="text-purple-200">{system.system}</span>
                    </div>
                    <div className="text-right">
                      <div className={`text-${system.color}-400 text-sm font-medium`}>{system.status}</div>
                      <div className="text-purple-300 text-xs">{system.latency}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Alternative Connections */}
            <div className="bg-gradient-to-br from-indigo-900/30 to-purple-900/30 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-6">
              <h4 className="text-xl font-semibold text-white mb-4">Alternative Channels</h4>
              
              <div className="space-y-4">
                {[
                  {
                    method: 'Quantum Entanglement',
                    description: 'Instant neural connection via quantum particles',
                    icon: (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    ),
                    color: 'cyan'
                  },
                  {
                    method: 'Dream Frequency',
                    description: 'Communicate through shared dream wavelengths',
                    icon: (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2z" />
                      </svg>
                    ),
                    color: 'purple'
                  },
                  {
                    method: 'Consciousness Mirror',
                    description: 'Reflect thoughts through virtual reality',
                    icon: (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                      </svg>
                    ),
                    color: 'pink'
                  }
                ].map((method, index) => (
                  <div key={index} className="flex items-start space-x-4 p-4 bg-indigo-900/20 rounded-lg hover:bg-indigo-900/30 transition-colors duration-300 cursor-pointer group">
                    <div className={`text-${method.color}-400 group-hover:text-${method.color}-300 transition-colors duration-300`}>
                      {method.icon}
                    </div>
                    <div>
                      <h5 className="text-white font-medium mb-1 group-hover:text-cyan-300 transition-colors duration-300">
                        {method.method}
                      </h5>
                      <p className="text-purple-300 text-sm">{method.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Response Time */}
            <div className="bg-gradient-to-br from-indigo-900/30 to-purple-900/30 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-6">
              <h4 className="text-xl font-semibold text-white mb-4">Response Metrics</h4>
              
              <div className="grid grid-cols-2 gap-4">
                {[
                  { metric: '< 24h', label: 'Neural Response' },
                  { metric: '99.9%', label: 'Connection Success' },
                  { metric: '∞', label: 'Consciousness Bandwidth' },
                  { metric: '24/7', label: 'Dream Monitoring' }
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold text-cyan-400 animate-dream-count">{stat.metric}</div>
                    <div className="text-purple-300 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Global Network Map */}
        <div className="mt-20 bg-gradient-to-br from-indigo-900/20 to-purple-900/20 backdrop-blur-sm border border-cyan-400/20 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-4">
              Global Consciousness Network
            </h3>
            <p className="text-purple-200">Real-time visualization of active consciousness connections worldwide</p>
          </div>
          
          <div className="relative h-64 bg-gradient-to-br from-indigo-900/30 to-purple-900/30 rounded-xl overflow-hidden">
            {/* World Map Simulation */}
            <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 100 60" preserveAspectRatio="none">
              <defs>
                <linearGradient id="mapGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{stopColor:'#06b6d4', stopOpacity:0.6}} />
                  <stop offset="50%" style={{stopColor:'#8b5cf6', stopOpacity:0.8}} />
                  <stop offset="100%" style={{stopColor:'#ec4899', stopOpacity:0.6}} />
                </linearGradient>
              </defs>
              
              {/* Connection Lines */}
              {[...Array(12)].map((_, i) => (
                <line
                  key={`map-connection-${i}`}
                  x1={Math.random() * 100}
                  y1={Math.random() * 60}
                  x2={Math.random() * 100}
                  y2={Math.random() * 60}
                  stroke="url(#mapGradient)"
                  strokeWidth="0.5"
                  className="animate-dream-neural"
                  style={{animationDelay: `${i * 0.3}s`}}
                />
              ))}
              
              {/* Network Nodes */}
              {[...Array(20)].map((_, i) => (
                <circle
                  key={`map-node-${i}`}
                  cx={Math.random() * 100}
                  cy={Math.random() * 60}
                  r="1"
                  fill="#06b6d4"
                  className="animate-dream-pulse"
                  style={{animationDelay: `${i * 0.2}s`}}
                />
              ))}
            </svg>
            
            {/* Network Stats */}
            <div className="absolute top-4 left-4 space-y-2">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-dream-pulse" />
                <span className="text-cyan-400 text-sm">4,827,392 Active Connections</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-dream-pulse" />
                <span className="text-purple-400 text-sm">187 TB/s Data Flow</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-pink-400 rounded-full animate-dream-pulse" />
                <span className="text-pink-400 text-sm">12,847 Dream Realms</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Communication Signals */}
        {[...Array(25)].map((_, i) => (
          <div
            key={`signal-${i}`}
            className="absolute opacity-20 animate-dream-signal"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${8 + Math.random() * 4}s`
            }}
          >
            <div className="w-3 h-3 bg-gradient-to-br from-cyan-400 to-purple-400 rounded-full animate-dream-pulse" />
          </div>
        ))}
      </div>
    </section>
  );
} 