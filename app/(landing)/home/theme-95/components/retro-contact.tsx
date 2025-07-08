import React from 'react';

export default function RetroContact() {
  return (
    <section className="py-16 bg-[#1e293b]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-mono font-bold text-blue-300 text-center mb-10 tracking-widest">Contact Us</h2>
        <div className="max-w-2xl mx-auto bg-[#181e2a] rounded-2xl border-4 border-blue-400/40 shadow p-8">
          <form className="space-y-6">
            <div>
              <label className="block text-blue-200 font-mono mb-1">Name</label>
              <input type="text" className="w-full border-2 border-blue-400/40 rounded-lg px-4 py-2 bg-[#0f172a] text-blue-100 font-mono focus:outline-none focus:border-yellow-300" placeholder="Your name" />
            </div>
            <div>
              <label className="block text-blue-200 font-mono mb-1">Email</label>
              <input type="email" className="w-full border-2 border-blue-400/40 rounded-lg px-4 py-2 bg-[#0f172a] text-blue-100 font-mono focus:outline-none focus:border-yellow-300" placeholder="you@email.com" />
            </div>
            <div>
              <label className="block text-blue-200 font-mono mb-1">Message</label>
              <textarea rows={4} className="w-full border-2 border-blue-400/40 rounded-lg px-4 py-2 bg-[#0f172a] text-blue-100 font-mono focus:outline-none focus:border-yellow-300" placeholder="Your message"></textarea>
            </div>
            <button type="submit" className="w-full bg-blue-500 text-white font-mono rounded py-3 hover:bg-yellow-300 hover:text-blue-900 transition">Send Message</button>
          </form>
          <div className="mt-8 text-center text-blue-100 font-mono">
            <div className="mb-2">Email: <a href="mailto:retro@techno.com" className="text-yellow-300 underline">retro@techno.com</a></div>
            <div>Phone: <a href="tel:+628123456789" className="text-yellow-300 underline">+62 812-3456-789</a></div>
          </div>
        </div>
      </div>
    </section>
  );
} 