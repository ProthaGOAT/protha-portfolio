import { motion } from 'framer-motion';

const About = () => {
  return (
    <section className="py-32 px-6 md:px-20 bg-white dark:bg-ink">
      <div className="grid md:grid-cols-2 gap-20">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-mono text-sm sticky top-32 h-fit text-gray-400"
        >
          [01] — BIOGRAPHY
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8 font-serif text-2xl md:text-3xl leading-relaxed text-ink dark:text-paper"
        >
          <p>
            I'm Abraham Ogbole, a Web Developer with a background in Information Technology. 
            I'm currently focused on building and improving my skills in front-end and back-end development, 
            while also learning best practices for responsive design, performance, and security.
          </p>
          <p className="text-gray-500 text-xl md:text-2xl">
            I'm a passionate person, who when I'm not coding, I create music, draw, cook, and write poetry and literature. 
            Always eager to assist with anything web‑development related.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
export default About;
