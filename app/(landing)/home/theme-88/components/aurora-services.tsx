import React from 'react';

export default function AuroraServices() {
  const services = [
    {
      icon: "💻",
      title: "Web Development",
      description: "Website modern dengan performa tinggi dan visual aurora.",
      features: ["Next.js/React", "SEO Friendly", "Aksesibilitas", "Integrasi API"],
      price: "Mulai 3jt"
    },
    {
      icon: "📱",
      title: "Mobile Apps",
      description: "Aplikasi mobile responsif dengan desain aurora.",
      features: ["iOS & Android", "Flutter/React Native", "Push Notification", "UI/UX Modern"],
      price: "Mulai 5jt"
    },
    {
      icon: "🎨",
      title: "UI/UX Design",
      description: "Desain antarmuka yang elegan dan mudah digunakan.",
      features: ["Wireframe", "Prototype", "Design System", "User Testing"],
      price: "Mulai 2jt"
    }
  ];

  return (
    <section className="relative py-20 px-4 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-400/10 to-transparent"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 gradient-text-aurora">
            Layanan Kami
          </h2>
          <p className="text-xl text-cyan-100 max-w-3xl mx-auto leading-relaxed">
            Solusi digital lengkap dengan sentuhan aurora untuk bisnis Anda.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="aurora-card p-8 group"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="text-5xl animate-aurora-pulse">
                  {service.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold neon-text-green mb-1">
                    {service.title}
                  </h3>
                  <p className="text-cyan-100 text-sm">
                    {service.description}
                  </p>
                </div>
              </div>
              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-2 text-white">Fitur Utama:</h4>
                <ul className="grid grid-cols-2 gap-2">
                  {service.features.map((f, i) => (
                    <li key={i} className="flex items-center gap-2 text-cyan-100 text-sm">
                      <span className="w-2 h-2 bg-green-400 rounded-full animate-aurora-pulse"></span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex items-center justify-between">
                <div className="text-xl font-bold neon-text-cyan">
                  {service.price}
                </div>
                <button className="btn-aurora px-6 py-3 rounded-lg font-semibold">
                  Konsultasi
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 