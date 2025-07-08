import React from 'react';

export default function AuroraContact() {
  return (
    <section className="relative py-20 px-4 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-400/10 to-transparent"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 gradient-text-aurora">
            Hubungi Kami
          </h2>
          <p className="text-xl text-cyan-100 max-w-3xl mx-auto leading-relaxed">
            Siap bertransformasi digital? Konsultasikan kebutuhan Anda bersama kami.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Form Kontak */}
          <div className="aurora-card p-8">
            <h3 className="text-2xl font-bold mb-6 neon-text-cyan">
              Kirim Pesan
            </h3>
            <form className="space-y-6">
              <div>
                <label className="block text-cyan-100 text-sm font-medium mb-2">Nama</label>
                <input type="text" className="w-full px-4 py-3 bg-gradient-to-r from-cyan-400/10 to-green-400/10 border border-cyan-400/20 rounded-lg text-white placeholder-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-400/40 focus:border-transparent transition-all duration-300" placeholder="Nama Anda" />
              </div>
              <div>
                <label className="block text-cyan-100 text-sm font-medium mb-2">Email</label>
                <input type="email" className="w-full px-4 py-3 bg-gradient-to-r from-cyan-400/10 to-green-400/10 border border-cyan-400/20 rounded-lg text-white placeholder-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-400/40 focus:border-transparent transition-all duration-300" placeholder="Email Anda" />
              </div>
              <div>
                <label className="block text-cyan-100 text-sm font-medium mb-2">Pesan</label>
                <textarea rows={5} className="w-full px-4 py-3 bg-gradient-to-r from-cyan-400/10 to-green-400/10 border border-cyan-400/20 rounded-lg text-white placeholder-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-400/40 focus:border-transparent transition-all duration-300 resize-none" placeholder="Tulis pesan Anda..."></textarea>
              </div>
              <button type="submit" className="w-full btn-aurora py-4 rounded-lg font-semibold">
                Kirim Pesan
              </button>
            </form>
          </div>
          {/* Info Kontak */}
          <div className="space-y-8">
            <div className="aurora-card p-8">
              <h3 className="text-2xl font-bold mb-6 neon-text-green">
                Info Kontak
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <span className="text-2xl animate-aurora-pulse">📍</span>
                  <span className="text-cyan-100">Jl. Aurora No. 88, Jakarta</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-2xl animate-aurora-pulse">📧</span>
                  <span className="text-cyan-100">halo@auroralanding.com</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-2xl animate-aurora-pulse">📞</span>
                  <span className="text-cyan-100">+62 812-3456-7890</span>
                </div>
              </div>
            </div>
            <div className="aurora-card p-8">
              <h3 className="text-2xl font-bold mb-6 neon-text-indigo">
                Sosial Media
              </h3>
              <div className="flex gap-4">
                {[
                  { name: "Instagram", icon: "📸" },
                  { name: "LinkedIn", icon: "💼" },
                  { name: "Twitter", icon: "🐦" }
                ].map((s, i) => (
                  <a key={i} href="#" className="aurora-glass p-4 rounded-lg text-center hover:scale-105 transition-all duration-300">
                    <div className="text-2xl mb-2 animate-aurora-pulse">{s.icon}</div>
                    <div className="text-sm font-medium text-cyan-100">{s.name}</div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 