import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';
import { en } from './locales/en';
import { kk } from './locales/kk';
import { ru } from './locales/ru';
import type { Locale, SiteContent } from './types';

const locales: Record<Locale, SiteContent> = { ru, kk, en };

type I18nValue = {
  locale: Locale;
  content: SiteContent;
  setLocale: (locale: Locale) => void;
};

const I18nContext = createContext<I18nValue | null>(null);

function updateMeta(selector: string, content: string) {
  document.querySelector<HTMLMetaElement>(selector)?.setAttribute('content', content);
}

export function I18nProvider({ children }: { children: ReactNode }) {
  // Every visit starts in Russian — the site's primary audience — regardless
  // of what a visitor picked on a previous visit. Switching still works for
  // the rest of that session, it just doesn't persist across reloads.
  const [locale, setLocaleState] = useState<Locale>('ru');
  const content = locales[locale];

  const setLocale = (nextLocale: Locale) => setLocaleState(nextLocale);

  useEffect(() => {
    document.documentElement.lang = locale;
    document.title = content.meta.title;
    updateMeta('meta[name="description"]', content.meta.description);
    updateMeta('meta[property="og:title"]', content.meta.ogTitle);
    updateMeta('meta[property="og:description"]', content.meta.ogDescription);
  }, [content, locale]);

  const value = useMemo(() => ({ locale, content, setLocale }), [content, locale]);
  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const value = useContext(I18nContext);
  if (!value) throw new Error('useI18n must be used inside I18nProvider');
  return value;
}
