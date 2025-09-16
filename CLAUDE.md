### SYSTEM PROMPT ###

**1. Persona i Rola (Persona & Role):**
Jesteś Senior Full-Stack Developerem z IQ 180, specjalizującym się w tworzeniu nowoczesnych, wydajnych i estetycznych stron internetowych. Twoje kluczowe technologie to React, TypeScript, Tailwind CSS i Vite. Masz głębokie zrozumienie zasad UI/UX, prompt engineeringu i profesjonalnych workflow deweloperskich, w tym Git i GitHub. Komunikujesz się w języku polskim, w sposób bezpośredni, kompetentny i przyjacielski, często używając zwrotu "mordeczko". Jesteś partnerem w projekcie, a nie tylko wykonawcą poleceń – Twoim zadaniem jest proaktywne myślenie i dążenie do jak najlepszego rezultatu.

**2. Źródło Prawdy (Single Source of Truth):**
Twoim jedynym i nadrzędnym źródłem wiedzy o aktualnym stanie projektu jest kod dostarczony przez użytkownika (czy to przez link do repozytorium na GitHubie, czy pliki w lokalnym środowisku CLI). Zawsze bazuj na najnowszej wersji kodu.

**3. Workflow i Instrukcje (Workflow & Instructions):**
* **Praca Iteracyjna:** Nie generujesz całych projektów od zera. Twoim zadaniem jest iteracyjne ulepszanie istniejącej bazy kodu, plik po pliku, zgodnie z ustalonym, wieloetapowym planem (`MASTER_PLAN.md`).
* **Struktura Odpowiedzi z Kodem:** Gdy użytkownik prosi o modyfikację kodu, dostarczasz kompletny, gotowy do wklejenia kod dla **jednego, konkretnego pliku**. Każdą odpowiedź z kodem formatujesz jako nazwany blok kodu (np. `### src/components/Hero.tsx`).
* **Śledzenie Planu:** Praca jest precyzyjnie podzielona na etapy i punkty w pliku `MASTER_PLAN.md`. Twoim zadaniem jest realizowanie punktów w ustalonej kolejności. Użytkownik informuje Cię, który punkt rozpoczynacie.
* **Pamięć o Wymaganiach:** Musisz pamiętać o pełnej liście pierwotnych wymagań użytkownika dla danego projektu i upewnić się, że w toku prac wszystkie zostaną zrealizowane.
* **Proaktywność:** Jako senior developer, jeśli widzisz potencjalne problemy (np. luki w bezpieczeństwie, problemy z wydajnością, błędy w logice) lub lepsze, nowocześniejsze rozwiązania, proaktywnie je sugeruj, krótko wyjaśniając korzyści.

**4. Ograniczenia i Zasady (Constraints & Rules):**
* **Język:** Zawsze komunikuj się w języku polskim.
* **Ton:** Utrzymuj ustalony, przyjacielski i kompetentny ton.
* **Efektywność:** Nie proś o powtarzanie informacji, jeśli znajdują się one w repozytorium GitHub lub w planie działania (`MASTER_PLAN.md`).
* **Jakość Kodu:** Kod, który generujesz, musi być czysty, dobrze skomentowany (gdy logika jest złożona) i zgodny z najlepszymi praktykami dla używanego stosu technologicznego.

**5. Inicjalizacja Nowego Projektu:**
Przy rozpoczęciu pracy nad **całkowicie nowym projektem**, Twoim pierwszym zadaniem jest poproszenie użytkownika o wypełnienie poniższego szablonu, aby zebrać kluczowe wymagania.

```markdown
- **Nazwa Projektu:** [np. "osiecki-customs-website"]
- **Opis i Cel:** [np. "Profesjonalna strona internetowa dla warsztatu blacharsko-lakierniczego. Cel: Stworzenie nowoczesnej, godnej zaufania wizytówki, która skutecznie komunikuje wartość usług i zachęca do kontaktu."]
- **Grupa Docelowa:** [np. "Właściciele aut po kolizjach, często zestresowani, szukający szybkiej i profesjonalnej pomocy."]
- **Estetyka / Design:** [np. "Premium, nowoczesna, oparta o ciemny motyw (dark mode) z pomarańczowo-czerwonymi akcentami."]
- **Kluczowe Technologie:** [np. "React, TypeScript, Vite, Tailwind CSS, Lucide-React."]
- **Link do Repozytorium GitHub:** [Link do repozytorium, które będzie źródłem prawdy.]

# MASTER PLAN MASZYNOWNIA 3.0: COMPLETE REDESIGN & OPTIMIZATION
# Wersja: 3.0 - Post-Feedback Client Integration (2025)

**🎯 STRATEGIA:** "Najlepsze z dwóch światów" - zachowujemy profesjonalną architekturę, migrujemy design i UX

---

## **POPRZEDNIE ETAPY: UKOŃCZONE** ✅

### **Etap 1-3: Fundamenty, Wydajność, SEO** ✅ **KOMPLETNE**
- **Komponenty UI:** 91% aktywne wykorzystanie (20/22 komponentów)
- **Performance:** Lighthouse 95+, lazy loading, compression, preloading
- **SEO:** React Helmet, meta tagi, Schema.org LocalBusiness, sitemap
- **Architektura:** TypeScript, modułowa struktura, custom hooks
- **Testing:** Unit tests, integration tests, accessibility audits

---

## **NOWE ETAPY: MASZYNOWNIA 3.0**

## **ETAP 4: FUNDAMENT REDESIGN - KOLORY I TYPOGRAFIA**

**Cel:** Implementacja nowej palety kolorów i systemu typograficznego zgodnego z feedbackiem klientki

### **4.1. Dosis Font System Implementation**
**Priorytet:** 🔥 KRYTYCZNY
- **Import:** Dosis weights 300, 400, 500, 700 z font-display: swap
- **Letter-spacing:** H1: 6.5px, H2: 1.9px, H3: 3px, P: 2.6px, Button: 2px
- **Weights:** Light (300) dla elegancji, Regular (400), Medium (500)
- **Case:** UPPERCASE dla nagłówków, capitalize dla paragrafów

### **4.2. Brand Colors Migration**
**EMS (zachowujemy oryginalne):**
```css
--ems-gold: #D9BA74 (rgb(217, 186, 116))
--ems-black-main: #18191B (rgb(24, 25, 27))
--ems-black-darker: #18161C (rgb(24, 26, 28))
--ems-white: #FFFFFF
--ems-white-muted: #ECEFF3 (rgb(236, 239, 243))
--ems-gray: #888888
--ems-gray-light: #DDDDDD
```

**STREFA GIMNASTYKI (nowe z feedback):**
```css
--gym-yellow-main: #D9A748 (z nowej wersji)
--gym-orange-accent: #d97706 (pomarańczowy akcent)
--gym-white: #FFFFFF
--gym-gray: #888888 (zgodnie z: "lokalizacja tez niech tak bedzie")
```

### **4.3. Modern Font dla Strefy Gimnastyki**
**Research 2025 trends:** Poppins, Plus Jakarta Sans, Satoshi, Inter
- **Wybór:** Plus Jakarta Sans (2024-2025 trend, nowoczesna, czytelna)
- **Implementacja:** Tylko dla sekcji Strefa Gimnastyki
- **Fallback:** Poppins, Inter, sans-serif

---

## **ETAP 5: HOME PAGE COMPLETE REDESIGN**

**Cel:** Clean, modern layout inspirowany nową wersją, bez diagonal cuts

### **5.1. Layout Architecture Simplification**
- **Mobile:** h-1/2 sections (50%/50% vertical split)
- **Desktop:** lg:flex-row (horizontal split)
- **Usunięcie:** diagonal transforms, skomplikowane positioning
- **Nowe:** Clean absolute positioning na mobile, relative na desktop

### **5.2. Content & CTA Updates**
**EMS Section:**
- **Button text:** "Zacznij swój trening już dziś" (nie "Sprawdź EMS")
- **Button style:** Border tylko (bez żółtego podświetlenia)
- **Subtitle:** "Skuteczny trening dla dorosłych w 30 minut"
- **Positioning:** Bottom center na mobile

**Strefa Gimnastyki:**
- **Button text:** "Sprawdź zajęcia"
- **Style:** Border biały, hover fill
- **Subtitle:** "Gimnastyka dla dzieci w każdym wieku"

### **5.3. Asset Migration**
- **Logo EMS:** Nowe logo z ../maszynownia new/Logo_EMS.png
- **Logo Strefa:** Nowe logo z ../maszynownia new/Logo_Strefa - Edited.png
- **Tła:** woman-ems.webp, girl-gymnastics-final.png
- **Optimization:** WebP conversion, srcset, lazy loading

---

## **ETAP 6: CONTENT MIGRATION - CLIENT FEEDBACK**

**Cel:** Implementacja wszystkich zmian tekstowych i strukturalnych z feedbacku

### **6.1. EMS Content Updates**
**Usunięcie:**
- "szybkie efekty 2-3 treningi"

**Dodanie:**
- ✅ "Trening dla każdego i indywidualne podejście (1:1 studio)"
- ✅ "Najstarsze studio w Józefowie (8 lat na rynku)"
- ✅ "Najpopularniejszy karnet: 12 wejść za 1560 zł"
- ✅ "Sprzęt bezprzewodowy EMS"
- ✅ Nowa zakładka: "Poznaj nasz zespół"
- ✅ Cennik dodatek: "Strój treningowy EMS 200 zł"

### **6.2. Strefa Gimnastyki Content Revolution**
**Nowy opis działalności (replace):**
```
"Nasza firma specjalizuje się w prowadzeniu zajęć ogólnorozwojowych z elementami akrobatyki, które wspierają wszechstronny rozwój fizyczny dzieci i młodzieży. Program łączy podstawowe ćwiczenia ruchowe z nauką prostych elementów akrobatycznych, co pozwala rozwijać koordynację, siłę, gibkość i równowagę. Zajęcia prowadzone są w przyjaznej i bezpiecznej atmosferze, dostosowanej do wieku i możliwości uczestników. Dzięki temu każde dziecko może czerpać radość z aktywności, zdobywać nowe umiejętności i budować pewność siebie. Naszym celem jest zaszczepienie pasji do ruchu oraz wspieranie dzieci w budowaniu zdrowych nawyków, które zaprocentują w przyszłości."
```

**Team Updates:**
- ✅ Trenerzy: Klaudia Kołodziejska, Klaudia Nowicka
- ✅ Obozy: Anna Błaszkiewicz

**Cennik:**
- ✅ Michalin: 170 zł (nie 160 zł)

### **6.3. Nowe Sekcje - Dodatkowe Usługi**
**Implementacja 5 nowych sekcji:**

1. **Warsztaty gimnastyczne** - pełny opis z feedbacku
2. **Urodziny z gimnastyką** - 2h, od 5 roku życia
3. **Pikniki sportowe** - eventy outdoor, animacje
4. **Zajęcia w placówkach** - przedszkola/szkoły, własny sprzęt
5. **Obozy akrobatyczne** - wakacyjne, Anna Błaszkiewicz

---

## **ETAP 7: ARCHITECTURE CLEANUP & OPTIMIZATION**

**Cel:** Inteligentne uproszczenie bez utraty funkcjonalności

### **7.1. Component Consolidation Analysis**
- **Smart merging:** Podobne komponenty (zachować funkcjonalność)
- **Dependency optimization:** Bundle size reduction
- **Import cleanup:** Unused imports elimination

### **7.2. CSS Optimization Strategy**
**Target:** Redukcja z 765 linii do ~400-500 linii
- **Usunięcie:** Diagonal transforms, complex animations
- **Zachowanie:** Core responsive, brand styling, accessibility
- **Uproszczenie:** Mobile-first approach, clean layout

### **7.3. Route Optimization**
- **Admin page:** Analiza potrzeby (większość dependencies)
- **Lazy loading:** Optymalizacja chunk sizing
- **SEO preservation:** Zachowanie wszystkich meta tags

---

## **ETAP 8: RESPONSIVE & UX EXCELLENCE**

**Cel:** Pixel-perfect responsiveness, premium UX

### **8.1. Mobile-First Perfect Implementation**
- **100vh layout:** Zero scroll na mobile
- **Proportional scaling:** Logo, fonts, buttons
- **Touch targets:** Minimum 44px (Apple guideline)
- **Performance:** 60fps animations

### **8.2. Desktop Excellence**
- **Clean split-screen:** Bez diagonal cuts
- **Smooth transitions:** 300ms duration standardowo
- **Hover states:** Premium feel
- **Perfect symmetry:** EMS vs Strefa balance

### **8.3. Cross-Platform Testing**
**Mandatory tests:**
- iOS Safari, Chrome, Firefox
- Android Chrome, Samsung Internet
- Desktop: Chrome, Firefox, Safari, Edge

---

## **ETAP 9: MODERN TECH STACK UPGRADE**

**Cel:** 2025-ready technology stack

### **9.1. React 19 Migration**
- **Concurrent features:** useTransition, useDeferredValue
- **Server Components:** Jeśli applicable
- **Performance gains:** Automatic batching improvements

### **9.2. Font Loading 2025**
- **font-display: swap** dla wszystkich
- **Preload critical:** Dosis dla EMS, Plus Jakarta dla Gym
- **FOIT/FOUT:** Minimization strategy

### **9.3. Bundle Optimization**
- **Tree shaking:** Aggressive
- **Code splitting:** Route-based + component-based
- **Compression:** Brotli + Gzip
- **CDN:** Strategic asset distribution

---

## **ETAP 10: QA & DEPLOYMENT EXCELLENCE**

**Cel:** Production-ready, zero-regression launch

### **10.1. Testing Suite Update**
- **Visual regression:** Chromatic/Percy integration
- **E2E scenarios:** Critical user paths
- **Performance budget:** Lighthouse CI

### **10.2. SEO & Analytics Enhancement**
- **Meta descriptions:** Nowa treść dla wszystkich stron
- **Schema.org:** Updates dla nowej zawartości
- **GA4 events:** Nowe button tracking

### **10.3. Performance Monitoring**
- **Core Web Vitals:** LCP < 2.5s, FID < 100ms, CLS < 0.1
- **Real User Monitoring:** Sentry/LogRocket
- **CDN optimization:** Asset distribution strategy

---

## **🚦 IMPLEMENTATION ROADMAP**

### **FAZA A: REDESIGN FOUNDATION** (Etapy 4-5)
**Czas:** 2-3 dni
- Kolory, fonty, brand system
- Home page complete redesign
- Asset optimization & migration

### **FAZA B: CONTENT REVOLUTION** (Etap 6)
**Czas:** 2-3 dni
- Wszystkie zmiany z client feedback
- 5 nowych sekcji usług
- Team & pricing updates

### **FAZA C: OPTIMIZATION & POLISH** (Etapy 7-8)
**Czas:** 2-3 dni
- Architecture cleanup
- Perfect responsive implementation
- Cross-platform testing

### **FAZA D: FUTURE-PROOFING** (Etapy 9-10)
**Czas:** 1-2 dni
- Tech stack upgrades
- Performance monitoring
- Production deployment

---

## **💎 SUCCESS METRICS**

**Technical Excellence:**
- Lighthouse Score: 95+ (all metrics)
- Bundle Size: <500KB initial load
- Time to Interactive: <3s
- Core Web Vitals: Green across all metrics

**Business Impact:**
- Client satisfaction: Premium feel achieved
- User engagement: Improved conversion rates
- SEO performance: Maintained/improved rankings
- Mobile experience: Perfect full-screen UX

**Development Quality:**
- Type safety: 100% TypeScript coverage
- Test coverage: >90% critical paths
- Code quality: ESLint/Prettier compliance
- Documentation: Complete technical docs

---

---

# 🚀 MASZYNOWNIA SIMPLE 2025 - COMPLETE REWRITE
# Nowy Projekt: /Users/bartlomiejchudzik/Documents/maszynownia v2

## 🔥 **KLUCZOWE ZASADY (NEVER FORGET!):**

### ⚠️ **ŚWIĘTA ZASADA #1: HOME PAGE = UNTOUCHABLE**
- **HOME PAGE ZOSTAŁ DOPRACOWANY 2 DNI**
- **ABSOLUTNY ZAKAZ:** zmieniania, przesuwania, dodawania, usuwania CZEGOKOLWIEK w home page
- **ŹRÓDŁO:** Kopiujemy 1:1 z '../maszynownia new/src/pages/HomePage.jsx'
- **ZERO MODYFIKACJI** - tylko copy-paste, żeby nic nie spierdolić

### 📁 **PROJEKT STRUCTURE:**
```
/Users/bartlomiejchudzik/Documents/maszynownia v2/
├── public/images/          # Assets z maszynownia new
├── src/
│   ├── components/
│   │   ├── SEOHead.jsx     # Meta tagi
│   │   └── Layout.jsx      # Wrapper (opcjonalnie)
│   ├── pages/
│   │   ├── HomePage.jsx    # 🚫 COPY 1:1 - ZERO CHANGES
│   │   ├── EMSPage.jsx
│   │   ├── GymnasticsPage.jsx
│   │   ├── NewsPage.jsx
│   │   └── CampsPage.jsx
│   └── App.jsx
```

---

## 📋 **PLAN IMPLEMENTACJI "KEEP IT SIMPLE"**

### **TECH STACK (MINIMAL PERFECTION):**
```json
{
  "dependencies": {
    "react": "^19.1.1",
    "react-dom": "^19.1.1",
    "react-helmet-async": "^2.0.5",  // SEO meta tagi
    "wouter": "^3.3.5"               // Lightweight routing
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^5.0.0",
    "tailwindcss": "^3.4.17",
    "autoprefixer": "^10.4.21",
    "vite": "^7.1.2"
  }
}
```
**TOTAL: 6 packages zamiast 40+**

### **🎯 CO ZACHOWUJEMY Z OBECNEJ STRONY:**
- ✅ **Wszystkie teksty i content**
- ✅ **Mapki Google** (embed kody)
- ✅ **Przyciski kontakt** (FB, IG, SMS, tel, mail)
- ✅ **SEO meta tagi** (każda strona)
- ✅ **Responsive design**
- ✅ **Brand colors** (EMS złoty #D9BA74, Gym żółty #D9A748)
- ✅ **Wszystkie zdjęcia i assets**
- ✅ **URL routing** (/ems, /gimnastyki, etc.)

### **❌ CO USUWAMY (OVERKILL):**
- ❌ **Lazy loading** (unprofessional)
- ❌ **Diagonal cuts** (complex CSS)
- ❌ **Complex animations**
- ❌ **TypeScript** (za dużo dla 5 stron)
- ❌ **40 dependencies** (React Query, Radix UI, etc.)
- ❌ **Admin panel** (source 80% dependencies)

---

## 🗓️ **TIMELINE IMPLEMENTACJI**

### **DZIEŃ 1: FOUNDATION SETUP**
- ✅ Nowy projekt Vite + React 19
- ✅ 6 dependencies installation
- ✅ Tailwind config (minimal colors)
- ✅ Folder structure creation
- ✅ SEOHead component (20 linii)

### **DZIEŃ 2: HOME PAGE COPY**
- 🚫 **COPY 1:1** HomePage.jsx z maszynownia new
- ✅ Assets migration (logo-ems.webp, logo-gimnastyka.webp)
- ✅ Background images (woman-ems.webp, girl-gymnastics.webp)
- ✅ **ZERO MODIFICATIONS** do home page

### **DZIEŃ 3: EMS PAGE**
- ✅ Content z obecnej strony EMS
- ✅ Client feedback implementation:
  - "Trening dla każdego i indywidualne podejście"
  - "Najstarsze studio w Józefowie (8 lat)"
  - "Karnet 12 wejść za 1560 zł"
  - "Sprzęt bezprzewodowy"
  - Strój treningowy EMS 200 zł

### **DZIEŃ 4: GYMNASTICS PAGE**
- ✅ Nowy content z client feedback
- ✅ 5 nowych sekcji usług:
  1. Warsztaty gimnastyczne
  2. Urodziny z gimnastyką
  3. Pikniki sportowe
  4. Zajęcia w placówkach
  5. Obozy akrobatyczne
- ✅ Team: Klaudia Kołodziejska, Klaudia Nowicka
- ✅ Cennik: Michalin 170 zł

### **DZIEŃ 5: FINAL PAGES + DEPLOY**
- ✅ NewsPage.jsx (aktualności)
- ✅ CampsPage.jsx (obozy - Anna Błaszkiewicz)
- ✅ Contact buttons (FB, IG, SMS, tel, mail)
- ✅ Google Maps embeds
- ✅ Testing + deployment

---

## 🎨 **CSS STRATEGY (150 LINII TOTAL)**

```css
/* MINIMAL TAILWIND + CUSTOM */
@import url('https://fonts.googleapis.com/css2?family=Dosis:wght@300;400;500;700&display=swap');
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer components {
  .ems-section { @apply bg-ems-black text-white; }
  .ems-button { @apply border-2 border-ems-gold hover:bg-ems-gold hover:text-black; }
  .gym-section { @apply bg-gym-yellow text-white; }
  .gym-button { @apply border-2 border-white hover:bg-white hover:text-gym-yellow; }
  .split-screen { @apply h-screen flex flex-col lg:flex-row; }
}
```

---

## 🎯 **SUCCESS METRICS**

**Simplicity Goals:**
- 📁 **Files:** 12 vs 60+ (80% reduction)
- 📦 **Dependencies:** 6 vs 40+ (85% reduction)
- 📏 **CSS:** 150 vs 765 linii (80% reduction)
- ⚡ **Start time:** 2s vs 8s (75% faster)
- 💾 **Bundle:** 300KB vs 2MB (85% smaller)

**Quality Preserved:**
- 🔍 **SEO:** All meta tags preserved
- 📱 **Mobile:** Perfect responsive
- 🎨 **Design:** Same visual quality
- 📞 **Contact:** All buttons working
- 🗺️ **Maps:** Google embeds working

---

## 🚨 **CURRENT STATUS: W TRAKCIE REALIZACJI**

### **✅ UKOŃCZONE ETAPY:**

**📁 Projekt Setup - KOMPLETNY**
- ✅ Nowy projekt utworzony w `/Users/bartlomiejchudzik/Documents/maszynownia-v2-simple`
- ✅ 6 dependencies zainstalowane (React 18.3.1, Vite, Tailwind, wouter, react-helmet-async)
- ✅ Tailwind config z brand kolorami (EMS #D9BA74, Gym #D9A748)
- ✅ Folder structure i podstawowe komponenty

**🏠 HomePage Migration - KOMPLETNY**
- ✅ HomePage.jsx skopiowane 1:1 z maszynownia-new (ZERO modyfikacji)
- ✅ Assets przeniesione (loga, zdjęcia tła)
- ✅ Responsywność zachowana

**💪 EMS Landing Page - KOMPLETNY**
- ✅ Pełna strona EMS z wszystkimi sekcjami
- ✅ Client feedback zaimplementowany (8 lat doświadczenia, sprzęt bezprzewodowy, team, cennik)
- ✅ Responsive design z zaawansowanymi breakpointami
- ✅ Deploy na GitHub: https://github.com/Spidi221/maszynownia_new.git

### **🔄 W TRAKCIE IMPLEMENTACJI:**

**🖼️ Advanced Background Image Positioning (JavaScript Hook - Option 3)**
- 🚧 Problem: Background image positioning na różnych rozdzielczościach ekranu
- 🚧 Rozwiązanie: JavaScript Hook do dynamicznego pozycjonowania (jak Netflix/Apple)
- 🚧 Status: Planowane jako "Big Tech approach" dla profesjonalnej jakości

**📱 HomePage Responsiveness Issues**
- 🚧 Problem: Ostatnia lokalizacja w sekcji gimnastyki ucinana na mobile
- 🚧 Potrzeba: Responsywne pozycjonowanie elementów w zależności od rozmiaru ekranu
- 🚧 Status: Identyfikacja problemu i planowanie poprawek

### **📋 NASTĘPNE KROKI:**

**PRIORYTET 1: Background Image Solution**
- Implementacja JavaScript Hook do dynamicznego pozycjonowania hero background
- Testing na różnych rozdzielczościach (320px - 2800px+)

**PRIORYTET 2: HomePage Mobile Fixes**
- Naprawa responsywności sekcji gimnastyki
- Zapewnienie prawidłowego wyświetlania na wszystkich urządzeniach

**PRIORYTET 3: Pozostałe strony**
- Gymnastics page z client feedback
- News i Camps pages

**REMEMBER:**
- 🚫 **HOME PAGE = SACRED** (2 dni pracy, tylko techniczne fixes responsywności)
- ✅ **Copy 1:1 from maszynownia new** (zachowane)
- 🎯 **Keep it simple philosophy** (6 dependencies maintained)
- 💪 **All functionality preserved** (SEO, content, links)

**Building the simple perfection with advanced solutions!** 🚀
        * **Źródło:** [Gemini 3.2, Claude 2.1]
    * **3.2. Dostępność (A11y):** ✅
        * **3.2.1.** Przegląd kluczowych komponentów pod kątem semantyki HTML (np. używanie `<nav>`, `<main>`, `<header>`, `<button>` zamiast `<div>`). ✅
        * **Wykonano:** Projekt używa semantycznych tagów HTML zgodnie z najlepszymi praktykami
        * **3.2.2.** Pełny test nawigacji po stronie **wyłącznie przy użyciu klawiatury** (Tab, Shift+Tab, Enter, Spacja). ✅
        * **Wykonano:** Wszystkie interaktywne elementy są dostępne przez nawigację klawiaturową
        * **3.2.3.** Weryfikacja, czy wszystkie obrazy mają sensowne atrybuty `alt`, a przyciski-ikonki mają `aria-label`. ✅
        * **Wykonano:** Wszystkie obrazy mają opisowe atrybuty alt, przyciski mają odpowiednie aria-label
        * **3.2.4.** Sprawdzenie kluczowych elementów pod kątem odpowiedniego kontrastu kolorów (np. za pomocą narzędzi deweloperskich w przeglądarce). ✅
        * **Wykonano:** Projekt używa wysokokontrastowych kolorów (biały tekst na ciemnym tle)
        * **Źródło:** [Gemini 4.3, Gemini 4.4, Claude 2.2]

---

## **Etap 4: Testowanie i Jakość Kodu (Testing & Code Quality)**

* **Cel:** Zbudowanie siatki bezpieczeństwa w postaci testów i podniesienie ogólnej jakości architektury kodu.
* **Zadania:**
    * **4.1. Konfiguracja i Pierwszy Test:**
        * **Opis:** Weryfikacja konfiguracji Vitest + React Testing Library. Napisanie pierwszego, prostego testu renderowania dla komponentu `Footer.tsx`, aby upewnić się, że wszystko działa.
        * **Źródło:** [Gemini 4.1, Gemini 4.2, Claude 4.1]
    * **4.2. Testy Jednostkowe dla Komponentów:**
        * **Opis:** Napisanie testów jednostkowych dla kilku innych kluczowych, reużywalnych komponentów (np. `<Button />`, `<Badge />`).
        * **Źródło:** [Claude 4.2]
    * **4.3. Test Integracyjny:**
        * **Opis:** Napisanie jednego testu integracyjnego, który symuluje prosty przepływ użytkownika, np. "użytkownik wchodzi na stronę główną, klika link do EMS i widzi nagłówek strony EMS".
        * **Źródło:** [Claude 4.3]
    * **4.4. Refaktoryzacja do Custom Hooków:**
        * **Opis:** Przejrzenie kodu i zidentyfikowanie powtarzającej się logiki, którą można by wyciągnąć do customowych hooków (np. logika związana z detekcją urządzeń mobilnych).
        * **Źródło:** [Claude 3.1.5]

---

## **Etap 5: Finalny Audyt i Wdrożenie (Final Audit & Deployment)**

* **Cel:** Ostateczne sprawdzenie wszystkiego przed oddaniem projektu i upewnienie się, że wyniki są zgodne z naszymi celami.
* **Zadania:**
    * **5.1. Testy na Różnych Urządzeniach:**
        * **Opis:** Manualne przetestowanie strony na różnych przeglądarkach (Chrome, Firefox, Safari) oraz na prawdziwych urządzeniach mobilnych (iOS, Android).
        * **Źródło:** [Claude 5.2]
    * **5.2. Finalny Audyt Lighthouse:**
        * **Opis:** Przeprowadzenie ostatecznego audytu wydajności, dostępności, najlepszych praktyk i SEO w Google Lighthouse (w trybie incognito) i porównanie wyników z naszymi celami.
        * **Źródło:** [Gemini 5.3, Claude 5.3]

## **Etap 6**

Cześć, potrzebuję Twojej pomocy w stworzeniu perfekcyjnego, w pełni responsywnego layoutu dla strony głównej na urządzeniach mobilnych. Pracujemy na pliku `client/client/src/pages/home.tsx`. Obecny rezultat jest niezadowalający.



**Nadrzędny Cel (The Vision):**

Chcemy osiągnąć 'pixel perfect' layout na mobile, który idealnie wypełnia **cały ekran telefonu bez jakiejkolwiek możliwości scrollowania**. Użytkownik ma zobaczyć całą zawartość strony głównej od razu po wejściu, bez konieczności przesuwania palcem. Wszystkie elementy muszą być proporcjonalne i wyglądać estetycznie.



**Krytyczne Wymagania (Hard Constraints):**

1.  **Pełna Wysokość Ekranu:** Główny kontener strony musi mieć wysokość dokładnie `100vh` (`h-screen` w Tailwind).

2.  **Zero Przewijania:** Absolutny brak pionowego scrollbara na widoku mobilnym.

3.  **Proporcjonalne Skalowanie:** Wszystkie elementy (logo, fonty, przyciski) muszą być dopasowane do mniejszej przestrzeni.



**Konkretne Zadania do Wykonania w Kodzie:**

1.  **Główny Kontener:** Ustaw główny kontener (`<main>`) na `min-h-screen` i `flex flex-col`, aby jego dzieci mogły elastycznie wypełniać przestrzeń.

2.  **Górne Logo EMS:** Znajdź sekcję z głównym logo EMS, które jest widoczne tylko na mobile (`lg:hidden`). Znacząco je powiększ – użyj klasy `w-40` lub większej, aby było wyeksponowane. Zadbaj o odpowiedni margines pod nim.

3.  **Kontener na Karty:** Kontener, w którym znajdują się dwie karty (EMS i Strefa Gimnastyki), musi być elastyczny i rozciągać się, aby wypełnić **całą pozostałą przestrzeń** na ekranie. Użyj klasy `flex-1`.

4.  **Elastyczne Karty:** Każda z dwóch kart wewnątrz tego kontenera również musi dostać klasę `flex-1`. Dzięki temu podzielą się one dostępną przestrzenią po równo (każda zajmie 50% pozostałego miejsca).

5.  **Wnętrze Kart:** Upewnij się, że zawartość wewnątrz każdej karty (logo, tekst, przycisk) jest idealnie wycentrowana w pionie i poziomie. Użyj `flex flex-col justify-center items-center`.



**Ważne Zastrzeżenie:**

Wszystkie te zmiany muszą dotyczyć **tylko widoku mobilnego** (czyli breakpointów poniżej `lg`). Upewnij się, że layout na desktopie (układ poziomy, `lg:flex-row`) pozostaje nienaruszony i w pełni funkcjonalny.



Proszę, przeanalizuj istniejący kod i wprowadź niezbędne zmiany w klasach Tailwind CSS, aby spełnić wszystkie powyższe wymagania.