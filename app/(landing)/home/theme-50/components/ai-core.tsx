'use client';

export default function AICore() {
  const aiModules = [
    {
      name: "Deep Learning",
      performance: "99.8%",
      model: "Transformer",
      parameters: "175B",
      color: "blue",
      icon: "🤖"
    },
    {
      name: "Computer Vision",
      performance: "96.4%",
      model: "CNN",
      parameters: "86M",
      color: "purple",
      icon: "👁"
    },
    {
      name: "Natural Language",
      performance: "98.1%",
      model: "GPT",
      parameters: "345B",
      color: "cyan",
      icon: "💬"
    }
  ];

  return (
    <section className="py-32 px-6 relative">
      {/* AI Core Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-25">
          <div 
            className="w-full h-full"
            style={{
              background: `
                radial-gradient(ellipse at center top, rgba(59, 130, 246, 0.5), transparent 70%),
                radial-gradient(ellipse at bottom left, rgba(147, 51, 234, 0.4), transparent 60%),
                radial-gradient(ellipse at bottom right, rgba(6, 182, 212, 0.6), transparent 65%)
              `
            }}
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400">
            <span className="block">AI</span>
            <span className="block -mt-2">CORE</span>
          </h2>
          
          <div className="flex items-center justify-center gap-6 mb-8">
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent rounded-full animate-neural-flow" />
            <div className="w-14 h-14 border-2 border-purple-400 rounded-full bg-purple-400/20 backdrop-blur-sm flex items-center justify-center animate-neural-spin">
              <span className="text-purple-400 text-xl">🤖</span>
            </div>
            <div className="w-18 h-2 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full animate-neural-wave" />
            <div className="w-10 h-10 border border-cyan-400 rounded-full bg-cyan-400/20 backdrop-blur-sm animate-neural-drift" />
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent rounded-full animate-neural-flow" style={{ animationDelay: '2s' }} />
          </div>
          
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Advanced AI processing cores with machine learning capabilities and intelligent automation
          </p>
        </div>

        {/* AI Core Modules */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {aiModules.map((module, index) => (
            <div
              key={module.name}
              className="group relative"
              style={{
                animation: `neural-fade-in 0.8s ease-out forwards`,
                animationDelay: `${index * 0.3}s`,
                opacity: 0
              }}
            >
              <div className="p-8 border-2 border-purple-400/30 bg-slate-900/50 backdrop-blur-sm rounded-3xl hover:border-purple-400/60 transition-all duration-300 relative overflow-hidden">
                {/* AI Background Pattern */}
                <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                  <div 
                    className="w-full h-full"
                    style={{
                      background: `conic-gradient(from ${index * 120}deg, rgba(59, 130, 246, 0.6), rgba(147, 51, 234, 0.4), rgba(6, 182, 212, 0.5))`
                    }}
                  />
                </div>
                
                <div className="relative z-10">
                  {/* Module Header */}
                  <div className="flex items-start gap-4 mb-6">
                    <div className="text-5xl">{module.icon}</div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-2">{module.name}</h3>
                      <div className="flex items-center gap-2 mb-3">
                        <span className="px-3 py-1 bg-purple-100/10 text-purple-300 text-sm font-medium rounded-full border border-purple-400/30">
                          ACTIVE
                        </span>
                        <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Module Metrics */}
                  <div className="space-y-4">
                    {/* Performance Level */}
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-slate-300 font-medium">Performance</span>
                      <span className="text-purple-400 font-bold">{module.performance}</span>
                    </div>
                    <div className="relative">
                      <div className="w-full h-3 bg-slate-800/50 rounded-full border border-slate-700 overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-purple-400 to-blue-400 rounded-full transition-all duration-1000 ease-out relative"
                          style={{ 
                            width: module.performance,
                            animation: `neural-grow 2s ease-out forwards`,
                            animationDelay: `${index * 0.3 + 1}s`
                          }}
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse" />
                        </div>
                      </div>
                    </div>
                    
                    {/* Module Statistics */}
                    <div className="grid grid-cols-2 gap-4 mt-6">
                      <div className="text-center">
                        <div className="text-lg font-bold text-purple-400">{module.model}</div>
                        <div className="text-xs text-slate-400">Model Type</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-purple-400">{module.parameters}</div>
                        <div className="text-xs text-slate-400">Parameters</div>
                      </div>
                    </div>
                    
                    {/* Status Indicator */}
                    <div className="mt-6 p-3 bg-black/30 border border-slate-700 rounded-xl">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-slate-400">Status:</span>
                        <span className="text-purple-400 font-mono">PROCESSING</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Central AI Visualization */}
        <div className="relative mb-16">
          <div className="border-4 border-purple-400/30 bg-slate-900/30 backdrop-blur-sm p-12 rounded-3xl shadow-2xl">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-purple-300 mb-4">🤖 AI PROCESSING CENTER</h3>
              <p className="text-slate-300">Real-time artificial intelligence computation and decision making</p>
            </div>
            
            {/* AI Simulation */}
            <div className="relative h-64 bg-black/50 border border-slate-700 rounded-2xl overflow-hidden">
              {/* AI Processing Visualization */}
              <div className="absolute inset-4">
                <div className="grid grid-cols-8 gap-2 h-full">
                  {Array.from({ length: 64 }).map((_, i) => (
                    <div
                      key={i}
                      className="bg-gradient-to-t from-purple-400/20 to-blue-400/20 rounded-sm"
                      style={{
                        animation: `neural-activity ${Math.random() * 2 + 1}s ease-in-out infinite`,
                        animationDelay: `${Math.random() * 2}s`
                      }}
                    />
                  ))}
                </div>
              </div>
              
              {/* Processing Stats */}
              <div className="absolute bottom-4 left-4 right-4 flex justify-between text-xs text-slate-400">
                <span>CPU: 99.8%</span>
                <span>Memory: 847GB</span>
                <span>GPU: 100%</span>
              </div>
            </div>
            
            {/* AI Control Panel */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              <div className="p-4 bg-black/30 border border-slate-700 rounded-xl text-center">
                <div className="text-blue-400 text-2xl mb-2">🤖</div>
                <div className="text-blue-400 font-bold text-lg">175B</div>
                <div className="text-slate-400 text-sm">Deep Learning</div>
              </div>
              <div className="p-4 bg-black/30 border border-slate-700 rounded-xl text-center">
                <div className="text-purple-400 text-2xl mb-2">👁</div>
                <div className="text-purple-400 font-bold text-lg">86M</div>
                <div className="text-slate-400 text-sm">Computer Vision</div>
              </div>
              <div className="p-4 bg-black/30 border border-slate-700 rounded-xl text-center">
                <div className="text-cyan-400 text-2xl mb-2">💬</div>
                <div className="text-cyan-400 font-bold text-lg">345B</div>
                <div className="text-slate-400 text-sm">Natural Language</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 