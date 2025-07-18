'use client';

import { processSectionCopy } from '../copy';

export default function Process() {
  return (
    <section className="py-24 px-4 bg-white relative overflow-hidden">
      {/* Swiss grid background */}
      <div className="absolute inset-0 opacity-5">
        <div className="swiss-grid w-full h-full" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="mb-8">
            <h2 className="text-5xl md:text-6xl font-extralight tracking-tight text-gray-900 mb-6 clean-slide">
              {processSectionCopy.title}
            </h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto mb-6 type-reveal" />
            <h3 className="text-xl md:text-2xl font-light text-gray-600 tracking-wide clean-slide" style={{ animationDelay: '0.2s' }}>
              {processSectionCopy.subtitle}
            </h3>
          </div>
          <p className="text-lg text-gray-500 font-light max-w-3xl mx-auto leading-relaxed clean-slide" style={{ animationDelay: '0.4s' }}>
            {processSectionCopy.description}
          </p>
        </div>

        {/* Process Steps */}
        <div className="space-y-24">
          {processSectionCopy.steps.map((step, index) => (
            <div 
              key={index}
              className={`flex flex-col lg:flex-row items-center gap-12 clean-slide ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
              style={{ animationDelay: `${0.6 + index * 0.3}s` }}
            >
              {/* Step Content */}
              <div className="flex-1 text-center lg:text-left">
                <div className="mb-6">
                  <div className="text-6xl font-extralight text-blue-500 mb-4 swiss-fade" style={{ animationDelay: `${0.8 + index * 0.3}s` }}>
                    {step.number}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-light text-gray-900 tracking-wide mb-4">
                    {step.title}
                  </h3>
                  <p className="text-lg text-gray-600 font-light leading-relaxed mb-8">
                    {step.description}
                  </p>
                </div>

                {/* Step Details */}
                <div className="grid grid-cols-2 gap-4">
                  {step.details.map((detail, detailIndex) => (
                    <div 
                      key={detailIndex} 
                      className="flex items-center justify-center lg:justify-start"
                    >
                      <div className="w-2 h-2 bg-blue-500 mr-3 flex-shrink-0" />
                      <span className="text-sm text-gray-700 font-light tracking-wide">
                        {detail}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Step Visual */}
              <div className="flex-1 relative">
                <div className="w-full max-w-md mx-auto aspect-square relative">
                  {/* Main geometric shape */}
                  <div className="absolute inset-0 border-2 border-gray-200 geometric-float" />
                  
                  {/* Inner elements */}
                  <div className="absolute inset-8 border border-blue-500/30 geometric-float" style={{ animationDelay: '0.5s' }} />
                  
                  {/* Step number overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-8xl font-extralight text-gray-100 select-none">
                      {step.number}
                    </div>
                  </div>
                  
                  {/* Floating accents */}
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500/10 geometric-float" style={{ animationDelay: '1s' }} />
                  <div className="absolute -bottom-4 -left-4 w-6 h-6 border border-gray-300 geometric-float" style={{ animationDelay: '1.5s' }} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Process Flow Indicator */}
        <div className="mt-20 flex justify-center clean-slide" style={{ animationDelay: '2s' }}>
          <div className="flex items-center space-x-4">
            {processSectionCopy.steps.map((_, index) => (
              <div key={index} className="flex items-center">
                <div className="w-3 h-3 border border-blue-500 bg-blue-500/20" />
                {index < processSectionCopy.steps.length - 1 && (
                  <div className="w-12 h-px bg-gray-300 mx-4" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center clean-slide" style={{ animationDelay: '2.2s' }}>
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-light text-gray-900 tracking-wide mb-6">
              READY TO START YOUR PROJECT?
            </h3>
            <p className="text-gray-600 font-light mb-8">
              Let's apply Swiss design methodology to create something exceptional together.
            </p>
            <button className="px-12 py-4 bg-gray-900 text-white font-light tracking-wide hover:bg-gray-800 transition-all duration-300 minimal-pulse">
              BEGIN PROCESS
            </button>
          </div>
        </div>

        {/* Geometric Elements */}
        <div className="absolute top-20 right-8 hidden lg:block">
          <div className="w-20 h-20 border border-gray-200 geometric-float" />
        </div>
        
        <div className="absolute bottom-20 left-8 hidden lg:block">
          <div className="w-16 h-16 bg-blue-500/10 geometric-float" style={{ animationDelay: '1s' }} />
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
            opacity: 0.8;
          }
          25% {
            transform: translateY(-10px) rotate(45deg);
            opacity: 1;
          }
          50% {
            transform: translateY(-5px) rotate(90deg);
            opacity: 0.6;
          }
          75% {
            transform: translateY(-15px) rotate(135deg);
            opacity: 0.9;
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
        
        @keyframes swiss-fade {
          0%, 100% {
            opacity: 0.8;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.02);
          }
        }
        
        @keyframes minimal-pulse {
          0%, 100% {
            box-shadow: 0 0 0 0 rgba(59, 130, 246, 0.2);
          }
          50% {
            box-shadow: 0 0 0 10px rgba(59, 130, 246, 0);
          }
        }
        
        .clean-slide { animation: clean-slide 0.8s ease-out forwards; }
        .type-reveal { animation: type-reveal 2s ease-out forwards; }
        .swiss-fade { animation: swiss-fade 4s ease-in-out infinite; }
        .geometric-float { animation: geometric-float 12s ease-in-out infinite; }
        .minimal-pulse { animation: minimal-pulse 2s ease-in-out infinite; }
      `}</style>
    </section>
  );
}