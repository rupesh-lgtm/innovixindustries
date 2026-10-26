import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Home, Menu, X } from 'lucide-react';

interface NavbarProps {
  onNavigate?: (section: string) => void;
  onOpenOffice?: () => void;
  isTransparent?: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate, onOpenOffice, isTransparent = false }) => {
  const [productsOpen, setProductsOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  React.useEffect(() => {
    if (!isTransparent) return;
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isTransparent]);

  const handleNavClick = (section: string) => {
    if (onNavigate) {
      onNavigate(section);
    }
    setMobileMenuOpen(false);
    setProductsOpen(false);
  };

  const isHeaderTransparent = isTransparent && !scrolled;

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isHeaderTransparent
        ? 'bg-white/90 backdrop-blur-md border-b border-gray-200/60 text-gray-800 shadow-sm'
        : 'bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm text-gray-800'
        }`}
    >
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-around h-16 sm:h-20">
          {/* Logo with responsive sizing and aspect-ratio preservation */}
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              window.history.pushState({}, '', '/');
              handleNavClick('home');
            }}
            className="flex items-center cursor-pointer select-none py-1"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center"
            >
              <img
                src="/logo.png"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = '/logo.svg';
                }}
                alt="Innovix Industries Logo"
                className="w-28 sm:w-32 md:w-40 h-auto max-h-12 sm:max-h-14 object-contain"
              />
            </motion.div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8 text-[15px] font-semibold text-gray-800 transition-colors">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleNavClick('about')}
              className="hover:text-[#b65862] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-[2px] after:bg-[#b65862] after:transition-all"
            >
              About Us
            </motion.button>

            {/* Products Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setProductsOpen(true)}
              onMouseLeave={() => setProductsOpen(false)}
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleNavClick('products')}
                className="flex items-center gap-1 hover:text-[#0b2b48] py-1 transition-colors group"
              >
                <span>Products</span>
                <ChevronDown className={`w-4 h-4 text-gray-500 group-hover:text-gray-800 transition-transform duration-200 ${productsOpen ? 'rotate-180' : ''}`} />
              </motion.button>

              <AnimatePresence>
                {productsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 6, scale: 0.96 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 w-64 bg-white/95 backdrop-blur-lg rounded-xl shadow-2xl border border-gray-100 py-3 mt-1 text-sm overflow-hidden z-50"
                  >
                    {[
                      { name: 'Ferrous Scrap', slug: 'ferrous-scrap' },
                      { name: 'Non Ferrous Scrap', slug: 'non-ferrous-scrap' },
                      { name: 'Copper Wire', slug: 'copper-wire' },
                      { name: 'Aluminium Wire', slug: 'aluminium-wire' },
                      { name: 'Aluminium Scrap', slug: 'aluminium-scrap' },
                      { name: 'Copper Scrap', slug: 'copper-scrap' },
                      { name: 'Recycling Materials', slug: 'recycling-materials' },
                      { name: 'Brass Scrap', slug: 'brass-scrap' },
                    ].map((item, idx) => (
                      <button
                        key={idx}
                        onClick={() => {
                          handleNavClick(item.slug);
                          setProductsOpen(false);
                        }}
                        className="w-full text-left px-4 py-2.5 text-gray-700 hover:bg-[#fff1f2] hover:text-[#b65862] hover:pl-5 font-medium transition-all cursor-pointer text-sm"
                      >
                        {item.name}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleNavClick('team')}
              className="hover:text-[#0b2b48] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-[2px] after:bg-brand-banner after:transition-all"
            >
              Our Team
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleNavClick('contact')}
              className="hover:text-[#0b2b48] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-[2px] after:bg-brand-banner after:transition-all"
            >
              Contact Us
            </motion.button>
          </nav>

          {/* Right Action: Home Icon + Mobile Menu Hamburger */}
          <div className="flex items-center space-x-2">
            <motion.button
              whileHover={{ scale: 1.15, rotate: 10 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => {
                if (onOpenOffice) {
                  onOpenOffice();
                } else {
                  handleNavClick('home');
                }
              }}
              title="Our Office"
              className="p-2 sm:p-2.5 rounded-full text-gray-400 hover:text-brand-banner hover:bg-rose-50 transition-all focus:outline-none"
            >
              <Home className="w-5 h-5 fill-current opacity-80" />
            </motion.button>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-[#b65862]" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden bg-white/98 backdrop-blur-lg border-b border-gray-200 px-5 pt-3 pb-6 space-y-2 shadow-xl overflow-hidden"
          >
            <button
              onClick={() => handleNavClick('about')}
              className="block w-full text-left px-3 py-2.5 rounded-lg text-base font-semibold text-gray-700 hover:bg-rose-50 hover:text-brand-banner transition-colors"
            >
              About Us
            </button>
            {/* Mobile Products Dropdown Accordion */}
            <div className="w-full">
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setProductsOpen(!productsOpen);
                }}
                className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-base font-semibold text-gray-700 hover:bg-rose-50 hover:text-brand-banner transition-colors"
              >
                <span>Products</span>
                <ChevronDown
                  className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${productsOpen ? 'rotate-180 text-brand-banner' : ''
                    }`}
                />
              </button>

              <AnimatePresence>
                {productsOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.25, ease: 'easeInOut' }}
                    className="overflow-hidden pl-3 pr-2 py-1 space-y-1 bg-rose-50/40 rounded-xl mt-1 border border-rose-100/60"
                  >
                    {[
                      { name: 'Ferrous Scrap', slug: 'ferrous-scrap' },
                      { name: 'Non Ferrous Scrap', slug: 'non-ferrous-scrap' },
                      { name: 'Copper Wire', slug: 'copper-wire' },
                      { name: 'Aluminium Wire', slug: 'aluminium-wire' },
                      { name: 'Aluminium Scrap', slug: 'aluminium-scrap' },
                      { name: 'Copper Scrap', slug: 'copper-scrap' },
                      { name: 'Recycling Materials', slug: 'recycling-materials' },
                      { name: 'Brass Scrap', slug: 'brass-scrap' },
                    ].map((item, idx) => (
                      <button
                        key={idx}
                        onClick={() => {
                          handleNavClick(item.slug);
                          setProductsOpen(false);
                        }}
                        className="w-full text-left block px-3 py-2 rounded-lg text-sm font-medium text-gray-700 hover:text-brand-banner hover:bg-white transition-colors cursor-pointer"
                      >
                        {item.name}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <button
              onClick={() => handleNavClick('team')}
              className="block w-full text-left px-3 py-2.5 rounded-lg text-base font-semibold text-gray-700 hover:bg-rose-50 hover:text-brand-banner transition-colors"
            >
              Our Team
            </button>
            <button
              onClick={() => handleNavClick('contact')}
              className="block w-full text-left px-3 py-2.5 rounded-lg text-base font-semibold text-gray-700 hover:bg-rose-50 hover:text-brand-banner transition-colors"
            >
              Contact Us
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
