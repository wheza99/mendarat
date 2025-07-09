import React from 'react';

const features = [
  { icon: '🛸', title: 'Teknologi Mutakhir', desc: 'Menggabungkan nuansa retro dan masa depan.' },
  { icon: '🌈', title: 'Warna Pastel', desc: 'Tampilan lembut namun tetap mencolok.' },
  { icon: '🕹️', title: 'Interaktif', desc: 'Setiap elemen responsif dan menyenangkan.' },
];

const timeline = [
  { year: '2021', event: 'Ide Awal', desc: 'Konsep retro-futuristik mulai dirancang.' },
  { year: '2022', event: 'Pengembangan', desc: 'Mulai membangun dengan teknologi modern.' },
  { year: '2023', event: 'Peluncuran', desc: 'Template siap digunakan untuk semua orang.' },
];

// Animated Starfield Background
function Starfield() {
  const canvasRef = React.useRef<HTMLCanvasElement | null>(null);
  React.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
    let stars = Array.from({length:120},()=>({
      x: Math.random()*width,
      y: Math.random()*height,
      z: Math.random()*width
    }));
    function draw() {
      if (!ctx) return;
      ctx.clearRect(0,0,width,height);
      for (let i=0;i<stars.length;i++) {
        let star = stars[i];
        star.z -= 2;
        if (star.z <= 0) {
          star.x = Math.random()*width;
          star.y = Math.random()*height;
          star.z = width;
        }
        let k = 128.0/star.z;
        let sx = star.x*k + width/2;
        let sy = star.y*k + height/2;
        if (sx < 0 || sx >= width || sy < 0 || sy >= height) continue;
        let size = (1-star.z/width)*2+0.5;
        ctx.beginPath();
        ctx.arc(sx,sy,size,0,2*Math.PI);
        ctx.fillStyle = '#a5b4fc';
        ctx.globalAlpha = 0.7;
        ctx.fill();
        ctx.globalAlpha = 1;
      }
      requestAnimationFrame(draw);
    }
    draw();
    function handleResize() {
      if (!canvas) return;
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    }
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return <canvas ref={canvasRef} className="fixed inset-0 w-full h-full z-0 pointer-events-none" style={{position:'fixed',top:0,left:0}} />;
}

export default function HomePageTheme125() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-blue-100 to-purple-100 text-gray-800 font-mono relative overflow-hidden">
      <Starfield />
      {/* Hero Section */}
      <section className="w-full flex flex-col md:flex-row items-center justify-between px-8 py-20 gap-10 relative overflow-hidden">
        {/* Animated Grid */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <svg width="100%" height="100%" className="animate-pulse" style={{position:'absolute',top:0,left:0}}>
            <defs>
              <linearGradient id="grid" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#a5b4fc" />
                <stop offset="100%" stopColor="#fbcfe8" />
              </linearGradient>
            </defs>
            <g stroke="url(#grid)" strokeWidth="1">
              {Array.from({length:20}).map((_,i)=>(<line key={i} x1={i*60} y1="0" x2={i*60} y2="1000" opacity="0.2" />))}
              {Array.from({length:16}).map((_,i)=>(<line key={i} y1={i*60} x1="0" y2={i*60} x2="2000" opacity="0.2" />))}
            </g>
          </svg>
        </div>
        <div className="flex-1 z-10">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight tracking-tight drop-shadow-lg" style={{fontFamily:'monospace'}}>
            <span className="text-pink-400">Retro</span> <span className="text-blue-400">Futurism</span><br />Landing Page
          </h1>
          <p className="text-xl mb-8 text-gray-600 font-semibold">Landing page unik dengan sentuhan masa lalu dan masa depan sekaligus.</p>
          <a href="#cta" className="inline-block bg-blue-400 text-white px-10 py-4 rounded-xl font-bold shadow-lg hover:bg-pink-400 hover:text-white transition">Coba Sekarang</a>
        </div>
        <div className="flex-1 flex justify-center items-center z-10">
          <svg width="220" height="220" viewBox="0 0 220 220" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="30" y="30" width="160" height="160" rx="40" fill="#fbcfe8" stroke="#a5b4fc" strokeWidth="8" />
            <circle cx="110" cy="110" r="60" fill="#a5b4fc" opacity="0.5" />
            <rect x="70" y="70" width="80" height="80" rx="20" fill="#fff" opacity="0.7" />
            <text x="110" y="120" textAnchor="middle" fontSize="32" fill="#818cf8">🛸</text>
          </svg>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-5xl mx-auto py-16 px-4 grid md:grid-cols-3 gap-8 z-10 relative">
        {features.map((f, i) => (
          <div key={i} className="bg-white/80 rounded-2xl shadow-2xl p-10 flex flex-col items-center text-center border border-blue-200 hover:scale-105 hover:shadow-pink-200 transition-transform duration-300" style={{boxShadow:'0 8px 32px 0 rgba(31,38,135,0.15)'}}>
            <span className="text-4xl mb-4 animate-bounce drop-shadow-lg">{f.icon}</span>
            <h3 className="text-2xl font-bold mb-2 text-blue-400">{f.title}</h3>
            <p className="text-gray-500 font-medium">{f.desc}</p>
          </div>
        ))}
      </section>

      {/* Timeline Section */}
      <section className="max-w-4xl mx-auto py-16 px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-10 text-center text-pink-400">Perjalanan Kami</h2>
        <div className="relative border-l-4 border-blue-200 pl-8">
          {timeline.map((t, i) => (
            <div key={i} className="mb-12 relative">
              <div className="absolute -left-6 top-0 w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg border-4 border-white">{t.year}</div>
              <div className="bg-white/80 rounded-xl shadow-lg p-6 ml-4">
                <h4 className="text-xl font-bold text-blue-400 mb-1">{t.event}</h4>
                <p className="text-gray-600">{t.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Neon */}
      <section id="cta" className="py-20 px-4 flex justify-center items-center">
        <div className="bg-blue-400/90 rounded-3xl shadow-2xl p-12 max-w-2xl w-full text-center relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none animate-pulse" style={{boxShadow:'0 0 40px 10px #f472b6, 0 0 80px 20px #818cf8'}}></div>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-white drop-shadow-[0_0_10px_#f472b6]">Gabung ke Era Baru Landing Page!</h2>
          <p className="mb-8 text-lg text-white font-semibold">Ciptakan kesan tak terlupakan dengan desain retro futuristik.</p>
          <a href="#" className="inline-block bg-pink-400 text-white px-10 py-4 rounded-xl font-bold shadow-lg hover:bg-blue-400 hover:text-white transition drop-shadow-[0_0_10px_#f472b6]">Konsultasi Gratis</a>
        </div>
      </section>
    </div>
  );
} 