import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Phone, Mail } from 'lucide-react';

interface OfficeDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const OfficeDrawer: React.FC<OfficeDrawerProps> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 cursor-pointer"
          />

          {/* Right Sliding Drawer Panel */}
          <motion.aside
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 280 }}
            className="fixed top-0 right-0 h-full w-[85%] sm:w-[380px] md:w-[420px] bg-[#dbe2ea]/95 backdrop-blur-xl z-50 shadow-2xl flex flex-col justify-between border-l border-slate-300/60 overflow-y-auto"
          >
            <div>
              {/* Header with Title and Close Button */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-slate-300/70">
                <h3 className="text-xl font-bold text-[#b65862] tracking-tight">
                  Our Office
                </h3>
                <motion.button
                  whileHover={{ scale: 1.15, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={onClose}
                  className="p-1.5 rounded-lg text-gray-700 hover:text-black hover:bg-black/5 transition-colors focus:outline-none"
                  aria-label="Close office panel"
                >
                  <X className="w-5 h-5 stroke-[2.5]" />
                </motion.button>
              </div>

              {/* Drawer Content */}
              <div className="px-6 py-8 space-y-8">
                {/* Head Office Section */}
                <div>
                  <h4 className="text-base font-bold text-[#b65862] mb-2.5">
                    Head Office
                  </h4>
                  <p className="text-gray-700 text-sm leading-relaxed font-normal">
                    Corporate Office : C-35, 1st Floor,
                    <br />
                    Sector-6, Noida, Uttar Pradesh, India
                    <br />
                    201301
                  </p>
                </div>

                {/* Contact Section */}
                <div>
                  <h4 className="text-base font-bold text-[#b65862] mb-3">
                    Contact
                  </h4>
                  <div className="space-y-2 text-sm text-gray-800">
                    <a
                      href="tel:01204977413"
                      className="flex items-center gap-2.5 hover:text-[#b65862] transition-colors group"
                    >
                      <Phone className="w-4 h-4 text-gray-600 group-hover:text-[#b65862]" />
                      <span>01204977413</span>
                    </a>
                    <a
                      href="mailto:info@innovixipl.com"
                      className="flex items-center gap-2.5 hover:text-[#b65862] transition-colors group"
                    >
                      <Mail className="w-4 h-4 text-gray-600 group-hover:text-[#b65862]" />
                      <span>info@innovixipl.com</span>
                    </a>
                  </div>
                </div>

                {/* Circular Social Icons */}
                <div className="pt-2">
                  <div className="flex items-center gap-3">
                    {/* Facebook */}
                    <motion.a
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      href="https://www.facebook.com/people/Innovix-Industries-Pvt-Ltd/61582705467406/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-[#bd606a] hover:bg-[#a94f58] text-white flex items-center justify-center shadow-md transition-colors font-bold text-base"
                    >
                      f
                    </motion.a>

                    {/* Twitter / X */}
                    <motion.a
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      href="https://x.com/InnovixI63112"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-[#bd606a] hover:bg-[#a94f58] text-white flex items-center justify-center shadow-md transition-colors font-bold text-sm"
                    >
                      𝕏
                    </motion.a>

                    {/* YouTube */}
                    {/* <motion.a
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      href="https://youtube.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-[#bd606a] hover:bg-[#a94f58] text-white flex items-center justify-center shadow-md transition-colors text-sm"
                    >
                      ▶
                    </motion.a> */}

                    {/* LinkedIn */}
                    <motion.a
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      href="https://www.linkedin.com/company/innovix-industries-pvt-ltd/home/?viewAsMember=true"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-[#bd606a] hover:bg-[#a94f58] text-white flex items-center justify-center shadow-md transition-colors font-bold text-sm"
                    >
                      in
                    </motion.a>

                    {/* Instagram */}
                    <motion.a
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      href="https://www.instagram.com/innovixipl/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-[#bd606a] hover:bg-[#a94f58] text-white flex items-center justify-center shadow-md transition-colors"
                    >
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                    </motion.a>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Subtle Note */}
            <div className="p-6 border-t border-slate-300/50 text-xs text-gray-500 text-center">
              Innovix Industries Pvt. Ltd. • All Rights Reserved
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
};
