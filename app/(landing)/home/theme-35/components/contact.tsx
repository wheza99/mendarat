'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-emerald-100 to-green-200">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-green-800 mb-6">
            Mari Berkolaborasi untuk
            <br />
            <span className="bg-gradient-to-r from-emerald-600 to-lime-600 bg-clip-text text-transparent">
              Perubahan Berkelanjutan
            </span>
          </h2>
          <p className="text-xl text-green-700">
            Hubungi kami untuk memulai journey menuju masa depan yang lebih hijau
          </p>
        </div>

        <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Nama Lengkap"
                className="w-full px-6 py-4 rounded-2xl border-2 border-green-200 focus:border-green-400 focus:outline-none transition-colors bg-green-50/50"
                required
              />
            </div>
            
            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                className="w-full px-6 py-4 rounded-2xl border-2 border-green-200 focus:border-green-400 focus:outline-none transition-colors bg-green-50/50"
                required
              />
            </div>
            
            <div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Ceritakan ide sustainability Anda..."
                rows={6}
                className="w-full px-6 py-4 rounded-2xl border-2 border-green-200 focus:border-green-400 focus:outline-none transition-colors bg-green-50/50 resize-none"
                required
              />
            </div>
            
            <div className="text-center">
              <button
                type="submit"
                className="px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-full font-semibold text-lg hover:from-green-700 hover:to-emerald-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Kirim Pesan 🌱
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
} 