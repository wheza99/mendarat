import { ReactNode } from "react";

type ServiceItemProps = {
  title: string;
  description: string;
  image: string;
  iconPath?: string;
};

const ServiceIcon = ({ path }: { path: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-8 w-8"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1}
      d={path}
    />
  </svg>
);

const ServiceCard = ({
  title,
  description,
  image,
  iconPath,
}: ServiceItemProps) => {
  // Default home icon path
  const defaultPath =
    "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6";

  return (
    <div className="relative overflow-hidden group h-64 border border-gray-100 dark:border-gray-800">
      {/* Background image - hidden by default, shown on hover */}
      <div
        className="absolute inset-0 opacity-5 group-hover:opacity-70 transition-opacity duration-300 z-0"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      {/* Dark overlay - only visible on hover */}
      <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300 z-10"></div>

      {/* Content */}
      <div className="relative h-full p-6 flex flex-col justify-center z-20 group-hover:text-white transition-colors duration-300">
        <div className="text-amber-500 mb-2 group-hover:text-white transition-colors duration-300">
          <ServiceIcon path={iconPath || defaultPath} />
        </div>
        <h3 className="text-3xl font-bold text-gray-900 dark:text-gray-100 group-hover:text-white transition-colors duration-300">
          {title}
        </h3>
        <p className="text-sm mt-2 text-gray-600 dark:text-gray-400 group-hover:text-gray-200 transition-colors duration-300">
          {description}
        </p>
      </div>
    </div>
  );
};

export default function Services() {
  const serviceItems: ServiceItemProps[] = [
    {
      title: "Residential Design",
      description:
        "We bring the right people together to challenge established thinking and drive transform in 2020",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      iconPath:
        "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
    },
    {
      title: "Restaurant Design",
      description:
        "We bring the right people together to challenge established thinking and drive transform in 2020",
      image:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      iconPath:
        "M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z",
    },
    {
      title: "Corporate Design",
      description:
        "We bring the right people together to challenge established thinking and drive transform in 2020",
      image:
        "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      iconPath:
        "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
    },
    {
      title: "Commercial Design",
      description:
        "We bring the right people together to challenge established thinking and drive transform in 2020",
      image:
        "https://images.unsplash.com/photo-1604328698692-f76ea9498e76?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      iconPath: "M3 3h18v18H3V3z",
    },
    {
      title: "Hospitality Design",
      description:
        "We bring the right people together to challenge established thinking and drive transform in 2020",
      image:
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      // This icon has two paths, we'll combine them for simplicity
      iconPath:
        "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z",
    },
  ];

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Services Intro */}
          <div className="flex flex-col justify-center items-start">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              OUR SERVICES
            </h2>
            <p className="text-gray-600 mb-6">
              Far far away behind the word mountains far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
            <a
              href="#"
              className="inline-block bg-black text-white dark:bg-white dark:text-black px-6 py-3 uppercase text-sm tracking-wider hover:bg-opacity-90 transition duration-300"
            >
              VIEW ALL
            </a>
          </div>

          {/* Service Cards */}
          {serviceItems.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              image={service.image}
              iconPath={service.iconPath}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
