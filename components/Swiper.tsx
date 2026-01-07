'use client';
import { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Clock, X, Bike, Car, Navigation } from 'lucide-react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const places = [
  {
    name: "Hanuman Vatika",
    distance: "7 km",
    address:"6RCJ+MJM, Basanti Nagar, Rourkela, Odisha 769012",
    img: "/Hanuman_Vatika_Rourkela.jpg",
    desc: "Famous for its 75-foot-tall Hanuman statue, this park offers beautiful gardens and religious significance.",
    hours: "6:00 AM - 8:00 PM",
    coordinates: "22.2501239° N, 84.7741812° E",
    mapsUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d236335.05225239694!2d84.7741812010129!3d22.25012392954643!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a201940a6cdd6fb%3A0xf80ee03d11a65971!2sShree%20Hanuman%20Vatika!5e0!3m2!1sen!2sin!4v1767749564187!5m2!1sen!2sin"
  },
  {
    name: "Vedvyas Temple",
    distance: "10 km",
    address:"Vedvyas, Rourkela, Odisha 769004",
    img: "/vedVyas.jpg",
    desc: "A sacred site where sage Ved Vyasa is believed to have written the epic Mahabharata, located at the confluence of rivers.",
    hours: "5:00 AM - 9:00 PM",
    coordinates: "22.2366964° N, 84.7945062° E",
    mapsUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3693.089141120271!2d84.79450617529072!3d22.23669637973236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a201992f62e0c99%3A0xfd7450d4ec5dbfba!2sVedvyas%20Temple!5e0!3m2!1sen!2sin!4v1767750288800!5m2!1sen!2sin"
  },
  {
    name: "Mandira Dam",
    distance: "20 km",
    address:"7M94+FQ8, Kansbahal, Bankibahal, Odisha 770034",
    img: "/mandira.jpg",
    desc: "A picturesque reservoir with scenic views, perfect for picnics and nature photography. The dam supplies water to the Rourkela Steel Plant.",
    hours: "Best time to visit: Early morning or sunset",
    coordinates: "22.3018285° N, 84.4392297° E",
    mapsUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d236247.70345425923!2d84.43922974614175!3d22.301828524896067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a201442e2b3b413%3A0x399481887ad3fd1f!2sMandira%20Dam!5e0!3m2!1sen!2sin!4v1767750880616!5m2!1sen!2sin"
  },
  {
    name: "Pitamahal Dam",
    distance: "25 km",
    address:"Pitamahal Dam, Rourkela, Odisha 769004",
    img: "/pitamahal.jpg",
    desc: "A serene spot ideal for nature lovers, offering boating facilities and lush greenery around the dam area.",
    hours: "6:00 AM - 6:00 PM",
    coordinates: "22.1797611° N, 84.7171153° E",
    mapsUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29556.701592295944!2d84.71711527491132!3d22.179761105471506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a2017b665f7ec9b%3A0x1c7550e3da4c8e98!2sPitaMahal%20Dam!5e0!3m2!1sen!2sin!4v1767751141907!5m2!1sen!2sin"
  },
  {
    name: "Rourkela Steel Plant",
    distance: "8 km",
    address:"Rourkela Steel Plant Area, Rourkela, Odisha 769011",
    img: "/rsp.jpg",
    desc: "One of the largest steel plants in India, offering guided tours to understand steel manufacturing processes.",
    hours: "Tours by appointment only",
    coordinates: "22.220221° N, 84.8577075° E",
    mapsUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3693.52315488577!2d84.8577074752902!3d22.220220979744195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a201ecc4cf3977f%3A0x2260536c0e5b9c1e!2sRourkela%20Steel%20Plant%2C%20SAIL!5e0!3m2!1sen!2sin!4v1767751408588!5m2!1sen!2sin"
  }
];


// Dummy travel time data (in minutes)
const getTravelTimes = (name: string) => {
  switch (name) {
    case "Hanuman Vatika":
      return { bike: 17, car: 20, walking: 127 };
    case "Vedvyas Temple":
      return { bike: 34, car: 37, walking: 211 };
    case "Mandira Dam":
      return { bike: 56, car: 59, walking: 420 };
    case "Pitamahal Dam":
      return { bike: 35, car: 39, walking: 432};
    case "Rourkela Steel Plant":
      return { bike: 13, car: 14, walking: 89 };

    default:
      break;
  }
};

export default function PlacesSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(3);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [selectedPlace, setSelectedPlace] = useState<(typeof places)[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const sliderRef = useRef(null);

  // Handle responsive slides per view
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setSlidesPerView(1);
      } else if (window.innerWidth < 1024) {
        setSlidesPerView(2);
      } else {
        setSlidesPerView(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, places.length - slidesPerView);

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(prev => prev >= maxIndex ? 0 : prev + 1);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(prev => prev === 0 ? maxIndex : prev - 1);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const goToSlide = (index: number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(Math.min(index, maxIndex));
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const handlePlaceClick = (place: (typeof places)[0]) => {
    setSelectedPlace(place);
    setIsModalOpen(true);
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPlace(null);
    // Restore body scroll
    document.body.style.overflow = 'unset';
  };

  // Close modal on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isModalOpen) {
        closeModal();
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isModalOpen]);

  const travelTimes = selectedPlace ? getTravelTimes(selectedPlace.name) : null;

  return (
    <>
      <div className="p-6 relative">
        <div className="overflow-hidden">
          <div
            ref={sliderRef}
            className="flex transition-transform duration-500 ease-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / slidesPerView)}%)`,
              willChange: 'transform'
            }}
          >
            {places.map((place, idx) => (
              <div
                key={idx}
                className="flex-shrink-0"
                style={{ width: `${100 / slidesPerView}%` }}
              >
                <div className="h-full mx-1">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                    onClick={() => handlePlaceClick(place)}
                    className="bg-gradient-to-br from-white to-blue-50 rounded-xl overflow-hidden shadow-md border border-blue-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full cursor-pointer group"
                  >
                    <div className="h-48 overflow-hidden relative">
                      <Image
                        src={place.img}
                        alt={place.name}
                        fill
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-3 right-3 bg-gradient-to-r from-blue-800 to-blue-900 px-3 py-1 rounded-full text-white text-sm font-medium">
                        {place.distance} from campus
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="font-bold text-lg text-blue-900">{place.name}</h3>
                        <Navigation className="w-5 h-5 text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                      <p className="text-gray-600 text-sm mb-3 line-clamp-2">{place.desc}</p>
                      <div className="flex items-center text-xs text-blue-600">
                        <Clock className="w-3 h-3 mr-2" />
                        <span>{place.hours}</span>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          disabled={isTransitioning}
          className="custom-prev absolute left-2 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all duration-200 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6 text-blue-900" />
        </button>
        
        <button
          onClick={nextSlide}
          disabled={isTransitioning}
          className="custom-next absolute right-2 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all duration-200 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6 text-blue-900" />
        </button>

        {/* Dots indicator */}
        <div className="flex justify-center mt-6 space-x-2">
          {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => goToSlide(idx)}
              disabled={isTransitioning}
              className={`w-2 h-2 rounded-full transition-all ${
                currentIndex === idx 
                  ? 'bg-blue-900 w-4' 
                  : 'bg-blue-300 hover:bg-blue-500'
              } disabled:cursor-not-allowed`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && selectedPlace && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="p-6 border-b border-gray-200 flex justify-between items-center bg-gradient-to-r from-blue-50 to-white">
                <div>
                  <h2 className="text-2xl font-bold text-blue-900">{selectedPlace.name}</h2>
                  <p className="text-blue-600 mt-1">{selectedPlace.distance} from campus</p>
                </div>
                <button
                  onClick={closeModal}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  aria-label="Close modal"
                >
                  <X className="w-6 h-6 text-gray-600" />
                </button>
              </div>

              {/* Modal Content */}
            {/* Modal Content */}
<div className="overflow-y-auto max-h-[calc(90vh-200px)]">
  {/* Google Maps Iframe */}
  <div className="p-6 border-b border-gray-200">
    <div className="mb-4">
      <h3 className="text-lg font-semibold text-gray-800 mb-3">Location Details</h3>
      
      {/* Address Card */}
      <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-4 rounded-xl border border-blue-200 mb-3">
        <div className="flex items-start">
          <div className="flex-shrink-0 mr-3 mt-1">
            <div className="p-2 bg-blue-100 rounded-lg">
              <svg className="w-5 h-5 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
              </svg>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-blue-900 text-sm mb-1">Address</h4>
            <p className="text-gray-700 text-sm">{selectedPlace.address}</p>
          </div>
        </div>
      </div>

      {/* Coordinates Card */}
      <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-4 rounded-xl border border-gray-200">
        <div className="flex items-start">
          <div className="flex-shrink-0 mr-3 mt-1">
            <div className="p-2 bg-gray-100 rounded-lg">
              <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"></path>
              </svg>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 text-sm mb-1">Coordinates</h4>
            <div className="flex flex-col md:flex-row md:items-center gap-2">
              <code className="text-gray-700 text-sm bg-white px-3 py-1 rounded-lg border border-gray-300 font-mono">
                {selectedPlace.coordinates}
              </code>
              <button
                onClick={() => {
                  navigator.clipboard.writeText(selectedPlace.coordinates);
                  // You could add a toast notification here
                  alert('Coordinates copied to clipboard!');
                }}
                className="text-xs text-blue-600 hover:text-blue-800 flex items-center hover:underline"
              >
                <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                </svg>
                Copy coordinates
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    {/* Map */}
    <div className="relative h-64 md:h-80 rounded-xl overflow-hidden border border-gray-300">
      <iframe
        src={selectedPlace.mapsUrl}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title={`${selectedPlace.name} Location`}
      />
    </div>
    <p className="text-xs text-gray-500 mt-2 text-center">
      Map shows route from NIT Rourkela to {selectedPlace.name}
    </p>
  </div>

  {/* Rest of your existing code remains the same... */}
  {/* Travel Information */}
  <div className="p-6 border-b border-gray-200">
    <h3 className="text-lg font-semibold text-gray-800 mb-4">Travel Time from NIT Rourkela</h3>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {/* Bike */}
      <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-xl border border-blue-200">
        <div className="flex items-center mb-3">
          <div className="p-2 bg-blue-100 rounded-lg mr-3">
            <Bike className="w-6 h-6 text-blue-700" />
          </div>
          <div>
            <h4 className="font-semibold text-blue-900">By Bike</h4>
            <p className="text-2xl font-bold text-blue-700">{travelTimes?.bike} min</p>
          </div>
        </div>
        <p className="text-sm text-gray-600">Average speed: 20 km/h</p>
      </div>

      {/* Car */}
      <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-xl border border-green-200">
        <div className="flex items-center mb-3">
          <div className="p-2 bg-green-100 rounded-lg mr-3">
            <Car className="w-6 h-6 text-green-700" />
          </div>
          <div>
            <h4 className="font-semibold text-green-900">By Car</h4>
            <p className="text-2xl font-bold text-green-700">{travelTimes?.car} min</p>
          </div>
        </div>
        <p className="text-sm text-gray-600">Average speed: 40 km/h</p>
      </div>

      {/* Walking */}
      <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-4 rounded-xl border border-purple-200">
        <div className="flex items-center mb-3">
          <div className="p-2 bg-purple-100 rounded-lg mr-3">
            <span className="text-2xl">🚶</span>
          </div>
          <div>
            <h4 className="font-semibold text-purple-900">Walking</h4>
            <p className="text-2xl font-bold text-purple-700">{travelTimes?.walking} min</p>
          </div>
        </div>
        <p className="text-sm text-gray-600">Average speed: 5 km/h</p>
      </div>
    </div>
  </div>

  {/* Place Details */}
  <div className="p-6">
    <h3 className="text-lg font-semibold text-gray-800 mb-3">About this place</h3>
    <p className="text-gray-700 mb-4">{selectedPlace.desc}</p>
    
    <div className="flex items-center text-gray-600 mb-2">
      <Clock className="w-4 h-4 mr-2" />
      <span className="font-medium">Visiting Hours:</span>
      <span className="ml-2">{selectedPlace.hours}</span>
    </div>
  </div>
</div>

              {/* Modal Footer */}
              <div className="p-4 border-t border-gray-200 bg-gray-50 flex justify-between items-center">
                <button
                  onClick={closeModal}
                  className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
                >
                  Close
                </button>
                <a
                  href={`https://www.google.com/maps/dir/?api=1&origin=National+Institute+of+Technology+Rourkela&destination=${encodeURIComponent(selectedPlace.name)}+Rourkela&travelmode=driving`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center"
                >
                  <Navigation className="w-4 h-4 mr-2" />
                  Open in Google Maps
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}