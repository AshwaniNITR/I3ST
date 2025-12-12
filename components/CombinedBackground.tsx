"use client"
import React, { useEffect, useState } from "react"

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

  useEffect(() => {
    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY)
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden h-full w-full">
      {/* Base gradient with better contrast */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-indigo-50" />
      
      {/* Enhanced diagonal pattern with better visibility */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(45deg, #dbeafe 12.5%, transparent 12.5%, transparent 50%, #dbeafe 50%, #dbeafe 62.5%, transparent 62.5%, transparent 100%),
            linear-gradient(-45deg, #bfdbfe 12.5%, transparent 12.5%, transparent 50%, #bfdbfe 50%, #bfdbfe 62.5%, transparent 62.5%, transparent 100%)
          `,
          backgroundSize: '80px 80px',
          backgroundPosition: '0 0, 40px 40px',
          opacity: 0.15
        }}
      />
      
      {/* Subtle geometric pattern overlay */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #93c5fd 2px, transparent 2px)`,
          backgroundSize: '60px 60px',
          opacity: 0.08
        }}
      />
      
      {/* Blue accent shapes - enhanced contrast */}
      <div className="absolute top-0 right-0 w-1/3 h-32 bg-gradient-to-bl from-blue-200/30 via-blue-100/20 to-transparent" />
      <div className="absolute bottom-0 left-0 w-1/3 h-32 bg-gradient-to-tr from-indigo-200/30 via-indigo-100/20 to-transparent" />
      
      {/* Top-left subtle accent */}
      <div className="absolute top-10 left-10 w-24 h-24 bg-gradient-to-br from-sky-100/40 to-transparent rounded-full blur-xl" />
      
      {/* Bottom-right subtle accent */}
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-gradient-to-tl from-blue-100/40 to-transparent rounded-full blur-xl" />
      
      {/* Animated gears with improved contrast and visibility */}
      
      {/* Large center-left gear */}
      <Gear
        className="absolute left-[-5%] top-1/4 w-64 h-64 opacity-20"
        color="#1d4ed8"
        innerRadius={20}
        rotation={scrollY * 0.18}
      />

      {/* Right Gear - Top */}
      <Gear
        className="absolute right-[-5%] top-20 w-56 h-56 opacity-25"
        color="#2563eb"
        innerRadius={18}
        rotation={-scrollY * 0.22}
      />

      {/* Center Bottom Gear */}
      <Gear
        className="absolute left-1/2 bottom-[-8%] -translate-x-1/2 w-80 h-80 opacity-15"
        color="#1e40af"
        innerRadius={25}
        rotation={scrollY * 0.15}
      />

      {/* Small top-center gear */}
      <Gear
        className="absolute right-1/3 top-10 w-40 h-40 opacity-30"
        color="#3b82f6"
        innerRadius={14}
        rotation={-scrollY * 0.28}
      />

      {/* Left-middle gear */}
      <Gear
        className="absolute left-20 top-2/3 w-48 h-48 opacity-25"
        color="#0ea5e9"
        innerRadius={16}
        rotation={scrollY * 0.2}
      />

      {/* Additional small bottom-right gear */}
      <Gear
        className="absolute right-24 bottom-32 w-36 h-36 opacity-30"
        color="#60a5fa"
        innerRadius={13}
        rotation={-scrollY * 0.25}
      />

      {/* Radial gradients for depth with better contrast */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-white/40 to-white/80" />
      
      {/* Enhanced vignette effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-blue-50/40 via-transparent to-blue-50/40" />
      <div className="absolute inset-0 bg-gradient-to-r from-white/30 via-transparent to-white/30" />
      
      {/* Subtle noise texture for depth */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
      
      {/* Floating particles effect */}
      <div className="absolute inset-0">
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-blue-200/20"
            style={{
              left: `${10 + (i * 6) % 80}%`,
              top: `${20 + (i * 4) % 60}%`,
              width: `${2 + (i % 3)}px`,
              height: `${2 + (i % 3)}px`,
              animation: `float ${8 + (i % 5)}s ease-in-out infinite`,
              animationDelay: `${i * 0.3}s`,
            }}
          />
        ))}
      </div>
    </div>
  )
}

export default CombinedBackground