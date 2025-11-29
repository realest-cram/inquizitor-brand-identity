import React from 'react';
import { motion } from 'framer-motion';
import { DeviceMockup } from '../DeviceMockup';
import { BarChart, CheckCircle, FileText, Settings, User, Clock, Bell } from 'lucide-react';

export const MockupGallery: React.FC = () => {
  return (
    <section id="mockups" className="py-32 bg-brand-cream dark:bg-gray-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-display font-bold text-brand-maroonDeep dark:text-white mb-6"
          >
            Built for <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-coral to-brand-rich">Focus</span>
          </motion.h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Experience an interface designed to reduce cognitive load and maximize learning retention.
          </p>
        </div>

        {/* DESKTOP DASHBOARD MOCKUP */}
        <div className="hidden md:flex justify-center mb-32 relative z-10">
          <DeviceMockup type="desktop">
            <div className="p-8 bg-gray-50 dark:bg-gray-900 min-h-full text-gray-900 dark:text-gray-100">
               {/* Dashboard Header */}
               <div className="flex justify-between items-center mb-8">
                  <div>
                     <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Welcome back, Alex</h2>
                     <p className="text-gray-500 dark:text-gray-400">You have 3 quizzes pending review.</p>
                  </div>
                  <div className="flex gap-4">
                     <button className="bg-white dark:bg-gray-800 p-2 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700"><Bell className="w-5 h-5 text-gray-600 dark:text-gray-300"/></button>
                     <div className="w-10 h-10 rounded-full bg-brand-coral flex items-center justify-center text-white font-bold">A</div>
                  </div>
               </div>

               {/* Stats Grid */}
               <div className="grid grid-cols-3 gap-6 mb-8">
                  {[
                     { label: 'Average Score', val: '86%', color: 'bg-brand-warm/10 text-brand-warm' },
                     { label: 'Quizzes Taken', val: '24', color: 'bg-green-100 text-green-600' },
                     { label: 'Study Hours', val: '12.5', color: 'bg-brand-gold/10 text-brand-gold' }
                  ].map((stat, i) => (
                     <div key={i} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">{stat.label}</p>
                        <p className={`text-3xl font-bold ${stat.color.split(' ')[1]}`}>{stat.val}</p>
                     </div>
                  ))}
               </div>

               {/* Main Content Area */}
               <div className="grid grid-cols-3 gap-6 h-64">
                  <div className="col-span-2 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 p-6">
                     <div className="flex justify-between items-center mb-4">
                        <h3 className="font-bold text-gray-800 dark:text-white">Performance History</h3>
                        <select className="bg-gray-50 dark:bg-gray-900 border-none text-sm rounded-md text-gray-800 dark:text-gray-100"><option>This Week</option></select>
                     </div>
                     <div className="flex items-end gap-2 h-40">
                        {[40, 60, 45, 80, 70, 85, 90].map((h, i) => (
                           <div key={i} className="flex-1 bg-brand-rich/10 rounded-t-sm hover:bg-brand-coral transition-colors relative group">
                              <div style={{ height: `${h}%` }} className="absolute bottom-0 w-full bg-brand-coral rounded-t-sm group-hover:bg-brand-warm transition-colors"></div>
                           </div>
                        ))}
                     </div>
                  </div>
                  <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 p-6">
                     <h3 className="font-bold text-gray-800 dark:text-white mb-4">Quick Actions</h3>
                     <div className="space-y-3">
                        <button className="w-full text-left p-3 rounded-lg bg-gray-50 dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center gap-3">
                           <div className="p-2 bg-brand-coral/10 rounded-md text-brand-coral"><FileText size={16}/></div>
                           <span className="text-sm font-medium text-gray-800 dark:text-gray-100">Create New Quiz</span>
                        </button>
                        <button className="w-full text-left p-3 rounded-lg bg-gray-50 dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center gap-3">
                           <div className="p-2 bg-brand-rich/10 rounded-md text-brand-rich"><BarChart size={16}/></div>
                           <span className="text-sm font-medium text-gray-800 dark:text-gray-100">View Analytics</span>
                        </button>
                     </div>
                  </div>
               </div>
            </div>
          </DeviceMockup>
        </div>

        {/* MOBILE GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-24 items-center">
           {/* Mobile 1: Quiz Taking */}
           <div className="flex justify-center transform lg:translate-y-12">
              <DeviceMockup type="mobile">
                 <div className="bg-gradient-to-b from-brand-maroonDeep to-brand-rich min-h-full text-white p-6 pt-12">
                    <div className="flex justify-between items-center mb-8">
                       <span className="text-gray-400 text-sm">Question 4/10</span>
                       <span className="bg-white/10 px-3 py-1 rounded-full text-xs flex items-center gap-1"><Clock size={12}/> 14:02</span>
                    </div>
                    <h3 className="text-2xl font-bold leading-snug mb-8">What design principle ensures elements are visually connected through spacing?</h3>
                    <div className="space-y-4">
                       {['Contrast', 'Proximity', 'Repetition', 'Alignment'].map((opt, i) => (
                          <div key={i} className={`p-4 rounded-xl border transition-all ${i === 1 ? 'bg-brand-coral border-brand-coral shadow-lg shadow-brand-coral/20' : 'border-white/20 bg-white/5'}`}>
                             <div className="flex items-center gap-3">
                                <div className={`w-6 h-6 rounded-full border flex items-center justify-center ${i === 1 ? 'border-white bg-white text-brand-coral' : 'border-white/40'}`}>
                                   {i === 1 && <CheckCircle size={14} />}
                                </div>
                                <span className="font-medium">{opt}</span>
                             </div>
                          </div>
                       ))}
                    </div>
                    <button className="w-full bg-white text-brand-maroonDeep font-bold py-4 rounded-xl mt-12 shadow-lg hover:bg-gray-100">Next Question</button>
                 </div>
              </DeviceMockup>
           </div>

           {/* Mobile 2: Profile (Light Mode) */}
           <div className="flex justify-center z-20">
              <DeviceMockup type="mobile">
                 <div className="bg-white dark:bg-gray-900 min-h-full relative">
                    <div className="h-40 bg-brand-cream dark:bg-gray-800 relative">
                       <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-24 h-24 rounded-full border-4 border-white dark:border-gray-900 bg-gray-200 overflow-hidden shadow-md">
                          <div className="w-full h-full bg-brand-coral flex items-center justify-center text-white text-3xl font-display">A</div>
                       </div>
                    </div>
                    <div className="pt-14 text-center px-6">
                       <h3 className="text-xl font-bold text-gray-800 dark:text-white">Alex Designer</h3>
                       <p className="text-gray-500 dark:text-gray-400 text-sm mb-6">Senior Product Manager</p>
                       <div className="flex justify-center gap-4 mb-8">
                          <div className="text-center px-4 py-2 bg-gray-50 dark:bg-gray-800 rounded-lg">
                             <div className="text-lg font-bold text-brand-maroonDeep dark:text-white">142</div>
                             <div className="text-xs text-gray-400 dark:text-gray-500">Quizzes</div>
                          </div>
                          <div className="text-center px-4 py-2 bg-gray-50 dark:bg-gray-800 rounded-lg">
                             <div className="text-lg font-bold text-brand-maroonDeep dark:text-white">Top 5%</div>
                             <div className="text-xs text-gray-400 dark:text-gray-500">Rank</div>
                          </div>
                       </div>
                       <div className="space-y-2 text-left">
                          {['Account Settings', 'Learning Preferences', 'Notifications', 'Help & Support'].map((item, i) => (
                             <div key={i} className="p-4 border-b border-gray-50 dark:border-gray-800 flex justify-between items-center group cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800">
                               <div className="flex items-center gap-3">
                                  <div className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-500 dark:text-gray-300">
                                    {i === 0 ? <User size={14}/> : i === 1 ? <BarChart size={14}/> : <Settings size={14}/>}
                                  </div>
                                  <span className="text-gray-700 dark:text-gray-100 font-medium">{item}</span>
                               </div>
                               <span className="text-gray-300 dark:text-gray-600">→</span>
                             </div>
                          ))}
                       </div>
                    </div>
                 </div>
             </DeviceMockup>
           </div>

           {/* Tablet / Mobile 3: Results */}
           <div className="flex justify-center transform lg:translate-y-12">
              <DeviceMockup type="mobile">
                 <div className="bg-white dark:bg-gray-900 min-h-full p-6 pt-12 flex flex-col items-center text-gray-900 dark:text-gray-100">
                    <div className="w-16 h-1 bg-gray-200 dark:bg-gray-700 rounded-full mb-8"></div>
                    <div className="w-32 h-32 rounded-full border-[12px] border-green-100 dark:border-green-900 border-t-green-500 mb-6 flex items-center justify-center relative">
                       <div className="text-center">
                          <span className="text-3xl font-bold text-gray-800 dark:text-white">92</span>
                          <span className="text-xs text-gray-400 dark:text-gray-500 block">Score</span>
                       </div>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">Excellent Work!</h2>
                    <p className="text-center text-gray-500 dark:text-gray-400 mb-8 text-sm">You've mastered the Design Principles module. Keep up the momentum!</p>
                    
                    <div className="w-full bg-gray-50 dark:bg-gray-800 rounded-xl p-4 mb-4">
                       <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium text-gray-600 dark:text-gray-300">Accuracy</span>
                          <span className="text-sm font-bold text-green-600">92%</span>
                       </div>
                       <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                          <div className="w-[92%] h-full bg-green-500 rounded-full"></div>
                       </div>
                    </div>
                    <div className="w-full bg-gray-50 dark:bg-gray-800 rounded-xl p-4">
                       <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium text-gray-600 dark:text-gray-300">Speed</span>
                          <span className="text-sm font-bold text-orange-500">Average</span>
                       </div>
                       <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                          <div className="w-[60%] h-full bg-orange-400 rounded-full"></div>
                       </div>
                    </div>
                 </div>
              </DeviceMockup>
           </div>
        </div>

      </div>
    </section>
  );
};
