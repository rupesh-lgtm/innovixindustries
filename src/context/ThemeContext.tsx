import React, { createContext, useContext, useEffect, useState } from 'react';

export type ThemeMode = 'light' | 'dark';
export type ColorTheme = 'crimson' | 'copper' | 'emerald' | 'cyan' | 'gold';

export interface ThemeConfig {
  id: ColorTheme;
  name: string;
  tagline: string;
  primary: string;
  secondary: string;
  previewGradient: string;
}

export const THEME_PALETTES: ThemeConfig[] = [
  {
    id: 'cyan',
    name: 'Innovix Logo Cyan',
    tagline: 'Official Brand Blue & Cyan Palette',
    primary: '#0284c7',
    secondary: '#072d4b',
    previewGradient: 'from-[#072d4b] to-[#0284c7]',
  },
  {
    id: 'copper',
    name: 'Molten Copper',
    tagline: 'Foundry & Bronze Smelting',
    primary: '#ea580c',
    secondary: '#1c1917',
    previewGradient: 'from-[#ea580c] to-[#f97316]',
  },
  {
    id: 'emerald',
    name: 'Circular Emerald',
    tagline: 'Eco-Green Clean Recycling',
    primary: '#059669',
    secondary: '#061d15',
    previewGradient: 'from-[#059669] to-[#10b981]',
  },
  {
    id: 'gold',
    name: 'Gold Alloy',
    tagline: 'Precious Secondary Casting',
    primary: '#d97706',
    secondary: '#18181b',
    previewGradient: 'from-[#d97706] to-[#f59e0b]',
  },
  {
    id: 'crimson',
    name: 'Industrial Rose',
    tagline: 'Secondary Metallurgical Accent',
    primary: '#b65862',
    secondary: '#072d4b',
    previewGradient: 'from-[#b65862] to-[#c76570]',
  },
];

interface ThemeContextType {
  mode: ThemeMode;
  colorTheme: ColorTheme;
  toggleMode: () => void;
  setMode: (mode: ThemeMode) => void;
  setColorTheme: (colorTheme: ColorTheme) => void;
  // Backward compatibility alias for existing components
  theme: ThemeMode;
  toggleTheme: () => void;
  setTheme: (mode: ThemeMode) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [mode, setModeState] = useState<ThemeMode>(() => {
    if (typeof window !== 'undefined') {
      const savedMode = localStorage.getItem('innovix-theme-mode') || localStorage.getItem('innovix-theme');
      if (savedMode === 'light' || savedMode === 'dark') {
        return savedMode;
      }
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return 'light';
  });

  const [colorTheme, setColorThemeState] = useState<ColorTheme>(() => {
    if (typeof window !== 'undefined') {
      const savedColor = localStorage.getItem('innovix-color-theme') as ColorTheme | null;
      if (savedColor && ['crimson', 'copper', 'emerald', 'cyan', 'gold'].includes(savedColor)) {
        // Upgrade legacy default 'crimson' to official brand logo cyan
        if (savedColor === 'crimson') return 'cyan';
        return savedColor;
      }
    }
    return 'cyan';
  });

  useEffect(() => {
    const root = document.documentElement;
    // Apply dark class
    if (mode === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('innovix-theme-mode', mode);
    localStorage.setItem('innovix-theme', mode);
  }, [mode]);

  useEffect(() => {
    const root = document.documentElement;
    // Apply data-color-theme attribute for dynamic CSS styling
    root.setAttribute('data-color-theme', colorTheme);
    localStorage.setItem('innovix-color-theme', colorTheme);
  }, [colorTheme]);

  const toggleMode = () => {
    setModeState((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const setMode = (newMode: ThemeMode) => {
    setModeState(newMode);
  };

  const setColorTheme = (newColor: ColorTheme) => {
    setColorThemeState(newColor);
  };

  return (
    <ThemeContext.Provider
      value={{
        mode,
        colorTheme,
        toggleMode,
        setMode,
        setColorTheme,
        // Backward compatibility:
        theme: mode,
        toggleTheme: toggleMode,
        setTheme: setMode,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export default ThemeProvider;
