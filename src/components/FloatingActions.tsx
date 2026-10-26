import React from 'react';
import { motion } from 'framer-motion';

interface ServiceItem {
  id: number;
  title: string;
  points: string[];
}

const services: ServiceItem[] = [
  {
    id: 1,
    title: 'Copper & Non-Ferrous Scrap Sourcing',
    points: [
      'Global procurement of Berry, Birch & Armature copper',
      'XRF spectrometry & guaranteed purity verification',
      'Consistent bulk supply for foundries & wire plants',
    ],
  },
  {
    id: 2,
    title: 'Aluminium Alloy & Ingot Supply',
    points: [
      'Clean ADC-12, Purja scrap & extruded section scrap',
      'Low-dross melting scrap for automotive die-casting',
      'Tailored bundling & containerized bulk shipments',
    ],
  },
  {
    id: 3,
    title: 'Heavy Ferrous Scrap Processing',
    points: [
      'HMS 1 & 2 heavy melting steel scrap preparation',
      'Hydraulic shearing, baling & uniform density sorting',
      'Direct charging grade scrap for induction & arc furnaces',
    ],
  },
  {
    id: 4,
    title: 'International Scrap Import & Customs',
    points: [
      'PSIC (Pre-Shipment Inspection Certificate) handling',
      'Customs port clearance & MOEF regulatory compliance',
      'Seamless multi-modal sea freight & logistics tracking',
    ],
  },
  {
    id: 5,
    title: 'Sustainable Metal Recycling & Processing',
    points: [
      'Closed-loop scrap recycling minimizing furnace carbon footprint',
      'Advanced slag reduction & zero-hazardous segregation',
      'Green circular economy compliance for industrial partners',
    ],
  },
  {
    id: 6,
    title: 'Global Export & Bulk Yard Deliveries',
    points: [
      'Containerized and break-bulk export documentation',
      'Door-to-door domestic yard transit & weighbridge tracking',
      'Transparent contract pricing & flexible trade financing',
    ],
  },
];

export const FloatingActions: React.FC = () => {
  const scrollRef = React.useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 380;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="w-full py-10 sm:py-14 select-none overflow-hidden bg-[#f1f5f9]/80 rounded-3xl border border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Centered Heading with Navigation Arrows */}
        <div className="flex flex-col sm:flex-row items-center justify-between mb-8 sm:mb-10 gap-4">
          <div className="hidden sm:block w-24" /> {/* Spacer */}

          <div className="max-w-2xl text-center bg-white rounded-2xl px-6 py-4 sm:py-5 shadow-md border border-slate-200/80 overflow-hidden">
            <motion.h3
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="text-lg sm:text-xl md:text-2xl font-extrabold text-[#072d4b] tracking-tight"
            >
              Comprehensive Scrap & Trade Services
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
              className="text-gray-500 text-xs sm:text-sm mt-1.5"
            >
              End-to-end supply chain, compliance, and international procurement solutions.
            </motion.p>
          </div>

          {/* Left & Right Arrow Controls */}
          <div className="flex items-center space-x-2">
            <button
              onClick={() => scroll('left')}
              aria-label="Scroll left"
              className="w-10 h-10 rounded-full bg-white hover:bg-[#b65862] text-gray-700 hover:text-white border border-slate-200 shadow-sm flex items-center justify-center transition-all cursor-pointer group"
            >
              <span className="text-lg font-bold group-hover:-translate-x-0.5 transition-transform">‹</span>
            </button>
            <button
              onClick={() => scroll('right')}
              aria-label="Scroll right"
              className="w-10 h-10 rounded-full bg-white hover:bg-[#b65862] text-gray-700 hover:text-white border border-slate-200 shadow-sm flex items-center justify-center transition-all cursor-pointer group"
            >
              <span className="text-lg font-bold group-hover:translate-x-0.5 transition-transform">›</span>
            </button>
          </div>
        </div>

        {/* User Draggable & Scrollable Container (No Auto-Play) */}
        <div className="relative w-full overflow-hidden">
          {/* Soft edge blur gradients */}
          <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-r from-[#f1f5f9] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-l from-[#f1f5f9] to-transparent z-10 pointer-events-none" />

          <div
            ref={scrollRef}
            className="flex space-x-6 overflow-x-auto scrollbar-hide py-2 px-2 cursor-grab active:cursor-grabbing scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {services.map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.15 }}
                className="w-80 sm:w-96 md:w-[410px] min-h-[170px] flex-shrink-0 bg-white rounded-2xl p-6 sm:p-7 shadow-sm hover:shadow-lg border border-slate-300/80 transition-all flex flex-col justify-between"
              >
                <div>
                  <h4 className="text-sm sm:text-base font-bold text-gray-900 tracking-tight mb-4">
                    {item.title}
                  </h4>

                  <ul className="space-y-3">
                    {item.points.map((point, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-[13.5px] text-gray-600 leading-snug">
                        <span className="w-4 h-4 rounded-full border border-rose-400 text-rose-500 flex items-center justify-center shrink-0 mt-0.5 text-[10px] font-bold">
                          ✓
                        </span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
};

export default FloatingActions;
