import React from 'react';

export default function NatureContact() {
  return (
    <section className="py-16 bg-green-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-green-700 text-center mb-10">Contact Us</h2>
        <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow p-8">
          <form className="space-y-6">
            <div>
              <label className="block text-green-700 mb-1">Name</label>
              <input type="text" className="w-full border border-green-200 rounded-lg px-4 py-2 focus:outline-none focus:border-green-500" placeholder="Your name" />
            </div>
            <div>
              <label className="block text-green-700 mb-1">Email</label>
              <input type="email" className="w-full border border-green-200 rounded-lg px-4 py-2 focus:outline-none focus:border-green-500" placeholder="you@email.com" />
            </div>
            <div>
              <label className="block text-green-700 mb-1">Message</label>
              <textarea rows={4} className="w-full border border-green-200 rounded-lg px-4 py-2 focus:outline-none focus:border-green-500" placeholder="Your message"></textarea>
            </div>
            <button type="submit" className="w-full bg-green-500 text-white font-semibold rounded-full py-3 hover:bg-green-600 transition">Send Message</button>
          </form>
          <div className="mt-8 text-center text-green-900/80">
            <div className="mb-2">Email: <a href="mailto:hello@nature.com" className="text-green-600 underline">hello@nature.com</a></div>
            <div>Phone: <a href="tel:+628123456789" className="text-green-600 underline">+62 812-3456-789</a></div>
          </div>
        </div>
      </div>
    </section>
  );
} 