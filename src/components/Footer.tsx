import AnimatedLogo from './AnimatedLogo';

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-white/5 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <AnimatedLogo className="w-12 h-12" />
              <span className="font-display font-bold text-2xl tracking-tight text-white">
                INFORD <span className="text-red-600">MAX</span>
              </span>
            </div>
            <p className="text-secondary max-w-md leading-relaxed">
              La plataforma de noticias de nueva generación. Conectando la realidad global con precisión absoluta y diseño de élite.
            </p>
          </div>
          
          <div>
            <h4 className="font-display font-semibold text-white mb-6">Secciones</h4>
            <ul className="space-y-4">
              <li><a href="#inicio" className="text-secondary hover:text-white transition-colors">Inicio</a></li>
              <li><a href="#quienes-somos" className="text-secondary hover:text-white transition-colors">Quiénes Somos</a></li>
              <li><a href="#noticias" className="text-secondary hover:text-white transition-colors">Noticias</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-display font-semibold text-white mb-6">Legal</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-secondary hover:text-white transition-colors">Términos de Servicio</a></li>
              <li><a href="#" className="text-secondary hover:text-white transition-colors">Política de Privacidad</a></li>
              <li><a href="#" className="text-secondary hover:text-white transition-colors">Código de Ética</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-secondary text-sm">
            &copy; {new Date().getFullYear()} INFORD MAX. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-secondary hover:text-white transition-colors text-sm">Twitter</a>
            <a href="#" className="text-secondary hover:text-white transition-colors text-sm">LinkedIn</a>
            <a href="#" className="text-secondary hover:text-white transition-colors text-sm">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
