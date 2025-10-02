# 🚀 Netlify Setup - Maszynownia CMS & Domain

**Instrukcja techniczna konfiguracji Netlify, CMS i domeny maszynownia.org**

---

## 📦 CZĘŚĆ 1: Deploy projektu na Netlify

### Opcja A: Deploy przez Netlify CLI (szybsze)
```bash
# Zainstaluj Netlify CLI
npm install -g netlify-cli

# Zaloguj się do Netlify
netlify login

# Deploy projektu
netlify deploy --prod
```

### Opcja B: Deploy przez GitHub (zalecane dla auto-deploy)
1. Wejdź na https://app.netlify.com
2. Kliknij **"Add new site"** → **"Import an existing project"**
3. Wybierz **GitHub**
4. Autoryzuj Netlify dostęp do GitHuba
5. Wybierz repo: **Spidi221/maszynownia_new**
6. **Build settings:**
   - Branch: `main`
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Node version: `20`
7. Kliknij **"Deploy site"**

**⏱ Pierwsze deployment: 2-3 minuty**

---

## 🔐 CZĘŚĆ 2: Konfiguracja Netlify Identity (CMS Login)

### Krok 1: Włącz Identity
1. W Netlify Dashboard twojej strony kliknij **"Identity"** w menu
2. Kliknij **"Enable Identity"**
3. Poczekaj 10 sekund aż się aktywuje

### Krok 2: Włącz Git Gateway (KRYTYCZNE!)
1. W zakładce **Identity** przewiń w dół do **"Services"**
2. Kliknij **"Enable Git Gateway"**
3. Wybierz **"Use GitHub"** (ponieważ repo jest na GitHubie)
4. Autoryzuj dostęp do GitHuba
5. ✅ Git Gateway włączony

### Krok 3: Skonfiguruj Registration
1. W **Identity** → **Settings and usage**
2. **Registration preferences:** Wybierz **"Invite only"** (bezpieczniejsze)
   - Tylko Ty możesz dodawać użytkowników
   - Zapobiega spamowi i nieautoryzowanemu dostępowi
3. Kliknij **"Save"**

### Krok 4: Dodaj pierwszego użytkownika (klientka)
1. W **Identity** kliknij **"Invite users"**
2. Wpisz email klientki: `[EMAIL KLIENTKI]`
3. Kliknij **"Send"**
4. Klientka otrzyma email z linkiem aktywacyjnym
5. Po kliknięciu w link ustawi hasło i będzie mogła się logować

### Krok 5: Dodaj drugiego użytkownika (mąż klientki)
1. Powtórz Krok 4 z emailem męża

---

## 🌐 CZĘŚĆ 3: Przepięcie domeny maszynownia.org

### ⚠️ WAŻNE: Bezpieczna strategia
Domena jest obecnie na **thecamels.org**. Przepinamy ją bez downtime.

### Krok 1: Dodaj domenę w Netlify
1. W Netlify Dashboard kliknij **"Domain management"**
2. Kliknij **"Add a domain"**
3. Wpisz: `maszynownia.org`
4. Netlify powie że domena jest już zajęta → kliknij **"Add domain"** (Netlify pozwoli Ci zweryfikować własność)

### Krok 2: Sprawdź obecne DNS (thecamels.org)
**Musisz wiedzieć gdzie domena jest zarejestrowana:**

1. Wejdź na https://who.is
2. Wpisz: `maszynownia.org`
3. Sprawdź **"Registrar"** (np. home.pl, OVH, Namecheap)
4. Sprawdź obecne **nameservery** (NS records)

**Przykład wyniku:**
```
Domain: maszynownia.org
Registrar: thecamels.org lub nazwa rejestratora
Nameservers:
  - ns1.thecamels.org
  - ns2.thecamels.org
```

### Krok 3a: Jeśli masz dostęp do DNS w thecamels.org
**Przepnij DNS records (bez zmiany nameserverów):**

1. Zaloguj się do panelu DNS w thecamels.org
2. Znajdź **DNS Zone Editor** lub **DNS Management**
3. **Usuń obecne A records dla maszynownia.org**
4. **Dodaj nowe A records Netlify:**

```
Type: A
Name: @
Value: 75.2.60.5
TTL: 3600

Type: A
Name: @
Value: 99.83.190.102
TTL: 3600

Type: A
Name: @
Value: 13.245.102.33
TTL: 3600

Type: A
Name: @
Value: 185.31.17.94
TTL: 3600
```

5. **Dodaj CNAME record dla www:**
```
Type: CNAME
Name: www
Value: [TWOJA-STRONA].netlify.app
TTL: 3600
```

6. **Zapisz zmiany**
7. **Poczekaj 30 minut - 2 godziny** (propagacja DNS)

### Krok 3b: Jeśli chcesz zmienić nameservery (bardziej kontroli)
**Zmień NS na Netlify DNS:**

1. W Netlify Dashboard → **Domain management** → **maszynownia.org**
2. Kliknij **"Use Netlify DNS"**
3. Netlify pokaże Ci nameservery:
```
dns1.p06.nsone.net
dns2.p06.nsone.net
dns3.p06.nsone.net
dns4.p06.nsone.net
```

4. **Zaloguj się do rejestratora domeny** (thecamels.org panel)
5. Znajdź **Nameservers** lub **DNS Settings**
6. **Zastąp obecne NS Netlify NS:**
   - Usuń: `ns1.thecamels.org`, `ns2.thecamels.org`
   - Dodaj: `dns1.p06.nsone.net`, `dns2.p06.nsone.net`, `dns3.p06.nsone.net`, `dns4.p06.nsone.net`
7. **Zapisz**
8. **Poczekaj 2-24 godziny** (propagacja NS to dłuższy proces)

### Krok 4: Weryfikacja domeny w Netlify
1. Wróć do Netlify → **Domain management**
2. Kliknij **"Verify DNS configuration"**
3. Netlify sprawdzi czy DNS jest poprawnie ustawione
4. Jeśli OK → zobaczysz ✅ **"Domain verified"**

### Krok 5: Włącz HTTPS (Let's Encrypt)
1. W **Domain management** przewiń do **HTTPS**
2. Kliknij **"Verify DNS configuration"** (jeśli nie zrobione)
3. Kliknij **"Provision certificate"**
4. Poczekaj 30 sekund
5. ✅ **HTTPS włączony** (darmowy SSL od Let's Encrypt)

### Krok 6: Włącz Force HTTPS
1. W **HTTPS** settings
2. Włącz **"Force HTTPS"** (slider na ON)
3. Teraz wszystkie requesty HTTP będą przekierowywane na HTTPS

---

## ✅ CZĘŚĆ 4: Weryfikacja że wszystko działa

### Test 1: Strona działa
1. Wejdź na: `https://maszynownia.org`
2. Strona powinna się załadować
3. Sprawdź czy:
   - Logo się wyświetla
   - Przyciski działają
   - Obrazki się ładują

### Test 2: CMS działa
1. Wejdź na: `https://maszynownia.org/admin`
2. Powinieneś zobaczyć panel logowania
3. Zaloguj się emailem i hasłem
4. Sprawdź czy widzisz **"Aktualności"** w menu
5. Spróbuj dodać testową aktualność

### Test 3: Publikacja działa
1. W CMS dodaj aktualność testową
2. Kliknij **"Publish"**
3. Poczekaj 1-2 minuty
4. Wejdź na stronę `/aktualnosci` (jeśli taka strona istnieje)
5. Sprawdź czy nowa aktualność się wyświetla

### Test 4: Auto-deploy działa
1. Zmień coś w kodzie lokalnie
2. Zrób commit i push do GitHuba
```bash
git add .
git commit -m "Test auto-deploy"
git push
```
3. Wejdź do Netlify Dashboard → **Deploys**
4. Powinieneś zobaczyć nowy deploy w toku
5. Po 1-2 minutach sprawdź czy zmiana jest widoczna na stronie

---

## 🔧 CZĘŚĆ 5: Opcjonalne ustawienia (zalecane)

### A. Przekierowania (Redirects)
Jeśli stara strona na thecamels.org miała różne URLe, możesz dodać przekierowania:

W `netlify.toml` dodaj:
```toml
[[redirects]]
  from = "/stare-url"
  to = "/nowe-url"
  status = 301

# Przykład: przekierowanie starego bloga
[[redirects]]
  from = "/blog/*"
  to = "/aktualnosci/:splat"
  status = 301
```

### B. Custom 404 page
```toml
[[redirects]]
  from = "/*"
  to = "/404.html"
  status = 404
```

### C. Email notifications
1. Netlify Dashboard → **Site settings** → **Build & deploy**
2. Przewiń do **Deploy notifications**
3. Dodaj **"Email notification"**
4. Wybierz **"Deploy succeeded"** i **"Deploy failed"**
5. Wpisz swój email
6. Będziesz dostawać powiadomienia o każdym deployu

---

## 📊 Monitoring i Analytics

### Google Analytics (opcjonalnie)
1. Stwórz konto GA4: https://analytics.google.com
2. Dodaj tracking ID do `index.html`:
```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### Netlify Analytics (płatne, ale proste)
1. Netlify Dashboard → **Analytics**
2. Kliknij **"Enable Analytics"** ($9/miesiąc)
3. Masz statystyki bez cookiesów i RODO

---

## 🆘 Troubleshooting

### CMS nie działa (403 error)
**Problem:** Git Gateway nie jest włączony
**Rozwiązanie:**
1. Netlify → Identity → Services → Enable Git Gateway

### Zmiany w CMS nie publikują się
**Problem:** Git Gateway nie ma uprawnień do repo
**Rozwiązanie:**
1. Netlify → Identity → Services → Git Gateway
2. Odłącz i podłącz ponownie GitHub

### Domena nie przepina się
**Problem:** DNS propagacja trwa długo
**Rozwiązanie:**
1. Sprawdź DNS: `nslookup maszynownia.org`
2. Poczekaj 2-24h
3. Wyczyść DNS cache: `ipconfig /flushdns` (Windows) lub `sudo dscacheutil -flushcache` (Mac)

### SSL nie działa
**Problem:** DNS nie jest jeszcze zweryfikowane
**Rozwiązanie:**
1. Poczekaj aż DNS się propaguje
2. Netlify automatycznie provisjonuje SSL jak DNS będzie OK

---

## 📝 Checklist końcowy

- [ ] Projekt zdeployowany na Netlify
- [ ] Netlify Identity włączone
- [ ] Git Gateway skonfigurowany
- [ ] Użytkownicy dodani (klientka + mąż)
- [ ] Domena maszynownia.org przepięta
- [ ] DNS zweryfikowany w Netlify
- [ ] HTTPS/SSL włączony
- [ ] Force HTTPS włączony
- [ ] Test CMS: logowanie działa
- [ ] Test CMS: dodawanie aktualności działa
- [ ] Test CMS: publikacja na stronie działa
- [ ] Auto-deploy z GitHub działa
- [ ] Klientka dostała instrukcję (INSTRUKCJA_CMS.md)
- [ ] Klientka wie jak się zalogować

---

## 🎉 GOTOWE!

Strona działa na maszynownia.org z pełnym CMS.
Klientka może dodawać aktualności przez /admin.
Każda zmiana w GitHub automatycznie deployuje się na stronę.

**Gratulacje! 🚀**
