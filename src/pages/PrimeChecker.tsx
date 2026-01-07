import { useState } from 'react';
import { useI18n } from '../i18n/context';
import { isPrime, getPrimeFactors, generateRandomPrime, generateNextPrime } from '../utils/prime';
import './PrimeChecker.css';

export function PrimeChecker() {
  const { t } = useI18n();
  const [mode, setMode] = useState<'check' | 'generate'>('check');
  const [inputNumber, setInputNumber] = useState<string>('');
  const [numberLength, setNumberLength] = useState<number>(3);
  const [result, setResult] = useState<{
    number: number | null;
    isPrime: boolean | null;
    factors: number[];
  }>({
    number: null,
    isPrime: null,
    factors: []
  });
  const [checking, setChecking] = useState(false);

  const handleCheck = () => {
    const num = parseInt(inputNumber);
    if (isNaN(num) || num < 2) {
      alert('Please enter a valid number greater than 1');
      return;
    }

    setChecking(true);
    setTimeout(() => {
      const prime = isPrime(num);
      setResult({
        number: num,
        isPrime: prime,
        factors: prime ? [num] : getPrimeFactors(num)
      });
      setChecking(false);
    }, 100);
  };

  const handleGenerate = () => {
    setChecking(true);
    setTimeout(() => {
      const prime = generateRandomPrime(numberLength);
      setResult({
        number: prime,
        isPrime: true,
        factors: [prime]
      });
      setChecking(false);
    }, 200);
  };

  const handleGenerateNext = () => {
    const start = parseInt(inputNumber) || 2;
    setChecking(true);
    setTimeout(() => {
      const prime = generateNextPrime(start);
      setResult({
        number: prime,
        isPrime: true,
        factors: [prime]
      });
      setChecking(false);
    }, 200);
  };

  return (
    <div className="prime-checker-page">
      <div className="page-container">
        <h1 className="page-title">{t('primeChecker.title')}</h1>
        <p className="page-description">{t('primeChecker.description')}</p>

        <div className="mode-selector">
          <button
            onClick={() => setMode('check')}
            className={mode === 'check' ? 'active' : ''}
          >
            {t('primeChecker.checkMode')}
          </button>
          <button
            onClick={() => setMode('generate')}
            className={mode === 'generate' ? 'active' : ''}
          >
            {t('primeChecker.generateMode')}
          </button>
        </div>

        <div className="calculator-card">
          {mode === 'check' ? (
            <>
              <div className="input-group">
                <label>{t('primeChecker.enterNumber')}</label>
                <input
                  type="number"
                  value={inputNumber}
                  onChange={(e) => setInputNumber(e.target.value)}
                  placeholder={t('primeChecker.placeholder')}
                  min="2"
                />
              </div>
              <button onClick={handleCheck} className="calculate-btn" disabled={checking}>
                {checking ? t('primeChecker.checking') : t('primeChecker.check')}
              </button>
            </>
          ) : (
            <>
              <div className="input-group">
                <label>{t('primeChecker.numberLength')}</label>
                <div className="slider-container">
                  <input
                    type="range"
                    min="2"
                    max="10"
                    value={numberLength}
                    onChange={(e) => setNumberLength(parseInt(e.target.value))}
                    className="slider"
                  />
                  <span className="slider-value">{numberLength}</span>
                </div>
              </div>
              <div className="input-group">
                <label>{t('primeChecker.enterNumber')}</label>
                <input
                  type="number"
                  value={inputNumber}
                  onChange={(e) => setInputNumber(e.target.value)}
                  placeholder={t('primeChecker.placeholderStart')}
                  min="2"
                />
              </div>
              <div className="generate-buttons">
                <button onClick={handleGenerate} className="calculate-btn" disabled={checking}>
                  {checking ? t('primeChecker.checking') : t('primeChecker.generateRandom')}
                </button>
                {inputNumber && (
                  <button onClick={handleGenerateNext} className="calculate-btn secondary" disabled={checking}>
                    {checking ? t('primeChecker.checking') : t('primeChecker.generate')}
                  </button>
                )}
              </div>
            </>
          )}

          {result.number !== null && (
            <div className="result-box">
              <div className="result-main">
                <span className="result-number">{result.number.toLocaleString()}</span>
                <span className={`result-status ${result.isPrime ? 'prime' : 'not-prime'}`}>
                  {result.isPrime ? t('primeChecker.isPrime') : t('primeChecker.isNotPrime')}
                </span>
              </div>
              {result.factors.length > 0 && (
                <div className="factors-box">
                  <span className="factors-label">{t('primeChecker.factors')}:</span>
                  <div className="factors-list">
                    {result.factors.map((factor, idx) => (
                      <span key={idx} className="factor-badge">
                        {factor.toLocaleString()}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
