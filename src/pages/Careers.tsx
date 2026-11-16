import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  CheckCircle2, 
  Sparkles, 
  Send, 
  TrendingUp, 
  Globe2, 
  ShieldCheck, 
  HeartHandshake,
  HelpCircle,
  Briefcase,
  Mail,
  Phone,
  MapPin
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { StatsBanner } from '../components/StatsBanner';
import { FloatingActions } from '../components/FloatingActions';

const culturePerks = [
  {
    icon: TrendingUp,
    title: 'High-Growth Trajectory',
    desc: 'Be part of India’s rapidly growing circular economy and secondary metal processing with fast-track merit-based advancement.',
  },
  {
    icon: Globe2,
    title: 'Global Trade Exposure',
    desc: 'Gain direct hands-on experience in cross-border commodity trade, maritime shipping, and international secondary scrap brokerage.',
  },
  {
    icon: ShieldCheck,
    title: 'Integrity First Culture',
    desc: 'Work in an environment anchored in physical inspection standards, spectroscopic assays, and ethical long-term client relationships.',
  },
  {
    icon: HeartHandshake,
    title: 'Competitive Rewards',
    desc: 'Attractive compensation packages, performance-linked trading incentives, and collaborative leadership guidance.',
  },
];

const functionalAreas = [
  'Scrap Trading & Commodity Sourcing',
  'Secondary Metallurgy & Quality Inspection',
  'Maritime Shipping & Customs Logistics',
  'Processing Yard & Plant Operations',
  'Accounts, GST & Financial Compliance',
  'Industrial Foundry & Smelter Sales',
  'Engineering & Machine Maintenance',
  'General Career Inquiry / Other',
];

export const CareersPage: React.FC = () => {
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    areaOfInterest: '',
    experience: '',
    location: '',
    linkedin: '',
    inquiryType: 'apply', // 'apply' | 'ask'
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    confetti({
      particleCount: 85,
      spread: 75,
      origin: { y: 0.65 },
      colors: ['#0284c7', '#072d4b', '#10b981', '#f59e0b'],
    });

    const isQuestion = formData.inquiryType === 'ask';
    const subjectPrefix = isQuestion ? 'Career Inquiry & Question' : 'Job Application';
    const subject = encodeURIComponent(`${subjectPrefix}: ${formData.areaOfInterest || 'General'} - ${formData.name}`);
    
    const emailBody = [
      isQuestion ? `CANDIDATE CAREER INQUIRY / QUESTION` : `CANDIDATE JOB APPLICATION`,
      `=================================`,
      `Full Name          : ${formData.name}`,
      `Email Address      : ${formData.email}`,
      `Phone Number       : ${formData.phone}`,
      `Inquiry Type       : ${isQuestion ? 'Asking Question / General Career Guidance' : 'Direct Job Application'}`,
      `Area of Expertise  : ${formData.areaOfInterest || 'Not specified'}`,
      `Experience Level   : ${formData.experience || 'Not specified'}`,
      `Current Location   : ${formData.location || 'Not specified'}`,
      `LinkedIn/Profile   : ${formData.linkedin || 'Not provided'}`,
      ``,
      isQuestion ? `Question / Message:` : `Cover Note & Application Message:`,
      `${formData.message || 'None provided'}`,
      ``,
      `=================================`,
      `Submitted via Innovix Industries Official Careers Portal`,
      `Timestamp: ${new Date().toLocaleString()}`,
    ].join('\n');

    const mailtoUrl = `mailto:megha.chopra@innovixtechnology.com?subject=${subject}&body=${encodeURIComponent(emailBody)}`;
    
    // Trigger pre-filled email to megha.chopra@innovixtechnology.com
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
        areaOfInterest: '',
        experience: '',
        location: '',
        linkedin: '',
        inquiryType: 'apply',
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
              <Sparkles className="w-3.5 h-3.5" /> Career & Talent Portal
            </div>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight mb-3">
              Build Your Career with Innovix Industries
            </h1>
            <p className="text-gray-200 dark:text-gray-300 text-sm sm:text-base leading-relaxed max-w-xl">
              We welcome skilled professionals, energetic graduates, and industry specialists to explore opportunities and shape the circular metallurgy sector with us.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. Stats Strip */}
      <StatsBanner />

      {/* 3. Culture & Pillars */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[var(--theme-primary)]">
            Life At Innovix
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#072d4b] dark:text-white tracking-tight mt-1">
            Why Grow With Us
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

      {/* 4. Applicant Ask & Apply Portal Section */}
      <section id="apply-section" className="w-full bg-[#f8fafc] dark:bg-[#050e17] py-16 sm:py-24 border-y border-slate-200 dark:border-slate-800 transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="bg-white dark:bg-[#091724] rounded-3xl p-7 sm:p-10 md:p-12 shadow-2xl border border-slate-200/90 dark:border-slate-800 card-3d relative overflow-hidden">
            
            {/* Header */}
            <div className="text-center max-w-xl mx-auto mb-8 sm:mb-10">
              <span className="text-xs font-bold uppercase tracking-widest text-[var(--theme-primary)]">
                Direct Candidate Desk
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#072d4b] dark:text-white mt-1">
                Apply For a Job or Inquire
              </h2>
              <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-2">
                Whether you wish to apply for an active career opportunity or ask questions about roles at Innovix, please fill out your details below.
              </p>

              {/* Inquiry Type Toggle Pills */}
              <div className="inline-flex p-1 rounded-2xl bg-slate-100 dark:bg-slate-800 mt-5 border border-slate-200 dark:border-slate-700">
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, inquiryType: 'apply' })}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                    formData.inquiryType === 'apply'
                      ? 'bg-[var(--theme-primary)] text-white shadow-md'
                      : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
                  }`}
                >
                  <Briefcase className="w-4 h-4" />
                  <span>Apply for a Job</span>
                </button>
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, inquiryType: 'ask' })}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                    formData.inquiryType === 'ask'
                      ? 'bg-[var(--theme-primary)] text-white shadow-md'
                      : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
                  }`}
                >
                  <HelpCircle className="w-4 h-4" />
                  <span>Ask a Question</span>
                </button>
              </div>
            </div>

            {submitted && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mb-6 p-4 bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 rounded-2xl flex items-center gap-3 text-emerald-800 dark:text-emerald-200 text-sm font-medium"
              >
                <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span>
                  Thank you! Your details have been submitted and routed to <strong>megha.chopra@innovixtechnology.com</strong>. Our HR & recruitment team will connect with you shortly.
                </span>
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
                    Area of Interest / Function *
                  </label>
                  <select
                    required
                    value={formData.areaOfInterest}
                    onChange={(e) => setFormData({ ...formData, areaOfInterest: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl bg-slate-50 dark:bg-[#07131e] border border-slate-200 dark:border-slate-700 text-gray-900 dark:text-white text-xs sm:text-sm focus:outline-none focus:border-[var(--theme-primary)] transition-colors cursor-pointer"
                  >
                    <option value="">Select a domain...</option>
                    {functionalAreas.map((area, idx) => (
                      <option key={idx} value={area}>
                        {area}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 dark:text-gray-300 mb-1.5">
                    Experience Level
                  </label>
                  <select
                    value={formData.experience}
                    onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl bg-slate-50 dark:bg-[#07131e] border border-slate-200 dark:border-slate-700 text-gray-900 dark:text-white text-xs sm:text-sm focus:outline-none focus:border-[var(--theme-primary)] transition-colors cursor-pointer"
                  >
                    <option value="">Select experience...</option>
                    <option value="Fresher / Entry-Level">Fresher / Graduate</option>
                    <option value="1 - 3 Years">1 - 3 Years</option>
                    <option value="3 - 5 Years">3 - 5 Years</option>
                    <option value="5 - 8 Years">5 - 8 Years</option>
                    <option value="8+ Years (Senior / Leadership)">8+ Years (Senior)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 dark:text-gray-300 mb-1.5">
                    Current Location
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Noida / Delhi / Gujarat"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl bg-slate-50 dark:bg-[#07131e] border border-slate-200 dark:border-slate-700 text-gray-900 dark:text-white text-xs sm:text-sm focus:outline-none focus:border-[var(--theme-primary)] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 dark:text-gray-300 mb-1.5">
                    LinkedIn / Portfolio URL
                  </label>
                  <input
                    type="url"
                    placeholder="https://linkedin.com/in/..."
                    value={formData.linkedin}
                    onChange={(e) => setFormData({ ...formData, linkedin: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl bg-slate-50 dark:bg-[#07131e] border border-slate-200 dark:border-slate-700 text-gray-900 dark:text-white text-xs sm:text-sm focus:outline-none focus:border-[var(--theme-primary)] transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 dark:text-gray-300 mb-1.5">
                  {formData.inquiryType === 'ask' 
                    ? 'Your Question or Inquiry *' 
                    : 'Cover Note, Key Achievements & Experience *'}
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder={
                    formData.inquiryType === 'ask'
                      ? 'Ask your question regarding working at Innovix, required skills, work culture, or future openings...'
                      : 'Tell us about your background, relevant industrial experience, accomplishments, or paste a link to your resume...'
                  }
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
                  <span>
                    {formData.inquiryType === 'ask'
                      ? 'Submit Career Question / Inquiry'
                      : 'Submit Candidate Application'}
                  </span>
                </button>
              </div>
            </form>

            {/* Direct HR Support info */}
            <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800 text-center text-xs text-gray-500 dark:text-gray-400">
              <span>Have immediate questions? Reach our recruitment team directly at{' '}</span>
              <a
                href="mailto:megha.chopra@innovixtechnology.com"
                className="font-bold text-[var(--theme-primary)] hover:underline inline-flex items-center gap-1"
              >
                <Mail className="w-3.5 h-3.5 inline" /> megha.chopra@innovixtechnology.com
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* 5. Direct Office Connectivity Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-3xl bg-white dark:bg-[#091724] border border-slate-200/90 dark:border-slate-800 shadow-md card-3d flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[var(--theme-primary)]/10 text-[var(--theme-primary)] flex items-center justify-center shrink-0">
              <Mail className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400">Email Talent Desk</h4>
              <a href="mailto:megha.chopra@innovixtechnology.com" className="text-xs sm:text-sm font-bold text-gray-800 dark:text-white hover:text-[var(--theme-primary)] transition-colors">
                megha.chopra@innovixtechnology.com
              </a>
            </div>
          </div>

          <div className="p-6 rounded-3xl bg-white dark:bg-[#091724] border border-slate-200/90 dark:border-slate-800 shadow-md card-3d flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 flex items-center justify-center shrink-0">
              <Phone className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400">Phone Support</h4>
              <a href="tel:01204977413" className="text-xs sm:text-sm font-bold text-gray-800 dark:text-white hover:text-emerald-600 transition-colors">
                01204977413
              </a>
            </div>
          </div>

          <div className="p-6 rounded-3xl bg-white dark:bg-[#091724] border border-slate-200/90 dark:border-slate-800 shadow-md card-3d flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 flex items-center justify-center shrink-0">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400">Corporate HQ</h4>
              <p className="text-xs font-semibold text-gray-800 dark:text-white">
                C-35, 1st Floor, Sector-6, Noida 201301
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Continuous Services Slider */}
      <FloatingActions />
    </div>
  );
};
