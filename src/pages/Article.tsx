import { useI18n } from '../i18n/context';
import './Article.css';

export function Article() {
  const { t, language } = useI18n();
  const content = t('article.content');

  // Simple markdown-like rendering
  const renderContent = (text: string) => {
    const lines = text.split('\n');
    const elements: any[] = [];
    let currentParagraph: string[] = [];

    lines.forEach((line, idx) => {
      if (line.trim() === '') {
        if (currentParagraph.length > 0) {
          const paraText = currentParagraph.join(' ');
          elements.push(
            <p key={`p-${idx}`} className="article-paragraph" dangerouslySetInnerHTML={{ __html: paraText }} />
          );
          currentParagraph = [];
        }
        return;
      }

      if (line.startsWith('# ')) {
        if (currentParagraph.length > 0) {
          const paraText = currentParagraph.join(' ');
          elements.push(
            <p key={`p-${idx}`} className="article-paragraph" dangerouslySetInnerHTML={{ __html: paraText }} />
          );
          currentParagraph = [];
        }
        elements.push(<h1 key={`h1-${idx}`}>{line.substring(2)}</h1>);
        return;
      }

      if (line.startsWith('## ')) {
        if (currentParagraph.length > 0) {
          const paraText = currentParagraph.join(' ');
          elements.push(
            <p key={`p-${idx}`} className="article-paragraph" dangerouslySetInnerHTML={{ __html: paraText }} />
          );
          currentParagraph = [];
        }
        elements.push(<h2 key={`h2-${idx}`}>{line.substring(3)}</h2>);
        return;
      }

      if (line.startsWith('### ')) {
        if (currentParagraph.length > 0) {
          const paraText = currentParagraph.join(' ');
          elements.push(
            <p key={`p-${idx}`} className="article-paragraph" dangerouslySetInnerHTML={{ __html: paraText }} />
          );
          currentParagraph = [];
        }
        elements.push(<h3 key={`h3-${idx}`}>{line.substring(4)}</h3>);
        return;
      }

      if (line.startsWith('**') && line.endsWith('**')) {
        const text = line.substring(2, line.length - 2);
        currentParagraph.push(`<strong>${text}</strong>`);
        return;
      }

      currentParagraph.push(line);
    });

    if (currentParagraph.length > 0) {
      const paraText = currentParagraph.join(' ');
      elements.push(
        <p key="p-final" className="article-paragraph" dangerouslySetInnerHTML={{ __html: paraText }} />
      );
    }

    return elements;
  };

  return (
    <div className="article-page">
      <div className="article-container">
        <h1 className="article-title">{t('article.title')}</h1>
        <div className="article-content" dir={language === 'fa' ? 'rtl' : 'ltr'}>
          {renderContent(content)}
        </div>
      </div>
    </div>
  );
}
