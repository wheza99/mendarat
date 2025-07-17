"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 32 32"><rect x="4" y="8" width="24" height="16" rx="4" fill="#2563eb"/><path d="M8 16h16" stroke="#fff" strokeWidth="2" strokeLinecap="round"/></svg>
    ),
    title: "Realtime Collaboration",
    desc: "Work together with your team in real time, from anywhere."
  },
  {
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 32 32"><circle cx="16" cy="16" r="12" fill="#fb923c"/><path d="M16 10v6l4 2" stroke="#fff" strokeWidth="2" strokeLinecap="round"/></svg>
    ),
    title: "Smart Notifications",
    desc: "Stay updated with intelligent, non-intrusive alerts."
  },
  {
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 32 32"><rect x="8" y="8" width="16" height="16" rx="8" fill="#22d3ee"/><path d="M16 12v4l2 2" stroke="#fff" strokeWidth="2" strokeLinecap="round"/></svg>
    ),
    title: "Cloud Sync",
    desc: "Your data is always safe and accessible in the cloud."
  },
];

const testimonials = [
  {
    name: "Ayu Pratama",
    role: "Product Manager",
    content: "Platform ini sangat membantu tim kami berkolaborasi dengan cepat dan efisien!",
    avatar: "AP"
  },
  {
    name: "Rizky Saputra",
    role: "Software Engineer",
    content: "Fitur notifikasinya cerdas, tidak mengganggu fokus kerja saya.",
    avatar: "RS"
  },
  {
    name: "Dewi Lestari",
    role: "UI/UX Designer",
    content: "Desainnya modern dan mudah digunakan. Sangat direkomendasikan!",
    avatar: "DL"
  },
];

const Theme222: React.FC = () => {
  const [testimonialIdx, setTestimonialIdx] = useState(0);

  const nextTestimonial = () => setTestimonialIdx((i) => (i + 1) % testimonials.length);
  const prevTestimonial = () => setTestimonialIdx((i) => (i - 1 + testimonials.length) % testimonials.length);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-blue-100 text-gray-900 flex flex-col">
      {/* Header */}
      <header className="w-full py-6 px-8 flex items-center justify-between bg-white/80 shadow-sm z-10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white font-bold text-xl">T</div>
          <span className="text-2xl font-extrabold tracking-tight bg-gradient-to-r from-blue-700 to-orange-400 bg-clip-text text-transparent">Techly</span>
        </div>
        <nav className="hidden md:flex gap-8 font-medium text-blue-900">
          <a href="#features" className="hover:text-orange-500 transition">Features</a>
          <a href="#testimonials" className="hover:text-orange-500 transition">Testimonials</a>
          <a href="#cta" className="hover:text-orange-500 transition">Get Started</a>
        </nav>
        <Button className="bg-orange-400 hover:bg-orange-500 text-white font-bold px-6 py-2 rounded-lg shadow">Sign Up</Button>
      </header>

      {/* Hero Section */}
      <section className="flex-1 flex flex-col md:flex-row items-center justify-center gap-12 px-8 py-20 md:py-32 relative">
        <div className="max-w-xl z-10">
          <span className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-semibold mb-4">#1 Team Productivity Platform</span>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
            Boost Your Team's <span className="text-orange-500">Productivity</span> <br /> with <span className="text-blue-600">Techly</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8">All-in-one platform untuk kolaborasi, sinkronisasi, dan inovasi. Coba gratis sekarang!</p>
          <div className="flex gap-4">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-3 rounded-lg">Coba Gratis</Button>
            <Button variant="outline" className="border-blue-600 text-blue-700 font-bold px-8 py-3 rounded-lg">Lihat Demo</Button>
          </div>
        </div>
        {/* SVG Illustration */}
        <div className="w-full max-w-md z-0">
          <svg viewBox="0 0 400 300" fill="none" className="w-full h-auto">
            <rect x="40" y="60" width="320" height="180" rx="24" fill="#2563eb" fillOpacity="0.08" />
            <rect x="80" y="100" width="240" height="100" rx="16" fill="#2563eb" fillOpacity="0.15" />
            <circle cx="200" cy="150" r="48" fill="#fb923c" fillOpacity="0.18" />
            <rect x="160" y="130" width="80" height="40" rx="8" fill="#2563eb" fillOpacity="0.5" />
            <rect x="180" y="145" width="40" height="10" rx="5" fill="#fff" />
            <rect x="180" y="160" width="40" height="6" rx="3" fill="#fff" fillOpacity="0.7" />
          </svg>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 px-8 bg-white/80">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-blue-900">Powerful Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((f, i) => (
              <div key={i} className="bg-blue-50 rounded-2xl p-8 flex flex-col items-center shadow hover:shadow-lg transition">
                <div className="mb-4">{f.icon}</div>
                <div className="text-xl font-bold mb-2 text-blue-800">{f.title}</div>
                <div className="text-gray-700 text-center">{f.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 px-8 bg-gradient-to-r from-blue-50 via-white to-orange-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-blue-900">What Our Users Say</h2>
          <div className="relative flex flex-col items-center">
            <div className="bg-white rounded-2xl shadow-lg p-8 max-w-xl text-center">
              <div className="flex items-center justify-center mb-4">
                <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl font-bold mr-2">
                  {testimonials[testimonialIdx].avatar}
                </div>
                <div className="text-left">
                  <div className="font-bold text-blue-800">{testimonials[testimonialIdx].name}</div>
                  <div className="text-sm text-gray-500">{testimonials[testimonialIdx].role}</div>
                </div>
              </div>
              <div className="text-lg text-gray-800 italic">"{testimonials[testimonialIdx].content}"</div>
            </div>
            <div className="flex gap-4 mt-6">
              <button onClick={prevTestimonial} className="w-10 h-10 rounded-full bg-blue-100 hover:bg-blue-200 flex items-center justify-center text-blue-600 font-bold text-xl">&#8592;</button>
              <button onClick={nextTestimonial} className="w-10 h-10 rounded-full bg-blue-100 hover:bg-blue-200 flex items-center justify-center text-blue-600 font-bold text-xl">&#8594;</button>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section id="cta" className="py-20 px-8 bg-orange-50">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-orange-600">Ready to Supercharge Your Team?</h2>
          <p className="text-lg text-gray-700 mb-8">Daftar sekarang dan rasakan kemudahan kolaborasi modern bersama Techly.</p>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-10 py-4 rounded-xl text-xl shadow-lg">Mulai Sekarang</Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-8 px-8 bg-white/80 text-center text-gray-500 text-sm mt-auto">
        &copy; {new Date().getFullYear()} Techly. All rights reserved.
      </footer>
    </div>
  );
};

export default Theme222; 