import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

interface OfferCard {
    id: number;
    title: string;
    description: string;
    image: string;
    link?: string;
}

const offersData: OfferCard[] = [
    {
        id: 1,
        title: 'FERROUS SCRAP',
        description: 'We Supplying dependable ferrous scrap solutions to meet industrial requirements.',
        image: '/ferrous-scrap-slider.png',
    },
    {
        id: 2,
        title: 'NON - FERROUS SCRAP',
        description: 'We Supplying Non-ferrous scrap suitable for recycling and manufacturing applications.',
        image: '/non-ferrous-scrap-slider.png',
    },
    {
        id: 3,
        title: 'ALLOYS',
        description: 'We Supplying durable alloy solutions for consistent industrial performance.',
        image: '/aluminium-scrap-slider.png',
    },
    {
        id: 4,
        title: 'METAL FOCUS',
        description: 'We Specialized metal-focused solutions delivering quality and reliability.',
        image: '/copper-scrap-slider.png',
    },
    {
        id: 5,
        title: 'RECYCLING',
        description: 'We Provide Sustainable recycling solutions committed to reducing environmental impact.',
        image: '/recycle-slider.png',
    },
    {
        id: 6,
        title: 'TRADING & DELIVERY',
        description: 'At INNOVIX INDUSTRIES, we specialize in the trading and timely delivery of high-quality scrap metals and industrial raw materials.',
        image: '/brass-scrap-slider.png',
    },
];

export const Weoffer: React.FC = () => {
    const handleExplore = () => {
        const el = document.getElementById('products');
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
        } else {
            window.location.href = '/products';
        }
    };

    return (
        <section className="w-full bg-[#f8fafc] py-14 sm:py-18 md:py-20 select-none overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Heading */}
                <motion.div
                    initial={{ opacity: 0, y: -25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ duration: 0.45, ease: 'easeOut' }}
                    className="text-center mb-10 sm:mb-14"
                >
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#111827] tracking-tight">
                        We are offering
                    </h2>
                    <div className="w-16 h-1 bg-[#b65862] mx-auto mt-2.5 rounded-full" />
                </motion.div>

                {/* 3x2 Grid Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-7">
                    {offersData.map((item, index) => {
                        // Alternate directions:
                        // Row 1 (0, 1, 2): Left, Top, Right
                        // Row 2 (3, 4, 5): Left, Bottom, Right
                        const getInitialPosition = (idx: number) => {
                            const patternIndex = idx % 6;
                            switch (patternIndex) {
                                case 0: return { opacity: 0, x: -45, y: 0 }; // Left
                                case 1: return { opacity: 0, x: 0, y: -45 }; // Top
                                case 2: return { opacity: 0, x: 45, y: 0 };  // Right
                                case 3: return { opacity: 0, x: -45, y: 0 }; // Left
                                case 4: return { opacity: 0, x: 0, y: 45 };  // Bottom
                                case 5: return { opacity: 0, x: 45, y: 0 };  // Right
                                default: return { opacity: 0, x: 0, y: 35 };
                            }
                        };

                        return (
                            <motion.div
                                key={item.id}
                                initial={getInitialPosition(index)}
                                whileInView={{ opacity: 1, x: 0, y: 0 }}
                                viewport={{ once: true, margin: '-40px' }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.08,
                                    ease: 'easeOut',
                                }}
                                whileHover={{ y: -6, scale: 1.015 }}
                                className="relative h-64 sm:h-72 md:h-80 rounded-2xl overflow-hidden shadow-md hover:shadow-xl border border-slate-700/30 group cursor-pointer"
                            >
                                {/* Background Image */}
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
                                />

                                {/* Blue / Dark Overlay matching screenshot */}
                                <div className="absolute inset-0 bg-[#0f2438]/80 group-hover:bg-[#0b1d2e]/75 transition-colors duration-500 backdrop-blur-[1px]" />

                                {/* Card Content (Centered) */}
                                <div className="relative z-10 h-full p-6 sm:p-7 flex flex-col items-center justify-center text-center">
                                    <h3 className="text-lg sm:text-xl font-black text-white tracking-wider uppercase drop-shadow-sm mb-2.5">
                                        {item.title}
                                    </h3>

                                    <p className="text-gray-200/90 text-xs sm:text-[13px] leading-relaxed max-w-xs mb-5 font-normal">
                                        {item.description}
                                    </p>

                                    {/* Explore Us Pill Button */}
                                    <motion.button
                                        whileHover={{ scale: 1.06, backgroundColor: '#ffffff', color: '#0f2438' }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={handleExplore}
                                        className="inline-flex items-center gap-1.5 px-5 py-1.5 rounded-full border border-white/60 bg-black/30 hover:bg-white text-white hover:text-[#0f2438] text-xs sm:text-[13px] font-semibold tracking-wide transition-all duration-300 backdrop-blur-md cursor-pointer shadow-sm group/btn"
                                    >
                                        <span>Explore Us</span>
                                        <ArrowUpRight className="w-3.5 h-3.5 opacity-70 group-hover/btn:opacity-100 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                                    </motion.button>
                                </div>

                                {/* Border glow on hover */}
                                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-white/30 transition-colors duration-300 pointer-events-none" />
                            </motion.div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
};

export default Weoffer;
