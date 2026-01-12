"use client";
import { useState, useRef, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Clock,
  X,
  Bike,
  Car,
  Navigation,
  Train
} from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const places = [
  {
    name: "Golden Beach, Puri",
    distance: "376 km",
    address: "Puri Sea Beach, QRQ4+J96, Puri, Odisha 752001",
    img: "/puriBeach.jpg",
    desc: "A Hindu sacred place, this busy beach is the site of the annual Puri Beach Festival & sand displays.",
    hours: "5:00 am – 10:00 pm ",
    coordinates: "19.7952134° N, 85.7468861° E",
    mapsUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d120129.79916857596!2d85.74688609964187!3d19.795213368750964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19c419b6847af9%3A0x4ae140e6a993c45e!2sGolden%20Beach!5e0!3m2!1sen!2sin!4v1768212411605!5m2!1sen!2sin",
  },
  {
    name: "Konark Temple, Puri",
    distance: "376 km",
    address: "Sun Temple, Konarak, Konark, Odisha 752111",
    img: "/Konarka_Temple.jpg",
    desc: "Ornately sculpted, 13th-century Hindu place of worship depicting the vast chariot of sun god, Surya.",
    hours: "6:00 AM to 8:00 PM",
    coordinates: "21.0653255° N, 84.1196084° E",
    mapsUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7503.704749324928!2d86.09220569221071!3d19.888454575962534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19f2a097819bbf%3A0xed9983ca391e3247!2sSun%20Temple%2C%20Konarak!5e0!3m2!1sen!2sin!4v1768213124156!5m2!1sen!2sin",
  },
  {
    name: "Jagannath Temple, Puri",
    distance: "376 km",
    address: "6VXH+44J, Ring Rd, Ahirabandh, Sector 3, Rourkela, Odisha 769002",
    img: "/JagganathTemple.jpeg",
    desc: "Sacred Hindu temple dedicated to Jagannath, a form of Vishnu, known for its annual Rath Yatra festival.",
    hours: " 5:30 AM to 9:00 PM (or sometimes 10:00 PM depending on sources)",
    coordinates: "19.8049379° N, 84.5984562° E",
    mapsUrl:
      "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d955687.3918189864!2d85.65868096850419!3d20.663317898349575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sjagannath%20temple%20puri!5e0!3m2!1sen!2sin!4v1768219389812!5m2!1sen!2sin",
  },
  {
    name: "Nandankanan Zoological Park, Bhubaneswar",
    distance: "298 km",
    address: "Nandankanan Zoological Park, Bhubaneswar, Odisha 754005",
    img: "/Nandankanan.jpg",
    desc: "Zoo with 1,500+ animals, including white tigers & pangolins, plus a botanical garden & scenic lake.",
    hours: "7:30 am - 5:30 pm.",
    coordinates: "21.3204858° N, 84.0213546° E",
    mapsUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3739.6875179625786!2d85.82338947523945!3d20.395769981099914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a190edd0e133397%3A0x3d3e1689f5474535!2sNandankanan%20Zoological%20Park!5e0!3m2!1sen!2sin!4v1768220399131!5m2!1sen!2sin",
  },
  {
    name: "Bhitarkanika National Park and Wildlife Sanctuary",
    distance: "424 km",
    address: "Bhitarkanika, Odisha 754248",
    img: "/Bhitarakanika.jpg",
    desc: "Bhitarkanika Mangroves is a mangrove wetland in Odisha, India, covering an area of 650 km in the Brahmani River and Baitarani River deltas",
    hours: "7 AM - 5 PM",
    coordinates: "21.4009645° N, 84.5631994° E",  
    mapsUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14926.88070027749!2d86.85352874602464!3d20.72158461206771!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1b9fa84445d08f%3A0xe0b7fb81f221aef!2sBhitarkanika%2C%20Odisha%20754248!5e0!3m2!1sen!2sin!4v1768220728488!5m2!1sen!2sin",
  },
];

// Dummy travel time data (in minutes)
const getTravelTimes = (name: string) => {
  switch (name) {
    case "Golden Beach, Puri":
      return { bike: 462, car: 484, train: 460 };
    case "Konark Temple, Puri":
      return { bike: 462, car: 484, train: 460 };
    case "Jagannath Temple, Puri":
      return { bike: 462, car: 484, train: 460 };
    case "Nandankanan Zoological Park, Bhubaneswar":
      return { bike: 376, car: 396, train: 583 };
    case "Bhitarkanika National Park and Wildlife Sanctuary":
      return { bike: 530, car: 633, train: 465};

    default:
      break;
  }
};

export default function PlacesSliderOut() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(3);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [selectedPlace, setSelectedPlace] = useState<(typeof places)[0] | null>(
    null
  );
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
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, places.length - slidesPerView);

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
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
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPlace(null);
    // Restore body scroll
    document.body.style.overflow = "unset";
  };

  // Close modal on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isModalOpen) {
        closeModal();
      }
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
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
              transform: `translateX(-${
                currentIndex * (100 / slidesPerView)
              }%)`,
              willChange: "transform",
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
                        <h3 className="font-bold text-lg text-blue-900">
                          {place.name}
                        </h3>
                        <Navigation className="w-5 h-5 text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                      <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                        {place.desc}
                      </p>
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
                  ? "bg-blue-900 w-4"
                  : "bg-blue-300 hover:bg-blue-500"
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
            className="fixed inset-0 z-50 flex items-start justify-center p-2 sm:p-4 bg-black/70 overflow-y-auto"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25 }}
              className="bg-white rounded-2xl shadow-2xl w-full max-w-[95vw] sm:max-w-4xl my-4 sm:my-8 overflow-hidden"
              onClick={(e) => e.stopPropagation()}
              style={{ maxHeight: "calc(100vh - 2rem)" }}
            >
              {/* Modal Header */}
              <div className="p-6 border-b border-gray-200 flex justify-between items-center bg-gradient-to-r from-blue-50 to-white">
                <div>
                  <h2 className="text-2xl font-bold text-blue-900">
                    {selectedPlace.name}
                  </h2>
                  <p className="text-blue-600 mt-1">
                    {selectedPlace.distance} from campus
                  </p>
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
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">
                      Location Details
                    </h3>

                    {/* Address Card */}
                    <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-4 rounded-xl border border-blue-200 mb-3">
                      <div className="flex items-start">
                        <div className="flex-shrink-0 mr-3 mt-1">
                          <div className="p-2 bg-blue-100 rounded-lg">
                            <svg
                              className="w-5 h-5 text-blue-700"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                              ></path>
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                              ></path>
                            </svg>
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold text-blue-900 text-sm mb-1">
                            Address
                          </h4>
                          <p className="text-gray-700 text-sm">
                            {selectedPlace.address}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Coordinates Card */}
                    <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-4 rounded-xl border border-gray-200">
                      <div className="flex items-start">
                        <div className="flex-shrink-0 mr-3 mt-1">
                          <div className="p-2 bg-gray-100 rounded-lg">
                            <svg
                              className="w-5 h-5 text-gray-700"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                              ></path>
                            </svg>
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 text-sm mb-1">
                            Coordinates
                          </h4>
                          <div className="flex flex-col md:flex-row md:items-center gap-2">
                            <code className="text-gray-700 text-sm bg-white px-3 py-1 rounded-lg border border-gray-300 font-mono">
                              {selectedPlace.coordinates}
                            </code>
                            <button
                              onClick={() => {
                                navigator.clipboard.writeText(
                                  selectedPlace.coordinates
                                );
                                // You could add a toast notification here
                                alert("Coordinates copied to clipboard!");
                              }}
                              className="text-xs text-blue-600 hover:text-blue-800 flex items-center hover:underline"
                            >
                              <svg
                                className="w-3 h-3 mr-1"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                                ></path>
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
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">
                    Travel Time from NIT Rourkela
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {/* Bike */}
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-xl border border-blue-200">
                      <div className="flex items-center mb-3">
                        <div className="p-2 bg-blue-100 rounded-lg mr-3">
                          <Bike className="w-6 h-6 text-blue-700" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-blue-900">
                            By Bike
                          </h4>
                          <p className="text-2xl font-bold text-blue-700">
                            {travelTimes?.bike} min
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Car */}
                    <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-xl border border-green-200">
                      <div className="flex items-center mb-3">
                        <div className="p-2 bg-green-100 rounded-lg mr-3">
                          <Car className="w-6 h-6 text-green-700" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-green-900">
                            By Car
                          </h4>
                          <p className="text-2xl font-bold text-green-700">
                            {travelTimes?.car} min
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Walking */}
                    <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-4 rounded-xl border border-purple-200">
                      <div className="flex items-center mb-3">
                        <div className="p-2 bg-purple-100 rounded-lg mr-3">
                          <span className="text-2xl"><Train/></span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-purple-900">
                            Train
                          </h4>
                          <p className="text-2xl font-bold text-purple-700">
                            {travelTimes?.train} min
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Place Details */}
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">
                    About this place
                  </h3>
                  <p className="text-gray-700 mb-4">{selectedPlace.desc}</p>

                  <div className="flex items-center text-gray-600 mb-2">
                    <Clock className="w-4 h-4 mr-2" />
                    <span className="font-medium">Visiting Hours:</span>
                    <span className="ml-2">{selectedPlace.hours}</span>
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="p-4 border-t border-gray-200 bg-gray-50">
                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={closeModal}
                    className="px-4 py-2.5 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors text-center w-full sm:w-auto sm:flex-1"
                  >
                    Close
                  </button>

                  <a
                    href={`https://www.google.com/maps/dir/?api=1&origin=National+Institute+of+Technology+Rourkela&destination=${encodeURIComponent(
                      selectedPlace.name
                    )}+Rourkela&travelmode=driving`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 text-center w-full sm:w-auto sm:flex-1"
                  >
                    <Navigation className="w-4 h-4 flex-shrink-0" />
                    <span className="truncate">Open in Maps</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
