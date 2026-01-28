"use client"

import { useState, useEffect, useRef } from "react"
import { speakers } from "./data"
import Image from "next/image"

export default function SpeakersCarousel() {
  const [isPaused, setIsPaused] = useState(false)
  const sliderRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sliderRef.current) return

    if (isPaused) {
      sliderRef.current.style.animationPlayState = "paused"
    } else {
      sliderRef.current.style.animationPlayState = "running"
    }
  }, [isPaused])
  
  const calculateAnimationDuration = () => {
    const speakerCount = speakers[0]?.members?.length || 6
    return 10 + speakerCount * 2
  }

  const speakerMembers = speakers[0]?.members || []
  const allSpeakers = [...speakerMembers, ...speakerMembers]

  return (
    <div
      className="relative w-full bg-gradient-to-br from-slate-50 via-white to-blue-50 shadow-xl overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-1/4 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-purple-400/10 rounded-full blur-3xl"></div>
      </div>

      {/* Header with gradient */}
      <div className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-purple-900 py-4 px-6 flex justify-center items-center border-b border-blue-700/50 backdrop-blur-sm">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-lg flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-center bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
            Our Speakers
          </h2>
        </div>
      </div>
    
      <div className="relative overflow-hidden py-6">
        <style jsx>{`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
        `}</style>

        <div
          ref={sliderRef}
          className="flex w-[200%] animate-scroll"
          style={{
            animation: `scroll ${calculateAnimationDuration()}s linear infinite`,
            width: "fit-content",
            WebkitAnimation: `scroll ${calculateAnimationDuration()}s linear infinite`,
            WebkitTransform: "translate3d(0, 0, 0)",
            WebkitBackfaceVisibility: "hidden",
            WebkitPerspective: 1000,
          }}
        >
          {allSpeakers.map((speaker, index) => (
            <div
              key={`${speaker.id}-${index}`}
              className="flex-shrink-0 min-w-[200px] sm:min-w-[250px] md:min-w-[300px] p-4 mx-3 bg-white/80 backdrop-blur-xl rounded-2xl border border-gray-200/50 shadow-lg  transition-all duration-300 hover:scale-105 group relative overflow-hidden"
              style={{
                WebkitBackfaceVisibility: "hidden",
                WebkitPerspective: 1000,
              }}
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 opacity-0  transition-opacity duration-300 pointer-events-none"></div>
              
              <div className="relative z-10">
                {/* Speaker Image */}
                <div className="mb-3 flex justify-center">
                  <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-blue-200 shadow-lg relative">
                    {speaker.imageUrl ? (
                      <div className="relative w-full h-full">
                        {/* Background fallback */}
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-purple-100"></div>
                        {/* Actual Image */}
                        <Image
                          src={speaker.imageUrl}
                          alt={speaker.name}
                          fill
                          sizes="(max-width: 768px) 80px, 80px"
                          className="object-cover"
                          onError={(e) => {
                            // If image fails to load, show fallback
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                            target.parentElement?.classList.add('bg-gradient-to-br', 'from-blue-100', 'to-purple-100');
                          }}
                        />
                        {/* Fallback icon - only shown if image fails to load */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-0">
                          <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                        </div>
                      </div>
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                        <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                    )}
                  </div>
                </div>
                
                <div className="flex flex-col gap-2">
                  <h3 className="text-base font-bold text-center bg-gradient-to-r from-blue-900 to-blue-700 bg-clip-text text-transparent">
                    {speaker.name}
                  </h3>
                  
                  <div className="flex items-center justify-center gap-1">
                    <svg className="w-4 h-4 text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    <p className="text-sm text-gray-700 font-medium text-center">
                      {speaker.role}
                    </p>
                  </div>
                  
                  <div className="mt-2 pt-3 border-t border-gray-200">
                    <div className="flex items-start gap-1">
                      <svg className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <div>
                        <p className="text-xs text-gray-500 font-semibold">Talk Title:</p>
                        <p className="text-sm text-gray-700 font-medium">{speaker.talkTitle}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Subtle gradient border effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 opacity-0  transition-opacity duration-300 pointer-events-none blur-sm -z-10"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom gradient accent */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-purple-500 to-blue-600"></div>
    </div>
  )
}