import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <Contact />

      {/* Google Maps — tonalità scura per restare nel tono */}
      <div className="bg-[#0D0D0D]">
        <iframe
          src="https://maps.google.com/maps?q=Via+Ponte+Nuovo+35,+20128+Milano+MI&output=embed&hl=it"
          width="100%"
          height="280"
          style={{
            border: 0,
            display: 'block',
            filter: 'grayscale(0.8) sepia(0.3) brightness(0.85)',
          }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="FE Beauty Power — Milano"
        />
      </div>

      <Footer />
    </main>
  )
}
