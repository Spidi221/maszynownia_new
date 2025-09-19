import SEOHead from '../components/SEOHead';
import Footer from '../components/Footer';
import { useState, useEffect, useMemo } from 'react';
import { Calendar, ArrowLeft, Clock, User, ChevronRight } from 'lucide-react';
import { Link } from 'wouter';
import useResponsiveImage from '../hooks/useResponsiveImage';

const NewsPage = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Responsive images for optimal mobile performance
  const warsztatyImage = useResponsiveImage('/images/warsztaty.webp');
  const piknikiImage = useResponsiveImage('/images/pikniki.webp');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Przykładowe aktualności
  const news = useMemo(() => [
    {
      id: 1,
      title: "Nowe zajęcia akrobatyczne dla młodzieży 12+",
      date: "2025-01-15",
      author: "Klaudia Kołodziejska",
      category: "Zajęcia",
      excerpt: "Z radością informujemy o uruchomieniu nowej grupy zaawansowanej dla młodzieży powyżej 12 roku życia. Zajęcia będą prowadzone w Józefowie.",
      content: "Zapraszamy wszystkich chętnych w wieku 12+ na nowe zajęcia akrobatyczne. Program obejmuje naukę zaawansowanych elementów gimnastycznych, salt, przerzutów i elementów na trampolinie. Zajęcia prowadzi doświadczona trenerka Klaudia Kołodziejska.",
      image: warsztatyImage
    },
    {
      id: 2,
      title: "Zapisy na obozy letnie 2025 już otwarte!",
      date: "2025-01-10",
      author: "Anna Błaszkiewicz",
      category: "Obozy",
      excerpt: "Ruszają zapisy na wakacyjne obozy akrobatyczne. Liczba miejsc ograniczona - nie czekaj!",
      content: "Obozy akrobatyczne to doskonała okazja do rozwijania umiejętności gimnastycznych w wakacyjnej atmosferze. Pod okiem doświadczonej kadry, dzieci będą miały okazję nauczyć się nowych elementów, poznać rówieśników i świetnie się bawić. Turnusy tygodniowe, grupy maksymalnie 16-osobowe.",
      image: "/images/obozy.webp"
    },
    {
      id: 3,
      title: "Warsztaty gimnastyczne - weekend pełen akrobacji",
      date: "2025-01-05",
      author: "Klaudia Nowicka",
      category: "Warsztaty",
      excerpt: "Już 20-21 stycznia zapraszamy na intensywne warsztaty gimnastyczne. Dwa dni pełne nauki i zabawy!",
      content: "Warsztaty to intensywny weekend treningów, podczas którego dzieci będą miały okazję nauczyć się nowych elementów akrobatycznych. W programie: rozgrzewka, nauka podstawowych i zaawansowanych elementów, ćwiczenia na równoważni i trampolinie.",
      image: piknikiImage
    },
    {
      id: 4,
      title: "Nowa lokalizacja w Michałowicach - już wkrótce!",
      date: "2024-12-28",
      author: "Maszynownia Team",
      category: "Lokalizacje",
      excerpt: "Planujemy otwarcie nowej sali treningowej w Michałowicach. Szczegóły już wkrótce!",
      content: "Z przyjemnością informujemy, że pracujemy nad otwarciem nowej lokalizacji Strefy Gimnastyki w Michałowicach. Nowa sala będzie w pełni wyposażona w profesjonalny sprzęt gimnastyczny. Planowane otwarcie: marzec 2025.",
      image: "/images/placowki.webp"
    },
    {
      id: 5,
      title: "Świąteczne zajęcia pokazowe - wielki sukces!",
      date: "2024-12-20",
      author: "Klaudia Kołodziejska",
      category: "Wydarzenia",
      excerpt: "Dziękujemy wszystkim za udział w świątecznych pokazach gimnastycznych. Było magicznie!",
      content: "Świąteczne pokazy naszych podopiecznych były prawdziwym sukcesem! Dzieci zaprezentowały swoje umiejętności przed rodzicami i bliskimi, pokazując efekty ciężkiej pracy przez cały semestr. Gratulujemy wszystkim uczestnikom!",
      image: "/images/urodziny.webp"
    }
  ], [warsztatyImage, piknikiImage]);

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

          {/* Load More Button */}
          <div className="text-center mt-12">
            <button className="px-8 py-4 bg-gym-yellow text-white font-bold rounded-full hover:bg-gym-yellow-deep transition-colors shadow-lg hover:shadow-xl">
              Załaduj więcej aktualności
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gradient-to-r from-gym-yellow to-gym-orange">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bebas font-bold text-white mb-4">
            Bądź na bieżąco!
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Zapisz się do naszego newslettera i otrzymuj najnowsze informacje o zajęciach, warsztatach i promocjach.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Twój adres email"
              className="flex-1 px-6 py-3 rounded-full bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-white/30"
            />
            <button className="px-8 py-3 bg-white text-gym-yellow font-bold rounded-full hover:bg-gym-cream transition-colors shadow-lg">
              Zapisz się
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer variant="gym" />
    </>
  );
};

export default NewsPage;