"use client";

import { BusinessData } from "../../page";
import { motion } from "framer-motion";

interface ContactProps {
  businessData: BusinessData;
}

export default function Contact({ businessData }: ContactProps) {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  // Filter active social media
  const activeSocials = Object.entries(businessData.socials)
    .filter(([_, value]) => value !== null)
    .map(([platform, url]) => ({
      platform: platform.charAt(0).toUpperCase() + platform.slice(1),
      url: url!,
      icon: getSocialIcon(platform)
    }));

  // Filter active messengers
  const activeMessengers = businessData.messenger 
    ? Object.entries(businessData.messenger)
        .filter(([_, value]) => value !== null)
        .map(([platform, contact]) => ({
          platform: platform.charAt(0).toUpperCase() + platform.slice(1),
          contact: contact!,
          icon: getMessengerIcon(platform)
        }))
    : [];

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
    <section id="contact" className="py-20 bg-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${businessData.metadata.background})` }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-amber-500 font-medium tracking-widest uppercase mb-4">
            Get In Touch
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Hubungi {businessData.name}
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Kami siap membantu Anda. Hubungi kami melalui berbagai platform yang tersedia untuk mendapatkan informasi lebih lanjut.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Business Information */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Business Card */}
            <motion.div variants={item} className="bg-gray-800 rounded-lg p-8">
              <div className="flex items-center space-x-4 mb-6">
                {businessData.img && (
                  <img 
                    src={businessData.img} 
                    alt={businessData.name}
                    className="h-16 w-auto object-contain"
                  />
                )}
                <div>
                  <h3 className="text-2xl font-bold text-amber-500">
                    {businessData.name}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    {businessData.selected_template} Template
                  </p>
                </div>
              </div>
              
              <p className="text-gray-300 mb-6">
                {businessData.metadata.description}
              </p>

              {/* Business Details */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-700 rounded-lg p-4">
                  <p className="text-amber-500 text-sm font-medium mb-1">Status</p>
                  <p className={`text-sm font-bold ${
                    businessData.status === 'published' ? 'text-green-400' : 'text-red-400'
                  }`}>
                    {businessData.status === 'published' ? 'AKTIF' : 'TIDAK AKTIF'}
                  </p>
                </div>
                <div className="bg-gray-700 rounded-lg p-4">
                  <p className="text-amber-500 text-sm font-medium mb-1">Currency</p>
                  <p className="text-white text-sm font-bold">{businessData.currency}</p>
                </div>
              </div>

              {/* Address */}
              {businessData.address && (
                <div className="mb-6">
                  <h4 className="text-amber-500 font-semibold mb-2 flex items-center">
                    <span className="mr-2">📍</span> Alamat
                  </h4>
                  <p className="text-gray-300">{businessData.address}</p>
                </div>
              )}

              {/* Business ID */}
              <div className="bg-gray-700 rounded-lg p-4">
                <p className="text-amber-500 text-sm font-medium mb-1">Business ID</p>
                <p className="font-mono text-xs text-gray-300 break-all">{businessData.id}</p>
              </div>
            </motion.div>

            {/* Social Media */}
            <motion.div variants={item} className="bg-gray-800 rounded-lg p-8">
              <h3 className="text-xl font-bold text-amber-500 mb-6">
                Sosial Media
              </h3>
              
              {activeSocials.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {activeSocials.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center space-x-3 p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-all duration-300"
                    >
                      <span className="text-2xl">{social.icon}</span>
                      <span className="font-medium">{social.platform}</span>
                    </motion.a>
                  ))}
                </div>
              ) : (
                <p className="text-gray-400 text-center py-8">
                  Tidak ada sosial media yang tersedia
                </p>
              )}
            </motion.div>
          </motion.div>

          {/* Right Column - Contact Form & Messenger */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Contact Form */}
            <motion.div variants={item} className="bg-gray-800 rounded-lg p-8">
              <h3 className="text-xl font-bold text-amber-500 mb-6">
                Kirim Pesan
              </h3>
              
              <form className="space-y-6">
                <div>
                  <input
                    type="text"
                    placeholder="Nama Lengkap"
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-amber-500 focus:outline-none transition-colors duration-300"
                  />
                </div>
                
                <div>
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-amber-500 focus:outline-none transition-colors duration-300"
                  />
                </div>
                
                <div>
                  <input
                    type="text"
                    placeholder="Subject"
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-amber-500 focus:outline-none transition-colors duration-300"
                  />
                </div>
                
                <div>
                  <textarea
                    rows={5}
                    placeholder="Pesan Anda"
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-amber-500 focus:outline-none resize-none transition-colors duration-300"
                  ></textarea>
                </div>
                
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-amber-500 text-white py-3 px-6 rounded-lg font-medium tracking-wider hover:bg-amber-600 transition-colors duration-300"
                >
                  KIRIM PESAN
                </motion.button>
              </form>
            </motion.div>

            {/* Messenger */}
            <motion.div variants={item} className="bg-gray-800 rounded-lg p-8">
              <h3 className="text-xl font-bold text-amber-500 mb-6">
                Messenger
              </h3>
              
              {activeMessengers.length > 0 ? (
                <div className="space-y-4">
                  {activeMessengers.map((messenger, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.02 }}
                      className="flex items-center space-x-4 p-4 bg-gray-700 rounded-lg"
                    >
                      <span className="text-2xl">{messenger.icon}</span>
                      <div>
                        <div className="font-medium text-white">{messenger.platform}</div>
                        <div className="text-sm text-gray-300">{messenger.contact}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-400 text-center py-8">
                  Tidak ada messenger yang tersedia
                </p>
              )}
            </motion.div>
          </motion.div>
        </div>

        {/* Menu Information */}
        {(businessData.menu.leftpane || businessData.menu.rightpane || businessData.menu.bottompane) && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-16 bg-gray-800 rounded-lg p-8"
          >
            <h3 className="text-2xl font-bold text-amber-500 mb-8 text-center">
              Menu Tersedia
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {businessData.menu.leftpane && (
                <div className="bg-gray-700 rounded-lg p-6 text-center">
                  <h4 className="font-semibold text-white mb-2">Left Panel</h4>
                  <p className="text-gray-300 text-sm">Menu tersedia</p>
                </div>
              )}
              {businessData.menu.rightpane && (
                <div className="bg-gray-700 rounded-lg p-6 text-center">
                  <h4 className="font-semibold text-white mb-2">Right Panel</h4>
                  <p className="text-gray-300 text-sm">Menu tersedia</p>
                </div>
              )}
              {businessData.menu.bottompane && (
                <div className="bg-gray-700 rounded-lg p-6 text-center">
                  <h4 className="font-semibold text-white mb-2">Bottom Panel</h4>
                  <p className="text-gray-300 text-sm">Menu tersedia</p>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
} 