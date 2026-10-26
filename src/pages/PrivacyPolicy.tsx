import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, FileText, CheckCircle2, Server, UserCheck, Mail, Phone, MapPin } from 'lucide-react';

export const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="w-full bg-white select-none">
      {/* 1. Hero Banner */}
      <section className="relative w-full h-[260px] sm:h-[320px] md:h-[360px] overflow-hidden flex items-center bg-[#072d4b]">
        <img
          src="/industry-solutions-hero.jpg"
          alt="Privacy Policy - Innovix Industries"
          className="absolute inset-0 w-full h-full object-cover filter brightness-[0.35] contrast-[1.15]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#031526]/95 via-[#07243e]/80 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto w-full px-5 sm:px-8 md:px-12 text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-rose-500/20 text-rose-300 text-xs font-semibold uppercase tracking-wider mb-3 backdrop-blur-sm border border-rose-400/25">
              <Shield className="w-3.5 h-3.5 text-rose-300" />
              Data Protection & Privacy Standards
            </div>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight mb-3">
              Privacy Policy
            </h1>
            <p className="text-gray-200 text-xs sm:text-sm md:text-base leading-relaxed max-w-2xl">
              How INNOVIX INDUSTRIES PRIVATE LIMITED collects, uses, safeguards, and respects your business and personal information across our website and trade operations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. Main Content Grid */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
        
        {/* Effective Date & Overview Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="p-5 sm:p-6 rounded-2xl bg-slate-50 border border-slate-200/80 mb-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-sm"
        >
          <div>
            <h2 className="text-sm sm:text-base font-bold text-gray-900">
              Commitment to Client Confidentiality
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 mt-0.5">
              We uphold strict data security standards in compliance with the Digital Personal Data Protection Act (DPDP) and international commercial trade norms.
            </p>
          </div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-semibold text-slate-700 whitespace-nowrap self-start sm:self-auto">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Last Updated: January 2026
          </div>
        </motion.div>

        {/* Policy Sections Stack */}
        <div className="space-y-8 sm:space-y-10 overflow-hidden">

          {/* Section 1: Information We Collect (Slide from Left) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="p-6 sm:p-8 rounded-2xl border border-slate-200 bg-white hover:border-[#b65862]/40 transition-colors shadow-sm"
          >
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-rose-50 text-[#b65862] flex items-center justify-center shrink-0 mt-0.5 font-bold text-sm">
                01
              </div>
              <div className="space-y-3">
                <h3 className="text-lg sm:text-xl font-bold text-[#111827]">
                  Information We Collect
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  When you visit our website, submit quotation requests, or partner with us for metal scrap trading, we may collect the following details:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 text-xs sm:text-sm text-slate-700 space-y-1">
                    <span className="font-semibold text-gray-900 block">Personal & Contact Details:</span>
                    <span>Full name, business email address, phone/WhatsApp number, company designation, and corporate billing address.</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 text-xs sm:text-sm text-slate-700 space-y-1">
                    <span className="font-semibold text-gray-900 block">Commercial Trade Information:</span>
                    <span>GST number, IEC (Import Export Code), company registration, material requirement specifications, and delivery destination details.</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Section 2: How We Use Your Data (Slide from Right) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="p-6 sm:p-8 rounded-2xl border border-slate-200 bg-white hover:border-[#b65862]/40 transition-colors shadow-sm"
          >
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-rose-50 text-[#b65862] flex items-center justify-center shrink-0 mt-0.5 font-bold text-sm">
                02
              </div>
              <div className="space-y-3">
                <h3 className="text-lg sm:text-xl font-bold text-[#111827]">
                  How We Utilize Your Information
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  We use collected data solely for legitimate business purposes including:
                </p>
                <div className="space-y-2">
                  {[
                    'Preparing price quotes, material specification sheets, and proforma invoices.',
                    'Coordinating scrap dispatch, port logistics, weighbridge documentation, and delivery tracking.',
                    'Ensuring compliance with statutory customs, GST, and pollution control filings.',
                    'Responding to your customer service queries, WhatsApp messages, and callback requests.',
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Section 3: Data Security & Storage (Slide from Left) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="p-6 sm:p-8 rounded-2xl border border-slate-200 bg-white hover:border-[#b65862]/40 transition-colors shadow-sm"
          >
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-rose-50 text-[#b65862] flex items-center justify-center shrink-0 mt-0.5 font-bold text-sm">
                03
              </div>
              <div className="space-y-2.5">
                <h3 className="text-lg sm:text-xl font-bold text-[#111827]">
                  Data Security & Confidentiality
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  We implement robust technical and organizational security measures—including TLS encryption, firewalled servers, and role-based access permissions—to guard your corporate trade documents and personal data against unauthorized access, loss, or misuse.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Section 4: Non-Disclosure & Third Parties (Slide from Right) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="p-6 sm:p-8 rounded-2xl border border-slate-200 bg-white hover:border-[#b65862]/40 transition-colors shadow-sm"
          >
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-rose-50 text-[#b65862] flex items-center justify-center shrink-0 mt-0.5 font-bold text-sm">
                04
              </div>
              <div className="space-y-2.5">
                <h3 className="text-lg sm:text-xl font-bold text-[#111827]">
                  Third-Party Disclosure & Zero-Sale Policy
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  <strong>We do not sell, rent, or trade your data to third parties.</strong> Information is only shared with accredited logistics carriers, customs clearance agents, banking partners, or regulatory authorities strictly when necessary to execute shipment contracts or comply with legal requirements.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Section 5: Cookies & Analytics (Slide from Left) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="p-6 sm:p-8 rounded-2xl border border-slate-200 bg-white hover:border-[#b65862]/40 transition-colors shadow-sm"
          >
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-rose-50 text-[#b65862] flex items-center justify-center shrink-0 mt-0.5 font-bold text-sm">
                05
              </div>
              <div className="space-y-2.5">
                <h3 className="text-lg sm:text-xl font-bold text-[#111827]">
                  Cookies & Website Analytics
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  Our website may use standard session cookies and aggregate analytical tools to analyze visitor flow, enhance page load speeds, and optimize user experience. These tools collect anonymized technical information (such as browser type and screen resolution) without identifying individual users.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Section 6: Your Data Rights (Slide from Right) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="p-6 sm:p-8 rounded-2xl border border-slate-200 bg-white hover:border-[#b65862]/40 transition-colors shadow-sm"
          >
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-rose-50 text-[#b65862] flex items-center justify-center shrink-0 mt-0.5 font-bold text-sm">
                06
              </div>
              <div className="space-y-2.5">
                <h3 className="text-lg sm:text-xl font-bold text-[#111827]">
                  Your Legal Rights
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  You have the right to request access to the personal data we hold about you, request corrections to inaccurate contact information, or request deletion of non-statutory records by writing to our designated Data Protection Officer.
                </p>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Privacy Officer Contact Card (Slide from Bottom to Top) */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mt-14 p-8 rounded-3xl bg-gradient-to-br from-[#072d4b] to-[#041d31] text-white shadow-xl relative overflow-hidden"
        >
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-8 space-y-3">
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
                Data Privacy & Grievance Contact
              </h3>
              <p className="text-gray-300 text-xs sm:text-sm leading-relaxed max-w-xl">
                If you have questions regarding this Privacy Policy or wish to exercise your data rights, please contact our administrative desk:
              </p>
              <div className="pt-2 flex flex-wrap gap-4 text-xs sm:text-sm text-gray-200">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-rose-400" />
                  <span>support@innovixindustries.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-rose-400" />
                  <span>C-35, 1st Floor, Sector-6, Noida, UP 201301</span>
                </div>
              </div>
            </div>
            <div className="md:col-span-4 flex md:justify-end">
              <a
                href="mailto:support@innovixindustries.com"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-[#b65862] hover:bg-[#a24851] text-white text-xs sm:text-sm font-semibold shadow-lg hover:shadow-xl transition-all cursor-pointer active:scale-95"
              >
                Email Privacy Team
              </a>
            </div>
          </div>
        </motion.div>

      </section>
    </div>
  );
};

export default PrivacyPolicyPage;
