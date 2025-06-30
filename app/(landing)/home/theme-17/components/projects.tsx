"use client";

import { useState, useEffect } from "react";
import { projectsSectionCopy } from "../copy";

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeProject, setActiveProject] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    const element = document.getElementById('projects-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="projects-section"
      className="relative py-20 lg:py-32 overflow-hidden bg-gradient-to-br from-white via-slate-50/50 to-emerald-50/30"
    >
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_25%_25%,theme(colors.emerald.200/20)_0%,transparent_50%)]"></div>
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_75%_25%,theme(colors.sky.200/20)_0%,transparent_50%)]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div 
            className={`transform transition-all duration-1000 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
              {projectsSectionCopy.title}
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
              {projectsSectionCopy.subtitle}
            </p>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
          {projectsSectionCopy.projects.map((project, index) => (
            <div
              key={index}
              className={`group relative transform transition-all duration-1000 ${
                isVisible 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-16 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 0.2}s` }}
              onMouseEnter={() => setActiveProject(index)}
              onMouseLeave={() => setActiveProject(null)}
            >
              
              {/* Project Card */}
              <div className="relative bg-white/40 backdrop-blur-xl border border-white/50 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 group-hover:scale-105">
                
                {/* Project Image */}
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Image Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 px-3 py-1 bg-white/30 backdrop-blur-md border border-white/50 rounded-full text-xs font-semibold text-slate-700">
                    {project.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-slate-800 mb-3 group-hover:text-emerald-700 transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-slate-600 text-base leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className="px-3 py-1 bg-gradient-to-r from-emerald-100/80 to-sky-100/80 backdrop-blur-sm border border-white/50 text-slate-700 text-xs font-medium rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <button className="px-10 py-4 bg-white/40 backdrop-blur-xl border border-white/60 text-slate-700 font-semibold text-lg rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
            {projectsSectionCopy.cta}
          </button>
        </div>
      </div>
    </section>
  );
} 