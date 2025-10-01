"use client";
import { motion, useAnimation, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "./ui/button";

const AboutUs = () => {
  const [isFlyerExpanded, setIsFlyerExpanded] = useState(false);
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  // Container animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        when: "beforeChildren",
      },
    },
  };

  // Text item animation variants
  const itemVariants: Variants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.16, 0.77, 0.47, 0.97],
      },
    },
  };

  const handleFlyerClick = () => {
    // On mobile, open in new tab. On desktop, expand modal.
    if (window.innerWidth < 768) {
      window.open('/INSTCon_Flyer.pdf', '_blank');
    } else {
      setIsFlyerExpanded(!isFlyerExpanded);
    }
  };

  // Trigger animations when in view
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  // Close flyer when pressing escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isFlyerExpanded) {
        setIsFlyerExpanded(false);
      }
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isFlyerExpanded]);

  return (
    <div
      id="aboutus"
      className="bg-gradient-to-br from-slate-50 via-white to-blue-50  p-6 sm:p-10 md:p-16 lg:p-20 overflow-hidden relative"
    >
      {/* Backdrop blur overlay - only on desktop when expanded */}
      {isFlyerExpanded && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-md z-40 hidden md:block"
          onClick={() => setIsFlyerExpanded(false)}
        />
      )}

      <motion.div
        ref={ref}
        className="max-w-7xl mx-auto relative"
        initial="hidden"
        animate={controls}
        variants={containerVariants}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 relative">
          {/* Left Column - Text Content */}
          <motion.div
            className="relative z-20"
          >
            <motion.div variants={itemVariants}>
              <div className="relative inline-block mb-8">
                <h1 className="md:text-5xl text-3xl font-bold bg-gradient-to-r from-blue-900 via-blue-700 to-purple-600 bg-clip-text text-transparent mb-2">
                  About INSTCon 2026
                </h1>
                <motion.div
                  className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-900 via-blue-700 to-purple-600 "
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1, delay: 0.3 }}
                />
              </div>
            </motion.div>

            {[
              `It is with great pride that the IEEE Instrumentation and Measurement Society – Rourkela Chapter and the IEEE Robotics and Automation Society Student Chapter – NIT Rourkela announce the 1st IEEE International Conference on Instrumentation (INSTCon 2026), to be held at the National Institute of Technology, Rourkela, India.`,
              `INSTCon 2026 is a premier international forum dedicated to advancements in intelligent instrumentation, sustainable engineering solutions, and cutting-edge automation technologies. The conference aims to bring together researchers, engineers, scientists, academicians, industry leaders, entrepreneurs, and policymakers from across the globe to advance the frontiers of measurement, sensing, control, and automation for a sustainable future.`,
              `With rapid advancements in smart sensing, intelligent control, and data-driven decision making, the conference will provide a vibrant platform to exchange ideas, showcase cutting-edge developments, and explore solutions that bridge science, engineering, and societal needs.`,
              `Hosted in the vibrant academic and research environment of NIT Rourkela, INSTCon 2026 will feature a highly selective technical program, including peer-reviewed papers and invited contributions from renowned experts in instrumentation, measurement, robotics, automation, and sustainable systems. Technically sponsored by the IEEE Instrumentation & Measurement Society – Rourkela Chapter and IEEE Robotics & Automation Society Student Branch Chapter – NIT Rourkela, the conference aims to foster collaboration across diverse domains such as precision agriculture, healthcare diagnostics, industrial automation, environmental monitoring, and renewable energy systems.`,
              `By integrating advancements in AI/ML, quantum devices, cyber-physical security, and sustainable hardware design, the event will serve as a showcase of technical excellence and as a call to action for academia, industry, and policymakers to accelerate the adoption of intelligent instrumentation as a cornerstone of global sustainability initiatives.`,
              `With sustainability as its driving vision, INSTCon 2026 will serve as a global platform to exchange knowledge, foster interdisciplinary collaborations, and showcase innovations that can accelerate progress toward a more sustainable future. We look forward to welcoming you to NIT Rourkela for an intellectually stimulating and inspiring event that merges technological excellence with societal responsibility.`,
            ].map((paragraph, index) => (
              <motion.p
                key={index}
                className="text-md font-medium text-gray-700 mb-6 leading-relaxed text-justify"
                variants={itemVariants}
                custom={index}
              >
                {paragraph.split(/(<strong>.*?<\/strong>)/g).map((text, i) => {
                  if (text.startsWith("<strong>")) {
                    const content = text.replace(/<\/?strong>/g, "");
                    return (
                      <span key={i} className="font-bold text-gray-900">
                        {content}
                      </span>
                    );
                  }
                  return text;
                })}
              </motion.p>
            ))}
            <Link href="/about">
              <Button className="relative bg-gradient-to-r from-blue-900 to-blue-700 hover:from-blue-800 hover:to-blue-600 text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-blue-800/50">
                Learn More
              </Button>
            </Link>
          </motion.div>

          {/* Right Column - Flyer */}
          <div className="flex flex-col items-center gap-6 lg:mt-8 relative">
            {/* Normal Flyer */}
            {!isFlyerExpanded && (
              <div 
                className="relative w-full h-[300px] sm:h-[400px] md:h-[600px] rounded-2xl shadow-xl cursor-pointer overflow-hidden group bg-white border border-gray-200 hover:shadow-2xl transition-all duration-300"
                onClick={handleFlyerClick}
              >
                {/* PDF Preview Container */}
                <div className="w-full h-full flex flex-col">
                  {/* Header Badge */}
                  <div className="absolute top-4 left-4 z-10 bg-white/95 backdrop-blur-sm rounded-xl px-4 py-2 shadow-lg border border-gray-100">
                    <span className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                      <svg className="w-4 h-4 text-[#ffb803]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                      </svg>
                      Conference Flyer
                    </span>
                  </div>
                  
                  {/* PDF Preview - Optimized for mobile */}
                  <div
                   style={{backgroundImage: 'url(/flyerprev.png)', backgroundSize: 'cover'}}
                   className="w-full h-full bg-gray-50 flex items-center justify-center p-4">
                    <div className="text-center">
                      {/* PDF Icon */}
                      <div className="w-16 h-16 bg-[#ffb803] rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                        </svg>
                      </div>
                      
                      {/* Title */}
                      
                      {/* Action Button */}
                      <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <div className="bg-[#ffb803] text-white px-6 py-3 rounded-xl font-semibold flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all duration-300">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                          <span className="md:hidden">View Flyer</span>
                          <span className="hidden md:inline">View Full Flyer</span>
                        </div>
                        
                        {/* Download option for mobile */}
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            window.open('/INSTCon_Flyer.pdf', '_blank');
                          }}
                          className="border-2 text-white border-gray-300 text-gray-700 px-6 py-3 rounded-xl font-semibold flex items-center justify-center gap-2 bg-yellow-400 transition-all duration-300 md:hidden"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                          </svg>
                          Download
                        </button>
                      </div>
                      
                      {/* Info text */}
                    
                    </div>
                  </div>

                  {/* Desktop hover overlay */}
                  <div
                   style={{backgroundImage: 'url(/flyerprev.png)', backgroundSize: 'cover'}}
                   className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-all duration-300 rounded-2xl hidden md:flex items-center justify-center">
                    <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 shadow-2xl border border-gray-100">
                      <div className="text-center">
                        <div className="w-12 h-12 bg-[#ffb803] rounded-full flex items-center justify-center mx-auto mb-3">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m0 0l3-3m-3 3l-3-3" />
                          </svg>
                        </div>
                        <p className="font-semibold text-gray-800">Click to expand</p>
                        <p className="text-sm text-gray-600 mt-1">View full screen preview</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Expanded Flyer - Modal (Desktop only) */}
            {isFlyerExpanded && (
              <div className="fixed inset-0 z-50 hidden md:flex items-center justify-center p-4">
                <div 
                  className="bg-white rounded-2xl shadow-2xl w-full max-w-6xl h-[95vh] flex flex-col cursor-default border border-gray-200 overflow-hidden"
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* Modern PDF Header */}
                  <div className="flex justify-between items-center p-6 border-b border-gray-100 bg-gradient-to-r from-gray-50 to-white rounded-t-2xl">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-[#ffb803] rounded-lg flex items-center justify-center">
                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">INSTCon 2026 Conference Flyer</h3>
                        <p className="text-sm text-gray-600">Official conference announcement</p>
                      </div>
                    </div>
                    <button
                      onClick={() => setIsFlyerExpanded(false)}
                      className="bg-red-600  text-white px-6 py-3 rounded-xl font-semibold transition-all duration-200 hover:scale-105 flex items-center gap-2"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      Close
                    </button>
                  </div>
                  
                  {/* PDF Viewer */}
                  <div className="flex-1 w-full h-full bg-gray-50">
                    <iframe
                      src="/INSTCon_Flyer.pdf"
                      className="w-full h-full"
                      title="INSTCon 2026 Conference Flyer"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Additional Info */}
            {!isFlyerExpanded && (
              <motion.div
                className="text-center text-gray-600"
                variants={itemVariants}
              >
                <p className="text-sm text-gray-500 font-medium">
                  {typeof window !== 'undefined' && window.innerWidth < 768 
                    ? "Tap above to view the conference flyer" 
                    : "Click the flyer to view in full screen"
                  }
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutUs;