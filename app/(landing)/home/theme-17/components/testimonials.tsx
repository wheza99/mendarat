"use client";

import { useState, useEffect } from "react";
import { testimonialsSectionCopy } from "../copy";

export default function Testimonials() {
  const [isVisible, setIsVisible] = useState(false);

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

    const element = document.getElementById('testimonials-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="testimonials-section"
      className="relative py-20 lg:py-32 overflow-hidden bg-gradient-to-b from-white via-slate-50/30 to-emerald-50/20"
    >
      
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-32 right-32 w-64 h-64 bg-gradient-to-r from-emerald-200/30 to-sky-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-32 left-32 w-48 h-48 bg-gradient-to-r from-sky-200/30 to-amber-200/30 rounded-full blur-2xl animate-bounce" style={{ animationDuration: '6s' }}></div>
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
              {testimonialsSectionCopy.title}
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              {testimonialsSectionCopy.subtitle}
            </p>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonialsSectionCopy.testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`group relative transform transition-all duration-1000 ${
                isVisible 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-16 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 0.2}s` }}
            >
              
              {/* Testimonial Card */}
              <div className="relative bg-white/40 backdrop-blur-xl border border-white/50 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 group-hover:scale-105 group-hover:bg-white/50 h-full flex flex-col">
                
                {/* Quote Icon */}
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-r from-emerald-400 to-sky-400 rounded-full flex items-center justify-center shadow-lg">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                  </svg>
                </div>

                {/* Rating Stars */}
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, starIndex) => (
                    <svg 
                      key={starIndex}
                      className="w-5 h-5 text-amber-400 fill-current"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  ))}
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-slate-700 text-lg leading-relaxed mb-6 flex-grow italic">
                  "{testimonial.testimonial}"
                </blockquote>

                {/* Author Info */}
                <div className="flex items-center space-x-4 mt-auto">
                  <div className="relative">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover border-2 border-white/50 shadow-lg"
                    />
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-emerald-400 border-2 border-white rounded-full"></div>
                  </div>
                  
                  <div>
                    <h4 className="font-bold text-slate-800 group-hover:text-emerald-700 transition-colors duration-300">
                      {testimonial.name}
                    </h4>
                    <p className="text-emerald-600 font-medium text-sm">
                      {testimonial.role}
                    </p>
                    <p className="text-slate-500 text-sm">
                      {testimonial.company}
                    </p>
                  </div>
                </div>

                {/* Glass Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-sky-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="text-center mt-16">
          <div 
            className={`transform transition-all duration-1000 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
            style={{ transitionDelay: '0.8s' }}
          >
            <p className="text-slate-600 text-lg mb-8 max-w-2xl mx-auto">
              Bergabunglah dengan ratusan klien yang telah merasakan kepuasan bekerja sama dengan kami.
            </p>
            
            <div className="flex items-center justify-center space-x-8">
              <div className="px-6 py-3 bg-white/30 backdrop-blur-lg border border-white/50 rounded-2xl shadow-lg">
                <div className="text-emerald-600 font-bold text-2xl">4.9/5</div>
                <div className="text-slate-600 text-sm">Rating Klien</div>
              </div>
              
              <div className="px-6 py-3 bg-white/30 backdrop-blur-lg border border-white/50 rounded-2xl shadow-lg">
                <div className="text-sky-600 font-bold text-2xl">500+</div>
                <div className="text-slate-600 text-sm">Proyek Selesai</div>
              </div>
              
              <div className="px-6 py-3 bg-white/30 backdrop-blur-lg border border-white/50 rounded-2xl shadow-lg">
                <div className="text-amber-600 font-bold text-2xl">98%</div>
                <div className="text-slate-600 text-sm">Kepuasan</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 