import React from 'react';

export default function ArtContact() {
  return (
    <section className="py-16 bg-pink-50/40">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-pink-400 text-center mb-10">Contact Us</h2>
        <div className="max-w-2xl mx-auto bg-white/80 rounded-2xl border-4 border-pink-200 shadow p-8">
          <form className="space-y-6">
            <div>
              <label className="block text-pink-400 font-serif mb-1">Name</label>
              <input type="text" className="w-full border-2 border-pink-200 rounded-lg px-4 py-2 focus:outline-none focus:border-pink-400 bg-pink-50/40" placeholder="Your name" />
            </div>
            <div>
              <label className="block text-pink-400 font-serif mb-1">Email</label>
              <input type="email" className="w-full border-2 border-pink-200 rounded-lg px-4 py-2 focus:outline-none focus:border-pink-400 bg-pink-50/40" placeholder="you@email.com" />
            </div>
            <div>
              <label className="block text-pink-400 font-serif mb-1">Message</label>
              <textarea rows={4} className="w-full border-2 border-pink-200 rounded-lg px-4 py-2 focus:outline-none focus:border-pink-400 bg-pink-50/40" placeholder="Your message"></textarea>
            </div>
            <button type="submit" className="w-full bg-pink-400 text-white font-serif rounded-full py-3 hover:bg-blue-400 hover:text-white transition">Send Message</button>
          </form>
          <div className="mt-8 text-center text-blue-900/80 font-sans">
            <div className="mb-2">Email: <a href="mailto:art@watercolor.com" className="text-pink-400 underline">art@watercolor.com</a></div>
            <div>Phone: <a href="tel:+628123456789" className="text-pink-400 underline">+62 812-3456-789</a></div>
          </div>
        </div>
      </div>
    </section>
  );
} 