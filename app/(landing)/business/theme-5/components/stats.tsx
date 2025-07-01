"use client";

import { BusinessData } from "../../page";
import { motion } from "framer-motion";
import Image from "next/image";

interface StatsProps {
  data: BusinessData;
}

export default function Stats({ data }: StatsProps) {
  const businessStats = [
    {
      number: data.businessId.slice(-3),
      label: "Business ID",
      suffix: "",
      description: "Nomor identifikasi unik"
    },
    {
      number: data.status === 'active' ? "100" : "0",
      label: "Status Aktif",
      suffix: "%",
      description: "Tingkat keaktifan bisnis"
    },
    {
      number: data.metadata?.services?.length || "5",
      label: "Layanan",
      suffix: "+",
      description: "Jenis layanan tersedia"
    },
    {
      number: new Date().getFullYear() - 2020,
      label: "Tahun Pengalaman",
      suffix: "+",
      description: "Pengalaman di industri"
    }
  ];

  return (
    <section className="relative py-20 bg-gradient-to-br from-purple-50 via-white to-pink-50 overflow-hidden">
      {/* Organic Background Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-purple-200/40 to-pink-200/40 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-br from-violet-200/40 to-fuchsia-200/40 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -40, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Curved Wave Pattern */}
      <div className="absolute top-0 left-0 right-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="w-full h-auto text-gradient-to-r from-purple-600 to-pink-600"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#8B5CF6" />
              <stop offset="100%" stopColor="#EC4899" />
            </linearGradient>
          </defs>
          <path
            fill="url(#waveGradient)"
            fillOpacity="0.1"
            d="M0,96L80,112C160,128,320,160,480,160C640,160,800,128,960,112C1120,96,1280,96,1360,96L1440,96L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
          />
        </svg>
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
            STATISTIK BISNIS
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Pencapaian & <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Prestasi</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          {/* Left Column - Business Identity Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="relative p-8 rounded-3xl bg-white shadow-2xl border border-purple-100">
              {/* Floating Gradient Orb */}
              <motion.div
                className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full shadow-lg"
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />

              <div className="space-y-6">
                {/* Business Logo & Name */}
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 p-1 shadow-lg">
                    <div className="w-full h-full rounded-xl bg-white flex items-center justify-center">
                      {data.logo ? (
                        <Image
                          src={data.logo}
                          alt={data.name}
                          width={48}
                          height={48}
                          className="w-12 h-12 object-cover rounded-lg"
                        />
                      ) : (
                        <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                          <span className="text-white font-bold text-xl">
                            {data.name.charAt(0)}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{data.name}</h3>
                    <p className="text-purple-600 font-medium">Creative Studio</p>
                  </div>
                </div>

                {/* Business Info Grid */}
                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-100">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600 font-medium">Business ID</span>
                      <span className="text-purple-700 font-mono font-bold">{data.businessId}</span>
                    </div>
                  </div>
                  
                  <div className="p-4 rounded-xl bg-gradient-to-r from-pink-50 to-purple-50 border border-pink-100">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600 font-medium">Status</span>
                      <span className={`px-3 py-1 rounded-full text-sm font-bold ${
                        data.status === 'active' 
                          ? 'bg-green-100 text-green-700 border border-green-200' 
                          : 'bg-red-100 text-red-700 border border-red-200'
                      }`}>
                        {data.status === 'active' ? 'AKTIF' : 'TIDAK AKTIF'}
                      </span>
                    </div>
                  </div>

                  {data.metadata?.currency && (
                    <div className="p-4 rounded-xl bg-gradient-to-r from-violet-50 to-fuchsia-50 border border-violet-100">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600 font-medium">Mata Uang</span>
                        <span className="text-violet-700 font-bold">{data.metadata.currency}</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Brand Colors */}
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-gray-700 uppercase tracking-wider">Brand Colors</h4>
                  <div className="flex space-x-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 shadow-md"></div>
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-pink-500 to-pink-600 shadow-md"></div>
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-violet-500 to-violet-600 shadow-md"></div>
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-fuchsia-500 to-fuchsia-600 shadow-md"></div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Stats Grid */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-2 gap-6">
              {businessStats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  viewport={{ once: true }}
                  className="relative group"
                >
                  <div className="relative p-6 rounded-2xl bg-white shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 group-hover:scale-105">
                    {/* Gradient Background on Hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    <div className="relative z-10">
                      {/* Floating Number */}
                      <motion.div
                        className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-2"
                        initial={{ scale: 0.5 }}
                        whileInView={{ scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 * index }}
                        viewport={{ once: true }}
                      >
                        {stat.number}{stat.suffix}
                      </motion.div>
                      
                      <h3 className="text-lg font-bold text-gray-900 mb-1">
                        {stat.label}
                      </h3>
                      
                      <p className="text-sm text-gray-600">
                        {stat.description}
                      </p>
                    </div>

                    {/* Decorative Corner Element */}
                    <div className="absolute top-3 right-3 w-3 h-3 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Achievement Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center space-x-3 px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="font-semibold">Bisnis Terverifikasi & Terpercaya</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 