import { useEffect } from 'react';
import ThemeToggle from './components/ui/ThemeToggle';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Projects from './components/sections/Projects';
import Gallery from './components/sections/Gallery';
import Guestbook from './components/sections/Guestbook';

function App() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => { document.documentElement.style.scrollBehavior = 'auto'; };
  }, []);

  return (
    <main className="bg-paper text-ink min-h-screen selection:bg-accent-pink selection:text-white transition-colors duration-500 dark:bg-ink dark:text-paper">
      <ThemeToggle />
      <div className="max-w-[1600px] mx-auto relative z-10 bg-paper dark:bg-ink shadow-2xl">
        <Hero />
        <About />
        <Projects />
        <Gallery />
        <Guestbook />
        
        <footer className="py-10 text-center font-mono text-xs opacity-40">
          © {new Date().getFullYear()} PRO, THE FIRST. DESIGNED WITH ♥ & TONE.JS
        </footer>
      </div>
      
      {/* Keyboard removed from here because it's now inside Hero.tsx */}
    </main>
  );
}
export default App;