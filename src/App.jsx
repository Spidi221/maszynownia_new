import { Router, Route, useLocation } from 'wouter';
import { HelmetProvider } from 'react-helmet-async';
import { useEffect } from 'react';
import HomePage from './pages/HomePage';
import EMSPage from './pages/EMSPage';
import GymnasticsPage from './pages/GymnasticsPage';
import NewsPage from './pages/NewsPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import RODOPage from './pages/RODOPage';
import RegulaminPage from './pages/RegulaminPage';
import CookiesPage from './pages/CookiesPage';
import CookiesBanner from './components/CookiesBanner';
import SEOHead from './components/SEOHead';

function ScrollToTop() {
  const [location] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
}

function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <CookiesBanner />
        <Route path="/">
          <SEOHead
            title="Maszynownia Józefów - Trening EMS i Gimnastyka dla Dzieci | #1 Studio w Józefowie"
            description="🔥 Najstarsze studio EMS w Józefowie (8 lat doświadczenia) + zajęcia gimnastyczne dla dzieci 4-13 lat. Trening EMS w 30 min = efekty 90-minutowego treningu! 3 lokalizacje: Józefów, Michalin, Góra Kalwaria. Zapisz się dziś!"
            keywords="EMS Józefów, trening elektrostymulacja Józefów, gimnastyka dzieci Józefów, Michalin, Góra Kalwaria, studio fitness Józefów, trening 30 minut, akrobatyka dzieci, zajęcia ogólnorozwojowe, Maszynownia"
            canonical=""
            location="Józefów"
            businessType="fitness"
          />
          <HomePage />
        </Route>

        {/* EMS Page */}
        <Route path="/ems">
          <EMSPage />
        </Route>

        <Route path="/strefagimnastyki">
          <GymnasticsPage />
        </Route>

        <Route path="/strefagimnastyki/aktualnosci">
          <NewsPage />
        </Route>

        {/* Legal Pages */}
        <Route path="/polityka-prywatnosci">
          <PrivacyPolicyPage />
        </Route>

        <Route path="/rodo">
          <RODOPage />
        </Route>

        <Route path="/regulamin">
          <RegulaminPage />
        </Route>

        <Route path="/cookies">
          <CookiesPage />
        </Route>
      </Router>
    </HelmetProvider>
  )
}

export default App
