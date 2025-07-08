import React from 'react';

export default function GlassContact() {
  return (
    <section className="py-16 bg-cyan-50/40">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-cyan-600 text-center mb-10">Contact Us</h2>
        <div className="max-w-2xl mx-auto backdrop-blur-xl bg-white/30 rounded-2xl border-4 border-cyan-200 shadow-xl p-8">
          <form className="space-y-6">
            <div>
              <label className="block text-cyan-600 font-bold mb-1">Name</label>
              <input type="text" className="w-full border-2 border-cyan-200 rounded-lg px-4 py-2 focus:outline-none focus:border-cyan-400 bg-cyan-50/40" placeholder="Your name" />
            </div>
            <div>
              <label className="block text-cyan-600 font-bold mb-1">Email</label>
              <input type="email" className="w-full border-2 border-cyan-200 rounded-lg px-4 py-2 focus:outline-none focus:border-cyan-400 bg-cyan-50/40" placeholder="you@email.com" />
            </div>
            <div>
              <label className="block text-cyan-600 font-bold mb-1">Message</label>
              <textarea rows={4} className="w-full border-2 border-cyan-200 rounded-lg px-4 py-2 focus:outline-none focus:border-cyan-400 bg-cyan-50/40" placeholder="Your message"></textarea>
            </div>
            <button type="submit" className="w-full bg-cyan-500 text-white font-bold rounded-full py-3 hover:bg-blue-500 hover:text-white transition">Send Message</button>
          </form>
          <div className="mt-8 text-center text-blue-900/80 font-sans">
            <div className="mb-2">Email: <a href="mailto:glass@futurist.com" className="text-cyan-500 underline">glass@futurist.com</a></div>
            <div>Phone: <a href="tel:+628123456789" className="text-cyan-500 underline">+62 812-3456-789</a></div>
          </div>
        </div>
      </div>
    </section>
  );
} 