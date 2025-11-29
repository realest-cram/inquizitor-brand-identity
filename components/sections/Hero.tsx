import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Logo } from '../Logo';
import { ChevronDown } from 'lucide-react';

export const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-brand-cream dark:bg-brand-navy transition-colors duration-500">
      
      {/* Background Abstract Elements */}
      <motion.div 
        className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-brand-coral/10 blur-3xl"
        animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      <motion.div 
        className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] rounded-full bg-brand-navy/5 dark:bg-brand-coral/5 blur-3xl"
        animate={{ scale: [1.2, 1, 1.2], rotate: [0, -45, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      />

      <motion.div style={{ y, opacity }} className="z-10 text-center px-4">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8 flex justify-center"
        >
          <div className="w-32 h-32 md:w-48 md:h-48 text-brand-navy dark:text-brand-cream">
            <Logo variant="icon" className="w-full h-full" animated />
          </div>
        </motion.div>

        <motion.h1 
          className="font-display text-5xl md:text-7xl font-bold text-brand-navy dark:text-brand-cream mb-6 tracking-tight"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          INQUIZITOR
        </motion.h1>

        <motion.p 
          className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-light"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          AI-Powered Learning, <span className="text-brand-coral font-accent font-semibold">Beautifully Designed</span>
        </motion.p>
      </motion.div>

      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 cursor-pointer text-brand-navy dark:text-brand-cream"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
};
