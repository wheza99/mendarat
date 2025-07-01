"use client";

import { BusinessData } from "../page";

interface BusinessTheme5Props {
  data: BusinessData;
}

export default function BusinessTheme5({ data }: BusinessTheme5Props) {
  console.log('🎨 BusinessTheme5 component rendering with data:', data);
  
  if (!data) {
    console.error('❌ BusinessTheme5: No data provided');
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-violet-800 to-fuchsia-900">
        <div className="text-center text-white">
          <h1 className="text-4xl font-bold mb-4">Business Theme-5</h1>
          <p>No data available</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-violet-800 to-fuchsia-900">
      {/* Test Header */}
      <div className="fixed top-4 left-4 z-50 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-lg shadow-lg border border-white/20">
        <p className="text-sm font-bold">✅ Business Theme-5 Active</p>
        <p className="text-xs">{data.name}</p>
      </div>
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-8">
        {/* Animated Particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white/20 animate-pulse"
              style={{
                width: Math.random() * 8 + 4,
                height: Math.random() * 8 + 4,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
              }}
            />
          ))}
        </div>

        {/* Content */}
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto">
          {/* Logo */}
          {data.logo && (
            <div className="w-24 h-24 mx-auto mb-6 rounded-full overflow-hidden border-4 border-white/30 shadow-2xl">
              <img
                src={data.logo}
                alt={data.name}
                className="w-full h-full object-cover"
              />
            </div>
          )}
          
          {/* Business Name */}
          <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-none">
            <span className="block text-white">{data.name}</span>
            <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-200">
              STUDIO
            </span>
          </h1>
          
          {/* Description */}
          <p className="text-xl md:text-2xl text-purple-100 mb-8 max-w-2xl mx-auto">
            {data.description || "Studio kreatif dengan sentuhan artistik dan inovasi terdepan"}
          </p>
          
          {/* Business Info */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
              <span className="text-purple-200 text-sm">ID: {data.businessId}</span>
            </div>
            <div className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
              <span className={`text-sm font-medium ${
                data.status === 'active' ? 'text-green-300' : 'text-red-300'
              }`}>
                {data.status === 'active' ? '✅ AKTIF' : '❌ TIDAK AKTIF'}
              </span>
            </div>
            {data.location && (
              <div className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
                <span className="text-purple-200 text-sm">📍 {data.location}</span>
              </div>
            )}
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-8 py-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white font-medium hover:bg-white/20 transition-all duration-300">
              <span className="flex items-center justify-center">
                <span>MULAI EKSPLORASI</span>
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </button>
            <button className="px-8 py-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium hover:shadow-lg transition-all duration-300">
              HUBUNGI KAMI
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-8 bg-white/5 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">
            Layanan <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-200">Unggulan</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {data.metadata?.services?.map((service, index) => (
              <div key={index} className="p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="text-4xl mb-4">🎨</div>
                <h3 className="text-xl font-bold text-white mb-2">{service}</h3>
                <p className="text-purple-200">Solusi kreatif terbaik untuk kebutuhan Anda</p>
              </div>
            )) || (
              <>
                <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20">
                  <div className="text-4xl mb-4">🎨</div>
                  <h3 className="text-xl font-bold text-white mb-2">Desain Kreatif</h3>
                  <p className="text-purple-200">Solusi desain yang inovatif dan memukau</p>
                </div>
                <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20">
                  <div className="text-4xl mb-4">🚀</div>
                  <h3 className="text-xl font-bold text-white mb-2">Branding</h3>
                  <p className="text-purple-200">Membangun identitas brand yang kuat</p>
                </div>
                <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20">
                  <div className="text-4xl mb-4">💡</div>
                  <h3 className="text-xl font-bold text-white mb-2">Konsultasi</h3>
                  <p className="text-purple-200">Panduan ahli untuk kesuksesan bisnis</p>
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-8">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Mari <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-200">Berkolaborasi</span>
          </h2>
          <p className="text-xl text-purple-100 mb-12">
            Siap untuk memulai proyek kreatif yang luar biasa? Hubungi kami sekarang!
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {data.email && (
              <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20">
                <div className="text-3xl mb-4">✉️</div>
                <h3 className="text-lg font-bold mb-2">Email</h3>
                <p className="text-purple-200">{data.email}</p>
              </div>
            )}
            {data.address && (
              <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20">
                <div className="text-3xl mb-4">📍</div>
                <h3 className="text-lg font-bold mb-2">Alamat</h3>
                <p className="text-purple-200">{data.address}</p>
              </div>
            )}
          </div>
          
          <button className="px-12 py-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
            MULAI PROJECT BARU
          </button>
        </div>
      </section>
    </div>
  );
} 