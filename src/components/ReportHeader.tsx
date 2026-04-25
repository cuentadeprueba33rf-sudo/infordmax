import { motion } from 'motion/react';

export default function ReportHeader() {
  return (
    <section className="relative pt-32 pb-16 px-6 md:px-12 lg:px-24 max-w-[1600px] mx-auto editorial-border-b">
      
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-12">
        <div className="reveal-mask">
           <motion.div
             initial={{ y: 40, opacity: 0 }}
             whileInView={{ y: 0, opacity: 1 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8, ease: "easeOut" }}
           >
              <h1 className="text-5xl md:text-7xl font-display font-medium tracking-tight text-white mb-4 leading-tight">
                Resumen Ejecutivo <br/>
                <span className="italic text-white/50">Abril 2026.</span>
              </h1>
           </motion.div>
        </div>

        <div className="reveal-mask">
          <motion.div
             initial={{ y: 40, opacity: 0 }}
             whileInView={{ y: 0, opacity: 1 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
             className="text-right"
          >
             <p className="font-sans text-xs uppercase tracking-[0.2em] text-white/40 mb-2">Reporte Global</p>
             <p className="font-sans text-sm text-white/70">Inford Max Insights</p>
          </motion.div>
        </div>
      </div>

       <div className="reveal-mask max-w-4xl">
        <motion.p 
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          className="text-white/70 text-lg md:text-xl leading-relaxed font-sans font-light"
        >
          Este reporte Inford Max ofrece una cobertura profunda y analítica de los principales acontecimientos informativos globales y locales de abril de 2026. Incluye artículos detallados sobre el conflicto Estados Unidos–Irán, la guerra Rusia–Ucrania, la misión Artemis II, política en Colombia, noticias locales de Sabanalarga, avances médicos y entretenimiento.
        </motion.p>
      </div>

    </section>
  );
}
