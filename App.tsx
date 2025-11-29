import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/sections/Hero';
import { VisualIdentity } from './components/sections/VisualIdentity';
import { MockupGallery } from './components/sections/MockupGallery';

// Brand Story Section inline for simplicity
const BrandStory = () => (
  <section id="brand-story" className="py-24 bg-white dark:bg-gray-900 px-6">
    <div className="max-w-4xl mx-auto text-center">
      <span className="text-brand-coral font-accent font-semibold tracking-wider uppercase text-sm mb-4 block">Our Mission</span>
      <h2 className="text-3xl md:text-5xl font-display font-bold text-brand-maroonDeep dark:text-white mb-8 leading-tight">
        To empower global learners through <br className="hidden md:block" /> clarity, accessibility, and intelligence.
      </h2>
      <div className="grid md:grid-cols-3 gap-8 mt-16 text-left">
        {[
          { title: "Clarity", desc: "Removing cognitive noise to focus purely on knowledge acquisition." },
          { title: "Empowerment", desc: "Tools that adapt to the user, not the other way around." },
          { title: "Innovation", desc: "Leveraging AI to create dynamic, personalized learning paths." }
        ].map((val, i) => (
          <div key={i} className="p-6 bg-brand-cream dark:bg-gray-800 rounded-2xl">
            <div className="w-10 h-10 rounded-full bg-brand-coral/20 text-brand-coral flex items-center justify-center mb-4 font-bold">0{i + 1}</div>
            <h3 className="font-bold text-xl text-brand-maroonDeep dark:text-white mb-2">{val.title}</h3>
            <p className="text-gray-600 dark:text-gray-400">{val.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-gray-900 text-gray-500 py-12 border-t border-gray-800 text-center text-sm">
    <p>© 2025 Inquizitor Inc. All rights reserved.</p>
  </footer>
);

function App() {
  return (
    <main className="min-h-screen bg-brand-cream dark:bg-gray-950 text-brand-maroonDeep dark:text-gray-100 transition-colors">
      <Navbar />
      <Hero />
      <BrandStory />
      <VisualIdentity />
      <MockupGallery />
      <Footer />
    </main>
  );
}

export default App;
