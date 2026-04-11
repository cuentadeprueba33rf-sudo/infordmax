import { motion, AnimatePresence } from 'motion/react';
import { useEffect, useState } from 'react';
import AnimatedLogo from './AnimatedLogo';

const logs = [
  "INICIANDO PROTOCOLOS DE SEGURIDAD...",
  "CONECTANDO CON RED DE SATÉLITES GLOBALES...",
  "DESCIFRANDO FUENTES DE DATOS ENCRIPTADAS...",
  "SINCRONIZANDO NODOS DE INFORMACIÓN...",
  "ESTABLECIENDO ENLACE DE ALTA VELOCIDAD...",
  "CARGANDO MÓDULOS DE INTELIGENCIA ARTIFICIAL...",
  "VERIFICANDO INTEGRIDAD DE LOS DATOS...",
  "ACCESO CONCEDIDO. PREPARANDO INTERFAZ..."
];

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [currentLog, setCurrentLog] = useState(0);

  useEffect(() => {
    const duration = 4500; // 4.5 seconds of cinematic loading
    const interval = 20;
    const steps = duration / interval;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      // Easing function for realistic loading progress
      const easeOutQuart = 1 - Math.pow(1 - currentStep / steps, 4);
      setProgress(Math.min(easeOutQuart * 100, 100));
      
      if (currentStep >= steps) {
        clearInterval(timer);
        setTimeout(onComplete, 800); // Pause at 100% before fading out
      }
    }, interval);

    // Rotate through system logs
    const logTimer = setInterval(() => {
      setCurrentLog(prev => Math.min(prev + 1, logs.length - 1));
    }, duration / logs.length);

    return () => {
      clearInterval(timer);
      clearInterval(logTimer);
    };
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center overflow-hidden"
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0, 
        scale: 1.05, 
        filter: "blur(10px)",
        transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } 
      }}
    >
      {/* Background Grid & Effects */}
      <div className="atmosphere" />
      <div className="noise" />
      
      <motion.div
        animate={{ opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1)_0%,transparent_70%)] pointer-events-none"
      />

      {/* Central Hub */}
      <div className="relative z-10 flex flex-col items-center">
        
        {/* Circular Progress Ring & Logo */}
        <div className="relative w-72 h-72 md:w-96 md:h-96 flex items-center justify-center mb-16">
          {/* SVG Progress Ring */}
          <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="48" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="0.5" />
            <motion.circle 
              cx="50" cy="50" r="48" 
              fill="none" 
              stroke="url(#progressGrad)" 
              strokeWidth="1" 
              strokeDasharray="301.59" 
              strokeDashoffset={301.59 - (301.59 * progress) / 100}
              strokeLinecap="round"
              filter="drop-shadow(0 0 8px rgba(59, 130, 246, 0.5))"
            />
            <defs>
              <linearGradient id="progressGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#06b6d4" />
              </linearGradient>
            </defs>
          </svg>

          {/* The New Animated Logo */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <AnimatedLogo className="w-48 h-48 md:w-64 md:h-64" />
          </motion.div>
          
          {/* Percentage Text */}
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2">
            <span className="font-mono text-xs md:text-sm text-white/40 tracking-[0.5em] uppercase">
              Loading {Math.round(progress)}%
            </span>
          </div>
        </div>

        {/* Brand Name */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tighter text-gradient">
            INFORD<span className="text-accent-gradient">MAX</span>
          </h1>
        </motion.div>

        {/* System Logs */}
        <div className="h-6 overflow-hidden flex items-center justify-center w-full max-w-md px-4">
          <AnimatePresence mode="wait">
            <motion.p 
              key={currentLog}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="font-mono text-[9px] md:text-[10px] text-blue-400/50 tracking-[0.3em] uppercase text-center"
            >
              {logs[currentLog]}
            </motion.p>
          </AnimatePresence>
        </div>
      </div>
      
      {/* Scanline effect */}
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(0,0,0,0)_50%,rgba(0,0,0,0.1)_50%)] bg-[length:100%_4px] z-50 opacity-20"></div>
    </motion.div>
  );
}

