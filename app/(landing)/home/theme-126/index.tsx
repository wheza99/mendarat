import React from 'react';

const articles = [
  {
    title: 'Masa Depan Arsitektur Digital',
    desc: 'Bagaimana teknologi mengubah cara kita membangun dan merancang ruang.',
    img: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
  },
  {
    title: 'Desain Editorial Modern',
    desc: 'Menggabungkan estetika majalah dengan web interaktif masa kini.',
    img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
  },
  {
    title: 'Tips Branding Personal',
    desc: 'Strategi membangun citra profesional di era digital.',
    img: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80',
  },
];

const team = [
  { name: 'Ayu Pratiwi', role: 'Editor-in-Chief', img: 'https://randomuser.me/api/portraits/women/68.jpg' },
  { name: 'Rizky Saputra', role: 'Creative Director', img: 'https://randomuser.me/api/portraits/men/32.jpg' },
  { name: 'Siti Rahma', role: 'Content Writer', img: 'https://randomuser.me/api/portraits/women/65.jpg' },
  { name: 'Budi Santoso', role: 'Photographer', img: 'https://randomuser.me/api/portraits/men/44.jpg' },
];

const stats = [
  { label: 'Artikel', value: 320 },
  { label: 'Pembaca', value: 12500 },
  { label: 'Penghargaan', value: 8 },
  { label: 'Tahun Aktif', value: 5 },
];

const testimonials = [
  { name: 'Dewi Lestari', text: 'Sangat inspiratif dan informatif! Desainnya juga enak dibaca.', img: 'https://randomuser.me/api/portraits/women/44.jpg' },
  { name: 'Andi Wijaya', text: 'Landing page ini membuat brand kami terlihat profesional.', img: 'https://randomuser.me/api/portraits/men/36.jpg' },
  { name: 'Siti Rahma', text: 'Konten dan tampilannya sangat relevan untuk generasi sekarang.', img: 'https://randomuser.me/api/portraits/women/65.jpg' },
];

export default function HomePageTheme126() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-blue-50 to-yellow-50 text-gray-900 font-serif">
      {/* Hero Editorial */}
      <section className="w-full px-8 py-20 border-b border-blue-100 bg-gradient-to-b from-pink-100 via-white to-blue-50">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6 tracking-tight" style={{letterSpacing:'-0.04em'}}>INSPIRASI <span className="underline decoration-pink-500 decoration-8 underline-offset-8">DESAIN</span> <span className="text-blue-600">MASA KINI</span></h1>
            <p className="text-xl text-gray-600 mb-8 max-w-lg">Landing page dengan nuansa editorial magazine, cocok untuk brand kreatif, agensi, atau personal branding yang ingin tampil beda dan berkelas.</p>
            <a href="#cta" className="inline-block text-lg font-bold text-pink-600 border-b-4 border-pink-400 pb-1 transition-all duration-300 hover:border-b-8 hover:text-blue-600 hover:bg-yellow-100 rounded">Lihat Selengkapnya</a>
          </div>
          <div className="flex-1 flex justify-center">
            <img src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=500&q=80" alt="Editorial Hero" className="rounded-3xl shadow-xl w-full max-w-xs md:max-w-sm animate-fade-in" />
          </div>
        </div>
      </section>

      {/* Highlighted Articles */}
      <section className="max-w-6xl mx-auto py-20 px-4 grid grid-cols-1 md:grid-cols-3 gap-12">
        {articles.map((a, i) => (
          <div key={i} className="flex flex-col h-full bg-white rounded-2xl shadow-lg overflow-hidden border border-blue-100 transform transition-all duration-300 hover:scale-105 hover:shadow-pink-200 animate-fade-in" style={{animationDelay: `${i * 0.1 + 0.2}s`}}>
            <img src={a.img} alt={a.title} className="w-full h-48 object-cover" />
            <div className="p-6 flex-1 flex flex-col">
              <h3 className="text-2xl font-bold mb-2 leading-snug hover:underline decoration-pink-400 underline-offset-4 cursor-pointer transition-colors duration-200 hover:text-blue-600">{a.title}</h3>
              <p className="text-gray-600 mb-4 flex-1">{a.desc}</p>
              <a href="#" className="mt-auto text-blue-600 font-semibold hover:underline underline-offset-4 hover:text-pink-600 transition-colors duration-200">Baca Artikel</a>
            </div>
          </div>
        ))}
      </section>

      {/* Team Editorial Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-50 via-white to-pink-50 border-y border-blue-100">
        <div className="max-w-5xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-blue-600 tracking-tight">Tim Editorial</h2>
          <p className="text-lg text-gray-600">Kreator di balik inspirasi dan konten berkualitas.</p>
        </div>
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {team.map((t, i) => (
            <div key={i} className="flex flex-col items-center bg-white rounded-2xl shadow-lg p-6 border border-pink-100 transform transition-all duration-500 hover:scale-105 animate-slide-in-up" style={{animationDelay: `${i * 0.15 + 0.2}s`}}>
              <img src={t.img} alt={t.name} className="w-24 h-24 rounded-full mb-4 border-4 border-blue-200 shadow-md" />
              <span className="font-bold text-blue-600 text-lg mb-1">{t.name}</span>
              <span className="text-pink-500 text-sm">{t.role}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Inspirational Quote */}
      <section className="py-16 px-4 bg-gradient-to-r from-pink-50 via-white to-yellow-50 border-y border-blue-100">
        <div className="max-w-3xl mx-auto text-center">
          <blockquote className="text-2xl md:text-3xl italic font-semibold text-gray-700 mb-4 animate-fade-in">“Desain bukan hanya soal tampilan, tapi juga bagaimana sesuatu bekerja dan dirasakan.”</blockquote>
          <span className="block text-lg text-pink-500 font-bold">- Steve Jobs</span>
        </div>
      </section>

      {/* Newsletter Signup Section */}
      <section className="py-20 px-4 flex justify-center items-center bg-gradient-to-r from-yellow-50 via-white to-blue-50 border-b border-blue-100">
        <div className="max-w-xl w-full text-center bg-white rounded-2xl shadow-xl p-10 animate-fade-in">
          <h3 className="text-2xl font-bold mb-4 text-blue-600">Dapatkan Artikel & Inspirasi Terbaru</h3>
          <form className="flex flex-col sm:flex-row gap-4 justify-center">
            <input type="email" placeholder="Email Anda" className="flex-1 px-4 py-3 rounded-lg border border-blue-200 focus:outline-none focus:ring-2 focus:ring-pink-400 transition" required />
            <button type="submit" className="px-8 py-3 bg-pink-600 text-white font-bold rounded-lg shadow hover:bg-blue-600 transition-colors duration-200">Langganan</button>
          </form>
        </div>
      </section>

      {/* CTA Editorial */}
      <section id="cta" className="py-20 px-4 flex justify-center items-center">
        <div className="max-w-xl w-full text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6 tracking-tight text-blue-600">Siap Membuat Cerita Visual Anda?</h2>
          <a href="#" className="inline-block text-lg font-bold text-white bg-pink-600 px-10 py-4 rounded-full shadow-lg border-b-4 border-yellow-400 relative group overflow-hidden transition-all duration-300 hover:bg-blue-600">
            <span className="relative z-10">Konsultasi Gratis</span>
            <span className="absolute left-0 bottom-0 w-full h-1 bg-yellow-400 rounded-full group-hover:h-2 transition-all duration-300 z-0"></span>
          </a>
        </div>
      </section>

      {/* Statistik & Pencapaian Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-50 via-white to-yellow-50 border-y border-blue-100">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((s, i) => (
            <div key={i} className="flex flex-col items-center animate-fade-in" style={{animationDelay: `${i * 0.1 + 0.2}s`}}>
              <CountUp end={s.value} className="text-4xl md:text-5xl font-extrabold text-pink-600 mb-2" />
              <span className="text-lg text-blue-600 font-semibold">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonial Carousel Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-pink-50 via-white to-blue-50 border-y border-blue-100">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-8 text-blue-600">Apa Kata Pembaca?</h2>
          <TestimonialCarousel testimonials={testimonials} />
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
        .animate-slide-in-up {
          opacity: 0;
          transform: translateY(40px);
          animation: slideInUp 0.8s forwards;
        }
        @keyframes slideInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}

// Komponen CountUp
function CountUp({ end, className }: { end: number; className?: string }) {
  const [count, setCount] = React.useState(0);
  React.useEffect(() => {
    let start = 0;
    const duration = 1200;
    const step = Math.ceil(end / (duration / 16));
    let raf: number | undefined;
    function update() {
      start += step;
      if (start >= end) {
        setCount(end);
        return;
      }
      setCount(start);
      raf = requestAnimationFrame(update);
    }
    update();
    return () => { if (raf) cancelAnimationFrame(raf); };
  }, [end]);
  return <span className={className}>{count.toLocaleString()}</span>;
}

// Komponen TestimonialCarousel
function TestimonialCarousel({ testimonials }: { testimonials: { name: string; text: string; img: string }[] }) {
  const [idx, setIdx] = React.useState(0);
  React.useEffect(() => {
    const timer = setInterval(() => setIdx(i => (i + 1) % testimonials.length), 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);
  return (
    <div className="relative">
      <div className="bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center animate-fade-in">
        <img src={testimonials[idx].img} alt={testimonials[idx].name} className="w-16 h-16 rounded-full mb-4 border-2 border-pink-200" />
        <p className="text-lg italic mb-2 text-gray-700">“{testimonials[idx].text}”</p>
        <span className="block font-bold text-blue-600">- {testimonials[idx].name}</span>
      </div>
      <div className="flex justify-center gap-2 mt-4">
        {testimonials.map((_, i: number) => (
          <button key={i} onClick={() => setIdx(i)} className={`w-3 h-3 rounded-full ${i === idx ? 'bg-pink-600' : 'bg-blue-200'} transition-all`} />
        ))}
      </div>
    </div>
  );
} 