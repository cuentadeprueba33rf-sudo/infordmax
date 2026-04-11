import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Menu, X } from 'lucide-react';

import AnimatedLogo from './AnimatedLogo';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 50);
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const navLinks = ['Inicio', 'Quiénes Somos', 'Noticias', 'Contacto'];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: isVisible ? 0 : -100 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        isScrolled ? 'glass' : 'bg-black/80 backdrop-blur-md border-b border-white/10'
      }`}
    >
      {/* Breaking News Ticker */}
      <div className="bg-red-600 text-white text-xs font-display tracking-[0.2em] uppercase py-1.5 overflow-hidden flex border-b border-red-700">
        <motion.div 
          animate={{ x: ["0%", "-50%"] }} 
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }} 
          className="flex whitespace-nowrap"
        >
          <span>BREAKING NEWS: TENSIÓN GLOBAL: ANÁLISIS DEL CONFLICTO ENTRE ESTADOS UNIDOS E IRÁN &nbsp;&nbsp;&nbsp;///&nbsp;&nbsp;&nbsp; MISIÓN ARTEMIS II: EL REGRESO HISTÓRICO DE LA HUMANIDAD A LA ÓRBITA LUNAR &nbsp;&nbsp;&nbsp;///&nbsp;&nbsp;&nbsp; COLOMBIA EN TENSIÓN: SALARIO MÍNIMO Y ELECCIONES &nbsp;&nbsp;&nbsp;///&nbsp;&nbsp;&nbsp; </span>
          <span>BREAKING NEWS: TENSIÓN GLOBAL: ANÁLISIS DEL CONFLICTO ENTRE ESTADOS UNIDOS E IRÁN &nbsp;&nbsp;&nbsp;///&nbsp;&nbsp;&nbsp; MISIÓN ARTEMIS II: EL REGRESO HISTÓRICO DE LA HUMANIDAD A LA ÓRBITA LUNAR &nbsp;&nbsp;&nbsp;///&nbsp;&nbsp;&nbsp; COLOMBIA EN TENSIÓN: SALARIO MÍNIMO Y ELECCIONES &nbsp;&nbsp;&nbsp;///&nbsp;&nbsp;&nbsp; </span>
        </motion.div>
      </div>

      <div className="max-w-[1600px] mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-4">
          <AnimatedLogo className="w-12 h-12 md:w-14 md:h-14" />
          <span className="font-display font-bold text-2xl md:text-3xl tracking-tight text-white hidden sm:block">
            INFORD <span className="text-red-600">MAX</span>
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(' ', '-')}`}
              className="text-xs font-display tracking-[0.15em] uppercase text-secondary hover:text-white transition-colors relative group"
            >
              {link}
              <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-red-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-6">
          <button className="text-secondary hover:text-white transition-colors">
            <Search size={20} strokeWidth={1.5} />
          </button>
          <button className="px-6 py-2.5 bg-white text-black font-display font-bold text-xs tracking-[0.15em] uppercase hover:bg-red-600 hover:text-white transition-colors">
            Suscribirse
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden p-2 text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black border-b border-white/10"
          >
            <div className="px-6 py-6 flex flex-col gap-6">
              {navLinks.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase().replace(' ', '-')}`}
                  className="text-xl font-display uppercase tracking-widest text-secondary hover:text-white transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link}
                </a>
              ))}
              <div className="pt-6 border-t border-white/10 flex flex-col gap-6">
                <button className="flex items-center gap-3 text-secondary hover:text-white transition-colors font-display uppercase tracking-widest">
                  <Search size={20} /> Buscar noticias
                </button>
                <button className="w-full py-4 bg-white text-black font-display font-bold text-sm tracking-widest uppercase hover:bg-red-600 hover:text-white transition-colors">
                  Suscribirse
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

