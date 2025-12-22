"use client"
import React, { useState } from 'react'
import SecondBack from '../../components/SecondBack'
import Navbar from '../../components/Navbar';
import CombinedBackground from '../../components/CombinedBackground';
import { motion } from 'framer-motion';

const page = () => {
  const [selectedTrack, setSelectedTrack] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

const trackChairs = [
  {
    id: 1,
    title: "Smart Sensors and Intelligent Instrumentation",
    chairs: [
      "Siraz Sohail, NIT Trichy",
      "Pritam Paral, IIEST Sibpur",
      "Arunagshu Ghosh, NIT Patna",
      "Madhurima Chattopadhyay, HIT Kolkata",
      "Rashmi Achla Minz, NIT Rourkela",
      "Debangana Das, NIT Agartala",
      "M. N. Muralidharan, CMET Thrissur"
    ],
    subTopics: [
      "Smart Sensors: Design, Fabrication, and Applications",
      "Sensor Fusion and Calibration",
      "3D Printing and Rapid Prototyping",
      "Optical Sensors and Photonic Instrumentation",
      "Sensor Reliability, Fault Tolerance, and Metrology",
      "AI/ML for Measurements and Decision Support"
    ]
  },
  {
    id: 2,
    title: "Sustainable IoT and Communication Technologies",
    chairs: [
      "Siddharth Deshmukh, NIT Raipur",
      "Sadanand Behera, NIT Rourkela",
      "R. Prasad Naik, NIT Rourkela",
      "Basabdatta Palit, IIEST",
      "Ranjay Hazra, NIT Silchar"
    ],
    subTopics: [
      "Wireless, RFID, and IoT-Enabled Instrumentation",
      "Communication Protocols and Network Architectures",
      "IoT in Mining and Precision Agriculture",
      "Cyber-Physical Security, Privacy, and Resilience",
      "Standardization, Interoperability, and Sustainability",
      "RF, 5G and Beyond"
    ]
  },
  {
    id: 3,
    title: "Advances in Intelligent Control, Robotics, and Mechatronics",
    chairs: [
      "Munmun Khanra, NIT Silchar",
      "Manas Kumar Bera, NIT Rourkela",
      "Krishanu Nath, NIT Agartala",
      "Surajit Panja, IIIT Guwahati",
      "Madhab Chandra Tripathy, OUTR Bhubaneswar",
      "Abhisek Choudhary, CMET Thrissur"
    ],
    subTopics: [
      "Intelligent Control and Adaptive Systems",
      "Instrumentation and Control for Process Industries",
      "Cyber-Physical Systems, Robotics and Industrial Automation",
      "Predictive Maintenance and Condition Monitoring",
      "Drone Design, Navigation, and Control",
      "Digital Twins, HMI and Smart Manufacturing"
    ]
  },
  {
    id: 4,
    title: "Innovations in Microelectronics, Circuits, and Devices",
    chairs: [
      "Debasis Mandal, IIT Kharagpur",
      "Santanu Sarkar, NIT Rourkela",
      "Priyanka Saha, STCET Kolkata",
      "Sounak Roy, IIIT Guwahati",
      "Aditya Kumar Hota, VSSUT Burla"
    ],
    subTopics: [
      "Quantum Sensors, Emerging Devices, and Design Paradigms",
      "MEMS, NEMS, Flexible Electronics and Energy Harvesting",
      "Sensor Interfacing Circuits and Low-Power Circuit Design",
      "Biomedical Devices and Wearable Systems",
      "Bio-inspired and Neuromorphic Circuits"
    ]
  },
  {
    id: 5,
    title: "Sustainable Technologies for Electrical Systems",
    chairs: [
      "Sovan Dalai, Jadavpur University",
      "Arijit Guha, NIT Rourkela",
      "Amit Mallick, VSSUT Burla",
      "Dr. Rabindra Behera, IGIT Sarang"
    ],
    subTopics: [
      "Smart Grids and Renewable Energy Systems",
      "Condition Monitoring and Fault Diagnosis",
      "Energy-Efficient Irrigation Systems",
      "Hardware-Software Co-Design for Power Systems",
      "EV Charging, Storage and Battery Management"
    ]
  },
  {
    id: 6,
    title: "Applied Signal and Image Processing",
    chairs: [
      "Shihabudheen KV, NIT Calicut",
      "Samiran Das, IISER Bhopal",
      "Biswarup Ganguly, NIT Silchar",
      "Radhagayathri Udhayakumar, Amrita V. Vidyapeetham",
      "Biswajit Kar, CIT Kokrajhar"
    ],
    subTopics: [
      "Diagnostics and Personalized Healthcare",
      "Pollution and Environmental Monitoring",
      "Multimodal Fusion, AI/ML and XAI",
      "Automation and Smart Manufacturing",
      "Computer Vision, Speech and Audio Processing"
    ]
  },
  {
    id: 7,
    title: "Instrumentation for Defense and Space Applications",
    chairs: [
      "L. P. Roy, NIT Rourkela"
    ],
    subTopics: [
      "Space Instrumentation, Sensors, and Payload Systems",
      "Remote Sensing, Navigation, Satellite Communication and Microwave Systems",
      "Advanced Materials, Devices, and Energy Solutions for Defense",
      "Guidance, Navigation, and Control (GNC) Systems",
      "Simulation, Digital Twins, and Validation of Mission-Critical Systems"
    ]
  }
];


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
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 hover:shadow-2xl transition-all duration-300 group-hover:border-blue-200">
                {/* Track Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold text-lg">
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

                {/* Track Chairs */}
                <div className="space-y-2">
                  <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide">Track Chairs</h3>
                  <ul className="space-y-1">
                    {track.chairs.map((chair, index) => (
                      <li key={index} className="text-sm text-gray-600 flex items-center">
                        <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                        {chair}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Quick Preview */}
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <div className="flex flex-wrap gap-1">
                    {track.subTopics.slice(0, 3).map((topic, index) => (
                      <span 
                        key={index}
                        className="px-2 py-1 bg-blue-50 text-blue-600 text-xs rounded-full"
                      >
                        {topic}
                      </span>
                    ))}
                    {track.subTopics.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-500 text-xs rounded-full">
                        +{track.subTopics.length - 3} more
                      </span>
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
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 rounded-t-2xl">
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

            {/* Modal Content */}
            <div className="p-6">
              {/* Track Chairs Section */}
              <div className="mb-8">
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

              {/* Sub-topics Section */}
              <div>
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
            </div>

            {/* Modal Footer */}
            <div className="border-t border-gray-200 p-4 bg-gray-50 rounded-b-2xl">
              <button
                onClick={closeModal}
                className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105"
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