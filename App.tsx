import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/sections/Hero';
import { VisualIdentity } from './components/sections/VisualIdentity';
import { MockupGallery } from './components/sections/MockupGallery';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Share2, Layers } from 'lucide-react';

// Brand Story Section inline for simplicity
const BrandStory = () => (
  <section id="brand-story" className="py-24 bg-white dark:bg-gray-900 px-6">
    <div className="max-w-4xl mx-auto text-center">
       <span className="text-brand-coral font-bold tracking-wider uppercase text-sm mb-4 block">Our Mission</span>
       <h2 className="text-3xl md:text-5xl font-display font-bold text-brand-navy dark:text-white mb-8 leading-tight">
          To empower global learners through <br className="hidden md:block"/> clarity, accessibility, and intelligence.
       </h2>
       <div className="grid md:grid-cols-3 gap-8 mt-16 text-left">
          {[
            { title: "Clarity", desc: "Removing cognitive noise to focus purely on knowledge acquisition." },
            { title: "Empowerment", desc: "Tools that adapt to the user, not the other way around." },
            { title: "Innovation", desc: "Leveraging AI to create dynamic, personalized learning paths." }
          ].map((val, i) => (
            <div key={i} className="p-6 bg-brand-cream dark:bg-gray-800 rounded-2xl">
               <div className="w-10 h-10 rounded-full bg-brand-coral/20 text-brand-coral flex items-center justify-center mb-4 font-bold">0{i+1}</div>
               <h3 className="font-bold text-xl text-brand-navy dark:text-white mb-2">{val.title}</h3>
               <p className="text-gray-600 dark:text-gray-400">{val.desc}</p>
            </div>
          ))}
       </div>
    </div>
  </section>
);

// Resources Section
const Resources = () => (
  <section id="resources" className="py-24 bg-brand-navy text-white px-6">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
       <div>
         <h2 className="text-4xl font-display font-bold mb-4">Start Creating</h2>
         <p className="text-gray-400 max-w-md mb-8">Access the full brand kit, including logos, fonts, and UI components to build consistent Inquizitor experiences.</p>
         <div className="flex flex-wrap gap-4">
            <button className="flex items-center gap-2 bg-brand-coral hover:bg-white hover:text-brand-coral transition-colors px-6 py-3 rounded-full font-bold">
               <Download size={18} /> Download Brand Kit (v2.4)
            </button>
            <button className="flex items-center gap-2 border border-gray-600 hover:border-white transition-colors px-6 py-3 rounded-full font-medium">
               <Layers size={18} /> Open Figma System
            </button>
         </div>
       </div>
       <div className="grid grid-cols-2 gap-4">
          <div className="w-32 h-32 bg-white/10 rounded-2xl flex items-center justify-center">
             <div className="text-center">
                <span className="block text-2xl font-bold">Aa</span>
                <span className="text-xs text-gray-400">Typography</span>
             </div>
          </div>
          <div className="w-32 h-32 bg-white/10 rounded-2xl flex items-center justify-center">
             <div className="text-center">
                <div className="flex gap-1 justify-center mb-2">
                   <div className="w-3 h-3 rounded-full bg-brand-coral"></div>
                   <div className="w-3 h-3 rounded-full bg-brand-cream"></div>
                </div>
                <span className="text-xs text-gray-400">Colors</span>
             </div>
          </div>
          <div className="w-32 h-32 bg-white/10 rounded-2xl flex items-center justify-center">
             <div className="text-center">
                <div className="w-8 h-8 border-2 border-white rounded-md mx-auto mb-2"></div>
                <span className="text-xs text-gray-400">Assets</span>
             </div>
          </div>
          <div className="w-32 h-32 bg-white/10 rounded-2xl flex items-center justify-center">
              <Share2 className="opacity-50" />
          </div>
       </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-gray-900 text-gray-500 py-12 border-t border-gray-800 text-center text-sm">
     <p>© 2024 Inquizitor Inc. All rights reserved.</p>
     <div className="flex justify-center gap-6 mt-4">
        <a href="#" className="hover:text-white">Privacy</a>
        <a href="#" className="hover:text-white">Terms</a>
        <a href="#" className="hover:text-white">Contact</a>
     </div>
  </footer>
);

function App() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <BrandStory />
      <VisualIdentity />
      <MockupGallery />
      <Resources />
      <Footer />
    </main>
  );
}

export default App;