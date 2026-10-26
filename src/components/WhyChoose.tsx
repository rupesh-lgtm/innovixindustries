import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

interface AccordionItem {
  id: number;
  title: string;
  content: string;
}

const accordionData: AccordionItem[] = [
  {
    id: 1,
    title: 'High-Grade Copper Scrap Solutions',
    content:
      'We supply premium Copper Armature, Copper Tally Wire, and Heavy Industrial Copper Scrap with guaranteed purity levels, strictly sorted to meet the demanding standards of foundries and cable manufacturers.',
  },
  {
    id: 2,
    title: 'Aluminium Ingot, Purja & ADC-12 Scrap',
    content:
      'From clean Aluminium Ingot and Purja scrap to ADC-12 alloy scrap, we deliver uniform composition raw materials tailored for automotive die-casting and precision extrusion plants.',
  },
  {
    id: 3,
    title: 'Comprehensive Ferrous Scrap Solutions',
    content:
      'Heavy melting steel (HMS), structural steel, and industrial iron scrap processed with heavy hydraulic shearers to provide dense, melt-ready charging material for steel mills and arc furnaces.',
  },
  {
    id: 4,
    title: 'Non-Ferrous & Brass Scrap Expertise',
    content:
      'Extensive portfolio of brass honey, zinc, stainless steel, and specialty non-ferrous alloys sorted using advanced spectrometry to ensure zero contamination and maximum recovery yield.',
  },
  {
    id: 5,
    title: 'Eco-Friendly Recycling & Sustainable Materials',
    content:
      'Closed-loop metal recycling and green scrap processing that drastically cuts carbon emissions, conserves natural ore resources, and powers sustainable circular manufacturing.',
  },
  {
    id: 6,
    title: 'Reliable Supply Chain & Logistics',
    content:
      'Strategically located processing facilities, in-house logistics fleet, and real-time inventory tracking ensure on-time delivery of processed scrap directly to your plant or port.',
  },
  {
    id: 7,
    title: 'Transparent & Ethical Trading Practices',
    content:
      'Full chain-of-custody documentation, independent grading certificates, and open-market pricing ensure fair, transparent transactions for all our partners.',
  },
  {
    id: 8,
    title: 'Tailored Solutions & Technical Support',
    content:
      'Custom scrap processing, specific alloy blending, and dedicated technical advisors ensure you always receive the exact material specifications and support your production demands.',
  },
  {
    id: 9,
    title: 'Advanced Scrap Processing Capabilities',
    content:
      'State-of-the-art shredding, shearing, and sorting technology ensures consistent particle size, density, and purity across all scrap grades—meeting ISO and international quality benchmarks.',
  },
  {
    id: 10,
    title: 'Global Reach with Local Service Excellence',
    content:
      'Fully licensed export operations, customs expertise, and multi-modal logistics (sea, rail, road) ensure seamless scrap supply to manufacturers and traders across the Globe.',
  },
  {
    id: 11,
    title: 'Rigorous Quality Assurance & Certification',
    content:
      'Every batch undergoes XRF analysis and physical verification to guarantee exact alloy composition, moisture control, and impurity levels as per global recycling standards.',
  },
];

export const WhyChoose: React.FC = () => {
  // Default open 1st item (or null)
  const [openId, setOpenId] = useState<number | null>(1);
  // Show initially 5 items, increment by 2 on Read More
  const [visibleCount, setVisibleCount] = useState<number>(5);

  const toggleAccordion = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  const handleShowMore = () => {
    setVisibleCount((prev) => Math.min(prev + 2, accordionData.length));
  };

  return (
    <section className="w-full bg-[#f8fafc] py-14 sm:py-18 md:py-24 overflow-hidden relative select-none">
      {/* Subtle modern background gradient curves */}
      <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-25 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-slate-200 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">

          {/* Left Column: Scrap Crane & Yard Image (Slide from Left) */}
          <motion.div
            initial={{ opacity: 0, x: -45 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="lg:col-span-5"
          >
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border border-slate-200 bg-white group">
              <img
                src="/scrap-metal-handling.jpg"
                alt="Industrial Scrap Yard & Heavy Crane Operations"
                className="w-full h-80 sm:h-96 md:h-[480px] object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
            </div>
          </motion.div>

          {/* Right Column: Heading & Interactive Accordion (Slide from Right) */}
          <motion.div
            initial={{ opacity: 0, x: 45 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Title matching screenshot with Innovix branding */}
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#111827] tracking-tight leading-tight">
                Why choose Innovix to handle your scrap metal ?
              </h2>
              <div className="w-14 h-1 bg-[#b65862] mt-3 rounded-full" />
            </div>

            {/* Accordion Table-Style Card List */}
            <div className="border border-slate-300/80 rounded-xl bg-white shadow-sm divide-y divide-slate-200 overflow-hidden">
              {accordionData.slice(0, visibleCount).map((item) => {
                const isOpen = openId === item.id;
                return (
                  <div key={item.id} className="transition-colors">
                    {/* Accordion Row Header */}
                    <button
                      type="button"
                      onClick={() => toggleAccordion(item.id)}
                      className="w-full flex items-center justify-between px-5 sm:px-6 py-4 text-left hover:bg-slate-50 transition-colors cursor-pointer group"
                    >
                      <div className="flex items-center gap-3">
                        <span className="w-5 h-5 flex items-center justify-center text-slate-700 group-hover:text-[#b65862] transition-colors">
                          {isOpen ? (
                            <Minus className="w-4 h-4 stroke-[2.5]" />
                          ) : (
                            <Plus className="w-4 h-4 stroke-[2.5]" />
                          )}
                        </span>
                        <span
                          className={`text-sm sm:text-base font-semibold transition-colors ${isOpen ? 'text-[#b65862]' : 'text-slate-900 group-hover:text-[#b65862]'
                            }`}
                        >
                          {item.title}
                        </span>
                      </div>
                    </button>

                    {/* Collapsible Content */}
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.28, ease: 'easeInOut' }}
                          className="overflow-hidden"
                        >
                          <div className="px-5 sm:px-6 pb-4 pt-1 pl-12 sm:pl-14 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal bg-slate-50/50">
                            {item.content}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

            {/* Read More Button (loads 2 more at a time) */}
            {visibleCount < accordionData.length && (
              <div className="pt-2 flex justify-start">
                <button
                  type="button"
                  onClick={handleShowMore}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-[#b65862] hover:bg-[#9e4650] text-white text-sm font-semibold tracking-wide transition-all shadow-sm hover:shadow-md cursor-pointer active:scale-95"
                >
                  <span>Read More</span>
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
