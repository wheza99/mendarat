import React from 'react';

export default function FuturisticContact() {
  return (
    <section className="relative py-20 px-4 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-100/10 to-transparent"></div>
      </div>
      <div className="relative z-10 max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 gradient-text-futuristic">
            Kontak
          </h2>
          <p className="text-xl text-blue-400 max-w-xl mx-auto leading-relaxed">
            Konsultasi gratis, tanya harga, atau diskusi project? Kirim pesan ke kami!
          </p>
        </div>
        <div className="futuristic-card p-8">
          <form className="grid grid-cols-1 gap-6">
            <input
              type="text"
              placeholder="Nama"
              className="futuristic-input px-6 py-4 rounded-lg text-lg bg-white/60 border border-blue-200/40 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
            <input
              type="email"
              placeholder="Email"
              className="futuristic-input px-6 py-4 rounded-lg text-lg bg-white/60 border border-blue-200/40 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
            <textarea
              placeholder="Pesan"
              rows={4}
              className="futuristic-input px-6 py-4 rounded-lg text-lg bg-white/60 border border-blue-200/40 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
            <button
              type="submit"
              className="btn-futuristic px-8 py-4 rounded-xl font-semibold w-full"
            >
              Kirim Pesan
            </button>
          </form>
          <div className="mt-10 text-center text-blue-400">
            <div className="mb-2">
              <span className="font-semibold neon-text-blue">Email:</span> hello@futuristic.id
            </div>
            <div>
              <span className="font-semibold neon-text-blue">WhatsApp:</span> 0812-3456-7890
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 