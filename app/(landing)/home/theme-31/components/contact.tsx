export default function Contact() {
  const contactMethods = [
    {
      type: "KANTOR PUSAT",
      title: "Jakarta Office",
      details: ["Jl. Sudirman No. 123", "Jakarta Pusat 10220", "Indonesia"],
      icon: "🏢",
      hours: "Sen-Jum: 09:00-18:00"
    },
    {
      type: "TELEPON",
      title: "Hotline 24/7",
      details: ["+62 21 1234-5678", "+62 812-3456-7890", "WhatsApp Ready"],
      icon: "📞",
      hours: "24 Jam Setiap Hari"
    },
    {
      type: "EMAIL",
      title: "Correspondence",
      details: ["info@digitalchronicle.com", "support@digitalchronicle.com", "career@digitalchronicle.com"],
      icon: "📧",
      hours: "Respon < 2 Jam"
    },
    {
      type: "MEETING",
      title: "Video Conference",
      details: ["Zoom Meeting", "Google Meet", "Microsoft Teams"],
      icon: "💻",
      hours: "Appointment Required"
    }
  ];

  const services = [
    { service: "Web Development", contact: "web@digitalchronicle.com", price: "Mulai 15jt" },
    { service: "Mobile App", contact: "mobile@digitalchronicle.com", price: "Mulai 20jt" },
    { service: "Digital Marketing", contact: "marketing@digitalchronicle.com", price: "Mulai 8jt" },
    { service: "UI/UX Design", contact: "design@digitalchronicle.com", price: "Mulai 12jt" },
    { service: "Cloud Infrastructure", contact: "cloud@digitalchronicle.com", price: "Mulai 25jt" },
    { service: "Cybersecurity", contact: "security@digitalchronicle.com", price: "Mulai 10jt" }
  ];

  return (
    <section className="py-16 px-6 bg-gradient-to-b from-amber-50 to-orange-100 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center border-b-4 border-double border-amber-800 pb-6 mb-12">
          <div className="text-xs text-amber-600 font-bold tracking-widest mb-2">CLASSIFIED ADS</div>
          <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-4"
              style={{ fontFamily: 'Times, serif' }}>
            HUBUNGI KAMI
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Berbagai cara untuk terhubung dengan tim profesional kami. Konsultasi gratis untuk semua layanan.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Contact Methods */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {contactMethods.map((method, index) => (
                <div key={index} className="bg-white border-4 border-amber-800 p-6 relative">
                  {/* Classified Ad Header */}
                  <div className="bg-amber-800 text-white px-3 py-1 text-xs font-bold tracking-widest absolute -top-2 left-4">
                    {method.type}
                  </div>
                  
                  <div className="pt-4">
                    <div className="flex items-center mb-4">
                      <span className="text-3xl mr-3">{method.icon}</span>
                      <h3 className="text-xl font-bold text-amber-900"
                          style={{ fontFamily: 'Times, serif' }}>
                        {method.title}
                      </h3>
                    </div>
                    
                    <div className="space-y-1 mb-4">
                      {method.details.map((detail, idx) => (
                        <div key={idx} className="text-sm text-gray-700">
                          {detail}
                        </div>
                      ))}
                    </div>
                    
                    <div className="text-xs text-amber-600 font-semibold border-t border-amber-200 pt-2">
                      {method.hours}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Contact Form */}
            <div className="bg-white border-4 border-amber-800 p-8">
              <div className="text-center mb-6">
                <div className="text-xs text-amber-600 font-bold tracking-widest mb-2">FORMULIR KONTAK</div>
                <h3 className="text-2xl font-bold text-amber-900"
                    style={{ fontFamily: 'Times, serif' }}>
                  Kirim Pesan Anda
                </h3>
              </div>
              
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold text-amber-900 mb-2">Nama Lengkap *</label>
                    <input 
                      type="text" 
                      className="w-full border-2 border-amber-300 p-3 focus:border-amber-600 focus:outline-none"
                      placeholder="Masukkan nama lengkap"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-amber-900 mb-2">Email *</label>
                    <input 
                      type="email" 
                      className="w-full border-2 border-amber-300 p-3 focus:border-amber-600 focus:outline-none"
                      placeholder="nama@email.com"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold text-amber-900 mb-2">Telepon</label>
                    <input 
                      type="tel" 
                      className="w-full border-2 border-amber-300 p-3 focus:border-amber-600 focus:outline-none"
                      placeholder="+62 812-3456-7890"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-amber-900 mb-2">Layanan yang Diminati</label>
                    <select className="w-full border-2 border-amber-300 p-3 focus:border-amber-600 focus:outline-none">
                      <option>Pilih Layanan</option>
                      <option>Web Development</option>
                      <option>Mobile App</option>
                      <option>Digital Marketing</option>
                      <option>UI/UX Design</option>
                      <option>Cloud Infrastructure</option>
                      <option>Cybersecurity</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-bold text-amber-900 mb-2">Pesan *</label>
                  <textarea 
                    rows={4}
                    className="w-full border-2 border-amber-300 p-3 focus:border-amber-600 focus:outline-none"
                    placeholder="Deskripsikan kebutuhan proyek Anda..."
                  />
                </div>
                
                <button 
                  type="submit"
                  className="w-full bg-amber-800 text-white py-4 px-6 font-bold text-lg hover:bg-amber-900 transition-colors duration-300 border-2 border-amber-900"
                >
                  KIRIM PESAN SEKARANG
                </button>
              </form>
            </div>
          </div>

          {/* Sidebar - Service Directory */}
          <div className="space-y-6">
            {/* Service Directory */}
            <div className="bg-yellow-50 border-4 border-yellow-600 p-6">
              <div className="text-center mb-6">
                <div className="text-xs text-yellow-800 font-bold tracking-widest mb-2">DIREKTORI LAYANAN</div>
                <h3 className="text-xl font-bold text-yellow-900"
                    style={{ fontFamily: 'Times, serif' }}>
                  Quick Contact
                </h3>
              </div>
              
              <div className="space-y-3">
                {services.map((service, index) => (
                  <div key={index} className="bg-white border border-yellow-400 p-3 text-sm">
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-bold text-yellow-900">{service.service}</span>
                      <span className="text-xs text-yellow-700">{service.price}</span>
                    </div>
                    <div className="text-xs text-gray-600">{service.contact}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="bg-red-100 border-4 border-red-600 p-6">
              <div className="text-center">
                <div className="text-xs text-red-800 font-bold tracking-widest mb-2">LAYANAN DARURAT</div>
                <h3 className="text-xl font-bold text-red-900 mb-4"
                    style={{ fontFamily: 'Times, serif' }}>
                  24/7 Support
                </h3>
                <div className="text-2xl mb-2">🚨</div>
                <p className="text-sm text-red-800 mb-4">
                  Untuk kebutuhan mendesak atau masalah teknis critical
                </p>
                <div className="text-lg font-bold text-red-900 mb-2">
                  +62 811-URGENT-1
                </div>
                <div className="text-xs text-red-700">
                  Respons dalam 15 menit
                </div>
              </div>
            </div>

            {/* Office Hours */}
            <div className="bg-white border-2 border-amber-800 p-6">
              <h4 className="text-lg font-bold text-amber-900 mb-4 text-center border-b border-amber-300 pb-2">
                JAM OPERASIONAL
              </h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Senin - Jumat:</span>
                  <span className="font-semibold">09:00 - 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Sabtu:</span>
                  <span className="font-semibold">09:00 - 15:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Minggu:</span>
                  <span className="font-semibold">Emergency Only</span>
                </div>
                <div className="flex justify-between border-t border-amber-200 pt-2">
                  <span>Support 24/7:</span>
                  <span className="font-semibold text-green-600">✅ Aktif</span>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-blue-50 border-4 border-blue-600 p-6">
              <div className="text-center">
                <div className="text-xs text-blue-800 font-bold tracking-widest mb-2">MEDIA SOSIAL</div>
                <h4 className="text-lg font-bold text-blue-900 mb-4">
                  Follow Us
                </h4>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="text-center">
                    <div className="text-2xl mb-1">📘</div>
                    <div className="font-semibold">Facebook</div>
                    <div className="text-xs text-blue-700">@DigitalChronicle</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl mb-1">📷</div>
                    <div className="font-semibold">Instagram</div>
                    <div className="text-xs text-blue-700">@digital_chronicle</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl mb-1">🐦</div>
                    <div className="font-semibold">Twitter</div>
                    <div className="text-xs text-blue-700">@DigitalChron</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl mb-1">💼</div>
                    <div className="font-semibold">LinkedIn</div>
                    <div className="text-xs text-blue-700">Digital Chronicle</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="bg-amber-800 text-white p-8 text-center border-4 border-amber-900">
          <h3 className="text-2xl font-bold mb-4"
              style={{ fontFamily: 'Times, serif' }}>
            Siap Memulai Proyek Digital Anda?
          </h3>
          <p className="text-lg mb-6">
            Konsultasi gratis untuk menentukan solusi terbaik bagi bisnis Anda
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-amber-800 px-8 py-3 font-bold text-lg hover:bg-gray-100 transition-colors duration-300">
              📞 TELEPON SEKARANG
            </button>
            <button className="border-2 border-white text-white px-8 py-3 font-bold text-lg hover:bg-white hover:text-amber-800 transition-colors duration-300">
              💬 CHAT WHATSAPP
            </button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-8 left-8 text-amber-600 text-4xl opacity-10">📞</div>
      <div className="absolute top-8 right-8 text-orange-600 text-4xl opacity-10">📧</div>
      <div className="absolute bottom-8 left-1/4 text-amber-700 text-3xl opacity-10">💬</div>
      <div className="absolute bottom-8 right-1/4 text-orange-700 text-3xl opacity-10">📍</div>
    </section>
  );
} 