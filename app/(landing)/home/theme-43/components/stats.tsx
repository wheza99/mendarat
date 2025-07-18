'use client';

import { statsSectionCopy } from '../copy';

export default function Stats() {
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
              {statsSectionCopy.title}
            </h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto mb-6 type-reveal" />
            <h3 className="text-xl md:text-2xl font-light text-gray-600 tracking-wide clean-slide" style={{ animationDelay: '0.2s' }}>
              {statsSectionCopy.subtitle}
            </h3>
          </div>
          <p className="text-lg text-gray-500 font-light max-w-3xl mx-auto leading-relaxed clean-slide" style={{ animationDelay: '0.4s' }}>
            {statsSectionCopy.description}
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {statsSectionCopy.stats.map((stat, index) => (
            <div 
              key={index}
              className="group text-center clean-slide"
              style={{ animationDelay: `${0.6 + index * 0.2}s` }}
            >
              {/* Stat Visual */}
              <div className="mb-8 relative">
                {/* Main stat container */}
                <div className="w-32 h-32 mx-auto border-2 border-gray-200 relative flex items-center justify-center group-hover:border-blue-500/30 transition-colors duration-300">
                  {/* Stat number */}
                  <div className="text-3xl md:text-4xl font-extralight text-blue-500 swiss-fade" style={{ animationDelay: `${0.8 + index * 0.2}s` }}>
                    {stat.number}
                  </div>
                  
                  {/* Inner geometric accent */}
                  <div className="absolute inset-4 border border-gray-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300 geometric-float" />
                </div>
                
                {/* Floating accents */}
                <div className="absolute -top-2 -right-2 w-6 h-6 border border-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 geometric-float" style={{ animationDelay: '0.5s' }} />
                <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 geometric-float" style={{ animationDelay: '1s' }} />
              </div>

              {/* Stat Content */}
              <div className="space-y-3">
                <h3 className="text-sm font-medium text-gray-900 tracking-widest uppercase">
                  {stat.label}
                </h3>
                <p className="text-gray-600 font-light text-sm leading-relaxed">
                  {stat.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Metrics */}
        <div className="mt-24 pt-16 border-t border-gray-200">
          <div className="text-center mb-12 clean-slide" style={{ animationDelay: '1.4s' }}>
            <h3 className="text-2xl font-light text-gray-900 tracking-wide mb-4">
              METHODOLOGY METRICS
            </h3>
            <p className="text-gray-600 font-light max-w-2xl mx-auto">
              Swiss design principles measured through quantifiable excellence.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
            {[
              { metric: "100%", label: "GRID BASED" },
              { metric: "95%", label: "MINIMAL" },
              { metric: "90%", label: "FUNCTIONAL" },
              { metric: "98%", label: "PRECISE" },
              { metric: "92%", label: "TIMELESS" },
              { metric: "96%", label: "CLEAN" }
            ].map((item, index) => (
              <div 
                key={index} 
                className="text-center clean-slide"
                style={{ animationDelay: `${1.6 + index * 0.1}s` }}
              >
                <div className="text-2xl font-extralight text-gray-900 mb-2">
                  {item.metric}
                </div>
                <div className="text-xs text-gray-500 font-light tracking-widest uppercase">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Progress Indicators */}
        <div className="mt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              { label: "DESIGN PRECISION", percentage: 98 },
              { label: "CLIENT SATISFACTION", percentage: 96 },
              { label: "PROJECT COMPLETION", percentage: 100 },
              { label: "SWISS METHODOLOGY", percentage: 95 }
            ].map((progress, index) => (
              <div 
                key={index} 
                className="clean-slide"
                style={{ animationDelay: `${2 + index * 0.1}s` }}
              >
                <div className="flex justify-between items-center mb-3">
                  <span className="text-sm font-light text-gray-900 tracking-wide">
                    {progress.label}
                  </span>
                  <span className="text-sm font-light text-blue-500">
                    {progress.percentage}%
                  </span>
                </div>
                <div className="w-full h-1 bg-gray-200 relative">
                  <div 
                    className="h-full bg-blue-500 transition-all duration-1000 ease-out"
                    style={{ 
                      width: `${progress.percentage}%`,
                      animationDelay: `${2.2 + index * 0.1}s`
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center clean-slide" style={{ animationDelay: '2.6s' }}>
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-light text-gray-900 tracking-wide mb-6">
              EXPERIENCE SWISS PRECISION
            </h3>
            <p className="text-gray-600 font-light mb-8">
              Join the companies that trust our methodical approach to design excellence.
            </p>
            <button className="px-12 py-4 bg-gray-900 text-white font-light tracking-wide hover:bg-gray-800 transition-all duration-300 minimal-pulse">
              START YOUR PROJECT
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