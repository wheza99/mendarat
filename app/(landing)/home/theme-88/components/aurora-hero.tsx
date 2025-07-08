import React from 'react';

export default function AuroraHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Aurora Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-400/10 via-emerald-400/10 to-indigo-400/10"></div>
        {/* Floating Aurora Lights */}
        {Array.from({ length: 6 }, (_, i) => (
          <div
            key={`aurora-orb-${i}`}
            className="absolute animate-aurora-float"
            style={{
              left: `${10 + (i % 3) * 30}%`,
              top: `${20 + Math.floor(i / 3) * 40}%`,
              animationDelay: `${i * 0.4}s`,
              animationDuration: `${6 + Math.random() * 4}s`
            }}
          >
            <div className={`w-24 h-24 rounded-full bg-gradient-to-br from-${['cyan', 'green', 'indigo'][i % 3]}-400/30 to-${['cyan', 'green', 'indigo'][i % 3]}-600/30 backdrop-blur-sm border border-${['cyan', 'green', 'indigo'][i % 3]}-400/40 animate-aurora-pulse`}></div>
          </div>
        ))}
      </div>
      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-6xl md:text-8xl font-bold mb-6 gradient-text-aurora animate-aurora-pulse">
          AURORA
        </h1>
        <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white neon-text-cyan">
          BOREALIS LANDING
        </h2>
        <p className="text-xl md:text-2xl text-cyan-100 font-light max-w-2xl mx-auto leading-relaxed mb-10">
          Rasakan keajaiban aurora di dunia digital. Landing page modern dengan efek cahaya bergerak, warna malam, dan nuansa elegan yang memukau.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
          <button className="btn-aurora text-lg px-8 py-4 rounded-xl font-semibold">
            Mulai Sekarang
          </button>
          <button className="aurora-glass text-lg px-8 py-4 rounded-xl font-semibold text-white border border-cyan-400/40">
            Lihat Demo
          </button>
        </div>
        {/* Feature Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {[
            {
              icon: "🌌",
              title: "Aurora Visuals",
              description: "Efek cahaya aurora yang dinamis dan immersive"
            },
            {
              icon: "🛡️",
              title: "Modern & Aman",
              description: "Teknologi terbaru, desain responsif, dan keamanan terjamin"
            },
            {
              icon: "✨",
              title: "Elegan & Unik",
              description: "Tampilan malam yang elegan dan berbeda dari yang lain"
            }
          ].map((feature, index) => (
            <div
              key={index}
              className="aurora-card p-6 text-center"
            >
              <div className="text-4xl mb-4 animate-aurora-pulse">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3 neon-text-cyan">
                {feature.title}
              </h3>
              <p className="text-cyan-100 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-aurora-float">
          <div className="w-6 h-10 border-2 border-cyan-400/40 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-cyan-400/70 rounded-full mt-2 animate-aurora-pulse"></div>
          </div>
          <p className="text-cyan-200 text-sm mt-2 font-light">Scroll untuk lanjut</p>
        </div>
      </div>
      {/* Decorative Elements */}
      <div className="absolute top-10 right-10 w-32 h-32 border border-cyan-400/30 rounded-full animate-aurora-pulse"></div>
      <div className="absolute bottom-20 left-10 w-24 h-24 border border-green-400/30 rounded-full animate-aurora-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/3 right-1/4 w-20 h-20 border border-indigo-400/30 rounded-full animate-aurora-pulse" style={{ animationDelay: '2s' }}></div>
    </section>
  );
} 