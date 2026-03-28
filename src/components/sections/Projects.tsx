import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const Projects = () => {
  return (
    <section className="py-32 px-6 md:px-20">
      <div className="grid md:grid-cols-2 gap-20">
        <div className="font-mono text-sm text-gray-400">[02] — SELECTED WORKS</div>
        
        <div className="space-y-32">
          
          {/* Project 1: ONYX */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group"
          >
            <a href="https://onyx-orpin.vercel.app/" target="_blank" rel="noopener noreferrer" className="block">
              <div className="aspect-[16/9] bg-gray-900 mb-8 overflow-hidden rounded-lg border border-gray-800 relative shadow-2xl">
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity z-10" />
                <img 
                  src="/gallery/11.png" 
                  alt="ONYX Interface" 
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  onError={(e) => { (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1640340434855-6084b1f4901c?auto=format&fit=crop&w=1600&q=80' }}
                />
              </div>
              
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-serif text-4xl mb-2 text-ink dark:text-paper group-hover:italic transition-all decoration-ink dark:decoration-paper underline-offset-4 group-hover:underline">
                    ONYX
                  </h3>
                  <p className="font-mono text-xs text-gray-500 uppercase tracking-widest">Full-Stack • Node.js • MongoDB</p>
                </div>
                <ArrowUpRight size={32} className="text-ink dark:text-paper opacity-0 group-hover:opacity-100 transition-opacity -translate-y-2 group-hover:translate-y-0 duration-300" />
              </div>
              
              <p className="mt-6 text-lg text-gray-600 dark:text-gray-400 max-w-md transition-colors">
                A high-performance financial intelligence dashboard featuring secure JWT authentication, real-time Forex APIs, and compound wealth simulation.
              </p>
            </a>
          </motion.div>

          {/* Project 2: Arcade OS */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group"
          >
            <a href="https://arcade-os.vercel.app/" target="_blank" rel="noopener noreferrer" className="block">
              <div className="aspect-[16/9] bg-gray-900 mb-8 overflow-hidden rounded-lg border border-gray-800 relative shadow-2xl">
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity z-10" />
                <img 
                  src="/gallery/12.png" 
                  alt="Arcade OS Interface" 
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  onError={(e) => { (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1600&q=80' }}
                />
              </div>
              
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-serif text-4xl mb-2 text-ink dark:text-paper group-hover:italic transition-all decoration-ink dark:decoration-paper underline-offset-4 group-hover:underline">
                    Arcade OS
                  </h3>
                  <p className="font-mono text-xs text-gray-500 uppercase tracking-widest">React • Framer Motion • Logic</p>
                </div>
                <ArrowUpRight size={32} className="text-ink dark:text-paper opacity-0 group-hover:opacity-100 transition-opacity -translate-y-2 group-hover:translate-y-0 duration-300" />
              </div>
              
              <p className="mt-6 text-lg text-gray-600 dark:text-gray-400 max-w-md transition-colors">
                A retro-themed gaming suite featuring playable versions of Snake, Memory Match, and Rock Paper Scissors built entirely with React state and custom physics.
              </p>
            </a>
          </motion.div>

          {/* Project 3: Dasamonie */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group"
          >
            <a href="https://dasamonie-web-32xp.vercel.app/" target="_blank" rel="noopener noreferrer" className="block">
              <div className="aspect-[16/9] bg-gray-100 mb-8 overflow-hidden rounded-lg border border-gray-200 relative shadow-2xl">
                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity z-10" />
                <img 
                  src="/gallery/10.png" 
                  alt="Dasamonie Interface" 
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-serif text-4xl mb-2 text-ink dark:text-paper group-hover:italic transition-all decoration-ink dark:decoration-paper underline-offset-4 group-hover:underline">
                    Dasamonie
                  </h3>
                  <p className="font-mono text-xs text-gray-500 uppercase tracking-widest">Fintech • React • Tailwind</p>
                </div>
                <ArrowUpRight size={32} className="text-ink dark:text-paper opacity-0 group-hover:opacity-100 transition-opacity -translate-y-2 group-hover:translate-y-0 duration-300" />
              </div>
              
              <p className="mt-6 text-lg text-gray-600 dark:text-gray-400 max-w-md transition-colors">
                A modern fintech landing page focusing on trust, speed, and parallax interactions. Rebuilt from scratch using React and Tailwind CSS.
              </p>
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Projects;
