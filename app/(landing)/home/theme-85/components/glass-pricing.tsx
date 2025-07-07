import React from 'react';

export default function GlassPricing() {
  const plans = [
    {
      name: "Holographic Basic",
      price: "$99",
      period: "/month",
      description: "Perfect for getting started with holographic technology",
      features: [
        "3D Holographic Display",
        "Basic Gesture Control",
        "Voice Recognition",
        "24/7 Support"
      ],
      color: "indigo"
    },
    {
      name: "Quantum Pro",
      price: "$299",
      period: "/month",
      description: "Advanced quantum computing with holographic interface",
      features: [
        "Quantum Processing",
        "Advanced AI Integration",
        "Neural Network Access",
        "Priority Support",
        "Custom Holographic Themes"
      ],
      color: "purple",
      popular: true
    },
    {
      name: "Neural Enterprise",
      price: "$599",
      period: "/month",
      description: "Complete neural interface with quantum capabilities",
      features: [
        "Brain-Computer Interface",
        "Quantum Security",
        "Unlimited Processing",
        "Dedicated Support",
        "Custom Development",
        "API Access"
      ],
      color: "pink"
    }
  ];

  return (
    <section className="py-20 px-4 relative">
      {/* Section Header */}
      <div className="text-center mb-16">
        <div className="inline-block px-4 py-2 border border-indigo-400/50 rounded-2xl bg-indigo-800/20 backdrop-blur-sm mb-6">
          <span className="text-indigo-300 font-mono text-sm tracking-wider">PRICING</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-mono">
          <span className="text-indigo-400">GLASS</span>
          <span className="text-purple-400"> PRICING</span>
        </h2>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
          Choose the perfect holographic plan for your needs
        </p>
      </div>

      {/* Pricing Grid */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative group p-8 border border-${plan.color}-400/30 rounded-2xl bg-${plan.color}-800/20 backdrop-blur-sm hover:border-${plan.color}-400/50 transition-all duration-300 ${
                plan.popular ? 'ring-2 ring-purple-400/50' : ''
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-2 bg-purple-400/20 border border-purple-400/50 rounded-2xl backdrop-blur-sm">
                  <span className="text-purple-300 font-mono text-sm tracking-wider">MOST POPULAR</span>
                </div>
              )}

              {/* Glass Corner Elements */}
              <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-indigo-400/50 rounded-tl-2xl"></div>
              <div className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 border-purple-400/50 rounded-tr-2xl"></div>
              <div className="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 border-pink-400/50 rounded-bl-2xl"></div>
              <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-indigo-400/50 rounded-br-2xl"></div>

              {/* Plan Content */}
              <div className="text-center mb-8">
                <h3 className={`text-2xl font-bold text-${plan.color}-400 mb-4 font-mono`}>
                  {plan.name}
                </h3>
                <div className="mb-4">
                  <span className={`text-4xl font-bold text-${plan.color}-400`}>
                    {plan.price}
                  </span>
                  <span className="text-gray-400 text-lg">
                    {plan.period}
                  </span>
                </div>
                <p className="text-gray-300">
                  {plan.description}
                </p>
              </div>

              {/* Features List */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-300">
                    <span className={`w-2 h-2 bg-${plan.color}-400 rounded-full mr-3`}></span>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button className={`w-full px-6 py-3 border border-${plan.color}-400/50 text-${plan.color}-400 font-bold rounded-2xl hover:bg-${plan.color}-400/20 hover:text-white transition-all duration-300 font-mono backdrop-blur-sm`}>
                GET STARTED
              </button>

              {/* Hover Effect */}
              <div className={`absolute inset-0 border border-${plan.color}-400/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none backdrop-blur-sm`}></div>
            </div>
          ))}
        </div>
      </div>

      {/* Holographic Decorative Elements */}
      <div className="absolute top-20 left-10 w-8 h-8 border-2 border-indigo-400/50 rounded-full animate-holographic-pulse backdrop-blur-sm"></div>
      <div className="absolute top-40 right-10 w-8 h-8 border-2 border-purple-400/50 rounded-full animate-holographic-pulse backdrop-blur-sm" style={{ animationDelay: '0.5s' }}></div>
      <div className="absolute bottom-20 left-20 w-8 h-8 border-2 border-pink-400/50 rounded-full animate-holographic-pulse backdrop-blur-sm" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-40 right-20 w-8 h-8 border-2 border-indigo-400/50 rounded-full animate-holographic-pulse backdrop-blur-sm" style={{ animationDelay: '1.5s' }}></div>
    </section>
  );
} 