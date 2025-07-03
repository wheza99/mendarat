'use client';

export default function Symbiosis() {
  const connections = [
    {
      biological: "Human Brain",
      technological: "Neural Network AI",
      outcome: "Enhanced Cognitive Processing",
      strength: 95,
      icon: "🧠"
    },
    {
      biological: "Immune System",
      technological: "Nanobots",
      outcome: "Adaptive Defense Grid",
      strength: 88,
      icon: "🛡️"
    },
    {
      biological: "DNA Structure",
      technological: "Quantum Computing",
      outcome: "Bio-Quantum Storage",
      strength: 91,
      icon: "🧬"
    },
    {
      biological: "Cellular Mitosis",
      technological: "Self-Replicating Machines",
      outcome: "Organic Manufacturing",
      strength: 87,
      icon: "⚙️"
    }
  ];

  const symbioticFeatures = [
    {
      title: "Consciousness Transfer",
      description: "Seamless migration between biological and digital substrates",
      status: "ACTIVE",
      uptime: "99.97%"
    },
    {
      title: "Adaptive Learning",
      description: "Real-time evolution of capabilities through bio-digital feedback",
      status: "EVOLVING", 
      uptime: "94.32%"
    },
    {
      title: "Regenerative Networks",
      description: "Self-healing infrastructure that grows and adapts organically",
      status: "STABLE",
      uptime: "98.76%"
    },
    {
      title: "Quantum Empathy",
      description: "Emotional resonance across biological and artificial minds",
      status: "EXPERIMENTAL",
      uptime: "78.45%"
    }
  ];

  return (
    <section className="relative py-24 z-10">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-black mb-6 bio-glow">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-green-300">
              SYMBIOSIS
            </span>
          </h2>
          <p className="text-xl text-emerald-100 max-w-3xl mx-auto leading-relaxed">
            The perfect harmony between 
            <span className="text-teal-300 font-semibold"> biological intelligence </span>
            and technological evolution, creating unprecedented capabilities.
          </p>
        </div>

        {/* Bio-Tech Connections */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-emerald-300 text-center mb-12 bio-glow">
            BIOLOGICAL-TECHNOLOGICAL FUSION
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {connections.map((connection, index) => (
              <div
                key={index}
                className="bio-card p-8 evolution-grow group"
                style={{ animationDelay: `${index * 0.3}s` }}
              >
                {/* Connection Visual */}
                <div className="flex items-center justify-between mb-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-500 organic-border flex items-center justify-center text-2xl mb-3 cell-division">
                      🧬
                    </div>
                    <div className="text-emerald-300 font-semibold text-sm">
                      {connection.biological}
                    </div>
                  </div>

                  <div className="flex-1 mx-6">
                    <div className="relative">
                      <div className="h-2 bg-emerald-900 organic-border overflow-hidden">
                        <div
                          className="h-full symbiosis-flow"
                          style={{ width: `${connection.strength}%` }}
                        />
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-8 h-8 bg-gradient-to-r from-emerald-400 to-teal-400 organic-border flex items-center justify-center text-lg organic-pulse">
                          {connection.icon}
                        </div>
                      </div>
                    </div>
                    <div className="text-center mt-2">
                      <span className="text-teal-400 text-sm font-bold">
                        {connection.strength}% SYNCED
                      </span>
                    </div>
                  </div>

                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-emerald-500 organic-border flex items-center justify-center text-2xl mb-3 cell-division">
                      🤖
                    </div>
                    <div className="text-emerald-300 font-semibold text-sm">
                      {connection.technological}
                    </div>
                  </div>
                </div>

                {/* Outcome */}
                <div className="text-center p-4 bg-emerald-900/20 organic-border">
                  <div className="text-lg font-bold text-emerald-300 mb-2">
                    {connection.outcome}
                  </div>
                  <div className="flex justify-center gap-2">
                    {[...Array(3)].map((_, i) => (
                      <div
                        key={i}
                        className="w-3 h-3 rounded-full bg-emerald-400 organic-pulse"
                        style={{ animationDelay: `${i * 0.2}s` }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Symbiotic Features */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-emerald-300 text-center mb-12 bio-glow">
            SYMBIOTIC CAPABILITIES
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {symbioticFeatures.map((feature, index) => (
              <div
                key={index}
                className="bio-card p-6 text-center evolution-grow group"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <h4 className="text-xl font-bold text-emerald-300 mb-3">
                  {feature.title}
                </h4>
                
                <p className="text-emerald-100 text-sm mb-4 leading-relaxed">
                  {feature.description}
                </p>
                
                <div className="mb-4">
                  <div className={`inline-block px-3 py-1 organic-border text-xs font-bold ${
                    feature.status === 'ACTIVE' ? 'text-emerald-400 bg-emerald-400/10' :
                    feature.status === 'EVOLVING' ? 'text-purple-400 bg-purple-400/10' :
                    feature.status === 'STABLE' ? 'text-blue-400 bg-blue-400/10' :
                    'text-yellow-400 bg-yellow-400/10'
                  }`}>
                    {feature.status}
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="text-2xl font-bold text-teal-400 mb-1">
                    {feature.uptime}
                  </div>
                  <div className="text-xs text-emerald-300">UPTIME</div>
                </div>

                <div className="mt-4 flex justify-center">
                  <div className="w-4 h-4 rounded-full bg-emerald-400 organic-pulse" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Central Symbiosis Visualization */}
        <div className="bio-card p-12 max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-emerald-300 mb-8 bio-glow">
            UNIFIED CONSCIOUSNESS NETWORK
          </h3>
          
          <div className="relative w-80 h-80 mx-auto mb-8">
            {/* Central Core */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-24 h-24 bg-gradient-to-br from-emerald-400 via-teal-400 to-green-400 organic-border cell-division" />
            </div>

            {/* Biological Nodes */}
            {[...Array(6)].map((_, i) => {
              const angle = (i * 60) * Math.PI / 180;
              const radius = 100;
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;
              
              return (
                <div
                  key={`bio-${i}`}
                  className="absolute w-12 h-12 bg-gradient-to-br from-emerald-500 to-green-500 rounded-full organic-pulse flex items-center justify-center text-lg"
                  style={{
                    left: `calc(50% + ${x}px - 24px)`,
                    top: `calc(50% + ${y}px - 24px)`,
                    animationDelay: `${i * 0.3}s`
                  }}
                >
                  🧬
                </div>
              );
            })}

            {/* Tech Nodes */}
            {[...Array(6)].map((_, i) => {
              const angle = ((i * 60) + 30) * Math.PI / 180;
              const radius = 130;
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;
              
              return (
                <div
                  key={`tech-${i}`}
                  className="absolute w-10 h-10 bg-gradient-to-br from-teal-500 to-emerald-500 rounded-full evolution-grow flex items-center justify-center text-sm"
                  style={{
                    left: `calc(50% + ${x}px - 20px)`,
                    top: `calc(50% + ${y}px - 20px)`,
                    animationDelay: `${i * 0.2}s`
                  }}
                >
                  🤖
                </div>
              );
            })}

            {/* Connection Lines */}
            <svg className="absolute inset-0 w-full h-full">
              {[...Array(12)].map((_, i) => {
                const isBio = i < 6;
                const nodeAngle = isBio ? (i * 60) * Math.PI / 180 : ((i - 6) * 60 + 30) * Math.PI / 180;
                const nodeRadius = isBio ? 100 : 130;
                const x = 160 + Math.cos(nodeAngle) * nodeRadius;
                const y = 160 + Math.sin(nodeAngle) * nodeRadius;
                
                return (
                  <line
                    key={i}
                    x1="160"
                    y1="160"
                    x2={x}
                    y2={y}
                    stroke={isBio ? "#10B981" : "#14B8A6"}
                    strokeWidth="2"
                    opacity="0.4"
                    className="animate-pulse"
                    style={{ animationDelay: `${i * 0.1}s` }}
                  />
                );
              })}
            </svg>
          </div>

          <div className="grid md:grid-cols-3 gap-6 text-center">
            {[
              { label: "Active Connections", value: "∞", unit: "Neural Links" },
              { label: "Data Transfer", value: "847.2", unit: "PB/sec" },
              { label: "Consciousness Sync", value: "99.97%", unit: "Harmony" }
            ].map((metric, index) => (
              <div key={index} className="p-4 bg-emerald-900/20 organic-border">
                <div className="text-3xl font-bold text-emerald-300 mb-2">{metric.value}</div>
                <div className="text-sm text-emerald-200 mb-1">{metric.label}</div>
                <div className="text-xs text-teal-400">{metric.unit}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 