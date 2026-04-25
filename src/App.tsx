import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { 
  ArrowLeft,
  Users
} from 'lucide-react';
import NewsSystem from './components/NewsSystem';

export default function App() {
  const [currentView, setCurrentView] = useState<'home' | 'news' | 'team'>('home');

  return (
    <div className="min-h-screen relative w-full overflow-x-hidden selection:bg-white selection:text-black">
      {/* Global Background Video */}
      <div className="fixed inset-0 w-full h-full z-0">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="w-full h-full object-cover"
        >
          <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4" type="video/mp4" />
        </video>
      </div>

      <AnimatePresence mode="wait">
        {currentView === 'home' && (
          <motion.div 
            key="home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 w-full min-h-screen flex flex-col"
          >
            {/* Velorah Navigation */}
            <nav className="relative flex flex-row items-center justify-between px-6 md:px-8 py-6 w-full max-w-7xl mx-auto">
              <div className="cursor-pointer" onClick={() => setCurrentView('home')}>
                <span className="text-3xl tracking-tight text-[hsl(var(--foreground))] font-display font-normal uppercase">
                  INFORD MAX<sup className="text-[10px] ml-0.5">®</sup>
                </span>
              </div>
              
              <div className="hidden md:flex items-center gap-8">
                {['Inicio', 'Estudio', 'Nosotros', 'Noticias', 'Contacto'].map((item) => (
                  <button 
                    key={item}
                    onClick={() => item === 'Noticias' ? setCurrentView('news') : null}
                    className={`text-sm transition-colors cursor-pointer ${
                      item === 'Inicio' 
                        ? 'text-[hsl(var(--foreground))]' 
                        : 'text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))]'
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>

              <button 
                onClick={() => setCurrentView('news')}
                className="liquid-glass rounded-full px-6 py-2.5 text-sm text-[hsl(var(--foreground))] hover:scale-[1.03] transition-transform cursor-pointer"
              >
                Ver Noticias
              </button>
            </nav>

            {/* INFORD MAX Hero */}
            <div className="flex-1 flex flex-col items-center justify-center text-center px-4 md:px-6 py-[90px] w-full max-w-7xl mx-auto">
              <h1 className="text-5xl sm:text-7xl md:text-8xl leading-[0.95] tracking-[-2.46px] font-normal font-display animate-fade-rise text-[hsl(var(--foreground))]">
                Donde la <em className="not-italic text-[hsl(var(--muted-foreground))]">verdad</em> surge{' '}
                <br className="hidden sm:block" />
                <em className="not-italic text-[hsl(var(--muted-foreground))]">por encima del ruido.</em>
              </h1>
              
              <p className="text-[hsl(var(--muted-foreground))] text-base sm:text-lg max-w-2xl mt-8 leading-relaxed animate-fade-rise-delay font-sans">
                Entregando noticias para pensadores profundos, ciudadanos críticos y mentes audaces. 
                En medio del caos, construimos un espacio de análisis agudo y periodismo riguroso.
              </p>

              <button 
                onClick={() => setCurrentView('news')}
                className="liquid-glass rounded-full px-14 py-5 font-sans text-base text-[hsl(var(--foreground))] mt-12 hover:scale-[1.03] transition-transform animate-fade-rise-delay-2 cursor-pointer"
              >
                Ver Noticias
              </button>
            </div>
          </motion.div>
        )}

        {currentView === 'news' && (
           <motion.div 
             key="news"
             initial={{ opacity: 0, scale: 0.98 }}
             animate={{ opacity: 1, scale: 1 }}
             exit={{ opacity: 0 }}
             transition={{ duration: 0.6 }}
             className="relative z-10 w-full min-h-screen flex flex-col p-4 md:p-8"
           >
             <div className="max-w-[1400px] mx-auto w-full flex-1 flex flex-col liquid-glass rounded-3xl overflow-hidden p-6 gap-6">
                <div className="flex justify-between items-center border-b pb-4" style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
                  <div className="flex items-center gap-4">
                    <button 
                      onClick={() => setCurrentView('home')}
                      className="rounded-full w-10 h-10 flex items-center justify-center bg-white/5 hover:bg-white/10 transition-colors"
                    >
                      <ArrowLeft size={16} />
                    </button>
                    <span className="font-display text-2xl tracking-tight text-white mb-[-0.2rem] uppercase">INFORD MAX</span>
                  </div>
                  
                  <button 
                    onClick={() => setCurrentView('team')}
                    className="text-sm font-sans text-white/50 hover:text-white transition-colors flex items-center gap-2"
                  >
                    <Users size={16} /> Conoce al Equipo
                  </button>
                </div>
                
                <div className="flex-1 overflow-y-auto scrollbar-hide">
                  <div className="max-w-4xl mx-auto w-full">
                    <NewsSystem />
                  </div>
                </div>
             </div>
           </motion.div>
        )}

        {currentView === 'team' && (
          <motion.div 
            key="team"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="relative z-10 w-full min-h-screen flex flex-col p-4 md:p-8"
          >
            <div className="max-w-[1400px] mx-auto w-full flex-1 flex flex-col liquid-glass-strong rounded-3xl overflow-hidden p-6 lg:p-12">
              <div className="flex justify-between items-center mb-16 border-b pb-8" style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
                <button 
                  onClick={() => setCurrentView('news')}
                  className="rounded-full px-6 py-3 bg-white/5 hover:bg-white/10 transition-colors flex items-center gap-3 text-sm"
                >
                  <ArrowLeft size={16} /> Noticias
                </button>
                <h2 className="text-4xl md:text-5xl font-display tracking-tight mb-[-0.4rem]">Las mentes detrás de la verdad.</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 font-sans">
                {[
                  { name: 'Milagro Coronado', role: 'Periodista de Investigación Regional', desc: 'Especialista en conflictos ambientales y dinámicas locales.' },
                  { name: 'Danna Simancas', role: 'Corresponsal Internacional', desc: 'Análisis geopolítico y reportería desde el núcleo de los conflictos globales.' },
                  { name: 'Samuel Casseres', role: 'Jefe de Deportes y Tecnología', desc: 'Fusión de estrategias deportivas con los últimos avances en innovación médica y aeroespacial.' },
                  { name: 'María de los Ángeles', role: 'Editora de Política y Entretenimiento', desc: 'Narrando cómo el poder y la cultura popular se entrelazan.' },
                  { name: 'Equipo INFORD MAX', role: 'Editorial Conjunta', desc: 'Mentes colectivas para asegurar la imparcialidad y la claridad en eventos sin precedentes.' },
                ].map((member, i) => (
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    key={member.name} 
                    className="liquid-glass p-8 rounded-3xl hover:bg-white/[0.03] transition-colors"
                  >
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-6">
                      <Users className="text-white/60" size={20} />
                    </div>
                    <h4 className="text-xl font-medium text-white/90 mb-2">{member.name}</h4>
                    <p className="text-xs uppercase tracking-widest text-[#ff6a00] font-bold mb-6">{member.role}</p>
                    <p className="text-sm font-light text-white/70 leading-relaxed">{member.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
