import React from 'react';

export default function CyberPricing() {
  const plans = [
    {
      name: "STARTER",
      price: "$29",
      period: "/month",
      description: "Perfect for small projects",
      features: [
        "5GB Storage",
        "10 Projects",
        "Basic Support",
        "API Access"
      ],
      color: "cyan",
      popular: false
    },
    {
      name: "PRO",
      price: "$99",
      period: "/month",
      description: "Ideal for growing businesses",
      features: [
        "50GB Storage",
        "Unlimited Projects",
        "Priority Support",
        "Advanced Analytics",
        "Custom Integrations"
      ],
      color: "pink",
      popular: true
    },
    {
      name: "ENTERPRISE",
      price: "$299",
      period: "/month",
      description: "For large-scale operations",
      features: [
        "Unlimited Storage",
        "Unlimited Projects",
        "24/7 Support",
        "Advanced Security",
        "Custom Solutions",
        "Dedicated Server"
      ],
      color: "purple",
      popular: false
    }
  ];

  return (
    <section className="py-20 px-4 relative">
      {/* Section Header */}
      <div className="text-center mb-16">
        <div className="inline-block px-4 py-2 border border-cyan-400 rounded-sm bg-black/50 backdrop-blur-sm mb-6">
          <span className="text-cyan-400 font-mono text-sm tracking-wider">PRICING</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          <span className="text-cyan-400">CYBER</span>
          <span className="text-pink-400"> PLANS</span>
        </h2>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
          Choose the perfect plan for your cyber needs
        </p>
      </div>

      {/* Pricing Grid */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative group p-8 border border-gray-800 rounded-sm bg-black/30 backdrop-blur-sm transition-all duration-300 ${
                plan.popular ? 'border-pink-400 scale-105' : 'hover:border-cyan-400'
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-2 bg-pink-400 text-black font-bold text-sm rounded-sm">
                  MOST POPULAR
                </div>
              )}

              {/* Cyber Corner Elements */}
              <div className="absolute top-0 left-0 w-4 h-4 border-l border-t border-cyan-400"></div>
              <div className="absolute top-0 right-0 w-4 h-4 border-r border-t border-pink-400"></div>
              <div className="absolute bottom-0 left-0 w-4 h-4 border-l border-b border-purple-400"></div>
              <div className="absolute bottom-0 right-0 w-4 h-4 border-r border-b border-cyan-400"></div>

              {/* Plan Header */}
              <div className="text-center mb-8">
                <h3 className={`text-2xl font-bold text-${plan.color}-400 mb-4`}>
                  {plan.name}
                </h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-gray-400">{plan.period}</span>
                </div>
                <p className="text-gray-300 text-sm">
                  {plan.description}
                </p>
              </div>

              {/* Features List */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-300">
                    <span className={`w-2 h-2 bg-${plan.color}-400 rounded-full mr-3`}></span>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button className={`w-full px-6 py-3 border border-${plan.color}-400 text-${plan.color}-400 font-bold rounded-sm hover:bg-${plan.color}-400 hover:text-black transition-all duration-300`}>
                {plan.popular ? 'GET STARTED' : 'CHOOSE PLAN'}
              </button>

              {/* Hover Effect */}
              <div className="absolute inset-0 border border-cyan-400 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Cyber Decorative Elements */}
      <div className="absolute top-20 left-10 w-8 h-8 border border-cyan-400 rounded-sm animate-cyber-pulse"></div>
      <div className="absolute top-40 right-10 w-8 h-8 border border-pink-400 rounded-sm animate-cyber-pulse" style={{ animationDelay: '0.5s' }}></div>
      <div className="absolute bottom-20 left-20 w-8 h-8 border border-purple-400 rounded-sm animate-cyber-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-40 right-20 w-8 h-8 border border-cyan-400 rounded-sm animate-cyber-pulse" style={{ animationDelay: '1.5s' }}></div>
    </section>
  );
} 