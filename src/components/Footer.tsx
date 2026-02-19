import React from 'react';
import { Dumbbell } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="py-12 bg-brand-dark border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-brand-primary rounded-lg flex items-center justify-center">
              <Dumbbell className="text-black w-5 h-5" />
            </div>
            <span className="text-lg font-display font-bold tracking-tighter uppercase">
              Project <span className="text-brand-primary">Fit</span>
            </span>
          </div>

          <div className="flex gap-8 text-sm text-white/40 font-medium uppercase tracking-widest">
            <a href="#" className="hover:text-brand-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-brand-primary transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-brand-primary transition-colors">Cookie Policy</a>
          </div>

          <div className="text-sm text-white/20">
            © 2026 Project Fit - Cheras. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};
