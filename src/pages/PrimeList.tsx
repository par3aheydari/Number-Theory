import { useState } from 'react';
import { useI18n } from '../i18n/context';
import { generatePrimesInRange } from '../utils/prime';
import './PrimeList.css';

export function PrimeList() {
  const { t } = useI18n();
  const [from, setFrom] = useState<string>('2');
  const [to, setTo] = useState<string>('100');
  const [primes, setPrimes] = useState<number[]>([]);
  const [loading, setLoading] = useState(false);

  const handleShowPrimes = () => {
    const fromNum = parseInt(from);
    const toNum = parseInt(to);

    if (isNaN(fromNum) || isNaN(toNum) || fromNum < 2 || toNum < fromNum) {
      alert('Please enter valid range (from >= 2, to >= from)');
      return;
    }

    if (toNum - fromNum > 100000) {
      alert('Range too large. Please keep it under 100,000 numbers.');
      return;
    }

    setLoading(true);
    setTimeout(() => {
      const result = generatePrimesInRange(fromNum, toNum);
      setPrimes(result);
      setLoading(false);
    }, 100);
  };

  return (
    <div className="prime-list-page">
      <div className="page-container">
        <h1 className="page-title">{t('primeList.title')}</h1>
        <p className="page-description">{t('primeList.description')}</p>

        <div className="calculator-card">
          <div className="range-inputs">
            <div className="input-group">
              <label>{t('primeList.from')}</label>
              <input
                type="number"
                value={from}
                onChange={(e) => setFrom(e.target.value)}
                placeholder="From"
                min="2"
              />
            </div>

            <div className="input-group">
              <label>{t('primeList.to')}</label>
              <input
                type="number"
                value={to}
                onChange={(e) => setTo(e.target.value)}
                placeholder="To"
                min="2"
              />
            </div>
          </div>

          <button onClick={handleShowPrimes} className="calculate-btn" disabled={loading}>
            {loading ? 'Loading...' : t('primeList.showPrimes')}
          </button>

          {primes.length > 0 && (
            <div className="result-box">
              <div className="primes-header">
                <span className="primes-count">
                  {t('primeList.found')} {primes.length} {t('primeList.primes')}
                </span>
              </div>
              <div className="primes-grid">
                {primes.map((prime, idx) => (
                  <span key={idx} className="prime-number">
                    {prime.toLocaleString()}
                  </span>
                ))}
              </div>
            </div>
          )}

          {primes.length === 0 && !loading && (
            <div className="no-primes">
              {t('primeList.noPrimes')}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
