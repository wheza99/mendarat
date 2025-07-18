'use client';

import { servicesSectionCopy } from '../copy';

export default function Services() {
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
              {servicesSectionCopy.title}
            </h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto mb-6 type-reveal" />
            <h3 className="text-xl md:text-2xl font-light text-gray-600 tracking-wide clean-slide" style={{ animationDelay: '0.2s' }}>
              {servicesSectionCopy.subtitle}
            </h3>
          </div>
          <p className="text-lg text-gray-500 font-light max-w-3xl mx-auto leading-relaxed clean-slide" style={{ animationDelay: '0.4s' }}>
            {servicesSectionCopy.description}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {servicesSectionCopy.services.map((service, index) => (
            <div 
              key={index}
              className="group text-center clean-slide"
              style={{ animationDelay: `${0.6 + index * 0.2}s` }}
            >
              {/* Service Number */}
              <div className="mb-8">
                <div className="text-6xl font-extralight text-blue-500 mb-4 swiss-fade" style={{ animationDelay: `${0.8 + index * 0.2}s` }}>
                  {service.number}
                </div>
                <div className="w-16 h-px bg-gray-300 mx-auto" />
              </div>

              {/* Service Content */}
              <div className="mb-8">
                <h3 className="text-xl font-medium text-gray-900 tracking-wide mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 font-light leading-relaxed mb-8">
                  {service.description}
                </p>
              </div>

              {/* Service Features */}
              <div className="space-y-3 mb-8">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center justify-center">
                    <div className="w-2 h-2 bg-blue-500 mr-3 flex-shrink-0" />
                    <span className="text-sm text-gray-700 font-light tracking-wide">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* Learn More Link */}
              <button className="group/btn text-sm text-gray-900 font-light tracking-wide hover:text-blue-500 transition-colors duration-300">
                <span className="flex items-center justify-center">
                  LEARN MORE
                  <svg className="w-4 h-4 ml-2 transform group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </button>

              {/* Geometric accent */}
              <div className="mt-8 flex justify-center">
                <div className="w-12 h-12 border border-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300 geometric-float" />
              </div>
            </div>
          ))}
        </div>

        {/* Service Process */}
        <div className="mt-24 pt-16 border-t border-gray-200">
          <div className="text-center mb-16 clean-slide" style={{ animationDelay: '1.4s' }}>
            <h3 className="text-2xl font-light text-gray-900 tracking-wide mb-4">
              OUR APPROACH
            </h3>
            <p className="text-gray-600 font-light max-w-2xl mx-auto">
              Every project follows Swiss design methodology for consistent, exceptional results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "RESEARCH", desc: "Understanding your needs" },
              { step: "02", title: "CONCEPT", desc: "Developing solutions" },
              { step: "03", title: "DESIGN", desc: "Creating excellence" },
              { step: "04", title: "DELIVER", desc: "Perfect execution" }
            ].map((item, index) => (
              <div 
                key={index} 
                className="text-center clean-slide"
                style={{ animationDelay: `${1.6 + index * 0.1}s` }}
              >
                <div className="text-2xl font-extralight text-blue-500 mb-3">
                  {item.step}
                </div>
                <h4 className="text-sm font-medium text-gray-900 tracking-wide mb-2">
                  {item.title}
                </h4>
                <p className="text-xs text-gray-500 font-light">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center clean-slide" style={{ animationDelay: '2s' }}>
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-light text-gray-900 tracking-wide mb-6">
              READY TO START YOUR PROJECT?
            </h3>
            <p className="text-gray-600 font-light mb-8">
              Let's discuss how Swiss design principles can elevate your brand.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <button className="px-12 py-4 bg-gray-900 text-white font-light tracking-wide hover:bg-gray-800 transition-all duration-300 minimal-pulse">
                GET STARTED
              </button>
              <button className="px-12 py-4 border border-gray-300 text-gray-700 font-light tracking-wide hover:border-gray-900 hover:text-gray-900 transition-all duration-300">
                VIEW PORTFOLIO
              </button>
            </div>
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
        .geometric-float { animation: geometric-float 8s ease-in-out infinite; }
        .minimal-pulse { animation: minimal-pulse 2s ease-in-out infinite; }
      `}</style>
    </section>
  );
}