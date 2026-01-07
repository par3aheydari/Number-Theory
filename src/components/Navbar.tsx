import { Link, useLocation } from 'react-router-dom';
import { useI18n } from '../i18n/context';
import './Navbar.css';

export function Navbar() {
  const { t, language, setLanguage } = useI18n();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          <span className="logo-icon">🔢</span>
          <span className="logo-text">Prime Site</span>
        </Link>
        
        <div className="nav-links">
          <Link to="/" className={isActive('/') ? 'active' : ''}>
            {t('nav.home')}
          </Link>
          <Link to="/gcd-lcm" className={isActive('/gcd-lcm') ? 'active' : ''}>
            {t('nav.gcdLcm')}
          </Link>
          <Link to="/prime-checker" className={isActive('/prime-checker') ? 'active' : ''}>
            {t('nav.primeChecker')}
          </Link>
          <Link to="/prime-list" className={isActive('/prime-list') ? 'active' : ''}>
            {t('nav.primeList')}
          </Link>
          <Link to="/article" className={isActive('/article') ? 'active' : ''}>
            {t('nav.article')}
          </Link>
        </div>

        <div className="language-switcher">
          <button
            onClick={() => setLanguage('fa')}
            className={language === 'fa' ? 'active' : ''}
            aria-label="فارسی"
          >
            فارسی
          </button>
          <button
            onClick={() => setLanguage('en')}
            className={language === 'en' ? 'active' : ''}
            aria-label="English"
          >
            English
          </button>
        </div>
      </div>
    </nav>
  );
}
