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
    <section id="about" className="w-full bg-[#f8fafc] py-12 sm:py-16 md:py-20 overflow-hidden">
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
              className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#b65862] tracking-tight"
            >
              About Company
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: 0.15, ease: 'easeOut' }}
              className="text-gray-600 text-xs sm:text-sm md:text-[14.5px] leading-relaxed text-justify sm:text-left font-normal"
            >
              Innovix Industries Pvt. Ltd. is a trusted provider of high-quality metal scrap trading, efficient export and import, and advanced recycling solutions. We specialize in both ferrous and non-ferrous materials, including copper scrap, aluminium scrap, and brass scrap, along with seamless global trade services. Our export and import operations ensure smooth international transactions with reliable logistics and full compliance. We help industries adopt responsible recycling practices while enabling efficient cross-border movement of materials. Our solutions are designed to minimize waste and maximize value across global supply chains. With a strong focus on efficiency and innovation, we integrate modern technologies into both recycling and trading services. We maintain strict quality standards to ensure reliability in every shipment, including copper, aluminium, and brass scrap materials. Our experienced team ensures timely delivery, accurate documentation, and hassle-free transactions worldwide. We are committed to building long-term partnerships with clients through trust, transparency, and consistent quality. At Innovix Industries, we aim to contribute to a sustainable future by combining recycling excellence with global trade expertise.
            </motion.p>
            <motion.button
              onClick={handleLearnMore}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: 0.25, ease: 'easeOut' }}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="group relative inline-flex items-center gap-2.5 px-6 py-2.5 rounded-xl font-semibold text-xs sm:text-sm text-white overflow-hidden shadow-md shadow-[#b65862]/20 border border-white/20 cursor-pointer"
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

          {/* Right Side: 2x2 Feature Cards Grid (Slides from Right) */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
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
                      y: -4,
                      scale: 1.02,
                      boxShadow: '0 15px 30px -8px rgba(182, 88, 98, 0.15)'
                    }}
                    className="bg-white rounded-2xl p-5 sm:p-6 md:p-7 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md border border-gray-100 transition-all duration-300 group cursor-default"
                  >
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center mb-3 sm:mb-4 text-[#b65862] group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-6 h-6 sm:w-7 sm:h-7 stroke-[1.8]" />
                    </div>
                    <span className="text-xs sm:text-sm font-semibold text-gray-800 tracking-tight leading-snug">
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
