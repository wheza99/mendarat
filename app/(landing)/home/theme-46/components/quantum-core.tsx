'use client';

export default function QuantumCore() {
  const quantumStats = [
    { label: "Qubits", value: "1,024", unit: "Q", growth: "+23%" },
    { label: "Processing Power", value: "847.3", unit: "THz", growth: "+156%" },
    { label: "Entangled Pairs", value: "512", unit: "EP", growth: "+89%" },
    { label: "Coherence Time", value: "99.7", unit: "μs", growth: "+45%" }
  ];

  return (
    <section className="py-32 px-6 relative">
      {/* Quantum Field Background */}
      <div className="absolute inset-0">
        {/* Quantum Particles */}
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `quantum-drift ${10 + Math.random() * 15}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`,
              boxShadow: '0 0 6px #06B6D4'
            }}
          />
        ))}
        
        {/* Quantum Entanglement Lines */}
        <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 1000 1000">
          {[...Array(8)].map((_, i) => {
            const x1 = Math.random() * 1000;
            const y1 = Math.random() * 1000;
            const x2 = Math.random() * 1000;
            const y2 = Math.random() * 1000;
            return (
              <g key={i}>
                <line
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                  stroke="url(#quantumGradient)"
                  strokeWidth="2"
                  strokeDasharray="5,5"
                  className="animate-pulse"
                  style={{
                    animationDelay: `${Math.random() * 2}s`,
                    animationDuration: `${2 + Math.random() * 3}s`
                  }}
                />
                <circle cx={x1} cy={y1} r="6" fill="#8B5CF6" className="animate-pulse" />
                <circle cx={x2} cy={y2} r="6" fill="#06B6D4" className="animate-pulse" />
              </g>
            );
          })}
          <defs>
            <linearGradient id="quantumGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#06B6D4" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.8" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-black mb-6 neon-glow">
            QUANTUM <span className="text-purple-400">CORE</span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-purple-400 to-cyan-400 mx-auto mb-8 cyber-pulse" />
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Harnessing quantum mechanics for unprecedented computational power
          </p>
        </div>

        {/* Quantum Visualization */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left: Quantum Core Visual */}
          <div className="relative">
            <div className="relative w-full max-w-lg mx-auto">
              {/* Central Quantum Core */}
              <div className="relative w-80 h-80 mx-auto">
                {/* Outer Ring */}
                <div className="absolute inset-0 border-2 border-purple-400/50 rounded-full animate-spin cyber-pulse" style={{ animationDuration: '20s' }}>
                  {[...Array(8)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-4 h-4 bg-purple-400 rounded-full"
                      style={{
                        top: '50%',
                        left: '50%',
                        transform: `translate(-50%, -50%) rotate(${i * 45}deg) translateY(-150px)`,
                        animation: `quantum-orbit ${8}s linear infinite`,
                        animationDelay: `${i * 0.5}s`
                      }}
                    />
                  ))}
                </div>
                
                {/* Middle Ring */}
                <div className="absolute inset-8 border-2 border-cyan-400/50 rounded-full animate-spin cyber-pulse" style={{ animationDuration: '15s', animationDirection: 'reverse' }}>
                  {[...Array(6)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-3 h-3 bg-cyan-400 rounded-full"
                      style={{
                        top: '50%',
                        left: '50%',
                        transform: `translate(-50%, -50%) rotate(${i * 60}deg) translateY(-120px)`,
                        animation: `quantum-orbit ${6}s linear infinite`,
                        animationDelay: `${i * 0.3}s`
                      }}
                    />
                  ))}
                </div>
                
                {/* Inner Ring */}
                <div className="absolute inset-16 border-2 border-blue-400/50 rounded-full animate-spin cyber-pulse" style={{ animationDuration: '10s' }}>
                  {[...Array(4)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-2 h-2 bg-blue-400 rounded-full"
                      style={{
                        top: '50%',
                        left: '50%',
                        transform: `translate(-50%, -50%) rotate(${i * 90}deg) translateY(-80px)`,
                        animation: `quantum-orbit ${4}s linear infinite`,
                        animationDelay: `${i * 0.2}s`
                      }}
                    />
                  ))}
                </div>
                
                {/* Core */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-gradient-to-br from-cyan-400 via-purple-500 to-blue-600 rounded-full cyber-pulse">
                  <div className="absolute inset-2 bg-black rounded-full flex items-center justify-center">
                    <div className="text-cyan-400 font-mono text-xs font-bold neon-glow">Q</div>
                  </div>
                </div>
              </div>
              
              {/* Quantum State Labels */}
              <div className="absolute top-4 left-4 px-3 py-1 bg-black/80 border border-purple-400/30 text-purple-400 font-mono text-xs">
                |ψ⟩ = α|0⟩ + β|1⟩
              </div>
              <div className="absolute bottom-4 right-4 px-3 py-1 bg-black/80 border border-cyan-400/30 text-cyan-400 font-mono text-xs">
                SUPERPOSITION
              </div>
            </div>
          </div>

          {/* Right: Quantum Statistics */}
          <div className="space-y-8">
            <div className="mb-12">
              <h3 className="text-3xl font-bold text-purple-400 mb-4 neon-glow">
                Quantum Metrics
              </h3>
              <p className="text-gray-300">
                Real-time performance indicators from our quantum processing units
              </p>
            </div>
            
            {quantumStats.map((stat, index) => (
              <div
                key={stat.label}
                className="group relative p-6 border border-purple-400/20 bg-black/40 hover:border-purple-400/50 transition-all duration-500 cyber-pulse"
                style={{
                  animation: `clean-slide 0.8s ease-out forwards`,
                  animationDelay: `${index * 0.1}s`,
                  opacity: 0
                }}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-lg font-semibold text-purple-400 mb-2">
                      {stat.label}
                    </h4>
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl font-bold text-cyan-400 neon-glow">
                        {stat.value}
                      </span>
                      <span className="text-gray-400 font-mono text-sm">
                        {stat.unit}
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-green-400 font-mono text-sm mb-2">
                      {stat.growth}
                    </div>
                    <div className="w-16 h-16 border border-purple-400/30 bg-black/60 rounded-full flex items-center justify-center cyber-pulse">
                      <div className="text-purple-400 font-mono text-xs">
                        {stat.unit}
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Quantum Progress Indicator */}
                <div className="mt-4 h-2 bg-gray-700 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-purple-400 via-cyan-400 to-blue-500 rounded-full cyber-pulse"
                    style={{ 
                      width: '100%',
                      animation: `quantum-flow 3s ease-in-out infinite`
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quantum Principles */}
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Superposition",
              description: "Qubits exist in multiple states simultaneously until measured",
              symbol: "|ψ⟩"
            },
            {
              title: "Entanglement",
              description: "Quantum particles remain connected across vast distances",
              symbol: "⟨φ|ψ⟩"
            },
            {
              title: "Interference",
              description: "Quantum states can amplify or cancel each other out",
              symbol: "∫|ψ|²"
            }
          ].map((principle, index) => (
            <div
              key={principle.title}
              className="group text-center p-8 border border-purple-400/20 bg-black/20 hover:border-purple-400/50 transition-all duration-500 cyber-pulse"
              style={{
                animation: `clean-slide 0.8s ease-out forwards`,
                animationDelay: `${index * 0.2}s`,
                opacity: 0
              }}
            >
              <div className="text-4xl font-bold text-purple-400 mb-4 neon-glow">
                {principle.symbol}
              </div>
              <h4 className="text-xl font-bold text-cyan-400 mb-4">
                {principle.title}
              </h4>
              <p className="text-gray-300 text-sm">
                {principle.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Custom Quantum Animations */}
      <style jsx>{`
        @keyframes quantum-drift {
          0% {
            transform: translate(0, 0) scale(1);
            opacity: 0;
          }
          20% {
            opacity: 1;
          }
          80% {
            opacity: 1;
          }
          100% {
            transform: translate(${Math.random() * 200 - 100}px, ${Math.random() * 200 - 100}px) scale(0.5);
            opacity: 0;
          }
        }
        
        @keyframes quantum-orbit {
          0% {
            transform: translate(-50%, -50%) rotate(0deg) translateY(var(--orbit-radius, -100px)) scale(1);
            opacity: 1;
          }
          50% {
            transform: translate(-50%, -50%) rotate(180deg) translateY(var(--orbit-radius, -100px)) scale(1.2);
            opacity: 0.6;
          }
          100% {
            transform: translate(-50%, -50%) rotate(360deg) translateY(var(--orbit-radius, -100px)) scale(1);
            opacity: 1;
          }
        }
        
        @keyframes quantum-flow {
          0% {
            background-position: -200px 0;
          }
          100% {
            background-position: 200px 0;
          }
        }
      `}</style>
    </section>
  );
}