import { Router, Route } from 'wouter';
import { HelmetProvider } from 'react-helmet-async';
import HomePage from './pages/HomePage';
import EMSPage from './pages/EMSPage';
import GymnasticsPage from './pages/GymnasticsPage';
import NewsPage from './pages/NewsPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import RODOPage from './pages/RODOPage';
import CookiesBanner from './components/CookiesBanner';
import SEOHead from './components/SEOHead';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <CookiesBanner />
        <Route path="/">
          <SEOHead
            title="Maszynownia - Trening EMS i Gimnastyka dla Dzieci | Józefów"
            description="Odkryj trening EMS dla dorosłych i zajęcia gimnastyczne dla dzieci w Maszynowni. Dwie strefy, jeden cel: zdrowie i sprawność. Zapraszamy do Józefowa."
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
