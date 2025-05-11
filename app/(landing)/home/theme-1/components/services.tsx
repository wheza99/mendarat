import { ReactNode } from "react";
import { servicesSectionCopy } from '../copy';

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
  const serviceItems: ServiceItemProps[] = servicesSectionCopy.services;

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Services Intro */}
          <div className="flex flex-col justify-center items-start">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {servicesSectionCopy.heading}
            </h2>
            <p className="text-gray-600 mb-6">
              {servicesSectionCopy.description}
            </p>
            <a
              href="#"
              className="inline-block bg-black text-white dark:bg-white dark:text-black px-6 py-3 uppercase text-sm tracking-wider hover:bg-opacity-90 transition duration-300"
            >
              {servicesSectionCopy.buttonText}
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
