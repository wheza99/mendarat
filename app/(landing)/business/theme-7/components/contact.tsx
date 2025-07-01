"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { BusinessData } from "../../page";
import Image from "next/image";

interface ContactProps {
  data: BusinessData;
}

// Data stream background effect
const DataStream = () => {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-10">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-cyan-400 font-mono text-xs"
          initial={{
            x: Math.random() * 100 + "%",
            y: "-10%",
            opacity: 0,
          }}
          animate={{
            y: "110%",
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * 10 + 5,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "linear",
          }}
          style={{
            left: Math.random() * 100 + "%",
          }}
        >
          {Math.random().toString(2).substring(2, 10)}
        </motion.div>
      ))}
    </div>
  );
};

export default function Contact({ data }: ContactProps) {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact form submitted:", formData);
    // Handle form submission logic here
  };

  return (
    <section id="contact" className="relative py-24 bg-gray-950 overflow-hidden">
      {/* Data stream background */}
      <DataStream />
      
      {/* Animated background elements */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-600/10 rounded-full filter blur-[100px]"
        animate={{
          opacity: [0.1, 0.3, 0.1],
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{ duration: 20, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full filter blur-[100px]"
        animate={{
          opacity: [0.1, 0.3, 0.1],
          scale: [1, 1.2, 1],
          rotate: [360, 180, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, delay: 10 }}
      />

      <div className="container mx-auto px-4" ref={containerRef}>
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-4"
          >
            <span className="text-cyan-400 font-mono tracking-widest text-sm">
              ESTABLISH CONNECTION
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold mb-6 tracking-tight"
          >
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
              DIGITAL
            </span>
            <span className="block text-white mt-1">
              INTERFACE
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-300 max-w-2xl mx-auto text-lg"
          >
            Initialize secure communication channel and establish direct connection with our digital horizon network.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            {/* Form Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-2xl blur-xl opacity-70" />
            
            <div className="relative bg-gray-900/80 backdrop-blur-sm border border-cyan-500/30 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
                TRANSMISSION FORM
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div>
                  <label className="block text-cyan-400 font-mono text-sm mb-2">
                    IDENTITY.NAME
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-900/50 border border-cyan-500/30 rounded-lg text-white placeholder-gray-500 focus:border-cyan-400 focus:outline-none focus:shadow-[0_0_10px_rgba(6,182,212,0.3)] transition-all duration-300 font-mono"
                    placeholder="Enter your designation"
                    required
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label className="block text-cyan-400 font-mono text-sm mb-2">
                    NETWORK.ADDRESS
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-900/50 border border-cyan-500/30 rounded-lg text-white placeholder-gray-500 focus:border-cyan-400 focus:outline-none focus:shadow-[0_0_10px_rgba(6,182,212,0.3)] transition-all duration-300 font-mono"
                    placeholder="user@domain.net"
                    required
                  />
                </div>

                {/* Subject Field */}
                <div>
                  <label className="block text-cyan-400 font-mono text-sm mb-2">
                    MESSAGE.HEADER
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-900/50 border border-cyan-500/30 rounded-lg text-white placeholder-gray-500 focus:border-cyan-400 focus:outline-none focus:shadow-[0_0_10px_rgba(6,182,212,0.3)] transition-all duration-300 font-mono"
                    placeholder="Transmission subject"
                    required
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label className="block text-cyan-400 font-mono text-sm mb-2">
                    DATA.PAYLOAD
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    className="w-full px-4 py-3 bg-gray-900/50 border border-cyan-500/30 rounded-lg text-white placeholder-gray-500 focus:border-cyan-400 focus:outline-none focus:shadow-[0_0_10px_rgba(6,182,212,0.3)] transition-all duration-300 font-mono resize-none"
                    placeholder="Enter your message data..."
                    required
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0 0 20px rgba(6, 182, 212, 0.4)",
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold font-mono rounded-lg relative overflow-hidden group"
                >
                  <span className="relative z-10">TRANSMIT MESSAGE</span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500"
                    initial={{ scale: 0, opacity: 0 }}
                    whileHover={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.4 }}
                    style={{ transformOrigin: "center" }}
                  />
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Business Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Business Card */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-cyan-500/10 rounded-2xl blur-xl opacity-70" />
              
              <div className="relative bg-gray-900/80 backdrop-blur-sm border border-cyan-500/30 p-8 rounded-2xl">
                <div className="flex items-center gap-4 mb-6">
                  {data.logo && (
                    <div className="relative">
                      <div className="absolute inset-0 bg-cyan-400/20 rounded-xl blur-md" />
                      <Image
                        src={data.logo}
                        alt={data.name}
                        width={60}
                        height={60}
                        className="relative rounded-xl border border-cyan-500/30"
                      />
                    </div>
                  )}
                  <div>
                    <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
                      {data.name}
                    </h3>
                    <p className="text-cyan-400 font-mono text-sm">{data.category}</p>
                  </div>
                </div>

                <div className="space-y-4">
                  {/* Email */}
                  {data.email && (
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                        <svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 7.89a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-cyan-400 font-mono text-xs">EMAIL.PROTOCOL</div>
                        <div className="text-gray-300 text-sm">{data.email}</div>
                      </div>
                    </div>
                  )}

                  {/* Location */}
                  {data.location && (
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                        <svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-cyan-400 font-mono text-xs">LOCATION.COORDS</div>
                        <div className="text-gray-300 text-sm">{data.location}</div>
                      </div>
                    </div>
                  )}

                  {/* Address */}
                  {data.address && (
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                        <svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-cyan-400 font-mono text-xs">PHYSICAL.ADDRESS</div>
                        <div className="text-gray-300 text-sm">{data.address}</div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-2xl blur-xl opacity-70" />
              
              <div className="relative bg-gray-900/80 backdrop-blur-sm border border-cyan-500/30 p-8 rounded-2xl">
                <h4 className="text-lg font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
                  SOCIAL.NETWORKS
                </h4>
                
                <div className="grid grid-cols-2 gap-4">
                  {/* WhatsApp */}
                  {data.messenger?.whatsapp && (
                    <motion.a
                      href={data.messenger.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-3 p-3 bg-gray-900/50 border border-cyan-500/20 rounded-lg hover:border-green-400/50 hover:shadow-[0_0_10px_rgba(34,197,94,0.3)] transition-all duration-300"
                    >
                      <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center">
                        <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                        </svg>
                      </div>
                      <div>
                        <div className="text-green-400 font-mono text-xs">WHATSAPP</div>
                        <div className="text-gray-300 text-xs">Instant Message</div>
                      </div>
                    </motion.a>
                  )}

                  {/* Instagram */}
                  {data.socials?.instagram && (
                    <motion.a
                      href={data.socials.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-3 p-3 bg-gray-900/50 border border-cyan-500/20 rounded-lg hover:border-pink-400/50 hover:shadow-[0_0_10px_rgba(236,72,153,0.3)] transition-all duration-300"
                    >
                      <div className="w-8 h-8 bg-pink-500/20 rounded-lg flex items-center justify-center">
                        <svg className="w-4 h-4 text-pink-400" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                        </svg>
                      </div>
                      <div>
                        <div className="text-pink-400 font-mono text-xs">INSTAGRAM</div>
                        <div className="text-gray-300 text-xs">Visual Updates</div>
                      </div>
                    </motion.a>
                  )}

                  {/* Facebook */}
                  {data.socials?.facebook && (
                    <motion.a
                      href={data.socials.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-3 p-3 bg-gray-900/50 border border-cyan-500/20 rounded-lg hover:border-blue-400/50 hover:shadow-[0_0_10px_rgba(59,130,246,0.3)] transition-all duration-300"
                    >
                      <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center">
                        <svg className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                        </svg>
                      </div>
                      <div>
                        <div className="text-blue-400 font-mono text-xs">FACEBOOK</div>
                        <div className="text-gray-300 text-xs">Social Network</div>
                      </div>
                    </motion.a>
                  )}

                  {/* Twitter */}
                  {data.socials?.twitter && (
                    <motion.a
                      href={data.socials.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-3 p-3 bg-gray-900/50 border border-cyan-500/20 rounded-lg hover:border-cyan-400/50 hover:shadow-[0_0_10px_rgba(6,182,212,0.3)] transition-all duration-300"
                    >
                      <div className="w-8 h-8 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                        <svg className="w-4 h-4 text-cyan-400" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                        </svg>
                      </div>
                      <div>
                        <div className="text-cyan-400 font-mono text-xs">TWITTER</div>
                        <div className="text-gray-300 text-xs">Live Updates</div>
                      </div>
                    </motion.a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 