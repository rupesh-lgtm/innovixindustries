import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MapPin, 
  Clock, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  Send, 
  TrendingUp, 
  Globe2, 
  ShieldCheck, 
  HeartHandshake
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { StatsBanner } from '../components/StatsBanner';
import { FloatingActions } from '../components/FloatingActions';

interface JobPosition {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  description: string;
  highlights: string[];
}

const jobPositions: JobPosition[] = [
  {
    id: 'scrap-trader',
    title: 'International Scrap Trader / Procurement Specialist',
    department: 'Trading & Procurement',
    location: 'Noida HQ (Hybrid / Port Travel)',
    type: 'Full-time',
    experience: '3 - 6 Years',
    description: 'Lead commercial negotiations, supplier acquisition, and international maritime container procurement for ferrous (HMS 1&2) and non-ferrous scrap (Millberry copper, aluminium purja).',
    highlights: [
      'Manage overseas scrap yards and indenting agents across UAE, Europe, and SEA',
      'Oversee container LC terms, assay verifications, and import clearance logistics',
      'Dynamic performance incentive structure tied to trading volumes',
    ],
  },
  {
    id: 'metallurgy-inspector',
    title: 'Secondary Metallurgy Quality Inspector',
    department: 'Operations & Yard Quality',
    location: 'Noida / Regional Processing Yards',
    type: 'Full-time',
    experience: '2 - 5 Years',
    description: 'Ensure rigid adherence to ISRI grading, spectroscopic analysis, density baling standards, and radiation clearance for inbound and outbound metal consignments.',
    highlights: [
      'Direct hands-on handheld XRF analyzer spectroscopic assays',
      'Oversee physical shredding, sorting purity, and zero-contamination protocols',
      'Issue internal container inspection passes prior to foundry dispatch',
    ],
  },
  {
    id: 'logistics-manager',
    title: 'Maritime Logistics & Customs Clearance Lead',
    department: 'Supply Chain & Shipping',
    location: 'Noida Corporate Office',
    type: 'Full-time',
    experience: '4 - 8 Years',
    description: 'Coordinate multimodal container clearances through major Indian ports (Mundra, JNPT, Chennai) and facilitate smooth customs documentation, BL handling, and inland transport.',
    highlights: [
      'Liaise with shipping lines (Maersk, MSC, CMA CGM) and customs house agents',
      'Optimize transit turnaround, detention fee avoidance, and container tracking',
      'Oversee statutory import documentation and DGFT compliance norms',
    ],
  },
  {
    id: 'business-dev-executive',
    title: 'Industrial Foundry & Smelter Account Executive',
    department: 'Sales & Business Development',
    location: 'Noida / Delhi NCR (Client Visits)',
    type: 'Full-time',
    experience: '2 - 5 Years',
    description: 'Drive strategic secondary metal feedstock contracts with prominent induction furnaces, brass foundries, and aluminium die-casting manufacturers across North India.',
    highlights: [
      'Expand recurring monthly supply contracts for verified grade scrap',
      'Provide clients with dynamic spot prices and container dispatch schedules',
      'Collaborate directly with senior leadership on strategic pricing models',
    ],
  },
  {
    id: 'finance-taxation-lead',
    title: 'Corporate Accounts & GST Compliance Executive',
    department: 'Finance & Accounts',
    location: 'Noida Corporate Office',
    type: 'Full-time',
    experience: '3 - 6 Years',
    description: 'Manage specialized scrap transaction accounting, RCM (Reverse Charge Mechanism), e-way bill reconciliation, customs duty drawbacks, and statutory audit compliance.',
    highlights: [
      'Handle comprehensive high-volume industrial trade ledger audits',
      'Ensure 100% statutory compliance with central and state taxation authorities',
      'Work alongside senior Chartered Accountants on financial planning',
    ],
  },
];

const culturePerks = [
  {
    icon: TrendingUp,
    title: 'High-Growth Trajectory',
    desc: 'Be part of India’s booming circular economy and secondary metals transition with fast-track merit-based career promotions.',
  },
  {
    icon: Globe2,
    title: 'Global Trade Exposure',
    desc: 'Gain direct hands-on experience in cross-border trade, international maritime shipping, and multinational scrap brokerage.',
  },
  {
    icon: ShieldCheck,
    title: 'Integrity First Culture',
    desc: 'Work in an environment anchored in transparent grading, precise assays, and honest supplier relationships.',
  },
  {
    icon: HeartHandshake,
    title: 'Competitive Compensation',
    desc: 'Market-leading base salaries, attractive volume-based incentive bonuses, and comprehensive family health coverage.',
  },
];

export const CareersPage: React.FC = () => {
  const [selectedDept, setSelectedDept] = useState<string>('All');
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    role: '',
    experience: '',
    linkedin: '',
    message: '',
  });

  const departments = ['All', 'Trading & Procurement', 'Operations & Yard Quality', 'Supply Chain & Shipping', 'Sales & Business Development', 'Finance & Accounts'];

  const filteredJobs = selectedDept === 'All' 
    ? jobPositions 
    : jobPositions.filter(j => j.department === selectedDept);

  const handleApplyClick = (roleTitle: string) => {
    setFormData(prev => ({ ...prev, role: roleTitle }));
    const formEl = document.getElementById('application-form');
    if (formEl) {
      formEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    confetti({
      particleCount: 85,
      spread: 75,
      origin: { y: 0.65 },
      colors: ['#0284c7', '#072d4b', '#10b981', '#f59e0b'],
    });

    const subject = encodeURIComponent(`Candidate Job Application: ${formData.role || 'Career Opportunity'} - ${formData.name}`);
    const emailBody = [
      `CANDIDATE JOB APPLICATION`,
      `=========================`,
      `Candidate Name  : ${formData.name}`,
      `Email Address   : ${formData.email}`,
      `Phone Number    : ${formData.phone}`,
      `Target Position : ${formData.role}`,
      `Experience      : ${formData.experience || 'Not specified'}`,
      `LinkedIn/Profile: ${formData.linkedin || 'Not provided'}`,
      ``,
      `Cover Note & Key Strengths:`,
      `${formData.message || 'None provided'}`,
      ``,
      `=========================`,
      `Submitted via Innovix Industries Official Careers Portal`,
      `Timestamp: ${new Date().toLocaleString()}`,
    ].join('\n');

    const mailtoUrl = `mailto:megha.chopra@innovixtechnology.com?subject=${subject}&body=${encodeURIComponent(emailBody)}`;
    
    // Open candidate's email client with pre-filled submission to megha.chopra@innovixtechnology.com
    const link = document.createElement('a');
    link.href = mailtoUrl;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        role: '',
        experience: '',
        linkedin: '',
        message: '',
      });
    }, 6000);
  };

  return (
    <div className="w-full bg-white dark:bg-[#07131e] text-gray-900 dark:text-gray-100 select-none transition-colors duration-300">
      
      {/* 1. Hero Banner */}
      <section className="relative w-full h-[280px] sm:h-[340px] md:h-[400px] overflow-hidden flex items-center bg-[#072d4b] dark:bg-[#040c14]">
        <img
          src="/foundries-smelters.jpg"
          alt="Careers at Innovix Industries"
          className="absolute inset-0 w-full h-full object-cover filter brightness-[0.32] dark:brightness-[0.22] contrast-[1.15]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#031526]/95 via-[#07243e]/85 to-[#0284c7]/25 dark:from-[#020910]/98 dark:via-[#051624]/90 dark:to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto w-full px-5 sm:px-8 md:px-12 text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl"
          >
            <div 
              className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[var(--theme-primary)]/20 text-xs font-semibold uppercase tracking-wider mb-3 backdrop-blur-md border border-[var(--theme-primary)]/30 shadow-sm"
              style={{ color: 'var(--theme-primary)' }}
            >
              <Sparkles className="w-3.5 h-3.5" /> Work With Us · Careers
            </div>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight mb-3">
              Shape the Future of Sustainable Metallurgy
            </h1>
            <p className="text-gray-200 dark:text-gray-300 text-sm sm:text-base leading-relaxed max-w-xl">
              Join Innovix Industries in pioneering transparent, high-purity metal recycling and global trade solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. Stats Strip */}
      <StatsBanner />

      {/* 3. Culture & Perks Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[var(--theme-primary)]">
            Life At Innovix
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#072d4b] dark:text-white tracking-tight mt-1">
            Why Build Your Career Here
          </h2>
          <div className="w-16 h-1 bg-[var(--theme-primary)] mx-auto mt-3 rounded-full" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 perspective-1000">
          {culturePerks.map((perk, idx) => {
            const Icon = perk.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="p-6 sm:p-7 rounded-3xl bg-white dark:bg-[#091724] border border-slate-200/90 dark:border-slate-800 shadow-lg hover:shadow-2xl transition-all duration-300 card-3d flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[var(--theme-primary)]/10 text-[var(--theme-primary)] border border-[var(--theme-primary)]/20 flex items-center justify-center mb-5 shadow-inner">
                    <Icon className="w-6 h-6 stroke-[2]" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                    {perk.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    {perk.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* 4. Open Positions Directory */}
      <section id="openings" className="w-full bg-[#f8fafc] dark:bg-[#050e17] py-16 sm:py-24 border-y border-slate-200 dark:border-slate-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[var(--theme-primary)]">
                Current Vacancies
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#072d4b] dark:text-white tracking-tight mt-1">
                Explore Open Positions
              </h2>
              <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-2 max-w-xl">
                We are continually looking for ambitious professionals across scrap trading, logistics, metallurgy, and corporate operations.
              </p>
            </div>

            {/* Department Filter Pills */}
            <div className="flex flex-wrap gap-2">
              {departments.map((dept) => (
                <button
                  key={dept}
                  onClick={() => setSelectedDept(dept)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                    selectedDept === dept
                      ? 'bg-[var(--theme-primary)] text-white shadow-md'
                      : 'bg-white dark:bg-[#0a1826] text-gray-700 dark:text-gray-300 border border-slate-200 dark:border-slate-800 hover:border-[var(--theme-primary)]/50'
                  }`}
                >
                  {dept}
                </button>
              ))}
            </div>
          </div>

          {/* Job Cards Stack */}
          <div className="space-y-5">
            <AnimatePresence mode="popLayout">
              {filteredJobs.map((job, idx) => (
                <motion.div
                  key={job.id}
                  layout
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.35, delay: idx * 0.04 }}
                  whileHover={{ y: -3 }}
                  className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#091724] border border-slate-200/90 dark:border-slate-800 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col lg:flex-row lg:items-center justify-between gap-6 card-3d"
                >
                  <div className="space-y-3 max-w-3xl">
                    <div className="flex flex-wrap items-center gap-2.5">
                      <span className="px-3 py-1 rounded-full bg-[var(--theme-primary)]/10 text-[var(--theme-primary)] text-[11px] font-extrabold uppercase tracking-wider">
                        {job.department}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
                        <MapPin className="w-3.5 h-3.5" /> {job.location}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
                        <Clock className="w-3.5 h-3.5" /> {job.type}
                      </span>
                      <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                        • Exp: {job.experience}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-black text-gray-900 dark:text-white tracking-tight">
                      {job.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                      {job.description}
                    </p>

                    <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-500 dark:text-gray-400">
                      {job.highlights.map((item, hIdx) => (
                        <div key={hIdx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[var(--theme-primary)] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="shrink-0 pt-2 lg:pt-0">
                    <button
                      onClick={() => handleApplyClick(job.title)}
                      className="w-full lg:w-auto px-6 py-3 rounded-2xl bg-[var(--theme-primary)] text-white hover:opacity-95 font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all cursor-pointer group"
                    >
                      <span>Apply For Position</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* 5. Direct Job Application Form */}
      <section id="application-form" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="bg-white dark:bg-[#091724] rounded-3xl p-7 sm:p-10 md:p-12 shadow-2xl border border-slate-200/90 dark:border-slate-800 card-3d relative overflow-hidden">
          
          <div className="text-center max-w-xl mx-auto mb-8 sm:mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[var(--theme-primary)]">
              Candidate Portal
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#072d4b] dark:text-white mt-1">
              Submit Your Application
            </h3>
            <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-2">
              Fill out the form below or email your resume directly to{' '}
              <a href="mailto:megha.chopra@innovixtechnology.com" className="text-[var(--theme-primary)] font-bold hover:underline">
                megha.chopra@innovixtechnology.com
              </a>.
            </p>
          </div>

          {submitted && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mb-6 p-4 bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 rounded-2xl flex items-center gap-3 text-emerald-800 dark:text-emerald-200 text-sm font-medium"
            >
              <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
              <span>Thank you! Your job application has been prepared and routed to <strong>megha.chopra@innovixtechnology.com</strong>. We will review your profile and reach out shortly.</span>
            </motion.div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 dark:text-gray-300 mb-1.5">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Rahul Sharma"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-2xl bg-slate-50 dark:bg-[#07131e] border border-slate-200 dark:border-slate-700 text-gray-900 dark:text-white text-xs sm:text-sm focus:outline-none focus:border-[var(--theme-primary)] transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 dark:text-gray-300 mb-1.5">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  placeholder="rahul@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-2xl bg-slate-50 dark:bg-[#07131e] border border-slate-200 dark:border-slate-700 text-gray-900 dark:text-white text-xs sm:text-sm focus:outline-none focus:border-[var(--theme-primary)] transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 dark:text-gray-300 mb-1.5">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-2xl bg-slate-50 dark:bg-[#07131e] border border-slate-200 dark:border-slate-700 text-gray-900 dark:text-white text-xs sm:text-sm focus:outline-none focus:border-[var(--theme-primary)] transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 dark:text-gray-300 mb-1.5">
                  Target Position *
                </label>
                <select
                  required
                  value={formData.role}
                  onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                  className="w-full px-4 py-3 rounded-2xl bg-slate-50 dark:bg-[#07131e] border border-slate-200 dark:border-slate-700 text-gray-900 dark:text-white text-xs sm:text-sm focus:outline-none focus:border-[var(--theme-primary)] transition-colors cursor-pointer"
                >
                  <option value="">Select a position...</option>
                  {jobPositions.map((j) => (
                    <option key={j.id} value={j.title}>
                      {j.title}
                    </option>
                  ))}
                  <option value="General Spontaneous Application">General / Other Role</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 dark:text-gray-300 mb-1.5">
                  Years of Relevant Experience
                </label>
                <input
                  type="text"
                  placeholder="e.g. 4 Years in Scrap Trading"
                  value={formData.experience}
                  onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                  className="w-full px-4 py-3 rounded-2xl bg-slate-50 dark:bg-[#07131e] border border-slate-200 dark:border-slate-700 text-gray-900 dark:text-white text-xs sm:text-sm focus:outline-none focus:border-[var(--theme-primary)] transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 dark:text-gray-300 mb-1.5">
                  LinkedIn Profile / Portfolio URL
                </label>
                <input
                  type="url"
                  placeholder="https://linkedin.com/in/username"
                  value={formData.linkedin}
                  onChange={(e) => setFormData({ ...formData, linkedin: e.target.value })}
                  className="w-full px-4 py-3 rounded-2xl bg-slate-50 dark:bg-[#07131e] border border-slate-200 dark:border-slate-700 text-gray-900 dark:text-white text-xs sm:text-sm focus:outline-none focus:border-[var(--theme-primary)] transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 dark:text-gray-300 mb-1.5">
                Cover Note / Key Strengths
              </label>
              <textarea
                rows={4}
                placeholder="Briefly tell us about your background, industrial achievements, and how you can contribute to Innovix Industries..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 rounded-2xl bg-slate-50 dark:bg-[#07131e] border border-slate-200 dark:border-slate-700 text-gray-900 dark:text-white text-xs sm:text-sm focus:outline-none focus:border-[var(--theme-primary)] transition-colors resize-none"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-4 rounded-2xl bg-[var(--theme-primary)] text-white font-extrabold text-sm sm:text-base flex items-center justify-center gap-2.5 shadow-lg hover:shadow-xl hover:opacity-95 transition-all cursor-pointer btn-3d"
              >
                <Send className="w-5 h-5" />
                <span>Submit Candidate Application</span>
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* 6. Continuous Services Slider */}
      <FloatingActions />
    </div>
  );
};
