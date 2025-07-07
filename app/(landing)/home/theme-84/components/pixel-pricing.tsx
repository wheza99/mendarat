import React from 'react';

export default function PixelPricing() {
  const plans = [
    {
      name: "STARTER",
      price: "$9.99",
      period: "/month",
      description: "Perfect for casual gamers",
      features: [
        "5 Games",
        "Basic Leaderboards",
        "Email Support",
        "Standard Graphics"
      ],
      color: "green",
      popular: false
    },
    {
      name: "PRO GAMER",
      price: "$19.99",
      period: "/month",
      description: "For serious retro gamers",
      features: [
        "Unlimited Games",
        "Global Leaderboards",
        "Priority Support",
        "HD Graphics",
        "Custom Skins"
      ],
      color: "blue",
      popular: true
    },
    {
      name: "LEGEND",
      price: "$39.99",
      period: "/month",
      description: "Ultimate retro gaming experience",
      features: [
        "All Games + DLC",
        "Exclusive Content",
        "24/7 Support",
        "4K Graphics",
        "Custom Themes",
        "Early Access"
      ],
      color: "purple",
      popular: false
    }
  ];

  return (
    <section className="py-20 px-4 relative">
      {/* Section Header */}
      <div className="text-center mb-16">
        <div className="inline-block px-4 py-2 border-4 border-green-400 rounded-sm bg-black/50 backdrop-blur-sm mb-6">
          <span className="text-green-400 font-mono text-sm tracking-wider">PRICING</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-mono">
          <span className="text-green-400">PIXEL</span>
          <span className="text-blue-400"> PLANS</span>
        </h2>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
          Choose your retro gaming adventure
        </p>
      </div>

      {/* Pricing Grid */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative group p-8 border-4 border-gray-800 rounded-sm bg-black/30 backdrop-blur-sm transition-all duration-300 ${
                plan.popular ? 'border-blue-400 scale-105' : 'hover:border-green-400'
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-2 bg-blue-400 text-black font-bold text-sm rounded-sm font-mono">
                  MOST POPULAR
                </div>
              )}

              {/* Retro Corner Elements */}
              <div className="absolute top-0 left-0 w-4 h-4 border-l-4 border-t-4 border-green-400"></div>
              <div className="absolute top-0 right-0 w-4 h-4 border-r-4 border-t-4 border-blue-400"></div>
              <div className="absolute bottom-0 left-0 w-4 h-4 border-l-4 border-b-4 border-purple-400"></div>
              <div className="absolute bottom-0 right-0 w-4 h-4 border-r-4 border-b-4 border-green-400"></div>

              {/* Plan Header */}
              <div className="text-center mb-8">
                <h3 className={`text-2xl font-bold text-${plan.color}-400 mb-4 font-mono`}>
                  {plan.name}
                </h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-white font-mono">{plan.price}</span>
                  <span className="text-gray-400 font-mono">{plan.period}</span>
                </div>
                <p className="text-gray-300 text-sm">
                  {plan.description}
                </p>
              </div>

              {/* Features List */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-300">
                    <span className={`w-2 h-2 bg-${plan.color}-400 rounded-sm mr-3`}></span>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button className={`w-full px-6 py-3 border-4 border-${plan.color}-400 text-${plan.color}-400 font-bold rounded-sm hover:bg-${plan.color}-400 hover:text-black transition-all duration-300 font-mono`}>
                {plan.popular ? 'START GAME' : 'CHOOSE PLAN'}
              </button>

              {/* Hover Effect */}
              <div className="absolute inset-0 border-4 border-green-400 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Retro Decorative Elements */}
      <div className="absolute top-20 left-10 w-8 h-8 border-4 border-green-400 rounded-sm animate-retro-pulse"></div>
      <div className="absolute top-40 right-10 w-8 h-8 border-4 border-blue-400 rounded-sm animate-retro-pulse" style={{ animationDelay: '0.5s' }}></div>
      <div className="absolute bottom-20 left-20 w-8 h-8 border-4 border-purple-400 rounded-sm animate-retro-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-40 right-20 w-8 h-8 border-4 border-green-400 rounded-sm animate-retro-pulse" style={{ animationDelay: '1.5s' }}></div>
    </section>
  );
} 