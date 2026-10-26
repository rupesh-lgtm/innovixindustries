import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';

export const PartnerWithUs: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    country: '',
    companyName: '',
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
      colors: ['#b65862', '#072d4b', '#10b981', '#f59e0b'],
    });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="partner" className="w-full bg-[#f8fafc] py-16 sm:py-20 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading matching screenshot */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
          className="mb-8 sm:mb-10"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#b65862] tracking-tight">
            Partner With Us
          </h2>
          <div className="w-12 h-1 bg-emerald-600 mt-2 rounded-full" />
        </motion.div>

        {/* 2-Column Layout: Left Image Illustration, Right Form Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left: Illustration Image (Slides from Left) */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="lg:col-span-6"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-white group"
            >
              <img
                src="/partner-handshake.jpg"
                alt="Partner With Us Strategic Collaboration"
                className="w-full h-72 sm:h-96 md:h-[430px] object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </motion.div>
          </motion.div>

          {/* Right: Partner Form Card (Slides from Right) */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
            className="lg:col-span-6"
          >
            <div className="bg-white rounded-3xl p-6 sm:p-8 md:p-10 shadow-lg border border-gray-100">
              
              <p className="text-xs sm:text-sm font-medium text-[#b65862] mb-6">
                Partner with Innovix Industries to create sustainable solutions.
              </p>

              {submitted && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="mb-5 p-3.5 bg-emerald-50 border border-emerald-200 rounded-xl flex items-center gap-2.5 text-emerald-800 text-xs sm:text-sm font-medium"
                >
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                  Your partnership request has been submitted successfully!
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-3.5 sm:space-y-4">
                {/* Row 1: First name & Last name */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <input
                    type="text"
                    required
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="First name"
                    className="w-full px-4 py-2.5 sm:py-3 rounded-lg border border-gray-400/80 focus:border-[#b65862] focus:outline-none focus:ring-1 focus:ring-[#b65862] text-xs sm:text-sm transition-all"
                  />
                  <input
                    type="text"
                    required
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Last name"
                    className="w-full px-4 py-2.5 sm:py-3 rounded-lg border border-gray-400/80 focus:border-[#b65862] focus:outline-none focus:ring-1 focus:ring-[#b65862] text-xs sm:text-sm transition-all"
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
                    className="w-full px-4 py-2.5 sm:py-3 rounded-lg border border-gray-400/80 focus:border-[#b65862] focus:outline-none focus:ring-1 focus:ring-[#b65862] text-xs sm:text-sm transition-all"
                  />
                  <input
                    type="text"
                    required
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    placeholder="Company name"
                    className="w-full px-4 py-2.5 sm:py-3 rounded-lg border border-gray-400/80 focus:border-[#b65862] focus:outline-none focus:ring-1 focus:ring-[#b65862] text-xs sm:text-sm transition-all"
                  />
                </div>

                {/* Row 3: Phone & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <input
                    type="tel"
                    required
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone"
                    className="w-full px-4 py-2.5 sm:py-3 rounded-lg border border-gray-400/80 focus:border-[#b65862] focus:outline-none focus:ring-1 focus:ring-[#b65862] text-xs sm:text-sm transition-all"
                  />
                  <input
                    type="email"
                    required
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    className="w-full px-4 py-2.5 sm:py-3 rounded-lg border border-gray-400/80 focus:border-[#b65862] focus:outline-none focus:ring-1 focus:ring-[#b65862] text-xs sm:text-sm transition-all"
                  />
                </div>

                {/* Row 4: Select Product Dropdown */}
                <div>
                  <select
                    name="product"
                    value={formData.product}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 sm:py-3 rounded-lg border border-gray-400/80 focus:border-[#b65862] focus:outline-none focus:ring-1 focus:ring-[#b65862] text-xs sm:text-sm bg-white text-gray-700 transition-all"
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
                    className="w-full px-4 py-2.5 sm:py-3 rounded-lg border border-gray-400/80 focus:border-[#b65862] focus:outline-none focus:ring-1 focus:ring-[#b65862] text-xs sm:text-sm transition-all resize-y"
                  ></textarea>
                </div>

                {/* Submit Request Button matching screenshot */}
                <motion.button
                  whileHover={{ scale: 1.015, backgroundColor: '#18181b' }}
                  whileTap={{ scale: 0.985 }}
                  type="submit"
                  className="w-full py-3.5 bg-black text-white font-semibold rounded-lg text-xs sm:text-sm shadow-md transition-all cursor-pointer tracking-wide"
                >
                  Submit Request
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
