import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Phone, Mail, ArrowUp } from 'lucide-react';

export const QuickContactButtons: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const actionButtons = [
    {
      id: 'whatsapp',
      icon: MessageCircle,
      href: 'https://api.whatsapp.com/send/?phone=919211492008&text&type=phone_number&app_absent=0',
      title: 'WhatsApp Us',
      fill: true,
    },
    {
      id: 'phone',
      icon: Phone,
      href: 'tel:+919211492008',
      title: 'Call Us',
      fill: true,
    },
    {
      id: 'email',
      icon: Mail,
      href: 'mailto:info@innovixipl.com',
      title: 'Email Us',
      fill: false,
    },
  ];

  return (
    <aside aria-label="Quick contact and actions" className="fixed right-3 bottom-6 z-40 flex flex-col items-center space-y-2.5">
      {actionButtons.map((btn, index) => {
        const IconComponent = btn.icon;
        return (
          <motion.a
            key={btn.id}
            href={btn.href}
            target={btn.id === 'whatsapp' ? '_blank' : undefined}
            rel="noopener noreferrer"
            title={btn.title}
            initial={{ scale: 0, opacity: 0, x: 20 }}
            animate={{ scale: 1, opacity: 1, x: 0 }}
            transition={{ delay: 0.5 + index * 0.1, type: 'spring', stiffness: 300 }}
            whileHover={{ scale: 1.15, rotate: 6 }}
            whileTap={{ scale: 0.9 }}
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#bd606a]/90 hover:bg-[#a94f58] text-white flex items-center justify-center shadow-lg hover:shadow-2xl transition-colors duration-200 border border-white/20 relative group cursor-pointer"
          >
            <IconComponent className={`w-4 h-4 sm:w-5 sm:h-5 ${btn.fill ? 'fill-current' : ''}`} />

            <span className="absolute right-full mr-2.5 px-2 py-1 bg-gray-900 text-white text-[11px] rounded shadow-md opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200 whitespace-nowrap">
              {btn.title}
            </span>
          </motion.a>
        );
      })}

      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            key="scrollTop"
            onClick={scrollToTop}
            title="Scroll to Top"
            initial={{ opacity: 0, scale: 0, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0, y: 15 }}
            whileHover={{ scale: 1.2, y: -3 }}
            whileTap={{ scale: 0.9 }}
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#bd606a] hover:bg-[#a94f58] text-white flex items-center justify-center shadow-xl transition-colors duration-200 border border-white/20 cursor-pointer"
          >
            <ArrowUp className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.5]" />
          </motion.button>
        )}
      </AnimatePresence>
    </aside>
  );
};

export default QuickContactButtons;
