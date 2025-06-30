"use client";

import { servicesSectionCopy } from "../copy";

export default function Services() {
  return (
    <section className="py-20 bg-gradient-to-b from-black to-purple-900/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            <span className="bg-gradient-to-r from-cyan-400 via-pink-500 to-purple-500 bg-clip-text text-transparent">
              {servicesSectionCopy.title}
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            {servicesSectionCopy.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesSectionCopy.services.map((service, index) => (
            <div key={index} className="group relative p-8 rounded-2xl bg-black/70 border border-cyan-400/30 hover:border-pink-500/60 transition-all duration-300 hover:scale-105">
              <div className="text-4xl mb-6">{service.icon}</div>
              <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-gray-300 leading-relaxed">{service.description}</p>
              
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-cyan-400/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 