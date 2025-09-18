import { useState, useEffect } from 'react';
import { Cookie, X, Check } from 'lucide-react';
import { Link } from 'wouter';

const CookiesBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    // Sprawdź czy użytkownik już zaakceptował cookies
    const cookiesAccepted = localStorage.getItem('cookiesAccepted');
    if (!cookiesAccepted) {
      // Pokaż banner po 1 sekundzie
      setTimeout(() => setIsVisible(true), 1000);
    }
  }, []);

  const acceptAllCookies = () => {
    localStorage.setItem('cookiesAccepted', 'all');
    localStorage.setItem('cookiesDate', new Date().toISOString());
    setIsVisible(false);
  };

  const acceptNecessaryCookies = () => {
    localStorage.setItem('cookiesAccepted', 'necessary');
    localStorage.setItem('cookiesDate', new Date().toISOString());
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[9999] p-4 md:p-6">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">

          {/* Main Banner */}
          <div className="p-6 md:p-8">
            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6">

              {/* Icon & Content */}
              <div className="flex-1 flex items-start gap-4">
                <div className="p-3 bg-ems-gold/10 rounded-full">
                  <Cookie className="h-6 w-6 text-ems-gold" />
                </div>

                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Dbamy o Twoją prywatność 🍪
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Używamy plików cookie, aby zapewnić najlepsze doświadczenia na naszej stronie.
                    Cookies pomagają nam analizować ruch, personalizować treści i wyświetlać istotne informacje.
                    {' '}
                    <button
                      onClick={() => setShowDetails(!showDetails)}
                      className="text-ems-gold hover:text-ems-gold-light font-medium transition-colors"
                    >
                      {showDetails ? 'Ukryj szczegóły' : 'Pokaż szczegóły'}
                    </button>
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
                <button
                  onClick={acceptNecessaryCookies}
                  className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-full font-medium hover:bg-gray-50 transition-colors text-sm"
                >
                  Tylko niezbędne
                </button>
                <button
                  onClick={acceptAllCookies}
                  className="px-6 py-3 bg-ems-gold text-white rounded-full font-medium hover:bg-ems-gold-light transition-colors shadow-lg text-sm flex items-center justify-center gap-2"
                >
                  <Check className="h-4 w-4" />
                  Akceptuj wszystkie
                </button>
              </div>
            </div>

            {/* Details Section */}
            {showDetails && (
              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="grid md:grid-cols-3 gap-4">

                  {/* Necessary Cookies */}
                  <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                    <h4 className="font-semibold text-green-800 mb-2">
                      ✅ Niezbędne (zawsze aktywne)
                    </h4>
                    <p className="text-green-700 text-sm">
                      Wymagane do prawidłowego działania strony. Nie można ich wyłączyć.
                    </p>
                  </div>

                  {/* Analytics Cookies */}
                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                    <h4 className="font-semibold text-blue-800 mb-2">
                      📊 Analityczne
                    </h4>
                    <p className="text-blue-700 text-sm">
                      Pomagają nam zrozumieć, jak użytkownicy korzystają ze strony.
                    </p>
                  </div>

                  {/* Marketing Cookies */}
                  <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                    <h4 className="font-semibold text-purple-800 mb-2">
                      📣 Marketingowe
                    </h4>
                    <p className="text-purple-700 text-sm">
                      Pozwalają wyświetlać spersonalizowane treści i reklamy.
                    </p>
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap items-center gap-4">
                  <Link href="/polityka-prywatnosci">
                    <a className="text-sm text-ems-gold hover:text-ems-gold-light font-medium">
                      Polityka Prywatności
                    </a>
                  </Link>
                  <Link href="/cookies">
                    <a className="text-sm text-ems-gold hover:text-ems-gold-light font-medium">
                      Polityka Cookies
                    </a>
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* Close button */}
          <button
            onClick={() => setIsVisible(false)}
            className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="Zamknij"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookiesBanner;