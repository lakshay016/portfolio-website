'use client'; // Required for buttons to work

import { useState, useEffect } from 'react';

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState('dark');

  // This effect changes the "data-theme" attribute on the whole website
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const themes = [
    { name: 'dark', class: 'bg-slate-900' },
    { name: 'blue', class: 'bg-blue-900' },
    { name: 'green', class: 'bg-green-900' },
    { name: 'purple', class: 'bg-purple-900' },
  ];

  return (
    <div className="flex gap-4 mt-6">
      {themes.map((t) => (
        <button
          key={t.name}
          onClick={() => setTheme(t.name)}
          className={`h-8 w-8 rounded-full border-2 transition-all hover:scale-110 ${t.class} ${
            theme === t.name ? 'border-accent' : 'border-transparent'
          }`}
          title={`Switch to ${t.name} theme`}
        />
      ))}
    </div>
  );
}