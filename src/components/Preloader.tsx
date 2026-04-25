import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import AnimatedLogo from './AnimatedLogo';

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Hold the preloader for 2 seconds to let the logo draw entirely
    const timer = setTimeout(() => {
      setIsExiting(true);
      // Wait for exit animation to complete before unmounting
      setTimeout(onComplete, 1200);
    }, 2000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="preloader fixed inset-0 z-[100] bg-bg flex flex-col items-center justify-center overflow-hidden"
      initial={{ opacity: 1 }}
      animate={isExiting ? { y: "-100%" } : { y: "0%" }}
      transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
    >
      <div className="relative z-10 flex flex-col items-center">
        {/* Crisp Monogram Logo */}
        <AnimatedLogo className="w-16 h-16 md:w-20 md:h-20 mb-12" />

        {/* Elegant Typography Reveal */}
        <div className="reveal-mask">
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={isExiting ? { y: "100%", opacity: 0 } : { y: "0%", opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: isExiting ? 0 : 0.8 }}
            className="flex items-center gap-2"
          >
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-sans font-medium tracking-[0.2em] uppercase text-white">
              INFORD <span className="text-white/50">MAX</span>
            </h1>
          </motion.div>
        </div>
      </div>
      
      {/* Decorative center line splitting the screen */}
      <motion.div 
        className="absolute left-1/2 bottom-0 w-[1px] bg-[color:var(--color-line)] origin-bottom"
        initial={{ height: 0 }}
        animate={isExiting ? { height: 0 } : { height: "30vh" }}
        transition={{ duration: 1.5, ease: [0.76, 0, 0.24, 1] }}
      />
    </motion.div>
  );
}

