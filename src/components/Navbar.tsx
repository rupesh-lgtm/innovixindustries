import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Menu, X } from 'lucide-react';

interface NavbarProps {
  onNavigate?: (section: string) => void;
  onOpenOffice?: () => void;
  isTransparent?: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate, isTransparent = false }) => {
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
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isHeaderTransparent
          ? 'bg-white/90 dark:bg-[#07131e]/90 backdrop-blur-md border-b border-gray-200/60 dark:border-slate-800/80 text-gray-800 dark:text-gray-100 shadow-sm'
          : 'bg-white/95 dark:bg-[#07131e]/95 backdrop-blur-md border-b border-gray-100 dark:border-slate-800 shadow-sm text-gray-800 dark:text-gray-100'
      }`}
    >
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-around h-16 sm:h-20">
          {/* Logo with responsive sizing */}
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
                  (e.currentTarget as HTMLImageElement).src = '/logo_original.png';
                }}
                alt="Innovix Industries Logo"
                className="w-32 sm:w-36 md:w-44 h-auto max-h-12 sm:max-h-14 object-contain filter dark:brightness-110"
              />
            </motion.div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8 text-[15px] font-semibold text-gray-800 dark:text-gray-200 transition-colors">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleNavClick('about')}
              className="hover:text-[#b65862] dark:hover:text-rose-400 transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-[2px] after:bg-[#b65862] dark:after:bg-rose-400 after:transition-all cursor-pointer"
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
                className="flex items-center gap-1 hover:text-[#b65862] dark:hover:text-rose-400 py-1 transition-colors group cursor-pointer"
              >
                <span>Products</span>
                <ChevronDown className={`w-4 h-4 text-gray-500 dark:text-gray-400 group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-transform duration-200 ${productsOpen ? 'rotate-180' : ''}`} />
              </motion.button>

              <AnimatePresence>
                {productsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 6, scale: 0.96 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 w-64 bg-white/95 dark:bg-[#0a1b2b]/95 backdrop-blur-lg rounded-2xl shadow-2xl border border-gray-100 dark:border-slate-800 py-3 mt-1 text-sm overflow-hidden z-50 card-3d"
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
                        className="w-full text-left px-4 py-2.5 text-gray-700 dark:text-gray-300 hover:bg-[#fff1f2] dark:hover:bg-slate-800/80 hover:text-[#b65862] dark:hover:text-rose-400 hover:pl-5 font-medium transition-all cursor-pointer text-sm"
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
              className="hover:text-[var(--theme-primary)] dark:hover:text-[var(--theme-primary)] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-[2px] after:bg-[var(--theme-primary)] after:transition-all cursor-pointer"
            >
              Our Team
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleNavClick('careers')}
              className="hover:text-[var(--theme-primary)] dark:hover:text-[var(--theme-primary)] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-[2px] after:bg-[var(--theme-primary)] after:transition-all cursor-pointer"
            >
              Careers
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleNavClick('contact')}
              className="hover:text-[var(--theme-primary)] dark:hover:text-[var(--theme-primary)] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-[2px] after:bg-[var(--theme-primary)] after:transition-all cursor-pointer"
            >
              Contact Us
            </motion.button>
          </nav>

          {/* Right Action: Mobile Hamburger (Theme Studio, Dark Theme, Home commented out as requested) */}
          <div className="flex items-center space-x-2 sm:space-x-2.5">
            {/* 3D Theme Studio Palette Picker - Commented Out
            <motion.button
              whileHover={{ scale: 1.1, rotate: -8 }}
              whileTap={{ scale: 0.92, rotate: 8 }}
              onClick={() => setThemeCustomizerOpen(true)}
              title="Theme Studio (Colors & Modes)"
              aria-label="Open Theme Studio"
              className="p-2 sm:p-2.5 rounded-2xl border border-slate-200/80 dark:border-slate-700/80 bg-slate-100/80 dark:bg-slate-800/90 text-gray-700 dark:text-gray-200 hover:text-[#b65862] dark:hover:text-rose-400 shadow-sm transition-all focus:outline-none cursor-pointer btn-3d"
            >
              <Palette className="w-5 h-5 text-[#b65862] dark:text-rose-400" />
            </motion.button>
            */}

            {/* 3D Theme Toggle (Light / Dark Mode) - Commented Out
            <motion.button
              whileHover={{ scale: 1.1, rotate: 12 }}
              whileTap={{ scale: 0.92, rotate: -12 }}
              onClick={toggleTheme}
              title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              aria-label="Toggle Theme"
              className="p-2 sm:p-2.5 rounded-2xl border border-slate-200/80 dark:border-slate-700/80 bg-slate-100/80 dark:bg-slate-800/90 text-gray-700 dark:text-amber-400 hover:text-[#b65862] dark:hover:text-amber-300 shadow-sm transition-all focus:outline-none cursor-pointer btn-3d"
            >
              <AnimatePresence mode="wait" initial={false}>
                {theme === 'dark' ? (
                  <motion.div
                    key="moon"
                    initial={{ scale: 0.5, rotate: -90, opacity: 0 }}
                    animate={{ scale: 1, rotate: 0, opacity: 1 }}
                    exit={{ scale: 0.5, rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Sun className="w-5 h-5 text-amber-400 fill-amber-400/20" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="sun"
                    initial={{ scale: 0.5, rotate: 90, opacity: 0 }}
                    animate={{ scale: 1, rotate: 0, opacity: 1 }}
                    exit={{ scale: 0.5, rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Moon className="w-5 h-5 text-slate-700 hover:text-[#b65862] fill-slate-700/20" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
            */}

            {/* Home / Our Office Button - Commented Out
            <motion.button
              whileHover={{ scale: 1.1, rotate: 8 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => {
                if (onOpenOffice) {
                  onOpenOffice();
                } else {
                  handleNavClick('home');
                }
              }}
              title="Our Office"
              className="p-2 sm:p-2.5 rounded-2xl border border-slate-200/80 dark:border-slate-700/80 bg-slate-100/80 dark:bg-slate-800/90 text-gray-500 dark:text-gray-400 hover:text-[#b65862] dark:hover:text-rose-400 shadow-sm transition-all focus:outline-none cursor-pointer btn-3d"
            >
              <Home className="w-5 h-5 fill-current opacity-80" />
            </motion.button>
            */}

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-xl text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors focus:outline-none cursor-pointer"
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
            className="md:hidden bg-white/98 dark:bg-[#07131e]/98 backdrop-blur-xl border-b border-gray-200 dark:border-slate-800 px-5 pt-3 pb-6 space-y-2 shadow-2xl overflow-hidden"
          >
            {/* Mobile Theme Switcher Bar */}
            {/* Mobile Appearance & Palette Studio - Commented Out
            <div className="flex items-center justify-between p-3 rounded-xl bg-slate-100 dark:bg-slate-800/80 mb-2 border border-slate-200/80 dark:border-slate-700/60">
              <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                Appearance: {theme === 'dark' ? 'Dark' : 'Light'}
              </span>
              <button
                type="button"
                onClick={toggleTheme}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white dark:bg-slate-700 text-xs font-bold text-gray-800 dark:text-white shadow-sm cursor-pointer"
              >
                {theme === 'dark' ? <Sun className="w-3.5 h-3.5 text-amber-400" /> : <Moon className="w-3.5 h-3.5 text-slate-700" />}
                <span>{theme === 'dark' ? 'Light Mode' : 'Dark Mode'}</span>
              </button>
            </div>

            <div className="flex items-center justify-between p-3 rounded-xl bg-slate-100 dark:bg-slate-800/80 mb-3 border border-slate-200/80 dark:border-slate-700/60">
              <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                Color Palette Studio
              </span>
              <button
                type="button"
                onClick={() => {
                  setThemeCustomizerOpen(true);
                  setMobileMenuOpen(false);
                }}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white dark:bg-slate-700 text-xs font-bold text-gray-800 dark:text-white shadow-sm cursor-pointer"
              >
                <Palette className="w-3.5 h-3.5 text-[#b65862] dark:text-rose-400" />
                <span>Customize Colors</span>
              </button>
            </div>
            */}

            <button
              onClick={() => handleNavClick('about')}
              className="block w-full text-left px-3 py-2.5 rounded-lg text-base font-semibold text-gray-700 dark:text-gray-200 hover:bg-rose-50 dark:hover:bg-slate-800 hover:text-[#b65862] dark:hover:text-rose-400 transition-colors"
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
                className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-base font-semibold text-gray-700 dark:text-gray-200 hover:bg-rose-50 dark:hover:bg-slate-800 hover:text-[#b65862] dark:hover:text-rose-400 transition-colors"
              >
                <span>Products</span>
                <ChevronDown
                  className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${
                    productsOpen ? 'rotate-180 text-[#b65862] dark:text-rose-400' : ''
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
                    className="overflow-hidden pl-3 pr-2 py-1 space-y-1 bg-rose-50/40 dark:bg-slate-900/60 rounded-xl mt-1 border border-rose-100/60 dark:border-slate-800"
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
                        className="w-full text-left block px-3 py-2 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-[#b65862] dark:hover:text-rose-400 hover:bg-white dark:hover:bg-slate-800 transition-colors cursor-pointer"
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
              className="block w-full text-left px-3 py-2.5 rounded-lg text-base font-semibold text-gray-700 dark:text-gray-200 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-[var(--theme-primary)] transition-colors"
            >
              Our Team
            </button>
            <button
              onClick={() => handleNavClick('careers')}
              className="block w-full text-left px-3 py-2.5 rounded-lg text-base font-semibold text-gray-700 dark:text-gray-200 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-[var(--theme-primary)] transition-colors"
            >
              Careers
            </button>
            <button
              onClick={() => handleNavClick('contact')}
              className="block w-full text-left px-3 py-2.5 rounded-lg text-base font-semibold text-gray-700 dark:text-gray-200 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-[var(--theme-primary)] transition-colors"
            >
              Contact Us
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Theme & Style Customizer Modal - Commented Out */}
    </motion.header>
  );
};

export default Navbar;