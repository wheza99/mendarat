import React from 'react';

export default function AuroraFeatures() {
  const features = [
    {
      icon: "⚡",
      title: "Super Cepat",
      description: "Performa tinggi dengan animasi aurora yang halus dan responsif.",
      color: "cyan"
    },
    {
      icon: "🔒",
      title: "Keamanan Modern",
      description: "Proteksi data dan privasi dengan teknologi terbaru.",
      color: "green"
    },
    {
      icon: "📱",
      title: "Mobile Friendly",
      description: "Tampilan optimal di semua perangkat, dari desktop hingga smartphone.",
      color: "indigo"
    },
    {
      icon: "🌙",
      title: "Dark Mode",
      description: "Desain malam yang elegan dan nyaman di mata.",
      color: "cyan"
    },
    {
      icon: "🧩",
      title: "Integrasi Mudah",
      description: "Mudah diintegrasikan dengan berbagai layanan dan API.",
      color: "green"
    },
    {
      icon: "💡",
      title: "Inovatif",
      description: "Fitur-fitur unik yang selalu update mengikuti tren.",
      color: "indigo"
    }
  ];

  return (
    <section className="relative py-20 px-4 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/10 to-transparent"></div>
        {Array.from({ length: 10 }, (_, i) => (
          <div
            key={`particle-${i}`}
            className="absolute w-2 h-2 rounded-full animate-aurora-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `radial-gradient(circle, ${['#22d3ee', '#34d399', '#818cf8'][Math.floor(Math.random() * 3)]}, transparent)`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${8 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 gradient-text-aurora">
            Fitur Unggulan
          </h2>
          <p className="text-xl text-cyan-100 max-w-3xl mx-auto leading-relaxed">
            Semua yang Anda butuhkan untuk landing page modern, aman, dan menawan.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="aurora-card p-8 text-center"
            >
              <div className={`text-5xl mb-6 animate-aurora-pulse neon-text-${feature.color}`}>
                {feature.icon}
              </div>
              <h3 className={`text-2xl font-bold mb-4 neon-text-${feature.color}`}>
                {feature.title}
              </h3>
              <p className="text-cyan-100 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 