# 📊 Instrukcja Google Search Console - Maszynownia.org

**Google Search Console (GSC) to darmowe narzędzie od Google, które pomaga monitorować i optymalizować widoczność strony w wyszukiwarce. To kluczowe narzędzie dla SEO i pozycjonowania.**

---

## 🎯 OPCJA 1: SAMODZIELNA KONFIGURACJA (10 MINUT)

### Krok 1: Utwórz konto Google (jeśli nie masz)

Jeśli już masz konto Gmail/Google - pomiń ten krok.

1. Wejdź na: https://accounts.google.com
2. Kliknij **"Utwórz konto"**
3. Wypełnij dane (imię, nazwisko, email, hasło)
4. Potwierdź numer telefonu
5. Gotowe! Masz konto Google

---

### Krok 2: Dodaj stronę do Google Search Console

1. Wejdź na: **https://search.google.com/search-console**
2. Zaloguj się swoim kontem Google
3. Kliknij **"Rozpocznij"** (jeśli pierwszy raz) lub **"+ Dodaj zasób"** (lewy górny róg)

---

### Krok 3: Wybierz metodę weryfikacji

Google pokaże Ci dwie opcje:

**OPCJA A: Domena** (ZALECANA - łatwiejsza)
- Wybierz **"Domena"**
- Wpisz: `maszynownia.org` (bez https://)
- Kliknij **"Kontynuuj"**

**Co dalej:**
Google pokaże Ci **rekord TXT** do dodania w DNS (u nas to Netlify).

---

### Krok 4: Weryfikacja przez Netlify DNS (najprostsza metoda)

1. **Skopiuj rekord TXT** który pokazał Google (będzie wyglądał jak: `google-site-verification=XYZ123ABC...`)

2. **Wejdź do Netlify:**
   - Zaloguj się na: https://app.netlify.com
   - Przejdź do: **Sites** → **maszynownia** → **Domain management**
   - Kliknij **"DNS panel"** lub **"Go to DNS panel"**

3. **Dodaj rekord TXT:**
   - Kliknij **"Add new record"**
   - **Record type:** TXT
   - **Name:** @ (lub pozostaw puste)
   - **Value:** Wklej skopiowany kod od Google (google-site-verification=XYZ...)
   - **TTL:** 3600 (lub Auto)
   - Kliknij **"Save"**

4. **Wróć do Google Search Console:**
   - Kliknij **"Zweryfikuj"**
   - Może pojawić się błąd "nie znaleziono rekordu" → poczekaj 5-10 minut i spróbuj ponownie
   - Jak pojawi się ✅ **"Weryfikacja powiodła się"** → GOTOWE!

---

### Krok 5: Prześlij sitemap do Google

Sitemap to mapa strony, która pomaga Google indeksować wszystkie podstrony.

1. W Google Search Console kliknij **"Mapy witryny"** (w menu po lewej)
2. W polu **"Dodaj nową mapę witryny"** wpisz:
   ```
   https://maszynownia.org/sitemap.xml
   ```
3. Kliknij **"Prześlij"**
4. Status powinien zmienić się na **"Sukces"** (może zająć kilka minut)

---

### Krok 6: Zgłoś nowe aktualności do indeksacji (WAŻNE!)

**Za każdym razem gdy dodasz nowy post w CMS:**

1. Wejdź do Google Search Console
2. W górnym menu znajdź **"Inspekcja adresu URL"** (ikona lupy)
3. Wklej pełny link do nowego posta, np.:
   ```
   https://maszynownia.org/strefagimnastyki/aktualnosci/2025-10-15-nowe-zajecia
   ```
4. Kliknij Enter
5. Google sprawdzi stronę → kliknij **"Poproś o indeksację"**
6. Poczekaj 1-2 minuty → zobaczysz **"Wysłano żądanie indeksacji"**

**Dlaczego to ważne?**
Bez zgłoszenia Google może zindeksować nowy post dopiero po 3-7 dniach. Ręczne zgłoszenie skraca to do 1-2 dni!

---

### Krok 7: Monitorowanie (opcjonalnie)

Co tydzień możesz sprawdzać:

1. **"Wydajność"** (menu lewe):
   - Ile kliknięć dostała strona
   - Jakie słowa kluczowe działają
   - Pozycje w Google

2. **"Pokrycie"**:
   - Czy wszystkie strony są zindeksowane
   - Czy Google ma problemy z indeksacją

3. **"Ulepszenia"**:
   - Czy strona jest mobile-friendly
   - Szybkość ładowania (Core Web Vitals)

---

## 🤝 OPCJA 2: DODAJ BARTKA JAKO ADMINISTRATORA (5 MINUT)

**Jeśli wolisz, żebym ja zajął się konfiguracją i monitoringiem Google Search Console:**

### Krok 1: Utwórz konto Google (jeśli nie masz)

Jeśli już masz Gmail - pomiń ten krok.

1. Wejdź na: https://accounts.google.com
2. Utwórz konto Google (jak w Opcji 1, Krok 1)

---

### Krok 2: Dodaj stronę do GSC i zweryfikuj

1. Wejdź na: https://search.google.com/search-console
2. Zaloguj się swoim kontem
3. Kliknij **"Dodaj zasób"**
4. Wybierz **"Domena"** → wpisz `maszynownia.org`
5. Skopiuj rekord TXT od Google

---

### Krok 3: Prześlij rekord TXT do Bartka

**Napisz do mnie SMS lub email:**

📧 **Email:** chudzikbartlomiej1@gmail.com
📱 **SMS:** [Twój numer który znasz]

**Treść wiadomości:**
```
Hej Bartek!

Dodaję stronę maszynownia.org do Google Search Console.

Rekord TXT do dodania w Netlify DNS:
google-site-verification=XYZ123ABC... (TWÓJ KOD)

Proszę dodaj i daj znać jak gotowe!
```

**Ja dodam rekord w Netlify** (mam dostęp), potwierdzę weryfikację i wrócę do Ciebie.

---

### Krok 4: Dodaj Bartka jako administratora (po weryfikacji)

1. W Google Search Console (po weryfikacji)
2. Kliknij **"Ustawienia"** (ikonka koła zębatego, lewy dolny róg)
3. Kliknij **"Użytkownicy i uprawnienia"**
4. Kliknij **"+ DODAJ UŻYTKOWNIKA"**
5. Wpisz email: **chudzikbartlomiej1@gmail.com**
6. Wybierz uprawnienia: **"Właściciel"** (pełne uprawnienia)
7. Kliknij **"Dodaj"**

**Gotowe!** Teraz ja będę mógł:
- Zgłaszać nowe posty do indeksacji (po każdym Twoim dodaniu aktualności)
- Monitorować pozycje w Google
- Optymalizować SEO
- Wysyłać Ci raporty co miesiąc (opcjonalnie)

---

## ❓ FAQ - Najczęstsze pytania

### Czy GSC kosztuje?
Nie, Google Search Console jest całkowicie **darmowe**.

### Czy muszę coś płacić za indeksację?
Nie, indeksacja w Google jest **darmowa** i automatyczna. GSC tylko przyspiesza proces.

### Jak długo trwa indeksacja po zgłoszeniu?
Zwykle **1-3 dni**. Bez zgłoszenia może to zająć 1-2 tygodnie.

### Czy muszę zgłaszać każdy nowy post?
**Zalecane, ale nie obowiązkowe.** Google i tak w końcu znajdzie nowy post, ale zgłoszenie przyspiesza to 5-10x.

### Co jeśli mam problem z weryfikacją?
**Opcja A:** Poczekaj 15 minut (DNS musi się zaktualizować) i spróbuj ponownie
**Opcja B:** Napisz do Bartka - ogarnę to zdalnie 😊

### Jak często powinienem sprawdzać GSC?
**Minimum 1x w miesiącu.** Wystarczy zobaczyć czy strona jest zindeksowana i czy są kliknięcia.

---

## 📞 Kontakt w razie pytań

**Bartek Chudzik**
📧 chudzikbartlomiej1@gmail.com
📱 [Twój numer]

**Pamiętaj:**
- GSC to kluczowe narzędzie dla SEO
- Zgłaszaj nowe posty po każdym dodaniu
- Monitoruj minimum 1x w miesiącu
- Jak coś nie działa - krzycz do mnie!

---

**Powodzenia! 🚀**
Jeśli masz pytania lub potrzebujesz pomocy - jestem na telefon lub email.
