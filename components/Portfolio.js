// components/Portfolio.jsx
import Image from "next/image";

export default function Portfolio() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Judul */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-700">
          Let’s have a look at my portfolio.
        </h2>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 text-gray-400">
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">All</button>
          <button className="border border-gray-300 px-4 py-2 rounded hover:bg-gray-200 transition">Web Design</button>
          <button className="border border-gray-300 px-4 py-2 rounded hover:bg-gray-200 transition">Mobile App</button>
          <button className="border border-gray-300 px-4 py-2 rounded hover:bg-gray-200 transition">Dashboard</button>
          <button className="border border-gray-300 px-4 py-2 rounded hover:bg-gray-200 transition">Branding</button>
        </div>

        {/* Grid Proyek */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Project Cards */}
          <ProjectCard title="Real Estate Website" category="Web Design" image="/images/r1.webp" />
          <ProjectCard title="NFT Dashboard Design" category="Dashboard" image="/images/r2.webp" />
          <ProjectCard title="Habit Tracker App" category="Mobile App" image="/images/r3.webp" />
          <ProjectCard title="Finance Dashboard" category="Dashboard" image="/images/r4.webp" />
          <ProjectCard title="E-commerce Branding" category="Branding" image="/images/r5.webp" />
          <ProjectCard title="Medical Website UI" category="Web Design" image="/images/r6.webp" />
        </div>
      </div>
    </section>
  );
}

// Komponen Kartu Proyek
function ProjectCard({ title, category, image }) {
  return (
    <div className="group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
      <div className="relative w-full h-64">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transform group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
          <div>
            <span className="text-sm text-gray-300">{category}</span>
            <h3 className="text-white font-semibold text-lg">{title}</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
