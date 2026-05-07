'use client'

import Image from 'next/image'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const galleryItems = [
  { src: '/gallery/img1.png',   label: 'Nail Art',           local: true },
  { src: '/gallery/img2.png',   label: 'Beauty Therapy',     local: true },
  { src: '/gallery/img3.png',   label: 'Trattamento Viso',   local: true },
  {
    src: 'https://images.pexels.com/photos/3997989/pexels-photo-3997989.jpeg?auto=compress&cs=tinysrgb&w=800',
    label: 'Nail Design',
    local: false,
  },
  { src: '/gallery/img4.png',   label: 'Epilazione Laser',   local: true },
  {
    src: 'https://images.pexels.com/photos/3997986/pexels-photo-3997986.jpeg?auto=compress&cs=tinysrgb&w=800',
    label: 'Manicure',
    local: false,
  },
  {
    src: 'https://images.pexels.com/photos/3985329/pexels-photo-3985329.jpeg?auto=compress&cs=tinysrgb&w=800',
    label: 'Skincare Ritual',
    local: false,
  },
  {
    src: 'https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=800',
    label: 'Trattamento Spa',
    local: false,
  },
  {
    src: 'https://images.pexels.com/photos/3762875/pexels-photo-3762875.jpeg?auto=compress&cs=tinysrgb&w=800',
    label: 'Beauty Ritual',
    local: false,
  },
]

function FadeUp({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px 0px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.75, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {children}
    </motion.div>
  )
}

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 md:py-32 bg-[#0D0D0D]">
      <div className="max-w-[960px] mx-auto px-6">

        {/* Header */}
        <FadeUp>
          <div className="text-center mb-14 md:mb-18">
            <p className="font-montserrat text-[9px] uppercase tracking-[0.45em] text-[#C8A96E] mb-5">
              PORTFOLIO
            </p>
            <h2
              className="font-cormorant font-semibold text-[#F7F4F0] leading-tight"
              style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)' }}
            >
              La Nostra{' '}
              <em className="italic text-[#E8A8A8]">Gallery</em>
            </h2>
            <div className="gold-line w-20 mx-auto mt-6" />
          </div>
        </FadeUp>

        {/* 3×3 grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[3px]">
          {galleryItems.map((item, i) => (
            <FadeUp key={item.src} delay={i * 0.07}>
              <div className="gallery-item relative aspect-square cursor-pointer">
                <Image
                  src={item.src}
                  alt={item.label}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 320px"
                  className="object-cover"
                  unoptimized={!item.local}
                />
                <div className="gallery-overlay">
                  <span className="font-cormorant italic font-semibold text-[#C8A96E] text-xl tracking-wide">
                    {item.label}
                  </span>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}
