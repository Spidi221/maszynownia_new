import SEOHead from '../components/SEOHead';
import Footer from '../components/Footer';
import { ArrowLeft, Shield, Lock, FileText, Users, Eye, AlertCircle } from 'lucide-react';
import { Link } from 'wouter';

const RODOPage = () => {
  return (
    <>
      <SEOHead
        title="RODO - Ochrona Danych Osobowych | Maszynownia"
        description="Informacja o przetwarzaniu danych osobowych zgodnie z RODO. Dowiedz się jak chronimy Twoje dane w Maszynowni Józefów podczas treningów EMS i zajęć gimnastycznych."
        canonical="/rodo"
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
            <h1 className="text-4xl font-bold flex items-center gap-3">
              <Shield className="h-10 w-10 text-ems-gold" />
              Klauzula Informacyjna RODO
            </h1>
            <p className="text-gray-300 mt-2">Zgodnie z art. 13 RODO</p>
          </div>
        </header>

        {/* Content */}
        <main className="max-w-4xl mx-auto px-4 py-12">

          {/* Info Cards Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">

            <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-ems-gold">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-ems-gold/10 rounded-lg">
                  <Users className="h-6 w-6 text-ems-gold" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-800 mb-2">Administrator Danych</h3>
                  <p className="text-gray-600">
                    <strong>Klaudia Nowicka</strong><br />
                    Maszynownia<br />
                    NIP: 7311991516<br />
                    REGON: 368484010
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-ems-gold">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-ems-gold/10 rounded-lg">
                  <Lock className="h-6 w-6 text-ems-gold" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-800 mb-2">Kontakt w sprawie danych</h3>
                  <p className="text-gray-600">
                    Email: maszynowniaems@gmail.com<br />
                    Tel: 696 376 377<br />
                    Adres: ul. Gen. Sikorskiego 113<br />
                    05-410 Józefów
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Main Content */}
          <div className="bg-white rounded-lg shadow-lg p-8">

            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <FileText className="h-6 w-6 text-ems-gold" />
                Informacja o przetwarzaniu danych osobowych
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Zgodnie z art. 13 ust. 1 i 2 Rozporządzenia Parlamentu Europejskiego i Rady (UE) 2016/679
                z dnia 27 kwietnia 2016 r. w sprawie ochrony osób fizycznych w związku z przetwarzaniem
                danych osobowych i w sprawie swobodnego przepływu takich danych oraz uchylenia dyrektywy
                95/46/WE (RODO), informujemy że:
              </p>
            </div>

            {/* Cele przetwarzania */}
            <section className="mb-10">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                📋 Cele i podstawy prawne przetwarzania
              </h3>
              <div className="space-y-3">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Świadczenie usług treningowych</h4>
                  <p className="text-gray-600 text-sm">
                    Podstawa: art. 6 ust. 1 lit. b RODO - wykonanie umowy
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Marketing własnych produktów</h4>
                  <p className="text-gray-600 text-sm">
                    Podstawa: art. 6 ust. 1 lit. f RODO - prawnie uzasadniony interes
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Wysyłka newslettera</h4>
                  <p className="text-gray-600 text-sm">
                    Podstawa: art. 6 ust. 1 lit. a RODO - zgoda osoby
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Rozliczenia podatkowe i księgowe</h4>
                  <p className="text-gray-600 text-sm">
                    Podstawa: art. 6 ust. 1 lit. c RODO - obowiązek prawny
                  </p>
                </div>
              </div>
            </section>

            {/* Prawa osoby */}
            <section className="mb-10">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                ⚖️ Twoje prawa dotyczące danych osobowych
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <Eye className="h-5 w-5 text-ems-gold mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Prawo dostępu</h4>
                    <p className="text-gray-600 text-sm">Możesz uzyskać informacje o przetwarzaniu swoich danych</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FileText className="h-5 w-5 text-ems-gold mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Prawo do sprostowania</h4>
                    <p className="text-gray-600 text-sm">Możesz poprawić nieprawidłowe dane</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <AlertCircle className="h-5 w-5 text-ems-gold mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Prawo do usunięcia</h4>
                    <p className="text-gray-600 text-sm">"Prawo do bycia zapomnianym"</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Lock className="h-5 w-5 text-ems-gold mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Prawo do ograniczenia</h4>
                    <p className="text-gray-600 text-sm">Możesz ograniczyć przetwarzanie danych</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Shield className="h-5 w-5 text-ems-gold mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Prawo do sprzeciwu</h4>
                    <p className="text-gray-600 text-sm">Możesz sprzeciwić się przetwarzaniu</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Users className="h-5 w-5 text-ems-gold mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Prawo do przenoszenia</h4>
                    <p className="text-gray-600 text-sm">Możesz otrzymać dane w formacie elektronicznym</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Okres przechowywania */}
            <section className="mb-10">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                ⏱️ Okres przechowywania danych
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-ems-gold">•</span>
                  <span>Dane związane z umową: przez okres trwania umowy + 6 lat (obowiązki podatkowe)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-ems-gold">•</span>
                  <span>Dane marketingowe: do czasu wniesienia sprzeciwu</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-ems-gold">•</span>
                  <span>Newsletter: do czasu wycofania zgody</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-ems-gold">•</span>
                  <span>Roszczenia: do czasu przedawnienia roszczeń</span>
                </li>
              </ul>
            </section>

            {/* Odbiorcy danych */}
            <section className="mb-10">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                🤝 Odbiorcy danych
              </h3>
              <p className="text-gray-700 mb-3">Twoje dane mogą być udostępniane:</p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <ul className="space-y-2 text-gray-700">
                  <li>✓ Biuro księgowe (rozliczenia)</li>
                  <li>✓ Dostawcy systemów IT (hosting, email)</li>
                  <li>✓ Podmioty marketingowe (za zgodą)</li>
                  <li>✓ Organy państwowe (na podstawie przepisów prawa)</li>
                </ul>
              </div>
            </section>

            {/* Informacje dodatkowe */}
            <section className="mb-10">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                ℹ️ Informacje dodatkowe
              </h3>
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
                <h4 className="font-semibold text-blue-800 mb-2">Dobrowolność podania danych</h4>
                <p className="text-blue-700">
                  Podanie danych jest dobrowolne, jednak niezbędne do zawarcia umowy i świadczenia usług treningowych.
                </p>
              </div>
              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded mt-4">
                <h4 className="font-semibold text-yellow-800 mb-2">Prawo do skargi</h4>
                <p className="text-yellow-700">
                  Przysługuje Ci prawo wniesienia skargi do Prezesa Urzędu Ochrony Danych Osobowych,
                  gdy uznasz, że przetwarzanie danych narusza przepisy RODO.
                </p>
              </div>
            </section>

            {/* Bezpieczeństwo */}
            <section className="mb-10">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                🔒 Bezpieczeństwo danych
              </h3>
              <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                <p className="text-gray-700">
                  Stosujemy odpowiednie środki techniczne i organizacyjne zapewniające bezpieczeństwo danych osobowych:
                </p>
                <ul className="mt-3 space-y-1 text-gray-700">
                  <li>• Szyfrowanie transmisji danych</li>
                  <li>• Kontrola dostępu do systemów</li>
                  <li>• Regularne kopie zapasowe</li>
                  <li>• Szkolenia personelu z ochrony danych</li>
                  <li>• Procedury reagowania na incydenty</li>
                </ul>
              </div>
            </section>

            {/* Kontakt */}
            <section className="bg-ems-gold/10 p-6 rounded-lg border border-ems-gold/30">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                📧 Masz pytania dotyczące danych osobowych?
              </h3>
              <p className="text-gray-700 mb-4">
                Skontaktuj się z nami - chętnie odpowiemy na wszystkie pytania:
              </p>
              <div className="space-y-2 text-gray-700">
                <p><strong>Email:</strong> maszynowniaems@gmail.com</p>
                <p><strong>Telefon:</strong> 696 376 377</p>
                <p><strong>Adres:</strong> ul. Generała Sikorskiego 113, 05-410 Józefów</p>
              </div>
            </section>

          </div>
        </main>

        {/* Footer */}
        <Footer variant="ems" />
      </div>
    </>
  );
};

export default RODOPage;