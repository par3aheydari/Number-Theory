import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { useI18n } from '../i18n/context';
import './Navbar.css';

export function Navbar() {
  const { t, language, setLanguage } = useI18n();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <button className="hamburger" onClick={toggleMenu} aria-label="Menu">
        <span></span>
        <span></span>
        <span></span>
      </button>
      {isMenuOpen && (
        <div className="nav-overlay" onClick={closeMenu}></div>
      )}
      <nav className={`navbar ${isMenuOpen ? 'open' : ''}`}>
        <div className="nav-container">
        <Link to="/" className="nav-logo" onClick={closeMenu}>
          <span className="logo-icon">🔬</span>
          <span className="logo-text">Number Theory</span>
        </Link>
        
        <div className="nav-links">
          <Link to="/" className={isActive('/') ? 'active' : ''} onClick={closeMenu}>
            <span className="nav-icon">🏠</span>
            <span>{t('nav.home')}</span>
          </Link>
          <Link to="/gcd-lcm" className={isActive('/gcd-lcm') ? 'active' : ''} onClick={closeMenu}>
            <span className="nav-icon">🔢</span>
            <span>{t('nav.gcdLcm')}</span>
          </Link>
          <Link to="/prime-checker" className={isActive('/prime-checker') ? 'active' : ''} onClick={closeMenu}>
            <span className="nav-icon">✓</span>
            <span>{t('nav.primeChecker')}</span>
          </Link>
          <Link to="/prime-list" className={isActive('/prime-list') ? 'active' : ''} onClick={closeMenu}>
            <span className="nav-icon">📋</span>
            <span>{t('nav.primeList')}</span>
          </Link>
          <Link to="/article" className={isActive('/article') ? 'active' : ''} onClick={closeMenu}>
            <span className="nav-icon">📚</span>
            <span>{t('nav.article')}</span>
          </Link>
        </div>

        <div className="language-switcher">
          <button
            onClick={() => setLanguage('fa')}
            className={language === 'fa' ? 'active' : ''}
            aria-label="فارسی"
          >
            FA
          </button>
          <button
            onClick={() => setLanguage('en')}
            className={language === 'en' ? 'active' : ''}
            aria-label="English"
          >
            EN
          </button>
        </div>
      </div>
    </nav>
    </>
  );
}
