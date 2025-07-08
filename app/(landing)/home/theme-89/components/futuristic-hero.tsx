import React from 'react';

export default function FuturisticHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Geometric Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-100/20 via-white/10 to-blue-200/20"></div>
        {/* Floating Geometric Shapes */}
        {Array.from({ length: 5 }, (_, i) => (
          <div
            key={`geo-${i}`}
            className="absolute animate-futuristic-float"
            style={{
              left: `${10 + (i % 3) * 30}%`,
              top: `${20 + Math.floor(i / 3) * 40}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${6 + Math.random() * 4}s`
            }}
          >
            <div className={`w-24 h-24 rounded-full bg-gradient-to-br from-blue-400/20 to-blue-200/20 border border-blue-300/30 backdrop-blur-sm animate-futuristic-pulse`}></div>
          </div>
        ))}
      </div>
      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-6xl md:text-8xl font-bold mb-6 gradient-text-futuristic animate-futuristic-pulse">
          FUTURISTIC
        </h1>
        <h2 className="text-4xl md:text-6xl font-bold mb-6 text-blue-600 neon-text-blue">
          MINIMAL LANDING
        </h2>
        <p className="text-xl md:text-2xl text-blue-400 font-light max-w-2xl mx-auto leading-relaxed mb-10">
          Landing page super minimalis, modern, dan elegan. Dominasi putih, aksen biru neon, dan animasi halus untuk startup, SaaS, atau portofolio masa depan.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
          <button className="btn-futuristic text-lg px-8 py-4 rounded-xl font-semibold">
            Mulai Sekarang
          </button>
          <button className="futuristic-glass text-lg px-8 py-4 rounded-xl font-semibold text-blue-700 border border-blue-300/40">
            Lihat Demo
          </button>
        </div>
        {/* Feature Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {[
            {
              icon: "💡",
              title: "Minimalis Modern",
              description: "Desain super clean, fokus pada konten dan konversi."
            },
            {
              icon: "⚡",
              title: "Cepat & Ringan",
              description: "Performa tinggi, animasi halus, dan loading instan."
            },
            {
              icon: "🔒",
              title: "Keamanan & Trust",
              description: "Teknologi terbaru, privasi dan keamanan terjamin."
            }
          ].map((feature, index) => (
            <div
              key={index}
              className="futuristic-card p-6 text-center"
            >
              <div className="text-4xl mb-4 animate-futuristic-pulse">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-blue-700 mb-3 neon-text-blue">
                {feature.title}
              </h3>
              <p className="text-blue-400 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-futuristic-float">
          <div className="w-6 h-10 border-2 border-blue-300/40 rounded-xl flex justify-center">
            <div className="w-1 h-3 bg-blue-400/70 rounded-full mt-2 animate-futuristic-pulse"></div>
          </div>
          <p className="text-blue-400 text-sm mt-2 font-light">Scroll untuk lanjut</p>
        </div>
      </div>
      {/* Decorative Elements */}
      <div className="absolute top-10 right-10 w-32 h-32 border border-blue-300/30 rounded-xl animate-futuristic-pulse"></div>
      <div className="absolute bottom-20 left-10 w-24 h-24 border border-blue-200/30 rounded-xl animate-futuristic-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/3 right-1/4 w-20 h-20 border border-blue-400/30 rounded-xl animate-futuristic-pulse" style={{ animationDelay: '2s' }}></div>
    </section>
  );
} 