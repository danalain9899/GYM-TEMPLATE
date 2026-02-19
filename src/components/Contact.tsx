import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Clock, Send, Instagram, Facebook } from 'lucide-react';

export const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-brand-dark">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-brand-primary text-sm font-bold uppercase tracking-[0.2em] mb-4">Get In Touch</h2>
            <h3 className="text-5xl md:text-6xl font-display font-black uppercase mb-8">
              Join The <span className="text-brand-primary">Movement</span>
            </h3>
            <p className="text-white/60 mb-12 text-lg leading-relaxed">
              Ready to transform your life? Visit us or drop a message. Our team is here to help you start your journey.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-2xl bg-brand-primary/10 border border-brand-primary/20 flex items-center justify-center shrink-0">
                  <MapPin className="text-brand-primary w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold uppercase tracking-widest mb-1">Location</h4>
                  <p className="text-white/50 text-sm">1-2, Jalan Tun Perak 1, Taman Tun Perak, 43200 Cheras, Selangor</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-2xl bg-brand-primary/10 border border-brand-primary/20 flex items-center justify-center shrink-0">
                  <Phone className="text-brand-primary w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold uppercase tracking-widest mb-1">Phone</h4>
                  <p className="text-white/50 text-sm">018-369 2023</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-2xl bg-brand-primary/10 border border-brand-primary/20 flex items-center justify-center shrink-0">
                  <Clock className="text-brand-primary w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold uppercase tracking-widest mb-1">Hours</h4>
                  <p className="text-white/50 text-sm">Open Daily: 8:00 AM – 12:00 AM</p>
                </div>
              </div>
            </div>

            <div className="mt-12 flex gap-4">
              <a href="https://www.instagram.com/projectfit.my/?hl=en" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-brand-primary hover:text-black transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://www.facebook.com/p/Project-Fit-Cheras-61557386011528/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-brand-primary hover:text-black transition-all">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 md:p-12 rounded-3xl bg-brand-surface border border-white/10"
          >
            <h4 className="text-2xl font-display font-bold uppercase mb-8">Book Free Trial</h4>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-white/40">Full Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full bg-brand-dark border border-white/10 rounded-xl px-4 py-3 focus:border-brand-primary outline-none transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-white/40">Phone Number</label>
                  <input
                    type="tel"
                    placeholder="+60 12 345 6789"
                    className="w-full bg-brand-dark border border-white/10 rounded-xl px-4 py-3 focus:border-brand-primary outline-none transition-colors"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-white/40">Interested Service</label>
                <select className="w-full bg-brand-dark border border-white/10 rounded-xl px-4 py-3 focus:border-brand-primary outline-none transition-colors appearance-none">
                  <option>Personal Training</option>
                  <option>Group Training</option>
                  <option>HIIT Sessions</option>
                  <option>Yoga & Mobility</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-white/40">Message (Optional)</label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your goals..."
                  className="w-full bg-brand-dark border border-white/10 rounded-xl px-4 py-3 focus:border-brand-primary outline-none transition-colors resize-none"
                />
              </div>
              <button className="w-full py-4 bg-brand-primary text-black font-black uppercase tracking-[0.2em] rounded-xl hover:bg-white transition-all flex items-center justify-center gap-2">
                Send Request
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
