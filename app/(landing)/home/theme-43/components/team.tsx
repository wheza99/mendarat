'use client';

import { teamSectionCopy } from '../copy';

export default function Team() {
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
              {teamSectionCopy.title}
            </h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto mb-6 type-reveal" />
            <h3 className="text-xl md:text-2xl font-light text-gray-600 tracking-wide clean-slide" style={{ animationDelay: '0.2s' }}>
              {teamSectionCopy.subtitle}
            </h3>
          </div>
          <p className="text-lg text-gray-500 font-light max-w-3xl mx-auto leading-relaxed clean-slide" style={{ animationDelay: '0.4s' }}>
            {teamSectionCopy.description}
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {teamSectionCopy.members.map((member, index) => (
            <div 
              key={index}
              className="group text-center clean-slide"
              style={{ animationDelay: `${0.6 + index * 0.2}s` }}
            >
              {/* Member Photo */}
              <div className="mb-8 relative">
                <div className="w-48 h-48 mx-auto border border-gray-200 relative overflow-hidden group-hover:border-blue-500/30 transition-colors duration-300">
                  {/* Photo placeholder */}
                  <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                    <div className="text-gray-400 text-sm font-light tracking-widest">
                      PHOTO
                    </div>
                  </div>
                  
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Geometric accents */}
                  <div className="absolute -top-2 -right-2 w-6 h-6 border border-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 geometric-float" />
                  <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 geometric-float" style={{ animationDelay: '0.5s' }} />
                </div>
              </div>

              {/* Member Info */}
              <div className="space-y-4 mb-8">
                <h3 className="text-xl font-medium text-gray-900 tracking-wide">
                  {member.name}
                </h3>
                <p className="text-sm text-blue-500 font-light tracking-widest uppercase">
                  {member.role}
                </p>
                <p className="text-gray-600 font-light leading-relaxed">
                  {member.bio}
                </p>
              </div>

              {/* Social Links */}
              <div className="flex justify-center space-x-4">
                {Object.entries(member.social).map(([platform, link], socialIndex) => (
                  <a 
                    key={socialIndex}
                    href={link}
                    className="w-10 h-10 border border-gray-200 flex items-center justify-center hover:border-blue-500 hover:text-blue-500 transition-colors duration-300 group/social"
                  >
                    {platform === 'linkedin' && (
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    )}
                    {platform === 'behance' && (
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14H15.97c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3-.312-3h-3.272v3zm3.391 3h-3.391v3.016h3.341c3.055 0 2.868-3.016.05-3.016z"/>
                      </svg>
                    )}
                    {platform === 'dribbble' && (
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.953-6.384-.438 1.34 3.684 1.887 6.684 1.992 7.308 2.3-1.555 3.936-4.02 4.395-6.87zm-6.115 7.808c-.153-.9-.75-4.032-2.19-7.77l-.066.02c-5.79 2.015-7.86 6.025-8.04 6.4 1.73 1.358 3.92 2.166 6.29 2.166 1.42 0 2.77-.29 4-.816zm-11.62-2.58c.232-.4 3.045-5.055 8.332-6.765.135-.045.27-.084.405-.12-.26-.585-.54-1.167-.832-1.74C7.17 11.775 2.206 11.71 1.756 11.7l-.004.312c0 2.633.998 5.037 2.634 6.855zm-2.42-8.955c.46.008 4.683.026 9.477-1.248-1.698-3.018-3.53-5.558-3.8-5.928-2.868 1.35-5.01 3.99-5.676 7.17zM9.6 2.052c.282.38 2.145 2.914 3.822 6 3.645-1.365 5.19-3.44 5.373-3.702-1.81-1.61-4.19-2.586-6.795-2.586-.825 0-1.63.1-2.4.285zm10.335 3.483c-.218.29-1.935 2.493-5.724 4.04.24.49.47.985.68 1.486.08.18.15.36.22.53 3.41-.43 6.8.26 7.14.33-.02-2.42-.88-4.64-2.31-6.38z"/>
                      </svg>
                    )}
                    
                    {/* Geometric accent on hover */}
                    <div className="absolute inset-0 border border-blue-500/20 opacity-0 group-hover/social:opacity-100 transition-opacity duration-300 geometric-float" />
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Team Philosophy */}
        <div className="mt-24 pt-16 border-t border-gray-200">
          <div className="text-center mb-16 clean-slide" style={{ animationDelay: '1.4s' }}>
            <h3 className="text-2xl font-light text-gray-900 tracking-wide mb-6">
              OUR PHILOSOPHY
            </h3>
            <p className="text-lg text-gray-600 font-light max-w-3xl mx-auto leading-relaxed">
              Swiss design is not just our methodology—it's our shared passion. Every team member 
              brings precision, clarity, and dedication to functional beauty.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                principle: "PRECISION",
                description: "Every detail matters. We measure twice, cut once."
              },
              {
                principle: "COLLABORATION",
                description: "Great design emerges from unified vision and shared purpose."
              },
              {
                principle: "EXCELLENCE",
                description: "We don't just meet standards—we set them."
              }
            ].map((item, index) => (
              <div 
                key={index} 
                className="text-center clean-slide"
                style={{ animationDelay: `${1.6 + index * 0.2}s` }}
              >
                <div className="w-16 h-16 border border-gray-200 mx-auto mb-6 flex items-center justify-center">
                  <div className="w-8 h-8 bg-blue-500/10" />
                </div>
                <h4 className="text-sm font-medium text-gray-900 tracking-widest uppercase mb-3">
                  {item.principle}
                </h4>
                <p className="text-gray-600 font-light text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Join Team CTA */}
        <div className="mt-20 text-center clean-slide" style={{ animationDelay: '2.2s' }}>
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-light text-gray-900 tracking-wide mb-6">
              JOIN OUR TEAM
            </h3>
            <p className="text-gray-600 font-light mb-8">
              Are you passionate about Swiss design principles? We're always looking for talented individuals.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <button className="px-12 py-4 bg-gray-900 text-white font-light tracking-wide hover:bg-gray-800 transition-all duration-300 minimal-pulse">
                VIEW OPENINGS
              </button>
              <button className="px-12 py-4 border border-gray-300 text-gray-700 font-light tracking-wide hover:border-gray-900 hover:text-gray-900 transition-all duration-300">
                SEND PORTFOLIO
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
        .geometric-float { animation: geometric-float 8s ease-in-out infinite; }
        .minimal-pulse { animation: minimal-pulse 2s ease-in-out infinite; }
      `}</style>
    </section>
  );
}