// components/Header.jsx
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <span className="text-xl font-bold text-gray-800">Sanzy</span>
        </div>

        {/* Navigation Menu */}
        <nav className="hidden md:flex space-x-8 relative">
          <Link href="#about" className="relative group text-gray-700 font-medium">
            About Me
            <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-600 scale-x-0 origin-left transform group-hover:scale-x-100 transition-transform duration-300"></span>
          </Link>
          <Link href="#services" className="relative group text-gray-700 font-medium">
            Services
            <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-600 scale-x-0 origin-left transform group-hover:scale-x-100 transition-transform duration-300"></span>
          </Link>
          <Link href="#project" className="relative group text-gray-700 font-medium">
            Project
            <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-600 scale-x-0 origin-left transform group-hover:scale-x-100 transition-transform duration-300"></span>
          </Link>
          <Link href="#contact" className="relative group text-gray-700 font-medium">
            Contact
            <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-600 scale-x-0 origin-left transform group-hover:scale-x-100 transition-transform duration-300"></span>
          </Link>
        </nav>

        {/* Hire Me Button */}
        <button className="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition duration-300 hidden md:block whitespace-nowrap">
          Hire Me
        </button>
      </div>
    </header>
  );
}