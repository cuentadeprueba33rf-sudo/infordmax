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
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'glass border-b border-white/5' : 'bg-transparent'
      }`}
    >
      {/* Breaking News Ticker */}
      <div className="bg-blue-600 text-white text-[10px] font-mono tracking-[0.3em] uppercase py-1.5 overflow-hidden flex border-b border-blue-500/20">
        <motion.div 
          animate={{ x: ["0%", "-50%"] }} 
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }} 
          className="flex whitespace-nowrap"
        >
          <span>BREAKING NEWS: TENSIÓN GLOBAL: ANÁLISIS DEL CONFLICTO ENTRE ESTADOS UNIDOS E IRÁN &nbsp;&nbsp;&nbsp;///&nbsp;&nbsp;&nbsp; MISIÓN ARTEMIS II: EL REGRESO HISTÓRICO DE LA HUMANIDAD A LA ÓRBITA LUNAR &nbsp;&nbsp;&nbsp;///&nbsp;&nbsp;&nbsp; COLOMBIA EN TENSIÓN: SALARIO MÍNIMO Y ELECCIONES &nbsp;&nbsp;&nbsp;///&nbsp;&nbsp;&nbsp; </span>
          <span>BREAKING NEWS: TENSIÓN GLOBAL: ANÁLISIS DEL CONFLICTO ENTRE ESTADOS UNIDOS E IRÁN &nbsp;&nbsp;&nbsp;///&nbsp;&nbsp;&nbsp; MISIÓN ARTEMIS II: EL REGRESO HISTÓRICO DE LA HUMANIDAD A LA ÓRBITA LUNAR &nbsp;&nbsp;&nbsp;///&nbsp;&nbsp;&nbsp; COLOMBIA EN TENSIÓN: SALARIO MÍNIMO Y ELECCIONES &nbsp;&nbsp;&nbsp;///&nbsp;&nbsp;&nbsp; </span>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-4 group cursor-pointer">
          <AnimatedLogo className="w-10 h-10 md:w-12 md:h-12" />
          <div className="flex flex-col">
            <span className="font-display font-bold text-xl md:text-2xl tracking-tighter text-white leading-none">
              INFORD<span className="text-accent-gradient">MAX</span>
            </span>
            <span className="text-[8px] font-mono text-white/40 tracking-[0.4em] uppercase mt-1">Global Intelligence</span>
          </div>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(' ', '-')}`}
              className="text-[10px] font-mono tracking-[0.2em] uppercase text-white/50 hover:text-white transition-colors relative group"
            >
              {link}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-blue-500 transition-all duration-500 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-8">
          <button className="text-white/40 hover:text-white transition-colors">
            <Search size={18} strokeWidth={1.5} />
          </button>
          <button className="px-8 py-2.5 bg-white text-black font-bold text-[10px] tracking-[0.2em] uppercase hover:bg-blue-500 hover:text-white transition-all duration-500 rounded-full">
            Suscribirse
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden p-2 text-white/60 hover:text-white transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden glass border-b border-white/5"
          >
            <div className="px-6 py-12 flex flex-col gap-8">
              {navLinks.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase().replace(' ', '-')}`}
                  className="text-2xl font-display font-bold uppercase tracking-tighter text-white/50 hover:text-white transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link}
                </a>
              ))}
              <div className="pt-8 border-t border-white/5 flex flex-col gap-8">
                <button className="flex items-center gap-4 text-white/40 hover:text-white transition-colors font-mono text-xs uppercase tracking-widest">
                  <Search size={20} /> Buscar noticias
                </button>
                <button className="w-full py-4 bg-white text-black font-bold text-xs tracking-[0.2em] uppercase hover:bg-blue-500 hover:text-white transition-all duration-500 rounded-full">
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

