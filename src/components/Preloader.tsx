import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { Sparkles } from 'lucide-react';

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsExiting(true);
      setTimeout(onComplete, 1200);
    }, 2000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center overflow-hidden"
      initial={{ opacity: 1 }}
      animate={isExiting ? { opacity: 0 } : { opacity: 1 }}
      transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
    >
      <div className="relative flex flex-col items-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="liquid-glass p-8 rounded-3xl mb-8"
        >
          <Sparkles size={64} className="text-white/80" />
        </motion.div>
        
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1], delay: 0.5 }}
            className="text-2xl font-serif italic text-white/50 tracking-widest"
          >
            INFORD MAX
          </motion.h1>
        </div>
      </div>
    </motion.div>
  );
}

