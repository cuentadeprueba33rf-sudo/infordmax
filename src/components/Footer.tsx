import AnimatedLogo from './AnimatedLogo';

export default function Footer() {
  return (
    <footer className="bg-bg pt-24 pb-12 relative overflow-hidden editorial-border-t">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 mb-24">
          <div className="md:col-span-6 lg:col-span-5">
            <div className="flex items-center gap-4 mb-8">
              <AnimatedLogo className="w-8 h-8" />
              <div className="flex flex-col">
                <span className="font-sans font-medium text-xl tracking-[0.2em] text-white leading-none uppercase">
                  INFORD<span className="text-white/40">MAX</span>
                </span>
              </div>
            </div>
            <p className="text-white/50 max-w-sm leading-relaxed font-sans font-light text-sm">
              La plataforma de noticias de nueva generación. Conectando la realidad global con rigor absoluto y diseño de élite.
            </p>
          </div>
          
          <div className="md:col-span-3 lg:col-span-2 lg:col-start-8">
            <h4 className="font-sans text-xs uppercase tracking-[0.2em] text-white/30 mb-8">Navegación</h4>
            <ul className="space-y-4">
              <li><a href="#inicio" className="text-sm font-sans text-white/60 hover:text-white transition-colors">Inicio</a></li>
              <li><a href="#quiénes-somos" className="text-sm font-sans text-white/60 hover:text-white transition-colors">Nosotros</a></li>
              <li><a href="#noticias" className="text-sm font-sans text-white/60 hover:text-white transition-colors">Noticias</a></li>
            </ul>
          </div>
          
          <div className="md:col-span-3 lg:col-span-2">
            <h4 className="font-sans text-xs uppercase tracking-[0.2em] text-white/30 mb-8">Legal</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-sm font-sans text-white/60 hover:text-white transition-colors">Términos</a></li>
              <li><a href="#" className="text-sm font-sans text-white/60 hover:text-white transition-colors">Privacidad</a></li>
              <li><a href="#" className="text-sm font-sans text-white/60 hover:text-white transition-colors">Ética</a></li>
            </ul>
          </div>
        </div>
        
        <div className="editorial-border-t pt-8 flex flex-col md:flex-row items-center justify-between gap-8">
          <p className="text-white/30 text-xs font-sans tracking-[0.1em] uppercase">
            &copy; {new Date().getFullYear()} INFORD MAX.
          </p>
          <div className="flex items-center gap-8">
            <a href="#" className="text-xs font-sans tracking-[0.1em] uppercase text-white/30 hover:text-white transition-colors">X(Twitter)</a>
            <a href="#" className="text-xs font-sans tracking-[0.1em] uppercase text-white/30 hover:text-white transition-colors">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
