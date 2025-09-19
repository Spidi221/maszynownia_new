import { Link } from 'wouter';
import { MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-react';

const Footer = ({ variant }) => {
  const isEMS = variant === 'ems';

  // Style bazowane na wariancie
  const bgColor = isEMS ? 'bg-ems-black' : 'bg-white';
  const textColor = isEMS ? 'text-white' : 'text-gym-navy-trust';
  const mutedColor = isEMS ? 'text-ems-gold' : 'text-gray-600';
  const accentColor = isEMS ? 'text-ems-gold hover:text-ems-gold-light' : 'text-[#a16207] hover:text-gym-yellow';
  const borderColor = isEMS ? 'border-ems-gold/20' : 'border-[#a16207]/20';
  const iconColor = isEMS ? 'text-ems-gold' : 'text-[#a16207]';
  const passionText = isEMS ? 'skutecznego treningu 💪' : 'szczęśliwego dzieciństwa 🤸';

  return (
    <footer className={`${bgColor} py-12 px-6`}>
      <div className="max-w-7xl mx-auto">
        {/* Główna sekcja z linkami */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">

          {/* Dane firmy */}
          <div className="space-y-3">
            <h4 className={`text-xl font-bold ${textColor} mb-4`}>
              {isEMS ? 'Maszynownia EMS' : 'Strefa Gimnastyki'}
            </h4>
            <div className={`${mutedColor} text-sm space-y-1`}>
              <p className="font-medium">Klaudia Nowicka</p>
              <p>NIP: 7311991516</p>
              <p>REGON: 368484010</p>
            </div>
          </div>

          {/* Kontakt */}
          <div className="space-y-3">
            <h4 className={`text-xl font-bold ${textColor} mb-4`}>Kontakt</h4>
            <div className={`${mutedColor} text-sm space-y-2`}>
              <a href="tel:696376377" className={`flex items-center gap-2 ${accentColor} transition-colors`}>
                <Phone className="h-4 w-4" />
                <span>696 376 377</span>
              </a>
              <a
                href={`mailto:${isEMS ? 'maszynowniaems@gmail.com' : 'maszynowniastrefagimnastyki@gmail.com'}`}
                className={`flex items-center gap-2 ${accentColor} transition-colors break-all`}
              >
                <Mail className="h-4 w-4 flex-shrink-0" />
                <span>{isEMS ? 'maszynowniaems@gmail.com' : 'maszynowniastrefagimnastyki@gmail.com'}</span>
              </a>
            </div>

            {/* Social Media */}
            <div className="flex gap-4 pt-2">
              <a
                href={isEMS ? "https://www.facebook.com/MaszynowniaEMS" : "https://www.facebook.com/MaszynowniaStrefaGimnastyki"}
                target="_blank"
                rel="noopener noreferrer"
                className={`${iconColor} hover:opacity-80 transition-opacity`}
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href={isEMS ? "https://www.instagram.com/maszynownia_ems" : "https://www.instagram.com/maszynownia_strefa_gimnastyki"}
                target="_blank"
                rel="noopener noreferrer"
                className={`${iconColor} hover:opacity-80 transition-opacity`}
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Lokalizacje */}
          <div className="space-y-3">
            <h4 className={`text-xl font-bold ${textColor} mb-4`}>
              {isEMS ? 'Lokalizacja' : 'Lokalizacje'}
            </h4>
            <div className={`${mutedColor} text-sm space-y-2`}>
              {isEMS ? (
                <div className="flex items-start gap-2">
                  <MapPin className={`h-4 w-4 ${iconColor} mt-0.5 flex-shrink-0`} />
                  <span>Józefów<br />ul. Generała Sikorskiego 113</span>
                </div>
              ) : (
                <>
                  <div className="flex items-start gap-2">
                    <MapPin className={`h-4 w-4 ${iconColor} mt-0.5 flex-shrink-0`} />
                    <span>Józefów - ul. Dolna 19</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <MapPin className={`h-4 w-4 ${iconColor} mt-0.5 flex-shrink-0`} />
                    <span>Michalin - ul. Sienkiewicza 2</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <MapPin className={`h-4 w-4 ${iconColor} mt-0.5 flex-shrink-0`} />
                    <span>Góra Kalwaria<br />ul. Ojca Papczyńskiego 1a</span>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Informacje prawne */}
          <div className="space-y-3">
            <h4 className={`text-xl font-bold ${textColor} mb-4`}>Informacje prawne</h4>
            <div className="space-y-2">
              <Link href="/polityka-prywatnosci">
                <a className={`block text-sm ${accentColor} transition-colors`}>
                  Polityka prywatności
                </a>
              </Link>
              <Link href="/regulamin">
                <a className={`block text-sm ${accentColor} transition-colors`}>
                  Regulamin
                </a>
              </Link>
              <Link href="/rodo">
                <a className={`block text-sm ${accentColor} transition-colors`}>
                  RODO
                </a>
              </Link>
              <Link href="/cookies">
                <a className={`block text-sm ${accentColor} transition-colors`}>
                  Polityka cookies
                </a>
              </Link>
            </div>
          </div>
        </div>

        {/* Linia oddzielająca i copyright */}
        <div className={`border-t ${borderColor} pt-6`}>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className={`${mutedColor} text-sm text-center md:text-left`}>
              © 2025 Maszynownia. Wszystkie prawa zastrzeżone.
            </div>

            <div className={`${mutedColor} text-sm text-center md:text-right`}>
              Strona wykonana z pasją do {passionText}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;