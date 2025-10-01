import SEOHead from '../components/SEOHead';
import Footer from '../components/Footer';
import { ArrowLeft, FileText, AlertCircle, Shield, Users, Heart, Calendar } from 'lucide-react';
import { Link, useLocation } from 'wouter';

const RegulaminPage = () => {
  const [location] = useLocation();
  const params = new URLSearchParams(location.split('?')[1]);
  const from = params.get('from');

  // Smart back link based on referrer
  const backLink = from === 'ems' ? '/ems' : from === 'gym' ? '/strefagimnastyki' : '/';
  const backText = from === 'ems' ? 'Powrót do EMS' : from === 'gym' ? 'Powrót do Strefy Gimnastyki' : 'Powrót do strony głównej';

  return (
    <>
      <SEOHead
        title="Regulamin Usług - Maszynownia"
        description="Regulamin świadczenia usług treningowych EMS i zajęć gimnastycznych dla dzieci w Maszynowni Józefów. Warunki korzystania z zajęć, rezerwacji i płatności."
        canonical="/regulamin"
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
              <FileText className="h-10 w-10 text-ems-gold" />
              Regulamin Świadczenia Usług
            </h1>
            <p className="text-gray-300 mt-2">Ostatnia aktualizacja: 18 stycznia 2025</p>
          </div>
        </header>

        {/* Content */}
        <main className="max-w-4xl mx-auto px-4 py-12">

          {/* Quick Info Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-ems-gold">
              <div className="flex items-center gap-3 mb-2">
                <Heart className="h-6 w-6 text-ems-gold" />
                <h3 className="font-bold text-gray-800">Trening EMS</h3>
              </div>
              <p className="text-gray-600 text-sm">Sesje 30-minutowe dla dorosłych. Indywidualne podejście 1:1.</p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-gym-yellow">
              <div className="flex items-center gap-3 mb-2">
                <Users className="h-6 w-6 text-gym-yellow" />
                <h3 className="font-bold text-gray-800">Gimnastyka dla Dzieci</h3>
              </div>
              <p className="text-gray-600 text-sm">Zajęcia dla dzieci 4-13 lat. Trzy lokalizacje w okolicy.</p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-blue-500">
              <div className="flex items-center gap-3 mb-2">
                <Calendar className="h-6 w-6 text-blue-500" />
                <h3 className="font-bold text-gray-800">Rezerwacja</h3>
              </div>
              <p className="text-gray-600 text-sm">SMS/Tel: 696 376 377 lub email zgodnie z usługą.</p>
            </div>
          </div>

          {/* Main Content */}
          <div className="bg-white rounded-lg shadow-lg p-8 prose prose-lg max-w-none">

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">I. POSTANOWIENIA OGÓLNE</h2>

              <h3 className="text-xl font-semibold text-gray-700 mb-3">§ 1. Definicje</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                Pojęcia używane w niniejszym Regulaminie oznaczają:
              </p>
              <ol className="list-decimal pl-6 text-gray-700 space-y-2">
                <li><strong>Usługodawca / Administrator</strong> – Klaudia Nowicka prowadząca działalność gospodarczą pod nazwą Maszynownia, NIP: 7311991516, REGON: 368484010, z siedzibą przy ul. Generała Sikorskiego 113, 05-410 Józefów.</li>
                <li><strong>Klient</strong> – osoba fizyczna, prawna lub jednostka organizacyjna nieposiadająca osobowości prawnej, korzystająca z usług oferowanych przez Usługodawcę.</li>
                <li><strong>Konsument</strong> – Klient będący osobą fizyczną dokonującą czynności prawnej niezwiązanej bezpośrednio z jej działalnością gospodarczą lub zawodową (w rozumieniu art. 22¹ Kodeksu cywilnego).</li>
                <li><strong>Usługi EMS</strong> – indywidualne treningi elektrostymulacji mięśniowej (EMS) dla osób dorosłych, trwające 30 minut, prowadzone w studiu w Józefowie.</li>
                <li><strong>Usługi Strefa Gimnastyki</strong> – zajęcia ogólnorozwojowe z elementami akrobatyki dla dzieci w wieku 4-13 lat, prowadzone w lokalizacjach: Józefów, Michalin, Góra Kalwaria oraz usługi dodatkowe (warsztaty, urodziny, obozy, zajęcia w placówkach).</li>
                <li><strong>Regulamin</strong> – niniejszy dokument określający zasady świadczenia usług przez Usługodawcę.</li>
                <li><strong>Karnet</strong> – pakiet wejść na zajęcia lub treningi, zakupiony przez Klienta, ważny przez określony czas.</li>
              </ol>

              <h3 className="text-xl font-semibold text-gray-700 mb-3 mt-6">§ 2. Zakres Regulaminu</h3>
              <ol className="list-decimal pl-6 text-gray-700 space-y-2">
                <li>Regulamin określa zasady świadczenia usług treningowych EMS oraz zajęć gimnastycznych dla dzieci oferowanych przez Usługodawcę.</li>
                <li>Regulamin dostępny jest nieodpłatnie w formie elektronicznej na stronie internetowej oraz w siedzibie Usługodawcy.</li>
                <li>Korzystanie z usług Usługodawcy oznacza akceptację niniejszego Regulaminu.</li>
                <li>Usługodawca zastrzega sobie prawo do wprowadzania zmian w Regulaminie. Zmiany wchodzą w życie w terminie 7 dni od daty publikacji na stronie internetowej. Klienci będą informowani o zmianach drogą elektroniczną lub podczas wizyty w studiu.</li>
              </ol>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">II. USŁUGI TRENINGOWE EMS</h2>

              <h3 className="text-xl font-semibold text-gray-700 mb-3">§ 3. Charakterystyka Usług EMS</h3>
              <ol className="list-decimal pl-6 text-gray-700 space-y-2">
                <li>Trening EMS polega na elektrostymulacji mięśniowej przy użyciu bezprzewodowego sprzętu profesjonalnego.</li>
                <li>Każda sesja trwa 30 minut i odbywa się w formie indywidualnej (1:1) z wykwalifikowanym trenerem.</li>
                <li>Usługodawca prowadzi najstarsze studio EMS w Józefowie (8 lat doświadczenia na rynku).</li>
                <li>Trening EMS jest odpowiedni dla każdego poziomu zaawansowania – program dostosowywany jest indywidualnie do możliwości i celów Klienta.</li>
              </ol>

              <h3 className="text-xl font-semibold text-gray-700 mb-3 mt-6">§ 4. Warunki Zdrowotne i Przeciwwskazania</h3>
              <ol className="list-decimal pl-6 text-gray-700 space-y-2">
                <li>Przed rozpoczęciem treningu EMS Klient zobowiązany jest do wypełnienia ankiety zdrowotnej oraz podpisania oświadczenia o stanie zdrowia.</li>
                <li><strong>Bezwzględne przeciwwskazania do treningu EMS:</strong>
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>Rozrusznik serca lub inne elektroniczne implanty medyczne</li>
                    <li>Ciąża</li>
                    <li>Padaczka</li>
                    <li>Nowotwory</li>
                    <li>Ostre stany zapalne</li>
                    <li>Poważne zaburzenia krążenia</li>
                    <li>Przepukliny brzuszne lub pachwinowe</li>
                    <li>Febra i stany gorączkowe</li>
                  </ul>
                </li>
                <li>W przypadku wątpliwości zdrowotnych Klient zobowiązany jest do konsultacji z lekarzem przed rozpoczęciem treningów.</li>
                <li>Klient ponosi pełną odpowiedzialność za podanie nieprawdziwych lub niekompletnych informacji dotyczących stanu zdrowia.</li>
              </ol>

              <h3 className="text-xl font-semibold text-gray-700 mb-3 mt-6">§ 5. Wymagania Dotyczące Stroju Treningowego</h3>
              <ol className="list-decimal pl-6 text-gray-700 space-y-2">
                <li>Do treningu EMS niezbędny jest specjalny strój treningowy (komplet: koszulka + spodenki/legginsy), który zapewnia odpowiedni kontakt elektrod ze skórą.</li>
                <li>Strój treningowy EMS można zakupić w studiu w cenie 200 zł.</li>
                <li>Klient może korzystać z własnego stroju EMS pod warunkiem, że spełnia on wymagania techniczne sprzętu.</li>
                <li>Usługodawca nie ponosi odpowiedzialności za brak efektów treningowych wynikający z użycia niewłaściwego stroju.</li>
              </ol>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">III. USŁUGI STREFA GIMNASTYKI</h2>

              <h3 className="text-xl font-semibold text-gray-700 mb-3">§ 6. Charakterystyka Zajęć Gimnastycznych</h3>
              <ol className="list-decimal pl-6 text-gray-700 space-y-2">
                <li>Usługodawca specjalizuje się w prowadzeniu zajęć ogólnorozwojowych z elementami akrobatyki dla dzieci i młodzieży w wieku 4-13 lat.</li>
                <li>Program łączy podstawowe ćwiczenia ruchowe z nauką prostych elementów akrobatycznych, rozwijając koordynację, siłę, gibkość i równowagę.</li>
                <li>Zajęcia prowadzone są przez wykwalifikowanych trenerów w przyjaznej i bezpiecznej atmosferze.</li>
                <li>Każde dziecko otrzymuje indywidualne wsparcie dostosowane do wieku i możliwości.</li>
              </ol>

              <h3 className="text-xl font-semibold text-gray-700 mb-3 mt-6">§ 7. Lokalizacje i Ceny Zajęć</h3>
              <ol className="list-decimal pl-6 text-gray-700 space-y-2">
                <li><strong>Józefów:</strong> 160 zł/miesiąc (4 zajęcia)</li>
                <li><strong>Michalin:</strong> 170 zł/miesiąc (4 zajęcia)</li>
                <li><strong>Góra Kalwaria:</strong> cennik dostępny po kontakcie z biurem</li>
                <li>Ceny mogą ulec zmianie – aktualne informacje dostępne na stronie internetowej oraz w biurze.</li>
              </ol>

              <h3 className="text-xl font-semibold text-gray-700 mb-3 mt-6">§ 8. Zgoda Rodzica/Opiekuna Prawnego</h3>
              <ol className="list-decimal pl-6 text-gray-700 space-y-2">
                <li>Dziecko może uczestniczyć w zajęciach wyłącznie po wyrażeniu pisemnej zgody przez rodzica lub opiekuna prawnego.</li>
                <li>Rodzic/opiekun zobowiązany jest do wypełnienia formularza zgłoszeniowego zawierającego:
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>Dane dziecka (imię, nazwisko, wiek, data urodzenia)</li>
                    <li>Dane kontaktowe rodzica/opiekuna</li>
                    <li>Informacje o stanie zdrowia dziecka i ewentualnych przeciwwskazaniach</li>
                    <li>Zgodę na przetwarzanie danych osobowych (RODO)</li>
                    <li>Zgodę na publikację wizerunku (opcjonalnie)</li>
                  </ul>
                </li>
                <li>W przypadku jakichkolwiek zmian w stanie zdrowia dziecka, rodzic zobowiązany jest niezwłocznie poinformować o tym trenera.</li>
              </ol>

              <h3 className="text-xl font-semibold text-gray-700 mb-3 mt-6">§ 9. Usługi Dodatkowe Strefa Gimnastyki</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                Usługodawca oferuje również następujące usługi dodatkowe:
              </p>

              <div className="bg-gray-50 p-4 rounded-lg mb-4">
                <h4 className="font-semibold text-gray-800 mb-2">1. Warsztaty gimnastyczne</h4>
                <p className="text-gray-700 text-sm">
                  Warsztaty weekendowe dla dzieci lubiących sport, które chcą rozwijać swoją gimnastykę akrobatyczną w okresie międzysemestralnym. Program realizowany w formie intensywnych sesji treningowych prowadzonych przez doświadczonych trenerów.
                </p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg mb-4">
                <h4 className="font-semibold text-gray-800 mb-2">2. Urodziny z gimnastyką</h4>
                <p className="text-gray-700 text-sm">
                  Organizacja urodzin dla dzieci od 5 roku życia. Dwugodzinne zajęcia łączące zabawę ruchową z elementami gimnastyki. Szczegóły i rezerwacje pod numerem 696 376 377.
                </p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg mb-4">
                <h4 className="font-semibold text-gray-800 mb-2">3. Pikniki sportowe</h4>
                <p className="text-gray-700 text-sm">
                  Organizacja eventów outdoor dla rodzin i grup. Animacje sportowe, zabawy ruchowe oraz pokazy akrobatyczne. Możliwość wynajmu na imprezy okolicznościowe.
                </p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg mb-4">
                <h4 className="font-semibold text-gray-800 mb-2">4. Zajęcia w placówkach (przedszkola/szkoły)</h4>
                <p className="text-gray-700 text-sm">
                  Możliwość prowadzenia zajęć gimnastycznych bezpośrednio w przedszkolach i szkołach. Usługodawca dysponuje własnym sprzętem sportowym. Warunki współpracy ustalane indywidualnie.
                </p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg mb-4">
                <h4 className="font-semibold text-gray-800 mb-2">5. Obozy akrobatyczne</h4>
                <p className="text-gray-700 text-sm">
                  Wakacyjne obozy gimnastyczno-akrobatyczne dla dzieci. Prowadzone przez Annę Błaszkiewicz – specjalistkę w zakresie akrobatyki i bezpieczeństwa treningów. Informacje o terminach i zapisach dostępne sezonowo.
                </p>
              </div>

              <ol className="list-decimal pl-6 text-gray-700 space-y-2">
                <li>Szczegółowe warunki świadczenia usług dodatkowych (ceny, terminy, wymagania) ustalane są indywidualnie z Klientem.</li>
                <li>Rezerwacja usług dodatkowych wymaga wcześniejszego kontaktu telefonicznego (696 376 377) lub mailowego (maszynowniastrefagimnastyki@gmail.com).</li>
              </ol>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">IV. REZERWACJA I REJESTRACJA</h2>

              <h3 className="text-xl font-semibold text-gray-700 mb-3">§ 10. Sposób Rezerwacji</h3>
              <ol className="list-decimal pl-6 text-gray-700 space-y-2">
                <li>Rezerwacja treningu EMS lub zajęć gimnastycznych odbywa się poprzez:
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>SMS lub telefon pod numerem: 696 376 377</li>
                    <li>Email: maszynowniaems@gmail.com (dla EMS)</li>
                    <li>Email: maszynowniastrefagimnastyki@gmail.com (dla gimnastyki)</li>
                    <li>Bezpośrednio w studiu/na sali gimnastycznej</li>
                  </ul>
                </li>
                <li>Rezerwacja uważana jest za potwierdzoną po otrzymaniu potwierdzenia ze strony Usługodawcy (SMS, email lub telefonicznie).</li>
                <li>W przypadku braku możliwości przyjęcia na zajęcia w wybranym terminie, Usługodawca zobowiązuje się zaproponować alternatywny termin.</li>
              </ol>

              <h3 className="text-xl font-semibold text-gray-700 mb-3 mt-6">§ 11. Odwoływanie Wizyt</h3>
              <ol className="list-decimal pl-6 text-gray-700 space-y-2">
                <li>Klient może odwołać zarezerwowaną wizytę bez konsekwencji finansowych, pod warunkiem zgłoszenia tego faktu co najmniej <strong>24 godziny przed planowaną godziną zajęć/treningu</strong>.</li>
                <li>Odwołanie wizyty należy zgłosić telefonicznie (696 376 377) lub mailowo.</li>
                <li>W przypadku odwołania wizyty z mniejszym wyprzedzeniem niż 24 godziny lub niestawienia się na zajęciach bez uprzedzenia, wizyta zostaje uznana za wykorzystaną i nie podlega zwrotowi ani przeniesieniu.</li>
                <li>Usługodawca zastrzega sobie prawo do anulowania lub przeniesienia zajęć z przyczyn niezależnych (choroba trenera, awaria sprzętu). W takim przypadku Klient zostanie niezwłocznie poinformowany, a niewykorzystane wejście zostanie zwrócone lub przeniesione na inny termin.</li>
              </ol>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">V. PŁATNOŚCI I KARNETY</h2>

              <h3 className="text-xl font-semibold text-gray-700 mb-3">§ 12. Cennik Usług EMS</h3>
              <ol className="list-decimal pl-6 text-gray-700 space-y-2">
                <li>Aktualny cennik treningów EMS dostępny jest na stronie internetowej oraz w studiu.</li>
                <li><strong>Najpopularniejszy karnet:</strong> 12 wejść za 1560 zł (130 zł/trening)</li>
                <li>Ceny karnetów zaczynają się od 79 zł za pojedynczy trening (w zależności od wybranego pakietu).</li>
                <li>Usługodawca zastrzega sobie prawo do wprowadzania promocji i ofert specjalnych – szczegóły na stronie lub w studiu.</li>
              </ol>

              <h3 className="text-xl font-semibold text-gray-700 mb-3 mt-6">§ 13. Formy Płatności</h3>
              <ol className="list-decimal pl-6 text-gray-700 space-y-2">
                <li>Płatność za usługi może być dokonana w następujących formach:
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>Gotówka w studiu/na sali gimnastycznej</li>
                    <li>Przelew bankowy na rachunek Usługodawcy (dane do przelewu przekazywane po rezerwacji)</li>
                  </ul>
                </li>
                <li>W przypadku płatności przelewem, karnet zostaje aktywowany po zaksięgowaniu wpłaty na koncie Usługodawcy.</li>
                <li>Na życzenie Klienta Usługodawca wystawia fakturę VAT lub rachunek.</li>
              </ol>

              <h3 className="text-xl font-semibold text-gray-700 mb-3 mt-6">§ 14. Ważność Karnetów</h3>
              <ol className="list-decimal pl-6 text-gray-700 space-y-2">
                <li>Karnety ważne są przez okres wskazany w ofercie (zazwyczaj 1-3 miesiące od daty zakupu).</li>
                <li>Po upływie okresu ważności niewykorzystane wejścia przepadają, chyba że Usługodawca postanowi inaczej (np. z powodu długotrwałej choroby Klienta potwierdzonej zaświadczeniem lekarskim).</li>
                <li>Karnety są imienne i nie podlegają przeniesieniu na osoby trzecie bez zgody Usługodawcy.</li>
              </ol>

              <h3 className="text-xl font-semibold text-gray-700 mb-3 mt-6">§ 15. Zwroty i Rezygnacja</h3>
              <ol className="list-decimal pl-6 text-gray-700 space-y-2">
                <li>Klient będący konsumentem może odstąpić od umowy w terminie 14 dni od dnia zawarcia umowy bez podania przyczyny, z zastrzeżeniem ust. 2.</li>
                <li>Jeżeli Klient zaczął korzystać z usług przed upływem 14 dni (np. odbył pierwsze zajęcia), traci prawo do odstąpienia od umowy zgodnie z art. 38 pkt 1 Ustawy o prawach konsumenta.</li>
                <li>W przypadku odstąpienia od umowy przed rozpoczęciem korzystania z usług, Usługodawca zwraca Klientowi całą zapłaconą kwotę w terminie 14 dni od otrzymania oświadczenia o odstąpieniu.</li>
                <li>Zwrot środków następuje na rachunek bankowy wskazany przez Klienta.</li>
                <li>W przypadku rezygnacji z karnetu po rozpoczęciu korzystania z usług (po wykorzystaniu co najmniej jednego wejścia), zwrot środków nie przysługuje.</li>
              </ol>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">VI. ZASADY BEZPIECZEŃSTWA I PORZĄDKU</h2>

              <h3 className="text-xl font-semibold text-gray-700 mb-3">§ 16. Obowiązki Klienta</h3>
              <ol className="list-decimal pl-6 text-gray-700 space-y-2">
                <li>Klient zobowiązuje się do:
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>Przestrzegania zasad bezpieczeństwa i higieny podczas zajęć/treningów</li>
                    <li>Stosowania się do poleceń trenera</li>
                    <li>Informowania o wszelkich dolegliwościach zdrowotnych podczas treningu</li>
                    <li>Odpowiedniego stroju sportowego (czysta, wygodna odzież)</li>
                    <li>Punktualnego stawienia się na zajęcia (spóźnienie powyżej 10 minut może skutkować odmową przeprowadzenia treningu bez zwrotu wejścia)</li>
                    <li>Kulturalnego zachowania i szacunku wobec innych uczestników oraz personelu</li>
                  </ul>
                </li>
                <li>W przypadku dzieci uczestniczących w zajęciach gimnastycznych, rodzic/opiekun zobowiązany jest do odebrania dziecka punktualnie po zakończeniu zajęć.</li>
              </ol>

              <h3 className="text-xl font-semibold text-gray-700 mb-3 mt-6">§ 17. Odpowiedzialność Usługodawcy</h3>
              <ol className="list-decimal pl-6 text-gray-700 space-y-2">
                <li>Usługodawca zapewnia bezpieczne warunki do prowadzenia zajęć oraz sprawny i certyfikowany sprzęt.</li>
                <li>Usługodawca prowadzi zajęcia zgodnie z najlepszymi praktykami branżowymi oraz zasadami BHP.</li>
                <li>Usługodawca nie ponosi odpowiedzialności za:
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>Szkody wynikłe z nieprzestrzegania przez Klienta zaleceń trenera lub Regulaminu</li>
                    <li>Ukryte schorzenia lub stany zdrowotne, o których Klient nie poinformował Usługodawcy</li>
                    <li>Rzeczy osobiste pozostawione na terenie obiektu (zaleca się korzystanie z szafek)</li>
                    <li>Brak efektów treningowych wynikający z nieregularności zajęć lub nieprzestrzegania zaleceń dietetycznych/zdrowotnych</li>
                  </ul>
                </li>
                <li>W przypadku wystąpienia kontuzji lub pogorszenia stanu zdrowia podczas zajęć z winy Usługodawcy, Klient uprawniony jest do dochodzenia roszczeń na zasadach ogólnych Kodeksu cywilnego.</li>
              </ol>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">VII. OCHRONA DANYCH OSOBOWYCH</h2>

              <h3 className="text-xl font-semibold text-gray-700 mb-3">§ 18. Przetwarzanie Danych Osobowych</h3>
              <ol className="list-decimal pl-6 text-gray-700 space-y-2">
                <li>Administratorem danych osobowych Klientów jest Klaudia Nowicka prowadząca działalność gospodarczą pod nazwą Maszynownia, NIP: 7311991516, REGON: 368484010.</li>
                <li>Dane osobowe Klientów przetwarzane są zgodnie z Rozporządzeniem Parlamentu Europejskiego i Rady (UE) 2016/679 (RODO) oraz polskimi przepisami o ochronie danych osobowych.</li>
                <li>Szczegółowe informacje o przetwarzaniu danych osobowych zawarte są w{' '}
                  <Link href="/polityka-prywatnosci">
                    <a className="text-ems-gold hover:text-ems-gold-light">Polityce Prywatności</a>
                  </Link>{' '}
                  oraz{' '}
                  <Link href="/rodo">
                    <a className="text-ems-gold hover:text-ems-gold-light">Klauzuli Informacyjnej RODO</a>
                  </Link>.
                </li>
                <li>Podanie danych osobowych jest dobrowolne, lecz niezbędne do zawarcia umowy i świadczenia usług.</li>
                <li>Klientowi przysługują prawa wynikające z RODO: prawo dostępu, sprostowania, usunięcia, ograniczenia przetwarzania, przenoszenia danych, wniesienia sprzeciwu oraz skargi do Prezesa UODO.</li>
              </ol>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">VIII. REKLAMACJE I ROZSTRZYGANIE SPORÓW</h2>

              <h3 className="text-xl font-semibold text-gray-700 mb-3">§ 19. Składanie Reklamacji</h3>
              <ol className="list-decimal pl-6 text-gray-700 space-y-2">
                <li>Klient ma prawo składać reklamacje dotyczące jakości świadczonych usług.</li>
                <li>Reklamacje można składać:
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>Pisemnie na adres: ul. Generała Sikorskiego 113, 05-410 Józefów</li>
                    <li>Mailowo: maszynowniaems@gmail.com lub maszynowniastrefagimnastyki@gmail.com</li>
                    <li>Telefonicznie: 696 376 377</li>
                  </ul>
                </li>
                <li>Reklamacja powinna zawierać:
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>Imię i nazwisko Klienta</li>
                    <li>Dane kontaktowe</li>
                    <li>Opis problemu i żądanie Klienta</li>
                    <li>Datę zdarzenia</li>
                  </ul>
                </li>
                <li>Usługodawca rozpatrzy reklamację w terminie <strong>14 dni roboczych</strong> od daty jej otrzymania.</li>
                <li>Odpowiedź na reklamację zostanie przesłana na adres email lub pocztowy wskazany przez Klienta.</li>
              </ol>

              <h3 className="text-xl font-semibold text-gray-700 mb-3 mt-6">§ 20. Pozasądowe Rozwiązywanie Sporów</h3>
              <ol className="list-decimal pl-6 text-gray-700 space-y-2">
                <li>Klient będący konsumentem ma prawo do skorzystania z pozasądowych sposobów rozpatrywania reklamacji i dochodzenia roszczeń.</li>
                <li>Konsument może złożyć skargę za pośrednictwem platformy ODR (Online Dispute Resolution): <a href="https://ec.europa.eu/consumers/odr" className="text-ems-gold hover:underline" target="_blank" rel="noopener noreferrer">https://ec.europa.eu/consumers/odr</a></li>
                <li>Konsument może zwrócić się do Powiatowego (Miejskiego) Rzecznika Konsumentów lub Wojewódzkiego Inspektoratu Inspekcji Handlowej.</li>
              </ol>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">IX. POSTANOWIENIA KOŃCOWE</h2>

              <h3 className="text-xl font-semibold text-gray-700 mb-3">§ 21. Prawo Właściwe</h3>
              <ol className="list-decimal pl-6 text-gray-700 space-y-2">
                <li>W sprawach nieuregulowanych niniejszym Regulaminem zastosowanie mają przepisy:
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>Ustawy z dnia 23 kwietnia 1964 r. Kodeks cywilny</li>
                    <li>Ustawy z dnia 30 maja 2014 r. o prawach konsumenta</li>
                    <li>Rozporządzenia Parlamentu Europejskiego i Rady (UE) 2016/679 (RODO)</li>
                    <li>Ustawy z dnia 18 lipca 2002 r. o świadczeniu usług drogą elektroniczną</li>
                  </ul>
                </li>
                <li>W przypadku sporu wynikłego z realizacji umowy, strony poddadzą się orzecznictwu sądu właściwego zgodnie z przepisami Kodeksu postępowania cywilnego.</li>
              </ol>

              <h3 className="text-xl font-semibold text-gray-700 mb-3 mt-6">§ 22. Kontakt</h3>
              <div className="bg-ems-gold/10 p-6 rounded-lg border border-ems-gold/30">
                <p className="text-gray-700 mb-4">
                  W przypadku pytań dotyczących Regulaminu lub świadczonych usług, prosimy o kontakt:
                </p>
                <div className="space-y-2 text-gray-700">
                  <p><strong>Email EMS:</strong> maszynowniaems@gmail.com</p>
                  <p><strong>Email Strefa Gimnastyki:</strong> maszynowniastrefagimnastyki@gmail.com</p>
                  <p><strong>Telefon/SMS:</strong> 696 376 377</p>
                  <p><strong>Adres:</strong> ul. Generała Sikorskiego 113, 05-410 Józefów</p>
                  <p><strong>NIP:</strong> 7311991516</p>
                  <p><strong>REGON:</strong> 368484010</p>
                </div>
              </div>

              <div className="mt-6 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                <p className="text-sm text-blue-800">
                  <strong>Obowiązuje od:</strong> 18 stycznia 2025<br />
                  <strong>Wersja:</strong> 1.0<br />
                  <strong>Regulamin dostępny pod adresem:</strong> www.maszynownia-jozefow.pl/regulamin
                </p>
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

export default RegulaminPage;
