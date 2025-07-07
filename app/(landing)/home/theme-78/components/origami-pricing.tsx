import React from 'react';

export default function OrigamiPricing() {
  const plans = [
    {
      name: 'BASIC FOLD',
      price: '$29',
      period: '/month',
      description: 'Perfect for getting started with digital origami',
      features: ['5 Digital Folds', 'Basic Gradients', 'Email Support'],
      gradient: 'from-blue-400 to-purple-400',
      popular: false
    },
    {
      name: 'PREMIUM ORIGAMI',
      price: '$79',
      period: '/month',
      description: 'Advanced features for professional origami design',
      features: ['Unlimited Folds', 'Advanced Gradients', 'Priority Support', 'Custom Animations'],
      gradient: 'from-purple-400 to-indigo-400',
      popular: true
    },
    {
      name: 'ENTERPRISE FOLD',
      price: '$199',
      period: '/month',
      description: 'Complete solution for large-scale origami projects',
      features: ['Everything in Premium', 'Custom Branding', 'Dedicated Support', 'API Access'],
      gradient: 'from-indigo-400 to-blue-400',
      popular: false
    }
  ];

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Origami Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_60%,#3b82f6_0%,transparent_50%)] bg-[length:170px_170px] animate-origami-gear"></div>
        <div className="absolute inset-0 bg-[linear-gradient(75deg,transparent_0%,#8b5cf6_50%,transparent_100%)] bg-[length:260px_260px] animate-origami-flow"></div>
      </div>

      {/* Origami Corner Elements */}
      <div className="absolute top-0 left-0 w-44 h-44 border-4 border-blue-400 rounded-lg animate-origami-pulse"></div>
      <div className="absolute top-0 right-0 w-44 h-44 border-4 border-purple-400 rounded-lg animate-origami-pulse" style={{ animationDelay: '0.5s' }}></div>
      <div className="absolute bottom-0 left-0 w-44 h-44 border-4 border-indigo-400 rounded-lg animate-origami-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-0 right-0 w-44 h-44 border-4 border-blue-400 rounded-lg animate-origami-pulse" style={{ animationDelay: '1.5s' }}></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent text-4xl md:text-5xl font-bold mb-4">
            ORIGAMI PRICING
          </div>
          <div className="text-xl text-blue-600 font-light">
            Choose Your Digital Folding Experience
          </div>
          
          {/* Origami Divider */}
          <div className="flex justify-center items-center mt-8">
            <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-purple-400"></div>
            <div className="mx-4 w-4 h-4 border-2 border-indigo-400 rotate-45 animate-origami-spin"></div>
            <div className="w-16 h-1 bg-gradient-to-r from-purple-400 to-indigo-400"></div>
          </div>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <div key={index} className={`group relative ${plan.popular ? 'lg:scale-105' : ''}`}>
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                  <div className="bg-gradient-to-r from-purple-400 to-indigo-400 text-white px-4 py-2 rounded-full text-sm font-bold">
                    MOST POPULAR
                  </div>
                </div>
              )}

              {/* Plan Card */}
              <div className={`relative bg-gradient-to-br from-blue-100/80 to-purple-100/80 backdrop-blur-xl border-2 ${plan.popular ? 'border-purple-400' : 'border-blue-300/50'} rounded-lg p-8 h-full hover:border-blue-400/80 transition-all duration-300 transform hover:scale-105`}>
                {/* Origami Corner Decorations */}
                <div className="absolute top-6 left-6 w-8 h-8 border-2 border-blue-400 rounded-sm animate-origami-pulse"></div>
                <div className="absolute top-6 right-6 w-8 h-8 border-2 border-purple-400 rounded-sm animate-origami-pulse" style={{ animationDelay: '0.5s' }}></div>
                <div className="absolute bottom-6 left-6 w-8 h-8 border-2 border-indigo-400 rounded-sm animate-origami-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute bottom-6 right-6 w-8 h-8 border-2 border-blue-400 rounded-sm animate-origami-pulse" style={{ animationDelay: '1.5s' }}></div>

                {/* Plan Header */}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline justify-center mb-4">
                    <span className="text-4xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
                      {plan.price}
                    </span>
                    <span className="text-blue-600 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-blue-600 text-sm">
                    {plan.description}
                  </p>
                </div>

                {/* Plan Features */}
                <div className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
                      <span className="text-blue-600 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Plan Button */}
                <button className={`w-full py-3 px-6 bg-gradient-to-r ${plan.gradient} text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/50`}>
                  {plan.popular ? 'GET STARTED' : 'CHOOSE PLAN'}
                </button>

                {/* Hover Glow Effect */}
                <div className={`absolute -inset-1 bg-gradient-to-r ${plan.gradient} rounded-lg blur opacity-0 group-hover:opacity-40 transition-opacity duration-300`}></div>
              </div>

              {/* Origami Border Animation */}
              <div className="absolute inset-0 rounded-lg border-2 border-transparent group-hover:border-blue-400/60 transition-all duration-300">
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-400/0 via-blue-400/30 to-blue-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-origami-sweep"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Origami Center Element */}
        <div className="text-center">
          <div className="inline-block bg-gradient-to-br from-blue-100/80 to-purple-100/80 backdrop-blur-xl border border-blue-300/50 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
                ORIGAMI
              </span>
              <span className="text-gray-800"> EXCELLENCE </span>
              <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
                GUARANTEED
              </span>
            </h3>
            
            <p className="text-blue-600 mb-6">
              Every plan includes our signature origami design elements and soft gradient aesthetics
            </p>

            {/* Origami Features */}
            <div className="flex justify-center items-center space-x-8">
              {Array.from({ length: 4 }, (_, i) => (
                <div
                  key={i}
                  className={`w-12 h-12 border-3 border-${['blue', 'purple', 'indigo', 'blue'][i]}-400 rounded-lg animate-origami-pulse`}
                  style={{ animationDelay: `${i * 0.3}s` }}
                ></div>
              ))}
            </div>
          </div>
        </div>

        {/* Floating Origami Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 12 }, (_, i) => (
            <div
              key={i}
              className="absolute animate-origami-float"
              style={{
                left: `${5 + (i % 4) * 30}%`,
                top: `${10 + Math.floor(i / 4) * 25}%`,
                animationDelay: `${i * 0.3}s`,
                animationDuration: `${16 + Math.random() * 12}s`
              }}
            >
              <div className={`w-8 h-8 border-2 border-${['blue', 'purple', 'indigo'][i % 3]}-400 rounded-sm animate-origami-spin`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 