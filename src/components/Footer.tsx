import React from 'react';
import { motion } from 'framer-motion';
import { Plus, Mail, Phone, MapPin } from 'lucide-react';

interface FooterProps {
  onNavigate?: (section: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToContact = () => {
    if (onNavigate) {
      onNavigate('contact');
    } else {
      const el = document.getElementById('contact');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleLinkClick = (e: React.MouseEvent, target: string) => {
    if (onNavigate) {
      e.preventDefault();
      onNavigate(target);
    }
  };

  return (
    <footer className="w-full select-none">
      {/* 1. Top Black CTA Bar */}
      <div className="w-full bg-[#111927] py-4 sm:py-5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-center">
          <h3 className="text-white text-base sm:text-lg md:text-xl font-bold tracking-tight">
            Turning Scrap into Sustainable Solutions
          </h3>

          <motion.button
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-20px' }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToContact}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#b65862] hover:bg-[#a24851] text-white text-xs sm:text-sm font-semibold shadow-md transition-all cursor-pointer group"
          >
            <span>Enquiry</span>
            <span className="w-5 h-5 rounded-full bg-white text-[#b65862] flex items-center justify-center font-bold text-xs group-hover:rotate-90 transition-transform">
              <Plus className="w-3.5 h-3.5 stroke-[3]" />
            </span>
          </motion.button>
        </div>
      </div>

      {/* 2. Main Middle Footer Content Bar (Light Ash Slate Background) */}
      <div className="w-full bg-[#e8edf2] text-gray-700 py-12 sm:py-16 px-4 sm:px-6 lg:px-8 border-b border-gray-300/80">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10">

            {/* Column 1: Logo & Company Description (4 Cols) */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-4 space-y-4"
            >
              <div className="flex items-center">
                <img
                  src="/logo.png"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = '/logo.svg';
                  }}
                  alt="Innovix Industries"
                  className="w-32 sm:w-36 h-auto max-h-12 object-contain"
                />
              </div>

              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed max-w-sm">
                Leading scrap trading & recycling company specializing in ferrous and non-ferrous metals, committed to sustainability and quality.
              </p>
            </motion.div>

            {/* Column 2: Quick Links (2.5 Cols) */}
            <motion.div
              initial={{ opacity: 0, y: -35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-2 space-y-3"
            >
              <h4 className="text-sm font-bold text-gray-900 tracking-tight pb-1 border-b-2 border-gray-400/40 inline-block">
                Quick Links
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-gray-600">
                <li>
                  <a
                    href="/about"
                    onClick={(e) => handleLinkClick(e, 'about')}
                    className="hover:text-[#b65862] transition-colors flex items-center gap-1 group cursor-pointer"
                  >
                    <span className="group-hover:translate-x-1 transition-transform">About Us</span>
                  </a>
                </li>
                <li>
                  <a
                    href="/team"
                    onClick={(e) => handleLinkClick(e, 'team')}
                    className="hover:text-[#b65862] transition-colors flex items-center gap-1 group cursor-pointer"
                  >
                    <span className="group-hover:translate-x-1 transition-transform">Our Team</span>
                  </a>
                </li>
                <li>
                  <a
                    href="/products"
                    onClick={(e) => handleLinkClick(e, 'products')}
                    className="hover:text-[#b65862] transition-colors flex items-center gap-1 group cursor-pointer"
                  >
                    <span className="group-hover:translate-x-1 transition-transform">Products</span>
                  </a>
                </li>
                <li>
                  <a
                    href="/contact"
                    onClick={(e) => handleLinkClick(e, 'contact')}
                    className="hover:text-[#b65862] transition-colors flex items-center gap-1 group cursor-pointer"
                  >
                    <span className="group-hover:translate-x-1 transition-transform">Contact</span>
                  </a>
                </li>


              </ul>
            </motion.div>

            {/* Column 3: Products (2.5 Cols) */}
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-3 space-y-3"
            >
              <h4 className="text-sm font-bold text-gray-900 tracking-tight pb-1 border-b-2 border-gray-400/40 inline-block">
                Products
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-gray-600">
                <li>
                  <a
                    href="/products"
                    onClick={(e) => handleLinkClick(e, 'ferrous-scrap')}
                    className="hover:text-[#b65862] transition-colors flex items-center gap-1 group cursor-pointer"
                  >
                    <span className="group-hover:translate-x-1 transition-transform">Ferrous Scrap</span>
                  </a>
                </li>
                <li>
                  <a
                    href="/products"
                    onClick={(e) => handleLinkClick(e, 'non-ferrous-scrap')}
                    className="hover:text-[#b65862] transition-colors flex items-center gap-1 group cursor-pointer"
                  >
                    <span className="group-hover:translate-x-1 transition-transform">Non-Ferrous Scrap</span>
                  </a>
                </li>
                <li>
                  <a
                    href="/products"
                    onClick={(e) => handleLinkClick(e, 'recycle-slider')}
                    className="hover:text-[#b65862] transition-colors flex items-center gap-1 group cursor-pointer"
                  >
                    <span className="group-hover:translate-x-1 transition-transform">Recycling Materials</span>
                  </a>
                </li>
                <li>
                  <a
                    href="/products"
                    onClick={(e) => handleLinkClick(e, 'aluminium-scrap')}
                    className="hover:text-[#b65862] transition-colors flex items-center gap-1 group cursor-pointer"
                  >
                    <span className="group-hover:translate-x-1 transition-transform">Aluminium Scrap</span>
                  </a>
                </li>
                <li>
                  <a
                    href="/products"
                    onClick={(e) => handleLinkClick(e, 'copper-scrap')}
                    className="hover:text-[#b65862] transition-colors flex items-center gap-1 group cursor-pointer"
                  >
                    <span className="group-hover:translate-x-1 transition-transform">Copper Scrap</span>
                  </a>
                </li>

              </ul>
            </motion.div>

            {/* Column 4: Get in Touch (3 Cols) */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-3 space-y-3"
            >
              <h4 className="text-sm font-bold text-gray-900 tracking-tight pb-1 border-b-2 border-gray-400/40 inline-block">
                Get in Touch
              </h4>
              <div className="space-y-2.5 text-xs sm:text-sm text-gray-700 pt-1">
                <a
                  href="mailto:info@innovixipl.com"
                  className="flex items-center gap-2.5 hover:text-[#b65862] transition-colors group"
                >
                  <Mail className="w-4 h-4 text-gray-700 group-hover:text-[#b65862] shrink-0" />
                  <span>info@innovixipl.com</span>
                </a>

                <a
                  href="tel:01204977413"
                  className="flex items-center gap-2.5 hover:text-[#b65862] transition-colors group"
                >
                  <Phone className="w-4 h-4 text-gray-700 group-hover:text-[#b65862] shrink-0" />
                  <span>01204977413</span>
                </a>

                <div className="flex items-start gap-2.5 text-gray-600 pt-1">
                  <MapPin className="w-4 h-4 text-gray-700 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">
                    Corporate Office : C-35, 1st Floor, Sector-6, Noida, Uttar Pradesh, India 201301
                  </span>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>

      {/* 3. Bottom Copyright Bar */}
      <div className="w-full bg-[#dfe5eb] py-4 px-4 sm:px-6 lg:px-8 text-xs text-gray-600 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-20px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left"
        >
          <p>© {new Date().getFullYear()} INNOVIX INDUSTRIES PRIVATE LIMITED. All rights reserved.</p>

          <div className="flex items-center space-x-6 text-xs text-gray-600">
            <a
              href="/terms"
              onClick={(e) => handleLinkClick(e, 'terms')}
              className="hover:text-[#b65862] transition-colors cursor-pointer"
            >
              Terms and Conditions
            </a>
            <a
              href="/privacy"
              onClick={(e) => handleLinkClick(e, 'privacy')}
              className="hover:text-[#b65862] transition-colors cursor-pointer"
            >
              Privacy Policy
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
