'use client';

import { useState } from 'react';

const craftsmanshipData = [
  {
    title: 'Hand-Carved Excellence',
    description: 'Setiap detail diukir dengan tangan oleh master craftsman berpengalaman 30+ tahun',
    icon: '🔨',
    technique: 'Traditional Carving',
    time: '120+ Hours per piece',
    image: '🎨'
  },
  {
    title: 'Premium Materials',
    description: 'Menggunakan material terbaik dunia: mahogany aged, Italian marble, Swiss precision parts',
    icon: '💎',
    technique: 'Material Selection',
    time: 'Sourced Globally',
    image: '🌟'
  },
  {
    title: 'Precision Engineering',
    description: 'Teknologi Swiss precision dikombinasi dengan keahlian tradisional untuk hasil sempurna',
    icon: '⚙️',
    technique: 'Micro-Engineering',
    time: '0.001mm Tolerance',
    image: '🔧'
  },
  {
    title: 'Artistic Finishing',
    description: 'Proses finishing dengan 12 lapisan varnish premium dan gold leaf application',
    icon: '✨',
    technique: 'Multi-Layer Finishing',
    time: '48 Hours Curing',
    image: '🎭'
  }
];

export default function Craftsmanship() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-amber-50 to-orange-50 relative overflow-hidden">
      {/* Background luxury patterns */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 right-20 w-64 h-64 border-2 border-amber-300/10 transform rotate-45 luxury-float" />
        <div className="absolute bottom-10 left-20 w-48 h-48 border-2 border-yellow-300/10 transform rotate-12 luxury-float" style={{ animationDelay: '3s' }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-amber-100 to-yellow-100 rounded-full mb-8 border border-amber-300/50">
            <span className="text-2xl">⚒️</span>
            <span className="font-semibold text-amber-800 tracking-wide uppercase">Master Craftsmanship</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-800 to-yellow-700 mb-8 font-serif">
            Seni Tingkat Tinggi
            <br />
            <span className="text-amber-700">Dalam Setiap Detail</span>
          </h2>
          
          <p className="text-xl text-amber-800 max-w-4xl mx-auto leading-relaxed">
            Setiap karya adalah hasil dari perpaduan sempurna antara keahlian tradisional, 
            teknologi modern, dan dedikasi tak terbatas terhadap kesempurnaan.
          </p>
        </div>

        {/* Craftsmanship showcase */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          {craftsmanshipData.map((item, index) => (
            <div
              key={index}
              className="group relative"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="relative p-10 bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-amber-200/50 hover:border-amber-300 overflow-hidden">
                {/* Golden shine effect */}
                <div className={`absolute inset-0 golden-shine opacity-0 ${hoveredIndex === index ? 'opacity-100' : ''} transition-opacity duration-500`} />
                
                <div className="relative z-10">
                  {/* Icon and image */}
                  <div className="flex items-center gap-6 mb-8">
                    <div className={`text-6xl transform transition-all duration-500 ${hoveredIndex === index ? 'scale-125 rotate-12' : 'scale-100'}`}>
                      {item.icon}
                    </div>
                    <div className={`text-8xl opacity-20 transform transition-all duration-500 ${hoveredIndex === index ? 'scale-110 rotate-6' : 'scale-100'}`}>
                      {item.image}
                    </div>
                  </div>
                  
                  <h3 className="text-3xl font-bold text-amber-800 mb-4 group-hover:text-yellow-700 transition-colors">
                    {item.title}
                  </h3>
                  
                  <p className="text-amber-700 leading-relaxed text-lg mb-6">
                    {item.description}
                  </p>
                  
                  {/* Technical specs */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="flex-1 px-4 py-3 bg-amber-100 rounded-xl">
                      <div className="text-sm font-medium text-amber-600 uppercase tracking-wide">Technique</div>
                      <div className="text-amber-800 font-semibold">{item.technique}</div>
                    </div>
                    <div className="flex-1 px-4 py-3 bg-yellow-100 rounded-xl">
                      <div className="text-sm font-medium text-yellow-600 uppercase tracking-wide">Time Investment</div>
                      <div className="text-yellow-800 font-semibold">{item.time}</div>
                    </div>
                  </div>
                </div>

                {/* Decorative corner elements */}
                <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-amber-400/50" />
                <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-amber-400/50" />
                <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-amber-400/50" />
                <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-amber-400/50" />
              </div>
            </div>
          ))}
        </div>

        {/* Process showcase */}
        <div className="text-center">
          <h3 className="text-3xl font-bold text-amber-800 mb-12">Proses Pembuatan Eksklusif</h3>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-12">
            {[
              { step: '01', title: 'Design Consultation', icon: '📐' },
              { step: '02', title: 'Material Selection', icon: '💎' },
              { step: '03', title: 'Master Crafting', icon: '🔨' },
              { step: '04', title: 'Quality Assurance', icon: '🔍' },
              { step: '05', title: 'Luxury Delivery', icon: '🎁' }
            ].map((process, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="text-center group hover:scale-110 transition-transform duration-300">
                  <div className="w-20 h-20 bg-gradient-to-r from-amber-600 to-yellow-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-2 group-hover:shadow-xl transition-shadow duration-300">
                    {process.step}
                  </div>
                  <div className="text-3xl mb-2">{process.icon}</div>
                  <div className="text-amber-800 font-medium text-sm">{process.title}</div>
                </div>
                
                {index < 4 && (
                  <div className="hidden md:block w-16 h-1 bg-gradient-to-r from-amber-400 to-yellow-400 rounded-full mx-4" />
                )}
              </div>
            ))}
          </div>

          <div className="inline-block p-8 bg-gradient-to-r from-amber-600 via-yellow-600 to-orange-600 text-white rounded-3xl shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-500 cursor-pointer relative overflow-hidden">
            <div className="absolute inset-0 golden-shine opacity-30" />
            <div className="relative z-10 flex items-center gap-6">
              <div className="text-4xl luxury-float">🏭</div>
              <div className="text-left">
                <h3 className="text-2xl font-bold mb-2">Kunjungi Workshop Kami</h3>
                <p className="text-amber-100 text-lg">Saksikan langsung proses pembuatan masterpiece</p>
              </div>
              <div className="text-3xl animate-pulse">→</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 