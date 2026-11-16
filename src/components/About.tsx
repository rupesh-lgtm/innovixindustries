import React from 'react';
import { motion } from 'framer-motion';
import { Recycle, Globe, Factory, Leaf, ArrowRight } from 'lucide-react';

const featureCards = [
  {
    id: 1,
    title: 'Recycling Focus',
    icon: Recycle,
  },
  {
    id: 2,
    title: 'Global Trade',
    icon: Globe,
  },
  {
    id: 3,
    title: 'Industrial Supply',
    icon: Factory,
  },
  {
    id: 4,
    title: 'Sustainable Solutions',
    icon: Leaf,
  },
];

interface AboutProps {
  onNavigate?: (section: string) => void;
}

export const About: React.FC<AboutProps> = ({ onNavigate }) => {
  const handleLearnMore = () => {
    if (onNavigate) {
      onNavigate('about');
    } else {
      window.location.href = '/about';
    }
  };

  return (
    <section id="about" className="w-full bg-[#f8fafc] dark:bg-[#061019] py-12 sm:py-16 md:py-20 overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

          {/* Left Side: About Company Text (Slides from Left) */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
            className="lg:col-span-7 space-y-4"
          >
            <motion.h2
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.35, delay: 0.05, ease: 'easeOut' }}
              className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#b65862] dark:text-rose-400 tracking-tight"
            >
              About Company
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: 0.15, ease: 'easeOut' }}
              className="space-y-3 text-gray-600 dark:text-gray-300 text-xs sm:text-sm md:text-[14.5px] leading-relaxed text-justify sm:text-left font-normal"
            >
              <p>
                <strong>Innovix Industries Pvt. Ltd.</strong> is a premier global provider of high-purity metal scrap trading, specialized containerized import/export, and advanced sustainable recycling solutions. We specialize in induction and arc furnace feedstock, including heavy melting steel (HMS 1 & 2), Millberry copper wire, electrical conductor aluminium, and certified brass alloys.
              </p>
              <p>
                With state-of-the-art sorting yards and rigorous spectrometer assay testing, our experienced team ensures zero radioactive contamination, exact weighbridge calibration, and compliant maritime logistics worldwide.
              </p>
            </motion.div>

            {/* Quick Credibility Stats Pills */}
            <div className="flex flex-wrap gap-2.5 pt-1">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 text-[11px] sm:text-xs font-semibold text-slate-700 dark:text-slate-300">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> 15+ Years Trade Experience
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 text-[11px] sm:text-xs font-semibold text-slate-700 dark:text-slate-300">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500" /> Strict Quality Grading
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 text-[11px] sm:text-xs font-semibold text-slate-700 dark:text-slate-300">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-500" /> Direct Yard Verification
              </span>
            </div>
            <motion.button
              onClick={handleLearnMore}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: 0.25, ease: 'easeOut' }}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="group relative inline-flex items-center gap-2.5 px-6 py-2.5 rounded-xl font-semibold text-xs sm:text-sm text-white overflow-hidden shadow-lg shadow-[#b65862]/20 border border-white/20 cursor-pointer btn-3d"
            >
              {/* Base Gradient Background */}
              <span className="absolute inset-0 bg-gradient-to-r from-[#b65862] via-[#9e4650] to-[#b65862] transition-all duration-300" />

              {/* Left-to-Right Hover Slide Fill Effect */}
              <span className="absolute inset-0 w-0 bg-gradient-to-r from-[#8b353f] to-[#b65862] transition-all duration-300 ease-out group-hover:w-full" />

              {/* Button Text & Arrow Animation */}
              <span className="relative z-10 flex items-center gap-2">
                Learn More
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </motion.button>
          </motion.div>

          {/* Right Side: 2x2 Feature Cards Grid (Slides from Right with 3D Depth) */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 perspective-1000"
          >
            <div className="grid grid-cols-2 gap-4 sm:gap-5">
              {featureCards.map((card, index) => {
                const IconComponent = card.icon;
                return (
                  <motion.div
                    key={card.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                    whileHover={{
                      y: -6,
                      rotateX: 6,
                      rotateY: -4,
                      scale: 1.03,
                    }}
                    className="bg-white dark:bg-[#0a1928] rounded-2xl p-5 sm:p-6 md:p-7 flex flex-col items-center justify-center text-center shadow-lg dark:shadow-2xl border border-gray-100 dark:border-slate-800 transition-all duration-300 group cursor-default card-3d"
                  >
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center mb-3 sm:mb-4 text-[#b65862] dark:text-rose-400 bg-rose-50 dark:bg-rose-950/40 border border-rose-100 dark:border-rose-900/30 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                      <IconComponent className="w-6 h-6 sm:w-7 sm:h-7 stroke-[1.8]" />
                    </div>
                    <span className="text-xs sm:text-sm font-bold text-gray-800 dark:text-gray-100 tracking-tight leading-snug">
                      {card.title}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
