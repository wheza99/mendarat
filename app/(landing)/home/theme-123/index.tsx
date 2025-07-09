import React from 'react';

const features = [
  {
    title: 'Cepat & Responsif',
    desc: 'Website Anda akan tampil optimal di semua perangkat dengan kecepatan maksimal.'
  },
  {
    title: 'Desain Minimalis',
    desc: 'Fokus pada konten dan pengalaman pengguna dengan tampilan bersih dan modern.'
  },
  {
    title: 'Mudah Dikelola',
    desc: 'Update konten dan kelola website tanpa ribet, cocok untuk semua kalangan.'
  }
];

const testimonials = [
  {
    name: 'Andi Wijaya',
    text: 'Landing page ini sangat membantu bisnis saya tampil profesional dan mudah ditemukan pelanggan.'
  },
  {
    name: 'Siti Rahma',
    text: 'Desainnya simpel tapi elegan, dan sangat mudah dioperasikan.'
  },
  {
    name: 'Budi Santoso',
    text: 'Supportnya cepat dan hasilnya memuaskan!'
  }
];

export default function HomePageTheme123() {
  const [testimonialIdx, setTestimonialIdx] = React.useState(0);
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      {/* Hero Section */}
      <section className="w-full flex flex-col md:flex-row items-center justify-between px-8 py-20 gap-10">
        <div className="flex-1">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">Bangun Website Impian Anda<br />dengan <span className="text-blue-600">Desain Minimalis</span></h1>
          <p className="text-lg mb-8 text-gray-600">Solusi landing page modern, cepat, dan mudah dikelola untuk bisnis dan personal branding Anda.</p>
          <a href="#cta" className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold shadow hover:bg-blue-700 transition">Mulai Sekarang</a>
        </div>
        <div className="flex-1 flex justify-center">
          {/* SVG Illustration */}
          <svg width="320" height="220" viewBox="0 0 320 220" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="20" y="40" width="280" height="140" rx="24" fill="#E0E7FF"/>
            <rect x="60" y="80" width="200" height="60" rx="12" fill="#3B82F6"/>
            <circle cx="80" cy="110" r="12" fill="#fff"/>
            <rect x="100" y="100" width="120" height="20" rx="6" fill="#fff"/>
            <rect x="100" y="130" width="80" height="10" rx="5" fill="#fff"/>
          </svg>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-5xl mx-auto py-16 px-4 grid md:grid-cols-3 gap-8">
        {features.map((f, i) => (
          <div key={i} className="bg-gray-50 rounded-xl shadow p-8 text-center">
            <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
            <p className="text-gray-500">{f.desc}</p>
          </div>
        ))}
      </section>

      {/* Testimonial Carousel */}
      <section className="bg-gray-100 py-16 px-4">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-8">Apa Kata Mereka?</h2>
          <div className="relative bg-white rounded-xl shadow p-8">
            <p className="text-lg italic mb-4">"{testimonials[testimonialIdx].text}"</p>
            <span className="block font-semibold text-blue-600 mb-2">- {testimonials[testimonialIdx].name}</span>
            <div className="flex justify-center gap-4 mt-4">
              <button
                aria-label="Sebelumnya"
                className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 hover:bg-blue-200"
                onClick={() => setTestimonialIdx((testimonialIdx - 1 + testimonials.length) % testimonials.length)}>
                &#8592;
              </button>
              <button
                aria-label="Selanjutnya"
                className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 hover:bg-blue-200"
                onClick={() => setTestimonialIdx((testimonialIdx + 1) % testimonials.length)}>
                &#8594;
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section id="cta" className="py-20 px-4 bg-blue-600 text-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Siap Tampil Lebih Profesional?</h2>
        <p className="mb-8 text-lg">Dapatkan landing page modern dan minimalis untuk bisnis atau personal Anda sekarang juga.</p>
        <a href="#" className="inline-block bg-white text-blue-600 px-10 py-4 rounded-lg font-bold shadow hover:bg-blue-50 transition">Konsultasi Gratis</a>
      </section>
    </div>
  );
} 