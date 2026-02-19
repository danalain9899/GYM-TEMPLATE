import React from 'react';
import { motion } from 'motion/react';
import { Zap, Users, Wind, Target, Utensils } from 'lucide-react';
import { Program } from '../types';

const programs: Program[] = [
  {
    id: '1',
    title: 'Personal Training',
    description: 'One-on-one sessions tailored to your specific goals and fitness level.',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070&auto=format&fit=crop',
    icon: 'Target',
  },
  {
    id: '2',
    title: 'Group Training',
    description: 'High-energy group workouts that keep you motivated and accountable.',
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=2070&auto=format&fit=crop',
    icon: 'Users',
  },
  {
    id: '3',
    title: 'HIIT Sessions',
    description: 'Burn maximum calories in minimum time with our intense interval training.',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop',
    icon: 'Zap',
  },
  {
    id: '4',
    title: 'Yoga & Mobility',
    description: 'Improve flexibility, balance, and mental clarity with expert-led yoga.',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2070&auto=format&fit=crop',
    icon: 'Wind',
  },
  {
    id: '5',
    title: 'Diet & Meal Plans',
    description: 'Customized nutrition strategies to fuel your body and optimize results.',
    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=2070&auto=format&fit=crop',
    icon: 'Utensils',
  },
];

const IconMap: Record<string, any> = {
  Target,
  Users,
  Zap,
  Wind,
  Utensils,
};

export const Programs = () => {
  return (
    <section id="programs" className="py-24 bg-brand-dark">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-brand-primary text-sm font-bold uppercase tracking-[0.2em] mb-4">Our Programs</h2>
            <h3 className="text-5xl md:text-6xl font-display font-black uppercase leading-none">
              Push Your <br /> <span className="text-white/20">Boundaries</span>
            </h3>
          </div>
          <p className="text-white/50 max-w-sm">
            From high-intensity intervals to mindful mobility, we offer a diverse range of programs designed to transform your body and mind.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => {
            const Icon = IconMap[program.icon];
            return (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative h-[450px] rounded-3xl overflow-hidden border border-white/5"
              >
                <img
                  src={program.image}
                  alt={program.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <div className="w-12 h-12 bg-brand-primary rounded-xl flex items-center justify-center mb-6 transform -rotate-6 group-hover:rotate-0 transition-transform">
                    <Icon className="text-black w-6 h-6" />
                  </div>
                  <h4 className="text-2xl font-display font-bold uppercase mb-3">{program.title}</h4>
                  <p className="text-white/60 text-sm leading-relaxed mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {program.description}
                  </p>
                  <button className="flex items-center gap-2 text-brand-primary text-sm font-bold uppercase tracking-widest group/btn">
                    Learn More
                    <div className="w-6 h-px bg-brand-primary group-hover/btn:w-10 transition-all" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
