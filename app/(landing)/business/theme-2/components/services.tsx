"use client";

import { BusinessData } from "../../page";
import { motion } from "framer-motion";

interface ServicesProps {
  businessData: BusinessData;
}

export default function Services({ businessData }: ServicesProps) {
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
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  // Create services based on available data
  const services = [
    {
      title: "Layanan Utama",
      description: businessData.metadata.description,
      icon: "🏪",
      features: [
        `Template: ${businessData.selected_template}`,
        `Currency: ${businessData.currency}`,
        `Language: ${businessData.language === 'en' ? 'English' : businessData.language}`
      ]
    },
    {
      title: "Kebijakan Privasi",
      description: "Perlindungan data dan privasi pelanggan dengan standar keamanan tinggi",
      icon: "🔒",
      features: [
        "Data Protection",
        "Privacy Compliance", 
        "Secure Transactions"
      ],
      hasDetail: !!businessData.metadata.privacy
    },
    {
      title: "Syarat & Ketentuan",
      description: "Ketentuan layanan yang jelas dan transparan untuk semua pelanggan",
      icon: "📋",
      features: [
        "Clear Terms",
        "Transparent Policy",
        "Customer Rights"
      ],
      hasDetail: !!businessData.metadata.terms
    }
  ];

  // Add shipping service if available
  if (businessData.metadata.shipping) {
    services.push({
      title: "Layanan Pengiriman",
      description: "Layanan pengiriman yang tersedia untuk produk kami",
      icon: "🚚",
      features: [
        "Fast Delivery",
        "Secure Packaging",
        "Track & Trace"
      ],
      hasDetail: true
    });
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-amber-500 font-medium tracking-widest uppercase mb-4">
            Our Services
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Layanan Yang Kami Tawarkan
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Berbagai layanan berkualitas tinggi yang dirancang khusus untuk memenuhi kebutuhan bisnis Anda
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-lg p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-amber-200"
            >
              {/* Icon */}
              <div className="text-5xl mb-6 text-center">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-center mb-6 line-clamp-3">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 bg-amber-500 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Action Button */}
              <div className="text-center">
                {service.hasDetail ? (
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-amber-500 font-medium text-sm tracking-wider hover:text-amber-600 transition-colors duration-200 border-b border-amber-500 hover:border-amber-600"
                  >
                    LIHAT DETAIL
                  </motion.button>
                ) : (
                  <div className="w-12 h-0.5 bg-amber-500 mx-auto"></div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center bg-white rounded-lg p-12 shadow-sm border border-gray-100"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Butuh Layanan Khusus?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Kami siap membantu Anda dengan layanan yang disesuaikan dengan kebutuhan bisnis Anda. 
            Hubungi kami untuk konsultasi lebih lanjut.
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-amber-500 text-white px-8 py-3 text-sm font-medium tracking-wider hover:bg-amber-600 transition-colors duration-300"
          >
            HUBUNGI KAMI
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
} 