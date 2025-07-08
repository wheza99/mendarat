import React from 'react';

export default function QuantumPricing() {
  const pricingPlans = [
    {
      name: "Quantum Basic",
      price: "99",
      period: "/month",
      description: "Entry-level quantum computing access",
      features: [
        "128 Qubit Access",
        "Basic Holographic Interface",
        "Standard Quantum Algorithms",
        "Community Support",
        "1TB Quantum Storage"
      ],
      color: "emerald",
      popular: false
    },
    {
      name: "Quantum Pro",
      price: "299",
      period: "/month",
      description: "Advanced quantum computing capabilities",
      features: [
        "512 Qubit Access",
        "Advanced Holographic Display",
        "Custom Quantum Algorithms",
        "Priority Support",
        "10TB Quantum Storage",
        "Entanglement Network Access"
      ],
      color: "cyan",
      popular: true
    },
    {
      name: "Quantum Enterprise",
      price: "999",
      period: "/month",
      description: "Ultimate quantum supremacy platform",
      features: [
        "2048 Qubit Access",
        "Full Holographic Immersion",
        "Quantum Machine Learning",
        "24/7 Dedicated Support",
        "Unlimited Quantum Storage",
        "Dimensional Portal Access",
        "Custom Quantum Hardware"
      ],
      color: "lime",
      popular: false
    }
  ];

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Quantum Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-yellow-950/20 to-transparent"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-gradient-conic from-yellow-500/10 via-emerald-500/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-gradient-conic from-cyan-500/10 via-lime-500/10 to-yellow-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>

      {/* Holographic Pricing Grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full bg-[linear-gradient(90deg,transparent_24px,rgba(234,179,8,0.3)_25px,rgba(234,179,8,0.3)_26px,transparent_27px,transparent_74px,rgba(132,204,22,0.3)_75px,rgba(132,204,22,0.3)_76px,transparent_77px),linear-gradient(transparent_24px,rgba(234,179,8,0.3)_25px,rgba(234,179,8,0.3)_26px,transparent_27px,transparent_74px,rgba(132,204,22,0.3)_75px,rgba(132,204,22,0.3)_76px,transparent_77px)] bg-[length:140px_140px] animate-pulse"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white font-mono">
            <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-lime-400 bg-clip-text text-transparent">
              [QUANTUM PRICING]
            </span>
          </h2>
          <p className="text-xl text-emerald-300/70 max-w-3xl mx-auto font-light">
            Choose your quantum computing power level and unlock the multiverse
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`group relative bg-gradient-to-br from-emerald-950/30 to-cyan-950/30 border rounded-lg p-8 transition-all duration-500 hover:scale-105 hover:shadow-2xl ${
                plan.popular 
                  ? 'border-cyan-400/60 hover:border-cyan-400 hover:shadow-cyan-500/30 scale-105' 
                  : 'border-emerald-400/30 hover:border-emerald-400/50 hover:shadow-emerald-500/20'
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-cyan-500 to-lime-500 text-black px-6 py-2 rounded-full text-sm font-bold font-mono">
                    [MOST POPULAR]
                  </div>
                </div>
              )}

              {/* Holographic Border Effect */}
              <div className={`absolute inset-0 rounded-lg bg-gradient-to-r opacity-0 group-hover:opacity-25 transition-opacity duration-300 ${
                plan.color === 'emerald' ? 'from-emerald-500/30 to-transparent' :
                plan.color === 'cyan' ? 'from-cyan-500/30 to-transparent' :
                'from-lime-500/30 to-transparent'
              }`}></div>
              
              {/* Plan Header */}
              <div className="text-center mb-8">
                <h3 className={`text-2xl font-semibold mb-2 font-mono transition-colors duration-300 ${
                  plan.color === 'emerald' ? 'text-emerald-400 group-hover:text-emerald-300' :
                  plan.color === 'cyan' ? 'text-cyan-400 group-hover:text-cyan-300' :
                  'text-lime-400 group-hover:text-lime-300'
                }`}>
                  {plan.name}
                </h3>
                <p className="text-emerald-300/70 text-sm mb-6 group-hover:text-emerald-300/90 transition-colors duration-300">
                  {plan.description}
                </p>
                
                {/* Price */}
                <div className="mb-6">
                  <span className={`text-5xl font-bold font-mono ${
                    plan.color === 'emerald' ? 'text-emerald-400' :
                    plan.color === 'cyan' ? 'text-cyan-400' :
                    'text-lime-400'
                  }`}>
                    ${plan.price}
                  </span>
                  <span className="text-emerald-300/70 text-lg font-mono">{plan.period}</span>
                </div>
              </div>

              {/* Features */}
              <div className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-3">
                    <div className={`w-2 h-2 rounded-full animate-pulse ${
                      plan.color === 'emerald' ? 'bg-emerald-400' :
                      plan.color === 'cyan' ? 'bg-cyan-400' :
                      'bg-lime-400'
                    }`}></div>
                    <span className="text-emerald-300/80 text-sm font-mono group-hover:text-emerald-300 transition-colors duration-300">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <button className={`w-full relative px-6 py-4 border-2 font-semibold font-mono rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 ${
                plan.color === 'emerald' ? 'border-emerald-400/50 text-emerald-300 hover:border-emerald-400 hover:shadow-emerald-500/30' :
                plan.color === 'cyan' ? 'border-cyan-400/50 text-cyan-300 hover:border-cyan-400 hover:shadow-cyan-500/30' :
                'border-lime-400/50 text-lime-300 hover:border-lime-400 hover:shadow-lime-500/30'
              } hover:shadow-xl`}>
                <span className="relative z-10">
                  {plan.popular ? '[ACTIVATE QUANTUM]' : '[SELECT PLAN]'}
                </span>
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                  plan.color === 'emerald' ? 'bg-emerald-500/20' :
                  plan.color === 'cyan' ? 'bg-cyan-500/20' :
                  'bg-lime-500/20'
                }`}></div>
              </button>

              {/* Quantum Processing Indicators */}
              <div className="absolute top-4 right-4 flex space-x-1">
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
                <div className="w-2 h-2 bg-lime-400 rounded-full animate-pulse" style={{animationDelay: '0.8s'}}></div>
              </div>

              {/* Holographic Scanlines */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-15 transition-opacity duration-300 rounded-lg overflow-hidden">
                {Array.from({ length: 5 }, (_, i) => (
                  <div
                    key={i}
                    className="absolute w-full h-px bg-gradient-to-r from-transparent via-emerald-400 to-transparent animate-pulse"
                    style={{
                      top: `${15 + i * 17}%`,
                      animationDelay: `${i * 0.3}s`
                    }}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Quantum Guarantee */}
        <div className="mt-16 text-center">
          <div className="max-w-2xl mx-auto bg-gradient-to-br from-emerald-950/30 to-cyan-950/30 border border-emerald-400/20 rounded-lg p-8">
            <h3 className="text-2xl font-semibold mb-4 text-emerald-400 font-mono">
              [QUANTUM GUARANTEE]
            </h3>
            <p className="text-emerald-300/70 leading-relaxed mb-6">
              30-day money-back guarantee. If our quantum computing doesn't revolutionize your reality, 
              we'll refund your payment across all dimensions.
            </p>
            <div className="flex justify-center space-x-6">
              <div className="text-center">
                <div className="text-lg font-bold text-cyan-400 font-mono">99.9%</div>
                <div className="text-emerald-300/70 text-xs font-mono">UPTIME</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-lime-400 font-mono">∞</div>
                <div className="text-emerald-300/70 text-xs font-mono">POSSIBILITIES</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-yellow-400 font-mono">24/7</div>
                <div className="text-emerald-300/70 text-xs font-mono">SUPPORT</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Quantum Crystals */}
      <div className="absolute top-20 left-10 w-3 h-3 border border-emerald-400/50 rounded-sm transform rotate-45 animate-bounce bg-emerald-400/20"></div>
      <div className="absolute bottom-20 right-10 w-4 h-4 border border-cyan-400/50 rounded-sm transform -rotate-45 animate-bounce bg-cyan-400/20"></div>
      <div className="absolute top-1/2 left-5 w-2 h-2 border border-lime-400/50 rounded-sm transform rotate-90 animate-bounce bg-lime-400/20"></div>
      <div className="absolute bottom-1/3 right-5 w-3 h-3 border border-yellow-400/50 rounded-sm transform -rotate-60 animate-bounce bg-yellow-400/20"></div>
    </section>
  );
} 