import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, MessageSquare, Headphones, ShieldCheck } from 'lucide-react';
import { PartnerWithUs } from '../components/PartnerWithUs';
import { StatsBanner } from '../components/StatsBanner';
import { FloatingActions } from '../components/FloatingActions';

export const ContactPage: React.FC = () => {
  return (
    <div className="w-full bg-white dark:bg-[#07131e] text-gray-900 dark:text-gray-100 select-none transition-colors duration-300">
      {/* 1. Contact Page Hero Banner */}
      <section className="relative w-full h-[280px] sm:h-[340px] md:h-[380px] overflow-hidden flex items-center bg-[#072d4b] dark:bg-[#040c14]">
        <img
          src="/copper-scrap-slider.png"
          alt="Contact Innovix Industries"
          className="absolute inset-0 w-full h-full object-cover filter brightness-[0.35] dark:brightness-[0.25] contrast-[1.15]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#031526]/95 via-[#07243e]/85 to-transparent dark:from-[#020910]/98 dark:via-[#051624]/90"></div>

        <div className="relative z-10 max-w-7xl mx-auto w-full px-5 sm:px-8 md:px-12 text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/20 text-rose-300 text-xs font-semibold uppercase tracking-wider mb-3 backdrop-blur-sm border border-rose-400/20">
              <Headphones className="w-3.5 h-3.5" /> 24/7 Global Trading & Inquiries
            </div>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight mb-3">
              Get in Touch with Us
            </h1>
            <p className="text-gray-200 dark:text-gray-300 text-sm sm:text-base leading-relaxed max-w-xl">
              Connect with our procurement and metallurgical sales desk for verified quotes, container shipping assays, and international trade assistance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. Direct Contact Cards Grid with 3D Depth */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 sm:-mt-14 relative z-20 mb-16 perspective-1000">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {/* Card 1: Direct Calling */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="bg-white dark:bg-[#091724] rounded-3xl p-6 shadow-xl dark:shadow-2xl border border-slate-200/80 dark:border-slate-800 flex flex-col justify-between card-3d"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-rose-50 dark:bg-rose-950/60 text-[#b65862] dark:text-rose-400 border border-rose-200 dark:border-rose-900/40 flex items-center justify-center mb-4 shadow-sm">
                <Phone className="w-6 h-6 stroke-[2]" />
              </div>
              <h4 className="text-base font-bold text-gray-900 dark:text-white mb-1">Direct Phone</h4>
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-3">Mon-Sat from 9am to 7pm IST.</p>
              <a href="tel:01204977413" className="text-sm font-extrabold text-[#b65862] dark:text-rose-400 hover:underline">
                01204977413
              </a>
            </div>
          </motion.div>

          {/* Card 2: Email Desk */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="bg-white dark:bg-[#091724] rounded-3xl p-6 shadow-xl dark:shadow-2xl border border-slate-200/80 dark:border-slate-800 flex flex-col justify-between card-3d"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-950/60 text-[#072d4b] dark:text-blue-400 border border-blue-200 dark:border-blue-900/40 flex items-center justify-center mb-4 shadow-sm">
                <Mail className="w-6 h-6 stroke-[2]" />
              </div>
              <h4 className="text-base font-bold text-gray-900 dark:text-white mb-1">Email Inquiries</h4>
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-3">Expect replies within 4 business hours.</p>
              <a href="mailto:info@innovixipl.com" className="text-sm font-extrabold text-[#072d4b] dark:text-blue-400 hover:underline">
                info@innovixipl.com
              </a>
            </div>
          </motion.div>

          {/* Card 3: Corporate Office */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="bg-white dark:bg-[#091724] rounded-3xl p-6 shadow-xl dark:shadow-2xl border border-slate-200/80 dark:border-slate-800 flex flex-col justify-between card-3d"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-900/40 flex items-center justify-center mb-4 shadow-sm">
                <MapPin className="w-6 h-6 stroke-[2]" />
              </div>
              <h4 className="text-base font-bold text-gray-900 dark:text-white mb-1">Corporate Office</h4>
              <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                C-35, 1st Floor, Sector-6, Noida, Uttar Pradesh, India 201301
              </p>
            </div>
          </motion.div>

          {/* Card 4: WhatsApp Support */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="bg-white dark:bg-[#091724] rounded-3xl p-6 shadow-xl dark:shadow-2xl border border-slate-200/80 dark:border-slate-800 flex flex-col justify-between card-3d"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-rose-50 dark:bg-rose-950/60 text-[#b65862] dark:text-rose-400 border border-rose-200 dark:border-rose-900/40 flex items-center justify-center mb-4 shadow-sm">
                <MessageSquare className="w-6 h-6 stroke-[2]" />
              </div>
              <h4 className="text-base font-bold text-gray-900 dark:text-white mb-1">Instant WhatsApp</h4>
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-3">Quick inventory and pricing quotes.</p>
              <a href="https://wa.me/919717033816" target="_blank" rel="noreferrer" className="text-sm font-extrabold text-[#b65862] dark:text-rose-400 hover:underline">
                Chat on WhatsApp →
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. Partner / Request Quote Form Component (NO IMAGE) */}
      <PartnerWithUs />

      {/* 4. Interactive Map & Logistics Dispatch Info */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="bg-[#072d4b] dark:bg-[#06121f] text-white rounded-3xl p-8 sm:p-12 md:p-14 overflow-hidden relative shadow-2xl border dark:border-slate-800 shadow-3d-card">
          <div className="relative z-10 max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-rose-300 dark:text-rose-400">Global Supply Chain</span>
            <h3 className="text-2xl sm:text-4xl font-extrabold mt-2 mb-4">
              Container Inbound & Dispatch Network
            </h3>
            <p className="text-gray-300 dark:text-gray-300 text-xs sm:text-sm md:text-base leading-relaxed mb-6">
              Our central logistics hub in Noida coordinates daily container clearance through Mundra, JNPT, and Chennai ports with reliable transport coordination and prompt container dispatch.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-rose-300 dark:text-rose-400 shrink-0" />
                <span className="text-xs sm:text-sm text-gray-200">Dispatch Turnaround: Within 48-72 Hours</span>
              </div>
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
                <span className="text-xs sm:text-sm text-gray-200">Guaranteed Weight & Physical Grade Match</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Stats Strip */}
      <StatsBanner />

      {/* 6. Continuous Services Slider */}
      <FloatingActions />
    </div>
  );
};

export default ContactPage;
