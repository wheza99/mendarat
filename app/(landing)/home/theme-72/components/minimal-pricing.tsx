import React from 'react';

export default function MinimalPricing() {
  const plans = [
    {
      name: 'Starter',
      price: '$99',
      period: '/month',
      description: 'Perfect for small projects and startups',
      features: [
        'Basic Features',
        '5 Projects',
        'Email Support',
        'Basic Analytics',
        '1GB Storage'
      ],
      color: 'blue',
      popular: false
    },
    {
      name: 'Professional',
      price: '$199',
      period: '/month',
      description: 'Ideal for growing businesses and teams',
      features: [
        'All Starter Features',
        'Unlimited Projects',
        'Priority Support',
        'Advanced Analytics',
        '10GB Storage',
        'Custom Integrations'
      ],
      color: 'purple',
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$399',
      period: '/month',
      description: 'For large organizations with complex needs',
      features: [
        'All Professional Features',
        'Unlimited Everything',
        '24/7 Support',
        'Custom Analytics',
        'Unlimited Storage',
        'Dedicated Account Manager',
        'Custom Development'
      ],
      color: 'pink',
      popular: false
    }
  ];

  return (
    <section className="relative py-24 bg-white overflow-hidden">
      {/* Holographic Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Clean White Base */}
        <div className="absolute inset-0 bg-white"></div>
        
        {/* Subtle Holographic Grid */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,#3b82f6_50%,transparent_100%)] bg-[length:200px_1px]"></div>
          <div className="absolute inset-0 bg-[linear-gradient(0deg,transparent_0%,#8b5cf6_50%,transparent_100%)] bg-[length:1px_200px]"></div>
        </div>

        {/* Floating Geometric Shapes */}
        <div className="absolute top-1/4 left-1/6 w-16 h-16 border border-gray-200/30 rounded-lg animate-holographic-float"></div>
        <div className="absolute top-1/3 right-1/6 w-12 h-12 border border-gray-200/30 rounded-full animate-holographic-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-20 h-20 border border-gray-200/30 rounded-lg animate-holographic-float" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 mb-6 bg-white/80 backdrop-blur-xl border border-gray-200 rounded-full shadow-xl">
            <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mr-2"></div>
            <span className="text-xs font-light text-gray-600 tracking-wider">
              PRICING
            </span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-extralight text-gray-900 mb-6">
            <span className="block">Simple</span>
            <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Pricing
            </span>
          </h2>
          
          <p className="text-xl font-light text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Choose the perfect plan for your needs. All plans include our signature 
            holographic minimalism design and exceptional support.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`group relative bg-white/60 backdrop-blur-xl border border-gray-200 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 animate-holographic-card ${
                plan.popular ? 'ring-2 ring-purple-400/50' : ''
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-purple-400 to-pink-400 text-white text-xs font-medium px-4 py-2 rounded-full shadow-lg">
                    MOST POPULAR
                  </div>
                </div>
              )}

              {/* Holographic Background Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br from-${plan.color}-400/5 to-${plan.color}-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              {/* Content */}
              <div className="relative z-10">
                {/* Plan Name */}
                <h3 className="text-2xl font-medium text-gray-900 mb-2 group-hover:text-gray-800 transition-colors duration-300">
                  {plan.name}
                </h3>

                {/* Price */}
                <div className="mb-6">
                  <div className="flex items-baseline">
                    <span className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                      {plan.price}
                    </span>
                    <span className="text-gray-500 ml-2">{plan.period}</span>
                  </div>
                  <p className="text-gray-600 text-sm mt-2 group-hover:text-gray-700 transition-colors duration-300">
                    {plan.description}
                  </p>
                </div>

                {/* Features List */}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                      <div className={`w-1.5 h-1.5 bg-gradient-to-r from-${plan.color}-400 to-${plan.color}-600 rounded-full mr-3`}></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button className={`w-full py-3 px-6 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-purple-400 to-pink-400 text-white shadow-lg hover:shadow-xl'
                    : 'bg-white/80 backdrop-blur-xl border border-gray-200 text-gray-700 hover:border-gray-300 hover:shadow-lg'
                }`}>
                  {plan.popular ? 'Get Started' : 'Choose Plan'}
                </button>

                {/* Holographic Accent */}
                <div className={`absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-${plan.color}-400 to-${plan.color}-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              </div>

              {/* Holographic Reflection */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="bg-white/60 backdrop-blur-xl border border-gray-200 rounded-3xl p-12 shadow-2xl">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-light text-gray-900 mb-4">
              Frequently Asked <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Questions</span>
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Everything you need to know about our pricing and services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                question: 'Can I change my plan anytime?',
                answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.'
              },
              {
                question: 'Is there a free trial available?',
                answer: 'We offer a 14-day free trial for all plans. No credit card required to start.'
              },
              {
                question: 'What payment methods do you accept?',
                answer: 'We accept all major credit cards, PayPal, and bank transfers for annual plans.'
              },
              {
                question: 'Do you offer custom pricing?',
                answer: 'Yes, for enterprise customers we offer custom pricing based on your specific needs.'
              }
            ].map((faq, index) => (
              <div key={index} className="group">
                <h4 className="text-lg font-medium text-gray-900 mb-3 group-hover:text-gray-800 transition-colors duration-300">
                  {faq.question}
                </h4>
                <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-6 bg-white/80 backdrop-blur-xl border border-gray-200 rounded-2xl px-8 py-6 shadow-xl">
            <div className="text-left">
              <div className="text-sm font-light text-gray-500 mb-1">NEED A CUSTOM SOLUTION?</div>
              <div className="text-lg font-medium text-gray-900">Contact us for enterprise pricing</div>
            </div>
            <button className="px-6 py-3 bg-gradient-to-r from-blue-400 to-purple-400 text-white font-medium rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              Contact Sales
            </button>
          </div>
        </div>
      </div>

      {/* Holographic Decorative Elements */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <div className="flex space-x-1">
          {Array.from({ length: 11 }, (_, i) => (
            <div
              key={i}
              className="w-1 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-holographic-pulse"
              style={{ animationDelay: `${i * 0.1}s` }}
            />
          ))}
        </div>
      </div>
    </section>
  );
} 