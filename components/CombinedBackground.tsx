"use client";
import React, { useEffect, useState, useCallback } from "react";
import { CommitteesBackground } from "./Background";

const MeterIcon = ({
  className,
  color = "currentColor", // Allows inheriting Tailwind/CSS color
  strokeWidth = 6, // Reduced from 12 for a thinner appearance
}: {
  className?: string;
  color?: string;
  strokeWidth?: number;
}) => {
  // ViewBox set for a 100x100 grid for simplicity in coordinate mapping
  return (
    <div className={className} style={{ color }}>
      <svg
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-full h-full"
      >
        {/* Main Body: Rounded Rectangle */}
        <rect
          x="10"
          y="5"
          width="80"
          height="90"
          rx="12"
          fill="none"
          stroke="currentColor"
        />

        {/* Dividing Line: Separating meter from controls */}
        <line x1="10" y1="60" x2="90" y2="60" />

        {/* Upper Half: Meter Display */}
        <g stroke="currentColor">
          {/* Semicircle Arc (The Scale) - Adjusted coordinates for spacing */}
          <path d="M25 60 A25 25 0 0 1 75 60" />

          {/* Center Point of the Scale (Filled for a solid dot) */}
          <circle cx="50" cy="60" r="2" fill="currentColor" stroke="none" />

          {/* Needle/Pointer: Pointing towards the upper right (around 70% mark) */}
          <line x1="50" y1="60" x2="75" y2="28" />
        </g>

        {/* Lower Half: Control Panel */}
        <g stroke="currentColor">
          {/* Main Dial/Knob (The big circle) */}
          <circle cx="40" cy="75" r="8" />

          {/* Inner Circle (The center of the dial - Filled for a solid dot) */}
          <circle cx="40" cy="75" r="2" fill="currentColor" stroke="none" />

          {/* Indicator Light/Dot (The small circle on the right - Filled for a solid dot) */}
          <circle cx="65" cy="75" r="2" fill="currentColor" stroke="none" />
        </g>
      </svg>
    </div>
  );
};

const ChipIcon = ({
  className,
  color = "#3b82f6", // same blue family as others
}: {
  className?: string
  color?: string
}) => {
  return (
    <div className={className} style={{ color }}>
      <svg
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        className="w-full h-full"
      >
        {/* Pins */}
        <g
          stroke="currentColor"
          strokeWidth="7"
          strokeLinecap="round"
        >
          {/* Top */}
          <line x1="70" y1="10" x2="70" y2="30" />
          <line x1="100" y1="10" x2="100" y2="30" />
          <line x1="130" y1="10" x2="130" y2="30" />

          {/* Bottom */}
          <line x1="70" y1="170" x2="70" y2="190" />
          <line x1="100" y1="170" x2="100" y2="190" />
          <line x1="130" y1="170" x2="130" y2="190" />

          {/* Left */}
          <line x1="10" y1="70" x2="30" y2="70" />
          <line x1="10" y1="100" x2="30" y2="100" />
          <line x1="10" y1="130" x2="30" y2="130" />

          {/* Right */}
          <line x1="170" y1="70" x2="190" y2="70" />
          <line x1="170" y1="100" x2="190" y2="100" />
          <line x1="170" y1="130" x2="190" y2="130" />
        </g>

        {/* Chip body */}
        <rect
          x="30"
          y="30"
          width="140"
          height="140"
          rx="14"
          fill="currentColor"
          opacity="0.85"
        />

        {/* Circuit traces */}
        <g
          stroke="#ffffff"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M70 50 L70 80 L100 80" />
          <path d="M130 60 L110 60 L110 100" />
          <path d="M80 130 L80 100 L100 100" />
          <path d="M120 120 L120 90 L140 90" />
        </g>

        {/* Nodes */}
        <g fill="#ffffff">
          <circle cx="100" cy="80" r="5" />
          <circle cx="110" cy="100" r="5" />
          <circle cx="80" cy="100" r="5" />
          <circle cx="120" cy="90" r="5" />
        </g>
      </svg>
    </div>
  )
}



const Oscilloscope = ({
  className,
  color = "#1d4ed8",
}: {
  className?: string;
  color?: string;
}) => {
  return (
    <div className={className}>
      <svg viewBox="0 0 320 230" xmlns="http://www.w3.org/2000/svg">
        <g
          fill="none"
          stroke={color}
          strokeWidth="12"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* Outer body */}
          <rect x="10" y="10" width="300" height="180" rx="10" />

          {/* Screen */}
          <rect x="35" y="40" width="170" height="90" rx="10" />

          {/* Mid line */}
          <line x1="35" y1="85" x2="205" y2="85" />

          {/* Waveform */}
          <path
            d="M45 85
               C60 55, 75 55, 90 85
               C105 115, 120 115, 135 85
               C150 55, 165 55, 180 85"
            className="osc-wave"
            strokeDasharray="8 14"
          />

          {/* Meter */}
          <rect x="225" y="50" width="65" height="65" rx="6" />
          <path d="M238 95 A25 25 0 0 1 277 95" />
          <line x1="257" y1="95" x2="262" y2="80" />

          {/* Buttons */}
          <circle cx="55" cy="155" r="6" />
          <circle cx="80" cy="155" r="6" />
          <circle cx="105" cy="155" r="6" />

          {/* Slider */}
          <line x1="130" y1="155" x2="165" y2="155" />

          {/* Knobs */}
          <circle cx="230" cy="155" r="10" />
          <circle cx="265" cy="155" r="10" />

          {/* Feet */}
          <rect x="55" y="190" width="35" height="18" />
          <rect x="230" y="190" width="35" height="18" />
        </g>
      </svg>
    </div>
  );
};

const Gear = ({
  className,
  color,
  innerRadius = 20,
  rotation,
}: {
  className?: string;
  color: string;
  innerRadius?: number;
  rotation: number;
}) => {
  return (
    <div className={className} style={{ transform: `rotate(${rotation}deg)` }}>
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
  );
};

export const CombinedBackground = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if mobile on mount and resize
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Throttle scroll handler for better mobile performance
  const handleScroll = useCallback(() => {
    setScrollY(window.scrollY);
  }, []);

  useEffect(() => {
    let ticking = false;
    let animationFrameId: number;

    const throttledScroll = () => {
      if (!ticking) {
        animationFrameId = window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    // Reduce scroll listener frequency on mobile
    const options: AddEventListenerOptions = isMobile
      ? { passive: true }
      : { passive: true };

    window.addEventListener("scroll", throttledScroll, options);

    return () => {
      window.removeEventListener("scroll", throttledScroll);
      if (animationFrameId) {
        window.cancelAnimationFrame(animationFrameId);
      }
    };
  }, [isMobile, handleScroll]);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden h-full w-full">
      {/* Base gradient */}
      <CommitteesBackground />
      <div className="absolute inset-0 bg-gradient-to-br " />

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
            ? "20px 20px, 20px 20px, 80px 80px, 80px 80px"
            : "40px 40px, 40px 40px, 160px 160px, 160px 160px",
          backgroundPosition: "0 0, 0 0, 0 0, 0 0",
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
            backgroundSize: "60px 60px",
            opacity: 0.08,
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

          {/* <Gear
            className="absolute left-1/2 bottom-[-8%] -translate-x-1/2 w-80 h-80 opacity-15 hidden md:block"
            color="#1e40af"
            innerRadius={25}
            rotation={scrollY * 0.15}
          /> */}
          <Oscilloscope
            className="absolute left-1/2 bottom-[-6%] -translate-x-1/2 w-72 h-52 opacity-20 hidden md:block"
            color="#3b82f6"
          />

          <Gear
            className="absolute right-1/3 top-10 w-40 h-40 opacity-30 hidden md:block"
            color="#3b82f6"
            innerRadius={14}
            rotation={-scrollY * 0.28}
          />

          {/* <Gear
            className="absolute left-20 top-2/3 w-48 h-48 opacity-25 hidden md:block"
            color="#0ea5e9"
            innerRadius={16}
            rotation={scrollY * 0.2}
          /> */}
         <ChipIcon
  className="absolute left-20 top-2/3 w-36 h-36 opacity-25 hidden md:block transform-translate-y-1/4"
  color="#0ea5e9"
 
/>

          {/* <Gear
            className="absolute right-24 bottom-32 w-36 h-36 opacity-30 hidden md:block"
            color="#60a5fa"
            innerRadius={13}
            rotation={-scrollY * 0.25}
          /> */}
          <MeterIcon
  className="absolute right-10 top-1/2 w-48 h-48 opacity-20 hidden md:block"
  color="#60a5fa"
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
      <div
        className={`absolute inset-0 ${
          isMobile
            ? "bg-gradient-radial from-transparent via-white/30 to-white/70"
            : "bg-gradient-radial from-transparent via-white/40 to-white/80"
        }`}
      />

      {/* Reduced vignette for mobile */}
      <div
        className={`absolute inset-0 ${
          isMobile
            ? "bg-gradient-to-t from-blue-50/20 via-transparent to-blue-50/20"
            : "bg-gradient-to-t from-blue-50/40 via-transparent to-blue-50/40"
        }`}
      />

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
              left: `${10 + ((i * 6) % 80)}%`,
              top: `${20 + ((i * 4) % 60)}%`,
              width: `${isMobile ? 1 : 2 + (i % 3)}px`,
              height: `${isMobile ? 1 : 2 + (i % 3)}px`,
              animation: `float ${8 + (i % 5)}s ease-in-out infinite`,
              animationDelay: `${i * 0.3}s`,
              // Disable animation if user prefers reduced motion
              ...(typeof window !== "undefined" &&
                window.matchMedia("(prefers-reduced-motion: reduce)")
                  .matches && {
                  animation: "none",
                }),
            }}
          />
        ))}
      </div>

      {/* Add CSS for float animation */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
          }
        }
        @keyframes waveMove {
          from {
            stroke-dashoffset: 0;
          }
          to {
            stroke-dashoffset: -44;
          }
        }

        .osc-wave {
          animation: waveMove 1.2s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default CombinedBackground;
