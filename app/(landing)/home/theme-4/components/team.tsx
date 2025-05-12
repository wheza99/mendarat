"use client";

import { teamSectionCopy } from "../copy";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Team() {
  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMxMDIyMUIiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0aDR2MWgtNHYtMXptMC0yaDF2NGgtMXYtNHptMi0yaDF2MWgtMXYtMXptLTIgMmgtMXYtMWgxdjF6TTM0IDI5aDFWMjhoLTF2MXptMCAydi0xaC0xdjFoMXptLTIgMGgtMXYtMWgxdjF6bTAgMmgtMXYtMWgxdjF6bTIgMnYtMWgtMXYxaDF6bTAgMnYtMWgtMXYxaDF6bTIgMGgtMXYtMWgxdjF6bTAgMmgtMXYtMWgxdjF6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-50" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "4rem" }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="h-1 bg-emerald-500 mx-auto mb-6"
          />
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            {teamSectionCopy.heading}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-lg text-gray-600"
          >
            {teamSectionCopy.description}
          </motion.p>
        </div>

        {/* Team Members - Staggered Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {teamSectionCopy.teamMembers.map((member, index) => {
            // Create a staggered layout
            const colSpan = index % 2 === 0 ? "md:col-span-7" : "md:col-span-5";
            const startCol = index % 2 === 0 ? "" : "md:col-start-1";
            
            // For the 3rd and 4th items, reverse the pattern
            const adjustedColSpan = index >= 2 ? (index % 2 === 0 ? "md:col-span-5" : "md:col-span-7") : colSpan;
            const adjustedStartCol = index >= 2 ? (index % 2 === 0 ? "md:col-start-1" : "") : startCol;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`group ${adjustedColSpan} ${adjustedStartCol}`}
              >
                <div className="relative overflow-hidden">
                  {/* Geometric Frame */}
                  <div className="absolute -inset-4 border border-emerald-200 transform rotate-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Member Card */}
                  <div className="bg-white p-6 shadow-lg relative transform group-hover:-rotate-2 transition-transform duration-500">
                    <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
                      {/* Member Image */}
                      <div className="relative w-32 h-32 rounded-full overflow-hidden flex-shrink-0 border-4 border-emerald-100">
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      
                      {/* Member Info */}
                      <div className="flex-grow text-center md:text-left">
                        <h3 className="text-2xl font-bold text-gray-900 mb-1">{member.name}</h3>
                        <p className="text-emerald-600 font-medium mb-4">{member.role}</p>
                        <p className="text-gray-600 mb-6">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue.
                        </p>
                        
                        {/* Social Links */}
                        <div className="flex justify-center md:justify-start space-x-4">
                          {teamSectionCopy.socialLinks.map((social, idx) => (
                            <a
                              key={idx}
                              href="#"
                              className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-emerald-500 hover:text-white transition-colors duration-300"
                            >
                              {social === "linkedin" && (
                                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                </svg>
                              )}
                              {social === "twitter" && (
                                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                                </svg>
                              )}
                              {social === "instagram" && (
                                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                </svg>
                              )}
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <a 
            href="#" 
            className="group relative inline-flex items-center px-8 py-4 bg-emerald-900 text-white font-medium overflow-hidden"
          >
            <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-emerald-700 rounded-full group-hover:w-80 group-hover:h-80"></span>
            <span className="relative flex items-center">
              {teamSectionCopy.buttonText}
              <svg className="ml-3 w-5 h-5 transition-transform duration-300 group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
