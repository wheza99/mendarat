"use client";

import React from 'react';
import copy from '../copy';

export default function Stats() {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-400 mb-6">
            {copy.stats.title}
          </h2>
          <p className="text-lg text-gray-300">{copy.stats.subtitle}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {copy.stats.achievements.map((stat, index) => (
            <div key={index} className="text-center p-6 border border-purple-500 bg-purple-500/10">
              <div className="text-4xl font-black text-cyan-400 mb-2">
                {stat.number}{stat.suffix}
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{stat.label}</h3>
              <p className="text-sm text-gray-400">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 