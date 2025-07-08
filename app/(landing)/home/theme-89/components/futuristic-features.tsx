import React from 'react';

export default function FuturisticFeatures() {
  const features = [
    {
      icon: "🚀",
      title: "Ultra Cepat",
      description: "Optimasi performa, loading instan, dan animasi super smooth.",
      color: "blue"
    },
    {
      icon: "🔒",
      title: "Keamanan Modern",
      description: "Proteksi data dan privasi dengan teknologi terbaru.",
      color: "cyan"
    },
    {
      icon: "📱",
      title: "Mobile First",
      description: "Tampilan optimal di semua perangkat, dari desktop hingga smartphone.",
      color: "blue"
    },
    {
      icon: "🎨",
      title: "Desain Minimal",
      description: "Fokus pada konten, whitespace, dan konversi.",
      color: "cyan"
    },
    {
      icon: "⚙️",
      title: "Integrasi Mudah",
      description: "Integrasi API dan layanan eksternal tanpa ribet.",
      color: "blue"
    },
    {
      icon: "💡",
      title: "Inovatif",
      description: "Selalu update dengan tren UI/UX terbaru.",
      color: "cyan"
    }
  ];

  return (
    <section className="relative py-20 px-4 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-400/10 to-transparent"></div>
        {Array.from({ length: 8 }, (_, i) => (
          <div
            key={`particle-${i}`}
            className="absolute w-2 h-2 rounded-full animate-futuristic-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `radial-gradient(circle, ${['#3b82f6', '#0ea5e9', '#38bdf8'][Math.floor(Math.random() * 3)]}, transparent)`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${8 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 gradient-text-futuristic">
            Fitur Unggulan
          </h2>
          <p className="text-xl text-blue-400 max-w-3xl mx-auto leading-relaxed">
            Semua yang Anda butuhkan untuk landing page modern, aman, dan konversi tinggi.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="futuristic-card p-8 text-center"
            >
              <div className={`text-5xl mb-6 animate-futuristic-pulse neon-text-${feature.color}`}>
                {feature.icon}
              </div>
              <h3 className={`text-2xl font-bold mb-4 neon-text-${feature.color}`}>
                {feature.title}
              </h3>
              <p className="text-blue-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 