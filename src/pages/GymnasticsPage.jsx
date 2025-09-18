import SEOHead from '../components/SEOHead';
import { useState, useEffect, useRef } from 'react';
import { useDeviceDetection } from '../hooks/use-device-detection';
import { SmartContactButton } from '../components/ui/smart-contact-button';
import Footer from '../components/Footer';
import { Phone, Trophy, Shield, Heart, Calendar, Clock, MapPin } from 'lucide-react';

export default function GymnasticsPage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [visibleSections, setVisibleSections] = useState(new Set());
  const [activeLocation, setActiveLocation] = useState(null);
  const [expandedServices, setExpandedServices] = useState({});
  const sectionsRef = useRef([]);
  const { isMobile } = useDeviceDetection();

  const locations = [
    {
      name: "Józefów",
      address: "ul. Dolna 19",
      schedule: [
        "Wtorki i czwartki",
        "16:30 - grupa 4-6 lat",
        "17:30 - grupa 7-9 lat",
        "18:30 - grupa 10-13 lat"
      ],
      start: "Start: 9 września 2025",
      prices: ["160 zł (1x/tyg)", "260 zł (2x/tyg)"],
      mapUrl: "https://maps.app.goo.gl/DnvYvg56dvt17BCK8",
      embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2443.7!2d21.2342!3d52.1234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecb1234567890%3A0x1234567890abcdef!2sDolna%2019%2C%20J%C3%B3zef%C3%B3w!5e0!3m2!1spl!2spl!4v1234567890"
    },
    {
      name: "Michalin",
      address: "ul. Sienkiewicza 2",
      schedule: [
        "Piątki",
        "13:30",
        "14:30"
      ],
      start: "Zajęcia pokazowe: 5 września 2025",
      prices: ["170 zł (1x/tyg)"],
      mapUrl: "https://maps.app.goo.gl/CY1z53FRVMVQtDHVA",
      embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2443.8!2d21.3157!3d52.1789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecd12345678ab%3A0xabcdef1234567890!2sSienkiewicza%202%2C%2005-462%20Michalin!5e0!3m2!1spl!2spl!4v1693567890001"
    },
    {
      name: "Góra Kalwaria",
      address: "sala Hop sa sa, ul. Ojca Papczyńskiego 1a",
      schedule: [
        "Poniedziałki i środy",
        "15:00 - grupa 4-5 lat",
        "16:00 - grupa 6 lat",
        "17:00 - grupa 7-8 lat",
        "18:00 - grupa 9-11 lat"
      ],
      start: "Start: 15 września 2025",
      prices: ["160 zł (1x/tyg)", "300 zł (2x/tyg)"],
      mapUrl: "https://maps.app.goo.gl/YiKoVtSUxyQhmrwz6",
      embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2445.3!2d21.4567!3d52.3456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecb3456789012%3A0x3456789012cdef01!2sOjca%20Papczynskiego%201a%2C%20G%C3%B3ra%20Kalwaria!5e0!3m2!1spl!2spl!4v1234567892"
    }
  ];

  const toggleLocation = (index) => {
    setActiveLocation(activeLocation === index ? null : index);
  };

  const toggleService = (serviceId) => {
    setExpandedServices(prev => ({
      ...prev,
      [serviceId]: !prev[serviceId]
    }));
  };

  const services = [
    {
      id: 'warsztaty',
      title: 'Warsztaty gimnastyczne',
      shortDescription: 'Weekendowe intensywne szkolenia dla dzieci chcących pogłębić swoje umiejętności gimnastyczne i akrobatyczne.',
      fullDescription: 'Nasze warsztaty gimnastyczne to intensywne, weekendowe zajęcia skierowane do dzieci, które chcą pogłębić swoje umiejętności w akrobatyce i gimnastyce. Zajęcia prowadzone są w małych grupach, co pozwala na indywidualne podejście do każdego uczestnika. Podczas warsztatów dzieci uczą się zaawansowanych elementów akrobatycznych, doskonalą technikę wykonywania ćwiczeń oraz rozwijają swoją kreatywność ruchową. Program obejmuje naukę saltów, przerzutów, elementów na przyrządach oraz choreografii akrobatycznych. Wszystkie ćwiczenia są dostosowane do wieku i poziomu zaawansowania uczestników, a ich realizacja odbywa się pod czujnym okiem doświadczonych instruktorów.',
      features: [
        'Zaawansowane elementy akrobatyczne',
        'Praca nad techniką',
        'Grupy wiekowe 6-16 lat',
        'Indywidualne podejście do każdego dziecka',
        'Małe grupy - maksymalnie 10 osób'
      ],
      image: '/images/warsztaty.webp'
    },
    {
      id: 'urodziny',
      title: 'Urodziny z gimnastyką',
      shortDescription: '2 godziny zabawy od 5. roku życia - niezapomniane urodziny pełne ruchu i radości.',
      fullDescription: 'Organizujemy niezapomniane urodziny dla dzieci od 5. roku życia! To wyjątkowa propozycja dla rodziców, którzy chcą sprawić swojemu dziecku radość i jednocześnie zadbać o aktywne spędzenie czasu. Podczas 2-godzinnej imprezy dzieci uczestniczą w różnorodnych zabawach ruchowych, grach zespołowych oraz poznają podstawy akrobatyki w bezpieczny i przyjazny sposób. Program jest dostosowany do wieku i zainteresowań grupy. Zapewniamy pełną opiekę instruktora, profesjonalny sprzęt oraz bezpieczną przestrzeń do zabawy. Rodzice mogą być pewni, że ich dzieci spędzą czas aktywnie i kreatywnie, a przy tym zdobędą nowe umiejętności ruchowe.',
      features: [
        'Tematyczne zabawy ruchowe',
        'Bezpieczna zabawa na materacach',
        'Do 12 dzieci na imprezę',
        '2 godziny intensywnej zabawy',
        'Profesjonalna opieka instruktora'
      ],
      image: '/images/urodziny.webp'
    },
    {
      id: 'pikniki',
      title: 'Pikniki sportowe',
      shortDescription: 'Aktywna atrakcja dla rodzin - organizujemy rodzinne wydarzenia na świeżym powietrzu.',
      fullDescription: 'Pikniki sportowe to idealna propozycja dla rodzin, które chcą spędzić czas aktywnie na świeżym powietrzu. Organizujemy wydarzenia, które łączą zabawę, sport i integrację rodzinną. W programie znajdziecie różnorodne gry i zabawy dostosowane do różnych grup wiekowych - od najmłodszych dzieci po dorosłych. Prowadzimy outdoor fitness challenges, sztafety rodzinne, gry zespołowe oraz mini-turnieje sportowe. Wszystkie aktywności są zaprojektowane tak, aby angażować całe rodziny i promować zdrowy, aktywny tryb życia. Nasze pikniki to doskonała okazja do integracji, poznania nowych ludzi i spędzenia czasu w gronie bliskich w atmosferze sportu i zabawy.',
      features: [
        'Gry i zabawy dla całej rodziny',
        'Outdoor fitness challenges',
        'Integracja rodziców i dzieci',
        'Różnorodne aktywności dla wszystkich grup wiekowych',
        'Wydarzenia na świeżym powietrzu'
      ],
      image: '/images/pikniki.webp'
    },
    {
      id: 'placowki',
      title: 'Zajęcia w placówkach',
      shortDescription: 'Dojeżdżamy z własnym sprzętem do przedszkoli, szkół i innych placówek.',
      fullDescription: 'Oferujemy profesjonalne zajęcia gimnastyczne bezpośrednio w placówkach edukacyjnych. Dojeżdżamy do przedszkoli, szkół, żłobków oraz innych instytucji z kompletnym, mobilnym sprzętem gimnastycznym. Nasze zajęcia są doskonałym uzupełnieniem programu wychowania fizycznego w placówkach. Prowadzimy zarówno zajęcia regularne (cotygodniowe), jak i jednorazowe wydarzenia specjalne. Program jest elastycznie dostosowywany do możliwości lokalowych placówki oraz wieku dzieci. Zapewniamy pełne bezpieczeństwo, profesjonalne podejście oraz wysoki standard prowadzonych zajęć. Współpracujemy z placówkami w tworzeniu długoterminowych programów rozwoju fizycznego dzieci.',
      features: [
        'Profesjonalny sprzęt mobilny',
        'Dostosowanie do sali',
        'Regularne zajęcia lub jednorazowe',
        'Współpraca z placówkami edukacyjnymi',
        'Elastyczne programy'
      ],
      image: '/images/placowki.webp'
    },
    {
      id: 'obozy',
      title: 'Obozy akrobatyczne',
      shortDescription: 'Prowadzone przez Annę Błaszkiewicz - letnie obozy pełne nauki i zabawy.',
      fullDescription: 'Obozy akrobatyczne to wyjątkowa propozycja wakacyjna dla dzieci, które chcą spędzić czas aktywnie i kreatywnie. Pod kierunkiem doświadczonej Anny Błaszkiewicz, kierownika wypoczynku z 10-letnim doświadczeniem, dzieci poznają tajniki akrobatyki w przyjaznej i bezpiecznej atmosferze. Tygodniowe turnusy obejmują naukę podstawowych i zaawansowanych elementów akrobatycznych, gry zespołowe, zabawy ruchowe oraz aktywności integracyjne. Program jest bogaty i różnorodny - od porannej gimnastyki, przez treningi akrobatyczne, aż po wieczorne gry i zabawy. Wszystko odbywa się w grupach maksymalnie 16 dzieci, co gwarantuje indywidualne podejście i wysoką jakość zajęć. To doskonała okazja do nauki nowych umiejętności, poznania rówieśników i spędzenia niezapomnianych wakacji.',
      features: [
        'Tygodniowe turnusy wakacyjne',
        'Nauka elementów akrobatycznych',
        'Grupa maksymalnie 16 dzieci',
        'Doświadczony kierownik wypoczynku',
        'Bogaty program zajęć'
      ],
      image: '/images/obozy.webp'
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection Observer for scroll animations - Unified configuration
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set([...prev, entry.target.id]));
            // Add performance optimization - mark animation as complete after trigger
            setTimeout(() => {
              entry.target.classList.add('animation-complete');
            }, 800);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
      }
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
    setIsMobileMenuOpen(false); // Close menu first
    setTimeout(() => {
      document.getElementById(sectionId)?.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }, 300); // Allow menu close animation
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <SEOHead
        title="Strefa Gimnastyki - Zajęcia ogólnorozwojowe z elementami akrobatyki | Maszynownia"
        description="Wszechstronny rozwój fizyczny dzieci i młodzieży. Zajęcia ogólnorozwojowe z elementami akrobatyki w Józefowie, Michalinie i Górze Kalwarii."
        canonical="/strefagimnastyki"
      />

      {/* Premium Header Navigation - Always Visible */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg border-b bg-ems-black/90 border-ems-black/30">
        <div className="max-w-none 2xl:max-w-[1920px] 3xl:max-w-[2400px] mx-auto px-6 lg:px-12 xl:px-16 2xl:px-24 3xl:px-32 4xl:px-40 py-1">
          <div className="flex items-center justify-between">
            {/* Back Arrow + Logo Gimnastyki po lewej */}
            <div className="flex items-center gap-4">
              <a href="/" className="text-gym-yellow hover:text-gym-yellow-light transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"/>
                </svg>
              </a>
              <a href="/" className="flex items-center">
                <div className="relative inline-block">
                  <div className="absolute inset-0 bg-black/40 rounded-full blur-xl scale-110"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20 rounded-full blur-lg scale-105"></div>
                  <img
                    src="/images/logo-gimnastyka.webp"
                    alt="Strefa Gimnastyki Logo"
                    className="relative h-16 w-auto filter brightness-110 contrast-110"
                  />
                </div>
              </a>
            </div>

            {/* Nawigacja po prawej */}
            <div className="hidden md:flex items-center gap-8">
              <button
                onClick={() => scrollToSection('o-nas')}
                className="text-gym-yellow hover:text-gym-yellow-light transition-colors font-montserrat font-light"
              >
                O nas
              </button>
              <button
                onClick={() => scrollToSection('uslugi')}
                className="text-gym-yellow hover:text-gym-yellow-light transition-colors font-montserrat font-light"
              >
                Usługi
              </button>
              <button
                onClick={() => scrollToSection('kadra')}
                className="text-gym-yellow hover:text-gym-yellow-light transition-colors font-montserrat font-light"
              >
                Zespół
              </button>
              <button
                onClick={() => scrollToSection('lokalizacje')}
                className="text-gym-yellow hover:text-gym-yellow-light transition-colors font-montserrat font-light"
              >
                Cennik
              </button>
              <button
                onClick={() => scrollToSection('zapisy')}
                className="text-gym-yellow hover:text-gym-yellow-light transition-colors font-montserrat font-light"
              >
                Kontakt
              </button>

              {/* Separacja */}
              <div className="w-px h-6 bg-gym-yellow/30"></div>

              {/* Social Media */}
              <div className="flex items-center gap-4">
                <a
                  href="https://www.facebook.com/maszynowniatreningems"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gym-yellow hover:text-gym-yellow-light transition-colors"
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
                  className="text-gym-yellow hover:text-gym-yellow-light transition-colors"
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
              <button
                onClick={toggleMobileMenu}
                className="text-gym-yellow hover:text-gym-yellow-light transition-colors p-2"
              >
                <span className="text-2xl">{isMobileMenuOpen ? '×' : '☰'}</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="fixed top-[73px] left-0 right-0 z-40 bg-gym-yellow/95 backdrop-blur-lg border-b border-white/30 md:hidden">
          <div className="px-6 py-4 space-y-4">
            <button
              onClick={() => scrollToSection('o-nas')}
              className="block w-full text-left text-white hover:text-white/80 transition-colors py-2 border-b border-white/20"
            >
              O nas
            </button>
            <button
              onClick={() => scrollToSection('uslugi')}
              className="block w-full text-left text-white hover:text-white/80 transition-colors py-2 border-b border-white/20"
            >
              Usługi
            </button>
            <button
              onClick={() => scrollToSection('kadra')}
              className="block w-full text-left text-white hover:text-white/80 transition-colors py-2 border-b border-white/20"
            >
              Zespół
            </button>
            <button
              onClick={() => scrollToSection('lokalizacje')}
              className="block w-full text-left text-white hover:text-white/80 transition-colors py-2 border-b border-white/20"
            >
              Cennik
            </button>
            <button
              onClick={() => scrollToSection('zapisy')}
              className="block w-full text-left text-white hover:text-white/80 transition-colors py-2"
            >
              Kontakt
            </button>
          </div>
        </div>
      )}

      {/* Fullscreen Hero Section */}
      <section className="h-screen relative overflow-hidden bg-ems-black" style={{ minHeight: '100vh' }}>
        {/* Background Image - positioned on the right */}
        <div
          className="absolute top-20 bottom-0 right-0 w-full md:w-3/4 lg:w-2/3 xl:w-7/12"
          style={{
            backgroundImage: 'url(/images/nowe_tlo_strefa.webp)',
            backgroundSize: 'auto 100%',
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat'
          }}
        ></div>

        {/* Gradient overlay to protect text on smaller screens */}
        <div className="absolute inset-0 bg-gradient-to-r from-ems-black via-ems-black/80 md:via-ems-black/60 lg:via-transparent to-transparent"></div>

        {/* Content - on the left with black background */}
        <div className="relative z-10 h-full flex items-end pb-16">
          <div className="px-6 lg:px-12 xl:px-16 2xl:px-24 max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-4xl">
            <h1 className="gym-hero-title-entrance font-bebas font-bold text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl uppercase mb-8 drop-shadow-lg text-gym-yellow relative tracking-wider">
              <div className="absolute inset-0 bg-ems-black/60 blur-lg scale-110 -z-10"></div>
              GIMNASTYKA DLA DZIECI W KAŻDYM WIEKU
            </h1>
            <p className="gym-hero-subtitle-entrance font-montserrat font-light text-xl md:text-2xl lg:text-3xl xl:text-3xl 2xl:text-4xl mb-10 text-gym-yellow-light/90 max-w-2xl lg:max-w-3xl drop-shadow-md tracking-wide relative leading-relaxed">
              <div className="absolute inset-0 bg-ems-black/60 blur-md scale-105 -z-10"></div>
              Wszechstronny rozwój fizyczny dzieci i młodzieży
            </p>
            <button
              onClick={() => scrollToSection('zapisy')}
              className="gym-hero-cta-entrance bg-gym-yellow text-ems-black px-10 py-5 rounded-full text-xl md:text-2xl font-bebas font-normal uppercase tracking-wider hover:bg-gym-yellow-light transition-all duration-300 shadow-lg "
            >
              Zapisz dziecko na zajęcia
            </button>
          </div>
        </div>
      </section>

      {/* Business Description Section */}
      <section
        id="o-nas"
        ref={(el) => (sectionsRef.current[0] = el)}
        className={`py-16 lg:py-24 px-6 bg-gym-cream section-texture will-animate ${
          visibleSections.has('o-nas') ? 'gym-section-fade-up in-view' : 'gym-section-fade-up'
        }`}
      >
        <div className="max-w-6xl xl:max-w-7xl 2xl:max-w-[1920px] 3xl:max-w-[2400px] 4xl:max-w-[2800px] mx-auto">
          <h2 className="gym-section-title-premium text-4xl lg:text-6xl xl:text-7xl 2xl:text-8xl text-center mb-16 text-gym-navy-trust font-bebas tracking-wide drop-shadow-sm">
            Nasza Filozofia Ruchu
          </h2>

          <div className="max-w-4xl mx-auto">
            <div className="gym-card-unified light p-8 lg:p-12 text-center">
              <p className="text-lg leading-relaxed mb-6 text-gym-navy-trust font-montserrat font-light">
                Nasza firma specjalizuje się w prowadzeniu zajęć ogólnorozwojowych z elementami akrobatyki, które wspierają wszechstronny rozwój fizyczny dzieci i młodzieży. Program łączy podstawowe ćwiczenia ruchowe z nauką prostych elementów akrobatycznych, co pozwala rozwijać koordynację, siłę, gibkość i równowagę.
              </p>
              <p className="text-lg leading-relaxed text-gym-navy-trust font-montserrat font-light">
                Zajęcia prowadzone są w przyjaznej i bezpiecznej atmosferze, dostosowanej do wieku i możliwości uczestników. Dzięki temu każde dziecko może czerpać radość z aktywności, zdobywać nowe umiejętności i budować pewność siebie. <strong className="text-[#a16207]">Naszym celem jest zaszczepienie pasji do ruchu oraz wspieranie dzieci w budowaniu zdrowych nawyków, które zaprocentują w przyszłości.</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Dlaczego warto wybrać nasze zajęcia */}
      <section
        ref={(el) => (sectionsRef.current[1] = el)}
        id="benefits"
        className={`py-16 lg:py-24 px-6 bg-gym-beige will-animate ${
          visibleSections.has('benefits') ? 'gym-section-fade-up in-view' : 'gym-section-fade-up'
        }`}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bebas font-bold text-center mb-16 text-gym-navy-trust tracking-wide drop-shadow-sm">
            Dlaczego My?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Rozwój fizyczny */}
            <div className="gym-card-unified p-8 rounded-3xl text-center group ">
              <div className="bg-white/90 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Trophy className="h-10 w-10 text-[#a16207]" />
              </div>
              <h3 className="text-2xl font-bebas font-normal mb-4 text-gym-navy-trust">Rozwój Fizyczny</h3>
              <p className="text-gym-navy-trust/80 font-montserrat font-light leading-relaxed">
                Kompleksowy trening siły, gibkości, koordynacji i równowagi. Każde ćwiczenie jest dostosowane do wieku i możliwości dziecka, zapewniając bezpieczny i efektywny rozwój fizyczny.
              </p>
            </div>

            {/* Bezpieczeństwo */}
            <div className="gym-card-unified p-8 rounded-3xl text-center group ">
              <div className="bg-white/90 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Shield className="h-10 w-10 text-[#a16207]" />
              </div>
              <h3 className="text-2xl font-bebas font-normal mb-4 text-gym-navy-trust">Bezpieczeństwo</h3>
              <p className="text-gym-navy-trust/80 font-montserrat font-light leading-relaxed">
                Najwyższe standardy bezpieczeństwa, profesjonalny sprzęt gimnastyczny i doświadczeni instruktorzy. Każde dziecko jest pod stałą opieką wykwalifikowanej kadry.
              </p>
            </div>

            {/* Radość z ruchu */}
            <div className="gym-card-unified p-8 rounded-3xl text-center group ">
              <div className="bg-white/90 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Heart className="h-10 w-10 text-[#a16207]" />
              </div>
              <h3 className="text-2xl font-bebas font-normal mb-4 text-gym-navy-trust">Radość z Ruchu</h3>
              <p className="text-gym-navy-trust/80 font-montserrat font-light leading-relaxed">
                Zajęcia prowadzone w przyjaznej atmosferze, gdzie każde dziecko może czerpać radość z aktywności fizycznej i budować pozytywne podejście do sportu.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Redesigned Services Section - Full Width with Alternating Layout */}
      <section
        id="uslugi"
        ref={(el) => (sectionsRef.current[2] = el)}
        className={`py-16 lg:py-24 bg-gym-cream section-texture will-animate ${
          visibleSections.has('uslugi') ? 'gym-section-fade-up in-view' : 'gym-section-fade-up'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="gym-section-title-premium text-4xl lg:text-6xl xl:text-7xl 2xl:text-8xl text-center mb-16 text-gym-navy-trust font-bebas tracking-wide drop-shadow-sm">
            Nasze Usługi
          </h2>

          <div className="space-y-12">
            {services.map((service, index) => (
              <div
                key={service.id}
                className={`gym-card-unified overflow-hidden ${
                  index === services.length - 1 ? 'border-2 border-[#a16207]' : ''
                }`}
              >
                <div className={`grid lg:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}>

                  {/* Text Content */}
                  <div className={`p-8 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    {/* Badge for obozy - positioned at top of text section */}
                    {index === services.length - 1 && (
                      <div className="mb-20">
                        <span className="bg-gradient-to-r from-[#a16207] to-gym-yellow text-white px-8 py-3 rounded-full font-bold uppercase tracking-wide font-montserrat shadow-lg whitespace-nowrap" style={{fontSize: 'clamp(0.75rem, 2vw, 1rem)'}}>
                          Wakacyjna przygoda
                        </span>
                      </div>
                    )}

                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-gym-yellow to-gym-yellow-deep rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                          {service.id === 'warsztaty' && (
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                          )}
                          {service.id === 'urodziny' && (
                            <path d="M12 6c1.11 0 2-.9 2-2 0-.38-.1-.73-.29-1.03L12 0l-1.71 2.97c-.19.3-.29.65-.29 1.03 0 1.1.89 2 2 2zm4.5 3.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm-9 0C6.67 9.5 6 10.17 6 11s.67 1.5 1.5 1.5S9 11.83 9 11s-.67-1.5-1.5-1.5zM12 19l7-12H5l7 12z"/>
                          )}
                          {service.id === 'pikniki' && (
                            <>
                              <path d="M18.5 8.5c0 4-6.5 13-6.5 13s-6.5-9-6.5-13a6.5 6.5 0 0 1 13 0z"/>
                              <circle cx="12" cy="8.5" r="2.5"/>
                            </>
                          )}
                          {service.id === 'placowki' && (
                            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
                          )}
                          {service.id === 'obozy' && (
                            <path d="M6.5 10c-1.06 0-2.05.27-2.91.74L10 17.5l7-7V10c0-1.1-.9-2-2-2H6.5zm-3.91 3.26C2.04 12.1 2 11.06 2 10c0-5.23 4.77-10 10-10s10 4.77 10 10v4l-3-3-7 7-7-7z"/>
                          )}
                        </svg>
                      </div>
                      <h3 className="text-2xl lg:text-3xl font-bebas font-normal text-gym-navy-trust">
                        {service.title}
                      </h3>
                    </div>

                    <p className="text-gym-navy-trust/80 font-montserrat font-light text-lg leading-relaxed mb-6">
                      {service.shortDescription}
                    </p>

                    {/* Expandable content */}
                    <div className={`transition-all duration-500 overflow-hidden ${
                      expandedServices[service.id] ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                      <div className="mb-6">
                        <p className="text-gym-navy-trust/70 font-montserrat font-light leading-relaxed mb-4">
                          {service.fullDescription}
                        </p>
                        <ul className="space-y-2">
                          {service.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center text-gym-navy-trust/70 font-montserrat">
                              <div className="w-2 h-2 bg-[#a16207] rounded-full mr-3 flex-shrink-0"></div>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Read More Button */}
                    <button
                      onClick={() => toggleService(service.id)}
                      className="inline-flex items-center gap-2 text-[#a16207] font-montserrat font-medium hover:text-gym-yellow-deep transition-colors"
                    >
                      {expandedServices[service.id] ? 'Czytaj mniej' : 'Czytaj więcej'}
                      <div className={`transition-transform duration-300 ${
                        expandedServices[service.id] ? 'rotate-180' : ''
                      }`}>
                        ▼
                      </div>
                    </button>
                  </div>

                  {/* Service Image */}
                  <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                    <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-lg bg-gym-cream/50">
                      <img
                        src={service.image}
                        alt={service.title}
                        className={`w-full h-full transition-transform duration-300 hover:scale-105 ${
                          service.id === 'urodziny' || service.id === 'obozy'
                            ? 'object-contain p-1'
                            : 'object-cover'
                        }`}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Poznaj nasz zespół */}
      <section
        id="kadra"
        ref={(el) => (sectionsRef.current[3] = el)}
        className={`py-16 lg:py-24 px-6 bg-gym-beige will-animate ${
          visibleSections.has('kadra') ? 'gym-section-fade-up in-view' : 'gym-section-fade-up'
        }`}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bebas font-bold text-center mb-16 text-gym-navy-trust tracking-wide drop-shadow-sm">
            Nasza Kadra Trenerska
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Klaudia Kołodziejska */}
            <div className="gym-card-unified light p-10 rounded-3xl text-center group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-[#a16207]/30 mb-6">
                <img
                  src="/images/klaudia-kolodziejska.webp"
                  alt="Klaudia Kołodziejska"
                  width={128}
                  height={128}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <h3 className="text-2xl font-bebas font-normal mb-2 text-gym-navy-trust">Klaudia Kołodziejska</h3>
              <p className="text-[#a16207] font-montserrat font-light mb-4">Główny Trener</p>
              <p className="text-gym-navy-trust/80 font-montserrat leading-relaxed mb-4">
                Doświadczony trener gimnastyki z pasją do pracy z dziećmi. Specjalizuje się w kompleksowym rozwoju motoryki, koordynacji i akrobatyki u najmłodszych.
              </p>
              <p className="text-gym-navy-trust/70 font-montserrat text-sm">
                Certyfikat trenera gimnastyki, wieloletnie doświadczenie w pracy z dziećmi wieku 4-13 lat.
              </p>
            </div>

            {/* Klaudia Nowicka */}
            <div className="gym-card-unified light p-10 rounded-3xl text-center group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-[#a16207]/30 mb-6 bg-gradient-to-br from-gym-yellow/20 to-gym-orange-accent/20 flex items-center justify-center">
                <svg className="w-16 h-16 text-[#a16207]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bebas font-normal mb-2 text-gym-navy-trust">Klaudia Nowicka</h3>
              <p className="text-[#a16207] font-montserrat font-light mb-4">Trener Gimnastyki</p>
              <p className="text-gym-navy-trust/80 font-montserrat leading-relaxed mb-4">
                Certyfikowany trener z wieloletnim doświadczeniem w pracy z dziećmi i młodzieżą. Ekspert w zakresie bezpieczeństwa podczas ćwiczeń gimnastycznych.
              </p>
              <p className="text-gym-navy-trust/70 font-montserrat text-sm">
                Specjalizacja: bezpieczny trening, techniki gimnastyczne dla dzieci.
              </p>
            </div>

            {/* Anna Błaszkiewicz */}
            <div className="gym-card-unified light p-10 rounded-3xl text-center group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-[#a16207]/30 mb-6 bg-gradient-to-br from-[#a16207]/20 to-gym-yellow/20 flex items-center justify-center">
                <svg className="w-16 h-16 text-[#a16207]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bebas font-normal mb-2 text-gym-navy-trust">Anna Błaszkiewicz</h3>
              <p className="text-[#a16207] font-montserrat font-light mb-4">Kierownik Wypoczynku</p>
              <p className="text-gym-navy-trust/80 font-montserrat leading-relaxed mb-4">
                Kierownik wypoczynku z 10-letnim doświadczeniem jako nauczyciel wychowania fizycznego. Specjalistka od organizacji obozów akrobatycznych.
              </p>
              <p className="text-gym-navy-trust/70 font-montserrat text-sm">
                Tworzy niezapomniane wakacyjne przygody pełne nauki i zabawy dla dzieci w każdym wieku.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Lokalizacje i harmonogram */}
      <section
        id="lokalizacje"
        ref={(el) => (sectionsRef.current[4] = el)}
        className={`py-16 lg:py-24 px-6 bg-gym-cream will-animate ${
          visibleSections.has('lokalizacje') ? 'gym-section-fade-up in-view' : 'gym-section-fade-up'
        }`}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bebas font-bold text-center mb-16 text-gym-navy-trust tracking-wide drop-shadow-sm">
            Lokalizacje i Cennik
          </h2>

          {/* Expandable lokalizacje z mapami */}
          <div className="space-y-8">
            {/* Header tiles row */}
            <div className="grid md:grid-cols-3 gap-8">
              {locations.map((location, index) => (
                <div
                  key={index}
                  onClick={() => toggleLocation(index)}
                  className="gym-card-unified location-header p-8 cursor-pointer"
                >
                  <div className="text-center">
                    <h3 className="text-2xl font-bebas font-bold mb-4 text-gym-navy-trust">
                      {location.name}
                    </h3>
                    <div className="flex items-center justify-center gap-2 text-[#a16207] font-montserrat font-medium">
                      <MapPin className="h-5 w-5" />
                      <span>Zobacz szczegóły</span>
                      <div className={`transition-transform duration-300 ${activeLocation === index ? 'rotate-180' : ''}`}>
                        ▼
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Expandable content - full width */}
            {activeLocation !== null && (
              <div className={`transition-all duration-500 overflow-hidden ${
                activeLocation !== null ? 'max-h-[1200px] opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="gym-card-unified location-expanded p-8">
                  <div className="mb-8 text-center">
                    <h3 className="text-3xl font-bebas font-bold text-gym-navy-trust">
                      {locations[activeLocation].name}
                    </h3>
                  </div>

                  <div className="grid lg:grid-cols-3 gap-8">
                    {/* Harmonogram */}
                    <div className="space-y-4">
                      <h4 className="text-xl font-bebas font-normal mb-4 flex items-center justify-center gap-2 text-gym-navy-trust">
                        <Calendar className="h-5 w-5 text-[#a16207]" />
                        Harmonogram
                      </h4>
                      <div className="bg-gym-cream/50 p-4 rounded-xl">
                        <ul className="space-y-2">
                          {locations[activeLocation].schedule.map((item, scheduleIndex) => (
                            <li key={scheduleIndex} className="text-gym-navy-trust font-montserrat text-sm">{item}</li>
                          ))}
                        </ul>
                        <div className="mt-3 pt-3 border-t border-[#a16207]/20">
                          <div className="text-[#a16207] font-montserrat font-bold text-sm">
                            {locations[activeLocation].start}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Cennik */}
                    <div className="space-y-4">
                      <h4 className="text-xl font-bebas font-normal mb-4 flex items-center justify-center gap-2 text-gym-navy-trust">
                        <Clock className="h-5 w-5 text-[#a16207]" />
                        Cennik
                      </h4>
                      <div className="bg-gym-cream/50 p-4 rounded-xl">
                        <ul className="space-y-3">
                          {locations[activeLocation].prices.map((price, priceIndex) => (
                            <li key={priceIndex} className="text-gym-navy-trust font-montserrat font-normal text-lg flex items-center">
                              <div className="w-2 h-2 bg-[#a16207] rounded-full mr-3"></div>
                              {price}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Adres i mapa */}
                    <div className="space-y-4">
                      <h4 className="text-xl font-bebas font-normal mb-4 flex items-center justify-center gap-2 text-gym-navy-trust">
                        <MapPin className="h-5 w-5 text-[#a16207]" />
                        Adres
                      </h4>
                      <div className="bg-gym-cream/50 p-4 rounded-xl space-y-4">
                        <div className="text-gym-navy-trust font-montserrat font-light">{locations[activeLocation].address}</div>

                        {/* Embedded Google Map */}
                        <div className="w-full h-64 rounded-lg overflow-hidden">
                          <iframe
                            src={locations[activeLocation].embedUrl}
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title={`Mapa lokalizacji ${locations[activeLocation].name}`}
                          ></iframe>
                        </div>

                        <a
                          href={locations[activeLocation].mapUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="gym-button-map w-full"
                        >
                          <MapPin className="h-4 w-4" />
                          Otwórz w Google Maps
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Zapisy */}
      <section
        id="zapisy"
        ref={(el) => (sectionsRef.current[5] = el)}
        className={`py-16 lg:py-24 px-6 bg-gym-beige will-animate ${
          visibleSections.has('zapisy') ? 'gym-section-fade-up in-view' : 'gym-section-fade-up'
        }`}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bebas font-bold mb-16 text-gym-navy-trust">
            Zapisy na Zajęcia
          </h2>
          <div className="gym-card-unified contact p-12 max-w-2xl mx-auto">
            <Phone className="h-20 w-20 text-[#a16207] mx-auto mb-8" />
            <h3 className="text-3xl font-bebas font-bold mb-6 text-gym-navy-trust">Wyślij SMS na numer</h3>
            <div className="text-5xl font-bebas font-bold text-[#a16207] mb-8">696 376 377</div>
            <div className="text-left space-y-4 mb-8">
              <p className="font-montserrat font-bold text-gym-navy-trust">W wiadomości podaj:</p>
              <ul className="space-y-2 text-gym-navy-trust/80 font-montserrat">
                <li>• Imię i nazwisko dziecka</li>
                <li>• Wiek dziecka</li>
                <li>• Lokalizację zajęć</li>
                <li>• Preferowaną godzinę</li>
              </ul>
            </div>
            <div className="bg-[#a16207]/10 border border-[#a16207] p-6 rounded-xl mb-8 text-center">
              <p className="text-gym-navy-trust font-montserrat font-normal text-lg">
                ⚠️ Liczy się kolejność zgłoszeń - liczba miejsc ograniczona!
              </p>
            </div>
            <div className={`grid gap-4 ${isMobile ? 'grid-cols-3' : 'grid-cols-2 max-w-md mx-auto'}`}>
              <SmartContactButton
                phoneNumber="+48696376377"
                variant="sms"
                smsMessage="Chciałbym zapisać dziecko na zajęcia gimnastyczne. Imię: [IMIĘ], Wiek: [WIEK], Lokalizacja: [JÓZEFÓW/MICHALIN/GÓRA KALWARIA], Godzina: [GODZINA]"
                className="gym-button-secondary "
              >
                Wyślij SMS
              </SmartContactButton>
              {isMobile && (
                <SmartContactButton
                  phoneNumber="+48696376377"
                  variant="call"
                  className="gym-button-secondary "
                >
                  Zadzwoń
                </SmartContactButton>
              )}
              <SmartContactButton
                phoneNumber="maszynowniastrefagimnastyki@gmail.com"
                variant="email"
                className="gym-button-secondary "
              >
                Email
              </SmartContactButton>
            </div>
          </div>
        </div>
      </section>

      {/* Scroll to Top Button */}
      {isScrolled && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 z-50 gym-button-icon group"
          aria-label="Scroll to top"
        >
          <svg
            className="w-6 h-6 text-gym-yellow group-hover:text-white transition-colors"
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

      {/* Footer */}
      <Footer variant="gym" />
    </>
  );
}