"use client";

import { BusinessData } from "../../page";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

interface ServicesProps {
  data: BusinessData;
}

export default function Services({ data }: ServicesProps) {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  // Generate services based on business metadata
  const services = [
    {
      id: 1,
      title: "Kebijakan Privasi",
      subtitle: "Privacy Protection",
      description: "Perlindungan data dan privasi pelanggan dengan standar internasional terbaru.",
      details: data.metadata?.privacy || "Kami berkomitmen melindungi privasi dan data pribadi Anda dengan teknologi enkripsi terdepan dan kebijakan keamanan yang ketat.",
      icon: "🔒",
      gradient: "from-purple-500 to-violet-600",
      available: !!data.metadata?.privacy
    },
    {
      id: 2,
      title: "Syarat & Ketentuan",
      subtitle: "Terms & Conditions",
      description: "Panduan lengkap layanan dan ketentuan penggunaan yang jelas dan transparan.",
      details: data.metadata?.terms || "Syarat dan ketentuan yang adil dan transparan untuk memastikan kenyamanan dan kepercayaan dalam setiap transaksi bisnis.",
      icon: "📋",
      gradient: "from-pink-500 to-rose-600",
      available: !!data.metadata?.terms
    },
    {
      id: 3,
      title: "Pengiriman & Logistik",
      subtitle: "Shipping & Delivery",
      description: "Sistem pengiriman yang efisien dan terpercaya untuk kepuasan pelanggan.",
      details: data.metadata?.shipping || "Layanan pengiriman cepat dan aman dengan tracking real-time dan jaminan kualitas produk hingga tujuan.",
      icon: "🚚",
      gradient: "from-violet-500 to-purple-600",
      available: !!data.metadata?.shipping
    },
    {
      id: 4,
      title: "Konsultasi Kreatif",
      subtitle: "Creative Consultation",
      description: "Konsultasi mendalam untuk solusi bisnis yang inovatif dan kreatif.",
      details: "Sesi konsultasi personal dengan tim ahli untuk mengembangkan strategi bisnis yang unik dan efektif sesuai kebutuhan Anda.",
      icon: "💡",
      gradient: "from-fuchsia-500 to-pink-600",
      available: true
    }
  ];

  return (
    <section id="services" className="relative py-20 bg-gradient-to-br from-gray-50 via-purple-50/30 to-pink-50/30 overflow-hidden">
      {/* Organic Background Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-br from-purple-200/20 to-pink-200/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 100, 0],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-0 w-80 h-80 bg-gradient-to-br from-violet-200/20 to-fuchsia-200/20 rounded-full blur-3xl"
          animate={{
            scale: [1.1, 1, 1.1],
            x: [0, -80, 0],
            rotate: [360, 270, 360],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full opacity-30"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, Math.random() * 100 - 50],
              x: [0, Math.random() * 50 - 25],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: Math.random() * 8 + 6,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 text-sm font-semibold tracking-wider mb-2">
            LAYANAN UNGGULAN
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Solusi <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Kreatif</span> Terbaik
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
          <p className="text-gray-600 text-lg mt-6 max-w-3xl mx-auto">
            Kami menyediakan berbagai layanan berkualitas tinggi dengan pendekatan artistik dan inovatif untuk memenuhi kebutuhan bisnis modern Anda.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div 
                className={`relative p-6 rounded-2xl bg-white shadow-lg border border-gray-100 cursor-pointer transition-all duration-300 ${
                  expandedCard === service.id ? 'shadow-2xl scale-[1.02]' : 'hover:shadow-xl hover:scale-[1.01]'
                } ${!service.available ? 'opacity-60' : ''}`}
                onClick={() => setExpandedCard(expandedCard === service.id ? null : service.id)}
              >
                {/* Gradient Background on Hover/Expanded */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} rounded-2xl opacity-0 transition-opacity duration-300 ${
                  expandedCard === service.id ? 'opacity-5' : 'group-hover:opacity-5'
                }`}></div>
                
                {/* Availability Indicator */}
                <div className="absolute top-4 right-4">
                  <div className={`w-3 h-3 rounded-full ${
                    service.available 
                      ? 'bg-green-400 shadow-lg shadow-green-400/50' 
                      : 'bg-gray-300'
                  }`}>
                    {service.available && (
                      <div className="w-3 h-3 bg-green-400 rounded-full animate-ping"></div>
                    )}
                  </div>
                </div>

                <div className="relative z-10">
                  {/* Service Header */}
                  <div className="flex items-start space-x-4 mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center text-white text-xl shadow-lg`}>
                      {service.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-1">
                        {service.title}
                      </h3>
                      <p className="text-sm text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 font-medium">
                        {service.subtitle}
                      </p>
                    </div>
                    <motion.div
                      animate={{ rotate: expandedCard === service.id ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-gray-400"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </motion.div>
                  </div>

                  {/* Service Description */}
                  <p className="text-gray-600 mb-4">
                    {service.description}
                  </p>

                  {/* Expandable Details */}
                  <AnimatePresence>
                    {expandedCard === service.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="pt-4 border-t border-gray-100">
                          <p className="text-gray-700 leading-relaxed mb-4">
                            {service.details}
                          </p>
                          
                          {service.available && (
                            <div className="flex items-center justify-between">
                              <span className="text-sm text-green-600 font-medium flex items-center">
                                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                Tersedia
                              </span>
                              <button className={`px-4 py-2 rounded-lg bg-gradient-to-r ${service.gradient} text-white font-medium hover:shadow-lg transition-all duration-300`}>
                                Pelajari Lebih
                              </button>
                            </div>
                          )}
                          
                          {!service.available && (
                            <div className="flex items-center justify-between">
                              <span className="text-sm text-gray-500 font-medium flex items-center">
                                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                                </svg>
                                Segera Hadir
                              </span>
                              <button className="px-4 py-2 rounded-lg bg-gray-200 text-gray-500 font-medium cursor-not-allowed">
                                Dalam Pengembangan
                              </button>
                            </div>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Decorative Corner Gradient */}
                <div className={`absolute bottom-3 right-3 w-8 h-8 bg-gradient-to-br ${service.gradient} rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-300`}></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="inline-block p-8 rounded-3xl bg-white shadow-xl border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Butuh Layanan <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Khusus</span>?
            </h3>
            <p className="text-gray-600 mb-6 max-w-md mx-auto">
              Kami siap membantu Anda dengan solusi yang disesuaikan dengan kebutuhan unik bisnis Anda.
            </p>
            <button className="px-8 py-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300">
              Konsultasi Gratis
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 