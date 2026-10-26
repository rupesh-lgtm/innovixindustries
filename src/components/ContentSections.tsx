import React, { useState } from 'react';
import { motion, type Variants } from 'framer-motion';
import { ShieldCheck, Recycle, Factory, Award, ArrowRight, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';

export const ContentSections: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.7 },
      colors: ['#b65862', '#072d4b', '#f59e0b', '#10b981']
    });
    setTimeout(() => setFormSubmitted(false), 5000);
  };

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="w-full bg-slate-50 py-12 sm:py-16 md:py-20 overflow-hidden">
      {/* About Section */}
      <section id="about-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 sm:mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInUp}
          >
            <div className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1.5 rounded-full bg-rose-100 text-[#a24851] text-[11px] sm:text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
              <Recycle className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: '6s' }} /> 
              Sustainable Metal Solutions
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#072d4b] tracking-tight leading-tight mb-4 sm:mb-6">
              Pioneering Modern Industrial Scrap Copper Recycling
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6 sm:mb-8 text-sm sm:text-base">
              At Innovix Industries, we are redefining raw materials management. By utilizing state-of-the-art sorting and hydrometallurgical processing technologies, we convert discarded copper scraps, cable wires, and industrial residues into 99.9% pure copper feedstocks.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <motion.div 
                whileHover={{ y: -4, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.08)" }}
                className="p-4 sm:p-5 bg-white rounded-xl shadow-sm border border-gray-100 transition-all"
              >
                <ShieldCheck className="w-8 sm:w-9 h-8 sm:h-9 text-[#b65862] mb-2 sm:mb-3" />
                <h4 className="font-bold text-gray-800 text-sm">ISO Certified Quality</h4>
                <p className="text-xs text-gray-500 mt-1 leading-relaxed">Rigorous spectral tests ensuring minimal impurities and maximum efficiency.</p>
              </motion.div>
              <motion.div 
                whileHover={{ y: -4, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.08)" }}
                className="p-4 sm:p-5 bg-white rounded-xl shadow-sm border border-gray-100 transition-all"
              >
                <Factory className="w-8 sm:w-9 h-8 sm:h-9 text-[#0f3d61] mb-2 sm:mb-3" />
                <h4 className="font-bold text-gray-800 text-sm">Industrial Capacity</h4>
                <p className="text-xs text-gray-500 mt-1 leading-relaxed">Processing over 5,000 MT per month reliably with end-to-end logistics.</p>
              </motion.div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl sm:shadow-2xl border-2 sm:border-4 border-white group">
              <img 
                src="/recycle-slider.png" 
                alt="Innovix Industrial Recycling Facilities" 
                className="w-full h-64 sm:h-80 md:h-[380px] object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0e2b45]/90 via-[#07243e]/30 to-transparent"></div>
              
              {/* Top floating pill badge */}
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-bold text-[#072d4b] shadow-lg flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                Direct Smelter Supply
              </div>

              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 text-white"
              >
                <span className="text-[10px] sm:text-xs uppercase font-semibold text-rose-300 tracking-wider">Certified Recycling Yard</span>
                <p className="text-base sm:text-xl font-bold mt-1">High-Grade Non-Ferrous & Ferrous Sorting</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 sm:mb-24">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center max-w-2xl mx-auto mb-10 sm:mb-14"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-[#b65862]">Our Catalog</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#072d4b] mt-2">Specialized Metal Products</h2>
          <p className="text-gray-600 mt-2 sm:mt-3 text-sm sm:text-base">Supplying premium grades conforming to ASTM and ISRI standard classifications.</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {[
            {
              id: 'copper-scrap',
              title: 'Millberry Bright Copper Wire',
              isri: 'ISRI: Berry / Candy',
              image: '/copper-scrap-slider.png',
              desc: 'Clean, untinned, uncoated copper wire scrap with minimum 99.9% Cu purity, ideal for direct smelting and electrical applications.',
              badge: 'In Stock',
            },
            {
              id: 'aluminium-scrap',
              title: 'Aluminium Extrusions & Alloy Scrap',
              isri: 'ISRI: 6063 / Tense',
              image: '/aluminium-scrap-slider.png',
              desc: 'Clean aluminium profiles, sections and alloy turnings sorted for high thermal conductivity and low dross yield.',
              badge: 'In Stock',
            },
            {
              id: 'brass-scrap',
              title: 'Brass & Bronze Scrap',
              isri: 'ISRI: Honey / Ebony',
              image: '/brass-scrap-slider.png',
              desc: 'Selected brass turnings, fittings, rod cuts and yellow brass scrap free of excessive iron or plating.',
              badge: 'Custom Orders',
            },
          ].map((product, idx) => (
            <motion.div 
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: idx * 0.12, duration: 0.5 }}
              whileHover={{ y: -6, boxShadow: "0 20px 30px -10px rgba(0, 0, 0, 0.12)" }}
              className="bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100 group transition-all duration-300 flex flex-col"
            >
              <div className="h-44 sm:h-52 overflow-hidden relative">
                <img 
                  src={product.image} 
                  alt={product.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" 
                />
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-full text-[11px] font-semibold text-gray-700 shadow-sm">
                  {product.isri}
                </div>
              </div>
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 group-hover:text-brand-banner transition-colors">{product.title}</h3>
                  <p className="text-gray-600 text-xs sm:text-sm mt-2 sm:mt-3 leading-relaxed">
                    {product.desc}
                  </p>
                </div>
                <div className="mt-5 sm:mt-6 flex items-center justify-between pt-4 border-t border-gray-100">
                  <span className="text-[11px] sm:text-xs font-medium text-emerald-600 bg-emerald-50 px-2 sm:px-2.5 py-1 rounded-md">
                    {product.badge}
                  </span>
                  <motion.a 
                    href="#contact-section"
                    whileHover={{ x: 4 }}
                    className="text-xs sm:text-sm font-semibold text-[#072d4b] hover:text-brand-banner flex items-center gap-1.5"
                  >
                    Inquire <ArrowRight className="w-3.5 sm:w-4 h-3.5 sm:h-4" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Team / Why Us Section */}
      <section id="team-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 sm:mb-24">
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden bg-gradient-to-r from-[#072d4b] via-[#0b385e] to-[#123e65] rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-14 text-white shadow-2xl"
        >
          {/* Animated decorative glow background */}
          <div className="absolute -top-24 -right-24 w-80 h-80 bg-rose-500/20 rounded-full blur-3xl pointer-events-none animate-pulse-subtle" />
          <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 text-rose-300 text-xs font-bold uppercase tracking-wider mb-3 bg-white/10 px-3 py-1 rounded-full backdrop-blur-sm">
              <Award className="w-4 h-4 text-rose-300" /> Global Leadership
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight mb-3 sm:mb-4 leading-tight">
              Dedicated Team of Metallurgists & Green Logistics Experts
            </h2>
            <p className="text-gray-300 leading-relaxed text-xs sm:text-sm md:text-base">
              With over 20+ years of collective experience across non-ferrous metal trading and refining, our specialists ensure seamless customs processing, container inspection, and guaranteed purity certifications on all deliveries worldwide.
            </p>
            <div className="mt-6 sm:mt-8 flex flex-wrap gap-3 sm:gap-4">
              <motion.a
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                href="#contact-section"
                className="w-full sm:w-auto text-center px-6 sm:px-7 py-2.5 sm:py-3 bg-[#b65862] hover:bg-[#a24851] rounded-lg text-white font-medium text-sm transition-all shadow-lg"
              >
                Connect With Our Team
              </motion.a>
              <motion.button 
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => alert('Innovix Industries Specification Sheet is available on request.')}
                className="w-full sm:w-auto text-center px-6 sm:px-7 py-2.5 sm:py-3 bg-white/10 hover:bg-white/20 rounded-lg text-white font-medium text-sm border border-white/20 transition-all backdrop-blur-sm"
              >
                Download Specifications PDF
              </motion.button>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section id="contact-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl sm:rounded-3xl shadow-xl border border-gray-100 p-6 sm:p-10 md:p-14"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#b65862]">Get In Touch</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#072d4b] mt-2 mb-3 sm:mb-4">Request a Quote or Partnership</h2>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-6 sm:mb-8">
                Tell us about your requirements for recyclable copper and non-ferrous raw materials. We supply bulk orders globally with full purity assay reports.
              </p>
              
              <div className="space-y-4 text-xs sm:text-sm text-gray-700">
                <motion.div whileHover={{ x: 5 }} className="flex items-center gap-3">
                  <div className="w-9 sm:w-10 h-9 sm:h-10 rounded-full bg-rose-50 flex items-center justify-center text-[#b65862] font-semibold shrink-0">
                    📍
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Headquarters</p>
                    <span className="text-[11px] sm:text-xs text-gray-500">Innovix Industrial Zone, Sector 4, Metallurgy Way</span>
                  </div>
                </motion.div>
                <motion.div whileHover={{ x: 5 }} className="flex items-center gap-3">
                  <div className="w-9 sm:w-10 h-9 sm:h-10 rounded-full bg-rose-50 flex items-center justify-center text-[#b65862] font-semibold shrink-0">
                    ✉️
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Email Inquiries</p>
                    <span className="text-[11px] sm:text-xs text-gray-500">orders@innovixindustries.com</span>
                  </div>
                </motion.div>
                <motion.div whileHover={{ x: 5 }} className="flex items-center gap-3">
                  <div className="w-9 sm:w-10 h-9 sm:h-10 rounded-full bg-rose-50 flex items-center justify-center text-[#b65862] font-semibold shrink-0">
                    📞
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Direct Desk</p>
                    <span className="text-[11px] sm:text-xs text-gray-500">+1 (800) 555-NOVI (Toll-Free)</span>
                  </div>
                </motion.div>
              </div>
            </div>

            <form onSubmit={handleFormSubmit} className="space-y-3 sm:space-y-4">
              {formSubmitted && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-3 sm:p-4 bg-emerald-50 border border-emerald-200 rounded-xl flex items-center gap-3 text-emerald-800 text-xs sm:text-sm font-medium"
                >
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                  Thank you! Your quote request has been dispatched to our sales desk.
                </motion.div>
              )}

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">Company / Full Name</label>
                <input 
                  type="text" 
                  required 
                  placeholder="e.g. Acme Cable Works" 
                  className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#b65862] text-xs sm:text-sm transition-all"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Email Address</label>
                  <input 
                    type="email" 
                    required 
                    placeholder="name@company.com" 
                    className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#b65862] text-xs sm:text-sm transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Required Material</label>
                  <select className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#b65862] text-xs sm:text-sm bg-white transition-all">
                    <option>Millberry Copper Wire (99.9%)</option>
                    <option>Copper Granules & Shreds</option>
                    <option>Copper Pipe & Tube Scrap</option>
                    <option>Brass / Bronze Alloys</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">Estimated Quantity & Message</label>
                <textarea 
                  rows={3} 
                  placeholder="Mention tonnages, delivery port, or specific requirements..." 
                  className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#b65862] text-xs sm:text-sm transition-all"
                ></textarea>
              </div>
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit" 
                className="w-full py-3 sm:py-3.5 bg-[#b65862] hover:bg-[#a24851] text-white font-semibold rounded-lg text-xs sm:text-sm shadow-md hover:shadow-xl transition-all"
              >
                Send Inquiry
              </motion.button>
            </form>
          </div>
        </motion.div>
      </section>
    </div>
  );
};
