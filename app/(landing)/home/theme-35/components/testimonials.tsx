'use client';

import { useState, useEffect } from 'react';

const testimonials = [
  {
    name: 'Sari Dewi',
    role: 'Founder EcoVillage Bali',
    avatar: '👩‍🌾',
    content: 'Program ini benar-benar mengubah cara komunitas kami memandang sustainability. Dalam 6 bulan, kami berhasil mengurangi limbah hingga 80% dan meningkatkan pendapatan dari eco-tourism.',
    location: 'Ubud, Bali',
    impact: 'Mengelola 50 hektar eco-village'
  },
  {
    name: 'Ahmad Hakim',
    role: 'Petani Organik',
    avatar: '👨‍🌾',
    content: 'Teknologi smart farming yang disediakan membantu saya meningkatkan hasil panen 3x lipat sambil tetap menjaga kelestarian tanah. Sekarang saya bisa hidup layak dari pertanian organik.',
    location: 'Malang, Jawa Timur',
    impact: '15 hektar lahan organik bersertifikat'
  },
  {
    name: 'Dr. Maya Putri',
    role: 'Peneliti Lingkungan',
    avatar: '👩‍🔬',
    content: 'Kolaborasi research yang kami lakukan menghasilkan inovasi breakthrough dalam carbon capture. Data yang dikumpulkan telah dipublikasikan di 5 jurnal internasional.',
    location: 'Jakarta',
    impact: 'Riset untuk 20+ universitas'
  },
  {
    name: 'Bambang Sutrisno',
    role: 'Kepala Desa Wisata',
    avatar: '👨‍💼',
    content: 'Desa kami kini menjadi contoh green tourism terbaik di Indonesia. Wisatawan meningkat 400% dengan tetap menjaga kelestarian alam dan budaya lokal.',
    location: 'Yogyakarta',
    impact: 'Mengelola 1000+ wisatawan/bulan'
  },
  {
    name: 'Rina Sari',
    role: 'Social Entrepreneur',
    avatar: '👩‍💼',
    content: 'Platform ini memungkinkan kami mengconnect 200+ UMKM ramah lingkungan dengan pasar global. Omset kolektif meningkat 5x dalam setahun terakhir.',
    location: 'Bandung, Jawa Barat',
    impact: 'Memberdayakan 200+ UMKM'
  },
  {
    name: 'Prof. Joko Widodo',
    role: 'Ahli Energi Terbarukan',
    avatar: '👨‍🏫',
    content: 'Implementasi microgrid di 10 desa terpencil berhasil menyediakan listrik 24/7 dari solar dan angin. Ini model yang bisa direplikasi ke seluruh Indonesia.',
    location: 'Surabaya, Jawa Timur',
    impact: 'Elektrifikasi 10 desa terpencil'
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  useEffect(() => {
    if (!isAutoPlay) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlay]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlay(false);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlay(false);
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-emerald-50 to-green-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 right-10 text-9xl text-green-200/20 animate-float-organic">🌺</div>
        <div className="absolute bottom-10 left-10 text-7xl text-emerald-200/25 animate-sway">🌻</div>
        <div className="absolute top-1/2 left-1/4 text-6xl text-lime-200/20 animate-float-organic" style={{ animationDelay: '2s' }}>🌼</div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-green-800 mb-6">
            Cerita Sukses dari
            <br />
            <span className="bg-gradient-to-r from-emerald-600 to-lime-600 bg-clip-text text-transparent">
              Para Changemaker
            </span>
          </h2>
          <p className="text-xl text-green-700 max-w-3xl mx-auto">
            Inspirasi nyata dari mereka yang telah membuktikan bahwa perubahan 
            berkelanjutan bukan hanya mimpi, tapi kenyataan
          </p>
        </div>

        {/* Main testimonial display */}
        <div className="relative mb-12">
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border border-green-200/50">
            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Avatar and info */}
              <div className="flex-shrink-0 text-center">
                <div className="w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-green-200 to-emerald-300 rounded-full flex items-center justify-center text-4xl md:text-5xl mb-4 animate-grow">
                  {testimonials[currentIndex].avatar}
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-green-800 mb-1">
                  {testimonials[currentIndex].name}
                </h3>
                <p className="text-green-600 font-medium mb-2">
                  {testimonials[currentIndex].role}
                </p>
                <p className="text-sm text-green-500 mb-3">
                  📍 {testimonials[currentIndex].location}
                </p>
                <div className="inline-block px-4 py-2 bg-gradient-to-r from-green-100 to-emerald-100 rounded-full text-sm text-green-700 font-medium">
                  {testimonials[currentIndex].impact}
                </div>
              </div>

              {/* Testimonial content */}
              <div className="flex-1">
                <div className="relative">
                  <div className="text-6xl text-green-300/50 absolute -top-4 -left-2">"</div>
                  <p className="text-lg md:text-xl text-green-700 leading-relaxed pl-8 relative z-10">
                    {testimonials[currentIndex].content}
                  </p>
                  <div className="text-6xl text-green-300/50 absolute -bottom-4 -right-2 transform rotate-180">"</div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white border border-green-200 rounded-full flex items-center justify-center text-green-600 hover:text-green-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          >
            ←
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white border border-green-200 rounded-full flex items-center justify-center text-green-600 hover:text-green-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          >
            →
          </button>
        </div>

        {/* Testimonial indicators */}
        <div className="flex justify-center gap-3 mb-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentIndex(index);
                setIsAutoPlay(false);
              }}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-green-600 w-8' 
                  : 'bg-green-300 hover:bg-green-400'
              }`}
            />
          ))}
        </div>

        {/* Mini testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <div
              key={index}
              className="p-6 bg-white/70 backdrop-blur-sm rounded-2xl border border-green-200/50 hover:border-green-300 hover:shadow-lg transition-all duration-300 cursor-pointer group"
              onClick={() => setCurrentIndex(index)}
            >
              <div className="text-center">
                <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {testimonial.avatar}
                </div>
                <h4 className="font-bold text-green-800 mb-1">{testimonial.name}</h4>
                <p className="text-sm text-green-600 mb-3">{testimonial.role}</p>
                <p className="text-sm text-green-700 line-clamp-3">
                  {testimonial.content.slice(0, 100)}...
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom stats */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-8 p-6 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-2xl shadow-xl">
            <div className="text-center">
              <div className="text-2xl font-bold">500+</div>
              <div className="text-green-100 text-sm">Success Stories</div>
            </div>
            <div className="w-px h-8 bg-green-300" />
            <div className="text-center">
              <div className="text-2xl font-bold">98%</div>
              <div className="text-green-100 text-sm">Satisfaction Rate</div>
            </div>
            <div className="w-px h-8 bg-green-300" />
            <div className="text-center">
              <div className="text-2xl font-bold">25+</div>
              <div className="text-green-100 text-sm">Awards Won</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 