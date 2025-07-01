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
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  // Create services based on business metadata
  const services = [
    {
      icon: "🔒",
      title: "Privacy Protection",
      description: "Comprehensive privacy policy implementation untuk melindungi data pelanggan dengan standar keamanan tinggi.",
      features: ["Data Encryption", "GDPR Compliance", "Secure Storage", "Access Control"],
      available: businessData.metadata.privacy
    },
    {
      icon: "📋",
      title: "Terms & Conditions",
      description: "Framework legal yang jelas dan transparan untuk operasional business yang aman dan terpercaya.",
      features: ["Legal Framework", "Clear Terms", "User Rights", "Dispute Resolution"],
      available: businessData.metadata.terms
    },
    {
      icon: "🚚",
      title: "Shipping & Delivery",
      description: "Solusi pengiriman dan delivery yang komprehensif untuk kepuasan pelanggan maksimal.",
      features: ["Fast Delivery", "Real-time Tracking", "Multiple Options", "Insurance Coverage"],
      available: businessData.metadata.shipping
    },
    {
      icon: "💼",
      title: "Business Management",
      description: "Sistem manajemen business yang terintegrasi untuk operasional yang efisien dan profesional.",
      features: ["Dashboard Analytics", "Inventory Management", "Customer Support", "Reporting Tools"],
      available: true
    }
  ];

  const availableServices = services.filter(service => service.available);

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
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-6"></div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Layanan & Fitur
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Berbagai layanan dan fitur yang tersedia untuk mendukung operasional {businessData.name}
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {availableServices.map((service, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-200"
            >
              {/* Icon */}
              <div className="text-4xl mb-6">{service.icon}</div>
              
              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>
              
              {/* Description */}
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              {/* Features List */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              {/* CTA Button */}
              <button className="w-full py-2 px-4 bg-gray-900 text-white text-sm font-medium hover:bg-gray-800 transition-colors duration-300">
                Pelajari Lebih Lanjut
              </button>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-white p-12 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Butuh Layanan Khusus?
            </h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Kami siap membantu Anda dengan solusi yang disesuaikan dengan kebutuhan spesifik business Anda
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="inline-flex items-center px-8 py-3 bg-blue-500 text-white font-medium hover:bg-blue-600 transition-colors duration-300"
              >
                Konsultasi Gratis
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-3.582 8-8 8a8.955 8.955 0 01-2.697-.413l-2.543.84c-.6.197-1.25-.09-1.462-.723a1.523 1.523 0 01-.06-.403l.21-2.109A8 8 0 113 12z" />
                </svg>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center px-8 py-3 border border-gray-300 text-gray-700 font-medium hover:bg-gray-50 transition-colors duration-300"
              >
                Lihat Portfolio
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 