"use client"

import { useState, useEffect, useRef } from "react"

const IMPORTANT_DATES = [
  {
    id: 1,
    title: "Paper Submission Starts",
    date: new Date("2025-12-01"),
  },
  {
    id: 2,
    title: "Paper Submission Ends",
    date: new Date("2026-02-28"),
  },
  {
    id: 3,
    title: "Notification of Acceptance",
    date: new Date("2026-05-31"),
  },
]

export default function ImportantDatesSlider() {
  const [isPaused, setIsPaused] = useState(false)
  const sliderRef = useRef<HTMLDivElement>(null)

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    })
  }
  const getDaysRemaining = (date: Date) => {
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    const diffTime = date.getTime() - today.getTime()
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))

    if (diffDays < 0) return "Passed"
    if (diffDays === 0) return "Today"
    if (diffDays === 1) return "Tomorrow"
    return `${diffDays} days`
  }
  const getStatusColor = (date: Date) => {
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    const diffTime = date.getTime() - today.getTime()
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))

    if (diffDays < 0) return "bg-red-500"
    if (diffDays <= 3) return "bg-amber-500"
    return "bg-green-500"
  }

  useEffect(() => {
    if (!sliderRef.current) return

    if (isPaused) {
      sliderRef.current.style.animationPlayState = "paused"
    } else {
      sliderRef.current.style.animationPlayState = "running"
    }
  }, [isPaused])
  const calculateAnimationDuration = () => {
    return 10 + IMPORTANT_DATES.length * 2
  }

  const allItems = [...IMPORTANT_DATES, ...IMPORTANT_DATES]

  return (
    <div
      className="relative w-full bg-white  shadow-md overflow-hidden rounded-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="bg-blue-900 py-3 px-4 flex justify-center items-center">
        <h2 className="text-white text-xl font-bold text-center">Important Dates</h2>
      </div>
    
      <div className="relative overflow-hidden py-4">
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
          {allItems.map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className="flex-shrink-0 min-w-[200px] sm:min-w-[250px] md:min-w-[300px] p-3 mx-2 bg-blue-50 rounded-md border border-blue-100"
              style={{
                WebkitBackfaceVisibility: "hidden",
                WebkitPerspective: 1000,
              }}
            >
              <div className="flex justify-between items-start mb-2">
                <h3 className={`text-lg font-medium text-blue-800 truncate`}>{item.title}</h3>
                <span className={`text-xs px-2 py-1 rounded-full text-white ${getStatusColor(item.date)}`}>
                  {getDaysRemaining(item.date===new Date("2025-04-30")?new Date("2025-05-10"):item.date)}
                </span>
              </div>
              <p className={`text-blue-600 font-medium`}>
                {(() => {
                  switch(item.title){
                    case "Paper Submission Ends":
                      return "30 Apr, 2025";
                    case "Camera-ready Submission":
                      return "20 Jun, 2025";
                    default:
                      return formatDate(item.date);
                  }
                })()}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
