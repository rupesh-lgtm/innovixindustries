import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Slide {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
}

const slides: Slide[] = [
  {
    id: 1,
    title: 'Ferrous Scrap Solutions',
    subtitle: 'High Grade Heavy Melting Steel & Cast Iron',
    description: 'Eco-friendly solutions for modern smelting and metal industries.',
    image: '/ferrous-scrap-slider.png',
  },
  {
    id: 2,
    title: 'Non Ferrous Scrap Solutions',
    subtitle: 'Sustainable Refining',
    description: 'High conductivity certified secondary metals for global manufacturing.',
    image: '/non-ferrous-scrap-slider.png',
  },
  {
    id: 3,
    title: 'Aluminium Scrap',
    subtitle: 'Zero Waste Circular Economy',
    description: 'Tense, Tabor, 6063 Extrusions and UBC for low-carbon casting.',
    image: '/aluminium-scrap-slider.png',
  },
  {
    id: 4,
    title: 'Copper Scrap',
    subtitle: 'Powering Tomorrow',
    description: 'Supplying top grade Millberry & Berry copper for electrical grids.',
    image: '/copper-scrap-slider.png',
  },
  {
    id: 5,
    title: 'Recycling Materials',
    subtitle: 'Zero Waste Circular Economy',
    description: 'Transforming industrial metal scrap into premium circular raw assets.',
    image: '/recycle-slider.png',
  },
  {
    id: 6,
    title: 'Brass Scrap',
    subtitle: 'High Quality Alloys',
    description: 'Clean honey, label, and rod turnings for precision foundries.',
    image: '/brass-scrap-slider.png',
  },
];

export const HeroBanner: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  // Auto advance slides every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const currentSlide = slides[activeSlide];

  return (
    <div className="relative w-full overflow-hidden select-none">
      {/* Background Image Carousel Container with reduced, responsive height */}
      <div className="relative h-[360px] sm:h-[300px] md:h-[350px] lg:h-[380px] w-full flex items-center overflow-hidden">

        {/* Render all slide images absolutely on top of each other with seamless crossfade (no dark flashes) */}
        {slides.map((slide, index) => {
          const isActive = index === activeSlide;
          return (
            <motion.div
              key={slide.id}
              initial={false}
              animate={{
                opacity: isActive ? 1 : 0,
                scale: isActive ? 1 : 1.04,
                zIndex: isActive ? 10 : 1,
              }}
              transition={{
                duration: 0.9,
                ease: 'easeInOut',
              }}
              className="absolute inset-0 pointer-events-none"
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover object-center"
              />
              {/* Natural, transparent light contrast overlay - No harsh dark background */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/25 to-transparent"></div>
            </motion.div>
          );
        })}

        {/* Hero Content Left Aligned */}
        <div className="relative z-20 max-w-7xl mx-auto w-full px-5 sm:px-8 md:px-12 py-6 sm:py-10 flex flex-col justify-center">
          <div className="max-w-xl text-white">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSlide}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
              >
                <span className="inline-block text-[11px] sm:text-xs font-semibold tracking-wider uppercase text-rose-200 mb-1 sm:mb-1.5 drop-shadow">
                  {currentSlide.subtitle}
                </span>

                <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.15] drop-shadow-lg capitalize whitespace-pre-line font-sans text-white">
                  {currentSlide.title}
                </h1>

                <p className="mt-2 sm:mt-2.5 text-xs sm:text-sm md:text-base text-gray-100 font-normal leading-relaxed drop-shadow-md max-w-md">
                  {currentSlide.description}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Action Buttons */}
            <div className="mt-4 sm:mt-5 flex flex-wrap items-center gap-3">
              {/* Explore Button */}
              <motion.button
                whileHover={{ scale: 1.04, boxShadow: '0 10px 20px -3px rgba(182, 88, 98, 0.4)' }}
                whileTap={{ scale: 0.96 }}
                onClick={() => {
                  const el = document.getElementById('products-section');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="relative overflow-hidden px-5 sm:px-7 py-2 sm:py-2.5 rounded-lg bg-[#b65862] hover:bg-[#a54a54] text-white font-medium text-xs sm:text-sm shadow-md transition-all duration-200 border border-white/20 group"
              >
                <span className="relative z-10">Explore</span>
                <div className="absolute inset-0 shimmer-effect opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.button>

              {/* Contact Button */}
              <motion.button
                whileHover={{ scale: 1.04, backgroundColor: 'rgba(255, 255, 255, 0.25)' }}
                whileTap={{ scale: 0.96 }}
                onClick={() => {
                  const el = document.getElementById('contact-section');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-5 sm:px-7 py-2 sm:py-2.5 rounded-lg bg-black/30 hover:bg-black/45 text-white font-medium text-xs sm:text-sm border border-white/30 backdrop-blur-md shadow-md transition-all duration-200"
              >
                Contact
              </motion.button>
            </div>
          </div>
        </div>

        {/* Carousel Dots with compact indicator sizing */}
        <div className="absolute bottom-3 sm:bottom-3.5 left-1/2 -translate-x-1/2 z-30 flex items-center space-x-2">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveSlide(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`transition-all duration-300 rounded-full cursor-pointer ${idx === activeSlide
                ? 'w-6 sm:w-7 h-1.5 sm:h-2 bg-white shadow-md ring-1 ring-white/60'
                : 'w-1.5 sm:w-2 h-1.5 sm:h-2 bg-white/50 hover:bg-white/80'
                }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
