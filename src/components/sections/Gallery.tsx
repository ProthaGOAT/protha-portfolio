import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

// Adjusted list: Removed 3 and 7.
// Ensure your files in public/gallery match these names exactly.
const images = [
  "/gallery/1.jpg", 
  "/gallery/2.jpg", 
  "/gallery/4.jpg", 
  "/gallery/5.jpg", 
  "/gallery/6.jpg", 
  "/gallery/8.jpg", 
  "/gallery/9.jpg"
];

const Gallery = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({ target: container, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <section ref={container} className="py-32 px-6 md:px-20 bg-ink text-paper overflow-hidden">
      <div className="mb-20 font-mono text-sm opacity-50">[03] — PHOTOGRAPHY</div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
        {images.map((src, i) => (
          <motion.div 
            key={i}
            style={{ y: i % 2 === 0 ? 0 : y }}
            className="aspect-[3/4] overflow-hidden rounded-sm bg-gray-800"
          >
            <img 
              src={src} 
              alt={`Gallery Shot ${i}`} 
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-700 grayscale hover:grayscale-0 opacity-80 hover:opacity-100" 
              onError={(e) => {
                // Hides image if path is wrong
                (e.target as HTMLImageElement).style.display = 'none';
              }}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};
export default Gallery;