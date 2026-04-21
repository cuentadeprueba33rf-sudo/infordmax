import { motion } from 'motion/react';
import { Target, Globe, Lightbulb } from 'lucide-react';

const objectives = [
  {
    icon: <Target className="w-5 h-5" />,
    title: 'Precisión',
    description: 'Datos verificados y fuentes confiables. Eliminamos el ruido para entregarte solo la verdad de los hechos, con rigor absoluto.'
  },
  {
    icon: <Globe className="w-5 h-5" />,
    title: 'Globalidad',
    description: 'Perspectivas globales con impacto local. Entiende cómo los eventos internacionales afectan tu día a día.'
  },
  {
    icon: <Lightbulb className="w-5 h-5" />,
    title: 'Análisis',
    description: 'Más allá del titular. Profundizamos en las causas y consecuencias para brindarte un contexto analítico estructural completo.'
  }
];

export default function Objective() {
  return (
    <section className="py-24 md:py-32 relative bg-bg editorial-border-t">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 items-start">
          
          <div className="lg:col-span-1 border-b lg:border-b-0 lg:border-r border-[color:var(--color-line)] pb-12 lg:pb-0 lg:pr-12">
             <div className="reveal-mask mb-4">
              <motion.span 
                initial={{ y: "100%" }}
                whileInView={{ y: "0%" }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
                className="text-xs font-sans uppercase tracking-[0.2em] text-white/40 block"
              >
                Misión
              </motion.span>
            </div>
            <div className="reveal-mask">
              <motion.h2 
                initial={{ y: "100%" }}
                whileInView={{ y: "0%" }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: [0.76, 0, 0.24, 1], delay: 0.1 }}
                className="text-4xl md:text-5xl font-display font-medium text-white tracking-tight"
              >
                Nuestro
                <br/>
                <span className="italic text-white/50">Objetivo.</span>
              </motion.h2>
            </div>
          </div>

          <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-12">
            {objectives.map((obj, index) => (
              <motion.div
                key={obj.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: 0.2 + (index * 0.1), duration: 1, ease: [0.76, 0, 0.24, 1] }}
                className="flex flex-col group"
              >
                <div className="w-12 h-12 rounded-full border border-[color:var(--color-line)] flex items-center justify-center mb-8 text-white group-hover:bg-white group-hover:text-black transition-all duration-500">
                  {obj.icon}
                </div>
                <h3 className="text-2xl font-display font-medium mb-4 text-white">{obj.title}</h3>
                <p className="text-white/50 font-sans font-light leading-relaxed text-sm">{obj.description}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
