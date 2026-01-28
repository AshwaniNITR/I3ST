"use client"
import { useState } from "react"
import Image from "next/image"
import { speakers } from "../../components/data"
import { motion, AnimatePresence,easeIn,easeInOut,easeOut, Variants } from "framer-motion"
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

  // Animation variants for speaker cards
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 20 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: easeOut
      }
    }
  }

  // Modal animation variants
  const modalOverlayVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: easeInOut
      }
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.2,
        ease: easeInOut
      }
    }
  }

const modalContentVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.9,
    y: 20,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 25,
      stiffness: 300,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    y: 10,
    transition: {
      type: "spring",
      damping: 30,
      stiffness: 400,
    },
  },
}

  return (
    <div className="min-h-screen py-10">
      <CombinedBackground/>
      <div className="container mx-auto px-4">
        {/* Professional IEEE-style Header */}
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
            <h2 className="font-extrabold text-4xl md:text-5xl text-center leading-[1.25] bg-gradient-to-r from-[#003366] to-[#0066cc] bg-clip-text text-transparent px-6 py-4">
              Our Speakers
            </h2>
          </motion.div>
          
          {/* Accent line below - Moved closer */}
          <div className="w-32 h-2 bg-gradient-to-r from-[#003366] to-[#0066cc] rounded-full"></div>
        </div>

        {/* Professional Speaker Cards Grid with Staggered Animation */}
        <motion.div 
          className="flex flex-wrap justify-center gap-6 max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {speakers[0].members.map((speaker, index) => {
            const hasTalkInfo = speaker.talkTitle || speaker.abstract
            
            return (
              <motion.div 
                key={speaker.id}
                variants={cardVariants}
                custom={index}
                onClick={() => hasTalkInfo && handleSpeakerClick(speaker)}
                className={`w-full sm:w-[45%] lg:w-[45%] xl:w-[30%] group  bg-white rounded-lg overflow-hidden border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 ${
                  hasTalkInfo ? 'cursor-pointer hover:border-blue-300' : 'cursor-default'
                }`}
                whileHover={{ 
                  y: -5,
                  transition: { duration: 0.2 }
                }}
              >
                {/* Professional Image Container */}
                <div className="relative w-full pt-[100%] bg-gray-50">
                  <Image
                    src={speaker.imageUrl || "/placeholder.svg"}
                    alt={speaker.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    priority={speaker.id <= 4}
                  />
                  
                  {/* Professional indicator for clickable cards */}
                  {hasTalkInfo && (
                    <div className="absolute top-3 right-3 bg-blue-600 text-white text-xs font-semibold px-2 py-1 rounded shadow-md">
                      VIEW TALK
                    </div>
                  )}
                </div>

                {/* Professional Content */}
                <div className="p-5">
                  <h3 className="text-lg font-bold text-gray-900 mb-1">
                    {speaker.name}
                  </h3>
                  <p className="text-gray-600 font-bold text-sm mb-3 ">
                    {speaker.role}
                  </p>
                  
                  {/* Talk Title Section - Professional styling */}
                  {speaker.talkTitle && (
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        <span className="text-blue-700 text-xs font-semibold uppercase tracking-wide">
                          Title Of Talk
                        </span>
                      </div>
                      <p className="text-gray-800 text-sm leading-relaxed line-clamp-2">
                        {speaker.talkTitle}
                      </p>
                      {hasTalkInfo && (
                        <p className="text-blue-600 text-xs font-medium mt-2 flex items-center gap-1">
                          Click for abstract 
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </p>
                      )}
                    </div>
                  )}
                  
                  {/* If no talk title but has abstract */}
                  {!speaker.talkTitle && speaker.abstract && hasTalkInfo && (
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <p className="text-blue-600 text-xs font-medium flex items-center gap-1">
                        Click to view abstract
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </p>
                    </div>
                  )}
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>

      {/* Professional Modal with Animated Entrance */}
      <AnimatePresence>
        {isModalOpen && selectedSpeaker && (
          <motion.div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            variants={modalOverlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={closeModal}
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}
          >
            <motion.div 
              className="bg-white rounded-lg shadow-2xl max-w-3xl w-full max-h-[90vh] flex flex-col overflow-hidden"
              variants={modalContentVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="bg-gradient-to-r from-[#003366] to-[#0066cc] text-white p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-2xl font-extrabold">{selectedSpeaker.name}</h3>
                    <h4 className="text-xl font-bold mt-1">{selectedSpeaker.role}</h4>
                  </div>
                  <button
                    onClick={closeModal}
                    className="p-2 hover:bg-white/20 rounded-full transition-colors"
                    aria-label="Close modal"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
              </div>

              {/* Modal Content */}
              <div className="flex-grow overflow-y-auto">
                {/* Speaker Image - Professional layout */}
                <div className="p-6 border-b border-gray-200">
                  <motion.div 
                    className="relative w-48 h-48 mx-auto rounded-lg overflow-hidden border-2 border-gray-100 shadow-md"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.1, duration: 0.3, ease: easeOut }}
                  >
                    <Image
                      src={selectedSpeaker.imageUrl || "/placeholder.svg"}
                      alt={selectedSpeaker.name}
                      fill
                      className="object-cover"
                      sizes="200px"
                      priority
                    />
                  </motion.div>
                </div>

                {/* Content Area */}
                <div className="p-6">
                  {/* Talk Title Section */}
                  {selectedSpeaker.talkTitle && (
                    <motion.div 
                      className="mb-6"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2, duration: 0.3, ease: easeOut }}
                    >
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                        <h4 className="text-lg font-bold text-gray-900">Presentation Title</h4>
                      </div>
                      <div className="p-4 bg-blue-50 border border-blue-100 rounded-lg">
                        <p className="text-gray-800 font-semibold">{selectedSpeaker.talkTitle}</p>
                      </div>
                    </motion.div>
                  )}

                  {/* Abstract Section */}
                  {selectedSpeaker.abstract && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3, duration: 0.3, ease: easeOut }}
                    >
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                        <h4 className="text-lg font-bold text-gray-900">Abstract</h4>
                      </div>
                      <div className="p-5 bg-gray-50 border border-gray-200 rounded-lg">
                        <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                          {selectedSpeaker.abstract}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </div>
              </div>

              {/* Modal Footer */}
              <div className="border-t border-gray-200 p-4 bg-gray-50">
                <button
                  onClick={closeModal}
                  className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Close Details
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}