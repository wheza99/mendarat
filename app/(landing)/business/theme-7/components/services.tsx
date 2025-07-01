"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { BusinessData } from "../../page";

interface ServicesProps {
  data: BusinessData;
}

// Service card component
const ServiceCard = ({ service, index }: { service: any; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative group"
    >
      {/* Glowing background */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative bg-gray-900/80 backdrop-blur-sm border border-cyan-500/30 p-8 rounded-xl group-hover:border-cyan-400/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(6,182,212,0.2)]">
        {/* Service Icon */}
        <div className="mb-6">
          <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-lg flex items-center justify-center border border-cyan-500/30">
            <svg
              className="w-8 h-8 text-cyan-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={service.iconPath}
              />
            </svg>
          </div>
        </div>

        {/* Service Title */}
        <h3 className="text-xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
          {service.title}
        </h3>

        {/* Service Description */}
        <p className="text-gray-300 mb-6 text-sm leading-relaxed">
          {service.description}
        </p>

        {/* Service Features */}
        <div className="space-y-2 mb-6">
          {service.features?.map((feature: string, idx: number) => (
            <div key={idx} className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full" />
              <span className="text-gray-400 text-xs font-mono">{feature}</span>
            </div>
          ))}
        </div>

        {/* Learn More Button */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full px-4 py-2 bg-transparent border border-cyan-500/50 text-cyan-400 font-mono text-sm rounded-md relative overflow-hidden group"
        >
          <span className="relative z-10">EXPLORE SERVICE</span>
          <motion.span
            className="absolute inset-0 bg-cyan-500/10"
            initial={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            style={{ transformOrigin: "center" }}
          />
        </motion.button>
      </div>
    </motion.div>
  );
};

// Circuit pattern background
const CircuitPattern = () => {
  return (
    <div className="absolute inset-0 opacity-5">
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern
            id="circuit"
            width="100"
            height="100"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M0 50h20v-20h20v40h20v-20h20v20h20v-40"
              fill="none"
              stroke="#06b6d4"
              strokeWidth="1"
            />
            <circle cx="20" cy="30" r="2" fill="#06b6d4" />
            <circle cx="60" cy="50" r="2" fill="#06b6d4" />
            <circle cx="80" cy="30" r="2" fill="#06b6d4" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#circuit)" />
      </svg>
    </div>
  );
};

export default function Services({ data }: ServicesProps) {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  // Default tech services if no business services provided
  const defaultServices = [
    {
      title: "Immersive Interfaces",
      description: "Creating next-generation user interfaces that blend physical and digital realms through augmented reality and spatial computing.",
      iconPath: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
      features: ["AR/VR Integration", "Spatial Computing", "Gesture Control", "Real-time Rendering"]
    },
    {
      title: "Neural Design Systems",
      description: "Implementing AI-driven design frameworks that adapt and evolve based on user behavior and environmental factors.",
      iconPath: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
      features: ["Machine Learning", "Adaptive UI", "Behavioral Analysis", "Predictive Design"]
    },
    {
      title: "Quantum Visualization",
      description: "Transforming complex data into intuitive, interactive visual experiences that reveal patterns and insights beyond traditional analytics.",
      iconPath: "M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
      features: ["Data Visualization", "Interactive Analytics", "Pattern Recognition", "3D Modeling"]
    },
    {
      title: "Digital Twins",
      description: "Creating virtual replicas of physical environments and systems that enable real-time monitoring, simulation, and optimization.",
      iconPath: "M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4",
      features: ["IoT Integration", "Real-time Sync", "Predictive Maintenance", "System Optimization"]
    }
  ];

  // Use business services or default tech services
  const businessServices = data.metadata?.services || [];
  const services = businessServices.length > 0 
    ? businessServices.map((service, index) => ({
        title: service,
        description: `Advanced ${service.toLowerCase()} solutions tailored for modern digital transformation and business optimization.`,
        iconPath: defaultServices[index % defaultServices.length].iconPath,
        features: defaultServices[index % defaultServices.length].features
      }))
    : defaultServices;

  return (
    <section id="services" className="relative py-24 bg-gray-950 overflow-hidden">
      {/* Circuit pattern background */}
      <CircuitPattern />
      
      {/* Animated background elements */}
      <motion.div
        className="absolute top-1/4 left-0 w-96 h-96 bg-blue-600/10 rounded-full filter blur-[100px]"
        animate={{
          opacity: [0.1, 0.2, 0.1],
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
        }}
        transition={{ duration: 12, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-600/10 rounded-full filter blur-[100px]"
        animate={{
          opacity: [0.1, 0.2, 0.1],
          scale: [1, 1.2, 1],
          x: [0, -50, 0],
        }}
        transition={{ duration: 12, repeat: Infinity, delay: 6 }}
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
              DIGITAL SERVICES
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold mb-6 tracking-tight"
          >
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
              FUTURE
            </span>
            <span className="block text-white mt-1">
              SOLUTIONS
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-300 max-w-2xl mx-auto text-lg"
          >
            We offer a comprehensive suite of cutting-edge digital services that transform concepts into immersive, futuristic experiences.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>

        {/* Business Metadata Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Privacy Policy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gray-900/50 backdrop-blur-sm border border-cyan-500/20 p-6 rounded-lg"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                <svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-cyan-400 font-mono text-sm">PRIVACY PROTOCOL</h3>
            </div>
            <p className="text-gray-400 text-xs">
              {data.metadata?.privacy || "Advanced encryption and privacy protection protocols ensure your data security."}
            </p>
          </motion.div>

          {/* Terms of Service */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-gray-900/50 backdrop-blur-sm border border-cyan-500/20 p-6 rounded-lg"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                <svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-cyan-400 font-mono text-sm">SERVICE TERMS</h3>
            </div>
            <p className="text-gray-400 text-xs">
              {data.metadata?.terms || "Comprehensive service agreements designed for optimal client-provider relationships."}
            </p>
          </motion.div>

          {/* Shipping/Delivery */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-gray-900/50 backdrop-blur-sm border border-cyan-500/20 p-6 rounded-lg"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                <svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="text-cyan-400 font-mono text-sm">DEPLOYMENT</h3>
            </div>
            <p className="text-gray-400 text-xs">
              {data.metadata?.shipping || "Global deployment capabilities with real-time monitoring and support systems."}
            </p>
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 20px rgba(6, 182, 212, 0.4)",
            }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold font-mono rounded-lg relative overflow-hidden group"
          >
            <span className="relative z-10">ALL SERVICES</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500"
              initial={{ scale: 0, opacity: 0 }}
              whileHover={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4 }}
              style={{ transformOrigin: "center" }}
            />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
} 