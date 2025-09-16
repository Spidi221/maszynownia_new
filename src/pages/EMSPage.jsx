import SEOHead from '../components/SEOHead';
import { useState, useEffect, useRef } from 'react';

export default function EMSPage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [visibleSections, setVisibleSections] = useState(new Set());
  const sectionsRef = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set([...prev, entry.target.id]));
          }
        });
      },
      { threshold: 0.1 }
    );

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sectionsRef.current.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
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

      {/* Premium Header Navigation with Glass Effect */}
      <header className={`sticky top-0 z-50 backdrop-blur-lg border-b transition-all duration-500 ${
        isScrolled
          ? 'bg-ems-black/80 border-ems-gold/30 shadow-2xl shadow-ems-gold/10'
          : 'bg-black/70 border-ems-gold/20'
      }`}>
        <div className="max-w-none 2xl:max-w-[1920px] 3xl:max-w-[2400px] mx-auto px-6 lg:px-12 xl:px-16 2xl:px-24 3xl:px-32 4xl:px-40 py-1">
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
                onClick={() => scrollToSection('comparison')}
                className="text-white hover:text-ems-gold transition-colors uppercase tracking-wider"
              >
                EMS vs Siłownia
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
      <section className="h-[calc(100vh-5rem)] relative overflow-hidden">
        {/* Mobile Background - Right positioned (because of mirror effect) */}
        <div
          className="absolute inset-0 bg-cover transform scale-x-[-1] filter brightness-110 contrast-125 saturate-110 sm:hidden"
          style={{
            backgroundImage: 'url(/images/hero-ems-new.jpg)',
            backgroundPosition: 'right center'
          }}
        ></div>

        {/* Desktop Background - Woman ALWAYS on left edge */}
        <div
          className="absolute inset-0 bg-cover transform scale-x-[-1] filter brightness-110 contrast-125 saturate-110 hidden sm:block"
          style={{
            backgroundImage: 'url(/images/hero-ems-new.jpg)',
            backgroundPosition: '100% center',
            backgroundSize: 'cover'
          }}
        ></div>

        {/* Desktop Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-ems-black/30 via-ems-black/10 to-transparent hidden sm:block"></div>

        {/* Mobile Atmospheric Overlay - Lighter to show background */}
        <div className="absolute inset-0 bg-black/30 sm:hidden"></div>

        {/* Premium Desktop Content with Entrance Animations */}
        <div className="relative z-10 text-center text-white px-6 lg:px-12 xl:px-16 2xl:px-24 3xl:px-32 4xl:px-40 max-w-4xl xl:max-w-5xl 2xl:max-w-6xl 3xl:max-w-7xl 4xl:max-w-8xl ml-auto translate-x-8 lg:translate-x-16 xl:translate-x-4 2xl:translate-x-2 hidden sm:flex sm:items-center sm:justify-center sm:h-full">
          <div>
            <h1 className="text-ems-gold text-3xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-light uppercase mb-6 drop-shadow-lg" style={{color: '#D9BA74', opacity: 1}}>
              Skuteczny trening dla dorosłych w 30 minut
            </h1>
            <p className="hero-subtitle-entrance text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl mb-8 text-ems-pearl/90 max-w-2xl lg:max-w-3xl xl:max-w-4xl 2xl:max-w-5xl mx-auto drop-shadow-md font-light tracking-wide">
              Trening EMS to rewolucyjna metoda, która pozwala osiągnąć rezultaty tradycyjnego 90-minutowego treningu w zaledwie 30 minut.
            </p>
            <button
              onClick={() => scrollToSection('kontakt')}
              className="hero-cta-entrance premium-button text-lg lg:text-xl xl:text-2xl 2xl:text-3xl px-12 py-4 lg:px-16 lg:py-6 xl:px-20 xl:py-7 2xl:px-24 2xl:py-8 font-medium"
            >
              Zacznij swój trening już dziś
            </button>
          </div>
        </div>

        {/* Premium Mobile Content with Glass Effect */}
        <div className="relative z-10 flex flex-col justify-center items-center h-full px-6 text-center text-white sm:hidden">
          <div className="max-w-sm mx-auto space-y-6 glass-card p-6">
            <h1 className="text-2xl font-light uppercase gradient-gold leading-tight drop-shadow-lg">
              Skuteczny trening dla dorosłych w 30 minut
            </h1>
            <p className="text-sm leading-relaxed text-ems-pearl/95 drop-shadow-md tracking-wide">
              Trening EMS to rewolucyjna metoda, która pozwala osiągnąć rezultaty tradycyjnego 90-minutowego treningu w zaledwie 30 minut.
            </p>
            <button
              onClick={() => scrollToSection('kontakt')}
              className="premium-button text-sm px-8 py-3 font-medium"
            >
              Zacznij swój trening już dziś
            </button>
          </div>
        </div>
      </section>

      {/* Premium Czym jest EMS Section */}
      <section
        id="o-nas"
        ref={(el) => (sectionsRef.current[0] = el)}
        className={`py-16 lg:py-20 px-6 section-gradient-dark section-texture ${
          visibleSections.has('o-nas') ? 'section-fade-up in-view' : 'section-fade-up'
        }`}
      >
        <div className="max-w-6xl xl:max-w-7xl 2xl:max-w-[1920px] 3xl:max-w-[2400px] 4xl:max-w-[2800px] mx-auto">
          <h2 className="section-title-premium text-4xl lg:text-6xl xl:text-7xl 2xl:text-8xl text-center mb-16">
            Czym jest trening EMS?
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div
              className="glass-card text-center p-8 card-stagger"
              style={{ '--stagger-index': '0' }}
            >
              <div className="w-20 h-20 bg-gradient-to-br from-ems-gold/30 to-ems-gold/10 rounded-full flex items-center justify-center mx-auto mb-6 icon-float" style={{ '--float-delay': '0' }}>
                <svg className="w-10 h-10 text-ems-gold" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7 2v11h3v9l7-12h-4l4-8z"/>
                </svg>
              </div>
              <h3 className="accent-text-premium text-xl mb-4">Elektrostymulacja</h3>
              <p className="body-premium text-ems-pearl/80">
                Bezpieczne impulsy elektryczne aktywują 90% mięśni jednocześnie,
                maksymalizując efektywność każdego ruchu.
              </p>
            </div>

            <div
              className="glass-card text-center p-8 card-stagger"
              style={{ '--stagger-index': '1' }}
            >
              <div className="w-20 h-20 bg-gradient-to-br from-ems-gold/30 to-ems-gold/10 rounded-full flex items-center justify-center mx-auto mb-6 icon-float" style={{ '--float-delay': '1' }}>
                <svg className="w-10 h-10 text-ems-gold" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/>
                  <path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
                </svg>
              </div>
              <h3 className="accent-text-premium text-xl mb-4">Oszczędność czasu</h3>
              <p className="body-premium text-ems-pearl/80">
                30 minut treningu EMS = 90 minut tradycyjnego treningu siłowego.
                Idealny dla zapracowanych osób.
              </p>
            </div>

            <div
              className="glass-card text-center p-8 card-stagger"
              style={{ '--stagger-index': '2' }}
            >
              <div className="w-20 h-20 bg-gradient-to-br from-ems-gold/30 to-ems-gold/10 rounded-full flex items-center justify-center mx-auto mb-6 icon-float" style={{ '--float-delay': '2' }}>
                <svg className="w-10 h-10 text-ems-gold" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/>
                  <circle cx="12" cy="12" r="3"/>
                </svg>
              </div>
              <h3 className="accent-text-premium text-xl mb-4">Indywidualne podejście</h3>
              <p className="body-premium text-ems-pearl/80">
                Trening dla każdego i indywidualne podejście.
                Pracujemy w studio 1:1 z pełnym wsparciem trenera.
              </p>
            </div>
          </div>

          {/* Detailed EMS Description */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="glass-card p-8 lg:p-12">
              <p className="body-premium text-lg lg:text-xl leading-relaxed text-ems-pearl/90 text-center">
                Trening opierający się na elektrostymulacji mięśni (ang. Electrical Muscle Stimulation), to niezwykle szybko rozwijająca się metoda ćwiczeń, która kompleksowo rozwija cały układ mięśniowy człowieka. Jest doskonałą alternatywą dla siłowni i treningów outdoor, umożliwiającą poprawę całej sylwetki przy maksymalnej oszczędności czasu. Od kilku lat metoda EMS znajduje zastosowanie i przynosi znakomite efekty w fitnessie, fizjoterapii oraz medycynie estetycznej. <strong className="text-ems-gold">Maszynownia to jedyne miejsce w Józefowie i Warszawie, gdzie możesz przekonać się o fantastycznym wpływie treningu EMS na Twoje zdrowie oraz kondycję fizyczną.</strong>
              </p>
            </div>
          </div>

          {/* Premium Info Badge */}
          <div className="text-center max-w-4xl mx-auto">
            <div className="glass-card inline-block px-8 py-6">
              <p className="body-premium text-lg mb-2">
                <strong className="gradient-gold text-xl">Maszynownia to najstarsze studio EMS w Józefowie</strong>
              </p>
              <p className="text-ems-pearl/70">8 lat doświadczenia • Profesjonalny bezprzewodowy sprzęt • Certyfikowani trenerzy</p>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Comparison Table Section */}
      <section
        ref={(el) => (sectionsRef.current[1] = el)}
        className={`py-16 lg:py-20 px-6 lg:px-12 xl:px-16 2xl:px-24 section-gradient-stone ${
          visibleSections.has('comparison') ? 'section-fade-up in-view' : 'section-fade-up'
        }`}
        id="comparison"
      >
        <div className="max-w-6xl xl:max-w-7xl 2xl:max-w-[1920px] 3xl:max-w-[2400px] 4xl:max-w-[2800px] mx-auto">
          <h2 className="section-title-premium text-4xl lg:text-6xl xl:text-7xl 2xl:text-8xl text-center mb-16">
            EMS vs Tradycyjna siłownia
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full premium-table">
              <thead>
                <tr className="bg-gradient-to-r from-ems-gold/20 to-ems-gold/10">
                  <th className="px-6 py-5 text-left text-lg font-medium text-ems-pearl border-r border-ems-gold/30 uppercase tracking-wide">Cecha</th>
                  <th className="px-6 py-5 text-center text-lg font-semibold gradient-gold border-r border-ems-gold/30 uppercase tracking-wider">Trening EMS</th>
                  <th className="px-6 py-5 text-center text-lg font-medium text-stone-300 uppercase tracking-wide">Trening na siłowni</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-ems-gold/10">
                <tr className="table-row-premium hover:bg-ems-gold/10">
                  <td className="px-6 py-4 font-medium text-ems-pearl border-r border-ems-gold/20">Czas treningu</td>
                  <td className="px-6 py-4 text-center text-ems-gold-rich font-semibold border-r border-ems-gold/20">
                    <span className="gradient-gold">30 minut</span>
                  </td>
                  <td className="px-6 py-4 text-center text-stone-400">90 minut</td>
                </tr>
                <tr className="table-row-premium hover:bg-ems-gold/10">
                  <td className="px-6 py-4 font-medium text-ems-pearl border-r border-ems-gold/20">Widoczne rezultaty</td>
                  <td className="px-6 py-4 text-center text-ems-gold-rich font-semibold border-r border-ems-gold/20">
                    <span className="gradient-gold">po 4-6 sesjach</span>
                  </td>
                  <td className="px-6 py-4 text-center text-stone-400">po 15-20 sesjach</td>
                </tr>
                <tr className="table-row-premium hover:bg-ems-gold/10">
                  <td className="px-6 py-4 font-medium text-ems-pearl border-r border-ems-gold/20">Optymalna częstotliwość treningów</td>
                  <td className="px-6 py-4 text-center text-ems-gold-rich font-semibold border-r border-ems-gold/20">
                    <span className="gradient-gold">max 2-3 w tygodniu</span>
                  </td>
                  <td className="px-6 py-4 text-center text-stone-400">4-5 dni w tygodniu</td>
                </tr>
                <tr className="table-row-premium hover:bg-ems-gold/10">
                  <td className="px-6 py-4 font-medium text-ems-pearl border-r border-ems-gold/20">Optymalny czas sesji treningowej</td>
                  <td className="px-6 py-4 text-center text-ems-gold-rich font-semibold border-r border-ems-gold/20">
                    <span className="gradient-gold">30 minut</span>
                  </td>
                  <td className="px-6 py-4 text-center text-stone-400">30-90 minut</td>
                </tr>
                <tr className="table-row-premium hover:bg-ems-gold/10">
                  <td className="px-6 py-4 font-medium text-ems-pearl border-r border-ems-gold/20">Ryzyko kontuzji</td>
                  <td className="px-6 py-4 text-center text-ems-gold-rich font-semibold border-r border-ems-gold/20">
                    <span className="gradient-gold">brak</span>
                  </td>
                  <td className="px-6 py-4 text-center text-stone-400">wysokie</td>
                </tr>
                <tr className="table-row-premium hover:bg-ems-gold/10">
                  <td className="px-6 py-4 font-medium text-ems-pearl border-r border-ems-gold/20">Obciążenie stawów</td>
                  <td className="px-6 py-4 text-center text-ems-gold-rich font-semibold border-r border-ems-gold/20">
                    <span className="gradient-gold">brak</span>
                  </td>
                  <td className="px-6 py-4 text-center text-stone-400">wysokie</td>
                </tr>
                <tr className="table-row-premium hover:bg-ems-gold/10">
                  <td className="px-6 py-4 font-medium text-ems-pearl border-r border-ems-gold/20">Ilość spalonych kalorii podczas sesji</td>
                  <td className="px-6 py-4 text-center text-ems-gold-rich font-semibold border-r border-ems-gold/20">
                    <span className="gradient-gold">nawet 1200 kcal</span>
                  </td>
                  <td className="px-6 py-4 text-center text-stone-400">do 500 kcal</td>
                </tr>
                <tr className="table-row-premium hover:bg-ems-gold/10">
                  <td className="px-6 py-4 font-medium text-ems-pearl border-r border-ems-gold/20">Trening mięśni posturalnych (głębokich)</td>
                  <td className="px-6 py-4 text-center text-ems-gold-rich font-semibold border-r border-ems-gold/20">
                    <span className="gradient-gold">zawsze</span>
                  </td>
                  <td className="px-6 py-4 text-center text-stone-400">w wybranych ćwiczeniach</td>
                </tr>
                <tr className="table-row-premium hover:bg-ems-gold/10">
                  <td className="px-6 py-4 font-medium text-ems-pearl border-r border-ems-gold/20">Przyrost mięśni posturalnych</td>
                  <td className="px-6 py-4 text-center text-ems-gold-rich font-semibold border-r border-ems-gold/20">
                    <span className="gradient-gold">do 5 razy szybciej</span>
                  </td>
                  <td className="px-6 py-4 text-center text-stone-400">standardowo</td>
                </tr>
                <tr className="table-row-premium hover:bg-ems-gold/10">
                  <td className="px-6 py-4 font-medium text-ems-pearl border-r border-ems-gold/20">Przyspieszenie metabolizmu</td>
                  <td className="px-6 py-4 text-center text-ems-gold-rich font-semibold border-r border-ems-gold/20">
                    <span className="gradient-gold">wysokie</span>
                  </td>
                  <td className="px-6 py-4 text-center text-stone-400">niskie</td>
                </tr>
                <tr className="table-row-premium hover:bg-ems-gold/10">
                  <td className="px-6 py-4 font-medium text-ems-pearl border-r border-ems-gold/20">Redukcja cellulitu</td>
                  <td className="px-6 py-4 text-center text-ems-gold-rich font-semibold border-r border-ems-gold/20">
                    <span className="gradient-gold">widoczna w krótkim czasie</span>
                  </td>
                  <td className="px-6 py-4 text-center text-stone-400">długotrwały proces</td>
                </tr>
                <tr className="table-row-premium hover:bg-ems-gold/10">
                  <td className="px-6 py-4 font-medium text-ems-pearl border-r border-ems-gold/20">Aktywacja mięśni</td>
                  <td className="px-6 py-4 text-center text-ems-gold-rich font-semibold border-r border-ems-gold/20">
                    <span className="gradient-gold">90% mięśni</span>
                  </td>
                  <td className="px-6 py-4 text-center text-stone-400">40% mięśni</td>
                </tr>
                <tr className="table-row-premium hover:bg-ems-gold/10">
                  <td className="px-6 py-4 font-medium text-ems-pearl border-r border-ems-gold/20">Bezpieczeństwo stawów</td>
                  <td className="px-6 py-4 text-center text-ems-gold-rich font-semibold border-r border-ems-gold/20">
                    <span className="gradient-gold">maksymalne</span>
                  </td>
                  <td className="px-6 py-4 text-center text-stone-400">ryzyko kontuzji</td>
                </tr>
                <tr className="table-row-premium hover:bg-ems-gold/10">
                  <td className="px-6 py-4 font-medium text-ems-pearl border-r border-ems-gold/20">Poprawa elastyczności skóry</td>
                  <td className="px-6 py-4 text-center text-ems-gold-rich font-semibold border-r border-ems-gold/20">
                    <span className="gradient-gold">bardzo szybko odczuwalna</span>
                  </td>
                  <td className="px-6 py-4 text-center text-stone-400">długotrwały proces</td>
                </tr>
                <tr className="table-row-premium hover:bg-ems-gold/10">
                  <td className="px-6 py-4 font-medium text-ems-pearl border-r border-ems-gold/20">Utrata tkanki tłuszczowej</td>
                  <td className="px-6 py-4 text-center text-ems-gold-rich font-semibold border-r border-ems-gold/20">
                    <span className="gradient-gold">do 3 razy szybciej</span>
                  </td>
                  <td className="px-6 py-4 text-center text-stone-400">standardowo</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Premium Pricing Section */}
      <section
        id="cennik"
        ref={(el) => (sectionsRef.current[2] = el)}
        className={`py-16 lg:py-20 px-6 section-gradient-dark section-texture ${
          visibleSections.has('cennik') ? 'section-fade-up in-view' : 'section-fade-up'
        }`}
      >
        <div className="max-w-6xl xl:max-w-7xl 2xl:max-w-[1920px] 3xl:max-w-[2400px] 4xl:max-w-[2800px] mx-auto">
          <h2 className="section-title-premium text-4xl lg:text-6xl xl:text-7xl 2xl:text-8xl text-center mb-16">
            Cennik
          </h2>

          {/* Premium Single Training Cards */}
          <div className="mb-16">
            <h3 className="accent-text-premium text-2xl mb-8 text-center">
              Treningi Pojedyncze
            </h3>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="pricing-card-premium p-8 text-center card-stagger" style={{ '--stagger-index': '0' }}>
                <h4 className="gradient-gold text-lg font-medium mb-4 uppercase tracking-wide">Trening intro</h4>
                <div className="price-number mb-3">79 zł</div>
                <p className="text-ems-pearl/70 text-sm tracking-wide">1 trening wprowadzający</p>
              </div>
              <div className="pricing-card-premium p-8 text-center card-stagger" style={{ '--stagger-index': '1' }}>
                <h4 className="gradient-gold text-lg font-medium mb-4 uppercase tracking-wide">Trening jednorazowy</h4>
                <div className="price-number mb-3">160 zł</div>
                <p className="text-ems-pearl/70 text-sm tracking-wide">Pojedynczy trening</p>
              </div>
            </div>
          </div>

          {/* Premium Pass Cards */}
          <div>
            <h3 className="accent-text-premium text-2xl mb-8 text-center">
              Karnety
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="pricing-card-premium p-8 text-center card-stagger" style={{ '--stagger-index': '3' }}>
                <h4 className="gradient-gold text-lg font-medium mb-4 uppercase tracking-wide">Standard</h4>
                <div className="price-number mb-3">600 zł</div>
                <p className="text-ems-pearl/70 text-sm mb-2 tracking-wide">4 treningi</p>
                <p className="text-ems-gold-rich text-sm font-medium">150 zł za trening</p>
              </div>
              <div className="pricing-card-premium p-8 text-center card-stagger" style={{ '--stagger-index': '4' }}>
                <h4 className="gradient-gold text-lg font-medium mb-4 uppercase tracking-wide">Premium</h4>
                <div className="price-number mb-3">1120 zł</div>
                <p className="text-ems-pearl/70 text-sm mb-2 tracking-wide">8 treningów</p>
                <p className="text-ems-gold-rich text-sm font-medium">140 zł za trening</p>
              </div>
              <div className="pricing-card-premium p-8 text-center relative border-2 border-ems-gold/50 transform scale-105 card-stagger" style={{ '--stagger-index': '5' }}>
                <div className="popular-badge">
                  NAJPOPULARNIEJSZY
                </div>
                <h4 className="gradient-gold text-lg font-medium mb-4 mt-2 uppercase tracking-wide">Elite</h4>
                <div className="price-number mb-3">1560 zł</div>
                <p className="text-ems-pearl/70 text-sm mb-2 tracking-wide">12 treningów</p>
                <p className="text-ems-gold-rich text-sm font-medium">130 zł za trening</p>
              </div>
            </div>
          </div>

          {/* Premium EMS Outfit Section */}
          <div className="mt-20">
            <h3 className="accent-text-premium text-2xl mb-8 text-center">
              Profesjonalny Strój EMS
            </h3>
            <div className="max-w-md mx-auto">
              <div className="pricing-card-premium p-10 text-center relative border-2 border-ems-gold/30 transform hover:scale-105 transition-all duration-300 card-stagger" style={{ '--stagger-index': '6' }}>
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-ems-gold to-ems-gold-rich text-ems-black px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider">
                    Niezbędny do treningu
                  </span>
                </div>
                <div className="mb-6 mt-4">
                  <svg className="w-16 h-16 mx-auto text-ems-gold mb-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <h4 className="gradient-gold text-xl font-medium mb-6 uppercase tracking-wide">Strój treningowy EMS</h4>
                <div className="price-number mb-6 text-4xl">200 zł</div>
                <div className="space-y-3 mb-6">
                  <p className="text-ems-pearl/90 text-sm tracking-wide">✓ Profesjonalna technologia elektrod</p>
                  <p className="text-ems-pearl/90 text-sm tracking-wide">✓ Materiał oddychający i komfortowy</p>
                  <p className="text-ems-pearl/90 text-sm tracking-wide">✓ Wielorazowego użytku</p>
                  <p className="text-ems-pearl/90 text-sm tracking-wide">✓ Dopasowany do sylwetki</p>
                </div>
                <p className="text-ems-gold-rich text-sm font-medium">
                  Obowiązkowy do wszystkich treningów EMS
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Team Section */}
      <section
        id="zespol"
        ref={(el) => (sectionsRef.current[3] = el)}
        className={`py-16 lg:py-20 px-6 bg-ems-charcoal section-texture ${
          visibleSections.has('zespol') ? 'section-fade-up in-view' : 'section-fade-up'
        }`}
      >
        <div className="max-w-6xl xl:max-w-7xl 2xl:max-w-[1920px] 3xl:max-w-[2400px] 4xl:max-w-[2800px] mx-auto">
          <h2 className="section-title-premium text-4xl lg:text-6xl xl:text-7xl 2xl:text-8xl text-center mb-16">
            Poznaj nasz zespół
          </h2>
          <div className="text-center max-w-3xl mx-auto glass-card p-8">
            <p className="body-premium text-lg mb-6">
              Nasz doświadczony zespół trenerów zapewni Ci profesjonalną opiekę
              i indywidualne podejście podczas każdego treningu EMS.
            </p>
            <p className="accent-text-premium text-xl">
              Skontaktuj się z nami, aby umówić się na trening próbny!
            </p>
          </div>
        </div>
      </section>

      {/* Premium Contact Section */}
      <section
        id="kontakt"
        ref={(el) => (sectionsRef.current[4] = el)}
        className={`py-16 lg:py-20 px-6 section-gradient-stone section-texture ${
          visibleSections.has('kontakt') ? 'section-fade-up in-view' : 'section-fade-up'
        }`}
      >
        <div className="max-w-6xl xl:max-w-7xl 2xl:max-w-[1920px] 3xl:max-w-[2400px] 4xl:max-w-[2800px] mx-auto">
          <h2 className="section-title-premium text-4xl lg:text-6xl xl:text-7xl 2xl:text-8xl text-center mb-16">
            Kontakt
          </h2>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Premium Contact Info */}
            <div>
              <h3 className="accent-text-premium text-2xl mb-8">
                Skontaktuj się z nami
              </h3>
              <div className="space-y-6 mb-10">
                <div className="glass-card p-4 flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-ems-gold/30 to-ems-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-ems-gold" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
                    </svg>
                  </div>
                  <a href="tel:+48696376377" className="text-ems-pearl hover:text-ems-gold-rich transition-colors text-lg">
                    +48 696 376 377
                  </a>
                </div>
                <div className="glass-card p-4 flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-ems-gold/30 to-ems-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-ems-gold" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                    </svg>
                  </div>
                  <a href="mailto:maszynowniaems@gmail.com" className="text-ems-pearl hover:text-ems-gold-rich transition-colors text-lg">
                    maszynowniaems@gmail.com
                  </a>
                </div>
                <div className="glass-card p-4 flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-ems-gold/30 to-ems-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-ems-gold" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                  </div>
                  <span className="text-ems-pearl text-lg">
                    Generała Sikorskiego 113<br />
                    Józefów, Warszawa
                  </span>
                </div>
              </div>

              {/* Premium Social Media */}
              <div>
                <h4 className="accent-text-premium text-lg mb-6">Znajdź nas w social media</h4>
                <div className="flex gap-4">
                  <a
                    href="https://www.facebook.com/maszynowniatreningems"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-card p-4 hover:scale-110 transition-all duration-300"
                  >
                    <svg className="w-8 h-8 text-ems-gold" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                  <a
                    href="https://www.instagram.com/maszynownia"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-card p-4 hover:scale-110 transition-all duration-300"
                  >
                    <svg className="w-8 h-8 text-ems-gold" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Premium Map Section */}
            <div>
              <h3 className="accent-text-premium text-2xl mb-8">
                Lokalizacja
              </h3>
              <div className="glass-card p-2 overflow-hidden">
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

      {/* Premium Scroll to Top Button */}
      {isScrolled && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 z-50 glass-card p-4 hover:scale-110 transition-all duration-300 group"
          aria-label="Scroll to top"
        >
          <svg
            className="w-6 h-6 text-ems-gold group-hover:text-white transition-colors"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </button>
      )}
    </>
  );
}