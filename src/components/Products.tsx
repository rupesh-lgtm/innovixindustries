import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ProductItem {
  id: number;
  title: string;
  description: string;
  images: { src: string; caption: string }[];
  imageOnRight: boolean;
}

const productsData: ProductItem[] = [
  {
    id: 1,
    title: 'High-Quality Copper Scrap Wire Supply and Eco-Friendly Recycling Solutions',
    description:
      'We provide high-quality copper wire designed to meet the demands of various industrial and commercial applications, ensuring excellent conductivity and long-lasting performance. Sourced from trusted vendors, our copper materials go through strict quality checks to maintain purity and reliability. Along with supply, we specialize in eco-friendly copper wire recycling solutions that help reduce environmental impact and promote sustainable practices. Our advanced recycling processes ensure maximum recovery of reusable copper while maintaining safety and efficiency at every stage.',
    images: [
      { src: '/mix-copper-scrap.jpg', caption: 'Copper Mixture Scrap' },
      { src: '/Copper-wire.png', caption: 'Industrial Recycled Copper Wire' },
      { src: '/coppertelly.jpeg', caption: 'Coppertelly' },
      { src: '/High-Quality-Copper-Armature-Scrap.jpg', caption: 'High-Quality Copper Armature Scrap' },

    ],
    imageOnRight: true,
  },
  {
    id: 2,
    title: 'High-Quality Aluminium Scrap Wire Solutions for Sustainable Industries',
    description:
      'We supply a wide range of high-quality aluminium scrap materials, including Aluminium Ingot Scrap, Aluminium with GI Scrap, Aluminium Purja Scrap, and Industrial ADC-12 Aluminium Scrap. Our products are carefully sourced and processed to ensure superior quality, high recyclability, and excellent value for industrial manufacturing, metal recovery, die-casting, and recycling applications. With a commitment to reliability and sustainability, we provide cost-effective scrap solutions that meet the diverse needs of modern industries.',
    images: [

      { src: '/High-Quality-Aluminium-Ingot-Scrap.png', caption: 'High-Quality Aluminium Ingot Scrap' },
      { src: '/High-Quality-Aluminium-With-GI-Scrap.jpg', caption: 'High-Quality Aluminium With GI Scrap' },
      { src: '/High-Quality-Aluminium-Purja-Scrap.png', caption: 'High-Quality Aluminium Purja Scrap' },
      { src: '/Industrial-aluminium-ADC-12-Scrap.jpg', caption: 'Industrial aluminium ADC - 12 Scrap' },
    ],
    imageOnRight: false,
  },
  {
    id: 3,
    title: 'High-Quality Copper Scrap Solutions for Industrial Excellence',
    description:
      'We offer a premium range of copper scrap materials, including High-Quality Copper Armature Scrap, Copper Tally Wire, Copper Mature Scrap, and Industrial Copper Hard Scrap. Sourced from trusted suppliers and carefully processed, our copper scrap delivers excellent conductivity, high purity, and outstanding recycling value. These materials are widely used in electrical manufacturing, metal recovery, and industrial applications, providing a reliable and cost-effective solution for businesses seeking quality copper recycling materials.',
    images: [
      { src: '/High-Quality-Copper-Armature-Scrap.png', caption: 'High-Quality Copper Armature Scrap' },
      { src: '/High-Quality-Copper-Tally-Wire.jpg', caption: 'High-Quality Copper Tally Wire Scrap' },
      { src: '/High-Quality-Copper-Mature-Scrap.jpg', caption: 'High-Quality Copper Mature Scrap' },
      { src: '/High-Quality-Industrial-Copper-Hard-Scrap.jpg', caption: 'High-Quality Industrial Copper Hard Scrap' },
    ],
    imageOnRight: true,
  },
];

// Interactive Nested Image Slider Component with Auto-play & Controls
const ProductImageSlider: React.FC<{ images: { src: string; caption: string }[] }> = ({ images }) => {
  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % images.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [images.length]);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIdx((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIdx((prev) => (prev + 1) % images.length);
  };

  return (
    <div className="w-full flex flex-col items-center">
      {/* Image Carousel Container */}
      <motion.div
        whileHover={{ scale: 1.015 }}
        transition={{ duration: 0.3 }}
        className="relative w-full rounded-2xl overflow-hidden shadow-lg border border-gray-100 bg-gray-900 group"
      >
        <div className="relative h-64 sm:h-80 md:h-[340px] lg:h-[360px] w-full overflow-hidden">
          {images.map((img, idx) => {
            const isActive = idx === currentIdx;
            return (
              <motion.div
                key={idx}
                initial={false}
                animate={{
                  opacity: isActive ? 1 : 0,
                  scale: isActive ? 1 : 1.05,
                  zIndex: isActive ? 10 : 1,
                }}
                transition={{ duration: 0.7, ease: 'easeInOut' }}
                className="absolute inset-0 pointer-events-none"
              >
                <img
                  src={img.src}
                  alt={img.caption}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </motion.div>
            );
          })}
        </div>

        {/* Left & Right Arrow Navigation (Visible on hover) */}
        <button
          onClick={handlePrev}
          aria-label="Previous image"
          className="absolute left-2.5 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-black/40 hover:bg-[#b65862] text-white flex items-center justify-center backdrop-blur-sm shadow-md opacity-0 group-hover:opacity-100 transition-all duration-200 cursor-pointer"
        >
          <ChevronLeft className="w-5 h-5 stroke-[2.5]" />
        </button>

        <button
          onClick={handleNext}
          aria-label="Next image"
          className="absolute right-2.5 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-black/40 hover:bg-[#b65862] text-white flex items-center justify-center backdrop-blur-sm shadow-md opacity-0 group-hover:opacity-100 transition-all duration-200 cursor-pointer"
        >
          <ChevronRight className="w-5 h-5 stroke-[2.5]" />
        </button>

        {/* Carousel Indicator Dots */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex items-center space-x-1.5 bg-black/30 backdrop-blur-md px-2.5 py-1 rounded-full">
          {images.map((_, dotIdx) => (
            <button
              key={dotIdx}
              onClick={(e) => {
                e.stopPropagation();
                setCurrentIdx(dotIdx);
              }}
              aria-label={`Go to image ${dotIdx + 1}`}
              className={`transition-all duration-300 rounded-full cursor-pointer ${dotIdx === currentIdx
                ? 'w-5 h-1.5 bg-white shadow-sm'
                : 'w-1.5 h-1.5 bg-white/50 hover:bg-white/80'
                }`}
            />
          ))}
        </div>
      </motion.div>

      {/* Dynamic Image Caption */}
      <span className="text-xs sm:text-sm font-semibold text-gray-700 mt-3 text-center tracking-wide transition-opacity duration-300">
        {images[currentIdx]?.caption}
      </span>
    </div>
  );
};

export const Products: React.FC = () => {
  return (
    <section id="products" className="w-full bg-white py-16 sm:py-20 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 sm:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#b65862] tracking-tight">
            Product
          </h2>
          <div className="w-16 h-1 bg-[#b65862]/30 mx-auto mt-3 rounded-full" />
        </motion.div>

        {/* Product Items List (Alternating Left & Right Layout) */}
        <div className="space-y-20 sm:space-y-24 md:space-y-28">
          {productsData.map((product) => {
            return (
              <div
                key={product.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-center"
              >
                {/* Text Content */}
                <motion.div
                  initial={{ opacity: 0, x: product.imageOnRight ? -45 : 45 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, ease: 'easeOut' }}
                  className={`lg:col-span-6 space-y-4 ${product.imageOnRight ? 'lg:order-1' : 'lg:order-2'
                    }`}
                >
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#b65862] leading-snug sm:leading-tight tracking-tight">
                    {product.title}
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm md:text-[14.5px] leading-relaxed text-justify sm:text-left font-normal">
                    {product.description}
                  </p>
                </motion.div>

                {/* Multiple Image Slider Container */}
                <motion.div
                  initial={{ opacity: 0, x: product.imageOnRight ? 45 : -45 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: 0.08, ease: 'easeOut' }}
                  className={`lg:col-span-6 ${product.imageOnRight ? 'lg:order-2' : 'lg:order-1'
                    }`}
                >
                  <ProductImageSlider images={product.images} />
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Products;
