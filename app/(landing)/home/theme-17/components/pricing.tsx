"use client";

import { useState, useEffect } from "react";
import { pricingSectionCopy } from "../copy";

export default function Pricing() {
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

    const element = document.getElementById('pricing-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="pricing-section"
      className="relative py-20 lg:py-32 overflow-hidden bg-gradient-to-br from-slate-50/50 via-emerald-50/30 to-sky-50/20"
    >
      
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_30%,theme(colors.emerald.200/20)_0%,transparent_50%)]"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_70%,theme(colors.sky.200/20)_0%,transparent_50%)]"></div>
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
              {pricingSectionCopy.title}
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              {pricingSectionCopy.subtitle}
            </p>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {pricingSectionCopy.packages.map((pkg, index) => (
            <div
              key={index}
              className={`group relative transform transition-all duration-1000 ${
                isVisible 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-16 opacity-0'
              } ${pkg.popular ? 'lg:scale-105' : ''}`}
              style={{ transitionDelay: `${index * 0.2}s` }}
            >
              
              {/* Popular Badge */}
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                  <div className="px-4 py-2 bg-gradient-to-r from-emerald-500 to-sky-500 text-white text-sm font-semibold rounded-full shadow-lg">
                    Paling Populer
                  </div>
                </div>
              )}

              {/* Pricing Card */}
              <div className={`relative h-full bg-white/50 backdrop-blur-xl border-2 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 group-hover:scale-105 ${
                pkg.popular 
                  ? 'border-emerald-300/50 bg-gradient-to-br from-white/60 to-emerald-50/40' 
                  : 'border-white/50 group-hover:bg-white/60'
              }`}>
                
                {/* Package Header */}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-slate-800 mb-2">
                    {pkg.name}
                  </h3>
                  
                  <div className="mb-4">
                    <span className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-emerald-600 to-sky-600 bg-clip-text text-transparent">
                      {pkg.price}
                    </span>
                    <span className="text-slate-600 text-lg ml-2">
                      / {pkg.period}
                    </span>
                  </div>
                  
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {pkg.description}
                  </p>
                </div>

                {/* Features List */}
                <div className="space-y-4 mb-8 flex-grow">
                  {pkg.features.map((feature, featureIndex) => (
                    <div 
                      key={featureIndex}
                      className="flex items-start space-x-3"
                    >
                      <div className="mt-1">
                        <svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-slate-700 text-sm leading-relaxed">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <button className={`w-full py-4 font-semibold text-lg rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 ${
                  pkg.popular
                    ? 'bg-gradient-to-r from-emerald-500 to-sky-500 text-white hover:from-emerald-600 hover:to-sky-600'
                    : 'bg-white/60 backdrop-blur-sm border border-white/50 text-slate-700 hover:bg-white/80'
                }`}>
                  {pkg.cta}
                </button>

                {/* Glass Overlay */}
                <div className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none ${
                  pkg.popular 
                    ? 'bg-gradient-to-br from-emerald-500/5 via-sky-500/5 to-transparent' 
                    : 'bg-gradient-to-br from-white/10 via-transparent to-emerald-500/5'
                }`}></div>

                {/* Decorative Elements */}
                <div className="absolute top-6 right-6 w-4 h-4 bg-gradient-to-r from-emerald-400/30 to-sky-400/30 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
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
              Tidak yakin paket mana yang tepat? Hubungi kami untuk konsultasi gratis dan dapatkan rekomendasi terbaik.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <button className="px-8 py-4 bg-gradient-to-r from-emerald-500/90 to-sky-500/90 backdrop-blur-lg border border-white/30 text-white font-semibold text-lg rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
                Konsultasi Gratis
              </button>
              
              <button className="px-8 py-4 bg-white/40 backdrop-blur-xl border border-white/60 text-slate-700 font-semibold text-lg rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                Lihat Portofolio
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 