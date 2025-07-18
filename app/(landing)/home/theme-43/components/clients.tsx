'use client';

import { clientsSectionCopy } from '../copy';

export default function Clients() {
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
              {clientsSectionCopy.title}
            </h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto mb-6 type-reveal" />
            <h3 className="text-xl md:text-2xl font-light text-gray-600 tracking-wide clean-slide" style={{ animationDelay: '0.2s' }}>
              {clientsSectionCopy.subtitle}
            </h3>
          </div>
          <p className="text-lg text-gray-500 font-light max-w-3xl mx-auto leading-relaxed clean-slide" style={{ animationDelay: '0.4s' }}>
            {clientsSectionCopy.description}
          </p>
        </div>

        {/* Clients Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 items-center">
          {clientsSectionCopy.clients.map((client, index) => (
            <div 
              key={index} 
              className="group text-center clean-slide"
              style={{ animationDelay: `${0.6 + index * 0.1}s` }}
            >
              {/* Client Logo Placeholder */}
              <div className="mb-6 relative">
                <div className="w-32 h-16 mx-auto bg-gray-100 border border-gray-200 flex items-center justify-center group-hover:border-gray-300 transition-all duration-300">
                  <div className="text-xs font-light text-gray-400 tracking-widest">
                    {client.name}
                  </div>
                </div>
                
                {/* Geometric accent */}
                <div className="absolute -top-2 -right-2 w-4 h-4 border border-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 geometric-float" />
              </div>
              
              {/* Client Info */}
              <div className="space-y-2">
                <h4 className="text-sm font-medium text-gray-900 tracking-wide">
                  {client.name}
                </h4>
                <p className="text-xs text-gray-500 font-light tracking-widest uppercase">
                  {client.category}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-24 pt-16 border-t border-gray-200">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "50+", label: "TRUSTED CLIENTS" },
              { number: "15+", label: "COUNTRIES" },
              { number: "98%", label: "SATISFACTION" },
              { number: "10+", label: "YEARS" }
            ].map((stat, index) => (
              <div 
                key={index} 
                className="clean-slide"
                style={{ animationDelay: `${1.2 + index * 0.1}s` }}
              >
                <div className="text-3xl md:text-4xl font-extralight text-blue-500 mb-2 swiss-fade">
                  {stat.number}
                </div>
                <div className="text-xs text-gray-500 font-light tracking-widest uppercase">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Geometric Elements */}
        <div className="absolute top-20 right-8 hidden lg:block">
          <div className="w-20 h-20 border border-gray-200 geometric-float" />
        </div>
        
        <div className="absolute bottom-20 left-8 hidden lg:block">
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
        
        .clean-slide { animation: clean-slide 0.8s ease-out forwards; }
        .type-reveal { animation: type-reveal 2s ease-out forwards; }
        .swiss-fade { animation: swiss-fade 4s ease-in-out infinite; }
        .geometric-float { animation: geometric-float 8s ease-in-out infinite; }
      `}</style>
    </section>
  );
}