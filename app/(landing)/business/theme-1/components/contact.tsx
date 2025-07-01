import { BusinessData } from "../../page";

interface ContactProps {
  businessData: BusinessData;
}

export default function Contact({ businessData }: ContactProps) {
  // Filter social media yang aktif
  const activeSocials = Object.entries(businessData.socials)
    .filter(([_, value]) => value !== null)
    .map(([platform, url]) => ({
      platform: platform.charAt(0).toUpperCase() + platform.slice(1),
      url: url!,
      icon: getSocialIcon(platform)
    }));

  // Filter messenger yang aktif
  const activeMessengers = Object.entries(businessData.messenger)
    .filter(([_, value]) => value !== null)
    .map(([platform, contact]) => ({
      platform: platform.charAt(0).toUpperCase() + platform.slice(1),
      contact: contact!,
      icon: getMessengerIcon(platform)
    }));

  function getSocialIcon(platform: string) {
    const icons: { [key: string]: string } = {
      facebook: "📘",
      instagram: "📷",
      twitter: "🐦",
      tiktok: "🎵"
    };
    return icons[platform] || "🌐";
  }

  function getMessengerIcon(platform: string) {
    const icons: { [key: string]: string } = {
      whatsapp: "💬",
      discord: "🎮",
      instagram: "📩",
      facebook: "💬"
    };
    return icons[platform] || "💬";
  }

  return (
    <section id="contact" className="py-16 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Hubungi Kami
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Kami siap membantu Anda. Hubungi kami melalui berbagai platform yang tersedia.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Business Information */}
          <div className="lg:col-span-1">
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4" style={{ color: 'var(--primary-color)' }}>
                {businessData.name}
              </h3>
              <p className="text-gray-300 mb-4">
                {businessData.metadata.description}
              </p>
              
              {/* Business Logo */}
              {businessData.img && (
                <div className="mb-4">
                  <img 
                    src={businessData.img} 
                    alt={businessData.name}
                    className="h-12 w-auto object-contain"
                  />
                </div>
              )}

              {/* Address */}
              {businessData.address && (
                <div className="mb-4">
                  <h4 className="font-semibold mb-2">📍 Alamat</h4>
                  <p className="text-gray-300">{businessData.address}</p>
                </div>
              )}

              {/* Currency Info */}
              <div className="mb-4">
                <h4 className="font-semibold mb-2">💰 Mata Uang</h4>
                <p className="text-gray-300">{businessData.currency}</p>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="lg:col-span-1">
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4" style={{ color: 'var(--primary-color)' }}>
                Sosial Media
              </h3>
              
              {activeSocials.length > 0 ? (
                <div className="space-y-3">
                  {activeSocials.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 p-3 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors duration-200"
                    >
                      <span className="text-2xl">{social.icon}</span>
                      <span className="font-medium">{social.platform}</span>
                    </a>
                  ))}
                </div>
              ) : (
                <p className="text-gray-400">Tidak ada sosial media yang tersedia</p>
              )}
            </div>
          </div>

          {/* Messenger */}
          <div className="lg:col-span-1">
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4" style={{ color: 'var(--primary-color)' }}>
                Messenger
              </h3>
              
              {activeMessengers.length > 0 ? (
                <div className="space-y-3">
                  {activeMessengers.map((messenger, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-3 p-3 bg-gray-700 rounded-lg"
                    >
                      <span className="text-2xl">{messenger.icon}</span>
                      <div>
                        <div className="font-medium">{messenger.platform}</div>
                        <div className="text-sm text-gray-300">{messenger.contact}</div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-400">Tidak ada messenger yang tersedia</p>
              )}
            </div>
          </div>
        </div>

        {/* Menu Information */}
        {(businessData.menu.leftpane || businessData.menu.rightpane || businessData.menu.bottompane) && (
          <div className="mt-12 bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4 text-center" style={{ color: 'var(--primary-color)' }}>
              Menu Tersedia
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              {businessData.menu.leftpane && (
                <div className="p-4 bg-gray-700 rounded-lg">
                  <h4 className="font-semibold mb-2">Left Panel</h4>
                  <p className="text-gray-300 text-sm">Menu tersedia</p>
                </div>
              )}
              {businessData.menu.rightpane && (
                <div className="p-4 bg-gray-700 rounded-lg">
                  <h4 className="font-semibold mb-2">Right Panel</h4>
                  <p className="text-gray-300 text-sm">Menu tersedia</p>
                </div>
              )}
              {businessData.menu.bottompane && (
                <div className="p-4 bg-gray-700 rounded-lg">
                  <h4 className="font-semibold mb-2">Bottom Panel</h4>
                  <p className="text-gray-300 text-sm">Menu tersedia</p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
} 