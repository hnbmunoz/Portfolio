// ==========================================================================
// Theme Store (Zustand)
// ==========================================================================

import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { useEffect } from 'react';

export type Theme = 'light' | 'dark';

interface ThemeState {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
  initializeTheme: () => void;
}

const applyThemeToDOM = (theme: Theme) => {
  if (typeof window !== 'undefined') {
    document.documentElement.setAttribute('data-theme', theme);
  }
};

const getSystemTheme = (): Theme => {
  if (typeof window === 'undefined') return 'dark';
  
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

export const useThemeStore = create<ThemeState>()(
  persist(
    (set, get) => ({
      theme: 'dark', // Default theme
      
      setTheme: (theme: Theme) => {
        applyThemeToDOM(theme);
        set({ theme });
      },
      
      toggleTheme: () => {
        const currentTheme = get().theme;
        const newTheme: Theme = currentTheme === 'light' ? 'dark' : 'light';
        get().setTheme(newTheme);
      },
      
      initializeTheme: () => {
        const storedTheme = get().theme;
        const systemTheme = getSystemTheme();
        
        // Use stored theme if available, otherwise use system preference
        const initialTheme = storedTheme || systemTheme;
        get().setTheme(initialTheme);
      },
    }),
    {
      name: 'theme-storage', // Storage key
      storage: createJSONStorage(() => localStorage),
      onRehydrateStorage: () => (state) => {
        // Apply theme to DOM after rehydration
        if (state) {
          applyThemeToDOM(state.theme);
        }
      },
    }
  )
);

// Hook for theme initialization on app start
export const useThemeInitialization = () => {
  const initializeTheme = useThemeStore((state) => state.initializeTheme);
  
  // Initialize theme on mount
  useEffect(() => {
    initializeTheme();
    
    // Listen for system theme changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => {
      // Only update if no theme is stored (user hasn't made a choice)
      const storedTheme = localStorage.getItem('theme-storage');
      if (!storedTheme) {
        useThemeStore.getState().setTheme(e.matches ? 'dark' : 'dark');
      }
    };
    
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [initializeTheme]);
};