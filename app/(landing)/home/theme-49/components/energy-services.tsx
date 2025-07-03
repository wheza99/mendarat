'use client';

export default function EnergyServices() {
  const energyPackages = [
    {
      name: "Quantum Spark",
      price: "Free",
      period: "forever",
      description: "Basic quantum field access",
      features: [
        "1,000 particles/month",
        "Basic aurora visualization",
        "Community support",
        "Limited field access"
      ],
      color: "purple",
      icon: "⚡",
      popular: false
    },
    {
      name: "Aurora Core", 
      price: "$497",
      period: "/quantum cycle",
      description: "Professional aurora energy",
      features: [
        "100,000 particles/month",
        "Advanced field visualization", 
        "Priority lab access",
        "Quantum entanglement support",
        "Real-time field monitoring"
      ],
      color: "emerald",
      icon: "🌌",
      popular: true
    },
    {
      name: "Cosmic Field",
      price: "$997", 
      period: "/energy cycle",
      description: "Enterprise aurora systems",
      features: [
        "Unlimited particles",
        "Full aurora laboratory",
        "Dedicated field engineer",
        "Custom quantum algorithms",
        "24/7 cosmic monitoring",
        "Advanced analytics"
      ],
      color: "pink",
      icon: "✦",
      popular: false
    },
    {
      name: "Infinite Aurora",
      price: "Custom",
      period: "enterprise",
      description: "Unlimited cosmic power",
      features: [
        "Infinite field access",
        "Custom aurora generators",
        "Dedicated cosmic team",
        "Private quantum laboratory",
        "Real-time cosmic analytics",
        "Global field deployment"
      ],
      color: "cyan",
      icon: "∞",
      popular: false
    }
  ];

  return (
    <section className="py-32 px-6 relative">
      {/* Energy Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-20">
          <div 
            className="w-full h-full"
            style={{
              background: `
                radial-gradient(ellipse at top left, rgba(139, 92, 246, 0.4), transparent 50%),
                radial-gradient(ellipse at bottom right, rgba(34, 197, 94, 0.3), transparent 45%),
                radial-gradient(ellipse at center, rgba(236, 72, 153, 0.35), transparent 60%)
              `
            }}
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-purple-400">
            <span className="block">ENERGY</span>
            <span className="block -mt-2">SERVICES</span>
          </h2>
          
          <div className="flex items-center justify-center gap-6 mb-8">
            <div className="w-20 h-1 bg-gradient-to-r from-transparent via-emerald-400 to-transparent rounded-full animate-aurora-flow" />
            <div className="w-12 h-12 border-2 border-cyan-400 rounded-full bg-cyan-400/20 backdrop-blur-sm flex items-center justify-center animate-aurora-spin">
              <span className="text-cyan-400 text-lg">✦</span>
            </div>
            <div className="w-16 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full animate-aurora-wave" />
            <div className="w-8 h-8 border border-purple-400 rounded-full bg-purple-400/20 backdrop-blur-sm animate-aurora-drift" />
            <div className="w-20 h-1 bg-gradient-to-r from-transparent via-pink-400 to-transparent rounded-full animate-aurora-flow" style={{ animationDelay: '2s' }} />
          </div>
          
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Choose your quantum energy package and unlock the power of aurora-field technology
          </p>
        </div>

        {/* Service Packages Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {energyPackages.map((pkg, index) => (
            <div
              key={pkg.name}
              className={`group relative ${pkg.popular ? 'scale-105' : ''}`}
              style={{
                animation: `aurora-fade-in 0.8s ease-out forwards`,
                animationDelay: `${index * 0.2}s`,
                opacity: 0
              }}
            >
              {/* Popular Badge */}
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                  <div className="px-4 py-2 bg-gradient-to-r from-emerald-400 to-cyan-400 text-white text-sm font-bold rounded-full shadow-lg">
                    ✦ POPULAR
                  </div>
                </div>
              )}
              
              <div className={`relative p-8 border-2 border-${pkg.color}-400/30 bg-${pkg.color}-950/20 backdrop-blur-sm rounded-3xl hover:border-${pkg.color}-400/60 transition-all duration-300 ${pkg.popular ? 'border-emerald-400/60 bg-emerald-950/30' : ''} overflow-hidden`}>
                {/* Package Background Pattern */}
                <div className="absolute top-0 right-0 w-24 h-24 opacity-10">
                  <div 
                    className="w-full h-full"
                    style={{
                      background: `conic-gradient(from ${index * 90}deg, rgba(139, 92, 246, 0.5), rgba(34, 197, 94, 0.3), rgba(236, 72, 153, 0.4))`
                    }}
                  />
                </div>
                
                <div className="relative z-10">
                  {/* Package Header */}
                  <div className="text-center mb-6">
                    <div className="text-5xl mb-4">{pkg.icon}</div>
                    <h3 className="text-2xl font-bold text-white mb-2">{pkg.name}</h3>
                    <p className="text-slate-400 text-sm">{pkg.description}</p>
                  </div>
                  
                  {/* Pricing */}
                  <div className="text-center mb-8">
                    <div className={`text-4xl font-bold text-${pkg.popular ? 'emerald' : pkg.color}-400 mb-2`}>
                      {pkg.price}
                    </div>
                    <div className="text-slate-400 text-sm">{pkg.period}</div>
                  </div>
                  
                  {/* Features */}
                  <div className="space-y-3 mb-8">
                    {pkg.features.map((feature, fIndex) => (
                      <div key={fIndex} className="flex items-center gap-3">
                        <div className={`w-5 h-5 border border-${pkg.popular ? 'emerald' : pkg.color}-400 rounded-full bg-${pkg.popular ? 'emerald' : pkg.color}-400/20 flex items-center justify-center flex-shrink-0`}>
                          <div className={`w-2 h-2 bg-${pkg.popular ? 'emerald' : pkg.color}-400 rounded-full`}></div>
                        </div>
                        <span className="text-slate-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* CTA Button */}
                  <button className={`w-full py-3 ${pkg.popular ? 'bg-gradient-to-r from-emerald-600 to-cyan-600 text-white' : `border-2 border-${pkg.color}-400/50 text-${pkg.color}-300 hover:bg-${pkg.color}-400/10`} rounded-full font-semibold transition-all duration-300 hover:scale-105`}>
                    {pkg.price === 'Custom' ? 'Contact Us' : 'Start Journey'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Energy Benefits Section */}
        <div className="relative">
          <div className="border-4 border-purple-400/30 bg-slate-900/40 backdrop-blur-sm p-10 rounded-3xl shadow-2xl">
            {/* Benefits Header */}
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-purple-300 mb-4">✦ QUANTUM ENERGY BENEFITS</h3>
              <p className="text-slate-300">Unlock the full potential of aurora-quantum field technology</p>
            </div>
            
            {/* Benefits Grid */}
            <div className="grid md:grid-cols-3 gap-8">
              {/* Infinite Energy */}
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 border-4 border-purple-400/50 rounded-full bg-purple-950/30 backdrop-blur-sm flex items-center justify-center">
                  <span className="text-3xl">∞</span>
                </div>
                <h4 className="font-bold text-white mb-3">Infinite Energy Access</h4>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Tap into unlimited quantum energy fields powered by aurora borealis dynamics
                </p>
                <div className="mt-4 w-full h-2 bg-purple-900/50 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-aurora-progress"></div>
                </div>
              </div>
              
              {/* Advanced Analytics */}
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 border-4 border-emerald-400/50 rounded-full bg-emerald-950/30 backdrop-blur-sm flex items-center justify-center">
                  <span className="text-3xl">📊</span>
                </div>
                <h4 className="font-bold text-white mb-3">Cosmic Analytics</h4>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Real-time monitoring and analysis of quantum field fluctuations and energy patterns
                </p>
                <div className="mt-4 w-full h-2 bg-emerald-900/50 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full animate-aurora-progress" style={{ animationDelay: '1s' }}></div>
                </div>
              </div>
              
              {/* Laboratory Access */}
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 border-4 border-pink-400/50 rounded-full bg-pink-950/30 backdrop-blur-sm flex items-center justify-center">
                  <span className="text-3xl">🔬</span>
                </div>
                <h4 className="font-bold text-white mb-3">Quantum Laboratory</h4>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Access to advanced quantum research facilities and aurora field experimentation
                </p>
                <div className="mt-4 w-full h-2 bg-pink-900/50 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-pink-400 to-purple-400 rounded-full animate-aurora-progress" style={{ animationDelay: '2s' }}></div>
                </div>
              </div>
            </div>
            
            {/* Enterprise Contact */}
            <div className="mt-12 text-center">
              <div className="inline-flex items-center gap-4 px-8 py-4 border border-cyan-400/30 bg-cyan-950/20 backdrop-blur-sm rounded-full">
                <span className="text-cyan-300">Need custom quantum solutions?</span>
                <button className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-full font-semibold hover:scale-105 transition-all duration-300">
                  Contact Energy Team
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Energy Action Buttons */}
        <div className="mt-16 text-center">
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-emerald-600 to-cyan-600 text-white rounded-full font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
              <span className="relative z-10 flex items-center gap-3">
                <span>✦ CHOOSE PACKAGE</span>
                <div className="w-5 h-5 border-2 border-white/50 rounded-full animate-spin"></div>
              </span>
            </button>
            
            <button className="group relative px-8 py-4 border-2 border-emerald-400/50 text-emerald-300 rounded-full font-semibold text-lg hover:bg-emerald-400/10 transition-all duration-300">
              <span className="flex items-center gap-3">
                <span>🌌 COMPARE PLANS</span>
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}