import React from 'react';

export default function DecoPricing() {
  const plans = [
    {
      name: 'ART DECO BASIC',
      price: '$39',
      period: '/month',
      description: 'Perfect for getting started with Art Deco design',
      features: ['5 Art Deco Patterns', 'Basic Neon Gradients', 'Email Support'],
      gradient: 'from-purple-400 to-pink-400',
      popular: false
    },
    {
      name: 'NEON GRADIENT PRO',
      price: '$89',
      period: '/month',
      description: 'Advanced features for professional Art Deco design',
      features: ['Unlimited Patterns', 'Advanced Gradients', 'Priority Support', 'Custom Animations'],
      gradient: 'from-pink-400 to-orange-400',
      popular: true
    },
    {
      name: 'ART DECO ENTERPRISE',
      price: '$229',
      period: '/month',
      description: 'Complete solution for large-scale Art Deco projects',
      features: ['Everything in Pro', 'Custom Branding', 'Dedicated Support', 'API Access'],
      gradient: 'from-orange-400 to-purple-400',
      popular: false
    }
  ];

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Deco Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_60%,#a855f7_0%,transparent_50%)] bg-[length:170px_170px] animate-deco-gear"></div>
        <div className="absolute inset-0 bg-[linear-gradient(75deg,transparent_0%,#ec4899_50%,transparent_100%)] bg-[length:260px_260px] animate-deco-flow"></div>
      </div>

      {/* Deco Corner Elements */}
      <div className="absolute top-0 left-0 w-44 h-44 border-4 border-purple-400 rounded-lg animate-deco-pulse"></div>
      <div className="absolute top-0 right-0 w-44 h-44 border-4 border-pink-400 rounded-lg animate-deco-pulse" style={{ animationDelay: '0.5s' }}></div>
      <div className="absolute bottom-0 left-0 w-44 h-44 border-4 border-orange-400 rounded-lg animate-deco-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-0 right-0 w-44 h-44 border-4 border-purple-400 rounded-lg animate-deco-pulse" style={{ animationDelay: '1.5s' }}></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent text-4xl md:text-5xl font-bold mb-4">
            DECO PRICING
          </div>
          <div className="text-xl text-purple-300 font-light">
            Choose Your Art Deco Experience
          </div>
          
          {/* Deco Divider */}
          <div className="flex justify-center items-center mt-8">
            <div className="w-16 h-1 bg-gradient-to-r from-purple-400 to-pink-400"></div>
            <div className="mx-4 w-4 h-4 border-2 border-orange-400 rotate-45 animate-deco-spin"></div>
            <div className="w-16 h-1 bg-gradient-to-r from-pink-400 to-orange-400"></div>
          </div>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <div key={index} className={`group relative ${plan.popular ? 'lg:scale-105' : ''}`}>
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                  <div className="bg-gradient-to-r from-pink-400 to-orange-400 text-white px-4 py-2 rounded-full text-sm font-bold">
                    MOST POPULAR
                  </div>
                </div>
              )}

              {/* Plan Card */}
              <div className={`relative bg-gradient-to-br from-purple-100/80 to-pink-100/80 backdrop-blur-xl border-2 ${plan.popular ? 'border-pink-400' : 'border-purple-300/50'} rounded-lg p-8 h-full hover:border-purple-400/80 transition-all duration-300 transform hover:scale-105`}>
                {/* Deco Corner Decorations */}
                <div className="absolute top-6 left-6 w-8 h-8 border-2 border-purple-400 rounded-sm animate-deco-pulse"></div>
                <div className="absolute top-6 right-6 w-8 h-8 border-2 border-pink-400 rounded-sm animate-deco-pulse" style={{ animationDelay: '0.5s' }}></div>
                <div className="absolute bottom-6 left-6 w-8 h-8 border-2 border-orange-400 rounded-sm animate-deco-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute bottom-6 right-6 w-8 h-8 border-2 border-purple-400 rounded-sm animate-deco-pulse" style={{ animationDelay: '1.5s' }}></div>

                {/* Plan Header */}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline justify-center mb-4">
                    <span className="text-4xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
                      {plan.price}
                    </span>
                    <span className="text-purple-600 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-purple-600 text-sm">
                    {plan.description}
                  </p>
                </div>

                {/* Plan Features */}
                <div className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                      <span className="text-purple-600 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Plan Button */}
                <button className={`w-full py-3 px-6 bg-gradient-to-r ${plan.gradient} text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50`}>
                  {plan.popular ? 'GET STARTED' : 'CHOOSE PLAN'}
                </button>

                {/* Hover Glow Effect */}
                <div className={`absolute -inset-1 bg-gradient-to-r ${plan.gradient} rounded-lg blur opacity-0 group-hover:opacity-40 transition-opacity duration-300`}></div>
              </div>

              {/* Deco Border Animation */}
              <div className="absolute inset-0 rounded-lg border-2 border-transparent group-hover:border-purple-400/60 transition-all duration-300">
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400/0 via-purple-400/30 to-purple-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-deco-sweep"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Deco Center Element */}
        <div className="text-center">
          <div className="inline-block bg-gradient-to-br from-purple-100/80 to-pink-100/80 backdrop-blur-xl border border-purple-300/50 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
                ART DECO
              </span>
              <span className="text-gray-800"> EXCELLENCE </span>
              <span className="bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                GUARANTEED
              </span>
            </h3>
            
            <p className="text-purple-600 mb-6">
              Every plan includes our signature Art Deco design elements and neon gradient aesthetics
            </p>

            {/* Deco Features */}
            <div className="flex justify-center items-center space-x-8">
              {Array.from({ length: 4 }, (_, i) => (
                <div
                  key={i}
                  className={`w-12 h-12 border-3 border-${['purple', 'pink', 'orange', 'purple'][i]}-400 rounded-lg animate-deco-pulse`}
                  style={{ animationDelay: `${i * 0.3}s` }}
                ></div>
              ))}
            </div>
          </div>
        </div>

        {/* Floating Deco Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 12 }, (_, i) => (
            <div
              key={i}
              className="absolute animate-deco-float"
              style={{
                left: `${5 + (i % 4) * 30}%`,
                top: `${10 + Math.floor(i / 4) * 25}%`,
                animationDelay: `${i * 0.3}s`,
                animationDuration: `${16 + Math.random() * 12}s`
              }}
            >
              <div className={`w-8 h-8 border-2 border-${['purple', 'pink', 'orange'][i % 3]}-400 rounded-sm animate-deco-spin`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 