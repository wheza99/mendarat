'use client';

import { testimonialsSectionCopy } from '../copy';

export default function Testimonials() {
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
              {testimonialsSectionCopy.title}
            </h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto mb-6 type-reveal" />
            <h3 className="text-xl md:text-2xl font-light text-gray-600 tracking-wide clean-slide" style={{ animationDelay: '0.2s' }}>
              {testimonialsSectionCopy.subtitle}
            </h3>
          </div>
          <p className="text-lg text-gray-500 font-light max-w-3xl mx-auto leading-relaxed clean-slide" style={{ animationDelay: '0.4s' }}>
            {testimonialsSectionCopy.description}
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonialsSectionCopy.testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="group bg-white border border-gray-200 p-8 hover:border-gray-300 hover:shadow-lg transition-all duration-300 clean-slide"
              style={{ animationDelay: `${0.6 + index * 0.2}s` }}
            >
              {/* Quote Icon */}
              <div className="mb-6">
                <div className="w-12 h-12 border border-gray-200 flex items-center justify-center group-hover:border-blue-500/30 transition-colors duration-300">
                  <svg className="w-6 h-6 text-gray-400 group-hover:text-blue-500 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                  </svg>
                </div>
              </div>

              {/* Quote */}
              <blockquote className="text-gray-700 font-light leading-relaxed mb-8 text-lg">
                "{testimonial.quote}"
              </blockquote>

              {/* Author Info */}
              <div className="flex items-center">
                {/* Author Photo */}
                <div className="w-12 h-12 border border-gray-200 mr-4 flex-shrink-0">
                  <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                    <div className="text-gray-400 text-xs font-light">
                      PHOTO
                    </div>
                  </div>
                </div>

                {/* Author Details */}
                <div>
                  <div className="text-sm font-medium text-gray-900 tracking-wide mb-1">
                    {testimonial.author}
                  </div>
                  <div className="text-xs text-blue-500 font-light tracking-widest uppercase mb-1">
                    {testimonial.role}
                  </div>
                  <div className="text-xs text-gray-500 font-light">
                    {testimonial.company}
                  </div>
                </div>
              </div>

              {/* Geometric accent */}
              <div className="absolute top-4 right-4 w-6 h-6 border border-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300 geometric-float" />
            </div>
          ))}
        </div>

        {/* Client Logos Section */}
        <div className="mt-24 pt-16 border-t border-gray-200">
          <div className="text-center mb-12 clean-slide" style={{ animationDelay: '1.4s' }}>
            <h3 className="text-2xl font-light text-gray-900 tracking-wide mb-4">
              TRUSTED BY LEADING BRANDS
            </h3>
            <p className="text-gray-600 font-light">
              Companies that value Swiss design excellence.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            {[
              "SWISS BANK",
              "MINIMAL TECH", 
              "CLEAN STUDIO",
              "GRID SYSTEMS"
            ].map((client, index) => (
              <div 
                key={index} 
                className="text-center clean-slide"
                style={{ animationDelay: `${1.6 + index * 0.1}s` }}
              >
                <div className="w-32 h-16 mx-auto border border-gray-200 flex items-center justify-center hover:border-gray-300 transition-colors duration-300">
                  <div className="text-xs font-light text-gray-400 tracking-widest">
                    {client}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonial Stats */}
        <div className="mt-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "98%", label: "CLIENT SATISFACTION" },
              { number: "150+", label: "PROJECTS COMPLETED" },
              { number: "25+", label: "AWARDS WON" },
              { number: "10+", label: "YEARS EXPERIENCE" }
            ].map((stat, index) => (
              <div 
                key={index} 
                className="clean-slide"
                style={{ animationDelay: `${2 + index * 0.1}s` }}
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

        {/* CTA Section */}
        <div className="mt-20 text-center clean-slide" style={{ animationDelay: '2.4s' }}>
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-light text-gray-900 tracking-wide mb-6">
              READY TO JOIN THEM?
            </h3>
            <p className="text-gray-600 font-light mb-8">
              Experience Swiss design precision for your next project.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <button className="px-12 py-4 bg-gray-900 text-white font-light tracking-wide hover:bg-gray-800 transition-all duration-300 minimal-pulse">
                START PROJECT
              </button>
              <button className="px-12 py-4 border border-gray-300 text-gray-700 font-light tracking-wide hover:border-gray-900 hover:text-gray-900 transition-all duration-300">
                VIEW PORTFOLIO
              </button>
            </div>
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