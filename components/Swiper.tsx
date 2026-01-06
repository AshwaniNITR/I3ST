'use client';
import { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Clock } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const places = [
  {
    name: "Hanuman Vatika",
    distance: "7 km",
    img: "/Hanuman_Vatika_Rourkela.jpg",
    desc: "Famous for its 75-foot-tall Hanuman statue, this park offers beautiful gardens and religious significance.",
    hours: "6:00 AM - 8:00 PM"
  },
  {
    name: "Vedvyas Temple",
    distance: "10 km",
    img: "/vedVyas.jpg",
    desc: "A sacred site where sage Ved Vyasa is believed to have written the epic Mahabharata, located at the confluence of rivers.",
    hours: "5:00 AM - 9:00 PM"
  },
  {
    name: "Mandira Dam",
    distance: "20 km",
    img: "/mandira.jpg",
    desc: "A picturesque reservoir with scenic views, perfect for picnics and nature photography. The dam supplies water to the Rourkela Steel Plant.",
    hours: "Best time to visit: Early morning or sunset"
  },
  {
    name: "Pitamahal Dam",
    distance: "25 km",
    img: "/pitamahal.jpg",
    desc: "A serene spot ideal for nature lovers, offering boating facilities and lush greenery around the dam area.",
    hours: "6:00 AM - 6:00 PM"
  },
  {
    name: "Rourkela Steel Plant",
    distance: "8 km",
    img: "/rsp.jpg",
    desc: "One of the largest steel plants in India, offering guided tours to understand steel manufacturing processes.",
    hours: "Tours by appointment only"
  }
];

export default function PlacesSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(3);
  const [isTransitioning, setIsTransitioning] = useState(false);
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

  return (
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
                  className="bg-gradient-to-br from-white to-blue-50 rounded-xl overflow-hidden shadow-md border border-blue-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full"
                >
                  <div className="h-48 overflow-hidden relative">
                    <Image
                      src={place.img}
                      alt={place.name}
                      fill
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-3 right-3 bg-gradient-to-r from-blue-800 to-blue-900 px-3 py-1 rounded-full text-white text-sm font-medium">
                      {place.distance} from campus
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-lg text-blue-900 mb-2">{place.name}</h3>
                    <p className="text-gray-600 text-sm mb-3">{place.desc}</p>
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
  );
}