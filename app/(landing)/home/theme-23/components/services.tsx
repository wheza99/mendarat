"use client";

import React from 'react';
import copy from '../copy';

export default function Services() {
  return (
    <section className="py-20 bg-gradient-to-br from-white to-green-50 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-green-900 mb-6">
              {copy.services.title}
            </h2>
            <p className="text-lg text-green-700 max-w-3xl mx-auto">
              {copy.services.subtitle}
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {copy.services.services.map((service, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-green-100 hover:border-green-200 hover:scale-105"
              >
                {/* Service Icon */}
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-3xl mb-6 group-hover:bg-green-200 transition-colors duration-300">
                  {service.icon}
                </div>

                {/* Service Content */}
                <h3 className="text-xl font-bold text-green-800 mb-4">
                  {service.title}
                </h3>
                <p className="text-green-600 leading-relaxed">
                  {service.description}
                </p>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
