import React from 'react';

export default function NeonPricing() {
  const plans = [
    {
      name: 'ART DECO BASIC',
      price: '$99',
      period: '/month',
      description: 'Perfect for small projects with classic Art Deco elements',
      gradient: 'from-purple-400 to-pink-400',
      features: [
        'Art Deco Templates',
        'Neon Gradient Effects',
        'Basic Animations',
        'Email Support'
      ],
      popular: false
    },
    {
      name: 'NEON PREMIUM',
      price: '$199',
      period: '/month',
      description: 'Advanced features with full neon gradient capabilities',
      gradient: 'from-pink-400 to-cyan-400',
      features: [
        'All Basic Features',
        'Advanced Animations',
        'Custom Gradients',
        'Priority Support',
        'Premium Templates'
      ],
      popular: true
    },
    {
      name: 'GRADIENT PRO',
      price: '$299',
      period: '/month',
      description: 'Complete Art Deco experience with unlimited possibilities',
      gradient: 'from-cyan-400 to-purple-400',
      features: [
        'All Premium Features',
        'Unlimited Customization',
        'White Label Options',
        '24/7 Support',
        'Custom Development'
      ],
      popular: false
    }
  ];

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Art Deco Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_60%,#a855f7_0%,transparent_50%)] bg-[length:170px_170px] animate-art-deco-gear"></div>
        <div className="absolute inset-0 bg-[linear-gradient(15deg,transparent_0%,#ec4899_50%,transparent_100%)] bg-[length:260px_260px] animate-art-deco-flow"></div>
      </div>

      {/* Art Deco Corner Elements */}
      <div className="absolute top-0 left-0 w-44 h-44 border-4 border-purple-400 rounded-lg animate-neon-pulse"></div>
      <div className="absolute top-0 right-0 w-44 h-44 border-4 border-pink-400 rounded-lg animate-neon-pulse" style={{ animationDelay: '0.5s' }}></div>
      <div className="absolute bottom-0 left-0 w-44 h-44 border-4 border-cyan-400 rounded-lg animate-neon-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-0 right-0 w-44 h-44 border-4 border-purple-400 rounded-lg animate-neon-pulse" style={{ animationDelay: '1.5s' }}></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent text-4xl md:text-5xl font-bold mb-4">
            NEON PRICING
          </div>
          <div className="text-xl text-purple-200 font-light">
            Choose Your Art Deco Experience
          </div>
          
          {/* Art Deco Divider */}
          <div className="flex justify-center items-center mt-8">
            <div className="w-16 h-1 bg-gradient-to-r from-purple-400 to-pink-400"></div>
            <div className="mx-4 w-4 h-4 border-2 border-cyan-400 rotate-45 animate-neon-spin"></div>
            <div className="w-16 h-1 bg-gradient-to-r from-pink-400 to-cyan-400"></div>
          </div>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <div key={index} className={`group relative ${plan.popular ? 'lg:scale-110' : ''}`}>
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                  <div className="bg-gradient-to-r from-pink-400 to-cyan-400 text-white px-6 py-2 rounded-full text-sm font-bold animate-neon-pulse">
                    MOST POPULAR
                  </div>
                </div>
              )}

              {/* Plan Card */}
              <div className="relative bg-gradient-to-br from-purple-900/80 to-pink-900/80 backdrop-blur-xl border border-purple-400/50 rounded-lg p-8 h-full hover:border-purple-400/90 transition-all duration-300 transform hover:scale-105">
                {/* Art Deco Corner Decorations */}
                <div className="absolute top-6 left-6 w-10 h-10 border-2 border-purple-400 rounded-sm animate-neon-pulse"></div>
                <div className="absolute top-6 right-6 w-10 h-10 border-2 border-pink-400 rounded-sm animate-neon-pulse" style={{ animationDelay: '0.5s' }}></div>
                <div className="absolute bottom-6 left-6 w-10 h-10 border-2 border-cyan-400 rounded-sm animate-neon-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute bottom-6 right-6 w-10 h-10 border-2 border-purple-400 rounded-sm animate-neon-pulse" style={{ animationDelay: '1.5s' }}></div>

                {/* Plan Header */}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors duration-300">
                    {plan.name}
                  </h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                      {plan.price}
                    </span>
                    <span className="text-purple-300 font-light">{plan.period}</span>
                  </div>
                  <p className="text-purple-200 text-sm leading-relaxed">
                    {plan.description}
                  </p>
                </div>

                {/* Plan Features */}
                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                      <span className="text-purple-200 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Plan Button */}
                <div className="text-center">
                  <button className={`group relative w-full px-6 py-3 bg-gradient-to-r ${plan.gradient} hover:from-purple-500 hover:to-pink-500 text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50`}>
                    <span className="relative z-10">CHOOSE PLAN</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                    <div className="absolute -inset-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-lg blur opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                  </button>
                </div>

                {/* Hover Glow Effect */}
                <div className={`absolute -inset-1 bg-gradient-to-r ${plan.gradient} rounded-lg blur opacity-0 group-hover:opacity-40 transition-opacity duration-300`}></div>
              </div>

              {/* Art Deco Border Animation */}
              <div className="absolute inset-0 rounded-lg border-2 border-transparent group-hover:border-purple-400/70 transition-all duration-300">
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400/0 via-purple-400/40 to-purple-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-art-deco-sweep"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Art Deco Center Element */}
        <div className="flex justify-center mt-16">
          <div className="relative">
            <div className="w-32 h-32 border-4 border-purple-400 rounded-lg animate-neon-pulse"></div>
            <div className="absolute inset-3 w-20 h-20 border-4 border-pink-400 rounded-lg animate-neon-pulse" style={{ animationDelay: '0.5s' }}></div>
            <div className="absolute inset-6 w-8 h-8 border-4 border-cyan-400 rounded-lg animate-neon-pulse" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>

        {/* Floating Art Deco Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 12 }, (_, i) => (
            <div
              key={i}
              className="absolute animate-art-deco-float"
              style={{
                left: `${5 + (i % 4) * 30}%`,
                top: `${10 + Math.floor(i / 4) * 35}%`,
                animationDelay: `${i * 0.8}s`,
                animationDuration: `${16 + Math.random() * 12}s`
              }}
            >
              <div className={`w-12 h-12 border-2 border-${['purple', 'pink', 'cyan'][i % 3]}-400 rounded-sm animate-neon-spin`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 