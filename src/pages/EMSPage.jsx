import SEOHead from '../components/SEOHead';
import { useState, useEffect } from 'react';

export default function EMSPage() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <SEOHead
        title="Trening EMS Józefów - Maszynownia | Skuteczny trening w 30 minut"
        description="Dołącz do rewolucji w fitnessie. Trening EMS w Maszynowni to gwarancja szybkich efektów, oszczędność czasu i bezpieczeństwo. Umów trening próbny!"
      />

      {/* Header Navigation */}
      <header className={`sticky top-0 z-50 backdrop-blur-sm border-b border-ems-gold/20 transition-colors duration-300 ${
        isScrolled ? 'bg-ems-black/95' : 'bg-black/95'
      }`}>
        <div className="max-w-7xl mx-auto px-6 py-1">
          <div className="flex items-center justify-between">
            {/* Back Arrow + Logo EMS po lewej */}
            <div className="flex items-center gap-4">
              <a href="/" className="text-ems-gold hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"/>
                </svg>
              </a>
              <a href="/" className="flex items-center">
              <img
                src="/images/logo-ems.webp"
                alt="EMS Logo"
                className="h-64 w-auto -my-24 -translate-y-3"
              />
              </a>
            </div>

            {/* Nawigacja po prawej */}
            <div className="hidden md:flex items-center gap-8">
              <button
                onClick={() => scrollToSection('o-nas')}
                className="text-white hover:text-ems-gold transition-colors uppercase tracking-wider"
              >
                O nas
              </button>
              <button
                onClick={() => scrollToSection('cennik')}
                className="text-white hover:text-ems-gold transition-colors uppercase tracking-wider"
              >
                Cennik
              </button>
              <button
                onClick={() => scrollToSection('kontakt')}
                className="text-white hover:text-ems-gold transition-colors uppercase tracking-wider"
              >
                Kontakt
              </button>

              {/* Separacja */}
              <div className="w-px h-6 bg-ems-gold/30"></div>

              {/* Social Media */}
              <div className="flex items-center gap-4">
                <a
                  href="https://www.facebook.com/maszynowniatreningems"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-ems-gold transition-colors"
                  title="Facebook"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/maszynownia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-ems-gold transition-colors"
                  title="Instagram"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button className="text-white hover:text-ems-gold">
                <span className="text-xl">☰</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Fullscreen Hero Section */}
      <section className="h-[calc(100vh-5rem)] relative flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-right transform scale-x-[-1] filter brightness-110 contrast-125 saturate-110"
          style={{ backgroundImage: 'url(/images/hero-ems-new.jpg)' }}
        ></div>

        {/* Subtle overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-ems-black/30 via-ems-black/10 to-transparent"></div>

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white px-6 max-w-4xl ml-auto translate-x-8">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-light uppercase mb-6 title-dosis">
            Skuteczny trening dla dorosłych w 30 minut
          </h1>
          <p className="text-lg md:text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Trening EMS to rewolucyjna metoda, która pozwala osiągnąć rezultaty tradycyjnego 90-minutowego treningu w zaledwie 30 minut.
          </p>
          <button
            onClick={() => scrollToSection('kontakt')}
            className="border-2 border-ems-gold text-white uppercase tracking-wider px-12 py-4 font-medium transition-all duration-300 hover:bg-ems-gold hover:text-ems-black rounded-full text-lg lg:px-16 lg:py-6"
          >
            Zacznij swój trening już dziś
          </button>
        </div>
      </section>

      {/* Czym jest EMS */}
      <section id="o-nas" className="py-16 lg:py-20 px-6 bg-ems-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl lg:text-6xl font-light uppercase text-center mb-12 text-ems-gold title-dosis">
            Czym jest trening EMS?
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-ems-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-ems-gold text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-medium mb-4 text-white uppercase subtitle-dosis">Elektrostymulacja</h3>
              <p className="text-white/80 text-dosis">
                Bezpieczne impulsy elektryczne aktywują 90% mięśni jednocześnie,
                maksymalizując efektywność każdego ruchu.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-ems-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-ems-gold text-2xl">⏱️</span>
              </div>
              <h3 className="text-xl font-medium mb-4 text-white uppercase subtitle-dosis">Oszczędność czasu</h3>
              <p className="text-white/80 text-dosis">
                30 minut treningu EMS = 90 minut tradycyjnego treningu siłowego.
                Idealny dla zapracowanych osób.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-ems-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-ems-gold text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-medium mb-4 text-white uppercase subtitle-dosis">Indywidualne podejście</h3>
              <p className="text-white/80 text-dosis">
                Trening dla każdego i indywidualne podejście.
                Pracujemy w studio 1:1 z pełnym wsparciem trenera.
              </p>
            </div>
          </div>

          {/* Dodatkowe info z client feedback */}
          <div className="text-center max-w-4xl mx-auto">
            <p className="text-white/90 text-lg mb-6 text-dosis">
              <strong className="text-ems-gold">Maszynownia to najstarsze studio EMS w Józefowie</strong> - 8 lat doświadczenia na rynku.
              Jako jedyni w okolicy oferujemy trening na profesjonalnym, bezprzewodowym sprzęcie EMS.
            </p>
          </div>
        </div>
      </section>

      {/* Tabela porównawcza EMS vs Siłownia */}
      <section className="py-16 lg:py-20 px-6 bg-ems-stone">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl lg:text-6xl font-light uppercase text-center mb-12 text-ems-gold title-dosis">
            EMS vs Tradycyjna siłownia
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full bg-ems-black/30 rounded-xl border border-ems-gold/20 overflow-hidden">
              <thead>
                <tr className="bg-ems-gold/10">
                  <th className="px-6 py-4 text-left text-lg font-semibold text-white border-r border-ems-gold/20">Cecha</th>
                  <th className="px-6 py-4 text-center text-lg font-semibold text-ems-gold border-r border-ems-gold/20">Trening EMS</th>
                  <th className="px-6 py-4 text-center text-lg font-semibold text-stone-300">Trening na siłowni</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-700">
                <tr className="hover:bg-ems-black/20 transition-colors">
                  <td className="px-6 py-4 font-medium text-white border-r border-ems-gold/20">Czas treningu</td>
                  <td className="px-6 py-4 text-center text-ems-gold font-semibold border-r border-ems-gold/20">30 minut</td>
                  <td className="px-6 py-4 text-center text-stone-300">90 minut</td>
                </tr>
                <tr className="hover:bg-ems-black/20 transition-colors">
                  <td className="px-6 py-4 font-medium text-white border-r border-ems-gold/20">Widoczne rezultaty</td>
                  <td className="px-6 py-4 text-center text-ems-gold font-semibold border-r border-ems-gold/20">po 4-6 sesjach</td>
                  <td className="px-6 py-4 text-center text-stone-300">po 15-20 sesjach</td>
                </tr>
                <tr className="hover:bg-ems-black/20 transition-colors">
                  <td className="px-6 py-4 font-medium text-white border-r border-ems-gold/20">Optymalna częstotliwość treningów</td>
                  <td className="px-6 py-4 text-center text-ems-gold font-semibold border-r border-ems-gold/20">max 2-3 w tygodniu</td>
                  <td className="px-6 py-4 text-center text-stone-300">4-5 dni w tygodniu</td>
                </tr>
                <tr className="hover:bg-ems-black/20 transition-colors">
                  <td className="px-6 py-4 font-medium text-white border-r border-ems-gold/20">Optymalny czas sesji treningowej</td>
                  <td className="px-6 py-4 text-center text-ems-gold font-semibold border-r border-ems-gold/20">30 minut</td>
                  <td className="px-6 py-4 text-center text-stone-300">30-90 minut</td>
                </tr>
                <tr className="hover:bg-ems-black/20 transition-colors">
                  <td className="px-6 py-4 font-medium text-white border-r border-ems-gold/20">Ryzyko kontuzji</td>
                  <td className="px-6 py-4 text-center text-ems-gold font-semibold border-r border-ems-gold/20">brak</td>
                  <td className="px-6 py-4 text-center text-stone-300">wysokie</td>
                </tr>
                <tr className="hover:bg-ems-black/20 transition-colors">
                  <td className="px-6 py-4 font-medium text-white border-r border-ems-gold/20">Obciążenie stawów</td>
                  <td className="px-6 py-4 text-center text-ems-gold font-semibold border-r border-ems-gold/20">brak</td>
                  <td className="px-6 py-4 text-center text-stone-300">wysokie</td>
                </tr>
                <tr className="hover:bg-ems-black/20 transition-colors">
                  <td className="px-6 py-4 font-medium text-white border-r border-ems-gold/20">Ilość spalonych kalorii podczas sesji</td>
                  <td className="px-6 py-4 text-center text-ems-gold font-semibold border-r border-ems-gold/20">nawet 1200 kcal</td>
                  <td className="px-6 py-4 text-center text-stone-300">do 500 kcal</td>
                </tr>
                <tr className="hover:bg-ems-black/20 transition-colors">
                  <td className="px-6 py-4 font-medium text-white border-r border-ems-gold/20">Trening mięśni posturalnych (głębokich)</td>
                  <td className="px-6 py-4 text-center text-ems-gold font-semibold border-r border-ems-gold/20">zawsze</td>
                  <td className="px-6 py-4 text-center text-stone-300">w wybranych ćwiczeniach</td>
                </tr>
                <tr className="hover:bg-ems-black/20 transition-colors">
                  <td className="px-6 py-4 font-medium text-white border-r border-ems-gold/20">Przyrost mięśni posturalnych</td>
                  <td className="px-6 py-4 text-center text-ems-gold font-semibold border-r border-ems-gold/20">do 5 razy szybciej</td>
                  <td className="px-6 py-4 text-center text-stone-300">standardowo</td>
                </tr>
                <tr className="hover:bg-ems-black/20 transition-colors">
                  <td className="px-6 py-4 font-medium text-white border-r border-ems-gold/20">Przyspieszenie metabolizmu</td>
                  <td className="px-6 py-4 text-center text-ems-gold font-semibold border-r border-ems-gold/20">wysokie</td>
                  <td className="px-6 py-4 text-center text-stone-300">niskie</td>
                </tr>
                <tr className="hover:bg-ems-black/20 transition-colors">
                  <td className="px-6 py-4 font-medium text-white border-r border-ems-gold/20">Redukcja cellulitu</td>
                  <td className="px-6 py-4 text-center text-ems-gold font-semibold border-r border-ems-gold/20">widoczna w krótkim czasie</td>
                  <td className="px-6 py-4 text-center text-stone-300">długotrwały proces</td>
                </tr>
                <tr className="hover:bg-ems-black/20 transition-colors">
                  <td className="px-6 py-4 font-medium text-white border-r border-ems-gold/20">Aktywacja mięśni</td>
                  <td className="px-6 py-4 text-center text-ems-gold font-semibold border-r border-ems-gold/20">90% mięśni</td>
                  <td className="px-6 py-4 text-center text-stone-300">40% mięśni</td>
                </tr>
                <tr className="hover:bg-ems-black/20 transition-colors">
                  <td className="px-6 py-4 font-medium text-white border-r border-ems-gold/20">Bezpieczeństwo stawów</td>
                  <td className="px-6 py-4 text-center text-ems-gold font-semibold border-r border-ems-gold/20">maksymalne</td>
                  <td className="px-6 py-4 text-center text-stone-300">ryzyko kontuzji</td>
                </tr>
                <tr className="hover:bg-ems-black/20 transition-colors">
                  <td className="px-6 py-4 font-medium text-white border-r border-ems-gold/20">Poprawa elastyczności skóry</td>
                  <td className="px-6 py-4 text-center text-ems-gold font-semibold border-r border-ems-gold/20">bardzo szybko odczuwalna</td>
                  <td className="px-6 py-4 text-center text-stone-300">długotrwały proces</td>
                </tr>
                <tr className="hover:bg-ems-black/20 transition-colors">
                  <td className="px-6 py-4 font-medium text-white border-r border-ems-gold/20">Utrata tkanki tłuszczowej</td>
                  <td className="px-6 py-4 text-center text-ems-gold font-semibold border-r border-ems-gold/20">do 3 razy szybciej</td>
                  <td className="px-6 py-4 text-center text-stone-300">standardowo</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Cennik */}
      <section id="cennik" className="py-16 lg:py-20 px-6 bg-ems-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl lg:text-6xl font-light uppercase text-center mb-12 text-ems-gold title-dosis">
            Cennik
          </h2>

          {/* Treningi Pojedyncze */}
          <div className="mb-12">
            <h3 className="text-2xl font-medium mb-6 text-white uppercase subtitle-dosis text-center">
              Treningi Pojedyncze
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-ems-black/50 p-6 rounded-lg border border-ems-gold/20 text-center">
                <h4 className="text-ems-gold text-lg font-medium mb-2">Trening intro</h4>
                <p className="text-3xl font-bold text-white mb-2">79 zł</p>
                <p className="text-white/70 text-sm">1 trening wprowadzający</p>
              </div>
              <div className="bg-ems-black/50 p-6 rounded-lg border border-ems-gold/20 text-center">
                <h4 className="text-ems-gold text-lg font-medium mb-2">Trening jednorazowy</h4>
                <p className="text-3xl font-bold text-white mb-2">160 zł</p>
                <p className="text-white/70 text-sm">Pojedynczy trening</p>
              </div>
              <div className="bg-ems-black/50 p-6 rounded-lg border border-ems-gold/20 text-center">
                <h4 className="text-ems-gold text-lg font-medium mb-2">Strój treningowy EMS</h4>
                <p className="text-3xl font-bold text-white mb-2">200 zł</p>
                <p className="text-white/70 text-sm">Profesjonalny strój EMS</p>
              </div>
            </div>
          </div>

          {/* Karnety */}
          <div>
            <h3 className="text-2xl font-medium mb-6 text-white uppercase subtitle-dosis text-center">
              Karnety
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-ems-black/50 p-6 rounded-lg border border-ems-gold/20 text-center">
                <h4 className="text-ems-gold text-lg font-medium mb-2">Standard</h4>
                <p className="text-3xl font-bold text-white mb-2">600 zł</p>
                <p className="text-white/70 text-sm mb-2">4 treningi</p>
                <p className="text-ems-gold text-sm">150 zł za trening</p>
              </div>
              <div className="bg-ems-black/50 p-6 rounded-lg border-2 border-ems-gold text-center relative">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-ems-gold text-black px-3 py-1 text-xs font-bold rounded">NAJPOPULARNIEJSZY</span>
                </div>
                <h4 className="text-ems-gold text-lg font-medium mb-2">Premium</h4>
                <p className="text-3xl font-bold text-white mb-2">1120 zł</p>
                <p className="text-white/70 text-sm mb-2">8 treningów</p>
                <p className="text-ems-gold text-sm">140 zł za trening</p>
              </div>
              <div className="bg-ems-black/50 p-6 rounded-lg border border-ems-gold/20 text-center">
                <h4 className="text-ems-gold text-lg font-medium mb-2">Elite</h4>
                <p className="text-3xl font-bold text-white mb-2">1560 zł</p>
                <p className="text-white/70 text-sm mb-2">12 treningów</p>
                <p className="text-ems-gold text-sm">130 zł za trening</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Poznaj nasz zespół */}
      <section id="zespol" className="py-16 lg:py-20 px-6 bg-ems-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl lg:text-6xl font-light uppercase text-center mb-12 text-ems-gold title-dosis">
            Poznaj nasz zespół
          </h2>
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-white/90 text-lg text-dosis mb-8">
              Nasz doświadczony zespół trenerów zapewni Ci profesjonalną opiekę
              i indywidualne podejście podczas każdego treningu EMS.
            </p>
            <p className="text-ems-gold text-xl subtitle-dosis">
              Skontaktuj się z nami, aby umówić się na trening próbny!
            </p>
          </div>
        </div>
      </section>

      {/* Kontakt */}
      <section id="kontakt" className="py-16 lg:py-20 px-6 bg-ems-stone">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl lg:text-6xl font-light uppercase text-center mb-12 text-ems-gold title-dosis">
            Kontakt
          </h2>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Informacje kontaktowe */}
            <div>
              <h3 className="text-2xl font-medium mb-6 text-white uppercase subtitle-dosis">
                Skontaktuj się z nami
              </h3>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <span className="text-ems-gold">📞</span>
                  <a href="tel:+48696376377" className="text-white/90 hover:text-ems-gold transition-colors">
                    +48 696 376 377
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-ems-gold">✉️</span>
                  <a href="mailto:maszynowniaems@gmail.com" className="text-white/90 hover:text-ems-gold transition-colors">
                    maszynowniaems@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-ems-gold">📍</span>
                  <span className="text-white/90">
                    Generała Sikorskiego 113<br />
                    Józefów, Warszawa
                  </span>
                </div>
              </div>

              {/* Social Media */}
              <div>
                <h4 className="text-lg font-medium mb-4 text-white">Znajdź nas w social media</h4>
                <div className="flex gap-4">
                  <a
                    href="https://www.facebook.com/maszynowniatreningems"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-ems-gold/20 p-3 rounded-lg hover:bg-ems-gold/30 transition-colors"
                  >
                    <span className="text-ems-gold text-xl">📘</span>
                  </a>
                  <a
                    href="https://www.instagram.com/maszynownia"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-ems-gold/20 p-3 rounded-lg hover:bg-ems-gold/30 transition-colors"
                  >
                    <span className="text-ems-gold text-xl">📷</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Mapa */}
            <div>
              <h3 className="text-2xl font-medium mb-6 text-white uppercase subtitle-dosis">
                Lokalizacja
              </h3>
              <div className="bg-stone-800 rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2448.7362947845826!2d21.227563!3d52.133889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecce5a7e3e1d9%3A0x8b3e9a5c9f8b2a1e!2sGenerała%20Sikorskiego%20113%2C%2005-410%20Józefów!5e0!3m2!1spl!2spl!4v1630000000000!5m2!1spl!2spl"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Lokalizacja Maszynownia EMS"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}