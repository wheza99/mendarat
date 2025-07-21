import React from 'react';

interface TeamProps {
  className?: string;
}

interface TeamMember {
  name: string;
  position: string;
  bio: string;
  image: string;
  social: {
    linkedin?: string;
    twitter?: string;
    github?: string;
  };
}

export default function Team({ className = '' }: TeamProps) {
  const teamMembers: TeamMember[] = [
    {
      name: 'John Smith',
      position: 'CEO & Founder',
      bio: 'Visionary leader with 10+ years of experience in technology and business development.',
      image: '/team/john.jpg',
      social: {
        linkedin: '#',
        twitter: '#'
      }
    },
    {
      name: 'Sarah Johnson',
      position: 'CTO',
      bio: 'Technical expert specializing in scalable architecture and emerging technologies.',
      image: '/team/sarah.jpg',
      social: {
        linkedin: '#',
        github: '#'
      }
    },
    {
      name: 'Mike Chen',
      position: 'Lead Designer',
      bio: 'Creative designer passionate about user experience and innovative design solutions.',
      image: '/team/mike.jpg',
      social: {
        linkedin: '#',
        twitter: '#'
      }
    },
    {
      name: 'Emily Davis',
      position: 'Project Manager',
      bio: 'Experienced project manager ensuring smooth delivery and client satisfaction.',
      image: '/team/emily.jpg',
      social: {
        linkedin: '#'
      }
    },
    {
      name: 'Alex Rodriguez',
      position: 'Senior Developer',
      bio: 'Full-stack developer with expertise in modern web technologies and best practices.',
      image: '/team/alex.jpg',
      social: {
        linkedin: '#',
        github: '#'
      }
    },
    {
      name: 'Lisa Wang',
      position: 'Marketing Director',
      bio: 'Digital marketing strategist focused on growth and brand development.',
      image: '/team/lisa.jpg',
      social: {
        linkedin: '#',
        twitter: '#'
      }
    }
  ];

  return (
    <section className={`py-16 bg-gray-50 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Meet Our Team
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our talented team of professionals is dedicated to delivering exceptional results
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-64 bg-gray-200">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjNmNGY2Ii8+PGNpcmNsZSBjeD0iMTUwIiBjeT0iMTIwIiByPSI0MCIgZmlsbD0iIzlDQTNBRiIvPjxwYXRoIGQ9Ik0xMDAgMjAwIEMxMDAgMTgwIDEyMCAxNjAgMTUwIDE2MCBTMjAwIDE4MCAyMDAgMjAwIiBmaWxsPSIjOUNBM0FGIi8+PC9zdmc+';
                  }}
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-blue-600 font-medium mb-3">
                  {member.position}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {member.bio}
                </p>
                
                <div className="flex space-x-3">
                  {member.social.linkedin && (
                    <a
                      href={member.social.linkedin}
                      className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-colors duration-300"
                    >
                      <span className="text-xs">in</span>
                    </a>
                  )}
                  {member.social.twitter && (
                    <a
                      href={member.social.twitter}
                      className="w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center text-white hover:bg-blue-500 transition-colors duration-300"
                    >
                      <span className="text-xs">tw</span>
                    </a>
                  )}
                  {member.social.github && (
                    <a
                      href={member.social.github}
                      className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center text-white hover:bg-gray-900 transition-colors duration-300"
                    >
                      <span className="text-xs">gh</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}