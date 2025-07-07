import React from 'react';

export default function OrbitPricing() {
  const plans = [
    {
      name: "Asteroid",
      orbit: "Inner",
      price: "0",
      period: "Forever",
      description: "Perfect for exploring the cosmic basics",
      features: [
        "1 Stellar Project",
        "Basic Cosmic Tools",
        "Community Support",
        "5GB Void Storage",
        "Standard Velocity"
      ],
      popular: false,
      cta: "Begin Journey"
    },
    {
      name: "Planet",
      orbit: "Habitable",
      price: "29",
      period: "per month",
      description: "Ideal for growing cosmic enterprises",
      features: [
        "10 Stellar Projects",
        "Advanced Cosmic Tools",
        "Priority Support",
        "100GB Void Storage",
        "Light Speed Processing",
        "Nebula Analytics"
      ],
      popular: true,
      cta: "Enter Orbit"
    },
    {
      name: "Galaxy",
      orbit: "Infinite",
      price: "99",
      period: "per month",
      description: "For those who need the entire universe",
      features: [
        "Unlimited Projects",
        "Quantum Cosmic Tools",
        "Dedicated Support",
        "Infinite Storage",
        "Warp Speed Processing",
        "Full Nebula Suite",
        "Custom Constellations",
        "Multiverse Access"
      ],
      popular: false,
      cta: "Command Galaxy"
    }
  ];

  return (
    <section className="relative py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-thin text-white mb-6">
            ORBIT
            <span className="block bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              PRICING
            </span>
          </h2>
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-white to-transparent mx-auto mb-8"></div>
          <p className="text-xl text-slate-300 font-light max-w-2xl mx-auto">
            Choose your cosmic trajectory and begin your journey through the universe.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative group ${
                plan.popular
                  ? 'lg:scale-105 lg:-translate-y-4'
                  : ''
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                  <div className="px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white text-sm uppercase tracking-widest">
                    Most Popular
                  </div>
                </div>
              )}

              {/* Plan Card */}
              <div className={`relative p-8 bg-white/5 border backdrop-blur-sm transition-all duration-700 ${
                plan.popular
                  ? 'border-purple-500/30 bg-white/10'
                  : 'border-white/10 hover:border-white/20 hover:bg-white/10'
              }`}>
                
                {/* Background Glow */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ${
                  plan.popular
                    ? 'bg-gradient-to-br from-purple-500/10 to-blue-500/10'
                    : 'bg-gradient-to-br from-blue-500/5 to-purple-500/5'
                }`}></div>

                {/* Orbital Decoration */}
                <div className="absolute top-4 right-4 w-8 h-8 border border-white/20 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-white/60 rounded-full animate-cosmic-pulse"></div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Plan Header */}
                  <div className="mb-8">
                    <h3 className="text-2xl font-light text-white mb-2">
                      {plan.name}
                    </h3>
                    <div className="text-sm text-slate-400 uppercase tracking-widest mb-4">
                      {plan.orbit} Orbit
                    </div>
                    <p className="text-slate-300 font-light">
                      {plan.description}
                    </p>
                  </div>

                  {/* Pricing */}
                  <div className="mb-8">
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className="text-4xl font-light text-white">
                        ${plan.price}
                      </span>
                      <span className="text-slate-400 text-sm">
                        {plan.period}
                      </span>
                    </div>
                    <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                  </div>

                  {/* Features */}
                  <div className="mb-8">
                    <ul className="space-y-4">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-3">
                          <div className="w-1 h-1 bg-blue-400 rounded-full"></div>
                          <span className="text-slate-300 font-light">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Button */}
                  <button className={`group/btn relative w-full py-4 transition-all duration-500 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:from-purple-600 hover:to-blue-600'
                      : 'bg-transparent border border-white/20 text-white hover:border-white/40'
                  }`}>
                    <span className="relative z-10 text-sm uppercase tracking-widest">
                      {plan.cta}
                    </span>
                    {!plan.popular && (
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500"></div>
                    )}
                  </button>
                </div>

                {/* Orbital Lines */}
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-4 p-6 bg-white/5 border border-white/10 backdrop-blur-sm">
            <div className="w-6 h-6 border border-white/20 rounded-full flex items-center justify-center">
              <div className="w-1 h-1 bg-white rounded-full"></div>
            </div>
            <div className="text-left">
              <div className="text-white font-light">
                All plans include 30-day cosmic guarantee
              </div>
              <div className="text-sm text-slate-400">
                No questions asked, money back if you're not satisfied
              </div>
            </div>
          </div>
        </div>

        {/* Enterprise CTA */}
        <div className="text-center mt-12">
          <p className="text-slate-300 font-light mb-4">
            Need a custom universe? Enterprise solutions available.
          </p>
          <button className="group relative px-8 py-3 bg-transparent border border-white/20 text-white hover:border-white/40 transition-all duration-500">
            <span className="relative z-10 text-sm uppercase tracking-widest">
              Contact Mission Control
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </button>
        </div>
      </div>
    </section>
  );
} 