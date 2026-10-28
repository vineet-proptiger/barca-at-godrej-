'use client'
import React from 'react'

const amenities = [
  {
    title: 'Clubhouses',
    subtitle: 'Two dedicated recreation & wellness clubhouses',
    icon: 'fa-solid fa-house-chimney',
  },
  {
    title: 'Swimming Pool',
    subtitle: 'Resort-style pool with expansive sun deck',
    icon: 'fa-solid fa-person-swimming',
  },
  {
    title: 'Fitness & Sports',
    subtitle: 'Outdoor sports courts & active recreation zones',
    icon: 'fa-solid fa-person-running',
  },
  {
    title: 'Work & Social Spaces',
    subtitle: 'Executive co-working lounges & social networking areas',
    icon: 'fa-solid fa-laptop',
  },
  {
    title: 'Green & Sustainable Features',
    subtitle: 'Landscaped open greens, tree-lined avenues & eco-friendly design',
    icon: 'fa-solid fa-seedling',
  },
  {
    title: 'Family & Outdoor',
    subtitle: 'Safe kids play area & landscaped family gardens',
    icon: 'fa-solid fa-child-reaching',
  },
  {
    title: 'Multipurpose Sports Court',
    subtitle: 'Dedicated courts for tennis, badminton & outdoor sports',
    icon: 'fa-solid fa-basketball',
  },
  {
    title: 'Gym',
    subtitle: 'Fully-equipped modern gymnasium & fitness studio',
    icon: 'fa-solid fa-dumbbell',
  },
]

const Amenities = () => {
  return (
    <section id="amenities" className="w-full py-12 md:py-16 font-poppins bg-white">
      <div className="container mx-auto px-4 sm:px-6" style={{ maxWidth: '1280px' }}>

        {/* Section Title */}
        <div className="text-center mb-10 sm:mb-12" data-aos="fade-up">
          <span className="text-[#8B6A34] font-bold text-[13px] sm:text-[14px] tracking-[2.5px] uppercase mb-2 block">
            WORLD CLASS AMENITIES
          </span>
          <h2 className="text-[#17342D] text-[22px] sm:text-[26px] md:text-[30px] font-extrabold m-0 leading-tight">
            A Lifestyle That Complements Your Vision of Luxury
          </h2>
        </div>

        {/* 4x2 Clean Cards Grid (No Images, Exact Reference Design) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-6">
          {amenities.map((item, index) => {
            return (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={((index % 4) * 60).toString()}
                className="group relative bg-white rounded-[22px] p-7 border border-[#ececec] shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_12px_32px_rgba(23,52,45,0.08)] hover:border-[#8B6A34]/40 hover:-translate-y-1.5 transition-all duration-300 flex flex-col items-center text-center justify-between min-h-[220px]"
              >
                {/* Center Content */}
                <div className="flex flex-col items-center w-full">
                  {/* Round Icon Badge */}
                  <div className="w-16 h-16 rounded-full flex items-center justify-center text-[22px] mb-5 transition-all duration-300 group-hover:scale-108 bg-[#F4EFE6] text-[#8B6A34] group-hover:bg-[#17342D] group-hover:text-white shadow-sm font-bold">
                    <i className={item.icon}></i>
                  </div>

                  {/* Amenity Title */}
                  <h3 className="font-bold text-[17px] sm:text-[18px] mb-2 leading-snug transition-colors duration-200 text-[#17342D] group-hover:text-[#8B6A34]">
                    {item.title}
                  </h3>

                  {/* Amenity Subtitle */}
                  <p className="text-[#6c757d] text-[13px] sm:text-[13.5px] leading-relaxed m-0 font-medium max-w-[230px]">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}

export default Amenities
