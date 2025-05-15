// app/page.jsx
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import RecentWork from '@/components/RecentWork'
import Brands from '@/components/Brands'
import Services from '@/components/Services'
import Portfolio from '@/components/Portfolio'
import Testimonials from '@/components/Testimonials'
import Footer from '@/components/Footer'
import Message from '@/components/Message'

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <RecentWork />
      <Brands />
      <Services />
      <Portfolio />
      <Testimonials />
      <Message />
      <Footer />
    </main>
  )
}