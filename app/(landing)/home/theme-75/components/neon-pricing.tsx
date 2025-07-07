import React from 'react';

export default function NeonPricing() {
  const plans = [
    {
      name: "Neon Starter",
      price: "$99",
      period: "/month",
      description: "Perfect for small neon projects and basic Art Deco design needs.",
      features: [
        "Basic Neon Gradients",
        "Art Deco Elements (10 pieces)",
        "Geometric Patterns (50ft)",
        "Neon Design Consultation",
        "Email Support"
      ],
      color: "purple",
      popular: false
    },
    {
      name: "Art Deco Pro",
      price: "$299",
      period: "/month",
      description: "Advanced neon gradient solutions for Art Deco applications and large-scale projects.",
      features: [
        "Advanced Neon Gradients",
        "Art Deco Collection (50 pieces)",
        "Geometric Pattern Network (200ft)",
        "Art Deco Design + Modern Integration",
        "Neon Animation System",
        "Gradient Control Systems",
        "Priority Support",
        "24/7 Neon Monitoring"
      ],
      color: "pink",
      popular: true
    },
    {
      name: "Neon Enterprise",
      price: "$599",
      period: "/month",
      description: "Complete neon gradient enterprise solutions with custom Art Deco automation.",
      features: [
        "Custom Neon Gradient Design",
        "Unlimited Art Deco Elements",
        "Complete Geometric Pattern Network",
        "Full Art Deco Aesthetic Integration",
        "Advanced Neon Animation",
        "Custom Gradient Control Systems",
        "Dedicated Neon Designer",
        "Real-time Monitoring Dashboard",
        "Custom Neon-Powered Effects"
      ],
      color: "cyan",
      popular: false
    }
  ];

  return (
    <section className="relative py-24 bg-gradient-to-br from-purple-900 via-pink-900 to-cyan-900 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-pink-900 to-cyan-900"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_0%,#ec4899_50%,transparent_100%)] bg-[length:200px_200px] animate-art-deco-flow"></div>
        </div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 mb-6 bg-gradient-to-br from-purple-800/80 to-pink-800/80 backdrop-blur-xl border border-purple-400 rounded-lg">
            <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mr-2 animate-neon-pulse"></div>
            <span className="text-sm font-bold text-purple-400 tracking-wider">
              NEON PRICING
            </span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            <span className="block">Neon-Powered</span>
            <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              Plans
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Choose the perfect neon-powered plan for your Art Deco needs. 
            Each plan includes geometric precision with modern neon innovation.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`group relative bg-gradient-to-br from-purple-800/60 to-pink-800/60 backdrop-blur-xl border-2 ${plan.popular ? 'border-pink-400' : 'border-gray-600'} rounded-xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105 animate-art-deco-float`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-pink-400 to-cyan-400 text-white px-6 py-2 rounded-lg text-sm font-bold shadow-lg">
                    MOST POPULAR
                  </div>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors duration-300">
                  {plan.name}
                </h3>
                
                <div className="mb-4">
                  <span className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                    {plan.price}
                  </span>
                  <span className="text-gray-400 text-lg">
                    {plan.period}
                  </span>
                </div>
                
                <p className="text-gray-300 text-sm leading-relaxed">
                  {plan.description}
                </p>
              </div>

              {/* Features List */}
              <div className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start">
                    <div className={`w-2 h-2 bg-gradient-to-r from-${plan.color}-400 to-${plan.color}-600 rounded-full mr-3 mt-2 animate-neon-pulse flex-shrink-0`}></div>
                    <span className="text-sm text-gray-300 font-light">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <button className={`group/btn relative w-full px-6 py-4 bg-gradient-to-r from-${plan.color}-400 to-${plan.color}-600 text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-${plan.color}-400`}>
                <span className="relative z-10">
                  {plan.popular ? 'Start Neon Journey' : 'Choose Plan'}
                </span>
                <div className={`absolute inset-0 bg-gradient-to-r from-${plan.color}-600 to-${plan.color}-800 rounded-lg opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300`}></div>
              </button>

              {/* Hover Effects */}
              <div className={`absolute inset-0 bg-gradient-to-br from-${plan.color}-400/5 to-${plan.color}-600/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              {/* Neon Particles */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                {Array.from({ length: 3 }, (_, i) => (
                  <div
                    key={i}
                    className={`absolute w-1 h-1 bg-${plan.color}-400 rounded-full animate-neon-particle`}
                    style={{
                      left: `${i * 4}px`,
                      top: `${i * 4}px`,
                      animationDelay: `${i * 0.1}s`
                    }}
                  />
                ))}
              </div>

              {/* Corner Element */}
              <div className={`absolute bottom-4 right-4 w-8 h-8 border-2 border-${plan.color}-400 rounded-lg animate-neon-spin opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center px-8 py-4 bg-gradient-to-br from-purple-800/80 to-pink-800/80 backdrop-blur-xl border-2 border-purple-400 rounded-lg shadow-2xl">
            <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mr-4 animate-neon-pulse"></div>
            <span className="text-lg font-bold text-purple-400 tracking-wider">
              Need a Custom Neon Solution? Contact Our Neon Designers
            </span>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-8 w-12 h-12 border-2 border-purple-400 rounded-lg animate-neon-pulse"></div>
      <div className="absolute top-1/3 right-8 w-12 h-12 border-2 border-pink-400 rounded-lg animate-neon-pulse" style={{ animationDelay: '0.5s' }}></div>
      <div className="absolute bottom-1/4 left-8 w-12 h-12 border-2 border-cyan-400 rounded-lg animate-neon-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-1/3 right-8 w-12 h-12 border-2 border-purple-400 rounded-lg animate-neon-pulse" style={{ animationDelay: '1.5s' }}></div>

      {/* Neon Light Rays */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/3 w-px h-full bg-gradient-to-b from-transparent via-purple-400/10 to-transparent animate-art-deco-scan"></div>
        <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-pink-400/10 to-transparent animate-art-deco-scan" style={{ animationDelay: '1s' }}></div>
      </div>
    </section>
  );
} 