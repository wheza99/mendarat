import React from 'react';

export default function EditorialContact() {
  return (
    <section className="py-16 bg-gray-100/80">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 text-center mb-10">Contact Us</h2>
        <div className="max-w-2xl mx-auto bg-white border-4 border-gray-700 rounded-xl shadow p-8">
          <form className="space-y-6">
            <div>
              <label className="block text-gray-900 font-serif mb-1">Name</label>
              <input type="text" className="w-full border-2 border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-red-700 bg-gray-50" placeholder="Your name" />
            </div>
            <div>
              <label className="block text-gray-900 font-serif mb-1">Email</label>
              <input type="email" className="w-full border-2 border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-red-700 bg-gray-50" placeholder="you@email.com" />
            </div>
            <div>
              <label className="block text-gray-900 font-serif mb-1">Message</label>
              <textarea rows={4} className="w-full border-2 border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-red-700 bg-gray-50" placeholder="Your message"></textarea>
            </div>
            <button type="submit" className="w-full bg-gray-900 text-white font-serif rounded-full py-3 hover:bg-red-700 hover:text-white transition">Send Message</button>
          </form>
          <div className="mt-8 text-center text-gray-700 font-sans">
            <div className="mb-2">Email: <a href="mailto:editorial@news.com" className="text-red-700 underline">editorial@news.com</a></div>
            <div>Phone: <a href="tel:+628123456789" className="text-red-700 underline">+62 812-3456-789</a></div>
          </div>
        </div>
      </div>
    </section>
  );
} 