import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, CheckCircle2, ArrowRight, Sparkles, Layers, Cpu } from 'lucide-react';
import { StatsBanner } from '../components/StatsBanner';
import { FloatingActions } from '../components/FloatingActions';
import { PartnerWithUs } from '../components/PartnerWithUs';

export interface ProductPageData {
  slug: string;
  name: string;
  isriCode: string;
  badge: string;
  heroImage: string;
  heroSubtitle: string;
  purity: string;
  headline: string;
  fullDescription: string;
  specifications: { label: string; value: string }[];
  applications: string[];
  galleryImages: string[];
}

export const productCatalogRecord: Record<string, ProductPageData> = {
  'ferrous-scrap': {
    slug: 'ferrous-scrap',
    name: 'Ferrous Scrap',
    isriCode: 'ISRI: 200 - 206 (HMS 1 & 2)',
    badge: 'Heavy Melting Steel & Cast Iron',
    heroImage: '/ferrous-scrap-slider.png',
    heroSubtitle: 'High Yield Furnace Feedstock',
    purity: 'High Carbon Steel / Cast Iron',
    headline: 'High-Density Heavy Melting Steel Scrap for Induction & Arc Furnaces',
    fullDescription:
      'Our Ferrous Scrap inventories consist of clean Heavy Melting Steel (HMS 1 & 2) in standard 80:20 mix, along with machine cast iron, railway track cutoffs, and structural beams. Sourced from dismantled industrial frames, rail networks, and heavy machinery plants, our materials undergo meticulous radiation testing and magnetic density separation to ensure minimal residual dirt, hollow components, and unwanted alloys.',
    specifications: [
      { label: 'Standard Ratio', value: 'HMS 1 (6mm+) / HMS 2 (3mm+) in 80:20 Mix' },
      { label: 'Length Specifications', value: 'Cut to lengths under 1.5m (Furnace size)' },
      { label: 'Density', value: 'Minimum 0.8 - 1.2 Tonnes/m³' },
      { label: 'Radioactive Testing', value: 'Zero contamination guaranteed with test certificates' },
    ],
    applications: [
      'Induction Furnace Direct Smelting',
      'Electric Arc Furnace (EAF) Steel Billets Manufacturing',
      'Reinforcement Bar (Rebar) & Structural Steel Production',
      'Foundry Cast Iron Parts & Ingot Casting',
    ],
    galleryImages: ['/ferrous-scrap-slider.png', '/recycle-slider.png'],
  },
  'non-ferrous-scrap': {
    slug: 'non-ferrous-scrap',
    name: 'Non Ferrous Scrap',
    isriCode: 'ISRI Standard Non-Ferrous',
    badge: 'High Value Secondary Metals',
    heroImage: '/non-ferrous-scrap-slider.png',
    heroSubtitle: 'Refined Eco-Friendly Alloys',
    purity: '98% - 99.9% Assay Purity',
    headline: 'Specialized Non-Ferrous Secondary Metals for Advanced Metallurgical Industries',
    fullDescription:
      'Innovix Industries specializes in non-ferrous scrap collections consisting of high-conductivity copper, zinc, tin, nickel, brass, and bronze alloys. Non-ferrous metals provide near-infinite recyclability without losing their inherent physical and mechanical properties. Our state-of-the-art sorting facility ensures exact grading conforming to strict ISRI definitions.',
    specifications: [
      { label: 'Chemical Analysis', value: 'Batch Optical Emission Spectrometry (OES) verified' },
      { label: 'Packaging', value: 'Hydraulic compressed bales / 1-tonne big bags' },
      { label: 'Moisture & Oil', value: '< 0.5% max attachment' },
      { label: 'ISRI Classification', value: 'Strictly segregated by grade code' },
    ],
    applications: [
      'Automotive Electrical Wiring & Battery Terminals',
      'Power Transmission Busbars & Transformer Coils',
      'Marine Grade Propellers & Architectural Cladding',
      'Precision Electronics & Heat Sinks',
    ],
    galleryImages: ['/non-ferrous-scrap-slider.png', '/copper-scrap-slider.png'],
  },
  'copper-wire': {
    slug: 'copper-wire',
    name: 'Copper Wire',
    isriCode: 'ISRI: Berry / Candy',
    badge: '99.9% Bright Wire',
    heroImage: '/copper-scrap-slider.png',
    heroSubtitle: 'Millberry High Purity Wire',
    purity: '99.9% Minimum Cu',
    headline: 'Premium Millberry & Bright Bare Copper Wire Scrap',
    fullDescription:
      'We supply clean, uncoated, unalloyed Millberry copper wire scrap. Sourced from high-voltage electric transmission cables, transformer windings, and communication lines, this grade is completely free of tin, enamel, burned insulation, hair wire, and grease. Highly sought after by rotary smelters and copper rod casting continuous plants.',
    specifications: [
      { label: 'Copper Content (Cu)', value: '99.90% Min (ASTM B115 Grade equivalent)' },
      { label: 'Wire Gauge', value: '16 B&S and thicker heavy bare cables' },
      { label: 'Slag Formation', value: 'Ultra-low residue during melting' },
      { label: 'Form', value: 'Loose wound coils or compressed bales' },
    ],
    applications: [
      'Continuous Casting Continuous Copper Rod (CCR)',
      'High-Conductivity Electric Cables & Wires',
      'Electric Vehicle (EV) Motor Stator & Rotor Windings',
      'Solar Inverter Copper Components',
    ],
    galleryImages: ['/copper-scrap-slider.png', '/recycle-slider.png'],
  },
  'aluminium-wire': {
    slug: 'aluminium-wire',
    name: 'Aluminium Wire',
    isriCode: 'ISRI: Talon / Tann',
    badge: 'Electrical Conductor Grade (EC)',
    heroImage: '/aluminium-scrap-slider.png',
    heroSubtitle: 'Clean EC Grade Wires',
    purity: '99.5% - 99.7% Al',
    headline: 'Clean EC Grade Aluminium Wire Scrap Free of Steel Reinforcement',
    fullDescription:
      'Our aluminium wire scrap consists of clean, unalloyed aluminium transmission cable scrap (EC grade 1350) stripped of steel cores (ACSR stripped), iron connectors, paper insulation, and foreign plastics. Its exceptional thermal and electrical conductivity makes it an ideal feed for high-efficiency aluminium deoxidant granules and remelt ingots.',
    specifications: [
      { label: 'Aluminium Purity', value: '99.5% to 99.7% Minimum' },
      { label: 'Iron & Silicon', value: '< 0.3% max total combined impurities' },
      { label: 'ISRI Category', value: 'Talon (unalloyed) & Tann (insulated stripped)' },
      { label: 'Bale Weights', value: '250kg - 500kg high-density strapped blocks' },
    ],
    applications: [
      'Steel Deoxidation Pellets & Notch Bars',
      'Aluminium Wire Rod Redrawing for Utility Lines',
      'High-Purity Aluminium Alloys (Al-Si and Al-Mg series)',
      'Automotive Radiator & Heat Exchanger Foils',
    ],
    galleryImages: ['/aluminium-scrap-slider.png', '/non-ferrous-scrap-slider.png'],
  },
  'aluminium-scrap': {
    slug: 'aluminium-scrap',
    name: 'Aluminium Scrap',
    isriCode: 'ISRI: Tense / Trump / 6063',
    badge: 'Casting & Extrusions',
    heroImage: '/aluminium-scrap-slider.png',
    heroSubtitle: 'Foundry & Extrusion Scrap',
    purity: '98% Recovery Yield',
    headline: 'Cast Aluminium Purja, Tense, and 6063 Profile Scraps',
    fullDescription:
      'Innovix offers certified assortments of cast aluminium purja (auto engine blocks, transmission cases, wheel rims) and 6063 architectural extrusion scrap. Our quality team ensures thorough magnetic de-ironing, sorting out zinc dies and plastics to deliver high melt recovery yields for secondary foundries.',
    specifications: [
      { label: 'ISRI Tense / Trump', value: 'Clean auto castings with < 2% iron fasteners' },
      { label: '6063 Extrusions', value: 'Mill finish or anodized without thermal barrier' },
      { label: 'Dross Recovery', value: 'High metallurgical recovery > 93%' },
      { label: 'Testing', value: 'Batch spectro analysis available with every lot' },
    ],
    applications: [
      'Secondary Aluminium Ingot (ADC12, LM24, LM6) Casting',
      'Automotive Die-Cast Transmission Cases & Pump Housings',
      'Architectural Profile Billets',
      'Industrial Machinery Components',
    ],
    galleryImages: ['/aluminium-scrap-slider.png', '/ferrous-scrap-slider.png'],
  },
  'copper-scrap': {
    slug: 'copper-scrap',
    name: 'Copper Scrap',
    isriCode: 'ISRI: Birch / Cliff / Dream',
    badge: 'Heavy Copper Scrap',
    heroImage: '/copper-scrap-slider.png',
    heroSubtitle: 'Heavy Industrial Tubing & Busbars',
    purity: '98.5% - 99% Cu',
    headline: 'Industrial Copper Tube, Pipe, Sheet & Mixed Scrap Grades',
    fullDescription:
      'Comprising clean copper tubing, industrial busbars, copper clippings, and clean unalloyed copper scrap. Free of excessive lead solder, bronze fittings, and iron contamination. Every consignment is inspected and baled for convenient mechanized feeding into smelting furnaces.',
    specifications: [
      { label: 'Copper Purity (Cu)', value: '98.5% - 99% Cu' },
      { label: 'ISRI Code', value: 'Birch (No. 1 Copper) / Cliff (No. 2 Copper)' },
      { label: 'Attachment Limits', value: 'Zero hydraulic oil or hazardous paint residues' },
      { label: 'Packaging', value: 'Export seaworthy wooden palletized bales' },
    ],
    applications: [
      'Copper Anode & Cathode Refining Plants',
      'Brass & Bronze Alloy Manufacturing',
      'Plumbing Tube & Industrial Fitting Re-extrusion',
      'Copper Granule Production for Chemical Pigments',
    ],
    galleryImages: ['/copper-scrap-slider.png', '/recycle-slider.png'],
  },
  'recycling-materials': {
    slug: 'recycling-materials',
    name: 'Recycling Materials',
    isriCode: 'Global Circular Economy Specs',
    badge: 'Zero Waste Raw Materials',
    heroImage: '/recycle-slider.png',
    heroSubtitle: 'Sustainable Circular Supply',
    purity: 'Custom Formulations',
    headline: 'Sustainable Recycling Materials Supporting Circular Manufacturing',
    fullDescription:
      'At Innovix Industries, recycling materials means turning complex industrial metal waste into ready-to-use raw resources. We handle factory stampings, turnings, granules, and mixed secondary metals, reducing carbon emissions by up to 85% compared to virgin mining extraction.',
    specifications: [
      { label: 'Carbon Reduction', value: 'Saves up to 85% CO2 vs primary ore smelting' },
      { label: 'Eco Certification', value: 'Full traceability & environmental chain of custody' },
      { label: 'Supply Volume', value: '5,000+ Metric Tonnes per month capacity' },
      { label: 'Documentation', value: 'Green customs clearance & ISRI paperwork' },
    ],
    applications: [
      'Circular Industrial Supply Chains',
      'Green Building LEED Certified Metallic Products',
      'Low-Emission Automotive Metal Castings',
      'Renewable Energy Infrastructure',
    ],
    galleryImages: ['/recycle-slider.png', '/copper-scrap-slider.png'],
  },
  'brass-scrap': {
    slug: 'brass-scrap',
    name: 'Brass Scrap',
    isriCode: 'ISRI: Honey / Ebony / Label',
    badge: 'Yellow & Red Brass Alloys',
    heroImage: '/brass-scrap-slider.png',
    heroSubtitle: 'Precision Foundry Alloys',
    purity: '60% Cu / 40% Zn Typical',
    headline: 'Clean Honey Yellow Brass, Water Meter Scrap & Turnings',
    fullDescription:
      'Our Brass Scrap includes yellow brass castings, rod turnings, water meters, radiator cores, and sanitary fittings. Screened with magnetic drums to remove iron studs and verified by optical spectrometry, our brass consignments yield dependable alloy ratios with minimal dross loss.',
    specifications: [
      { label: 'Composition', value: 'Approx. 58-63% Copper, Balance Zinc & trace tin/lead' },
      { label: 'ISRI Grades', value: 'Honey (Yellow Brass) / Ebony (Red Brass Composition)' },
      { label: 'Contaminants', value: 'Free of manganese bronze and aluminum bronze' },
      { label: 'Form', value: 'Clean sorted lots or compressed bundles' },
    ],
    applications: [
      'Plumbing Valves, Faucets & Pipe Fittings',
      'Decorative Architectural Hardware & Locks',
      'Marine Hardware & Precision Bushings',
      'Musical Instruments & Heat Exchanger Parts',
    ],
    galleryImages: ['/brass-scrap-slider.png', '/copper-scrap-slider.png'],
  },
};

interface ProductDetailPageProps {
  slug: string;
}

export const ProductDetailPage: React.FC<ProductDetailPageProps> = ({ slug }) => {
  const product = productCatalogRecord[slug] || productCatalogRecord['ferrous-scrap'];

  return (
    <div className="w-full bg-white select-none">
      {/* 1. Hero Banner */}
      <section className="relative w-full h-[300px] sm:h-[360px] md:h-[420px] overflow-hidden flex items-center bg-[#072d4b]">
        <img
          src={product.heroImage}
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover filter brightness-[0.4] contrast-[1.1]"
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
              <Sparkles className="w-3.5 h-3.5" /> {product.isriCode}
            </div>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight mb-3">
              {product.name}
            </h1>
            <p className="text-gray-200 text-sm sm:text-base leading-relaxed max-w-xl">
              {product.headline}
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. Stats Strip */}
      <StatsBanner />

      {/* 3. Detailed Overview & Specifications Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-16 sm:mb-24">
          
          {/* Left: Product Deep Dive (7 Cols) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-50 text-[#b65862] text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4" /> {product.purity}
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#072d4b] leading-tight">
              Grade Overview & Metallurgical Integrity
            </h2>

            <p className="text-gray-600 text-sm sm:text-base leading-relaxed text-justify sm:text-left">
              {product.fullDescription}
            </p>

            {/* Applications List */}
            <div className="pt-2">
              <h4 className="text-base font-bold text-gray-900 mb-3 flex items-center gap-2">
                <Cpu className="w-5 h-5 text-[#b65862]" /> Prime Industrial Applications
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {product.applications.map((app, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-gray-700 bg-slate-50 p-2.5 rounded-xl border border-slate-200/60">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{app}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Technical Spec Sheet Box (5 Cols) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5"
          >
            <div className="bg-[#072d4b] text-white rounded-3xl p-7 sm:p-9 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-rose-500/10 rounded-full blur-2xl pointer-events-none" />
              
              <div className="flex items-center gap-2 text-rose-300 text-xs font-bold uppercase tracking-wider mb-2">
                <Layers className="w-4 h-4" /> Technical Parameters
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-6">Quality Specifications</h3>

              <div className="space-y-4">
                {product.specifications.map((spec, sIdx) => (
                  <div key={sIdx} className="pb-3 border-b border-white/10 last:border-0 last:pb-0">
                    <span className="text-[11px] uppercase tracking-wider text-gray-400 block font-medium">
                      {spec.label}
                    </span>
                    <span className="text-sm sm:text-base font-semibold text-white mt-0.5 block">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-4">
                <button
                  onClick={() => {
                    const el = document.getElementById('partner');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="w-full py-3 bg-[#b65862] hover:bg-[#a24851] text-white font-semibold rounded-xl text-xs sm:text-sm transition-all flex items-center justify-center gap-2 shadow-lg cursor-pointer"
                >
                  <span>Request Specific Grade Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Visual Inspection Gallery */}
        <div className="pt-6">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#b65862]">Visual Inspection</span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#072d4b] mt-1">Material Yard Batch Photos</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            {product.galleryImages.map((gImg, gIdx) => (
              <motion.div
                key={gIdx}
                whileHover={{ scale: 1.02 }}
                className="rounded-3xl overflow-hidden shadow-lg border border-slate-200 h-64 sm:h-80 md:h-96 group"
              >
                <img
                  src={gImg}
                  alt={`${product.name} sample batch`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Continuous Services Slider */}
      <FloatingActions />

      {/* 5. Request Quote Form */}
      <PartnerWithUs />
    </div>
  );
};

export default ProductDetailPage;
