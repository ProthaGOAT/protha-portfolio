import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const Projects = () => {
  return (
    <section className="py-32 px-6 md:px-20">
      <div className="grid md:grid-cols-2 gap-20">
        <div className="font-mono text-sm text-gray-400">[02] — SELECTED WORKS</div>
        
        <div className="space-y-32">
          {/* Dasamonie Project */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group"
          >
            <a href="https://dasamonie-web-32xp.vercel.app/" target="_blank" rel="noopener noreferrer" className="block">
              <div className="aspect-[16/9] bg-gray-100 mb-8 overflow-hidden rounded-lg border border-gray-200 relative">
                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity z-10" />
                
                {/* Image 10 (Screenshot) */}
                <img 
                  src="/gallery/10.png" 
                  alt="Dasamonie Interface" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              
              <div className="flex justify-between items-start">
                <div>
                  {/* Added dark:text-paper for visibility in dark mode */}
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