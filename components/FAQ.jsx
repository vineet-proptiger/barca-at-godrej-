'use client'
import React, { useState } from 'react'

const faqData = [
  {
    question: 'What configurations are available at Barca at Godrej MSR City?',
    answer: (
      <>
        Barca at Godrej MSR City offers thoughtfully planned <strong className="font-semibold text-[#111111]">2 BHK and 3 BHK luxury apartments</strong> designed with modern architecture, spacious living and dining areas, large private balconies, and optimal natural ventilation.
      </>
    ),
  },
  {
    question: 'What is the starting price of Barca at Godrej MSR City?',
    answer: (
      <>
        Starting price begins from <strong className="font-semibold text-[#111111]">₹1.59 Cr*</strong> for 2 BHK apartments, with premium 3 BHK apartments available with pricing on request. Exclusive new launch benefits and flexible payment plans are available for early inquiries.
      </>
    ),
  },
  {
    question: 'How large is the project and what is the development structure?',
    answer:
      'Godrej MSR City is a landmark township planned across approximately 62 acres. Its residential phase, Barca at Godrej MSR City, is planned across ~14 acres featuring 2B+G+15 Floors | 26+ Floors with 800+ apartments.',
  },
  {
    question: 'Where exactly is Barca at Godrej MSR City located?',
    answer: (
      <>
        The project is strategically located in <strong className="font-semibold text-[#111111]">Shettigere, Devanahalli, North Bengaluru</strong> along the high-growth airport corridor, close to Kempegowda International Airport and Bellary Road (NH-44).
      </>
    ),
  },
  {
    question: 'What lifestyle amenities are provided at Barca at Godrej MSR City?',
    answer:
      'Planned lifestyle facilities include a grand clubhouse, swimming pool, state-of-the-art fitness areas, multipurpose sports courts, children’s play areas, yoga deck, and landscaped open spaces, subject to the specifications of each phase.',
  },
]

const FAQ = () => {
  // First item open by default, set to index 0
  const [openIdx, setOpenIdx] = useState(0)

  const toggleAccordion = (index) => {
    setOpenIdx(prev => (prev === index ? null : index))
  }

  return (
    <section id="faq" className="w-full py-10 md:py-14 bg-white font-poppins overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 max-w-[1280px]">
        
        {/* Section Title */}
        <div className="text-center max-w-[800px] mx-auto mb-12 sm:mb-14" data-aos="fade-up">
          <span className="text-[#8B6A34] font-bold text-[13px] sm:text-[14px] tracking-[2.5px] uppercase mb-3 block">
            FAQ
          </span>
          <h2 className="text-[#111111] text-[22px] sm:text-[26px] md:text-[30px] font-extrabold m-0 leading-tight">
            Frequently Asked Questions
          </h2>
        </div>

        {/* Accordion Container */}
        <div 
          className="max-w-[960px] mx-auto border border-[#dee2e6] rounded-[12px] sm:rounded-[14px] overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.03)] divide-y divide-[#dee2e6]"
          data-aos="fade-up"
        >
          {faqData.map((item, index) => {
            const isOpen = openIdx === index

            return (
              <div key={index} className="bg-white">
                {/* Accordion Button */}
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  className={`w-full py-4 px-5 sm:py-5 sm:px-7 flex items-center justify-between gap-4 text-left text-[15.5px] sm:text-[17px] transition-all duration-200 ${
                    isOpen
                      ? 'bg-[#F4EFE6] text-[#111111] font-bold shadow-inner'
                      : 'bg-white text-[#212529] font-medium hover:bg-[#fafafa]'
                  }`}
                  aria-expanded={isOpen}
                >
                  <span>{item.question}</span>
                  
                  {/* Chevron Icon */}
                  <span className={`text-current transition-transform duration-300 transform flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`}>
                    <svg 
                      width="18" 
                      height="18" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2.2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    >
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </span>
                </button>

                {/* Accordion Body */}
                {isOpen && (
                  <div className="bg-white px-5 py-5 sm:px-7 sm:py-6 text-[#343a40] text-[15px] sm:text-[15.5px] leading-[1.75] border-t border-[#dee2e6]/80 animate-fadeIn">
                    {item.answer}
                  </div>
                )}
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}

export default FAQ
