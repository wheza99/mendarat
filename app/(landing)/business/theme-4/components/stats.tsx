"use client";

import React from "react";
import { motion } from "framer-motion";
import { BusinessData } from "../../page";

interface StatsProps {
  businessData: BusinessData;
}

export default function Stats({ businessData }: StatsProps) {
  return (
    <section className="relative py-20 bg-emerald-50 overflow-hidden">
      {/* Skewed Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-100 to-emerald-50 transform -skew-y-2 origin-top-left scale-110"></div>
      </div>

      {/* Circular Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 2 }}
          className="absolute top-10 right-20 w-40 h-40 bg-emerald-300 rounded-full"
        />
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 0.15, x: 0 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="absolute bottom-10 left-10 w-24 h-24 border-4 border-emerald-400 rounded-full"
        />
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <div className="grid lg:grid-cols-3 gap-8 items-center">
          {/* Business ID Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-1"
          >
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-emerald-200">
              <div className="flex items-center mb-6">
                {businessData.img && (
                  <img
                    src={businessData.img}
                    alt={businessData.name}
                    className="w-16 h-16 rounded-xl object-cover mr-4"
                  />
                )}
                <div>
                  <h3 className="text-xl font-bold text-gray-800">{businessData.name}</h3>
                  <p className="text-emerald-600 font-semibold">ID: {businessData.id}</p>
                </div>
              </div>
              
              {/* Brand Colors Showcase */}
              <div className="mb-6">
                <p className="text-sm font-semibold text-gray-600 mb-3">Brand Colors</p>
                <div className="flex gap-3">
                  <div 
                    className="w-8 h-8 rounded-full border-2 border-gray-200"
                    style={{ backgroundColor: businessData.primary_color }}
                  />
                  <div 
                    className="w-8 h-8 rounded-full border-2 border-gray-200"
                    style={{ backgroundColor: businessData.secondary_color }}
                  />
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Status</span>
                  <span className="font-semibold text-emerald-600">{businessData.status}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Format</span>
                  <span className="font-semibold">{businessData.format}</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Business Info Grid */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="grid md:grid-cols-2 gap-6">
              {/* Currency Info */}
              <div className="bg-white rounded-xl p-6 shadow-lg border border-emerald-100">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-lg font-bold text-gray-800">Currency</h4>
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl">💰</span>
                  </div>
                </div>
                <p className="text-2xl font-bold text-emerald-600">{businessData.currency}</p>
                <p className="text-sm text-gray-500 mt-1">Primary Currency</p>
              </div>

              {/* Language Info */}
              <div className="bg-white rounded-xl p-6 shadow-lg border border-emerald-100">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-lg font-bold text-gray-800">Language</h4>
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🌐</span>
                  </div>
                </div>
                <p className="text-2xl font-bold text-emerald-600">{businessData.language}</p>
                <p className="text-sm text-gray-500 mt-1">Primary Language</p>
              </div>

              {/* Template Info */}
              <div className="bg-white rounded-xl p-6 shadow-lg border border-emerald-100">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-lg font-bold text-gray-800">Template</h4>
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🎨</span>
                  </div>
                </div>
                <p className="text-2xl font-bold text-emerald-600">{businessData.selected_template}</p>
                <p className="text-sm text-gray-500 mt-1">Active Template</p>
              </div>

              {/* Address Info */}
              <div className="bg-white rounded-xl p-6 shadow-lg border border-emerald-100">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-lg font-bold text-gray-800">Location</h4>
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl">📍</span>
                  </div>
                </div>
                <p className="text-lg font-bold text-emerald-600">
                  {businessData.address || "Not specified"}
                </p>
                <p className="text-sm text-gray-500 mt-1">Business Address</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Floating Business Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute top-1/2 right-10 transform -translate-y-1/2 hidden xl:block"
        >
          {businessData.img && (
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="w-32 h-32 rounded-full bg-white shadow-2xl p-4 border-4 border-emerald-200"
            >
              <img
                src={businessData.img}
                alt={businessData.name}
                className="w-full h-full object-cover rounded-full"
              />
            </motion.div>
          )}
        </motion.div>

        {/* Achievement Badge */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center px-6 py-3 bg-emerald-600 text-white rounded-full font-bold shadow-lg">
            <span className="mr-2">🏆</span>
            Verified Business Profile
          </div>
        </motion.div>
      </div>
    </section>
  );
} 