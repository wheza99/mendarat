import React from 'react';

export default function CyberPricing() {
  const plans = [
    {
      name: "Starter",
      price: "$99",
      description: "Perfect for small teams getting started",
      features: ["Basic security", "5GB storage", "Email support", "Basic analytics"],
      color: "pink"
    },
    {
      name: "Professional",
      price: "$299",
      description: "Advanced features for growing businesses",
      features: ["Advanced security", "50GB storage", "Priority support", "Advanced analytics", "API access"],
      color: "purple",
      popular: true
    },
    {
      name: "Enterprise",
      price: "$999",
      description: "Full-scale solution for large organizations",
      features: ["Enterprise security", "Unlimited storage", "24/7 support", "Custom analytics", "Dedicated server", "Custom integrations"],
      color: "cyan"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      pink: "text-pink-500 border-pink-500 shadow-pink-500/50",
      purple: "text-purple-500 border-purple-500 shadow-purple-500/50",
      cyan: "text-cyan-400 border-cyan-400 shadow-cyan-400/50"
    };
    return colors[color as keyof typeof colors] || colors.pink;
  };

  return (
    <section className="py-20 relative">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-conic from-pink-500/5 via-purple-500/5 to-cyan-400/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            <span className="text-pink-500 drop-shadow-[0_0_20px_rgba(236,72,153,0.8)]">CYBER</span>
            <span className="text-purple-500 drop-shadow-[0_0_20px_rgba(168,85,247,0.8)]"> PRICING</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Choose the perfect plan for your cyberpunk journey
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`group relative p-8 border-2 ${getColorClasses(plan.color)} rounded-lg bg-black/50 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(0,0,0,0.9)] ${plan.popular ? 'ring-2 ring-purple-500 ring-opacity-50' : ''}`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-bold">
                    MOST POPULAR
                  </span>
                </div>
              )}

              {/* Glitch Effect */}
              <div className={`absolute inset-0 border-2 ${getColorClasses(plan.color)} rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse`}></div>
              
              {/* Content */}
              <div className="relative z-10">
                <h3 className={`text-3xl font-bold mb-2 ${getColorClasses(plan.color).split(' ')[0]}`}>
                  {plan.name}
                </h3>
                <p className="text-gray-300 mb-6">
                  {plan.description}
                </p>
                
                {/* Price */}
                <div className="mb-6">
                  <span className="text-5xl font-bold text-white">{plan.price}</span>
                  <span className="text-gray-400">/month</span>
                </div>
                
                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <span className={`w-2 h-2 rounded-full mr-3 ${getColorClasses(plan.color).split(' ')[0].replace('text-', 'bg-')}`}></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                {/* CTA Button */}
                <button className={`w-full py-3 px-6 border-2 ${getColorClasses(plan.color)} text-white font-bold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(0,0,0,0.8)]`}>
                  Choose Plan
                </button>
              </div>

              {/* Neon Glow Effect */}
              <div className={`absolute inset-0 rounded-lg bg-gradient-to-r from-transparent via-${plan.color}-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center mt-16">
          <p className="text-gray-400 mb-4">
            All plans include 30-day money-back guarantee
          </p>
          <button className="group relative px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-bold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(6,182,212,0.6)] hover:bg-cyan-400 hover:text-black">
            <span className="relative z-10">Contact Sales</span>
            <div className="absolute inset-0 bg-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>

        {/* Floating Neon Elements */}
        <div className="absolute top-20 left-10 w-4 h-4 bg-pink-500 rounded-full animate-pulse shadow-lg shadow-pink-500/50"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-purple-500 rounded-full animate-pulse shadow-lg shadow-purple-500/50" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-40 left-20 w-5 h-5 bg-cyan-400 rounded-full animate-pulse shadow-lg shadow-cyan-400/50" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 right-10 w-2 h-2 bg-yellow-400 rounded-full animate-pulse shadow-lg shadow-yellow-400/50" style={{animationDelay: '0.5s'}}></div>
      </div>
    </section>
  );
} 