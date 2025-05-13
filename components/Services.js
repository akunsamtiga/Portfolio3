// components/Services.jsx

export default function Services() {
  return (
    <section className="py-20 bg-yellow-50">
      <div className="container mx-auto px-4">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-600">
          {/* Kolom Kiri: Daftar Layanan */}
          <div>
            {/* Layanan 1: UI/UX Design */}
            <ServiceCard
              number="01"
              title="UI/UX Design"
              items={[
                { label: "Web Design", checked: true },
                { label: "App Design", checked: true },
                { label: "Dashboard Design", checked: true },
              ]}
            />

            {/* Garis Pembatas */}
            <hr className="my-6 border-t border-gray-200" />

            {/* Layanan 2: Development */}
            <ServiceCard
              number="02"
              title="Development"
              items={[
                { label: "Web Development", checked: true },
                { label: "App Development", checked: true },
              ]}
            />

            {/* Garis Pembatas */}
            <hr className="my-6 border-t border-gray-200" />

            {/* Layanan 3: Branding */}
            <ServiceCard
              number="03"
              title="Branding"
              items={[
                { label: "Brand Logo", checked: true },
                { label: "Brand Promotion", checked: true },
              ]}
            />
          </div>

          {/* Kolom Kanan: Deskripsi dan CTA */}
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold mb-4">
              Solving problems by the <span className="text-blue-600">services</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              I seek to push the limits of creativity to create high-engaging, user-friendly, and memorable interactive experiences.
            </p>
            <button className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800 transition duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

// Komponen Kartu Layanan
function ServiceCard({ number, title, items }) {
  return (
    <div className="space-y-2">
      {/* Nomor Layanan */}
      <div className="flex items-center space-x-4">
        <span className="text-xl font-bold">{number}</span>
        <div className="w-full h-0.5 bg-gray-200"></div>
      </div>

      {/* Judul Layanan */}
      <h3 className="text-xl font-semibold mb-4">{title}</h3>

      {/* Daftar Sub-Layanan */}
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index} className="flex items-center space-x-2 text-gray-600">
            <span className="text-green-500">✓</span>
            <span>{item.label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}