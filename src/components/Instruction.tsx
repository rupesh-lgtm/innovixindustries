import React from 'react';
import { motion } from 'framer-motion';

interface IndustryCard {
  id: number;
  title: string;
  description: string;
  image: string;
}

const industryCards: IndustryCard[] = [
  {
    id: 1,
    title: 'Manufacturing',
    description: 'We supply consistent-quality raw materials to keep production lines running smoothly.',
    image: '/manufacturing.jpg',
  },
  {
    id: 2,
    title: 'Construction',
    description: 'Recycled metals and materials for building, infrastructure, and industrial projects.',
    image: '/construction.jpg',
  },
  {
    id: 3,
    title: 'Automotive',
    description: 'Reliable scrap and non-ferrous metals for automotive parts and components.',
    image: '/automotive.jpg',
  },
  {
    id: 4,
    title: 'Packaging & Plastics',
    description: 'Recycled materials suitable for industrial packaging and plastic manufacturing.',
    image: '/packaging-plastics.jpg',
  },
  {
    id: 5,
    title: 'Foundries & Smelters',
    description: 'High-grade scrap metals processed for melting and alloy production.',
    image: '/foundries-smelters.jpg',
  },
  {
    id: 6,
    title: 'Exporters & Traders',
    description: 'Bulk scrap and raw materials prepared for domestic and Commercials markets.',
    image: '/exporters-traders.jpg',
  },
];

export const Instruction: React.FC = () => {
  return (
    <section className="w-full bg-white py-16 sm:py-20 md:py-24 overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Top Hero Graphic (Handshake & Network Icons) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="w-full flex justify-center mb-10 sm:mb-14"
        >
          <div className="relative w-full">
            <img
              src="/instruction.png"
              alt="Industry Global Solutions & Strategic Partnership"
              className="w-full h-auto object-contain mx-auto"
            />
          </div>
        </motion.div>

        {/* Section Heading & Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#111827] tracking-tight">
            Innovix Industries Recycling – Sustainable Solutions for a Greener Future
          </h2>
          <div className="w-16 h-1 bg-[#b65862] mx-auto mt-3 mb-4 rounded-full" />
          <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
            At <span className="font-semibold text-gray-800">INNOVIX INDUSTRIES</span>, we deliver smart {' '}
            <span className="font-semibold text-[#b65862]">sustainable recycling and material solutions that drive industrial efficiency</span>, reduce costs, and build a greener future.
          </p>
        </motion.div>

        {/* 6 Grid Cards (3 Cols on Desktop, 2 on Tablet, 1 on Mobile) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 md:gap-8">
          {industryCards.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{
                duration: 0.45,
                delay: index * 0.08,
                ease: 'easeOut',
              }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col cursor-pointer"
            >
              {/* Card Thumbnail Image */}
              <div className="relative h-44 sm:h-48 md:h-52 w-full overflow-hidden bg-slate-100">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-600 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Card Text Content */}
              <div className="p-5 sm:p-6 flex flex-col flex-grow text-center bg-slate-50/50 group-hover:bg-white transition-colors duration-300">
                <h3 className="text-base sm:text-lg font-bold text-gray-900 group-hover:text-[#b65862] transition-colors mb-2 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-[13px] text-gray-600 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Instruction;
