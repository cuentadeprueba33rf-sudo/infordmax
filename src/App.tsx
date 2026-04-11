/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { AnimatePresence } from 'motion/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Objective from './components/Objective';
import Process from './components/Process';
import NewsSystem from './components/NewsSystem';
import Footer from './components/Footer';
import Preloader from './components/Preloader';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  // Prevent scrolling while loading
  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isLoading]);

  return (
    <div className="min-h-screen relative">
      <div className="atmosphere" />
      <div className="noise" />
      
      <AnimatePresence mode="wait">
        {isLoading && <Preloader key="preloader" onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      <Navbar />
      <main className="relative z-10">
        <Hero />
        <AboutUs />
        <Objective />
        <Process />
        <NewsSystem />
      </main>
      <Footer />
    </div>
  );
}
