'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import LeadForm from './LeadForm'
import { heroSlides } from '../lib/images'
import { RERA_NO, PHONE_NUMBER } from '../lib/config'

// Slides extended with clones at both ends for seamless infinite circular loop
const extendedSlides = [
  heroSlides[heroSlides.length - 1],
  ...heroSlides,
  heroSlides[0],
]

const Hero = ({ setIsOpen }) => {
  const [currentIndex, setCurrentIndex] = useState(1)
  const [isTransitioning, setIsTransitioning] = useState(true)

  // Infinite circular auto-play timer
  useEffect(() => {
    const timer = setInterval(() => {
      setIsTransitioning(true)
      setCurrentIndex((prev) => prev + 1)
    }, 3800)
    return () => clearInterval(timer)
  }, [])

  const handleTransitionEnd = () => {
    if (currentIndex >= extendedSlides.length - 1) {
      // Reached the clone at the end -> jump back to real first slide seamlessly
      setIsTransitioning(false)
      setCurrentIndex(1)
      setTimeout(() => {
        setIsTransitioning(true)
      }, 50)
    } else if (currentIndex <= 0) {
      // Reached the clone at start -> jump back to real last slide seamlessly
      setIsTransitioning(false)
      setCurrentIndex(extendedSlides.length - 2)
      setTimeout(() => {
        setIsTransitioning(true)
      }, 50)
    }
  }

  // Active slide index (0 to 3) for highlighting tabs
  const activeSlide = (currentIndex - 1 + heroSlides.length) % heroSlides.length

  return (
    <section
      id="home"
      className="hero-section relative overflow-hidden text-white"
      style={{
        background: '#17342D',
        fontFamily: 'var(--font-poppins), Poppins, sans-serif',
      }}
    >
      <div className="w-full pt-[82px] pb-8 sm:pt-[88px] sm:pb-10 lg:pt-[98px] lg:pb-12 relative z-10">

        {/* Ambient subtle luxury emerald & warm gold glow */}
        <div
          className="absolute -top-24 -right-24 w-80 sm:w-[560px] h-80 sm:h-[560px] rounded-full pointer-events-none blur-[140px]"
          style={{ background: 'radial-gradient(circle, rgba(139, 106, 52, 0.25) 0%, transparent 70%)' }}
        />
        <div
          className="absolute -bottom-24 -left-24 w-72 sm:w-[500px] h-72 sm:h-[500px] rounded-full pointer-events-none blur-[130px]"
          style={{ background: 'radial-gradient(circle, rgba(23, 52, 45, 0.45) 0%, transparent 70%)' }}
        />

        {/* Elegant architectural flowing contour curves */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-15">
          <svg className="absolute -bottom-12 -left-12 w-[650px] sm:w-[900px] h-auto text-[#8B6A34]" viewBox="0 0 800 350" fill="none">
            <path d="M-50,220 C150,130 260,320 480,200 C680,80 770,260 900,160" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" />
            <path d="M-50,260 C180,160 290,340 520,230 C720,110 800,280 900,190" stroke="currentColor" strokeWidth="2" />
            <path d="M-50,300 C200,200 320,370 560,260 C760,140 830,310 900,230" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </div>

        <div className="container mx-auto px-3.5 sm:px-6" style={{ maxWidth: '1380px' }}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-10 items-start">

            {/* ══════════════════════════════════════════════════════
                LEFT 50% (7 cols on lg): Pure Visual & Info Showcase
               ══════════════════════════════════════════════════════ */}
            <div className="lg:col-span-7 flex flex-col justify-between">

              {/* Heading & Brand Identity */}
              <div className="mb-2.5 sm:mb-3.5">
                {/* Eyebrow Developer Badge */}
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[11px] sm:text-[12px] uppercase tracking-[1.5px] font-bold text-[#E2D9CC] bg-white/10 border border-[#8B6A34]/40 px-3.5 py-1 rounded-full shadow-sm backdrop-blur-md inline-flex items-center gap-1.5">
                    <i className="fa-solid fa-city text-[#8B6A34] text-[11px]" />
                    By Godrej Properties
                  </span>
                </div>

                {/* Main Headline */}
                <h1 className="text-white font-black tracking-tight leading-[1.18] text-[22px] xs:text-[26px] sm:text-[30px] md:text-[34px] m-0">
                  Barca at Godrej MSR City
                </h1>

                {/* Subheadline (Location) */}
                <p className="flex items-center gap-1.5 text-xs sm:text-[13px] text-neutral-200 font-medium mt-1.5 mb-2.5 leading-normal">
                  <i className="fas fa-location-dot text-[#8B6A34] text-[11px]" />
                  <span>Shettigere, Devanahalli, North Bangalore</span>
                </p>
              </div>

              {/* ── LUXURY GALLERY CENTERPIECE (With refined bezel framing) ── */}
              <div className="p-[3.5px] sm:p-1 rounded-2xl sm:rounded-3xl bg-gradient-to-tr from-[#0E221D] via-[#8B6A34] to-[#17342D] shadow-[0_20px_50px_rgba(0,0,0,0.45),0_0_20px_rgba(139,106,52,0.35)]">
                <div className="relative rounded-[14px] sm:rounded-[22px] overflow-hidden bg-black">
                  <div 
                    onTransitionEnd={handleTransitionEnd}
                    className={`flex w-full ${
                      isTransitioning ? 'transition-transform duration-700 ease-in-out' : 'transition-none'
                    }`}
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                  >
                    {extendedSlides.map((slide, idx) => (
                      <div 
                        key={`${slide.id}-${idx}`} 
                        className="relative w-full h-[230px] xs:h-[260px] sm:h-[310px] md:h-[340px] lg:h-[360px] flex-shrink-0"
                      >
                        <Image
                          src={slide.img}
                          alt={slide.name}
                          fill
                          priority={idx === 1}
                          className="object-cover"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 55vw"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* ── SLIDE SELECTOR TABS ── */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mt-3">
                {heroSlides.map((slide, idx) => {
                  const isActive = activeSlide === idx
                  return (
                    <button
                      key={slide.id}
                      type="button"
                      onClick={() => {
                        setIsTransitioning(true)
                        setCurrentIndex(idx + 1)
                      }}
                      className={`py-2 px-3 rounded-xl text-xs sm:text-[13px] font-bold transition-all duration-300 cursor-pointer text-center flex items-center justify-center gap-1.5 border whitespace-nowrap ${
                        isActive
                          ? 'bg-[#8B6A34] text-white border-[#8B6A34] shadow-[0_4px_16px_rgba(139,106,52,0.45)] font-extrabold -translate-y-0.5'
                          : 'bg-white/10 text-white/85 border-white/20 hover:border-[#8B6A34] hover:text-white hover:bg-[#8B6A34]/25 backdrop-blur-sm'
                      }`}
                    >
                      <span>{slide.name}</span>
                    </button>
                  )
                })}
              </div>

            </div>

            {/* ══════════════════════════════════════════════════════
                RIGHT 50% (5 cols on lg): Conversion Console Card
               ══════════════════════════════════════════════════════ */}
            <div className="lg:col-span-5 mt-2 lg:mt-0 flex flex-col">

              {/* Key Quick Specs Strip (Above the form) */}
              <div className="flex flex-row flex-wrap items-center justify-between gap-x-2 gap-y-3 sm:gap-4 lg:gap-5 p-2.5 sm:p-4 mb-5 rounded-2xl bg-black/25 backdrop-blur-md border border-white/15 text-xs sm:text-sm shadow-xl w-full">
                <div className="flex-shrink-0">
                  <span className="text-neutral-300 font-bold text-[10px] sm:text-[11px] uppercase tracking-wider block mb-0.5">Price Starts At</span>
                  <div className="flex items-center gap-1.5">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#8B6A34] opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-[#8B6A34]"></span>
                    </span>
                    <strong className="blink-price font-black text-[16.5px] sm:text-[20.5px] whitespace-nowrap tracking-tight text-white">
                      ₹ 1.47 Cr*
                    </strong>
                  </div>
                </div>
                <div className="border-l border-white/15 pl-2 sm:pl-4 lg:pl-5 flex-shrink-0">
                  <span className="text-neutral-300 font-bold text-[10px] sm:text-[11px] uppercase tracking-wider block mb-0.5">Typology</span>
                  <strong className="text-white font-black text-[13px] sm:text-[15px] whitespace-nowrap">2 &amp; 3 BHK</strong>
                </div>
                <div className="border-l border-white/15 pl-2 sm:pl-4 lg:pl-5 flex-shrink-0">
                  <span className="text-neutral-300 font-bold text-[10px] sm:text-[11px] uppercase tracking-wider block mb-0.5">Status</span>
                  <strong className="text-[#8B6A34] font-black text-[13px] sm:text-[15px] whitespace-nowrap">New Launch</strong>
                </div>
              </div>

              <div
                className="rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 relative overflow-hidden"
                style={{
                  background: 'rgba(14, 34, 29, 0.85)',
                  backdropFilter: 'blur(16px)',
                  border: '1.5px solid rgba(139, 106, 52, 0.35)',
                  boxShadow: '0 25px 60px rgba(0, 0, 0, 0.45)',
                  borderTop: '4px solid #8B6A34',
                }}
              >
                {/* Header */}
                <div className="text-center mb-4 sm:mb-5">
                  <h3 className="text-lg xs:text-xl sm:text-2xl font-black text-white tracking-tight m-0">
                    Unlock Exclusive Launch Benefits
                  </h3>
                  <p className="text-[11px] sm:text-xs text-neutral-300 mt-1 font-normal leading-relaxed">
                    Register your interest today for priority access, project updates, and exclusive offers.
                  </p>
                </div>

                {/* LeadForm */}
                <LeadForm formName="Barca at Godrej MSR City Form" btnText="Submit" />

                {/* ── 3 CTA BUTTONS BAR ── */}
                <div className="mt-3.5 pt-3.5 border-t border-white/10">
                  <div className="grid grid-cols-3 gap-1.5 sm:gap-2">
                    <button
                      type="button"
                      onClick={() => setIsOpen && setIsOpen(true)}
                      className="py-2.5 px-1 sm:px-2 rounded-xl text-[11px] min-[360px]:text-[11.5px] min-[400px]:text-xs sm:text-[13px] font-bold text-center bg-[#8B6A34] text-white border border-[#8B6A34] hover:bg-white hover:text-[#17342D] shadow-md hover:shadow-[0_8px_20px_rgba(139,106,52,0.4)] hover:-translate-y-0.5 active:scale-95 transition-all duration-300 flex items-center justify-center gap-1 sm:gap-1.5 cursor-pointer overflow-hidden"
                    >
                      <i className="fas fa-paper-plane text-[9px] min-[360px]:text-[10px] shrink-0"></i>
                      <span className="truncate">Enquire<span className="hidden min-[380px]:inline"> Now</span></span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setIsOpen && setIsOpen(true)}
                      className="py-2.5 px-1 sm:px-2 rounded-xl text-[11px] min-[360px]:text-[11.5px] min-[400px]:text-xs sm:text-[13px] font-bold text-center bg-[#8B6A34] text-white border border-[#8B6A34] hover:bg-white hover:text-[#17342D] shadow-md hover:shadow-[0_8px_20px_rgba(139,106,52,0.4)] hover:-translate-y-0.5 active:scale-95 transition-all duration-300 flex items-center justify-center gap-1 sm:gap-1.5 cursor-pointer overflow-hidden"
                    >
                      <i className="fas fa-calendar-check text-[10px] min-[360px]:text-[11px] shrink-0"></i>
                      <span className="truncate"><span className="hidden min-[410px]:inline">Schedule </span>Visit</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setIsOpen && setIsOpen(true)}
                      className="py-2.5 px-1 sm:px-2 rounded-xl text-[11px] min-[360px]:text-[11.5px] min-[400px]:text-xs sm:text-[13px] font-bold text-center bg-[#8B6A34] text-white border border-[#8B6A34] hover:bg-white hover:text-[#17342D] shadow-md hover:shadow-[0_8px_20px_rgba(139,106,52,0.4)] hover:-translate-y-0.5 active:scale-95 transition-all duration-300 flex items-center justify-center gap-1 sm:gap-1.5 cursor-pointer overflow-hidden"
                    >
                      <i className="fas fa-file-invoice-dollar text-[10px] min-[360px]:text-[11px] shrink-0"></i>
                      <span className="truncate">Cost Sheet</span>
                    </button>
                  </div>

                  {/* Direct Call Desk link */}
                  <div className="mt-2.5 text-center">
                    <a
                      href={`tel:${PHONE_NUMBER}`}
                      className="inline-flex items-center gap-1.5 text-[11.5px] text-neutral-300 hover:text-[#8B6A34] font-medium transition-colors"
                    >
                      <i className="fas fa-phone text-[#8B6A34] text-[10px]" />
                      <span>Sales Desk: <strong className="text-white">+91 9718344024</strong></span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Sleek bottom gold accent divider */}
      <div className="relative z-10 h-[2px] w-full bg-gradient-to-r from-transparent via-[#8B6A34] to-transparent opacity-70" />
    </section>
  )
}

export default Hero
