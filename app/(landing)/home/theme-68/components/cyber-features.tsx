import React, { useState } from 'react';

export default function CyberFeatures() {
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);

  const features = [
    {
      id: 1,
      icon: '⚡',
      title: 'NEURAL_PROCESSING',
      description: 'Advanced AI algorithms with quantum-enhanced neural networks for lightning-fast data processing and pattern recognition.',
      metrics: {
        speed: '99.7%',
        accuracy: '99.9%',
        uptime: '99.8%'
      },
      status: 'ACTIVE',
      color: 'green'
    },
    {
      id: 2,
      icon: '🔒',
      title: 'CYBER_SECURITY',
      description: 'Military-grade encryption with quantum-resistant algorithms protecting your digital assets in the matrix.',
      metrics: {
        encryption: 'AES-256',
        threats: '0',
        scans: '24/7'
      },
      status: 'SECURED',
      color: 'cyan'
    },
    {
      id: 3,
      icon: '🌐',
      title: 'NETWORK_MESH',
      description: 'Distributed network architecture with redundant nodes ensuring maximum connectivity and data flow.',
      metrics: {
        nodes: '2,547',
        bandwidth: '∞',
        latency: '0.1ms'
      },
      status: 'CONNECTED',
      color: 'magenta'
    },
    {
      id: 4,
      icon: '🚀',
      title: 'QUANTUM_BOOST',
      description: 'Quantum computing integration for exponential performance enhancement and complex problem solving.',
      metrics: {
        qubits: '1,024',
        coherence: '99.5%',
        gates: '∞'
      },
      status: 'ENHANCED',
      color: 'blue'
    },
    {
      id: 5,
      icon: '🧠',
      title: 'BRAIN_INTERFACE',
      description: 'Direct neural interface technology enabling seamless human-machine interaction and thought processing.',
      metrics: {
        bandwidth: '10GB/s',
        latency: '0.01ms',
        sync: '100%'
      },
      status: 'SYNCED',
      color: 'purple'
    },
    {
      id: 6,
      icon: '🔮',
      title: 'REALITY_ENGINE',
      description: 'Advanced simulation engine creating immersive virtual environments with photorealistic rendering.',
      metrics: {
        fps: '∞',
        resolution: '16K',
        immersion: '100%'
      },
      status: 'RENDERING',
      color: 'pink'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      green: 'border-green-500 bg-green-500/5 text-green-500',
      cyan: 'border-cyan-500 bg-cyan-500/5 text-cyan-500',
      magenta: 'border-magenta-500 bg-magenta-500/5 text-magenta-500',
      blue: 'border-blue-500 bg-blue-500/5 text-blue-500',
      purple: 'border-purple-500 bg-purple-500/5 text-purple-500',
      pink: 'border-pink-500 bg-pink-500/5 text-pink-500'
    };
    return colors[color as keyof typeof colors] || colors.green;
  };

  return (
    <section className="py-20 px-4 relative">
      {/* Background Terminal */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="bg-black border-2 border-green-500 rounded-lg p-6 max-w-2xl mx-auto font-mono">
            <div className="text-green-500 text-sm mb-2">
              <span className="text-cyan-500">root@matrix:~$</span> list_system_features --verbose
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-green-500 mb-4 animate-matrix-neon-glow">
              SYSTEM_CAPABILITIES
            </h2>
            <p className="text-white/80 leading-relaxed">
              Discover the advanced features powering our cybernetic infrastructure. Each module has been optimized for maximum performance in the digital realm.
            </p>
            <div className="text-green-500 text-sm mt-4">
              <span className="animate-matrix-cursor">█</span>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className={`group relative border-2 rounded-lg p-6 bg-black/80 transition-all duration-300 hover:scale-105 animate-matrix-fade-in ${getColorClasses(feature.color)}`}
              style={{ animationDelay: `${index * 0.2}s` }}
              onMouseEnter={() => setHoveredFeature(feature.id)}
              onMouseLeave={() => setHoveredFeature(null)}
            >
              {/* Terminal Header */}
              <div className="flex items-center justify-between mb-4 font-mono text-sm">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-red-500 rounded-full mr-1"></div>
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mr-1"></div>
                  <div className={`w-2 h-2 rounded-full ${feature.color === 'green' ? 'bg-green-500' : feature.color === 'cyan' ? 'bg-cyan-500' : feature.color === 'magenta' ? 'bg-magenta-500' : feature.color === 'blue' ? 'bg-blue-500' : feature.color === 'purple' ? 'bg-purple-500' : 'bg-pink-500'}`}></div>
                </div>
                <div className={`text-xs px-2 py-1 rounded ${feature.color === 'green' ? 'bg-green-500/20 text-green-500' : feature.color === 'cyan' ? 'bg-cyan-500/20 text-cyan-500' : feature.color === 'magenta' ? 'bg-magenta-500/20 text-magenta-500' : feature.color === 'blue' ? 'bg-blue-500/20 text-blue-500' : feature.color === 'purple' ? 'bg-purple-500/20 text-purple-500' : 'bg-pink-500/20 text-pink-500'}`}>
                  {feature.status}
                </div>
              </div>

              {/* Feature Content */}
              <div className="text-center">
                <div className="text-4xl mb-4 animate-matrix-pulse">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold font-mono mb-3 text-white">
                  {feature.title}
                </h3>
                <p className="text-white/70 text-sm mb-6 leading-relaxed">
                  {feature.description}
                </p>

                {/* Metrics */}
                <div className="space-y-2 font-mono text-xs">
                  {Object.entries(feature.metrics).map(([key, value]) => (
                    <div key={key} className="flex justify-between items-center">
                      <span className="text-white/60 uppercase">{key}:</span>
                      <span className={`font-bold ${feature.color === 'green' ? 'text-green-500' : feature.color === 'cyan' ? 'text-cyan-500' : feature.color === 'magenta' ? 'text-magenta-500' : feature.color === 'blue' ? 'text-blue-500' : feature.color === 'purple' ? 'text-purple-500' : 'text-pink-500'}`}>
                        {value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Hover Effect */}
              {hoveredFeature === feature.id && (
                <div className="absolute inset-0 border-2 border-white/50 rounded-lg animate-matrix-neon-pulse pointer-events-none"></div>
              )}

              {/* Glitch Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </div>
          ))}
        </div>

        {/* System Status */}
        <div className="mt-16 text-center">
          <div className="bg-black border-2 border-green-500 rounded-lg p-6 max-w-2xl mx-auto font-mono">
            <div className="text-green-500 text-sm mb-4">
              <span className="text-cyan-500">root@matrix:~$</span> system_status --all
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <div className="text-center">
                <div className="text-green-500 font-bold">ALL SYSTEMS</div>
                <div className="text-white/70">OPERATIONAL</div>
              </div>
              <div className="text-center">
                <div className="text-cyan-500 font-bold">SECURITY</div>
                <div className="text-white/70">MAXIMUM</div>
              </div>
              <div className="text-center">
                <div className="text-magenta-500 font-bold">PERFORMANCE</div>
                <div className="text-white/70">OPTIMAL</div>
              </div>
              <div className="text-center">
                <div className="text-blue-500 font-bold">UPTIME</div>
                <div className="text-white/70">99.99%</div>
              </div>
            </div>
            <div className="text-green-500 text-sm mt-4">
              <span className="animate-matrix-cursor">█</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 