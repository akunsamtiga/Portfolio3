// components/Brands.jsx
import Link from 'next/link';
import Image from 'next/image';

export default function Brands() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        {/* Judul & Deskripsi */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-8">
          <div className="max-w-xl">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 leading-snug mb-3">
              Working with the best <span className="text-purple-600">brand</span> across the globe.
            </h2>
            <p className="text-base text-gray-600 mb-4">
              I seek to push the limits of creativity to create high-engaging, user-friendly, and memorable interactive experiences.
            </p>
            <Link href="#all-brands" className="text-sm text-purple-600 hover:underline font-medium">
              View All Brands →
            </Link>
          </div>

          {/* Logo Brands */}
          <div className="grid grid-cols-2 gap-8 md:gap-12">
            <Image
              src="/images/d1.jpg"
              alt="Indeed"
              width={120}
              height={40}
              className="object-contain opacity-70 hover:opacity-100 transition duration-300"
            />
            <Image
              src="/images/d2.jpg"
              alt="Netflix"
              width={120}
              height={40}
              className="object-contain opacity-70 hover:opacity-100 transition duration-300"
            />
            <Image
              src="/images/d3.jpg"
              alt="Shin-Etsu"
              width={120}
              height={40}
              className="object-contain opacity-70 hover:opacity-100 transition duration-300"
            />
            <Image
              src="/images/d4.jpg"
              alt="ARTEX"
              width={120}
              height={40}
              className="object-contain opacity-70 hover:opacity-100 transition duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
