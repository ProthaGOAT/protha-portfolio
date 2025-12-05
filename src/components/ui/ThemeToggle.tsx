import { Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';

const ThemeToggle = () => {
  // Start as true (Dark mode default)
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    if (isDark) document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  }, [isDark]);

  return (
    <button 
      onClick={() => setIsDark(!isDark)}
      className="fixed top-8 right-8 z-50 w-12 h-12 rounded-full border border-ink/10 dark:border-paper/10 bg-white/50 dark:bg-black/50 backdrop-blur-sm flex items-center justify-center hover:scale-110 transition-transform text-ink dark:text-paper"
    >
      {isDark ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
};
export default ThemeToggle;