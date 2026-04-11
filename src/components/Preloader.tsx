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
      <div className="absolute inset-0 grid-bg opacity-20"></div>
      <motion.div
        animate={{ opacity: [0.1, 0.3, 0.1], scale: [1, 1.1, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(216,49,91,0.15)_0%,transparent_60%)] pointer-events-none"
      />

      {/* Central Hub */}
      <div className="relative z-10 flex flex-col items-center">
        
        {/* Circular Progress Ring & Logo */}
        <div className="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center mb-12">
          {/* SVG Progress Ring */}
          <svg className="absolute inset-0 w-full h-full -rotate-90 drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="48" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5" />
            <motion.circle 
              cx="50" cy="50" r="48" 
              fill="none" 
              stroke="url(#progressGrad)" 
              strokeWidth="1.5" 
              strokeDasharray="301.59" // 2 * pi * 48
              strokeDashoffset={301.59 - (301.59 * progress) / 100}
              strokeLinecap="round"
            />
            <defs>
              <linearGradient id="progressGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#D8315B" />
                <stop offset="50%" stopColor="#ffffff" />
                <stop offset="100%" stopColor="#3B82F6" />
              </linearGradient>
            </defs>
          </svg>

          {/* The New Animated Logo */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0, filter: "blur(10px)" }}
            animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <AnimatedLogo className="w-40 h-40 md:w-52 md:h-52" />
          </motion.div>
          
          {/* Percentage Text overlaying the bottom of the ring */}
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-black/80 backdrop-blur-md px-5 py-1.5 border border-white/20 rounded-full shadow-[0_0_20px_rgba(0,0,0,0.8)]">
            <span className="font-mono text-sm md:text-base text-white tracking-widest">{Math.round(progress)}%</span>
          </div>
        </div>

        {/* Brand Name with Glitch/Reveal effect */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="text-center mb-6"
        >
          <h1 className="text-4xl md:text-6xl font-display font-bold tracking-[0.2em] text-white">
            INFORD <span className="text-red-600">MAX</span>
          </h1>
          <div className="h-[1px] w-0 bg-gradient-to-r from-transparent via-white/50 to-transparent mx-auto mt-4 animate-[expandWidth_1.5s_ease-out_ forwards_1s]"></div>
        </motion.div>

        {/* System Logs */}
        <div className="h-6 overflow-hidden flex items-center justify-center w-full max-w-md px-4">
          <AnimatePresence mode="wait">
            <motion.p 
              key={currentLog}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="font-mono text-[10px] md:text-xs text-blue-400/80 tracking-widest uppercase text-center whitespace-nowrap"
            >
              {logs[currentLog]}
            </motion.p>
          </AnimatePresence>
        </div>
      </div>
      
      {/* Scanline effect overlay */}
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(0,0,0,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%] z-50 opacity-40"></div>
    </motion.div>
  );
}

