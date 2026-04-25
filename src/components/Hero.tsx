import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-[90vh] pt-12 pb-16 px-6 md:px-12 lg:px-24 flex flex-col justify-between max-w-[1600px] mx-auto overflow-hidden">
      
      {/* Background Graphic Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none flex justify-center items-center opacity-40">
        <div className="w-[80vw] h-[80vw] md:w-[50vw] md:h-[50vw] rounded-full bg-white blur-[120px] mix-blend-overlay"></div>
      </div>
      
      {/* Editorial Grid Lines */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20 hidden md:block">
        <div className="h-full w-[1px] bg-white absolute left-1/4"></div>
        <div className="h-full w-[1px] bg-white absolute left-1/2"></div>
        <div className="h-full w-[1px] bg-white absolute left-3/4"></div>
      </div>

      <div className="relative z-10 w-full h-[1px] bg-[color:var(--color-line)] origin-left" />
      
      {/* Top Editorial Rule (animated) - position adjusted to overlay */}
      <motion.div 
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.5, ease: [0.76, 0, 0.24, 1] }}
        className="w-full h-[1px] bg-[color:var(--color-line)] origin-left absolute top-[128px] left-0 right-0 z-10 px-6 md:px-12 lg:px-24 max-w-[1600px] mx-auto"
      />

      <div className="flex-1 flex flex-col justify-center mt-12 md:mt-24 relative z-10">
        <div className="max-w-7xl relative">
          
          <div className="reveal-mask mb-4">
            <motion.span 
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: "0%" }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="block text-xs md:text-sm tracking-[0.2em] uppercase text-white/50 font-sans"
            >
              Edición Global &bull; 2026
            </motion.span>
          </div>

          <div className="reveal-mask mt-6">
            <motion.h1 
              initial={{ y: "120%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1], delay: 0.3 }}
              className="text-[14vw] lg:text-[10vw] font-display font-medium leading-[0.85] tracking-tight text-white m-0"
            >
              La Verdad.
            </motion.h1>
          </div>
          <div className="reveal-mask">
            <motion.h1 
              initial={{ y: "120%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1], delay: 0.4 }}
              className="text-[14vw] lg:text-[10vw] font-display font-medium leading-[0.85] tracking-tight text-white/60 italic m-0"
            >
              Sin Compromisos.
            </motion.h1>
          </div>

          <div className="reveal-mask mt-16 max-w-xl">
            <motion.p 
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: "0%" }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
              className="text-white/70 text-lg md:text-xl font-sans font-light leading-relaxed"
            >
              Exclusiva cobertura internacional en un formato puro, analítico y directo. Diseñado para mentes que exigen rigor periodístico.
            </motion.p>
          </div>

          <motion.div 
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ duration: 0.8, ease: "easeOut", delay: 1 }}
             className="mt-16"
          >
            <a href="#noticias" className="group inline-flex items-center gap-6 pb-2 border-b border-white hover:border-white/50 transition-colors duration-500">
              <span className="text-xs font-sans uppercase tracking-[0.2em]">Leer Artículos</span>
              <span className="group-hover:translate-x-2 transition-transform duration-500 ease-out">→</span>
            </a>
          </motion.div>

        </div>
      </div>

    </section>
  );
}
