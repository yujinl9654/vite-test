import { useTranslation } from 'react-i18next';
import i18n from '../i18n';

export default function Header() {
  const { t } = useTranslation();
  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
    <section className="absolute top-0 left-0 w-full h-20 flex justify-between bg-slate-400">
      <div>{t('startPage')}</div>
      <div>
        <button onClick={() => changeLanguage('ko')}>한국어</button>
        <button onClick={() => changeLanguage('en')}>English</button>
      </div>
    </section>
  );
}
