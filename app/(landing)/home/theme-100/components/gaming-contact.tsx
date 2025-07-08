import React from 'react';

export default function GamingContact() {
  return (
    <section className="py-16 bg-black/50">
      <div className="max-w-3xl mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
        {/* Pixel Art Illustration */}
        <div className="flex-1 flex justify-center">
          <svg className="w-40 h-40" viewBox="0 0 160 160" fill="none">
            <rect x="0" y="0" width="160" height="160" fill="#1e1b4b" />
            <rect x="20" y="20" width="120" height="80" rx="8" fill="#06b6d4" stroke="#6366f1" strokeWidth="2" />
            <rect x="30" y="30" width="100" height="60" rx="4" fill="#1e1b4b" />
            <rect x="40" y="40" width="20" height="8" fill="#ec4899" />
            <rect x="70" y="40" width="20" height="8" fill="#eab308" />
            <rect x="100" y="40" width="20" height="8" fill="#8b5cf6" />
            <rect x="40" y="52" width="20" height="8" fill="#06b6d4" />
            <rect x="70" y="52" width="20" height="8" fill="#ec4899" />
            <rect x="100" y="52" width="20" height="8" fill="#eab308" />
            <rect x="40" y="64" width="20" height="8" fill="#8b5cf6" />
            <rect x="70" y="64" width="20" height="8" fill="#06b6d4" />
            <rect x="100" y="64" width="20" height="8" fill="#ec4899" />
            <rect x="60" y="100" width="40" height="8" fill="#eab308" />
            <rect x="70" y="120" width="20" height="8" fill="#06b6d4" />
          </svg>
        </div>
        {/* Contact Form */}
        <form className="flex-1 bg-gradient-to-b from-purple-900/50 via-cyan-900/50 to-pink-900/50 rounded-none border-2 border-cyan-400 p-8 space-y-6">
          <h2 className="text-2xl font-bold text-yellow-400 mb-2 font-mono text-center tracking-wider">CONTACT US</h2>
          <div>
            <label className="block text-cyan-300 mb-1 font-semibold font-mono">NAME</label>
            <input type="text" className="w-full border border-cyan-400 rounded-none px-4 py-2 bg-black/50 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 font-mono" placeholder="YOUR NAME" />
          </div>
          <div>
            <label className="block text-cyan-300 mb-1 font-semibold font-mono">EMAIL</label>
            <input type="email" className="w-full border border-cyan-400 rounded-none px-4 py-2 bg-black/50 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 font-mono" placeholder="YOU@EMAIL.COM" />
          </div>
          <div>
            <label className="block text-cyan-300 mb-1 font-semibold font-mono">MESSAGE</label>
            <textarea className="w-full border border-cyan-400 rounded-none px-4 py-2 bg-black/50 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 font-mono" rows={4} placeholder="HOW CAN WE HELP?" />
          </div>
          <button type="submit" className="w-full py-3 bg-gradient-to-r from-purple-600 via-cyan-500 to-pink-500 text-white font-bold rounded-none border-2 border-yellow-400 hover:scale-105 transition-transform font-mono">
            SEND MESSAGE
          </button>
        </form>
      </div>
    </section>
  );
} 