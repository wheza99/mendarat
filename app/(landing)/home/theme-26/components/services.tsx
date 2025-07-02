"use client";

import React from 'react';
import copy from '../copy';

export default function Services() {
  return (
    <section className="py-20 bg-gradient-to-b from-black to-purple-900/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-400 mb-6">
            {copy.services.title}
          </h2>
          <p className="text-lg text-gray-300">{copy.services.subtitle}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {copy.services.services.map((service, index) => (
            <div key={index} className="p-6 border border-cyan-400 bg-cyan-500/10 hover:bg-cyan-500/20 transition-all duration-300">
              <div className="text-4xl mb-4">{service.icon}</div>
              <div className="text-sm text-yellow-400 font-bold mb-2">{service.category}</div>
              <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-gray-300 mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, i) => (
                  <li key={i} className="text-sm text-gray-400 flex items-center">
                    <span className="w-2 h-2 bg-pink-400 rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 