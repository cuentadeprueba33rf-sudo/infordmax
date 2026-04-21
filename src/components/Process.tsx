import { motion } from 'motion/react';

const steps = [
  {
    number: '01',
    title: 'Recolección',
    description: 'Monitoreo de fuentes globales y reportes en tiempo real con precisión milimétrica.',
  },
  {
    number: '02',
    title: 'Verificación',
    description: 'Fact-checking riguroso y validación cruzada con expertos para garantizar autenticidad.',
  },
  {
    number: '03',
    title: 'Edición',
    description: 'Estructuración de la narrativa con objetividad, rigor y diseño editorial purista.',
  }
];

export default function Process() {
  return (
    <section className="py-24 md:py-32 relative bg-bg editorial-border-t">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between md:items-end mb-20 gap-8">
          <div className="reveal-mask">
            <motion.h2 
              initial={{ y: "100%" }}
              whileInView={{ y: "0%" }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
              className="text-4xl md:text-5xl font-display font-medium tracking-tight text-white m-0"
            >
              Cómo <span className="italic text-white/50">lo hacemos.</span>
            </motion.h2>
          </div>
          <div className="reveal-mask hidden md:block">
            <motion.span 
              initial={{ y: "100%" }}
              whileInView={{ y: "0%" }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.76, 0, 0.24, 1], delay: 0.2 }}
              className="text-xs font-sans uppercase tracking-[0.2em] text-white/40 block pb-2"
            >
              Rigor Metodológico
            </motion.span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 lg:gap-24 relative">
          
          <div className="hidden md:block absolute top-[2.5rem] left-0 w-full h-[1px] bg-[color:var(--color-line)] z-0" />
            
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.15, duration: 1, ease: [0.76, 0, 0.24, 1] }}
              className="relative z-10 flex flex-col"
            >
              <div className="w-20 h-20 bg-bg editorial-border rounded-full flex items-center justify-center mb-10 overflow-hidden relative group">
                 <motion.div 
                    initial={{ y: "100%" }}
                    whileInView={{ y: "0%" }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + (index*0.1), duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                    className="text-xl font-display font-medium text-white italic"
                 >
                   {step.number}
                 </motion.div>
              </div>
              <h3 className="text-2xl font-display font-medium mb-4 text-white">{step.title}</h3>
              <p className="text-white/50 leading-relaxed font-sans font-light text-sm">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
