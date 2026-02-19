import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Play, Dumbbell } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop"
          alt="Gym Background"
          className="w-full h-full object-cover opacity-40"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary text-xs font-bold uppercase tracking-widest mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-brand-primary animate-pulse" />
            Premium Fitness Experience in Cheras
          </motion.div>
          
          <h1 className="text-6xl md:text-8xl font-display font-black leading-[0.9] mb-6 uppercase">
            Unleash Your <br />
            <span className="text-brand-primary italic">Inner Beast</span>
          </h1>
          
          <p className="text-lg text-white/60 max-w-lg mb-10 leading-relaxed">
            Experience the most aesthetic and energetic gym in Cheras. 
            Professional trainers, cutting-edge equipment, and a community 
            that pushes you to your limits.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#contact"
              className="group px-8 py-4 bg-brand-primary text-black font-bold rounded-full flex items-center gap-2 hover:bg-white transition-all transform hover:scale-105"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <button className="px-8 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-full flex items-center gap-2 hover:bg-white/10 transition-all">
              <div className="w-6 h-6 rounded-full bg-brand-primary flex items-center justify-center">
                <Play className="w-3 h-3 text-black fill-current" />
              </div>
              Watch Tour
            </button>
          </div>

          <div className="mt-12 flex items-center gap-8">
            <div>
              <div className="text-3xl font-display font-bold">5.0</div>
              <div className="text-xs text-white/40 uppercase tracking-widest">Google Rating</div>
            </div>
            <div className="w-px h-10 bg-white/10" />
            <div>
              <div className="text-3xl font-display font-bold">300+</div>
              <div className="text-xs text-white/40 uppercase tracking-widest">Happy Members</div>
            </div>
            <div className="w-px h-10 bg-white/10" />
            <div>
              <div className="text-3xl font-display font-bold">16/7</div>
              <div className="text-xs text-white/40 uppercase tracking-widest">Open Daily</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative hidden lg:block"
        >
          <div className="relative z-10 rounded-3xl overflow-hidden border border-white/10 rotate-3 hover:rotate-0 transition-transform duration-500">
            <img
              src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=2070&auto=format&fit=crop"
              alt="Athlete"
              className="w-full aspect-[4/5] object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          {/* Decorative Elements */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-primary/20 blur-[80px] rounded-full" />
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-brand-primary/20 blur-[80px] rounded-full" />
        </motion.div>
      </div>

      {/* Marquee */}
      <div className="absolute bottom-0 left-0 right-0 bg-brand-primary py-4 overflow-hidden whitespace-nowrap border-y border-black/10">
        <div className="flex animate-marquee">
          {[...Array(10)].map((_, i) => (
            <span key={i} className="text-black font-display font-black text-2xl uppercase mx-8 flex items-center gap-4">
              <Dumbbell className="w-6 h-6" />
              Project Fit Cheras
              <span className="opacity-30">•</span>
              Personal Training
              <span className="opacity-30">•</span>
              HIIT
              <span className="opacity-30">•</span>
              Yoga
              <span className="opacity-30">•</span>
              Diet Plans
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
