import { motion } from 'motion/react';

export default function Ticker() {
  const breakingNews = [
    "ÚLTIMA HORA: Descubrimiento revolucionario en la fusión nuclear limpia.",
    "MERCADOS: Las bolsas globales alcanzan máximos históricos tras la cumbre económica.",
    "GEOPOLÍTICA: Acuerdo de paz histórico firmado en Ginebra.",
    "TECNOLOGÍA: Nuevo procesador cuántico supera el límite de los 1000 qubits.",
  ];

  return (
    <div className="w-full bg-white text-black py-2 overflow-hidden flex items-center border-y border-[color:var(--color-line)]">
      <div className="px-4 text-xs font-bold tracking-widest uppercase flex items-center border-r border-black mr-4 shrink-0 bg-white z-10 relative">
        <span className="w-2 h-2 rounded-full bg-red-600 mr-2 animate-pulse"></span>
        Urgente
      </div>
      <div className="flex-1 overflow-hidden relative flex">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 25, repeat: Infinity }}
          className="flex whitespace-nowrap min-w-max"
        >
          {[...breakingNews, ...breakingNews].map((news, i) => (
            <span key={i} className="text-xs uppercase tracking-[0.1em] font-sans mx-8">
              {news} <span className="mx-8 text-black/30">•</span>
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
