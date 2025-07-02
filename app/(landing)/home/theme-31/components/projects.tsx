export default function Projects() {
  const projects = [
    {
      title: "E-Commerce Platform Terdepan",
      client: "PT. Retail Modern",
      category: "WEB DEVELOPMENT",
      description: "Platform e-commerce dengan fitur lengkap yang meningkatkan penjualan online hingga 400%",
      image: "🛒",
      results: ["400% peningkatan penjualan", "50% lebih efisien", "24/7 operasional"],
      tech: ["React", "Node.js", "MongoDB", "AWS"],
      timeline: "3 bulan",
      featured: true
    },
    {
      title: "Aplikasi Mobile Banking",
      client: "Bank Digital Nusantara", 
      category: "MOBILE APP",
      description: "Aplikasi mobile banking dengan keamanan tinggi dan user experience yang intuitif",
      image: "🏦",
      results: ["1M+ download", "99.9% uptime", "Zero security breach"],
      tech: ["React Native", "Blockchain", "Biometric"],
      timeline: "6 bulan",
      featured: false
    },
    {
      title: "Smart Factory IoT System",
      client: "PT. Manufaktur Cerdas",
      category: "IoT SOLUTION", 
      description: "Sistem IoT untuk monitoring dan optimasi proses produksi manufaktur secara real-time",
      image: "🏭",
      results: ["30% efisiensi produksi", "Predictive maintenance", "Cost reduction 25%"],
      tech: ["IoT Sensors", "Machine Learning", "Cloud Analytics"],
      timeline: "4 bulan",
      featured: false
    },
    {
      title: "Healthcare Management System",
      client: "RS. Teknologi Medis",
      category: "HEALTHCARE",
      description: "Sistem manajemen rumah sakit terintegrasi untuk meningkatkan pelayanan pasien",
      image: "🏥",
      results: ["50% faster registration", "Digital medical records", "Improved patient care"],
      tech: ["Vue.js", "PostgreSQL", "HL7 FHIR"],
      timeline: "5 bulan", 
      featured: true
    },
    {
      title: "AI-Powered CRM System",
      client: "PT. Sales Excellence",
      category: "ARTIFICIAL INTELLIGENCE",
      description: "Sistem CRM dengan AI untuk prediksi sales dan customer behavior analysis",
      image: "🤖",
      results: ["60% better lead conversion", "Automated insights", "Predictive analytics"],
      tech: ["Python", "TensorFlow", "React", "PostgreSQL"],
      timeline: "4 bulan",
      featured: false
    },
    {
      title: "Educational Platform",
      client: "Universitas Digital",
      category: "EDUCATION TECH",
      description: "Platform pembelajaran online dengan fitur virtual classroom dan assessment tools",
      image: "🎓",
      results: ["10,000+ active students", "Interactive learning", "Real-time collaboration"],
      tech: ["Next.js", "WebRTC", "Socket.io", "Redis"],
      timeline: "3 bulan",
      featured: false
    }
  ];

  return (
    <section className="py-16 px-6 bg-gradient-to-b from-orange-50 to-amber-50 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center border-b-4 border-double border-amber-800 pb-6 mb-12">
          <div className="text-xs text-amber-600 font-bold tracking-widest mb-2">GALERI PROYEK</div>
          <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-4"
              style={{ fontFamily: 'Times, serif' }}>
            PORTFOLIO TERKINI
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Dokumentasi visual dari proyek-proyek sukses yang telah kami selesaikan untuk berbagai industri
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.filter(project => project.featured).map((project, index) => (
              <article key={index} className="bg-white border-4 border-amber-800 shadow-lg">
                {/* Photo Header */}
                <div className="bg-gray-200 border-b-4 border-amber-800 p-8 text-center relative">
                  <div className="absolute top-2 left-2 bg-red-600 text-white px-2 py-1 text-xs font-bold">
                    FEATURED
                  </div>
                  <div className="text-8xl mb-4">{project.image}</div>
                  <div className="text-xs text-gray-600 font-semibold tracking-widest">
                    {project.category}
                  </div>
                </div>

                {/* Photo Caption */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-amber-900 mb-2"
                      style={{ fontFamily: 'Times, serif' }}>
                    {project.title}
                  </h3>
                  <div className="text-sm text-amber-600 font-semibold mb-3">
                    Klien: {project.client}
                  </div>
                  <p className="text-sm text-gray-700 leading-relaxed mb-4 text-justify">
                    {project.description}
                  </p>

                  {/* Results */}
                  <div className="mb-4">
                    <h4 className="text-sm font-bold text-amber-900 mb-2 border-b border-amber-300 pb-1">
                      HASIL PENCAPAIAN:
                    </h4>
                    <ul className="space-y-1">
                      {project.results.map((result, idx) => (
                        <li key={idx} className="flex items-center text-xs text-gray-600">
                          <div className="w-2 h-2 bg-green-600 rounded-full mr-2 flex-shrink-0"></div>
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack */}
                  <div className="mb-4">
                    <h4 className="text-sm font-bold text-amber-900 mb-2">TEKNOLOGI:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, idx) => (
                        <span key={idx} className="bg-amber-100 text-amber-800 px-2 py-1 text-xs font-semibold border border-amber-300">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Timeline */}
                  <div className="flex justify-between items-center text-xs text-gray-600 border-t border-amber-200 pt-3">
                    <span>Durasi: {project.timeline}</span>
                    <span>Status: ✅ Selesai</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Regular Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {projects.filter(project => !project.featured).map((project, index) => (
            <article key={index} className="bg-white border-2 border-amber-800 shadow-md hover:shadow-lg transition-shadow duration-300">
              {/* Mini Photo */}
              <div className="bg-gray-100 border-b-2 border-amber-800 p-4 text-center">
                <div className="text-4xl mb-2">{project.image}</div>
                <div className="text-xs text-gray-600 font-semibold">
                  {project.category}
                </div>
              </div>

              {/* Mini Caption */}
              <div className="p-4">
                <h4 className="text-lg font-bold text-amber-900 mb-2 leading-tight"
                    style={{ fontFamily: 'Times, serif' }}>
                  {project.title}
                </h4>
                <div className="text-xs text-amber-600 font-semibold mb-2">
                  {project.client}
                </div>
                <p className="text-xs text-gray-700 leading-relaxed mb-3">
                  {project.description}
                </p>

                {/* Mini Results */}
                <div className="mb-3">
                  <div className="text-xs font-bold text-amber-900 mb-1">HASIL:</div>
                  <div className="text-xs text-gray-600">
                    {project.results[0]}
                  </div>
                </div>

                {/* Mini Tech */}
                <div className="flex flex-wrap gap-1 mb-3">
                  {project.tech.slice(0, 2).map((tech, idx) => (
                    <span key={idx} className="bg-amber-100 text-amber-800 px-1 py-0.5 text-xs font-semibold">
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 2 && (
                    <span className="text-xs text-gray-500">+{project.tech.length - 2}</span>
                  )}
                </div>

                <div className="text-xs text-gray-600 border-t border-amber-200 pt-2">
                  {project.timeline} • ✅ Selesai
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Call to Action Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Project Inquiry */}
          <div className="bg-white border-4 border-amber-800 p-8">
            <div className="text-center">
              <div className="text-xs text-amber-600 font-bold tracking-widest mb-2">KONSULTASI PROYEK</div>
              <h3 className="text-2xl font-bold text-amber-900 mb-4"
                  style={{ fontFamily: 'Times, serif' }}>
                Wujudkan Proyek Impian Anda
              </h3>
              <p className="text-sm text-gray-700 mb-6">
                Diskusikan kebutuhan proyek Anda dengan tim ahli kami. 
                Konsultasi gratis untuk analisis dan estimasi.
              </p>
              <button className="bg-amber-800 text-white px-8 py-3 font-bold text-lg hover:bg-amber-900 transition-colors duration-300 border-2 border-amber-900 w-full">
                MULAI KONSULTASI
              </button>
            </div>
          </div>

          {/* Success Statistics */}
          <div className="bg-green-50 border-4 border-green-600 p-8">
            <div className="text-center">
              <div className="text-xs text-green-800 font-bold tracking-widest mb-2">REKAM JEJAK</div>
              <h3 className="text-2xl font-bold text-green-900 mb-6"
                  style={{ fontFamily: 'Times, serif' }}>
                Statistik Keberhasilan
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-800">100%</div>
                  <div className="text-xs text-green-700 font-semibold">Proyek Selesai Tepat Waktu</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-800">98%</div>
                  <div className="text-xs text-green-700 font-semibold">Tingkat Kepuasan Klien</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-800">24/7</div>
                  <div className="text-xs text-green-700 font-semibold">Support & Maintenance</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-800">5+</div>
                  <div className="text-xs text-green-700 font-semibold">Tahun Pengalaman</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Camera Elements */}
      <div className="absolute top-8 left-8 text-amber-600 text-4xl opacity-10">📸</div>
      <div className="absolute top-8 right-8 text-orange-600 text-4xl opacity-10">🖼️</div>
      <div className="absolute bottom-8 left-1/3 text-amber-700 text-3xl opacity-10">📷</div>
      <div className="absolute bottom-8 right-1/3 text-orange-700 text-3xl opacity-10">🎯</div>
    </section>
  );
} 