'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const services = [
  {
    title: 'Beauty Therapy',
    desc: 'Rituali viso e corpo personalizzati per rigenerare la tua pelle. Pulizia profonda, massaggi rilassanti e trattamenti su misura.',
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <path
          d="M20 8c-2.5 0-5 1.5-6.5 4C12 14.5 11.5 17 12 19c1 4 4 7 8 9 4-2 7-5 8-9 .5-2 0-4.5-1.5-7C25 9.5 22.5 8 20 8z"
          stroke="#E8A8A8"
          strokeWidth="1.3"
          strokeLinejoin="round"
        />
        <path d="M20 8v20" stroke="#C8A96E" strokeWidth="0.9" strokeLinecap="round" opacity="0.7" />
        <path d="M14 14c2 1.5 4 2 6 2s4-.5 6-2" stroke="#C8A96E" strokeWidth="0.9" strokeLinecap="round" opacity="0.7" />
        <circle cx="20" cy="20" r="1.5" fill="#E8A8A8" opacity="0.7" />
      </svg>
    ),
    iconHover: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <path
          d="M20 8c-2.5 0-5 1.5-6.5 4C12 14.5 11.5 17 12 19c1 4 4 7 8 9 4-2 7-5 8-9 .5-2 0-4.5-1.5-7C25 9.5 22.5 8 20 8z"
          stroke="#C8A96E"
          strokeWidth="1.3"
          strokeLinejoin="round"
        />
        <path d="M20 8v20" stroke="#C8A96E" strokeWidth="0.9" strokeLinecap="round" />
        <path d="M14 14c2 1.5 4 2 6 2s4-.5 6-2" stroke="#C8A96E" strokeWidth="0.9" strokeLinecap="round" />
        <circle cx="20" cy="20" r="1.5" fill="#C8A96E" />
      </svg>
    ),
  },
  {
    title: 'Nail Art',
    desc: 'Arte e precisione per le tue unghie. Manicure classica, semipermanente, gel e nail art creativi con le tecniche più moderne.',
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <rect x="15" y="8" width="10" height="14" rx="5" stroke="#E8A8A8" strokeWidth="1.3" />
        <path d="M13 22h14l-2 12H15L13 22z" stroke="#E8A8A8" strokeWidth="1.3" strokeLinejoin="round" />
        <path d="M16 28h8" stroke="#C8A96E" strokeWidth="0.9" strokeLinecap="round" opacity="0.8" />
        <path d="M17 31h6" stroke="#C8A96E" strokeWidth="0.9" strokeLinecap="round" opacity="0.6" />
        <circle cx="20" cy="14" r="2" fill="#E8A8A8" opacity="0.4" />
      </svg>
    ),
    iconHover: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <rect x="15" y="8" width="10" height="14" rx="5" stroke="#C8A96E" strokeWidth="1.3" />
        <path d="M13 22h14l-2 12H15L13 22z" stroke="#C8A96E" strokeWidth="1.3" strokeLinejoin="round" />
        <path d="M16 28h8" stroke="#C8A96E" strokeWidth="0.9" strokeLinecap="round" />
        <path d="M17 31h6" stroke="#C8A96E" strokeWidth="0.9" strokeLinecap="round" />
        <circle cx="20" cy="14" r="2" fill="#C8A96E" opacity="0.6" />
      </svg>
    ),
  },
  {
    title: 'Epilazione Laser',
    desc: 'Epilazione definitiva con tecnologie laser avanzate. Trattamenti sicuri ed efficaci per tutti i fototipi, con risultati duraturi.',
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <path d="M20 8l-4 10h8l-4 14" stroke="#E8A8A8" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="20" cy="8" r="2" fill="#C8A96E" opacity="0.8" />
        <path d="M11 18h6M23 18h6" stroke="#C8A96E" strokeWidth="0.9" strokeLinecap="round" opacity="0.6" />
        <path d="M13 12l3 4M27 12l-3 4" stroke="#C8A96E" strokeWidth="0.8" strokeLinecap="round" opacity="0.4" />
      </svg>
    ),
    iconHover: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <path d="M20 8l-4 10h8l-4 14" stroke="#C8A96E" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="20" cy="8" r="2" fill="#C8A96E" />
        <path d="M11 18h6M23 18h6" stroke="#C8A96E" strokeWidth="0.9" strokeLinecap="round" />
        <path d="M13 12l3 4M27 12l-3 4" stroke="#C8A96E" strokeWidth="0.8" strokeLinecap="round" />
      </svg>
    ),
  },
]

function FadeUp({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px 0px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {children}
    </motion.div>
  )
}

export default function Services() {
  return (
    <section id="servizi" className="py-24 md:py-32 bg-[#F7F4F0]">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <FadeUp>
          <div className="text-center mb-16 md:mb-20">
            <p className="font-montserrat text-[9px] uppercase tracking-[0.45em] text-[#C8A96E] mb-5">
              COSA OFFRIAMO
            </p>
            <h2 className="font-cormorant font-semibold text-[#0D0D0D] leading-tight"
              style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)' }}>
              I Nostri{' '}
              <em className="italic text-[#E8A8A8]">Servizi</em>
            </h2>
            <div className="gold-line w-20 mx-auto mt-6" />
          </div>
        </FadeUp>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <FadeUp key={s.title} delay={i * 0.14}>
              <div className="service-card group h-full flex flex-col items-center text-center bg-white border border-[#C8A96E]/25 p-10 cursor-default hover:bg-[#0D0D0D] hover:border-[#C8A96E]/60">

                {/* Icon — switch on hover via group */}
                <div className="mb-7 relative">
                  <span className="block group-hover:hidden">{s.icon}</span>
                  <span className="hidden group-hover:block">{s.iconHover}</span>
                </div>

                <h3
                  className="font-cormorant font-semibold text-[#0D0D0D] group-hover:text-[#F7F4F0] transition-colors duration-350 mb-2"
                  style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.8rem)' }}
                >
                  {s.title}
                </h3>

                <div className="gold-line w-10 my-5" />

                <p className="font-montserrat text-[11px] leading-7 tracking-wide text-[#0D0D0D]/60 group-hover:text-[#F7F4F0]/60 transition-colors duration-350">
                  {s.desc}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}
