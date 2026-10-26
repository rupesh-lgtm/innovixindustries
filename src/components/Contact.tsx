import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';

export const Contact: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.7 },
      colors: ['#b65862', '#072d4b', '#f59e0b', '#10b981'],
    });
    setTimeout(() => setFormSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="w-full bg-[#f8fafc] py-16 sm:py-20 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl shadow-xl border border-gray-100 p-6 sm:p-10 md:p-14"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#b65862]">Get In Touch</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#072d4b] mt-2 mb-3 sm:mb-4">
                Request a Quote or Partnership
              </h2>
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
                    <span className="text-[11px] sm:text-xs text-gray-500">Corporate Office : C-35, 1st Floor, Sector-6, Noida, Uttar Pradesh 201301</span>
                  </div>
                </motion.div>
                <motion.div whileHover={{ x: 5 }} className="flex items-center gap-3">
                  <div className="w-9 sm:w-10 h-9 sm:h-10 rounded-full bg-rose-50 flex items-center justify-center text-[#b65862] font-semibold shrink-0">
                    ✉️
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Email Inquiries</p>
                    <span className="text-[11px] sm:text-xs text-gray-500">info@innovixipl.com</span>
                  </div>
                </motion.div>
                <motion.div whileHover={{ x: 5 }} className="flex items-center gap-3">
                  <div className="w-9 sm:w-10 h-9 sm:h-10 rounded-full bg-rose-50 flex items-center justify-center text-[#b65862] font-semibold shrink-0">
                    📞
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Direct Desk</p>
                    <span className="text-[11px] sm:text-xs text-gray-500">01204977413</span>
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
                  placeholder="e.g. Acme Industries"
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
                    <option>Copper Mixture Scrap</option>
                    <option>High-Quality Aluminium Purja Scrap</option>
                    <option>Millberry Copper Wire</option>
                    <option>Brass Scrap Alloys</option>
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
                className="w-full py-3 sm:py-3.5 bg-[#b65862] hover:bg-[#a24851] text-white font-semibold rounded-lg text-xs sm:text-sm shadow-md hover:shadow-xl transition-all cursor-pointer"
              >
                Send Inquiry
              </motion.button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
