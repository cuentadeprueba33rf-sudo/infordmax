import { motion } from 'motion/react';

const team = [
  {
    name: 'Samuel CASSERES',
    role: 'Construida y creada por',
    initials: 'SC',
    accent: 'from-blue-600 to-cyan-600',
    description: 'Arquitecto principal de la plataforma, fusionando diseño de vanguardia con ingeniería de alto rendimiento.'
  },
  {
    name: 'Danna Simancas',
    role: 'Alimentada de información por',
    initials: 'DS',
    accent: 'from-blue-500 to-indigo-500',
    description: 'Especialista en curaduría de datos y análisis de fuentes globales para garantizar precisión absoluta.'
  },
  {
    name: 'Milagro Coronado',
    role: 'Compresión y redacción',
    initials: 'MC',
    accent: 'from-cyan-500 to-blue-500',
    description: 'Maestra de la narrativa periodística, transformando datos complejos en historias de impacto.'
  },
  {
    name: 'María de los Ángeles',
    role: 'Periodista set',
    initials: 'MA',
    accent: 'from-indigo-500 to-blue-500',
    description: 'Voz principal y rostro de la verdad, conectando los hechos con la audiencia global.'
  }
];

export default function AboutUs() {
  return (
    <section id="quiénes-somos" className="py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-24 md:w-2/3 lg:w-1/2">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-4xl md:text-6xl font-display font-bold mb-6 tracking-tighter"
          >
            Las mentes detrás de <br />
            <span className="text-accent-gradient">la verdad.</span>
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="h-[1px] w-24 bg-blue-500 mb-8 origin-left"
          />
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="text-white/40 text-lg leading-relaxed font-light italic"
          >
            "Un equipo multidisciplinario de expertos comprometidos con la excelencia periodística, la tecnología de vanguardia y la integridad informativa."
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group relative h-full"
            >
              <div className="glass-card p-10 h-full flex flex-col relative overflow-hidden rounded-3xl">
                {/* Background Initials (Large, subtle) */}
                <div className="absolute -bottom-10 -right-4 text-[12rem] font-display font-bold text-white/[0.02] group-hover:text-white/[0.05] transition-colors duration-700 pointer-events-none leading-none select-none">
                  {member.initials}
                </div>

                {/* Initials Circle */}
                <div className="w-14 h-14 mb-16 flex items-center justify-center border border-white/10 rounded-full bg-white/5 backdrop-blur-sm group-hover:border-blue-500/50 transition-all duration-500">
                  <span className="font-display text-lg text-white/80">{member.initials}</span>
                </div>
                
                <div className="relative z-10 mt-auto">
                  <p className="text-[10px] font-mono text-white/40 uppercase tracking-[0.3em] mb-4 group-hover:text-blue-400 transition-colors duration-300">
                    {member.role}
                  </p>
                  <h3 className="text-2xl font-display font-bold text-white mb-4 leading-tight tracking-tight">
                    {member.name}
                  </h3>
                  <p className="text-sm text-white/40 leading-relaxed font-light">
                    {member.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

