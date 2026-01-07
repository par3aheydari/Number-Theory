import { Link } from 'react-router-dom';
import { useI18n } from '../i18n/context';
import './Home.css';

export function Home() {
  const { t } = useI18n();

  return (
    <div className="home">
      <div className="hero">
        <h1 className="hero-title">{t('home.title')}</h1>
        <p className="hero-subtitle">{t('home.subtitle')}</p>
        <p className="hero-description">{t('home.description')}</p>
        
        <div className="feature-cards">
          <Link to="/gcd-lcm" className="feature-card">
            <div className="card-icon">🔢</div>
            <h3>{t('nav.gcdLcm')}</h3>
            <p>{t('gcdLcm.description')}</p>
          </Link>
          
          <Link to="/prime-checker" className="feature-card">
            <div className="card-icon">✓</div>
            <h3>{t('nav.primeChecker')}</h3>
            <p>{t('primeChecker.description')}</p>
          </Link>
          
          <Link to="/prime-list" className="feature-card">
            <div className="card-icon">📋</div>
            <h3>{t('nav.primeList')}</h3>
            <p>{t('primeList.description')}</p>
          </Link>
          
          <Link to="/article" className="feature-card">
            <div className="card-icon">📚</div>
            <h3>{t('nav.article')}</h3>
            <p>{t('article.title')}</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
