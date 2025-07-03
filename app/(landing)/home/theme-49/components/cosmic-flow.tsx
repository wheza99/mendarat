'use client';

export default function CosmicFlow() {
  const flowSteps = [
    {
      title: "Energy Initiation",
      description: "Aurora particles begin quantum excitation",
      icon: "⚡",
      color: "purple"
    },
    {
      title: "Field Synchronization", 
      description: "Quantum fields align with cosmic frequencies",
      icon: "〰",
      color: "emerald"
    },
    {
      title: "Particle Entanglement",
      description: "Energy particles achieve quantum coherence",
      icon: "◈",
      color: "pink"
    },
    {
      title: "Cosmic Integration",
      description: "Full aurora-quantum field harmonization",
      icon: "✦",
      color: "blue"
    }
  ];

  return (
    <section className="py-32 px-6 relative">
      {/* Cosmic Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-25">
          <div 
            className="w-full h-full"
            style={{
              background: `
                radial-gradient(ellipse at center top, rgba(139, 92, 246, 0.4), transparent 60%),
                radial-gradient(ellipse at left center, rgba(34, 197, 94, 0.3), transparent 50%),
                radial-gradient(ellipse at right center, rgba(236, 72, 153, 0.35), transparent 55%)
              `
            }}
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400">
            <span className="block">COSMIC</span>
            <span className="block -mt-2">FLOW</span>
          </h2>
          
          <div className="flex items-center justify-center gap-6 mb-8">
            <div className="w-20 h-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent rounded-full animate-aurora-flow" />
            <div className="w-12 h-12 border-2 border-pink-400 rounded-full bg-pink-400/20 backdrop-blur-sm flex items-center justify-center animate-aurora-spin">
              <span className="text-pink-400 text-lg">〰</span>
            </div>
            <div className="w-16 h-2 bg-gradient-to-r from-pink-400 to-cyan-400 rounded-full animate-aurora-wave" />
            <div className="w-8 h-8 border border-cyan-400 rounded-full bg-cyan-400/20 backdrop-blur-sm animate-aurora-drift" />
            <div className="w-20 h-1 bg-gradient-to-r from-transparent via-emerald-400 to-transparent rounded-full animate-aurora-flow" style={{ animationDelay: '2s' }} />
          </div>
          
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Visualizing the cosmic energy flow dynamics that power aurora-quantum field interactions
          </p>
        </div>

        {/* Flow Process Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {flowSteps.map((step, index) => (
            <div
              key={step.title}
              className="group relative"
              style={{
                animation: `aurora-fade-in 0.8s ease-out forwards`,
                animationDelay: `${index * 0.2}s`,
                opacity: 0
              }}
            >
              <div className="relative">
                {/* Connection Line */}
                {index < flowSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 -right-4 w-8 h-0.5 bg-gradient-to-r from-purple-400 to-emerald-400 animate-aurora-flow z-10"></div>
                )}
                
                <div className={`p-6 border-2 border-${step.color}-400/30 bg-${step.color}-950/20 backdrop-blur-sm rounded-3xl hover:border-${step.color}-400/60 transition-all duration-300 relative overflow-hidden`}>
                  {/* Step Background Pattern */}
                  <div className="absolute top-0 right-0 w-20 h-20 opacity-10">
                    <div 
                      className="w-full h-full"
                      style={{
                        background: `conic-gradient(from ${index * 90}deg, rgba(139, 92, 246, 0.5), rgba(34, 197, 94, 0.3), rgba(236, 72, 153, 0.4))`
                      }}
                    />
                  </div>
                  
                  <div className="relative z-10">
                    {/* Step Number */}
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`w-12 h-12 border-2 border-${step.color}-400 rounded-full bg-${step.color}-400/20 flex items-center justify-center`}>
                        <span className={`text-${step.color}-400 font-bold`}>{index + 1}</span>
                      </div>
                      <div className="text-3xl">{step.icon}</div>
                    </div>
                    
                    <h3 className="text-lg font-bold text-white mb-3">{step.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{step.description}</p>
                    
                    {/* Flow Indicator */}
                    <div className="mt-4">
                      <div className="w-full h-1 bg-slate-800 rounded-full overflow-hidden">
                        <div 
                          className={`h-full bg-gradient-to-r from-${step.color}-400 to-${step.color === 'purple' ? 'pink' : step.color === 'emerald' ? 'cyan' : step.color === 'pink' ? 'purple' : 'emerald'}-400 rounded-full animate-aurora-progress`}
                          style={{ animationDelay: `${index * 0.5 + 1}s` }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Cosmic Flow Visualization */}
        <div className="relative mb-16">
          <div className="border-4 border-cyan-400/30 bg-slate-900/40 backdrop-blur-sm p-10 rounded-3xl shadow-2xl">
            {/* Flow Header */}
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-cyan-300 mb-4">〰 COSMIC FLOW LABORATORY</h3>
              <p className="text-slate-300">Advanced energy flow dynamics and quantum coherence analysis</p>
            </div>
            
            {/* Flow Visualization */}
            <div className="relative h-80 bg-black/40 border border-slate-700 rounded-2xl overflow-hidden mb-8">
              {/* SVG Flow Patterns */}
              <svg className="absolute inset-0 w-full h-full" style={{ pointerEvents: 'none' }}>
                <defs>
                  <linearGradient id="flowGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.8" />
                    <stop offset="50%" stopColor="#22C55E" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#EC4899" stopOpacity="0.7" />
                  </linearGradient>
                  <linearGradient id="flowGradient2" x1="100%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.7" />
                    <stop offset="50%" stopColor="#A855F7" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#10B981" stopOpacity="0.5" />
                  </linearGradient>
                </defs>
                
                {/* Spiral Flow Path */}
                <path 
                  d="M 100 200 Q 300 100 500 200 Q 700 300 900 200 Q 1100 100 1300 200"
                  stroke="url(#flowGradient1)" 
                  strokeWidth="3" 
                  fill="none"
                  className="animate-aurora-wave"
                />
                
                {/* Secondary Flow */}
                <path 
                  d="M 50 150 Q 250 250 450 150 Q 650 50 850 150 Q 1050 250 1250 150"
                  stroke="url(#flowGradient2)" 
                  strokeWidth="2" 
                  fill="none"
                  className="animate-aurora-wave"
                  style={{ animationDelay: '1.5s' }}
                />
                
                {/* Circular Energy Nodes */}
                <circle cx="200" cy="150" r="8" fill="#8B5CF6" opacity="0.8" className="animate-aurora-pulse">
                  <animate attributeName="r" values="8;12;8" dur="2s" repeatCount="indefinite" />
                </circle>
                <circle cx="600" cy="220" r="6" fill="#22C55E" opacity="0.7" className="animate-aurora-pulse" style={{ animationDelay: '0.7s' }}>
                  <animate attributeName="r" values="6;10;6" dur="1.8s" repeatCount="indefinite" />
                </circle>
                <circle cx="1000" cy="180" r="10" fill="#EC4899" opacity="0.6" className="animate-aurora-pulse" style={{ animationDelay: '1.3s' }}>
                  <animate attributeName="r" values="10;14;10" dur="2.2s" repeatCount="indefinite" />
                </circle>
              </svg>
              
              {/* Floating Energy Particles */}
              <div className="absolute top-12 left-12 w-3 h-3 bg-purple-400 rounded-full animate-aurora-spiral"></div>
              <div className="absolute top-24 right-20 w-2 h-2 bg-emerald-400 rounded-full animate-aurora-float"></div>
              <div className="absolute bottom-16 left-32 w-4 h-4 bg-pink-400 rounded-full animate-aurora-drift"></div>
              <div className="absolute bottom-12 right-16 w-2 h-2 bg-cyan-400 rounded-full animate-aurora-spiral"></div>
              
              {/* Flow Metrics Overlay */}
              <div className="absolute top-4 left-4 right-4">
                <div className="flex justify-between items-center text-xs text-slate-400 font-mono">
                  <span>FLOW RATE: 2.847 × 10⁶ Hz</span>
                  <span>COHERENCE: 99.7%</span>
                  <span>EFFICIENCY: OPTIMAL</span>
                </div>
              </div>
            </div>
            
            {/* Flow Metrics */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Spiral Efficiency */}
              <div className="p-6 bg-black/30 border border-purple-400/30 rounded-2xl">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 border-2 border-purple-400 rounded-full bg-purple-400/20 flex items-center justify-center">
                    <span className="text-purple-400">🌀</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Spiral Efficiency</h4>
                    <p className="text-slate-400 text-sm">Golden ratio optimization</p>
                  </div>
                </div>
                <div className="text-2xl font-bold text-purple-400 mb-2">φ = 1.618</div>
                <div className="w-full h-2 bg-purple-900/50 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-aurora-progress"></div>
                </div>
              </div>
              
              {/* Flow Coherence */}
              <div className="p-6 bg-black/30 border border-emerald-400/30 rounded-2xl">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 border-2 border-emerald-400 rounded-full bg-emerald-400/20 flex items-center justify-center">
                    <span className="text-emerald-400">〰</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Flow Coherence</h4>
                    <p className="text-slate-400 text-sm">Quantum synchronization</p>
                  </div>
                </div>
                <div className="text-2xl font-bold text-emerald-400 mb-2">99.847%</div>
                <div className="w-full h-2 bg-emerald-900/50 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full animate-aurora-progress" style={{ animationDelay: '1s' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Cosmic Action Buttons */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-cyan-600 to-purple-600 text-white rounded-full font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
              <span className="relative z-10 flex items-center gap-3">
                <span>〰 INITIATE FLOW</span>
                <div className="w-5 h-5 border-2 border-white/50 rounded-full animate-spin"></div>
              </span>
            </button>
            
            <button className="group relative px-8 py-4 border-2 border-cyan-400/50 text-cyan-300 rounded-full font-semibold text-lg hover:bg-cyan-400/10 transition-all duration-300">
              <span className="flex items-center gap-3">
                <span>✦ ANALYZE DYNAMICS</span>
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}