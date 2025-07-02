"use client";

import { useState, useEffect } from "react";

export default function Stats() {
  const [animatedStats, setAnimatedStats] = useState([0, 0, 0, 0]);
  
  const stats = [
    { value: 1247, label: "Proyek Selesai", suffix: "+", icon: "📊" },
    { value: 98.5, label: "Tingkat Kepuasan", suffix: "%", icon: "⭐" },
    { value: 156, label: "Tim Profesional", suffix: "+", icon: "👥" },
    { value: 24, label: "Penghargaan", suffix: "", icon: "🏆" }
  ];

  useEffect(() => {
    const intervals = stats.map((stat, index) => {
      return setInterval(() => {
        setAnimatedStats(prev => {
          const newStats = [...prev];
          if (newStats[index] < stat.value) {
            newStats[index] = Math.min(newStats[index] + (stat.value / 50), stat.value);
          }
          return newStats;
        });
      }, 50);
    });

    return () => intervals.forEach(clearInterval);
  }, []);

  return (
    <section className="py-16 px-6 bg-gradient-to-b from-orange-100 to-amber-100 relative">
      {/* Section Header */}
      <div className="max-w-7xl mx-auto mb-12">
        <div className="text-center border-b-4 border-double border-amber-800 pb-6 mb-12">
          <div className="text-xs text-amber-600 font-bold tracking-widest mb-2">LAPORAN STATISTIK</div>
          <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-4"
              style={{ fontFamily: 'Times, serif' }}>
            PENCAPAIAN TERKINI
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Data terbaru menunjukkan pertumbuhan signifikan dalam semua aspek operasional perusahaan
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white border-4 border-amber-800 p-6 text-center shadow-lg relative overflow-hidden">
              {/* Decorative Corner */}
              <div className="absolute top-0 left-0 w-0 h-0 border-l-[20px] border-l-amber-600 border-b-[20px] border-b-transparent"></div>
              
              {/* Icon */}
              <div className="text-4xl mb-4">{stat.icon}</div>
              
              {/* Value */}
              <div className="text-4xl md:text-5xl font-bold text-amber-900 mb-2"
                   style={{ fontFamily: 'Times, serif' }}>
                {stat.suffix === "%" 
                  ? animatedStats[index].toFixed(1) 
                  : Math.floor(animatedStats[index]).toLocaleString()
                }
                <span className="text-2xl text-orange-700">{stat.suffix}</span>
              </div>
              
              {/* Label */}
              <div className="text-sm font-semibold text-gray-700 uppercase tracking-wider border-t border-amber-300 pt-2">
                {stat.label}
              </div>

              {/* Vintage Stamp Effect */}
              <div className="absolute bottom-2 right-2 w-8 h-8 border-2 border-amber-600 rounded-full flex items-center justify-center text-xs font-bold text-amber-600">
                ✓
              </div>
            </div>
          ))}
        </div>

        {/* Infographic Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Chart Representation */}
          <div className="bg-white border-4 border-amber-800 p-8">
            <h3 className="text-2xl font-bold text-amber-900 mb-6 text-center border-b-2 border-amber-700 pb-3"
                style={{ fontFamily: 'Times, serif' }}>
              GRAFIK PERTUMBUHAN BULANAN
            </h3>
            
            <div className="space-y-4">
              {[
                { month: "Jan", value: 85, color: "bg-amber-600" },
                { month: "Feb", value: 92, color: "bg-orange-600" },
                { month: "Mar", value: 78, color: "bg-amber-700" },
                { month: "Apr", value: 96, color: "bg-orange-700" },
                { month: "Mei", value: 89, color: "bg-amber-600" },
                { month: "Jun", value: 94, color: "bg-orange-600" }
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="w-12 text-sm font-semibold text-amber-800">{item.month}</div>
                  <div className="flex-1 bg-gray-200 h-6 relative border border-amber-300">
                    <div 
                      className={`h-full ${item.color} transition-all duration-1000 ease-out flex items-center justify-end pr-2`}
                      style={{ width: `${item.value}%` }}
                    >
                      <span className="text-white text-xs font-bold">{item.value}%</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* News Style Achievement */}
          <div className="space-y-6">
            {/* Achievement Article */}
            <div className="bg-white border-2 border-amber-800 p-6">
              <div className="text-xs text-amber-600 font-bold tracking-widest mb-2">BERITA PENCAPAIAN</div>
              <h4 className="text-xl font-bold text-amber-900 mb-3"
                  style={{ fontFamily: 'Times, serif' }}>
                Rekor Baru: 1,247 Proyek Berhasil Diselesaikan
              </h4>
              <p className="text-sm text-gray-700 leading-relaxed mb-4 text-justify">
                Tim profesional kami telah mencapai milestone baru dengan menyelesaikan 
                lebih dari seribu proyek dalam kurun waktu 12 bulan terakhir, 
                mempertahankan standar kualitas tertinggi.
              </p>
              <div className="text-xs text-amber-600 font-semibold">
                Reporter: Tim Redaksi Digital Chronicle
              </div>
            </div>

            {/* Client Testimonial Box */}
            <div className="bg-yellow-50 border-4 border-yellow-600 p-6">
              <div className="text-center">
                <div className="text-xs font-bold text-yellow-800 mb-2">TESTIMONI KLIEN</div>
                <div className="text-6xl text-yellow-600 mb-2">"</div>
                <p className="text-sm text-yellow-900 italic mb-4">
                  Pelayanan yang luar biasa dan hasil yang melampaui ekspektasi. 
                  Tim yang sangat profesional dan responsif.
                </p>
                <div className="text-xs font-bold text-yellow-800">
                  — PT. Teknologi Maju, Jakarta
                </div>
              </div>
            </div>

            {/* Award Announcement */}
            <div className="bg-red-100 border-4 border-red-600 p-6">
              <div className="text-center">
                <div className="text-xs font-bold text-red-800 mb-2">PENGUMUMAN PENGHARGAAN</div>
                <div className="text-2xl mb-2">🏆</div>
                <h4 className="text-lg font-bold text-red-900 mb-2">
                  Best Digital Innovation Award 2024
                </h4>
                <p className="text-sm text-red-800">
                  Penghargaan ke-24 yang diterima tahun ini
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-8 left-8 w-12 h-12 border-4 border-amber-700 rotate-45 opacity-20"></div>
      <div className="absolute top-8 right-8 w-12 h-12 border-4 border-orange-700 rotate-45 opacity-20"></div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-amber-600 text-6xl opacity-10">
        📰
      </div>
    </section>
  );
} 