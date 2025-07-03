'use client';

export default function OrganicTech() {
  const technologies = [
    {
      category: "Bio Computing",
      items: [
        { name: "Neural Processors", efficiency: "99.9%", status: "ACTIVE" },
        { name: "Organic Memory", efficiency: "97.2%", status: "ACTIVE" },
        { name: "Bio Quantum Bits", efficiency: "89.5%", status: "EXPERIMENTAL" },
        { name: "Living Circuits", efficiency: "94.8%", status: "ACTIVE" }
      ]
    },
    {
      category: "Genetic Engineering",
      items: [
        { name: "CRISPR Evolution", efficiency: "96.7%", status: "ACTIVE" },
        { name: "Gene Synthesis", efficiency: "92.3%", status: "ACTIVE" },
        { name: "Protein Folding", efficiency: "88.9%", status: "TESTING" },
        { name: "DNA Storage", efficiency: "99.1%", status: "ACTIVE" }
      ]
    },
    {
      category: "Symbiotic Systems",
      items: [
        { name: "Bio-AI Fusion", efficiency: "85.6%", status: "EVOLVING" },
        { name: "Neural Interface", efficiency: "78.4%", status: "BETA" },
        { name: "Organic Networks", efficiency: "91.2%", status: "ACTIVE" },
        { name: "Mind Bridging", efficiency: "67.8%", status: "RESEARCH" }
      ]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'ACTIVE': return 'text-emerald-400';
      case 'EXPERIMENTAL': return 'text-yellow-400';
      case 'TESTING': return 'text-blue-400';
      case 'EVOLVING': return 'text-purple-400';
      case 'BETA': return 'text-orange-400';
      case 'RESEARCH': return 'text-pink-400';
      default: return 'text-gray-400';
    }
  };

  return (
    <section className="relative py-24 z-10">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-black mb-6 bio-glow">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-emerald-300">
              ORGANIC TECH
            </span>
          </h2>
          <p className="text-xl text-emerald-100 max-w-3xl mx-auto leading-relaxed">
            Revolutionary technologies where 
            <span className="text-teal-300 font-semibold"> biology meets digital innovation</span>, 
            creating self-evolving systems that adapt and grow.
          </p>
        </div>

        {/* Technology Categories */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-20">
          {technologies.map((tech, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bio-card p-8 evolution-grow"
              style={{ animationDelay: `${categoryIndex * 0.3}s` }}
            >
              {/* Category Header */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-emerald-300 mb-3">
                  {tech.category}
                </h3>
                <div className="w-full h-1 bg-emerald-900 organic-border overflow-hidden">
                  <div className="h-full symbiosis-flow" style={{ width: '100%' }} />
                </div>
              </div>

              {/* Technology Items */}
              <div className="space-y-4">
                {tech.items.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="group p-4 bg-emerald-900/20 organic-border transition-all duration-300 hover:bg-emerald-800/30 cursor-pointer"
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-emerald-200 font-medium">{item.name}</span>
                      <span className={`text-sm font-bold ${getStatusColor(item.status)}`}>
                        {item.status}
                      </span>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <div className="flex-1 h-2 bg-emerald-900 organic-border overflow-hidden">
                        <div
                          className="h-full symbiosis-flow transition-all duration-1000"
                          style={{ 
                            width: item.efficiency,
                            animationDelay: `${itemIndex * 0.2}s`
                          }}
                        />
                      </div>
                      <span className="text-teal-400 text-sm font-medium min-w-[50px]">
                        {item.efficiency}
                      </span>
                    </div>

                    {/* Bio Indicator */}
                    <div className="flex justify-end mt-2">
                      <div className="w-3 h-3 rounded-full bg-emerald-400 organic-pulse" />
                    </div>
                  </div>
                ))}
              </div>

              {/* Category Stats */}
              <div className="mt-6 pt-6 border-t border-emerald-700/30">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-emerald-300">System Health</span>
                  <span className="text-teal-400 font-bold">OPTIMAL</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bio Lab Interface */}
        <div className="bio-card p-8 max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Lab Control Panel */}
            <div>
              <h3 className="text-3xl font-bold text-emerald-300 mb-6 bio-glow">
                BIO LAB INTERFACE
              </h3>
              
              <div className="space-y-4 mb-8">
                {[
                  { label: 'Cell Division Rate', value: '3.2x Normal', color: 'emerald' },
                  { label: 'Protein Synthesis', value: '847 mg/min', color: 'teal' },
                  { label: 'Neural Activity', value: '99.7% Synced', color: 'green' },
                  { label: 'Genetic Stability', value: 'STABLE+', color: 'emerald' }
                ].map((metric, index) => (
                  <div key={index} className="flex justify-between items-center p-3 bg-emerald-900/20 organic-border">
                    <span className="text-emerald-200">{metric.label}</span>
                    <span className={`text-${metric.color}-400 font-bold`}>{metric.value}</span>
                  </div>
                ))}
              </div>

              <button className="w-full py-4 bg-gradient-to-r from-emerald-600 to-teal-600 organic-border text-white font-bold text-lg organic-pulse transition-all duration-300 hover:scale-105">
                🧬 INITIATE BIO SEQUENCE
              </button>
            </div>

            {/* Molecular Visualization */}
            <div className="flex flex-col items-center justify-center">
              <div className="relative w-64 h-64 mb-6">
                {/* Central Molecule */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-emerald-400 to-teal-400 organic-border cell-division" />
                </div>

                {/* Orbiting Particles */}
                {[...Array(8)].map((_, i) => {
                  const angle = (i * 45) * Math.PI / 180;
                  const radius = 80;
                  const x = Math.cos(angle) * radius;
                  const y = Math.sin(angle) * radius;
                  
                  return (
                    <div
                      key={i}
                      className="absolute w-6 h-6 bg-emerald-400 rounded-full organic-pulse"
                      style={{
                        left: `calc(50% + ${x}px - 12px)`,
                        top: `calc(50% + ${y}px - 12px)`,
                        animationDelay: `${i * 0.2}s`,
                        animation: `organic-pulse 2s ease-in-out infinite, 
                                   bio-orbit ${8 + i}s linear infinite`
                      }}
                    />
                  );
                })}

                {/* Connection Lines */}
                <svg className="absolute inset-0 w-full h-full">
                  {[...Array(8)].map((_, i) => {
                    const angle = (i * 45) * Math.PI / 180;
                    const radius = 80;
                    const x = 128 + Math.cos(angle) * radius;
                    const y = 128 + Math.sin(angle) * radius;
                    
                    return (
                      <line
                        key={i}
                        x1="128"
                        y1="128"
                        x2={x}
                        y2={y}
                        stroke="#14B8A6"
                        strokeWidth="1"
                        opacity="0.3"
                        className="animate-pulse"
                        style={{ animationDelay: `${i * 0.1}s` }}
                      />
                    );
                  })}
                </svg>
              </div>

              <div className="text-center">
                <div className="text-emerald-300 font-bold text-lg mb-2">
                  MOLECULAR SIMULATION
                </div>
                <div className="text-teal-400 text-sm">
                  Real-time bio-molecular interactions
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes bio-orbit {
          0% {
            transform: rotate(0deg) translateX(80px) rotate(0deg);
          }
          100% {
            transform: rotate(360deg) translateX(80px) rotate(-360deg);
          }
        }
      `}</style>
    </section>
  );
} 