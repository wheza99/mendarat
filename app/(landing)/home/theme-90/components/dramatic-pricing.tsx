import React from 'react';

export default function DramaticPricing() {
  const pricingPlans = [
    {
      name: "Film Noir Basic",
      price: "$99",
      period: "per month",
      description: "Perfect for indie filmmakers and noir enthusiasts",
      features: [
        "Basic Cinematic Templates",
        "Neon Lighting Effects",
        "Film Grain Overlays",
        "Email Support"
      ],
      color: "red",
      popular: false
    },
    {
      name: "Neon Professional",
      price: "$299",
      period: "per month",
      description: "Advanced features for professional productions",
      features: [
        "All Basic Features",
        "Custom Neon Designs",
        "Advanced Lighting Control",
        "Priority Support",
        "Custom Color Grading"
      ],
      color: "blue",
      popular: true
    },
    {
      name: "Cinematic Master",
      price: "$599",
      period: "per month",
      description: "Complete film noir production suite",
      features: [
        "All Professional Features",
        "Full Production Pipeline",
        "Custom Sound Design",
        "24/7 Support",
        "Exclusive Templates"
      ],
      color: "purple",
      popular: false
    }
  ];

  return (
    <section className="relative py-20 bg-black overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-500/5 blur-3xl animate-noir-pulse"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-cyan-500/5 blur-3xl animate-noir-pulse" style={{animationDelay: '3s'}}></div>
      </div>

      {/* Film Grain */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full bg-[radial-gradient(circle_at_50%_50%,#ffffff_0%,transparent_50%)] bg-[length:2px_2px] animate-noir-grain"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            <span className="bg-gradient-to-r from-red-500 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              DRAMATIC PRICING
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Choose the perfect plan for your cinematic journey
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`group relative bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border rounded-xl p-8 transition-all duration-500 hover:scale-105 ${
                plan.popular 
                  ? 'border-blue-500/50 shadow-2xl shadow-blue-500/20' 
                  : 'border-gray-800 hover:border-gray-700'
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                    MOST POPULAR
                  </div>
                </div>
              )}

              {/* Neon Border Effect */}
              <div className={`absolute inset-0 rounded-xl bg-gradient-to-r from-${plan.color}-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
              
              {/* Plan Header */}
              <div className="text-center mb-8">
                <h3 className={`text-2xl font-semibold mb-2 text-${plan.color}-400 group-hover:text-${plan.color}-300 transition-colors duration-300`}>
                  {plan.name}
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  {plan.description}
                </p>
                <div className="flex items-baseline justify-center">
                  <span className={`text-4xl font-bold text-${plan.color}-400`}>
                    {plan.price}
                  </span>
                  <span className="text-gray-400 ml-2">
                    {plan.period}
                  </span>
                </div>
              </div>
              
              {/* Features List */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-300">
                    <div className={`w-2 h-2 bg-${plan.color}-400 rounded-full mr-3`}></div>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button className={`w-full py-3 px-6 bg-gradient-to-r from-${plan.color}-500 to-${plan.color}-600 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-${plan.color}-500/50`}>
                {plan.popular ? 'Get Started Now' : 'Choose Plan'}
              </button>

              {/* Hover Glow Effect */}
              <div className={`absolute inset-0 rounded-xl bg-gradient-to-r from-${plan.color}-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
            </div>
          ))}
        </div>

        {/* Cinematic Accent Lines */}
        <div className="mt-16 flex justify-center space-x-8">
          <div className="w-20 h-1 bg-gradient-to-r from-red-500 to-transparent rounded-full animate-noir-pulse"></div>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-transparent rounded-full animate-noir-pulse" style={{animationDelay: '0.5s'}}></div>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-transparent rounded-full animate-noir-pulse" style={{animationDelay: '1s'}}></div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-8 h-8 border border-red-500/30 rounded-full animate-noir-float"></div>
      <div className="absolute bottom-20 right-10 w-6 h-6 border border-blue-500/30 rounded-full animate-noir-float" style={{animationDelay: '4s'}}></div>
      <div className="absolute top-1/2 right-5 w-4 h-4 border border-purple-500/30 rounded-full animate-noir-float" style={{animationDelay: '8s'}}></div>
    </section>
  );
} 