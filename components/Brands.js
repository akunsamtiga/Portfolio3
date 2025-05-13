// components/Brands.jsx
import Link from 'next/link';
import Image from 'next/image';

export default function Brands() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        {/* Judul */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
              Working with the best <span className="text-blue-600">brand</span> across the globe.
            </h2>
            <p className="text-sm text-gray-600 mb-4">
              I seek to push the limits of creativity to create high-engaging, user-friendly, and memorable interactive experiences.
            </p>
            <Link href="#all-brands" className="text-sm text-blue-600 hover:underline">
              All Brand 
            </Link>
          </div>

          {/* Logo Brands */}
          <div className="grid grid-cols-2 gap-8 md:gap-16">
            <Image src="/images/d1.jpg" alt="Indeed" className="h-16 object-contain opacity-70 hover:opacity-100 transition duration-300" />
            <Image src="/images/d2.jpg" alt="Netflix" className="h-18 object-contain opacity-70 hover:opacity-100 transition duration-300" />
            <Image src="/images/d3.jpg" alt="Shin-Etsu" className="h-18 object-contain opacity-70 hover:opacity-100 transition duration-300" />
            <Image src="/images/d4.jpg" alt="ARTEX" className="h-16 object-contain opacity-70 hover:opacity-100 transition duration-300" />
          </div>
        </div>
      </div>
    </section>
  );
}