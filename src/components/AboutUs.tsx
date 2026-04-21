import { motion } from 'motion/react';

const team = [
  {
    name: 'Samuel Casseres',
    role: 'Construida y creada por',
    initials: 'SC',
    description: 'Arquitecto principal de la plataforma, fusionando diseño de vanguardia con ingeniería de alto rendimiento.'
  },
  {
    name: 'Danna Simancas',
    role: 'Alimentada de información por',
    initials: 'DS',
    description: 'Especialista en curaduría de datos y análisis de fuentes globales para garantizar precisión absoluta.'
  },
  {
    name: 'Milagro Coronado',
    role: 'Compresión y redacción',
    initials: 'MC',
    description: 'Maestra de la narrativa periodística, transformando datos complejos en historias de impacto.'
  },
  {
    name: 'María de los Ángeles',
    role: 'Periodista set',
    initials: 'MA',
    description: 'Voz principal y rostro de la verdad, conectando los hechos con la audiencia global.'
  }
];

export default function AboutUs() {
  return (
    <section id="quiénes-somos" className="py-24 md:py-32 relative bg-bg">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-end mb-24">
          <div className="lg:col-span-5 relative">
            <div className="reveal-mask">
              <motion.h2 
                initial={{ y: "100%" }}
                whileInView={{ y: "0%" }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
                className="text-5xl md:text-7xl font-display font-medium tracking-tight text-white mb-0"
              >
                Mentes detrás <br/><span className="italic text-white/50">de la verdad.</span>
              </motion.h2>
            </div>
            <motion.div 
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 1, delay: 0.5 }}
               className="w-full h-[1px] bg-[color:var(--color-line)] mt-8 mb-0"
            />
          </div>
          <div className="lg:col-span-7">
             <div className="reveal-mask">
              <motion.p 
                initial={{ y: "100%" }}
                whileInView={{ y: "0%" }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, ease: [0.76, 0, 0.24, 1], delay: 0.2 }}
                className="text-white/60 text-lg md:text-xl leading-relaxed font-sans font-light lg:ml-12"
              >
                Un equipo multidisciplinario de expertos comprometidos con la excelencia periodística, la tecnología y la integridad informativa. Rigor sin concesiones.
              </motion.p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 1, ease: [0.76, 0, 0.24, 1] }}
              className="group flex flex-col pt-8 editorial-border-t relative"
            >
              {/* Large structural initials */}
              <div className="absolute top-0 right-0 -mt-6 text-7xl font-display italic text-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none select-none">
                {member.initials}
              </div>

              <span className="text-[10px] font-sans text-white/40 uppercase tracking-[0.2em] mb-4 h-8 flex items-start">
                {member.role}
              </span>
              <h3 className="text-2xl lg:text-3xl font-display font-medium text-white mb-6">
                {member.name}
              </h3>
              <p className="text-white/50 leading-relaxed font-sans font-light text-sm">
                {member.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

