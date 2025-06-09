"use client";

import { motion } from "framer-motion";
import { projectsSectionCopy } from "../copy";

export default function Projects() {
  return (
    <section className="py-20 bg-gradient-to-b from-[#001a2e] to-[#003366] text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#40E0D0] to-[#87CEEB]">
            {projectsSectionCopy.title}
          </h2>
          <p className="text-xl text-[#48D1CC]">{projectsSectionCopy.subtitle}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsSectionCopy.projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <motion.div
                whileHover={{ y: -10 }}
                className="bg-gradient-to-br from-[#40E0D0]/10 to-[#48D1CC]/10 backdrop-blur-sm border border-[#40E0D0]/20 rounded-3xl overflow-hidden hover:border-[#40E0D0]/40 transition-all duration-300"
              >
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <span className="text-[#40E0D0] text-sm font-medium">{project.category}</span>
                  <h3 className="text-xl font-bold text-white mt-2 mb-3">{project.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{project.description}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}