import SEOHead from '../components/SEOHead';
import Footer from '../components/Footer';
import { useState, useEffect } from 'react';
import { Calendar, ArrowLeft, Clock, User, ChevronRight } from 'lucide-react';
import { Link } from 'wouter';
import useResponsiveImage from '../hooks/useResponsiveImage';
import useNewsData from '../hooks/useNewsData';

const NewsPage = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Responsive images for optimal mobile performance
  const warsztatyImage = useResponsiveImage('/images/warsztaty.webp');
  const piknikiImage = useResponsiveImage('/images/pikniki.webp');

  // Load news from CMS
  const { news, loading, error } = useNewsData();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <SEOHead
        title="Aktualności Gimnastyka Dzieci - Obozy, Warsztaty, Wydarzenia | Maszynownia Józefów"
        description="Najnowsze informacje o obozach akrobatycznych, warsztatach gimnastycznych, urodzinach sportowych i wydarzeniach dla dzieci w okolicach Józefowa."
        canonical="/strefagimnastyki/aktualnosci"
      />

      {/* Hero Section */}
      <section
        className="relative min-h-[40vh] bg-gradient-to-br from-gym-yellow via-gym-yellow-light to-gym-orange flex items-center justify-center overflow-hidden"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(0,0,0,.05) 35px, rgba(0,0,0,.05) 70px)`,
          }}></div>
        </div>

        <div className="relative z-10 text-center text-white px-4 py-16">
          <h1 className="text-5xl lg:text-7xl font-bebas font-bold mb-4 drop-shadow-lg">
            Aktualności
          </h1>
          <p className="text-xl lg:text-2xl font-light opacity-90">
            Bądź na bieżąco ze Strefą Gimnastyki
          </p>

          {/* Back to main page */}
          <Link href="/strefagimnastyki">
            <a className="inline-flex items-center gap-2 mt-8 text-white hover:text-gym-cream transition-colors">
              <ArrowLeft className="h-5 w-5" />
              <span className="font-medium">Powrót do strony głównej</span>
            </a>
          </Link>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Loading State */}
          {loading && (
            <div className="text-center py-20">
              <div className="inline-block animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-gym-yellow"></div>
              <p className="mt-4 text-gray-600 font-medium">Ładowanie aktualności...</p>
            </div>
          )}

          {/* Error State */}
          {error && (
            <div className="text-center py-20">
              <p className="text-red-600 font-medium">Błąd ładowania aktualności: {error}</p>
            </div>
          )}

          {/* No News State */}
          {!loading && !error && news.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-600 text-xl">Brak aktualności do wyświetlenia.</p>
              <p className="text-gray-500 mt-2">Wkrótce pojawią się tu nowe informacje!</p>
            </div>
          )}

          {/* News Grid */}
          {!loading && !error && news.length > 0 && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {news.map((article) => (
              <article
                key={article.id}
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                {/* Article Image */}
                <div className="aspect-video overflow-hidden bg-gym-cream">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Article Content */}
                <div className="p-6">
                  {/* Category Badge */}
                  <span className="inline-block px-3 py-1 bg-gym-yellow/20 text-[#a16207] rounded-full text-xs font-bold uppercase tracking-wide mb-3">
                    {article.category}
                  </span>

                  {/* Title */}
                  <h2 className="text-2xl font-bebas font-bold text-gym-navy-trust mb-3 group-hover:text-gym-yellow transition-colors">
                    {article.title}
                  </h2>

                  {/* Meta Info */}
                  <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {new Date(article.date).toLocaleDateString('pl-PL', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric'
                      })}
                    </span>
                    <span className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      {article.author}
                    </span>
                  </div>

                  {/* Excerpt */}
                  <p className="text-gray-700 mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>

                  {/* Read More */}
                  <button className="inline-flex items-center gap-2 text-[#a16207] font-medium hover:text-gym-yellow transition-colors group/btn">
                    <span>Czytaj więcej</span>
                    <ChevronRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </article>
              ))}
            </div>
          )}

          {/* Load More Button - only show when we have news */}
          {!loading && !error && news.length > 6 && (
            <div className="text-center mt-12">
              <button className="px-8 py-4 bg-gym-yellow text-white font-bold rounded-full hover:bg-gym-yellow-deep transition-colors shadow-lg hover:shadow-xl">
                Załaduj więcej aktualności
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <Footer variant="gym" />
    </>
  );
};

export default NewsPage;