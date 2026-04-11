import { motion } from 'motion/react';

const steps = [
  {
    number: '01',
    title: 'Recolección de datos',
    description: 'Monitoreo constante de fuentes globales, agencias internacionales y reportes sobre el terreno en tiempo real.',
  },
  {
    number: '02',
    title: 'Verificación',
    description: 'Cruces de información rigurosos, fact-checking y validación con expertos para garantizar la autenticidad.',
  },
  {
    number: '03',
    title: 'Redacción profesional',
    description: 'Estructuración de la narrativa con claridad, objetividad y un diseño editorial de primer nivel.',
  }
];

export default function Process() {
  return (
    <section className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tighter">
            Nuestro <br />
            <span className="text-accent-gradient">Proceso.</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/5 -translate-y-1/2 hidden md:block"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="relative"
              >
                <div className="glass-card p-10 rounded-4xl h-full border-t border-t-blue-500/20 hover:border-t-blue-500/50 transition-all duration-500">
                  <div className="text-8xl font-display font-bold text-white/[0.02] mb-6 absolute top-4 right-8 pointer-events-none group-hover:text-white/[0.05] transition-colors duration-500">
                    {step.number}
                  </div>
                  <h3 className="text-2xl font-display font-bold mb-6 relative z-10 tracking-tight">{step.title}</h3>
                  <p className="text-white/40 leading-relaxed relative z-10 font-light">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
