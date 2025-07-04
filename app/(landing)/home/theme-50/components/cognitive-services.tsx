'use client';

export default function CognitiveServices() {
  return (
    <section className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-green-400">
            <span className="block">COGNITIVE</span>
            <span className="block -mt-2">SERVICES</span>
          </h2>
          
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Advanced AI-powered cognitive capabilities for intelligent automation and decision making
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            { name: "Pattern Recognition", accuracy: "99.7%", icon: "🔍", description: "Advanced pattern detection" },
            { name: "Decision Making", accuracy: "98.4%", icon: "🎯", description: "Intelligent choice algorithms" },
            { name: "Learning Systems", accuracy: "97.9%", icon: "📚", description: "Adaptive learning models" },
            { name: "Memory Processing", accuracy: "99.1%", icon: "💾", description: "Efficient data storage" },
            { name: "Language Understanding", accuracy: "98.8%", icon: "💬", description: "Natural language processing" },
            { name: "Prediction Engine", accuracy: "96.5%", icon: "🔮", description: "Future outcome modeling" }
          ].map((service, index) => (
            <div
              key={service.name}
              className="group relative"
              style={{
                animation: `neural-fade-in 0.8s ease-out forwards`,
                animationDelay: `${index * 0.2}s`,
                opacity: 0
              }}
            >
              <div className="p-6 border-2 border-purple-400/30 bg-slate-900/50 backdrop-blur-sm rounded-2xl hover:border-purple-400/60 transition-all duration-300 relative overflow-hidden">
                <div className="relative z-10">
                  <div className="text-center mb-4">
                    <div className="text-4xl mb-3">{service.icon}</div>
                    <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                    <p className="text-slate-400 text-sm mb-4">{service.description}</p>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-300 text-sm">Accuracy</span>
                      <span className="text-purple-400 font-bold">{service.accuracy}</span>
                    </div>
                    <div className="w-full h-2 bg-slate-800/50 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-purple-400 to-blue-400 rounded-full transition-all duration-1000 ease-out"
                        style={{ 
                          width: service.accuracy,
                          animation: `neural-grow 2s ease-out forwards`,
                          animationDelay: `${index * 0.2 + 1}s`
                        }}
                      />
                    </div>
                    
                    <div className="mt-4 p-2 bg-black/30 border border-slate-700 rounded-lg text-center">
                      <div className="text-purple-400 font-mono text-xs">ACTIVE</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 