import React from 'react';

export default function LuminousPricing() {
  const pricingPlans = [
    {
      name: "Aurora Basic",
      price: "$99",
      period: "per month",
      description: "Perfect for small projects with basic aurora effects",
      features: [
        "Basic Aurora Effects",
        "Standard Glass Elements",
        "5 Color Themes",
        "Email Support"
      ],
      gradient: "from-purple-400 to-pink-400",
      icon: "✨",
      popular: false
    },
    {
      name: "Prismatic Pro",
      price: "$299",
      period: "per month",
      description: "Advanced features for professional aurora implementations",
      features: [
        "All Basic Features",
        "Advanced Aurora Animations",
        "Custom Glass Effects",
        "Unlimited Color Themes",
        "Priority Support",
        "Custom Integrations"
      ],
      gradient: "from-cyan-400 to-teal-400",
      icon: "💎",
      popular: true
    },
    {
      name: "Crystal Ultimate",
      price: "$599",
      period: "per month",
      description: "Complete aurora and glassmorphism solution",
      features: [
        "All Pro Features",
        "Custom Aurora Development",
        "White-label Solutions",
        "24/7 Premium Support",
        "Advanced Analytics",
        "Multi-platform Support"
      ],
      gradient: "from-pink-400 to-purple-400",
      icon: "🌌",
      popular: false
    }
  ];

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Luminous Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/20 to-transparent"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-gradient-conic from-purple-500/15 via-pink-500/15 to-cyan-500/15 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-gradient-conic from-cyan-500/15 via-teal-500/15 to-purple-500/15 rounded-full blur-3xl animate-pulse" style={{animationDelay: '3s'}}></div>
      </div>

      <div className="relative z-10 container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              LUMINOUS PRICING
            </span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Choose the perfect aurora plan for your ethereal journey
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`group relative bg-white/5 backdrop-blur-xl border rounded-3xl p-8 transition-all duration-500 hover:scale-105 hover:shadow-2xl ${
                plan.popular 
                  ? 'border-cyan-400/50 shadow-2xl shadow-cyan-500/20 hover:shadow-cyan-500/30' 
                  : 'border-white/20 hover:shadow-purple-500/20'
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-cyan-400 to-teal-400 text-white px-6 py-2 rounded-full text-sm font-semibold backdrop-blur-xl border border-white/30">
                    MOST POPULAR
                  </div>
                </div>
              )}

              {/* Aurora Border Effect */}
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${plan.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
              
              {/* Plan Header */}
              <div className="text-center mb-8">
                <div className="text-4xl mb-4 relative">
                  <div className={`absolute inset-0 bg-gradient-to-r ${plan.gradient} rounded-full blur-xl opacity-40 group-hover:opacity-70 transition-opacity duration-300`}></div>
                  <span className="relative z-10">{plan.icon}</span>
                </div>
                <h3 className={`text-2xl font-semibold mb-2 bg-gradient-to-r ${plan.gradient} bg-clip-text text-transparent group-hover:from-white group-hover:to-white/80 transition-all duration-300`}>
                  {plan.name}
                </h3>
                <p className="text-white/60 text-sm mb-4 group-hover:text-white/80 transition-colors duration-300">
                  {plan.description}
                </p>
                <div className="flex items-baseline justify-center">
                  <span className={`text-4xl font-bold bg-gradient-to-r ${plan.gradient} bg-clip-text text-transparent`}>
                    {plan.price}
                  </span>
                  <span className="text-white/60 ml-2 group-hover:text-white/80 transition-colors duration-300">
                    {plan.period}
                  </span>
                </div>
              </div>
              
              {/* Features List */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-white/70 group-hover:text-white/90 transition-colors duration-300">
                    <div className={`w-2 h-2 rounded-full mr-3 bg-gradient-to-r ${plan.gradient}`}></div>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button className={`w-full py-3 px-6 bg-gradient-to-r ${plan.gradient} bg-opacity-20 backdrop-blur-xl border border-white/30 text-white font-semibold rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-xl`}>
                {plan.popular ? 'Get Started Now' : 'Choose Plan'}
              </button>

              {/* Glass Reflection */}
              <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-white/10 to-transparent rounded-t-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* Aurora Accent Lines */}
        <div className="mt-16 flex justify-center space-x-8">
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-transparent rounded-full animate-pulse"></div>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-transparent rounded-full animate-pulse"></div>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-transparent rounded-full animate-pulse"></div>
        </div>
      </div>

      {/* Floating Luminous Elements */}
      <div className="absolute top-20 left-10 w-10 h-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl animate-bounce transform rotate-12"></div>
      <div className="absolute bottom-20 right-10 w-8 h-8 bg-white/15 backdrop-blur-sm border border-white/25 rounded-lg animate-bounce transform -rotate-45"></div>
      <div className="absolute top-1/2 right-5 w-6 h-6 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full animate-bounce"></div>
    </section>
  );
} 