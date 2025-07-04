'use client';

export default function NeuralNetwork() {
  return (
    <section className="py-32 px-6 relative">
      {/* Neural Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-20">
          <div 
            className="w-full h-full"
            style={{
              background: `
                radial-gradient(ellipse at top center, rgba(59, 130, 246, 0.4), transparent 60%),
                radial-gradient(ellipse at bottom left, rgba(147, 51, 234, 0.3), transparent 50%),
                radial-gradient(ellipse at bottom right, rgba(6, 182, 212, 0.5), transparent 55%)
              `
            }}
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400">
            <span className="block">NEURAL</span>
            <span className="block -mt-2">NETWORK</span>
          </h2>
          
          <div className="flex items-center justify-center gap-6 mb-8">
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent rounded-full animate-neural-flow" />
            <div className="w-14 h-14 border-2 border-blue-400 rounded-full bg-blue-400/20 backdrop-blur-sm flex items-center justify-center animate-neural-spin">
              <span className="text-blue-400 text-xl">🧠</span>
            </div>
            <div className="w-18 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-neural-wave" />
            <div className="w-10 h-10 border border-purple-400 rounded-full bg-purple-400/20 backdrop-blur-sm animate-neural-drift" />
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent rounded-full animate-neural-flow" style={{ animationDelay: '2s' }} />
          </div>
          
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Deep learning architecture with multi-layered neural processing and synaptic intelligence
          </p>
        </div>

        {/* Neural Network Layers */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {[
            { name: "Input Layer", nodes: 784, activity: "98.7%", type: "Sensory", icon: "👁" },
            { name: "Hidden Layer 1", nodes: 512, activity: "95.4%", type: "Processing", icon: "🧠" },
            { name: "Hidden Layer 2", nodes: 256, activity: "97.8%", type: "Cognitive", icon: "⚡" },
            { name: "Output Layer", nodes: 128, activity: "99.9%", type: "Decision", icon: "🎯" }
          ].map((layer, index) => (
            <div
              key={layer.name}
              className="group relative"
              style={{
                animation: `neural-fade-in 0.8s ease-out forwards`,
                animationDelay: `${index * 0.3}s`,
                opacity: 0
              }}
            >
              <div className="p-6 border-2 border-blue-400/30 bg-slate-900/50 backdrop-blur-sm rounded-3xl hover:border-blue-400/60 transition-all duration-300 relative overflow-hidden">
                <div className="relative z-10">
                  <div className="text-center mb-6">
                    <div className="text-4xl mb-3">{layer.icon}</div>
                    <h3 className="text-xl font-bold text-white mb-2">{layer.name}</h3>
                    <span className="px-2 py-1 bg-blue-100/10 text-blue-300 text-xs font-medium rounded-full border border-blue-400/30">
                      {layer.type}
                    </span>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="text-center mb-4">
                      <div className="text-2xl font-bold text-blue-400 mb-1">{layer.nodes}</div>
                      <div className="text-xs text-slate-400">Neural Nodes</div>
                    </div>
                    
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-slate-300 font-medium text-sm">Activity</span>
                      <span className="text-blue-400 font-bold text-sm">{layer.activity}</span>
                    </div>
                    <div className="relative">
                      <div className="w-full h-2 bg-slate-800/50 rounded-full border border-slate-700 overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full transition-all duration-1000 ease-out relative"
                          style={{ 
                            width: layer.activity,
                            animation: `neural-grow 2s ease-out forwards`,
                            animationDelay: `${index * 0.3 + 1}s`
                          }}
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse" />
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-4 p-2 bg-black/30 border border-slate-700 rounded-lg text-center">
                      <div className="text-blue-400 font-mono text-xs">ACTIVE</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {index < 3 && (
                <div className="absolute top-1/2 -right-3 w-6 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-60 hidden md:block animate-neural-signal" />
              )}
            </div>
          ))}
        </div>

        {/* Neural Network Visualization */}
        <div className="relative mb-16">
          <div className="border-4 border-blue-400/30 bg-slate-900/30 backdrop-blur-sm p-12 rounded-3xl shadow-2xl">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-blue-300 mb-4">🧠 NETWORK ARCHITECTURE</h3>
              <p className="text-slate-300">Real-time neural network processing and synaptic activity</p>
            </div>
            
            <div className="relative h-64 bg-black/50 border border-slate-700 rounded-2xl overflow-hidden">
              <svg className="absolute inset-0 w-full h-full" style={{ pointerEvents: 'none' }}>
                <defs>
                  <linearGradient id="neural1" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.8" />
                    <stop offset="50%" stopColor="#9333EA" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="#06B6D4" stopOpacity="0.7" />
                  </linearGradient>
                </defs>
                
                <path 
                  d="M 50 80 Q 200 60 350 80 T 700 90 Q 850 70 1000 80"
                  stroke="url(#neural1)" 
                  strokeWidth="3" 
                  fill="none"
                  className="animate-neural-signal"
                />
                <path 
                  d="M 50 140 Q 250 120 450 140 T 850 150 Q 1000 130 1150 140"
                  stroke="url(#neural1)" 
                  strokeWidth="2" 
                  fill="none"
                  className="animate-neural-signal"
                  style={{ animationDelay: '1s' }}
                />
              </svg>
              
              <div className="absolute top-16 left-12 w-4 h-4 bg-blue-400 rounded-full opacity-80 animate-neural-pulse"></div>
              <div className="absolute top-24 left-1/4 w-3 h-3 bg-purple-400 rounded-full opacity-70 animate-neural-drift"></div>
              <div className="absolute bottom-24 left-1/3 w-5 h-5 bg-cyan-400 rounded-full opacity-60 animate-neural-float"></div>
              
              <div className="absolute bottom-4 left-4 right-4 flex justify-between text-xs text-slate-400">
                <span>Throughput: 847M ops/s</span>
                <span>Accuracy: 98.7%</span>
                <span>Latency: 2.4ms</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 