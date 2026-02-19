'use client';

import { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

type Theme = 'dark' | 'light';

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState<Theme>('dark');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    const nextTheme: Theme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    localStorage.setItem('theme', nextTheme);
  };

  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="group flex h-10 w-10 items-center justify-center rounded-full bg-transparent transition-colors hover:bg-accent/10"
      aria-label="Toggle between dark and light theme"
      title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      {isDark ? (
        <Sun className="h-5 w-5 text-slate-400 transition-all group-hover:text-accent-bright" />
      ) : (
        <Moon className="h-5 w-5 text-slate-400 transition-all group-hover:text-accent-bright" />
      )}
    </button>
  );
}
