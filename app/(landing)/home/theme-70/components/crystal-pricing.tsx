import React from 'react';

export default function CrystalPricing() {
  const plans = [
    {
      name: 'Crystal Starter',
      price: '$29',
      period: '/month',
      description: 'Perfect for small projects and experiments with glassmorphism.',
      features: [
        'Basic Glassmorphism Components',
        '5 Holographic Effects',
        'Standard Animations',
        'Email Support',
        'Community Access'
      ],
      gradient: 'from-cyan-400 to-blue-500',
      popular: false
    },
    {
      name: 'Quantum Pro',
      price: '$99',
      period: '/month',
      description: 'Advanced features for professional developers and agencies.',
      features: [
        'All Crystal Starter Features',
        'Advanced Holographic Effects',
        'Custom Animations',
        'Priority Support',
        'API Access',
        'White-label Solutions',
        'Advanced Analytics'
      ],
      gradient: 'from-purple-400 to-pink-500',
      popular: true
    },
    {
      name: 'Prismatic Enterprise',
      price: '$299',
      period: '/month',
      description: 'Enterprise-grade solutions with unlimited possibilities.',
      features: [
        'All Quantum Pro Features',
        'Unlimited Holographic Effects',
        'Custom Development',
        '24/7 Support',
        'Dedicated Account Manager',
        'Custom Integrations',
        'Advanced Security',
        'SLA Guarantee'
      ],
      gradient: 'from-yellow-400 to-orange-500',
      popular: false
    }
  ];

  return (
    <section className="relative py-20 px-4">
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Crystal Grid */}
        <div className="absolute inset-0 opacity-15">
          {Array.from({ length: 15 }, (_, i) => (
            <div
              key={i}
              className="absolute h-px bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent animate-glassmorphism-scan"
              style={{
                top: `${10 + i * 6}%`,
                left: `-10%`,
                right: `-10%`,
                animationDelay: `${i * 0.2}s`
              }}
            />
          ))}
        </div>

        {/* Floating Crystal Orbs */}
        {Array.from({ length: 8 }, (_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-glassmorphism-float"
            style={{
              left: `${15 + (i % 4) * 20}%`,
              top: `${20 + Math.floor(i / 4) * 30}%`,
              width: `${30 + Math.random() * 50}px`,
              height: `${30 + Math.random() * 50}px`,
              background: `radial-gradient(circle, ${['#00ffff', '#ff00ff', '#ffff00', '#00ff00'][Math.floor(Math.random() * 4)]}/15, transparent)`,
              boxShadow: `0 0 25px ${['#00ffff', '#ff00ff', '#ffff00', '#00ff00'][Math.floor(Math.random() * 4)]}/25`,
              animationDelay: `${i * 0.4}s`,
              animationDuration: `${5 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 backdrop-blur-md bg-gradient-to-r from-cyan-400/20 to-purple-400/20 border border-white/20 rounded-full text-sm font-medium text-white/90 mb-6">
            <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full mr-2 animate-glassmorphism-pulse"></div>
            CRYSTAL PRICING
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Choose
            </span>
            <br />
            <span className="text-white">Your Plan</span>
          </h2>
          
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Select the perfect plan that matches your needs and unlock the power of glassmorphism technology.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative backdrop-blur-xl bg-white/5 border border-white/20 rounded-3xl p-8 transition-all duration-500 hover:scale-105 hover:shadow-2xl ${
                plan.popular ? 'ring-2 ring-purple-400/50' : ''
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="px-4 py-2 backdrop-blur-md bg-gradient-to-r from-purple-400/20 to-pink-400/20 border border-purple-400/30 rounded-full text-sm font-medium text-white">
                    MOST POPULAR
                  </div>
                </div>
              )}

              {/* Crystal Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 via-purple-400/5 to-pink-400/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Plan Header */}
              <div className="relative z-10 mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {plan.name}
                </h3>
                <p className="text-white/70 mb-6">
                  {plan.description}
                </p>
                
                {/* Price */}
                <div className="mb-6">
                  <div className="flex items-baseline">
                    <span className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                      {plan.price}
                    </span>
                    <span className="text-white/60 ml-2">
                      {plan.period}
                    </span>
                  </div>
                </div>
              </div>

              {/* Features List */}
              <div className="relative z-10 mb-8">
                <ul className="space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-white/80">
                      <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Button */}
              <div className="relative z-10">
                <button className={`w-full py-4 backdrop-blur-md bg-gradient-to-r ${plan.gradient}/20 border border-white/20 rounded-xl text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                  plan.popular ? 'bg-gradient-to-r from-purple-400/30 to-pink-400/30' : ''
                }`}>
                  Get Started
                </button>
              </div>

              {/* Crystal Particles */}
              <div className="absolute inset-0 pointer-events-none">
                {Array.from({ length: 6 }, (_, i) => (
                  <div
                    key={i}
                    className="absolute w-1 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full animate-glassmorphism-particle"
                    style={{
                      left: `${20 + i * 15}%`,
                      top: `${25 + i * 12}%`,
                      animationDelay: `${i * 0.3}s`,
                      animationDuration: `${4 + Math.random() * 2}s`
                    }}
                  />
                ))}
              </div>

              {/* Hover Glow */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-400/10 via-purple-400/10 to-pink-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center px-8 py-4 backdrop-blur-md bg-gradient-to-r from-cyan-400/20 to-purple-400/20 border border-white/20 rounded-xl text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <span className="mr-2">Contact Sales</span>
            <div className="w-4 h-4 border-2 border-white/50 border-t-transparent rounded-full animate-spin"></div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 30 }, (_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full animate-glassmorphism-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${6 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>
    </section>
  );
} 