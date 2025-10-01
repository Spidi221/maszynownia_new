import useResponsiveImage from '../hooks/useResponsiveImage';

const HomePage = () => {
  // Responsive images for optimal mobile performance
  const emsBackground = useResponsiveImage('/images/woman-ems.webp');
  const gymBackground = useResponsiveImage('/images/girl-gymnastics-final.webp');

  return (
    <div className="h-screen flex flex-col lg:flex-row relative overflow-hidden">
      {/* EMS Section */}
      <div className="h-1/2 lg:flex-1 bg-ems-black relative lg:mobile-diagonal-top">
        {/* Background Image - Simple & Visible */}
        <div
          className="absolute inset-0 bg-cover bg-left opacity-30"
          style={{
            backgroundImage: `url(${emsBackground})`,
            backgroundPosition: 'left top',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-ems-black/60 via-transparent to-ems-black/80"></div>

        {/* Layout */}
        <div className="relative z-10 h-full flex flex-col justify-center py-4 lg:py-16 px-4 lg:px-8">

          {/* Button + Description */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 lg:relative lg:bottom-auto lg:left-auto lg:transform-none lg:text-center lg:mb-12 mobile-ems-button">
            <a
              href="/ems"
              className="inline-flex items-center justify-center border-2 border-ems-gold text-white uppercase tracking-wider px-24 py-6 mb-4 font-medium transition-all duration-300 hover:bg-ems-gold hover:text-ems-black active:scale-95 active:bg-ems-gold/90 mobile-text-small lg:py-4 text-xl lg:min-w-[480px] lg:min-h-[60px] rounded-full text-decoration-none"
              style={{minWidth: '380px', minHeight: '44px'}}
              aria-label="Przejdź do strony treningu EMS - Zacznij swój trening już dziś"
              role="button"
            >
              Zacznij swój trening już dziś
            </a>
            <p className="text-white/80 text-sm tracking-wider mobile-text-xs">
              Skuteczny trening dla dorosłych w 30 minut
            </p>
          </div>

          {/* Logo */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 lg:relative lg:bottom-auto lg:left-auto lg:transform-none lg:text-center lg:mb-8 mobile-ems-logo">
            <img src="/images/logo-ems.webp" alt="EMS Logo" className="w-96 lg:w-96 mx-auto opacity-80" />
          </div>

          {/* Line + Location */}
          <div className="absolute top-4 right-4 lg:relative lg:top-auto lg:right-auto lg:text-center mobile-ems-location">
            <div className="lg:w-60 h-px bg-ems-gold mx-auto mb-4 mobile-line"></div>
            <p className="text-white uppercase tracking-wide lg:text-base font-medium mobile-text-xs">
              📍 Józefów
            </p>
          </div>

        </div>
      </div>

      {/* Divider */}
      <div className="hidden lg:block w-px bg-gray-700"></div>

      {/* Gymnastics Section */}
      <div className="h-1/2 lg:flex-1 bg-gym-yellow relative lg:mobile-diagonal-bottom">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover opacity-30"
          style={{
            backgroundImage: `url(${gymBackground})`,
            backgroundPosition: '70% bottom',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-l from-gym-yellow/60 via-transparent to-gym-yellow/80"></div>

        {/* Layout */}
        <div className="relative z-10 h-full flex flex-col justify-center py-4 lg:py-16 px-4 lg:px-8">

          {/* Button + Description */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 lg:relative lg:bottom-auto lg:left-auto lg:transform-none lg:text-center lg:mb-12 mobile-gym-button">
            <a
              href="/strefagimnastyki"
              className="inline-flex items-center justify-center border-2 border-white text-white uppercase tracking-wider px-16 py-6 mb-4 font-medium transition-all duration-300 hover:bg-white hover:text-gym-yellow active:scale-95 active:bg-white/90 mobile-text-small lg:py-4 text-xl lg:min-w-[320px] lg:min-h-[60px] rounded-full text-decoration-none"
              style={{minWidth: '280px', minHeight: '44px'}}
              aria-label="Przejdź do strony gimnastyki dla dzieci - Sprawdź zajęcia"
              role="button"
            >
              Sprawdź zajęcia
            </a>
            <p className="text-white/80 text-sm tracking-wider mobile-text-xs">
              Gimnastyka dla dzieci w każdym wieku
            </p>
          </div>

          {/* Logo */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 lg:relative lg:bottom-auto lg:left-auto lg:transform-none lg:text-center lg:mb-8 mobile-gym-logo">
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-black/40 rounded-full blur-xl scale-110"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20 rounded-full blur-lg scale-105"></div>
              <img src="/images/logo-gimnastyka.webp" alt="Gimnastyka Logo" className="relative w-96 lg:w-96 mx-auto opacity-100 filter brightness-110 contrast-110" />
            </div>
          </div>

          {/* Line + Locations */}
          <div className="absolute top-4 left-4 lg:relative lg:top-auto lg:left-auto lg:text-center mobile-gym-location">
            <div className="lg:w-60 h-px bg-white mx-auto mb-4 mobile-line"></div>
            <div className="space-y-1">
              <p className="text-white uppercase tracking-wide lg:text-base font-medium mobile-text-xs">📍 Józefów</p>
              <p className="text-white uppercase tracking-wide lg:text-base font-medium mobile-text-xs">📍 Michalin</p>
              <p className="text-white uppercase tracking-wide lg:text-base font-medium mobile-text-xs">📍 Góra Kalwaria</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default HomePage;