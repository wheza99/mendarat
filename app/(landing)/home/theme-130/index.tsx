import React, { useRef, useEffect, useState } from "react";

const milestones = [
  {
    title: "Mulai Perjalanan",
    desc: "Daftar dan buat akun untuk memulai perjalanan digital Anda.",
    icon: "🚀",
    detail: "Dengan satu klik, Anda sudah selangkah lebih dekat ke kesuksesan online."
  },
  {
    title: "Bangun Brand",
    desc: "Kustomisasi landing page sesuai identitas bisnis.",
    icon: "🎨",
    detail: "Pilih warna, font, dan layout yang mencerminkan brand Anda."
  },
  {
    title: "Publikasi",
    desc: "Luncurkan landing page ke publik dengan mudah.",
    icon: "🌐",
    detail: "Hanya butuh satu klik untuk go live dan mulai menjangkau pelanggan."
  },
  {
    title: "Analisa & Kembangkan",
    desc: "Pantau performa dan kembangkan fitur baru.",
    icon: "📈",
    detail: "Gunakan insight untuk terus meningkatkan konversi dan engagement."
  },
];

export default function HomePageTheme130() {
  const [activeMilestone, setActiveMilestone] = useState<number|null>(null);
  const [progress, setProgress] = useState(0);
  const timelineRef = useRef<HTMLDivElement>(null);

  // Scroll progress bar
  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return;
      const rect = timelineRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const totalHeight = rect.height - windowHeight;
      const scrolled = Math.min(Math.max(-rect.top, 0), totalHeight);
      setProgress(totalHeight > 0 ? (scrolled / totalHeight) * 100 : 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-white to-yellow-100 text-gray-900 font-sans relative">
      {/* Sticky Progress Bar */}
      <div className="fixed left-8 top-1/4 h-1/2 flex flex-col items-center z-30">
        <div className="w-2 h-full bg-gray-200 rounded-full relative overflow-hidden">
          <div className="absolute left-0 top-0 w-2 bg-yellow-400 transition-all" style={{height: `${progress}%`}} />
        </div>
        <span className="mt-2 text-xs text-blue-900 font-bold">{Math.round(progress)}%</span>
      </div>

      {/* Hero Section */}
      <section className="min-h-[60vh] flex flex-col md:flex-row items-center justify-center gap-10 px-8 pt-24 pb-12 animate-fade-in">
        <div className="flex-1 flex flex-col items-start">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-blue-900">Jelajahi <span className="text-yellow-400">Perjalanan Digital</span> Anda</h1>
          <p className="text-lg text-blue-800 mb-6 max-w-md">Landing page dengan konsep timeline interaktif, roadmap jelas, dan pengalaman pengguna yang imersif.</p>
          <a href="#milestone" className="inline-block bg-yellow-400 text-blue-900 px-8 py-3 rounded-full font-bold shadow-lg hover:bg-yellow-500 transition">Lihat Roadmap</a>
        </div>
        <div className="flex-1 flex items-center justify-center">
          {/* SVG Illustration */}
          <svg width="260" height="260" viewBox="0 0 260 260" fill="none"><circle cx="130" cy="130" r="120" fill="#fff" stroke="#1e3a8a" strokeWidth="8"/><path d="M60 180 Q130 100 200 180" stroke="#facc15" strokeWidth="8" fill="none"/><circle cx="60" cy="180" r="14" fill="#facc15" stroke="#1e3a8a" strokeWidth="4"/><circle cx="200" cy="180" r="14" fill="#facc15" stroke="#1e3a8a" strokeWidth="4"/><circle cx="130" cy="100" r="18" fill="#1e3a8a" stroke="#facc15" strokeWidth="4"/></svg>
        </div>
      </section>

      {/* Timeline/Milestone Section */}
      <section id="milestone" ref={timelineRef} className="max-w-3xl mx-auto py-20 px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-blue-900">Roadmap Perjalanan</h2>
        <div className="relative border-l-4 border-blue-900 pl-8">
          {milestones.map((m, i) => (
            <div key={i} className="mb-12 group animate-fade-in">
              <div className="absolute -left-6 top-0 w-10 h-10 rounded-full bg-yellow-400 border-4 border-blue-900 flex items-center justify-center text-2xl font-bold shadow-lg">{m.icon}</div>
              <div className={`bg-white rounded-2xl shadow-lg p-6 ml-6 transition-all cursor-pointer ${activeMilestone===i?'ring-4 ring-yellow-300 scale-105':''}`} onClick={()=>setActiveMilestone(activeMilestone===i?null:i)}>
                <h3 className="text-xl font-bold text-blue-900 mb-2">{m.title}</h3>
                <p className="text-blue-800 mb-2">{m.desc}</p>
                {activeMilestone===i && (
                  <div className="mt-2 text-gray-700 animate-fade-in">
                    <hr className="my-2 border-blue-100" />
                    <span>{m.detail}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 flex justify-center items-center">
        <div className="max-w-2xl w-full text-center bg-white/60 backdrop-blur-md rounded-3xl shadow-2xl p-12 flex flex-col items-center animate-fade-in border border-blue-200 hover:bg-white/80 transition-all">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-blue-900">Siap Memulai Perjalanan Anda?</h2>
          <p className="mb-8 text-lg text-blue-800">Gabung sekarang dan nikmati pengalaman landing page yang interaktif dan inovatif.</p>
          <a href="#" className="inline-block bg-blue-900 text-yellow-400 px-10 py-4 rounded-full font-bold shadow-lg hover:bg-yellow-400 hover:text-blue-900 transition-all glassmorphism">Daftar Sekarang</a>
        </div>
      </section>

      {/* Animasi CSS */}
      <style jsx>{`
        .animate-fade-in {
          opacity: 0;
          animation: fadeIn 0.8s forwards;
        }
        @keyframes fadeIn {
          to { opacity: 1; }
        }
        .glassmorphism {
          background: rgba(255,255,255,0.3);
          box-shadow: 0 8px 32px 0 rgba(31,38,135,0.15);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(255,255,255,0.18);
        }
      `}</style>
    </div>
  );
} 