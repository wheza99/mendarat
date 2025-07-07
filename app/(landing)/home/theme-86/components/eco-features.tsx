import React from 'react';

const features = [
  {
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 32 32"><path d="M16 30C16 30 28 18 28 10C28 5.58 23.97 2 18.5 2C15.13 2 12.13 3.94 10.5 7.06C8.87 3.94 5.87 2 2.5 2C-2.97 2-7 5.58-7 10C-7 18 16 30 16 30Z" fill="#4ade80"/></svg>
    ),
    title: "Ramah Lingkungan",
    desc: "Material dan proses ramah lingkungan untuk masa depan bumi."
  },
  {
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 32 32"><circle cx="16" cy="16" r="14" fill="#bbf7d0" /><path d="M16 6V26" stroke="#22c55e" strokeWidth="3" strokeLinecap="round"/><path d="M6 16H26" stroke="#22c55e" strokeWidth="3" strokeLinecap="round"/></svg>
    ),
    title: "Desain Minimalis",
    desc: "Fokus pada fungsi, keindahan, dan kenyamanan ruang."
  },
  {
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 32 32"><ellipse cx="16" cy="24" rx="12" ry="6" fill="#bbf7d0" /><path d="M16 24C16 18 24 12 24 8C24 4.69 20.42 2 16 2C11.58 2 8 4.69 8 8C8 12 16 18 16 24Z" fill="#4ade80"/></svg>
    ),
    title: "Inspirasi Alam",
    desc: "Menghadirkan nuansa alam ke dalam setiap desain."
  },
  {
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 32 32"><rect x="6" y="6" width="20" height="20" rx="10" fill="#bbf7d0" /><path d="M16 10V22" stroke="#22c55e" strokeWidth="3" strokeLinecap="round"/><path d="M10 16H22" stroke="#22c55e" strokeWidth="3" strokeLinecap="round"/></svg>
    ),
    title: "Hemat Energi",
    desc: "Desain yang memaksimalkan cahaya alami dan ventilasi."
  }
];

export default function EcoFeatures() {
  return (
    <section className="py-16 px-4 max-w-5xl mx-auto animate-nature-fade-in">
      <h2 className="text-2xl md:text-3xl font-bold text-green-900 mb-10 text-center font-sans">Fitur Unggulan</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {features.map((f, i) => (
          <div key={i} className="flex flex-col items-center bg-white rounded-2xl shadow p-6 transition-transform duration-300 hover:scale-105 animate-nature-grow">
            <div className="mb-4">{f.icon}</div>
            <h3 className="text-lg font-semibold text-green-700 mb-2 font-sans">{f.title}</h3>
            <p className="text-green-800 text-sm font-light text-center">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
} 