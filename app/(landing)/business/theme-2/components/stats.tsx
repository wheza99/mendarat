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
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const businessStats = [
    {
      value: businessData.status === 'published' ? '100' : '0',
      suffix: '%',
      label: 'Business Status'
    },
    {
      value: businessData.language === 'en' ? 'EN' : businessData.language.toUpperCase(),
      suffix: '',
      label: 'Language Support'
    },
    {
      value: businessData.selected_template,
      suffix: '',
      label: 'Template Used'
    },
    {
      value: businessData.currency.replace(/[^A-Z]/g, ''),
      suffix: '',
      label: 'Currency'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative h-[500px] rounded-lg overflow-hidden"
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ 
                backgroundImage: `url(${businessData.metadata.background || businessData.img})` 
              }}
            />
            <div className="absolute inset-0 bg-black/30" />
            
            {/* Overlay Content */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  {businessData.img && (
                    <img 
                      src={businessData.img} 
                      alt={businessData.name}
                      className="h-24 w-auto mx-auto mb-4 object-contain"
                    />
                  )}
                  <h3 className="text-2xl font-bold">{businessData.name}</h3>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <div className="space-y-8">
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="space-y-6"
            >
              {/* Subtitle */}
              <motion.p variants={item} className="text-amber-500 font-medium tracking-widest uppercase">
                Business Information
              </motion.p>

              {/* Heading */}
              <motion.h2 variants={item} className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                <span className="block">Tentang</span>
                <span className="block">{businessData.name}</span>
              </motion.h2>

              {/* Description */}
              <motion.p variants={item} className="text-lg text-gray-600 max-w-2xl">
                {businessData.metadata.description}
              </motion.p>

              {/* Business ID */}
              <motion.div variants={item} className="p-4 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-500 mb-1">Business ID</p>
                <p className="font-mono text-sm text-gray-800">{businessData.id}</p>
              </motion.div>

              {/* Button */}
              <motion.div variants={item}>
                <a
                  href="#contact"
                  className="inline-block bg-gray-900 text-white px-6 py-3 text-sm font-medium tracking-wider hover:bg-gray-800 transition-colors duration-300"
                >
                  LIHAT DETAIL
                </a>
              </motion.div>

              {/* Stats */}
              <motion.div 
                variants={item}
                className="grid grid-cols-2 gap-6 pt-8 border-t border-gray-200"
              >
                {businessStats.map((stat, index) => (
                  <motion.div 
                    key={index} 
                    className="space-y-2"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <p className="text-3xl font-bold text-amber-500">
                      {stat.value}
                      <span className="text-amber-500">{stat.suffix}</span>
                    </p>
                    <p className="text-gray-600 text-sm">{stat.label}</p>
                  </motion.div>
                ))}
              </motion.div>

              {/* Template Info */}
              <motion.div variants={item} className="pt-6 border-t border-gray-100">
                <div className="flex items-center space-x-4">
                  <div className="flex space-x-2">
                    <div 
                      className="w-4 h-4 rounded-full border-2 border-gray-300" 
                      style={{ backgroundColor: businessData.primary_color }}
                    ></div>
                    <div 
                      className="w-4 h-4 rounded-full border-2 border-gray-300" 
                      style={{ backgroundColor: businessData.secondary_color }}
                    ></div>
                  </div>
                  <p className="text-sm text-gray-500">Brand Colors</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
} 