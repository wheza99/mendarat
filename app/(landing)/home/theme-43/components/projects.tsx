'use client';

import { projectsSectionCopy } from '../copy';

export default function Projects() {
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
              {projectsSectionCopy.title}
            </h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto mb-6 type-reveal" />
            <h3 className="text-xl md:text-2xl font-light text-gray-600 tracking-wide clean-slide" style={{ animationDelay: '0.2s' }}>
              {projectsSectionCopy.subtitle}
            </h3>
          </div>
          <p className="text-lg text-gray-500 font-light max-w-3xl mx-auto leading-relaxed clean-slide" style={{ animationDelay: '0.4s' }}>
            {projectsSectionCopy.description}
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projectsSectionCopy.projects.map((project, index) => (
            <div 
              key={project.id}
              className="group bg-white border border-gray-200 hover:border-gray-300 transition-all duration-300 clean-slide"
              style={{ animationDelay: `${0.6 + index * 0.2}s` }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden aspect-[4/3]">
                <div className="w-full h-full bg-gray-100 flex items-center justify-center relative">
                  {/* Image placeholder */}
                  <div className="text-gray-400 text-sm font-light tracking-widest">
                    PROJECT IMAGE
                  </div>
                  
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-blue-500/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-white text-center">
                      <div className="text-sm font-light tracking-widest mb-2">VIEW PROJECT</div>
                      <div className="w-8 h-px bg-white mx-auto" />
                    </div>
                  </div>
                  
                  {/* Geometric accent */}
                  <div className="absolute top-4 right-4 w-6 h-6 border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 geometric-float" />
                </div>
              </div>

              {/* Project Info */}
              <div className="p-8">
                {/* Category and Year */}
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xs text-blue-500 font-light tracking-widest uppercase">
                    {project.category}
                  </span>
                  <span className="text-xs text-gray-400 font-light">
                    {project.year}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-medium text-gray-900 tracking-wide mb-3">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 font-light leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-3 py-1 text-xs text-gray-600 border border-gray-200 font-light tracking-wide"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* View Project Link */}
                <button className="group/btn flex items-center text-sm text-gray-900 font-light tracking-wide hover:text-blue-500 transition-colors duration-300">
                  <span>VIEW PROJECT</span>
                  <svg className="w-4 h-4 ml-2 transform group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects */}
        <div className="text-center mt-16 clean-slide" style={{ animationDelay: '1.4s' }}>
          <button className="px-12 py-4 border border-gray-300 text-gray-700 font-light tracking-wide hover:border-gray-900 hover:text-gray-900 transition-all duration-300">
            VIEW ALL PROJECTS
          </button>
        </div>

        {/* Project Stats */}
        <div className="mt-20 pt-16 border-t border-gray-200">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "150+", label: "PROJECTS" },
              { number: "25+", label: "AWARDS" },
              { number: "50+", label: "CLIENTS" },
              { number: "10+", label: "YEARS" }
            ].map((stat, index) => (
              <div 
                key={index} 
                className="clean-slide"
                style={{ animationDelay: `${1.8 + index * 0.1}s` }}
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
        
        .clean-slide { animation: clean-slide 0.8s ease-out forwards; }
        .type-reveal { animation: type-reveal 2s ease-out forwards; }
        .swiss-fade { animation: swiss-fade 4s ease-in-out infinite; }
        .geometric-float { animation: geometric-float 8s ease-in-out infinite; }
      `}</style>
    </section>
  );
}