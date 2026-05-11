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
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d89412.24853537808!2d9.113399600000001!3d45.4654219!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786c1493f1275e7%3A0x3cffcd13c6740e8d!2sMilano%20MI!5e0!3m2!1sit!2sit!4v1712345678901!5m2!1sit!2sit"
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
