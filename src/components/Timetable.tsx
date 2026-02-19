import React from 'react';
import { motion } from 'motion/react';
import { TimetableEntry } from '../types';

const schedule: TimetableEntry[] = [
  { time: '08:00 AM', monday: 'Yoga', tuesday: 'HIIT', wednesday: 'Yoga', thursday: 'HIIT', friday: 'Yoga', saturday: 'HIIT', sunday: 'Rest' },
  { time: '10:00 AM', monday: 'HIIT', tuesday: 'Strength', wednesday: 'HIIT', thursday: 'Strength', friday: 'HIIT', saturday: 'Strength', sunday: 'Yoga' },
  { time: '05:00 PM', monday: 'Strength', tuesday: 'Yoga', wednesday: 'Strength', thursday: 'Yoga', friday: 'Strength', saturday: 'Rest', sunday: 'Rest' },
  { time: '07:00 PM', monday: 'HIIT', tuesday: 'HIIT', wednesday: 'HIIT', thursday: 'HIIT', friday: 'HIIT', saturday: 'Yoga', sunday: 'Rest' },
  { time: '09:00 PM', monday: 'Strength', tuesday: 'Strength', wednesday: 'Strength', thursday: 'Strength', friday: 'Strength', saturday: 'Rest', sunday: 'Rest' },
];

export const Timetable = () => {
  return (
    <section id="schedule" className="py-24 bg-brand-surface">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-brand-primary text-sm font-bold uppercase tracking-[0.2em] mb-4">Timetable</h2>
          <h3 className="text-5xl md:text-6xl font-display font-black uppercase">
            Class <span className="text-brand-primary">Schedule</span>
          </h3>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-white/10">
                <th className="py-6 px-4 text-left text-brand-primary font-display uppercase tracking-widest">Time</th>
                <th className="py-6 px-4 text-left text-white/40 font-display uppercase tracking-widest">Mon</th>
                <th className="py-6 px-4 text-left text-white/40 font-display uppercase tracking-widest">Tue</th>
                <th className="py-6 px-4 text-left text-white/40 font-display uppercase tracking-widest">Wed</th>
                <th className="py-6 px-4 text-left text-white/40 font-display uppercase tracking-widest">Thu</th>
                <th className="py-6 px-4 text-left text-white/40 font-display uppercase tracking-widest">Fri</th>
                <th className="py-6 px-4 text-left text-white/40 font-display uppercase tracking-widest">Sat</th>
                <th className="py-6 px-4 text-left text-white/40 font-display uppercase tracking-widest">Sun</th>
              </tr>
            </thead>
            <tbody>
              {schedule.map((row, index) => (
                <tr key={index} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                  <td className="py-6 px-4 font-mono text-sm text-brand-primary">{row.time}</td>
                  <td className="py-6 px-4"><ClassBadge name={row.monday} /></td>
                  <td className="py-6 px-4"><ClassBadge name={row.tuesday} /></td>
                  <td className="py-6 px-4"><ClassBadge name={row.wednesday} /></td>
                  <td className="py-6 px-4"><ClassBadge name={row.thursday} /></td>
                  <td className="py-6 px-4"><ClassBadge name={row.friday} /></td>
                  <td className="py-6 px-4"><ClassBadge name={row.saturday} /></td>
                  <td className="py-6 px-4"><ClassBadge name={row.sunday} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

const ClassBadge = ({ name }: { name: string }) => {
  if (name === 'Rest') return <span className="text-white/20 text-xs uppercase tracking-widest">Rest</span>;
  
  const colors: Record<string, string> = {
    'Yoga': 'bg-blue-500/10 text-blue-400 border-blue-500/20',
    'HIIT': 'bg-brand-primary/10 text-brand-primary border-brand-primary/20',
    'Strength': 'bg-purple-500/10 text-purple-400 border-purple-500/20',
  };

  return (
    <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border ${colors[name] || 'bg-white/5 text-white/40 border-white/10'}`}>
      {name}
    </span>
  );
};
