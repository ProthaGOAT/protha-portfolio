import { motion } from 'framer-motion';
import RetroSynth from './RetroSynth'; 

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 md:px-20 pt-20 relative">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <span className="font-mono text-sm tracking-widest uppercase text-gray-500 mb-4 block">Portfolio v2.0</span>
        
        <h1 className="font-serif text-6xl md:text-9xl text-ink dark:text-paper leading-[0.9] mb-8 transition-colors duration-500">
          Pro, the<br/>
          <span className="italic text-gray-400">First.</span>
        </h1>
        
        <div className="max-w-xl space-y-4">
          <p className="text-xl md:text-2xl font-light leading-relaxed text-gray-700 dark:text-gray-300 transition-colors duration-500">
            Full Stack Web Developer & UI Architect.
          </p>
          <p className="text-lg md:text-xl font-light text-gray-500 dark:text-gray-400 transition-colors duration-500">
            Crafting digital experiences with precision and soul. <br/>
            <span className="text-accent-pink">Music making.</span>
          </p>
        </div>

        {/* The Synth Keyboard */}
        <RetroSynth />

      </motion.div>
    
    </section>
  );
};
export default Hero;
