import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sun, Moon, Check, Sparkles, SlidersHorizontal } from 'lucide-react';
import { useTheme, THEME_PALETTES, type ColorTheme } from '../context/ThemeContext';

interface ThemeCustomizerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ThemeCustomizer: React.FC<ThemeCustomizerProps> = ({ isOpen, onClose }) => {
  const { mode, colorTheme, setMode, setColorTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Handle ESC key to close modal
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!mounted) return null;

  const modalContent = (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-lg max-h-[90vh] my-auto bg-white dark:bg-[#091724] rounded-3xl shadow-2xl border border-slate-200/90 dark:border-slate-800 p-5 sm:p-7 overflow-y-auto z-10 card-3d"
          >
            {/* Decorative Ambient Background Glows */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-rose-500/10 dark:bg-rose-500/15 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-blue-500/10 dark:bg-blue-500/15 rounded-full blur-3xl pointer-events-none" />

            {/* Header */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800 relative z-10">
              <div className="flex items-center gap-2.5">
                <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-gray-800 dark:text-gray-100 shadow-inner">
                  <SlidersHorizontal className="w-5 h-5 text-[#b65862]" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-black text-gray-900 dark:text-white tracking-tight">
                    Theme & Style Studio
                  </h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Personalize ambient lighting & metallurgical color palette
                  </p>
                </div>
              </div>

              <button
                onClick={onClose}
                aria-label="Close theme studio"
                className="p-2 rounded-xl text-gray-400 hover:text-gray-700 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* 1. Ambient Lighting Mode (Light / Dark) */}
            <div className="py-4 border-b border-slate-100 dark:border-slate-800 relative z-10">
              <label className="text-[11px] font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 block mb-2.5">
                1. Ambient Lighting Mode
              </label>
              <div className="grid grid-cols-2 gap-3">
                {/* Light Mode Card */}
                <button
                  type="button"
                  onClick={() => setMode('light')}
                  className={`p-3.5 rounded-2xl border text-left transition-all duration-200 cursor-pointer flex items-center justify-between group ${
                    mode === 'light'
                      ? 'border-[#b65862] bg-rose-50/50 dark:bg-slate-800 shadow-md ring-2 ring-[#b65862]/30'
                      : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800/40 hover:border-slate-300 dark:hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-xl bg-amber-100 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0 shadow-sm">
                      <Sun className="w-4 h-4 fill-amber-500/20" />
                    </div>
                    <div>
                      <div className="text-xs sm:text-sm font-bold text-gray-900 dark:text-white">
                        Light Mode
                      </div>
                      <div className="text-[10px] text-gray-500 dark:text-gray-400">
                        Corporate Clean
                      </div>
                    </div>
                  </div>
                  {mode === 'light' && (
                    <div className="w-5 h-5 rounded-full bg-[#b65862] text-white flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                  )}
                </button>

                {/* Dark Mode Card */}
                <button
                  type="button"
                  onClick={() => setMode('dark')}
                  className={`p-3.5 rounded-2xl border text-left transition-all duration-200 cursor-pointer flex items-center justify-between group ${
                    mode === 'dark'
                      ? 'border-[#b65862] bg-slate-800 dark:bg-slate-800/90 shadow-md ring-2 ring-[#b65862]/30'
                      : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800/40 hover:border-slate-300 dark:hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-xl bg-indigo-100 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shrink-0 shadow-sm">
                      <Moon className="w-4 h-4 fill-indigo-500/20" />
                    </div>
                    <div>
                      <div className="text-xs sm:text-sm font-bold text-gray-900 dark:text-white">
                        Dark Mode
                      </div>
                      <div className="text-[10px] text-gray-500 dark:text-gray-400">
                        Midnight Obsidian
                      </div>
                    </div>
                  </div>
                  {mode === 'dark' && (
                    <div className="w-5 h-5 rounded-full bg-[#b65862] text-white flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                  )}
                </button>
              </div>
            </div>

            {/* 2. Color Theme Palette Selection */}
            <div className="py-4 relative z-10">
              <label className="text-[11px] font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 block mb-2.5">
                2. Metallurgical Color Palette ({THEME_PALETTES.length} Presets)
              </label>

              <div className="space-y-2">
                {THEME_PALETTES.map((palette) => {
                  const isSelected = colorTheme === palette.id;
                  return (
                    <button
                      key={palette.id}
                      type="button"
                      onClick={() => setColorTheme(palette.id as ColorTheme)}
                      className={`w-full p-3 rounded-2xl border text-left transition-all duration-200 cursor-pointer flex items-center justify-between group ${
                        isSelected
                          ? 'border-gray-900 dark:border-white bg-slate-50 dark:bg-slate-800 shadow-md ring-2 ring-slate-900/10 dark:ring-white/20'
                          : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40 hover:border-slate-300 dark:hover:border-slate-700'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        {/* Color Swatch Circle */}
                        <div
                          className={`w-8 h-8 rounded-xl bg-gradient-to-tr ${palette.previewGradient} shadow-md shrink-0 flex items-center justify-center border border-white/25`}
                        >
                          {isSelected && <Check className="w-3.5 h-3.5 text-white stroke-[3]" />}
                        </div>

                        <div>
                          <div className="text-xs sm:text-sm font-bold text-gray-900 dark:text-white flex items-center gap-1.5">
                            <span>{palette.name}</span>
                            {palette.id === 'cyan' && (
                              <span className="text-[9px] uppercase tracking-wider font-extrabold px-1.5 py-0.5 rounded-md bg-sky-100 dark:bg-sky-950/60 text-sky-600 dark:text-sky-400">
                                Official Default
                              </span>
                            )}
                          </div>
                          <div className="text-[10px] text-gray-500 dark:text-gray-400">
                            {palette.tagline}
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-1.5">
                        <span
                          className="w-3.5 h-3.5 rounded-full shadow-inner"
                          style={{ backgroundColor: palette.primary }}
                        />
                        <span
                          className="w-3.5 h-3.5 rounded-full shadow-inner"
                          style={{ backgroundColor: palette.secondary }}
                        />
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 3. Live Active Preview */}
            <div className="pt-2 relative z-10">
              <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-[#06111c] border border-slate-200/80 dark:border-slate-800/80 text-center space-y-2.5">
                <div className="flex items-center justify-center gap-1.5 text-xs text-gray-500 dark:text-gray-400 font-medium">
                  <Sparkles className="w-3.5 h-3.5 text-[#b65862]" />
                  <span>Real-Time Active Theme Preview</span>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-2.5">
                  <button
                    type="button"
                    className="px-4 py-2 rounded-xl bg-[#b65862] hover:bg-[#a24851] text-white text-xs font-bold shadow-md transition-all btn-3d cursor-pointer"
                  >
                    Action Button
                  </button>
                  <span className="px-3 py-1.5 rounded-full bg-slate-200/70 dark:bg-slate-800 text-[#b65862] text-xs font-bold border border-slate-300/60 dark:border-slate-700">
                    Highlighted Badge
                  </span>
                </div>
              </div>
            </div>

            {/* Done Button */}
            <div className="mt-4 pt-2 relative z-10">
              <button
                type="button"
                onClick={onClose}
                className="w-full py-2.5 rounded-xl bg-gray-900 hover:bg-black dark:bg-white dark:hover:bg-gray-100 text-white dark:text-gray-900 text-xs sm:text-sm font-bold shadow-lg transition-all cursor-pointer"
              >
                Apply & Close
              </button>
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );

  return createPortal(modalContent, document.body);
};

export default ThemeCustomizer;
