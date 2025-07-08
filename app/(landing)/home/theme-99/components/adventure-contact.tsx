import React from 'react';

export default function AdventureContact() {
  return (
    <section className="py-16 bg-gradient-to-b from-yellow-50 via-green-50 to-sky-50">
      <div className="max-w-3xl mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
        {/* Illustration */}
        <div className="flex-1 flex justify-center">
          <svg className="w-40 h-40" viewBox="0 0 160 160" fill="none">
            <ellipse cx="80" cy="140" rx="60" ry="12" fill="#ffe082" />
            <rect x="60" y="60" width="40" height="60" rx="20" fill="#81d4fa" />
            <path d="M80 60 L100 40 L120 60" stroke="#43a047" strokeWidth="4" fill="none" />
            <circle cx="100" cy="40" r="8" fill="#ff9800" />
            <rect x="70" y="80" width="20" height="20" rx="6" fill="#43a047" />
            <rect x="75" y="90" width="10" height="10" rx="3" fill="#fffbe6" />
          </svg>
        </div>
        {/* Contact Form */}
        <form className="flex-1 bg-white rounded-xl shadow-lg p-8 space-y-6">
          <h2 className="text-2xl font-bold text-green-800 mb-2 font-serif text-center">Contact Us</h2>
          <div>
            <label className="block text-sky-800 mb-1 font-semibold">Name</label>
            <input type="text" className="w-full border border-green-200 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400" placeholder="Your Name" />
          </div>
          <div>
            <label className="block text-sky-800 mb-1 font-semibold">Email</label>
            <input type="email" className="w-full border border-green-200 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400" placeholder="you@email.com" />
          </div>
          <div>
            <label className="block text-sky-800 mb-1 font-semibold">Message</label>
            <textarea className="w-full border border-green-200 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400" rows={4} placeholder="How can we help you?" />
          </div>
          <button type="submit" className="w-full py-3 bg-gradient-to-r from-green-400 via-yellow-300 to-orange-400 text-white font-bold rounded-full shadow-lg hover:scale-105 transition-transform">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
} 