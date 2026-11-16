import React from "react";
import { motion } from "framer-motion";
import { Factory, Globe2, CheckCircle2, Sparkles } from "lucide-react";
import { StatsBanner } from "../components/StatsBanner";
import { FloatingActions } from "../components/FloatingActions";
import { PartnerWithUs } from "../components/PartnerWithUs";

interface Member {
  id: number;
  name: string;
}

const members: Member[] = [
  { id: 1, name: "CA Amar Prasad" },
  { id: 2, name: "CA Dheeraj kr Singh" },
  { id: 3, name: "Mohit Mishra" },
  { id: 4, name: "Amandeep Singh" },
  { id: 5, name: "Amar Verma" },
  { id: 6, name: "Vikram Thakur" },
  { id: 7, name: "Irshad Ali" },
];

export const TeamPage: React.FC = () => {
  return (
    <div className="w-full bg-white dark:bg-[#07131e] text-gray-900 dark:text-gray-100 select-none transition-colors duration-300">
      {/* 1. Team Hero Banner - Styled with Official Innovix Navy & Cyan */}
      <section className="relative w-full h-[260px] sm:h-[320px] md:h-[360px] overflow-hidden flex items-center bg-[#072d4b] dark:bg-[#040c14]">
        <img
          src="/recycle-slider.png"
          alt="Our Team"
          className="absolute inset-0 w-full h-full object-cover filter brightness-[0.35] dark:brightness-[0.22] contrast-[1.15]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#031526]/95 via-[#07243e]/85 to-[#0284c7]/20 dark:from-[#020910]/98 dark:via-[#051624]/90 dark:to-transparent"></div>

        <div className="relative z-10 max-w-7xl mx-auto w-full px-5 sm:px-8 md:px-12 text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl"
          >
            <div
              className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[var(--theme-primary)]/20 text-[var(--theme-primary-light)] text-xs font-semibold uppercase tracking-wider mb-3 backdrop-blur-md border border-[var(--theme-primary)]/30 shadow-sm"
              style={{ color: "var(--theme-primary)" }}
            >
              <Sparkles className="w-3.5 h-3.5" /> Innovix Leadership
            </div>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight mb-3">
              Our Team
            </h1>
            <p className="text-gray-200 dark:text-gray-300 text-sm sm:text-base leading-relaxed max-w-xl">
              Distinguished professionals guiding Innovix Industries toward
              sustainable circular growth and operational excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. Stats Strip */}
      <StatsBanner />

      {/* 3. Team Members Grid (Clean, Balanced, 3D Depth, No Logos, No Designations) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-24 relative">
        {/* Subtle Ambient Background Lighting */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[var(--theme-primary)]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16 relative z-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#072d4b] dark:text-white tracking-tight">
            Our Team
          </h2>
          <div className="w-16 h-1 bg-[var(--theme-primary)] mx-auto mt-3 rounded-full" />
          <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-3 max-w-md mx-auto">
            Steering circular metallurgy with integrity and global trade
            capability.
          </p>
        </div>

        {/* Clean, Symmetrical & Balanced Executive Name Cards Grid */}
        <div className="flex flex-wrap justify-center gap-6 sm:gap-7 max-w-6xl mx-auto relative z-10 perspective-1000">
          {members.map((member, idx) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.45, delay: idx * 0.05 }}
              whileHover={{
                y: -6,
                scale: 1.025,
              }}
              className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(25%-1.35rem)] min-w-[230px] max-w-[270px] relative rounded-2xl p-6 sm:p-7 flex flex-col items-center justify-between text-center transition-all duration-300 group cursor-default border border-slate-200/90 dark:border-slate-800/90 bg-white dark:bg-[#091724] shadow-md hover:shadow-xl dark:shadow-[0_15px_30px_-10px_rgba(0,0,0,0.5)] card-3d overflow-hidden"
            >
              {/* Top Hairline Gradient Accent Matching Logo Theme */}
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[var(--theme-primary)] to-transparent opacity-75 group-hover:opacity-100 transition-opacity" />

              {/* Ambient Hover Glow */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-[var(--theme-primary)]/10 rounded-full blur-2xl pointer-events-none group-hover:scale-150 transition-transform duration-500" />

              {/* Subtle Executive Index */}
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-2">
                Core Member · 0{member.id}
              </span>

              {/* Member Name */}
              <div className="my-2 flex flex-col items-center">
                <h3 className="text-lg sm:text-xl font-black text-gray-900 dark:text-white group-hover:text-[var(--theme-primary)] transition-colors tracking-tight leading-snug">
                  {member.name}
                </h3>
              </div>

              {/* Bottom Subtle Pill Accent */}
              <div className="w-8 h-1 bg-[var(--theme-primary)]/40 rounded-full mt-2 group-hover:w-14 group-hover:bg-[var(--theme-primary)] transition-all duration-300" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. Leadership Operational Values Section */}
      <section className="w-full bg-[#f8fafc] dark:bg-[#06111b] py-16 sm:py-20 border-y border-slate-200 dark:border-slate-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ y: -6, scale: 1.02 }}
              className="p-8 bg-white dark:bg-[#091724] rounded-3xl shadow-lg dark:shadow-2xl border border-slate-200/80 dark:border-slate-800 card-3d"
            >
              <Factory className="w-10 h-10 text-[var(--theme-primary)] mb-4" />
              <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                Hands-On Metallurgy
              </h4>
              <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm leading-relaxed">
                Direct oversight on sorting purity, density baling standards,
                and furnace feedstock preparation.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -6, scale: 1.02 }}
              className="p-8 bg-white dark:bg-[#091724] rounded-3xl shadow-lg dark:shadow-2xl border border-slate-200/80 dark:border-slate-800 card-3d"
            >
              <Globe2 className="w-10 h-10 text-[#072d4b] dark:text-blue-400 mb-4" />
              <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                Cross-Border Logistics
              </h4>
              <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm leading-relaxed">
                Comprehensive coordination of trade documentation, customs
                clearance, and global maritime port handling.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -6, scale: 1.02 }}
              className="p-8 bg-white dark:bg-[#091724] rounded-3xl shadow-lg dark:shadow-2xl border border-slate-200/80 dark:border-slate-800 card-3d"
            >
              <CheckCircle2 className="w-10 h-10 text-emerald-600 dark:text-emerald-400 mb-4" />
              <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                Integrity & Transparency
              </h4>
              <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm leading-relaxed">
                Direct material inspection provided with every single shipment.
                Ensuring verified weight and physical grade in every container.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. Continuous Services Slider */}
      <FloatingActions />

      {/* 6. Partner With Us / Direct Contact */}
      <PartnerWithUs />
    </div>
  );
};

export default TeamPage;
