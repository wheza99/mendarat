import React from 'react';

export default function ContactCutout() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-yellow-700 text-center mb-12 font-sans tracking-wider drop-shadow" style={{textShadow: '1px 2px 0 #fff7d6'}}>
          Contact Us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="relative p-8 bg-yellow-200 border-2 border-yellow-300 shadow-lg rounded-[18px] rotate-2 font-sans" style={{boxShadow: '2px 4px 0 #fff7d6'}}>
            <h3 className="text-lg font-bold text-yellow-800 mb-4">Send a Message</h3>
            <form className="space-y-4">
              <input type="text" placeholder="Your Name" className="w-full px-4 py-2 bg-white border-2 border-pink-200 rounded-[8px] shadow focus:outline-none focus:border-pink-400 font-sans" />
              <input type="email" placeholder="Your Email" className="w-full px-4 py-2 bg-white border-2 border-blue-200 rounded-[8px] shadow focus:outline-none focus:border-blue-400 font-sans" />
              <textarea placeholder="Your Message" rows={4} className="w-full px-4 py-2 bg-white border-2 border-green-200 rounded-[8px] shadow focus:outline-none focus:border-green-400 font-sans resize-none" />
              <button className="w-full px-6 py-3 bg-green-200 text-green-900 font-bold rounded-[10px] border-2 border-green-400 shadow hover:scale-105 transition-transform" style={{boxShadow: '1px 2px 0 #fff7d6'}}>Send</button>
            </form>
            {/* Decorative torn edge */}
            <div className="absolute left-0 bottom-0 w-full h-3 bg-repeat-x" style={{backgroundImage: 'url("/torn-edge.png")'}} />
          </div>
          {/* Contact Info */}
          <div className="relative p-8 bg-pink-200 border-2 border-pink-300 shadow-lg rounded-[18px] -rotate-2 font-sans flex flex-col justify-center" style={{boxShadow: '2px 4px 0 #fff7d6'}}>
            <h3 className="text-lg font-bold text-pink-800 mb-4">Get in Touch</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <span className="text-2xl mr-3">📄</span>
                <div>
                  <p className="text-yellow-800 font-bold">Email</p>
                  <p className="text-pink-700 text-sm">hello@papercreative.com</p>
                </div>
              </div>
              <div className="flex items-center">
                <span className="text-2xl mr-3">📄</span>
                <div>
                  <p className="text-yellow-800 font-bold">Phone</p>
                  <p className="text-pink-700 text-sm">+62 812-3456-7890</p>
                </div>
              </div>
              <div className="flex items-center">
                <span className="text-2xl mr-3">📄</span>
                <div>
                  <p className="text-yellow-800 font-bold">Address</p>
                  <p className="text-pink-700 text-sm">Jl. Kolase No. 105, Jakarta</p>
                </div>
              </div>
            </div>
            {/* Decorative torn edge */}
            <div className="absolute left-0 bottom-0 w-full h-3 bg-repeat-x" style={{backgroundImage: 'url(\"/torn-edge.png\")'}} />
          </div>
        </div>
      </div>
    </section>
  );
} 