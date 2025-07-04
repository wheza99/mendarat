'use client';

export default function NeuralPortal() {
  return (
    <section className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-green-400">
            <span className="block">NEURAL</span>
            <span className="block -mt-2">PORTAL</span>
          </h2>
          
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
            Access the cyber matrix through advanced neural portal technology
          </p>
          
          <div className="flex items-center justify-center gap-4 text-slate-400">
            <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium">PORTAL STATUS: ACTIVE</span>
            <div className="w-8 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-cyber-flow"></div>
            <span className="text-pink-300 text-sm">⚡ NEURAL LINK ESTABLISHED</span>
          </div>
        </div>

        <div className="relative mb-16">
          <div className="border-4 border-purple-400/30 bg-black/30 backdrop-blur-sm p-12 rounded-3xl shadow-2xl">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-purple-300 mb-4">🌀 CYBER MATRIX GATEWAY</h3>
              <p className="text-slate-300">Multi-dimensional portal access with neural synchronization</p>
            </div>
            
            <div className="relative h-96 bg-black/50 border border-purple-500/30 rounded-2xl overflow-hidden mb-8">
              <div className="absolute inset-4">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="relative">
                    {/* Portal Rings */}
                    <div className="w-80 h-80 border-4 border-purple-400/40 rounded-full bg-purple-400/5 flex items-center justify-center animate-cyber-spin">
                      <div className="w-64 h-64 border-2 border-pink-400/50 rounded-full bg-pink-400/5 flex items-center justify-center animate-cyber-drift">
                        <div className="w-48 h-48 border-2 border-green-400/60 rounded-full bg-green-400/10 flex items-center justify-center animate-cyber-pulse">
                          <div className="w-32 h-32 border border-cyan-400/70 rounded-full bg-cyan-400/20 flex items-center justify-center animate-cyber-spin" style={{ animationDirection: 'reverse' }}>
                            <div className="w-16 h-16 bg-gradient-to-br from-purple-400 via-pink-400 to-green-400 rounded-full animate-pulse"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Portal Energy Points */}
                    <div className="absolute top-0 left-1/2 w-6 h-6 bg-purple-400 rounded-full animate-cyber-pulse transform -translate-x-1/2 -translate-y-1/2"></div>
                    <div className="absolute bottom-0 left-1/2 w-6 h-6 bg-pink-400 rounded-full animate-cyber-pulse transform -translate-x-1/2 translate-y-1/2" style={{ animationDelay: '1s' }}></div>
                    <div className="absolute left-0 top-1/2 w-6 h-6 bg-green-400 rounded-full animate-cyber-pulse transform -translate-x-1/2 -translate-y-1/2" style={{ animationDelay: '2s' }}></div>
                    <div className="absolute right-0 top-1/2 w-6 h-6 bg-cyan-400 rounded-full animate-cyber-pulse transform translate-x-1/2 -translate-y-1/2" style={{ animationDelay: '3s' }}></div>
                    
                    {/* Diagonal Energy Points */}
                    <div className="absolute top-1/4 right-1/4 w-4 h-4 bg-yellow-400 rounded-full animate-cyber-pulse transform translate-x-1/2 -translate-y-1/2" style={{ animationDelay: '0.5s' }}></div>
                    <div className="absolute bottom-1/4 left-1/4 w-4 h-4 bg-blue-400 rounded-full animate-cyber-pulse transform -translate-x-1/2 translate-y-1/2" style={{ animationDelay: '1.5s' }}></div>
                    <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-orange-400 rounded-full animate-cyber-pulse transform -translate-x-1/2 -translate-y-1/2" style={{ animationDelay: '2.5s' }}></div>
                    <div className="absolute bottom-1/4 right-1/4 w-4 h-4 bg-indigo-400 rounded-full animate-cyber-pulse transform translate-x-1/2 translate-y-1/2" style={{ animationDelay: '3.5s' }}></div>
                  </div>
                </div>
              </div>
              
              <div className="absolute bottom-4 left-4 right-4 flex justify-between text-xs text-slate-400">
                <span>Portal: Active</span>
                <span>Neural Sync: 99.9%</span>
                <span>Matrix Link: Stable</span>
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-4">
              <div className="p-4 bg-black/30 border border-purple-500/30 rounded-xl text-center">
                <div className="text-purple-400 text-2xl mb-2">🌀</div>
                <div className="text-purple-400 font-bold text-lg">∞.247.∞</div>
                <div className="text-slate-400 text-sm">Portal Alpha</div>
              </div>
              <div className="p-4 bg-black/30 border border-pink-500/30 rounded-xl text-center">
                <div className="text-pink-400 text-2xl mb-2">⚡</div>
                <div className="text-pink-400 font-bold text-lg">247.∞.888</div>
                <div className="text-slate-400 text-sm">Portal Beta</div>
              </div>
              <div className="p-4 bg-black/30 border border-green-500/30 rounded-xl text-center">
                <div className="text-green-400 text-2xl mb-2">🧠</div>
                <div className="text-green-400 font-bold text-lg">888.888.∞</div>
                <div className="text-slate-400 text-sm">Portal Gamma</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { name: "Alpha Portal", dimension: "∞.247.∞", status: "ACTIVE", stability: "99.9%", icon: "🌀", color: "purple" },
            { name: "Beta Portal", dimension: "247.∞.888", status: "ACTIVE", stability: "98.8%", icon: "⚡", color: "pink" },
            { name: "Gamma Portal", dimension: "888.888.∞", status: "ACTIVE", stability: "99.7%", icon: "🧠", color: "green" }
          ].map((portal, index) => (
            <div
              key={portal.name}
              className="group relative"
              style={{
                animation: `cyber-fade-in 0.8s ease-out forwards`,
                animationDelay: `${index * 0.3}s`,
                opacity: 0
              }}
            >
              <div className={`p-8 border-2 border-${portal.color}-400/30 bg-black/50 backdrop-blur-sm rounded-3xl hover:border-${portal.color}-400/60 transition-all duration-300 relative overflow-hidden`}>
                <div className={`absolute inset-0 bg-gradient-to-br from-${portal.color}-500/10 via-transparent to-${portal.color}-500/5`}></div>
                
                <div className="relative z-10">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="text-5xl">{portal.icon}</div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-2">{portal.name}</h3>
                      <div className="flex items-center gap-2 mb-3">
                        <span className={`px-3 py-1 bg-${portal.color}-100/10 text-${portal.color}-300 text-sm font-medium rounded-full border border-${portal.color}-400/30`}>
                          {portal.status}
                        </span>
                        <div className={`w-2 h-2 bg-${portal.color}-400 rounded-full animate-pulse`}></div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-slate-300 font-medium">Stability</span>
                      <span className={`text-${portal.color}-400 font-bold`}>{portal.stability}</span>
                    </div>
                    <div className="relative">
                      <div className={`w-full h-3 bg-black/50 rounded-full border border-${portal.color}-500/30 overflow-hidden`}>
                        <div 
                          className={`h-full bg-gradient-to-r from-${portal.color}-400 to-cyan-400 rounded-full transition-all duration-1000 ease-out relative`}
                          style={{ 
                            width: portal.stability,
                            animation: `cyber-grow 2s ease-out forwards`,
                            animationDelay: `${index * 0.3 + 1}s`
                          }}
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse" />
                        </div>
                      </div>
                    </div>
                    
                    <div className="text-center mt-6">
                      <div className={`text-xl font-bold text-${portal.color}-400 mb-1`}>{portal.dimension}</div>
                      <div className="text-xs text-slate-400">Dimensional Coordinates</div>
                    </div>
                    
                    <div className={`mt-6 p-3 bg-black/30 border border-${portal.color}-500/30 rounded-xl`}>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-slate-400">Portal Status:</span>
                        <span className={`text-${portal.color}-400 font-mono`}>ONLINE</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="mt-24 text-center">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-4xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-cyan-400 to-pink-400">
              ENTER THE MATRIX
            </h3>
            
            <p className="text-xl text-slate-300 mb-12">
              Connect to the neural portal and experience the future of cyber matrix technology
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button className="group relative px-10 py-5 bg-gradient-to-r from-green-600 to-cyan-600 rounded-full font-semibold text-lg hover:scale-105 transition-all duration-300 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-pink-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10 flex items-center gap-3">
                  <span>⚡ CONNECT TO PORTAL</span>
                  <div className="w-6 h-6 border-2 border-white/50 rounded-full animate-spin"></div>
                </span>
              </button>
              
              <button className="group relative px-10 py-5 border-2 border-green-400/50 text-green-200 rounded-full font-semibold text-lg hover:bg-green-400/10 transition-all duration-300">
                <span className="flex items-center gap-3">
                  <span>🌀 EXPLORE MATRIX</span>
                  <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 