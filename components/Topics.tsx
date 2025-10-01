"use client";
import React, { useRef } from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import { VscArrowCircleRight, VscArrowCircleLeft } from "react-icons/vsc";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Topics = () => {
  const sliderRef = useRef<Slider>(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 6000,
  };

  const tracks = [
    {
      title: "Track 1: Smart Sensors and Intelligent Instrumentation",
      items: [
        "Smart Sensors and Transducers: Design, Fabrication, and Applications",
        "Sensor Fusion and Calibration for Intelligent Instrumentation",
        "3D Printing and Rapid Prototyping for Sensor Design",
        "Sensor Reliability, Fault Tolerance, and Metrology",
        "AI/ML for Intelligent Measurements and Decision Support"
      ]
    },
    {
      title: "Track 2: Sustainable IoT and Communication Technologies",
      items: [
        "Wireless, RFID, and IoT-Enabled Instrumentation",
        "Communication Protocols and Network Architectures",
        "IoT Applications in Smart and Precision Agriculture",
        "Cyber-Physical Security, Privacy, and Resilience in IoT Systems",
        "Standardization, Interoperability, and Sustainability in IoT Infrastructure"
      ]
    },
    {
      title: "Track 3: Advances in Intelligent Control, Robotics, and Mechatronics",
      items: [
        "Intelligent Control and Adaptive Systems",
        "Cyber-Physical Systems for Robotics and Industrial Automation",
        "Predictive Maintenance and Condition Monitoring in Mechatronics",
        "Drone Design, Navigation, and Autonomous Applications",
        "Digital Twins and Simulation-Based Instrumentation for Smart Manufacturing"
      ]
    },
    {
      title: "Track 4: Innovations in Microelectronics, Circuits, and Devices",
      items: [
        "Quantum Sensors, Emerging Devices, and Design Paradigms",
        "MEMS, NEMS, and Flexible Electronics",
        "Energy Harvesting and Low-Power Circuit Design",
        "Electronics for Biomedical Devices and Wearable Systems",
        "Microelectronic Solutions for Smart Agricultural Applications"
      ]
    },
    {
      title: "Track 5: Sustainable Technologies for Electrical Systems",
      items: [
        "Smart Grids and Renewable Energy Systems",
        "Condition Monitoring and Fault Diagnosis in Electrical Infrastructure",
        "Energy-Efficient Instrumentation for Water, Soil, and Irrigation Systems",
        "Sustainable Hardware-Software Co-Design for Power Applications",
        "Instrumentation for Electric Vehicle (EV) Charging and Storage"
      ]
    },
    {
      title: "Track 6: Applied Signal and Image Processing for Smart and Sustainable Instrumentation",
      items: [
        "Diagnostics and Personalized Healthcare Applications",
        "Agricultural and Environmental Monitoring",
        "AI/ML and Explainable AI for Sustainable Instrumentation",
        "Multimodal Fusion and Intelligent Feature Extraction",
        "Automation and Smart Manufacturing"
      ]
    }
  ];

  const goToNext = () => sliderRef.current?.slickNext();
  const goToPrev = () => sliderRef.current?.slickPrev();

  return (
    <div id="topics" className="bg-gradient-to-tr from-slate-50 via-white to-blue-50 shadow-xl  p-6 sm:p-10 md:p-16 lg:p-20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="relative inline-block">
            <h1 className="md:text-5xl text-3xl font-bold bg-gradient-to-r from-blue-900 via-blue-700 to-purple-600 bg-clip-text text-transparent mb-2">
              Conference Tracks
            </h1>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-900 via-blue-700 to-purple-600"></div>
          </div>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl">
            Explore the diverse research tracks of INSTCon 2026 covering cutting-edge topics in intelligent instrumentation and sustainable technologies.
          </p>
        </motion.div>

        <div className="relative">
          <Slider ref={sliderRef} {...settings}>
            {tracks.map((track, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="px-4"
              >
                <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 min-h-[400px] flex flex-col">
                  <motion.h3 
                    className="text-2xl font-bold bg-gradient-to-r from-blue-900 via-blue-700 to-purple-600 mb-6 bg-clip-text text-transparent"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4 }}
                    viewport={{ once: true }}
                  >
                    {track.title}
                  </motion.h3>
                  <ul className="space-y-3 pl-5">
                    {track.items.map((item, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.05, duration: 0.3 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-r from-blue-900 via-blue-700 to-purple-600 mb-6 bg-clip-text text-transparent text-lg md:text-xl font-medium relative pl-5 before:absolute before:left-0 before:top-3 before:w-2 before:h-2 before:bg-[#ffb803] before:rounded-full"
                      >
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </Slider>

          <button
            onClick={goToPrev}
            className="bg-gradient-to-r from-blue-900 via-blue-700 to-purple-600 mb-6 bg-clip-text text-transparent absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 p-2 rounded-full shadow-md transition-colors"
          >
            <VscArrowCircleLeft className="text-yellow-500" size={28} />
          </button>
          <button
            onClick={goToNext}
            className="bg-gradient-to-r from-blue-900 via-blue-700 to-purple-600 mb-6 bg-clip-text text-transparent absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 p-2 rounded-full shadow-md  transition-colors"
          >
            <VscArrowCircleRight className="text-yellow-500" size={28} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Topics;