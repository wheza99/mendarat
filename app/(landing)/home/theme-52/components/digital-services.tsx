'use client';

export default function DigitalServices() {
  return (
    <section className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-green-400 to-cyan-400">
            <span className="block">DIGITAL</span>
            <span className="block -mt-2">SERVICES</span>
          </h2>
          
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Advanced cyber services with neural matrix processing capabilities
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {[
            {
              title: "MATRIX COMPUTING",
              icon: "💚",
              services: [
                "Quantum Code Processing",
                "Neural Network Optimization",
                "Matrix Data Mining",
                "Cyber Security Analysis",
                "Digital Pattern Recognition"
              ],
              color: "green"
            },
            {
              title: "NEURAL NETWORKS",
              icon: "🧠",
              services: [
                "Brain-Computer Interface",
                "Synaptic Data Transfer",
                "Neural Processing Units",
                "Cognitive Computing",
                "Memory Matrix Storage"
              ],
              color: "cyan"
            },
            {
              title: "CYBER SOLUTIONS",
              icon: "⚡",
              services: [
                "Digital Matrix Security",
                "Cyber Threat Analysis",
                "Neural Firewall Systems",
                "Quantum Encryption",
                "Matrix Code Optimization"
              ],
              color: "pink"
            }
          ].map((category, categoryIndex) => (
            <div
              key={category.title}
              className="group relative"
              style={{
                animation: `cyber-slide-in 0.8s ease-out forwards`,
                animationDelay: `${categoryIndex * 0.2}s`,
                opacity: 0
              }}
            >
              <div className={`p-8 border-2 border-${category.color}-400/30 bg-black/50 backdrop-blur-sm rounded-3xl hover:border-${category.color}-400/60 transition-all duration-300 h-full relative overflow-hidden`}>
                <div className={`absolute inset-0 bg-gradient-to-br from-${category.color}-500/10 via-transparent to-${category.color}-500/5`}></div>
                
                <div className="relative z-10">
                  <div className="text-center mb-8">
                    <div className="text-6xl mb-4">{category.icon}</div>
                    <h3 className={`text-2xl font-bold text-${category.color}-300 mb-2`}>{category.title}</h3>
                    <div className="flex items-center justify-center gap-2">
                      <span className={`px-3 py-1 bg-${category.color}-100/10 text-${category.color}-300 text-sm font-medium rounded-full border border-${category.color}-400/30`}>
                        ACTIVE
                      </span>
                      <div className={`w-2 h-2 bg-${category.color}-400 rounded-full animate-pulse`}></div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    {category.services.map((service, serviceIndex) => (
                      <div
                        key={service}
                        className={`group/item flex items-center gap-4 p-4 bg-black/30 border border-${category.color}-400/20 rounded-xl hover:border-${category.color}-400/40 transition-all duration-300`}
                        style={{
                          animation: `cyber-fade-in 0.6s ease-out forwards`,
                          animationDelay: `${categoryIndex * 0.2 + serviceIndex * 0.1 + 0.5}s`,
                          opacity: 0
                        }}
                      >
                        <div className={`w-3 h-3 bg-${category.color}-400 rounded-full animate-pulse`}></div>
                        <span className="text-slate-200 group-hover/item:text-white transition-colors duration-200">{service}</span>
                        <div className="ml-auto">
                          <div className={`w-8 h-1 bg-gradient-to-r from-${category.color}-400 to-transparent rounded-full opacity-0 group-hover/item:opacity-100 transition-opacity duration-300`}></div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-8 p-4 bg-black/20 border border-green-500/20 rounded-xl">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-400">System Status:</span>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-green-400 font-mono">ONLINE</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 relative">
          <div className="border-4 border-yellow-400/30 bg-black/30 backdrop-blur-sm p-12 rounded-3xl shadow-2xl">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-yellow-300 mb-4">⚡ SERVICE MATRIX</h3>
              <p className="text-slate-300">Real-time service monitoring and neural matrix integration status</p>
            </div>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {[
                { label: "Active Services", value: "247", unit: "SERVICES", color: "green" },
                { label: "Neural Nodes", value: "∞K", unit: "NODES", color: "cyan" },
                { label: "Matrix Stability", value: "99.9", unit: "%", color: "pink" },
                { label: "Cyber Security", value: "∞³", unit: "PROTECTED", color: "yellow" }
              ].map((stat, index) => (
                <div
                  key={stat.label}
                  className={`p-6 bg-black/50 border border-${stat.color}-400/30 rounded-2xl text-center`}
                  style={{
                    animation: `cyber-grow 0.8s ease-out forwards`,
                    animationDelay: `${index * 0.2 + 1}s`,
                    transform: 'scale(0)'
                  }}
                >
                  <div className={`text-3xl font-bold text-${stat.color}-400 mb-2`}>
                    {stat.value}
                  </div>
                  <div className={`text-sm text-${stat.color}-300 mb-1`}>{stat.unit}</div>
                  <div className="text-xs text-slate-400">{stat.label}</div>
                  <div className={`mt-3 w-full h-2 bg-black/50 rounded-full overflow-hidden`}>
                    <div 
                      className={`h-full bg-gradient-to-r from-${stat.color}-400 to-${stat.color}-600 rounded-full`}
                      style={{
                        animation: `cyber-progress 2s ease-out forwards`,
                        animationDelay: `${index * 0.2 + 1.5}s`,
                        width: '0%'
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center gap-4 text-slate-400">
                <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">DIGITAL SERVICES: ALL SYSTEMS OPERATIONAL</span>
                <div className="w-8 h-1 bg-gradient-to-r from-yellow-400 to-green-400 rounded-full animate-cyber-flow"></div>
                <span className="text-green-300 text-sm">⚡ MATRIX SYNCHRONIZED</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 