import React from 'react';
import { motion } from 'motion/react';
import { Instagram } from 'lucide-react';
import { Trainer } from '../types';

const trainers: Trainer[] = [
  {
    id: '1',
    name: 'William',
    role: 'Head Coach',
    specialty: 'Weight Loss & Strength',
    image: 'https://images.ctfassets.net/qw8ps43tg2ux/1LPfI8kPATAzojZMBalhli/7dbdddba786444110a762b75977a8fd8/how-it-works-issa-certified-personal-trainer.webp?fm=webp&w=1440&q=75',
    instagram: '@william_fit',
  },
  {
    id: '2',
    name: 'Brenda',
    role: 'Senior Trainer',
    specialty: 'HIIT & Functional',
    image: 'https://img.freepik.com/free-photo/attractive-sports-girl-personal-trainer-middle-modern-gym-with-workout-plan-her-hands_496169-2795.jpg',
    instagram: '@brenda_train',
  },
  {
    id: '3',
    name: 'Zeta',
    role: 'Yoga Specialist',
    specialty: 'Mobility & Mindfulness',
    image: 'https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=2070&auto=format&fit=crop',
    instagram: '@zeta_yoga',
  },
];

export const Trainers = () => {
  return (
    <section id="trainers" className="py-24 bg-brand-surface">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-brand-primary text-sm font-bold uppercase tracking-[0.2em] mb-4">Expert Team</h2>
          <h3 className="text-5xl md:text-6xl font-display font-black uppercase">
            Meet Your <span className="text-brand-primary">Coaches</span>
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {trainers.map((trainer, index) => (
            <motion.div
              key={trainer.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="relative aspect-[3/4] rounded-3xl overflow-hidden mb-6 border border-white/5">
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent opacity-60" />
                
                <div className="absolute bottom-6 left-6 right-6 flex justify-center gap-4 translate-y-12 group-hover:translate-y-0 transition-transform duration-300">
                  <a href="https://www.instagram.com/projectfit.my/?hl=en" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center hover:bg-brand-primary hover:text-black transition-colors">
                    <Instagram className="w-5 h-5" />
                  </a>
                </div>
              </div>
              
              <div className="text-center">
                <h4 className="text-2xl font-display font-bold uppercase mb-1">{trainer.name}</h4>
                <p className="text-brand-primary text-sm font-bold uppercase tracking-widest mb-2">{trainer.role}</p>
                <p className="text-white/40 text-sm italic">{trainer.specialty}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
