import { useState } from 'react';
import { useI18n } from '../i18n/context';
import { gcd, lcm } from '../utils/math';
import './GcdLcm.css';

export function GcdLcm() {
  const { t } = useI18n();
  const [num1, setNum1] = useState<string>('');
  const [num2, setNum2] = useState<string>('');
  const [result, setResult] = useState<{ gcd: number | null; lcm: number | null }>({
    gcd: null,
    lcm: null
  });

  const handleCalculate = () => {
    const n1 = parseInt(num1);
    const n2 = parseInt(num2);

    if (isNaN(n1) || isNaN(n2) || n1 <= 0 || n2 <= 0) {
      alert('Please enter valid positive numbers');
      return;
    }

    setResult({
      gcd: gcd(n1, n2),
      lcm: lcm(n1, n2)
    });
  };

  return (
    <div className="gcd-lcm-page">
      <div className="page-container">
        <h1 className="page-title">{t('gcdLcm.title')}</h1>
        <p className="page-description">{t('gcdLcm.description')}</p>

        <div className="calculator-card">
          <div className="input-group">
            <label>{t('gcdLcm.number1')}</label>
            <input
              type="number"
              value={num1}
              onChange={(e) => setNum1(e.target.value)}
              placeholder={t('gcdLcm.placeholder1')}
              min="1"
            />
          </div>

          <div className="input-group">
            <label>{t('gcdLcm.number2')}</label>
            <input
              type="number"
              value={num2}
              onChange={(e) => setNum2(e.target.value)}
              placeholder={t('gcdLcm.placeholder2')}
              min="1"
            />
          </div>

          <button onClick={handleCalculate} className="calculate-btn">
            {t('gcdLcm.calculate')}
          </button>

          {(result.gcd !== null || result.lcm !== null) && (
            <div className="result-box">
              <div className="result-item">
                <span className="result-label">{t('gcdLcm.gcd')}:</span>
                <span className="result-value">{result.gcd}</span>
              </div>
              <div className="result-item">
                <span className="result-label">{t('gcdLcm.lcm')}:</span>
                <span className="result-value">{result.lcm}</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
