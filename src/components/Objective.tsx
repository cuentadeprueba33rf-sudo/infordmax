import { motion } from 'motion/react';
import { Target, Globe, Lightbulb } from 'lucide-react';

const objectives = [
  {
    icon: <Target className="w-8 h-8" />,
    title: 'Informar con precisión',
    description: 'Datos verificados y fuentes confiables. Eliminamos el ruido para entregarte solo la verdad de los hechos.'
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: 'Conectar con el mundo',
    description: 'Perspectivas globales con impacto local. Entiende cómo los eventos internacionales afectan tu día a día.'
  },
  {
    icon: <Lightbulb className="w-8 h-8" />,
    title: 'Ofrecer análisis relevante',
    description: 'Más allá del titular. Profundizamos en las causas y consecuencias para brindarte un contexto completo.'
  }
];

export default function Objective() {
  return (
    <section className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-display font-bold mb-6 tracking-tighter"
          >
            Nuestro <span className="text-accent-gradient">Objetivo</span>
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            className="h-[1px] w-24 bg-blue-500 mx-auto"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {objectives.map((obj, index) => (
            <motion.div
              key={obj.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-24 h-24 rounded-full glass-card flex items-center justify-center mb-10 text-white/40 group-hover:text-blue-400 group-hover:border-blue-500/50 transition-all duration-500">
                {obj.icon}
              </div>
              <h3 className="text-2xl font-display font-bold mb-6 tracking-tight">{obj.title}</h3>
              <p className="text-white/40 leading-relaxed font-light">{obj.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
