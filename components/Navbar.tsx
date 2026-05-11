'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const navLinks = [
  { href: '#servizi', label: 'SERVIZI' },
  { href: '#gallery', label: 'GALLERY' },
  { href: '#contatti', label: 'CONTATTI' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'navbar-scrolled' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between relative">

        {/* LEFT — Prenota (gold button) */}
        <a
          href="tel:0283635808"
          className="text-[9px] font-montserrat font-semibold uppercase tracking-[0.22em] bg-[#C8A96E] text-[#0D0D0D] px-4 py-2 hover:bg-[#b8994e] transition-colors duration-300 z-10"
        >
          PRENOTA
        </a>

        {/* CENTER — Logo */}
        <Link
          href="/"
          className="absolute left-1/2 -translate-x-1/2 flex items-center"
          aria-label="FE Beauty Power"
        >
          <Image
            src="/logo.svg"
            alt="FE Beauty Power"
            width={120}
            height={36}
            priority
            className="w-[120px] h-auto"
          />
        </Link>

        {/* RIGHT — Nav links (desktop) */}
        <ul className="hidden md:flex items-center gap-8 z-10">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-[9px] font-montserrat font-medium uppercase tracking-[0.22em] text-[#F7F4F0] hover:text-[#C8A96E] transition-colors duration-300"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* RIGHT — Hamburger (mobile) */}
        <button
          className="md:hidden flex flex-col gap-[5px] p-2 z-10"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Apri menu"
        >
          <span
            className={`block w-5 h-px bg-[#F7F4F0] transition-all duration-300 origin-center ${
              menuOpen ? 'rotate-45 translate-y-[6px]' : ''
            }`}
          />
          <span
            className={`block w-5 h-px bg-[#F7F4F0] transition-all duration-300 ${
              menuOpen ? 'opacity-0 scale-x-0' : ''
            }`}
          />
          <span
            className={`block w-5 h-px bg-[#F7F4F0] transition-all duration-300 origin-center ${
              menuOpen ? '-rotate-45 -translate-y-[6px]' : ''
            }`}
          />
        </button>
      </nav>

      {/* Mobile menu dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-400 bg-[#0D0D0D] border-t border-[#C8A96E]/20 ${
          menuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="flex flex-col items-center gap-7 py-9">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="text-[10px] font-montserrat uppercase tracking-[0.3em] text-[#F7F4F0] hover:text-[#C8A96E] transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="tel:0283635808"
              onClick={() => setMenuOpen(false)}
              className="text-[9px] font-montserrat uppercase tracking-[0.22em] bg-[#C8A96E] text-[#0D0D0D] px-5 py-2.5"
            >
              PRENOTA
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}
