"use client"
import React, { useEffect, useState, useCallback } from "react"

const Gear = ({
  className,
  color,
  innerRadius = 20,
  rotation,
}: {
  className?: string
  color: string
  innerRadius?: number
  rotation: number
}) => {
  return (
    <div
      className={className}
      style={{ transform: `rotate(${rotation}deg)` }}
    >
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <mask id="hole">
          <rect x="0" y="0" width="100" height="100" fill="white" />
          <circle cx="50" cy="50" r={innerRadius} fill="black" />
        </mask>
        <g mask="url(#hole)" fill={color}>
          <circle cx="50" cy="50" r="30" />
          <g transform="translate(50,50)">
            {Array.from({ length: 8 }).map((_, i) => (
              <rect
                key={i}
                x="-6"
                y="-44"
                width="12"
                height="18"
                rx="2"
                ry="2"
                transform={`rotate(${i * 45})`}
              />
            ))}
          </g>
        </g>
      </svg>
    </div>
  )
}

export const CombinedBackground = () => {
  const [scrollY, setScrollY] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Check if mobile on mount and resize
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkMobile()
    window.addEventListener("resize", checkMobile)
    
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  // Throttle scroll handler for better mobile performance
  const handleScroll = useCallback(() => {
    setScrollY(window.scrollY)
  }, [])

  useEffect(() => {
    let ticking = false
    let animationFrameId: number
    
    const throttledScroll = () => {
      if (!ticking) {
        animationFrameId = window.requestAnimationFrame(() => {
          handleScroll()
          ticking = false
        })
        ticking = true
      }
    }

    // Reduce scroll listener frequency on mobile
    const options: AddEventListenerOptions = isMobile 
      ? { passive: true } 
      : { passive: true }
    
    window.addEventListener("scroll", throttledScroll, options)
    
    return () => {
      window.removeEventListener("scroll", throttledScroll)
      if (animationFrameId) {
        window.cancelAnimationFrame(animationFrameId)
      }
    }
  }, [isMobile, handleScroll])

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden h-full w-full">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-indigo-50" />
      
      {/* Professional grid/table pattern (replaced diagonal lines) */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            /* Main grid lines */
            linear-gradient(to right, #dbeafe 1px, transparent 1px),
            linear-gradient(to bottom, #dbeafe 1px, transparent 1px),
            /* Thicker boundary lines */
            linear-gradient(to right, #93c5fd 2px, transparent 2px),
            linear-gradient(to bottom, #93c5fd 2px, transparent 2px)
          `,
          backgroundSize: isMobile 
            ? '20px 20px, 20px 20px, 80px 80px, 80px 80px'
            : '40px 40px, 40px 40px, 160px 160px, 160px 160px',
          backgroundPosition: '0 0, 0 0, 0 0, 0 0'
        }}
      />
      
      {/* Subtle table outline in center */}
      {!isMobile && (
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-5">
          <div className="w-96 h-64 border-2 border-blue-200/30 rounded-xl" />
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-32 h-8 bg-gradient-to-b from-blue-100/20 to-transparent rounded-t-lg" />
        </div>
      )}
      
      {/* Reduced geometric pattern on mobile */}
      {!isMobile && (
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #93c5fd 2px, transparent 2px)`,
            backgroundSize: '60px 60px',
            opacity: 0.08
          }}
        />
      )}
      
      {/* Simplified accent shapes for mobile */}
      <div className="absolute top-0 right-0 w-1/3 h-32 bg-gradient-to-bl from-blue-200/30 via-blue-100/20 to-transparent" />
      <div className="absolute bottom-0 left-0 w-1/3 h-32 bg-gradient-to-tr from-indigo-200/30 via-indigo-100/20 to-transparent" />
      
      {/* Top-left subtle accent */}
      <div className="absolute top-10 left-10 w-24 h-24 bg-gradient-to-br from-sky-100/40 to-transparent rounded-full blur-xl" />
      
      {/* Bottom-right subtle accent */}
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-gradient-to-tl from-blue-100/40 to-transparent rounded-full blur-xl" />
      
      {/* Mobile: Show only 2-3 gears, hide the rest */}
      {!isMobile ? (
        <>
          {/* Desktop: Show all gears */}
          <Gear
            className="absolute left-[-5%] top-1/4 w-64 h-64 opacity-20 hidden md:block"
            color="#1d4ed8"
            innerRadius={20}
            rotation={scrollY * 0.18}
          />

          <Gear
            className="absolute right-[-5%] top-20 w-56 h-56 opacity-25 hidden md:block"
            color="#2563eb"
            innerRadius={18}
            rotation={-scrollY * 0.22}
          />

          <Gear
            className="absolute left-1/2 bottom-[-8%] -translate-x-1/2 w-80 h-80 opacity-15 hidden md:block"
            color="#1e40af"
            innerRadius={25}
            rotation={scrollY * 0.15}
          />

          <Gear
            className="absolute right-1/3 top-10 w-40 h-40 opacity-30 hidden md:block"
            color="#3b82f6"
            innerRadius={14}
            rotation={-scrollY * 0.28}
          />

          <Gear
            className="absolute left-20 top-2/3 w-48 h-48 opacity-25 hidden md:block"
            color="#0ea5e9"
            innerRadius={16}
            rotation={scrollY * 0.2}
          />

          <Gear
            className="absolute right-24 bottom-32 w-36 h-36 opacity-30 hidden md:block"
            color="#60a5fa"
            innerRadius={13}
            rotation={-scrollY * 0.25}
          />
        </>
      ) : (
        <>
          {/* Mobile: Show only 2 gears for better performance */}
          <Gear
            className="absolute left-[-15%] top-1/4 w-48 h-48 opacity-15"
            color="#1d4ed8"
            innerRadius={15}
            rotation={scrollY * 0.1} // Slower rotation on mobile
          />

          <Gear
            className="absolute right-[-15%] bottom-1/4 w-40 h-40 opacity-15"
            color="#2563eb"
            innerRadius={12}
            rotation={-scrollY * 0.12}
          />
        </>
      )}

      {/* Reduced radial gradients for mobile */}
      <div className={`absolute inset-0 ${isMobile ? 'bg-gradient-radial from-transparent via-white/30 to-white/70' : 'bg-gradient-radial from-transparent via-white/40 to-white/80'}`} />
      
      {/* Reduced vignette for mobile */}
      <div className={`absolute inset-0 ${isMobile ? 'bg-gradient-to-t from-blue-50/20 via-transparent to-blue-50/20' : 'bg-gradient-to-t from-blue-50/40 via-transparent to-blue-50/40'}`} />
      
      {/* Reduced noise texture for mobile */}
      {!isMobile && (
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />
      )}
      
      {/* Subtle checkboxes/decision points */}
      <div className="absolute left-10 top-10 opacity-5">
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="flex items-center mb-3">
            <div className="w-3 h-3 border border-blue-300/30 rounded-sm mr-2" />
            <div className="w-16 h-1 bg-gradient-to-r from-blue-200/20 to-transparent rounded" />
          </div>
        ))}
      </div>
      
      {/* Reduced particles for mobile */}
      <div className="absolute inset-0">
        {Array.from({ length: isMobile ? 8 : 15 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-blue-200/20"
            style={{
              left: `${10 + (i * 6) % 80}%`,
              top: `${20 + (i * 4) % 60}%`,
              width: `${isMobile ? 1 : 2 + (i % 3)}px`,
              height: `${isMobile ? 1 : 2 + (i % 3)}px`,
              animation: `float ${8 + (i % 5)}s ease-in-out infinite`,
              animationDelay: `${i * 0.3}s`,
              // Disable animation if user prefers reduced motion
              ...(typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches && {
                animation: 'none',
              }),
            }}
          />
        ))}
      </div>
      
      {/* Add CSS for float animation */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
          }
        }
      `}</style>
    </div>
  )
}

export default CombinedBackground