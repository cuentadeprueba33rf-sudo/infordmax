import { motion } from 'motion/react';

export default function AnimatedLogo({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
        <motion.rect
          x="5" y="5" width="90" height="90"
          stroke="rgba(255,255,255,1)"
          strokeWidth="3"
          initial={{ strokeDasharray: "0 360" }}
          animate={{ strokeDasharray: "360 0" }}
          transition={{ duration: 1.5, ease: [0.76, 0, 0.24, 1] }}
        />
        <motion.path
          d="M25 80V20 L50 60 L75 20 V80"
          stroke="#ffffff"
          strokeWidth="4"
          strokeLinecap="square"
          strokeLinejoin="miter"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, delay: 0.5, ease: [0.76, 0, 0.24, 1] }}
        />
      </svg>
    </div>
  );
}
