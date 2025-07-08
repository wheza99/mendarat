import React from 'react';

export default function SteampunkContact() {
  return (
    <section className="py-16 bg-black/50">
      <div className="max-w-3xl mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
        {/* Industrial Illustration */}
        <div className="flex-1 flex justify-center">
          <svg className="w-40 h-40" viewBox="0 0 160 160" fill="none">
            <rect x="0" y="0" width="160" height="160" fill="#92400e" />
            <rect x="20" y="20" width="120" height="80" rx="8" fill="#a16207" stroke="#d97706" strokeWidth="2" />
            <rect x="30" y="30" width="100" height="60" rx="4" fill="#92400e" />
            <rect x="40" y="40" width="20" height="8" fill="#d97706" />
            <rect x="70" y="40" width="20" height="8" fill="#d97706" />
            <rect x="100" y="40" width="20" height="8" fill="#d97706" />
            <rect x="40" y="52" width="20" height="8" fill="#d97706" />
            <rect x="70" y="52" width="20" height="8" fill="#d97706" />
            <rect x="100" y="52" width="20" height="8" fill="#d97706" />
            <rect x="40" y="64" width="20" height="8" fill="#d97706" />
            <rect x="70" y="64" width="20" height="8" fill="#d97706" />
            <rect x="100" y="64" width="20" height="8" fill="#d97706" />
            <rect x="60" y="100" width="40" height="8" fill="#d97706" />
            <rect x="70" y="120" width="20" height="8" fill="#a16207" />
          </svg>
        </div>
        {/* Contact Form */}
        <form className="flex-1 bg-gradient-to-b from-amber-900/50 via-orange-900/50 to-yellow-900/50 rounded-none border-2 border-amber-400 p-8 space-y-6">
          <h2 className="text-2xl font-bold text-yellow-300 mb-2 font-serif text-center">CONTACT US</h2>
          <div>
            <label className="block text-amber-200 mb-1 font-semibold font-serif">NAME</label>
            <input type="text" className="w-full border border-amber-400 rounded-none px-4 py-2 bg-black/50 text-white focus:outline-none focus:ring-2 focus:ring-amber-400 font-serif" placeholder="YOUR NAME" />
          </div>
          <div>
            <label className="block text-amber-200 mb-1 font-semibold font-serif">EMAIL</label>
            <input type="email" className="w-full border border-amber-400 rounded-none px-4 py-2 bg-black/50 text-white focus:outline-none focus:ring-2 focus:ring-amber-400 font-serif" placeholder="YOU@EMAIL.COM" />
          </div>
          <div>
            <label className="block text-amber-200 mb-1 font-semibold font-serif">MESSAGE</label>
            <textarea className="w-full border border-amber-400 rounded-none px-4 py-2 bg-black/50 text-white focus:outline-none focus:ring-2 focus:ring-amber-400 font-serif" rows={4} placeholder="HOW CAN WE HELP?" />
          </div>
          <button type="submit" className="w-full py-3 bg-gradient-to-r from-amber-600 via-orange-500 to-yellow-500 text-white font-bold rounded-none border-2 border-amber-400 hover:scale-105 transition-transform font-serif">
            SEND MESSAGE
          </button>
        </form>
      </div>
    </section>
  );
} 