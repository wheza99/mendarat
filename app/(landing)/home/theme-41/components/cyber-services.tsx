export default function CyberServices() {
  const services = [
    {
      title: "NEURAL INTERFACE",
      description: "Direct brain-computer interfaces for seamless digital interaction and enhanced cognitive capabilities.",
      icon: "🧠",
      color: "from-cyan-400 to-blue-500",
      borderColor: "border-cyan-400"
    },
    {
      title: "QUANTUM COMPUTING",
      description: "Harness quantum entanglement for exponential processing power and complex problem solving.",
      icon: "⚛️",
      color: "from-pink-400 to-purple-500",
      borderColor: "border-pink-400"
    },
    {
      title: "HOLOGRAPHIC UI",
      description: "3D holographic user interfaces that adapt to your environment and biometric feedback.",
      icon: "🔮",
      color: "from-purple-400 to-indigo-500",
      borderColor: "border-purple-400"
    },
    {
      title: "CYBER SECURITY",
      description: "Advanced AI-driven security protocols protecting against quantum and neural attacks.",
      icon: "🛡️",
      color: "from-green-400 to-teal-500",
      borderColor: "border-green-400"
    },
    {
      title: "DATA MINING",
      description: "Extract insights from the vast digital universe using advanced pattern recognition.",
      icon: "💎",
      color: "from-yellow-400 to-orange-500",
      borderColor: "border-yellow-400"
    },
    {
      title: "VIRTUAL REALITY",
      description: "Immersive digital worlds indistinguishable from reality with haptic feedback systems.",
      icon: "🥽",
      color: "from-red-400 to-pink-500",
      borderColor: "border-red-400"
    }
  ];

  return (
    <section className="py-20 px-4 relative">
      {/* Section background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black" />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-pink-400 to-purple-400 mb-6 neon-pulse">
            CYBER SERVICES
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto hologram-flicker">
            Advanced technologies for the digital age. Experience the future of computing with our cutting-edge solutions.
          </p>
          
          {/* Decorative lines */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-cyan-400" />
            <div className="w-2 h-2 bg-cyan-400 rounded-full neon-pulse" />
            <div className="w-32 h-px bg-gradient-to-r from-cyan-400 to-pink-400" />
            <div className="w-2 h-2 bg-pink-400 rounded-full neon-pulse" style={{ animationDelay: '0.5s' }} />
            <div className="w-16 h-px bg-gradient-to-r from-pink-400 to-transparent" />
          </div>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative bg-black/50 backdrop-blur-sm border-2 ${service.borderColor} rounded-xl p-6 hover:bg-gray-900/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Card glow effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300`} />
              
              {/* Service icon */}
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              
              {/* Service title */}
              <h3 className={`text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${service.color} mb-4 neon-pulse`}>
                {service.title}
              </h3>
              
              {/* Service description */}
              <p className="text-gray-300 leading-relaxed group-hover:text-white transition-colors duration-300 hologram-flicker">
                {service.description}
              </p>
              
              {/* Interactive elements */}
              <div className="mt-6 flex justify-between items-center">
                <button className={`text-sm font-bold bg-gradient-to-r ${service.color} text-black px-4 py-2 rounded-lg hover:scale-105 transition-transform duration-300`}>
                  INITIALIZE
                </button>
                <div className="text-xs text-gray-500 cyber-glitch">
                  v2.077
                </div>
              </div>
              
              {/* Corner decorations */}
              <div className={`absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 ${service.borderColor} opacity-50`} />
              <div className={`absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 ${service.borderColor} opacity-50`} />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <button className="group relative px-8 py-4 bg-transparent border-2 border-pink-400 text-pink-400 font-bold rounded-lg hover:bg-pink-400 hover:text-black transition-all duration-300 neon-pulse">
            <span className="relative z-10">ACCESS ALL SERVICES</span>
            <div className="absolute inset-0 bg-pink-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center" />
          </button>
        </div>
      </div>
    </section>
  );
} 