"use client";

import { BusinessData } from "../../page";
import { motion } from "framer-motion";

interface StatsProps {
  businessData: BusinessData;
}

export default function Stats({ businessData }: StatsProps) {
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

  const businessStats = [
    {
      number: businessData.status === 'published' ? '100' : '0',
      suffix: '%',
      label: 'Business Active',
      description: 'Status operasional business'
    },
    {
      number: businessData.language === 'en' ? 'EN' : businessData.language.toUpperCase(),
      suffix: '',
      label: 'Language Support',
      description: 'Bahasa yang didukung'
    },
    {
      number: businessData.selected_template,
      suffix: '',
      label: 'Template Used',
      description: 'Template yang digunakan'
    },
    {
      number: businessData.currency.replace(/[^A-Z]/g, ''),
      suffix: '',
      label: 'Currency',
      description: 'Mata uang yang digunakan'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Decorative Line */}
            <motion.div variants={item} className="w-20 h-1 bg-blue-500"></motion.div>
            
            {/* Section Title */}
            <motion.div variants={item}>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                Informasi Business
                <span className="block text-blue-500">{businessData.name}</span>
              </h2>
            </motion.div>

            {/* Description */}
            <motion.p variants={item} className="text-lg text-gray-600 leading-relaxed">
              {businessData.metadata.description}
            </motion.p>

            {/* Business ID Card */}
            <motion.div variants={item} className="bg-gray-50 p-6 rounded-lg border-l-4 border-blue-500">
              <h3 className="text-sm font-medium text-gray-500 mb-2">Business ID</h3>
              <p className="font-mono text-lg text-gray-900">{businessData.id}</p>
            </motion.div>

            {/* CTA Button */}
            <motion.div variants={item}>
              <a
                href="#contact"
                className="inline-flex items-center px-6 py-3 bg-gray-900 text-white font-medium hover:bg-gray-800 transition-colors duration-300"
              >
                Hubungi Sekarang
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column - Stats Grid */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-8"
          >
            {businessStats.map((stat, index) => (
              <motion.div
                key={index}
                variants={item}
                whileHover={{ scale: 1.05 }}
                className="text-center p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="text-3xl md:text-4xl font-bold text-blue-500 mb-2">
                  {stat.number}
                  <span className="text-blue-400">{stat.suffix}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  {stat.label}
                </h3>
                <p className="text-sm text-gray-600">
                  {stat.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Brand Colors Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 pt-16 border-t border-gray-200"
        >
          <div className="text-center mb-8">
            <div className="w-20 h-1 bg-blue-500 mx-auto mb-4"></div>
            <h3 className="text-2xl font-bold text-gray-900">Brand Colors</h3>
            <p className="text-gray-600 mt-2">Warna identitas brand {businessData.name}</p>
          </div>
          
          <div className="flex justify-center items-center space-x-8">
            <div className="text-center">
              <div 
                className="w-16 h-16 rounded-full border-4 border-gray-200 mx-auto mb-3" 
                style={{ backgroundColor: businessData.primary_color }}
              ></div>
              <p className="text-sm font-medium text-gray-700">Primary</p>
              <p className="text-xs text-gray-500 font-mono">{businessData.primary_color}</p>
            </div>
            <div className="text-center">
              <div 
                className="w-16 h-16 rounded-full border-4 border-gray-200 mx-auto mb-3" 
                style={{ backgroundColor: businessData.secondary_color }}
              ></div>
              <p className="text-sm font-medium text-gray-700">Secondary</p>
              <p className="text-xs text-gray-500 font-mono">{businessData.secondary_color}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 