import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calculator, Info, RefreshCw } from 'lucide-react';

export const BMICalculator = () => {
  const [weight, setWeight] = useState<string>('');
  const [height, setHeight] = useState<string>('');
  const [bmi, setBmi] = useState<number | null>(null);
  const [category, setCategory] = useState<string>('');
  const [color, setColor] = useState<string>('');

  const calculateBMI = (e: React.FormEvent) => {
    e.preventDefault();
    if (weight && height) {
      const h = parseFloat(height) / 100;
      const w = parseFloat(weight);
      const bmiValue = w / (h * h);
      const roundedBmi = Math.round(bmiValue * 10) / 10;
      setBmi(roundedBmi);

      if (roundedBmi < 18.5) {
        setCategory('Underweight');
        setColor('text-blue-400');
      } else if (roundedBmi >= 18.5 && roundedBmi < 25) {
        setCategory('Healthy Weight');
        setColor('text-brand-primary');
      } else if (roundedBmi >= 25 && roundedBmi < 30) {
        setCategory('Overweight');
        setColor('text-yellow-400');
      } else {
        setCategory('Obese');
        setColor('text-red-500');
      }
    }
  };

  const reset = () => {
    setWeight('');
    setHeight('');
    setBmi(null);
    setCategory('');
  };

  return (
    <section id="bmi-calculator" className="py-24 bg-brand-surface relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-brand-primary text-sm font-bold uppercase tracking-[0.2em] mb-4">Fitness Tools</h2>
            <h3 className="text-5xl md:text-6xl font-display font-black uppercase mb-8">
              Check Your <span className="text-brand-primary">BMI</span>
            </h3>
            <p className="text-white/60 mb-8 text-lg leading-relaxed">
              Body Mass Index (BMI) is a simple index of weight-for-height that is commonly used to classify underweight, overweight and obesity in adults.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10">
                <div className="w-10 h-10 rounded-xl bg-brand-primary/10 flex items-center justify-center shrink-0">
                  <Info className="text-brand-primary w-5 h-5" />
                </div>
                <p className="text-sm text-white/70">
                  BMI is a useful measure of overweight and obesity. It is calculated from your height and weight.
                </p>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 md:p-12 rounded-3xl bg-brand-dark border border-white/10 relative"
          >
            <div className="absolute top-8 right-8">
              <Calculator className="w-8 h-8 text-white/5" />
            </div>

            <form onSubmit={calculateBMI} className="space-y-6">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-white/40">Height (cm)</label>
                <input
                  type="number"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  placeholder="e.g. 175"
                  required
                  className="w-full bg-brand-surface border border-white/10 rounded-xl px-4 py-4 focus:border-brand-primary outline-none transition-colors text-white font-mono"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-white/40">Weight (kg)</label>
                <input
                  type="number"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  placeholder="e.g. 70"
                  required
                  className="w-full bg-brand-surface border border-white/10 rounded-xl px-4 py-4 focus:border-brand-primary outline-none transition-colors text-white font-mono"
                />
              </div>

              <div className="flex gap-4">
                <button
                  type="submit"
                  className="flex-1 py-4 bg-brand-primary text-black font-black uppercase tracking-[0.2em] rounded-xl hover:bg-white transition-all"
                >
                  Calculate
                </button>
                <button
                  type="button"
                  onClick={reset}
                  className="w-14 h-14 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center hover:bg-white/10 transition-all text-white"
                >
                  <RefreshCw className="w-5 h-5" />
                </button>
              </div>
            </form>

            <AnimatePresence>
              {bmi !== null && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-10 pt-10 border-t border-white/10 overflow-hidden"
                >
                  <div className="text-center">
                    <div className="text-xs font-bold uppercase tracking-[0.3em] text-white/40 mb-2">Your BMI Result</div>
                    <div className={`text-6xl font-display font-black mb-2 ${color}`}>
                      {bmi}
                    </div>
                    <div className={`text-xl font-bold uppercase tracking-widest ${color}`}>
                      {category}
                    </div>
                    
                    <div className="mt-8 grid grid-cols-4 gap-1 h-2 rounded-full overflow-hidden bg-white/5">
                      <div className={`h-full ${bmi < 18.5 ? 'bg-blue-400' : 'bg-white/10'}`} />
                      <div className={`h-full ${bmi >= 18.5 && bmi < 25 ? 'bg-brand-primary' : 'bg-white/10'}`} />
                      <div className={`h-full ${bmi >= 25 && bmi < 30 ? 'bg-yellow-400' : 'bg-white/10'}`} />
                      <div className={`h-full ${bmi >= 30 ? 'bg-red-500' : 'bg-white/10'}`} />
                    </div>
                    <div className="mt-2 flex justify-between text-[10px] font-bold uppercase tracking-widest text-white/20">
                      <span>Under</span>
                      <span>Healthy</span>
                      <span>Over</span>
                      <span>Obese</span>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
