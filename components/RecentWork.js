// components/RecentWork.jsx
import Image from 'next/image';

export default function RecentWork() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Baris Judul dan Statistik */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-6">
          {/* Judul + Garis Strip */}
          <div className="flex items-center">
            <div className="w-16 h-0.5 bg-gray-300 mr-4"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 flex items-center">
              <span className="text-black">My</span>
              <span className="text-blue-600 ml-2">recent work.</span>
            </h2>
          </div>

          {/* Statistik Informasi */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-x-6 gap-y-3 text-sm text-gray-600 w-full md:w-auto">
            <Stat label="100+ Project completed" />
            <Stat label="50+ Design project" />
            <Stat label="30+ Dev project" />
            <Stat label="96.7% Satisfied clients" />
          </div>
        </div>

        {/* Grid Projects */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Project 1 */}
          <div className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-500">
            <Image
              src="/images/w1.jpg"
              alt="VPN App Design"
              width={500}
              height={300}
              className="w-full h-60 object-cover transform transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 flex items-end p-4 transition-opacity duration-500">
              <div className="flex items-center justify-between w-full">
                <h3 className="text-white text-xl font-semibold">VPN App Design</h3>
                <button className="bg-white text-blue-600 rounded-full p-1 ml-2 hover:bg-blue-100 transition">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transform rotate-45" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-500">
            <Image
              src="/images/w2.jpg"
              alt="Medical Website Design"
              width={500}
              height={300}
              className="w-full h-60 object-cover transform transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 flex items-end p-4 transition-opacity duration-500">
              <div className="flex items-center justify-between w-full">
                <h3 className="text-white text-xl font-semibold">Medical Website Design</h3>
                <button className="bg-white text-blue-600 rounded-full p-1 ml-2 hover:bg-blue-100 transition">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transform rotate-45" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Project 3 */}
          <div className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-500">
            <Image
              src="/images/w3.jpg"
              alt="Finance Dashboard Design"
              width={500}
              height={300}
              className="w-full h-60 object-cover transform transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 flex items-end p-4 transition-opacity duration-500">
              <div className="flex items-center justify-between w-full">
                <h3 className="text-white text-xl font-semibold">Finance Dashboard Design</h3>
                <button className="bg-white text-blue-600 rounded-full p-1 ml-2 hover:bg-blue-100 transition">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transform rotate-45" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="border border-blue-600 text-blue-600 px-6 py-2 rounded-full hover:bg-blue-600 hover:text-white transition duration-300 whitespace-nowrap">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
}

// Komponen kecil untuk statistik
function Stat({ label }) {
  return (
    <div className="border-b border-gray-200 pb-2 md:border-0 md:pb-0">
      <p>{label}</p>
    </div>
  );
}