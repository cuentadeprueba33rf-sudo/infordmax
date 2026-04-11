import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, ChevronRight, X } from 'lucide-react';
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
    <section id="noticias" className="py-24 relative min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header & Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-4">Últimas <span className="text-gradient">Noticias</span></h2>
            <p className="text-secondary text-lg">Información verificada en tiempo real.</p>
          </div>
          
          <div className="flex items-center gap-4 w-full md:w-auto">
            <div className="relative w-full md:w-64">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-secondary w-5 h-5" />
              <input 
                type="text" 
                placeholder="Buscar noticias..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-full py-3 pl-12 pr-4 text-white placeholder:text-white/30 focus:outline-none focus:border-blue-500/50 transition-colors"
              />
            </div>
          </div>
        </div>

        {/* Categories */}
        <div className="flex overflow-x-auto pb-6 mb-8 gap-3 scrollbar-hide -mx-6 px-6 md:mx-0 md:px-0">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`whitespace-nowrap px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category 
                  ? 'bg-white text-black' 
                  : 'glass text-secondary hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Featured News (Left Column on Desktop) */}
          {featuredNews.length > 0 && (
            <div className="lg:col-span-7 flex flex-col gap-8">
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

          {/* Regular News (Right Column on Desktop, or full width if no featured) */}
          <div className={`flex flex-col gap-8 ${featuredNews.length > 0 ? 'lg:col-span-5' : 'lg:col-span-12 grid md:grid-cols-2 lg:grid-cols-3'}`}>
            {regularNews.map(article => (
              <NewsCard 
                key={article.id} 
                article={article} 
                isExpanded={expandedArticle === article.id}
                onToggle={() => setExpandedArticle(expandedArticle === article.id ? null : article.id)}
              />
            ))}
            
            {filteredNews.length === 0 && (
              <div className="col-span-full py-20 text-center text-secondary">
                No se encontraron noticias que coincidan con tu búsqueda.
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
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className={`glass-card rounded-3xl overflow-hidden group flex flex-col ${featured ? 'md:h-[600px] relative' : ''}`}
    >
      <div className={`relative overflow-hidden ${featured ? 'absolute inset-0 z-0' : 'h-64'}`}>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10"></div>
        <img 
          src={article.imageUrl} 
          alt={article.title} 
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-6 left-6 z-20">
          <span className="px-3 py-1 text-xs font-medium uppercase tracking-wider bg-blue-600 text-white rounded-full">
            {article.category}
          </span>
        </div>
      </div>

      <div className={`relative z-20 flex flex-col flex-grow ${featured ? 'mt-auto p-8 md:p-12' : 'p-6 md:p-8'}`}>
        <div className="flex items-center gap-4 text-xs text-secondary mb-4 font-mono uppercase tracking-wider">
          <span>{article.date}</span>
          <span className="w-1 h-1 rounded-full bg-white/20"></span>
          <span>{article.author}</span>
        </div>
        
        <h3 className={`font-display font-bold mb-4 group-hover:text-blue-400 transition-colors ${featured ? 'text-3xl md:text-5xl leading-tight' : 'text-xl md:text-2xl'}`}>
          {article.title}
        </h3>
        
        <p className={`text-secondary mb-6 ${featured ? 'text-lg max-w-2xl' : 'text-sm'}`}>
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
              <div className="pt-4 border-t border-white/10 mt-2 mb-6">
                <div className="markdown-body prose prose-invert prose-blue max-w-none">
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
          className="mt-auto inline-flex items-center gap-2 text-sm font-medium text-white hover:text-blue-400 transition-colors self-start"
        >
          {isExpanded ? (
            <>Cerrar <X size={16} /></>
          ) : (
            <>Leer más <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" /></>
          )}
        </button>
      </div>
    </motion.article>
  );
}
