import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="relative z-40 max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-white/5 mb-12"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span>
          <span className="text-[10px] font-medium text-white/60 uppercase tracking-[0.2em]">La nueva era de la información</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative mb-12"
        >
          <h1 className="text-[18vw] md:text-[14vw] font-display font-bold tracking-tighter leading-[0.8] text-gradient select-none">
            INFORD<br />
            <span className="text-accent-gradient">MAX</span>
          </h1>
          <div className="absolute -top-4 -right-4 md:-top-8 md:-right-8">
            <span className="text-[10px] md:text-xs font-mono text-blue-500/50 uppercase tracking-widest [writing-mode:vertical-rl] rotate-180">
              EST. 2026
            </span>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="text-base md:text-xl text-white/60 max-w-xl font-light leading-relaxed mb-16"
        >
          Conectando la realidad global con precisión absoluta. 
          Noticias de élite para mentes exigentes.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row gap-6"
        >
          <a href="#noticias" className="px-10 py-4 rounded-full bg-white text-black font-semibold text-sm hover:scale-105 transition-transform duration-500 flex items-center justify-center gap-2 group">
            Explorar Noticias
            <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
          </a>
          <a href="#quienes-somos" className="px-10 py-4 rounded-full border border-white/10 text-white font-semibold text-sm hover:bg-white/5 transition-all duration-500 flex items-center justify-center">
            Conoce al Equipo
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-40 flex flex-col items-center gap-4"
      >
        <div className="w-[1px] h-16 bg-gradient-to-b from-blue-500/50 to-transparent overflow-hidden relative">
          <motion.div 
            animate={{ y: ['-100%', '100%'] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 bg-white"
          ></motion.div>
        </div>
      </motion.div>
    </section>
  );
}
