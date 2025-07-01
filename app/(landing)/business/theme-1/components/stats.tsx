import { BusinessData } from "../../page";

interface StatsProps {
  businessData: BusinessData;
}

export default function Stats({ businessData }: StatsProps) {
  const stats = [
    {
      label: "Status",
      value: businessData.status === 'published' ? 'Aktif' : 'Tidak Aktif',
      icon: "📊"
    },
    {
      label: "Mata Uang",
      value: businessData.currency,
      icon: "💰"
    },
    {
      label: "Bahasa",
      value: businessData.language === 'en' ? 'English' : businessData.language,
      icon: "🌐"
    },
    {
      label: "Template",
      value: businessData.selected_template,
      icon: "🎨"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Informasi Business
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Detail informasi tentang {businessData.name}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300 text-center"
            >
              <div className="text-4xl mb-4">{stat.icon}</div>
              <div className="text-2xl font-bold text-gray-900 mb-2" style={{ color: 'var(--primary-color)' }}>
                {stat.value}
              </div>
              <div className="text-sm text-gray-600 uppercase tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Business ID */}
        <div className="mt-12 text-center">
          <div className="inline-block bg-white rounded-lg px-6 py-4 shadow-sm">
            <span className="text-sm text-gray-500">Business ID: </span>
            <span className="text-sm font-mono text-gray-800">{businessData.id}</span>
          </div>
        </div>
      </div>
    </section>
  );
} 