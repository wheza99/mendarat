export default function NeonTech() {
  const techFeatures = [
    {
      title: "ARTIFICIAL INTELLIGENCE",
      subtitle: "Advanced Neural Networks",
      stats: "99.7% Accuracy",
      progress: 97,
      color: "cyan"
    },
    {
      title: "BLOCKCHAIN SECURITY", 
      subtitle: "Decentralized Protection",
      stats: "256-bit Encryption",
      progress: 89,
      color: "pink"
    },
    {
      title: "QUANTUM PROCESSING",
      subtitle: "Superposition Computing", 
      stats: "∞ Calculations/sec",
      progress: 95,
      color: "purple"
    },
    {
      title: "BIOMETRIC SCANNING",
      subtitle: "Multi-Factor Authentication",
      stats: "0.001% Error Rate", 
      progress: 92,
      color: "green"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      cyan: {
        bg: "from-cyan-400 to-blue-500",
        border: "border-cyan-400",
        text: "text-cyan-400"
      },
      pink: {
        bg: "from-pink-400 to-purple-500", 
        border: "border-pink-400",
        text: "text-pink-400"
      },
      purple: {
        bg: "from-purple-400 to-indigo-500",
        border: "border-purple-400", 
        text: "text-purple-400"
      },
      green: {
        bg: "from-green-400 to-teal-500",
        border: "border-green-400",
        text: "text-green-400"
      }
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section className="py-20 px-4 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-black to-gray-900" />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-cyan-400 to-purple-400 mb-6 cyber-glitch">
            NEON TECH
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience cutting-edge technology powered by artificial intelligence and quantum computing
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Tech visualization */}
          <div className="relative">
            {/* Main display */}
            <div className="bg-black/80 border-2 border-cyan-400 rounded-xl p-8 backdrop-blur-sm">
              {/* Header bar */}
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-cyan-400/30">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-red-400 rounded-full neon-pulse" />
                  <div className="w-3 h-3 bg-yellow-400 rounded-full neon-pulse" style={{ animationDelay: '0.2s' }} />
                  <div className="w-3 h-3 bg-green-400 rounded-full neon-pulse" style={{ animationDelay: '0.4s' }} />
                </div>
                <div className="text-cyan-400 font-mono text-sm hologram-flicker">
                  SYSTEM_V2.077.exe
                </div>
              </div>

              {/* Tech readouts */}
              <div className="space-y-6">
                {techFeatures.map((tech, index) => {
                  const colors = getColorClasses(tech.color);
                  return (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className={`font-mono text-sm ${colors.text} neon-pulse`}>
                          {tech.title}
                        </span>
                        <span className="text-gray-400 text-xs font-mono">
                          {tech.stats}
                        </span>
                      </div>
                      
                      {/* Progress bar */}
                      <div className={`w-full bg-gray-800 h-2 rounded-full border ${colors.border} overflow-hidden`}>
                        <div 
                          className={`h-full bg-gradient-to-r ${colors.bg} rounded-full transition-all duration-2000 ease-out neon-pulse`}
                          style={{ 
                            width: `${tech.progress}%`,
                            animationDelay: `${index * 0.3}s`
                          }}
                        />
                      </div>
                      
                      <div className="text-xs text-gray-500 font-mono">
                        {tech.subtitle}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Terminal output */}
              <div className="mt-8 bg-black/60 border border-green-400/30 rounded p-4 font-mono text-xs">
                <div className="text-green-400 mb-2">&gt; INITIALIZING QUANTUM PROTOCOLS...</div>
                <div className="text-cyan-400 mb-2">&gt; NEURAL NETWORKS ONLINE</div>
                <div className="text-pink-400 mb-2">&gt; BLOCKCHAIN VERIFIED</div>
                <div className="text-purple-400">&gt; SYSTEM READY_</div>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 border-2 border-pink-400 rotate-45 neon-pulse" />
            <div className="absolute -bottom-4 -left-4 w-6 h-6 border-2 border-cyan-400 rotate-12 neon-pulse" />
          </div>

          {/* Right side - Content */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-400 mb-4 neon-pulse">
                NEXT-GEN COMPUTING
              </h3>
              <p className="text-gray-300 leading-relaxed hologram-flicker">
                Our advanced technology stack combines artificial intelligence, quantum computing, 
                and blockchain security to deliver unprecedented performance and reliability.
              </p>
            </div>

            {/* Feature highlights */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { icon: "⚡", title: "INSTANT PROCESSING", desc: "Quantum-speed calculations" },
                { icon: "🔒", title: "ULTRA SECURE", desc: "Military-grade encryption" },
                { icon: "🤖", title: "AI POWERED", desc: "Self-learning algorithms" },
                { icon: "🌐", title: "GLOBALLY CONNECTED", desc: "Distributed network" }
              ].map((feature, index) => (
                <div key={index} className="flex items-start gap-3 group">
                  <div className="text-2xl group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="text-cyan-400 font-bold text-sm neon-pulse">
                      {feature.title}
                    </h4>
                    <p className="text-gray-400 text-xs">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <button className="group relative px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold rounded-lg overflow-hidden transition-all duration-300 hover:scale-105">
              <span className="relative z-10">ACTIVATE SYSTEMS</span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
} 