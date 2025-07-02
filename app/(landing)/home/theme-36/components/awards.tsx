'use client';

import { useState, useEffect } from 'react';

const majorAwards = [
  {
    year: '2024',
    title: 'International Luxury Craftsmanship Award',
    organization: 'World Luxury Association',
    category: 'Best Heritage Furniture',
    icon: '🏆',
    prestige: 'Platinum'
  },
  {
    year: '2023',
    title: 'Master Artisan Recognition',
    organization: 'European Guild of Craftsmen',
    category: 'Lifetime Achievement',
    icon: '👑',
    prestige: 'Grand Master'
  },
  {
    year: '2023',
    title: 'Excellence in Design Innovation',
    organization: 'Swiss Design Council',
    category: 'Innovation & Tradition',
    icon: '💎',
    prestige: 'Diamond'
  },
  {
    year: '2022',
    title: 'Royal Warrant of Excellence',
    organization: 'Crown Estate Commission',
    category: 'Official Supplier',
    icon: '⭐',
    prestige: 'Royal'
  }
];

const achievements = [
  { label: 'International Awards', value: '50+', icon: '🌍' },
  { label: 'Museum Collections', value: '15', icon: '🏛️' },
  { label: 'Royal Commissions', value: '8', icon: '👑' },
  { label: 'Master Craftsmen', value: '25', icon: '🔨' }
];

const certifications = [
  'ISO 9001:2015 Quality Management',
  'Heritage Craftsmanship Certified',
  'Sustainable Materials Verified',
  'Swiss Precision Engineering',
  'European Guild Membership',
  'Royal Warrant Holder'
];

export default function Awards() {
  const [visibleAwards, setVisibleAwards] = useState<number[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleAwards(prev => [...prev, index]);
          }
        });
      },
      { threshold: 0.3 }
    );

    const elements = document.querySelectorAll('.award-item');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-yellow-50 to-amber-50 relative overflow-hidden">
      {/* Background prestige elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-1/4 text-9xl text-amber-200/10 luxury-float">🏆</div>
        <div className="absolute bottom-20 left-1/4 text-8xl text-yellow-200/10 luxury-float" style={{ animationDelay: '3s' }}>🎖️</div>
        <div className="absolute top-1/2 right-10 w-64 h-64 border border-amber-300/10 transform rotate-45 luxury-float" style={{ animationDelay: '1s' }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-amber-100 to-yellow-100 rounded-full mb-8 border border-amber-300/50">
            <span className="text-2xl">🎖️</span>
            <span className="font-semibold text-amber-800 tracking-wide uppercase">Prestige & Recognition</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-800 to-yellow-700 mb-8 font-serif">
            Pengakuan Dunia
            <br />
            <span className="text-amber-700">Atas Keunggulan</span>
          </h2>
          
          <p className="text-xl text-amber-800 max-w-4xl mx-auto leading-relaxed">
            Lebih dari seabad dedikasi terhadap excellence telah menghasilkan 
            pengakuan dari institution paling bergengsi di dunia.
          </p>
        </div>

        {/* Major Awards Showcase */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-amber-800 text-center mb-12">Penghargaan Bergengsi</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {majorAwards.map((award, index) => (
              <div
                key={index}
                className={`award-item group relative ${visibleAwards.includes(index) ? 'elegant-reveal' : 'opacity-0'}`}
                data-index={index}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative p-8 bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-amber-200/50 hover:border-amber-300 overflow-hidden">
                  {/* Golden shine effect */}
                  <div className="absolute inset-0 golden-shine opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative z-10">
                    {/* Award icon and prestige level */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="text-6xl group-hover:scale-125 transform transition-all duration-500">
                        {award.icon}
                      </div>
                      <div className="px-4 py-2 bg-gradient-to-r from-amber-600 to-yellow-600 text-white rounded-full text-sm font-bold">
                        {award.prestige} Level
                      </div>
                    </div>
                    
                    {/* Award year */}
                    <div className="text-3xl font-bold text-amber-600 mb-3">{award.year}</div>
                    
                    <h4 className="text-2xl font-bold text-amber-800 mb-3 group-hover:text-yellow-700 transition-colors">
                      {award.title}
                    </h4>
                    
                    <p className="text-amber-700 mb-2 font-medium">{award.organization}</p>
                    <p className="text-amber-600 text-sm mb-4">{award.category}</p>
                    
                    {/* Prestigious indicator */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100 text-amber-800 rounded-full text-sm font-medium">
                      <span>✨</span>
                      International Recognition
                    </div>
                  </div>

                  {/* Decorative corners */}
                  <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-amber-400/50" />
                  <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-amber-400/50" />
                  <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-amber-400/50" />
                  <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-amber-400/50" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievement Statistics */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-amber-800 text-center mb-12">Pencapaian Bergengsi</h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center group hover:scale-110 transition-transform duration-500">
                <div className="text-5xl mb-4 group-hover:scale-125 transform transition-all duration-300">
                  {achievement.icon}
                </div>
                <div className="text-4xl md:text-5xl font-bold text-amber-800 mb-3 group-hover:text-yellow-700 transition-colors relative">
                  {achievement.value}
                  <div className="absolute inset-0 golden-shine opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="text-amber-700 font-medium uppercase tracking-wide text-sm">
                  {achievement.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-amber-800 text-center mb-12">Sertifikasi & Keanggotaan</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="group p-6 bg-white/80 rounded-2xl border border-amber-200/50 hover:border-amber-300 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full group-hover:scale-125 transform transition-all duration-300" />
                  <span className="text-amber-800 font-medium group-hover:text-yellow-700 transition-colors">
                    {cert}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Recognition CTA */}
        <div className="text-center">
          <div className="inline-block p-8 bg-gradient-to-r from-amber-600 via-yellow-600 to-orange-600 text-white rounded-3xl shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-500 cursor-pointer relative overflow-hidden">
            <div className="absolute inset-0 golden-shine opacity-30" />
            <div className="relative z-10 flex items-center gap-6">
              <div className="text-4xl luxury-float">🌟</div>
              <div className="text-left">
                <h3 className="text-2xl font-bold mb-2">Bergabung dengan Hall of Fame</h3>
                <p className="text-amber-100 text-lg">Wujudkan karya yang layak mendapat pengakuan dunia</p>
              </div>
              <div className="text-3xl animate-pulse">→</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 