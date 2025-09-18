import SEOHead from '../components/SEOHead';
import Footer from '../components/Footer';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'wouter';

const PrivacyPolicyPage = () => {
  return (
    <>
      <SEOHead
        title="Polityka Prywatności - Maszynownia"
        description="Polityka prywatności Maszynownia Józefów. Zasady przetwarzania danych osobowych w studio EMS i na zajęciach gimnastycznych dla dzieci."
        canonical="/polityka-prywatnosci"
      />

      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <header className="bg-gradient-to-r from-ems-black to-gray-800 text-white py-8">
          <div className="max-w-4xl mx-auto px-4">
            <Link href="/">
              <a className="inline-flex items-center gap-2 text-ems-gold hover:text-ems-gold-light transition-colors mb-4">
                <ArrowLeft className="h-5 w-5" />
                <span>Powrót do strony głównej</span>
              </a>
            </Link>
            <h1 className="text-4xl font-bold">Polityka Prywatności</h1>
            <p className="text-gray-300 mt-2">Ostatnia aktualizacja: 18 stycznia 2025</p>
          </div>
        </header>

        {/* Content */}
        <main className="max-w-4xl mx-auto px-4 py-12">
          <div className="bg-white rounded-lg shadow-lg p-8 prose prose-lg max-w-none">

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">1. Administrator Danych Osobowych</h2>
              <p className="text-gray-700 leading-relaxed">
                Administratorem Państwa danych osobowych jest Klaudia Nowicka prowadząca działalność gospodarczą
                pod nazwą Maszynownia, NIP: 7311991516, REGON: 368484010, z siedzibą w Józefowie.
              </p>
              <p className="text-gray-700 leading-relaxed mt-2">
                Kontakt z administratorem:<br />
                Email: maszynowniaems@gmail.com<br />
                Telefon: 696 376 377
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">2. Cele i Podstawy Przetwarzania</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                Przetwarzamy Państwa dane osobowe w następujących celach:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Świadczenie usług treningowych (podstawa: umowa)</li>
                <li>Prowadzenie korespondencji i obsługa zapytań (podstawa: prawnie uzasadniony interes)</li>
                <li>Wysyłka newslettera (podstawa: zgoda)</li>
                <li>Prowadzenie księgowości i rozliczeń podatkowych (podstawa: obowiązek prawny)</li>
                <li>Marketing własnych produktów i usług (podstawa: prawnie uzasadniony interes)</li>
                <li>Dochodzenie roszczeń i obrona przed roszczeniami (podstawa: prawnie uzasadniony interes)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">3. Zakres Przetwarzanych Danych</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                W zależności od celu, możemy przetwarzać następujące kategorie danych:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Dane identyfikacyjne: imię, nazwisko</li>
                <li>Dane kontaktowe: adres email, numer telefonu</li>
                <li>Dane rozliczeniowe: NIP, adres</li>
                <li>Dane dotyczące stanu zdrowia (tylko za wyraźną zgodą, w zakresie niezbędnym do świadczenia usług treningowych)</li>
                <li>Dane dotyczące uczestnictwa w zajęciach</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">4. Odbiorcy Danych</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                Państwa dane mogą być przekazywane:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Podmiotom świadczącym usługi księgowe i prawne</li>
                <li>Dostawcom systemów IT i hostingu</li>
                <li>Podmiotom świadczącym usługi marketingowe</li>
                <li>Kurierom i firmom transportowym (w przypadku wysyłki)</li>
                <li>Organom państwowym na podstawie przepisów prawa</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">5. Okres Przechowywania Danych</h2>
              <p className="text-gray-700 leading-relaxed">
                Dane osobowe przechowujemy przez okres:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Trwania umowy oraz przez 6 lat po jej zakończeniu (dla celów podatkowych)</li>
                <li>Do czasu wycofania zgody (dane przetwarzane na podstawie zgody)</li>
                <li>Do czasu skutecznego wniesienia sprzeciwu (marketing bezpośredni)</li>
                <li>Do czasu przedawnienia roszczeń</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">6. Prawa Osób</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                Przysługują Państwu następujące prawa:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Prawo dostępu do swoich danych osobowych</li>
                <li>Prawo do sprostowania danych</li>
                <li>Prawo do usunięcia danych ("prawo do bycia zapomnianym")</li>
                <li>Prawo do ograniczenia przetwarzania</li>
                <li>Prawo do przenoszenia danych</li>
                <li>Prawo do sprzeciwu wobec przetwarzania</li>
                <li>Prawo do wycofania zgody (bez wpływu na zgodność z prawem przetwarzania przed wycofaniem)</li>
                <li>Prawo do wniesienia skargi do Prezesa UODO</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">7. Cookies</h2>
              <p className="text-gray-700 leading-relaxed">
                Nasza strona wykorzystuje pliki cookies w celu zapewnienia prawidłowego funkcjonowania serwisu,
                analizy ruchu oraz personalizacji treści. Szczegółowe informacje znajdują się w{' '}
                <Link href="/cookies">
                  <a className="text-ems-gold hover:text-ems-gold-light">Polityce Cookies</a>
                </Link>.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">8. Bezpieczeństwo Danych</h2>
              <p className="text-gray-700 leading-relaxed">
                Stosujemy odpowiednie środki techniczne i organizacyjne w celu zapewnienia bezpieczeństwa
                Państwa danych osobowych, w tym szyfrowanie, kontrolę dostępu oraz regularne kopie zapasowe.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">9. Zmiany Polityki</h2>
              <p className="text-gray-700 leading-relaxed">
                Zastrzegamy sobie prawo do wprowadzania zmian w niniejszej Polityce Prywatności.
                O wszelkich zmianach będziemy informować poprzez umieszczenie aktualnej wersji na naszej stronie.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">10. Kontakt</h2>
              <p className="text-gray-700 leading-relaxed">
                W przypadku pytań dotyczących przetwarzania danych osobowych prosimy o kontakt:<br />
                Email: maszynowniaems@gmail.com<br />
                Telefon: 696 376 377<br />
                Adres: ul. Generała Sikorskiego 113, 05-410 Józefów
              </p>
            </section>

          </div>
        </main>

        {/* Footer */}
        <Footer variant="ems" />
      </div>
    </>
  );
};

export default PrivacyPolicyPage;