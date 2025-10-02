import { useEffect, useState } from 'react';
import { useRoute, Link } from 'wouter';
import { ArrowLeft, Calendar, User } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import Footer from '../components/Footer';
import useNewsData from '../hooks/useNewsData';

const SingleNewsPage = () => {
  const [, params] = useRoute('/strefagimnastyki/aktualnosci/:slug');
  const { news, loading, error } = useNewsData();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    if (news.length > 0 && params?.slug) {
      const found = news.find(item => item.id === params.slug);
      setArticle(found);
    }
  }, [news, params]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-gym-yellow"></div>
          <p className="mt-4 text-gray-600 font-medium">Ładowanie...</p>
        </div>
      </div>
    );
  }

  if (error || !article) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center px-4">
          <h1 className="text-4xl font-bebas text-gray-800 mb-4">Nie znaleziono artykułu</h1>
          <p className="text-gray-600 mb-8">Artykuł o podanym adresie nie istnieje.</p>
          <Link href="/strefagimnastyki/aktualnosci">
            <a className="inline-flex items-center gap-2 px-6 py-3 bg-gym-yellow text-white font-bold rounded-full hover:bg-gym-yellow-deep transition-colors">
              <ArrowLeft className="h-5 w-5" />
              Powrót do aktualności
            </a>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <SEOHead
        title={`${article.title} | Aktualności Strefa Gimnastyki`}
        description={article.excerpt}
        canonical={`/strefagimnastyki/aktualnosci/${article.id}`}
      />

      {/* Hero Section with Image */}
      <section className="relative bg-gradient-to-br from-gym-yellow via-gym-yellow-light to-gym-orange">
        <div className="max-w-5xl mx-auto px-4 py-12">
          {/* Back Button */}
          <Link href="/strefagimnastyki/aktualnosci">
            <a className="inline-flex items-center gap-2 text-white hover:text-gym-cream transition-colors mb-8">
              <ArrowLeft className="h-5 w-5" />
              <span className="font-medium">Powrót do aktualności</span>
            </a>
          </Link>

          {/* Category Badge */}
          <span className="inline-block px-4 py-2 bg-white/20 text-white rounded-full text-sm font-bold uppercase tracking-wide mb-4">
            {article.category}
          </span>

          {/* Title */}
          <h1 className="text-4xl lg:text-6xl font-bebas font-bold text-white mb-6 leading-tight">
            {article.title}
          </h1>

          {/* Meta Info */}
          <div className="flex flex-wrap gap-6 text-white/90 mb-8">
            <span className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              {new Date(article.date).toLocaleDateString('pl-PL', {
                day: 'numeric',
                month: 'long',
                year: 'numeric'
              })}
            </span>
            <span className="flex items-center gap-2">
              <User className="h-5 w-5" />
              {article.author}
            </span>
          </div>

          {/* Featured Image */}
          {article.image && (
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-auto object-cover"
              />
            </div>
          )}
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          {/* Excerpt */}
          <div className="text-xl text-gray-700 font-medium mb-8 pb-8 border-b border-gray-200">
            {article.excerpt}
          </div>

          {/* Main Content - Markdown formatted */}
          <div className="prose prose-lg max-w-none">
            <div className="whitespace-pre-wrap text-gray-800 leading-relaxed">
              {article.content.split('\n').map((line, index) => {
                // Handle headings
                if (line.startsWith('### ')) {
                  return <h3 key={index} className="text-2xl font-bebas font-bold text-gym-navy-trust mt-8 mb-4">{line.replace('### ', '')}</h3>;
                }
                if (line.startsWith('## ')) {
                  return <h2 key={index} className="text-3xl font-bebas font-bold text-gym-navy-trust mt-10 mb-6">{line.replace('## ', '')}</h2>;
                }
                if (line.startsWith('# ')) {
                  return <h1 key={index} className="text-4xl font-bebas font-bold text-gym-navy-trust mt-12 mb-6">{line.replace('# ', '')}</h1>;
                }

                // Handle bullet points
                if (line.startsWith('- ')) {
                  return (
                    <li key={index} className="ml-6 mb-2 text-gray-800">
                      {line.replace('- ', '')}
                    </li>
                  );
                }

                // Handle bold text **text**
                if (line.includes('**')) {
                  const parts = line.split('**');
                  return (
                    <p key={index} className="mb-4">
                      {parts.map((part, i) =>
                        i % 2 === 1 ? <strong key={i} className="font-bold text-gym-navy-trust">{part}</strong> : part
                      )}
                    </p>
                  );
                }

                // Regular paragraph
                if (line.trim()) {
                  return <p key={index} className="mb-4">{line}</p>;
                }

                return <br key={index} />;
              })}
            </div>
          </div>

          {/* Back to News Button */}
          <div className="mt-16 pt-8 border-t border-gray-200">
            <Link href="/strefagimnastyki/aktualnosci">
              <a className="inline-flex items-center gap-2 px-8 py-4 bg-gym-yellow text-white font-bold rounded-full hover:bg-gym-yellow-deep transition-colors shadow-lg hover:shadow-xl">
                <ArrowLeft className="h-5 w-5" />
                Powrót do aktualności
              </a>
            </Link>
          </div>
        </div>
      </section>

      <Footer variant="gym" />
    </>
  );
};

export default SingleNewsPage;
