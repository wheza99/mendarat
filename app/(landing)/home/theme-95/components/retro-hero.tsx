import React, { useEffect, useState } from 'react';

const headline = 'WELCOME TO TECHNO RETRO';

export default function RetroHero() {
  const [displayed, setDisplayed] = useState('');
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(headline.slice(0, i + 1));
      i++;
      if (i === headline.length) clearInterval(interval);
    }, 60);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-[60vh] flex flex-col justify-center items-center text-center px-4 py-20 relative">
      {/* Judul typing effect */}
      <h1 className="text-4xl md:text-6xl font-mono font-extrabold text-blue-400 drop-shadow-[0_0_20px_#60a5fa] mb-4 tracking-widest">
        {displayed}
        <span className="animate-pulse text-yellow-300">|</span>
      </h1>
      <p className="text-lg md:text-2xl text-blue-200 max-w-2xl mb-8 font-mono">
        Experience the fusion of retro vibes and modern technology. Neon grids, pixel icons, and digital style for your next-gen project.
      </p>
      <div className="flex gap-4 justify-center">
        <button className="px-8 py-3 bg-blue-500 text-white font-mono rounded shadow hover:bg-blue-600 transition">Get Started</button>
        <button className="px-8 py-3 border-2 border-blue-400 text-blue-400 font-mono rounded hover:bg-blue-900/30 transition">Learn More</button>
      </div>
      {/* Pixel art accent */}
      <div className="absolute left-8 bottom-8 w-12 h-12 bg-yellow-300 rounded shadow-lg opacity-30" style={{clipPath:'polygon(0 0, 100% 0, 100% 80%, 80% 100%, 0 100%)'}}></div>
    </section>
  );
} 