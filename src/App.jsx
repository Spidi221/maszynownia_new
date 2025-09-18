import { Router, Route, useLocation } from 'wouter';
import { HelmetProvider } from 'react-helmet-async';
import { useEffect } from 'react';
import HomePage from './pages/HomePage';
import EMSPage from './pages/EMSPage';
import GymnasticsPage from './pages/GymnasticsPage';
import NewsPage from './pages/NewsPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import RODOPage from './pages/RODOPage';
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
            title="Maszynownia - Trening EMS i Gimnastyka dla Dzieci | Józefów"
            description="Odkryj trening EMS dla dorosłych (30 min) i zajęcia gimnastyczne dla dzieci w Maszynowni. Profesjonalne studio w Józefowie, Michalinie i Górze Kalwarii. Zapisz się już dziś!"
            canonical=""
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
      </Router>
    </HelmetProvider>
  )
}

export default App
