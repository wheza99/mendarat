"use client";

import { teamSectionCopy } from '../copy';

export default function Team() {
  const teamMembers = teamSectionCopy.teamMembers;

  // Only display the first two team members as shown in the design
  const displayedMembers = teamMembers.slice(0, 2);

  return (
    <section className="py-36 max-w-7xl mx-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          {/* Left side - Team info */}
          <div className="md:w-1/3">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              {teamSectionCopy.heading.split('\n').map((line, i) => (
                <span key={i}>
                  {line}
                  {i < teamSectionCopy.heading.split('\n').length - 1 && <br />}
                </span>
              ))}
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              {teamSectionCopy.description}
            </p>
            <a
              href="#"
              className="inline-block bg-black text-white dark:bg-white dark:text-black px-8 py-3 uppercase text-sm tracking-wider hover:bg-opacity-90 transition duration-300"
            >
              {teamSectionCopy.buttonText}
            </a>
          </div>

          {/* Right side - Team members */}
          <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
            {displayedMembers.map((member, index) => (
              <div key={index} className="relative pb-16">
                <div className="overflow-hidden relative group">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-96 object-cover"
                  />
                  {/* Social media icons overlay */}
                  <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex space-x-3">
                      <a
                        href="#"
                        className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-opacity-90 transition duration-300"
                      >
                        <span className="text-amber-600 font-bold">{teamSectionCopy.socialLinks[0]}</span>
                      </a>
                      <a
                        href="#"
                        className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-opacity-90 transition duration-300"
                      >
                        <span className="text-amber-600 font-bold">{teamSectionCopy.socialLinks[1]}</span>
                      </a>
                      <a
                        href="#"
                        className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-opacity-90 transition duration-300"
                      >
                        <span className="text-amber-600 font-bold">{teamSectionCopy.socialLinks[2]}</span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-2/3 bg-white p-6 text-center shadow-md ">
                  <h3 className="text-xl font-bold mb-1 text-black">
                    {member.name}
                  </h3>
                  <p className="text-gray-600">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
