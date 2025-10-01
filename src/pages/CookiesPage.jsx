import SEOHead from '../components/SEOHead';
import Footer from '../components/Footer';
import { ArrowLeft, Cookie, Shield, Settings, Eye, Info, CheckCircle } from 'lucide-react';
import { Link, useLocation } from 'wouter';

const CookiesPage = () => {
  const [location] = useLocation();
  const params = new URLSearchParams(location.split('?')[1]);
  const from = params.get('from');

  // Smart back link based on referrer
  const backLink = from === 'ems' ? '/ems' : from === 'gym' ? '/strefagimnastyki' : '/';
  const backText = from === 'ems' ? 'Powrót do EMS' : from === 'gym' ? 'Powrót do Strefy Gimnastyki' : 'Powrót do strony głównej';

  return (
    <>
      <SEOHead
        title="Polityka Cookies - Maszynownia"
        description="Polityka cookies Maszynownia Józefów. Dowiedz się jakie pliki cookies wykorzystujemy oraz jak zarządzać ustawieniami cookies w przeglądarce."
        canonical="/cookies"
      />

      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <header className="bg-gradient-to-r from-ems-black to-gray-800 text-white py-8">
          <div className="max-w-4xl mx-auto px-4">
            <Link href={backLink}>
              <a className="inline-flex items-center gap-2 text-ems-gold hover:text-ems-gold-light transition-colors mb-4">
                <ArrowLeft className="h-5 w-5" />
                <span>{backText}</span>
              </a>
            </Link>
            <h1 className="text-4xl font-bold flex items-center gap-3">
              <Cookie className="h-10 w-10 text-ems-gold" />
              Polityka Cookies
            </h1>
            <p className="text-gray-300 mt-2">Ostatnia aktualizacja: 18 stycznia 2025</p>
          </div>
        </header>

        {/* Content */}
        <main className="max-w-4xl mx-auto px-4 py-12">

          {/* Info Banner */}
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg mb-8">
            <div className="flex items-start gap-4">
              <Info className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-blue-900 mb-2">Minimalne użycie cookies</h3>
                <p className="text-blue-800 text-sm leading-relaxed">
                  Strona Maszynownia wykorzystuje minimalną ilość plików cookies wyłącznie w celach funkcjonalnych.
                  Nie używamy cookies analitycznych ani marketingowych bez Twojej wyraźnej zgody.
                </p>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="bg-white rounded-lg shadow-lg p-8 prose prose-lg max-w-none">

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <Cookie className="h-6 w-6 text-ems-gold" />
                Czym są pliki cookies?
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Pliki cookies (tzw. "ciasteczka") to małe pliki tekstowe zapisywane na Twoim urządzeniu
                (komputerze, tablecie, smartfonie) podczas przeglądania stron internetowych. Cookies pozwalają
                stronie "zapamiętać" Twoje działania i preferencje (takie jak język, rozmiar czcionki czy inne
                ustawienia wyświetlania) przez określony czas, dzięki czemu nie musisz wprowadzać ich ponownie
                przy każdej wizycie na stronie.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Podstawa prawna stosowania cookies</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                Stosowanie plików cookies na naszej stronie odbywa się na podstawie:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>
                  <strong>Art. 173 Ustawy z dnia 16 lipca 2004 r. Prawo telekomunikacyjne</strong> – wymaga zgody
                  użytkownika na przechowywanie lub uzyskiwanie dostępu do informacji w urządzeniu końcowym
                </li>
                <li>
                  <strong>Rozporządzenie RODO (UE) 2016/679</strong> – w zakresie przetwarzania danych osobowych
                  pozyskanych za pomocą cookies
                </li>
                <li>
                  <strong>Ustawa z dnia 18 lipca 2002 r. o świadczeniu usług drogą elektroniczną</strong> – reguluje
                  kwestie informowania użytkowników o stosowaniu cookies
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Jakie cookies wykorzystujemy?</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Nasza strona wykorzystuje następujące rodzaje plików cookies:
              </p>

              {/* Cookies niezbędne */}
              <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500 mb-4">
                <div className="flex items-start gap-3 mb-3">
                  <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-green-900 mb-2">1. Cookies niezbędne (wymagane)</h3>
                    <p className="text-green-800 text-sm mb-3">
                      Te pliki są absolutnie konieczne do prawidłowego funkcjonowania strony internetowej.
                      <strong> Nie wymagają zgody użytkownika</strong> zgodnie z art. 173 ust. 3 Prawa telekomunikacyjnego.
                    </p>
                  </div>
                </div>
                <div className="bg-white p-4 rounded">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-2 text-gray-700">Nazwa</th>
                        <th className="text-left py-2 text-gray-700">Cel</th>
                        <th className="text-left py-2 text-gray-700">Ważność</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-600">
                      <tr className="border-b border-gray-100">
                        <td className="py-2">cookies_accepted</td>
                        <td className="py-2">Zapamiętanie zgody użytkownika na cookies</td>
                        <td className="py-2">1 rok</td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <td className="py-2">session_id</td>
                        <td className="py-2">Utrzymanie sesji użytkownika (jeśli applicable)</td>
                        <td className="py-2">Sesja</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Cookies funkcjonalne */}
              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500 mb-4">
                <div className="flex items-start gap-3 mb-3">
                  <Settings className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-blue-900 mb-2">2. Cookies funkcjonalne (opcjonalne)</h3>
                    <p className="text-blue-800 text-sm mb-3">
                      Te pliki pozwalają na zapamiętanie wyborów użytkownika (np. języka, regionu) i zapewniają
                      ulepszone, bardziej spersonalizowane funkcje. <strong>Wymagają zgody użytkownika.</strong>
                    </p>
                  </div>
                </div>
                <div className="bg-white p-4 rounded">
                  <p className="text-gray-600 text-sm italic">
                    Obecnie nie wykorzystujemy cookies funkcjonalnych. Ta sekcja zostanie zaktualizowana w razie
                    wprowadzenia takich plików w przyszłości.
                  </p>
                </div>
              </div>

              {/* Cookies analityczne */}
              <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500 mb-4">
                <div className="flex items-start gap-3 mb-3">
                  <Eye className="h-6 w-6 text-purple-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-purple-900 mb-2">3. Cookies analityczne (opcjonalne)</h3>
                    <p className="text-purple-800 text-sm mb-3">
                      Pliki analityczne (np. Google Analytics) pozwalają na analizę sposobu korzystania ze strony,
                      co pomaga nam ulepszać jej funkcjonowanie. <strong>Wymagają wyraźnej zgody użytkownika.</strong>
                    </p>
                  </div>
                </div>
                <div className="bg-white p-4 rounded">
                  <p className="text-gray-600 text-sm italic">
                    Obecnie nie wykorzystujemy cookies analitycznych. W przypadku ich wprowadzenia w przyszłości,
                    poprosimy o Twoją wyraźną zgodę poprzez banner cookies.
                  </p>
                </div>
              </div>

              {/* Cookies marketingowe */}
              <div className="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-500">
                <div className="flex items-start gap-3 mb-3">
                  <Shield className="h-6 w-6 text-orange-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-orange-900 mb-2">4. Cookies marketingowe (opcjonalne)</h3>
                    <p className="text-orange-800 text-sm mb-3">
                      Pliki marketingowe służą do śledzenia aktywności użytkowników w celach reklamowych i personalizacji
                      reklam. <strong>Wymagają wyraźnej zgody użytkownika.</strong>
                    </p>
                  </div>
                </div>
                <div className="bg-white p-4 rounded">
                  <p className="text-gray-600 text-sm italic">
                    Obecnie nie wykorzystujemy cookies marketingowych. Nie udostępniamy danych reklamodawcom zewnętrznym.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Cookies podmiotów zewnętrznych</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                Nasza strona może zawierać elementy pochodzące od podmiotów zewnętrznych, które mogą umieszczać
                własne pliki cookies:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>
                  <strong>Google Maps</strong> – osadzone mapy lokalizacji naszych obiektów mogą wykorzystywać cookies Google.
                  Więcej informacji:{' '}
                  <a href="https://policies.google.com/privacy" className="text-ems-gold hover:underline" target="_blank" rel="noopener noreferrer">
                    Google Privacy Policy
                  </a>
                </li>
                <li>
                  <strong>Social Media (Facebook, Instagram)</strong> – w przypadku osadzonych treści społecznościowych
                  (np. wtyczek "Udostępnij") platformy mogą umieszczać własne cookies. Kontrola tych plików odbywa się
                  zgodnie z politykami prywatności odpowiednich platform.
                </li>
              </ul>
              <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200 mt-4">
                <p className="text-yellow-800 text-sm">
                  <strong>Uwaga:</strong> Nie mamy kontroli nad cookies ustawianymi przez podmioty zewnętrzne.
                  Zalecamy zapoznanie się z ich politykami prywatności.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Jak zarządzać plikami cookies?</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Masz pełną kontrolę nad plikami cookies. Możesz je zaakceptować, odrzucić lub usunąć w dowolnym momencie
                poprzez ustawienia swojej przeglądarki internetowej.
              </p>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Zarządzanie cookies w popularnych przeglądarkach:</h3>

                <div className="space-y-4">
                  {/* Chrome */}
                  <div className="border-l-4 border-ems-gold pl-4">
                    <h4 className="font-semibold text-gray-800 mb-1">Google Chrome</h4>
                    <ol className="text-sm text-gray-600 space-y-1">
                      <li>1. Kliknij ikonę menu (trzy kropki) w prawym górnym rogu</li>
                      <li>2. Wybierz "Ustawienia" → "Prywatność i bezpieczeństwo"</li>
                      <li>3. Kliknij "Pliki cookie i inne dane witryn"</li>
                      <li>4. Możesz zablokować wszystkie cookies, zablokować cookies podmiotów zewnętrznych lub usunąć konkretne pliki</li>
                    </ol>
                    <a href="https://support.google.com/chrome/answer/95647" className="text-ems-gold hover:underline text-sm" target="_blank" rel="noopener noreferrer">
                      → Pełna instrukcja Google Chrome
                    </a>
                  </div>

                  {/* Firefox */}
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-semibold text-gray-800 mb-1">Mozilla Firefox</h4>
                    <ol className="text-sm text-gray-600 space-y-1">
                      <li>1. Kliknij menu (trzy linie) w prawym górnym rogu</li>
                      <li>2. Wybierz "Ustawienia" → "Prywatność i bezpieczeństwo"</li>
                      <li>3. W sekcji "Ciasteczka i dane stron" wybierz odpowiedni poziom ochrony</li>
                      <li>4. Możesz wyświetlić i usunąć poszczególne pliki klikając "Zarządzaj danymi"</li>
                    </ol>
                    <a href="https://support.mozilla.org/pl/kb/wlaczanie-i-wylaczanie-ciasteczek" className="text-ems-gold hover:underline text-sm" target="_blank" rel="noopener noreferrer">
                      → Pełna instrukcja Mozilla Firefox
                    </a>
                  </div>

                  {/* Safari */}
                  <div className="border-l-4 border-purple-500 pl-4">
                    <h4 className="font-semibold text-gray-800 mb-1">Safari (macOS / iOS)</h4>
                    <ol className="text-sm text-gray-600 space-y-1">
                      <li>1. <strong>macOS:</strong> Safari → Preferencje → Prywatność</li>
                      <li>2. <strong>iOS:</strong> Ustawienia → Safari → Prywatność i bezpieczeństwo</li>
                      <li>3. Możesz zablokować wszystkie cookies lub tylko cookies podmiotów zewnętrznych</li>
                      <li>4. Aby usunąć cookies: Safari → Preferencje → Prywatność → "Zarządzaj danymi witryn"</li>
                    </ol>
                    <a href="https://support.apple.com/pl-pl/guide/safari/sfri11471/mac" className="text-ems-gold hover:underline text-sm" target="_blank" rel="noopener noreferrer">
                      → Pełna instrukcja Safari
                    </a>
                  </div>

                  {/* Edge */}
                  <div className="border-l-4 border-green-500 pl-4">
                    <h4 className="font-semibold text-gray-800 mb-1">Microsoft Edge</h4>
                    <ol className="text-sm text-gray-600 space-y-1">
                      <li>1. Kliknij menu (trzy kropki) w prawym górnym rogu</li>
                      <li>2. Wybierz "Ustawienia" → "Pliki cookie i uprawnienia witryny"</li>
                      <li>3. Kliknij "Pliki cookie i dane przechowywane w witrynie"</li>
                      <li>4. Możesz zablokować wszystkie cookies lub zarządzać nimi indywidualnie</li>
                    </ol>
                    <a href="https://support.microsoft.com/pl-pl/microsoft-edge/usuwanie-plik%C3%B3w-cookie-w-przegl%C4%85darce-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" className="text-ems-gold hover:underline text-sm" target="_blank" rel="noopener noreferrer">
                      → Pełna instrukcja Microsoft Edge
                    </a>
                  </div>

                  {/* Opera */}
                  <div className="border-l-4 border-red-500 pl-4">
                    <h4 className="font-semibold text-gray-800 mb-1">Opera</h4>
                    <ol className="text-sm text-gray-600 space-y-1">
                      <li>1. Kliknij menu Opera (logo O) w lewym górnym rogu</li>
                      <li>2. Wybierz "Ustawienia" → "Zaawansowane" → "Prywatność i bezpieczeństwo"</li>
                      <li>3. Kliknij "Pliki cookie i inne dane witryn"</li>
                      <li>4. Dostosuj ustawienia cookies według preferencji</li>
                    </ol>
                    <a href="https://help.opera.com/pl/latest/web-preferences/#cookies" className="text-ems-gold hover:underline text-sm" target="_blank" rel="noopener noreferrer">
                      → Pełna instrukcja Opera
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500 mt-6">
                <p className="text-red-800 text-sm">
                  <strong>Ważne:</strong> Zablokowanie wszystkich plików cookies może wpłynąć na prawidłowe działanie
                  naszej strony internetowej oraz wielu innych witryn, które odwiedzasz. Niektóre funkcje mogą nie być
                  dostępne lub działać nieprawidłowo.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Twoje prawa dotyczące cookies</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                Zgodnie z przepisami RODO oraz polskiego prawa telekomunikacyjnego, przysługują Ci następujące prawa:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">✓ Prawo do informacji</h4>
                  <p className="text-gray-600 text-sm">
                    Masz prawo wiedzieć, jakie cookies są wykorzystywane i w jakim celu.
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">✓ Prawo do zgody</h4>
                  <p className="text-gray-600 text-sm">
                    Możesz wyrazić lub cofnąć zgodę na wykorzystanie cookies w dowolnym momencie.
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">✓ Prawo do kontroli</h4>
                  <p className="text-gray-600 text-sm">
                    Możesz zarządzać cookies poprzez ustawienia przeglądarki.
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">✓ Prawo do usunięcia</h4>
                  <p className="text-gray-600 text-sm">
                    Możesz usunąć wszystkie zapisane cookies w dowolnym momencie.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Aktualizacje Polityki Cookies</h2>
              <p className="text-gray-700 leading-relaxed">
                Nasza Polityka Cookies może ulegać zmianom w związku z rozwojem strony internetowej, zmianami przepisów
                prawnych lub wprowadzeniem nowych funkcjonalności. O wszelkich istotnych zmianach będziemy informować
                poprzez:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-1 mt-3">
                <li>Aktualizację daty "Ostatnia aktualizacja" w górnej części dokumentu</li>
                <li>Powiadomienie na stronie głównej (dla zmian istotnych)</li>
                <li>Komunikat podczas pierwszego logowania po wprowadzeniu zmian</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-3">
                Zalecamy regularne sprawdzanie tej strony w celu zapoznania się z najnowszą wersją Polityki Cookies.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Powiązane dokumenty</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                Aby uzyskać pełny obraz zasad przetwarzania danych w Maszynowni, zachęcamy do zapoznania się z:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <Link href="/polityka-prywatnosci">
                  <a className="block bg-ems-gold/10 p-4 rounded-lg border-l-4 border-ems-gold hover:bg-ems-gold/20 transition-colors">
                    <h4 className="font-semibold text-gray-800 mb-1">Polityka Prywatności</h4>
                    <p className="text-gray-600 text-sm">Szczegółowe informacje o przetwarzaniu danych osobowych</p>
                  </a>
                </Link>
                <Link href="/rodo">
                  <a className="block bg-ems-gold/10 p-4 rounded-lg border-l-4 border-ems-gold hover:bg-ems-gold/20 transition-colors">
                    <h4 className="font-semibold text-gray-800 mb-1">Klauzula RODO</h4>
                    <p className="text-gray-600 text-sm">Informacja o przetwarzaniu danych zgodnie z RODO</p>
                  </a>
                </Link>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Kontakt w sprawie cookies</h2>
              <div className="bg-ems-gold/10 p-6 rounded-lg border border-ems-gold/30">
                <p className="text-gray-700 mb-4">
                  Jeśli masz pytania dotyczące naszej Polityki Cookies lub sposobu wykorzystania plików cookies,
                  skontaktuj się z nami:
                </p>
                <div className="space-y-2 text-gray-700">
                  <p><strong>Email EMS:</strong> maszynowniaems@gmail.com</p>
                  <p><strong>Email Strefa Gimnastyki:</strong> maszynowniastrefagimnastyki@gmail.com</p>
                  <p><strong>Telefon:</strong> 696 376 377</p>
                  <p><strong>Adres:</strong> ul. Generała Sikorskiego 113, 05-410 Józefów</p>
                </div>
                <div className="mt-4 pt-4 border-t border-ems-gold/30">
                  <p className="text-sm text-gray-600">
                    <strong>Administrator danych:</strong> Klaudia Nowicka<br />
                    <strong>NIP:</strong> 7311991516 | <strong>REGON:</strong> 368484010
                  </p>
                </div>
              </div>
            </section>

            <div className="mt-8 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
              <p className="text-sm text-blue-800">
                <strong>Dokument obowiązuje od:</strong> 18 stycznia 2025<br />
                <strong>Wersja:</strong> 1.0<br />
                <strong>Podstawa prawna:</strong> Art. 173 Prawa telekomunikacyjnego, RODO (UE) 2016/679, Ustawa o świadczeniu usług drogą elektroniczną
              </p>
            </div>

          </div>
        </main>

        {/* Footer */}
        <Footer variant="ems" />
      </div>
    </>
  );
};

export default CookiesPage;
