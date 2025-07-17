"use client";

import React, { useState } from "react";

const features = [
  {
    icon: (
      <svg width="48" height="48" fill="none" viewBox="0 0 48 48"><circle cx="24" cy="24" r="20" fill="#6366f1"/><path d="M24 14v10l7 4" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
    ),
    title: "Realtime Analytics",
    desc: "Pantau data bisnis Anda secara langsung dan ambil keputusan lebih cepat."
  },
  {
    icon: (
      <svg width="48" height="48" fill="none" viewBox="0 0 48 48"><rect x="8" y="8" width="32" height="32" rx="8" fill="#0ea5e9"/><path d="M16 24l6 6 10-10" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
    ),
    title: "Keamanan Data",
    desc: "Data Anda terenkripsi dan aman dengan standar industri terkini."
  },
  {
    icon: (
      <svg width="48" height="48" fill="none" viewBox="0 0 48 48"><ellipse cx="24" cy="24" rx="20" ry="12" fill="#a21caf"/><path d="M12 24h24M24 12v24" stroke="#fff" strokeWidth="2.5" strokeLinecap="round"/></svg>
    ),
    title: "Integrasi Mudah",
    desc: "Integrasi API dan plugin ke berbagai platform tanpa ribet."
  }
];

const testimonials = [
  {
    name: "Rina Pratama",
    job: "CEO Startup",
    text: "Landing page ini sangat membantu bisnis kami tampil profesional dan meningkatkan konversi!",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    name: "Budi Santoso",
    job: "Digital Marketer",
    text: "Desainnya modern, clean, dan mudah dikustomisasi. Sangat direkomendasikan!",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    name: "Siti Rahma",
    job: "UI Designer",
    text: "Komponen dan layout-nya responsif, cocok untuk berbagai kebutuhan klien saya.",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg"
  }
];

export default function Theme221() {
  const [testiIdx, setTestiIdx] = useState(0);
  const nextTesti = () => setTestiIdx((testiIdx + 1) % testimonials.length);
  const prevTesti = () => setTestiIdx((testiIdx - 1 + testimonials.length) % testimonials.length);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-100 flex flex-col">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between px-8 md:px-24 py-20 gap-10">
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-extrabold text-blue-900 mb-6 leading-tight drop-shadow">Solusi Digital Modern untuk Bisnis Anda</h1>
          <p className="text-lg md:text-2xl text-blue-700 mb-8 max-w-xl">Bangun kepercayaan pelanggan dan tingkatkan penjualan dengan landing page profesional, cepat, dan mobile-friendly.</p>
          <a href="#fitur" className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-bold shadow-lg hover:scale-105 transition">Lihat Fitur</a>
        </div>
        <div className="flex-1 flex justify-center">
          {/* SVG Illustration */}
          <svg width="320" height="220" viewBox="0 0 320 220" fill="none"><ellipse cx="160" cy="110" rx="140" ry="90" fill="#e0e7ff"/><rect x="60" y="80" width="200" height="80" rx="20" fill="#6366f1"/><rect x="90" y="110" width="140" height="30" rx="10" fill="#fff"/><rect x="120" y="120" width="80" height="10" rx="5" fill="#a5b4fc"/></svg>
        </div>
      </section>

      {/* Features */}
      <section id="fitur" className="py-16 px-6 md:px-24 bg-white rounded-t-3xl shadow-lg -mt-10 z-10 relative">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-12">Fitur Unggulan</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {features.map((f, i) => (
            <div key={i} className="flex flex-col items-center text-center p-8 bg-blue-50 rounded-2xl shadow hover:shadow-xl transition">
              <div className="mb-6">{f.icon}</div>
              <div className="text-xl font-bold text-blue-800 mb-2">{f.title}</div>
              <div className="text-blue-600">{f.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonial Carousel */}
      <section className="py-16 px-6 md:px-24 flex flex-col items-center bg-gradient-to-r from-blue-100 via-white to-purple-100">
        <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-8">Apa Kata Mereka?</h2>
        <div className="relative max-w-xl w-full flex flex-col items-center">
          <button onClick={prevTesti} className="absolute left-0 top-1/2 -translate-y-1/2 bg-blue-200 hover:bg-blue-400 text-blue-900 rounded-full w-10 h-10 flex items-center justify-center shadow transition">&#8592;</button>
          <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center mx-12">
            <img src={testimonials[testiIdx].avatar} alt={testimonials[testiIdx].name} className="w-16 h-16 rounded-full mb-4 border-4 border-blue-200" />
            <div className="text-lg text-blue-800 font-semibold mb-2">{testimonials[testiIdx].name}</div>
            <div className="text-blue-500 text-sm mb-4">{testimonials[testiIdx].job}</div>
            <div className="text-blue-700 italic text-center">"{testimonials[testiIdx].text}"</div>
          </div>
          <button onClick={nextTesti} className="absolute right-0 top-1/2 -translate-y-1/2 bg-blue-200 hover:bg-blue-400 text-blue-900 rounded-full w-10 h-10 flex items-center justify-center shadow transition">&#8594;</button>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 md:px-24 text-center bg-gradient-to-r from-blue-600 to-purple-600">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Siap Meningkatkan Bisnis Anda?</h2>
        <p className="text-lg md:text-2xl text-blue-100 mb-8">Mulai sekarang dan dapatkan landing page profesional yang siap pakai!</p>
        <a href="#" className="inline-block px-10 py-4 bg-white text-blue-700 font-bold rounded-full shadow-lg hover:bg-blue-100 transition">Coba Gratis Sekarang</a>
      </section>
    </div>
  );
} 