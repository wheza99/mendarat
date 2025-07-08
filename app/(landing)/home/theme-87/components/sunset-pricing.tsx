import React from 'react';

export default function SunsetPricing() {
  const plans = [
    {
      name: "Starter",
      price: "$99",
      period: "per month",
      description: "Perfect for small businesses and startups",
      features: [
        "Up to 5 team members",
        "Basic analytics",
        "Email support",
        "10GB storage",
        "Basic integrations"
      ],
      popular: false,
      color: "orange"
    },
    {
      name: "Professional",
      price: "$299",
      period: "per month",
      description: "Ideal for growing businesses and teams",
      features: [
        "Up to 25 team members",
        "Advanced analytics",
        "Priority support",
        "100GB storage",
        "Advanced integrations",
        "Custom branding",
        "API access"
      ],
      popular: true,
      color: "pink"
    },
    {
      name: "Enterprise",
      price: "$599",
      period: "per month",
      description: "For large organizations with complex needs",
      features: [
        "Unlimited team members",
        "Enterprise analytics",
        "24/7 phone support",
        "Unlimited storage",
        "Custom integrations",
        "White-label solution",
        "Dedicated account manager",
        "SLA guarantee"
      ],
      popular: false,
      color: "purple"
    }
  ];

  return (
    <section className="relative py-20 px-4 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-orange-600/10 to-transparent"></div>
        
        {/* Floating Price Tags */}
        {Array.from({ length: 8 }, (_, i) => (
          <div
            key={`price-${i}`}
            className="absolute animate-sunset-float"
            style={{
              left: `${10 + (i % 4) * 25}%`,
              top: `${20 + Math.floor(i / 4) * 30}%`,
              animationDelay: `${i * 0.2}s`,
              animationDuration: `${6 + Math.random() * 4}s`
            }}
          >
            <div className="w-12 h-12 border border-orange-400/30 rounded-full animate-sunset-pulse"></div>
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 gradient-text-sunset">
            Pricing Plans
          </h2>
          <p className="text-xl text-orange-200 max-w-3xl mx-auto leading-relaxed">
            Choose the perfect plan for your business needs with our flexible pricing options
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative sunset-card p-8 hover-sunset-scale group ${
                plan.popular ? 'ring-2 ring-pink-400/50 scale-105' : ''
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-pink-400 to-purple-400 text-white px-4 py-2 rounded-full text-sm font-semibold neon-text-pink">
                    Most Popular
                  </div>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-8">
                <h3 className={`text-2xl font-bold mb-2 neon-text-${plan.color}`}>
                  {plan.name}
                </h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-orange-300 text-lg">/{plan.period}</span>
                </div>
                <p className="text-orange-200 text-sm">
                  {plan.description}
                </p>
              </div>

              {/* Features List */}
              <div className="mb-8">
                <ul className="space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center gap-3 text-orange-200"
                    >
                      <div className="w-2 h-2 bg-orange-400 rounded-full animate-sunset-pulse"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Button */}
              <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                plan.popular 
                  ? 'btn-sunset hover-sunset-scale' 
                  : 'sunset-glass text-white border border-orange-400/50 hover-sunset-glow'
              }`}>
                {plan.popular ? 'Get Started' : 'Choose Plan'}
              </button>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-orange-400/5 to-pink-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* Additional Options */}
        <div className="sunset-glass p-8 rounded-2xl mb-16">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4 gradient-text-sunset">
              Custom Solutions
            </h3>
            <p className="text-orange-200 max-w-2xl mx-auto">
              Need something specific? We offer custom solutions tailored to your unique requirements
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-orange-400/10 to-pink-400/10">
              <div className="text-4xl mb-4 animate-sunset-pulse">🎯</div>
              <h4 className="text-xl font-semibold mb-3 text-white">Custom Development</h4>
              <p className="text-orange-200 text-sm mb-4">
                Tailored solutions built specifically for your business needs
              </p>
              <button className="btn-sunset px-6 py-2 rounded-lg font-medium hover-sunset-scale">
                Get Quote
              </button>
            </div>
            
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-orange-400/10 to-pink-400/10">
              <div className="text-4xl mb-4 animate-sunset-pulse">🚀</div>
              <h4 className="text-xl font-semibold mb-3 text-white">Enterprise Support</h4>
              <p className="text-orange-200 text-sm mb-4">
                Dedicated support and custom integrations for enterprise clients
              </p>
              <button className="btn-sunset px-6 py-2 rounded-lg font-medium hover-sunset-scale">
                Contact Sales
              </button>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4 gradient-text-sunset">
              Frequently Asked Questions
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                question: "Can I change my plan anytime?",
                answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately."
              },
              {
                question: "Is there a free trial available?",
                answer: "We offer a 14-day free trial for all plans. No credit card required to start."
              },
              {
                question: "What payment methods do you accept?",
                answer: "We accept all major credit cards, PayPal, and bank transfers for annual plans."
              },
              {
                question: "Do you offer refunds?",
                answer: "Yes, we offer a 30-day money-back guarantee if you're not satisfied with our service."
              }
            ].map((faq, index) => (
              <div
                key={index}
                className="sunset-card p-6 hover-sunset-glow"
              >
                <h4 className="text-lg font-semibold mb-3 text-white neon-text-orange">
                  {faq.question}
                </h4>
                <p className="text-orange-200 text-sm leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="sunset-glass p-8 rounded-2xl max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-4 gradient-text-sunset">
              Ready to Get Started?
            </h3>
            <p className="text-orange-200 mb-8 text-lg">
              Join thousands of businesses that trust us with their digital transformation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-sunset px-8 py-4 rounded-xl font-semibold hover-sunset-scale">
                Start Free Trial
              </button>
              <button className="sunset-glass px-8 py-4 rounded-xl font-semibold text-white border border-orange-400/50 hover-sunset-glow transition-all duration-300">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-10 right-1/4 w-20 h-20 border border-orange-400/30 rounded-full animate-sunset-pulse"></div>
      <div className="absolute bottom-10 left-1/4 w-16 h-16 border border-pink-400/30 rounded-full animate-sunset-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 right-10 w-12 h-12 border border-purple-400/30 rounded-full animate-sunset-pulse" style={{ animationDelay: '2s' }}></div>
    </section>
  );
} 