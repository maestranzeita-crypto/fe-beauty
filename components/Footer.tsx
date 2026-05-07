'use client'

import Image from 'next/image'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function Footer() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true })

  return (
    <footer ref={ref} className="bg-[#080808] py-14 px-6">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="flex flex-col items-center text-center"
      >
        {/* Logo SVG 80px */}
        <Image
          src="/logo.svg"
          alt="FE Beauty Power"
          width={180}
          height={80}
          className="h-[80px] w-auto object-contain mb-6 opacity-85"
        />

        <div className="gold-line w-24 mb-6" />

        {/* Copyright */}
        <p className="font-montserrat text-[8px] uppercase tracking-[0.35em] text-[#F7F4F0]/28">
          © 2026 FE Beauty Power — Milan, Italy
        </p>
      </motion.div>
    </footer>
  )
}
