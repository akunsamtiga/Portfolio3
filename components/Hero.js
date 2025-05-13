// components/Hero.jsx
import Image from 'next/image';

export default function Hero() {
  return (
    <section id="hero" className="relative bg-gray-50 py-20 overflow-hidden">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/10"></div>

      {/* Main Content */}
      <div className="container mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center justify-between">
        {/* Left Side: Text */}
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4 text-gray-800">
            Solving <span className="text-blue-600">modern</span> problems through design.
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-lg">
            I seek to push the limits of creativity to create high-engaging, user-friendly, and memorable interactive experiences.
          </p>

          {/* Buttons & Avatars */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition duration-300 whitespace-nowrap">
              Hire Me
            </button>
            <div className="flex -space-x-2 items-center">
              <Image src="/images/pp1.png" alt="Avatar 1" width={32} height={32} className="rounded-full border-2 border-white" />
              <Image src="/images/pp2.png" alt="Avatar 2" width={32} height={32} className="rounded-full border-2 border-white" />
              <Image src="/images/pp3.png" alt="Avatar 3" width={32} height={32} className="rounded-full border-2 border-white" />
              <Image src="/images/pp4.png" alt="Avatar 4" width={32} height={32} className="rounded-full border-2 border-white" />
            </div>
            <p className="text-gray-600 text-sm sm:text-base">+10K Worldwide clients</p>
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <Image
            src="/images/profile1.jpg"
            alt="Hero Image"
            width={600}
            height={600}
            className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg rounded-lg shadow-xl transform transition-transform hover:scale-105 duration-500"
          />
        </div>
      </div>
    </section>
  );
}