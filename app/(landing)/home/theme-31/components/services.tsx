export default function Services() {
  const services = [
    {
      category: "TEKNOLOGI",
      title: "Pengembangan Aplikasi Web",
      description: "Solusi aplikasi web modern dengan teknologi terdepan untuk mengoptimalkan operasional bisnis Anda.",
      features: ["React & Next.js", "Database Optimization", "Cloud Integration", "Security First"],
      icon: "💻",
      price: "Mulai 15 juta"
    },
    {
      category: "BISNIS",
      title: "Konsultasi Digital Marketing",
      description: "Strategi pemasaran digital yang efektif untuk meningkatkan brand awareness dan konversi penjualan.",
      features: ["SEO Strategy", "Social Media", "Content Marketing", "Analytics"],
      icon: "📈",
      price: "Mulai 8 juta"
    },
    {
      category: "DESAIN",
      title: "UI/UX Design Premium",
      description: "Desain antarmuka yang intuitif dan menarik untuk meningkatkan user experience produk digital.",
      features: ["User Research", "Wireframing", "Prototyping", "Testing"],
      icon: "🎨",
      price: "Mulai 12 juta"
    },
    {
      category: "INFRASTRUKTUR",
      title: "Cloud Infrastructure",
      description: "Migrasi dan pengelolaan infrastruktur cloud untuk skalabilitas dan efisiensi operasional.",
      features: ["AWS/Azure Setup", "DevOps Pipeline", "Monitoring", "Backup System"],
      icon: "☁️",
      price: "Mulai 20 juta"
    },
    {
      category: "KEAMANAN",
      title: "Cybersecurity Audit",
      description: "Audit keamanan menyeluruh untuk melindungi aset digital dan data sensitif perusahaan.",
      features: ["Security Assessment", "Vulnerability Testing", "Compliance Check", "Training"],
      icon: "🔒",
      price: "Mulai 10 juta"
    },
    {
      category: "ANALITIK",
      title: "Business Intelligence",
      description: "Sistem analitik canggih untuk insight bisnis yang mendalam dan pengambilan keputusan yang tepat.",
      features: ["Data Visualization", "Reporting Dashboard", "Predictive Analytics", "KPI Tracking"],
      icon: "📊",
      price: "Mulai 18 juta"
    }
  ];

  return (
    <section className="py-16 px-6 bg-gradient-to-b from-amber-100 to-orange-50 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center border-b-4 border-double border-amber-800 pb-6 mb-12">
          <div className="text-xs text-amber-600 font-bold tracking-widest mb-2">RUBRIK LAYANAN</div>
          <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-4"
              style={{ fontFamily: 'Times, serif' }}>
            LAYANAN PROFESIONAL
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Rangkaian lengkap solusi teknologi untuk mengakselerasi transformasi digital perusahaan Anda
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <article key={index} className="bg-white border-4 border-amber-800 shadow-lg hover:shadow-xl transition-shadow duration-300">
              {/* Article Header */}
              <div className="bg-amber-800 text-white p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-bold tracking-widest">{service.category}</span>
                  <span className="text-2xl">{service.icon}</span>
                </div>
                <h3 className="text-xl font-bold leading-tight"
                    style={{ fontFamily: 'Times, serif' }}>
                  {service.title}
                </h3>
              </div>

              {/* Article Content */}
              <div className="p-6">
                <p className="text-gray-700 text-sm leading-relaxed mb-4 text-justify">
                  {service.description}
                </p>

                {/* Features List */}
                <div className="mb-6">
                  <h4 className="text-sm font-bold text-amber-900 mb-3 border-b border-amber-300 pb-1">
                    FITUR UNGGULAN:
                  </h4>
                  <ul className="space-y-1">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-xs text-gray-600">
                        <div className="w-2 h-2 bg-amber-600 rounded-full mr-2 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Price Box */}
                <div className="bg-yellow-100 border-2 border-yellow-600 p-3 text-center mb-4">
                  <div className="text-xs font-bold text-yellow-800 mb-1">INVESTASI</div>
                  <div className="text-lg font-bold text-yellow-900">{service.price}</div>
                </div>

                {/* CTA Button */}
                <button className="w-full bg-amber-800 text-white py-3 px-4 font-bold text-sm hover:bg-amber-900 transition-colors duration-300 border-2 border-amber-900">
                  KONSULTASI GRATIS
                </button>
              </div>

              {/* Article Footer */}
              <div className="bg-gray-100 px-6 py-3 border-t-2 border-amber-300">
                <div className="flex justify-between items-center text-xs text-gray-600">
                  <span>Konsultasi: 24/7</span>
                  <span>⭐⭐⭐⭐⭐</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Special Offer Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Main Offer */}
          <div className="bg-red-800 text-white p-8 border-4 border-red-900 relative">
            <div className="absolute top-4 right-4 bg-yellow-400 text-red-800 px-3 py-1 font-bold text-xs rotate-12">
              TERBATAS!
            </div>
            <div className="text-center">
              <div className="text-xs font-bold tracking-widest mb-2">PENAWARAN KHUSUS</div>
              <h3 className="text-3xl font-bold mb-4"
                  style={{ fontFamily: 'Times, serif' }}>
                Paket Transformasi Digital Lengkap
              </h3>
              <p className="text-lg mb-6">
                Web Development + Mobile App + Digital Marketing
              </p>
              <div className="text-4xl font-bold mb-2">Rp 45 Juta</div>
              <div className="text-sm line-through opacity-75 mb-4">Harga Normal: Rp 65 Juta</div>
              <button className="bg-yellow-400 text-red-800 px-8 py-3 font-bold text-lg hover:bg-yellow-300 transition-colors duration-300">
                AMBIL PENAWARAN
              </button>
            </div>
          </div>

          {/* Testimonial Section */}
          <div className="space-y-6">
            {/* Client Success Story */}
            <div className="bg-white border-2 border-amber-800 p-6">
              <div className="text-xs text-amber-600 font-bold tracking-widest mb-2">KISAH SUKSES KLIEN</div>
              <h4 className="text-xl font-bold text-amber-900 mb-3"
                  style={{ fontFamily: 'Times, serif' }}>
                "Omzet Meningkat 300% Setelah Digital Transformation"
              </h4>
              <p className="text-sm text-gray-700 leading-relaxed mb-4 text-justify">
                PT. Maju Bersama berhasil meningkatkan omzet hingga 300% dalam 6 bulan 
                setelah mengimplementasikan solusi digital komprehensif dari tim kami.
              </p>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-amber-200 rounded-full flex items-center justify-center text-xl">
                  👤
                </div>
                <div>
                  <div className="font-semibold text-amber-900">Budi Santoso</div>
                  <div className="text-xs text-gray-600">CEO PT. Maju Bersama</div>
                </div>
              </div>
            </div>

            {/* Process Timeline */}
            <div className="bg-white border-2 border-amber-800 p-6">
              <h4 className="text-lg font-bold text-amber-900 mb-4 text-center border-b border-amber-300 pb-2">
                PROSES KERJA KAMI
              </h4>
              <div className="space-y-3">
                {[
                  { step: "1", title: "Konsultasi & Analisis", time: "1-2 hari" },
                  { step: "2", title: "Perencanaan & Proposal", time: "3-5 hari" },
                  { step: "3", title: "Development & Testing", time: "2-8 minggu" },
                  { step: "4", title: "Deployment & Training", time: "1-2 minggu" }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-4">
                    <div className="w-8 h-8 bg-amber-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      {item.step}
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-sm text-amber-900">{item.title}</div>
                      <div className="text-xs text-gray-600">{item.time}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Newspaper Elements */}
      <div className="absolute top-12 left-12 text-amber-600 text-4xl opacity-10 rotate-12">📰</div>
      <div className="absolute top-12 right-12 text-orange-600 text-4xl opacity-10 -rotate-12">✏️</div>
      <div className="absolute bottom-12 left-1/4 text-amber-700 text-3xl opacity-10">📋</div>
      <div className="absolute bottom-12 right-1/4 text-orange-700 text-3xl opacity-10">📊</div>
    </section>
  );
} 