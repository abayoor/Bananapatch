import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';
import { en } from './locales/en';
import { kk } from './locales/kk';
import { ru } from './locales/ru';
import type { Locale, SiteContent } from './types';

const STORAGE_KEY = 'bananapatch-language';
const locales: Record<Locale, SiteContent> = { ru, kk, en };

type I18nValue = {
  locale: Locale;
  content: SiteContent;
  setLocale: (locale: Locale) => void;
};

const I18nContext = createContext<I18nValue | null>(null);

function getInitialLocale(): Locale {
  if (typeof window === 'undefined') return 'ru';
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    return saved === 'kk' || saved === 'en' || saved === 'ru' ? saved : 'ru';
  } catch {
    return 'ru';
  }
}

function updateMeta(selector: string, content: string) {
  document.querySelector<HTMLMetaElement>(selector)?.setAttribute('content', content);
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(getInitialLocale);
  const content = locales[locale];

  const setLocale = (nextLocale: Locale) => {
    setLocaleState(nextLocale);
    try {
      window.localStorage.setItem(STORAGE_KEY, nextLocale);
    } catch {
      // The language still changes for the current session when storage is unavailable.
    }
  };

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
