import React from 'react';

export default function NetworkSection() {
  const networks = [
    {
      name: "Quantum Network",
      nodes: "1000+",
      speed: "10TB/s",
      location: "Global Quantum Grid",
      description: "Quantum entanglement-based communication network",
      features: ["Quantum Encryption", "Instant Transfer", "Zero Latency"],
      image: "⚡"
    },
    {
      name: "Neural Network",
      nodes: "10M+",
      speed: "1PB/s",
      location: "AI Processing Centers",
      description: "Distributed artificial intelligence processing network",
      features: ["Deep Learning", "Pattern Recognition", "Predictive AI"],
      image: "🔮"
    },
    {
      name: "Cyber Security Network",
      nodes: "50K+",
      speed: "100GB/s",
      location: "Security Hubs",
      description: "Advanced threat detection and response network",
      features: ["Real-time Monitoring", "Threat Analysis", "Auto Response"],
      image: "💻"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-slate-900/50 to-purple-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-6 font-mono">
            NETWORK SYSTEMS
          </h2>
          <p className="text-xl text-cyan-300 max-w-2xl mx-auto font-mono">
            Advanced network infrastructure for the digital future
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {networks.map((network, index) => (
            <div 
              key={index}
              className="group relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl border border-cyan-500/30 hover:border-cyan-400 transition-all duration-300 hover:transform hover:scale-105 overflow-hidden backdrop-blur-sm"
            >
              {/* Network image */}
              <div className="text-6xl text-center py-8">{network.image}</div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-cyan-400 mb-4 font-mono">
                  {network.name}
                </h3>
                
                <div className="flex justify-between items-center mb-4">
                  <span className="text-cyan-300">Nodes:</span>
                  <span className="text-cyan-400 font-bold font-mono">{network.nodes}</span>
                </div>
                
                <div className="flex justify-between items-center mb-4">
                  <span className="text-cyan-300">Speed:</span>
                  <span className="text-cyan-400 font-bold font-mono">{network.speed}</span>
                </div>
                
                <div className="flex justify-between items-center mb-6">
                  <span className="text-cyan-300">Location:</span>
                  <span className="text-cyan-400 font-bold font-mono">{network.location}</span>
                </div>
                
                <p className="text-cyan-300 leading-relaxed mb-6 font-mono">
                  {network.description}
                </p>
                
                <div className="mb-6">
                  <h4 className="text-cyan-400 font-semibold mb-3 font-mono">Features:</h4>
                  <div className="space-y-2">
                    {network.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-cyan-300 font-mono">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Action button */}
                <button className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold rounded-lg hover:shadow-cyan-500/25 transition-all duration-300 font-mono">
                  CONNECT
                </button>
              </div>
              
              {/* Neon decoration */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-purple-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </div>
          ))}
        </div>
        
        {/* Network benefits */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-cyan-400 mb-2 font-mono">Quantum Speed</h3>
              <p className="text-cyan-300 font-mono">Instant data transfer</p>
            </div>
            <div className="text-center group">
              <div className="text-4xl mb-4">🔮</div>
              <h3 className="text-xl font-bold text-cyan-400 mb-2 font-mono">AI Intelligence</h3>
              <p className="text-cyan-300 font-mono">Advanced processing</p>
            </div>
            <div className="text-center group">
              <div className="text-4xl mb-4">💻</div>
              <h3 className="text-xl font-bold text-cyan-400 mb-2 font-mono">Secure Network</h3>
              <p className="text-cyan-300 font-mono">Threat protection</p>
            </div>
            <div className="text-center group">
              <div className="text-4xl mb-4">🌐</div>
              <h3 className="text-xl font-bold text-cyan-400 mb-2 font-mono">Global Reach</h3>
              <p className="text-cyan-300 font-mono">Worldwide coverage</p>
            </div>
          </div>
        </div>
        
        {/* Call to action */}
        <div className="text-center mt-16">
          <div className="inline-block p-8 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-cyan-500/30 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-cyan-400 mb-4 font-mono">
              READY TO CONNECT?
            </h3>
            <p className="text-cyan-300 mb-6 max-w-md mx-auto font-mono">
              Join our advanced network infrastructure and experience the future
            </p>
            <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold rounded-lg shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105 font-mono">
              CONNECT NOW
            </button>
          </div>
        </div>
      </div>
    </section>
  );
} 