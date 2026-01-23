"use client"
import { useState } from "react"
import Image from "next/image"
import { speakers } from "../../components/data"
import { motion } from "framer-motion"
import CombinedBackground from "../../components/CombinedBackground"
import { X } from "lucide-react"

export default function Committee() {
  const [selectedSpeaker, setSelectedSpeaker] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleSpeakerClick = (speaker) => {
    if (speaker.talkTitle || speaker.abstract) {
      setSelectedSpeaker(speaker)
      setIsModalOpen(true)
    }
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setTimeout(() => setSelectedSpeaker(null), 300)
  }

  return (
    <div className="min-h-screen py-10">
      <CombinedBackground/>
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col items-center justify-center py-8 mb-12">
          <motion.div
            className="relative inline-block" 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Blur background container */}
            <div className="absolute inset-0 backdrop-blur-sm rounded-3xl -z-10 px-12 py-8"></div>
            
            {/* Text content */}
            <h2 className="font-extrabold text-4xl md:text-5xl text-center leading-[1.25] bg-gradient-to-r from-[#003366] to-[#0066cc] bg-clip-text text-transparent px-12 py-8">
              Our Speakers
            </h2>
          </motion.div>
          
          {/* Accent line below - Moved closer */}
          <div className="w-32 h-2 bg-gradient-to-r from-[#003366] to-[#0066cc] rounded-full"></div>
        </div>

        {/* Speakers Grid - 4 per row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {speakers[0].members.map((speaker) => {
            const hasTalkInfo = speaker.talkTitle || speaker.abstract
            
            return (
              <div 
                key={speaker.id}
                onClick={() => hasTalkInfo && handleSpeakerClick(speaker)}
                className={`group bg-white rounded-lg overflow-hidden border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 ${
                  hasTalkInfo ? 'cursor-pointer' : 'cursor-default'
                }`}
              >
                {/* Image Container - Square aspect ratio */}
                <div className="relative w-full pt-[100%] overflow-hidden ">
                  <Image
                    src={speaker.imageUrl || "/placeholder.svg"}
                    alt={speaker.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    priority={speaker.id <= 4}
                  />
                  
                  {/* Indicator for clickable cards */}
                  {hasTalkInfo && (
                    <div className="absolute top-4 right-4 bg-blue-600 text-white p-2 rounded-full shadow-md">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors duration-300">
                    {speaker.name}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed font-medium">
                    {speaker.role}
                  </p>
                  
                  {/* Optional talk title if available */}
                  {speaker.talkTitle && (
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <p className="text-blue-600 text-xs font-semibold uppercase tracking-wide mb-1">
                        Talk Topic
                      </p>
                      <p className="text-gray-700 text-sm line-clamp-2">
                        {speaker.talkTitle}
                      </p>
                      <p className="text-blue-500 text-xs mt-1">
                        Click for details →
                      </p>
                    </div>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && selectedSpeaker && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          onClick={closeModal}
        >
          <div 
            className="bg-white rounded-xl shadow-2xl max-w-3xl w-full max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Fixed Header with Image */}
            <div className="flex-shrink-0">
              {/* Modal Header */}
              <div className="bg-white border-b border-gray-200 p-6 flex justify-between items-center">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">{selectedSpeaker.name}</h3>
                  <p className="text-gray-600">{selectedSpeaker.role}</p>
                </div>
                <button
                  onClick={closeModal}
                  className="p-2 hover:bg-gray-100 rounded-full"
                  aria-label="Close modal"
                >
                  <X className="w-6 h-6 text-gray-600" />
                </button>
              </div>

              {/* Fixed Larger Image */}
              <div className="relative w-full h-72 ">
                <Image
                  src={selectedSpeaker.imageUrl || "/placeholder.svg"}
                  alt={selectedSpeaker.name}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 768px"
                  priority
                />
              </div>
            </div>

            {/* Scrollable Content */}
            <div className="flex-grow overflow-y-auto p-6">
              {/* Talk Title */}
              {selectedSpeaker.talkTitle && (
                <div className="mb-6">
                  <h4 className="text-xl font-bold text-gray-800 mb-3">Talk Title</h4>
                  <div className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-600">
                    <p className="text-gray-800 font-medium text-lg">{selectedSpeaker.talkTitle}</p>
                  </div>
                </div>
              )}

              {/* Abstract */}
              {selectedSpeaker.abstract && (
                <div className="mb-6">
                  <h4 className="text-xl font-bold text-gray-800 mb-3">Abstract</h4>
                  <div className="p-6 bg-gray-50 rounded-lg">
                    <p className="text-gray-700 leading-relaxed text-lg whitespace-pre-line">
                      {selectedSpeaker.abstract}
                    </p>
                  </div>
                </div>
              )}

              {/* Close Button */}
              <button
                onClick={closeModal}
                className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors mt-4"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}