import React from 'react';

export default function CyberShowcase() {
  const technologies = [
    {
      name: "Quantum Processor",
      specs: "1000+ qubits",
      price: "$50,000",
      category: "Hardware",
      features: ["Quantum Entanglement", "Superposition States", "Quantum Gates"],
      image: "⚡",
      status: "premium"
    },
    {
      name: "Neural Interface",
      specs: "10TB/s bandwidth",
      price: "$25,000",
      category: "Interface",
      features: ["Brain-Computer Interface", "Direct Neural Access", "Thought Control"],
      image: "🔮",
      status: "exclusive"
    },
    {
      name: "AI Core System",
      specs: "1M+ parameters",
      price: "$15,000",
      category: "Software",
      features: ["Machine Learning", "Deep Neural Networks", "Predictive Analytics"],
      image: "🌐",
      status: "available"
    },
    {
      name: "Cyber Security Suite",
      specs: "Zero-day protection",
      price: "$8,000",
      category: "Security",
      features: ["Threat Detection", "Encryption", "Firewall"],
      image: "💻",
      status: "popular"
    },
    {
      name: "Cloud Infrastructure",
      specs: "99.99% uptime",
      price: "$5,000",
      category: "Infrastructure",
      features: ["Scalable Computing", "Global CDN", "Auto-scaling"],
      image: "🚀",
      status: "available"
    },
    {
      name: "Data Analytics Platform",
      specs: "Real-time processing",
      price: "$12,000",
      category: "Analytics",
      features: ["Big Data Processing", "Real-time Insights", "Predictive Models"],
      image: "🔬",
      status: "new"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'available': return 'text-green-400';
      case 'popular': return 'text-cyan-400';
      case 'premium': return 'text-purple-400';
      case 'new': return 'text-yellow-400';
      case 'exclusive': return 'text-pink-400';
      default: return 'text-gray-400';
    }
  };

  const getStatusBg = (status: string) => {
    switch (status) {
      case 'available': return 'bg-green-900/20 border-green-400/30';
      case 'popular': return 'bg-cyan-900/20 border-cyan-400/30';
      case 'premium': return 'bg-purple-900/20 border-purple-400/30';
      case 'new': return 'bg-yellow-900/20 border-yellow-400/30';
      case 'exclusive': return 'bg-pink-900/20 border-pink-400/30';
      default: return 'bg-gray-900/20 border-gray-400/30';
    }
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-slate-900/50 to-purple-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-6 font-mono">
            TECH SHOWCASE
          </h2>
          <p className="text-xl text-cyan-300 max-w-2xl mx-auto font-mono">
            Advanced cyber technology solutions for the future
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologies.map((tech, index) => (
            <div 
              key={index}
              className={`group relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl border border-cyan-500/30 hover:border-cyan-400 transition-all duration-300 hover:transform hover:scale-105 p-8 backdrop-blur-sm ${getStatusBg(tech.status)}`}
            >
              {/* Tech image */}
              <div className="text-4xl mb-4">{tech.image}</div>
              
              <h3 className="text-xl font-bold text-cyan-400 mb-4 font-mono">
                {tech.name}
              </h3>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-cyan-300">Specs:</span>
                  <span className="text-cyan-400 font-bold font-mono">{tech.specs}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-cyan-300">Price:</span>
                  <span className="text-cyan-400 font-bold font-mono">{tech.price}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-cyan-300">Category:</span>
                  <span className="text-cyan-400 font-bold font-mono">{tech.category}</span>
                </div>
              </div>
              
              <div className="mb-6">
                <h4 className="text-cyan-400 font-semibold mb-2 font-mono">Features:</h4>
                <div className="flex flex-wrap gap-2">
                  {tech.features.map((feature, featureIndex) => (
                    <span key={featureIndex} className="px-2 py-1 bg-cyan-900/50 text-cyan-300 text-xs rounded font-mono">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Status badge */}
              <div className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${getStatusColor(tech.status)} font-mono`}>
                {tech.status.toUpperCase()}
              </div>
              
              {/* Action button */}
              <div className="mt-6">
                <button className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold rounded-lg hover:shadow-cyan-500/25 transition-all duration-300 font-mono">
                  DEPLOY
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {/* Tech stats */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">6</div>
              <div className="text-cyan-300 font-mono">Core Technologies</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">5★</div>
              <div className="text-cyan-300 font-mono">Performance Rating</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">1000+</div>
              <div className="text-cyan-300 font-mono">Active Deployments</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">24/7</div>
              <div className="text-cyan-300 font-mono">System Monitoring</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 