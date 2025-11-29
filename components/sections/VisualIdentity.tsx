import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Logo } from '../Logo';
import { Check, Copy } from 'lucide-react';
import { ColorSwatch, TypographySample } from '../../types';

const COLORS: ColorSwatch[] = [
  { name: 'Coral', hex: '#E07856', usage: 'Primary Brand Color', textColor: 'text-white' },
  { name: 'Deep Navy', hex: '#1A1F3A', usage: 'Primary Text / UI', textColor: 'text-white' },
  { name: 'Cream', hex: '#FAF8F5', usage: 'Backgrounds', textColor: 'text-brand-navy' },
  { name: 'Purple', hex: '#8B5CF6', usage: 'Accents & Focus', textColor: 'text-white' },
];

const TYPOGRAPHY: TypographySample[] = [
  { role: 'Display', font: 'Outfit', weight: 'Bold (700)', size: '64px', sample: 'AI-Powered Learning' },
  { role: 'Headings', font: 'Outfit', weight: 'SemiBold (600)', size: '32px', sample: 'Design Philosophy' },
  { role: 'Body', font: 'Outfit', weight: 'Regular (400)', size: '16px', sample: 'Inquizitor transforms the way we assess knowledge through intelligent design.' },
  { role: 'Accent', font: 'Crimson Pro', weight: 'SemiBold (600)', size: '20px', sample: 'Editorial emphasis & pull quotes.' },
];

export const VisualIdentity: React.FC = () => {
  const [copied, setCopied] = useState<string | null>(null);
  const [logoMode, setLogoMode] = useState<'light' | 'dark'>('light');

  const copyToClipboard = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopied(hex);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <section id="visual-identity" className="py-24 px-6 md:px-12 bg-white dark:bg-gray-900 transition-colors">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <span className="text-brand-coral font-bold tracking-wider uppercase text-sm">Visual System</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mt-2 text-brand-navy dark:text-white">Identity & Foundations</h2>
        </motion.div>

        {/* LOGO SYSTEM */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-32">
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-brand-navy dark:text-white">Logo Construction</h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              The Inquizitor logo reimaginates the classic symbol of inquiry. A stylized magnifying glass frames a central star, representing the spark of insight found through exploration and learning.
            </p>
            <div className="p-8 bg-gray-50 dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700">
               <div className="flex justify-center items-center h-64 relative">
                  {/* Grid Lines Overlay */}
                  <div className="absolute inset-0 grid grid-cols-4 grid-rows-4 opacity-10 pointer-events-none">
                     {[...Array(16)].map((_, i) => (
                        <div key={i} className="border border-brand-navy dark:border-white"></div>
                     ))}
                  </div>
                  <Logo className="w-32 h-32 text-brand-navy dark:text-white" />
               </div>
            </div>
          </div>

          <div className="space-y-8">
             <div className="flex justify-between items-center">
                <h3 className="text-2xl font-bold text-brand-navy dark:text-white">Logo Variants</h3>
                <div className="flex bg-gray-100 dark:bg-gray-800 rounded-lg p-1">
                    <button 
                      onClick={() => setLogoMode('light')}
                      className={`px-4 py-1 rounded-md text-sm font-medium transition-all ${logoMode === 'light' ? 'bg-white text-brand-navy shadow-sm' : 'text-gray-500'}`}
                    >
                      Light
                    </button>
                    <button 
                      onClick={() => setLogoMode('dark')}
                      className={`px-4 py-1 rounded-md text-sm font-medium transition-all ${logoMode === 'dark' ? 'bg-brand-navy text-white shadow-sm' : 'text-gray-500'}`}
                    >
                      Dark
                    </button>
                </div>
             </div>
             <div className={`p-12 rounded-2xl transition-colors duration-500 flex flex-col gap-12 items-center justify-center ${logoMode === 'light' ? 'bg-brand-cream' : 'bg-brand-navy'}`}>
                <Logo variant="full" color={logoMode === 'light' ? '#1A1F3A' : '#FAF8F5'} />
                <div className="flex gap-12 items-center">
                   <Logo variant="icon" color={logoMode === 'light' ? '#1A1F3A' : '#FAF8F5'} className="w-12 h-12" />
                   <Logo variant="vertical" color={logoMode === 'light' ? '#1A1F3A' : '#FAF8F5'} className="w-16 h-16" />
                </div>
             </div>
          </div>
        </div>

        {/* COLOR PALETTE */}
        <div className="mb-32">
           <h3 className="text-2xl font-bold text-brand-navy dark:text-white mb-8">Color Palette</h3>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {COLORS.map((color) => (
                <motion.div 
                  key={color.hex}
                  whileHover={{ y: -8 }}
                  className="group cursor-pointer"
                  onClick={() => copyToClipboard(color.hex)}
                >
                   <div 
                      className={`h-48 rounded-2xl shadow-sm flex items-end p-6 relative overflow-hidden`}
                      style={{ backgroundColor: color.hex }}
                   >
                      <div className={`absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors`} />
                      {copied === color.hex && (
                        <div className="absolute inset-0 flex items-center justify-center bg-black/10 backdrop-blur-sm animate-in fade-in">
                           <span className="bg-white/90 px-3 py-1 rounded-full text-xs font-bold shadow-sm flex items-center gap-1">
                             <Check size={12} /> Copied
                           </span>
                        </div>
                      )}
                      <div className={color.textColor}>
                         <p className="font-bold text-lg">{color.name}</p>
                         <p className="font-mono opacity-80 flex items-center gap-2 text-sm mt-1">
                           {color.hex} 
                           <Copy size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                         </p>
                      </div>
                   </div>
                   <p className="mt-3 text-sm text-gray-500">{color.usage}</p>
                </motion.div>
              ))}
           </div>
        </div>

        {/* TYPOGRAPHY */}
        <div>
           <h3 className="text-2xl font-bold text-brand-navy dark:text-white mb-8">Typography</h3>
           <div className="space-y-12 border-t border-gray-200 dark:border-gray-800 pt-8">
              {TYPOGRAPHY.map((type) => (
                <div key={type.role} className="grid grid-cols-1 md:grid-cols-12 gap-8 items-baseline">
                   <div className="md:col-span-3">
                      <p className="text-brand-coral font-bold uppercase text-sm tracking-wider">{type.role}</p>
                      <p className="text-gray-500 text-sm mt-1">{type.font} — {type.weight}</p>
                   </div>
                  <div className="md:col-span-9">
                     <p 
                       style={{ 
                          fontFamily: type.font === 'Crimson Pro' ? '"Crimson Pro", serif' : '"Outfit", sans-serif',
                          fontSize: type.size,
                          fontWeight: type.weight.includes('700') ? 700 : type.weight.includes('600') ? 600 : 400
                        }}
                        className="text-brand-navy dark:text-white leading-tight"
                      >
                        {type.sample}
                      </p>
                      <p className="mt-4 text-gray-400 text-sm font-mono opacity-60 truncate">
                        ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz 1234567890 !@#$%^&*()
                      </p>
                   </div>
                </div>
              ))}
           </div>
        </div>
      </div>
    </section>
  );
};
