'use client'
import React from 'react'

const locationList = [
  {
    title: 'Prestige Techcloud',
    time: '1.2 Km',
  },
  {
    title: 'Stonehill International School',
    time: '11 Km',
  },
  {
    title: 'Govt Hospital',
    time: '4.7 km',
  },
  {
    title: 'Clarks Exotica',
    time: '5.5 Km',
  },
  {
    title: 'International Airport',
    time: '4 km',
  },
  {
    title: 'Upcoming Forum Mall',
    time: '1 km',
  },
  {
    title: 'Amazon office (Sattva Horizon)',
    time: '6 km',
  },
  {
    title: 'NH 44',
    time: '1.5 km',
  },
]

const Location = () => {
  return (
    <section id="location" className="location-section py-10 md:py-14 bg-white font-poppins overflow-hidden" style={{ fontFamily: 'var(--font-poppins), Poppins, sans-serif' }}>
      <div className="container mx-auto px-4 sm:px-6 max-w-[1300px]">
        
        {/* Section Title */}
        <div className="text-center max-w-[850px] mx-auto mb-10 md:mb-12" data-aos="fade-up">
          <span className="text-[#8B6A34] font-bold text-[13px] sm:text-[14px] tracking-[2.5px] uppercase mb-2.5 block">
            LOCATION ADVANTAGES
          </span>
          <h2 className="text-[#111111] text-[22px] sm:text-[26px] md:text-[30px] font-extrabold m-0 leading-tight">
            A Location That Keeps You Connected
          </h2>
        </div>

        {/* ── 2-Column Grid: Left List (8 Cards) / Right Map (Equal Height) ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          
          {/* Left: 8 Location Points */}
          <div className="flex flex-col justify-between gap-2 sm:gap-2.5 h-full">
            {locationList.map((item, index) => (
              <div
                key={index}
                data-aos="fade-right"
                data-aos-delay={(index * 40).toString()}
                className="group bg-white hover:bg-[#F9F8F3] border border-[#EAE6DF] hover:border-[#8B6A34]/60 rounded-[12px] px-3.5 sm:px-4 py-2.5 sm:py-3 flex items-center justify-between shadow-[0_2px_8px_rgba(0,0,0,0.03)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.12)] transition-all duration-200"
              >
                {/* Left side: Check Icon & Title */}
                <div className="flex items-center gap-2.5 sm:gap-3 min-w-0 pr-2">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#F4EFE6] group-hover:bg-[#111111] text-[#111111] group-hover:text-[#8B6A34] flex items-center justify-center text-[13px] sm:text-[14px] shrink-0 transition-colors duration-200">
                    <i className="fa-solid fa-circle-check text-[#111111] group-hover:text-[#8B6A34]"></i>
                  </div>
                  <span className="text-[#1f2937] group-hover:text-[#111111] font-semibold text-[13.5px] sm:text-[14.5px] transition-colors duration-200 leading-snug">
                    {item.title}
                  </span>
                </div>

                {/* Right side: Time Badge */}
                <span className="bg-[#F4EFE6] group-hover:bg-[#111111] text-[#111111] group-hover:text-white font-bold text-[11.5px] sm:text-[12.5px] px-3 py-1 rounded-full whitespace-nowrap transition-colors duration-200 shrink-0 shadow-xs">
                  {item.time}
                </span>
              </div>
            ))}
          </div>

          {/* Right: Google Maps Embed (Exact Equal Height) */}
          <div 
            className="relative w-full h-full min-h-[340px] lg:min-h-0 rounded-[20px] overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.08)] border border-gray-200 bg-gray-100 flex"
            data-aos="fade-left"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31075.63039111884!2d77.62293567431641!3d13.196801400000007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1d8829723495%3A0x42397d8ede95b3d1!2sBarca%20at%20Godrej%20MSR%20City%2C%20North%20Bengaluru!5e0!3m2!1sen!2sin!4v1793166923225!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              title="Barca at Godrej MSR City, North Bengaluru Location Map"
              className="w-full h-full block flex-1"
            />
          </div>

        </div>

      </div>
    </section>
  )
}

export default Location
