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
      transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'bg-bg/95 backdrop-blur-md editorial-border-b' : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1600px] mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-4 group cursor-pointer">
          <AnimatedLogo className="w-8 h-8" />
          <div className="flex flex-col">
            <span className="font-display font-medium text-xl md:text-2xl tracking-widest text-white leading-none uppercase">
              INFORD<span className="text-white/40">MAX</span>
            </span>
          </div>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(' ', '-')}`}
              className="text-xs font-sans tracking-[0.1em] uppercase text-white/50 hover:text-white transition-colors relative group"
            >
              {link}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all duration-500 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-8">
          <button className="text-white/40 hover:text-white transition-colors">
            <Search size={18} strokeWidth={1.5} />
          </button>
          <button className="px-6 py-2 border border-white text-white font-sans text-xs tracking-[0.15em] uppercase hover:bg-white hover:text-black transition-all duration-500 rounded-full">
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
            className="md:hidden bg-bg/95 backdrop-blur-md editorial-border-b"
          >
            <div className="px-6 py-12 flex flex-col gap-8">
              {navLinks.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase().replace(' ', '-')}`}
                  className="text-2xl font-display font-medium uppercase tracking-widest text-white/50 hover:text-white transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link}
                </a>
              ))}
              <div className="pt-8 editorial-border-t flex flex-col gap-8">
                <button className="flex items-center gap-4 text-white/40 hover:text-white transition-colors font-sans text-xs uppercase tracking-widest">
                  <Search size={20} /> Buscar noticias
                </button>
                <button className="w-full py-4 border border-white text-white font-sans text-xs tracking-[0.2em] uppercase hover:bg-white hover:text-black transition-all duration-500 rounded-full">
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

