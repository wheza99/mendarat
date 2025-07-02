'use client';

import { useState, useEffect } from 'react';

const impactData = [
  {
    metric: '2.5M',
    label: 'Ton CO₂ Dikurangi',
    icon: '🌫️',
    description: 'Setara dengan menghilangkan 540,000 mobil dari jalan raya selama setahun',
    color: 'from-blue-500 to-cyan-600',
    percentage: 85
  },
  {
    metric: '150K',
    label: 'Pohon Ditanam',
    icon: '🌳',
    description: 'Menciptakan hutan seluas 500 hektar dengan biodiversitas tinggi',
    color: 'from-green-500 to-emerald-600',
    percentage: 92
  },
  {
    metric: '800M',
    label: 'Liter Air Dihemat',
    icon: '💧',
    description: 'Cukup untuk memenuhi kebutuhan 10,000 keluarga selama setahun',
    color: 'from-cyan-500 to-blue-600',
    percentage: 78
  },
  {
    metric: '450',
    label: 'Komunitas Terdampak',
    icon: '👥',
    description: 'Tersebar di 34 provinsi dengan program pendampingan berkelanjutan',
    color: 'from-purple-500 to-indigo-600',
    percentage: 96
  }
];

export default function Impact() {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedValues, setAnimatedValues] = useState(impactData.map(() => 0));

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          
          // Animate counters
          impactData.forEach((_, index) => {
            const duration = 2000; // 2 seconds
            const startTime = Date.now();
            const targetValue = impactData[index].percentage;
            
            const animateValue = () => {
              const elapsed = Date.now() - startTime;
              const progress = Math.min(elapsed / duration, 1);
              const easeOutQuart = 1 - Math.pow(1 - progress, 4);
              const currentValue = Math.floor(easeOutQuart * targetValue);
              
              setAnimatedValues(prev => {
                const newValues = [...prev];
                newValues[index] = currentValue;
                return newValues;
              });
              
              if (progress < 1) {
                requestAnimationFrame(animateValue);
              }
            };
            
            setTimeout(() => animateValue(), index * 200);
          });
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('impact-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="impact-section" className="py-20 px-4 bg-gradient-to-b from-green-100 to-emerald-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-1/4 text-8xl text-green-200/30 animate-float-organic">🌍</div>
        <div className="absolute bottom-20 right-1/4 text-6xl text-emerald-200/40 animate-float-organic" style={{ animationDelay: '3s' }}>🌿</div>
        <div className="absolute top-1/3 right-10 text-5xl text-lime-200/35 animate-sway">🍃</div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-green-800 mb-6">
            Dampak Nyata untuk
            <br />
            <span className="bg-gradient-to-r from-emerald-600 to-lime-600 bg-clip-text text-transparent">
              Bumi Kita
            </span>
          </h2>
          <p className="text-xl text-green-700 max-w-3xl mx-auto">
            Bersama-sama kita telah menciptakan perubahan positif yang terukur 
            dan berkelanjutan untuk generasi mendatang
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {impactData.map((item, index) => (
            <div
              key={index}
              className={`group relative p-8 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl`} />
              
              {/* Progress circle */}
              <div className="relative mb-6 flex justify-center">
                <div className="relative w-20 h-20">
                  <svg className="w-20 h-20 transform -rotate-90" viewBox="0 0 80 80">
                    <circle
                      cx="40"
                      cy="40"
                      r="32"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="6"
                      className="text-green-200"
                    />
                    <circle
                      cx="40"
                      cy="40"
                      r="32"
                      fill="none"
                      strokeWidth="6"
                      strokeLinecap="round"
                      strokeDasharray={`${2 * Math.PI * 32}`}
                      strokeDashoffset={`${2 * Math.PI * 32 * (1 - animatedValues[index] / 100)}`}
                      className={`transition-all duration-1000 ease-out stroke-current ${item.color.includes('blue') ? 'text-blue-500' : 
                        item.color.includes('green') ? 'text-green-500' : 
                        item.color.includes('cyan') ? 'text-cyan-500' : 'text-purple-500'}`}
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center text-2xl">
                    {item.icon}
                  </div>
                </div>
              </div>

              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-green-800 mb-2 group-hover:scale-110 transition-transform duration-300">
                  {item.metric}
                </div>
                <div className="text-green-600 font-semibold mb-3">
                  {item.label}
                </div>
                <p className="text-sm text-green-600 leading-relaxed group-hover:text-green-700 transition-colors">
                  {item.description}
                </p>
              </div>

              {/* Animated indicator */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className={`w-3 h-3 rounded-full animate-pulse ${item.color.includes('blue') ? 'bg-blue-400' : 
                  item.color.includes('green') ? 'bg-green-400' : 
                  item.color.includes('cyan') ? 'bg-cyan-400' : 'bg-purple-400'}`} />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="inline-block p-8 bg-gradient-to-r from-green-600 via-emerald-600 to-lime-600 text-white rounded-3xl shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-500 cursor-pointer">
            <div className="flex items-center gap-6">
              <div className="text-4xl animate-bounce">🌱</div>
              <div className="text-left">
                <h3 className="text-2xl font-bold mb-2">Bergabung dengan Misi Hijau</h3>
                <p className="text-green-100 text-lg">Mari bersama mewujudkan impact yang lebih besar lagi</p>
              </div>
              <div className="text-3xl animate-pulse">→</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 