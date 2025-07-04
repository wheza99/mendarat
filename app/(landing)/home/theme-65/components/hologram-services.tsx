import React from 'react';

export default function HologramServices() {
  const services = [
    {
      title: "VIRTUAL REALITY",
      description: "Immersive VR experiences that transport you to cyberpunk worlds beyond imagination.",
      price: "2084",
      features: ["Neural Interface", "Haptic Feedback", "Quantum Rendering", "Mind Sync"],
      popular: true
    },
    {
      title: "AUGMENTED MATRIX",
      description: "Enhanced reality overlays that merge digital elements with your physical world.",
      price: "1337",
      features: ["AR Integration", "Real-time Processing", "Neural Mapping", "Data Fusion"],
      popular: false
    },
    {
      title: "HOLOGRAM CORE",
      description: "Advanced holographic projection systems for professional cyberpunk presentations.",
      price: "4096",
      features: ["3D Projection", "Particle Effects", "Voice Control", "AI Assistant"],
      popular: false
    }
  ];

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Holographic Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-950/20 to-black">
        {/* Hologram Grid Effect */}
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <radialGradient id="holoGradient" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#00ffff" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#ff00ff" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#ffff00" stopOpacity="0.2" />
              </radialGradient>
            </defs>
            
            {/* Concentric Circles */}
            {Array.from({ length: 8 }, (_, i) => (
              <circle
                key={i}
                cx="50"
                cy="50"
                r={5 + i * 8}
                fill="none"
                stroke="url(#holoGradient)"
                strokeWidth="0.3"
                className="animate-retro-hologram"
                style={{animationDelay: `${i * 0.3}s`}}
              />
            ))}
          </svg>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="relative">
            <h2 className="text-5xl sm:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-pink-500 to-yellow-400 bg-clip-text text-transparent mb-6">
              HOLOGRAM SERVICES
            </h2>
            <div className="absolute inset-0 text-5xl sm:text-6xl font-bold text-cyan-400/20 blur-md animate-retro-hologram">
              HOLOGRAM SERVICES
            </div>
          </div>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Experience the future of digital interaction with our cutting-edge holographic solutions
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative bg-gradient-to-b from-purple-900/20 to-black/40 border rounded-lg overflow-hidden transition-all duration-500 hover:scale-105 ${
                service.popular 
                  ? 'border-pink-500/60 shadow-pink-500/20 shadow-2xl' 
                  : 'border-cyan-400/30 hover:border-pink-500/40'
              }`}
            >
              {/* Popular Badge */}
              {service.popular && (
                <div className="absolute top-4 right-4 z-20">
                  <div className="bg-gradient-to-r from-pink-500 to-yellow-400 text-black px-3 py-1 rounded-full text-xs font-bold animate-retro-pulse">
                    POPULAR
                  </div>
                </div>
              )}

              {/* Holographic Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Content */}
              <div className="relative z-10 p-8">
                {/* Service Title */}
                <h3 className="text-2xl font-bold text-cyan-400 group-hover:text-pink-400 transition-colors duration-300 mb-4">
                  {service.title}
                </h3>

                {/* Price */}
                <div className="mb-6">
                  <div className="flex items-baseline">
                    <span className="text-4xl font-bold text-pink-500 animate-retro-pulse">
                      {service.price}
                    </span>
                    <span className="text-sm text-gray-400 ml-2 font-mono">CREDITS/MONTH</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-400 mb-8 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3 animate-retro-pulse" style={{animationDelay: `${featureIndex * 0.2}s`}}></div>
                      <span className="text-gray-300 font-mono text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <button className="w-full group-button relative py-3 bg-gradient-to-r from-cyan-500 to-pink-500 text-black font-bold rounded-lg overflow-hidden transition-all duration-300 hover:scale-105">
                  <span className="relative z-10">INITIALIZE SERVICE</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-yellow-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                </button>
              </div>

              {/* Holographic Border Effect */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-cyan-400/30 rounded-lg animate-retro-border-flow"></div>

              {/* Corner Holo Effects */}
              <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-cyan-400/40 group-hover:border-pink-500/60 transition-colors duration-300"></div>
              <div className="absolute top-0 right-0 w-8 h-8 border-r-2 border-t-2 border-cyan-400/40 group-hover:border-pink-500/60 transition-colors duration-300"></div>
              <div className="absolute bottom-0 left-0 w-8 h-8 border-l-2 border-b-2 border-cyan-400/40 group-hover:border-pink-500/60 transition-colors duration-300"></div>
              <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-cyan-400/40 group-hover:border-pink-500/60 transition-colors duration-300"></div>
            </div>
          ))}
        </div>

        {/* Bottom Info Section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-purple-900/20 to-black/40 border border-cyan-400/30 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-cyan-400 mb-4">QUANTUM GUARANTEE</h3>
            <p className="text-gray-300 max-w-3xl mx-auto mb-6">
              All our holographic services come with quantum-level security and 99.99% uptime guarantee. 
              Experience the future of digital interaction with complete peace of mind.
            </p>
            
            <div className="flex justify-center items-center space-x-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-pink-500 animate-retro-pulse">24/7</div>
                <div className="text-xs text-gray-400 font-mono">SUPPORT</div>
              </div>
              <div className="w-px h-8 bg-cyan-400/30"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-cyan-400 animate-retro-pulse">∞</div>
                <div className="text-xs text-gray-400 font-mono">SCALABILITY</div>
              </div>
              <div className="w-px h-8 bg-cyan-400/30"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-400 animate-retro-pulse">2084</div>
                <div className="text-xs text-gray-400 font-mono">FUTURE READY</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Hologram Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 25 }, (_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-retro-hologram-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${6 + Math.random() * 4}s`,
              boxShadow: '0 0 10px currentColor'
            }}
          />
        ))}
      </div>
    </section>
  );
} 