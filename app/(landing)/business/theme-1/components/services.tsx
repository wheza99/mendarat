import { BusinessData } from "../../page";

interface ServicesProps {
  businessData: BusinessData;
}

export default function Services({ businessData }: ServicesProps) {
  // Membuat layanan berdasarkan data yang tersedia
  const services = [
    {
      title: "Layanan Utama",
      description: businessData.metadata.description,
      icon: "🏪"
    },
    {
      title: "Kebijakan Privasi",
      description: "Kami menjaga privasi dan keamanan data pelanggan dengan standar tinggi",
      icon: "🔒",
      hasDetail: !!businessData.metadata.privacy
    },
    {
      title: "Syarat & Ketentuan",
      description: "Ketentuan layanan yang jelas dan transparan untuk semua pelanggan",
      icon: "📋",
      hasDetail: !!businessData.metadata.terms
    }
  ];

  // Tambahkan layanan shipping jika tersedia
  if (businessData.metadata.shipping) {
    services.push({
      title: "Layanan Pengiriman",
      description: "Layanan pengiriman yang tersedia untuk produk kami",
      icon: "🚚",
      hasDetail: true
    });
  }

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Layanan Kami
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Berbagai layanan yang kami tawarkan untuk memenuhi kebutuhan Anda
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="text-4xl mb-4 text-center">{service.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                {service.title}
              </h3>
              <p className="text-gray-600 text-center mb-4 line-clamp-3">
                {service.description}
              </p>
              {service.hasDetail && (
                <div className="text-center">
                  <button 
                    className="text-sm font-medium hover:underline transition-colors duration-200"
                    style={{ color: 'var(--primary-color)' }}
                  >
                    Lihat Detail
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Template Information */}
        <div className="mt-16 bg-gray-50 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Template: {businessData.selected_template}
          </h3>
          <p className="text-gray-600 mb-6">
            Menggunakan template {businessData.selected_template} dengan desain yang modern dan responsif
          </p>
          <div className="flex justify-center space-x-4">
            <div className="w-4 h-4 rounded-full" style={{ backgroundColor: businessData.primary_color }}></div>
            <div className="w-4 h-4 rounded-full" style={{ backgroundColor: businessData.secondary_color }}></div>
          </div>
          <p className="text-sm text-gray-500 mt-2">Warna tema yang digunakan</p>
        </div>
      </div>
    </section>
  );
} 