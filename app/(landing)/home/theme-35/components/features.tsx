'use client';

import { useState } from 'react';

const features = [
  {
    icon: '🌱',
    title: 'Carbon Neutral',
    description: 'Komitmen penuh untuk mencapai zero emission melalui teknologi hijau dan offset karbon yang terukur.',
    color: 'from-green-500 to-emerald-600'
  },
  {
    icon: '♻️',
    title: 'Circular Economy',
    description: 'Mengimplementasikan model ekonomi sirkular untuk mengurangi limbah dan memaksimalkan penggunaan ulang.',
    color: 'from-blue-500 to-cyan-600'
  },
  {
    icon: '🌞',
    title: 'Energi Terbarukan',
    description: 'Menggunakan 100% energi dari sumber terbarukan seperti solar dan angin untuk operasional sehari-hari.',
    color: 'from-yellow-500 to-orange-600'
  },
  {
    icon: '🌊',
    title: 'Konservasi Air',
    description: 'Sistem pengelolaan air cerdas yang menghemat hingga 40% konsumsi air melalui teknologi IoT.',
    color: 'from-cyan-500 to-blue-600'
  },
  {
    icon: '🌳',
    title: 'Reforestasi',
    description: 'Program penanaman pohon berkelanjutan dengan monitoring real-time menggunakan satelit dan AI.',
    color: 'from-emerald-500 to-green-600'
  },
  {
    icon: '🔋',
    title: 'Smart Grid',
    description: 'Infrastruktur energi pintar yang mengoptimalkan distribusi dan konsumsi energi secara otomatis.',
    color: 'from-purple-500 to-indigo-600'
  }
];

export default function Features() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-emerald-50 to-green-100 relative overflow-hidden">
      {/* Background organic patterns */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full blur-xl animate-float-organic" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-tl from-lime-400 to-green-500 rounded-full blur-xl animate-float-organic" style={{ animationDelay: '2s' }} />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-green-800 mb-6">
            Solusi Berkelanjutan
            <br />
            <span className="bg-gradient-to-r from-emerald-600 to-lime-600 bg-clip-text text-transparent">
              untuk Masa Depan
            </span>
          </h2>
          <p className="text-xl text-green-700 max-w-3xl mx-auto">
            Menghadirkan inovasi teknologi ramah lingkungan yang dapat diimplementasikan 
            secara praktis dalam kehidupan sehari-hari
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="relative p-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-green-200/50 hover:border-green-300 overflow-hidden">
                {/* Animated background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                {/* Icon with animation */}
                <div className="relative mb-6">
                  <div className={`text-6xl transform transition-all duration-500 ${hoveredIndex === index ? 'scale-125 rotate-12' : 'scale-100 rotate-0'}`}>
                    {feature.icon}
                  </div>
                  {hoveredIndex === index && (
                    <div className="absolute -inset-4 bg-gradient-to-r from-green-200 to-emerald-200 rounded-full opacity-20 animate-ping" />
                  )}
                </div>

                <h3 className="text-2xl font-bold text-green-800 mb-4 group-hover:text-emerald-700 transition-colors duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-green-600 leading-relaxed group-hover:text-green-700 transition-colors duration-300">
                  {feature.description}
                </p>

                {/* Hover effect bottom border */}
                <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${feature.color} transform transition-all duration-500 ${hoveredIndex === index ? 'w-full' : 'w-0'}`} />
                
                {/* Growth indicator */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-4 p-6 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer">
            <span className="text-2xl animate-sway">🌍</span>
            <div>
              <h3 className="text-xl font-bold mb-1">Bergabung dengan Gerakan Hijau</h3>
              <p className="text-green-100">Bersama kita wujudkan planet yang lebih baik</p>
            </div>
            <span className="text-2xl animate-bounce">→</span>
          </div>
        </div>
      </div>
    </section>
  );
} 