import React from 'react';

function ZigzagBorder() {
  return (
    <svg viewBox="0 0 200 8" fill="none" className="absolute left-0 bottom-0 w-full h-2">
      <polyline points="0,8 10,0 20,8 30,0 40,8 50,0 60,8 70,0 80,8 90,0 100,8 110,0 120,8 130,0 140,8 150,0 160,8 170,0 180,8 190,0 200,8" stroke="#fbbf24" strokeWidth="2" fill="none" />
    </svg>
  );
}

export default function ContactDoodle() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-blue-500 text-center mb-12 font-sans tracking-wider" style={{textShadow: '1px 2px 0 #fff'}}>
          Contact Doodle
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="relative p-8 bg-yellow-100 shadow-lg rounded-[18px] font-sans animate-wiggle">
            <h3 className="text-lg font-bold text-blue-800 mb-4">Send a Message</h3>
            <form className="space-y-4">
              <div className="relative">
                <input type="text" placeholder="Your Name" className="w-full px-4 py-2 bg-white border-2 border-blue-300 rounded-[8px] shadow focus:outline-none focus:border-pink-400 font-sans" />
                <ZigzagBorder />
              </div>
              <div className="relative">
                <input type="email" placeholder="Your Email" className="w-full px-4 py-2 bg-white border-2 border-pink-300 rounded-[8px] shadow focus:outline-none focus:border-blue-400 font-sans" />
                <ZigzagBorder />
              </div>
              <div className="relative">
                <textarea placeholder="Your Message" rows={4} className="w-full px-4 py-2 bg-white border-2 border-green-300 rounded-[8px] shadow focus:outline-none focus:border-yellow-400 font-sans resize-none" />
                <ZigzagBorder />
              </div>
              <button className="w-full px-6 py-3 bg-blue-200 text-blue-900 font-bold rounded-[10px] border-2 border-pink-400 shadow hover:scale-105 transition-transform" style={{boxShadow: '1px 2px 0 #fff'}}>Send</button>
            </form>
          </div>
          {/* Contact Info */}
          <div className="relative p-8 bg-pink-100 shadow-lg rounded-[18px] font-sans flex flex-col justify-center animate-wiggle">
            <h3 className="text-lg font-bold text-pink-800 mb-4">Get in Touch</h3>
            <div className="space-y-6">
              <div className="flex items-center">
                <span className="text-2xl mr-3">📧</span>
                <div>
                  <p className="text-blue-800 font-bold">Email</p>
                  <p className="text-pink-700 text-sm">hello@doodlefun.com</p>
                </div>
              </div>
              <div className="flex items-center">
                <span className="text-2xl mr-3">📱</span>
                <div>
                  <p className="text-blue-800 font-bold">Phone</p>
                  <p className="text-pink-700 text-sm">+62 812-3456-7890</p>
                </div>
              </div>
              <div className="flex items-center">
                <span className="text-2xl mr-3">🏠</span>
                <div>
                  <p className="text-blue-800 font-bold">Address</p>
                  <p className="text-pink-700 text-sm">Jl. Doodle No. 107, Jakarta</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes wiggle {
          0%, 100% { transform: rotate(-1deg); }
          50% { transform: rotate(2deg); }
        }
        .animate-wiggle { animation: wiggle 2s infinite; }
      `}</style>
    </section>
  );
} 