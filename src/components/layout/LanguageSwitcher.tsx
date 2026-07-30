import { useI18n } from '../../i18n/I18nProvider';
import type { Locale } from '../../i18n/types';

const options: { code: Locale; short: string }[] = [
  { code: 'ru', short: 'RU' },
  { code: 'kk', short: 'ҚАЗ' },
  { code: 'en', short: 'EN' },
];

export default function LanguageSwitcher({ onChange }: { onChange?: () => void }) {
  const { locale, content, setLocale } = useI18n();

  const choose = (nextLocale: Locale) => {
    setLocale(nextLocale);
    onChange?.();
  };

  return (
    <div className="language-switcher" role="group" aria-label={content.language.aria}>
      {options.map(({ code, short }) => (
        <button
          type="button"
          key={code}
          className={locale === code ? 'language-switcher__button--active' : ''}
          aria-pressed={locale === code}
          aria-label={content.language[code]}
          title={content.language[code]}
          onClick={() => choose(code)}
        >
          {short}
        </button>
      ))}
    </div>
  );
}
