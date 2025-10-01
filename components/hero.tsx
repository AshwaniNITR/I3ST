"use client";
import React from "react";
import Navbar from "./Navbar";


// Simple Carousel Component
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
    "/image 7.png",
    "/image 8.png",
  ];

  return (
    <div
      id="home"
      className="relative overflow-hidden"
    >
      <Navbar />
      {/* Desktop Layout */}
      <div className="hidden lg:flex h-screen">
        {/* Left side - Carousel */}
        <div className="w-full lg:w-1/2 h-full">
          <SimpleCarousel images={images} />
        </div>

        {/* Right side - Desktop Content */}
        <section className="relative w-full lg:w-1/2 min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 right-20 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
          </div>

          <div className="flex flex-col justify-center items-center w-full py-12 px-6 overflow-y-auto relative z-10">
            {/* Logo with modern styling */}
            <div className="flex justify-center w-full mb-8 flex-shrink-0">
              <div className="relative group">
                <div className="relative w-full max-w-sm h-32 lg:h-60 rounded-2xl border border-gray-200/50 bg-white shadow-2xl shadow-blue-500/10 transition-all duration-500 group-hover:shadow-blue-500/20 group-hover:scale-[1.02] overflow-hidden">
                  <img 
                    src="/ieeeims.png" 
                    alt="IEEE IMS Logo"
                    className="w-full h-full object-contain p-4"
                  />
                </div>
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10"></div>
              </div>
            </div>
            
            {/* Text content with modern styling */}
            <div className="text-center w-full max-w-2xl px-4 space-y-3">
              <div className="space-y-3">
                <h4 className="text-4xl lg:text-5xl xl:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 bg-clip-text text-transparent leading-tight animate-fade-in">
                  IEEE INSTCon 2026
                </h4>
                
                <p className="text-lg lg:text-xl text-gray-600 font-medium leading-relaxed">
                  1st IEEE International Conference on Instrumentation
                </p>
              </div>

              {/* Date badge */}
              <div className="inline-block relative group">
                <div className="relative border border-gray-200/50 px-8 rounded-xl transition-all duration-300 hover:scale-105">
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                    </svg>
                    <span className="font-bold text-base lg:text-md bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent tracking-wide">
                      JULY 24-25, 2026
                    </span>
                  </div>
                </div>
              </div>
              
              {/* Location card */}
              <div className="relative group mt-2">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative bg-white/70 backdrop-blur-xl rounded-2xl p-8 border border-gray-200/50 shadow-xl hover:shadow-2xl transition-all duration-300 max-w-md mx-auto hover:border-blue-300/50">
                  <div className="flex items-start gap-2">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                      </svg>
                    </div>
                    <div className="text-left flex-1">
                      <p className="font-bold text-gray-900 text-base mb-1">
                        Department of Electronics and Communication Engineering
                      </p>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        National Institute of Technology, Rourkela<br />
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

      {/* Mobile Layout - Content overlaid on carousel */}
      <div className="lg:hidden relative h-screen">
        {/* Full screen carousel */}
        <div className="absolute inset-0">
          <SimpleCarousel images={images} />
        </div>

        {/* Dark gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

        {/* Content overlay */}
        <div className="relative z-10 h-full flex flex-col justify-end px-6 pb-16 space-y-6">
          {/* Title */}
          <div className="text-center space-y-3">
            <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight drop-shadow-2xl">
              IEEE INSTCon 2026
            </h1>
            
            <p className="text-lg sm:text-xl text-white font-medium drop-shadow-lg">
              1st IEEE International Conference on Instrumentation
            </p>
          </div>

          {/* Date badge */}
          <div className="flex justify-center">
            <div className="inline-flex items-center gap-2 px-6 py-3">
              <svg className="w-5 h-5 text-white drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
              </svg>
              <span className="font-bold text-lg text-white tracking-wide drop-shadow-2xl">
                JULY 24-25, 2026
              </span>
            </div>
          </div>

          {/* Location section */}
          <div className="flex items-start gap-3 justify-center">
            <svg className="w-6 h-6 text-white drop-shadow-lg flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
            </svg>
            <div className="text-center">
              <p className="font-bold text-white text-base mb-1 leading-snug drop-shadow-lg">
                Department of Electronics and Communication Engineering
              </p>
              <p className="text-sm text-white leading-relaxed drop-shadow-lg">
                National Institute of Technology, Rourkela<br />
                Rourkela, Odisha, India - 769008
              </p>
            </div>
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