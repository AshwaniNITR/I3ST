"use client";
import React from "react";
import Navbar from "./Navbar";

// Simple Carousel Component (unchanged)
const SimpleCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full h-full overflow-hidden">
      {images.map((src, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={src}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-cover object-center"
          />
        </div>
      ))}
    </div>
  );
};

const Hero = () => {
  const images = [
    "/nitfrontgate3.jpg",
    "/nitmainbuilding2.jpg",
    "/la1.jpg",
    "/ecdept.jpg",
  ];

  // Images for the new section
  const bottomImages = [
    "/ieeekolk-removebg-preview.png",
    "/WomenInEng-removebg-preview.png",
    "/ieeerklsub-removebg-preview.png",
    "https://res.cloudinary.com/dd11bvhdi/image/upload/v1741620262/logo_I3ST_camy9q.jpg",
  ];

  return (
    <div id="home" className="relative overflow-hidden">
      <Navbar />

      {/* Desktop Layout */}
      <div className="hidden lg:block">
        {/* Main content row - Carousel and Info side by side */}
        <div className="flex h-[calc(100vh-4rem)]">
          {/* Left side - Carousel - 60% width */}
          <div className="w-[65%] h-full">
            <SimpleCarousel images={images} />
          </div>

          {/* Right side - Content - 40% width */}
          <section className="relative w-[35%] h-full bg-gradient-to-br ">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute top-20 right-10 w-72 h-72  rounded-full blur-3xl animate-pulse"></div>
              <div
                className="absolute bottom-20 left-10 w-96 h-96  rounded-full blur-3xl animate-pulse"
                style={{ animationDelay: "1s" }}
              ></div>
            </div>

            {/* Content Section - Adjusted spacing to push content down */}
            <div className="flex flex-col justify-start items-center w-full h-full py-8 px-6 relative z-10 mt-4">
              {/* NIT Logo - Enlarged and pushed down more */}
              <div className="flex justify-center items-center w-full mb-8 mt-6">
                <div className="relative">
                  <div className="relative w-48 h-48 rounded-2xl  transition-all duration-500 overflow-hidden">
                    <img
                      src="/nitlogo-removebg-preview.png"
                      alt="NIT Rourkela Logo"
                      className="w-full h-full object-contain "
                    />
                  </div>
                </div>
              </div>

              {/* Text content - Adjusted spacing */}
              <div className="text-center w-full px-6 space-y-6">
                <div className="space-y-4">
                  <p className="text-xl lg:text-2xl text-blue-900 font-extrabold leading-tight tracking-tight">
                    1st IEEE International Conference on Instrumentation
                  </p>
                  <h4 className="text-5xl lg:text-6xl font-black bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 bg-clip-text text-transparent leading-none animate-fade-in">
                    INSTCon 2026
                  </h4>
                </div>

                {/* Date badge */}
                <div className="inline-block relative group">
                  <div className="relative bg-gradient-to-r backdrop-blur-sm px-8 py-3 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg">
                    <div className="flex items-center justify-center gap-3">
                      <svg
                        className="w-6 h-6 text-blue-700"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2.5"
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        ></path>
                      </svg>
                      <span className="font-black text-xl bg-gradient-to-r from-blue-700 to-purple-700 bg-clip-text text-transparent tracking-wider">
                        JULY 24-25, 2026
                      </span>
                    </div>
                  </div>
                </div>

                {/* Location - Reduced margin to prevent overlap with bottom logos */}
                <div className="relative group mt-2 space-y-2">
                  <div className="text-left max-w-md mx-auto space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-700 rounded-xl flex items-center justify-center shadow-lg">
                        <svg
                          className="w-5 h-5 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2.5"
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          ></path>
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2.5"
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          ></path>
                        </svg>
                      </div>
                      <div className="text-left">
                        <p className="font-extrabold text-gray-900 text-lg mb-1 leading-tight tracking-tight">
                          Department of Electronics and Communication
                          Engineering
                        </p>
                        <p className="font-bold text-gray-700 leading-relaxed">
                          National Institute of Technology, Rourkela
                          <br />
                          Rourkela, Odisha, India - 769008
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* 4 Images Section - Enlarged logos with consistent size */}
        <div className="w-full bg-gradient-to-br  py-8">
          <div className="w-full px-12">
            <div className="flex justify-center items-center gap-8 w-full">
              {bottomImages.map((src, index) => (
                <div key={index} className="relative group flex-1">
                  {/* Clean logos without container styling */}
                  <div className="relative overflow-hidden flex justify-center items-center h-36">
                    <img
                      src={src}
                      alt={`Partner ${index + 1}`}
                      className="h-full w-auto object-contain max-h-28 transition-all duration-300 group-hover:scale-110"
                      style={{
                        maxWidth: "100%",
                        objectFit: "contain",
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Add this after the 4 Images Section in the desktop layout */}
        <div className="w-full  py-8">
          <div className="relative overflow-hidden rounded-2xl mx-auto max-w-4xl">
            {/* Animated gradient background */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 opacity-10"></div>

            {/* Pulsing animation container */}
            <div className="relative bg-gradient-to-br backdrop-blur-lg border-2 border-transparent bg-clip-padding rounded-2xl p-1 shadow-xl">
              <div className="relative bg-gradient-to-r from-blue-50 via-white to-purple-50 rounded-xl p-8 text-center">
                {/* Animated badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full animate-pulse mb-6">
                  <div className="relative flex h-3 w-3">
                    <div className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75"></div>
                    <div className="relative inline-flex h-3 w-3 rounded-full bg-white"></div>
                  </div>
                  <span className="font-bold text-white text-sm tracking-wider">
                    LIVE NOW
                  </span>
                </div>

                {/* Main message */}
                <div className="space-y-2 mb-8">
                  <h3 className="text-4xl font-black bg-gradient-to-r from-blue-700 via-purple-700 to-blue-700 bg-clip-text text-transparent">
                    Paper Submission is Live!
                  </h3>
                  <p className="text-gray-600 font-semibold text-lg">
                    Submit your papers for INSTCon 2026
                  </p>
                </div>

                {/* Main CTA Button */}
                <a
                  href="https://cmt3.research.microsoft.com/INSTCON2026"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mb-4 inline-flex items-center justify-center w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-purple-800 text-white font-extrabold text-lg px-10 py-4 rounded-xl shadow-lg hover:shadow-xl transform  transition-all duration-300"
                >
                  <span className="tracking-wide">Click Here to Submit</span>
                  <svg
                    className="w-5 h-5 ml-3 group-hover:translate-x-2 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    ></path>
                  </svg>
                </a>

                {/* Divider with "OR" */}
                <div className="relative my-6">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300"></div>
                  </div>
                  <div className="relative flex justify-center">
                    <span className="px-4 bg-gradient-to-r from-blue-50 via-white to-purple-50 text-gray-500 font-medium text-sm">
                      OR
                    </span>
                  </div>
                </div>

                {/* Secondary Button for Guidelines */}
                <a
                  href="/submitPaper"
                  className="group inline-flex items-center justify-center w-full border-2 border-blue-600 text-blue-600 hover:bg-blue-50 hover:border-blue-700 font-bold text-lg px-10 py-4 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <svg
                    className="w-5 h-5 mr-3 text-blue-600 group-hover:text-blue-700"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    ></path>
                  </svg>
                  <span className="tracking-wide">View Submission Guidelines</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden relative">
        {/* Full screen carousel */}
        <div className="relative h-screen">
          <div className="absolute inset-0">
            <SimpleCarousel images={images} />
          </div>

          {/* Dark gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/60 to-transparent"></div>

          {/* Content overlay - Clean, no bordered divs */}
          <div className="relative z-10 h-full flex flex-col justify-end px-5 pb-6 space-y-5 pt-16">
            {/* Title and Conference Info */}
            <div className="text-center backdrop-blur-sm bg-white/20 rounded-lg space-y-3">
              <p className="text-md sm:text-base font-semibold text-white/95 t drop-shadow-2xl leading-tight">
                1st IEEE International Conference on Instrumentation
              </p>
              <h1 className="text-4xl sm:text-5xl font-black text-white leading-tight drop-shadow-2xl tracking-tight">
                INSTCon 2026
              </h1>
            </div>

            {/* Date badge - Clean style */}
            <div className="flex justify-center">
              <div className="inline-flex items-center gap-3 px-5 py-3 bg-white/20 backdrop-blur-lg rounded-xl">
                <svg
                  className="w-5 h-5 text-white drop-shadow-2xl"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  ></path>
                </svg>
                <span className="font-black text-lg text-white tracking-wider drop-shadow-2xl">
                  JULY 24-25, 2026
                </span>
              </div>
            </div>

            {/* Location section - Clean, no bordered card */}
            <div className="px-3 backdrop-blur-sm bg-white/20 rounded-lg py-4">
              <div className="flex items-start gap-3">
                <svg
                  className="w-6 h-6 text-white drop-shadow-2xl flex-shrink-0 mt-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  ></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  ></path>
                </svg>
                <div className="text-left flex-1">
                  <p className="font-extrabold text-white text-sm mb-1 leading-snug drop-shadow-2xl tracking-tight">
                    Department of Electronics and Communication Engineering
                  </p>
                  <p className="font-bold text-xs text-white/95 leading-relaxed drop-shadow-2xl">
                    National Institute of Technology, Rourkela
                    <br />
                    Rourkela, Odisha, India - 769008
                  </p>
                </div>
              </div>
            </div>

            {/* 4 Images Overlay for Mobile - Larger, full width */}
            <div className="grid grid-cols-2 gap-3 px-3 mt-4">
              {bottomImages.map((src, index) => (
                <div key={index} className="relative group">
                  <div className="relative rounded-xl overflow-hidden group-hover:bg-black/90 transition-all duration-300 group-hover:scale-105 h-28">
                    <img
                      src={src}
                      alt={`Partner ${index + 1}`}
                      className={`w-full h-full object-contain`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Paper Submission Section for Mobile */}
        <div className="w-full px-4 py-8">
          <div className="relative bg-gradient-to-br from-blue-50 to-purple-50 border border-blue-100 rounded-2xl p-6 shadow-lg">
            {/* Live badge */}
            <div className="flex justify-center mb-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full animate-pulse">
                <div className="relative flex h-2 w-2">
                  <div className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75"></div>
                  <div className="relative inline-flex h-2 w-2 rounded-full bg-white"></div>
                </div>
                <span className="font-bold text-white text-xs tracking-wider">
                  LIVE NOW
                </span>
              </div>
            </div>

            {/* Message */}
            <div className="text-center space-y-2 mb-6">
              <h3 className="text-2xl font-black bg-gradient-to-r from-blue-700 to-purple-700 bg-clip-text text-transparent">
                Paper Submission is Live!
              </h3>
              <p className="text-gray-700 font-semibold text-base">
                Submit your papers for INSTCon 2026
              </p>
            </div>

            {/* Main Button */}
            <a
              href="https://cmt3.research.microsoft.com/INSTCON2026"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full mb-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-purple-800 text-white font-bold py-4 px-6 rounded-xl text-center shadow-md hover:shadow-lg transition-all duration-300 active:scale-95"
            >
              <div className="flex items-center justify-center gap-2">
                <span className="font-extrabold tracking-wide">
                  Click Here to Submit
                </span>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  ></path>
                </svg>
              </div>
            </a>

            {/* Divider */}
            <div className="relative my-4">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center">
                <span className="px-4 bg-gradient-to-br from-blue-50 to-purple-50 text-gray-500 font-medium text-sm">
                  OR
                </span>
              </div>
            </div>

            {/* Guidelines Button */}
            <a
              href="/submitPaper"
              className="group block w-full border-2 border-blue-600 text-blue-600 hover:bg-blue-50 hover:border-blue-700 font-bold py-4 px-6 rounded-xl text-center shadow-sm hover:shadow-md transition-all duration-300 active:scale-95"
            >
              <div className="flex items-center justify-center gap-2">
                <svg
                  className="w-4 h-4 text-blue-600 group-hover:text-blue-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  ></path>
                </svg>
                <span className="font-bold tracking-wide">
                  View Submission Guidelines
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
      `}</style>
    </div>
  );
};

export default Hero;