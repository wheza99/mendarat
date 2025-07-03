'use client';

export default function BioSystems() {
  const systems = [
    {
      icon: '🧬',
      title: 'DNA Engineering',
      description: 'Advanced genetic sequencing and modification using CRISPR technology combined with AI-driven evolution algorithms.',
      features: ['Gene Therapy', 'Protein Synthesis', 'Metabolic Pathways', 'Cell Regeneration'],
      progress: 94
    },
    {
      icon: '🦠',
      title: 'Microbial Computing',
      description: 'Living microorganisms programmed to perform computational tasks through biological circuits and genetic programming.',
      features: ['Bio Processors', 'Living Memory', 'Organic Sensors', 'Self-Repair'],
      progress: 87
    },
    {
      icon: '🌱',
      title: 'Neural Symbiosis',
      description: 'Brain-computer interfaces that merge human consciousness with artificial neural networks for enhanced cognition.',
      features: ['Thought Transfer', 'Memory Enhancement', 'Cognitive Boost', 'Mind Linking'],
      progress: 78
    },
    {
      icon: '🧪',
      title: 'Synthetic Biology',
      description: 'Creating artificial life forms and biological machines engineered for specific industrial and medical applications.',
      features: ['Bio Factories', 'Living Materials', 'Organic Robots', 'Self Assembly'],
      progress: 91
    }
  ];

  return (
    <section className="relative py-24 z-10">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-black mb-6 bio-glow">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-teal-300">
              BIO SYSTEMS
            </span>
          </h2>
          <p className="text-xl text-emerald-100 max-w-3xl mx-auto leading-relaxed">
            Cutting-edge biological technologies that blur the line between 
            <span className="text-teal-300 font-semibold"> living organisms and machines</span>
          </p>
        </div>

        {/* Systems Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {systems.map((system, index) => (
            <div
              key={index}
              className="bio-card p-8 evolution-grow group cursor-pointer transition-all duration-500 hover:scale-105"
              style={{ animationDelay: `${index * 0.5}s` }}
            >
              {/* System Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-500 organic-border flex items-center justify-center text-3xl cell-division">
                  {system.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-emerald-300 mb-2">
                    {system.title}
                  </h3>
                  <div className="flex items-center gap-2">
                    <div className="w-20 h-2 bg-emerald-900 organic-border overflow-hidden">
                      <div
                        className="h-full symbiosis-flow transition-all duration-1000"
                        style={{ width: `${system.progress}%` }}
                      />
                    </div>
                    <span className="text-sm text-teal-400 font-medium">{system.progress}%</span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-emerald-100 mb-6 leading-relaxed">
                {system.description}
              </p>

              {/* Features */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                {system.features.map((feature, featureIndex) => (
                  <div
                    key={featureIndex}
                    className="flex items-center gap-2 p-3 bg-emerald-900/30 organic-border text-sm"
                  >
                    <div className="w-2 h-2 bg-teal-400 rounded-full organic-pulse" />
                    <span className="text-emerald-200">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Action */}
              <button className="w-full py-3 bg-gradient-to-r from-emerald-600/50 to-teal-600/50 organic-border text-emerald-300 font-semibold transition-all duration-300 group-hover:from-emerald-500/70 group-hover:to-teal-500/70 group-hover:text-white">
                ANALYZE SYSTEM →
              </button>

              {/* Bio Indicators */}
              <div className="absolute top-4 right-4 flex gap-2">
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className="w-3 h-3 rounded-full bg-emerald-400 organic-pulse"
                    style={{ animationDelay: `${i * 0.3}s` }}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Central DNA Visualization */}
        <div className="mt-20 text-center">
          <div className="relative inline-block">
            <div className="w-32 h-32 mx-auto mb-6">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <defs>
                  <linearGradient id="dnaGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#10B981" />
                    <stop offset="50%" stopColor="#14B8A6" />
                    <stop offset="100%" stopColor="#059669" />
                  </linearGradient>
                </defs>
                
                {/* DNA Double Helix */}
                <g className="animate-spin" style={{ transformOrigin: '50px 50px', animationDuration: '10s' }}>
                  <path
                    d="M20 50 Q30 20, 50 50 Q70 80, 80 50"
                    stroke="url(#dnaGradient)"
                    strokeWidth="3"
                    fill="none"
                    className="organic-pulse"
                  />
                  <path
                    d="M20 50 Q30 80, 50 50 Q70 20, 80 50"
                    stroke="url(#dnaGradient)"
                    strokeWidth="3"
                    fill="none"
                    className="organic-pulse"
                    style={{ animationDelay: '1s' }}
                  />
                  
                  {/* Base Pairs */}
                  {[...Array(8)].map((_, i) => {
                    const angle = (i * 45) * Math.PI / 180;
                    const x1 = 50 + 20 * Math.cos(angle);
                    const y1 = 50 + 20 * Math.sin(angle);
                    const x2 = 50 - 20 * Math.cos(angle);
                    const y2 = 50 - 20 * Math.sin(angle);
                    
                    return (
                      <line
                        key={i}
                        x1={x1}
                        y1={y1}
                        x2={x2}
                        y2={y2}
                        stroke="#14B8A6"
                        strokeWidth="2"
                        className="animate-pulse"
                        style={{ animationDelay: `${i * 0.2}s` }}
                      />
                    );
                  })}
                </g>
              </svg>
            </div>
            
            <div className="text-emerald-300 font-bold text-lg mb-2">
              GENETIC SYNTHESIS ACTIVE
            </div>
            <div className="text-teal-400 text-sm">
              Real-time biological data processing
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 