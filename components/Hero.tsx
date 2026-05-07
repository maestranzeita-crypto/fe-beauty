'use client'

import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section
      className="hero-marble hero-shimmer relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* SVG marble veins overlay */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden
      >
        <filter id="marble-hero">
          <feTurbulence
            type="turbulence"
            baseFrequency="0.012 0.008"
            numOctaves="9"
            seed="7"
            result="turb"
          />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 0.045 0"
            in="turb"
          />
        </filter>
        <rect width="100%" height="100%" filter="url(#marble-hero)" />

        {/* Hand-drawn bright veins */}
        <path d="M-50 180 Q 300 155 700 190 Q 1000 210 1500 170" stroke="rgba(255,255,255,0.05)" strokeWidth="1.2" fill="none" />
        <path d="M-50 380 Q 400 360 800 385 Q 1100 400 1500 360" stroke="rgba(255,255,255,0.04)" strokeWidth="0.8" fill="none" />
        <path d="M-50 560 Q 350 540 750 570 Q 1100 585 1500 545" stroke="rgba(255,255,255,0.035)" strokeWidth="1" fill="none" />
        <path d="M 250 -20 Q 270 300 260 720" stroke="rgba(255,255,255,0.03)" strokeWidth="0.7" fill="none" />
        <path d="M 900 -20 Q 920 350 910 720" stroke="rgba(255,255,255,0.025)" strokeWidth="0.6" fill="none" />
      </svg>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-4xl mx-auto">

        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="font-montserrat text-[9px] uppercase tracking-[0.5em] text-[#C8A96E] mb-10"
        >
          CENTRO ESTETICO · MILAN
        </motion.p>

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.55 }}
          className="mb-8"
        >
          <h1
            className="font-cormorant font-semibold leading-none text-[#F7F4F0]"
            style={{ fontSize: 'clamp(3rem, 8vw, 7rem)' }}
          >
            Bellezza
          </h1>
          <h1
            className="font-cormorant italic font-semibold leading-none text-[#E8A8A8]"
            style={{ fontSize: 'clamp(3rem, 8vw, 7rem)' }}
          >
            che parla di te
          </h1>
        </motion.div>

        {/* Gold line */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1.1, delay: 0.9 }}
          className="gold-line w-48 mb-9"
          style={{ transformOrigin: 'center' }}
        />

        {/* Pills */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 1.1 }}
          className="flex flex-col sm:flex-row items-center gap-3 sm:gap-0 mb-12"
        >
          {['BEAUTY THERAPIST', 'NAIL ARTIST', 'EPILATION LASER'].map((pill, i) => (
            <span key={pill} className="flex items-center">
              {i > 0 && (
                <span className="hidden sm:inline mx-4 text-[#C8A96E] text-xs">·</span>
              )}
              <span className="font-montserrat text-[9px] uppercase tracking-[0.3em] text-[#F7F4F0]/60">
                {pill}
              </span>
            </span>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 1.3 }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <a
            href="#contatti"
            className="font-montserrat text-[10px] font-medium uppercase tracking-[0.22em] bg-[#C8A96E] text-[#0D0D0D] px-10 py-4 hover:bg-[#b8994e] transition-colors duration-300"
          >
            PRENOTA ORA
          </a>
          <a
            href="#servizi"
            className="font-montserrat text-[10px] font-medium uppercase tracking-[0.22em] border border-[#F7F4F0]/40 text-[#F7F4F0] px-10 py-4 hover:border-[#F7F4F0]/80 transition-colors duration-300"
          >
            SCOPRI I SERVIZI
          </a>
        </motion.div>
      </div>

      {/* Scroll arrow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 0.9 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 scroll-arrow"
        aria-hidden
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 5v14M5 12l7 7 7-7"
            stroke="#C8A96E"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </motion.div>
    </section>
  )
}
