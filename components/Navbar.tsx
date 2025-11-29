import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { NavItem } from '../types';
import { Menu, X, Moon, Sun } from 'lucide-react';

const NAV_ITEMS: NavItem[] = [
  { label: 'Story', href: '#brand-story' },
  { label: 'Visuals', href: '#visual-identity' },
  { label: 'Mockups', href: '#mockups' }
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 dark:bg-gray-900/90 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="flex items-center gap-2 group">
          <Logo variant="icon" className="w-8 h-8 text-brand-coral dark:text-white group-hover:rotate-12 transition-transform duration-300" />
          <span className="font-display font-bold text-xl tracking-tight text-brand-maroonDeep dark:text-white">INQUIZITOR</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <a 
              key={item.label} 
              href={item.href}
              className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-brand-rich transition-colors"
            >
              {item.label}
            </a>
          ))}
          <div className="h-6 w-px bg-gray-200 dark:bg-gray-700 mx-2"></div>
          <button 
            onClick={() => setIsDark(!isDark)} 
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-300 transition-colors"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-brand-coral dark:text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white dark:bg-gray-900 shadow-xl border-t border-gray-100 dark:border-gray-800 p-6 flex flex-col gap-4 md:hidden">
          {NAV_ITEMS.map((item) => (
            <a 
              key={item.label} 
              href={item.href}
              className="text-lg font-medium text-brand-maroonDeep dark:text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <div className="h-px bg-gray-100 my-2"></div>
          <button 
             onClick={() => setIsDark(!isDark)}
             className="flex items-center gap-2 text-gray-600 dark:text-gray-300"
          >
             {isDark ? <Sun size={18}/> : <Moon size={18}/>}
             {isDark ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>
      )}
    </nav>
  );
};
