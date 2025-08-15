import { useTheme } from '../../hooks/useTheme';

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="theme-toggle"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {theme === 'light' ? (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
        </svg>
      ) : (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="5"></circle>
          <path d="m12 1-1 2-1-2"></path>
          <path d="m12 23-1-2-1 2"></path>
          <path d="m20.2 7.8-1.4 1.4-1.4-1.4"></path>
          <path d="m6.3 17.7-1.4 1.4-1.4-1.4"></path>
          <path d="m23 12-2 1-2-1"></path>
          <path d="m1 12 2-1 2 1"></path>
          <path d="m20.2 16.2-1.4-1.4-1.4 1.4"></path>
          <path d="m6.3 6.3-1.4-1.4-1.4 1.4"></path>
        </svg>
      )}
    </button>
  );
};

export default ThemeToggle;