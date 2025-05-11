"use client";

import { useState } from "react";
import { projectsSectionCopy } from '../copy';

type Project = {
  title: string;
  category: string;
  image: string;
};

export default function Projects() {
  // All available categories for filtering from centralized copy
  const categories = projectsSectionCopy.categories;
  
  // State to track the active filter category
  const [activeCategory, setActiveCategory] = useState("All");

  const projects: Project[] = projectsSectionCopy.projects;

  // Filter projects based on the active category
  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  // Handle category change
  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
  };

  return (
    <section className="py-36">
      {/* Section Header */}
      <div className="container mx-auto px-4 mb-8">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-2 text-gray-900 dark:text-white">
            {projectsSectionCopy.heading}
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400">
            {projectsSectionCopy.description}
          </p>
        </div>

        {/* Project Filters */}
        <div className="flex justify-center mt-8">
          <div className="inline-flex">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                  activeCategory === category
                    ? "bg-black text-white dark:bg-white dark:text-black"
                    : "text-gray-700 hover:text-black dark:text-gray-300 dark:hover:text-white"
                }`}
                aria-label={`Filter by ${category}`}
              >
                {category.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Project Grid - Full width with no container constraints */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 w-full">
        {filteredProjects.map((project, index) => (
          <div key={index} className="group relative overflow-hidden h-80">
            {/* Project Image - Full width and height */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
              <div className="text-center text-white p-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-xl font-bold mb-1">{project.title}</h3>
                <p className="text-sm text-gray-300 mb-4">{project.category}</p>
                <a
                  href="#"
                  className="inline-block border border-white px-4 py-2 text-sm hover:bg-white hover:text-black transition duration-300"
                  aria-label={`View details for ${project.title}`}
                >
                  {projectsSectionCopy.viewDetailsText}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* View All Projects Button */}
      <div className="container mx-auto px-4 text-center mt-16">
        <a
          href="#"
          className="inline-block px-8 py-3 bg-black text-white dark:bg-white dark:text-black hover:bg-opacity-90 transition duration-300"
          aria-label="View all projects"
        >
          {projectsSectionCopy.viewMoreText}
        </a>
      </div>
    </section>
  );
}
