import { motion } from 'motion/react';

const team = [
  {
    name: 'Samuel CASSERES',
    role: 'Construida y creada por',
    initials: 'SC',
    accent: 'from-blue-600 to-indigo-600',
    description: 'Arquitecto principal de la plataforma, fusionando diseño de vanguardia con ingeniería de alto rendimiento.'
  },
  {
    name: 'Danna Simancas',
    role: 'Alimentada de información por',
    initials: 'DS',
    accent: 'from-red-600 to-rose-600',
    description: 'Especialista en curaduría de datos y análisis de fuentes globales para garantizar precisión absoluta.'
  },
  {
    name: 'Milagro Coronado',
    role: 'Compresión y redacción',
    initials: 'MC',
    accent: 'from-blue-500 to-cyan-500',
    description: 'Maestra de la narrativa periodística, transformando datos complejos en historias de impacto.'
  },
  {
    name: 'María de los Ángeles',
    role: 'Periodista set',
    initials: 'MA',
    accent: 'from-red-500 to-orange-500',
    description: 'Voz principal y rostro de la verdad, conectando los hechos con la audiencia global.'
  }
];

export default function AboutUs() {
  return (
    <section id="quienes-somos" className="py-32 relative overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 relative z-10">
        <div className="mb-24 md:w-2/3 lg:w-1/2">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-4xl md:text-6xl font-display font-bold mb-6 uppercase tracking-tight"
          >
            Las mentes detrás de <br />
            <span className="text-red-600">la verdad.</span>
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="h-[1px] w-24 bg-red-600 mb-8 origin-left"
          />
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="text-secondary text-lg leading-relaxed font-serif italic"
          >
            "Un equipo multidisciplinario de expertos comprometidos con la excelencia periodística, la tecnología de vanguardia y la integridad informativa."
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -10 }}
              className="group relative h-full"
            >
              <div className="glass editorial-border p-8 h-full flex flex-col relative overflow-hidden group-hover:border-white/30 transition-colors duration-500">
                {/* Accent Line */}
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${member.accent} opacity-50 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                {/* Background Initials (Large, subtle) */}
                <div className="absolute -bottom-10 -right-4 text-[10rem] font-serif font-bold text-white/[0.02] group-hover:text-white/[0.06] transition-colors duration-700 pointer-events-none leading-none select-none">
                  {member.initials}
                </div>

                {/* Initials Circle */}
                <div className="w-16 h-16 mb-12 flex items-center justify-center border border-white/20 rounded-full bg-white/5 backdrop-blur-sm group-hover:bg-white/10 group-hover:border-red-500/50 transition-all duration-500">
                  <span className="font-serif text-2xl text-white">{member.initials}</span>
                </div>
                
                <div className="relative z-10 mt-auto">
                  <p className="text-[10px] font-display text-secondary uppercase tracking-[0.2em] mb-3 group-hover:text-red-400 transition-colors duration-300">
                    {member.role}
                  </p>
                  <h3 className="text-2xl font-serif font-bold text-white mb-4 leading-tight">
                    {member.name}
                  </h3>
                  <p className="text-sm text-secondary leading-relaxed font-sans">
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

