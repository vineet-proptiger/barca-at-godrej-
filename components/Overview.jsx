'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { overviewImage } from '../lib/images'

const overviewSpecs = [
  {
    title: 'Configuration',
    desc: '2 & 3 BHK Apartments',
  },
  {
    title: 'Total Land Parcel',
    desc: '14 Acres (Township ~62 Acres)',
  },
  {
    title: 'Structure',
    desc: '2B+G+15 Floors | 26+ Floors',
  },
  {
    title: 'No. of Units',
    desc: '800+ Apartments',
  },
]

const Overview = ({ setIsOpen }) => {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <section id="overview" className="w-full py-12 md:py-16 bg-white font-poppins">
      <div className="container mx-auto px-4" style={{ maxWidth: '1240px' }}>
        <div className="flex flex-col lg:flex-row items-center lg:items-start lg:mx-[-16px]">
          
          {/* Image Column */}
          <div className="w-full lg:w-1/2 lg:px-[16px] mb-10 lg:mb-0 flex justify-center lg:sticky lg:top-24">
            <div className="relative w-full max-w-[500px] h-[340px] sm:h-[400px] md:h-[460px] lg:h-[500px] rounded-[24px] overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.08)]">
               <Image 
                 src={overviewImage} 
                 alt="About Barca at Godrej MSR City" 
                 fill 
                 className="object-cover" 
                 sizes="(max-width: 1024px) 100vw, 50vw" 
               />
               <div className="absolute" style={{ right: '8px', bottom: '50%', transform: 'translateY(50%) rotate(-90deg)', transformOrigin: 'center right' }}>
                 <span className="text-[#e0e0e0] text-[10px] tracking-widest uppercase" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.8)' }}>Artistic Impression</span>
               </div>
            </div>
          </div>

          {/* Content Column */}
          <div className="w-full lg:w-1/2 lg:px-[16px] lg:pl-12">
            <div>
              <span className="text-[#8B6A34] font-bold text-[13px] sm:text-[14px] tracking-[2.5px] uppercase mb-2 block">
                WELLNESS ARCHITECTURE
              </span>
              <h2 className="text-[#111111] text-[24px] sm:text-[28px] md:text-[32px] font-black leading-[1.15] mb-4 tracking-tight">
                Overview
              </h2>

              <div className="mb-6">
                <div className={`text-[#4A5568] text-[15px] leading-[1.75] text-left ${!isExpanded ? 'line-clamp-4 overflow-hidden' : ''}`}>
                  <p className="m-0">
                    <strong className="text-[#111111]">Godrej MSR City</strong> is a large residential township by Godrej Properties, located in Shettigere, Devanahalli, North Bengaluru, along the airport corridor. The development is planned across approximately 62 acres and is designed to combine modern apartments, landscaped open spaces and lifestyle amenities within a wider residential community.
                  </p>
                  <p className="m-0">
                    One of its premier residential phases, <strong className="text-[#111111]">Barca at Godrej MSR City</strong>, offers spacious 2 &amp; 3 BHK apartments starting from ₹1.47 Cr*. Planned across 14 acres with 800+ units across 2B+G+15 Floors and 26+ Floors, it sets a new benchmark in contemporary living.
                  </p>
                  <p className="m-0">
                    The project benefits from its strategic location near Kempegowda International Airport, Bellary Road (NH-44), and the developing North Bengaluru business corridor. Nearby destinations include airport-linked commercial developments, reputed educational institutions, healthcare centers, and shopping destinations.
                  </p>
                  <p className="m-0">
                    Planned lifestyle facilities include an expansive clubhouse, swimming pool, state-of-the-art fitness areas, sports courts, and landscaped open spaces, subject to the specifications of each phase.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="text-[#111111] hover:text-[#8B6A34] font-bold text-[14.5px] mt-2.5 inline-flex items-center gap-1.5 hover:underline cursor-pointer transition-colors duration-200 focus:outline-none"
                >
                  <span>{isExpanded ? 'Read Less' : 'Read More'}</span>
                  <svg 
                    className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
              
              {/* Exactly 4 Specs with Matching Theme Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 pt-6 border-t border-gray-100">
                {overviewSpecs.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#111111] text-[#8B6A34] flex items-center justify-center text-[11px] flex-shrink-0 mt-0.5 shadow-sm font-bold">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-[#111111] font-bold text-[16px] sm:text-[17px] mb-0.5 leading-snug">
                        {item.title}
                      </h4>
                      <p className="text-[#6c757d] text-[13.5px] sm:text-[14px] font-medium m-0 leading-snug">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Overview
