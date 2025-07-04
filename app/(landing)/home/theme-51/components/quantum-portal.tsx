'use client';

export default function QuantumPortal() {
  return (
    <section className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400">
            <span className="block">QUANTUM</span>
            <span className="block -mt-2">PORTAL</span>
          </h2>
          
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Step through dimensions and explore infinite quantum realities
          </p>
        </div>

        <div className="relative mb-20">
          <div className="border-4 border-pink-400/30 bg-black/30 backdrop-blur-sm p-16 rounded-3xl">
            <div className="text-center mb-12">
              <h3 className="text-4xl font-bold text-pink-300 mb-4">🌀 DIMENSIONAL GATEWAY</h3>
              <p className="text-slate-300">Portal to infinite quantum dimensions</p>
            </div>
            
            <div className="relative h-96 flex items-center justify-center">
              <div className="relative">
                {/* Outer Portal Ring */}
                <div className="w-80 h-80 border-4 border-pink-400/50 rounded-full bg-gradient-to-br from-pink-400/10 via-purple-400/5 to-cyan-400/10 animate-holo-spin flex items-center justify-center">
                  {/* Middle Portal Ring */}
                  <div className="w-64 h-64 border-2 border-purple-400/60 rounded-full bg-gradient-to-br from-purple-400/10 via-cyan-400/5 to-pink-400/10 animate-holo-drift flex items-center justify-center">
                    {/* Inner Portal Ring */}
                    <div className="w-48 h-48 border-2 border-cyan-400/70 rounded-full bg-gradient-to-br from-cyan-400/10 via-pink-400/5 to-purple-400/10 animate-holo-pulse flex items-center justify-center">
                      {/* Portal Core */}
                      <div className="w-32 h-32 border border-white/30 rounded-full bg-gradient-to-br from-pink-400/20 via-purple-400/20 to-cyan-400/20 flex items-center justify-center animate-pulse">
                        <div className="w-16 h-16 bg-gradient-to-br from-pink-400 via-purple-400 to-cyan-400 rounded-full animate-holo-spin"></div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Portal Energy Streams */}
                <div className="absolute top-0 left-1/2 w-4 h-12 bg-gradient-to-b from-pink-400 to-transparent rounded-full transform -translate-x-1/2 -translate-y-1/2 animate-holo-flow"></div>
                <div className="absolute bottom-0 left-1/2 w-4 h-12 bg-gradient-to-t from-purple-400 to-transparent rounded-full transform -translate-x-1/2 translate-y-1/2 animate-holo-flow" style={{ animationDelay: '1s' }}></div>
                <div className="absolute left-0 top-1/2 w-12 h-4 bg-gradient-to-r from-cyan-400 to-transparent rounded-full transform -translate-x-1/2 -translate-y-1/2 animate-holo-flow" style={{ animationDelay: '2s' }}></div>
                <div className="absolute right-0 top-1/2 w-12 h-4 bg-gradient-to-l from-pink-400 to-transparent rounded-full transform translate-x-1/2 -translate-y-1/2 animate-holo-flow" style={{ animationDelay: '3s' }}></div>
              </div>
            </div>
            
            <div className="text-center mt-8">
              <button className="group relative px-8 py-4 bg-gradient-to-r from-pink-600 via-purple-600 to-cyan-600 rounded-full font-semibold text-lg hover:scale-105 transition-all duration-300 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-pink-400 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10 flex items-center gap-3">
                  <span>🌀 ENTER QUANTUM PORTAL</span>
                  <div className="w-6 h-6 border-2 border-white/50 rounded-full animate-spin"></div>
                </span>
              </button>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            {
              title: "Dimension Alpha",
              description: "Reality where quantum mechanics rule supreme",
              coordinates: "∞.247.∞",
              status: "ACCESSIBLE",
              stability: "99.7%",
              icon: "🔮",
              gradient: "from-pink-400 to-purple-400"
            },
            {
              title: "Dimension Beta",
              description: "Holographic universe with neural consciousness",
              coordinates: "247.∞.888",
              status: "EXPLORING",
              stability: "98.9%",
              icon: "⚛",
              gradient: "from-purple-400 to-cyan-400"
            },
            {
              title: "Dimension Gamma",
              description: "Pure energy realm of infinite possibilities",
              coordinates: "888.888.∞",
              status: "DISCOVERED",
              stability: "97.8%",
              icon: "🌌",
              gradient: "from-cyan-400 to-pink-400"
            }
          ].map((dimension, index) => (
            <div
              key={dimension.title}
              className="group relative border-2 border-pink-400/30 bg-black/50 backdrop-blur-sm rounded-3xl p-8 hover:border-pink-400/60 transition-all duration-300"
              style={{
                animation: `holo-fade-in 0.8s ease-out forwards`,
                animationDelay: `${index * 0.3}s`,
                opacity: 0
              }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${dimension.gradient} opacity-5 rounded-3xl`}></div>
              
              <div className="relative z-10">
                <div className="text-center mb-6">
                  <div className="text-5xl mb-4">{dimension.icon}</div>
                  <h3 className={`text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${dimension.gradient}`}>
                    {dimension.title}
                  </h3>
                  <p className="text-slate-300 mt-3 text-sm">{dimension.description}</p>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400 text-sm">Coordinates:</span>
                    <span className="text-pink-300 font-mono text-sm">{dimension.coordinates}</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400 text-sm">Status:</span>
                    <span className="text-purple-300 font-semibold text-sm">{dimension.status}</span>
                  </div>
                  
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-slate-400 text-sm">Stability:</span>
                    <span className="text-cyan-300 font-bold text-sm">{dimension.stability}</span>
                  </div>
                  
                  <div className="w-full h-3 bg-black/50 rounded-full border border-pink-500/30 overflow-hidden">
                    <div 
                      className={`h-full bg-gradient-to-r ${dimension.gradient} rounded-full transition-all duration-1000 ease-out relative`}
                      style={{ 
                        width: dimension.stability,
                        animation: `holo-grow 2s ease-out forwards`,
                        animationDelay: `${index * 0.3 + 1}s`
                      }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse" />
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 text-center">
                  <button className={`px-4 py-2 border border-pink-400/40 bg-gradient-to-r ${dimension.gradient} bg-opacity-10 rounded-lg text-white text-sm hover:bg-opacity-20 transition-all duration-300`}>
                    <span className="flex items-center gap-2">
                      <span>Portal Access</span>
                      <div className="w-3 h-3 border border-white/50 rounded-full animate-spin"></div>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="inline-flex items-center gap-6 px-8 py-4 border border-pink-400/30 bg-pink-950/20 backdrop-blur-sm rounded-full">
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 bg-pink-400 rounded-full animate-pulse"></div>
              <span className="text-pink-300 font-medium">QUANTUM PORTAL STATUS</span>
            </div>
            <div className="w-1 h-6 bg-purple-400/30"></div>
            <div className="flex items-center gap-3">
              <span className="text-purple-300 text-sm">DIMENSIONS DISCOVERED:</span>
              <span className="text-cyan-300 font-bold">247.888.∞</span>
            </div>
            <div className="w-1 h-6 bg-cyan-400/30"></div>
            <div className="flex items-center gap-3">
              <span className="text-cyan-300 text-sm">🌀 PORTAL STABILITY:</span>
              <span className="text-pink-300 font-bold">OPTIMAL</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 