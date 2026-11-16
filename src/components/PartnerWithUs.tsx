import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, MapPin, Mail, Phone, Clock, ShieldCheck, Send } from 'lucide-react';
import confetti from 'canvas-confetti';

export const PartnerWithUs: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    country: '',
    companyName: '',
    designation: '',
    phone: '',
    email: '',
    product: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.7 },
      colors: ['#0284c7', '#072d4b', '#10b981', '#f59e0b'],
    });

    const subject = encodeURIComponent(`Commercial Scrap & Partnership Inquiry: ${formData.name} (${formData.companyName || 'Industrial Client'})`);
    const emailBody = [
      `NEW PARTNERSHIP / SCRAP INQUIRY`,
      `===============================`,
      `Full Name    : ${formData.name}`,
      `Company Name : ${formData.companyName || 'Not specified'}`,
      `Designation  : ${formData.designation || 'Not specified'}`,
      `Country      : ${formData.country || 'Not specified'}`,
      `Phone Number : ${formData.phone}`,
      `Email Address: ${formData.email}`,
      `Product Interest: ${formData.product || 'General Catalog'}`,
      ``,
      `Message & Requirements:`,
      `${formData.message || 'No additional message'}`,
      ``,
      `===============================`,
      `Submitted via Innovix Industries Official Portal`,
      `Timestamp: ${new Date().toLocaleString()}`,
    ].join('\n');

    const mailtoUrl = `mailto:megha.chopra@innovixtechnology.com?subject=${subject}&body=${encodeURIComponent(emailBody)}`;

    const link = document.createElement('a');
    link.href = mailtoUrl;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="partner" className="w-full bg-[#f8fafc] dark:bg-[#050e17] py-16 sm:py-20 md:py-24 overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
          className="mb-8 sm:mb-10"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#b65862] dark:text-rose-400 tracking-tight">
            Partner With Us
          </h2>
          <div className="w-14 h-1 bg-emerald-600 dark:bg-emerald-500 mt-2 rounded-full" />
        </motion.div>

        {/* 2-Column Layout: Left Contact Information (NO IMAGE), Right 3D Form Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch perspective-1000">
          
          {/* Left: Contact Credentials (NO IMAGE - 3D Card Depth) */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="lg:col-span-5 flex flex-col justify-between"
          >
            <div className="bg-white dark:bg-[#091724] rounded-3xl p-6 sm:p-8 md:p-9 shadow-xl dark:shadow-2xl border border-gray-100 dark:border-slate-800 h-full flex flex-col justify-between card-3d">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#b65862] dark:text-rose-400">
                  Direct Connectivity
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#072d4b] dark:text-white mt-1 mb-3">
                  Inquiries & Global Trade Desk
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm leading-relaxed mb-6">
                  Collaborate with Innovix Industries for certified secondary metal procurement, reliable international shipment logistics, and long-term recycling partnerships.
                </p>

                <div className="space-y-4 pt-1">
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-2xl bg-rose-50 dark:bg-rose-950/60 text-[#b65862] dark:text-rose-400 border border-rose-200 dark:border-rose-900/40 flex items-center justify-center shrink-0 shadow-sm">
                      <MapPin className="w-5 h-5 stroke-[2]" />
                    </div>
                    <div>
                      <h4 className="text-[11px] font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500">Corporate Office</h4>
                      <p className="text-xs sm:text-sm font-semibold text-gray-800 dark:text-gray-200 leading-snug mt-0.5">
                        C-35, 1st Floor, Sector-6, Noida, Uttar Pradesh, India 201301
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-2xl bg-blue-50 dark:bg-blue-950/60 text-[#072d4b] dark:text-blue-400 border border-blue-200 dark:border-blue-900/40 flex items-center justify-center shrink-0 shadow-sm">
                      <Mail className="w-5 h-5 stroke-[2]" />
                    </div>
                    <div>
                      <h4 className="text-[11px] font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500">Email Inquiries</h4>
                      <a href="mailto:info@innovixipl.com" className="text-xs sm:text-sm font-semibold text-[#072d4b] dark:text-blue-300 hover:underline block mt-0.5">
                        info@innovixipl.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-900/40 flex items-center justify-center shrink-0 shadow-sm">
                      <Phone className="w-5 h-5 stroke-[2]" />
                    </div>
                    <div>
                      <h4 className="text-[11px] font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500">Direct Desk</h4>
                      <a href="tel:01204977413" className="text-xs sm:text-sm font-semibold text-gray-800 dark:text-gray-200 hover:text-[#b65862] dark:hover:text-rose-400 block mt-0.5">
                        01204977413
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-2xl bg-amber-50 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 border border-amber-200 dark:border-amber-900/40 flex items-center justify-center shrink-0 shadow-sm">
                      <Clock className="w-5 h-5 stroke-[2]" />
                    </div>
                    <div>
                      <h4 className="text-[11px] font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500">Trading Hours</h4>
                      <p className="text-xs sm:text-sm font-semibold text-gray-800 dark:text-gray-200 mt-0.5">
                        Monday – Saturday: 9:00 AM – 7:00 PM IST
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center gap-2.5 text-xs font-medium text-emerald-700 dark:text-emerald-300 bg-emerald-50/70 dark:bg-emerald-950/40 p-3 rounded-2xl border border-emerald-200/80 dark:border-emerald-800/40">
                <ShieldCheck className="w-4 h-4 shrink-0 text-emerald-600 dark:text-emerald-400" />
                <span>Direct Sourcing & Verified Secondary Metal Trading</span>
              </div>
            </div>
          </motion.div>

          {/* Right: 3D Partner Form Card (Slides from Right) */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
            className="lg:col-span-7"
          >
            <div className="bg-white dark:bg-[#091724] rounded-3xl p-6 sm:p-8 md:p-10 shadow-xl dark:shadow-2xl border border-gray-100 dark:border-slate-800 card-3d">
              
              <p className="text-xs sm:text-sm font-medium text-[#b65862] dark:text-rose-400 mb-6">
                Partner with Innovix Industries to create sustainable solutions.
              </p>

              {submitted && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="mb-5 p-3.5 bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 rounded-xl flex items-center gap-2.5 text-emerald-800 dark:text-emerald-200 text-xs sm:text-sm font-medium"
                >
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  Your partnership request has been submitted successfully!
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-3.5 sm:space-y-4">
                {/* Name */}
                <div>
                  <input
                    type="text"
                    required
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Full Name"
                    className="w-full px-4 py-2.5 sm:py-3 rounded-xl border border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-900/80 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:border-[#b65862] dark:focus:border-rose-400 focus:outline-none focus:ring-1 focus:ring-[#b65862] text-xs sm:text-sm transition-all"
                  />
                </div>

                {/* Row 2: Country & Company name */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <input
                    type="text"
                    required
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    placeholder="Country"
                    className="w-full px-4 py-2.5 sm:py-3 rounded-xl border border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-900/80 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:border-[#b65862] dark:focus:border-rose-400 focus:outline-none focus:ring-1 focus:ring-[#b65862] text-xs sm:text-sm transition-all"
                  />
                  <input
                    type="text"
                    required
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    placeholder="Company name"
                    className="w-full px-4 py-2.5 sm:py-3 rounded-xl border border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-900/80 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:border-[#b65862] dark:focus:border-rose-400 focus:outline-none focus:ring-1 focus:ring-[#b65862] text-xs sm:text-sm transition-all"
                  />
                </div>

                {/* Row 3: Designation & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <input
                    type="text"
                    name="designation"
                    value={formData.designation}
                    onChange={handleChange}
                    placeholder="Designation / Role"
                    className="w-full px-4 py-2.5 sm:py-3 rounded-xl border border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-900/80 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:border-[#b65862] dark:focus:border-rose-400 focus:outline-none focus:ring-1 focus:ring-[#b65862] text-xs sm:text-sm transition-all"
                  />
                  <input
                    type="tel"
                    required
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone"
                    className="w-full px-4 py-2.5 sm:py-3 rounded-xl border border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-900/80 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:border-[#b65862] dark:focus:border-rose-400 focus:outline-none focus:ring-1 focus:ring-[#b65862] text-xs sm:text-sm transition-all"
                  />
                </div>

                {/* Row 4: Email & Product */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <input
                    type="email"
                    required
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    className="w-full px-4 py-2.5 sm:py-3 rounded-xl border border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-900/80 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:border-[#b65862] dark:focus:border-rose-400 focus:outline-none focus:ring-1 focus:ring-[#b65862] text-xs sm:text-sm transition-all"
                  />
                  <select
                    name="product"
                    value={formData.product}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 sm:py-3 rounded-xl border border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-900/80 text-gray-900 dark:text-white focus:border-[#b65862] dark:focus:border-rose-400 focus:outline-none focus:ring-1 focus:ring-[#b65862] text-xs sm:text-sm transition-all"
                  >
                    <option value="">Select Product</option>
                    <option value="ferrous-scrap">Ferrous Scrap</option>
                    <option value="non-ferrous-scrap">Non-Ferrous Scrap</option>
                    <option value="copper-scrap">Copper Scrap</option>
                    <option value="aluminium-scrap">Aluminium Scrap</option>
                    <option value="brass-scrap">Brass Scrap</option>
                  </select>
                </div>

                {/* Row 5: Message */}
                <div>
                  <textarea
                    rows={4}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Message"
                    className="w-full px-4 py-2.5 sm:py-3 rounded-xl border border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-900/80 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:border-[#b65862] dark:focus:border-rose-400 focus:outline-none focus:ring-1 focus:ring-[#b65862] text-xs sm:text-sm transition-all resize-y"
                  ></textarea>
                </div>

                {/* 3D Submit Request Button */}
                <motion.button
                  whileHover={{ scale: 1.015, y: -2 }}
                  whileTap={{ scale: 0.985, y: 1 }}
                  type="submit"
                  className="w-full py-3.5 bg-black dark:bg-[#b65862] hover:bg-neutral-800 dark:hover:bg-[#a24851] text-white font-semibold rounded-xl text-xs sm:text-sm shadow-xl transition-all cursor-pointer tracking-wide flex items-center justify-center gap-2 btn-3d"
                >
                  <span>Submit Request</span>
                  <Send className="w-4 h-4" />
                </motion.button>
              </form>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default PartnerWithUs;