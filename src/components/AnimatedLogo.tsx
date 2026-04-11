import { motion } from 'motion/react';

export default function AnimatedLogo({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="logoGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2.5" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
          <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#06b6d4" />
          </linearGradient>
        </defs>
        
        {/* Outer Ring - Rotating segments */}
        <motion.circle 
          cx="50" cy="50" r="48" 
          stroke="rgba(255,255,255,0.05)" strokeWidth="0.5"
        />
        <motion.circle 
          cx="50" cy="50" r="48" 
          stroke="url(#logoGrad)" strokeWidth="1.5" strokeDasharray="20 140" strokeLinecap="round"
          animate={{ rotate: 360 }} transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          style={{ originX: "50px", originY: "50px" }}
          filter="url(#logoGlow)"
        />

        {/* Inner Hexagon/Diamond Structure */}
        <motion.path
          d="M50 20 L80 35 L80 65 L50 80 L20 65 L20 35 Z"
          stroke="rgba(255,255,255,0.1)"
          strokeWidth="0.5"
          fill="none"
        />
        
        {/* Animated Path - The "M" for MAX */}
        <motion.path
          d="M30 65 V35 L50 55 L70 35 V65"
          stroke="white"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
          filter="url(#logoGlow)"
        />

        {/* Decorative dots */}
        {[0, 60, 120, 180, 240, 300].map((angle, i) => (
          <motion.circle
            key={i}
            cx={50 + 40 * Math.cos((angle * Math.PI) / 180)}
            cy={50 + 40 * Math.sin((angle * Math.PI) / 180)}
            r="1.5"
            fill="white"
            animate={{ opacity: [0.2, 1, 0.2] }}
            transition={{ duration: 2, delay: i * 0.2, repeat: Infinity }}
          />
        ))}
      </svg>
    </div>
  );
}
