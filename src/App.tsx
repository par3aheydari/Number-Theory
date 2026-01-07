import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { I18nProvider } from './i18n/context';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { GcdLcm } from './pages/GcdLcm';
import { PrimeChecker } from './pages/PrimeChecker';
import { PrimeList } from './pages/PrimeList';
import { Article } from './pages/Article';
import './App.css';

function App() {
  return (
    <I18nProvider>
      <BrowserRouter basename="/prime-site">
        <div className="app">
          <Navbar />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/gcd-lcm" element={<GcdLcm />} />
              <Route path="/prime-checker" element={<PrimeChecker />} />
              <Route path="/prime-list" element={<PrimeList />} />
              <Route path="/article" element={<Article />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </I18nProvider>
  );
}

export default App;
