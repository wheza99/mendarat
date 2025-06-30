"use client";

import { useEffect, useState } from "react";
import { statsSectionCopy } from "../copy";

export default function Stats() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="py-20 bg-black relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            <span className="bg-gradient-to-r from-pink-500 via-cyan-400 to-purple-500 bg-clip-text text-transparent">
              {statsSectionCopy.title}
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {statsSectionCopy.stats.map((stat, index) => (
            <div key={index} className="text-center p-8 rounded-2xl bg-black/70 border border-pink-500/30">
              <div className="text-2xl mb-4">{stat.icon}</div>
              <div className="text-4xl font-black text-pink-500 mb-2">{stat.number}</div>
              <div className="text-gray-300">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 