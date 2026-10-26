import React from 'react';
import { motion } from 'framer-motion';
import { Award, Target, Eye, ShieldCheck, Users, Globe2 } from 'lucide-react';
import { About } from '../components/About';
import { StatsBanner } from '../components/StatsBanner';
import { FloatingActions } from '../components/FloatingActions';

export const AboutPage: React.FC = () => {
  return (
    <div className="w-full bg-white select-none">
      {/* 1. Dedicated About Hero Banner */}
      <section className="relative w-full h-[280px] sm:h-[340px] md:h-[380px] overflow-hidden flex items-center bg-[#072d4b]">
        <img
          src="/recycle-slider.png"
          alt="About Innovix Industries"
          className="absolute inset-0 w-full h-full object-cover filter brightness-[0.4] contrast-[1.1]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#031526]/90 via-[#07243e]/70 to-transparent"></div>

        <div className="relative z-10 max-w-7xl mx-auto w-full px-5 sm:px-8 md:px-12 text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/20 text-rose-300 text-xs font-semibold uppercase tracking-wider mb-3 backdrop-blur-sm border border-rose-400/20">
              <Award className="w-3.5 h-3.5" /> Innovix Legacy & Leadership
            </div>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight mb-3">
              About Innovix Industries
            </h1>
            <p className="text-gray-200 text-sm sm:text-base leading-relaxed max-w-xl">
              Driving circular metal economy through ethical sourcing, cutting-edge metallurgical refining, and international scrap recycling compliance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. Core Stats Strip Component */}
      <StatsBanner />

      {/* 3. Existing Main About Component with 2x2 cards & left-right animations */}
      <About />

      {/* 4. Mission & Vision Dual Card Section with Scroll Animations */}
      <section className="w-full bg-white py-14 sm:py-20 border-t border-gray-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
            {/* Mission Card */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              whileHover={{ y: -5 }}
              className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-[#f8fafc] to-rose-50/40 border border-slate-200 shadow-sm"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#b65862] text-white flex items-center justify-center mb-6 shadow-md shadow-rose-200">
                <Target className="w-6 h-6 stroke-[2]" />
              </div>
              <h3 className="text-2xl font-extrabold text-[#072d4b] mb-4">Our Mission</h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                To transform non-ferrous and ferrous industrial scrap into high-purity recycled raw materials, lowering global environmental footprint while empowering modern manufacturing industries with dependable, cost-effective metal supply chains.
              </p>
            </motion.div>

            {/* Vision Card */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              whileHover={{ y: -5 }}
              className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-[#f8fafc] to-blue-50/40 border border-slate-200 shadow-sm"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#072d4b] text-white flex items-center justify-center mb-6 shadow-md shadow-blue-200">
                <Eye className="w-6 h-6 stroke-[2]" />
              </div>
              <h3 className="text-2xl font-extrabold text-[#072d4b] mb-4">Our Vision</h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                To become the premier international benchmark in circular metallurgy, championing zero-waste sustainability, fair cross-border commerce, and technological precision across all secondary metal classifications.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. Core Values Grid */}
      <section className="w-full bg-[#072d4b] text-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-rose-300">Guiding Principles</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold mt-2">Why Global Partners Choose Us</h2>
            <div className="w-14 h-1 bg-rose-400 mx-auto mt-3 rounded-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              {
                icon: ShieldCheck,
                title: 'Certified Purity',
                desc: 'Strict optical spectroscopy guarantees 99%+ chemical grade consistency.',
              },
              {
                icon: Globe2,
                title: 'International Reach',
                desc: 'Reliable cross-border clearance, maritime logistics, and seamless shipping.',
              },
              {
                icon: Users,
                title: 'Client Centricity',
                desc: 'Transparent contracts, timely deliveries, and custom alloy processing.',
              },
              {
                icon: Award,
                title: 'Eco Compliance',
                desc: 'Strict adherence to ISRI, ASTM, and global circular safety guidelines.',
              },
            ].map((val, idx) => {
              const IconComp = val.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  whileHover={{ y: -6 }}
                  className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all"
                >
                  <IconComp className="w-8 h-8 text-rose-300 mb-4" />
                  <h4 className="text-lg font-bold text-white mb-2">{val.title}</h4>
                  <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">{val.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. Continuous Services Slider */}
      <FloatingActions />
    </div>
  );
};

export default AboutPage;
