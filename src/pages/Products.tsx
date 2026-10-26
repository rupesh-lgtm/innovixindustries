import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Products } from '../components/Products';
import { FloatingActions } from '../components/FloatingActions';
import { StatsBanner } from '../components/StatsBanner';
import { PartnerWithUs } from '../components/PartnerWithUs';

interface CategoryTab {
  id: string;
  name: string;
  count: number;
}

const categories: CategoryTab[] = [
  { id: 'all', name: 'All Metals', count: 8 },
  { id: 'copper', name: 'Copper Products', count: 3 },
  { id: 'aluminium', name: 'Aluminium Scrap', count: 2 },
  { id: 'ferrous', name: 'Ferrous Scrap', count: 2 },
  { id: 'brass', name: 'Brass Alloys', count: 1 },
];

interface ProductDetail {
  id: string;
  category: string;
  name: string;
  isriCode: string;
  purity: string;
  image: string;
  desc: string;
  specs: string[];
}

const catalogProducts: ProductDetail[] = [
  {
    id: 'copper-scrap',
    category: 'copper',
    name: 'Millberry Bright Copper Wire',
    isriCode: 'ISRI: Berry / Candy',
    purity: '99.9% Cu Purity',
    image: '/copper-scrap-slider.png',
    desc: 'Uncoated, untinned pure electrical copper wire scrap sourced from clean power utilities. Minimum 99.9% purity for high-recovery smelting.',
    specs: ['99.9% Minimum Copper Assay', 'Low oxidation & slag', 'Ready for rotary furnaces'],
  },
  {
    id: 'copper-mixture',
    category: 'copper',
    name: 'Copper Mixture & Pipe Scrap',
    isriCode: 'ISRI: Birch / Cliff',
    purity: '98.5% - 99% Cu',
    image: '/recycle-slider.png',
    desc: 'Plumbing lines, air conditioner tubing, and busbar cuts sorted according to ISRI standards, free of excessive soldering or sediment.',
    specs: ['Hydraulic bundle / loose bales', 'Chemical assay certified', 'Zero radioactive elements'],
  },
  {
    id: 'aluminium-scrap',
    category: 'aluminium',
    name: 'Aluminium Purja & Tense Scrap',
    isriCode: 'ISRI: Tense / Trump',
    purity: '98% Recoverable Al',
    image: '/aluminium-scrap-slider.png',
    desc: 'Automotive cylinder heads, engine crankcases, and clean cast alloy scrap carefully stripped of studs, bushings, and excess iron.',
    specs: ['Low iron content (< 2%)', 'Excellent fluidity for die-casting', 'Batch spectral tested'],
  },
  {
    id: 'aluminium-extrusions',
    category: 'aluminium',
    name: 'Aluminium 6063 Architectural Scrap',
    isriCode: 'ISRI: Tata / Toto',
    purity: '99% Al Extrusion',
    image: '/non-ferrous-scrap-slider.png',
    desc: 'Clean architectural extrusions, door & window frames, anodized or mill finish without thermal breaks or screws.',
    specs: ['High thermal conductivity', 'Minimal dross production', 'Consistent grain structure'],
  },
  {
    id: 'ferrous-scrap',
    category: 'ferrous',
    name: 'Heavy Melting Steel (HMS 1 & 2)',
    isriCode: 'ISRI: 200 - 206',
    purity: 'High Carbon Steel',
    image: '/ferrous-scrap-slider.png',
    desc: 'Wrought iron and steel scrap 1/4 inch thickness and over, cut into furnace size for induction and electric arc furnaces.',
    specs: ['Standard 80:20 HMS mix', 'Cut lengths under 1.5m', 'Zero hazardous containment'],
  },
  {
    id: 'brass-scrap',
    category: 'brass',
    name: 'Yellow Brass & Honey Scrap',
    isriCode: 'ISRI: Honey / Ebony',
    purity: '60% Cu / 40% Zn',
    image: '/brass-scrap-slider.png',
    desc: 'Solid yellow brass castings, brass turnings, rolled brass, and plumbing fixtures free of manganese bronze and aluminium bronze.',
    specs: ['Guaranteed brass alloy ratio', 'Magnetic separator screened', 'High melt recovery yield'],
  },
];

export const ProductsPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProducts =
    activeCategory === 'all'
      ? catalogProducts
      : catalogProducts.filter((p) => p.category === activeCategory);

  return (
    <div className="w-full bg-white select-none">
      {/* 1. Products Page Hero Banner */}
      <section className="relative w-full h-[280px] sm:h-[340px] md:h-[400px] overflow-hidden flex items-center bg-[#072d4b]">
        <img
          src="/copper-scrap-slider.png"
          alt="Innovix Products Catalog"
          className="absolute inset-0 w-full h-full object-cover filter brightness-[0.45] contrast-[1.1]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#031526]/95 via-[#07243e]/75 to-transparent"></div>

        <div className="relative z-10 max-w-7xl mx-auto w-full px-5 sm:px-8 md:px-12 text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/20 text-rose-300 text-xs font-semibold uppercase tracking-wider mb-3 backdrop-blur-sm border border-rose-400/20">
              <Sparkles className="w-3.5 h-3.5" /> High Purity Non-Ferrous & Ferrous Metals
            </div>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight mb-3">
              Certified Metal Products & Scrap
            </h1>
            <p className="text-gray-200 text-sm sm:text-base leading-relaxed max-w-xl">
              Conforming to ASTM and ISRI standard classifications, delivered worldwide with full chemical assay verification.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. Interactive Products Filter Tabs & Grid Catalog */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#b65862]">Specification Catalog</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#072d4b] mt-1">Available Metal Grades</h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${activeCategory === cat.id
                  ? 'bg-[#b65862] text-white shadow-md'
                  : 'bg-slate-100 text-gray-700 hover:bg-slate-200'
                  }`}
              >
                {cat.name} ({cat.count})
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Filtered Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((prod) => (
              <motion.div
                key={prod.id}
                layout
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.4 }}
                whileHover={{ y: -6, boxShadow: '0 20px 30px -10px rgba(0,0,0,0.1)' }}
                className="bg-white rounded-3xl overflow-hidden shadow-md border border-slate-200/80 flex flex-col justify-between group transition-all"
              >
                <div>
                  <div className="h-52 overflow-hidden relative">
                    <img
                      src={prod.image}
                      alt={prod.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute top-3.5 right-3.5 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-white text-[11px] font-semibold">
                      {prod.isriCode}
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded-full">
                        {prod.purity}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#b65862] transition-colors">
                      {prod.name}
                    </h3>
                    <p className="text-gray-600 text-xs sm:text-sm mt-3 leading-relaxed">
                      {prod.desc}
                    </p>

                    <ul className="mt-4 space-y-1.5 pt-3 border-t border-slate-100">
                      {prod.specs.map((spec, sIdx) => (
                        <li key={sIdx} className="flex items-center gap-2 text-xs text-gray-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                          <span>{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <button
                    onClick={() => {
                      const el = document.getElementById('partner');
                      el?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="w-full py-2.5 rounded-xl bg-slate-100 hover:bg-[#b65862] hover:text-white text-[#072d4b] font-semibold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 cursor-pointer group/btn"
                  >
                    <span>Request Material Quote</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>

      {/* 3. Alternating Detailed Product Showcase Component with multi-image slider */}
      <div className="border-t border-slate-200">
        <Products />
      </div>

      {/* 4. Stats Ribbon */}
      <StatsBanner />

      {/* 5. Continuous Services Slider */}
      <FloatingActions />

      {/* 6. Partner / Request Quote Form */}
      <PartnerWithUs />
    </div>
  );
};

export default ProductsPage;
