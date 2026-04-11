import { motion } from 'motion/react';

export default function AnimatedLogo({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="coreGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0A2463" />
            <stop offset="100%" stopColor="#000000" />
          </linearGradient>
          <radialGradient id="glowGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(216,49,91,0.4)" />
            <stop offset="100%" stopColor="rgba(0,0,0,0)" />
          </radialGradient>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>
        
        {/* Ambient Glow */}
        <motion.circle 
          cx="50" cy="50" r="45" 
          fill="url(#glowGrad)"
          animate={{ scale: [0.9, 1.2, 0.9], opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Orbit 1 - Red (Fast) */}
        <motion.circle 
          cx="50" cy="50" r="42" 
          stroke="#D8315B" strokeWidth="1.5" strokeDasharray="60 120" strokeLinecap="round"
          animate={{ rotate: 360 }} transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
          style={{ originX: "50px", originY: "50px" }}
          filter="url(#glow)"
        />
        
        {/* Orbit 2 - Blue (Medium, Reverse) */}
        <motion.circle 
          cx="50" cy="50" r="36" 
          stroke="#3B82F6" strokeWidth="2" strokeDasharray="40 80" strokeLinecap="round"
          animate={{ rotate: -360 }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          style={{ originX: "50px", originY: "50px" }}
          filter="url(#glow)"
        />

        {/* Orbit 3 - White dashed (Slow) */}
        <motion.circle 
          cx="50" cy="50" r="30" 
          stroke="rgba(255,255,255,0.4)" strokeWidth="1" strokeDasharray="2 6"
          animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          style={{ originX: "50px", originY: "50px" }}
        />

        {/* Core Sphere */}
        <circle cx="50" cy="50" r="26" fill="url(#coreGrad)" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
        
        {/* Grid lines inside core for 3D globe effect */}
        <path d="M24 50 Q50 24 76 50 Q50 76 24 50" stroke="rgba(255,255,255,0.15)" fill="none" strokeWidth="0.5" />
        <path d="M50 24 Q76 50 50 76 Q24 50 50 24" stroke="rgba(255,255,255,0.15)" fill="none" strokeWidth="0.5" />
        <path d="M32 50 A 18 26 0 0 0 68 50 A 18 26 0 0 0 32 50" stroke="rgba(255,255,255,0.1)" fill="none" strokeWidth="0.5" />

        {/* Text IM */}
        <motion.text 
          x="50" y="57" 
          fontFamily="Oswald, sans-serif" 
          fontSize="20" 
          fontWeight="bold" 
          fill="#FFFFFF" 
          textAnchor="middle" 
          letterSpacing="1"
          animate={{ opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          IM
        </motion.text>
      </svg>
    </div>
  );
}
