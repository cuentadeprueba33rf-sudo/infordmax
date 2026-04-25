import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, ChevronDown, ChevronUp } from 'lucide-react';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { newsData, NewsCategory, NewsArticle } from '../data/news';

const categories: (NewsCategory | 'Todas')[] = [
  'Todas',
  'Internacional',
  'Ciencia y Tecnología',
  'Entretenimiento',
  'Medicina',
  'Deportes',
  'Política',
  'Noticias Locales',
  'Editorial'
];

export default function NewsSystem() {
  const [activeCategory, setActiveCategory] = useState<NewsCategory | 'Todas'>('Todas');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedArticle, setExpandedArticle] = useState<string | null>(null);

  const filteredNews = newsData.filter(article => {
    const matchesCategory = activeCategory === 'Todas' || article.category === activeCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredNews = filteredNews.filter(n => n.featured);
  const regularNews = filteredNews.filter(n => !n.featured);

  return (
    <section id="noticias" className="py-24 md:py-32 relative min-h-screen bg-surface">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        
        {/* Header & Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-16 editorial-border-b pb-8">
          <div className="reveal-mask">
            <motion.h2 
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-4xl md:text-6xl font-display font-medium tracking-tight text-white mb-4"
            >
              Últimas <span className="italic text-white/50">Noticias.</span>
            </motion.h2>
          </div>
          
          <div className="flex items-center gap-4 w-full md:w-auto">
            <div className="relative w-full md:w-80">
              <Search className="absolute left-0 top-1/2 -translate-y-1/2 text-white/40 w-4 h-4 ml-4" />
              <input 
                type="text" 
                placeholder="Buscar artículos..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-transparent border border-[color:var(--color-line)] py-3 pl-12 pr-6 text-white text-sm font-sans placeholder:text-white/40 focus:outline-none focus:border-white transition-all duration-500 rounded-none"
              />
            </div>
          </div>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-4 mb-16">
          {categories.map(category => (
            <button
               key={category}
               onClick={() => setActiveCategory(category)}
               className={`px-5 py-2 text-xs font-sans uppercase tracking-[0.1em] transition-all duration-500 border ${
                 activeCategory === category 
                   ? 'bg-white text-black border-white' 
                   : 'bg-transparent text-white/50 border-[color:var(--color-line)] hover:text-white hover:border-white/30'
               }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* News Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Featured News */}
          {featuredNews.length > 0 && (
            <div className="lg:col-span-8 flex flex-col gap-12">
              {featuredNews.map(article => (
                <NewsCard 
                  key={article.id} 
                  article={article} 
                  isExpanded={expandedArticle === article.id}
                  onToggle={() => setExpandedArticle(expandedArticle === article.id ? null : article.id)}
                  featured
                />
              ))}
            </div>
          )}

          {/* Regular News (Side Column) */}
          <div className={`flex flex-col gap-8 ${featuredNews.length > 0 ? 'lg:col-span-4 lg:pl-12 lg:border-l lg:border-[color:var(--color-line)]' : 'lg:col-span-12 grid md:grid-cols-2 lg:grid-cols-3'}`}>
            <span className="text-xs font-sans uppercase tracking-widest text-white/30 block mb-4">Lo Más Reciente</span>
            {regularNews.map(article => (
              <NewsCard 
                key={article.id} 
                article={article} 
                isExpanded={expandedArticle === article.id}
                onToggle={() => setExpandedArticle(expandedArticle === article.id ? null : article.id)}
              />
            ))}
            
            {filteredNews.length === 0 && (
              <div className="col-span-full py-20 text-center text-white/30 font-sans text-xs uppercase tracking-widest">
                No hay resultados para esta búsqueda.
              </div>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}

function NewsCard({ article, isExpanded, onToggle, featured = false }: { article: NewsArticle, isExpanded: boolean, onToggle: () => void, featured?: boolean }) {
  return (
    <motion.article 
      layout
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      className={`group flex flex-col ${featured ? '' : 'editorial-border-b pb-8'}`}
    >
      <div className={`overflow-hidden mb-6 ${featured ? 'h-[500px]' : 'h-48'} bg-[#1a1a1a]`}>
        <img 
          src={article.imageUrl} 
          alt={article.title} 
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-out filter grayscale hover:grayscale-0"
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="flex flex-col flex-grow">
        <div className="flex items-center gap-3 text-xs text-white/40 mb-4 font-sans uppercase tracking-[0.1em]">
          <span className="text-white">{article.category}</span>
          <span className="w-1 h-1 rounded-full bg-[color:var(--color-line)]"></span>
          <span>{article.date}</span>
          <span className="w-1 h-1 rounded-full bg-[color:var(--color-line)]"></span>
          <span>{Math.max(1, Math.ceil(article.content.split(' ').length / 200))} min leída</span>
        </div>
        
        <h3 className={`font-display font-medium mb-4 text-white group-hover:text-white/70 transition-colors tracking-tight ${featured ? 'text-4xl leading-tight' : 'text-2xl leading-tight'}`}>
          {article.title}
        </h3>
        
        <p className={`text-white/60 mb-6 font-sans font-light leading-relaxed ${featured ? 'text-lg max-w-3xl' : 'text-sm'}`}>
          {article.excerpt}
        </p>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden"
            >
              <div className="pt-8 editorial-border-t mt-4 mb-8">
                <div className={`markdown-body ${featured ? 'lg:columns-2 lg:gap-12' : ''}`}>
                  <Markdown remarkPlugins={[remarkGfm]}>
                    {article.content}
                  </Markdown>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <button 
          onClick={onToggle}
          className="inline-flex items-center gap-2 text-xs font-sans uppercase tracking-[0.1em] text-white hover:text-white/60 transition-colors self-start border-b border-[color:var(--color-line)] hover:border-white pb-1"
        >
          {isExpanded ? (
            <>Cerrar Artículo <ChevronUp size={14} /></>
          ) : (
            <>Leer Artículo <ChevronDown size={14} /></>
          )}
        </button>
      </div>
    </motion.article>
  );
}
