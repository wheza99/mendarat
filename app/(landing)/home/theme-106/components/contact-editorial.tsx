import React from 'react';

export default function ContactEditorial() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-black text-center mb-12 font-serif tracking-tight uppercase border-b-4 border-black/10 pb-4">
          Contact Editorial
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact Form */}
          <div className="relative p-8 bg-gray-50 rounded shadow border-l-8 border-red-500 border-b-4 border-black/10 font-serif">
            <h3 className="text-lg font-bold text-black mb-4">Send a Message</h3>
            <form className="space-y-4">
              <input type="text" placeholder="Your Name" className="w-full px-5 py-3 bg-white border-2 border-black rounded-none shadow focus:outline-none focus:border-red-500 font-serif text-lg" />
              <input type="email" placeholder="Your Email" className="w-full px-5 py-3 bg-white border-2 border-black rounded-none shadow focus:outline-none focus:border-yellow-400 font-serif text-lg" />
              <textarea placeholder="Your Message" rows={4} className="w-full px-5 py-3 bg-white border-2 border-black rounded-none shadow focus:outline-none focus:border-red-500 font-serif text-lg resize-none" />
              <button className="w-full px-6 py-3 bg-red-500 text-white font-bold rounded-none border-b-4 border-black shadow hover:bg-black hover:text-white transition-colors font-serif tracking-widest">Send</button>
            </form>
          </div>
          {/* Contact Info */}
          <div className="relative p-8 bg-yellow-50 rounded shadow border-l-8 border-yellow-400 border-b-4 border-black/10 font-serif flex flex-col justify-center">
            <h3 className="text-lg font-bold text-black mb-4">Get in Touch</h3>
            <div className="space-y-6">
              <div className="flex items-center">
                <span className="text-2xl mr-3">✉️</span>
                <div>
                  <p className="text-black font-bold">Email</p>
                  <p className="text-gray-700 text-sm">editorial@magazine.com</p>
                </div>
              </div>
              <div className="flex items-center">
                <span className="text-2xl mr-3">📞</span>
                <div>
                  <p className="text-black font-bold">Phone</p>
                  <p className="text-gray-700 text-sm">+62 812-3456-7890</p>
                </div>
              </div>
              <div className="flex items-center">
                <span className="text-2xl mr-3">🏢</span>
                <div>
                  <p className="text-black font-bold">Address</p>
                  <p className="text-gray-700 text-sm">Jl. Majalah No. 106, Jakarta</p>
                </div>
              </div>
            </div>
            <div className="mt-8 border-l-4 border-red-500 pl-4">
              <span className="text-red-500 font-bold uppercase tracking-widest text-xs">Editorial Highlight</span>
              <p className="text-black font-serif mt-2">We respond to all inquiries within 1 business day.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 