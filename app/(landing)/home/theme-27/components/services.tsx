"use client";

import { useState } from "react";
import { brutalistCopy } from "../copy";

export default function Services() {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  return (
    <section className="py-32 bg-white relative overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-8 h-full">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="border-r border-black"></div>
          ))}
        </div>
        <div className="absolute inset-0">
          <div className="grid grid-rows-8 h-full">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="border-b border-black"></div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="mb-20">
          <div className="flex items-center gap-8 mb-8">
            <div className="w-16 h-16 bg-black"></div>
            <h2 className="text-5xl md:text-7xl font-black uppercase text-black">
              SERVICES
            </h2>
            <div className="flex-1 h-2 bg-black"></div>
          </div>
          
          <p className="text-2xl font-bold text-gray-700 max-w-3xl">
            Raw, functional solutions. No unnecessary complexity. Just results.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {brutalistCopy.services.map((service, index) => (
            <div
              key={index}
              className="group relative cursor-pointer"
              onMouseEnter={() => setExpandedCard(index)}
              onMouseLeave={() => setExpandedCard(null)}
            >
              {/* Main Service Card */}
              <div className="bg-gray-100 border-4 border-black p-8 relative overflow-hidden">
                {/* Color Accent Corner */}
                <div className={`absolute top-0 right-0 w-20 h-20 ${
                  index === 0 ? 'bg-orange-600' : 
                  index === 1 ? 'bg-red-600' : 
                  index === 2 ? 'bg-black' : 'bg-gray-900'
                } transform rotate-45 translate-x-10 -translate-y-10`}></div>
                
                {/* Service Icon */}
                <div className="mb-6">
                  <div className="w-16 h-16 bg-black flex items-center justify-center text-white text-2xl font-bold">
                    {service.icon}
                  </div>
                </div>

                {/* Service Title */}
                <h3 className="text-3xl md:text-4xl font-black uppercase text-black mb-4 leading-tight">
                  {service.title}
                </h3>

                {/* Service Description */}
                <p className="text-lg font-bold text-gray-800 mb-6 leading-tight">
                  {service.description}
                </p>

                {/* Features List - Expanded State */}
                <div className={`overflow-hidden transition-all duration-500 ${
                  expandedCard === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="border-t-2 border-black pt-6">
                    <h4 className="text-sm font-bold uppercase tracking-wider text-black mb-4">
                      INCLUDES:
                    </h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-3">
                          <div className={`w-2 h-2 ${
                            index === 0 ? 'bg-orange-600' : 
                            index === 1 ? 'bg-red-600' : 
                            index === 2 ? 'bg-black' : 'bg-gray-900'
                          }`}></div>
                          <span className="text-base font-bold text-gray-800">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Geometric Decorations */}
                <div className="absolute bottom-4 left-4 flex gap-2">
                  <div className={`w-3 h-3 ${
                    index === 0 ? 'bg-orange-600' : 
                    index === 1 ? 'bg-red-600' : 
                    index === 2 ? 'bg-black' : 'bg-gray-900'
                  }`}></div>
                  <div className={`w-3 h-3 ${
                    index === 0 ? 'bg-orange-600' : 
                    index === 1 ? 'bg-red-600' : 
                    index === 2 ? 'bg-black' : 'bg-gray-900'
                  }`}></div>
                  <div className={`w-3 h-3 ${
                    index === 0 ? 'bg-orange-600' : 
                    index === 1 ? 'bg-red-600' : 
                    index === 2 ? 'bg-black' : 'bg-gray-900'
                  }`}></div>
                </div>

                {/* Hover Indicator */}
                <div className={`absolute top-4 right-4 text-black font-bold text-sm transition-opacity duration-300 ${
                  expandedCard === index ? 'opacity-100' : 'opacity-0'
                }`}>
                  EXPANDED
                </div>
              </div>

              {/* Shadow Effect */}
              <div className={`absolute inset-0 ${
                index === 0 ? 'bg-orange-600' : 
                index === 1 ? 'bg-red-600' : 
                index === 2 ? 'bg-black' : 'bg-gray-900'
              } transform translate-x-3 translate-y-3 -z-10 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform duration-300`}></div>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-20 text-center">
          <div className="inline-block">
            <h3 className="text-3xl font-black uppercase text-black mb-4">
              NEED SOMETHING ELSE?
            </h3>
            <p className="text-xl font-bold text-gray-700 mb-8">
              We build custom solutions. No templates. No shortcuts.
            </p>
            
            <button className="group relative bg-black text-white px-12 py-6 text-lg font-bold uppercase tracking-wider hover:bg-orange-600 transition-all duration-300">
              <span className="relative z-10">DISCUSS PROJECT</span>
              <div className="absolute inset-0 bg-orange-600 transform translate-x-2 translate-y-2 -z-10 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-300"></div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
} 