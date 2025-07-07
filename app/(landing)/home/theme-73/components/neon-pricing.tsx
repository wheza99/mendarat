import React from 'react';

export default function NeonPricing() {
  const plans = [
    {
      name: 'Starter',
      price: '$29',
      period: '/month',
      description: 'Perfect for small projects and startups',
      features: [
        'Art Deco Design Templates',
        'Neon Gradient Effects',
        'Basic Support',
        '5 Projects',
        'Standard Features'
      ],
      gradient: 'from-cyan-400 to-blue-500',
      popular: false
    },
    {
      name: 'Professional',
      price: '$99',
      period: '/month',
      description: 'Ideal for growing businesses and teams',
      features: [
        'Everything in Starter',
        'Advanced Neon Effects',
        'Priority Support',
        'Unlimited Projects',
        'Custom Art Deco Themes',
        'API Access',
        'Analytics Dashboard'
      ],
      gradient: 'from-purple-400 to-pink-500',
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$299',
      period: '/month',
      description: 'For large organizations and enterprises',
      features: [
        'Everything in Professional',
        'Custom Development',
        '24/7 Support',
        'White-label Solutions',
        'Advanced Security',
        'Dedicated Account Manager',
        'Custom Integrations'
      ],
      gradient: 'from-pink-400 to-red-500',
      popular: false
    }
  ];

  return (
    <section className="relative py-24 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Art Deco Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Gradient Base */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
        
        {/* Art Deco Geometric Patterns */}
        <div className="absolute inset-0 opacity-15">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_0%,#06b6d4_50%,transparent_100%)] bg-[length:160px_160px] animate-art-deco-scan"></div>
          <div className="absolute inset-0 bg-[linear-gradient(-45deg,transparent_0%,#8b5cf6_50%,transparent_100%)] bg-[length:260px_260px] animate-art-deco-scan-reverse"></div>
        </div>

        {/* Floating Art Deco Elements */}
        <div className="absolute top-1/4 left-1/6 w-20 h-20 border-2 border-cyan-400 rotate-45 animate-neon-pulse"></div>
        <div className="absolute top-1/3 right-1/6 w-16 h-16 border-2 border-purple-400 rotate-45 animate-neon-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-24 h-24 border-2 border-pink-400 rotate-45 animate-neon-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 mb-6 bg-gradient-to-br from-slate-800/80 to-purple-800/80 backdrop-blur-xl border-2 border-cyan-400 rounded-lg shadow-xl">
            <div className="w-1.5 h-1.5 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full mr-2"></div>
            <span className="text-xs font-bold text-cyan-400 tracking-wider">
              PRICING
            </span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            <span className="block">Neon</span>
            <span className="block bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Pricing
            </span>
          </h2>
          
          <p className="text-xl font-light text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Choose the perfect plan that combines art deco elegance with neon gradient innovation. 
            Every plan includes our signature design aesthetic.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`group relative bg-gradient-to-br from-slate-800/60 to-purple-800/60 backdrop-blur-xl border-2 ${plan.popular ? 'border-purple-400' : 'border-gray-600'} rounded-lg p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 animate-art-deco-card`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-purple-400 to-pink-400 text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg">
                    MOST POPULAR
                  </div>
                </div>
              )}

              {/* Art Deco Background Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${plan.gradient} opacity-0 group-hover:opacity-10 rounded-lg transition-opacity duration-500`}></div>
              
              {/* Content */}
              <div className="relative z-10">
                {/* Plan Name */}
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-gray-100 transition-colors duration-300">
                  {plan.name}
                </h3>

                {/* Price */}
                <div className="mb-4">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-gray-400 ml-2">{plan.period}</span>
                </div>

                {/* Description */}
                <p className="text-gray-400 mb-6 group-hover:text-gray-300 transition-colors duration-300">
                  {plan.description}
                </p>

                {/* Features List */}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                      <div className={`w-1.5 h-1.5 bg-gradient-to-r ${plan.gradient} rounded-full mr-3`}></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button className={`w-full py-3 px-6 bg-gradient-to-r ${plan.gradient} text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-2 ${plan.popular ? 'border-purple-400' : 'border-gray-500'}`}>
                  {plan.popular ? 'Get Started' : 'Choose Plan'}
                </button>

                {/* Art Deco Accent */}
                <div className={`absolute top-0 right-0 w-1 h-full bg-gradient-to-b ${plan.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              </div>

              {/* Art Deco Reflection */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center">
          <div className="inline-flex items-center space-x-6 bg-gradient-to-br from-slate-800/80 to-purple-800/80 backdrop-blur-xl border-2 border-gray-600 rounded-lg px-8 py-6 shadow-xl">
            <div className="text-left">
              <div className="text-sm font-light text-gray-400 mb-1">NEED A CUSTOM SOLUTION?</div>
              <div className="text-lg font-bold text-white">Let's Create Your Perfect Plan</div>
            </div>
            <button className="px-6 py-3 bg-gradient-to-r from-cyan-400 to-purple-400 text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-2 border-cyan-400">
              Contact Sales
            </button>
          </div>
        </div>
      </div>

      {/* Art Deco Decorative Elements */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <div className="flex space-x-3">
          {Array.from({ length: 6 }, (_, i) => (
            <div
              key={i}
              className={`w-2 h-2 border-2 border-${['cyan', 'purple', 'pink', 'cyan', 'purple', 'pink'][i]}-400 rotate-45 animate-neon-pulse`}
              style={{ animationDelay: `${i * 0.1}s` }}
            />
          ))}
        </div>
      </div>
    </section>
  );
} 