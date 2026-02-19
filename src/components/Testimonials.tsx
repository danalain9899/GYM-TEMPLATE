import React from 'react';
import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';
import { Testimonial } from '../types';

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Michell C',
    role: 'Member since 2024',
    content: "I've been training at Project Fit with my trainer William, and it has been such a great experience. The environment here is really comfortable and motivating, and all the staff are friendly and supportive too.",
    rating: 5,
    image: 'https://i.pravatar.cc/150?u=michell',
  },
  {
    id: '2',
    name: "Muhammad Nur'Aiman",
    role: 'New Member',
    content: "Staff name Brenda and Zeta is really helpful, even im first timer they're willing to help me and im really excited to join membership. The facilities well maintained and looking new.",
    rating: 5,
    image: 'https://i.pravatar.cc/150?u=aiman',
  },
  {
    id: '3',
    name: 'You Yee Xing',
    role: 'Member since 2023',
    content: "I've been training with William since last year and I'm really grateful for his guidance. He not only designs effective workouts but also shares valuable nutrition tips.",
    rating: 5,
    image: 'https://i.pravatar.cc/150?u=xing',
  },
];

export const Testimonials = () => {
  return (
    <section className="py-24 bg-brand-surface">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-8">
          <div>
            <h2 className="text-brand-primary text-sm font-bold uppercase tracking-[0.2em] mb-4">Testimonials</h2>
            <h3 className="text-5xl md:text-6xl font-display font-black uppercase">
              What Our <span className="text-brand-primary">Members</span> Say
            </h3>
          </div>
          <div className="flex items-center gap-2 px-6 py-3 bg-white/5 rounded-full border border-white/10">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-brand-primary fill-current" />
              ))}
            </div>
            <span className="font-bold">5.0 / 5.0</span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-3xl bg-brand-dark border border-white/5 relative group"
            >
              <Quote className="absolute top-8 right-8 w-12 h-12 text-white/5 group-hover:text-brand-primary/10 transition-colors" />
              
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-brand-primary/20"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="font-bold text-white">{testimonial.name}</h4>
                  <p className="text-xs text-white/40 uppercase tracking-widest">{testimonial.role}</p>
                </div>
              </div>

              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-brand-primary fill-current" />
                ))}
              </div>

              <p className="text-white/70 leading-relaxed italic">
                "{testimonial.content}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
