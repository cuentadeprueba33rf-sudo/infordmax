import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, ChevronDown, ChevronUp, Newspaper } from 'lucide-react';

import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { newsData, NewsCategory, NewsArticle } from '../data/news';

const categories: (NewsCategory | 'Todas')[] = [
  'Todas',
  'Política',
  'Internacional',
  'Ciencia y Tecnología',
  'Medicina',
  'Deportes',
  'Entretenimiento',
  'Noticias Locales'
];

export default function NewsSystem() {
  const [activeCategory, setActiveCategory] = useState<NewsCategory | 'Todas'>('Todas');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedArticle, setExpandedArticle] = useState<string | null>(null);

  useEffect(() => {
    const handleSetCategory = (e: any) => {
      if (e.detail && typeof e.detail === 'string') {
        setActiveCategory(e.detail as any);
      }
    };
    window.addEventListener('setNewsCategory', handleSetCategory);
    return () => window.removeEventListener('setNewsCategory', handleSetCategory);
  }, []);

  const filteredNews = newsData.filter(article => {
    const matchesCategory = activeCategory === 'Todas' || article.category === activeCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="flex flex-col h-full">
      {/* Header & Categories */}
      <div className="mb-8 space-y-6">
        <div className="flex items-center gap-3 mb-2">
          <Newspaper size={18} className="text-white/40" />
          <h2 className="text-xl font-medium tracking-tight">Global Insights</h2>
        </div>

        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30 w-4 h-4" />
          <input 
            id="news-search"
            type="text" 
            placeholder="Search news..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-white/5 border-none liquid-glass py-3.5 pl-12 pr-6 text-white text-sm font-sans placeholder:text-white/20 focus:bg-white/10 transition-all rounded-2xl outline-none ring-0 focus:ring-1 focus:ring-white/30"
          />
        </div>

        <div className="flex flex-wrap gap-2">
          {categories.map(category => (
            <button
               key={category}
               onClick={() => setActiveCategory(category)}
               className={`px-4 py-2 text-[10px] font-medium uppercase tracking-widest transition-all rounded-full border border-white/5 ${
                 activeCategory === category 
                   ? 'bg-white text-black bg-opacity-100' 
                   : 'bg-white/5 text-white/50 hover:bg-white/10 hover:text-white'
               }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* News List */}
      <div className="flex-1 space-y-4">
        {filteredNews.map((article, idx) => (
          <NewsCard 
            key={article.id} 
            article={article} 
            idx={idx}
            isExpanded={expandedArticle === article.id}
            onToggle={() => setExpandedArticle(expandedArticle === article.id ? null : article.id)}
          />
        ))}
        
        {filteredNews.length === 0 && (
          <div className="py-20 text-center text-white/20 text-xs uppercase tracking-widest liquid-glass rounded-3xl">
            No entries found.
          </div>
        )}
      </div>
    </div>
  );
}

function NewsCard({ article, idx, isExpanded, onToggle }: { article: NewsArticle, idx: number, isExpanded: boolean, onToggle: () => void }) {
  return (
    <motion.article 
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: idx * 0.1 }}
      className="liquid-glass rounded-3xl p-6 group transition-all duration-500 hover:bg-white/[0.03]"
    >
      <div className="flex items-start gap-4 mb-4">
        <div className="shrink-0 w-16 h-16 rounded-2xl overflow-hidden bg-white/5">
          <img 
            src={article.imageUrl} 
            alt={article.title} 
            className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="text-[9px] font-bold uppercase tracking-wider text-white/30">{article.category}</span>
            <div className="w-[3px] h-[3px] rounded-full bg-white/10" />
            <span className="text-[9px] font-medium uppercase tracking-wider text-white/20">{article.date}</span>
          </div>
          <h3 className="text-lg font-medium tracking-tight text-white/90 leading-snug group-hover:text-white transition-colors">
            {article.title}
          </h3>
        </div>
      </div>

      <p className="text-sm text-white/80 font-light leading-relaxed mb-4">
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
            <div className="pt-6 border-t border-white/10 mt-6 mb-6">
              <div className="markdown-body text-sm text-white/90">
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
        className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-white/50 hover:text-white transition-colors"
      >
        {isExpanded ? (
          <>Minimize <ChevronUp size={12} /></>
        ) : (
          <>Read Full Report <ChevronDown size={12} /></>
        )}
      </button>
    </motion.article>
  );
}
