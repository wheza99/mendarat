import React from 'react';

export default function NeonServices() {
  const services = [
    {
      id: 1,
      title: 'NEURAL_NETWORKS',
      description: 'Advanced AI systems with deep learning capabilities for complex pattern recognition and decision making.',
      features: ['Quantum Processing', 'Real-time Analysis', 'Predictive Modeling', 'Adaptive Learning'],
      price: '∞',
      status: 'ACTIVE',
      color: 'green'
    },
    {
      id: 2,
      title: 'CYBER_DEFENSE',
      description: 'Military-grade security protocols protecting your digital infrastructure from cyber threats.',
      features: ['Quantum Encryption', 'Threat Detection', 'Auto Response', 'Secure Channels'],
      price: '∞',
      status: 'SECURED',
      color: 'cyan'
    },
    {
      id: 3,
      title: 'REALITY_SIMULATION',
      description: 'Immersive virtual environments with photorealistic rendering and physics simulation.',
      features: ['16K Resolution', 'Ray Tracing', 'Physics Engine', 'VR/AR Ready'],
      price: '∞',
      status: 'RENDERING',
      color: 'magenta'
    },
    {
      id: 4,
      title: 'QUANTUM_COMPUTING',
      description: 'Exponential computational power through quantum mechanics for solving complex problems.',
      features: ['1024 Qubits', 'Superposition', 'Entanglement', 'Quantum Gates'],
      price: '∞',
      status: 'ENHANCED',
      color: 'blue'
    }
  ];

  return (
    <section className="py-20 px-4 relative">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="bg-black border-2 border-cyan-500 rounded-lg p-6 max-w-2xl mx-auto font-mono">
            <div className="text-cyan-500 text-sm mb-2">
              <span className="text-green-500">root@matrix:~$</span> load_service_modules --all
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-cyan-500 mb-4 animate-matrix-neon-glow">
              CYBERNETIC_SERVICES
            </h2>
            <p className="text-white/80 leading-relaxed">
              Explore our advanced service modules designed for the digital frontier. Each service is powered by cutting-edge technology.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`group relative border-2 rounded-lg p-8 bg-black/80 transition-all duration-300 hover:scale-105 animate-matrix-fade-in ${
                service.color === 'green' ? 'border-green-500 bg-green-500/5' :
                service.color === 'cyan' ? 'border-cyan-500 bg-cyan-500/5' :
                service.color === 'magenta' ? 'border-magenta-500 bg-magenta-500/5' :
                'border-blue-500 bg-blue-500/5'
              }`}
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              <div className="flex items-center justify-between mb-6 font-mono text-sm">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
                  <div className={`w-3 h-3 rounded-full ${
                    service.color === 'green' ? 'bg-green-500' :
                    service.color === 'cyan' ? 'bg-cyan-500' :
                    service.color === 'magenta' ? 'bg-magenta-500' :
                    'bg-blue-500'
                  }`}></div>
                </div>
                <div className={`text-xs px-3 py-1 rounded ${
                  service.color === 'green' ? 'bg-green-500/20 text-green-500' :
                  service.color === 'cyan' ? 'bg-cyan-500/20 text-cyan-500' :
                  service.color === 'magenta' ? 'bg-magenta-500/20 text-magenta-500' :
                  'bg-blue-500/20 text-blue-500'
                }`}>
                  {service.status}
                </div>
              </div>

              <h3 className={`text-2xl font-bold font-mono mb-4 ${
                service.color === 'green' ? 'text-green-500' :
                service.color === 'cyan' ? 'text-cyan-500' :
                service.color === 'magenta' ? 'text-magenta-500' :
                'text-blue-500'
              }`}>
                {service.title}
              </h3>

              <p className="text-white/70 mb-6 leading-relaxed">
                {service.description}
              </p>

              <div className="space-y-3 mb-8">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center font-mono text-sm">
                    <div className={`w-2 h-2 rounded-full mr-3 ${
                      service.color === 'green' ? 'bg-green-500' :
                      service.color === 'cyan' ? 'bg-cyan-500' :
                      service.color === 'magenta' ? 'bg-magenta-500' :
                      'bg-blue-500'
                    } animate-matrix-pulse`}></div>
                    <span className="text-white/80">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between">
                <div className="font-mono">
                  <div className="text-white/60 text-sm">PRICE:</div>
                  <div className={`text-2xl font-bold ${
                    service.color === 'green' ? 'text-green-500' :
                    service.color === 'cyan' ? 'text-cyan-500' :
                    service.color === 'magenta' ? 'text-magenta-500' :
                    'text-blue-500'
                  }`}>
                    {service.price}
                  </div>
                </div>
                <button className={`px-6 py-3 border-2 font-mono font-bold rounded-lg transition-all duration-300 hover:scale-105 ${
                  service.color === 'green' ? 'border-green-500 text-green-500 hover:bg-green-500 hover:text-black' :
                  service.color === 'cyan' ? 'border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-black' :
                  service.color === 'magenta' ? 'border-magenta-500 text-magenta-500 hover:bg-magenta-500 hover:text-black' :
                  'border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-black'
                }`}>
                  INITIALIZE
                </button>
              </div>

              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 