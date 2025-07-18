'use client';

import { pricingSectionCopy } from '../copy';

export default function Pricing() {
  return (
    <section className="py-24 px-4 bg-gray-50 relative overflow-hidden">
      {/* Swiss grid background */}
      <div className="absolute inset-0 opacity-5">
        <div className="swiss-grid w-full h-full" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="mb-8">
            <h2 className="text-5xl md:text-6xl font-extralight tracking-tight text-gray-900 mb-6 clean-slide">
              {pricingSectionCopy.title}
            </h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto mb-6 type-reveal" />
            <h3 className="text-xl md:text-2xl font-light text-gray-600 tracking-wide clean-slide" style={{ animationDelay: '0.2s' }}>
              {pricingSectionCopy.subtitle}
            </h3>
          </div>
          <p className="text-lg text-gray-500 font-light max-w-3xl mx-auto leading-relaxed clean-slide" style={{ animationDelay: '0.4s' }}>
            {pricingSectionCopy.description}
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingSectionCopy.plans.map((plan, index) => (
            <div 
              key={index}
              className={`group relative bg-white border transition-all duration-300 clean-slide ${
                plan.popular 
                  ? 'border-blue-500 shadow-lg scale-105' 
                  : 'border-gray-200 hover:border-gray-300 hover:shadow-md'
              }`}
              style={{ animationDelay: `${0.6 + index * 0.2}s` }}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-blue-500 text-white px-6 py-2 text-xs font-light tracking-widest">
                    RECOMMENDED
                  </div>
                </div>
              )}

              <div className="p-8">
                {/* Plan Header */}
                <div className="text-center mb-8">
                  <h3 className="text-xl font-medium text-gray-900 tracking-wide mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-sm text-gray-500 font-light mb-6">
                    {plan.description}
                  </p>
                  
                  {/* Price */}
                  <div className="mb-6">
                    <div className="flex items-baseline justify-center">
                      <span className="text-sm text-gray-500 font-light">{plan.currency}</span>
                      <span className="text-4xl font-extralight text-gray-900 mx-2">{plan.price}</span>
                      <span className="text-sm text-gray-500 font-light">/{plan.period}</span>
                    </div>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <div className="w-4 h-4 border border-blue-500 mr-3 flex-shrink-0">
                        <div className="w-2 h-2 bg-blue-500 m-0.5" />
                      </div>
                      <span className="text-sm text-gray-700 font-light">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <button className={`w-full py-4 font-light tracking-wide transition-all duration-300 ${
                  plan.popular
                    ? 'bg-blue-500 text-white hover:bg-blue-600'
                    : 'border border-gray-300 text-gray-700 hover:border-gray-900 hover:text-gray-900'
                }`}>
                  GET STARTED
                </button>
              </div>

              {/* Geometric accent */}
              <div className={`absolute top-4 right-4 w-6 h-6 border opacity-0 group-hover:opacity-100 transition-opacity duration-300 geometric-float ${
                plan.popular ? 'border-blue-300' : 'border-gray-300'
              }`} />
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center clean-slide" style={{ animationDelay: '1.4s' }}>
          <p className="text-sm text-gray-500 font-light mb-4">
            All plans include comprehensive project documentation and Swiss design guidelines.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <button className="text-sm text-blue-500 hover:text-blue-600 font-light tracking-wide transition-colors duration-300">
              COMPARE ALL FEATURES
            </button>
            <span className="hidden md:block text-gray-300">|</span>
            <button className="text-sm text-blue-500 hover:text-blue-600 font-light tracking-wide transition-colors duration-300">
              CONTACT FOR CUSTOM QUOTE
            </button>
          </div>
        </div>

        {/* Geometric Elements */}
        <div className="absolute top-20 left-8 hidden lg:block">
          <div className="w-16 h-16 border border-gray-200 geometric-float" />
        </div>
        
        <div className="absolute bottom-20 right-8 hidden lg:block">
          <div className="w-12 h-12 bg-blue-500/10 geometric-float" style={{ animationDelay: '1s' }} />
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        .swiss-grid {
          background-image: 
            linear-gradient(rgba(0, 0, 0, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 0, 0, 0.03) 1px, transparent 1px);
          background-size: 24px 24px;
        }
        
        @keyframes geometric-float {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
            opacity: 0.3;
          }
          25% {
            transform: translateY(-10px) rotate(45deg);
            opacity: 0.6;
          }
          50% {
            transform: translateY(-5px) rotate(90deg);
            opacity: 0.4;
          }
          75% {
            transform: translateY(-15px) rotate(135deg);
            opacity: 0.7;
          }
        }
        
        @keyframes clean-slide {
          0% {
            transform: translateY(20px);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }
        
        @keyframes type-reveal {
          0% {
            width: 0;
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            width: 100%;
            opacity: 1;
          }
        }
        
        .clean-slide { animation: clean-slide 0.8s ease-out forwards; }
        .type-reveal { animation: type-reveal 2s ease-out forwards; }
        .geometric-float { animation: geometric-float 8s ease-in-out infinite; }
      `}</style>
    </section>
  );
}