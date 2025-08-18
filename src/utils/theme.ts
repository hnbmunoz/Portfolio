// ==========================================================================
// Theme Utilities
// ==========================================================================

export type Theme = 'light' | 'dark';

export const getStoredTheme = (): Theme => {
  if (typeof window === 'undefined') return 'dark';
  
  const stored = localStorage.getItem('theme') as Theme;
  if (stored && ['light', 'dark'].includes(stored)) {
    return stored;
  }
  
  // Check system preference
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return 'dark';
  }
  
  return 'dark';
};

export const setTheme = (theme: Theme): void => {
  if (typeof window === 'undefined') return;
  
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
};

export const toggleTheme = (): Theme => {
  const currentTheme = getStoredTheme();
  const newTheme: Theme = currentTheme === 'light' ? 'dark' : 'light';
  setTheme(newTheme);
  return newTheme;
};

export const initializeTheme = (): void => {
  const theme = getStoredTheme();
  setTheme(theme);
};