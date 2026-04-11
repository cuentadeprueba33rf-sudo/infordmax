import AnimatedLogo from './AnimatedLogo';

export default function Footer() {
  return (
    <footer className="bg-black/50 border-t border-white/5 pt-24 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
          <div className="md:col-span-2">
            <div className="flex items-center gap-4 mb-8">
              <AnimatedLogo className="w-10 h-10" />
              <div className="flex flex-col">
                <span className="font-display font-bold text-2xl tracking-tighter text-white leading-none">
                  INFORD<span className="text-accent-gradient">MAX</span>
                </span>
                <span className="text-[8px] font-mono text-white/40 tracking-[0.4em] uppercase mt-1">Global Intelligence</span>
              </div>
            </div>
            <p className="text-white/40 max-w-sm leading-relaxed font-light">
              La plataforma de noticias de nueva generación. Conectando la realidad global con precisión absoluta y diseño de élite.
            </p>
          </div>
          
          <div>
            <h4 className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/60 mb-8">Secciones</h4>
            <ul className="space-y-4">
              <li><a href="#inicio" className="text-sm text-white/40 hover:text-white transition-colors font-light">Inicio</a></li>
              <li><a href="#quiénes-somos" className="text-sm text-white/40 hover:text-white transition-colors font-light">Quiénes Somos</a></li>
              <li><a href="#noticias" className="text-sm text-white/40 hover:text-white transition-colors font-light">Noticias</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/60 mb-8">Legal</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-sm text-white/40 hover:text-white transition-colors font-light">Términos de Servicio</a></li>
              <li><a href="#" className="text-sm text-white/40 hover:text-white transition-colors font-light">Política de Privacidad</a></li>
              <li><a href="#" className="text-sm text-white/40 hover:text-white transition-colors font-light">Código de Ética</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <p className="text-white/20 text-[10px] font-mono tracking-widest uppercase">
            &copy; {new Date().getFullYear()} INFORD MAX. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-8">
            <a href="#" className="text-[10px] font-mono tracking-widest uppercase text-white/20 hover:text-white transition-colors">Twitter</a>
            <a href="#" className="text-[10px] font-mono tracking-widest uppercase text-white/20 hover:text-white transition-colors">LinkedIn</a>
            <a href="#" className="text-[10px] font-mono tracking-widest uppercase text-white/20 hover:text-white transition-colors">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
