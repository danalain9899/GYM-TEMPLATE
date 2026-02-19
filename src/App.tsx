/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Programs } from './components/Programs';
import { Trainers } from './components/Trainers';
import { Pricing } from './components/Pricing';
import { Testimonials } from './components/Testimonials';
import { Gallery } from './components/Gallery';
import { BMICalculator } from './components/BMICalculator';
import { Timetable } from './components/Timetable';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-brand-dark">
      <Navbar />
      <main>
        <Hero />
        <Programs />
        <Trainers />
        <Pricing />
        <Testimonials />
        <BMICalculator />
        <Gallery />
        <Timetable />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
