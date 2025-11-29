import React, { useRef } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';

interface DeviceMockupProps {
  type: 'mobile' | 'tablet' | 'desktop';
  children: React.ReactNode;
  className?: string;
  interactive?: boolean;
}

export const DeviceMockup: React.FC<DeviceMockupProps> = ({ type, children, className = '', interactive = true }) => {
  const ref = useRef<HTMLDivElement>(null);
  
  // 3D Tilt Effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [5, -5]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-5, 5]), { stiffness: 300, damping: 30 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!interactive || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    if (!interactive) return;
    x.set(0);
    y.set(0);
  };

  const frameStyles = {
    mobile: "w-[280px] h-[580px] rounded-[40px] border-[12px] border-brand-navy shadow-2xl bg-white relative overflow-hidden",
    tablet: "w-[600px] h-[450px] rounded-[24px] border-[16px] border-brand-navy shadow-2xl bg-white relative overflow-hidden",
    desktop: "w-[800px] h-[500px] rounded-[12px] border-t-[12px] border-x-[12px] border-b-[24px] border-gray-800 shadow-2xl bg-white relative overflow-hidden"
  };

  const notch = {
    mobile: <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-brand-navy rounded-b-xl z-20" />,
    tablet: <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 mt-2 bg-gray-800 rounded-full z-20" />, // Camera
    desktop: <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 mt-1 bg-gray-600 rounded-full z-20" /> // Webcam
  };

  return (
    <motion.div
      ref={ref}
      className={`relative ${className}`}
      style={interactive ? { rotateX, rotateY, transformStyle: 'preserve-3d' } : {}}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
    >
      <div className={frameStyles[type]}>
        {notch[type]}
        
        {/* Screen Content */}
        <div className="w-full h-full overflow-hidden bg-gray-50 flex flex-col">
          {type === 'desktop' && (
             <div className="h-6 bg-gray-100 border-b border-gray-200 flex items-center px-4 gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
             </div>
          )}
          <div className="flex-1 overflow-y-auto scrollbar-hide">
            {children}
          </div>
        </div>
      </div>
      
      {/* Laptop Bottom (only desktop) */}
      {type === 'desktop' && (
        <div className="absolute -bottom-3 left-0 right-0 h-3 bg-gray-700 rounded-b-lg mx-4 z-0 shadow-lg" />
      )}
    </motion.div>
  );
};
