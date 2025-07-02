"use client";

import { useState, useEffect, useRef } from "react";
import { cosmicCopy } from "../copy";

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState("ALL MISSIONS");
  const [filteredProjects, setFilteredProjects] = useState(cosmicCopy.projects);
  const sectionRef = useRef<HTMLElement>(null);

  const categories = ["ALL MISSIONS", "DEEP SPACE", "PLANETARY", "TECHNOLOGY", "MAPPING", "RESEARCH"];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (activeFilter === "ALL MISSIONS") {
      setFilteredProjects(cosmicCopy.projects);
    } else {
      setFilteredProjects(
        cosmicCopy.projects.filter(project => project.category === activeFilter)
      );
    }
  }, [activeFilter]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "ACTIVE":
        return { bg: "bg-green-500", text: "text-green-400" };
      case "COMPLETED":
        return { bg: "bg-blue-500", text: "text-blue-400" };
      case "IN DEVELOPMENT":
        return { bg: "bg-yellow-500", text: "text-yellow-400" };
      default:
        return { bg: "bg-purple-500", text: "text-purple-400" };
    }
  };

  return (
    <section ref={sectionRef} className="py-32 bg-gradient-to-b from-black via-purple-950/50 to-indigo-950 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className={`transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}>
            <h2 className="text-5xl md:text-6xl font-black uppercase text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 mb-6">
              SPACE MISSIONS
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto mb-8"></div>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Explore our ongoing and completed missions across the galaxy.
            </p>
          </div>
        </div>

        <div className={`mb-16 transform transition-all duration-1000 delay-300 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}>
          <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-700 p-6">
            <h3 className="text-lg font-bold text-cyan-400 uppercase tracking-wider mb-6 text-center">
              🚀 MISSION CONTROL PANEL 🚀
            </h3>
            
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  className={`px-6 py-3 text-sm font-bold uppercase tracking-wider border-2 transition-all duration-300 ${
                    activeFilter === category
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-500 border-transparent text-white'
                      : 'border-gray-600 text-gray-400 hover:border-cyan-400 hover:text-cyan-400'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => {
            const statusColors = getStatusColor(project.status);
            
            return (
              <div
                key={index}
                className={`transform transition-all duration-1000 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                }`}
              >
                <div className="group relative bg-gray-900/30 backdrop-blur-sm border border-gray-700 hover:border-cyan-400 p-6 h-full transition-all duration-500">
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className={`px-3 py-1 text-xs font-bold uppercase tracking-wider ${statusColors.bg} text-black rounded-full`}>
                        {project.status}
                      </span>
                      <span className="text-sm text-gray-400 font-mono">
                        {project.year}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-black text-white uppercase tracking-wider mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                    
                    <div className="flex items-center gap-2 mb-4">
                      <span className="px-2 py-1 text-xs font-bold bg-purple-500/20 text-purple-400 rounded">
                        {project.category}
                      </span>
                      <span className="text-xs text-gray-400 font-mono">
                        {project.galaxy}
                      </span>
                    </div>
                  </div>

                  <p className="text-gray-300 leading-relaxed mb-6">
                    {project.description}
                  </p>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-400">Distance:</span>
                      <span className={`font-bold ${statusColors.text}`}>
                        {project.distance}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
} 