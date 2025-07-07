import React from 'react';

export default function GalacticServices() {
  const services = [
    {
      constellation: "Andromeda",
      title: "Cosmic Design",
      description: "Minimal interfaces that span across galaxies with timeless elegance.",
      features: [
        "Infinite Scalability",
        "Stellar Performance",
        "Void Aesthetics",
        "Cosmic Harmony"
      ],
      status: "Active",
      distance: "2.5M ly"
    },
    {
      constellation: "Orion",
      title: "Stellar Development",
      description: "Build applications that shine like the brightest stars in the universe.",
      features: [
        "Light Speed Delivery",
        "Quantum Architecture",
        "Nebula Hosting",
        "Galactic Support"
      ],
      status: "Active",
      distance: "1.3K ly"
    },
    {
      constellation: "Cassiopeia",
      title: "Nebula Analytics",
      description: "Deep insights from the cosmic data flowing through digital space.",
      features: [
        "Universal Tracking",
        "Cosmic Intelligence",
        "Stellar Metrics",
        "Void Optimization"
      ],
      status: "Active",
      distance: "550 ly"
    },
    {
      constellation: "Ursa Major",
      title: "Quantum Consulting",
      description: "Strategic guidance for navigating the infinite possibilities of space.",
      features: [
        "Cosmic Strategy",
        "Stellar Planning",
        "Void Analysis",
        "Galactic Vision"
      ],
      status: "Active",
      distance: "79 ly"
    }
  ];

  return (
    <section className="relative py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-thin text-white mb-6">
            GALACTIC
            <span className="block bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              SERVICES
            </span>
          </h2>
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-white to-transparent mx-auto mb-8"></div>
          <p className="text-xl text-slate-300 font-light max-w-2xl mx-auto">
            Professional services that transcend the boundaries of space and time.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative p-8 bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-all duration-700"
            >
              {/* Background Constellation */}
              <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-700">
                <div className="absolute top-4 left-4 w-1 h-1 bg-white rounded-full"></div>
                <div className="absolute top-6 left-8 w-1 h-1 bg-white rounded-full"></div>
                <div className="absolute top-8 left-6 w-1 h-1 bg-white rounded-full"></div>
                <div className="absolute top-10 left-10 w-1 h-1 bg-white rounded-full"></div>
                <div className="absolute top-12 left-4 w-1 h-1 bg-white rounded-full"></div>
                
                {/* Constellation Lines */}
                <svg className="absolute inset-0 w-full h-full">
                  <line x1="16" y1="16" x2="32" y2="24" stroke="white" strokeWidth="0.5" opacity="0.3" />
                  <line x1="32" y1="24" x2="24" y2="32" stroke="white" strokeWidth="0.5" opacity="0.3" />
                  <line x1="24" y1="32" x2="40" y2="40" stroke="white" strokeWidth="0.5" opacity="0.3" />
                  <line x1="40" y1="40" x2="16" y2="48" stroke="white" strokeWidth="0.5" opacity="0.3" />
                </svg>
              </div>

              {/* Content */}
              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-light text-white mb-2">
                      {service.title}
                    </h3>
                    <div className="flex items-center gap-4">
                      <span className="text-sm text-slate-400 uppercase tracking-widest">
                        {service.constellation}
                      </span>
                      <div className="w-px h-4 bg-white/20"></div>
                      <span className="text-sm text-slate-400">
                        {service.distance}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-cosmic-pulse"></div>
                    <span className="text-xs text-green-400 uppercase tracking-widest">
                      {service.status}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-slate-300 font-light leading-relaxed mb-8">
                  {service.description}
                </p>

                {/* Features */}
                <div className="grid grid-cols-2 gap-4">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <div className="w-1 h-1 bg-blue-400 rounded-full"></div>
                      <span className="text-sm text-slate-300 font-light">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Action Button */}
                <div className="mt-8 pt-6 border-t border-white/10">
                  <button className="group/btn relative w-full py-3 bg-transparent border border-white/20 text-white hover:border-white/40 transition-all duration-500">
                    <span className="relative z-10 text-sm uppercase tracking-widest">
                      Explore Service
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500"></div>
                  </button>
                </div>
              </div>

              {/* Hover Effect Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <div className="inline-flex items-center gap-4 p-6 bg-white/5 border border-white/10 backdrop-blur-sm">
            <div className="w-8 h-8 border border-white/20 rounded-full flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-full animate-cosmic-pulse"></div>
            </div>
            <div className="text-left">
              <div className="text-white font-light">
                Need a custom constellation?
              </div>
              <div className="text-sm text-slate-400">
                Let's create something unique for your universe
              </div>
            </div>
            <button className="px-6 py-2 bg-transparent border border-white/20 text-white hover:border-white/40 transition-all duration-500">
              <span className="text-sm uppercase tracking-widest">
                Contact
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
} 