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

export const SecondBack = () => {
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
    <div className="fixed inset-0 -z-10 overflow-hidden h-full w-full bg-white">
      {/* Left Gear - Top */}
      <Gear
        className="absolute left-10 top-20 w-32 h-32 opacity-10"
        color="#3b82f6"
        innerRadius={14}
        rotation={scrollY * 0.2}
      />

      {/* Right Gear - Top */}
      <Gear
        className="absolute right-16 top-32 w-40 h-40 opacity-10"
        color="#0ea5e9"
        innerRadius={16}
        rotation={-scrollY * 0.3}
      />

      {/* Left Gear - Bottom */}
      <Gear
        className="absolute left-20 bottom-24 w-36 h-36 opacity-10"
        color="#2563eb"
        innerRadius={15}
        rotation={-scrollY * 0.16}
      />
    </div>
  )
}
export default SecondBack
