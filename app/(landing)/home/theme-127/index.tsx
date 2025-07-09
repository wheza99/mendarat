import React from 'react';

const features = [
  { icon: <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M8 12l2 2 4-4" /></svg>, title: 'Aman & Terpercaya', desc: 'Keamanan data dan privasi Anda terjamin.' },
  { icon: <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="4" /><path d="M8 12h8" /></svg>, title: 'Desain Bersih', desc: 'Tampilan minimalis, fokus pada konten.' },
  { icon: <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 20V10" /><path d="M18 20V4" /><path d="M6 20v-4" /></svg>, title: 'Mudah Dikembangkan', desc: 'Struktur modular, siap untuk scale up.' },
];

const steps = [
  { label: '1', title: 'Konsultasi', desc: 'Diskusi kebutuhan dan tujuan Anda.' },
  { label: '2', title: 'Desain', desc: 'Pembuatan desain sesuai identitas brand.' },
  { label: '3', title: 'Pengembangan', desc: 'Implementasi dan optimasi website.' },
  { label: '4', title: 'Go Live', desc: 'Website siap digunakan dan dipromosikan.' },
];

const stats = [
  { label: 'Klien', value: 120 },
  { label: 'Proyek', value: 340 },
  { label: 'Penghargaan', value: 7 },
  { label: 'Tahun', value: 4 },
];

const testimonials = [
  { name: 'Dewi Lestari', text: 'Sangat profesional dan hasilnya memuaskan!', img: 'https://randomuser.me/api/portraits/women/44.jpg' },
  { name: 'Andi Wijaya', text: 'Desain minimalisnya benar-benar beda.', img: 'https://randomuser.me/api/portraits/men/36.jpg' },
  { name: 'Siti Rahma', text: 'Timnya responsif dan komunikatif.', img: 'https://randomuser.me/api/portraits/women/65.jpg' },
];

const faqs = [
  { q: 'Apakah bisa custom desain?', a: 'Tentu, kami siap menyesuaikan desain sesuai kebutuhan brand Anda.' },
  { q: 'Berapa lama proses pembuatan?', a: 'Rata-rata 2-4 minggu tergantung kompleksitas proyek.' },
  { q: 'Apakah ada support setelah go live?', a: 'Ya, kami menyediakan support dan maintenance.' },
];

const partners = [
  'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg',
  'https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg',
  'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg',
  'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg',
];

export default function HomePageTheme127() {
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
    <div className="min-h-screen bg-white text-gray-900 font-sans relative">
      {/* Progress Bar Scroll */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-[9999]">
        <div id="progress-bar" className="h-full bg-black transition-all duration-200" style={{width:'0%'}} />
      </div>

      {/* Hero Split-Screen */}
      <section className="flex flex-col md:flex-row min-h-[70vh] border-b border-gray-200 animate-fade-in">
        <div className="flex-1 flex flex-col justify-center px-10 py-20 md:py-0">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight tracking-tight">Website <span className="text-gray-500">Minimalis</span><br />Untuk <span className="underline decoration-black decoration-4 underline-offset-8">Brand Modern</span></h1>
          <p className="text-lg text-gray-600 mb-8 max-w-md">Landing page split-screen, monokrom, dan super clean. Cocok untuk startup, agensi, atau personal branding yang ingin tampil beda.</p>
        </div>
        <div className="flex-1 flex items-center justify-center bg-gray-50 border-l border-gray-200 px-10 py-20 md:py-0">
          {/* SVG Illustration */}
          <svg width="320" height="220" viewBox="0 0 320 220" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="40" y="40" width="240" height="140" rx="32" fill="#fff" stroke="#111" strokeWidth="4" />
            <rect x="80" y="80" width="160" height="60" rx="16" fill="#f3f4f6" stroke="#111" strokeWidth="2" />
            <circle cx="100" cy="110" r="12" fill="#111" />
            <rect x="120" y="100" width="80" height="20" rx="6" fill="#111" />
            <rect x="120" y="130" width="60" height="10" rx="5" fill="#111" />
          </svg>
        </div>
      </section>

      {/* Statistik Section */}
      <section className="max-w-5xl mx-auto py-16 px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center animate-fade-in">
        {stats.map((s, i) => (
          <div key={i} className="flex flex-col items-center">
            <CountUp end={s.value} className="text-4xl md:text-5xl font-extrabold text-black mb-2" />
            <span className="text-lg text-gray-500 font-semibold">{s.label}</span>
          </div>
        ))}
      </section>

      {/* Features Section */}
      <section className="max-w-5xl mx-auto py-20 px-4 grid md:grid-cols-3 gap-10 animate-fade-in">
        {features.map((f, i) => (
          <div key={i} className="flex flex-col items-center text-center p-8 bg-gray-50 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all">
            <span className="mb-4 text-black">{f.icon}</span>
            <h3 className="text-xl font-bold mb-2">{f.title}</h3>
            <p className="text-gray-500">{f.desc}</p>
          </div>
        ))}
      </section>

      {/* Proses Langkah-langkah */}
      <section className="max-w-6xl mx-auto py-20 px-4 animate-fade-in">
        <h2 className="text-2xl md:text-3xl font-extrabold mb-10 text-center tracking-tight">Proses Kerja</h2>
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {steps.map((s, i) => (
            <div key={i} className="flex-1 flex flex-col items-center text-center relative">
              <div className="w-14 h-14 flex items-center justify-center rounded-full border-2 border-black bg-white text-2xl font-bold mb-4 z-10">{s.label}</div>
              <h4 className="font-bold text-lg mb-1">{s.title}</h4>
              <p className="text-gray-500 mb-2">{s.desc}</p>
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute right-0 top-1/2 w-full h-1 border-t-2 border-dashed border-gray-300 z-0" style={{left: '100%', width: '60px', marginTop: '-1px'}}></div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Partner Logo Section */}
      <section className="max-w-4xl mx-auto py-12 px-4 grid grid-cols-2 md:grid-cols-4 gap-8 items-center animate-fade-in">
        {partners.map((logo, i) => (
          <div key={i} className="flex justify-center items-center">
            <img src={logo} alt="Partner Logo" className="h-10 grayscale opacity-70 hover:opacity-100 transition-all" />
          </div>
        ))}
      </section>

      {/* Testimonial Carousel Section */}
      <section className="py-20 px-4 bg-gray-50 border-y border-gray-200 animate-fade-in">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-8 text-black">Apa Kata Klien?</h2>
          <TestimonialCarousel testimonials={testimonials} />
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="max-w-2xl mx-auto py-16 px-4 animate-fade-in">
        <h2 className="text-2xl font-bold mb-8 text-center">Pertanyaan Umum</h2>
        <FAQAccordion faqs={faqs} />
      </section>

      {/* CTA Sticky Bottom */}
      <div className="fixed bottom-0 left-0 w-full bg-black text-white py-5 px-4 flex justify-center items-center z-50 shadow-2xl">
        <a href="#" className="inline-block bg-white text-black px-8 py-3 rounded-full font-bold shadow hover:bg-gray-200 transition-all border-2 border-black">Konsultasi Gratis</a>
      </div>

      {/* Back to Top Button */}
      {showTop && (
        <button onClick={() => window.scrollTo({top:0,behavior:'smooth'})} className="fixed bottom-24 right-6 bg-black text-white p-3 rounded-full shadow-lg z-[9999] hover:bg-gray-800 transition-all">
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
        <img src={testimonials[idx].img} alt={testimonials[idx].name} className="w-16 h-16 rounded-full mb-4 border-2 border-gray-200" />
        <p className="text-lg italic mb-2 text-gray-700">“{testimonials[idx].text}”</p>
        <span className="block font-bold text-black">- {testimonials[idx].name}</span>
      </div>
      <div className="flex justify-center gap-2 mt-4">
        {testimonials.map((_, i: number) => (
          <button key={i} onClick={() => setIdx(i)} className={`w-3 h-3 rounded-full ${i === idx ? 'bg-black' : 'bg-gray-300'} transition-all`} />
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
        <div key={i} className="border-b border-gray-200 pb-2">
          <button onClick={() => setOpen(open === i ? null : i)} className="w-full text-left flex justify-between items-center font-semibold text-lg py-2 focus:outline-none">
            <span>{faq.q}</span>
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className={`transform transition-transform ${open === i ? 'rotate-180' : ''}`}><path d="M6 9l6 6 6-6" /></svg>
          </button>
          <div className={`overflow-hidden transition-all duration-300 ${open === i ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}> <p className="text-gray-500 mt-2">{faq.a}</p></div>
        </div>
      ))}
    </div>
  );
} 