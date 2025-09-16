import { Router, Route } from 'wouter';
import { HelmetProvider } from 'react-helmet-async';
import HomePage from './pages/HomePage';
import EMSPage from './pages/EMSPage';
import SEOHead from './components/SEOHead';

function App() {
  return (
    <HelmetProvider>
      <Router>
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

        <Route path="/gimnastyka">
          <div className="min-h-screen bg-gym-yellow text-white flex items-center justify-center">
            <h1 className="text-4xl">Gimnastyka Page - Coming Soon</h1>
          </div>
        </Route>
      </Router>
    </HelmetProvider>
  )
}

export default App
