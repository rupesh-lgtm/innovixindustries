import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, FileText, CheckCircle2, AlertCircle, RefreshCw, Mail, Phone, MapPin, Scale } from 'lucide-react';

export const TermsPage: React.FC = () => {
  return (
    <div className="w-full bg-white select-none">
      {/* 1. Hero Banner */}
      <section className="relative w-full h-[260px] sm:h-[320px] md:h-[360px] overflow-hidden flex items-center bg-[#072d4b]">
        <img
          src="/industry-solutions-hero.jpg"
          alt="Terms & Conditions - Innovix Industries"
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
              <Scale className="w-3.5 h-3.5 text-rose-300" />
              Legal & Compliance Framework
            </div>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight mb-3">
              Terms & Conditions
            </h1>
            <p className="text-gray-200 text-xs sm:text-sm md:text-base leading-relaxed max-w-2xl">
              Official commercial trading guidelines, material specifications, delivery commitments, and contractual policies governing trade.
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
              Contractual Trade Agreement
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 mt-0.5">
              Please review these terms carefully prior to issuing Purchase Orders (PO) or entering into procurement agreements.
            </p>
          </div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-semibold text-slate-700 whitespace-nowrap self-start sm:self-auto">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Last Updated: January 2026
          </div>
        </motion.div>

        {/* Clauses Stack */}
        <div className="space-y-8 sm:space-y-10 overflow-hidden">

          {/* Clause 1: Acceptance (Slide from Left) */}
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
              <div className="space-y-2.5">
                <h3 className="text-lg sm:text-xl font-bold text-[#111827]">
                  Agreement & Acceptance of Terms
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  By engaging in business transactions, issuing a purchase contract, or purchasing ferrous, non-ferrous metals, copper, aluminium, or recycled materials from <strong>INNOVIX INDUSTRIES PRIVATE LIMITED</strong> ("Innovix"), the buyer ("Customer") agrees to be unconditionally bound by these Terms and Conditions. Any deviation or counter-terms in the buyer's purchase order shall only be valid upon written sign-off by an authorized signatory of Innovix.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Clause 2: Material Specifications & Quality (Slide from Right) */}
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
                  Material Quality, Grading & Inspection
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  All scrap metals—including Copper Armature, Copper Tally Wire, Aluminium Ingot/Purja, ADC-12, Ferrous HMS, and Brass—conform to internationally accepted ISRI (Institute of Scrap Recycling Industries) specifications or mutually agreed commercial grades.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  <div className="flex items-start gap-2.5 p-3 rounded-lg bg-slate-50 border border-slate-100 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Pre-Shipment Inspection:</strong> Material is subject to optical emission spectrometry (OES) / XRF testing and physical verification prior to dispatch.</span>
                  </div>
                  <div className="flex items-start gap-2.5 p-3 rounded-lg bg-slate-50 border border-slate-100 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Inspection Rights:</strong> Buyer has the right to inspect material at our yard/port upon arrival prior to final smelting/melting processing.</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Clause 3: Weighment & Moisture Allowances (Slide from Left) */}
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
                  Weighment, Tare & Deductions
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  The weight determined on a certified electronic weighbridge at the time of loading/port exit shall be final and binding for commercial invoice generation. Normal moisture, dust, or attachment deductions shall strictly follow mutual proforma agreements. Any weighment discrepancies exceeding standard 0.5% tolerance must be lodged within 48 hours of cargo receipt with weighbridge slips.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Clause 4: Pricing & Payment Terms (Slide from Right) */}
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
                  Pricing, Taxes & Payment Terms
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  Prices are quoted ex-works, CIF, or FOB as stated in the proforma invoice and are subject to market commodity fluctuations (LME index) until formal order confirmation. Applicable GST, TCS, customs duties, port handling fees, and taxes must be remitted by the Customer as per prevailing statutory laws. Payments shall be processed via RTGS/NEFT, Irrevocable Letter of Credit (LC), or verified documentary bank collections.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Clause 5: Logistics & Delivery Risk (Slide from Left) */}
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
                  Delivery, Freight & Transfer of Risk
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  Innovix provides end-to-end transport coordination through verified fleet and shipping partners. Risk of loss or damage to materials transfers to the buyer upon handoff to the designated carrier or upon delivery to the buyer's facility according to standard Incoterms® 2020. Innovix will not be held liable for demurrage, detention, or logistical delays resulting from customs clearance holds beyond our direct control.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Clause 6: Environmental & Regulatory Compliance (Slide from Right) */}
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
                  Environmental, Hazardous & MOEF Compliance
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  Innovix strictly complies with State and Central Pollution Control Board (CPCB) norms, Ministry of Environment, Forest and Climate Change (MoEFCC) guidelines, and international Basel Convention recycling standards. All materials supplied are free from radioactive isotopes, explosive ordnance, and toxic chemical contamination. Customers agree to recycle or consume materials using environmentally sound management techniques.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Clause 7: Dispute Resolution & Jurisdiction (Slide from Left) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="p-6 sm:p-8 rounded-2xl border border-slate-200 bg-white hover:border-[#b65862]/40 transition-colors shadow-sm"
          >
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-rose-50 text-[#b65862] flex items-center justify-center shrink-0 mt-0.5 font-bold text-sm">
                07
              </div>
              <div className="space-y-2.5">
                <h3 className="text-lg sm:text-xl font-bold text-[#111827]">
                  Governing Law & Legal Jurisdiction
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  These Terms & Conditions and all commercial transactions shall be governed by and construed in accordance with the Laws of India. Any disputes, claims, or controversies arising out of or in connection with supply agreements shall be subject to the exclusive jurisdiction of the competent courts in <strong>Noida / Gautam Buddha Nagar, Uttar Pradesh, India</strong>.
                </p>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Legal & Inquiry Contact Box (Slide from Bottom to Top) */}
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
                Have Legal or Contractual Questions?
              </h3>
              <p className="text-gray-300 text-xs sm:text-sm leading-relaxed max-w-xl">
                For commercial trade inquiries, customized Master Service Agreements (MSA), or compliance documentation, reach out to our legal and trade team.
              </p>
              <div className="pt-2 flex flex-wrap gap-4 text-xs sm:text-sm text-gray-200">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-rose-400" />
                  <span>support@innovixindustries.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-rose-400" />
                  <span>+91 97170 33816</span>
                </div>
              </div>
            </div>
            <div className="md:col-span-4 flex md:justify-end">
              <a
                href="mailto:support@innovixindustries.com"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-[#b65862] hover:bg-[#a24851] text-white text-xs sm:text-sm font-semibold shadow-lg hover:shadow-xl transition-all cursor-pointer active:scale-95"
              >
                Contact Legal Department
              </a>
            </div>
          </div>
        </motion.div>

      </section>
    </div>
  );
};

export default TermsPage;
