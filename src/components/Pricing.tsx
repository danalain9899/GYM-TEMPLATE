import React from 'react';
import { motion } from 'motion/react';
import { Check, Star } from 'lucide-react';
import { PricingPlan } from '../types';

const plans: PricingPlan[] = [
  {
    id: '1',
    name: 'Starter',
    price: '149',
    period: 'month',
    features: [
      'Access to all gym equipment',
      'Locker & Shower facilities',
      '1 Free Personal Training session',
      'Basic Diet Plan',
    ],
  },
  {
    id: '2',
    name: 'Pro',
    price: '299',
    period: 'month',
    isPopular: true,
    features: [
      'Everything in Starter',
      'Unlimited Group Classes',
      'Weekly Progress Tracking',
      'Advanced Nutrition Plan',
      'Community Events Access',
    ],
  },
  {
    id: '3',
    name: 'Elite',
    price: '499',
    period: 'month',
    features: [
      'Everything in Pro',
      '4 Personal Training sessions/mo',
      'Customized Meal Prep Guide',
      'Recovery Zone Access',
      'Guest Passes (2 per month)',
    ],
  },
];

export const Pricing = () => {
  return (
    <section id="pricing" className="py-24 bg-brand-dark relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-brand-primary text-sm font-bold uppercase tracking-[0.2em] mb-4">Pricing Plans</h2>
          <h3 className="text-5xl md:text-6xl font-display font-black uppercase">
            Choose Your <span className="text-brand-primary">Level</span>
          </h3>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative p-8 rounded-3xl border ${
                plan.isPopular ? 'bg-brand-surface border-brand-primary shadow-[0_0_40px_rgba(0,255,0,0.1)]' : 'bg-brand-surface/50 border-white/10'
              }`}
            >
              {plan.isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-brand-primary text-black text-xs font-black uppercase tracking-widest rounded-full flex items-center gap-1">
                  <Star className="w-3 h-3 fill-current" />
                  Most Popular
                </div>
              )}

              <div className="mb-8">
                <h4 className="text-xl font-display font-bold uppercase mb-4">{plan.name}</h4>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-display font-black text-brand-primary">RM{plan.price}</span>
                  <span className="text-white/40 text-sm">/{plan.period}</span>
                </div>
              </div>

              <div className="space-y-4 mb-10">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3 text-sm text-white/70">
                    <div className="mt-1 w-4 h-4 rounded-full bg-brand-primary/20 flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-brand-primary" />
                    </div>
                    {feature}
                  </div>
                ))}
              </div>

              <button
                className={`w-full py-4 rounded-xl font-bold uppercase tracking-widest transition-all ${
                  plan.isPopular
                    ? 'bg-brand-primary text-black hover:bg-white'
                    : 'bg-white/5 border border-white/10 text-white hover:bg-white/10'
                }`}
              >
                Get Started
              </button>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-white/40 text-sm">
            All plans include a <span className="text-brand-primary font-bold">Free First Class</span>. No hidden fees.
          </p>
        </div>
      </div>
    </section>
  );
};
