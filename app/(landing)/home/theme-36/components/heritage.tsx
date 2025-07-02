'use client';

import { useState, useEffect } from 'react';

const timelineData = [
  {
    year: '1892',
    title: 'Kelahiran Legacy',
    description: 'Didirikan oleh Master Craftsman Heinrich von Habsburg dengan visi menghadirkan keahlian Eropa terbaik.',
    icon: '🏛️',
    achievement: 'Workshop pertama di Vienna'
  },
  {
    year: '1925',
    title: 'Era Art Deco',
    description: 'Mengadopsi gaya Art Deco yang revolusioner, menjadi pionir desain modern dengan sentuhan klasik.',
    icon: '✨',
    achievement: 'Pameran Internasional Paris'
  },
  {
    year: '1960',
    title: 'Ekspansi Global',
    description: 'Membuka cabang di 15 negara dengan mempertahankan standar kualitas premium yang tak berkompromi.',
    icon: '🌍',
    achievement: 'Royal Warrant dari Kerajaan'
  },
  {
    year: '1995',
    title: 'Inovasi Digital',
    description: 'Menggabungkan teknologi modern dengan keahlian tradisional, menciptakan metodologi revolusioner.',
    icon: '💻',
    achievement: 'Patent teknologi eksklusif'
  },
  {
    year: '2024',
    title: 'Masa Depan Heritage',
    description: 'Melanjutkan tradisi dengan visi sustainability dan inovasi berkelanjutan untuk generasi mendatang.',
    icon: '🔮',
    achievement: 'Carbon Neutral Certified'
  }
];

export default function Heritage() {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleItems(prev => [...prev, index]);
          }
        });
      },
      { threshold: 0.3 }
    );

    const elements = document.querySelectorAll('.timeline-item');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-yellow-50 to-amber-50 relative overflow-hidden">
      {/* Background ornamental elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-40 h-40 border border-amber-300/20 transform rotate-45 luxury-float" />
        <div className="absolute bottom-20 right-10 w-32 h-32 border border-yellow-300/20 transform rotate-12 luxury-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-amber-100 to-yellow-100 rounded-full mb-8 border border-amber-300/50">
            <span className="text-2xl">📜</span>
            <span className="font-semibold text-amber-800 tracking-wide uppercase">Heritage & Legacy</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-800 to-yellow-700 mb-8 font-serif">
            Perjalanan Waktu
            <br />
            <span className="text-amber-700">Menuju Kesempurnaan</span>
          </h2>
          
          <p className="text-xl text-amber-800 max-w-4xl mx-auto leading-relaxed">
            Setiap dekade adalah bab baru dalam cerita panjang dedikasi kami terhadap 
            keunggulan, inovasi, dan warisan yang terus hidup hingga kini.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Central timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-amber-400 via-yellow-500 to-orange-400 rounded-full" />
          
          <div className="space-y-16">
            {timelineData.map((item, index) => (
              <div
                key={index}
                className={`timeline-item flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} relative`}
                data-index={index}
              >
                {/* Content card */}
                <div className={`w-5/12 ${visibleItems.includes(index) ? 'elegant-reveal' : 'opacity-0'}`} style={{ animationDelay: `${index * 0.2}s` }}>
                  <div className="group p-8 bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-amber-200/50 hover:border-amber-300 relative overflow-hidden">
                    {/* Golden shine effect */}
                    <div className="absolute inset-0 golden-shine opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="relative z-10">
                      {/* Year badge */}
                      <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-amber-600 to-yellow-600 text-white rounded-full mb-4 font-bold text-lg">
                        <span className="text-xl">{item.icon}</span>
                        {item.year}
                      </div>
                      
                      <h3 className="text-2xl font-bold text-amber-800 mb-4 group-hover:text-yellow-700 transition-colors">
                        {item.title}
                      </h3>
                      
                      <p className="text-amber-700 leading-relaxed mb-4">
                        {item.description}
                      </p>
                      
                      <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100 text-amber-800 rounded-full text-sm font-medium">
                        <span>🏆</span>
                        {item.achievement}
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Center point */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full border-4 border-white shadow-lg z-10">
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-yellow-400 rounded-full animate-ping opacity-75" />
                </div>
                
                {/* Empty space on opposite side */}
                <div className="w-5/12" />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <div className="inline-block p-8 bg-gradient-to-r from-amber-600 via-yellow-600 to-orange-600 text-white rounded-3xl shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-500 cursor-pointer relative overflow-hidden">
            <div className="absolute inset-0 golden-shine opacity-30" />
            <div className="relative z-10 flex items-center gap-6">
              <div className="text-4xl luxury-float">👑</div>
              <div className="text-left">
                <h3 className="text-2xl font-bold mb-2">Bergabung dengan Legacy</h3>
                <p className="text-amber-100 text-lg">Jadilah bagian dari sejarah yang terus berkembang</p>
              </div>
              <div className="text-3xl animate-pulse">→</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 