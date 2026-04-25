import { motion } from 'motion/react';
import { Menu, Newspaper } from 'lucide-react';

export default function Navbar({ onViewChange }: { onViewChange?: (view: 'home' | 'news' | 'team') => void }) {
  return (
    <nav className="absolute top-0 left-0 right-0 p-8 flex items-center justify-between z-20">
      {/* Logo */}
      <div 
        className="flex items-center gap-3 cursor-pointer group"
        onClick={() => onViewChange && onViewChange('home')}
      >
        <div className="w-8 h-8 rounded-lg bg-orange-500/10 flex items-center justify-center liquid-glass group-hover:scale-110 transition-transform">
          <Newspaper size={20} className="text-orange-500/80" />
        </div>
        <span className="text-2xl font-semibold tracking-tighter text-white">
          INFORD<span className="text-white/40">MAX</span>
        </span>
      </div>

      {/* Menu Button */}
      <button 
        className="liquid-glass rounded-full px-5 py-2.5 flex items-center gap-3 text-sm font-medium tracking-tight hover:bg-white/5 transition-all active:scale-95 group"
        onClick={() => alert("Menú de navegación en desarrollo")}
      >
        <span>Menu</span>
        <Menu size={18} className="text-white/60 group-hover:text-white transition-colors" />
      </button>
    </nav>
  );
}

