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
          <h2 className="text-4xl md:text-6xl font-display font-bold">
            Nuestro <br />
            <span className="text-gradient">Proceso.</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/10 -translate-y-1/2 hidden md:block"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-6 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="relative"
              >
                <div className="glass-card p-8 rounded-3xl h-full border-t-4 border-t-blue-500/50 hover:border-t-blue-500 transition-colors duration-300">
                  <div className="text-6xl font-display font-bold text-white/5 mb-6 absolute top-4 right-6 pointer-events-none">
                    {step.number}
                  </div>
                  <h3 className="text-2xl font-display font-semibold mb-4 relative z-10">{step.title}</h3>
                  <p className="text-secondary leading-relaxed relative z-10">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
