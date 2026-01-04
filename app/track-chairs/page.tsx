"use client"
import React, { useState } from 'react'
import SecondBack from '../../components/SecondBack'
import Navbar from '../../components/Navbar';
import CombinedBackground from '../../components/CombinedBackground';
import { motion } from 'framer-motion';
import { trackChairs } from '../../components/RefineData';

const page = () => {
  const [selectedTrack, setSelectedTrack] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = (track) => {
    setSelectedTrack(track);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedTrack(null);
  };

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 ">
      <CombinedBackground/>
      {/* <Navbar/> */}
      
      {/* Header Section */}
      <div className="container mx-auto px-4 ">
   
      <div className="text-center mb-12">
  <div className="inline-block   rounded-lg px-6 py-4">
      <motion.h2
        className="text-4xl md:text-5xl backdrop-blur-sm font-extrabold text-center mb-4 bg-gradient-to-r  from-[#003366] to-[#0066cc] bg-clip-text text-transparent "
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Conference Tracks
      </motion.h2>
    <div className="w-24 h-1 bg-gradient-to-r from-[#003366] to-[#0066cc] mx-auto rounded-full"></div>
  </div>
</div>

        {/* Tracks Grid */}
        <div className="grid lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {trackChairs.map((track) => (
            <div 
              key={track.id}
              onClick={() => openModal(track)}
              className={`group cursor-pointer transform hover:scale-105 transition-all duration-300 ${
                track.id === 7 ? 'lg:col-start-1 lg:col-span-2 lg:max-w-md lg:mx-auto' : ''
              }`}
            >
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 hover:shadow-2xl transition-all duration-300 group-hover:border-blue-200 h-full flex flex-col">
                {/* Track Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-800 to-blue-700 rounded-xl flex items-center justify-center text-white font-bold text-lg">
                      {track.id}
                    </div>
                    <h2 className="text-lg font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
                      {track.title}
                    </h2>
                  </div>
                  <div className="text-gray-400 group-hover:text-blue-500 transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>

                {/* Sub-topics First - All shown in vertical list */}
                <div className="space-y-2 mb-4 flex-grow">
                  <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide">Track Sub-topics</h3>
                  <div className="space-y-2">
                    {track.subTopics.map((topic, index) => (
                      <div 
                        key={index}
                        className="w-full px-3 py-2 bg-blue-50 text-blue-600 text-sm rounded-lg border border-blue-100"
                      >
                        {topic}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Track Chairs - Show only first 4 */}
                <div className="pt-4 border-t border-gray-100">
                  <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-2">Track Chairs</h3>
                  <div className="space-y-1">
                    {track.chairs.slice(0, 4).map((chair, index) => (
                      <div key={index} className="text-sm text-gray-600 flex items-center w-full">
                        <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 flex-shrink-0"></span>
                        <span className="truncate">{chair}</span>
                      </div>
                    ))}
                    {track.chairs.length > 4 && (
                      <div className="text-sm text-gray-500 flex items-center w-full">
                        <span className="w-2 h-2 bg-gray-300 rounded-full mr-3 flex-shrink-0"></span>
                        <span>+{track.chairs.length - 4} more</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && selectedTrack && (
        <div className="fixed inset-0  bg-opacity-20 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-blue-800 to-blue-700 p-6 rounded-t-2xl">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 bg-white bg-opacity-20 rounded-xl flex items-center justify-center text-black font-bold text-xl">
                    {selectedTrack.id}
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-white">{selectedTrack.title}</h2>
                    <p className="text-blue-100 text-sm">Track Details</p>
                  </div>
                </div>
                <button
                  onClick={closeModal}
                  className="text-white hover:bg-amber-50 hover:text-red-500  hover:bg-opacity-20 rounded-full p-2 transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Modal Content - Sub-topics First */}
            <div className="p-6">
              {/* Sub-topics Section First */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                  <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                  Track Sub-topics
                </h3>
                <div className="grid gap-2">
                  {selectedTrack.subTopics.map((topic, index) => (
                    <div key={index} className="flex items-center p-3 border border-gray-200 rounded-lg hover:bg-blue-50 transition-colors">
                      <div className="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-xs font-bold mr-3">
                        {index + 1}
                      </div>
                      <span className="text-gray-700">{topic}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Track Chairs Section Second */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                  <svg className="w-5 h-5 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  Track Chairs
                </h3>
                <div className="grid gap-3">
                  {selectedTrack.chairs.map((chair, index) => (
                    <div key={index} className="flex items-center p-3 bg-gray-50 rounded-lg">
                      <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-bold mr-3">
                        {index + 1}
                      </div>
                      <span className="text-gray-700">{chair}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="border-t border-gray-200 p-4 bg-gray-50 rounded-b-2xl">
              <button
                onClick={closeModal}
                className="w-full py-3 bg-gradient-to-r from-blue-800 to-blue-700 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-101"
              >
                Close Details
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default page