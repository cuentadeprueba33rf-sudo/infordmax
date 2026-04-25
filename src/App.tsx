/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ReportHeader from './components/ReportHeader';
import AboutUs from './components/AboutUs';
import Objective from './components/Objective';
import Process from './components/Process';
import NewsSystem from './components/NewsSystem';
import Footer from './components/Footer';
import Preloader from './components/Preloader';
import NoiseOverlay from './components/NoiseOverlay';
import Ticker from './components/Ticker';
import ProgressBar from './components/ProgressBar';

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
    <div className="min-h-screen relative bg-bg selection:bg-white selection:text-black">
      <ProgressBar />
      <NoiseOverlay />
      <AnimatePresence mode="wait">
        {isLoading && <Preloader key="preloader" onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      <Ticker />
      <Navbar />
      {!isLoading && (
        <motion.main 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
          className="relative z-10"
        >
          <Hero />
          <ReportHeader />
          <AboutUs />
          <Objective />
          <Process />
          <NewsSystem />
        </motion.main>
      )}
      {!isLoading && (
        <motion.div
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
        >
          <Footer />
        </motion.div>
      )}
    </div>
  );
}
