export default function Stats() {
  return (
    <section className="py-36 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Main content grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
          {/* Left side - Image */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1527576539890-dfa815648363?q=80&w=3465&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Interior Design Hallway"
              className="w-full h-auto"
            />
          </div>

          {/* Right side - Content */}
          <div className="p-8">
            {/* Content */}
            <div className="text-amber-600 mb-4">/ WELCOME TO INNER</div>

            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <div>STYLISH DESIGNS,</div>
              <div>INNOVATIVE IDEAS</div>
            </h2>

            <p className="text-gray-600 mb-8">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove right at the coast of the Semantics, a
              large language ocean.
            </p>

            <button className="bg-black text-white dark:bg-white dark:text-black px-6 py-3 uppercase text-sm tracking-wider ">
              READ MORE
            </button>

            {/* Stats section - positioned in the second column */}
            <div className="grid grid-cols-2 gap-4 mt-12">
              {/* Years of Experience */}
              <div>
                <h3 className="text-3xl font-bold mb-1">
                  20 <span className="text-gray-500">+</span>
                </h3>
                <p className="text-gray-600 text-sm">Years of Experience</p>
              </div>

              {/* Projects Completed */}
              <div>
                <h3 className="text-3xl font-bold mb-1">
                  1,375 <span className="text-gray-500">+</span>
                </h3>
                <p className="text-gray-600 text-sm">Projects Completed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
