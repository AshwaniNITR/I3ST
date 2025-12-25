"use client";
import { motion, useAnimation, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import SecondBack from "./SecondBack";
import CombinedBackground from "./CombinedBackground";
import { CommitteesBackground } from "./Background";

const AboutUs = () => {
  const [isFlyerExpanded, setIsFlyerExpanded] = useState(false);
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

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
    if (window.innerWidth < 768) {
      window.open('/INSTCon_Flyer2.pdf', '_blank');
    } else {
      setIsFlyerExpanded(!isFlyerExpanded);
    }
  };

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isFlyerExpanded) {
        setIsFlyerExpanded(false);
      }
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isFlyerExpanded]);

const paragraphs = [
  `The IEEE Instrumentation and Measurement Society – Rourkela Chapter and IEEE Robotics and Automation Society Student Chapter – NIT Rourkela proudly announce the 1st IEEE International Conference on Instrumentation (INSTCon 2026), to be held at NIT Rourkela, India.`,
  `INSTCon 2026 aims to be a premier international forum on intelligent instrumentation, sustainable engineering, and advanced automation. It will bring together researchers, engineers, industry leaders, and policymakers to advance measurement, sensing, control, and automation for a sustainable future.`,
  `The conference will feature a selective technical program with peer-reviewed papers and invited talks, covering a broad spectrum of topics, including smart sensors, IoT-enabled instrumentation, intelligent control and robotics, microelectronics and quantum devices, signal processing, sustainable electrical systems, and mission-critical technologies for space and defense. It aims to highlight innovations in precision agriculture, healthcare diagnostics, industrial automation, environmental monitoring, renewable energy, and other applications where intelligent instrumentation drives societal impact.`,
  `Hosted in the vibrant academic environment of NIT Rourkela, INSTCon 2026 provides a platform to exchange ideas, foster interdisciplinary collaboration, and showcase cutting-edge research and technologies that combine scientific excellence with sustainability.`,
  `We look forward to welcoming participants to an inspiring event that merges innovation, technology, and societal responsibility.`,
];


  return (
    <div
      id="aboutus"
      className="bg-gradient-to-br p-6 sm:p-10 md:p-16 lg:p-20 overflow-hidden relative"
    >
      {/* <SecondBack /> */}
      
      <CombinedBackground />

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
        {/* Title */}
        <motion.div variants={itemVariants} className="mb-8 text-center">
          <div className="relative  inline-block bg-gray-100 rounded-full">
            <h1 className="md:text-5xl text-3xl font-bold bg-gradient-to-r from-blue-800 via-blue-700 to-blue-800 bg-clip-text text-transparent mb-2">
              About INSTCon 2026
            </h1>
            <motion.div
              className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-900 via-blue-700 to-purple-600"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1, delay: 0.3 }}
            />
          </div>
        </motion.div>

        {/* Content with wrapped flyer */}
        <div className="relative">
          {/* Flyer - floated right on desktop, hidden on mobile */}
          {!isFlyerExpanded && (
            <div
              className="hidden md:block md:float-right md:ml-8 md:mb-6 md:w-[420px] lg:w-[480px] relative shape-outside"
              style={{ shapeOutside: 'margin-box' }}
            >
              <div
                className="relative w-full h-[600px] lg:h-[700px] rounded-2xl shadow-xl cursor-pointer overflow-hidden group bg-white border border-gray-200 hover:shadow-2xl transition-all duration-300"
                onClick={handleFlyerClick}
              >
                <div className="w-full h-full flex flex-col">
                  <div className="absolute top-4 left-4 z-10 bg-white/95 backdrop-blur-sm rounded-xl px-4 py-2 shadow-lg border border-gray-100">
                    <span className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                      <svg className="w-4 h-4 text-[#ffb803]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                      </svg>
                      Conference Flyer
                    </span>
                  </div>

                  <div
                    style={{ backgroundImage: 'url(/newFlyer.png)', backgroundSize: 'contain' }}
                    className="w-full h-full bg-gray-50 flex items-center justify-center p-4"
                  >
                    <div className="text-center">
                      <div className="w-16 h-16 bg-[#ffb803] rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                        </svg>
                      </div>

                      <div className="bg-[#ffb803] text-white px-6 py-3 rounded-xl font-semibold flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all duration-300 mx-auto w-fit">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                        <span>View Full Flyer</span>
                      </div>
                    </div>
                  </div>
                   

                  <div
                    style={{ backgroundImage: 'url(/newFlyer.png)', backgroundSize: 'contain' }}
                    className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-all duration-300 rounded-2xl flex items-center justify-center"
                  >
                    <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 shadow-2xl border border-gray-100">
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
            </div>
          )}

          {/* Text content that wraps around flyer */}
          <div className="text-content bg-white/80 rounded-xl p-10 shadow-xl ">
            {paragraphs.map((paragraph, index) => (
              <motion.p
                key={index}
                className="text-md font-medium  text-gray-700 mb-6 leading-relaxed text-justify"
                variants={itemVariants}
                custom={index}
              >
                {paragraph}
              </motion.p>
            ))}

            {/* Mobile flyer - shown after text on mobile */}
            <div className="md:hidden mb-8 clear-both">
              <div
                className="relative w-full h-[500px] rounded-2xl shadow-xl cursor-pointer overflow-hidden bg-white border border-gray-200"
                onClick={handleFlyerClick}
              >
                <div className="w-full h-full flex flex-col">
                  <div className="absolute top-4 left-4 z-10 bg-white/95 backdrop-blur-sm rounded-xl px-4 py-2 shadow-lg border border-gray-100">
                    <span className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                      <svg className="w-4 h-4 text-[#ffb803]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                      </svg>
                      Conference Flyer
                    </span>
                  </div>

                  <div
                    style={{ backgroundImage: 'url(/newFlyer.png)', backgroundSize: 'contain' }}
                    className="w-full h-full bg-gray-50 flex items-center justify-center p-4"
                  >
                    <div className="text-center">
                      <div className="w-16 h-16 bg-[#ffb803] rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                        </svg>
                      </div>

                      <div className="flex flex-col gap-3 justify-center">
                        <div className="bg-[#ffb803] text-white px-6 py-3 rounded-xl font-semibold flex items-center justify-center gap-2 shadow-lg">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                          View Flyer
                        </div>

                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            window.open('/INSTCon_Flyer2.pdf', '_blank');
                          }}
                          className="text-white px-6 py-3 rounded-xl font-semibold flex items-center justify-center gap-2 bg-yellow-400 transition-all duration-300"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                          </svg>
                          Download
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-sm text-gray-500 font-medium text-center mt-4">
                Tap above to view the conference flyer
              </p>
            </div>

            <div className="clear-both">
              <Link href="/about">
                <Button className="relative bg-gradient-to-r from-blue-900 to-blue-700 hover:from-blue-800 hover:to-blue-600 text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-blue-800/50">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Expanded Flyer Modal */}
      {isFlyerExpanded && (
        <div className="fixed inset-0 z-50 hidden md:flex items-center justify-center p-4">
          <div
            className="bg-white rounded-2xl shadow-2xl w-full max-w-6xl h-[95vh] flex flex-col cursor-default border border-gray-200 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
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
                className="bg-red-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-200 hover:scale-105 flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                Close
              </button>
            </div>

            <div className="flex-1 w-full h-full bg-gray-50">
              <iframe
                src="/INSTCon_Flyer2.pdf"
                className="w-full h-full"
                title="INSTCon 2026 Conference Flyer"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AboutUs;