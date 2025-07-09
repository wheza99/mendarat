import React from 'react';

const steps = [
  { title: 'Daftar', desc: 'Buat akun gratis dan mulai eksplorasi.' },
  { title: 'Pilih Paket', desc: 'Sesuaikan layanan dengan kebutuhan Anda.' },
  { title: 'Nikmati Layanan', desc: 'Landing page siap digunakan dan dikembangkan.' },
];

const stats = [
  { label: 'Kepuasan', value: 92, color: 'bg-pink-500' },
  { label: 'Retensi', value: 87, color: 'bg-blue-500' },
  { label: 'Konversi', value: 75, color: 'bg-green-500' },
];

const gallery = [
  'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
];

const stories = [
  { name: 'Dewi Lestari', text: 'Landing page ini sangat membantu bisnis saya berkembang.', img: 'https://randomuser.me/api/portraits/women/44.jpg', rating: 5 },
  { name: 'Andi Wijaya', text: 'Fitur interaktif dan galeri sangat memudahkan presentasi produk.', img: 'https://randomuser.me/api/portraits/men/36.jpg', rating: 4 },
  { name: 'Siti Rahma', text: 'Tampilan modern dan mudah digunakan.', img: 'https://randomuser.me/api/portraits/women/65.jpg', rating: 5 },
];

export default function HomePageTheme129() {
  // Gallery modal
  const [modalImg, setModalImg] = React.useState<string|null>(null);
  // User stories carousel
  const [storyIdx, setStoryIdx] = React.useState(0);
  // Stepper
  const [activeStep, setActiveStep] = React.useState(0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-white to-blue-50 text-gray-900 font-sans relative">
      {/* Hero Video Background */}
      <section className="relative w-full h-[60vh] flex items-center justify-center overflow-hidden">
        <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover z-0">
          <source src="https://www.w3schools.com/howto/rain.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div className="relative z-20 text-center flex flex-col items-center justify-center w-full">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 drop-shadow-lg">Landing Page <span className="text-pink-400">Interaktif</span></h1>
          <p className="text-lg text-white/80 mb-6">Hero dengan video background, headline besar, dan overlay gelap.</p>
          <a href="#download" className="inline-block bg-pink-500 text-white px-8 py-3 rounded-full font-bold shadow-lg hover:bg-pink-600 transition">Mulai Sekarang</a>
        </div>
      </section>

      {/* Interactive Steps */}
      <section className="max-w-4xl mx-auto py-20 px-4">
        <div className="flex flex-col items-center mb-10">
          <div className="flex gap-4 mb-6">
            {steps.map((s, i) => (
              <button key={i} onClick={()=>setActiveStep(i)} className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg border-2 ${activeStep===i?'bg-pink-500 text-white border-pink-500':'bg-white text-pink-500 border-pink-300'} shadow transition-all`}>
                {i+1}
              </button>
            ))}
          </div>
          <div className="bg-white rounded-2xl shadow p-8 max-w-md w-full text-center animate-fade-in">
            <h3 className="text-2xl font-bold mb-2 text-pink-500">{steps[activeStep].title}</h3>
            <p className="text-gray-600">{steps[activeStep].desc}</p>
          </div>
        </div>
      </section>

      {/* Animated Stats */}
      <section className="max-w-4xl mx-auto py-12 px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {stats.map((s, i) => (
          <div key={i} className="flex flex-col items-center animate-fade-in">
            <span className="text-lg font-bold mb-2 text-gray-700">{s.label}</span>
            <div className="w-full bg-gray-200 rounded-full h-6 mb-2 overflow-hidden">
              <div className={`h-6 rounded-full ${s.color} transition-all`} style={{width: s.value+'%'}} />
            </div>
            <span className="text-pink-500 font-bold">{s.value}%</span>
          </div>
        ))}
      </section>

      {/* Gallery Masonry */}
      <section className="max-w-5xl mx-auto py-20 px-4">
        <h2 className="text-2xl font-bold mb-8 text-center text-blue-600">Galeri Proyek</h2>
        <div className="columns-2 md:columns-3 gap-4 space-y-4">
          {gallery.map((img, i) => (
            <img key={i} src={img} alt="Gallery" className="rounded-2xl shadow-lg cursor-pointer hover:scale-105 transition-all" onClick={()=>setModalImg(img)} />
          ))}
        </div>
        {modalImg && (
          <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-[9999]" onClick={()=>setModalImg(null)}>
            <img src={modalImg} alt="Zoom" className="max-h-[80vh] rounded-2xl shadow-2xl border-8 border-white" />
          </div>
        )}
      </section>

      {/* User Stories Carousel */}
      <section className="py-20 px-4 bg-gradient-to-r from-pink-50 via-white to-blue-50">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-8 text-pink-600">Cerita Pengguna</h2>
          <div className="relative bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center animate-fade-in">
            <img src={stories[storyIdx].img} alt={stories[storyIdx].name} className="w-16 h-16 rounded-full mb-4 border-2 border-pink-200" />
            <p className="text-lg italic mb-2 text-gray-700">“{stories[storyIdx].text}”</p>
            <span className="block font-bold text-pink-600 mb-2">- {stories[storyIdx].name}</span>
            <div className="flex gap-1 mb-2">
              {[...Array(5)].map((_,i)=>(<span key={i} className={i<stories[storyIdx].rating?'text-yellow-400':'text-gray-300'}>★</span>))}
            </div>
            <div className="flex justify-center gap-2 mt-4">
              {stories.map((_, i) => (
                <button key={i} onClick={() => setStoryIdx(i)} className={`w-3 h-3 rounded-full ${i === storyIdx ? 'bg-pink-600' : 'bg-gray-300'} transition-all`} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Download App Section */}
      <section id="download" className="py-20 px-4 flex justify-center items-center">
        <div className="max-w-2xl w-full text-center bg-white rounded-3xl shadow-2xl p-12 flex flex-col items-center animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-blue-600">Download Aplikasi</h2>
          <p className="mb-8 text-lg text-gray-700">Nikmati kemudahan akses di mana saja dengan aplikasi mobile kami.</p>
          <div className="flex gap-6 mb-8 justify-center">
            <a href="#" className="inline-block bg-black text-white px-6 py-3 rounded-xl font-bold shadow hover:bg-gray-800 transition flex items-center gap-2"><svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M17 6.1C16.1 5.4 15 5 13.8 5c-2.2 0-4 1.8-4 4 0 1.1.4 2.1 1.1 2.9l6.7 6.7c.8.8 2.1.8 2.9 0 .8-.8.8-2.1 0-2.9l-6.7-6.7z"/><path d="M7 17.9c.9.7 2 1.1 3.2 1.1 2.2 0 4-1.8 4-4 0-1.1-.4-2.1-1.1-2.9l-6.7-6.7c-.8-.8-2.1-.8-2.9 0-.8.8-.8 2.1 0 2.9l6.7 6.7z"/></svg> Play Store</a>
            <a href="#" className="inline-block bg-white text-black px-6 py-3 rounded-xl font-bold shadow border border-gray-300 hover:bg-gray-100 transition flex items-center gap-2"><svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M17 6.1C16.1 5.4 15 5 13.8 5c-2.2 0-4 1.8-4 4 0 1.1.4 2.1 1.1 2.9l6.7 6.7c.8.8 2.1.8 2.9 0 .8-.8.8-2.1 0-2.9l-6.7-6.7z"/><path d="M7 17.9c.9.7 2 1.1 3.2 1.1 2.2 0 4-1.8 4-4 0-1.1-.4-2.1-1.1-2.9l-6.7-6.7c-.8-.8-2.1-.8-2.9 0-.8.8-.8 2.1 0 2.9l6.7 6.7z"/></svg> App Store</a>
          </div>
          <div className="w-40 h-80 bg-gray-200 rounded-3xl shadow-inner flex items-center justify-center relative">
            <span className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-4 bg-gray-300 rounded-full" />
            <svg width="80" height="80" fill="none" viewBox="0 0 80 80"><circle cx="40" cy="40" r="36" fill="#fff" stroke="#e5e7eb" strokeWidth="4"/><text x="40" y="48" textAnchor="middle" fontSize="32" fill="#3b82f6">📱</text></svg>
          </div>
        </div>
      </section>

      {/* Floating CTA Button */}
      <a href="#download" className="fixed bottom-8 right-8 bg-pink-500 text-white px-6 py-4 rounded-full font-bold shadow-lg z-[9999] hover:bg-pink-600 transition-all animate-bounce flex items-center gap-2">
        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 5v14M19 12l-7 7-7-7"/></svg>
        Download App
      </a>

      {/* Animasi CSS */}
      <style jsx>{`
        .animate-fade-in {
          opacity: 0;
          animation: fadeIn 0.8s forwards;
        }
        @keyframes fadeIn {
          to { opacity: 1; }
        }
        .animate-bounce {
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