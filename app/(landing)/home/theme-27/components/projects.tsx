"use client";

import { useState } from "react";
import { brutalistCopy } from "../copy";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("ALL");
  
  const categories = ["ALL", "BRANDING", "WEB", "STRATEGY", "ECOMMERCE"];
  
  const filteredProjects = activeFilter === "ALL" 
    ? brutalistCopy.projects 
    : brutalistCopy.projects.filter(project => project.category === activeFilter);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'COMPLETED':
        return 'bg-green-600';
      case 'LIVE':
        return 'bg-blue-600';
      case 'IN PROGRESS':
        return 'bg-orange-600';
      default:
        return 'bg-gray-600';
    }
  };

  return (
    <section className="py-32 bg-gray-100 relative overflow-hidden">
      {/* Background Geometric Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-40 h-8 bg-black opacity-10 transform -rotate-12"></div>
        <div className="absolute top-40 right-10 w-20 h-60 bg-orange-600 opacity-10"></div>
        <div className="absolute bottom-40 left-10 w-32 h-32 bg-red-600 opacity-10 transform rotate-45"></div>
        <div className="absolute bottom-20 right-20 w-60 h-12 bg-gray-900 opacity-10"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <div>
              <h2 className="text-5xl md:text-7xl font-black uppercase text-black mb-4">
                PROJECTS
              </h2>
              <div className="w-32 h-2 bg-orange-600"></div>
            </div>
            
            <p className="text-xl font-bold text-gray-700 max-w-2xl">
              Raw results. No fluff. Each project built with purpose and precision.
            </p>
          </div>
        </div>

        {/* Category Filters */}
        <div className="mb-12">
          <div className="flex flex-wrap gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`relative group px-8 py-4 font-bold uppercase tracking-wider transition-all duration-300 ${
                  activeFilter === category
                    ? 'bg-black text-white'
                    : 'bg-white text-black border-2 border-black hover:bg-black hover:text-white'
                }`}
              >
                <span className="relative z-10">{category}</span>
                {activeFilter === category && (
                  <div className="absolute inset-0 bg-orange-600 transform translate-x-1 translate-y-1 -z-10"></div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="group relative transform transition-all duration-500 hover:-translate-y-2"
            >
              {/* Main Project Card */}
              <div className="bg-white border-4 border-black relative overflow-hidden">
                {/* Project Image Placeholder */}
                <div className="h-48 bg-gray-200 relative">
                  {/* Geometric Pattern Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent"></div>
                  <div className="absolute top-4 left-4 w-8 h-8 bg-orange-600 transform rotate-45"></div>
                  <div className="absolute bottom-4 right-4 w-12 h-12 bg-red-600"></div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 right-4">
                    <span className="bg-black text-white px-3 py-1 text-xs font-bold uppercase tracking-wider">
                      {project.category}
                    </span>
                  </div>
                  
                  {/* Status Indicator */}
                  <div className="absolute bottom-4 left-4">
                    <div className="flex items-center gap-2">
                      <div className={`w-3 h-3 ${getStatusColor(project.status)}`}></div>
                      <span className="text-xs font-bold text-white bg-black px-2 py-1">
                        {project.status}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  {/* Project Title */}
                  <h3 className="text-2xl font-black uppercase text-black mb-3 leading-tight">
                    {project.title}
                  </h3>
                  
                  {/* Project Description */}
                  <p className="text-base font-bold text-gray-700 mb-4 leading-tight">
                    {project.description}
                  </p>
                  
                  {/* Project Year */}
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-gray-500 uppercase tracking-wider">
                      {project.year}
                    </span>
                    
                    {/* View Project Button */}
                    <button className="group/btn relative bg-black text-white px-4 py-2 text-sm font-bold uppercase hover:bg-orange-600 transition-colors duration-300">
                      VIEW
                      <div className="absolute inset-0 bg-orange-600 transform translate-x-1 translate-y-1 -z-10 group-hover/btn:translate-x-0 group-hover/btn:translate-y-0 transition-transform duration-300"></div>
                    </button>
                  </div>
                  
                  {/* Decorative Elements */}
                  <div className="absolute top-2 left-2 w-4 h-4 bg-black"></div>
                  <div className="absolute bottom-2 right-2 w-4 h-4 bg-orange-600"></div>
                </div>
              </div>

              {/* Shadow Effect */}
              <div className="absolute inset-0 bg-black transform translate-x-2 translate-y-2 -z-10 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform duration-300"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <div className="inline-block">
            <h3 className="text-4xl font-black uppercase text-black mb-6">
              READY TO START YOUR PROJECT?
            </h3>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group relative bg-black text-white px-12 py-6 text-lg font-bold uppercase tracking-wider hover:bg-orange-600 transition-all duration-300">
                <span className="relative z-10">VIEW ALL WORK</span>
                <div className="absolute inset-0 bg-orange-600 transform translate-x-2 translate-y-2 -z-10 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-300"></div>
              </button>
              
              <button className="group relative border-4 border-black text-black px-12 py-6 text-lg font-bold uppercase tracking-wider hover:bg-black hover:text-white transition-all duration-300">
                <span className="relative z-10">START PROJECT</span>
                <div className="absolute inset-0 bg-red-600 transform translate-x-2 translate-y-2 -z-10 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-300"></div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 