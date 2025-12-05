import { motion } from 'framer-motion';
import { Send, Instagram, Mail, Github, MessageCircle } from 'lucide-react';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Guestbook = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setStatus('sending');

    emailjs.sendForm(
      'service_z7estsx', 
      'template_99q2v1y', 
      formRef.current, 
      'feg2gHUNCOecUamYI'
    )
    .then((result) => {
        console.log(result.text);
        setStatus('success');
        formRef.current?.reset();
    }, (error) => {
        console.log(error.text);
        setStatus('error');
    });
  };

  const socials = [
    { icon: Instagram, link: "https://www.instagram.com/prothe.first?igsh=NmNoaHJxbGV4Nmp1", label: "Instagram" },
    { icon: MessageCircle, link: "https://wa.me/2348133215939", label: "WhatsApp" },
    { icon: Github, link: "https://github.com/ProthaGOAT", label: "GitHub" },
    { icon: Mail, link: "mailto:abrahamogbole6@gmail.com", label: "Email" },
  ];

  return (
    <section className="py-32 px-6 md:px-20 min-h-[50vh] flex flex-col justify-center bg-white dark:bg-ink">
      <div className="max-w-2xl w-full">
        <div className="font-mono text-sm mb-8 text-gray-400">[04] — SAY HELLO</div>
        <h2 className="font-serif text-5xl md:text-6xl mb-12 text-ink dark:text-paper">Leave a note.</h2>
        
        <form ref={formRef} className="space-y-8" onSubmit={sendEmail}>
          
          {/* Name Field */}
          <div className="border-b border-ink/20 focus-within:border-ink dark:border-paper/20 dark:focus-within:border-paper transition-colors">
            <input 
              required
              name="name" 
              type="text" 
              placeholder="Your Name" 
              className="w-full py-4 bg-transparent outline-none font-serif text-2xl placeholder:text-gray-300 dark:text-paper dark:placeholder:text-gray-600"
            />
          </div>

          {/* NEW: Email Field */}
          <div className="border-b border-ink/20 focus-within:border-ink dark:border-paper/20 dark:focus-within:border-paper transition-colors">
            <input 
              required
              name="email" 
              type="email" 
              placeholder="Your Email" 
              className="w-full py-4 bg-transparent outline-none font-serif text-2xl placeholder:text-gray-300 dark:text-paper dark:placeholder:text-gray-600"
            />
          </div>

          {/* Message Field */}
          <div className="border-b border-ink/20 focus-within:border-ink dark:border-paper/20 dark:focus-within:border-paper transition-colors">
            <textarea 
              required
              name="message" 
              rows={2}
              placeholder="Your Message..." 
              className="w-full py-4 bg-transparent outline-none font-serif text-2xl placeholder:text-gray-300 dark:text-paper dark:placeholder:text-gray-600 resize-none"
            />
          </div>
          
          <input type="hidden" name="time" value={new Date().toLocaleString()} />

          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mt-12">
            <motion.button 
              whileHover={{ x: 10 }}
              type="submit"
              disabled={status === 'sending' || status === 'success'}
              className="flex items-center gap-4 text-xl font-mono uppercase tracking-widest text-ink dark:text-paper disabled:opacity-50"
            >
              {status === 'sending' ? 'Sending...' : status === 'success' ? 'Message Sent!' : 'Send Message'} 
              <Send size={20} />
            </motion.button>

            {/* Social Links */}
            <div className="flex gap-6">
              {socials.map((social, i) => (
                <a 
                  key={i} 
                  href={social.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-ink dark:hover:text-paper transition-colors hover:scale-110 transform duration-200"
                  aria-label={social.label}
                >
                  <social.icon size={24} />
                </a>
              ))}
            </div>
          </div>
          
          {status === 'error' && (
            <p className="text-red-500 font-mono text-sm">Something went wrong. Please try again or email me directly.</p>
          )}
        </form>
      </div>
    </section>
  );
};
export default Guestbook;