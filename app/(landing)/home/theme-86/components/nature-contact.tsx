import React from 'react';

export default function NatureContact() {
  return (
    <section className="py-16 px-4 max-w-3xl mx-auto animate-nature-fade-in">
      <h2 className="text-2xl md:text-3xl font-bold text-green-900 mb-10 text-center font-sans">Kontak Kami</h2>
      <div className="relative bg-white rounded-2xl shadow p-8">
        {/* SVG daun dekorasi */}
        <svg className="absolute -top-8 -left-8 w-20 h-20 opacity-20" viewBox="0 0 64 64" fill="none"><ellipse cx="32" cy="48" rx="28" ry="12" fill="#bbf7d0" /><path d="M8 48 Q24 8 32 48 Q40 24 56 48" stroke="#4ade80" strokeWidth="3" fill="none" /></svg>
        <form className="relative z-10 space-y-6">
          <div>
            <label className="block text-green-700 mb-1 font-sans">Nama</label>
            <input type="text" className="w-full px-4 py-3 border border-green-200 rounded-full focus:outline-none focus:border-green-400 bg-green-50 text-green-900" placeholder="Nama Anda" />
          </div>
          <div>
            <label className="block text-green-700 mb-1 font-sans">Email</label>
            <input type="email" className="w-full px-4 py-3 border border-green-200 rounded-full focus:outline-none focus:border-green-400 bg-green-50 text-green-900" placeholder="Email Anda" />
          </div>
          <div>
            <label className="block text-green-700 mb-1 font-sans">Pesan</label>
            <textarea rows={4} className="w-full px-4 py-3 border border-green-200 rounded-2xl focus:outline-none focus:border-green-400 bg-green-50 text-green-900 resize-none" placeholder="Tulis pesan Anda..." />
          </div>
          <button type="submit" className="w-full px-6 py-3 bg-green-500 text-white rounded-full font-semibold hover:bg-green-600 transition-all duration-200">Kirim Pesan</button>
        </form>
      </div>
    </section>
  );
} 