import React from 'react';

interface ProjectsProps {
  className?: string;
}

interface Project {
  title: string;
  description: string;
  image: string;
  category: string;
  link: string;
}

export default function Projects({ className = '' }: ProjectsProps) {
  const projects: Project[] = [
    {
      title: 'E-commerce Platform',
      description: 'A modern e-commerce solution with advanced features and seamless user experience.',
      image: '/projects/ecommerce.jpg',
      category: 'Web Development',
      link: '#'
    },
    {
      title: 'Mobile Banking App',
      description: 'Secure and intuitive mobile banking application with biometric authentication.',
      image: '/projects/banking.jpg',
      category: 'Mobile App',
      link: '#'
    },
    {
      title: 'Corporate Website',
      description: 'Professional corporate website with content management system and analytics.',
      image: '/projects/corporate.jpg',
      category: 'Web Design',
      link: '#'
    },
    {
      title: 'SaaS Dashboard',
      description: 'Comprehensive dashboard for SaaS platform with real-time data visualization.',
      image: '/projects/saas.jpg',
      category: 'UI/UX Design',
      link: '#'
    },
    {
      title: 'Learning Management System',
      description: 'Educational platform with course management, assessments, and progress tracking.',
      image: '/projects/lms.jpg',
      category: 'Web Development',
      link: '#'
    },
    {
      title: 'Healthcare Portal',
      description: 'Patient portal with appointment scheduling, medical records, and telemedicine.',
      image: '/projects/healthcare.jpg',
      category: 'Web Application',
      link: '#'
    }
  ];

  return (
    <section className={`py-16 bg-gray-50 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Our Recent Projects
          </h2>
          <p className="text-lg text-gray-600">
            Explore some of our latest work and success stories
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-48 bg-gray-200">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjNmNGY2Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzlDQTNBRiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlIE5vdCBGb3VuZDwvdGV4dD48L3N2Zz4=';
                  }}
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <a
                  href={project.link}
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors duration-300"
                >
                  View Project
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}