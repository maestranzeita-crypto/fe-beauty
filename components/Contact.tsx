'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const contacts = [
  {
    label: 'Telefono',
    value: '02 8363 5808',
    href: 'tel:0283635808',
    cta: 'Chiama ora',
    icon: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
        <path
          d="M4.5 7.5C4.5 6.12 5.62 5 7 5h2l1.8 4.5-2 2c1 2 2.8 3.8 4.7 4.7l2-2 4.5 1.8v2.5c0 1.38-1.12 2.5-2.5 2.5C9.1 21 4.5 16.4 4.5 10.5V7.5z"
          stroke="#C8A96E"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    label: 'Instagram',
    value: '@fe_beautypower',
    href: 'https://instagram.com/fe_beautypower',
    cta: 'Seguici',
    icon: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
        <rect x="4" y="4" width="18" height="18" rx="5" stroke="#C8A96E" strokeWidth="1.2" />
        <circle cx="13" cy="13" r="4" stroke="#C8A96E" strokeWidth="1.2" />
        <circle cx="18.5" cy="7.5" r="1" fill="#C8A96E" />
      </svg>
    ),
  },
  {
    label: 'Dove siamo',
    value: 'Via Ponte Nuovo, 35 — Milano',
    href: 'https://maps.google.com/?q=Via+Ponte+Nuovo+35,+20128+Milano+MI',
    cta: 'Come raggiungerci',
    icon: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
        <path
          d="M13 4C9.13 4 6 7.13 6 11c0 5.25 7 15 7 15s7-9.75 7-15c0-3.87-3.13-7-7-7z"
          stroke="#C8A96E"
          strokeWidth="1.2"
          strokeLinejoin="round"
        />
        <circle cx="13" cy="11" r="2.5" stroke="#C8A96E" strokeWidth="1.2" />
      </svg>
    ),
  },
]

function FadeUp({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px 0px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {children}
    </motion.div>
  )
}

export default function Contact() {
  return (
    <section id="contatti" className="py-24 md:py-32 bg-[#0D0D0D]">
      <div className="max-w-5xl mx-auto px-6">

        {/* Header */}
        <FadeUp>
          <div className="text-center mb-16 md:mb-20">
            <p className="font-montserrat text-[9px] uppercase tracking-[0.45em] text-[#C8A96E] mb-5">
              VIENI A TROVARCI
            </p>
            <h2
              className="font-cormorant font-semibold text-[#F7F4F0] leading-tight"
              style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)' }}
            >
              Prenota il Tuo{' '}
              <em className="italic text-[#E8A8A8]">Appuntamento</em>
            </h2>
            <div className="gold-line w-20 mx-auto mt-6" />
          </div>
        </FadeUp>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {contacts.map((c, i) => (
            <FadeUp key={c.label} delay={0.12 + i * 0.12}>
              <a
                href={c.href}
                target={c.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="contact-card group flex flex-col items-center text-center p-10 block"
              >
                <div className="mb-6 p-4 border border-[#C8A96E]/25 rounded-full group-hover:border-[#C8A96E]/70 transition-colors duration-300">
                  {c.icon}
                </div>
                <p className="font-montserrat text-[9px] uppercase tracking-[0.38em] text-[#C8A96E] mb-3">
                  {c.label}
                </p>
                <p
                  className="font-cormorant font-light text-[#F7F4F0] mb-5"
                  style={{ fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)' }}
                >
                  {c.value}
                </p>
                <div className="gold-line w-8 mb-5" />
                <span className="font-montserrat text-[9px] uppercase tracking-[0.25em] text-[#F7F4F0]/35 group-hover:text-[#C8A96E] transition-colors duration-300">
                  {c.cta} →
                </span>
              </a>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}
