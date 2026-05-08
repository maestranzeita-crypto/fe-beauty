'use client'

import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Video background */}
      <video
        className="absolute inset-0 w-full h-full object-cover object-[center_65%]"
        src="/hero.mp4"
        autoPlay
        muted
        loop
        playsInline
        aria-hidden
      />

      {/* Dark gradient overlay for text readability */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, rgba(10,8,6,0.62) 0%, rgba(10,8,6,0.48) 50%, rgba(10,8,6,0.72) 100%)',
        }}
      />

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
            className="font-montserrat text-[10px] font-medium uppercase tracking-[0.22em] border border-[#F7F4F0]/40 text-[#F7F4F0] px-10 py-4 hover:border-[#F7F4F0]/80 transition-colors duration-300"
          >
            PRENOTA ORA
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
