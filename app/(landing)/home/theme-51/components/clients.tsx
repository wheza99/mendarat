import React from 'react';

interface ClientsProps {
  className?: string;
}

export default function Clients({ className = '' }: ClientsProps) {
  const clients = [
    { name: 'Client 1', logo: '/logos/client1.svg' },
    { name: 'Client 2', logo: '/logos/client2.svg' },
    { name: 'Client 3', logo: '/logos/client3.svg' },
    { name: 'Client 4', logo: '/logos/client4.svg' },
    { name: 'Client 5', logo: '/logos/client5.svg' },
    { name: 'Client 6', logo: '/logos/client6.svg' },
  ];

  return (
    <section className={`py-16 bg-gray-50 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-lg text-gray-600">
            Join thousands of satisfied clients worldwide
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {clients.map((client, index) => (
            <div key={index} className="flex items-center justify-center p-4">
              <img
                src={client.logo}
                alt={client.name}
                className="h-12 w-auto opacity-60 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}