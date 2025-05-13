// components/Testimonials.jsx
import Image from 'next/image';

export default function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Judul */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-600">What my clients say.</h2>

        {/* Grid Testimonials */}
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {/* Testimonial 1 */}
          <TestimonialCard
            name="Sarah Johnson"
            role="CEO, TechNova"
            avatar="/images/pp1.png"
            quote="Working with McCullum was a game-changer for our company. His attention to detail and creative thinking is truly remarkable."
          />

          {/* Testimonial 2 */}
          <TestimonialCard
            name="David Kim"
            role="Founder, Designify"
            avatar="/images/pp4.png"
            quote="He delivered exactly what we needed — beautiful design combined with intuitive UX. I can't recommend him enough!"
          />

          {/* Testimonial 3 */}
          <TestimonialCard
            name="Emily Rodriguez"
            role="Product Manager, AppWorks"
            avatar="/images/pp2.png"
            quote="McCullum transformed our outdated website into a modern digital experience. The results exceeded our expectations."
          />
        </div>
      </div>
    </section>
  );
}

// Komponen Kartu Testimonial
function TestimonialCard({ name, role, avatar, quote }) {
  return (
    <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
      <div className="flex items-center mb-4">
        <Image src={avatar} alt={name} width={50} height={50} className="rounded-full object-cover" />
        <div className="ml-4">
          <h4 className="font-semibold text-gray-600">{name}</h4>
          <p className="text-sm text-gray-500">{role}</p>
        </div>
      </div>
      <p className="text-gray-700 italic flex-grow">&ldquo;{quote}&rdquo;</p>
    </div>
  );
}