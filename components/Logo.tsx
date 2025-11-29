import React from 'react';
import { motion } from 'framer-motion';

interface LogoProps {
  variant?: 'full' | 'icon' | 'vertical';
  className?: string;
  color?: string;
  animated?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ 
  variant = 'full', 
  className = '', 
  color = 'currentColor',
  animated = false
}) => {
  const lineVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: { 
      pathLength: 1, 
      opacity: 1,
      transition: { 
        duration: 1, 
        ease: "easeInOut" 
      }
    }
  };

  const starVariants = {
    hidden: { scale: 0, opacity: 0, rotate: -90 },
    visible: (custom: number) => ({ 
      scale: 1, 
      opacity: 1, 
      rotate: 0,
      transition: { 
        delay: custom * 0.2 + 0.5, 
        type: "spring",
        stiffness: 200,
        damping: 15
      }
    })
  };

  const Icon = () => (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Magnifying Glass Handle */}
      <motion.path
        d="M26 26L34 34"
        stroke={color}
        strokeWidth="4"
        strokeLinecap="round"
        variants={animated ? lineVariants : undefined}
        initial={animated ? "hidden" : "visible"}
        animate={animated ? "visible" : "visible"}
      />
      
      {/* Magnifying Glass Rim */}
      <motion.circle
        cx="17"
        cy="17"
        r="11"
        stroke={color}
        strokeWidth="3"
        fill="none"
        variants={animated ? lineVariants : undefined}
        initial={animated ? "hidden" : "visible"}
        animate={animated ? "visible" : "visible"}
      />

      {/* Main Star (Gold) */}
      <motion.path
        d="M17 10L18.5 15.5L24 17L18.5 18.5L17 24L15.5 18.5L10 17L15.5 15.5L17 10Z"
        fill="#D4AF37"
        custom={1}
        variants={animated ? starVariants : undefined}
        initial={animated ? "hidden" : "visible"}
        animate={animated ? "visible" : "visible"}
      />

       {/* Small Accent Star */}
      <motion.path
        d="M29 6L29.5 8L31.5 8.5L29.5 9L29 11L28.5 9L26.5 8.5L28.5 8L29 6Z"
        fill="#D4AF37"
        custom={2}
        variants={animated ? starVariants : undefined}
        initial={animated ? "hidden" : "visible"}
        animate={animated ? "visible" : "visible"}
      />
    </svg>
  );

  if (variant === 'icon') return <Icon />;

  return (
    <div className={`flex items-center gap-3 ${variant === 'vertical' ? 'flex-col' : ''}`}>
      <Icon />
      <div className={`font-display font-bold tracking-tight ${variant === 'vertical' ? 'text-2xl mt-2' : 'text-xl'}`} style={{ color }}>
        INQUIZITOR
      </div>
    </div>
  );
};
