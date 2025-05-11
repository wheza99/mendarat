import Link from "next/link";

export default function NavbarTheme1() {
  return (
    <nav className="w-full absolute top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-6 text-sm">
        <div className="flex gap-5 items-center font-semibold">
          <Link href={"/"} className="text-white text-2xl font-bold">
            ARKA ARSITEK
          </Link>
        </div>
        <div className="hidden md:flex space-x-8">
          <Link
            href="#"
            className="text-white text-sm hover:text-gray-300 transition"
          >
            ABOUT
          </Link>
          <Link
            href="#"
            className="text-white text-sm hover:text-gray-300 transition"
          >
            PROJECTS
          </Link>
          <Link
            href="#"
            className="text-white text-sm hover:text-gray-300 transition"
          >
            BLOG
          </Link>
          <Link
            href="#"
            className="text-white text-sm hover:text-gray-300 transition"
          >
            CONTACT
          </Link>
        </div>

        {/* Mobile menu button - can be expanded later */}
        <div className="md:hidden">
          <button className="text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
