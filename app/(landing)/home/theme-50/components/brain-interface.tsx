'use client';

export default function BrainInterface() {
  return (
    <section className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-cyan-400 to-blue-400">
            <span className="block">BRAIN</span>
            <span className="block -mt-2">INTERFACE</span>
          </h2>
          
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-12">
            Direct neural interface connections for seamless human-AI interaction and cognitive enhancement
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-green-600 to-cyan-600 rounded-full font-semibold text-lg hover:scale-105 transition-all duration-300 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative z-10 flex items-center gap-3">
                <span>🧠 CONNECT INTERFACE</span>
                <div className="w-6 h-6 border-2 border-white/50 rounded-full animate-spin"></div>
              </span>
            </button>
            
            <button className="group relative px-8 py-4 border-2 border-green-400/50 text-green-200 rounded-full font-semibold text-lg hover:bg-green-400/10 transition-all duration-300">
              <span className="flex items-center gap-3">
                <span>⚡ VIEW NEURAL MAP</span>
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
              </span>
            </button>
          </div>
        </div>

        <div className="relative">
          <div className="border-4 border-green-400/30 bg-slate-900/30 backdrop-blur-sm p-12 rounded-3xl shadow-2xl">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-green-300 mb-4">🧠 NEURAL INTERFACE MATRIX</h3>
              <p className="text-slate-300">Real-time brain-computer interface monitoring and neural signal processing</p>
            </div>
            
            <div className="relative h-80 bg-black/50 border border-slate-700 rounded-2xl overflow-hidden mb-8">
              <div className="absolute inset-4">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="relative">
                    <div className="w-48 h-48 border-2 border-green-400/50 rounded-full bg-green-400/10 flex items-center justify-center animate-neural-pulse">
                      <div className="w-32 h-32 border border-cyan-400/50 rounded-full bg-cyan-400/10 flex items-center justify-center animate-neural-drift">
                        <div className="w-16 h-16 border border-blue-400/50 rounded-full bg-blue-400/10 flex items-center justify-center">
                          <span className="text-green-400 text-2xl">🧠</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Neural Connection Points */}
                    <div className="absolute top-0 left-1/2 w-3 h-3 bg-green-400 rounded-full animate-neural-pulse transform -translate-x-1/2 -translate-y-1/2"></div>
                    <div className="absolute bottom-0 left-1/2 w-3 h-3 bg-cyan-400 rounded-full animate-neural-pulse transform -translate-x-1/2 translate-y-1/2" style={{ animationDelay: '1s' }}></div>
                    <div className="absolute left-0 top-1/2 w-3 h-3 bg-blue-400 rounded-full animate-neural-pulse transform -translate-x-1/2 -translate-y-1/2" style={{ animationDelay: '2s' }}></div>
                    <div className="absolute right-0 top-1/2 w-3 h-3 bg-purple-400 rounded-full animate-neural-pulse transform translate-x-1/2 -translate-y-1/2" style={{ animationDelay: '3s' }}></div>
                  </div>
                </div>
              </div>
              
              <div className="absolute bottom-4 left-4 right-4 flex justify-between text-xs text-slate-400">
                <span>Interface Status: CONNECTED</span>
                <span>Signal Strength: 98.7%</span>
                <span>Latency: 0.8ms</span>
              </div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { name: "Thought Recognition", value: "99.1%", color: "green" },
                { name: "Memory Access", value: "97.8%", color: "cyan" },
                { name: "Motor Control", value: "98.5%", color: "blue" },
                { name: "Sensory Input", value: "96.7%", color: "purple" }
              ].map((metric, index) => (
                <div key={metric.name} className="p-4 bg-black/30 border border-slate-700 rounded-xl text-center">
                  <div className={`text-${metric.color}-400 font-bold text-lg mb-2`}>{metric.value}</div>
                  <div className="text-slate-300 text-sm">{metric.name}</div>
                  <div className={`w-full h-2 bg-slate-800 rounded-full mt-3 overflow-hidden`}>
                    <div 
                      className={`h-full bg-${metric.color}-400 rounded-full animate-pulse`}
                      style={{ width: metric.value }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 