import React from 'react';

const features = [
  { color: 'bg-pink-500', icon: '🚀', title: 'Super Cepat', desc: 'Akses instan dan performa maksimal.' },
  { color: 'bg-yellow-400', icon: '🎨', title: 'Warna Vibrant', desc: 'Tampilan penuh warna yang memikat.' },
  { color: 'bg-blue-500', icon: '🔒', title: 'Keamanan', desc: 'Data Anda aman dan terenkripsi.' },
  { color: 'bg-green-500', icon: '⚡', title: 'Responsif', desc: 'Optimal di semua perangkat.' },
];

const stats = [
  { label: 'Pengguna', value: 15000, color: 'text-pink-500' },
  { label: 'Proyek', value: 420, color: 'text-yellow-500' },
  { label: 'Penghargaan', value: 12, color: 'text-blue-500' },
  { label: 'Tahun', value: 5, color: 'text-green-500' },
];

const testimonials = [
  { name: 'Dewi Lestari', text: 'Landing page ini benar-benar beda dan menarik!', img: 'https://randomuser.me/api/portraits/women/44.jpg', color: 'bg-pink-100' },
  { name: 'Andi Wijaya', text: 'Warna dan animasinya bikin brand kami makin hidup.', img: 'https://randomuser.me/api/portraits/men/36.jpg', color: 'bg-yellow-100' },
  { name: 'Siti Rahma', text: 'User experience-nya sangat menyenangkan.', img: 'https://randomuser.me/api/portraits/women/65.jpg', color: 'bg-blue-100' },
];

const faqs = [
  { q: 'Apakah bisa custom warna?', a: 'Tentu, semua warna bisa disesuaikan dengan identitas brand Anda.' },
  { q: 'Apakah mobile friendly?', a: 'Sangat responsif dan optimal di semua perangkat.' },
  { q: 'Berapa lama proses pembuatan?', a: 'Rata-rata 2-4 minggu tergantung kebutuhan.' },
];

const partners = [
  'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg',
  'https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg',
  'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg',
  'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg',
];

const timeline = [
  { year: '2022', title: 'Ide Lahir', desc: 'Konsep color block dan zig-zag mulai dirancang.' },
  { year: '2023', title: 'Pengembangan', desc: 'Mulai membangun dengan teknologi modern.' },
  { year: '2024', title: 'Go Public', desc: 'Template siap digunakan untuk semua orang.' },
];

export default function HomePageTheme128() {
  // Progress Bar Scroll
  React.useEffect(() => {
    const handleScroll = () => {
      const bar = document.getElementById('progress-bar');
      if (!bar) return;
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const percent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      bar.style.width = percent + '%';
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Back to Top Button
  const [showTop, setShowTop] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 300);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-400 via-yellow-200 to-blue-300 text-gray-900 font-sans relative">
      {/* Progress Bar Scroll */}
      <div className="fixed top-0 left-0 w-full h-1 bg-yellow-200 z-[9999]">
        <div id="progress-bar" className="h-full bg-gradient-to-r from-pink-500 via-yellow-400 to-blue-500 transition-all duration-200" style={{width:'0%'}} />
      </div>

      {/* Hero Section */}
      <section className="w-full flex flex-col md:flex-row items-center justify-between px-8 py-24 gap-10 bg-gradient-to-r from-pink-500 via-yellow-400 to-blue-500 text-white animate-fade-in">
        <div className="flex-1">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight drop-shadow-lg">Landing Page <span className="text-yellow-300">Vibrant</span><br />Color Block</h1>
          <p className="text-xl mb-8 text-white/90">Desain zig-zag, warna tebal, dan animasi modern untuk brand yang ingin tampil beda dan berani.</p>
          <a href="#cta" className="inline-block bg-white text-pink-600 px-10 py-4 rounded-full font-bold shadow-lg hover:bg-yellow-300 hover:text-blue-700 transition">Mulai Sekarang</a>
        </div>
        <div className="flex-1 flex justify-center">
          <svg width="260" height="200" viewBox="0 0 260 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="20" y="40" width="220" height="120" rx="32" fill="#fff" />
            <rect x="60" y="80" width="140" height="40" rx="12" fill="#f472b6" />
            <circle cx="80" cy="100" r="12" fill="#facc15" />
            <rect x="100" y="90" width="80" height="20" rx="6" fill="#3b82f6" />
            <rect x="100" y="120" width="60" height="10" rx="5" fill="#22c55e" />
          </svg>
        </div>
      </section>

      {/* Statistik Section */}
      <section className="max-w-5xl mx-auto py-16 px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center animate-fade-in">
        {stats.map((s, i) => (
          <div key={i} className="flex flex-col items-center">
            <CountUp end={s.value} className={`text-4xl md:text-5xl font-extrabold mb-2 ${s.color}`} />
            <span className="text-lg font-semibold text-gray-700">{s.label}</span>
          </div>
        ))}
      </section>

      {/* Features Zig-Zag Section */}
      <section className="max-w-6xl mx-auto py-20 px-4 flex flex-col gap-16">
        {features.map((f, i) => (
          <div key={i} className={`flex flex-col md:flex-row ${i % 2 === 1 ? 'md:flex-row-reverse' : ''} items-center gap-10 animate-fade-in`} style={{animationDelay: `${i * 0.1 + 0.2}s`}}>
            <div className={`flex-1 w-full rounded-3xl shadow-xl p-10 ${f.color} text-white flex flex-col items-center justify-center`}>
              <span className="text-5xl mb-4 animate-bounce drop-shadow-lg">{f.icon}</span>
              <h3 className="text-2xl font-bold mb-2">{f.title}</h3>
              <p className="text-white/90">{f.desc}</p>
            </div>
            <div className="flex-1 w-full flex justify-center">
              <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="10" y="10" width="100" height="100" rx="24" fill="#fff" />
                <rect x="30" y="40" width="60" height="20" rx="6" fill="#f472b6" />
                <rect x="30" y="70" width="40" height="10" rx="5" fill="#3b82f6" />
              </svg>
            </div>
          </div>
        ))}
      </section>

      {/* Partner Logo Section */}
      <section className="max-w-4xl mx-auto py-12 px-4 grid grid-cols-2 md:grid-cols-4 gap-8 items-center animate-fade-in">
        {partners.map((logo, i) => (
          <div key={i} className="flex justify-center items-center bg-white rounded-xl shadow p-4">
            <img src={logo} alt="Partner Logo" className="h-10" />
          </div>
        ))}
      </section>

      {/* Timeline Section */}
      <section className="max-w-3xl mx-auto py-20 px-4 animate-fade-in">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-10 text-center text-pink-600">Perjalanan Kami</h2>
        <div className="relative border-l-4 border-yellow-400 pl-8">
          {timeline.map((t, i) => (
            <div key={i} className="mb-12 relative animate-fade-in" style={{animationDelay: `${i * 0.15 + 0.2}s`}}>
              <div className="absolute -left-6 top-0 w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg border-4 border-white">{t.year}</div>
              <div className="bg-white rounded-xl shadow-lg p-6 ml-4">
                <h4 className="text-xl font-bold text-pink-500 mb-1">{t.title}</h4>
                <p className="text-gray-600">{t.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonial Carousel Section */}
      <section className="py-20 px-4 animate-fade-in">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-8 text-pink-600">Apa Kata Klien?</h2>
          <TestimonialCarousel testimonials={testimonials} />
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="max-w-2xl mx-auto py-16 px-4 animate-fade-in">
        <h2 className="text-2xl font-bold mb-8 text-center text-blue-600">Pertanyaan Umum</h2>
        <FAQAccordion faqs={faqs} />
      </section>

      {/* CTA Section */}
      <section id="cta" className="py-20 px-4 flex justify-center items-center">
        <div className="max-w-xl w-full text-center bg-gradient-to-r from-pink-500 via-yellow-400 to-blue-500 rounded-3xl shadow-2xl p-12 animate-bounce-slow">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-white drop-shadow">Siap Tampil Berbeda?</h2>
          <p className="mb-8 text-lg text-white/90">Dapatkan landing page vibrant dan modern untuk brand Anda sekarang juga.</p>
          <a href="#" className="inline-block bg-white text-pink-600 px-10 py-4 rounded-full font-bold shadow hover:bg-yellow-300 hover:text-blue-700 transition">Konsultasi Gratis</a>
        </div>
      </section>

      {/* Back to Top Button */}
      {showTop && (
        <button onClick={() => window.scrollTo({top:0,behavior:'smooth'})} className="fixed bottom-24 right-6 bg-gradient-to-r from-pink-500 via-yellow-400 to-blue-500 text-white p-3 rounded-full shadow-lg z-[9999] hover:opacity-80 transition-all animate-bounce">
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 19V5" /><path d="M5 12l7-7 7 7" /></svg>
        </button>
      )}

      {/* Animasi CSS */}
      <style jsx>{`
        .animate-fade-in {
          opacity: 0;
          animation: fadeIn 0.8s forwards;
        }
        @keyframes fadeIn {
          to { opacity: 1; }
        }
        .animate-bounce-slow {
          animation: bounce 2.5s infinite;
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-18px); }
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
function TestimonialCarousel({ testimonials }: { testimonials: { name: string; text: string; img: string; color: string }[] }) {
  const [idx, setIdx] = React.useState(0);
  React.useEffect(() => {
    const timer = setInterval(() => setIdx(i => (i + 1) % testimonials.length), 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);
  return (
    <div className="relative">
      <div className={`rounded-2xl shadow-xl p-8 flex flex-col items-center ${testimonials[idx].color} animate-fade-in`}>
        <img src={testimonials[idx].img} alt={testimonials[idx].name} className="w-16 h-16 rounded-full mb-4 border-2 border-pink-200" />
        <p className="text-lg italic mb-2 text-gray-700">“{testimonials[idx].text}”</p>
        <span className="block font-bold text-pink-600">- {testimonials[idx].name}</span>
      </div>
      <div className="flex justify-center gap-2 mt-4">
        {testimonials.map((_, i: number) => (
          <button key={i} onClick={() => setIdx(i)} className={`w-3 h-3 rounded-full ${i === idx ? 'bg-pink-600' : 'bg-gray-300'} transition-all`} />
        ))}
      </div>
    </div>
  );
}

// Komponen FAQAccordion
function FAQAccordion({ faqs }: { faqs: { q: string; a: string }[] }) {
  const [open, setOpen] = React.useState<number | null>(null);
  return (
    <div className="space-y-4">
      {faqs.map((faq, i) => (
        <div key={i} className="border-b-2 border-yellow-400 pb-2 bg-white rounded-xl shadow p-4">
          <button onClick={() => setOpen(open === i ? null : i)} className="w-full text-left flex justify-between items-center font-semibold text-lg py-2 focus:outline-none text-blue-600">
            <span>{faq.q}</span>
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className={`transform transition-transform ${open === i ? 'rotate-180' : ''}`}><path d="M6 9l6 6 6-6" /></svg>
          </button>
          <div className={`overflow-hidden transition-all duration-300 ${open === i ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}> <p className="text-gray-500 mt-2">{faq.a}</p></div>
        </div>
      ))}
    </div>
  );
} 